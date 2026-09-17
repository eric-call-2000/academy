/* ============================================================
   CodeLab — a CI server you can actually push to
   ------------------------------------------------------------
   GitHub Actions runs on GitHub's machines. There is no
   browser-embeddable runner, and the catalog's rules (offline
   PWA, no build step, every lesson re-run in Chromium on every
   build) rule out anything heavier. So this is the same answer
   gitsim.js and dockersim.js gave: a simulator that enforces the
   RULES exactly and fakes only the payload.

   WHAT IS REAL, because it is what a junior is screened on:
     - a push to a matching branch starts a run; one to a
       non-matching branch does not
     - EVERY JOB STARTS ON A FRESH MACHINE. This is the rule the
       whole course hangs off: it is why actions/checkout exists,
       why the cache exists, and why artifacts exist.
     - jobs run in parallel unless `needs` orders them, and a
       failed dependency skips its dependents
     - a step's non-zero exit fails the job and the steps after
       it never run
     - a cache is keyed and restorable and is NOT a way to move
       data between jobs; an artifact is
     - a secret is masked everywhere it would appear in a log
     - a required status check blocks the merge — CI is a gate,
       not a report

   WHAT IS FAKED: the payload. What `npm ci` downloads, how long
   a suite takes, what a build produces. Same rule as Docker:
   fake payloads, never rules.

   HONEST EDGES: a checkout materialises the repository's working
   tree as it stood when the run started, not an arbitrary commit;
   nothing runs concurrently, so "parallel" jobs are executed in
   order and merely REPORT as parallel; and the only actions that
   exist are the handful in ACTIONS below — anything else is an
   honest "action not found".
   ============================================================ */
(function (root) {
  "use strict";

  var SH = root.CODELAB && root.CODELAB.shell;
  var GIT = root.CODELAB && root.CODELAB.git;
  var DOCKER = root.CODELAB && root.CODELAB.docker;

  function ok(out) { return { out: out == null ? "" : String(out), err: "", code: 0 }; }
  function bad(err, code) { return { out: "", err: String(err), code: code == null ? 1 : code }; }
  function keys(o) { return Object.keys(o || {}); }
  function isObj(v) { return v && typeof v === "object" && !Array.isArray(v); }
  /* dockersim's YAML subset has no flow sequences, and `branches: [main]` is
     the form every real workflow file is written in — so a scalar that looks
     like an inline list is expanded here, rather than making the course teach
     a block-list syntax nobody actually types for this. */
  function asList(v) {
    if (v == null) return [];
    if (Array.isArray(v)) return v;
    if (typeof v === "string") {
      var s = v.trim();
      if (s.charAt(0) === "[" && s.charAt(s.length - 1) === "]") {
        return s.slice(1, -1).split(",")
          .map(function (x) { return x.trim().replace(/^['"]|['"]$/g, ""); })
          .filter(function (x) { return x !== ""; });
      }
    }
    return [v];
  }

  /* The workflow parser is dockersim's YAML subset — maps, lists, scalars and
     quoted strings, which is the whole of a workflow file minus anchors.
     Shipping a second one would be two things to keep honest instead of one. */
  function parseYaml(text) {
    if (!DOCKER || !DOCKER.parseYaml) throw new Error("cisim needs dockersim's YAML parser");
    return DOCKER.parseYaml(text);
  }

  /* ---------- state ----------
     All of it is plain JSON hanging off the filesystem root, so a deep copy of
     the tree is a deep copy of the CI server — which is what gives lessons
     T.before for nothing. */
  function ci(fsRoot) {
    if (!fsRoot.ci) {
      fsRoot.ci = {
        runs: [], nextRun: 1, nextJobId: 1,
        artifacts: {},        /* runNumber -> { name -> { files } } */
        caches: {},           /* key -> { files } */
        secrets: {},          /* name -> value */
        protection: {},       /* branch -> { checks: [name] } */
        log: []
      };
    }
    return fsRoot.ci;
  }

  /* ---------- reading the workflows ----------
     A workflow lives in .github/workflows/ and nowhere else; a file put
     anywhere else is simply never read, which is a mistake worth making once. */
  function workflowDir(fsRoot, repoPath) { return repoPath + "/.github/workflows"; }

  function readWorkflows(fsRoot, repoPath) {
    var dir = SH.nodeAt(fsRoot, workflowDir(fsRoot, repoPath));
    if (!dir || !dir.d) return [];
    var out = [];
    keys(dir.d).sort().forEach(function (name) {
      if (!/\.ya?ml$/.test(name)) return;
      var node = dir.d[name];
      if (!node || node.f === undefined) return;
      var wf = { file: name, path: workflowDir(fsRoot, repoPath) + "/" + name, text: node.f };
      try { wf.doc = parseYaml(node.f); }
      catch (e) { wf.error = "workflow is not valid YAML: " + e.message; }
      if (wf.doc) {
        var problem = validateWorkflow(wf.doc);
        if (problem) wf.error = problem;
      }
      out.push(wf);
    });
    return out;
  }

  /* The errors a broken workflow file produces are a lesson, so they say what
     is actually wrong rather than failing to load in silence. */
  function validateWorkflow(doc) {
    if (!isObj(doc)) return "workflow must be a mapping";
    /* YAML says the bare word `on` is the boolean true — the single most
       confusing thing about hand-written workflow files. */
    var on = doc.on;
    if (on === undefined && doc["true"] !== undefined) on = doc["true"];
    if (on === undefined) return "required key .on was not provided";
    if (!isObj(doc.jobs) || !keys(doc.jobs).length) return "required key .jobs was not provided";
    var problem = null;
    keys(doc.jobs).forEach(function (id) {
      if (problem) return;
      var job = doc.jobs[id];
      if (!isObj(job)) { problem = "job " + id + " must be a mapping"; return; }
      if (!job["runs-on"]) { problem = "job " + id + ": required key .runs-on was not provided"; return; }
      if (!Array.isArray(job.steps) || !job.steps.length) { problem = "job " + id + ": required key .steps was not provided"; return; }
      asList(job.needs).forEach(function (n) {
        if (!doc.jobs[n]) problem = "job " + id + ": needs unknown job " + n;
      });
      job.steps.forEach(function (s, i) {
        if (problem) return;
        if (!isObj(s)) { problem = "job " + id + " step " + (i + 1) + " must be a mapping"; return; }
        if (s.uses === undefined && s.run === undefined)
          problem = "job " + id + " step " + (i + 1) + ": every step must have either uses or run";
      });
    });
    return problem;
  }

  function onOf(doc) {
    var on = doc.on;
    if (on === undefined && doc["true"] !== undefined) on = doc["true"];
    return on;
  }

  /* ---------- does this event start this workflow? ---------- */
  /* Scanned in one pass rather than through a placeholder substitution: the
     placeholder used to be a NUL byte, which made this a "binary" file to
     grep and every other tool that reads the repository. `**` crosses
     directory separators, a single `*` does not. */
  function matchesGlob(pattern, value) {
    var p = String(pattern), rx = "^", i = 0;
    while (i < p.length) {
      var c = p.charAt(i);
      if (c === "*" && p.charAt(i + 1) === "*") { rx += ".*"; i += 2; }
      else if (c === "*") { rx += "[^/]*"; i++; }
      else if (c === "?") { rx += "[^/]"; i++; }
      else { rx += c.replace(/[.+^${}()|[\]\\]/g, "\\$&"); i++; }
    }
    return new RegExp(rx + "$").test(String(value));
  }

  function triggerMatches(on, event, info) {
    if (on === true || on === "true") return event === "push";
    if (typeof on === "string") return on === event;
    if (Array.isArray(on)) return on.indexOf(event) !== -1;
    if (!isObj(on)) return false;
    if (!(event in on)) return false;
    var spec = on[event];
    if (!isObj(spec)) return true;
    if (spec.branches) {
      var bs = asList(spec.branches);
      if (!bs.some(function (b) { return matchesGlob(b, info.branch); })) return false;
    }
    if (spec["branches-ignore"]) {
      var bi = asList(spec["branches-ignore"]);
      if (bi.some(function (b) { return matchesGlob(b, info.branch); })) return false;
    }
    if (spec.paths) {
      var ps = asList(spec.paths), changed = info.paths || [];
      if (!changed.some(function (f) { return ps.some(function (p) { return matchesGlob(p, f); }); })) return false;
    }
    if (spec["paths-ignore"]) {
      var pi = asList(spec["paths-ignore"]), ch = info.paths || [];
      if (ch.length && ch.every(function (f) { return pi.some(function (p) { return matchesGlob(p, f); }); })) return false;
    }
    return true;
  }

  /* ---------- expression evaluation ----------
     ${{ … }} over a tiny context. Enough for secrets, matrix values, step
     outputs and the handful of status functions a pipeline actually branches
     on — and deliberately not a general expression language. */
  function evalExpr(src, ctx) {
    var s = String(src).trim();
    if (s === "success()") return ctx.__status !== "failure";
    if (s === "failure()") return ctx.__status === "failure";
    if (s === "always()") return true;
    if (s === "cancelled()") return false;
    var m = s.match(/^([A-Za-z_][\w.-]*)\s*==\s*(.+)$/);
    if (m) return String(lookup(m[1], ctx)) === String(m[2].replace(/^['"]|['"]$/g, ""));
    m = s.match(/^([A-Za-z_][\w.-]*)\s*!=\s*(.+)$/);
    if (m) return String(lookup(m[1], ctx)) !== String(m[2].replace(/^['"]|['"]$/g, ""));
    var v = lookup(s, ctx);
    if (v !== undefined) return v;
    /* A dotted path into a context that exists but has no such key is an
       EMPTY value, not the text of the expression — which is why a typo'd
       secret name silently becomes nothing rather than announcing itself. */
    if (/^(secrets|matrix|github|runner|steps|env|inputs)\b/.test(s)) return "";
    return s;
  }

  function lookup(path, ctx) {
    var parts = String(path).split("."), cur = ctx;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== "object") return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function interpolate(text, ctx) {
    if (typeof text !== "string") return text;
    return text.replace(/\$\{\{([^}]*)\}\}/g, function (_, inner) {
      var v = evalExpr(inner, ctx);
      return v === undefined || v === null ? "" : String(v);
    });
  }

  /* ---------- the actions ----------
     Each is a declared behaviour, not real code. The set is deliberately tiny
     and anything outside it fails honestly rather than quietly succeeding. */
  var ACTIONS = {
    "actions/checkout": function (step, job, run, env) {
      /* The machine started EMPTY. This is the step that puts the repository
         on it, and leaving it out is the first mistake the course makes you
         make on purpose. */
      var src = SH.nodeAt(run.repoFs, run.repoPath);
      if (!src || !src.d) return { out: "", err: "checkout: repository not found\n", code: 1 };
      var dest = SH.nodeAt(job.fs, job.workdir);
      keys(src.d).forEach(function (name) {
        if (name === ".git") return;   /* the metadata, not the working tree */
        dest.d[name] = SH.cloneNode(src.d[name]);
      });
      job.checkedOut = true;
      return ok("Syncing repository: " + run.repoName + "\nChecked out " + run.branch + " at " + run.sha.slice(0, 7) + "\n");
    },

    "actions/setup-node": function (step, job, run, env) {
      var v = (step.with && (step.with["node-version"] || step.with.nodeVersion)) || "20";
      job.env.NODE_VERSION = String(v);
      return ok("Setup node version " + v + "\n");
    },

    "actions/cache": function (step, job, run, env) {
      /* A cache is restorable and keyed. It is NOT a way to move data between
         jobs — it survives BETWEEN RUNS, and within one run a later job may
         well restore a stale entry or none at all. The course grades that. */
      var store = ci(run.fsRoot).caches;
      var key = String(interpolate((step.with && step.with.key) || "", job.ctx));
      var paths = String((step.with && step.with.path) || "").split("\n").map(function (s) { return s.trim(); }).filter(Boolean);
      var hit = store[key];
      if (!hit) {
        var restoreKeys = String((step.with && step.with["restore-keys"]) || "").split("\n").map(function (s) { return s.trim(); }).filter(Boolean);
        for (var i = 0; i < restoreKeys.length && !hit; i++) {
          var pref = restoreKeys[i];
          var k = keys(store).filter(function (x) { return x.indexOf(pref) === 0; }).sort().pop();
          if (k) hit = store[k];
        }
      }
      job.cacheSaves.push({ key: key, paths: paths });
      if (hit) {
        hit.files.forEach(function (f) { writeInto(job.fs, job.workdir + "/" + f.path, f.text); });
        setOutput(job, step, "cache-hit", "true");
        return ok("Cache restored from key: " + key + "\n");
      }
      setOutput(job, step, "cache-hit", "false");
      return ok("Cache not found for input keys: " + key + "\n");
    },

    "actions/upload-artifact": function (step, job, run, env) {
      /* An artifact is how you move a file to ANOTHER JOB in the same run. */
      var name = String((step.with && step.with.name) || "artifact");
      var p = String((step.with && step.with.path) || "").trim();
      if (!p) return { out: "", err: "upload-artifact: input required and not supplied: path\n", code: 1 };
      var files = collect(job.fs, job.workdir, p, true);
      if (!files.length)
        return { out: "", err: "No files were found with the provided path: " + p + "\n", code: 1 };
      var store = ci(run.fsRoot).artifacts;
      store[run.number] = store[run.number] || {};
      store[run.number][name] = { files: files };
      return ok("Uploaded artifact '" + name + "' (" + files.length + " file" + (files.length === 1 ? "" : "s") + ")\n");
    },

    "actions/download-artifact": function (step, job, run, env) {
      var name = String((step.with && step.with.name) || "artifact");
      var store = (ci(run.fsRoot).artifacts[run.number] || {});
      var art = store[name];
      if (!art)
        return { out: "", err: "Unable to find an artifact with the name: " + name + "\n", code: 1 };
      var into = (step.with && step.with.path) ? job.workdir + "/" + step.with.path : job.workdir;
      art.files.forEach(function (f) { writeInto(job.fs, into + "/" + f.path, f.text); });
      return ok("Artifact '" + name + "' downloaded (" + art.files.length + " file" + (art.files.length === 1 ? "" : "s") + ")\n");
    }
  };

  function setOutput(job, step, name, value) {
    if (!step.id) return;
    job.ctx.steps = job.ctx.steps || {};
    job.ctx.steps[step.id] = job.ctx.steps[step.id] || { outputs: {} };
    job.ctx.steps[step.id].outputs[name] = value;
  }

  /* Gather files under a path for an artifact or a cache. A directory takes
     everything beneath it; a single file takes itself. */
  /* Artifacts and caches disagree about paths, and the difference is real:
     `upload-artifact` with `path: dist` uploads the CONTENTS of dist, so a
     later download hands you app.js at the top — while a cache has to restore
     node_modules back to node_modules or the install it saved is useless.
     `stripDir` is which of the two is being collected. */
  function collect(fs, workdir, p, stripDir) {
    var abs = SH.resolve(workdir, workdir, p);
    var node = SH.nodeAt(fs, abs);
    if (!node) return [];
    var base = p.replace(/^\.\//, "").replace(/\/$/, "");
    if (node.f !== undefined) return [{ path: base.split("/").pop(), text: node.f }];
    var out = [];
    SH.walk(node, "").forEach(function (e) {
      if (e.isDir) return;
      out.push({ path: (stripDir ? e.path.replace(/^\//, "") : base + e.path), text: e.node.f });
    });
    return out;
  }

  function writeInto(fs, abs, text) {
    var parts = abs.split("/").filter(Boolean), node = fs;
    for (var i = 0; i < parts.length - 1; i++) {
      if (!node.d[parts[i]] || !node.d[parts[i]].d) node.d[parts[i]] = SH.dir();
      node = node.d[parts[i]];
    }
    node.d[parts[parts.length - 1]] = SH.file(text);
  }

  /* ---------- masking ----------
     A secret is replaced wherever it would otherwise appear, which is what
     makes "just echo it to debug" not work. */
  function mask(text, secrets) {
    var out = String(text);
    keys(secrets).forEach(function (name) {
      var v = secrets[name];
      if (v && String(v).length >= 3) out = out.split(String(v)).join("***");
    });
    return out;
  }

  /* ---------- running one job ----------
     The fresh machine is created here, and it is created EMPTY. Everything a
     job has, some step put there. */
  function runJob(run, jobId, jobDef, matrixValues) {
    var conf = ci(run.fsRoot);
    var workdir = "/home/runner/work/" + run.repoName;
    var job = {
      id: jobId, name: jobDef.name || jobId,
      fs: SH.createFS({}), workdir: workdir,
      env: {}, steps: [], cacheSaves: [], checkedOut: false,
      status: "success", conclusion: "success"
    };
    SH.run(job.fs, "mkdir -p " + workdir, { cwd: "/", home: "/home/runner" });
    job.ctx = {
      secrets: conf.secrets,
      matrix: matrixValues || {},
      github: { ref: "refs/heads/" + run.branch, ref_name: run.branch, sha: run.sha, event_name: run.event, repository: run.repoName },
      runner: { os: "Linux" },
      steps: {},
      __status: "success"
    };

    var wfEnv = {}, jobEnv = {};
    keys(run.doc.env || {}).forEach(function (k) { wfEnv[k] = String(interpolate(run.doc.env[k], job.ctx)); });
    keys(jobDef.env || {}).forEach(function (k) { jobEnv[k] = String(interpolate(jobDef.env[k], job.ctx)); });

    for (var i = 0; i < jobDef.steps.length; i++) {
      var step = jobDef.steps[i];
      var record = { name: stepName(step, i), conclusion: "success", out: "" };

      /* A failed step stops the job — later steps do not run unless they ask
         to with `if: always()` or `if: failure()`. */
      if (job.status === "failure") {
        job.ctx.__status = "failure";
        if (!step.if || !truthy(evalExpr(String(step.if).replace(/^\$\{\{|\}\}$/g, ""), job.ctx))) {
          record.conclusion = "skipped";
          job.steps.push(record);
          continue;
        }
      } else if (step.if && !truthy(evalExpr(String(step.if).replace(/^\$\{\{|\}\}$/g, ""), job.ctx))) {
        record.conclusion = "skipped";
        job.steps.push(record);
        continue;
      }

      var stepEnv = {};
      keys(wfEnv).forEach(function (k) { stepEnv[k] = wfEnv[k]; });
      keys(jobEnv).forEach(function (k) { stepEnv[k] = jobEnv[k]; });
      keys(job.env).forEach(function (k) { stepEnv[k] = job.env[k]; });
      keys(step.env || {}).forEach(function (k) { stepEnv[k] = String(interpolate(step.env[k], job.ctx)); });

      var res;
      if (step.uses !== undefined) {
        var uses = String(step.uses).split("@")[0];
        var fn = ACTIONS[uses];
        var withVals = {};
        keys(step.with || {}).forEach(function (k) { withVals[k] = interpolate(step.with[k], job.ctx); });
        if (!fn) {
          res = { out: "", err: "Unable to resolve action `" + step.uses + "`, repository not found\n", code: 1 };
        } else {
          res = fn({ uses: step.uses, with: withVals, id: step.id }, job, run, stepEnv) || ok("");
        }
      } else {
        var script = String(interpolate(step.run, job.ctx));
        /* Each step gets a FRESH environment, which is what Actions does —
           an export in one step is gone by the next unless it went through
           $GITHUB_ENV. It is set on the filesystem directly because shell.js
           only reads opts.env the first time it runs against a tree, and
           this job's tree has already had its working directory made. */
        job.fs.shellEnv = { PATH: "/usr/local/bin:/usr/bin:/bin", "?": "0" };
        job.fs.shellExported = { PATH: true };
        keys(stepEnv).forEach(function (k) {
          job.fs.shellEnv[k] = stepEnv[k];
          job.fs.shellExported[k] = true;
        });
        var r = SH.run(job.fs, script, { cwd: workdir, home: "/home/runner", user: "runner" });
        var outText = r.transcript.map(function (t) { return (t.out || "") + (t.err || ""); }).join("");
        var last = r.transcript.length ? r.transcript[r.transcript.length - 1] : null;
        res = { out: outText, err: "", code: last ? last.code : 0 };
      }

      record.out = mask((res.out || "") + (res.err || ""), conf.secrets);
      if (res.code !== 0) {
        record.conclusion = "failure";
        if (step["continue-on-error"] || (jobDef.steps[i] && jobDef.steps[i]["continue-on-error"])) {
          record.conclusion = "failure-ignored";
        } else {
          job.status = "failure";
          job.conclusion = "failure";
        }
      }
      job.steps.push(record);
    }

    /* Caches save at the END of a successful job, which is why a job that
       failed before installing anything caches nothing. */
    if (job.conclusion === "success") {
      job.cacheSaves.forEach(function (save) {
        if (conf.caches[save.key]) return;   /* an existing key is never overwritten */
        var files = [];
        save.paths.forEach(function (p) { files = files.concat(collect(job.fs, job.workdir, p, false)); });
        if (files.length) conf.caches[save.key] = { files: files };
      });
    }
    return job;
  }

  function truthy(v) { return !(v === false || v === undefined || v === null || v === "" || v === "false"); }
  function stepName(step, i) {
    if (step.name) return String(step.name);
    if (step.uses) return "Run " + String(step.uses).split("@")[0];
    var first = String(step.run || "").split("\n")[0];
    return "Run " + first;
  }

  /* ---------- running a whole workflow ---------- */
  function expandMatrix(jobDef) {
    var m = jobDef.strategy && jobDef.strategy.matrix;
    if (!isObj(m)) return [null];
    var names = keys(m).filter(function (k) { return k !== "include" && k !== "exclude"; });
    if (!names.length) return [null];
    var combos = [{}];
    names.forEach(function (name) {
      var vals = asList(m[name]), next = [];
      combos.forEach(function (c) {
        vals.forEach(function (v) {
          var copy = {};
          keys(c).forEach(function (k) { copy[k] = c[k]; });
          copy[name] = v;
          next.push(copy);
        });
      });
      combos = next;
    });
    return combos;
  }

  function executeRun(fsRoot, repoFs, repoPath, repoName, wf, event, info) {
    var conf = ci(fsRoot);
    var run = {
      number: conf.nextRun++,
      workflow: wf.doc.name || wf.file,
      file: wf.file,
      event: event, branch: info.branch, sha: info.sha || "0000000",
      fsRoot: fsRoot, repoFs: repoFs, repoPath: repoPath, repoName: repoName,
      doc: wf.doc, jobs: [], conclusion: "success"
    };

    /* Jobs run in parallel unless `needs` orders them. Nothing here is really
       concurrent — they are executed in a valid order and REPORTED as
       parallel, which is the honest edge stated in the brief. */
    var ids = keys(wf.doc.jobs), done = {}, order = [], guard = 0;
    while (order.length < ids.length && guard++ < 100) {
      ids.forEach(function (id) {
        if (done[id]) return;
        var needs = asList(wf.doc.jobs[id].needs);
        if (needs.every(function (n) { return done[n]; })) { done[id] = true; order.push(id); }
      });
    }
    ids.forEach(function (id) { if (order.indexOf(id) === -1) order.push(id); });

    var results = {};
    order.forEach(function (id) {
      var def = wf.doc.jobs[id];
      var needs = asList(def.needs);
      var blocked = needs.filter(function (n) { return results[n] && results[n].conclusion !== "success"; });
      if (blocked.length) {
        run.jobs.push({ id: id, name: def.name || id, conclusion: "skipped", steps: [], skippedBy: blocked[0] });
        results[id] = { conclusion: "skipped" };
        return;
      }
      expandMatrix(def).forEach(function (combo) {
        var job = runJob(run, id, def, combo);
        if (combo) job.name = (def.name || id) + " (" + keys(combo).map(function (k) { return combo[k]; }).join(", ") + ")";
        run.jobs.push(job);
        /* With a matrix, one failing cell fails the job as a whole. */
        if (!results[id] || job.conclusion !== "success") results[id] = { conclusion: job.conclusion };
      });
    });

    run.conclusion = run.jobs.some(function (j) { return j.conclusion === "failure"; }) ? "failure"
      : (run.jobs.every(function (j) { return j.conclusion === "skipped"; }) ? "skipped" : "success");
    conf.runs.push(stripForStore(run));
    return run;
  }

  /* The stored run keeps everything a checkpoint or `gh` needs and drops the
     live filesystem handles, so the state stays plain JSON. */
  function stripForStore(run) {
    return {
      number: run.number, workflow: run.workflow, file: run.file,
      event: run.event, branch: run.branch, sha: run.sha,
      conclusion: run.conclusion,
      jobs: run.jobs.map(function (j) {
        return {
          id: j.id, name: j.name, conclusion: j.conclusion, skippedBy: j.skippedBy,
          checkedOut: !!j.checkedOut,
          steps: (j.steps || []).map(function (s) { return { name: s.name, conclusion: s.conclusion, out: s.out }; })
        };
      })
    };
  }

  /* ---------- the trigger: a push starts a run ----------
     Wrapping gitsim's command rather than editing it keeps the two engines
     independent; a repository with no workflows behaves exactly as before. */
  function repoNameFor(path) { return String(path).split("/").filter(Boolean).pop() || "repo"; }

  function fireEvent(ctx, event, info) {
    var fsRoot = ctx.fs;
    var repoPath = findRepoPath(fsRoot, ctx.cwd);
    if (!repoPath) return [];
    var wfs = readWorkflows(fsRoot, repoPath);
    var started = [];
    wfs.forEach(function (wf) {
      if (wf.error) return;
      if (!triggerMatches(onOf(wf.doc), event, info)) return;
      started.push(executeRun(fsRoot, fsRoot, repoPath, repoNameFor(repoPath), wf, event, info));
    });
    return started;
  }

  function findRepoPath(fsRoot, cwd) {
    var parts = String(cwd).split("/").filter(Boolean);
    while (parts.length >= 0) {
      var p = "/" + parts.join("/");
      var n = SH.nodeAt(fsRoot, p === "/" ? "/" : p);
      if (n && n.d && n.d[".git"]) return p;
      if (!parts.length) break;
      parts.pop();
    }
    return null;
  }

  /* gitsim hands back { repo, fs, root, gitPath }; the branch and the sha both
     live on the inner repo, as `head` and the `refs` map. */
  function repoOf(fsRoot, repoPath) {
    try {
      var r = GIT && GIT.repoAtPath && GIT.repoAtPath(fsRoot, repoPath);
      return r ? r.repo : null;
    } catch (e) { return null; }
  }
  /* HEAD is { ref: "refs/heads/main" } on a branch and a bare sha when
     detached, so both shapes have to be unwrapped before anything compares
     a branch name — stringifying the object gives "[object Object]", which
     matches no filter and starts no run. */
  function currentBranch(fsRoot, repoPath) {
    var repo = repoOf(fsRoot, repoPath);
    var h = repo && repo.head;
    if (h && typeof h === "object") h = h.ref;
    return typeof h === "string" ? h.replace("refs/heads/", "") : "main";
  }

  function install() {
    if (!SH || !SH.COMMANDS) return;
    var baseGit = SH.COMMANDS.git;
    if (baseGit && !baseGit.__ciWrapped) {
      var wrapped = function (ctx, args, stdin) {
        var res = baseGit(ctx, args, stdin);
        /* Only a SUCCESSFUL push starts anything, and only when the repository
           actually has a workflow in .github/workflows. */
        if (res && res.code === 0 && args && args[0] === "push") {
          var repoPath = findRepoPath(ctx.fs, ctx.cwd);
          if (repoPath) {
            var branch = currentBranch(ctx.fs, repoPath);
            var runs = fireEvent(ctx, "push", { branch: branch, sha: shaOf(ctx.fs, repoPath), paths: changedPaths(ctx.fs, repoPath) });
            if (runs.length) {
              res = {
                out: (res.out || "") + runs.map(function (r) {
                  return "\nremote: workflow '" + r.workflow + "' started (run #" + r.number + ")\n";
                }).join(""),
                err: res.err, code: res.code
              };
            }
          }
        }
        return res;
      };
      wrapped.__ciWrapped = true;
      SH.COMMANDS.git = wrapped;
    }

    /* npm test / npm start are aliases for npm run <script>; dockersim's npm
       handles `run` and this only adds the shorthand rather than replacing it. */
    var baseNpm = SH.COMMANDS.npm;
    if (baseNpm && !baseNpm.__ciWrapped) {
      var npmWrapped = function (ctx, args, stdin) {
        if (args && (args[0] === "test" || args[0] === "start")) {
          return baseNpm(ctx, ["run", args[0]].concat(args.slice(1)), stdin);
        }
        return baseNpm(ctx, args, stdin);
      };
      npmWrapped.__ciWrapped = true;
      SH.COMMANDS.npm = npmWrapped;
    }

    SH.COMMANDS.gh = gh;
  }

  function shaOf(fsRoot, repoPath) {
    var repo = repoOf(fsRoot, repoPath);
    var head = repo && repo.refs && repo.refs["refs/heads/" + currentBranch(fsRoot, repoPath)];
    return head ? String(head) : "0000000000000000000000000000000000000000";
  }

  function changedPaths(fsRoot, repoPath) {
    var node = SH.nodeAt(fsRoot, repoPath);
    if (!node || !node.d) return [];
    var out = [];
    SH.walk(node, "").forEach(function (e) {
      if (!e.isDir && e.path.indexOf("/.git/") !== 0) out.push(e.path.replace(/^\//, ""));
    });
    return out;
  }

  /* ---------- gh ----------
     Just enough of the CLI to read what the server did and to try to merge. */
  function gh(ctx, args) {
    var conf = ci(ctx.fs);
    var sub = args[0], verb = args[1];

    if (sub === "run" && (verb === "list" || verb === undefined)) {
      if (!conf.runs.length) return ok("no runs found\n");
      var rows = conf.runs.slice().reverse().map(function (r) {
        return pad(r.conclusion, 10) + pad(r.workflow, 22) + pad(r.branch, 12) + pad(r.event, 10) + "#" + r.number;
      });
      return ok(rows.join("\n") + "\n");
    }
    if (sub === "run" && (verb === "view" || verb === "watch")) {
      var num = args[2] ? parseInt(String(args[2]).replace("#", ""), 10) : null;
      var run = num ? conf.runs.filter(function (r) { return r.number === num; })[0]
        : conf.runs[conf.runs.length - 1];
      if (!run) return bad("could not find any run\n");
      var wantLog = args.indexOf("--log") !== -1;
      var out = (run.conclusion === "success" ? "✓" : run.conclusion === "failure" ? "X" : "-") +
        " " + run.workflow + " · #" + run.number + "\n" +
        "Triggered via " + run.event + " on " + run.branch + "\n\n";
      run.jobs.forEach(function (j) {
        out += (j.conclusion === "success" ? "✓" : j.conclusion === "failure" ? "X" : "-") + " " + j.name +
          (j.conclusion === "skipped" && j.skippedBy ? "  (skipped: " + j.skippedBy + " failed)" : "") + "\n";
        j.steps.forEach(function (s) {
          out += "  " + (s.conclusion === "success" ? "✓" : s.conclusion === "failure" ? "X" : "-") + " " + s.name + "\n";
          if (wantLog && s.out) out += s.out.split("\n").filter(Boolean).map(function (l) { return "    " + l; }).join("\n") + "\n";
        });
      });
      return ok(out);
    }
    if (sub === "workflow" && (verb === "list" || verb === undefined)) {
      var repoPath = findRepoPath(ctx.fs, ctx.cwd);
      if (!repoPath) return bad("not a git repository\n");
      var wfs = readWorkflows(ctx.fs, repoPath);
      if (!wfs.length) return ok("no workflows found\n");
      return ok(wfs.map(function (w) {
        return pad(w.error ? "invalid" : "active", 10) + pad((w.doc && w.doc.name) || w.file, 26) + w.file +
          (w.error ? "\n  " + w.error : "");
      }).join("\n") + "\n");
    }
    if (sub === "secret" && verb === "set") {
      var name = args[2];
      var bodyIx = args.indexOf("--body");
      if (!name || bodyIx === -1) return bad("usage: gh secret set NAME --body VALUE\n");
      conf.secrets[name] = String(args[bodyIx + 1]);
      return ok("✓ Set secret " + name + "\n");
    }
    if (sub === "secret" && (verb === "list" || verb === undefined)) {
      return ok(keys(conf.secrets).sort().map(function (k) { return k + "  Updated now"; }).join("\n") + "\n");
    }
    if (sub === "protect") {
      /* Not a real gh command — the honest stand-in for a branch protection
         rule, which lives in repository settings rather than the CLI. */
      var br = args[1] || "main";
      var checks = args.slice(2).filter(function (a) { return a.charAt(0) !== "-"; });
      conf.protection[br] = { checks: checks };
      return ok("✓ Branch " + br + " now requires: " + (checks.join(", ") || "(nothing)") + "\n");
    }
    if (sub === "pr" && verb === "merge") {
      var branch = args[2] || currentBranch(ctx.fs, findRepoPath(ctx.fs, ctx.cwd) || "/");
      var prot = conf.protection.main;
      if (prot && prot.checks.length) {
        var latest = conf.runs.filter(function (r) { return r.branch === branch; }).pop();
        var failing = [];
        prot.checks.forEach(function (name) {
          var job = latest && latest.jobs.filter(function (j) { return j.id === name || j.name === name; })[0];
          if (!job) failing.push(name + " (expected — waiting for status to be reported)");
          else if (job.conclusion !== "success") failing.push(name + " (failing)");
        });
        if (failing.length)
          return bad("X Pull request is not mergeable: required checks have not succeeded\n" +
            failing.map(function (f) { return "  - " + f; }).join("\n") + "\n");
      }
      return ok("✓ Merged " + branch + " into main\n");
    }
    return bad("unknown command: gh " + args.join(" ") + "\n");
  }

  function pad(s, n) { s = String(s == null ? "" : s); return s.length >= n ? s + " " : s + new Array(n - s.length + 1).join(" "); }

  /* ---------- test surface ----------
     snapshot composes dockersim's (which composes gitsim's), so a lesson can
     use all three engines and still get T.before for each of them. */
  function snapshot(fsRoot) {
    var base = DOCKER && DOCKER.snapshot ? DOCKER.snapshot(fsRoot)
      : (GIT && GIT.snapshot ? GIT.snapshot(fsRoot) : {});
    base = base || {};
    base.ci = fsRoot.ci ? JSON.parse(JSON.stringify(fsRoot.ci)) : null;
    return base;
  }

  function extendT(T, fsRoot, before) {
    if (DOCKER && DOCKER.extendT) DOCKER.extendT(T, fsRoot, before);
    var conf = ci(fsRoot);

    /* Every helper reads the CI server's state rather than the transcript, so
       a lesson grades what the pipeline DID, not what was typed at it. */
    T.runs = function () { return conf.runs.slice(); };
    T.lastRun = function () { return conf.runs.length ? conf.runs[conf.runs.length - 1] : null; };
    T.run = function (n) { return conf.runs.filter(function (r) { return r.number === n; })[0] || null; };
    T.runCount = function () { return conf.runs.length; };
    T.job = function (name, run) {
      var r = run || T.lastRun();
      if (!r) return null;
      return r.jobs.filter(function (j) { return j.id === name || j.name === name || String(j.name).indexOf(name) === 0; })[0] || null;
    };
    T.step = function (jobName, stepName) {
      var j = T.job(jobName);
      if (!j) return null;
      return j.steps.filter(function (s) { return String(s.name).indexOf(stepName) !== -1; })[0] || null;
    };
    T.jobLog = function (jobName) {
      var j = T.job(jobName);
      return j ? j.steps.map(function (s) { return s.out || ""; }).join("") : "";
    };
    T.runLog = function (run) {
      var r = run || T.lastRun();
      return r ? r.jobs.map(function (j) { return j.steps.map(function (s) { return s.out || ""; }).join(""); }).join("") : "";
    };
    T.workflows = function () {
      var repoPath = findRepoPath(fsRoot, (T.cwd && T.cwd()) || "/home/you");
      return repoPath ? readWorkflows(fsRoot, repoPath) : [];
    };
    T.cacheKeys = function () { return keys(conf.caches).sort(); };
    T.cache = function (key) { return conf.caches[key] || null; };
    T.artifact = function (name, runNumber) {
      var r = runNumber || (T.lastRun() && T.lastRun().number);
      var store = conf.artifacts[r] || {};
      return store[name] || null;
    };
    T.secretNames = function () { return keys(conf.secrets).sort(); };
    T.protection = function (branch) { return conf.protection[branch || "main"] || null; };
    return T;
  }

  var testApi = {
    parseYaml: parseYaml, validateWorkflow: validateWorkflow, triggerMatches: triggerMatches,
    matchesGlob: matchesGlob, expandMatrix: expandMatrix, interpolate: interpolate,
    mask: mask, ci: ci, readWorkflows: readWorkflows, fireEvent: fireEvent, ACTIONS: ACTIONS
  };

  var API = {
    gh: gh, strict: false,
    testApi: testApi, extendT: extendT, snapshot: snapshot,
    install: install, ci: ci, ACTIONS: ACTIONS
  };

  install();
  root.CODELAB = root.CODELAB || {};
  root.CODELAB.cicd = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
