/* ============================================================
   CodeLab — a shell you can actually run
   ------------------------------------------------------------
   The sandbox has exactly two runtimes: a Web Worker and a
   sandboxed iframe. Neither has a filesystem, a process, or a
   terminal — so "The Command Line" could not be taught here at
   all without building one.

   This is that: a virtual filesystem plus a POSIX-ish command
   interpreter, in plain JS, no build step. It follows the
   precedent Course 7 already set, where a REST API is taught by
   having the learner write handleRequest(req) as a pure
   function graded by calling it. Here the learner writes real
   commands, they really execute, the filesystem really changes,
   and the checkpoints inspect what happened.

   WHAT IT IS NOT. It is not bash. There are no subshells, no
   command substitution, no shell functions, no real signals, and
   no concurrency — a backgrounded command runs to completion the
   moment you type it and merely *reports* itself as still alive.
   Those are absent on purpose: every one of them is a thing to
   explain rather than a thing a beginner needs, and a simulator
   that pretends to be complete teaches worse than one with an
   honest edge.

   WHAT IT DOES MODEL, because the CLI course has to teach it:
   globs, shell variables vs. exported ones, $? and positional
   parameters, file modes and the execute bit, PATH lookup, and
   scripts of your own that really are read, checked for a
   shebang, and interpreted by this same interpreter.
   ============================================================ */
(function (root) {
  "use strict";

  /* ---------- the filesystem ----------
     A directory is { d: { name: node } }, a file is { f: "contents" }.
     Two shapes rather than a type tag keeps every check a truthiness
     test and makes a whole tree readable in one console.log. */
  function dir(children) { return { d: children || {} }; }
  function file(text) { return { f: String(text == null ? "" : text) }; }

  /* Permission bits live in `m`, and only when they differ from the default
     (644 for a file, 755 for a directory). Storing the exception rather than
     the rule means every tree written before permissions existed still reads
     back with exactly the modes it always had. */
  var DEFAULT_FILE_MODE = 420;   /* 0644 */
  var DEFAULT_DIR_MODE = 493;    /* 0755 */
  function modeOf(n) {
    if (n.m != null) return n.m;
    return n.d ? DEFAULT_DIR_MODE : DEFAULT_FILE_MODE;
  }
  /* 0644 -> "-rw-r--r--", the ls -l first column. */
  function modeString(n) {
    var m = modeOf(n), s = n.d ? "d" : "-";
    for (var shift = 6; shift >= 0; shift -= 3) {
      var bits = (m >> shift) & 7;
      s += (bits & 4 ? "r" : "-") + (bits & 2 ? "w" : "-") + (bits & 1 ? "x" : "-");
    }
    return s;
  }
  function isExec(n) { return !!n && n.f !== undefined && (modeOf(n) & 64) !== 0; }

  /* Build a tree from a flat map, which is how lessons declare a starting
     filesystem: { "/home/you/notes.txt": "hi", "/home/you/empty/": null } */
  function createFS(spec) {
    var rootNode = dir();
    Object.keys(spec || {}).forEach(function (p) {
      var isDir = p.charAt(p.length - 1) === "/";
      var parts = splitPath(p);
      var node = rootNode;
      for (var i = 0; i < parts.length; i++) {
        var last = i === parts.length - 1;
        var name = parts[i];
        if (last && !isDir) { node.d[name] = file(spec[p]); break; }
        if (!node.d[name] || !node.d[name].d) node.d[name] = dir();
        node = node.d[name];
      }
    });
    return rootNode;
  }
  function splitPath(p) {
    return String(p).split("/").filter(function (s) { return s && s !== "."; });
  }

  /* Resolve a path the way a shell does: absolute, relative, ~, . and ..
     Returns an absolute normalized path string. */
  function resolve(cwd, home, p) {
    p = String(p == null ? "" : p);
    var base;
    if (p.charAt(0) === "/") base = [];
    else if (p === "~" || p.indexOf("~/") === 0) { base = splitPath(home); p = p.slice(1); }
    else base = splitPath(cwd);
    splitPath(p).forEach(function (part) {
      if (part === "..") base.pop();
      else base.push(part);
    });
    return "/" + base.join("/");
  }
  function nodeAt(fs, abs) {
    var parts = splitPath(abs), node = fs;
    for (var i = 0; i < parts.length; i++) {
      if (!node.d || !node.d[parts[i]]) return null;
      node = node.d[parts[i]];
    }
    return node;
  }
  function parentOf(abs) {
    var parts = splitPath(abs);
    parts.pop();
    return "/" + parts.join("/");
  }
  function baseName(abs) {
    var parts = splitPath(abs);
    return parts.length ? parts[parts.length - 1] : "/";
  }
  function mkdirp(fs, abs) {
    var parts = splitPath(abs), node = fs;
    for (var i = 0; i < parts.length; i++) {
      if (!node.d[parts[i]]) node.d[parts[i]] = dir();
      else if (!node.d[parts[i]].d) return false;   // a file is in the way
      node = node.d[parts[i]];
    }
    return true;
  }
  function writeFile(fs, abs, text) {
    var p = parentOf(abs), parent = nodeAt(fs, p);
    if (!parent || !parent.d) return false;
    /* `> prog` truncates a file without disarming it: a real shell keeps the
       mode, so a script you chmod +x once stays executable while you edit. */
    var prev = parent.d[baseName(abs)];
    var n = file(text);
    if (prev && prev.f !== undefined && prev.m != null) n.m = prev.m;
    parent.d[baseName(abs)] = n;
    return true;
  }
  function removeAt(fs, abs) {
    var parent = nodeAt(fs, parentOf(abs));
    if (!parent || !parent.d) return false;
    if (!parent.d[baseName(abs)]) return false;
    delete parent.d[baseName(abs)];
    return true;
  }
  function cloneNode(n) {
    if (n.f !== undefined) {
      var f = file(n.f);
      if (n.m != null) f.m = n.m;
      return f;
    }
    var out = dir();
    if (n.m != null) out.m = n.m;
    Object.keys(n.d).forEach(function (k) { out.d[k] = cloneNode(n.d[k]); });
    /* A directory can carry a git repository (gitsim.js). Its state is plain
       JSON, so a deep copy keeps `cp -r` and `mv` of a project working. */
    if (n.repo) out.repo = JSON.parse(JSON.stringify(n.repo));
    return out;
  }
  /* Every path in the tree, for globbing and for test assertions. */
  function walk(fs, prefix, out) {
    prefix = prefix || ""; out = out || [];
    Object.keys(fs.d || {}).sort().forEach(function (name) {
      var n = fs.d[name], p = prefix + "/" + name;
      out.push({ path: p, isDir: !!n.d, node: n });
      if (n.d) walk(n, p, out);
    });
    return out;
  }

  /* ---------- tokenizing ----------
     Quotes group, backslash escapes one character, and that is the whole
     story. Anything fancier belongs in a shell course this is not. */
  /* `meta`, when an array is passed in, is filled with one flag per token
     saying whether that token contained an UNQUOTED *, ? or [. Globbing has
     to know: `rm *.log` matches files, `echo "*.log"` prints two characters
     and a word, and only the tokenizer ever sees the difference. */
  function tokenize(line, env, meta) {
    var out = [], cur = "", quote = null, had = false, curGlob = false;
    function push() {
      out.push(cur);
      if (meta) meta.push({ glob: curGlob });
      cur = ""; had = false; curGlob = false;
    }
    function lookup(n) {
      return (env && Object.prototype.hasOwnProperty.call(env, n)) ? String(env[n]) : "";
    }
    /* $NAME and ${NAME}, expanded everywhere EXCEPT inside single quotes —
       which is exactly why `-v "$PWD/src:/app/src"` works and '$PWD' doesn't. */
    function readVar(i) {
      var j = i + 1, name = "";
      if (line.charAt(j) === "{") {
        var end = line.indexOf("}", j);
        if (end !== -1) return [lookup(line.slice(j + 1, end)), end + 1];
      }
      /* $? is the exit code of the last command, $@ and $# the arguments a
         script was called with. They are one character long and none of them
         is a letter, so they have to be read before the normal name scan. */
      var special = line.charAt(j);
      if (special === "?" || special === "@" || special === "#") return [lookup(special), j + 1];
      while (j < line.length && /[A-Za-z0-9_]/.test(line.charAt(j))) name += line.charAt(j++);
      return name ? [lookup(name), j] : ["$", i + 1];
    }
    for (var i = 0; i < line.length; i++) {
      var ch = line.charAt(i);
      if (quote === "'") { if (ch === "'") quote = null; else cur += ch; had = true; continue; }
      if (ch === "$" && env && i + 1 < line.length) {
        var r = readVar(i);
        cur += r[0]; i = r[1] - 1; had = true;
        continue;
      }
      if (quote) {
        if (ch === quote) quote = null;
        else cur += ch;
        had = true;
      } else if (ch === '"' || ch === "'") { quote = ch; had = true; }
      else if (ch === "\\" && i + 1 < line.length) { cur += line.charAt(++i); had = true; }
      else if (/\s/.test(ch)) { if (cur || had) push(); }
      else {
        if (ch === "*" || ch === "?" || ch === "[") curGlob = true;
        cur += ch; had = true;
      }
    }
    if (cur || had) push();
    return out;
  }

  /* Split on top-level separators only: anything inside quotes, or escaped,
     is text. `echo "a > b"` prints a > b instead of writing a file called b".
     Returns [{ text, sep }], where sep is the separator that FOLLOWED the
     text ("" on the last piece). Longer separators must come first. */
  function splitTop(line, seps) {
    var out = [], cur = "", quote = null;
    for (var i = 0; i < line.length; i++) {
      var ch = line.charAt(i);
      if (quote) { cur += ch; if (ch === quote) quote = null; continue; }
      if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
      if (ch === "\\" && i + 1 < line.length) { cur += ch + line.charAt(++i); continue; }
      var hit = null;
      for (var s = 0; s < seps.length; s++) {
        if (line.substr(i, seps[s].length) === seps[s]) { hit = seps[s]; break; }
      }
      if (hit) { out.push({ text: cur, sep: hit }); cur = ""; i += hit.length - 1; continue; }
      cur += ch;
    }
    out.push({ text: cur, sep: "" });
    return out;
  }

  /* The variables a command line can expand. PWD is read fresh every time,
     so `cd deep && echo $PWD` reports where you actually are. */
  function envFor(ctx) {
    var env = { PWD: ctx.cwd, HOME: ctx.home, USER: ctx.user };
    Object.keys(ctx.env || {}).forEach(function (k) { env[k] = ctx.env[k]; });
    return env;
  }

  /* ---------- globbing ----------
     The single most surprising thing about the command line is that `rm *.log`
     never reaches rm as `*.log`: the SHELL expands it first, and rm only ever
     sees a list of names it could have been handed by hand. Modelling that
     faithfully is the only way the course can teach why quoting matters. */
  function globToRegExp(seg) {
    var out = "^", i = 0;
    while (i < seg.length) {
      var c = seg.charAt(i);
      if (c === "*") { out += "[^/]*"; i++; }
      else if (c === "?") { out += "[^/]"; i++; }
      else if (c === "[") {
        var end = seg.indexOf("]", i + 1);
        if (end === -1) { out += "\\["; i++; }
        else {
          var body = seg.slice(i + 1, end), neg = /^[!^]/.test(body);
          if (neg) body = body.slice(1);
          out += "[" + (neg ? "^" : "") + body.replace(/[\\\]]/g, "\\$&") + "]";
          i = end + 1;
        }
      } else { out += c.replace(/[.+^${}()|[\]\\*?]/g, "\\$&"); i++; }
    }
    return new RegExp(out + "$");
  }

  /* Expand one pattern into the names it matches, keeping the shape the
     learner typed: `src/*.js` yields `src/app.js`, not `/home/you/src/app.js`.
     A pattern that matches nothing is left alone, exactly as bash leaves it —
     which is why `ls *.md` in an empty folder complains about a file called
     literally `*.md`, an error the course makes a lesson out of. */
  function globPath(ctx, pattern) {
    if (pattern === "~" || pattern.indexOf("~/") === 0) return [];
    var absolute = pattern.charAt(0) === "/";
    var trailing = pattern.length > 1 && pattern.charAt(pattern.length - 1) === "/";
    var segs = pattern.split("/").filter(function (s) { return s !== ""; });
    if (!segs.length) return [];
    var results = [];

    function descend(absDir, idx, rel) {
      var seg = segs[idx], last = idx === segs.length - 1;
      var node = nodeAt(ctx.fs, absDir);
      if (!node || !node.d) return;
      var join = function (a, b) { return a === "/" ? "/" + b : a + "/" + b; };

      if (!/[*?[]/.test(seg)) {
        var childAbs = (seg === "." || seg === "..") ? resolve(absDir, ctx.home, seg) : join(absDir, seg);
        if (!nodeAt(ctx.fs, childAbs)) return;
        var r0 = rel ? rel + "/" + seg : seg;
        if (last) results.push(r0); else descend(childAbs, idx + 1, r0);
        return;
      }
      /* A leading dot must be typed to be matched — `*` never sweeps up
         .env, which is why `rm *` spares your dotfiles. */
      var rx = globToRegExp(seg), wantHidden = seg.charAt(0) === ".";
      Object.keys(node.d).sort().forEach(function (name) {
        if (!wantHidden && name.charAt(0) === ".") return;
        if (!rx.test(name)) return;
        var childAbs = join(absDir, name), r = rel ? rel + "/" + name : name;
        if (last) results.push(r);
        else if (nodeAt(ctx.fs, childAbs).d) descend(childAbs, idx + 1, r);
      });
    }

    descend(absolute ? "/" : ctx.cwd, 0, "");
    return results.map(function (r) { return (absolute ? "/" : "") + r + (trailing ? "/" : ""); });
  }

  /* meta[i].glob comes from the tokenizer and is the whole quoting story:
     only a token whose wildcard was typed bare is a candidate. */
  function expandGlobs(ctx, args, meta) {
    var out = [];
    for (var i = 0; i < args.length; i++) {
      if (!meta || !meta[i] || !meta[i].glob) { out.push(args[i]); continue; }
      var hits = globPath(ctx, args[i]);
      if (hits.length) out.push.apply(out, hits); else out.push(args[i]);
    }
    return out;
  }

  /* ---------- the commands ----------
     Each returns { out, err, code }. Keeping them uniform means pipes and
     exit codes work the same everywhere with no special cases. */
  function ok(out) { return { out: out == null ? "" : String(out), err: "", code: 0 }; }
  function fail(err, code) { return { out: "", err: String(err), code: code == null ? 1 : code }; }

  var COMMANDS = {
    pwd: function (ctx) { return ok(ctx.cwd + "\n"); },

    cd: function (ctx, args) {
      var target = args[0] || "~";
      var abs = resolve(ctx.cwd, ctx.home, target);
      var n = nodeAt(ctx.fs, abs);
      if (!n) return fail("cd: " + target + ": No such file or directory\n");
      if (!n.d) return fail("cd: " + target + ": Not a directory\n");
      ctx.cwd = abs === "/" ? "/" : abs;
      return ok("");
    },

    ls: function (ctx, args) {
      var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
      var rest = args.filter(function (a) { return a.charAt(0) !== "-"; });
      var long = flags.indexOf("l") !== -1, all = flags.indexOf("a") !== -1;

      function row(node, name) {
        return long ? modeString(node) + "  " + (node.d ? "-" : String(node.f.length)) + "  " + name : name;
      }
      function listDir(node) {
        var names = Object.keys(node.d).sort();
        if (!all) names = names.filter(function (x) { return x.charAt(0) !== "."; });
        return names.map(function (x) { return row(node.d[x], x); }).join("\n") + (names.length ? "\n" : "");
      }

      if (!rest.length) rest = ["."];
      /* Once globs expand, `ls *.txt` arrives as a dozen arguments. Real ls
         prints the plain files first and then each directory under its own
         heading, and a missing name is an error WITHOUT losing the rest. */
      var files = [], dirs = [], errs = "", code = 0;
      rest.forEach(function (r) {
        var abs = resolve(ctx.cwd, ctx.home, r), n = nodeAt(ctx.fs, abs);
        if (!n) { errs += "ls: " + r + ": No such file or directory\n"; code = 1; return; }
        if (n.d) dirs.push({ label: r, node: n }); else files.push(row(n, r));
      });

      var out = files.length ? files.join("\n") + "\n" : "";
      var single = dirs.length === 1 && !files.length;
      dirs.forEach(function (d, i) {
        if (!single) out += (out ? "\n" : "") + d.label + ":\n";
        out += listDir(d.node);
      });
      return { out: out, err: errs, code: code };
    },

    mkdir: function (ctx, args) {
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      var parents = args.indexOf("-p") !== -1;
      if (!p.length) return fail("mkdir: missing operand\n");
      for (var i = 0; i < p.length; i++) {
        var abs = resolve(ctx.cwd, ctx.home, p[i]);
        if (nodeAt(ctx.fs, abs)) { if (!parents) return fail("mkdir: " + p[i] + ": File exists\n"); continue; }
        if (!parents && !nodeAt(ctx.fs, parentOf(abs)))
          return fail("mkdir: " + p[i] + ": No such file or directory\n");
        if (!mkdirp(ctx.fs, abs)) return fail("mkdir: " + p[i] + ": Not a directory\n");
      }
      return ok("");
    },

    touch: function (ctx, args) {
      if (!args.length) return fail("touch: missing file operand\n");
      for (var i = 0; i < args.length; i++) {
        var abs = resolve(ctx.cwd, ctx.home, args[i]);
        if (nodeAt(ctx.fs, abs)) continue;
        if (!writeFile(ctx.fs, abs, "")) return fail("touch: cannot touch '" + args[i] + "': No such file or directory\n");
      }
      return ok("");
    },

    cat: function (ctx, args, stdin) {
      var number = args.indexOf("-n") !== -1;
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      var buf = "";
      if (!p.length) buf = stdin;
      else for (var i = 0; i < p.length; i++) {
        var abs = resolve(ctx.cwd, ctx.home, p[i]);
        var n = nodeAt(ctx.fs, abs);
        if (!n) return fail("cat: " + p[i] + ": No such file or directory\n");
        if (n.d) return fail("cat: " + p[i] + ": Is a directory\n");
        buf += n.f;
        if (buf && buf.charAt(buf.length - 1) !== "\n") buf += "\n";
      }
      if (number && buf) {
        buf = buf.replace(/\n$/, "").split("\n").map(function (l, i) {
          return String(i + 1).padStart(6, " ") + "\t" + l;
        }).join("\n") + "\n";
      }
      return ok(buf);
    },

    echo: function (ctx, args) {
      var noNl = args[0] === "-n";
      var parts = noNl ? args.slice(1) : args;
      return ok(parts.join(" ") + (noNl ? "" : "\n"));
    },

    rm: function (ctx, args) {
      var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      var rec = flags.indexOf("r") !== -1, force = flags.indexOf("f") !== -1;
      if (!p.length) return fail("rm: missing operand\n");
      for (var i = 0; i < p.length; i++) {
        var abs = resolve(ctx.cwd, ctx.home, p[i]);
        var n = nodeAt(ctx.fs, abs);
        if (!n) { if (force) continue; return fail("rm: " + p[i] + ": No such file or directory\n"); }
        if (n.d && !rec) return fail("rm: " + p[i] + ": is a directory\n");
        removeAt(ctx.fs, abs);
      }
      return ok("");
    },

    cp: function (ctx, args) { return copyOrMove(ctx, args, "cp"); },
    mv: function (ctx, args) { return copyOrMove(ctx, args, "mv"); },

    head: function (ctx, args, stdin) { return headTail(ctx, args, stdin, true); },
    tail: function (ctx, args, stdin) { return headTail(ctx, args, stdin, false); },

    wc: function (ctx, args, stdin) {
      var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });

      function counts(text) {
        return {
          l: text ? text.replace(/\n$/, "").split("\n").length : 0,
          w: text.split(/\s+/).filter(Boolean).length,
          c: text.length
        };
      }
      function fmt(n, label) {
        var only = flags.indexOf("l") !== -1 ? n.l : flags.indexOf("w") !== -1 ? n.w
          : flags.indexOf("c") !== -1 ? n.c : null;
        var body = only == null ? n.l + " " + n.w + " " + n.c : String(only);
        return body + (label ? " " + label : "") + "\n";
      }
      if (!p.length) return ok(fmt(counts(stdin), ""));

      /* `wc -l *.js` counts each file and then totals them, which is what
         makes it the fastest way to see how big a project got. */
      var out = "", total = { l: 0, w: 0, c: 0 };
      for (var i = 0; i < p.length; i++) {
        var n = nodeAt(ctx.fs, resolve(ctx.cwd, ctx.home, p[i]));
        if (!n) return fail("wc: " + p[i] + ": No such file or directory\n");
        if (n.d) return fail("wc: " + p[i] + ": Is a directory\n");
        var c = counts(n.f);
        total.l += c.l; total.w += c.w; total.c += c.c;
        out += fmt(c, p[i]);
      }
      if (p.length > 1) out += fmt(total, "total");
      return ok(out);
    },

    grep: function (ctx, args, stdin) {
      var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      if (!p.length) return fail("usage: grep pattern [file]\n");
      var ci = flags.indexOf("i") !== -1, inv = flags.indexOf("v") !== -1;
      var num = flags.indexOf("n") !== -1, rec = flags.indexOf("r") !== -1;
      var listOnly = flags.indexOf("l") !== -1, count = flags.indexOf("c") !== -1;
      var pat = p[0], needle = ci ? pat.toLowerCase() : pat;
      var targets = p.slice(1), errs = "";

      /* -r turns each directory argument into every file underneath it, which
         is how you search a project you don't know the shape of. */
      var files = [];
      for (var t = 0; t < targets.length; t++) {
        var abs = resolve(ctx.cwd, ctx.home, targets[t]), n = nodeAt(ctx.fs, abs);
        if (!n) { errs += "grep: " + targets[t] + ": No such file or directory\n"; continue; }
        if (!n.d) { files.push({ label: targets[t], text: n.f }); continue; }
        if (!rec) { errs += "grep: " + targets[t] + ": Is a directory\n"; continue; }
        var base = targets[t].replace(/\/$/, "");
        walk(n, "").forEach(function (e) {
          if (!e.isDir) files.push({ label: base + e.path, text: e.node.f });
        });
      }
      if (!targets.length) files.push({ label: null, text: stdin });

      /* With more than one file in play, every hit is prefixed by the file it
         came from — the behaviour that makes `grep -r TODO .` readable. */
      var many = files.length > 1, out = "", total = 0;
      files.forEach(function (f) {
        var lines = f.text.replace(/\n$/, "").split("\n");
        if (f.text === "") lines = [];
        var hits = [];
        lines.forEach(function (l, i) {
          var hay = ci ? l.toLowerCase() : l;
          var found = hay.indexOf(needle) !== -1;
          if (inv ? !found : found) hits.push({ n: i + 1, line: l });
        });
        total += hits.length;
        if (count) { out += (many ? f.label + ":" : "") + hits.length + "\n"; return; }
        if (listOnly) { if (hits.length) out += f.label + "\n"; return; }
        hits.forEach(function (h) {
          out += (many && f.label ? f.label + ":" : "") + (num ? h.n + ":" : "") + h.line + "\n";
        });
      });
      /* grep exits 1 when nothing matched — that non-zero code is the whole
         reason grep is useful in a script, so it is modelled. */
      return { out: out, err: errs, code: errs ? 2 : (total ? 0 : 1) };
    },

    find: function (ctx, args) {
      var label = (args[0] && args[0].charAt(0) !== "-") ? args[0].replace(/\/$/, "") : ".";
      var start = resolve(ctx.cwd, ctx.home, label);
      var nameIdx = args.indexOf("-name");
      var pat = nameIdx !== -1 ? args[nameIdx + 1] : null;
      var typeIdx = args.indexOf("-type");
      var type = typeIdx !== -1 ? args[typeIdx + 1] : null;
      var n = nodeAt(ctx.fs, start);
      if (!n) return fail("find: '" + label + "': No such file or directory\n");
      var rx = pat ? globToRegExp(pat) : null;
      /* find prints paths the way you named the starting point: `find .`
         gives ./src/app.js, not /home/you/src/app.js. People match on that
         leading ./ constantly, so it has to be real. */
      var out = [];
      function want(name, isDir) {
        if (rx && !rx.test(name)) return false;
        if (type === "f" && isDir) return false;
        if (type === "d" && !isDir) return false;
        return true;
      }
      if (want(baseName(start), !!n.d)) out.push(label);
      if (n.d) walk(n, "").forEach(function (e) {
        if (want(baseName(e.path), e.isDir)) out.push(label + e.path);
      });
      return ok(out.join("\n") + (out.length ? "\n" : ""));
    },

    sort: function (ctx, args, stdin) {
      var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
      var src = readInput(ctx, args.filter(function (a) { return a.charAt(0) !== "-"; }), stdin, "sort");
      if (src.err) return fail(src.err);
      var lines = src.text.replace(/\n$/, "").split("\n").filter(function (l) { return l !== ""; });
      /* -n compares magnitude, not spelling, which is the difference between
         2 < 10 and "10" < "2". It is the flag people forget and then misread. */
      if (flags.indexOf("n") !== -1) lines.sort(function (a, b) { return parseFloat(a) - parseFloat(b); });
      else lines.sort();
      if (flags.indexOf("r") !== -1) lines.reverse();
      if (flags.indexOf("u") !== -1) lines = lines.filter(function (l, i) { return i === 0 || lines[i - 1] !== l; });
      return ok(lines.join("\n") + (lines.length ? "\n" : ""));
    },
    uniq: function (ctx, args, stdin) {
      var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
      var src = readInput(ctx, args.filter(function (a) { return a.charAt(0) !== "-"; }), stdin, "uniq");
      if (src.err) return fail(src.err);
      var text = src.text, lines = text === "" ? [] : text.replace(/\n$/, "").split("\n"), out = [];
      /* uniq only collapses ADJACENT duplicates — the reason it is always
         written `sort | uniq` and never on its own. */
      lines.forEach(function (l) {
        if (out.length && out[out.length - 1].line === l) out[out.length - 1].n++;
        else out.push({ line: l, n: 1 });
      });
      var c = flags.indexOf("c") !== -1;
      return ok(out.map(function (e) {
        return c ? String(e.n).padStart(4, " ") + " " + e.line : e.line;
      }).join("\n") + (out.length ? "\n" : ""));
    },
    "true": function () { return ok(""); },
    "false": function () { return { out: "", err: "", code: 1 }; },
    clear: function () { return ok(""); },
    whoami: function (ctx) { return ok(ctx.user + "\n"); },

    /* ---------- variables and the environment ---------- */

    /* `export` is the whole reason there are two kinds of variable: a plain
       NAME=value is yours alone, and only exporting it puts it in the
       environment a program you launch will be handed. */
    "export": function (ctx, args) {
      if (!args.length) {
        return ok(Object.keys(ctx.exported).sort().map(function (k) {
          return "export " + k + "=" + (ctx.env[k] == null ? "" : ctx.env[k]);
        }).join("\n") + (Object.keys(ctx.exported).length ? "\n" : ""));
      }
      for (var i = 0; i < args.length; i++) {
        var eq = args[i].indexOf("=");
        var name = eq === -1 ? args[i] : args[i].slice(0, eq);
        if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name))
          return fail("export: `" + args[i] + "': not a valid identifier\n");
        if (eq !== -1) ctx.env[name] = args[i].slice(eq + 1);
        else if (ctx.env[name] == null) ctx.env[name] = "";
        ctx.exported[name] = true;
      }
      return ok("");
    },

    unset: function (ctx, args) {
      args.forEach(function (a) { delete ctx.env[a]; delete ctx.exported[a]; });
      return ok("");
    },

    env: function (ctx) { return ok(envLines(ctx)); },
    printenv: function (ctx, args) {
      if (!args.length) return ok(envLines(ctx));
      var v = envFor(ctx)[args[0]];
      if (v == null) return { out: "", err: "", code: 1 };
      return ok(v + "\n");
    },

    /* ---------- finding and running programs ---------- */

    /* which answers the question every "command not found" raises: is this
       thing on my PATH at all, and if so, which copy am I getting? */
    which: function (ctx, args) {
      if (!args.length) return { out: "", err: "", code: 1 };
      var out = "", code = 0;
      args.forEach(function (name) {
        var hit = lookupOnPath(ctx, name);
        if (hit) out += hit + "\n";
        else if (COMMANDS[name]) out += "/usr/bin/" + name + "\n";
        else code = 1;
      });
      return { out: out, err: "", code: code };
    },

    chmod: function (ctx, args) {
      var p = args.slice();
      var spec = p.shift();
      if (!spec || !p.length) return fail("chmod: missing operand\n");
      for (var i = 0; i < p.length; i++) {
        var abs = resolve(ctx.cwd, ctx.home, p[i]), n = nodeAt(ctx.fs, abs);
        if (!n) return fail("chmod: cannot access '" + p[i] + "': No such file or directory\n");
        var next = applyMode(modeOf(n), spec);
        if (next == null) return fail("chmod: invalid mode: '" + spec + "'\n");
        n.m = next;
      }
      return ok("");
    },

    /* ---------- processes ---------- */

    /* Nothing here actually runs concurrently — the simulator is single
       threaded and says so. What it does model is the bookkeeping: a pid you
       can see, a port that is genuinely taken until you free it, and a kill
       that frees it. That is the loop every developer hits on port 3000. */
    ps: function (ctx) {
      var rows = ctx.procs.slice();
      var out = "  PID COMMAND\n";
      rows.forEach(function (p) { out += String(p.pid).padStart(5, " ") + " " + p.cmd + "\n"; });
      return ok(out);
    },

    jobs: function (ctx) {
      var out = "";
      ctx.procs.forEach(function (p, i) {
        if (p.job) out += "[" + p.job + "]  Running                 " + p.cmd + " &\n";
      });
      return ok(out);
    },

    kill: function (ctx, args) {
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      if (!p.length) return fail("kill: usage: kill [-9] pid\n");
      var out = "", code = 0;
      p.forEach(function (pidText) {
        var pid = parseInt(pidText, 10);
        var idx = -1;
        for (var i = 0; i < ctx.procs.length; i++) if (ctx.procs[i].pid === pid) idx = i;
        if (idx === -1) { code = 1; return; }
        ctx.procs.splice(idx, 1);
      });
      if (code) return fail("kill: no such process\n");
      return ok(out);
    },

    /* Time does not pass in a sandbox. sleep is here so that backgrounding
       has something honest to background, and it says what it did. */
    sleep: function (ctx, args) {
      var secs = parseFloat(args[0]);
      if (isNaN(secs)) return fail("sleep: invalid time interval '" + (args[0] || "") + "'\n");
      return ok("");
    },

    /* A stand-in for `npm start` — the program that holds a port. */
    serve: function (ctx, args) {
      var port = parseInt(args[0], 10) || 3000;
      var taken = ctx.procs.filter(function (p) { return p.port === port; })[0];
      if (taken)
        return fail("serve: listen EADDRINUSE: address already in use :::" + port + "\n");
      var proc = { pid: ctx.sys.nextPid++, cmd: "serve " + port, port: port };
      ctx.procs.push(proc);
      return ok("Listening on http://localhost:" + port + " (pid " + proc.pid + ")\n");
    },

    /* A script stops here, with a code its caller can test. */
    exit: function (ctx, args) {
      var code = args.length ? (parseInt(args[0], 10) || 0) : 0;
      return { out: "", err: "", code: code, exited: true };
    },

    /* `lsof -i :3000` — who has my port? */
    lsof: function (ctx, args) {
      var m = args.join(" ").match(/:(\d+)/);
      if (!m) return fail("lsof: usage: lsof -i :PORT\n");
      var port = parseInt(m[1], 10);
      var hits = ctx.procs.filter(function (p) { return p.port === port; });
      if (!hits.length) return { out: "", err: "", code: 1 };
      var out = "COMMAND    PID   USER   NAME\n";
      hits.forEach(function (p) {
        out += "serve    " + String(p.pid).padEnd(6, " ") + " " + ctx.user + "   localhost:" + p.port + " (LISTEN)\n";
      });
      return ok(out);
    },

    curl: function (ctx, args) {
      var url = args.filter(function (a) { return a.charAt(0) !== "-"; })[0] || "";
      var m = url.match(/:(\d+)/);
      var port = m ? parseInt(m[1], 10) : 80;
      var hit = ctx.procs.filter(function (p) { return p.port === port; })[0];
      if (!hit) return fail("curl: (7) Failed to connect to localhost port " + port + ": Connection refused\n", 7);
      return ok("Hello from the server on port " + port + "\n");
    },

    /* ---------- small text tools the pipelines need ---------- */

    cut: function (ctx, args, stdin) {
      var delim = "\t", fields = null, paths = [];
      for (var i = 0; i < args.length; i++) {
        if (args[i] === "-d") delim = args[++i];
        else if (args[i].indexOf("-d") === 0) delim = args[i].slice(2);
        else if (args[i] === "-f") fields = args[++i];
        else if (args[i].indexOf("-f") === 0) fields = args[i].slice(2);
        else if (args[i].charAt(0) !== "-") paths.push(args[i]);
      }
      if (!fields) return fail("cut: you must specify a list of fields\n");
      var want = fields.split(",").map(function (f) { return parseInt(f, 10); });
      var src = readInput(ctx, paths, stdin, "cut");
      if (src.err) return fail(src.err);
      var text = src.text;
      var lines = text === "" ? [] : text.replace(/\n$/, "").split("\n");
      return ok(lines.map(function (l) {
        var cols = l.split(delim);
        return want.map(function (f) { return cols[f - 1] == null ? "" : cols[f - 1]; }).join(delim);
      }).join("\n") + (lines.length ? "\n" : ""));
    },

    tr: function (ctx, args, stdin) {
      var del = args[0] === "-d";
      var a = del ? args[1] : args[0], b = del ? null : args[1];
      if (a == null) return fail("tr: missing operand\n");
      function expand(set) {
        var out = "";
        for (var i = 0; i < set.length; i++) {
          if (set.charAt(i + 1) === "-" && i + 2 < set.length) {
            for (var c = set.charCodeAt(i); c <= set.charCodeAt(i + 2); c++) out += String.fromCharCode(c);
            i += 2;
          } else out += set.charAt(i);
        }
        return out;
      }
      var from = expand(a), to = b == null ? "" : expand(b), out = "";
      for (var i = 0; i < stdin.length; i++) {
        var idx = from.indexOf(stdin.charAt(i));
        if (idx === -1) out += stdin.charAt(i);
        else if (del) continue;
        else out += to.charAt(Math.min(idx, to.length - 1));
      }
      return ok(out);
    },

    /* sed's substitute command and nothing else — the one form of sed that
       everybody actually types. */
    sed: function (ctx, args, stdin) {
      var expr = args.filter(function (a) { return a.charAt(0) !== "-"; })[0];
      var paths = args.filter(function (a) { return a.charAt(0) !== "-"; }).slice(1);
      if (!expr) return fail("sed: no script specified\n");
      var m = expr.match(/^s(.)(.*)$/);
      if (!m) return fail("sed: -e expression #1: unknown command: `" + expr.charAt(0) + "'\n");
      var sep = m[1], parts = m[2].split(sep);
      if (parts.length < 2) return fail("sed: -e expression #1: unterminated `s' command\n");
      var pat = parts[0], rep = parts[1], flags = parts[2] || "";
      var src = readInput(ctx, paths, stdin, "sed");
      if (src.err) return fail(src.err);
      var rx = new RegExp(pat, flags.indexOf("g") !== -1 ? "g" : "");
      return ok(src.text.replace(/\n$/, "").split("\n").map(function (l) {
        return l.replace(rx, rep);
      }).join("\n") + (src.text ? "\n" : ""));
    },

    tee: function (ctx, args, stdin) {
      var append = args.indexOf("-a") !== -1;
      var paths = args.filter(function (a) { return a.charAt(0) !== "-"; });
      for (var i = 0; i < paths.length; i++) {
        var abs = resolve(ctx.cwd, ctx.home, paths[i]);
        var prior = append ? ((nodeAt(ctx.fs, abs) || {}).f || "") : "";
        if (!writeFile(ctx.fs, abs, prior + stdin)) return fail("tee: " + paths[i] + ": No such file or directory\n");
      }
      return ok(stdin);
    },

    basename: function (ctx, args) {
      if (!args.length) return fail("basename: missing operand\n");
      var b = args[0].replace(/\/+$/, "").split("/").pop() || "/";
      if (args[1] && b.slice(-args[1].length) === args[1]) b = b.slice(0, -args[1].length);
      return ok(b + "\n");
    },
    dirname: function (ctx, args) {
      if (!args.length) return fail("dirname: missing operand\n");
      var parts = args[0].replace(/\/+$/, "").split("/");
      parts.pop();
      return ok((parts.join("/") || (args[0].charAt(0) === "/" ? "/" : ".")) + "\n");
    },
    rmdir: function (ctx, args) {
      if (!args.length) return fail("rmdir: missing operand\n");
      for (var i = 0; i < args.length; i++) {
        var abs = resolve(ctx.cwd, ctx.home, args[i]), n = nodeAt(ctx.fs, abs);
        if (!n) return fail("rmdir: failed to remove '" + args[i] + "': No such file or directory\n");
        if (!n.d) return fail("rmdir: failed to remove '" + args[i] + "': Not a directory\n");
        if (Object.keys(n.d).length) return fail("rmdir: failed to remove '" + args[i] + "': Directory not empty\n");
        removeAt(ctx.fs, abs);
      }
      return ok("");
    },

    /* The sandbox has no clock of its own to be wrong about, so date reports
       the one the lesson was pinned to. */
    date: function (ctx) { return ok(ctx.now + "\n"); },
    history: function (ctx) {
      return ok(ctx.history.map(function (h, i) {
        return String(i + 1).padStart(5, " ") + "  " + h;
      }).join("\n") + (ctx.history.length ? "\n" : ""));
    },
    man: function (ctx, args) {
      if (!args.length) return fail("What manual page do you want?\n");
      var page = HELP[args[0]];
      if (!page) return fail("No manual entry for " + args[0] + "\n");
      return ok(manPage(args[0], page));
    }
  };

  /* `less` pages a file; there is nothing to page in a transcript, so it
     prints — which is what `less` does when the output fits on one screen. */
  COMMANDS.less = COMMANDS.more = function (ctx, args, stdin) {
    return COMMANDS.cat(ctx, args, stdin);
  };

  /* xargs turns a list of names on stdin into arguments, which is the other
     half of `find`: find names them, xargs does something to each. */
  COMMANDS.xargs = function (ctx, args, stdin) {
    var words = stdin.split(/\s+/).filter(Boolean);
    if (!args.length) return ok(words.join(" ") + (words.length ? "\n" : ""));
    var name = args[0], rest = args.slice(1);
    var fn = COMMANDS[name];
    if (!fn) return { out: "", err: "xargs: " + name + ": No such file or directory\n", code: 127 };
    return fn(ctx, rest.concat(words), "");
  };

  /* HOME, PWD and USER are always in the environment even though nobody
     exported them, so `env` has to report them alongside what you did. */
  function envLines(ctx) {
    var all = envFor(ctx), names = { HOME: true, PWD: true, USER: true, PATH: true };
    Object.keys(ctx.exported).forEach(function (k) { names[k] = true; });
    var list = Object.keys(names).sort();
    return list.map(function (k) { return k + "=" + (all[k] == null ? "" : all[k]); }).join("\n") +
      (list.length ? "\n" : "");
  }

  /* Read from the named files if there are any, otherwise from the pipe.
     Every filter in the set behaves this way, so it lives in one place. */
  function readInput(ctx, paths, stdin, who) {
    if (!paths || !paths.length) return { text: stdin };
    var text = "";
    for (var i = 0; i < paths.length; i++) {
      var n = nodeAt(ctx.fs, resolve(ctx.cwd, ctx.home, paths[i]));
      if (!n) return { err: who + ": " + paths[i] + ": No such file or directory\n" };
      if (n.d) return { err: who + ": " + paths[i] + ": Is a directory\n" };
      text += n.f;
      if (text && text.charAt(text.length - 1) !== "\n") text += "\n";
    }
    return { text: text };
  }

  /* chmod takes either an octal mode or a symbolic one: 755, +x, u+x, a-w.
     Returns null for anything it does not understand rather than guessing. */
  function applyMode(current, spec) {
    if (/^[0-7]{3,4}$/.test(spec)) return parseInt(spec, 8) & 511;
    var m = spec.match(/^([ugoa]*)([+\-=])([rwx]+)$/);
    if (!m) return null;
    var who = m[1] || "a", op = m[2], perms = m[3];
    var bit = (perms.indexOf("r") !== -1 ? 4 : 0) |
      (perms.indexOf("w") !== -1 ? 2 : 0) |
      (perms.indexOf("x") !== -1 ? 1 : 0);
    var mask = 0;
    if (who.indexOf("a") !== -1) mask = (bit << 6) | (bit << 3) | bit;
    else {
      if (who.indexOf("u") !== -1) mask |= bit << 6;
      if (who.indexOf("g") !== -1) mask |= bit << 3;
      if (who.indexOf("o") !== -1) mask |= bit;
    }
    if (op === "+") return current | mask;
    if (op === "-") return current & ~mask;
    var keep = 0;
    if (who.indexOf("a") !== -1) keep = 0;
    else {
      if (who.indexOf("u") === -1) keep |= current & 448;
      if (who.indexOf("g") === -1) keep |= current & 56;
      if (who.indexOf("o") === -1) keep |= current & 7;
    }
    return keep | mask;
  }

  /* ---------- the manual ----------
     Real man pages are enormous. These are the useful third: what the command
     is for, how you call it, and the four or five flags anyone types. The
     point of the lesson is the HABIT of looking rather than guessing, so the
     pages have to be worth reading, not merely present. */
  var HELP = {
    pwd: { use: "pwd", sum: "Print the full path of the directory you are standing in.", flags: [] },
    cd: { use: "cd [dir]", sum: "Change directory. With no argument, go home.", flags: [[".. ", "the parent directory"], ["~", "your home directory"], ["-", "not supported here"]] },
    ls: { use: "ls [-a] [-l] [file...]", sum: "List what is in a directory.", flags: [["-a", "include entries beginning with a dot"], ["-l", "long format: permissions, size, name"]] },
    mkdir: { use: "mkdir [-p] dir...", sum: "Create directories.", flags: [["-p", "create parents as needed, and never complain if it already exists"]] },
    rmdir: { use: "rmdir dir...", sum: "Remove EMPTY directories. Refuses if anything is inside.", flags: [] },
    touch: { use: "touch file...", sum: "Create empty files, leaving existing ones alone.", flags: [] },
    cat: { use: "cat [-n] [file...]", sum: "Print files, one after another.", flags: [["-n", "number every line"]] },
    less: { use: "less [file]", sum: "Page through a file. In this sandbox output always fits, so it prints.", flags: [] },
    head: { use: "head [-n N] [file]", sum: "Print the first lines of a file (10 by default).", flags: [["-n N", "print N lines"]] },
    tail: { use: "tail [-n N] [file]", sum: "Print the last lines of a file (10 by default).", flags: [["-n N", "print N lines"]] },
    wc: { use: "wc [-l|-w] [file]", sum: "Count lines, words and characters.", flags: [["-l", "lines only"], ["-w", "words only"]] },
    cp: { use: "cp [-r] source... dest", sum: "Copy files. With several sources, dest must be a directory.", flags: [["-r", "copy a directory and everything in it"]] },
    mv: { use: "mv source... dest", sum: "Move or rename. Renaming is just moving to a new name.", flags: [] },
    rm: { use: "rm [-r] [-f] file...", sum: "Delete. There is no trash and no undo.", flags: [["-r", "delete a directory and its contents"], ["-f", "do not complain about what is not there"]] },
    echo: { use: "echo [-n] text...", sum: "Print its arguments.", flags: [["-n", "no trailing newline"]] },
    grep: { use: "grep [-i] [-v] [-n] [-r] [-c] [-l] pattern [file...]", sum: "Print the lines that contain a pattern. Exits 1 when nothing matched.", flags: [["-i", "ignore case"], ["-v", "invert: lines that do NOT match"], ["-n", "show line numbers"], ["-r", "search every file under a directory"], ["-c", "print a count instead of the lines"], ["-l", "print only the names of matching files"]] },
    find: { use: "find [path] [-name pattern]", sum: "Walk a directory tree and print what is in it.", flags: [["-name P", "only names matching P — quote it, or the shell expands it first"]] },
    sort: { use: "sort [-r] [-n] [-u] [file]", sum: "Sort lines.", flags: [["-r", "reverse"], ["-n", "compare as numbers, so 2 comes before 10"], ["-u", "drop duplicates"]] },
    uniq: { use: "uniq [-c]", sum: "Collapse ADJACENT duplicate lines. Almost always used after sort.", flags: [["-c", "prefix each line with how many times it occurred"]] },
    cut: { use: "cut -d DELIM -f LIST [file]", sum: "Pick columns out of each line.", flags: [["-d D", "the character between columns"], ["-f N", "which columns, counting from 1"]] },
    tr: { use: "tr SET1 SET2   |   tr -d SET", sum: "Translate or delete characters.", flags: [["-d", "delete every character in SET"]] },
    sed: { use: "sed 's/pattern/replacement/[g]' [file]", sum: "Substitute text, line by line.", flags: [["g", "replace every occurrence on a line, not just the first"]] },
    tee: { use: "tee [-a] file...", sum: "Copy stdin to a file AND onward down the pipe.", flags: [["-a", "append instead of overwriting"]] },
    xargs: { use: "xargs command", sum: "Turn a list on stdin into arguments for a command.", flags: [] },
    chmod: { use: "chmod MODE file...", sum: "Change permissions. MODE is 755, or +x, u+x, a-w.", flags: [["+x", "make it executable"], ["-w", "make it read-only"], ["644", "rw- r-- r--"], ["755", "rwx r-x r-x"]] },
    which: { use: "which name...", sum: "Show which file on PATH runs when you type this name.", flags: [] },
    "export": { use: "export NAME=value", sum: "Put a variable into the environment programs you start will see.", flags: [] },
    unset: { use: "unset NAME", sum: "Remove a variable.", flags: [] },
    env: { use: "env", sum: "List the exported variables.", flags: [] },
    printenv: { use: "printenv [NAME]", sum: "Print one variable, or all of them.", flags: [] },
    ps: { use: "ps", sum: "List the processes you have running.", flags: [] },
    jobs: { use: "jobs", sum: "List the commands you backgrounded with &.", flags: [] },
    kill: { use: "kill PID", sum: "Stop a process by its number.", flags: [] },
    sleep: { use: "sleep N", sum: "Wait N seconds. Nothing waits in a sandbox, so it returns at once.", flags: [] },
    serve: { use: "serve [PORT]", sum: "Stand-in for a dev server: holds a port until you kill it.", flags: [] },
    lsof: { use: "lsof -i :PORT", sum: "Show what is holding a port. Exits 1 when nothing is.", flags: [] },
    curl: { use: "curl URL", sum: "Fetch a URL. Fails with (7) when nothing is listening.", flags: [] },
    basename: { use: "basename path [suffix]", sum: "The last part of a path.", flags: [] },
    dirname: { use: "dirname path", sum: "Everything but the last part of a path.", flags: [] },
    history: { use: "history", sum: "The commands you have run, numbered.", flags: [] },
    whoami: { use: "whoami", sum: "Print your username.", flags: [] },
    date: { use: "date", sum: "Print the current date and time.", flags: [] },
    man: { use: "man command", sum: "Read the manual for a command. Start here, always.", flags: [] }
  };

  function manPage(name, page) {
    var out = name.toUpperCase() + "(1)\n\nNAME\n    " + name + " — " + page.sum +
      "\n\nSYNOPSIS\n    " + page.use + "\n";
    if (page.flags.length) {
      out += "\nOPTIONS\n";
      page.flags.forEach(function (f) { out += "    " + f[0].padEnd(8, " ") + "  " + f[1] + "\n"; });
    }
    return out;
  }

  /* Walk PATH looking for an executable file of this name. A name with a
     slash in it is a path already and skips the search entirely — the reason
     you have to type ./script and not just script. */
  function lookupOnPath(ctx, name) {
    if (name.indexOf("/") !== -1) {
      var abs = resolve(ctx.cwd, ctx.home, name);
      var n = nodeAt(ctx.fs, abs);
      return (n && n.f !== undefined) ? abs : null;
    }
    var dirs = String(ctx.env.PATH || "").split(":").filter(Boolean);
    for (var i = 0; i < dirs.length; i++) {
      var cand = resolve(ctx.cwd, ctx.home, dirs[i]) + "/" + name;
      var f = nodeAt(ctx.fs, cand);
      if (f && f.f !== undefined && isExec(f)) return cand;
    }
    return null;
  }

  /* cp and mv differ by one line — whether the source survives — so they
     share everything else, including the rule that makes globs useful:
     `cp *.md notes/` copies MANY sources, and then the last argument has to
     be a directory that already exists. */
  function copyOrMove(ctx, args, verb) {
    var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
    var rec = args.some(function (a) { return a.charAt(0) === "-" && a.indexOf("r") !== -1; });
    if (p.length < 2) return fail(verb + ": missing destination file operand\n");

    var dstArg = p[p.length - 1], sources = p.slice(0, -1);
    var dstAbs0 = resolve(ctx.cwd, ctx.home, dstArg);
    var dstNode0 = nodeAt(ctx.fs, dstAbs0);
    var intoDir = !!(dstNode0 && dstNode0.d);
    if (sources.length > 1 && !intoDir)
      return fail(verb + ": target '" + dstArg + "' is not a directory\n");

    for (var i = 0; i < sources.length; i++) {
      var srcAbs = resolve(ctx.cwd, ctx.home, sources[i]);
      var src = nodeAt(ctx.fs, srcAbs);
      if (!src) return fail(verb + ": " + sources[i] + ": No such file or directory\n");
      if (verb === "cp" && src.d && !rec)
        return fail("cp: -r not specified; omitting directory '" + sources[i] + "'\n");
      var dstAbs = intoDir ? dstAbs0 + "/" + baseName(srcAbs) : dstAbs0;
      /* Copying a directory into itself would recurse forever. */
      if (src.d && (dstAbs + "/").indexOf(srcAbs + "/") === 0)
        return fail(verb + ": cannot copy '" + sources[i] + "' into itself\n");
      var parent = nodeAt(ctx.fs, parentOf(dstAbs));
      if (!parent || !parent.d) return fail(verb + ": " + dstArg + ": No such file or directory\n");
      parent.d[baseName(dstAbs)] = cloneNode(src);
      if (verb === "mv") removeAt(ctx.fs, srcAbs);
    }
    return ok("");
  }

  function headTail(ctx, args, stdin, isHead) {
    var num = 10, p = [];
    for (var i = 0; i < args.length; i++) {
      if (args[i] === "-n") { num = parseInt(args[++i], 10) || 10; }
      else if (/^-\d+$/.test(args[i])) num = parseInt(args[i].slice(1), 10);
      else if (args[i].charAt(0) !== "-") p.push(args[i]);
    }
    var text = stdin;
    if (p.length) {
      var n = nodeAt(ctx.fs, resolve(ctx.cwd, ctx.home, p[0]));
      if (!n) return fail((isHead ? "head" : "tail") + ": " + p[0] + ": No such file or directory\n");
      if (n.d) return fail((isHead ? "head" : "tail") + ": " + p[0] + ": Is a directory\n");
      text = n.f;
    }
    var lines = text.replace(/\n$/, "").split("\n");
    if (text === "") lines = [];
    var slice = isHead ? lines.slice(0, num) : lines.slice(Math.max(0, lines.length - num));
    return ok(slice.join("\n") + (slice.length ? "\n" : ""));
  }

  /* ---------- running a line ----------
     Pipes, > and >> redirection, && / || / ; sequencing, & backgrounding,
     glob expansion, variable assignment, and programs of the learner's own
     found on PATH. That is the set a beginner meets in their first month. */
  /* One command chain: pipes, then an optional trailing redirect. */
  function runPipeline(ctx, body) {
    var redirect = null;
    var segs = splitTop(body, [">>", ">"]);
    if (segs.length > 1) {
      var pathText = segs[segs.length - 1].text.trim();
      if (pathText) {
        var target = tokenize(pathText, envFor(ctx))[0];
        redirect = { append: segs[segs.length - 2].sep === ">>", path: target };
        body = segs.slice(0, -1).map(function (p, i) {
          return p.text + (i < segs.length - 2 ? p.sep : "");
        }).join("");
      }
    }

    var stages = splitTop(body, ["|"]).map(function (p) { return p.text; });
    var stdin = "", res = { out: "", err: "", code: 0 };
    for (var i = 0; i < stages.length; i++) {
      var meta = [];
      var parts = tokenize(stages[i].trim(), envFor(ctx), meta);
      if (!parts.length) continue;

      /* Leading NAME=value pairs are assignments. With nothing after them
         they set shell variables for good; with a command after them they
         apply to that command only — which is exactly what people mean when
         they type `NODE_ENV=production ./deploy.sh`. */
      var assigns = [];
      while (parts.length && /^[A-Za-z_][A-Za-z0-9_]*=/.test(parts[0])) {
        var eq = parts[0].indexOf("=");
        assigns.push([parts[0].slice(0, eq), parts[0].slice(eq + 1)]);
        parts.shift(); meta.shift();
      }
      if (assigns.length && !parts.length) {
        assigns.forEach(function (a) { ctx.env[a[0]] = a[1]; });
        res = { out: "", err: "", code: 0 };
        stdin = ""; continue;
      }
      var restore = null;
      if (assigns.length) {
        restore = [];
        assigns.forEach(function (a) {
          restore.push([a[0], ctx.env[a[0]], !!ctx.exported[a[0]]]);
          ctx.env[a[0]] = a[1]; ctx.exported[a[0]] = true;
        });
      }

      var name = parts[0], args = expandGlobs(ctx, parts.slice(1), meta.slice(1));
      /* --help is answered in one place, so every documented command has it
         without every command having to remember to. */
      if (args.indexOf("--help") !== -1 && HELP[name]) res = ok(manPage(name, HELP[name]));
      else {
        var fn = COMMANDS[name];
        res = fn ? fn(ctx, args, stdin) : runProgram(ctx, name, args);
      }

      if (restore) restore.forEach(function (r) {
        if (r[1] === undefined) delete ctx.env[r[0]]; else ctx.env[r[0]] = r[1];
        if (!r[2]) delete ctx.exported[r[0]];
      });
      if (res.code !== 0 && i < stages.length - 1) return res;   // a broken pipe stops here
      stdin = res.out;
    }
    if (redirect) {
      /* A redirect creates (or truncates) its file even when the command
         failed — which is why `ls nope > out.txt` leaves you an EMPTY
         out.txt and the error still on your screen. */
      var abs = resolve(ctx.cwd, ctx.home, redirect.path);
      var existing = redirect.append ? (nodeAt(ctx.fs, abs) || {}).f || "" : "";
      if (!writeFile(ctx.fs, abs, existing + res.out))
        return { out: "", err: "cannot write " + redirect.path + "\n", code: 1 };
      res = { out: "", err: res.err, code: res.code };
    }
    return res;
  }

  /* Running a file rather than a builtin. This is the part of the shell most
     people never picture: the name you typed is looked up on PATH, the file
     is checked for an execute bit, its first line is read to find out what
     should interpret it, and only then does anything run. Every one of those
     four steps has its own failure message, and each one teaches something. */
  function runProgram(ctx, name, args) {
    var path = lookupOnPath(ctx, name);
    if (!path) return { out: "", err: name + ": command not found\n", code: 127 };
    var node = nodeAt(ctx.fs, path);
    if (!node || node.f === undefined) return { out: "", err: name + ": command not found\n", code: 127 };
    if (!isExec(node)) return { out: "", err: "bash: " + name + ": Permission denied\n", code: 126 };

    var text = String(node.f), first = text.split("\n")[0];
    if (first.indexOf("#!") !== 0)
      return { out: "", err: "bash: " + name + ": cannot execute: no shebang line\n", code: 126 };
    if (!/(^|\/|\s)(sh|bash)\s*$/.test(first.slice(2)))
      return { out: "", err: "bash: " + name + ": " + first.slice(2).trim() + ": bad interpreter\n", code: 126 };
    if ((ctx.depth || 0) >= 8)
      return { out: "", err: name + ": too many levels of recursion\n", code: 1 };

    /* The child gets the EXPORTED variables and nothing else. That single
       rule is the whole reason `export` exists, and running a script is the
       only way to see it happen. */
    var child = {
      fs: ctx.fs, cwd: ctx.cwd, home: ctx.home, user: ctx.user,
      env: {}, exported: {}, procs: ctx.procs, sys: ctx.sys,
      history: ctx.history, now: ctx.now, depth: (ctx.depth || 0) + 1
    };
    Object.keys(ctx.exported).forEach(function (k) {
      child.env[k] = ctx.env[k]; child.exported[k] = true;
    });
    child.env["0"] = name;
    args.forEach(function (a, i) { child.env[String(i + 1)] = a; });
    child.env["@"] = args.join(" ");
    child.env["#"] = String(args.length);
    child.env["?"] = "0";

    var out = "", err = "", code = 0, lines = text.split("\n");
    for (var i = 1; i < lines.length; i++) {
      var r = runLine(child, lines[i]);
      if (r.skip) continue;
      out += r.out; err += r.err; code = r.code;
      if (r.exited) break;
    }
    return { out: out, err: err, code: code };
  }

  /* A whole line: `a && b`, `a || b` and `a ; b`, left to right, sharing one
     ctx so `mkdir deep && cd deep` really does leave you in deep. A failed
     && skips forward to the next `;` — the same short-circuit a real shell
     does, and the same one `RUN npm ci && rm -rf /root/.npm` relies on. */
  function runLine(ctx, line) {
    var trimmed = line.trim();
    if (!trimmed || trimmed.charAt(0) === "#") return { out: "", err: "", code: 0, skip: true };

    /* `&&` must be tried before `&`, or every chain would background its
       left half. splitTop takes the separators in order, so order is law. */
    var segs = splitTop(trimmed, ["&&", "||", ";", "&"]);
    var out = "", err = "", code = 0, skip = false, exited = false;
    for (var i = 0; i < segs.length; i++) {
      var text = segs[i].text.trim();
      var sep = segs[i].sep;
      if (!skip && text) {
        var had = ctx.procs.length;
        var r = runPipeline(ctx, text);
        if (sep === "&") {
          /* Nothing runs concurrently here: the command has already finished.
             What backgrounding does is give it a job number and a pid, and
             leave it listed as running until you kill it. If the command put
             a process on the table itself (serve), that IS the job. */
          var proc = ctx.procs.length > had
            ? ctx.procs[ctx.procs.length - 1]
            : { pid: ctx.sys.nextPid++, cmd: text };
          if (ctx.procs.length === had) ctx.procs.push(proc);
          proc.job = ctx.sys.nextJob++;
          out += "[" + proc.job + "] " + proc.pid + "\n";
        }
        out += r.out; err += r.err; code = r.code;
        /* $? is readable by the NEXT command on the same line. */
        ctx.env["?"] = String(code);
        if (r.exited) { exited = true; break; }
      }
      if (sep === ";" || sep === "&") skip = false;
      else if (sep === "&&") skip = skip || code !== 0;
      else if (sep === "||") skip = skip || code === 0;
    }
    ctx.env["?"] = String(code);
    return { out: out, err: err, code: code, exited: exited };
  }

  /* Run a whole script. Returns the transcript so the Result pane can render
     it like a terminal, and so a checkpoint can assert on any single command
     rather than only on the final filesystem. */
  function run(fs, script, opts) {
    opts = opts || {};
    /* Variables, jobs and history are session state, not script state: a
       lesson's setup and the learner's own commands are one terminal, so
       they hang off the filesystem, which is the thing both runs share. */
    if (!fs.shellEnv) {
      fs.shellEnv = { PATH: "/usr/local/bin:/usr/bin:/bin", "?": "0" };
      fs.shellExported = { PATH: true };
      Object.keys(opts.env || {}).forEach(function (k) {
        fs.shellEnv[k] = opts.env[k]; fs.shellExported[k] = true;
      });
    }
    var ctx = {
      fs: fs, cwd: opts.cwd || "/home/you", home: opts.home || "/home/you",
      user: opts.user || "you", env: fs.shellEnv, exported: fs.shellExported,
      procs: fs.procs || (fs.procs = []),
      sys: fs.sys || (fs.sys = { nextPid: 4001, nextJob: 1 }),
      history: fs.history || (fs.history = []),
      now: opts.now || "Fri Sep 12 09:00:00 UTC 2026", depth: 0
    };
    if (!nodeAt(fs, ctx.cwd)) mkdirp(fs, ctx.cwd);
    var transcript = [], lines = String(script || "").split("\n");
    for (var i = 0; i < lines.length; i++) {
      var before = ctx.cwd;
      var trimmed = lines[i].trim();
      if (trimmed && trimmed.charAt(0) !== "#") ctx.history.push(trimmed);
      var r = runLine(ctx, lines[i]);
      if (r.skip) continue;
      transcript.push({ cwd: before, cmd: trimmed, out: r.out, err: r.err, code: r.code });
      if (transcript.length > 500) break;   // a runaway script is a bug, not a lesson
    }
    return { transcript: transcript, fs: fs, cwd: ctx.cwd, procs: ctx.procs };
  }

  /* Rendered for the Result pane so it reads like a terminal session. */
  function renderTranscript(result, user) {
    return result.transcript.map(function (t) {
      var prompt = (user || "you") + "@codelab:" + shortCwd(t.cwd) + "$ " + t.cmd;
      return prompt + "\n" + (t.out || "") + (t.err || "");
    }).join("");
  }
  function shortCwd(cwd) { return cwd === "/home/you" ? "~" : cwd.replace(/^\/home\/you/, "~"); }

  /* Editor tabs become real files. A shell lesson's first tab is its script;
     every other tab — a Dockerfile, a compose.yaml, a file to fix by hand —
     is written into the filesystem, relative to cwd, before the script runs.
     Folders are created as needed. Replacing a directory with a file is an
     authoring bug, so it throws rather than silently clobbering the tree. */
  function writeTabs(fs, cwd, home, files, script) {
    var written = [];
    Object.keys(files || {}).forEach(function (name) {
      if (name === script || files[name] == null) return;
      var abs = resolve(cwd, home || cwd, name);
      var existing = nodeAt(fs, abs);
      if (existing && existing.d) throw new Error("The " + name + " tab would replace a directory at " + abs);
      if (!mkdirp(fs, parentOf(abs)) || !writeFile(fs, abs, files[name]))
        throw new Error("Could not write the " + name + " tab to " + abs);
      written.push(abs);
    });
    return written;
  }

  var API = {
    createFS: createFS, run: run, resolve: resolve, nodeAt: nodeAt, walk: walk,
    tokenize: tokenize, splitTop: splitTop, envFor: envFor,
    renderTranscript: renderTranscript, shortCwd: shortCwd,
    dir: dir, file: file, cloneNode: cloneNode, writeTabs: writeTabs, COMMANDS: COMMANDS,
    globPath: globPath, expandGlobs: expandGlobs, modeString: modeString,
    modeOf: modeOf, isExec: isExec, applyMode: applyMode, HELP: HELP
  };

  root.CODELAB = root.CODELAB || {};
  root.CODELAB.shell = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
