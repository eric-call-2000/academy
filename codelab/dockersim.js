/* ============================================================
   CodeLab — a Docker you can actually run
   ------------------------------------------------------------
   Registers `docker` and `curl` into shell.js, the same way
   gitsim.js registers `git`. Daemon state (images, containers,
   volumes, networks, builds, registry) is plain JSON on the
   filesystem root at `fsRoot.dockerd`, so a deep copy of the
   tree is a deep copy of the daemon — which is what gives
   lessons `T.before` for free.

   THE DESIGN RULE: fake payloads, never rules.
   The rules a junior is screened on are enforced exactly — an
   image is a stack of layers, a changed instruction invalidates
   everything after it, a file deleted in a later layer still
   ships, EXPOSE publishes nothing, an app bound to 127.0.0.1 is
   unreachable from outside, the writable layer dies with the
   container, a named volume does not. What is FAKED is the
   payload: what `npm ci` downloads, and what a process computes.
   A process is DESCRIBED by the lesson's `apps` table — this
   simulator never executes learner JavaScript.

   Not modelled, and said so in the course: namespaces, cgroups,
   a real kernel, image tarballs and the OCI format, registry
   auth, BuildKit's full output, Swarm, and TTY-interactive flows.
   ============================================================ */
(function (root) {
  "use strict";

  var SH = (root.CODELAB && root.CODELAB.shell) ||
    (typeof module !== "undefined" && typeof require === "function" ? require("./shell.js") : null);

  function ok(out) { return { out: out == null ? "" : String(out), err: "", code: 0 }; }
  function bad(err, code) { return { out: "", err: String(err), code: code == null ? 1 : code }; }
  function copy(v) { return JSON.parse(JSON.stringify(v)); }
  function keys(o) { return Object.keys(o || {}); }

  /* A deterministic 64-hex digest. Not SHA-256 — it only has to be stable
     and collision-free enough that the same build always gives the same id. */
  function hash(text) {
    var h1 = 0x811c9dc5, h2 = 0x1000193, h3 = 0x9e3779b9, h4 = 0x85ebca6b;
    var s = String(text);
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      h1 = (h1 ^ c) * 16777619 >>> 0;
      h2 = (h2 + c * (i + 1)) * 2654435761 >>> 0;
      h3 = (h3 ^ (c + i)) * 2246822519 >>> 0;
      h4 = (h4 + (c << (i % 13))) * 3266489917 >>> 0;
    }
    function hex(n) { return ("00000000" + (n >>> 0).toString(16)).slice(-8); }
    var a = hex(h1) + hex(h2) + hex(h3) + hex(h4);
    return (a + hex(h1 ^ h3) + hex(h2 ^ h4) + hex(h1 + h2) + hex(h3 + h4)).slice(0, 64);
  }

  /* ---------- base images ----------
     Sizes are approximate, in bytes, from published image sizes (measured
     2026-09; the cheatsheet says so). What matters to every lesson is the
     ORDER — full > slim > alpine — never the exact number. */
  var MB = 1024 * 1024;
  var BASE_IMAGES = {
    "node:20": { size: 1100 * MB, user: "root", has: ["node", "npm"], users: ["root", "node"] },
    "node:20-slim": { size: 200 * MB, user: "root", has: ["node", "npm"], users: ["root", "node"] },
    "node:20-alpine": { size: 130 * MB, user: "root", has: ["node", "npm"], users: ["root", "node"] },
    "alpine:3.20": { size: 8 * MB, user: "root", has: [], users: ["root"] },
    "postgres:16": {
      size: 430 * MB, user: "root", has: ["postgres", "pg_isready"], users: ["root", "postgres"],
      cmd: ["postgres"], exposed: ["5432/tcp"]
    }
  };
  /* npm's registry, offline. Sizes are per package, deterministic. */
  var PKG_SIZES = { express: 2 * MB, jest: 30 * MB, "@shop/private-ui": 4 * MB, react: 6 * MB, lodash: 5 * MB };
  var APT_SIZES = { curl: 3 * MB, git: 40 * MB, "ca-certificates": 1 * MB, python3: 50 * MB };

  /* ---------- daemon state ---------- */
  function daemon(fsRoot) {
    if (!fsRoot.dockerd) {
      fsRoot.dockerd = {
        images: {}, containers: {}, volumes: {}, networks: { bridge: { userDefined: false } },
        builds: [], registry: {}, seq: 0, compose: null
      };
    }
    return fsRoot.dockerd;
  }
  function nextId(d, prefix) { d.seq++; return (prefix || "") + hash(prefix + ":" + d.seq).slice(0, 12); }
  function apps(fsRoot) { return fsRoot.dockerApps || {}; }

  /* ---------- image refs ---------- */
  function parseRef(ref) {
    var s = String(ref);
    var slash = s.lastIndexOf("/");
    var colon = s.lastIndexOf(":");
    if (colon > slash) return { repo: s.slice(0, colon), tag: s.slice(colon + 1) };
    return { repo: s, tag: "latest" };
  }
  function fullRef(ref) { var p = parseRef(ref); return p.repo + ":" + p.tag; }
  function findImage(d, ref) {
    var want = fullRef(ref);
    var ids = keys(d.images);
    for (var i = 0; i < ids.length; i++) {
      if (d.images[ids[i]].tags.indexOf(want) !== -1) return d.images[ids[i]];
    }
    return null;
  }

  /* ---------- a files map is an image's filesystem ----------
     { "/app/server.js": "…" }. Materialize it into a shell.js tree to run a
     command against it, then read it back — which is how RUN and `docker
     exec` reuse the real shell instead of a second, worse one. */
  function fsFromFiles(files) {
    var spec = {};
    keys(files).forEach(function (p) { spec[p] = files[p]; });
    return SH.createFS(spec);
  }
  function filesFromFs(fs) {
    var out = {};
    SH.walk(fs, "").forEach(function (e) { if (!e.isDir) out[e.path] = e.node.f; });
    return out;
  }
  function sizeOfFiles(files) {
    var n = 0;
    keys(files).forEach(function (p) { n += files[p].length; });
    return n;
  }

  /* ============================================================
     Dockerfile
     ============================================================ */
  function parseDockerfile(text) {
    var lines = String(text).split("\n"), out = [], buf = null;
    for (var i = 0; i < lines.length; i++) {
      var raw = lines[i];
      var line = raw.replace(/\s+$/, "");
      if (buf === null && /^\s*(#|$)/.test(line)) continue;
      if (buf !== null) line = buf + " " + line.trim();
      if (/\\$/.test(line)) { buf = line.replace(/\\$/, "").replace(/\s+$/, ""); continue; }
      buf = null;
      var m = line.trim().match(/^([A-Za-z]+)\s*(.*)$/);
      if (!m) continue;
      out.push({ instr: m[1].toUpperCase(), rest: m[2].trim(), text: m[1].toUpperCase() + " " + m[2].trim() });
    }
    return out;
  }
  /* `CMD ["node", "server.js"]` (exec form) vs `CMD node server.js` (shell
     form). The difference decides who is PID 1, which decides what happens
     when docker stop sends SIGTERM — the whole point of Unit 2 lesson 3. */
  function execForm(rest) {
    var t = String(rest).trim();
    if (t.charAt(0) !== "[") return null;
    try {
      var arr = JSON.parse(t);
      return Array.isArray(arr) ? arr.map(String) : null;
    } catch (e) { return null; }
  }
  function cmdArray(rest) {
    var arr = execForm(rest);
    return arr ? arr : ["/bin/sh", "-c", String(rest).trim()];
  }

  /* ---------- .dockerignore ----------
     ANCHORED TO THE CONTEXT ROOT, unlike .gitignore: `node_modules` excludes
     only the top-level one, while a leading double-star pattern excludes them
     at any depth. That difference is a real bug in real projects, and it gets
     its own lesson. */
  function parseIgnore(text) {
    return String(text || "").split("\n").map(function (l) { return l.trim(); })
      .filter(function (l) { return l && l.charAt(0) !== "#"; });
  }
  function ignoreMatch(pattern, rel) {
    var neg = pattern.charAt(0) === "!";
    var pat = neg ? pattern.slice(1) : pattern;
    pat = pat.replace(/^\.\//, "").replace(/\/$/, "");
    var segs = pat.split("/"), rx = "^";
    for (var i = 0; i < segs.length; i++) {
      if (segs[i] === "**") {
        /* `**` matches any number of path segments INCLUDING NONE, so a
           leading double-star excludes the top-level directory as well as
           every nested one. */
        rx += "(?:[^/]+/)*";
      } else {
        rx += segs[i].replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]");
        if (i < segs.length - 1) rx += "/";
      }
    }
    if (segs[segs.length - 1] === "**") rx += ".*";
    rx += "(?:/.*)?$";
    return { neg: neg, hit: new RegExp(rx).test(rel) };
  }
  function isIgnored(patterns, rel) {
    var out = false;
    patterns.forEach(function (p) {
      var m = ignoreMatch(p, rel);
      if (m.hit) out = !m.neg;
    });
    return out;
  }

  /* ---------- the build context ---------- */
  function buildContext(fsRoot, dirAbs) {
    var node = SH.nodeAt(fsRoot, dirAbs);
    if (!node || !node.d) return null;
    var ignoreNode = SH.nodeAt(fsRoot, dirAbs + "/.dockerignore");
    var patterns = parseIgnore(ignoreNode && ignoreNode.f);
    var out = {};
    SH.walk(node, "").forEach(function (e) {
      if (e.isDir) return;
      var rel = e.path.replace(/^\//, "");
      if (rel === ".dockerignore" || rel === "Dockerfile") { out[rel] = e.node.f; return; }
      if (isIgnored(patterns, rel)) return;
      out[rel] = e.node.f;
    });
    return out;
  }

  /* ============================================================
     Running a command inside an image/container filesystem
     ------------------------------------------------------------
     Materialize, run through shell.js (so `mkdir -p`, `rm -rf`, `echo >>`
     and `&&` all behave), read back. The package manager and friends are
     registered into shell.js's table and read ACTIVE for their context.
     ============================================================ */
  var ACTIVE = null;

  function ensureDir(fs, abs) {
    var parts = String(abs).split("/").filter(Boolean), node = fs;
    for (var i = 0; i < parts.length; i++) {
      if (!node.d[parts[i]] || !node.d[parts[i]].d) node.d[parts[i]] = SH.dir();
      node = node.d[parts[i]];
    }
  }
  function runInFiles(files, script, opts) {
    opts = opts || {};
    var fs = fsFromFiles(files);
    /* A mount point is a directory even when nothing has been written into it
       yet — otherwise `touch /var/lib/postgresql/data/orders` has nowhere to
       go, and the volume lesson would fail for the wrong reason. */
    (opts.dirs || []).forEach(function (dir) { if (dir) ensureDir(fs, dir); });
    var prev = ACTIVE;
    ACTIVE = { fs: fs, env: opts.env || {}, user: opts.user || "root", base: opts.base, daemon: opts.daemon, fsRoot: opts.fsRoot, container: opts.container };
    var res;
    try {
      res = SH.run(fs, script, { cwd: opts.cwd || "/", home: "/root", user: opts.user || "root", env: opts.env || {} });
    } finally { ACTIVE = prev; }
    var last = res.transcript[res.transcript.length - 1];
    return {
      files: filesFromFs(fs),
      out: res.transcript.map(function (t) { return t.out; }).join(""),
      err: res.transcript.map(function (t) { return t.err; }).join(""),
      code: last ? last.code : 0
    };
  }

  /* ---------- the fake package manager ----------
     `npm ci` reads a real package.json and writes stub node_modules entries
     with sizes from a fixed table. The RULES it teaches are real (a lockfile
     install, --omit=dev, the cache that ends up in a layer); the bytes are
     invented, and the brief says so. */
  SH.COMMANDS.npm = function (ctx, args) {
    var sub = args[0];
    var pkgNode = SH.nodeAt(ctx.fs, SH.resolve(ctx.cwd, "/root", "package.json"));
    if (sub === "ci" || sub === "install" || sub === "i") {
      if (!pkgNode) return bad("npm error code ENOENT\nnpm error path " + ctx.cwd + "/package.json\n");
      var pkg;
      try { pkg = JSON.parse(pkgNode.f); } catch (e) { return bad("npm error JSON.parse Invalid package.json\n"); }
      var omitDev = args.indexOf("--omit=dev") !== -1 || args.indexOf("--production") !== -1;
      var deps = {};
      keys(pkg.dependencies).forEach(function (k) { deps[k] = pkg.dependencies[k]; });
      if (!omitDev) keys(pkg.devDependencies).forEach(function (k) { deps[k] = pkg.devDependencies[k]; });
      var names = keys(deps);
      /* A private registry needs credentials, and the honest way to get them
         into a build is a secret mount — not a COPY that lands in a layer. */
      var priv = names.filter(function (n) { return n.charAt(0) === "@"; });
      if (priv.length) {
        var rc = SH.nodeAt(ctx.fs, "/root/.npmrc");
        if (!rc || rc.f.indexOf("_authToken=") === -1) {
          return bad("npm error code E401\nnpm error 401 Unauthorized - GET https://npm.shop.dev/" + priv[0] + "\n");
        }
      }
      names.forEach(function (n) {
        var size = PKG_SIZES[n] || 1 * MB;
        var dir = SH.resolve(ctx.cwd, "/root", "node_modules/" + n);
        writeInto(ctx.fs, dir + "/package.json", JSON.stringify({ name: n, version: String(deps[n]).replace(/^[^\d]*/, "") }) + "\n");
        writeInto(ctx.fs, dir + "/index.js", filler(size));
      });
      writeInto(ctx.fs, "/root/.npm/_cacache/index", filler(12 * MB));
      return ok("added " + names.length + " packages\n");
    }
    if (sub === "run") {
      if (!pkgNode) return bad("npm error code ENOENT\n");
      var p2 = JSON.parse(pkgNode.f);
      var script = (p2.scripts || {})[args[1]];
      if (!script) return bad("npm error Missing script: \"" + args[1] + "\"\n");
      var r = SH.run(ctx.fs, script, { cwd: ctx.cwd, home: "/root", user: ctx.user, env: ctx.env });
      var last = r.transcript[r.transcript.length - 1];
      return { out: "> " + args[1] + "\n" + r.transcript.map(function (t) { return t.out; }).join(""), err: "", code: last ? last.code : 0 };
    }
    return bad("Unknown command: \"" + String(sub) + "\"\n");
  };
  SH.COMMANDS["apt-get"] = function (ctx, args) {
    var sub = args[0];
    if (sub === "update") return ok("Reading package lists... Done\n");
    if (sub === "install") {
      var pkgs = args.slice(1).filter(function (a) { return a.charAt(0) !== "-"; });
      pkgs.forEach(function (p) {
        writeInto(ctx.fs, "/usr/bin/" + p, filler(APT_SIZES[p] || 2 * MB));
        writeInto(ctx.fs, "/var/lib/apt/lists/" + p, filler(1 * MB));
      });
      return ok("Setting up " + pkgs.join(" ") + "\n");
    }
    if (sub === "purge" || sub === "clean" || sub === "autoremove") return ok("Done\n");
    return bad("E: Invalid operation " + String(sub) + "\n");
  };
  function addUser(ctx, args) {
    var name = args.filter(function (a) { return a.charAt(0) !== "-"; }).pop();
    if (!name) return bad("adduser: missing user name\n");
    var passwd = SH.nodeAt(ctx.fs, "/etc/passwd");
    var text = (passwd && passwd.f) || "root:x:0:0:root:/root:/bin/sh\n";
    if (text.indexOf(name + ":") === -1) text += name + ":x:1000:1000::/home/" + name + ":/bin/sh\n";
    writeInto(ctx.fs, "/etc/passwd", text);
    return ok("");
  }
  SH.COMMANDS.adduser = addUser;
  SH.COMMANDS.useradd = addUser;
  /* dockersim.js is loaded on every page, so whatever it registers into the
     shell is registered for the WHOLE catalog — including courses that have
     never heard of Docker. env and curl already exist in shell.js, and the
     Docker answer is only the right one when there is a Docker world to
     answer from: inside a container, or with containers on the daemon.
     dockerd is read directly rather than through daemon(), which creates it. */
  function dockerInPlay(ctx) {
    if (ACTIVE) return true;
    var d = ctx.fs && ctx.fs.dockerd;
    return !!(d && keys(d.containers).length);
  }

  var baseEnv = SH.COMMANDS.env;
  SH.COMMANDS.env = function (ctx, args, stdin) {
    /* A container's environment is simply all of it. A shell's is the part
       that was exported, which is a distinction shell.js models and the CLI
       course teaches, so outside Docker the shell's own answer stands. */
    if (!dockerInPlay(ctx)) return baseEnv(ctx, args, stdin);
    return ok(keys(ctx.env).sort().map(function (k) { return k + "=" + ctx.env[k]; }).join("\n") + "\n");
  };
  /* sleep is left to shell.js, which does the same nothing for a valid
     interval and additionally rejects a nonsensical one. Overriding it
     here would take that check away from the whole catalog. */

  function filler(bytes) {
    /* A stand-in payload of the right SIZE — layer sizes are a real rule, the
       bytes inside a package are not. */
    return "x".repeat(Math.max(1, Math.floor(bytes)));
  }
  function writeInto(fs, abs, text) {
    var parts = abs.split("/").filter(Boolean);
    var node = fs;
    for (var i = 0; i < parts.length - 1; i++) {
      if (!node.d[parts[i]] || !node.d[parts[i]].d) node.d[parts[i]] = SH.dir();
      node = node.d[parts[i]];
    }
    node.d[parts[parts.length - 1]] = SH.file(text);
  }

  /* ============================================================
     BUILD
     ============================================================ */
  function defaultConfig(base) {
    var b = BASE_IMAGES[base] || {};
    return {
      user: b.user || "root", env: {}, cmd: b.cmd ? b.cmd.slice() : null, entrypoint: null,
      workdir: "/", exposed: (b.exposed || []).slice(), healthcheck: null, base: base
    };
  }

  function buildImage(fsRoot, o) {
    var d = daemon(fsRoot);
    var ctxFiles = o.context, instrs = o.instructions, buildArgs = o.buildArgs || {}, secrets = o.secrets || {};
    var record = { tags: o.tags.slice(), ok: false, steps: [] };

    /* Split into stages at each FROM. */
    var stages = [], cur = null;
    for (var i = 0; i < instrs.length; i++) {
      var ins = instrs[i];
      if (ins.instr === "ARG" && !cur) { buildArgs = buildArgs; continue; }
      if (ins.instr === "FROM") {
        var m = ins.rest.match(/^(\S+)(?:\s+[Aa][Ss]\s+(\S+))?$/);
        cur = { base: m ? expandArgs(m[1], buildArgs) : ins.rest, name: m && m[2] ? m[2] : null, steps: [] };
        stages.push(cur);
        continue;
      }
      if (!cur) continue;
      cur.steps.push(ins);
    }
    if (!stages.length) return { record: record, error: "no FROM instruction" };

    var built = {}, last = null;
    var wanted = o.target ? stages.filter(function (s) { return s.name === o.target; })[0] : null;
    for (var si = 0; si < stages.length; si++) {
      var st = stages[si];
      var baseImg = BASE_IMAGES[st.base];
      var files, config, layers, cacheKey, size;
      if (baseImg) {
        files = {}; config = defaultConfig(st.base); size = baseImg.size;
        cacheKey = hash("base:" + st.base);
      } else {
        var prior = findImage(d, st.base) || built[st.base];
        if (!prior) return { record: record, error: "pull access denied for " + parseRef(st.base).repo + ", repository does not exist or may require 'docker login'" };
        files = copy(prior.files); config = copy(prior.config); size = prior.size;
        cacheKey = hash("img:" + prior.id);
      }
      layers = [];

      for (var k = 0; k < st.steps.length; k++) {
        var step = st.steps[k];
        var res = applyInstruction(fsRoot, d, {
          step: step, files: files, config: config, ctxFiles: ctxFiles, buildArgs: buildArgs,
          secrets: secrets, built: built, cacheKey: cacheKey
        });
        if (res.error) {
          record.steps.push({ instr: step.text, cached: false });
          return { record: record, error: res.error, out: res.out };
        }
        cacheKey = res.cacheKey;
        var cachedHit = d.cache && d.cache[cacheKey];
        var cached = !!cachedHit && !o.noCache;
        record.steps.push({ instr: step.text, cached: cached });
        if (cached) {
          files = copy(cachedHit.files); config = copy(cachedHit.config); size = cachedHit.size;
          layers = copy(cachedHit.layers);
        } else {
          files = res.files; config = res.config;
          size += res.size;
          if (res.layer) layers.push(res.layer);
          d.cache = d.cache || {};
          d.cache[cacheKey] = { files: copy(files), config: copy(config), size: size, layers: copy(layers) };
        }
      }
      var image = {
        id: "sha256:" + hash("image:" + st.base + ":" + cacheKey),
        tags: [], base: st.base, files: files, config: config, layers: layers, size: size
      };
      built[st.name || ("stage" + si)] = image;
      last = image;
      if (wanted && st === wanted) break;
    }

    var finalImage = wanted ? built[wanted.name] : last;
    /* Two builds of the same thing are the same image — including its id. */
    var existing = d.images[finalImage.id];
    if (existing) finalImage = existing;
    else d.images[finalImage.id] = finalImage;
    o.tags.forEach(function (t) { tagImage(d, finalImage, t); });
    record.ok = true;
    return { record: record, image: finalImage };
  }

  function tagImage(d, image, ref) {
    var full = fullRef(ref);
    keys(d.images).forEach(function (id) {
      var ix = d.images[id].tags.indexOf(full);
      if (ix !== -1) d.images[id].tags.splice(ix, 1);
    });
    if (image.tags.indexOf(full) === -1) image.tags.push(full);
  }

  function expandArgs(text, args) {
    return String(text).replace(/\$\{?([A-Za-z_][A-Za-z0-9_]*)\}?/g, function (m, n) {
      return Object.prototype.hasOwnProperty.call(args, n) ? args[n] : m;
    });
  }

  /* One instruction → one layer (or pure metadata, which adds 0 bytes). */
  function applyInstruction(fsRoot, d, o) {
    var step = o.step, files = copy(o.files), config = copy(o.config);
    var instr = step.instr, rest = expandArgs(step.rest, o.buildArgs);
    var key = o.cacheKey, size = 0, layer = null;

    function meta() {
      return { files: files, config: config, size: 0, layer: { instr: step.text, size: 0 }, cacheKey: hash(key + "|" + step.text) };
    }

    if (instr === "WORKDIR") {
      config.workdir = rest.charAt(0) === "/" ? rest : (config.workdir.replace(/\/$/, "") + "/" + rest);
      return meta();
    }
    if (instr === "USER") { config.user = rest.split(":")[0]; return meta(); }
    if (instr === "EXPOSE") {
      rest.split(/\s+/).filter(Boolean).forEach(function (p) {
        var port = p.indexOf("/") === -1 ? p + "/tcp" : p;
        if (config.exposed.indexOf(port) === -1) config.exposed.push(port);
      });
      return meta();
    }
    if (instr === "CMD") { config.cmd = cmdArray(rest); return meta(); }
    if (instr === "ENTRYPOINT") { config.entrypoint = cmdArray(rest); return meta(); }
    if (instr === "ENV") {
      var pairs = rest.match(/^(\S+)=([\s\S]*)$/);
      if (pairs) config.env[pairs[1]] = stripQuotes(pairs[2]);
      else {
        var sp = rest.split(/\s+/);
        if (sp.length >= 2) config.env[sp[0]] = stripQuotes(sp.slice(1).join(" "));
      }
      return meta();
    }
    if (instr === "ARG") {
      var am = rest.match(/^(\S+?)(?:=(.*))?$/);
      if (am && !Object.prototype.hasOwnProperty.call(o.buildArgs, am[1]) && am[2] != null) o.buildArgs[am[1]] = stripQuotes(am[2]);
      /* The layer records the VALUE it was built with — which is exactly why
         `docker history` hands a build-arg secret to anyone with the image. */
      var shown = (am && o.buildArgs[am[1]] != null) ? "ARG " + am[1] + "=" + o.buildArgs[am[1]] : step.text;
      return { files: files, config: config, size: 0, layer: { instr: shown, size: 0 }, cacheKey: hash(key + "|" + shown) };
    }
    if (instr === "HEALTHCHECK") {
      var hc = rest.replace(/^(--\S+\s+)*/, "");
      var cm = hc.match(/^CMD\s+([\s\S]+)$/i);
      config.healthcheck = cm ? cmdArray(cm[1]) : null;
      return meta();
    }
    if (instr === "COPY" || instr === "ADD") {
      var parts = SH.tokenize(rest);
      var from = null;
      parts = parts.filter(function (p) {
        var fm = p.match(/^--from=(.+)$/);
        if (fm) { from = fm[1]; return false; }
        return p.indexOf("--") !== 0;
      });
      var dst = parts.pop(), srcs = parts;
      var source = from ? (o.built[from] && o.built[from].files) : o.ctxFiles;
      if (from && !source) return { error: "invalid from flag value " + from };
      var added = {}, hashes = "";
      for (var s = 0; s < srcs.length; s++) {
        var pattern = srcs[s];
        var matched = collectSources(source, pattern, from);
        if (!matched.length) return { error: "\"" + pattern + "\": not found" };
        matched.forEach(function (hit) {
          var target = destPath(config.workdir, dst, hit.name, srcs.length > 1 || /\/$/.test(dst) || isDirCopy(pattern));
          added[target] = hit.content;
          hashes += target + ":" + hit.content.length + ";";
        });
      }
      keys(added).forEach(function (p) { files[p] = added[p]; });
      size = sizeOfFiles(added);
      return { files: files, config: config, size: size, layer: { instr: step.text, size: size }, cacheKey: hash(key + "|" + step.text + "|" + hash(hashes)) };
    }
    if (instr === "RUN") {
      var script = rest, mounted = {};
      script = script.replace(/--mount=type=secret,[^\s]+/g, function (m) {
        var id = (m.match(/id=([^,\s]+)/) || [])[1];
        var target = (m.match(/target=([^,\s]+)/) || [])[1] || ("/run/secrets/" + id);
        if (o.secrets[id] != null) mounted[target] = o.secrets[id];
        return "";
      }).trim();
      var before = copy(files);
      keys(mounted).forEach(function (p) { before[p] = mounted[p]; });
      var out = runInFiles(before, script, { cwd: config.workdir, env: config.env, user: config.user, base: config.base, daemon: d, fsRoot: fsRoot });
      if (out.code !== 0) return { error: (out.err || out.out || "command failed").trim(), out: out.out };
      var after = out.files;
      /* A secret mount reaches exactly one RUN and never a layer. */
      keys(mounted).forEach(function (p) { delete after[p]; });
      var addedBytes = 0;
      keys(after).forEach(function (p) {
        if (files[p] === undefined || files[p] !== after[p]) addedBytes += after[p].length;
      });
      return {
        files: after, config: config, size: addedBytes,
        layer: { instr: step.text, size: addedBytes },
        cacheKey: hash(key + "|" + step.text)
      };
    }
    return meta();
  }

  function stripQuotes(s) {
    var t = String(s).trim();
    if ((t.charAt(0) === '"' && t.slice(-1) === '"') || (t.charAt(0) === "'" && t.slice(-1) === "'")) return t.slice(1, -1);
    return t;
  }
  function isDirCopy(pattern) { return pattern === "." || /\/$/.test(pattern) || pattern.indexOf("*") === -1; }
  function collectSources(source, pattern, from) {
    var out = [];
    var pat = String(pattern).replace(/^\.\//, "");
    if (from) pat = pat.replace(/^\//, "");
    var keysList = keys(source);
    if (pat === "." || pat === "") {
      keysList.forEach(function (p) { out.push({ name: p.replace(/^\//, ""), content: source[p] }); });
      return out;
    }
    var rx = new RegExp("^" + pat.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^/]*") + "(?:/(.*))?$");
    keysList.forEach(function (p) {
      var rel = p.replace(/^\//, "");
      var m = rel.match(rx);
      /* Copying a DIRECTORY copies its contents: src/app.js under `COPY src
         ./src` lands at ./src/app.js, not ./src/src/app.js. */
      if (m) out.push({ name: m[1] != null ? m[1] : rel.split("/").pop(), content: source[p], rel: rel });
    });
    /* A directory source copies its CONTENTS, keeping relative paths. */
    if (!out.length) {
      keysList.forEach(function (p) {
        var rel = p.replace(/^\//, "");
        if (rel.indexOf(pat + "/") === 0) out.push({ name: rel, content: source[p] });
      });
    }
    return out;
  }
  function destPath(workdir, dst, name) {
    /* Resolve the destination against WORKDIR the way a shell would: without
       this, `COPY --from=build /app/dist ./dist` lands in /app/./dist. */
    var base = SH.resolve(workdir || "/", workdir || "/", dst);
    return (base === "/" ? "" : base) + "/" + name;
  }

  /* ============================================================
     CONTAINERS — the process is DESCRIBED, never executed
     ============================================================ */
  function appSpec(fsRoot, command) {
    var table = apps(fsRoot);
    var key = (command[0] === "/bin/sh" && command[1] === "-c") ? command[2] : command.join(" ");
    if (table[key]) return copy(table[key]);
    if (command[0] === "sleep") return { idle: true };
    return { idle: false, exit: 0 };
  }
  /* "$PORT|3000" → the container's PORT, else 3000. */
  function envVal(spec, env) {
    var s = String(spec);
    if (s.charAt(0) !== "$") return s;
    var parts = s.slice(1).split("|");
    var v = env[parts[0]];
    return v == null || v === "" ? (parts[1] == null ? "" : parts[1]) : String(v);
  }
  function interp(text, env, extra) {
    return String(text).replace(/\{([^}]+)\}/g, function (m, body) {
      if (extra && Object.prototype.hasOwnProperty.call(extra, body)) return extra[body];
      var parts = body.split("|");
      var v = env[parts[0]];
      return v == null || v === "" ? (parts[1] == null ? "" : parts[1]) : String(v);
    });
  }

  function containerView(fsRoot, c) {
    var d = daemon(fsRoot);
    var img = d.images[c.image];
    var files = img ? copy(img.files) : {};
    keys(c.layer).forEach(function (p) { files[p] = c.layer[p]; });
    (c.mounts || []).forEach(function (m) {
      if (m.type === "volume") {
        var vol = d.volumes[m.source];
        if (vol) keys(vol.files).forEach(function (p) { files[m.target + p] = vol.files[p]; });
      } else {
        var node = SH.nodeAt(fsRoot, m.source);
        if (node && node.d) {
          SH.walk(node, "").forEach(function (e) { if (!e.isDir) files[m.target + e.path] = e.node.f; });
        } else if (node) files[m.target] = node.f;
      }
    });
    return files;
  }
  function writeBack(fsRoot, c, after, beforeFiles) {
    var d = daemon(fsRoot);
    keys(after).forEach(function (p) {
      if (beforeFiles[p] === after[p]) return;
      var mount = (c.mounts || []).filter(function (m) { return p.indexOf(m.target + "/") === 0 || p === m.target; })[0];
      if (mount && mount.type === "volume") {
        var vol = d.volumes[mount.source] || (d.volumes[mount.source] = { files: {} });
        vol.files[p.slice(mount.target.length)] = after[p];
      } else if (mount) {
        var hostPath = mount.source + p.slice(mount.target.length);
        var parent = SH.nodeAt(fsRoot, hostPath.replace(/\/[^/]*$/, ""));
        if (parent && parent.d) parent.d[hostPath.split("/").pop()] = SH.file(after[p]);
      } else c.layer[p] = after[p];
    });
    keys(beforeFiles).forEach(function (p) { if (after[p] === undefined) delete c.layer[p]; });
  }

  function resolvePeer(fsRoot, from, host) {
    var d = daemon(fsRoot);
    if (host === "localhost" || host === "127.0.0.1") return from ? { self: true, c: from } : { host: true };
    if (!from) {
      /* From the host, a bare name is not a container name — only published
         ports are reachable, and those come through localhost. */
      return null;
    }
    var mine = (from.networks || []).filter(function (n) { return (d.networks[n] || {}).userDefined; });
    var found = null;
    keys(d.containers).forEach(function (n) {
      var c = d.containers[n];
      if (c.status !== "running") return;
      var shared = (c.networks || []).some(function (n2) { return mine.indexOf(n2) !== -1; });
      var named = c.name === host || (c.composeService && c.composeService === host);
      if (shared && named) found = c;
    });
    return found ? { c: found } : null;
  }
  function listensOn(c, port) {
    return c.listen && Number(c.listen.port) === Number(port) ? c.listen : null;
  }

  /* A request, answered by the app's declared routes. Pure: changes nothing. */
  function request(fsRoot, opts) {
    var d = daemon(fsRoot);
    var from = opts.from ? d.containers[opts.from] : null;
    var u = String(opts.url).replace(/^https?:\/\//, "");
    var slash = u.indexOf("/");
    var hostPort = slash === -1 ? u : u.slice(0, slash);
    var path = slash === -1 ? "/" : u.slice(slash);
    var host = hostPort.split(":")[0];
    var port = Number(hostPort.split(":")[1] || 80);
    var target = null, targetPort = port;

    if (!from) {
      if (host !== "localhost" && host !== "127.0.0.1" && host !== "0.0.0.0")
        return { status: 0, body: "", error: "resolve" };
      var pub = null;
      keys(d.containers).forEach(function (n) {
        (d.containers[n].ports || []).forEach(function (p) {
          if (Number(p.host) === port) pub = { c: d.containers[n], p: p };
        });
      });
      if (!pub || pub.c.status !== "running") return { status: 0, body: "", error: "refused" };
      target = pub.c; targetPort = pub.p.container;
      var l = listensOn(target, targetPort);
      if (!l) return { status: 0, body: "", error: "reset" };
      if (l.host === "127.0.0.1" || l.host === "localhost") return { status: 0, body: "", error: "reset" };
    } else {
      var peer = resolvePeer(fsRoot, from, host);
      if (!peer) return { status: 0, body: "", error: "resolve" };
      target = peer.self ? from : peer.c;
      if (!target || target.status !== "running") return { status: 0, body: "", error: "refused" };
      if (!listensOn(target, port)) return { status: 0, body: "", error: "refused" };
    }
    if (!target.ready) return { status: 0, body: "", error: "refused" };
    var routes = (target.spec && target.spec.routes) || {};
    var answer = routes[path];
    if (answer == null) return { status: 404, body: "Not Found", error: null };
    if (answer === "@health") {
      var h = healthOf(fsRoot, target);
      return h.okState ? { status: 200, body: h.body, error: null } : { status: 503, body: h.body, error: null };
    }
    return { status: 200, body: interp(answer, target.env), error: null };
  }

  /* What the app's own /health says about the dependency it was given. */
  function healthOf(fsRoot, c) {
    var spec = c.spec || {};
    if (!spec.connects) return { okState: true, body: "ok" };
    /* No dependency configured at all — the app isn't trying to reach
       anything, so it is simply healthy. */
    var url = envVal(spec.connects, c.env);
    if (!url) return { okState: true, body: "ok" };
    var m = String(url).match(/^[a-z]+:\/\/([^:/]+):?(\d+)?/);
    if (!m) return { okState: false, body: "db: bad url" };
    var host = m[1], port = Number(m[2] || 5432);
    if (host === "localhost" || host === "127.0.0.1") {
      var self = listensOn(c, port);
      if (!self) return { okState: false, body: "db: connect ECONNREFUSED 127.0.0.1:" + port };
      return { okState: true, body: "db: connected" };
    }
    var peer = resolvePeer(fsRoot, c, host);
    if (!peer || !peer.c) return { okState: false, body: "db: getaddrinfo ENOTFOUND " + host };
    if (!listensOn(peer.c, port) || peer.c.status !== "running" || !peer.c.ready)
      return { okState: false, body: "db: connect ECONNREFUSED " + host + ":" + port };
    return { okState: true, body: "db: connected" };
  }

  function startProcess(fsRoot, c) {
    var d = daemon(fsRoot);
    var img = d.images[c.image];
    var spec = appSpec(fsRoot, c.command);
    c.spec = spec;
    c.logs = [];
    c.ready = true;
    var view = containerView(fsRoot, c);
    var wd = (img && img.config.workdir) || "/";

    var missing = (spec.requires || []).filter(function (f) {
      return view[(wd === "/" ? "" : wd) + "/" + f] === undefined;
    })[0];
    if (missing) {
      c.logs.push("Error: Cannot find module '" + (wd === "/" ? "" : wd) + "/" + missing + "'");
      return exitWith(c, 1);
    }
    var need = ((spec.env || {}).required || []).filter(function (k) { return !c.env[k]; })[0];
    if (need) {
      c.logs.push("Missing required env var " + need);
      return exitWith(c, 1);
    }
    if (spec.listen) {
      c.listen = { port: Number(envVal(spec.listen.port, c.env)), host: envVal(spec.listen.host, c.env) };
    }
    if (spec.connectOnStart) {
      var h = healthOf(fsRoot, c);
      if (!h.okState) {
        c.logs.push("Error: " + h.body.replace(/^db: /, ""));
        return exitWith(c, 1);
      }
    }
    (spec.logs || []).forEach(function (line) {
      c.logs.push(interp(line, c.env, c.listen ? { host: c.listen.host, port: String(c.listen.port) } : null));
    });
    if (spec.readyAfter) c.ready = false;
    if (spec.exit != null && !spec.idle && !spec.listen) return exitWith(c, spec.exit);
    c.status = "running";
    c.startedSeq = ++d.seq;
    if (img && img.config.healthcheck) c.health = probeHealth(fsRoot, c);
    return c;
  }
  function exitWith(c, code) {
    c.status = "exited"; c.exitCode = code; c.listen = null;
    if (c.restart === "on-failure" && code !== 0) { c.status = "restarting"; c.restartCount = (c.restartCount || 0) + 1; }
    else if (c.restart === "always" || c.restart === "unless-stopped") { c.status = "restarting"; c.restartCount = (c.restartCount || 0) + 1; }
    return c;
  }
  function probeHealth(fsRoot, c) {
    var d = daemon(fsRoot);
    var img = d.images[c.image];
    var hc = img && img.config.healthcheck;
    if (!hc) return null;
    var joined = hc.join(" ");
    var m = joined.match(/https?:\/\/\S+/);
    if (m) {
      var r = request(fsRoot, { url: m[0], from: c.name });
      return r.status === 200 ? "healthy" : "unhealthy";
    }
    if (joined.indexOf("pg_isready") !== -1) return c.ready ? "healthy" : "unhealthy";
    return "healthy";
  }

  /* ---------- docker run / create ---------- */
  var RUN_FLAGS = {
    "-d": 0, "--detach": 0, "--rm": 0, "-P": 0, "--init": 0, "-it": 0, "-i": 0, "-t": 0,
    "--name": 1, "-p": 1, "--publish": 1, "-e": 1, "--env": 1, "--env-file": 1, "-v": 1, "--volume": 1,
    "--network": 1, "--net": 1, "--restart": 1, "-u": 1, "--user": 1, "--entrypoint": 1, "-w": 1, "--workdir": 1
  };
  function parseRunArgs(ctx, args) {
    var o = { env: {}, ports: [], mounts: [], flags: {}, publishAll: false };
    var i = 0;
    for (; i < args.length; i++) {
      var a = args[i];
      if (a.charAt(0) !== "-") break;
      if (!Object.prototype.hasOwnProperty.call(RUN_FLAGS, a)) return { error: "unknown flag: " + a.split("=")[0] };
      var takes = RUN_FLAGS[a], v = takes ? args[++i] : null;
      if (a === "-d" || a === "--detach") o.detach = true;
      else if (a === "--rm") o.rm = true;
      else if (a === "--init") o.init = true;
      else if (a === "-P") o.publishAll = true;
      else if (a === "--name") o.name = v;
      else if (a === "-p" || a === "--publish") o.ports.push(v);
      else if (a === "-e" || a === "--env") {
        var eq = String(v).indexOf("=");
        if (eq === -1) o.env[v] = ctx.env && ctx.env[v] ? ctx.env[v] : "";
        else o.env[String(v).slice(0, eq)] = String(v).slice(eq + 1);
      } else if (a === "--env-file") o.envFile = v;
      else if (a === "-v" || a === "--volume") o.mounts.push(v);
      else if (a === "--network" || a === "--net") o.network = v;
      else if (a === "--restart") o.restart = v;
      else if (a === "-u" || a === "--user") o.user = v;
      else if (a === "--entrypoint") o.entrypoint = v;
      else if (a === "-w" || a === "--workdir") o.workdir = v;
    }
    o.image = args[i];
    o.args = args.slice(i + 1);
    return o;
  }
  function parsePort(text) {
    var parts = String(text).split(":");
    if (parts.length === 3) return { ip: parts[0], host: Number(parts[1]), container: Number(parts[2]) };
    if (parts.length === 2) return { ip: "0.0.0.0", host: Number(parts[0]), container: Number(parts[1]) };
    return { ip: "0.0.0.0", host: Number(parts[0]), container: Number(parts[0]) };
  }

  function dockerRun(ctx, args, detachDefault) {
    var fsRoot = ctx.fs, d = daemon(fsRoot);
    var o = parseRunArgs(ctx, args);
    if (o.error) return bad("docker: " + o.error + "\nSee 'docker run --help'.\n", 125);
    if (!o.image) return bad('docker: "docker run" requires at least 1 argument.\n', 125);

    var img = findImage(d, o.image);
    if (!img) {
      var base = BASE_IMAGES[fullRef(o.image)];
      if (!base) {
        return bad("Unable to find image '" + fullRef(o.image) + "' locally\ndocker: Error response from daemon: pull access denied for " +
          parseRef(o.image).repo + ", repository does not exist or may require 'docker login'.\n", 125);
      }
      img = pullBase(d, fullRef(o.image));
    }
    var name = o.name || ("brave_" + hash("n" + d.seq++).slice(0, 6));
    if (d.containers[name]) {
      return bad('docker: Error response from daemon: Conflict. The container name "/' + name + '" is already in use by container "' +
        d.containers[name].id + '". You have to remove (or rename) that container to be able to reuse that name.\n', 125);
    }
    var out = "";
    /* Env: the image's ENV, then --env-file, then -e (last wins). */
    var env = {};
    keys(img.config.env).forEach(function (k) { env[k] = img.config.env[k]; });
    if (o.envFile) {
      var node = SH.nodeAt(fsRoot, SH.resolve(ctx.cwd, ctx.home, o.envFile));
      if (!node || node.d) return bad("docker: open " + o.envFile + ": no such file or directory.\n", 125);
      String(node.f).split("\n").forEach(function (line) {
        var t = line.trim();
        if (!t || t.charAt(0) === "#") return;
        var eq = t.indexOf("=");
        if (eq !== -1) env[t.slice(0, eq)] = t.slice(eq + 1);
      });
    }
    keys(o.env).forEach(function (k) { env[k] = o.env[k]; });

    /* A USER the image never created is a start-time failure, not a build one. */
    var user = o.user || img.config.user || "root";
    var passwd = img.files["/etc/passwd"] || "";
    var known = (BASE_IMAGES[img.base] || {}).users || ["root"];
    if (user !== "root" && known.indexOf(user) === -1 && passwd.indexOf(user + ":") === -1) {
      return bad("docker: Error response from daemon: unable to find user " + user + ": no matching entries in passwd file.\n", 125);
    }

    var ports = [];
    for (var pi = 0; pi < o.ports.length; pi++) {
      var p = parsePort(o.ports[pi]);
      var taken = null;
      keys(d.containers).forEach(function (n) {
        if (d.containers[n].status !== "running") return;
        (d.containers[n].ports || []).forEach(function (q) { if (Number(q.host) === p.host) taken = n; });
      });
      if (taken) {
        return bad("docker: Error response from daemon: driver failed programming external connectivity on endpoint " + name +
          ": Bind for 0.0.0.0:" + p.host + " failed: port is already allocated.\n", 125);
      }
      ports.push(p);
    }
    if (o.publishAll) {
      var next = 32768;
      img.config.exposed.forEach(function (e) {
        ports.push({ ip: "0.0.0.0", host: next++, container: Number(String(e).split("/")[0]) });
      });
    }

    var mounts = [];
    o.mounts.forEach(function (spec) {
      var parts = String(spec).split(":");
      var src = parts[0], target = parts[1];
      if (src.charAt(0) === "/" || src.charAt(0) === ".") {
        mounts.push({ type: "bind", source: SH.resolve(ctx.cwd, ctx.home, src), target: target });
      } else {
        if (!d.volumes[src]) d.volumes[src] = { files: {} };
        mounts.push({ type: "volume", source: src, target: target });
      }
    });

    var network = o.network || "bridge";
    if (!d.networks[network]) return bad("docker: Error response from daemon: network " + network + " not found.\n", 125);

    var entry = o.entrypoint ? [o.entrypoint] : (img.config.entrypoint || []);
    var cmd = o.args.length ? o.args : (img.config.cmd || []);
    var command = entry.concat(cmd);

    var c = {
      id: nextId(d, ""), name: name, image: img.id, status: "created", exitCode: null, health: null,
      ports: ports, networks: [network], mounts: mounts, env: env, user: user, command: command,
      restart: o.restart || "no", restartCount: 0, init: !!o.init, layer: {}, logs: [],
      shellForm: command[0] === "/bin/sh" && command[1] === "-c", createdSeq: ++d.seq, ready: true
    };
    d.containers[name] = c;
    startProcess(fsRoot, c);
    if (o.rm && c.status === "exited") delete d.containers[name];
    out += c.id + "\n";
    if (!o.detach && !detachDefault) {
      out = c.logs.join("\n") + (c.logs.length ? "\n" : "");
    }
    return ok(out);
  }
  function pullBase(d, ref) {
    var base = BASE_IMAGES[ref];
    var img = {
      id: "sha256:" + hash("base-image:" + ref), tags: [ref], base: ref, files: {},
      config: defaultConfig(ref), layers: [], size: base.size
    };
    if (!d.images[img.id]) d.images[img.id] = img;
    else img = d.images[img.id];
    if (img.tags.indexOf(ref) === -1) img.tags.push(ref);
    return img;
  }

  /* ---------- stop / kill / start / rm ----------
     docker stop sends SIGTERM, waits 10s, then SIGKILL. Whether the app ever
     SEES the signal depends on who is PID 1 — the exit code is the lesson. */
  function stopContainer(c, signalDelivered) {
    if (c.status !== "running" && c.status !== "restarting") return;
    var spec = c.spec || {};
    var delivered = signalDelivered && (!c.shellForm || c.init);
    if (!delivered) { c.exitCode = 137; c.stoppedAfter = 10; }
    else if (spec.sigterm === "graceful") { c.exitCode = 0; c.stoppedAfter = 0; }
    else if (c.init) { c.exitCode = 143; c.stoppedAfter = 0; }
    else { c.exitCode = 137; c.stoppedAfter = 10; }
    c.status = "exited"; c.listen = null; c.health = null;
  }

  function humanSize(bytes) {
    if (!bytes) return "0B";
    var u = ["B", "kB", "MB", "GB"], i = 0, n = bytes;
    while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
    return (n >= 10 ? Math.round(n) : Math.round(n * 10) / 10) + u[i];
  }
  function statusText(c) {
    if (c.status === "running") return "Up 3 seconds" + (c.health ? " (" + c.health + ")" : "");
    if (c.status === "restarting") return "Restarting (" + c.exitCode + ") 1 second ago";
    if (c.status === "created") return "Created";
    return "Exited (" + c.exitCode + ") 2 seconds ago";
  }
  function portsText(c) {
    return (c.ports || []).map(function (p) { return p.ip + ":" + p.host + "->" + p.container + "/tcp"; }).join(", ");
  }
  function template(tpl, obj) {
    return String(tpl).replace(/\{\{\s*\.([A-Za-z0-9_.]+)\s*\}\}/g, function (m, pathText) {
      var cur = obj;
      pathText.split(".").forEach(function (part) { cur = cur == null ? cur : cur[part]; });
      return cur == null ? "" : (typeof cur === "object" ? JSON.stringify(cur) : String(cur));
    });
  }
  function psRow(d, c) {
    var img = d.images[c.image];
    return {
      ID: c.id.slice(0, 12), Names: c.name, Image: (img && img.tags[0]) || c.image.slice(0, 19),
      Status: statusText(c), Ports: portsText(c), Command: '"' + c.command.join(" ") + '"', State: c.status
    };
  }
  function sortedContainers(d) {
    return keys(d.containers).map(function (n) { return d.containers[n]; })
      .sort(function (a, b) { return a.createdSeq - b.createdSeq; });
  }

  /* ============================================================
     A tiny YAML subset for compose.yaml: maps, lists, scalars,
     quoted strings. No anchors, no multi-line blocks — and an
     indentation mistake is an error, not a guess.
     ============================================================ */
  function parseYaml(text) {
    var lines = String(text).split("\n");
    var rootObj = {};
    var stack = [{ indent: -1, value: rootObj }];
    for (var i = 0; i < lines.length; i++) {
      var raw = lines[i];
      if (!raw.trim() || raw.trim().charAt(0) === "#") continue;
      var indent = raw.match(/^\s*/)[0].length;
      var line = raw.trim();
      while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop();
      var parent = stack[stack.length - 1];
      if (parent.indent >= indent && stack.length > 1) throw new Error("yaml: line " + (i + 1) + ": did not find expected key");
      if (line.charAt(0) === "-") {
        var item = line.slice(1).trim();
        if (!Array.isArray(parent.value)) {
          if (parent.key == null) throw new Error("yaml: line " + (i + 1) + ": block sequence entries are not allowed here");
          parent.holder[parent.key] = [];
          parent.value = parent.holder[parent.key];
        }
        /* `- pgdata:/var/lib/data` is a SCALAR. Only a colon followed by a
           space (or ending the line) starts a nested mapping — which is the
           difference between a volume that mounts and one that doesn't. */
        if (/:(\s|$)/.test(item) && item.charAt(0) !== '"' && item.charAt(0) !== "'") {
          var obj = {};
          var km = item.match(/^([^:]+):\s*(.*)$/);
          var itemKey = km[1].trim();
          /* The item's keys are not at the dash's indent, they start where the
             first key does — `- env:` puts `env`, and every sibling after it,
             two columns in. Recording that as childIndent is what lets a later
             `run:` at the same column be read as another key of this item
             rather than as a drifted mapping. */
          var keyIndent = raw.indexOf(itemKey, indent);
          parent.value.push(obj);
          stack.push({ indent: indent, value: obj, holder: obj, childIndent: keyIndent });
          if (km[2] === "") {
            /* `- env:` with nothing after it opens a nested mapping, exactly
               as `env:` would anywhere else. Treating it as an empty string
               instead silently flattened the next lines into the item. */
            obj[itemKey] = {};
            stack.push({ indent: keyIndent, value: obj[itemKey], holder: obj, key: itemKey });
          } else obj[itemKey] = scalar(km[2]);
        } else parent.value.push(scalar(item));
        continue;
      }
      var m = line.match(/^([^:]+):\s*(.*)$/);
      if (!m) throw new Error("yaml: line " + (i + 1) + ": could not find expected ':'");
      var key = m[1].trim(), rest = m[2];
      if (Array.isArray(parent.value)) throw new Error("yaml: line " + (i + 1) + ": mapping values are not allowed here");
      /* Every key of one mapping sits at the same indent. Real YAML rejects a
         file that drifts, and so does this — a compose file that "looks
         fine" but starts nothing is a worse lesson than an error. */
      if (parent.childIndent == null) parent.childIndent = indent;
      else if (indent !== parent.childIndent)
        throw new Error("yaml: line " + (i + 1) + ": mapping values are not allowed in this context");
      if (rest === "") {
        parent.value[key] = {};
        stack.push({ indent: indent, value: parent.value[key], holder: parent.value, key: key });
      } else {
        parent.value[key] = scalar(rest);
      }
    }
    return rootObj;
  }
  function scalar(v) {
    var t = String(v).trim();
    if ((t.charAt(0) === '"' && t.slice(-1) === '"') || (t.charAt(0) === "'" && t.slice(-1) === "'")) return t.slice(1, -1);
    if (/^-?\d+$/.test(t)) return t;
    return t;
  }

  /* ============================================================
     exec — run something inside a container
     ============================================================ */
  function execIn(fsRoot, c, argv, asUser) {
    var view = containerView(fsRoot, c);
    var d = daemon(fsRoot);
    var img = d.images[c.image];
    var res = runInFiles(view, argv.join(" "), {
      cwd: (img && img.config.workdir) || "/", env: c.env, user: asUser || c.user,
      daemon: d, fsRoot: fsRoot, container: c.name,
      dirs: (c.mounts || []).map(function (m) { return m.target; })
        .concat([(img && img.config.workdir) || "/", (c.spec && c.spec.data) || ""])
    });
    writeBack(fsRoot, c, res.files, view);
    return res;
  }

  /* curl, from the host or from inside a container. A pure query of the
     declared world: it never changes anything. */
  var baseCurl = SH.COMMANDS.curl;
  SH.COMMANDS.curl = function (ctx, args) {
    /* With no containers anywhere, localhost:3000 is not a published port —
       it is whatever the shell's own process table has listening there. */
    if (!dockerInPlay(ctx)) return baseCurl(ctx, args);
    var rest = args.filter(function (a) { return a.charAt(0) !== "-"; });
    var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
    var url = rest[0] || "";
    var fsRoot = ACTIVE && ACTIVE.fsRoot ? ACTIVE.fsRoot : ctx.fs;
    var from = ACTIVE ? ACTIVE.container : null;
    var bare = String(url).replace(/^https?:\/\//, "");
    var hostPort = bare.split("/")[0];
    var host = hostPort.split(":")[0] || "localhost";
    var port = hostPort.split(":")[1] || "80";
    var r = request(fsRoot, { url: url, from: from });
    if (r.error === "refused")
      return bad("curl: (7) Failed to connect to " + host + " port " + port + " after 0 ms: Could not connect to server\n", 7);
    if (r.error === "reset") return bad("curl: (56) Recv failure: Connection reset by peer\n", 56);
    if (r.error === "resolve") return bad("curl: (6) Could not resolve host: " + host + "\n", 6);
    if (flags.indexOf("f") !== -1 && r.status >= 400)
      return bad("curl: (22) The requested URL returned error: " + r.status + "\n", 22);
    if (flags.indexOf("i") !== -1) return ok("HTTP/1.1 " + r.status + "\n\n" + r.body + "\n");
    return ok(r.body + "\n");
  };
  SH.COMMANDS.pg_isready = function (ctx) {
    var fsRoot = ACTIVE && ACTIVE.fsRoot ? ACTIVE.fsRoot : ctx.fs;
    var c = ACTIVE && ACTIVE.container ? daemon(fsRoot).containers[ACTIVE.container] : null;
    if (c && c.status === "running" && c.ready) return ok("/var/run/postgresql:5432 - accepting connections\n");
    return bad("/var/run/postgresql:5432 - no response\n", 2);
  };

  /* ============================================================
     COMPOSE
     ============================================================ */
  function composeProject(ctx) { return SH.resolve(ctx.cwd, ctx.home, ".").split("/").filter(Boolean).pop() || "default"; }
  function composeFile(ctx, name) {
    var candidates = name ? [name] : ["compose.yaml", "compose.yml", "docker-compose.yaml", "docker-compose.yml"];
    for (var i = 0; i < candidates.length; i++) {
      var node = SH.nodeAt(ctx.fs, SH.resolve(ctx.cwd, ctx.home, candidates[i]));
      if (node && node.f !== undefined) return { path: candidates[i], text: node.f };
    }
    return null;
  }
  function serviceOrder(services) {
    var out = [], seen = {};
    function visit(name) {
      if (seen[name]) return;
      seen[name] = true;
      var dep = services[name] && services[name].depends_on;
      var names = Array.isArray(dep) ? dep : keys(dep || {});
      names.forEach(function (n) { if (services[n]) visit(n); });
      out.push(name);
    }
    keys(services).forEach(visit);
    return out;
  }
  function composeUp(ctx, args) {
    var d = daemon(ctx.fs);
    var fileName = null, fi = args.indexOf("-f");
    if (fi !== -1) fileName = args[fi + 1];
    var f = composeFile(ctx, fileName);
    if (!f) return bad("no configuration file provided: not found\n");
    var doc;
    try { doc = parseYaml(f.text); }
    catch (e) { return bad("validating " + f.path + ": " + e.message + "\n"); }
    var services = doc.services || {};
    if (!keys(services).length) return bad("validating " + f.path + ": yaml: no services defined\n");

    var project = composeProject(ctx);
    var netName = project + "_default";
    if (!d.networks[netName]) d.networks[netName] = { userDefined: true };
    var out = "";
    var state = { project: project, services: {} };

    var order = serviceOrder(services);
    for (var i = 0; i < order.length; i++) {
      var name = order[i], svc = services[name] || {};
      var tag = project + "-" + name;
      if (svc.build) {
        var dir = SH.resolve(ctx.cwd, ctx.home, typeof svc.build === "string" ? svc.build : (svc.build.context || "."));
        var built = buildAt(ctx, dir, [tag], {});
        if (built.error) return bad("failed to build " + name + ": " + built.error + "\n");
        out += "#" + (i + 1) + " building " + name + "\n";
      } else if (svc.image) {
        if (!findImage(d, svc.image)) {
          if (!BASE_IMAGES[fullRef(svc.image)]) return bad("pull access denied for " + svc.image + "\n");
          pullBase(d, fullRef(svc.image));
        }
        tag = svc.image;
      }
      /* Wait for a health-gated dependency before starting this service —
         the difference between "started" and "ready". */
      var dep = svc.depends_on;
      if (dep && !Array.isArray(dep)) {
        keys(dep).forEach(function (dn) {
          var cond = dep[dn] && dep[dn].condition;
          var depC = d.containers[project + "-" + dn + "-1"];
          if (cond === "service_healthy" && depC) {
            depC.ready = true;
            depC.health = probeHealth(ctx.fs, depC) || "healthy";
          }
        });
      }
      var runArgs = ["-d", "--name", project + "-" + name + "-1", "--network", netName];
      [].concat(svc.ports || []).forEach(function (p) { runArgs.push("-p", String(p)); });
      keys(svc.environment || {}).forEach(function (k) { runArgs.push("-e", k + "=" + svc.environment[k]); });
      [].concat(svc.volumes || []).forEach(function (v) { runArgs.push("-v", String(v)); });
      runArgs.push(tag);
      var r = dockerRun(ctx, runArgs, true);
      out += r.out + r.err;
      var c = d.containers[project + "-" + name + "-1"];
      if (c) {
        c.composeService = name;
        c.composeProject = project;
        if (svc.healthcheck && svc.healthcheck.test) {
          c.composeHealth = [].concat(svc.healthcheck.test).join(" ");
          c.health = c.ready ? "healthy" : "unhealthy";
        }
        state.services[name] = { container: c.name };
      }
      out += " Container " + project + "-" + name + "-1  Started\n";
    }
    d.compose = state;
    return ok(out);
  }
  function composeDown(ctx, args) {
    var d = daemon(ctx.fs);
    var project = composeProject(ctx);
    keys(d.containers).forEach(function (n) {
      if (d.containers[n].composeProject === project) delete d.containers[n];
    });
    if (args.indexOf("-v") !== -1 || args.indexOf("--volumes") !== -1) {
      var f = composeFile(ctx, null);
      var doc = null;
      try { doc = f ? parseYaml(f.text) : null; } catch (e) { doc = null; }
      keys((doc && doc.volumes) || {}).forEach(function (v) { delete d.volumes[v]; });
    }
    delete d.networks[project + "_default"];
    d.compose = null;
    return ok(" Container " + project + " Removed\n Network " + project + "_default  Removed\n");
  }

  /* ============================================================
     docker — the CLI
     ============================================================ */
  function buildAt(ctx, dirAbs, tags, opts) {
    var d = daemon(ctx.fs);
    var dfName = opts.file || "Dockerfile";
    var dfNode = SH.nodeAt(ctx.fs, SH.resolve(dirAbs, ctx.home, dfName));
    if (!dfNode || dfNode.f === undefined) {
      return { error: "failed to read dockerfile: open " + dfName + ": no such file or directory" };
    }
    var context = buildContext(ctx.fs, dirAbs);
    if (!context) return { error: "failed to read context: " + dirAbs };
    var res = buildImage(ctx.fs, {
      context: context, instructions: parseDockerfile(dfNode.f), tags: tags,
      buildArgs: opts.buildArgs || {}, secrets: opts.secrets || {}, target: opts.target, noCache: opts.noCache
    });
    d.builds.push(res.record);
    return res;
  }

  function dockerBuild(ctx, args) {
    var tags = [], opts = { buildArgs: {}, secrets: {} }, pathArg = ".";
    for (var i = 0; i < args.length; i++) {
      var a = args[i];
      if (a === "-t" || a === "--tag") tags.push(args[++i]);
      else if (a === "-f" || a === "--file") opts.file = args[++i];
      else if (a === "--target") opts.target = args[++i];
      else if (a === "--no-cache") opts.noCache = true;
      else if (a === "--build-arg") {
        var kv = String(args[++i]), eq = kv.indexOf("=");
        opts.buildArgs[kv.slice(0, eq)] = kv.slice(eq + 1);
      } else if (a === "--secret") {
        var spec = String(args[++i]);
        var id = (spec.match(/id=([^,]+)/) || [])[1];
        var src = (spec.match(/src=([^,]+)/) || [])[1] || id;
        var node = SH.nodeAt(ctx.fs, SH.resolve(ctx.cwd, ctx.home, src));
        if (!node || node.f === undefined) return bad("ERROR: failed to build: could not read " + src + "\n");
        opts.secrets[id] = node.f;
      } else if (a.charAt(0) === "-") return bad("docker: unknown flag: " + a.split("=")[0] + "\n", 125);
      else pathArg = a;
    }
    var dirAbs = SH.resolve(ctx.cwd, ctx.home, pathArg);
    var res = buildAt(ctx, dirAbs, tags, opts);
    if (res.error) return bad("ERROR: " + res.error + "\n");
    var out = "";
    res.record.steps.forEach(function (s, ix) {
      out += "#" + (ix + 2) + " [" + (ix + 1) + "/" + res.record.steps.length + "] " + s.instr + "\n";
      if (s.cached) out += "#" + (ix + 2) + " CACHED\n";
    });
    out += "#" + (res.record.steps.length + 2) + " exporting to image\n";
    tags.forEach(function (t) { out += " => naming to " + fullRef(t) + "\n"; });
    return ok(out);
  }

  function requireContainer(d, name) {
    var c = d.containers[name];
    if (!c) {
      /* Real docker matches an id prefix too. */
      keys(d.containers).forEach(function (n) { if (d.containers[n].id.indexOf(name) === 0) c = d.containers[n]; });
    }
    return c;
  }

  var CMD = {
    build: dockerBuild,
    run: function (ctx, args) { return dockerRun(ctx, args); },
    create: function (ctx, args) {
      var r = dockerRun(ctx, args.concat());
      return r;
    },
    ps: function (ctx, args) {
      var d = daemon(ctx.fs);
      var all = args.indexOf("-a") !== -1 || args.indexOf("--all") !== -1;
      var quiet = args.indexOf("-q") !== -1;
      var fi = args.indexOf("--format");
      var tpl = fi !== -1 ? args[fi + 1] : null;
      var list = sortedContainers(d).filter(function (c) { return all || c.status === "running" || c.status === "restarting"; });
      if (quiet) return ok(list.map(function (c) { return c.id.slice(0, 12); }).join("\n") + (list.length ? "\n" : ""));
      if (tpl) return ok(list.map(function (c) { return template(tpl, psRow(d, c)); }).join("\n") + (list.length ? "\n" : ""));
      var rows = list.map(function (c) {
        var r = psRow(d, c);
        return r.ID + "   " + r.Image + "   " + r.Command + "   " + r.Status + "   " + r.Ports + "   " + r.Names;
      });
      return ok("CONTAINER ID   IMAGE   COMMAND   STATUS   PORTS   NAMES\n" + rows.join("\n") + (rows.length ? "\n" : ""));
    },
    logs: function (ctx, args) {
      var d = daemon(ctx.fs);
      var name = args.filter(function (a) { return a.charAt(0) !== "-"; })[0];
      var c = requireContainer(d, name);
      if (!c) return bad("Error response from daemon: No such container: " + name + "\n");
      return ok(c.logs.join("\n") + (c.logs.length ? "\n" : ""));
    },
    exec: function (ctx, args) {
      var d = daemon(ctx.fs), asUser = null, i = 0;
      while (args[i] && args[i].charAt(0) === "-") {
        if (args[i] === "-u" || args[i] === "--user") asUser = args[++i];
        i++;
      }
      var name = args[i], argv = args.slice(i + 1);
      var c = requireContainer(d, name);
      if (!c) return bad("Error response from daemon: No such container: " + name + "\n");
      if (c.status !== "running") return bad("Error response from daemon: Container " + c.id + " is not running\n");
      if (!argv.length) return bad("docker: 'docker exec' requires at least 2 arguments.\n", 125);
      var res = execIn(ctx.fs, c, argv, asUser);
      return { out: res.out, err: res.err, code: res.code };
    },
    stop: function (ctx, args) { return stopMany(ctx, args, true); },
    kill: function (ctx, args) { return stopMany(ctx, args, false); },
    restart: function (ctx, args) {
      var d = daemon(ctx.fs), out = "";
      args.filter(function (a) { return a.charAt(0) !== "-"; }).forEach(function (n) {
        var c = requireContainer(d, n);
        if (!c) return;
        stopContainer(c, true);
        c.layer = c.layer || {};
        startProcess(ctx.fs, c);
        out += n + "\n";
      });
      return ok(out);
    },
    start: function (ctx, args) {
      var d = daemon(ctx.fs), out = "";
      args.filter(function (a) { return a.charAt(0) !== "-"; }).forEach(function (n) {
        var c = requireContainer(d, n);
        if (!c) return;
        startProcess(ctx.fs, c);
        out += n + "\n";
      });
      return ok(out);
    },
    rm: function (ctx, args) {
      var d = daemon(ctx.fs);
      var force = args.indexOf("-f") !== -1 || args.indexOf("--force") !== -1;
      var names = args.filter(function (a) { return a.charAt(0) !== "-"; });
      var out = "", err = "", code = 0;
      names.forEach(function (n) {
        var c = requireContainer(d, n);
        if (!c) { err += "Error response from daemon: No such container: " + n + "\n"; code = 1; return; }
        if ((c.status === "running" || c.status === "restarting") && !force) {
          err += 'Error response from daemon: cannot remove container "/' + c.name +
            '": container is running: stop the container before removing or force remove\n';
          code = 1;
          return;
        }
        delete d.containers[c.name];
        out += n + "\n";
      });
      return { out: out, err: err, code: code };
    },
    images: function (ctx, args) {
      var d = daemon(ctx.fs);
      if (args.indexOf("-q") !== -1) {
        return ok(keys(d.images).map(function (id) { return id.slice(7, 19); }).join("\n") + "\n");
      }
      var rows = [];
      keys(d.images).forEach(function (id) {
        var img = d.images[id];
        img.tags.forEach(function (t) {
          var p = parseRef(t);
          rows.push(p.repo + "   " + p.tag + "   " + id.slice(7, 19) + "   " + humanSize(img.size));
        });
      });
      return ok("REPOSITORY   TAG   IMAGE ID   SIZE\n" + rows.join("\n") + (rows.length ? "\n" : ""));
    },
    history: function (ctx, args) {
      var d = daemon(ctx.fs);
      var img = findImage(d, args.filter(function (a) { return a.charAt(0) !== "-"; })[0]);
      if (!img) return bad("Error response from daemon: No such image: " + args[0] + "\n");
      var rows = img.layers.slice().reverse().map(function (l) {
        return img.id.slice(7, 19) + "   " + humanSize(l.size) + "   " + l.instr;
      });
      rows.push("<missing>   " + humanSize((BASE_IMAGES[img.base] || {}).size || 0) + "   FROM " + img.base);
      return ok("IMAGE   SIZE   CREATED BY\n" + rows.join("\n") + "\n");
    },
    tag: function (ctx, args) {
      var d = daemon(ctx.fs);
      var img = findImage(d, args[0]);
      if (!img) return bad("Error response from daemon: No such image: " + args[0] + "\n");
      tagImage(d, img, args[1]);
      return ok("");
    },
    rmi: function (ctx, args) {
      var d = daemon(ctx.fs), out = "";
      args.filter(function (a) { return a.charAt(0) !== "-"; }).forEach(function (ref) {
        var img = findImage(d, ref);
        if (!img) { out += "Error: No such image: " + ref + "\n"; return; }
        var full = fullRef(ref);
        img.tags = img.tags.filter(function (t) { return t !== full; });
        out += "Untagged: " + full + "\n";
        if (!img.tags.length) { delete d.images[img.id]; out += "Deleted: " + img.id + "\n"; }
      });
      return ok(out);
    },
    pull: function (ctx, args) {
      var d = daemon(ctx.fs);
      var ref = fullRef(args.filter(function (a) { return a.charAt(0) !== "-"; })[0]);
      if (d.registry[ref]) {
        var stored = d.images[d.registry[ref].id];
        if (!stored) {
          stored = copy(d.registry[ref].image);
          /* A pull gives you the ref you asked for — not whatever names the
             image happened to carry on the machine that pushed it. */
          stored.tags = [];
          d.images[stored.id] = stored;
        }
        tagImage(d, stored, ref);
        return ok("Status: Downloaded newer image for " + ref + "\n");
      }
      if (BASE_IMAGES[ref]) { pullBase(d, ref); return ok("Status: Downloaded newer image for " + ref + "\n"); }
      return bad("Error response from daemon: manifest for " + ref + " not found: manifest unknown\n");
    },
    push: function (ctx, args) {
      var d = daemon(ctx.fs);
      var ref = fullRef(args.filter(function (a) { return a.charAt(0) !== "-"; })[0]);
      var img = findImage(d, ref);
      if (!img) return bad("An image does not exist locally with the tag: " + parseRef(ref).repo + "\n");
      d.registry[ref] = { id: img.id, image: copy(img) };
      return ok("latest: digest: " + img.id + " size: " + img.size + "\n");
    },
    inspect: function (ctx, args) { return inspectAny(ctx, args, null); },
    image: function (ctx, args) {
      var sub = args[0], rest = args.slice(1);
      if (sub === "ls") return CMD.images(ctx, rest);
      if (sub === "rm") return CMD.rmi(ctx, rest);
      if (sub === "history") return CMD.history(ctx, rest);
      if (sub === "inspect") return inspectAny(ctx, rest, "image");
      if (sub === "pull") return CMD.pull(ctx, rest);
      if (sub === "push") return CMD.push(ctx, rest);
      if (sub === "tag") return CMD.tag(ctx, rest);
      return bad("docker image: '" + String(sub) + "' is not a docker image command.\n", 125);
    },
    container: function (ctx, args) {
      var sub = args[0], rest = args.slice(1);
      if (CMD[sub] && sub !== "container") return CMD[sub](ctx, rest);
      return bad("docker container: '" + String(sub) + "' is not a docker container command.\n", 125);
    },
    volume: function (ctx, args) {
      var d = daemon(ctx.fs), sub = args[0], rest = args.slice(1).filter(function (a) { return a.charAt(0) !== "-"; });
      if (sub === "create") { d.volumes[rest[0]] = d.volumes[rest[0]] || { files: {} }; return ok(rest[0] + "\n"); }
      if (sub === "ls") return ok("DRIVER    VOLUME NAME\n" + keys(d.volumes).map(function (v) { return "local     " + v; }).join("\n") + "\n");
      if (sub === "rm") { rest.forEach(function (v) { delete d.volumes[v]; }); return ok(rest.join("\n") + "\n"); }
      if (sub === "inspect") {
        if (!d.volumes[rest[0]]) return bad("Error response from daemon: get " + rest[0] + ": no such volume\n");
        return ok(JSON.stringify([{ Name: rest[0], Driver: "local", Mountpoint: "/var/lib/docker/volumes/" + rest[0] + "/_data" }], null, 2) + "\n");
      }
      return bad("docker volume: '" + String(sub) + "' is not a docker volume command.\n", 125);
    },
    network: function (ctx, args) {
      var d = daemon(ctx.fs), sub = args[0], rest = args.slice(1).filter(function (a) { return a.charAt(0) !== "-"; });
      if (sub === "create") {
        if (d.networks[rest[0]]) return bad("Error response from daemon: network with name " + rest[0] + " already exists\n");
        d.networks[rest[0]] = { userDefined: true };
        return ok(hash("net" + rest[0]).slice(0, 12) + "\n");
      }
      if (sub === "ls") return ok("NETWORK ID   NAME   DRIVER\n" + keys(d.networks).map(function (n) { return hash(n).slice(0, 12) + "   " + n + "   bridge"; }).join("\n") + "\n");
      if (sub === "rm") { rest.forEach(function (n) { delete d.networks[n]; }); return ok(rest.join("\n") + "\n"); }
      if (sub === "connect") {
        var c = requireContainer(d, rest[1]);
        if (!c || !d.networks[rest[0]]) return bad("Error response from daemon: network or container not found\n");
        if (c.networks.indexOf(rest[0]) === -1) c.networks.push(rest[0]);
        return ok("");
      }
      if (sub === "inspect") return ok(JSON.stringify([{ Name: rest[0], Driver: "bridge" }], null, 2) + "\n");
      return bad("docker network: '" + String(sub) + "' is not a docker network command.\n", 125);
    },
    compose: function (ctx, args) {
      var d = daemon(ctx.fs);
      var i = 0, fileName = null, project = null;
      while (args[i] && args[i].charAt(0) === "-") {
        if (args[i] === "-f") fileName = args[i + 1];
        if (args[i] === "-p") project = args[i + 1];
        i += 2;
      }
      var sub = args[i], rest = args.slice(i + 1);
      if (fileName) rest = ["-f", fileName].concat(rest);
      if (sub === "up") return composeUp(ctx, rest);
      if (sub === "down") return composeDown(ctx, rest);
      if (sub === "build") return composeUp(ctx, rest.concat(["--build-only"]));
      if (sub === "ps") {
        var names = keys(d.containers).filter(function (n) { return d.containers[n].composeProject; });
        return ok("NAME   IMAGE   STATUS\n" + names.map(function (n) {
          var c = d.containers[n];
          return c.name + "   " + ((d.images[c.image] || {}).tags || [""])[0] + "   " + statusText(c);
        }).join("\n") + (names.length ? "\n" : ""));
      }
      if (sub === "logs") {
        var svc = rest.filter(function (a) { return a.charAt(0) !== "-"; })[0];
        var proj = composeProject(ctx);
        var target = svc ? [proj + "-" + svc + "-1"] : keys(d.containers).filter(function (n) { return d.containers[n].composeProject === proj; });
        var out = "";
        target.forEach(function (n) {
          var c = d.containers[n];
          if (c) c.logs.forEach(function (l) { out += n + "  | " + l + "\n"; });
        });
        return ok(out);
      }
      if (sub === "exec") {
        var svcName = rest[0], argv = rest.slice(1);
        var c2 = d.containers[composeProject(ctx) + "-" + svcName + "-1"];
        if (!c2) return bad("service \"" + svcName + "\" is not running\n");
        var res = execIn(ctx.fs, c2, argv, null);
        return { out: res.out, err: res.err, code: res.code };
      }
      return bad("docker compose: '" + String(sub) + "' is not a docker compose command.\n", 125);
    }
  };
  function stopMany(ctx, args, graceful) {
    var d = daemon(ctx.fs), out = "";
    args.filter(function (a) { return a.charAt(0) !== "-"; }).forEach(function (n) {
      var c = requireContainer(d, n);
      if (!c) { out += "Error response from daemon: No such container: " + n + "\n"; return; }
      stopContainer(c, graceful);
      out += n + "\n";
    });
    return ok(out);
  }
  function inspectAny(ctx, args, kind) {
    var d = daemon(ctx.fs);
    var tpl = null, fi = args.indexOf("--format");
    if (fi !== -1) { tpl = args[fi + 1]; args = args.slice(0, fi).concat(args.slice(fi + 2)); }
    var name = args.filter(function (a) { return a.charAt(0) !== "-"; })[0];
    var img = findImage(d, name), c = kind === "image" ? null : requireContainer(d, name);
    var obj;
    if (c && kind !== "image") {
      var cimg = d.images[c.image];
      obj = {
        Id: c.id, Name: "/" + c.name, State: { Status: c.status, ExitCode: c.exitCode, Health: { Status: c.health } },
        Config: { User: c.user, Env: keys(c.env).map(function (k) { return k + "=" + c.env[k]; }), Cmd: c.command, Image: (cimg && cimg.tags[0]) || c.image },
        NetworkSettings: { Networks: c.networks }
      };
    } else if (img) {
      obj = {
        Id: img.id, RepoTags: img.tags, Size: img.size,
        Config: {
          User: img.config.user, Env: keys(img.config.env).map(function (k) { return k + "=" + img.config.env[k]; }),
          Cmd: img.config.cmd, Entrypoint: img.config.entrypoint, WorkingDir: img.config.workdir,
          ExposedPorts: img.config.exposed
        }
      };
    } else return bad("Error: No such object: " + name + "\n");
    if (tpl) return ok(template(tpl, obj) + "\n");
    return ok(JSON.stringify([obj], null, 2) + "\n");
  }

  var HELP = "Usage:  docker [OPTIONS] COMMAND\n\nCommon Commands:\n  run  build  images  ps  exec  logs  stop  rm  compose\n";
  function docker(ctx, args) {
    var sub = args[0];
    if (!sub || sub === "--help" || sub === "-h" || sub === "help") return ok(HELP);
    if (sub === "--version" || sub === "version") return ok("Docker version 27.1.1 (CodeLab dockersim)\n");
    var fn = CMD[sub];
    if (!fn) return bad("docker: '" + sub + "' is not a docker command.\nSee 'docker --help'\n", 125);
    var res;
    try { res = fn(ctx, args.slice(1)); }
    catch (e) {
      if (API.strict) throw e;
      return bad("dockersim: internal error in `docker " + sub + "`: " + (e && e.message) + "\n", 2);
    }
    settle(daemon(ctx.fs), ctx.fs);
    return res;
  }
  /* A moment passes between commands: anything still running has finished
     starting up. Within ONE compose up it has not — which is exactly why
     depends_on without a health condition is not readiness. */
  function settle(d, fsRoot) {
    keys(d.containers).forEach(function (n) {
      var c = d.containers[n];
      if (c.status === "running" && !c.ready) {
        c.ready = true;
        if (c.composeHealth || (d.images[c.image] && d.images[c.image].config.healthcheck)) {
          c.health = probeHealth(fsRoot, c) || c.health;
        }
      }
    });
  }

  /* ============================================================
     TEST HELPERS — what a checkpoint can ask about the daemon
     ============================================================ */
  function testApi(fsRoot) {
    function d() { return daemon(fsRoot); }
    var api = {
      images: function () {
        var out = [];
        keys(d().images).forEach(function (id) { d().images[id].tags.forEach(function (t) { out.push(t); }); });
        return out.sort();
      },
      image: function (ref) {
        var img = findImage(d(), ref);
        if (!img) return null;
        return {
          id: img.id, tags: img.tags.slice(), size: img.size, base: img.base,
          layers: img.layers.map(function (l) { return { instr: l.instr, size: l.size }; }),
          user: img.config.user, env: copy(img.config.env), cmd: img.config.cmd, entrypoint: img.config.entrypoint,
          workdir: img.config.workdir, exposed: img.config.exposed.slice(), files: keys(img.files).sort()
        };
      },
      containers: function (o) {
        return sortedContainers(d())
          .filter(function (c) { return (o && o.all) || c.status === "running" || c.status === "restarting"; })
          .map(function (c) { return c.name; });
      },
      container: function (name) {
        var c = d().containers[name];
        if (!c) return null;
        return {
          id: c.id, name: c.name, image: c.image, status: c.status, exitCode: c.exitCode, health: c.health,
          ports: copy(c.ports), networks: c.networks.slice(), mounts: copy(c.mounts), env: copy(c.env),
          user: c.user, command: c.command.slice(), restartCount: c.restartCount || 0,
          stoppedAfter: c.stoppedAfter == null ? null : c.stoppedAfter
        };
      },
      fileIn: function (name, path) {
        var c = d().containers[name];
        if (!c) return null;
        var v = containerView(fsRoot, c);
        return v[path] === undefined ? null : v[path];
      },
      logs: function (name) {
        var c = d().containers[name];
        return c ? c.logs.join("\n") : "";
      },
      builds: function () { return copy(d().builds); },
      build: function (k) {
        var list = d().builds;
        var ix = k == null ? list.length - 1 : k - 1;
        return list[ix] ? copy(list[ix]) : null;
      },
      volumes: function () { return keys(d().volumes).sort(); },
      networks: function () { return keys(d().networks).sort(); },
      compose: function () {
        var st = d().compose;
        if (!st) return null;
        var out = { project: st.project, services: {} };
        keys(st.services).forEach(function (s) {
          var c = d().containers[st.services[s].container];
          out.services[s] = c
            ? { container: c.name, status: c.status, health: c.health }
            : { container: st.services[s].container, status: "removed", health: null };
        });
        return out;
      },
      curl: function (url, o) { return request(fsRoot, { url: url, from: o && o.from }); },
      inRegistry: function (ref) {
        var e = d().registry[fullRef(ref)];
        return e ? e.id : null;
      }
    };
    return api;
  }

  /* A deep copy of the filesystem, the daemon included — gitsim's snapshot
     first, so a lesson that uses both engines keeps both histories. */
  function snapshot(fsRoot) {
    var GIT = root.CODELAB && root.CODELAB.git;
    var c = GIT && GIT.snapshot ? GIT.snapshot(fsRoot) : SH.cloneNode(fsRoot);
    if (fsRoot.dockerd) c.dockerd = copy(fsRoot.dockerd);
    if (fsRoot.dockerApps) c.dockerApps = fsRoot.dockerApps;
    return c;
  }
  function extendT(T, fsRoot, before) {
    var api = testApi(fsRoot);
    keys(api).forEach(function (k) { T[k] = api[k]; });
    T.docker = api;
    if (before) {
      var b = testApi(before);
      if (T.before) keys(b).forEach(function (k) { if (T.before[k] === undefined) T.before[k] = b[k]; });
      else T.before = b;
    }
    if (!T.said) T.said = function (s) { return (T.out() + T.err()).indexOf(s) !== -1; };
    return T;
  }

  var API = {
    docker: docker, CMD: CMD, strict: false,
    testApi: testApi, extendT: extendT, snapshot: snapshot,
    parseDockerfile: parseDockerfile, parseYaml: parseYaml, parseIgnore: parseIgnore,
    BASE_IMAGES: BASE_IMAGES, hash: hash
  };
  if (SH && SH.COMMANDS) SH.COMMANDS.docker = docker;
  root.CODELAB = root.CODELAB || {};
  root.CODELAB.docker = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
