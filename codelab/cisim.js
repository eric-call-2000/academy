/* cisim.js — a CI/CD pipeline simulator for CodeLab's cicd course.
   ------------------------------------------------------------------
   Composes the engines already loaded: shell.js runs steps, gitsim.js
   provides the repo and the push that triggers a run, dockersim.js
   provides `docker …` steps. cisim registers a small `gh` command and
   WRAPS shell's `git` so a successful `git push` fires every workflow
   in .github/workflows whose `on: push` matches the pushed branch.

   State lives on fsRoot.ci as plain JSON. Grade a pipeline by what a RUN
   did (the T helpers), never by regex on the YAML. The frozen contract
   and the full surface are documented in tools/test-cisim.js. */
(function (root) {
  var SH = (root.CODELAB && root.CODELAB.shell) ||
    (typeof module !== "undefined" && typeof require === "function" ? require("./shell.js") : null);
  function GIT() { return root.CODELAB && root.CODELAB.git; }
  function DOCK() { return root.CODELAB && root.CODELAB.docker; }
  var API = { strict: false };

  function ok(out) { return { out: out == null ? "" : String(out), err: "", code: 0 }; }
  function bad(err, code) { return { out: "", err: String(err), code: code == null ? 1 : code }; }
  function keys(o) { return o ? Object.keys(o) : []; }
  function copy(o) { return o == null ? o : JSON.parse(JSON.stringify(o)); }

  /* ======================= YAML (block + flow subset) ======================= */
  function parseFlow(s) {
    var pos = { i: 0 };
    function ws() { while (pos.i < s.length && /\s/.test(s[pos.i])) pos.i++; }
    function scalar(t) {
      t = t.trim();
      if (t === "true") return true;
      if (t === "false") return false;
      if (t === "null" || t === "~" || t === "") return null;
      if (/^-?\d+$/.test(t)) return Number(t);
      return t;
    }
    function qstr(q) { pos.i++; var start = pos.i; while (pos.i < s.length && s[pos.i] !== q) pos.i++; var r = s.slice(start, pos.i); pos.i++; return r; }
    function keyTok() { ws(); if (s[pos.i] === "'" || s[pos.i] === '"') return qstr(s[pos.i]); var start = pos.i; while (pos.i < s.length && s[pos.i] !== ":") pos.i++; return s.slice(start, pos.i).trim(); }
    function value() {
      ws();
      var c = s[pos.i];
      if (c === "{") return flowMap();
      if (c === "[") return flowSeq();
      if (c === "'" || c === '"') return qstr(c);
      var start = pos.i;
      while (pos.i < s.length && s[pos.i] !== "," && s[pos.i] !== "}" && s[pos.i] !== "]") pos.i++;
      return scalar(s.slice(start, pos.i));
    }
    function flowMap() { pos.i++; var o = {}; ws(); if (s[pos.i] === "}") { pos.i++; return o; } while (pos.i < s.length) { var k = keyTok(); ws(); if (s[pos.i] === ":") pos.i++; o[k] = value(); ws(); if (s[pos.i] === ",") { pos.i++; continue; } if (s[pos.i] === "}") { pos.i++; break; } break; } return o; }
    function flowSeq() { pos.i++; var a = []; ws(); if (s[pos.i] === "]") { pos.i++; return a; } while (pos.i < s.length) { a.push(value()); ws(); if (s[pos.i] === ",") { pos.i++; continue; } if (s[pos.i] === "]") { pos.i++; break; } break; } return a; }
    return value();
  }
  function parseValue(v) {
    v = v.trim();
    if (v[0] === "{" || v[0] === "[") return parseFlow(v);
    if ((v[0] === "'" || v[0] === '"') && v[v.length - 1] === v[0]) return v.slice(1, -1);
    if (v === "true") return true;
    if (v === "false") return false;
    if (v === "null" || v === "~") return null;
    if (/^-?\d+$/.test(v)) return Number(v);
    return v;
  }
  function parseYaml(text) {
    var lines = String(text).split("\n").filter(function (l) { return l.trim() !== "" && l.trim()[0] !== "#"; });
    var idx = { i: 0 };
    function indentOf(l) { return l.match(/^ */)[0].length; }
    function topColon(t) {
      var depth = 0, q = null;
      for (var i = 0; i < t.length; i++) { var c = t[i]; if (q) { if (c === q) q = null; continue; } if (c === "'" || c === '"') q = c; else if (c === "{" || c === "[") depth++; else if (c === "}" || c === "]") depth--; else if (c === ":" && depth === 0 && (i + 1 >= t.length || t[i + 1] === " ")) return i; }
      return -1;
    }
    function block(minIndent) {
      if (idx.i >= lines.length) return null;
      var first = lines[idx.i];
      if (indentOf(first) < minIndent) return null;
      var t = first.trim();
      if (t[0] === "-") return seq(indentOf(first));
      if (topColon(t) === -1) { idx.i++; return parseValue(t); }
      return map(indentOf(first));
    }
    function map(ind) {
      var obj = {};
      while (idx.i < lines.length) {
        var line = lines[idx.i], cind = indentOf(line), t = line.trim();
        if (cind < ind || t[0] === "-") break;
        if (cind > ind) { idx.i++; continue; }
        var colon = topColon(t);
        if (colon === -1) { idx.i++; continue; }
        var key = t.slice(0, colon).trim(), val = t.slice(colon + 1).trim();
        idx.i++;
        obj[key] = val === "" ? block(ind + 1) : parseValue(val);
      }
      return obj;
    }
    function seq(ind) {
      var arr = [];
      while (idx.i < lines.length) {
        var line = lines[idx.i], cind = indentOf(line), t = line.trim();
        if (cind < ind || t[0] !== "-") break;
        var col = line.indexOf("-") + 2, rest = line.slice(col);
        if (rest.trim() === "") { idx.i++; arr.push(block(ind + 1)); continue; }
        lines[idx.i] = new Array(col + 1).join(" ") + rest;
        arr.push(block(col));
      }
      return arr;
    }
    return block(0) || {};
  }

  /* ======================= expression evaluator (${{ }}) ==================== */
  function evalExpr(src, ctx) {
    src = String(src).trim();
    var m = src.match(/^\$\{\{([\s\S]*)\}\}$/);
    if (m) src = m[1].trim();
    var toks = [], re = /\s*(==|!=|&&|\|\||[()!,]|'[^']*'|"[^"]*"|[A-Za-z0-9_.$-]+)/g, mm;
    while ((mm = re.exec(src)) !== null) { if (mm[1] !== undefined && mm[1] !== "") toks.push(mm[1]); }
    var p = { i: 0 };
    function peek() { return toks[p.i]; }
    function next() { return toks[p.i++]; }
    function resolve(pathStr) {
      var parts = pathStr.split(".");
      var cur = ctx;
      for (var i = 0; i < parts.length; i++) { if (cur == null) return undefined; cur = cur[parts[i]]; }
      return cur;
    }
    function primary() {
      var t = peek();
      if (t === "(") { next(); var v = orExpr(); if (peek() === ")") next(); return v; }
      if (t === "!") { next(); return !truthy(primary()); }
      next();
      if (t[0] === "'" || t[0] === '"') return t.slice(1, -1);
      if (t === "true") return true;
      if (t === "false") return false;
      if (t === "null") return null;
      if (/^-?\d+$/.test(t)) return Number(t);
      if (peek() === "(") { next(); if (peek() === ")") next(); var fn = ctx[t]; return typeof fn === "function" ? fn() : undefined; }
      return resolve(t);
    }
    function eqExpr() { var l = primary(); while (peek() === "==" || peek() === "!=") { var op = next(); var r = primary(); l = op === "==" ? (l === r) : (l !== r); } return l; }
    function andExpr() { var l = eqExpr(); while (peek() === "&&") { next(); var r = eqExpr(); l = truthy(l) && truthy(r); } return l; }
    function orExpr() { var l = andExpr(); while (peek() === "||") { next(); var r = andExpr(); l = truthy(l) ? l : r; } return l; }
    function truthy(v) { return !(v === false || v == null || v === "" || v === 0 || v === "false"); }
    return orExpr();
  }
  function interpolate(str, ctx) {
    return String(str).replace(/\$\{\{([\s\S]*?)\}\}/g, function (_, e) {
      var v = evalExpr("${{" + e + "}}", ctx);
      return v == null ? "" : String(v);
    });
  }

  /* ======================= CI state ======================= */
  function ciState(fs) {
    var c = fs.ci = fs.ci || {};
    c.runs = c.runs || []; c.caches = c.caches || {}; c.deployments = c.deployments || {};
    c.pending = c.pending || {}; c.prs = c.prs || []; c.protection = c.protection || {};
    c.environments = c.environments || {}; c.secrets = c.secrets || {}; c.vars = c.vars || {};
    c.nextRun = c.nextRun || 1; c.nextPr = c.nextPr || 1;
    return c;
  }

  /* ======================= workspace ======================= */
  function repoFiles(fs, rootAbs) {
    var node = SH.nodeAt(fs, rootAbs), spec = {};
    if (!node || !node.d) return spec;
    SH.walk(node, "").forEach(function (e) {
      if (e.isDir) return;
      if (e.path === ".git" || e.path.indexOf(".git/") === 0) return;
      spec[rootAbs + "/" + e.path] = e.node.f;
    });
    return spec;
  }
  function workspace(fs, rootAbs) { return SH.createFS(repoFiles(fs, rootAbs)); }

  /* ======================= running a workflow ======================= */
  function toArray(v) { return v == null ? [] : (Array.isArray(v) ? v : [v]); }
  function globToRe(g) { return new RegExp("^" + String(g).replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$"); }
  function branchMatches(list, branch) { return list.some(function (g) { return globToRe(g).test(branch); }); }
  function eventMatches(on, event, branch) {
    if (on == null) return false;
    if (typeof on === "string") return on === event;
    if (Array.isArray(on)) return on.indexOf(event) !== -1;
    if (!(event in on)) return false;
    var spec = on[event];
    if (event === "push" || event === "pull_request") {
      if (spec == null || spec === "" || !spec.branches) return true;
      return branchMatches(toArray(spec.branches), branch);
    }
    return true;
  }

  function expandMatrix(job) {
    var strat = job.strategy;
    if (!strat || !strat.matrix) return [{ id: "", values: {} }];
    var mx = strat.matrix, dims = keys(mx).filter(function (k) { return k !== "include" && k !== "exclude"; });
    var combos = [{}];
    dims.forEach(function (d) {
      var next = [];
      combos.forEach(function (c) { toArray(mx[d]).forEach(function (v) { var n = {}; keys(c).forEach(function (k) { n[k] = c[k]; }); n[d] = v; next.push(n); }); });
      combos = next;
    });
    return combos.map(function (values) { return { id: dims.map(function (d) { return values[d]; }).join(", "), values: values }; });
  }

  function runWorkflow(fs, rootAbs, wf, event, ref, sha, dispatchName) {
    var c = ciState(fs);
    var branch = ref.indexOf("refs/heads/") === 0 ? ref.slice(11) : ref;
    var run = { id: c.nextRun++, event: event, ref: ref, sha: sha, name: wf.name || dispatchName || "workflow", status: "success", jobs: {}, artifacts: {}, cacheHits: [] };
    var github = { ref: ref, ref_name: branch, event_name: event, sha: sha, workflow: run.name };
    var jobsDef = wf.jobs || {};
    var order = topoSort(jobsDef);
    order.forEach(function (jobId) {
      var job = jobsDef[jobId];
      var needs = toArray(job.needs);
      expandMatrix(job).forEach(function (leg) {
        var key = leg.id ? jobId + " (" + leg.id + ")" : jobId;
        var needsCtx = {};
        var needsMet = needs.every(function (n) {
          var st = resultOf(run, n);
          needsCtx[n] = { result: st };
          return st === "success";
        });
        var jobCtx = { github: github, matrix: leg.values, env: Object.assign({}, wf.env, job.env), vars: c.vars, secrets: c.secrets, needs: needsCtx,
          success: function () { return needs.every(function (n) { return resultOf(run, n) === "success"; }); },
          failure: function () { return needs.some(function (n) { return resultOf(run, n) === "failure"; }); },
          always: function () { return true; } };
        if (!needsMet && !(job.if != null && evalExpr(job.if, jobCtx) && hasAlways(job.if))) {
          run.jobs[key] = { status: "skipped", steps: [], log: "" }; return;
        }
        if (job.if != null && !truthyVal(evalExpr(job.if, jobCtx))) {
          run.jobs[key] = { status: "skipped", steps: [], log: "" }; return;
        }
        run.jobs[key] = runJob(fs, c, rootAbs, run, job, jobCtx);
      });
    });
    var statuses = keys(run.jobs).map(function (k) { return run.jobs[k].status; });
    if (statuses.indexOf("failure") !== -1) run.status = "failure";
    else if (statuses.indexOf("waiting") !== -1) run.status = "waiting";
    else run.status = "success";
    c.runs.push(run);
    return run;
  }
  function hasAlways(ifExpr) { return /always\s*\(/.test(String(ifExpr)); }
  function truthyVal(v) { return !(v === false || v == null || v === "" || v === 0 || v === "false"); }
  function resultOf(run, jobId) {
    if (run.jobs[jobId]) return run.jobs[jobId].status;
    // matrix legs: a job "succeeds" only if all its legs did
    var legs = keys(run.jobs).filter(function (k) { return k === jobId || k.indexOf(jobId + " (") === 0; });
    if (!legs.length) return "skipped";
    var sts = legs.map(function (k) { return run.jobs[k].status; });
    return sts.indexOf("failure") !== -1 ? "failure" : (sts.indexOf("waiting") !== -1 ? "waiting" : "success");
  }
  function topoSort(jobsDef) {
    var ids = keys(jobsDef), out = [], seen = {};
    function visit(id, stack) {
      if (seen[id]) return;
      if (stack.indexOf(id) !== -1) { seen[id] = true; out.push(id); return; } // cycle: break
      toArray(jobsDef[id] && jobsDef[id].needs).forEach(function (n) { if (jobsDef[n]) visit(n, stack.concat(id)); });
      seen[id] = true; out.push(id);
    }
    ids.forEach(function (id) { visit(id, []); });
    return out;
  }

  function runJob(fs, c, rootAbs, run, job, jobCtx) {
    var ws = workspace(fs, rootAbs);
    var jobRes = { status: "success", steps: [], log: "" };
    var toSaveCache = [];
    var steps = toArray(job.steps);
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      var stepCtx = Object.assign({}, jobCtx, { env: Object.assign({}, jobCtx.env, step.env) });
      if (step.if != null && !truthyVal(evalExpr(step.if, stepCtx))) {
        jobRes.steps.push({ name: stepName(step), status: "skipped", exitCode: 0 }); continue;
      }
      var r = runStep(fs, c, rootAbs, run, ws, step, stepCtx, toSaveCache);
      jobRes.steps.push({ name: stepName(step), status: r.code === 0 ? "success" : "failure", exitCode: r.code });
      jobRes.log += r.log || "";
      if (r.waiting) { jobRes.status = "waiting"; return jobRes; }
      if (r.code !== 0 && !step["continue-on-error"]) { jobRes.status = "failure"; return jobRes; }
    }
    // save caches for a green job
    toSaveCache.forEach(function (k) { c.caches[k.key] = { path: k.path, files: k.files }; });
    return jobRes;
  }
  function stepName(step) { return step.name || (step.uses ? step.uses.split("@")[0] : (step.run ? String(step.run).split("\n")[0] : "step")); }

  function usesName(step) { return String(step.uses || "").split("@")[0].replace(/^actions\//, ""); }

  function runStep(fs, c, rootAbs, run, ws, step, ctx, toSaveCache) {
    if (step.uses) {
      var name = usesName(step), w = step.with || {};
      if (name === "checkout") return { code: 0, log: "" }; // workspace is already the repo tree
      if (name === "setup-node") return { code: 0, log: "" };
      if (name === "cache") {
        var key = interpolate(w.key, ctx);
        if (c.caches[key]) { run.cacheHits.push(key); restoreInto(ws, rootAbs, w.path, c.caches[key]); return { code: 0, log: "Cache restored from key: " + key + "\n" }; }
        toSaveCache.push({ key: key, path: w.path, files: pathFiles(ws, rootAbs, w.path) });
        return { code: 0, log: "Cache not found for key: " + key + "\n" };
      }
      if (name === "upload-artifact") {
        var files = pathFiles(ws, rootAbs, w.path);
        if (!keys(files).length) return { code: 1, log: "Error: no files found for path: " + w.path + "\n" };
        run.artifacts[interpolate(w.name, ctx)] = { files: files, path: w.path };
        return { code: 0, log: "" };
      }
      if (name === "download-artifact") {
        var an = interpolate(w.name, ctx), art = run.artifacts[an];
        if (!art) return { code: 1, log: "Error: Unable to find an artifact with the name: " + an + "\n" };
        restoreInto(ws, rootAbs, w.path || art.path, art);
        return { code: 0, log: "" };
      }
      if (name === "deploy" || /deploy/.test(name)) {
        var envName = interpolate(w.environment || (typeof ctx.env === "object" ? "" : ""), ctx) || envOfJob(step, ctx);
        return recordDeploy(c, envName, interpolate(w.ref || ctx.github.sha, ctx));
      }
      return { code: 0, log: "" }; // unknown action: no-op success
    }
    if (step.run != null) {
      var cmd = interpolate(step.run, ctx);
      var env = {}; keys(ctx.env || {}).forEach(function (k) { env[k] = ctx.env[k]; });
      var res = SH.run(ws, cmd, { cwd: rootAbs, home: rootAbs, env: env });
      var out = res.transcript.map(function (t) { return t.out + t.err; }).join("");
      var code = res.transcript.length ? res.transcript[res.transcript.length - 1].code : 0;
      return { code: code, log: maskSecrets(out, c.secrets) };
    }
    return { code: 0, log: "" };
  }
  function envOfJob() { return ""; }

  function maskSecrets(text, secrets) {
    var out = String(text);
    keys(secrets).forEach(function (k) { var v = String(secrets[k]); if (v) out = out.split(v).join("***"); });
    return out;
  }
  function pathFiles(ws, rootAbs, p) {
    var abs = SH.resolve(rootAbs, rootAbs, p), node = SH.nodeAt(ws, abs), out = {};
    if (!node) return out;
    if (node.f !== undefined) { out[p] = node.f; return out; }
    SH.walk(node, "").forEach(function (e) { if (!e.isDir) out[p + "/" + e.path] = e.node.f; });
    return out;
  }
  function restoreInto(ws, rootAbs, p, art) {
    var files = art.files || {};
    keys(files).forEach(function (rel) {
      var abs = SH.resolve(rootAbs, rootAbs, rel);
      writeFileAbs(ws, abs, files[rel]);
    });
  }
  function writeFileAbs(fs, abs, content) {
    var parts = abs.split("/").filter(Boolean), node = fs;
    for (var i = 0; i < parts.length - 1; i++) { if (!node.d[parts[i]] || !node.d[parts[i]].d) node.d[parts[i]] = SH.dir(); node = node.d[parts[i]]; }
    node.d[parts[parts.length - 1]] = SH.file(content);
  }

  function envOfJobField(job) { return job && job.environment ? (typeof job.environment === "object" ? job.environment.name : job.environment) : null; }
  function recordDeploy(c, envName, ref) {
    if (!envName) return { code: 0, log: "" };
    var prot = c.environments[envName];
    var from = c.deployments[envName] ? c.deployments[envName].ref : null;
    if (prot && prot.requiredReviewers) {
      c.pending[envName] = { ref: ref, from: from, at: nowStamp() };
      return { code: 0, log: "Waiting for approval of environment " + envName + "\n", waiting: true };
    }
    c.deployments[envName] = { ref: ref, from: from, at: nowStamp() };
    return { code: 0, log: "Deployed to " + envName + "\n" };
  }
  var STAMP = 0;
  function nowStamp() { return ++STAMP; }

  /* ======================= trigger from git push ======================= */
  function firePush(fs, cwd) {
    var g = GIT() && GIT().findRepo(fs, cwd);
    if (!g || !g.root) return "";
    var repo = g.repo, ref = repo.head && repo.head.ref;
    if (!ref || ref.indexOf("refs/heads/") !== 0) return "";
    var branch = ref.slice(11), sha = GIT().resolveRev(repo, "HEAD"), summary = "";
    eachWorkflow(fs, g.root, function (wf) { if (eventMatches(wf.on, "push", branch)) summary += summarize(runWorkflow(fs, g.root, wf, "push", ref, sha)); });
    return summary;
  }
  function summarize(run) {
    var icon = { success: "✓", failure: "✗", skipped: "-", cancelled: "-", waiting: "⏸" };
    var head = run.status === "success" ? "passed" : (run.status === "waiting" ? "waiting for approval" : "FAILED");
    var s = "\n▸ " + run.name + " · push to " + (run.ref.indexOf("refs/heads/") === 0 ? run.ref.slice(11) : run.ref) + " — " + head + "\n";
    keys(run.jobs).forEach(function (k) { var j = run.jobs[k]; s += "  " + (icon[j.status] || "?") + " " + k + (j.status === "skipped" ? " (skipped)" : "") + "\n"; });
    return s;
  }
  function eachWorkflow(fs, rootAbs, fn) {
    var dir = SH.nodeAt(fs, rootAbs + "/.github/workflows");
    if (!dir || !dir.d) return;
    keys(dir.d).sort().forEach(function (fname) {
      if (!/\.ya?ml$/.test(fname)) return;
      var node = dir.d[fname];
      if (!node || node.f === undefined) return;
      var wf; try { wf = parseYaml(node.f); } catch (e) { if (API.strict) throw e; return; }
      fn(wf, fname);
    });
  }

  /* ======================= gh command ======================= */
  function gh(ctx, args) {
    var c = ciState(ctx.fs), sub = args[0];
    if (sub === "workflow" && args[1] === "run") {
      var file = args[2], g = GIT() && GIT().findRepo(ctx.fs, ctx.cwd);
      if (!g || !g.root) return bad("gh: not a git repository\n");
      var ref = g.repo.head.ref, branch = ref.slice(11), sha = GIT().resolveRev(g.repo, "HEAD"), fired = false;
      eachWorkflow(ctx.fs, g.root, function (wf, fname) { if ((!file || fname === file) && (wf.on && (wf.on.workflow_dispatch !== undefined || wf.on === "workflow_dispatch"))) { runWorkflow(ctx.fs, g.root, wf, "workflow_dispatch", ref, sha, fname); fired = true; } });
      return fired ? ok("") : bad("gh: no workflow_dispatch workflow to run\n");
    }
    if (sub === "pr" && args[1] === "create") {
      var base = flag(args, "-B") || flag(args, "--base") || "main";
      var head = flag(args, "-H") || flag(args, "--head") || currentBranch(ctx);
      var pr = { number: c.nextPr++, head: head, base: base, title: flag(args, "--title") || head, merged: false };
      c.prs.push(pr);
      return ok("https://github.com/acme/shop/pull/" + pr.number + "\n");
    }
    if (sub === "pr" && args[1] === "merge") {
      var target = args[2] && args[2][0] !== "-" ? args[2] : currentBranch(ctx);
      var pr = c.prs.filter(function (p) { return !p.merged && (p.head === target || String(p.number) === String(target)); }).pop();
      if (!pr) return bad("no pull requests found for " + target + "\n");
      var required = (c.protection[pr.base] && c.protection[pr.base].requiredChecks) || [];
      var runForHead = c.runs.filter(function (r) { return r.ref === "refs/heads/" + pr.head; }).pop();
      var missing = required.filter(function (chk) { return !runForHead || resultOf(runForHead, chk) !== "success"; });
      if (missing.length) return bad("required checks have not passed: " + missing.join(", ") + "\n");
      pr.merged = true;
      return ok("Merged pull request #" + pr.number + "\n");
    }
    if (sub === "deployment" && args[1] === "approve") {
      var envName = args[2];
      if (!c.pending[envName]) return bad("no deployment awaiting approval for " + envName + "\n");
      c.deployments[envName] = c.pending[envName]; delete c.pending[envName];
      return ok("Approved deployment to " + envName + "\n");
    }
    if (sub === "run" && (args[1] === "list" || args[1] === "view")) {
      return ok(c.runs.map(function (r) { return r.status + "\t" + r.name + "\t" + r.event + "\t" + r.ref; }).join("\n") + "\n");
    }
    return bad("unknown command: gh " + args.join(" ") + "\n", 2);
  }
  function flag(args, f) { var i = args.indexOf(f); return i !== -1 ? args[i + 1] : null; }
  function currentBranch(ctx) { var g = GIT() && GIT().findRepo(ctx.fs, ctx.cwd); return g && g.repo.head.ref ? g.repo.head.ref.slice(11) : "main"; }

  /* ======================= wiring ======================= */
  if (SH && SH.COMMANDS) {
    var baseGit = SH.COMMANDS.git;
    SH.COMMANDS.git = function (ctx, args, stdin) {
      var r = baseGit(ctx, args, stdin);
      if (r.code === 0 && args[0] === "push") {
        try { var sum = firePush(ctx.fs, ctx.cwd); if (sum) r = { out: (r.out || "") + sum, err: r.err, code: r.code }; } catch (e) { if (API.strict) throw e; }
      }
      return r;
    };
    SH.COMMANDS.gh = gh;
    var baseNpm = SH.COMMANDS.npm;
    if (baseNpm) SH.COMMANDS.npm = function (ctx, args, stdin) {
      if (args[0] === "test") return baseNpm(ctx, ["run", "test"].concat(args.slice(1)), stdin);
      if (args[0] === "start") return baseNpm(ctx, ["run", "start"].concat(args.slice(1)), stdin);
      return baseNpm(ctx, args, stdin);
    };
  }

  /* ======================= T helpers ======================= */
  function testApi(fs) {
    var c = ciState(fs);
    function at(k) { return k == null ? c.runs[c.runs.length - 1] : c.runs[k - 1]; }
    var api = {
      runs: function () { return c.runs.map(function (r) { return { id: r.id, event: r.event, ref: r.ref, status: r.status }; }); },
      run: function (k) { var r = at(k); return r ? { event: r.event, ref: r.ref, status: r.status, jobs: jobsView(r), artifacts: keys(r.artifacts), cacheHits: r.cacheHits.slice() } : null; },
      lastRun: function () { return api.run(); },
      job: function (k, id) { var r = api.run(k); return r ? r.jobs[id] : null; },
      stepLog: function (k, id, name) { var r = at(k); if (!r || !r.jobs[id]) return null; if (name == null) return r.jobs[id].log; var s = r.jobs[id].steps.filter(function (x) { return x.name === name; })[0]; return s ? r.jobs[id].log : null; },
      artifact: function (name) { var r = at(); var a = r && r.artifacts[name]; return a ? { present: true, files: a.files } : { present: false }; },
      cacheHit: function (key) { var r = at(); return !!(r && r.cacheHits.indexOf(key) !== -1); },
      deployed: function (env) { return c.deployments[env] ? { ref: c.deployments[env].ref, from: c.deployments[env].from, at: c.deployments[env].at } : null; },
      merged: function (head) { return c.prs.some(function (p) { return p.head === head && p.merged; }); },
      checks: function (branch) { return c.protection[branch] || { requiredChecks: [] }; },
      prs: function () { return c.prs.map(function (p) { return { number: p.number, head: p.head, base: p.base, merged: p.merged }; }); }
    };
    return api;
  }
  function jobsView(run) {
    var out = {};
    keys(run.jobs).forEach(function (k) { var j = run.jobs[k]; out[k] = { status: j.status, steps: j.steps.map(function (s) { return { name: s.name, status: s.status, exitCode: s.exitCode }; }), logs: j.log }; });
    return out;
  }
  function snapshot(fs) {
    var d = DOCK() && DOCK().snapshot ? DOCK().snapshot(fs) : (GIT() && GIT().snapshot ? GIT().snapshot(fs) : SH.cloneNode(fs));
    if (fs.ci) d.ci = copy(fs.ci);
    return d;
  }
  function extendT(T, fs, before) {
    var api = testApi(fs);
    keys(api).forEach(function (k) { T[k] = api[k]; });
    T.ci = api;
    if (before) { var b = testApi(before); if (T.before) keys(b).forEach(function (k) { if (T.before[k] === undefined) T.before[k] = b[k]; }); else T.before = b; }
    if (!T.said) T.said = function (s) { return (T.out() + T.err()).indexOf(s) !== -1; };
    return T;
  }

  API.parseYaml = parseYaml; API.evalExpr = evalExpr; API.interpolate = interpolate;
  API.testApi = testApi; API.extendT = extendT; API.snapshot = snapshot; API.gh = gh;
  root.CODELAB = root.CODELAB || {};
  root.CODELAB.ci = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
