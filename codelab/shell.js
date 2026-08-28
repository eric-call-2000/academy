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

   WHAT IT IS NOT. It is not bash. There is no job control, no
   subshells, no globbing beyond *, no command substitution, no
   functions, no signals. Those are absent on purpose: every one
   of them is a thing to explain rather than a thing a beginner
   needs, and a simulator that pretends to be complete teaches
   worse than one with an honest edge.
   ============================================================ */
(function (root) {
  "use strict";

  /* ---------- the filesystem ----------
     A directory is { d: { name: node } }, a file is { f: "contents" }.
     Two shapes rather than a type tag keeps every check a truthiness
     test and makes a whole tree readable in one console.log. */
  function dir(children) { return { d: children || {} }; }
  function file(text) { return { f: String(text == null ? "" : text) }; }

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
    parent.d[baseName(abs)] = file(text);
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
    if (n.f !== undefined) return file(n.f);
    var out = dir();
    Object.keys(n.d).forEach(function (k) { out.d[k] = cloneNode(n.d[k]); });
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
  function tokenize(line) {
    var out = [], cur = "", quote = null, had = false;
    for (var i = 0; i < line.length; i++) {
      var ch = line.charAt(i);
      if (quote) {
        if (ch === quote) quote = null;
        else cur += ch;
        had = true;
      } else if (ch === '"' || ch === "'") { quote = ch; had = true; }
      else if (ch === "\\" && i + 1 < line.length) { cur += line.charAt(++i); had = true; }
      else if (/\s/.test(ch)) { if (cur || had) { out.push(cur); cur = ""; had = false; } }
      else { cur += ch; had = true; }
    }
    if (cur || had) out.push(cur);
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
      var target = resolve(ctx.cwd, ctx.home, rest[0] || ".");
      var n = nodeAt(ctx.fs, target);
      if (!n) return fail("ls: " + (rest[0] || ".") + ": No such file or directory\n");
      if (!n.d) return ok(baseName(target) + "\n");
      var names = Object.keys(n.d).sort();
      if (flags.indexOf("a") === -1) names = names.filter(function (x) { return x.charAt(0) !== "."; });
      if (flags.indexOf("l") !== -1) {
        return ok(names.map(function (x) {
          var c = n.d[x];
          return (c.d ? "drwxr-xr-x" : "-rw-r--r--") + "  " + (c.d ? "-" : String(c.f.length)) + "  " + x;
        }).join("\n") + (names.length ? "\n" : ""));
      }
      return ok(names.join("\n") + (names.length ? "\n" : ""));
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
      if (!args.length) return ok(stdin);
      var buf = "";
      for (var i = 0; i < args.length; i++) {
        var abs = resolve(ctx.cwd, ctx.home, args[i]);
        var n = nodeAt(ctx.fs, abs);
        if (!n) return fail("cat: " + args[i] + ": No such file or directory\n");
        if (n.d) return fail("cat: " + args[i] + ": Is a directory\n");
        buf += n.f;
        if (buf && buf.charAt(buf.length - 1) !== "\n") buf += "\n";
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

    cp: function (ctx, args) {
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      var rec = args.join("").indexOf("r") !== -1 && args.some(function (a) { return a.charAt(0) === "-"; });
      if (p.length < 2) return fail("cp: missing destination file operand\n");
      var srcAbs = resolve(ctx.cwd, ctx.home, p[0]);
      var src = nodeAt(ctx.fs, srcAbs);
      if (!src) return fail("cp: " + p[0] + ": No such file or directory\n");
      if (src.d && !rec) return fail("cp: -r not specified; omitting directory '" + p[0] + "'\n");
      var dstAbs = resolve(ctx.cwd, ctx.home, p[1]);
      var dstNode = nodeAt(ctx.fs, dstAbs);
      if (dstNode && dstNode.d) dstAbs = dstAbs + "/" + baseName(srcAbs);
      var parent = nodeAt(ctx.fs, parentOf(dstAbs));
      if (!parent || !parent.d) return fail("cp: " + p[1] + ": No such file or directory\n");
      parent.d[baseName(dstAbs)] = cloneNode(src);
      return ok("");
    },

    mv: function (ctx, args) {
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      if (p.length < 2) return fail("mv: missing destination file operand\n");
      var srcAbs = resolve(ctx.cwd, ctx.home, p[0]);
      var src = nodeAt(ctx.fs, srcAbs);
      if (!src) return fail("mv: " + p[0] + ": No such file or directory\n");
      var dstAbs = resolve(ctx.cwd, ctx.home, p[1]);
      var dstNode = nodeAt(ctx.fs, dstAbs);
      if (dstNode && dstNode.d) dstAbs = dstAbs + "/" + baseName(srcAbs);
      var parent = nodeAt(ctx.fs, parentOf(dstAbs));
      if (!parent || !parent.d) return fail("mv: " + p[1] + ": No such file or directory\n");
      parent.d[baseName(dstAbs)] = cloneNode(src);
      removeAt(ctx.fs, srcAbs);
      return ok("");
    },

    head: function (ctx, args, stdin) { return headTail(ctx, args, stdin, true); },
    tail: function (ctx, args, stdin) { return headTail(ctx, args, stdin, false); },

    wc: function (ctx, args, stdin) {
      var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      var text = stdin;
      if (p.length) {
        var n = nodeAt(ctx.fs, resolve(ctx.cwd, ctx.home, p[0]));
        if (!n) return fail("wc: " + p[0] + ": No such file or directory\n");
        if (n.d) return fail("wc: " + p[0] + ": Is a directory\n");
        text = n.f;
      }
      var lines = text ? text.replace(/\n$/, "").split("\n").length : 0;
      var words = text.split(/\s+/).filter(Boolean).length;
      if (flags.indexOf("l") !== -1) return ok(lines + (p.length ? " " + p[0] : "") + "\n");
      if (flags.indexOf("w") !== -1) return ok(words + (p.length ? " " + p[0] : "") + "\n");
      return ok(lines + " " + words + " " + text.length + (p.length ? " " + p[0] : "") + "\n");
    },

    grep: function (ctx, args, stdin) {
      var flags = args.filter(function (a) { return a.charAt(0) === "-"; }).join("");
      var p = args.filter(function (a) { return a.charAt(0) !== "-"; });
      if (!p.length) return fail("usage: grep pattern [file]\n");
      var pat = p[0], text = stdin;
      if (p.length > 1) {
        var n = nodeAt(ctx.fs, resolve(ctx.cwd, ctx.home, p[1]));
        if (!n) return fail("grep: " + p[1] + ": No such file or directory\n");
        if (n.d) return fail("grep: " + p[1] + ": Is a directory\n");
        text = n.f;
      }
      var ci = flags.indexOf("i") !== -1, inv = flags.indexOf("v") !== -1;
      var needle = ci ? pat.toLowerCase() : pat;
      var hits = text.replace(/\n$/, "").split("\n").filter(function (l) {
        if (l === "" && text === "") return false;
        var hay = ci ? l.toLowerCase() : l;
        var found = hay.indexOf(needle) !== -1;
        return inv ? !found : found;
      });
      if (flags.indexOf("c") !== -1) return ok(hits.length + "\n");
      /* grep exits 1 when nothing matched — that non-zero code is the whole
         reason grep is useful in a script, so it is modelled. */
      return { out: hits.join("\n") + (hits.length ? "\n" : ""), err: "", code: hits.length ? 0 : 1 };
    },

    find: function (ctx, args) {
      var start = resolve(ctx.cwd, ctx.home, args[0] && args[0].charAt(0) !== "-" ? args[0] : ".");
      var nameIdx = args.indexOf("-name");
      var pat = nameIdx !== -1 ? args[nameIdx + 1] : null;
      var n = nodeAt(ctx.fs, start);
      if (!n) return fail("find: " + start + ": No such file or directory\n");
      var rx = pat ? new RegExp("^" + pat.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$") : null;
      var out = [];
      if (!rx || rx.test(baseName(start))) out.push(start);
      if (n.d) walk(n, start === "/" ? "" : start).forEach(function (e) {
        if (!rx || rx.test(baseName(e.path))) out.push(e.path);
      });
      return ok(out.join("\n") + (out.length ? "\n" : ""));
    },

    sort: function (ctx, args, stdin) {
      var lines = stdin.replace(/\n$/, "").split("\n").filter(function (l) { return l !== ""; });
      lines.sort();
      if (args.indexOf("-r") !== -1) lines.reverse();
      return ok(lines.join("\n") + (lines.length ? "\n" : ""));
    },
    uniq: function (ctx, args, stdin) {
      var lines = stdin.replace(/\n$/, "").split("\n"), out = [];
      lines.forEach(function (l) { if (!out.length || out[out.length - 1] !== l) out.push(l); });
      return ok(out.join("\n") + (out.length ? "\n" : ""));
    },
    "true": function () { return ok(""); },
    "false": function () { return { out: "", err: "", code: 1 }; },
    clear: function () { return ok(""); },
    whoami: function (ctx) { return ok(ctx.user + "\n"); }
  };

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
     Supports pipes, > and >> redirection, and && / ; sequencing. That is the
     set a beginner meets in week one and nothing beyond it. */
  function runLine(ctx, line) {
    var trimmed = line.trim();
    if (!trimmed || trimmed.charAt(0) === "#") return { out: "", err: "", code: 0, skip: true };

    var redirect = null, body = trimmed;
    var m = body.match(/\s(>>?)\s*([^\s>]+)\s*$/);
    if (m) { redirect = { append: m[1] === ">>", path: m[2] }; body = body.slice(0, m.index); }

    var stages = body.split("|");
    var stdin = "", res = { out: "", err: "", code: 0 };
    for (var i = 0; i < stages.length; i++) {
      var parts = tokenize(stages[i].trim());
      if (!parts.length) continue;
      var name = parts[0], args = parts.slice(1);
      var fn = COMMANDS[name];
      if (!fn) { return { out: "", err: name + ": command not found\n", code: 127 }; }
      res = fn(ctx, args, stdin);
      if (res.code !== 0 && i < stages.length - 1) return res;   // a broken pipe stops here
      stdin = res.out;
    }
    if (redirect && res.code === 0) {
      var abs = resolve(ctx.cwd, ctx.home, redirect.path);
      var existing = redirect.append ? (nodeAt(ctx.fs, abs) || {}).f || "" : "";
      if (!writeFile(ctx.fs, abs, existing + res.out))
        return { out: "", err: "cannot write " + redirect.path + "\n", code: 1 };
      res = { out: "", err: res.err, code: res.code };
    }
    return res;
  }

  /* Run a whole script. Returns the transcript so the Result pane can render
     it like a terminal, and so a checkpoint can assert on any single command
     rather than only on the final filesystem. */
  function run(fs, script, opts) {
    opts = opts || {};
    var ctx = {
      fs: fs, cwd: opts.cwd || "/home/you", home: opts.home || "/home/you",
      user: opts.user || "you"
    };
    if (!nodeAt(fs, ctx.cwd)) mkdirp(fs, ctx.cwd);
    var transcript = [], lines = String(script || "").split("\n");
    for (var i = 0; i < lines.length; i++) {
      var before = ctx.cwd;
      var r = runLine(ctx, lines[i]);
      if (r.skip) continue;
      transcript.push({ cwd: before, cmd: lines[i].trim(), out: r.out, err: r.err, code: r.code });
      if (transcript.length > 500) break;   // a runaway script is a bug, not a lesson
    }
    return { transcript: transcript, fs: fs, cwd: ctx.cwd };
  }

  /* Rendered for the Result pane so it reads like a terminal session. */
  function renderTranscript(result, user) {
    return result.transcript.map(function (t) {
      var prompt = (user || "you") + "@codelab:" + shortCwd(t.cwd) + "$ " + t.cmd;
      return prompt + "\n" + (t.out || "") + (t.err || "");
    }).join("");
  }
  function shortCwd(cwd) { return cwd === "/home/you" ? "~" : cwd.replace(/^\/home\/you/, "~"); }

  var API = {
    createFS: createFS, run: run, resolve: resolve, nodeAt: nodeAt, walk: walk,
    tokenize: tokenize, renderTranscript: renderTranscript, shortCwd: shortCwd,
    dir: dir, file: file, COMMANDS: COMMANDS
  };

  root.CODELAB = root.CODELAB || {};
  root.CODELAB.shell = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
