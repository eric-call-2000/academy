/* ============================================================
   CodeLab — gitsim: a Git you can actually run
   ------------------------------------------------------------
   Registers a `git` command into shell.js, so a Git lesson is a
   shell lesson: the learner types the same lines they will type
   in a real terminal, and the working tree IS the shell's
   filesystem — `echo`, `cat`, `ls` and even `rm -rf .git` all
   behave the way they do on a real machine.

   What is modelled for real: the object store (blobs, trees,
   commits), refs and HEAD (including detached HEAD), the index,
   the reflog with HEAD@{n}, line diffs, three-way merge with real
   conflict markers, stash, rebase/cherry-pick/revert as one
   sequencer, .gitignore, and remotes as other repositories on the
   same filesystem (clone/fetch/pull/push with fast-forward checks
   and --force-with-lease).

   What is deliberately NOT: real SHA-1 (shas are 40 hex chars of
   a deterministic FNV-1a, so the same commands always produce the
   same shas), packfiles and the on-disk .git format, file modes,
   rename detection, merge strategies beyond three-way, and
   anything that needs an editor (`rebase -i`, `commit` without
   -m, `add -p`). Those print an honest "needs an editor" error
   rather than a fake flag.

   State lives on the filesystem: a non-bare repo keeps it on the
   `.git` directory node, a bare repo on its own directory node.
   Everything in it is plain JSON, so a repo can be deep-copied
   (cp -r, mv, the T.before snapshot) with JSON.parse/stringify.
   ============================================================ */
(function (root) {
  "use strict";
  var SH = (root.CODELAB && root.CODELAB.shell) ||
           (typeof require === "function" ? require("./shell.js") : null);

  /* ---------- hashing ----------
     Five FNV-1a passes with different offset bases, 8 hex each →
     40 hex chars that look exactly like a real sha and are fully
     deterministic, so lesson authors can predict them. */
  var SEEDS = [0x811c9dc5, 0x050c5d1f, 0x9e3779b9, 0x85ebca6b, 0xc2b2ae35];
  function fnv(str, seed) {
    var h = seed >>> 0;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return ("0000000" + h.toString(16)).slice(-8);
  }
  function hash(str) { return SEEDS.map(function (s) { return fnv(str, s); }).join(""); }
  function short(sha) { return sha ? sha.slice(0, 7) : ""; }

  /* ---------- the clock ----------
     One minute per commit, starting 1 Sep 2026 09:00 UTC. It lives on the
     filesystem root so a lesson's setup and the learner's commands share it
     and every commit is strictly later than the one before. */
  var EPOCH = Date.UTC(2026, 8, 1, 9, 0, 0) / 1000;
  function tick(fsRoot) {
    if (fsRoot.gitClock == null) fsRoot.gitClock = EPOCH;
    fsRoot.gitClock += 60;
    return fsRoot.gitClock;
  }
  var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function fmtDate(t) {
    var d = new Date(t * 1000);
    return DAYS[d.getUTCDay()] + " " + MONS[d.getUTCMonth()] + " " + d.getUTCDate() + " " +
      pad2(d.getUTCHours()) + ":" + pad2(d.getUTCMinutes()) + ":" + pad2(d.getUTCSeconds()) + " " +
      d.getUTCFullYear() + " +0000";
  }

  /* ---------- small utils ---------- */
  function keys(o) { return Object.keys(o || {}); }
  /* Accepts maps OR arrays of keys, because it returns an array and gets
     nested: union(union(base, ours), theirs). Taking Object.keys() of that
     inner array would yield "0","1",… instead of paths — a bug that once
     made every merge silently drop files that only one side had. */
  function union(a, b) {
    var seen = {}, out = [];
    function ks(x) { return Array.isArray(x) ? x : keys(x); }
    ks(a).concat(ks(b)).forEach(function (k) { if (!seen[k]) { seen[k] = 1; out.push(k); } });
    return out.sort();
  }
  function copy(o) { return JSON.parse(JSON.stringify(o)); }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
  function subjectOf(msg) { return String(msg || "").split("\n")[0]; }

  /* ---------- a fresh repository ---------- */
  function newRepo(bare, branch) {
    return {
      bare: !!bare,
      objects: {},
      refs: {},
      head: { ref: "refs/heads/" + (branch || "main") },
      index: {},
      reflog: {},
      config: { remote: {}, branch: {}, user: {} },
      conflicts: [],        // unmerged paths, whatever caused them
      merge: null,          // { head, msg, label } while a merge is in progress
      seq: null,            // rebase / cherry-pick / revert in progress
      stash: []             // newest first
    };
  }

  /* ---------- the object store ---------- */
  function putBlob(repo, content) {
    content = String(content);
    var sha = hash("blob\0" + content);
    if (!repo.objects[sha]) repo.objects[sha] = { type: "blob", data: content };
    return sha;
  }
  function blobSha(content) { return hash("blob\0" + String(content)); }
  function getBlob(repo, sha) {
    var o = sha && repo.objects[sha];
    return o && o.type === "blob" ? o.data : null;
  }
  function putTree(repo, map) {
    var entries = {};
    keys(map).sort().forEach(function (p) { entries[p] = map[p]; });
    var sha = hash("tree\0" + keys(entries).map(function (p) { return p + " " + entries[p]; }).join("\n"));
    if (!repo.objects[sha]) repo.objects[sha] = { type: "tree", entries: entries };
    return sha;
  }
  function treeMap(repo, treeSha) {
    var o = treeSha && repo.objects[treeSha];
    return o && o.type === "tree" ? copy(o.entries) : {};
  }
  function putCommit(repo, c) {
    var body = "commit\0" + c.tree + "\n" + (c.parents || []).join(" ") + "\n" + c.author + "\n" +
      c.atime + " " + c.ctime + "\n" + c.message;
    var sha = hash(body);
    repo.objects[sha] = {
      type: "commit", tree: c.tree, parents: (c.parents || []).slice(), author: c.author,
      atime: c.atime, ctime: c.ctime, message: c.message
    };
    return sha;
  }
  function commitObj(repo, sha) {
    var o = sha && repo.objects[sha];
    return o && o.type === "commit" ? o : null;
  }
  function commitMap(repo, sha) {
    var c = commitObj(repo, sha);
    return c ? treeMap(repo, c.tree) : {};
  }

  /* ---------- refs, HEAD and the reflog ----------
     Every ref update appends to that ref's log; an update to the branch HEAD
     is on also appends to HEAD's log, exactly like real git. That second log
     is what `git reflog` shows and what HEAD@{n} indexes. */
  function headRef(repo) { return repo.head.ref || null; }
  function branchName(repo) { var r = headRef(repo); return r ? r.replace(/^refs\/heads\//, "") : null; }
  function headSha(repo) {
    if (repo.head.detached) return repo.head.detached;
    return repo.refs[repo.head.ref] || null;
  }
  function logRef(repo, name, from, to, msg) {
    (repo.reflog[name] = repo.reflog[name] || []).push({ from: from || null, to: to || null, msg: msg });
  }
  function setRef(repo, ref, sha, msg) {
    var old = repo.refs[ref] || null;
    if (sha) repo.refs[ref] = sha; else delete repo.refs[ref];
    if (msg) logRef(repo, ref, old, sha, msg);
    return old;
  }
  /* Move whatever HEAD points at — the branch, or the detached sha. */
  function moveHead(repo, sha, msg) {
    var old = headSha(repo);
    if (repo.head.detached) repo.head.detached = sha;
    else setRef(repo, repo.head.ref, sha, msg);
    logRef(repo, "HEAD", old, sha, msg);
  }
  /* Point HEAD somewhere else entirely (checkout / switch). */
  function attachHead(repo, ref, msg) {
    var old = headSha(repo);
    repo.head = { ref: ref };
    logRef(repo, "HEAD", old, repo.refs[ref] || null, msg);
  }
  function detachHead(repo, sha, msg) {
    var old = headSha(repo);
    repo.head = { detached: sha };
    logRef(repo, "HEAD", old, sha, msg);
  }
  function localBranches(repo) {
    return keys(repo.refs).filter(function (r) { return r.indexOf("refs/heads/") === 0; })
      .map(function (r) { return r.slice(11); }).sort();
  }

  /* ---------- finding a repository ----------
     Walk up from the cwd the way git does: a directory holding a `.git`
     node with repo state is a working tree; a directory that carries repo
     state itself is a bare repository. */
  function nodeAt(fs, abs) { return SH.nodeAt(fs, abs); }
  function findRepo(fs, cwd) {
    var parts = String(cwd).split("/").filter(Boolean);
    for (var i = parts.length; i >= 0; i--) {
      var abs = "/" + parts.slice(0, i).join("/");
      var n = nodeAt(fs, abs);
      if (!n || !n.d) continue;
      if (n.repo) return { repo: n.repo, fs: fs, root: null, gitPath: abs };
      var g = n.d[".git"];
      if (g && g.repo) return { repo: g.repo, fs: fs, root: abs, gitPath: (abs === "/" ? "" : abs) + "/.git" };
    }
    return null;
  }
  function repoAtPath(fs, abs) {
    var n = nodeAt(fs, abs);
    if (!n || !n.d) return null;
    if (n.repo) return { repo: n.repo, fs: fs, root: null, gitPath: abs };
    if (n.d[".git"] && n.d[".git"].repo) return { repo: n.d[".git"].repo, fs: fs, root: abs, gitPath: abs + "/.git" };
    return null;
  }

  /* ---------- the working tree ----------
     Paths are repo-relative with "/" separators; nested directories are
     real directories on the shell filesystem. */
  function rootNode(h) { return nodeAt(h.fs, h.root); }
  function absOf(h, p) { return (h.root === "/" ? "" : h.root) + "/" + p; }
  function wtList(h) {
    if (!h.root) return [];
    var out = [];
    (function walk(node, prefix) {
      keys(node.d).sort().forEach(function (name) {
        if (!prefix && name === ".git") return;
        var c = node.d[name], p = prefix ? prefix + "/" + name : name;
        if (c.d) walk(c, p); else out.push(p);
      });
    })(rootNode(h), "");
    return out;
  }
  function wtRead(h, p) {
    if (!h.root) return null;
    var n = nodeAt(h.fs, absOf(h, p));
    return n && n.f !== undefined ? n.f : null;
  }
  function wtWrite(h, p, content) {
    var parts = p.split("/"), node = rootNode(h);
    for (var i = 0; i < parts.length - 1; i++) {
      var c = node.d[parts[i]];
      if (!c || !c.d) { c = SH.dir(); node.d[parts[i]] = c; }
      node = c;
    }
    node.d[parts[parts.length - 1]] = SH.file(content);
  }
  /* Deleting a file also removes directories it leaves empty, as git does. */
  function wtRemove(h, p) {
    var parts = p.split("/"), chain = [rootNode(h)];
    for (var i = 0; i < parts.length - 1; i++) {
      var c = chain[chain.length - 1].d[parts[i]];
      if (!c || !c.d) return;
      chain.push(c);
    }
    delete chain[chain.length - 1].d[parts[parts.length - 1]];
    for (var j = chain.length - 1; j > 0; j--) {
      if (keys(chain[j].d).length) break;
      delete chain[j - 1].d[parts[j - 1]];
    }
  }
  function wtMap(h) {
    var m = {};
    wtList(h).forEach(function (p) { m[p] = wtRead(h, p); });
    return m;
  }

  /* ---------- .gitignore ----------
     Root .gitignore only. Supports comments, blank lines, `!` negation,
     trailing `/` (directories only), leading `/` (anchored), `*`, `?` and
     `**`. A pattern with no slash matches a name at any depth. As in real
     git, a file inside an ignored directory cannot be re-included. */
  function parseIgnore(text) {
    var rules = [];
    String(text || "").split("\n").forEach(function (raw, i) {
      var line = raw.replace(/\s+$/, "");
      if (!line || line.charAt(0) === "#") return;
      var r = { src: line, line: i + 1, neg: false, dirOnly: false };
      if (line.charAt(0) === "!") { r.neg = true; line = line.slice(1); }
      if (line.charAt(line.length - 1) === "/") { r.dirOnly = true; line = line.slice(0, -1); }
      r.anchored = line.indexOf("/") !== -1;
      if (line.charAt(0) === "/") line = line.slice(1);
      var rx = "";
      for (var k = 0; k < line.length; k++) {
        var ch = line.charAt(k);
        if (ch === "*" && line.charAt(k + 1) === "*") {
          if (line.charAt(k + 2) === "/") { rx += "(?:.*/)?"; k += 2; } else { rx += ".*"; k += 1; }
        } else if (ch === "*") rx += "[^/]*";
        else if (ch === "?") rx += "[^/]";
        else rx += ch.replace(/[.+^${}()|[\]\\]/g, "\\$&");
      }
      r.rx = new RegExp("^" + rx + "$");
      rules.push(r);
    });
    return rules;
  }
  function matchRules(rules, path, isDir) {
    var hit = null, base = path.split("/").pop();
    rules.forEach(function (r) {
      if (r.dirOnly && !isDir) return;
      if (r.anchored ? r.rx.test(path) : r.rx.test(base)) hit = r;
    });
    return hit;
  }
  /* Returns the deciding rule when the path is ignored, else null. */
  function ignoredBy(h, path) {
    var text = wtRead(h, ".gitignore");
    if (text == null) return null;
    var rules = parseIgnore(text), parts = path.split("/");
    for (var i = 1; i < parts.length; i++) {
      var d = matchRules(rules, parts.slice(0, i).join("/"), true);
      if (d && !d.neg) return d;
    }
    var f = matchRules(rules, path, false);
    return f && !f.neg ? f : null;
  }
  /* ---------- status ----------
     The three comparisons every beginner needs named: HEAD vs index
     (staged), index vs working tree (unstaged), and working-tree files the
     index has never heard of (untracked, minus anything .gitignore hides). */
  function conflictPaths(repo) { return repo.conflicts.map(function (c) { return c.path; }); }
  function status(h) {
    var repo = h.repo, head = commitMap(repo, headSha(repo)), idx = repo.index;
    var wt = wtMap(h), conflicted = {};
    repo.conflicts.forEach(function (c) { conflicted[c.path] = c.kind; });
    var staged = [], unstaged = [], untracked = [];
    union(head, idx).forEach(function (p) {
      if (conflicted[p] || head[p] === idx[p]) return;
      staged.push({ path: p, kind: !head[p] ? "new file" : !idx[p] ? "deleted" : "modified" });
    });
    keys(idx).sort().forEach(function (p) {
      if (conflicted[p]) return;
      if (wt[p] == null) unstaged.push({ path: p, kind: "deleted" });
      else if (blobSha(wt[p]) !== idx[p]) unstaged.push({ path: p, kind: "modified" });
    });
    keys(wt).sort().forEach(function (p) {
      if (idx[p] || conflicted[p] != null) return;
      if (!ignoredBy(h, p)) untracked.push(p);
    });
    return {
      staged: staged, unstaged: unstaged, untracked: untracked,
      conflicts: repo.conflicts.slice().sort(function (a, b) { return a.path < b.path ? -1 : 1; })
    };
  }
  /* Real git shows a wholly-untracked directory as "dir/" rather than
     listing every file inside it. */
  function collapseUntracked(repo, paths) {
    var out = [], seen = {};
    paths.forEach(function (p) {
      var parts = p.split("/"), shown = p;
      for (var i = 1; i < parts.length; i++) {
        var pre = parts.slice(0, i).join("/") + "/";
        if (!keys(repo.index).some(function (k) { return k.indexOf(pre) === 0; })) { shown = pre; break; }
      }
      if (!seen[shown]) { seen[shown] = 1; out.push(shown); }
    });
    return out;
  }

  /* ---------- line diff ----------
     Plain LCS over lines. Lesson files are capped at ~40 lines, so the
     O(n·m) table is microseconds. A missing final newline is carried as a
     marker on the last line, which is how git can print
     "\ No newline at end of file" and still compare lines as strings. */
  var NONL = " nonl";
  function toLines(text) {
    if (text == null || text === "") return [];
    var nl = text.charAt(text.length - 1) === "\n";
    var lines = (nl ? text.slice(0, -1) : text).split("\n");
    if (!nl) lines[lines.length - 1] += NONL;
    return lines;
  }
  function fromLines(lines) {
    if (!lines.length) return "";
    var last = lines[lines.length - 1], nonl = last.slice(-NONL.length) === NONL;
    var body = lines.slice(0, -1).concat([nonl ? last.slice(0, -NONL.length) : last]).join("\n");
    return nonl ? body : body + "\n";
  }
  function diffLines(A, B) {
    var n = A.length, m = B.length, dp = [], i, j;
    for (i = 0; i <= n; i++) { dp.push(new Array(m + 1)); dp[i][m] = 0; }
    for (j = 0; j <= m; j++) dp[n][j] = 0;
    for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--)
      dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    var ops = [];
    i = 0; j = 0;
    while (i < n || j < m) {
      if (i < n && j < m && A[i] === B[j]) { ops.push({ op: " ", line: A[i], a: i, b: j }); i++; j++; }
      else if (j >= m || (i < n && dp[i + 1][j] >= dp[i][j + 1])) { ops.push({ op: "-", line: A[i], a: i, b: j }); i++; }
      else { ops.push({ op: "+", line: B[j], a: i, b: j }); j++; }
    }
    return ops;
  }
  function countChanges(a, b) {
    var ins = 0, del = 0;
    diffLines(toLines(a), toLines(b)).forEach(function (o) { if (o.op === "+") ins++; else if (o.op === "-") del++; });
    return { ins: ins, del: del };
  }
  function renderLine(prefix, line) {
    if (line.slice(-NONL.length) === NONL) return prefix + line.slice(0, -NONL.length) + "\n\\ No newline at end of file\n";
    return prefix + line + "\n";
  }
  function range(start, count) {
    var s = count === 0 ? start : start + 1;
    return count === 1 ? String(s) : s + "," + count;
  }
  function hunks(a, b) {
    var ops = diffLines(toLines(a), toLines(b)), CTX = 3, out = "";
    var changes = [];
    ops.forEach(function (o, k) { if (o.op !== " ") changes.push(k); });
    var gi = 0;
    while (gi < changes.length) {
      var first = changes[gi], last = first;
      while (gi + 1 < changes.length && changes[gi + 1] - last <= CTX * 2 + 1) { gi++; last = changes[gi]; }
      gi++;
      var s = Math.max(0, first - CTX), e = Math.min(ops.length, last + CTX + 1);
      var oldStart = 0, newStart = 0, oc = 0, nc = 0, body = "";
      for (var k = 0; k < s; k++) { if (ops[k].op !== "+") oldStart++; if (ops[k].op !== "-") newStart++; }
      for (k = s; k < e; k++) {
        if (ops[k].op !== "+") oc++;
        if (ops[k].op !== "-") nc++;
        body += renderLine(ops[k].op, ops[k].line);
      }
      out += "@@ -" + range(oldStart, oc) + " +" + range(newStart, nc) + " @@\n" + body;
    }
    return out;
  }
  /* One file's diff in git's exact shape. a/b are contents (null = absent). */
  function fileDiff(p, a, b) {
    if (a === b) return "";
    var ha = a == null ? "0000000" : short(blobSha(a)), hb = b == null ? "0000000" : short(blobSha(b));
    var out = "diff --git a/" + p + " b/" + p + "\n";
    if (a == null) out += "new file mode 100644\nindex " + ha + ".." + hb + "\n";
    else if (b == null) out += "deleted file mode 100644\nindex " + ha + ".." + hb + "\n";
    else out += "index " + ha + ".." + hb + " 100644\n";
    if (!a && !b) return out;   // an empty file added or removed has no hunks
    out += "--- " + (a == null ? "/dev/null" : "a/" + p) + "\n";
    out += "+++ " + (b == null ? "/dev/null" : "b/" + p) + "\n";
    return out + hunks(a, b);
  }
  /* Diff two content maps {path: text}, optionally limited to some paths. */
  function diffMaps(A, B, only) {
    return union(A, B).filter(function (p) { return !only || !only.length || only.indexOf(p) !== -1; })
      .map(function (p) { return fileDiff(p, A[p] == null ? null : A[p], B[p] == null ? null : B[p]); })
      .join("");
  }
  function contents(repo, shaMap) {
    var m = {};
    keys(shaMap).forEach(function (p) { m[p] = getBlob(repo, shaMap[p]); });
    return m;
  }
  function changedPaths(A, B) {
    return union(A, B).filter(function (p) { return (A[p] == null ? null : A[p]) !== (B[p] == null ? null : B[p]); });
  }
  function shortstat(files, ins, del) {
    var s = " " + plural(files, "file", "files") + " changed";
    if (ins || !del) s += ", " + plural(ins, "insertion(+)", "insertions(+)");
    if (del || !ins) s += ", " + plural(del, "deletion(-)", "deletions(-)");
    return s + "\n";
  }
  function totals(A, B) {
    var ins = 0, del = 0, paths = changedPaths(A, B);
    paths.forEach(function (p) { var c = countChanges(A[p], B[p]); ins += c.ins; del += c.del; });
    return { files: paths.length, ins: ins, del: del, paths: paths };
  }
  function diffstat(A, B) {
    var t = totals(A, B);
    if (!t.files) return "";
    var w = Math.max.apply(null, t.paths.map(function (p) { return p.length; }));
    var rows = t.paths.map(function (p) { var c = countChanges(A[p], B[p]); return { p: p, c: c, n: c.ins + c.del }; });
    var cw = String(Math.max.apply(null, rows.map(function (r) { return r.n; }))).length;
    var out = rows.map(function (r) {
      var scale = r.n > 30 ? 30 / r.n : 1;
      var bar = new Array(Math.round(r.c.ins * scale) + 1).join("+") + new Array(Math.round(r.c.del * scale) + 1).join("-");
      var num = String(r.n); while (num.length < cw) num = " " + num;
      var name = r.p; while (name.length < w) name += " ";
      return " " + name + " | " + num + (bar ? " " + bar : "") + "\n";
    }).join("");
    return out + shortstat(t.files, t.ins, t.del);
  }
  function modeLines(A, B) {
    return changedPaths(A, B).map(function (p) {
      if (A[p] == null) return " create mode 100644 " + p + "\n";
      if (B[p] == null) return " delete mode 100644 " + p + "\n";
      return "";
    }).join("");
  }

  /* ---------- three-way merge ----------
     Hunk-based diff3: every change is a range of base lines replaced by new
     lines. Changes from the two sides that overlap — or merely touch, as in
     real git, which needs one untouched line between them — are grouped;
     a group changed on one side takes that side, a group changed the same
     way on both takes it once, and anything else is a conflict. */
  function changeHunks(base, side) {
    var ops = diffLines(base, side), out = [], cur = null, oPos = 0;
    ops.forEach(function (o) {
      if (o.op === " ") { if (cur) { out.push(cur); cur = null; } oPos++; return; }
      if (!cur) cur = { s: oPos, e: oPos, lines: [] };
      if (o.op === "-") { cur.e++; oPos++; }
      else cur.lines.push(o.line);
    });
    if (cur) out.push(cur);
    return out;
  }
  function applyIn(base, hs, s, e) {
    var out = [], pos = s;
    hs.forEach(function (hk) {
      out = out.concat(base.slice(pos, hk.s), hk.lines);
      pos = hk.e;
    });
    return out.concat(base.slice(pos, e));
  }
  function mergeText(baseText, oursText, theirsText, labelOurs, labelTheirs) {
    var O = toLines(baseText), A = toLines(oursText), B = toLines(theirsText);
    var all = changeHunks(O, A).map(function (x) { x.side = "a"; return x; })
      .concat(changeHunks(O, B).map(function (x) { x.side = "b"; return x; }))
      .sort(function (x, y) { return x.s - y.s || x.e - y.e; });
    var out = [], pos = 0, conflict = false, gi = 0;
    while (gi < all.length) {
      var group = [all[gi]], s = all[gi].s, e = all[gi].e;
      gi++;
      while (gi < all.length && all[gi].s <= e) { group.push(all[gi]); e = Math.max(e, all[gi].e); gi++; }
      out = out.concat(O.slice(pos, s));
      var ha = group.filter(function (x) { return x.side === "a"; });
      var hb = group.filter(function (x) { return x.side === "b"; });
      var ta = applyIn(O, ha, s, e), tb = applyIn(O, hb, s, e);
      if (!hb.length) out = out.concat(ta);
      else if (!ha.length) out = out.concat(tb);
      else if (ta.join("\n") === tb.join("\n")) out = out.concat(ta);
      else {
        conflict = true;
        out = out.concat(["<<<<<<< " + labelOurs], ta, ["======="], tb, [">>>>>>> " + labelTheirs]);
      }
      pos = e;
    }
    out = out.concat(O.slice(pos));
    /* Markers are whole lines; a side that lost its final newline must not
       glue itself onto the next marker. */
    if (conflict) out = out.map(function (l) { return l.slice(-NONL.length) === NONL ? l.slice(0, -NONL.length) : l; });
    return { text: fromLines(out), conflict: conflict };
  }
  /* Merge three trees (path → blob sha). Returns the new index map, the
     working-tree text for every conflicted path, and git's own messages. */
  function mergeTrees(repo, base, ours, theirs, labelOurs, labelTheirs) {
    var result = {}, conflicts = [], wtText = {}, msgs = [];
    union(union(base, ours), theirs).forEach(function (p) {
      var b = base[p], o = ours[p], t = theirs[p];
      if (o === t) { if (o) result[p] = o; return; }
      if (b === o) { if (t) result[p] = t; return; }
      if (b === t) { if (o) result[p] = o; return; }
      if (o && t) {
        msgs.push("Auto-merging " + p);
        var m = mergeText(b ? getBlob(repo, b) : "", getBlob(repo, o), getBlob(repo, t), labelOurs, labelTheirs);
        if (!m.conflict) { result[p] = putBlob(repo, m.text); return; }
        msgs.push("CONFLICT (" + (b ? "content" : "add/add") + "): Merge conflict in " + p);
        conflicts.push({ path: p, kind: b ? "both modified" : "both added" });
        result[p] = o;
        wtText[p] = m.text;
        return;
      }
      /* One side deleted what the other changed. Git keeps the changed
         version in the working tree and asks you to decide. */
      var keep = o || t;
      msgs.push("CONFLICT (modify/delete): " + p + " deleted in " + (o ? labelTheirs : "HEAD") +
        " and modified in " + (o ? "HEAD" : labelTheirs) + ".  Version " + (o ? "HEAD" : labelTheirs) +
        " of " + p + " left in tree.");
      conflicts.push({ path: p, kind: o ? "deleted by them" : "deleted by us" });
      if (o) result[p] = o;
      wtText[p] = getBlob(repo, keep);
    });
    return { map: result, conflicts: conflicts, wtText: wtText, msgs: msgs };
  }

  /* ---------- revisions ----------
     HEAD, @, <branch>, <tag>, origin/main, a 4+ char sha prefix, and
     <ref>@{n} from the reflog — each followed by any run of ~n / ^n. */
  function refFor(repo, name) {
    if (!name) return null;
    if (name.indexOf("refs/") === 0 && repo.refs[name]) return name;
    var tries = ["refs/heads/" + name, "refs/tags/" + name, "refs/remotes/" + name];
    for (var i = 0; i < tries.length; i++) if (repo.refs[tries[i]]) return tries[i];
    return null;
  }
  function baseRev(repo, base) {
    if (base === "@" || base === "HEAD") return headSha(repo);
    var m = base.match(/^(.*)@\{(\d+)\}$/);
    if (m) {
      var name = m[1] === "" || m[1] === "HEAD" || m[1] === "@" ? "HEAD" : refFor(repo, m[1]);
      var log = name && repo.reflog[name];
      var n = parseInt(m[2], 10);
      if (!log || n >= log.length) return null;
      return log[log.length - 1 - n].to;
    }
    var ref = refFor(repo, base);
    if (ref) return repo.refs[ref];
    if (/^[0-9a-f]{4,40}$/.test(base)) {
      var hits = keys(repo.objects).filter(function (s) { return s.indexOf(base) === 0 && repo.objects[s].type === "commit"; });
      if (hits.length === 1) return hits[0];
    }
    return null;
  }
  function resolveRev(repo, spec) {
    var m = String(spec || "").match(/^([^~^]+)((?:[~^]\d*)*)$/);
    if (!m) return null;
    var sha = baseRev(repo, m[1]);
    var steps = m[2].match(/[~^]\d*/g) || [];
    for (var i = 0; i < steps.length && sha; i++) {
      var kind = steps[i].charAt(0), num = steps[i].length > 1 ? parseInt(steps[i].slice(1), 10) : 1;
      var c = commitObj(repo, sha);
      if (!c) return null;
      if (kind === "~") {
        for (var k = 0; k < num && sha; k++) { var cc = commitObj(repo, sha); sha = cc && cc.parents[0] || null; }
      } else sha = num === 0 ? sha : (c.parents[num - 1] || null);
    }
    return sha || null;
  }

  /* ---------- history walks ---------- */
  function ancestors(repo, sha) {
    var seen = {}, stack = sha ? [sha] : [];
    while (stack.length) {
      var s = stack.pop();
      if (seen[s]) continue;
      seen[s] = 1;
      var c = commitObj(repo, s);
      if (c) c.parents.forEach(function (p) { stack.push(p); });
    }
    return seen;
  }
  function isAncestor(repo, a, b) { return !!(a && b && ancestors(repo, b)[a]); }
  /* Everything reachable from `starts` but not from `excludes`, newest
     first — the set and order `git log` prints. */
  function walkLog(repo, starts, excludes) {
    var ex = {};
    (excludes || []).forEach(function (s) { keys(ancestors(repo, s)).forEach(function (k) { ex[k] = 1; }); });
    var all = {};
    (starts || []).forEach(function (s) { keys(ancestors(repo, s)).forEach(function (k) { if (!ex[k]) all[k] = 1; }); });
    return keys(all).sort(function (x, y) { return commitObj(repo, y).ctime - commitObj(repo, x).ctime; });
  }
  function mergeBase(repo, a, b) {
    var A = ancestors(repo, a), B = ancestors(repo, b);
    var common = keys(A).filter(function (s) { return B[s]; });
    var best = common.filter(function (s) {
      return !common.some(function (o) { return o !== s && isAncestor(repo, s, o); });
    });
    best.sort(function (x, y) { return commitObj(repo, y).ctime - commitObj(repo, x).ctime; });
    return best[0] || null;
  }
  /* ============================================================
     THE COMMAND LAYER
     Every command returns { out, err, code } like shell.js's own,
     and prints what real git prints — reading git's output is half
     the skill, so the messages are the curriculum too.
     ============================================================ */
  function ok(out) { return { out: out || "", err: "", code: 0 }; }
  function bad(err, code, out) { return { out: out || "", err: err, code: code == null ? 1 : code }; }
  function fatal(msg) { return bad("fatal: " + msg + "\n", 128); }

  /* Flags: `--x=v`, `--x v` and `-x v` for valued flags, bundled short
     flags (`-am "msg"`), `-3` for log counts, and `--` before paths. */
  function parse(args, valued, allowed) {
    var o = { _: [], f: {}, v: {}, paths: null, badFlag: null };
    valued = valued || {};
    function take(name, i, rest) {
      if (valued[name]) {
        var val = rest !== "" && rest != null ? rest : args[i + 1];
        (o.v[name] = o.v[name] || []).push(val == null ? "" : val);
        return rest !== "" && rest != null ? 0 : 1;
      }
      o.f[name] = true;
      return 0;
    }
    for (var i = 0; i < args.length; i++) {
      var a = args[i];
      if (o.paths) { o.paths.push(a); continue; }
      if (a === "--") { o.paths = []; continue; }
      var m = a.match(/^(--[^=]+)=(.*)$/);
      if (m) { (o.v[m[1]] = o.v[m[1]] || []).push(m[2]); if (allowed && allowed.indexOf(m[1]) === -1) o.badFlag = m[1]; continue; }
      if (/^-\d+$/.test(a)) { o.v["-n"] = [a.slice(1)]; continue; }
      if (a.indexOf("--") === 0) {
        if (allowed && allowed.indexOf(a) === -1) o.badFlag = a;
        i += take(a, i, null);
        continue;
      }
      if (a.charAt(0) === "-" && a.length > 1) {
        for (var k = 1; k < a.length; k++) {
          var fl = "-" + a.charAt(k);
          if (allowed && allowed.indexOf(fl) === -1) o.badFlag = fl;
          if (valued[fl]) { i += take(fl, i, a.slice(k + 1)); break; }
          o.f[fl] = true;
        }
        continue;
      }
      o._.push(a);
    }
    return o;
  }
  function has(o) { for (var i = 1; i < arguments.length; i++) if (o.f[arguments[i]]) return true; return false; }
  function val(o, name, alt) { var v = o.v[name] || (alt && o.v[alt]); return v ? v[v.length - 1] : null; }
  function unknown(cmd, flag) { return bad("error: unknown option `" + flag.replace(/^-+/, "") + "'\nusage: git " + cmd + " ...\n", 129); }

  function authorOf(h) {
    var u = h.repo.config.user || {}, g = (h.fs.gitGlobal || {}).user || {};
    return (u.name || g.name || "You") + " <" + (u.email || g.email || "you@example.com") + ">";
  }
  function newCommit(h, message, parents, keep) {
    var t = tick(h.fs);
    return putCommit(h.repo, {
      tree: putTree(h.repo, h.repo.index), parents: parents,
      author: keep ? keep.author : authorOf(h), atime: keep ? keep.atime : t, ctime: t, message: message
    });
  }
  function headMap(repo) { return commitMap(repo, headSha(repo)); }
  function oneline(repo, sha) { var c = commitObj(repo, sha); return short(sha) + " " + subjectOf(c && c.message); }

  /* ---------- moving the working tree between commits ----------
     The rule that makes switching branches safe: a path whose content is
     the same in both commits is left completely alone (local edits ride
     along); a path that differs is replaced — unless it has local changes,
     in which case git refuses rather than destroy them. */
  function blocked(h, from, to, only) {
    var repo = h.repo, dirty = [], clobber = [];
    union(from, to).forEach(function (p) {
      if (from[p] === to[p]) return;
      if (only && only.indexOf(p) === -1) return;
      var w = wtRead(h, p), idx = repo.index[p];
      if (from[p]) {
        if (idx !== from[p] || w == null || blobSha(w) !== from[p]) dirty.push(p);
      } else if (idx) {
        dirty.push(p);
      } else if (w != null && blobSha(w) !== to[p]) {
        clobber.push(p);
      }
    });
    return { dirty: dirty, clobber: clobber };
  }
  function blockedMsg(b, verb, advice) {
    var s = "";
    if (b.dirty.length) s += "error: Your local changes to the following files would be overwritten by " + verb + ":\n" +
      b.dirty.map(function (p) { return "\t" + p + "\n"; }).join("") + "Please commit your changes or stash them before you " + advice + ".\n";
    if (b.clobber.length) s += "error: The following untracked working tree files would be overwritten by " + verb + ":\n" +
      b.clobber.map(function (p) { return "\t" + p + "\n"; }).join("") + "Please move or remove them before you " + advice + ".\n";
    return s + "Aborting\n";
  }
  function switchTree(h, from, to) {
    union(from, to).forEach(function (p) {
      if (from[p] === to[p]) return;
      if (to[p]) { h.repo.index[p] = to[p]; wtWrite(h, p, getBlob(h.repo, to[p])); }
      else { delete h.repo.index[p]; wtRemove(h, p); }
    });
  }
  /* reset --hard: index and every TRACKED file become `to`; untracked
     files are never touched. */
  function hardTree(h, to) {
    var repo = h.repo, tracked = union(union(repo.index, headMap(repo)), to);
    tracked.forEach(function (p) {
      if (to[p]) wtWrite(h, p, getBlob(repo, to[p]));
      else if (wtRead(h, p) != null) wtRemove(h, p);
    });
    repo.index = copy(to);
    repo.conflicts = [];
  }

  /* ---------- upstream tracking ---------- */
  function upstreamOf(repo, b) {
    var c = b && repo.config.branch[b];
    if (!c || !c.remote) return null;
    var rb = c.merge.replace(/^refs\/heads\//, "");
    return { remote: c.remote, branch: rb, ref: "refs/remotes/" + c.remote + "/" + rb, name: c.remote + "/" + rb };
  }
  function aheadBehind(repo, a, b) {
    return { ahead: walkLog(repo, [a], [b]).length, behind: walkLog(repo, [b], [a]).length };
  }
  function trackingLine(repo, b) {
    var up = upstreamOf(repo, b);
    if (!up) return "";
    var mine = repo.refs["refs/heads/" + b], theirs = repo.refs[up.ref];
    if (!theirs) return "Your branch is based on '" + up.name + "', but the upstream is gone.\n  (use \"git branch --unset-upstream\" to fixup)\n";
    var ab = aheadBehind(repo, mine, theirs);
    if (!ab.ahead && !ab.behind) return "Your branch is up to date with '" + up.name + "'.\n";
    if (!ab.behind) return "Your branch is ahead of '" + up.name + "' by " + plural(ab.ahead, "commit", "commits") + ".\n  (use \"git push\" to publish your local commits)\n";
    if (!ab.ahead) return "Your branch is behind '" + up.name + "' by " + plural(ab.behind, "commit", "commits") + ", and can be fast-forwarded.\n  (use \"git pull\" to update your local branch)\n";
    return "Your branch and '" + up.name + "' have diverged,\nand have " + ab.ahead + " and " + ab.behind +
      " different commits each, respectively.\n  (use \"git pull\" if you want to integrate the remote branch with yours)\n";
  }

  /* ---------- the commands ---------- */
  var CMD = {};

  CMD.init = function (ctx, args) {
    var o = parse(args, { "-b": 1, "--initial-branch": 1 }, ["--bare", "-b", "--initial-branch", "-q", "--quiet"]);
    if (o.badFlag) return unknown("init", o.badFlag);
    var dirArg = o._[0] || ".";
    var abs = SH.resolve(ctx.cwd, ctx.home, dirArg);
    var n = nodeAt(ctx.fs, abs);
    if (!n) {
      var parts = abs.split("/").filter(Boolean), node = ctx.fs;
      parts.forEach(function (p) { if (!node.d[p]) node.d[p] = SH.dir(); node = node.d[p]; });
      n = node;
    }
    if (!n.d) return fatal("cannot mkdir " + dirArg + ": File exists");
    var branch = val(o, "-b", "--initial-branch") || "main", bare = has(o, "--bare");
    var existing = bare ? n.repo : (n.d[".git"] && n.d[".git"].repo);
    if (existing) return ok("Reinitialized existing Git repository in " + (bare ? abs : (abs === "/" ? "" : abs) + "/.git") + "/\n");
    if (bare) n.repo = newRepo(true, branch);
    else { n.d[".git"] = SH.dir(); n.d[".git"].repo = newRepo(false, branch); }
    return ok("Initialized empty Git repository in " + (bare ? abs : (abs === "/" ? "" : abs) + "/.git") + "/\n");
  };

  function inProgressLines(h) {
    var repo = h.repo, s = "";
    if (repo.merge) {
      if (repo.conflicts.length) s += "You have unmerged paths.\n  (fix conflicts and run \"git commit\")\n  (use \"git merge --abort\" to abort the merge)\n\n";
      else s += "All conflicts fixed but you are still merging.\n  (use \"git commit\" to conclude merge)\n\n";
    } else if (repo.seq) {
      var q = repo.seq;
      if (q.op === "rebase") {
        s += "rebase in progress; onto " + short(q.onto) + "\n";
        s += "You are currently rebasing branch '" + q.branch + "' on '" + short(q.onto) + "'.\n";
        s += repo.conflicts.length ? "  (fix conflicts and then run \"git rebase --continue\")\n  (use \"git rebase --skip\" to skip this patch)\n  (use \"git rebase --abort\" to check out the original branch)\n\n"
          : "  (all conflicts fixed: run \"git rebase --continue\")\n\n";
      } else {
        var verb = q.op === "revert" ? "reverting" : "cherry-picking";
        s += "You are currently " + verb + " commit " + short(q.cur) + ".\n";
        s += repo.conflicts.length ? "  (fix conflicts and run \"git " + q.op + " --continue\")\n  (use \"git " + q.op + " --skip\" to skip this patch)\n  (use \"git " + q.op + " --abort\" to cancel the " + q.op + " operation)\n\n"
          : "  (all conflicts fixed: run \"git " + q.op + " --continue\")\n  (use \"git " + q.op + " --skip\" to skip this patch)\n  (use \"git " + q.op + " --abort\" to cancel the " + q.op + " operation)\n\n";
      }
    }
    return s;
  }
  function longStatus(h) {
    var repo = h.repo, st = status(h), s = "";
    var b = branchName(repo), unborn = !headSha(repo);
    if (repo.seq && repo.seq.op === "rebase") s += "interactive rebase in progress; onto " + short(repo.seq.onto) + "\n";
    else if (b) s += "On branch " + b + "\n";
    else s += "HEAD detached at " + short(headSha(repo)) + "\n";
    if (b) s += trackingLine(repo, b);
    s += inProgressLines(h);
    if (unborn) s += "\nNo commits yet\n\n";
    if (st.staged.length) {
      s += "Changes to be committed:\n  (use \"git " + (unborn ? "rm --cached" : "restore --staged") + " <file>...\" to unstage)\n";
      st.staged.forEach(function (x) { s += "\t" + (x.kind + ":").padEnd(12) + x.path + "\n"; });
      s += "\n";
    }
    if (st.conflicts.length) {
      s += "Unmerged paths:\n  (use \"git add <file>...\" to mark resolution)\n";
      st.conflicts.forEach(function (c) { s += "\t" + (c.kind + ":").padEnd(17) + c.path + "\n"; });
      s += "\n";
    }
    if (st.unstaged.length) {
      var anyDel = st.unstaged.some(function (x) { return x.kind === "deleted"; });
      s += "Changes not staged for commit:\n  (use \"git " + (anyDel ? "add/rm" : "add") + " <file>...\" to update what will be committed)\n" +
        "  (use \"git restore <file>...\" to discard changes in working directory)\n";
      st.unstaged.forEach(function (x) { s += "\t" + (x.kind + ":").padEnd(12) + x.path + "\n"; });
      s += "\n";
    }
    var ut = collapseUntracked(repo, st.untracked);
    if (ut.length) {
      s += "Untracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n";
      ut.forEach(function (p) { s += "\t" + p + "\n"; });
      s += "\n";
    }
    if (!st.staged.length && !st.conflicts.length) {
      if (st.unstaged.length) s += "no changes added to commit (use \"git add\" and/or \"git commit -a\")\n";
      else if (ut.length) s += "nothing added to commit but untracked files present (use \"git add\" to track)\n";
      else if (unborn) s += "nothing to commit (create/copy files and use \"git add\" to track)\n";
      else s += "nothing to commit, working tree clean\n";
    }
    return s;
  }
  function shortStatus(h, withBranch) {
    var repo = h.repo, st = status(h), rows = {}, s = "";
    st.staged.forEach(function (x) { rows[x.path] = [{ "new file": "A", deleted: "D", modified: "M" }[x.kind], " "]; });
    st.unstaged.forEach(function (x) { (rows[x.path] = rows[x.path] || [" ", " "])[1] = x.kind === "deleted" ? "D" : "M"; });
    st.conflicts.forEach(function (c) { rows[c.path] = ({ "both modified": "UU", "both added": "AA", "deleted by them": "UD", "deleted by us": "DU" }[c.kind]).split(""); });
    if (withBranch) {
      var b = branchName(repo), up = upstreamOf(repo, b);
      s += "## " + (b ? (headSha(repo) ? b : "No commits yet on " + b) : "HEAD (no branch)");
      if (up && repo.refs[up.ref]) {
        var ab = aheadBehind(repo, repo.refs["refs/heads/" + b], repo.refs[up.ref]);
        s += "..." + up.name;
        var parts = [];
        if (ab.ahead) parts.push("ahead " + ab.ahead);
        if (ab.behind) parts.push("behind " + ab.behind);
        if (parts.length) s += " [" + parts.join(", ") + "]";
      }
      s += "\n";
    }
    keys(rows).sort().forEach(function (p) { s += rows[p].join("") + " " + p + "\n"; });
    collapseUntracked(repo, st.untracked).forEach(function (p) { s += "?? " + p + "\n"; });
    return s;
  }
  CMD.status = function (ctx, args, h) {
    var o = parse(args, {}, ["-s", "--short", "-b", "--branch", "--long"]);
    if (o.badFlag) return unknown("status", o.badFlag);
    if (has(o, "-s", "--short")) return ok(shortStatus(h, has(o, "-b", "--branch")));
    return ok(longStatus(h));
  };

  /* Expand pathspecs against a list of known paths: an exact path, a
     directory prefix, or "." for everything. */
  function expand(specs, known) {
    var out = [], missing = [];
    specs.forEach(function (sp) {
      var clean = sp.replace(/^\.\//, "").replace(/\/$/, "");
      var hits = (clean === "." || clean === "" || clean === "*") ? known.slice()
        : known.filter(function (p) { return p === clean || p.indexOf(clean + "/") === 0; });
      if (!hits.length) missing.push(sp);
      hits.forEach(function (p) { if (out.indexOf(p) === -1) out.push(p); });
    });
    return { paths: out.sort(), missing: missing };
  }

  CMD.add = function (ctx, args, h) {
    var o = parse(args, {}, ["-A", "--all", "-f", "--force", "-u", "--update", "-p", "--patch", "-v", "-n", "--dry-run"]);
    if (o.badFlag) return unknown("add", o.badFlag);
    if (has(o, "-p", "--patch")) return bad("error: `git add -p` asks you about each change interactively, which this terminal can't do — stage whole files instead.\n");
    var repo = h.repo, specs = o._.concat(o.paths || []);
    if (has(o, "-A", "--all") && !specs.length) specs = ["."];
    if (has(o, "-u", "--update") && !specs.length) specs = ["."];
    if (!specs.length) return bad("Nothing specified, nothing added.\nhint: Maybe you wanted to say 'git add .'?\nhint: Disable this message with \"git config advice.addEmptyPathspec false\"\n", 0);
    var wtPaths = wtList(h), tracked = keys(repo.index), force = has(o, "-f", "--force");
    var candidates = union(arrToMap(wtPaths), arrToMap(tracked.concat(conflictPaths(repo))));
    var e = expand(specs, candidates);
    if (e.missing.length) return fatal("pathspec '" + e.missing[0] + "' did not match any files");
    var ignoredExplicit = [], changed = 0;
    e.paths.forEach(function (p) {
      var inWt = wtPaths.indexOf(p) !== -1, isTracked = repo.index[p] != null || conflictPaths(repo).indexOf(p) !== -1;
      if (has(o, "-u", "--update") && !isTracked) return;
      if (inWt && !isTracked && !force && ignoredBy(h, p)) {
        /* Ignored files are skipped silently by `git add .` but refused
           when named outright — that asymmetry is real and worth seeing. */
        if (specs.some(function (sp) { return sp.replace(/^\.\//, "") === p; })) ignoredExplicit.push(p);
        return;
      }
      if (inWt) repo.index[p] = putBlob(repo, wtRead(h, p));
      else delete repo.index[p];
      repo.conflicts = repo.conflicts.filter(function (c) { return c.path !== p; });
      changed++;
    });
    if (ignoredExplicit.length) {
      return bad("The following paths are ignored by one of your .gitignore files:\n" + ignoredExplicit.join("\n") +
        "\nhint: Use -f if you really want to add them.\nhint: Disable this message with \"git config advice.addIgnoredFile false\"\n", 1);
    }
    return ok("");
  };
  function arrToMap(a) { var m = {}; a.forEach(function (k) { m[k] = 1; }); return m; }

  CMD.rm = function (ctx, args, h) {
    var o = parse(args, {}, ["--cached", "-r", "-f", "--force", "-q", "--quiet"]);
    if (o.badFlag) return unknown("rm", o.badFlag);
    var repo = h.repo, specs = o._.concat(o.paths || []);
    if (!specs.length) return bad("usage: git rm [--cached] [-r] <file>...\n", 129);
    var known = union(repo.index, arrToMap(conflictPaths(repo)));
    for (var i = 0; i < specs.length; i++) {
      var clean = specs[i].replace(/\/$/, "");
      if (!has(o, "-r") && known.indexOf(clean) === -1 && known.some(function (p) { return p.indexOf(clean + "/") === 0; }))
        return fatal("not removing '" + clean + "' recursively without -r");
    }
    var e = expand(specs, known);
    if (e.missing.length) return fatal("pathspec '" + e.missing[0] + "' did not match any files");
    var out = "";
    e.paths.forEach(function (p) {
      delete repo.index[p];
      repo.conflicts = repo.conflicts.filter(function (c) { return c.path !== p; });
      if (!has(o, "--cached") && wtRead(h, p) != null) wtRemove(h, p);
      out += "rm '" + p + "'\n";
    });
    return ok(has(o, "-q", "--quiet") ? "" : out);
  };

  var NO_EDITOR = "error: there is no text editor in this terminal, so git can't open one for your message.\nPass it on the command line instead:  git commit -m \"Your message\"\n";

  CMD.commit = function (ctx, args, h) {
    var o = parse(args, { "-m": 1, "--message": 1 }, ["-m", "--message", "-a", "--all", "--amend", "--no-edit", "--allow-empty", "-q", "--quiet", "-v"]);
    if (o.badFlag) return unknown("commit", o.badFlag);
    var repo = h.repo, msgs = (o.v["-m"] || []).concat(o.v["--message"] || []);
    var amend = has(o, "--amend"), head = headSha(repo), old = amend ? commitObj(repo, head) : null;
    if (repo.conflicts.length) {
      return bad("error: Committing is not possible because you have unmerged files.\nhint: Fix them up in the work tree, and then use 'git add/rm <file>'\nhint: as appropriate to mark resolution and make a commit.\nfatal: Exiting because of an unresolved conflict.\n", 128);
    }
    if (amend && !head) return fatal("You have nothing to amend.");
    if (has(o, "-a", "--all")) {
      keys(repo.index).forEach(function (p) {
        var w = wtRead(h, p);
        if (w == null) delete repo.index[p]; else repo.index[p] = putBlob(repo, w);
      });
    }
    var message = msgs.length ? msgs.join("\n\n") : null;
    if (!message && amend && has(o, "--no-edit")) message = old.message;
    if (!message && repo.merge) message = repo.merge.msg;
    if (!message && repo.seq && repo.seq.msg) message = repo.seq.msg;
    if (!message) return bad(NO_EDITOR, 1);
    var parents = amend ? old.parents.slice() : (head ? [head] : []);
    if (repo.merge && !amend) parents.push(repo.merge.head);
    var parentTree = amend ? (old.parents[0] ? commitMap(repo, old.parents[0]) : {}) : headMap(repo);
    if (!amend && !repo.merge && !has(o, "--allow-empty") && putTree(repo, repo.index) === putTree(repo, headMap(repo))) {
      return { out: longStatus(h), err: "", code: 1 };
    }
    var sha = newCommit(h, message, parents, amend ? old : null);
    var kind = amend ? "commit (amend)" : repo.merge ? "commit (merge)" : !head ? "commit (initial)" : "commit";
    moveHead(repo, sha, kind + ": " + subjectOf(message));
    var wasMerge = !!repo.merge;
    repo.merge = null;
    if (repo.seq) repo.seq.committed = true;
    if (has(o, "-q", "--quiet")) return ok("");
    var b = branchName(repo) || "detached HEAD";
    var out = "[" + b + (head || amend ? "" : " (root-commit)") + " " + short(sha) + "] " + subjectOf(message) + "\n";
    if (amend) out += " Date: " + fmtDate(old.atime) + "\n";
    if (!wasMerge) {
      var A = contents(repo, parentTree), B = contents(repo, repo.index), t = totals(A, B);
      out += shortstat(t.files, t.ins, t.del) + modeLines(A, B);
    }
    return ok(out);
  };
  /* ---------- reading history ---------- */
  function decorations(repo) {
    var d = {}, hs = headSha(repo), cur = branchName(repo);
    function add(sha, label, front) { if (!sha) return; d[sha] = d[sha] || []; if (front) d[sha].unshift(label); else d[sha].push(label); }
    keys(repo.refs).filter(function (r) { return r.indexOf("refs/tags/") === 0; }).sort()
      .forEach(function (r) { add(repo.refs[r], "tag: " + r.slice(10)); });
    keys(repo.refs).filter(function (r) { return r.indexOf("refs/remotes/") === 0; }).sort()
      .forEach(function (r) { add(repo.refs[r], r.slice(13)); });
    localBranches(repo).forEach(function (b) { if (b !== cur) add(repo.refs["refs/heads/" + b], b); });
    if (cur && hs) add(hs, "HEAD -> " + cur, true);
    else if (hs) add(hs, "HEAD", true);
    return d;
  }
  function decoStr(deco, sha) { return deco[sha] ? " (" + deco[sha].join(", ") + ")" : ""; }
  function fullEntry(repo, sha, deco) {
    var c = commitObj(repo, sha), s = "commit " + sha + decoStr(deco, sha) + "\n";
    if (c.parents.length > 1) s += "Merge: " + c.parents.map(short).join(" ") + "\n";
    s += "Author: " + c.author + "\nDate:   " + fmtDate(c.atime) + "\n\n";
    s += c.message.split("\n").map(function (l) { return l ? "    " + l : ""; }).join("\n") + "\n";
    return s;
  }
  function parentMap(repo, sha) { var c = commitObj(repo, sha); return c && c.parents[0] ? commitMap(repo, c.parents[0]) : {}; }
  function ambiguous(a) {
    return fatal("ambiguous argument '" + a + "': unknown revision or path not in the working tree.\nUse '--' to separate paths from revisions, like this:\n'git <command> [<revision>...] -- [<file>...]'");
  }

  CMD.log = function (ctx, args, h) {
    var o = parse(args, { "-n": 1, "--max-count": 1 }, ["--oneline", "-n", "--max-count", "--all", "--decorate", "--no-decorate",
      "--graph", "--reverse", "-p", "--patch", "--stat", "--first-parent"]);
    if (o.badFlag) return unknown("log", o.badFlag);
    if (has(o, "--graph")) return bad("error: --graph draws history as ASCII art too wide for this terminal — use --oneline (add --all to see every branch).\n", 1);
    var repo = h.repo, starts = [], ex = [];
    for (var i = 0; i < o._.length; i++) {
      var a = o._[i];
      if (a.indexOf("...") !== -1) return bad("error: `A...B` (three dots) is not supported here — use `A..B`.\n", 1);
      if (a.indexOf("..") !== -1) {
        var pr = a.split(".."), l = resolveRev(repo, pr[0] || "HEAD"), r = resolveRev(repo, pr[1] || "HEAD");
        if (!l || !r) return ambiguous(a);
        ex.push(l); starts.push(r);
      } else if (a.charAt(0) === "^") {
        var x = resolveRev(repo, a.slice(1)); if (!x) return ambiguous(a); ex.push(x);
      } else {
        var s = resolveRev(repo, a);
        if (!s) { if (wtRead(h, a) != null || repo.index[a]) { o.paths = (o.paths || []).concat([a]); continue; } return ambiguous(a); }
        starts.push(s);
      }
    }
    if (has(o, "--all")) keys(repo.refs).forEach(function (r) { starts.push(repo.refs[r]); });
    if (!starts.length) {
      if (!headSha(repo)) return fatal("your current branch '" + branchName(repo) + "' does not have any commits yet");
      starts.push(headSha(repo));
    }
    var list;
    if (has(o, "--first-parent")) {
      list = []; var cur = starts[0], exa = {};
      ex.forEach(function (e) { keys(ancestors(repo, e)).forEach(function (k) { exa[k] = 1; }); });
      while (cur && !exa[cur]) { list.push(cur); cur = commitObj(repo, cur).parents[0]; }
    } else list = walkLog(repo, starts, ex);
    if (o.paths && o.paths.length) {
      list = list.filter(function (sha) {
        var A = parentMap(repo, sha), B = commitMap(repo, sha);
        return o.paths.some(function (p) { return A[p] !== B[p]; });
      });
    }
    var n = val(o, "-n", "--max-count");
    if (n != null) list = list.slice(0, parseInt(n, 10) || 0);
    if (has(o, "--reverse")) list.reverse();
    var deco = has(o, "--no-decorate") ? {} : decorations(repo);
    var patch = has(o, "-p", "--patch"), stat = has(o, "--stat");
    return ok(list.map(function (sha) {
      var body = has(o, "--oneline") ? short(sha) + decoStr(deco, sha) + " " + subjectOf(commitObj(repo, sha).message) + "\n" : fullEntry(repo, sha, deco);
      if (patch || stat) {
        var A = contents(repo, parentMap(repo, sha)), B = contents(repo, commitMap(repo, sha));
        body += (has(o, "--oneline") ? "" : "\n") + (stat ? diffstat(A, B) : diffMaps(A, B));
      }
      return body;
    }).join(has(o, "--oneline") ? "" : "\n"));
  };

  CMD.show = function (ctx, args, h) {
    var o = parse(args, {}, ["--stat", "--oneline", "--name-only", "--no-patch", "-s"]);
    if (o.badFlag) return unknown("show", o.badFlag);
    var repo = h.repo, spec = o._[0] || "HEAD";
    var colon = spec.indexOf(":");
    if (colon !== -1) {
      var revPart = spec.slice(0, colon), path = spec.slice(colon + 1).replace(/^\.\//, "");
      var map = revPart === "" ? repo.index : commitMap(repo, resolveRev(repo, revPart));
      if (revPart && !resolveRev(repo, revPart)) return ambiguous(revPart);
      if (!map[path]) return fatal("path '" + path + "' does not exist in '" + (revPart || "the index") + "'");
      return ok(getBlob(repo, map[path]));
    }
    var sha = resolveRev(repo, spec);
    if (!sha) return ambiguous(spec);
    var deco = decorations(repo), c = commitObj(repo, sha), out = "";
    var tag = repo.tagMsg && repo.tagMsg[spec];
    if (tag) out += "tag " + spec + "\nTagger: " + tag.tagger + "\nDate:   " + fmtDate(tag.time) + "\n\n" + tag.msg + "\n\n";
    out += has(o, "--oneline") ? short(sha) + decoStr(deco, sha) + " " + subjectOf(c.message) + "\n" : fullEntry(repo, sha, deco);
    if (c.parents.length > 1 || has(o, "--no-patch", "-s")) return ok(out);
    var A = contents(repo, parentMap(repo, sha)), B = contents(repo, commitMap(repo, sha));
    if (has(o, "--stat")) return ok(out + "\n" + diffstat(A, B));
    if (has(o, "--name-only")) return ok(out + "\n" + changedPaths(A, B).map(function (p) { return p + "\n"; }).join(""));
    return ok(out + (has(o, "--oneline") ? "" : "\n") + diffMaps(A, B));
  };

  CMD.diff = function (ctx, args, h) {
    var o = parse(args, {}, ["--staged", "--cached", "--stat", "--name-only", "--name-status"]);
    if (o.badFlag) return unknown("diff", o.badFlag);
    var repo = h.repo, revs = [], paths = (o.paths || []).slice();
    for (var i = 0; i < o._.length; i++) {
      var a = o._[i];
      if (a.indexOf("..") !== -1 && a.indexOf("...") === -1) {
        var pr = a.split("..");
        if (!resolveRev(repo, pr[0] || "HEAD") || !resolveRev(repo, pr[1] || "HEAD")) return ambiguous(a);
        revs.push(pr[0] || "HEAD", pr[1] || "HEAD");
      } else if (!paths.length && resolveRev(repo, a)) revs.push(a);
      else if (wtRead(h, a) != null || repo.index[a] || keys(repo.index).some(function (p) { return p.indexOf(a.replace(/\/$/, "") + "/") === 0; })) paths.push(a);
      else return ambiguous(a);
    }
    var A, B, staged = has(o, "--staged", "--cached");
    if (revs.length >= 2) { A = contents(repo, commitMap(repo, resolveRev(repo, revs[0]))); B = contents(repo, commitMap(repo, resolveRev(repo, revs[1]))); }
    else if (staged) { A = contents(repo, revs.length ? commitMap(repo, resolveRev(repo, revs[0])) : headMap(repo)); B = contents(repo, repo.index); }
    else {
      A = revs.length ? contents(repo, commitMap(repo, resolveRev(repo, revs[0]))) : contents(repo, repo.index);
      B = {};
      union(A, repo.index).forEach(function (p) { var w = wtRead(h, p); if (w != null) B[p] = w; });
    }
    if (paths.length) {
      var keep = expand(paths, union(A, B)).paths, fa = {}, fb = {};
      keep.forEach(function (p) { if (A[p] != null) fa[p] = A[p]; if (B[p] != null) fb[p] = B[p]; });
      A = fa; B = fb;
    }
    if (has(o, "--stat")) return ok(diffstat(A, B));
    if (has(o, "--name-only")) return ok(changedPaths(A, B).map(function (p) { return p + "\n"; }).join(""));
    if (has(o, "--name-status")) return ok(changedPaths(A, B).map(function (p) { return (A[p] == null ? "A" : B[p] == null ? "D" : "M") + "\t" + p + "\n"; }).join(""));
    return ok(diffMaps(A, B));
  };

  /* ---------- branches ---------- */
  function validName(n) {
    return !!n && /^[^\s~^:?*\[\\]+$/.test(n) && n.charAt(0) !== "-" && n.indexOf("..") === -1 &&
      !/\/$|\.lock$|^\.|\/\./.test(n) && n !== "HEAD" && n.indexOf("@{") === -1;
  }
  function remoteTracking(repo, spec) {
    var r = refFor(repo, spec);
    return r && r.indexOf("refs/remotes/") === 0 ? r : null;
  }
  function setUpstream(repo, b, remoteRef) {
    var rest = remoteRef.slice(13), slash = rest.indexOf("/");
    repo.config.branch[b] = { remote: rest.slice(0, slash), merge: "refs/heads/" + rest.slice(slash + 1) };
    return "branch '" + b + "' set up to track '" + rest + "'.\n";
  }
  function createBranch(repo, name, start, force) {
    if (!validName(name)) return { err: fatal("'" + name + "' is not a valid branch name") };
    if (repo.refs["refs/heads/" + name] && !force) return { err: fatal("a branch named '" + name + "' already exists") };
    var sha = resolveRev(repo, start);
    if (!sha) return { err: fatal("not a valid object name: '" + start + "'") };
    setRef(repo, "refs/heads/" + name, sha, "branch: Created from " + start);
    var rt = remoteTracking(repo, start);
    return { sha: sha, note: rt ? setUpstream(repo, name, rt) : "" };
  }

  CMD.branch = function (ctx, args, h) {
    var o = parse(args, { "-u": 1, "--set-upstream-to": 1 }, ["-d", "-D", "--delete", "-m", "-M", "--move", "-a", "--all",
      "-r", "--remotes", "-v", "--verbose", "-u", "--set-upstream-to", "--unset-upstream", "-f", "--force", "--list", "--show-current"]);
    if (o.badFlag) return unknown("branch", o.badFlag);
    var repo = h.repo, cur = branchName(repo), hs = headSha(repo);
    if (has(o, "--show-current")) return ok(cur ? cur + "\n" : "");

    if (has(o, "-d", "-D", "--delete")) {
      if (!o._.length) return fatal("branch name required");
      var out = "", err = "", code = 0;
      o._.forEach(function (n) {
        var ref = "refs/heads/" + n, sha = repo.refs[ref];
        if (!sha) { err += "error: branch '" + n + "' not found.\n"; code = 1; return; }
        if (n === cur) { err += "error: cannot delete branch '" + n + "' used by worktree at '" + h.root + "'\n"; code = 1; return; }
        if (!has(o, "-D", "--force") && !(has(o, "-d") && has(o, "-f"))) {
          var up = upstreamOf(repo, n), target = up && repo.refs[up.ref] ? repo.refs[up.ref] : hs;
          if (!isAncestor(repo, sha, target)) {
            err += "error: the branch '" + n + "' is not fully merged\nhint: If you are sure you want to delete it, run 'git branch -D " + n +
              "'\nhint: Disable this message with \"git config advice.forceDeleteBranch false\"\n";
            code = 1; return;
          }
        }
        delete repo.refs[ref]; delete repo.reflog[ref]; delete repo.config.branch[n];
        out += "Deleted branch " + n + " (was " + short(sha) + ").\n";
      });
      return { out: out, err: err, code: code };
    }

    if (has(o, "-m", "-M", "--move")) {
      var from = o._.length > 1 ? o._[0] : cur, to = o._.length > 1 ? o._[1] : o._[0];
      if (!to) return fatal("branch name required");
      if (!from) return fatal("cannot rename the current branch while not on any");
      if (!validName(to)) return fatal("'" + to + "' is not a valid branch name");
      var fr = "refs/heads/" + from, tr = "refs/heads/" + to;
      if (!repo.refs[fr] && from !== cur) return bad("error: refname " + fr + " not found\nfatal: Branch rename failed\n", 128);
      if (repo.refs[tr] && from !== to && !has(o, "-M")) return fatal("a branch named '" + to + "' already exists");
      if (repo.refs[fr]) { repo.refs[tr] = repo.refs[fr]; delete repo.refs[fr]; }
      repo.reflog[tr] = (repo.reflog[fr] || []);
      delete repo.reflog[fr];
      logRef(repo, tr, repo.refs[tr], repo.refs[tr], "Branch: renamed " + fr + " to " + tr);
      if (repo.config.branch[from]) { repo.config.branch[to] = repo.config.branch[from]; delete repo.config.branch[from]; }
      if (repo.head.ref === fr) repo.head.ref = tr;
      return ok("");
    }

    var upArg = val(o, "-u", "--set-upstream-to");
    if (upArg) {
      var tb = o._[0] || cur, rt = remoteTracking(repo, upArg);
      if (!rt) return fatal("the requested upstream branch '" + upArg + "' does not exist");
      return ok(setUpstream(repo, tb, rt));
    }
    if (has(o, "--unset-upstream")) { delete repo.config.branch[o._[0] || cur]; return ok(""); }

    if (o._.length && !has(o, "--list")) {
      if (!hs && !o._[1]) return fatal("not a valid object name: '" + cur + "'");
      var made = createBranch(repo, o._[0], o._[1] || "HEAD", has(o, "-f", "--force"));
      return made.err || ok(made.note);
    }

    /* listing */
    var verbose = has(o, "-v", "--verbose"), vv = args.indexOf("-vv") !== -1 || args.filter(function (x) { return x === "-v"; }).length > 1;
    var rows = [];
    if (!has(o, "-r", "--remotes")) {
      if (repo.head.detached) rows.push({ cur: true, name: "(HEAD detached at " + short(hs) + ")", sha: hs });
      localBranches(repo).forEach(function (b) { rows.push({ cur: b === cur, name: b, sha: repo.refs["refs/heads/" + b], local: b }); });
    }
    if (has(o, "-a", "--all", "-r", "--remotes")) {
      keys(repo.refs).filter(function (r) { return r.indexOf("refs/remotes/") === 0; }).sort().forEach(function (r) {
        rows.push({ cur: false, name: (has(o, "-a", "--all") ? "remotes/" : "") + r.slice(13), sha: repo.refs[r] });
      });
    }
    var w = Math.max.apply(null, [0].concat(rows.map(function (r) { return r.name.length; })));
    return ok(rows.map(function (r) {
      var line = (r.cur ? "* " : "  ") + r.name;
      if (verbose || vv) {
        var pad = r.name; while (pad.length < w) pad += " ";
        line = (r.cur ? "* " : "  ") + pad + " " + short(r.sha) + " ";
        var up = vv && r.local && upstreamOf(repo, r.local);
        if (up) {
          var t = repo.refs[up.ref], bits = [];
          if (t) { var ab = aheadBehind(repo, r.sha, t); if (ab.ahead) bits.push("ahead " + ab.ahead); if (ab.behind) bits.push("behind " + ab.behind); }
          line += "[" + up.name + (bits.length ? ": " + bits.join(", ") : "") + "] ";
        }
        line += subjectOf(commitObj(repo, r.sha).message);
      }
      return line + "\n";
    }).join(""));
  };

  /* ---------- switching ---------- */
  var DETACH_ADVICE = "You are in 'detached HEAD' state. You can look around, make experimental\n" +
    "changes and commit them, and you can discard any commits you make in this\n" +
    "state without impacting any branches by switching back to a branch.\n\n" +
    "If you want to create a new branch to retain commits you create, you may\n" +
    "do so (now or later) by using -c with the switch command. Example:\n\n" +
    "  git switch -c <new-branch-name>\n\nOr undo this operation with:\n\n  git switch -\n\n" +
    "Turn off this advice by setting config variable advice.detachedHead to false\n\n";

  /* Commits reachable from `sha` that no ref (branch, tag, remote) can reach
     — the ones a learner is about to lose sight of. */
  function orphans(repo, sha) {
    var keep = {};
    keys(repo.refs).forEach(function (r) { keys(ancestors(repo, repo.refs[r])).forEach(function (k) { keep[k] = 1; }); });
    return walkLog(repo, [sha], []).filter(function (s) { return !keep[s]; });
  }
  function previousBranch(repo) {
    var log = repo.reflog.HEAD || [];
    for (var i = log.length - 1; i >= 0; i--) {
      var m = String(log[i].msg).match(/^checkout: moving from (\S+) to (\S+)$/);
      if (m) return m[1];
    }
    return null;
  }
  function carried(h) {
    var st = status(h), rows = {};
    st.staged.forEach(function (x) { rows[x.path] = x.kind === "new file" ? "A" : x.kind === "deleted" ? "D" : "M"; });
    st.unstaged.forEach(function (x) { if (!rows[x.path]) rows[x.path] = x.kind === "deleted" ? "D" : "M"; });
    return keys(rows).sort().map(function (p) { return rows[p] + "\t" + p + "\n"; }).join("");
  }
  /* The one routine behind switch and checkout. `target` is {ref} to land
     on a branch or {sha} to detach; opts.typed is what the learner wrote. */
  function goTo(h, target, opts) {
    var repo = h.repo, fromSha = headSha(repo);
    var toSha = target.ref ? repo.refs[target.ref] : target.sha;
    if (repo.conflicts.length) return bad("error: you need to resolve your current index first\n" +
      conflictPaths(repo).map(function (p) { return p + ": needs merge\n"; }).join(""), 1);
    var from = commitMap(repo, fromSha), to = commitMap(repo, toSha);
    var b = blocked(h, from, to);
    if (b.dirty.length || b.clobber.length) return bad(blockedMsg(b, "checkout", "switch branches"), 1);
    var prevName = branchName(repo) || fromSha, wasDetached = !!repo.head.detached, wasRef = repo.head.ref;
    var err = "";
    if (wasDetached && fromSha && fromSha !== toSha) {
      var lost = orphans(repo, fromSha).filter(function (s) { return !isAncestor(repo, s, toSha); });
      if (lost.length) {
        err += "Warning: you are leaving " + plural(lost.length, "commit", "commits") + " behind, not connected to\nany of your branches:\n\n" +
          lost.slice(0, 4).map(function (s) { return "  " + oneline(repo, s) + "\n"; }).join("") +
          (lost.length > 4 ? " ... and " + (lost.length - 4) + " more.\n" : "") +
          "\nIf you want to keep " + (lost.length === 1 ? "it" : "them") + " by creating a new branch, this may be a good time\nto do so with:\n\n git branch <new-branch-name> " + short(lost[0]) + "\n\n";
      } else err += "Previous HEAD position was " + oneline(repo, fromSha) + "\n";
    }
    switchTree(h, from, to);
    var msg = "checkout: moving from " + prevName + " to " + opts.typed;
    if (target.ref) {
      if (!toSha) repo.head = { ref: target.ref };
      else attachHead(repo, target.ref, msg);
    } else detachHead(repo, toSha, msg);
    var out = carried(h);
    if (target.ref) {
      var name = target.ref.slice(11);
      if (opts.create) out += "Switched to a new branch '" + name + "'\n";
      else if (!wasDetached && wasRef === target.ref) out += "Already on '" + name + "'\n";
      else out += "Switched to branch '" + name + "'\n";
      out += trackingLine(repo, name);
    } else {
      if (opts.advice) out += "Note: switching to '" + opts.typed + "'.\n\n" + DETACH_ADVICE;
      out += "HEAD is now at " + oneline(repo, toSha) + "\n";
    }
    return { out: (opts.note || "") + out, err: err, code: 0 };
  }
  /* `git switch feature` when only origin/feature exists creates a local
     branch that tracks it — the step right after every clone. */
  function dwim(repo, name) {
    var hits = keys(repo.refs).filter(function (r) { return /^refs\/remotes\/[^/]+\//.test(r) && r.replace(/^refs\/remotes\/[^/]+\//, "") === name; });
    return hits.length === 1 ? hits[0] : null;
  }
  function switchOrCheckout(ctx, h, cmd, o) {
    var repo = h.repo;
    var create = val(o, "-c", "--create") || val(o, "-b") || val(o, "-C", "--force-create") || val(o, "-B");
    if (create) {
      var force = !!(val(o, "-C", "--force-create") || val(o, "-B"));
      if (!headSha(repo) && !o._[0]) {
        if (!validName(create)) return fatal("'" + create + "' is not a valid branch name");
        repo.head = { ref: "refs/heads/" + create };
        return ok("Switched to a new branch '" + create + "'\n");
      }
      if (repo.head.ref === "refs/heads/" + create && force) return fatal("cannot force update the current branch.");
      var made = createBranch(repo, create, o._[0] || "HEAD", force);
      if (made.err) return made.err;
      return goTo(h, { ref: "refs/heads/" + create }, { typed: create, create: true, note: made.note });
    }
    var arg = o._[0];
    if (has(o, "--detach", "-d")) {
      var ds = resolveRev(repo, arg || "HEAD");
      if (!ds) return fatal("invalid reference: " + arg);
      return goTo(h, { sha: ds }, { typed: arg || "HEAD", advice: false });
    }
    if (!arg) return fatal("missing branch or commit argument");
    if (arg === "-") { arg = previousBranch(repo); if (!arg) return fatal("invalid reference: @{-1}"); }
    if (repo.refs["refs/heads/" + arg]) return goTo(h, { ref: "refs/heads/" + arg }, { typed: arg });
    var rt = dwim(repo, arg);
    if (rt) {
      setRef(repo, "refs/heads/" + arg, repo.refs[rt], "branch: Created from " + rt.slice(13));
      return goTo(h, { ref: "refs/heads/" + arg }, { typed: arg, create: true, note: setUpstream(repo, arg, rt) });
    }
    var sha = resolveRev(repo, arg);
    if (sha) {
      if (cmd === "checkout") return goTo(h, { sha: sha }, { typed: arg, advice: true });
      return fatal("a branch is expected, got " + (repo.refs["refs/tags/" + arg] ? "tag" : "commit") + " '" + arg +
        "'\nhint: If you want to detach HEAD at the commit, try again with the --detach option.");
    }
    return null;
  }

  CMD.switch = function (ctx, args, h) {
    var o = parse(args, { "-c": 1, "--create": 1, "-C": 1, "--force-create": 1 },
      ["-c", "--create", "-C", "--force-create", "--detach", "-d", "-t", "--track"]);
    if (o.badFlag) return unknown("switch", o.badFlag);
    return switchOrCheckout(ctx, h, "switch", o) || fatal("invalid reference: " + o._[0]);
  };

  CMD.checkout = function (ctx, args, h) {
    var o = parse(args, { "-b": 1, "-B": 1 }, ["-b", "-B", "--detach", "-t", "--track", "--ours", "--theirs", "-f", "--force"]);
    if (o.badFlag) return unknown("checkout", o.badFlag);
    var repo = h.repo;
    /* `git checkout -- file` / `git checkout <rev> -- file`: restore paths. */
    if (o.paths || has(o, "--ours", "--theirs")) {
      var specs = o.paths || o._, rev = o.paths ? o._[0] : null;
      if (has(o, "--ours", "--theirs")) {
        var side = has(o, "--ours") ? "ours" : "theirs", n = 0;
        for (var i = 0; i < specs.length; i++) {
          var c = repo.conflicts.filter(function (x) { return x.path === specs[i]; })[0];
          if (!c) return bad("error: path '" + specs[i] + "' does not have our/their version\n", 1);
          if (!c[side]) return bad("error: path '" + specs[i] + "' does not have " + (side === "ours" ? "our" : "their") + " version\n", 1);
          wtWrite(h, specs[i], getBlob(repo, c[side])); n++;
        }
        return ok("Updated " + plural(n, "path", "paths") + " from the index\n");
      }
      return restorePaths(h, specs, rev ? resolveRev(repo, rev) : null, rev, !!rev, true, rev ? "from " + short(resolveRev(repo, rev)) : "from the index");
    }
    var r = switchOrCheckout(ctx, h, "checkout", o);
    if (r) return r;
    if (o._.length && (repo.index[o._[0]] || keys(repo.index).some(function (p) { return p.indexOf(o._[0].replace(/\/$/, "") + "/") === 0; }) || o._[0] === "."))
      return restorePaths(h, o._, null, null, false, true, "from the index");
    return bad("error: pathspec '" + o._[0] + "' did not match any file(s) known to git\n", 1);
  };
  /* ---------- putting files back ---------- */
  function restorePaths(h, specs, srcSha, srcTyped, toIndex, toWt, label) {
    var repo = h.repo;
    var src = srcSha ? commitMap(repo, srcSha) : (toIndex ? headMap(repo) : repo.index);
    var known = union(src, repo.index);
    var e = expand(specs, known);
    if (e.missing.length) return bad("error: pathspec '" + e.missing[0] + "' did not match any file(s) known to git\n", 1);
    e.paths.forEach(function (p) {
      if (toIndex) {
        if (src[p]) repo.index[p] = src[p]; else delete repo.index[p];
        repo.conflicts = repo.conflicts.filter(function (c) { return c.path !== p; });
      }
      if (toWt) {
        if (src[p]) wtWrite(h, p, getBlob(repo, src[p]));
        else if (wtRead(h, p) != null && (toIndex || srcSha)) wtRemove(h, p);
      }
    });
    return ok(label ? "Updated " + plural(e.paths.length, "path", "paths") + " " + label + "\n" : "");
  }

  CMD.restore = function (ctx, args, h) {
    var o = parse(args, { "-s": 1, "--source": 1 }, ["-S", "--staged", "-W", "--worktree", "-s", "--source"]);
    if (o.badFlag) return unknown("restore", o.badFlag);
    var repo = h.repo, specs = o._.concat(o.paths || []);
    if (!specs.length) return fatal("you must specify path(s) to restore");
    var staged = has(o, "-S", "--staged"), wt = has(o, "-W", "--worktree") || !staged;
    var srcTyped = val(o, "-s", "--source"), src = null;
    if (srcTyped) { src = resolveRev(repo, srcTyped); if (!src) return fatal("could not resolve " + srcTyped); }
    else if (staged) src = headSha(repo);
    return restorePaths(h, specs, src, srcTyped, staged, wt, "");
  };

  function unstagedLines(h) {
    return status(h).unstaged.map(function (x) { return (x.kind === "deleted" ? "D" : "M") + "\t" + x.path + "\n"; }).join("");
  }

  CMD.reset = function (ctx, args, h) {
    var o = parse(args, {}, ["--soft", "--mixed", "--hard", "-q", "--quiet"]);
    if (o.badFlag) return unknown("reset", o.badFlag);
    var repo = h.repo, revArg = null, paths = (o.paths || []).slice();
    o._.forEach(function (a) {
      if (!revArg && !paths.length && resolveRev(repo, a)) revArg = a; else paths.push(a);
    });
    if (paths.length) {
      if (has(o, "--hard")) return fatal("Cannot do hard reset with paths.");
      if (has(o, "--soft")) return fatal("Cannot do soft reset with paths.");
      var srcSha = revArg ? resolveRev(repo, revArg) : headSha(repo), src = commitMap(repo, srcSha);
      var e = expand(paths, union(src, repo.index));
      if (e.missing.length) return ambiguous(e.missing[0]);
      e.paths.forEach(function (p) { if (src[p]) repo.index[p] = src[p]; else delete repo.index[p]; });
      var u = unstagedLines(h);
      return ok(u && !has(o, "-q", "--quiet") ? "Unstaged changes after reset:\n" + u : "");
    }
    var typed = revArg || "HEAD", target = resolveRev(repo, typed);
    if (!target) {
      if (!revArg && !headSha(repo)) { repo.index = {}; return ok(""); }
      return ambiguous(typed);
    }
    if (has(o, "--soft")) {
      if (repo.merge) return fatal("Cannot do a soft reset in the middle of a merge.");
      moveHead(repo, target, "reset: moving to " + typed);
      return ok("");
    }
    moveHead(repo, target, "reset: moving to " + typed);
    repo.merge = null;
    if (has(o, "--hard")) {
      hardTree(h, commitMap(repo, target));
      return ok(has(o, "-q", "--quiet") ? "" : "HEAD is now at " + oneline(repo, target) + "\n");
    }
    repo.index = commitMap(repo, target);
    repo.conflicts = [];
    var lines = unstagedLines(h);
    return ok(lines && !has(o, "-q", "--quiet") ? "Unstaged changes after reset:\n" + lines : "");
  };

  /* ---------- merging ---------- */
  function mergeMsg(repo, typed) {
    var cur = branchName(repo), into = cur && cur !== "main" && cur !== "master" ? " into " + cur : "";
    if (repo.refs["refs/heads/" + typed]) return "Merge branch '" + typed + "'" + into;
    if (repo.refs["refs/remotes/" + typed]) return "Merge remote-tracking branch '" + typed + "'" + into;
    if (repo.refs["refs/tags/" + typed]) return "Merge tag '" + typed + "'" + into;
    return "Merge commit '" + typed + "'" + into;
  }
  /* Shared by `merge` and `pull`. opts: noff, ffOnly, msg, reflog. */
  function doMerge(h, theirs, typed, opts) {
    var repo = h.repo, head = headSha(repo), tag = opts.reflog || ("merge " + typed);
    if (head && isAncestor(repo, theirs, head)) return ok("Already up to date.\n");
    var from = headMap(repo), to = commitMap(repo, theirs);
    if (!head || (isAncestor(repo, head, theirs) && !opts.noff)) {
      var b = blocked(h, from, to);
      if (b.dirty.length || b.clobber.length) return bad(blockedMsg(b, "merge", "merge"), 1);
      switchTree(h, from, to);
      moveHead(repo, theirs, tag + ": Fast-forward");
      var A = contents(repo, from), B = contents(repo, to);
      return ok("Updating " + short(head) + ".." + short(theirs) + "\nFast-forward\n" + diffstat(A, B) + modeLines(A, B));
    }
    if (opts.ffOnly) return fatal("Not possible to fast-forward, aborting.");
    var r = mergeTrees(repo, commitMap(repo, mergeBase(repo, head, theirs)), from, to, "HEAD", typed);
    var touched = changedPaths(from, r.map).concat(r.conflicts.map(function (c) { return c.path; }));
    var dirty = [], clobber = [];
    touched.forEach(function (p) {
      var w = wtRead(h, p), idx = repo.index[p];
      if (from[p]) { if (idx !== from[p] || w == null || blobSha(w) !== from[p]) dirty.push(p); }
      else if (idx) dirty.push(p);
      else if (w != null && (!r.map[p] || blobSha(w) !== r.map[p])) clobber.push(p);
    });
    if (dirty.length || clobber.length) return bad(blockedMsg({ dirty: dirty, clobber: clobber }, "merge", "merge"), 1);
    touched.forEach(function (p) {
      if (r.wtText[p] != null) wtWrite(h, p, r.wtText[p]);
      else if (r.map[p]) wtWrite(h, p, getBlob(repo, r.map[p]));
      else if (wtRead(h, p) != null) wtRemove(h, p);
      if (r.map[p]) repo.index[p] = r.map[p]; else delete repo.index[p];
    });
    var said = r.msgs.length ? r.msgs.join("\n") + "\n" : "";
    var message = opts.msg || mergeMsg(repo, typed);
    if (r.conflicts.length) {
      r.conflicts.forEach(function (c) { c.ours = from[c.path] || null; c.theirs = to[c.path] || null; });
      repo.conflicts = r.conflicts;
      repo.merge = { head: theirs, msg: message, touched: touched };
      return { out: said + "Automatic merge failed; fix conflicts and then commit the result.\n", err: "", code: 1 };
    }
    var sha = newCommit(h, message, [head, theirs]);
    moveHead(repo, sha, tag + ": Merge made by the 'ort' strategy.");
    var A2 = contents(repo, from), B2 = contents(repo, commitMap(repo, sha));
    return ok(said + "Merge made by the 'ort' strategy.\n" + diffstat(A2, B2) + modeLines(A2, B2));
  }

  CMD.merge = function (ctx, args, h) {
    var o = parse(args, { "-m": 1 }, ["--no-ff", "--ff-only", "--ff", "-m", "--abort", "--continue", "--no-edit", "--squash"]);
    if (o.badFlag) return unknown("merge", o.badFlag);
    if (has(o, "--squash")) return bad("error: --squash is not simulated here — squash with `git reset --soft` and one commit instead.\n", 1);
    var repo = h.repo;
    if (has(o, "--abort")) {
      if (!repo.merge) return fatal("There is no merge to abort (MERGE_HEAD missing).");
      var from = headMap(repo);
      repo.merge.touched.forEach(function (p) {
        if (from[p]) { repo.index[p] = from[p]; wtWrite(h, p, getBlob(repo, from[p])); }
        else { delete repo.index[p]; if (wtRead(h, p) != null) wtRemove(h, p); }
      });
      repo.conflicts = []; repo.merge = null;
      return ok("");
    }
    if (has(o, "--continue")) {
      if (!repo.merge) return fatal("There is no merge in progress (MERGE_HEAD missing).");
      return CMD.commit(ctx, [], h);
    }
    if (repo.conflicts.length) return bad("error: Merging is not possible because you have unmerged files.\nhint: Fix them up in the work tree, and then use 'git add/rm <file>'\nhint: as appropriate to mark resolution and make a commit.\nfatal: Exiting because of an unresolved conflict.\n", 128);
    if (repo.merge) return fatal("You have not concluded your merge (MERGE_HEAD exists).\nPlease, commit your changes before you merge.");
    var typed = o._[0];
    if (!typed) {
      var up = upstreamOf(repo, branchName(repo));
      if (!up || !repo.refs[up.ref]) return fatal("No remote for the current branch.");
      typed = up.name;
    }
    var theirs = resolveRev(repo, typed);
    if (!theirs) return bad("merge: " + typed + " - not something we can merge\n", 1);
    return doMerge(h, theirs, typed, { noff: has(o, "--no-ff"), ffOnly: has(o, "--ff-only"), msg: val(o, "-m") });
  };
  /* ---------- applying one commit's change: the sequencer ----------
     cherry-pick, revert and rebase are one operation seen three ways:
     replay the change a commit made (or its inverse) onto HEAD with a
     three-way merge, commit it, move on to the next. A conflict parks the
     queue in repo.seq until --continue / --skip / --abort. */
  function mergeDirty(h, from, r, touched) {
    var repo = h.repo, dirty = [], clobber = [];
    touched.forEach(function (p) {
      var w = wtRead(h, p), idx = repo.index[p];
      if (from[p]) { if (idx !== from[p] || w == null || blobSha(w) !== from[p]) dirty.push(p); }
      else if (idx) dirty.push(p);
      else if (w != null && (!r.map[p] || blobSha(w) !== r.map[p])) clobber.push(p);
    });
    return { dirty: dirty, clobber: clobber };
  }
  function mergeApply(h, r, touched) {
    var repo = h.repo;
    touched.forEach(function (p) {
      if (r.wtText[p] != null) wtWrite(h, p, r.wtText[p]);
      else if (r.map[p]) wtWrite(h, p, getBlob(repo, r.map[p]));
      else if (wtRead(h, p) != null) wtRemove(h, p);
      if (r.map[p]) repo.index[p] = r.map[p]; else delete repo.index[p];
    });
  }
  function applyChange(h, c, mode) {
    var repo = h.repo, co = commitObj(repo, c), parent = co.parents[0] || null;
    var base = mode === "pick" ? commitMap(repo, parent) : commitMap(repo, c);
    var theirs = mode === "pick" ? commitMap(repo, c) : commitMap(repo, parent);
    var ours = headMap(repo), label = short(c) + " (" + subjectOf(co.message) + ")";
    var r = mergeTrees(repo, base, ours, theirs, "HEAD", mode === "pick" ? label : "parent of " + label);
    var touched = changedPaths(ours, r.map).concat(r.conflicts.map(function (x) { return x.path; }));
    var b = mergeDirty(h, ours, r, touched);
    if (b.dirty.length || b.clobber.length) return { blocked: b };
    mergeApply(h, r, touched);
    r.conflicts.forEach(function (x) { x.ours = ours[x.path] || null; x.theirs = theirs[x.path] || null; });
    repo.conflicts = r.conflicts;
    return { conflicts: r.conflicts, msgs: r.msgs, empty: !r.conflicts.length && putTree(repo, repo.index) === putTree(repo, ours) };
  }
  function seqHints(op) {
    if (op === "rebase") return "hint: Resolve all conflicts manually, mark them as resolved with\nhint: \"git add/rm <conflicted_files>\", then run \"git rebase --continue\".\n" +
      "hint: You can instead skip this commit: run \"git rebase --skip\".\nhint: To abort and get back to the state before \"git rebase\", run \"git rebase --abort\".\n";
    return "hint: After resolving the conflicts, mark them with\nhint: \"git add/rm <pathspec>\", then run\nhint: \"git " + op + " --continue\".\n" +
      "hint: You can instead skip this commit with \"git " + op + " --skip\".\nhint: To abort and get back to the state before \"git " + op + "\",\nhint: run \"git " + op + " --abort\".\n";
  }
  function commitSeqStep(h) {
    var repo = h.repo, q = repo.seq, head = headSha(repo);
    var sha = newCommit(h, q.msg, head ? [head] : [], q.keep);
    var subj = subjectOf(q.msg);
    moveHead(repo, sha, (q.op === "rebase" ? "rebase (pick)" : q.op) + ": " + subj);
    q.committed = true;
    if (q.op === "rebase") return "";
    var A = contents(repo, commitMap(repo, head)), B = contents(repo, commitMap(repo, sha)), t = totals(A, B);
    return "[" + (branchName(repo) || "detached HEAD") + " " + short(sha) + "] " + subj + "\n" +
      (q.keep ? " Date: " + fmtDate(q.keep.atime) + "\n" : "") + shortstat(t.files, t.ins, t.del) + modeLines(A, B);
  }
  function finishSeq(h, out) {
    var repo = h.repo, q = repo.seq;
    repo.seq = null;
    if (q.op !== "rebase") return ok(out);
    var tip = headSha(repo);
    if (q.origRef) {
      setRef(repo, q.origRef, tip, "rebase (finish): " + q.origRef + " onto " + q.onto);
      attachHead(repo, q.origRef, "rebase (finish): returning to " + q.origRef);
    }
    return ok(out + "Successfully rebased and updated " + (q.origRef || "detached HEAD") + ".\n");
  }
  function runSeq(h, out) {
    var repo = h.repo, q = repo.seq;
    while (q.todo.length) {
      var c = q.todo.shift(), co = commitObj(repo, c), mode = q.op === "revert" ? "revert" : "pick";
      q.cur = c; q.committed = false;
      q.msg = mode === "revert" ? "Revert \"" + subjectOf(co.message) + "\"\n\nThis reverts commit " + c + "." : co.message;
      q.keep = mode === "pick" ? { author: co.author, atime: co.atime } : null;
      var r = applyChange(h, c, mode);
      if (r.blocked) {
        var first = q.first;
        if (first) repo.seq = null;
        return bad("error: your local changes would be overwritten by " + q.op + ".\nhint: commit your changes or stash them to proceed.\nfatal: " + q.op + " failed\n", 128, out);
      }
      q.first = false;
      if (r.conflicts.length) {
        var what = (q.op === "revert" ? "could not revert " : "could not apply ") + short(c) + "... " + subjectOf(co.message);
        return {
          out: out + r.msgs.join("\n") + "\n",
          err: "error: " + what + "\n" + seqHints(q.op) + (q.op === "rebase" ? "Could not apply " + short(c) + "... " + subjectOf(co.message) + "\n" : ""),
          code: 1
        };
      }
      if (r.empty) continue;   // already upstream — real git drops it too
      out += commitSeqStep(h);
    }
    return finishSeq(h, out);
  }
  function seqControl(ctx, h, op, action) {
    var repo = h.repo, q = repo.seq;
    if (!q || q.op !== op) {
      if (op === "rebase") return fatal("No rebase in progress?");
      return bad("error: no cherry-pick or revert in progress\nfatal: " + op + " failed\n", 128);
    }
    if (action === "abort") {
      hardTree(h, commitMap(repo, q.orig));
      if (q.op === "rebase") {
        if (q.origRef) attachHead(repo, q.origRef, "rebase (abort): returning to " + q.origRef);
        else detachHead(repo, q.orig, "rebase (abort): returning to " + q.orig);
      } else if (headSha(repo) !== q.orig) moveHead(repo, q.orig, "reset: moving to " + q.orig);
      repo.seq = null;
      return ok("");
    }
    if (action === "skip") {
      hardTree(h, headMap(repo));
      return runSeq(h, "");
    }
    if (repo.conflicts.length) {
      if (op === "rebase") return bad("error: you must edit all merge conflicts and then\nmark them as resolved using git add\n", 1);
      return bad("error: Committing is not possible because you have unmerged files.\nhint: Fix them up in the work tree, and then use 'git add/rm <file>'\nhint: as appropriate to mark resolution and make a commit.\nfatal: " + op + " failed\n", 128);
    }
    var out = "";
    if (!q.committed) {
      if (putTree(repo, repo.index) === putTree(repo, headMap(repo))) {
        if (status(h).unstaged.length) return bad("No changes - did you forget to use 'git add'?\nIf there is nothing left to stage, chances are that something else\nalready introduced the same changes; you might want to skip this patch.\n", 1);
      } else out += commitSeqStep(h);
    }
    return runSeq(h, out);
  }
  function revList(repo, specs) {
    var out = [];
    for (var i = 0; i < specs.length; i++) {
      var a = specs[i];
      if (a.indexOf("..") !== -1) {
        var pr = a.split(".."), l = resolveRev(repo, pr[0] || "HEAD"), r = resolveRev(repo, pr[1] || "HEAD");
        if (!l || !r) return { bad: a };
        out = out.concat(walkLog(repo, [r], [l]).reverse());
      } else {
        var s = resolveRev(repo, a);
        if (!s) return { bad: a };
        out.push(s);
      }
    }
    return { shas: out };
  }
  function startSeq(ctx, h, op, args) {
    var o = parse(args, {}, ["--continue", "--abort", "--skip", "--no-edit", "-x"]);
    if (o.badFlag) return unknown(op, o.badFlag);
    var repo = h.repo;
    if (has(o, "--continue")) return seqControl(ctx, h, op, "continue");
    if (has(o, "--abort")) return seqControl(ctx, h, op, "abort");
    if (has(o, "--skip")) return seqControl(ctx, h, op, "skip");
    if (repo.seq) return bad("error: " + (repo.seq.op === "rebase" ? "a rebase" : "a cherry-pick or revert") + " is already in progress\nhint: try \"git " + repo.seq.op + " (--continue | --abort | --skip)\"\nfatal: " + op + " failed\n", 128);
    if (repo.conflicts.length || repo.merge) return fatal("You have not concluded your merge (MERGE_HEAD exists).");
    if (!o._.length) return bad("usage: git " + op + " <commit>...\n", 129);
    var rl = revList(repo, o._);
    if (rl.bad) return fatal("bad revision '" + rl.bad + "'");
    for (var i = 0; i < rl.shas.length; i++) {
      if (commitObj(repo, rl.shas[i]).parents.length > 1)
        return bad("error: commit " + rl.shas[i] + " is a merge but no -m option was given.\nfatal: " + op + " failed\n", 128);
    }
    repo.seq = { op: op, todo: rl.shas, orig: headSha(repo), origRef: repo.head.ref || null, first: true };
    return runSeq(h, "");
  }
  CMD["cherry-pick"] = function (ctx, args, h) { return startSeq(ctx, h, "cherry-pick", args); };
  CMD.revert = function (ctx, args, h) { return startSeq(ctx, h, "revert", args); };

  CMD.rebase = function (ctx, args, h) {
    var o = parse(args, { "--onto": 1 }, ["--continue", "--abort", "--skip", "-i", "--interactive", "--onto", "--quit"]);
    if (o.badFlag) return unknown("rebase", o.badFlag);
    var repo = h.repo;
    if (has(o, "-i", "--interactive")) return bad("error: `git rebase -i` opens its todo list in a text editor, which this terminal doesn't have.\nTo squash here: git reset --soft HEAD~N, then a single git commit.\n", 1);
    if (has(o, "--continue")) return seqControl(ctx, h, "rebase", "continue");
    if (has(o, "--abort")) return seqControl(ctx, h, "rebase", "abort");
    if (has(o, "--skip")) return seqControl(ctx, h, "rebase", "skip");
    if (repo.seq) return fatal("a rebase is already in progress — use git rebase (--continue | --skip | --abort)");
    if (repo.merge || repo.conflicts.length) return fatal("You have not concluded your merge (MERGE_HEAD exists).");
    if (o._[1]) {
      var sw = CMD.switch(ctx, [o._[1]], h);
      if (sw.code) return sw;
    }
    var st = status(h);
    if (st.unstaged.length) return bad("error: cannot rebase: You have unstaged changes.\nerror: Please commit or stash them.\n", 1);
    if (st.staged.length) return bad("error: cannot rebase: Your index contains uncommitted changes.\nerror: Please commit or stash them.\n", 1);
    var typed = o._[0];
    if (!typed) {
      var up = upstreamOf(repo, branchName(repo));
      if (!up || !repo.refs[up.ref]) return fatal("There is no tracking information for the current branch.");
      typed = up.name;
    }
    var upstream = resolveRev(repo, typed);
    if (!upstream) return fatal("invalid upstream '" + typed + "'");
    var ontoTyped = val(o, "--onto"), onto = ontoTyped ? resolveRev(repo, ontoTyped) : upstream;
    if (!onto) return fatal("invalid upstream '" + ontoTyped + "'");
    var head = headSha(repo);
    var todo = walkLog(repo, [head], [upstream]).reverse().filter(function (s) { return commitObj(repo, s).parents.length < 2; });
    if (!todo.length && isAncestor(repo, onto, head) && !ontoTyped) return ok("Current branch " + (branchName(repo) || "HEAD") + " is up to date.\n");
    repo.seq = { op: "rebase", todo: todo, orig: head, origRef: repo.head.ref || null, onto: onto, branch: branchName(repo) || short(head) };
    switchTree(h, headMap(repo), commitMap(repo, onto));
    detachHead(repo, onto, "rebase (start): checkout " + (ontoTyped || typed));
    return runSeq(h, "");
  };

  /* ---------- stash ---------- */
  function stashIndex(repo, spec) {
    if (spec == null) return repo.stash.length ? 0 : -1;
    var m = String(spec).match(/^(?:stash@\{)?(\d+)\}?$/);
    var n = m ? parseInt(m[1], 10) : -1;
    return n >= 0 && n < repo.stash.length ? n : -2;
  }
  CMD.stash = function (ctx, args, h) {
    var repo = h.repo, sub = args[0] && args[0].charAt(0) !== "-" ? args[0] : "push";
    var rest = args[0] === sub ? args.slice(1) : args;
    var b = branchName(repo) || "(no branch)", head = headSha(repo);
    if (sub === "push" || sub === "save") {
      var o = parse(rest, { "-m": 1, "--message": 1 }, ["-m", "--message", "-u", "--include-untracked", "-k", "--keep-index"]);
      if (o.badFlag) return unknown("stash", o.badFlag);
      if (!head) return bad("You do not have the initial commit yet\n", 1);
      if (repo.conflicts.length) return bad(conflictPaths(repo).map(function (p) { return p + ": needs merge\n"; }).join("") + "error: could not write index\n", 1);
      var st = status(h), withU = has(o, "-u", "--include-untracked");
      var untracked = withU ? st.untracked : [];
      if (!st.staged.length && !st.unstaged.length && !untracked.length) return ok("No local changes to save\n");
      var hm = headMap(repo), wt = {}, ut = {};
      union(repo.index, hm).forEach(function (p) { var w = wtRead(h, p); wt[p] = w == null ? null : putBlob(repo, w); });
      untracked.forEach(function (p) { ut[p] = wtRead(h, p); });
      var m = val(o, "-m", "--message") || (sub === "save" ? rest.filter(function (x) { return x.charAt(0) !== "-"; }).join(" ") : null);
      var entry = {
        base: head, wt: wt, untracked: ut,
        added: keys(repo.index).filter(function (p) { return !hm[p]; }),
        msg: m ? "On " + b + ": " + m : "WIP on " + b + ": " + oneline(repo, head)
      };
      entry.sha = hash("stash\0" + JSON.stringify(entry) + tick(h.fs));
      repo.stash.unshift(entry);
      hardTree(h, hm);
      untracked.forEach(function (p) { wtRemove(h, p); });
      return ok("Saved working directory and index state " + entry.msg + "\n");
    }
    if (sub === "list") return ok(repo.stash.map(function (e, i) { return "stash@{" + i + "}: " + e.msg + "\n"; }).join(""));
    if (sub === "clear") { repo.stash = []; return ok(""); }
    var ix = stashIndex(repo, rest.filter(function (x) { return x.charAt(0) !== "-"; })[0]);
    if (ix === -1) return bad("No stash entries found.\n", 1);
    if (ix === -2) return bad("error: " + rest[0] + " is not a valid reference\n", 1);
    var e = repo.stash[ix];
    if (sub === "drop") {
      repo.stash.splice(ix, 1);
      return ok("Dropped refs/stash@{" + ix + "} (" + e.sha + ")\n");
    }
    if (sub === "show") {
      var A = contents(repo, commitMap(repo, e.base)), B = {};
      keys(e.wt).forEach(function (p) { if (e.wt[p]) B[p] = getBlob(repo, e.wt[p]); });
      return ok(rest.indexOf("-p") !== -1 || rest.indexOf("--patch") !== -1 ? diffMaps(A, B) : diffstat(A, B));
    }
    if (sub === "pop" || sub === "apply") {
      var base = commitMap(repo, e.base), theirs = {}, ours = headMap(repo);
      keys(e.wt).forEach(function (p) { if (e.wt[p]) theirs[p] = e.wt[p]; });
      var r = mergeTrees(repo, base, ours, theirs, "Updated upstream", "Stashed changes");
      var touched = changedPaths(ours, r.map).concat(r.conflicts.map(function (x) { return x.path; }));
      var bl = mergeDirty(h, ours, r, touched);
      if (bl.dirty.length || bl.clobber.length) return bad(blockedMsg(bl, "merge", "merge") + "The stash entry is kept in case you need it again.\n", 1);
      var exists = keys(e.untracked).filter(function (p) { return wtRead(h, p) != null; });
      if (exists.length) return bad(exists.map(function (p) { return p + " already exists, no checkout\n"; }).join("") + "error: could not restore untracked files from stash\n", 1);
      var idxBefore = copy(repo.index);
      mergeApply(h, r, touched);
      /* Without --index, a pop brings changes back UNSTAGED — except files
         that were new, which would otherwise come back untracked and lost. */
      touched.forEach(function (p) {
        var isConflict = r.conflicts.some(function (x) { return x.path === p; });
        if (isConflict) return;
        if (e.added.indexOf(p) !== -1 && r.map[p]) repo.index[p] = r.map[p];
        else if (idxBefore[p]) repo.index[p] = idxBefore[p];
        else delete repo.index[p];
      });
      keys(e.untracked).forEach(function (p) { wtWrite(h, p, e.untracked[p]); });
      if (r.conflicts.length) {
        r.conflicts.forEach(function (x) { x.ours = ours[x.path] || null; x.theirs = theirs[x.path] || null; });
        repo.conflicts = r.conflicts;
        return { out: r.msgs.join("\n") + "\n", err: "The stash entry is kept in case you need it again.\n", code: 1 };
      }
      var out = longStatus(h);
      if (sub === "pop") { repo.stash.splice(ix, 1); out += "Dropped refs/stash@{" + ix + "} (" + e.sha + ")\n"; }
      return ok(out);
    }
    return bad("error: unknown subcommand: `" + sub + "'\nusage: git stash list | show | drop | pop | apply | push | clear\n", 129);
  };

  /* ---------- tags ---------- */
  CMD.tag = function (ctx, args, h) {
    var o = parse(args, { "-m": 1 }, ["-a", "-m", "-d", "--delete", "-l", "--list", "-f", "--force"]);
    if (o.badFlag) return unknown("tag", o.badFlag);
    var repo = h.repo;
    if (has(o, "-d", "--delete")) {
      var out = "", err = "", code = 0;
      o._.forEach(function (n) {
        var s = repo.refs["refs/tags/" + n];
        if (!s) { err += "error: tag '" + n + "' not found.\n"; code = 1; return; }
        delete repo.refs["refs/tags/" + n];
        if (repo.tagMsg) delete repo.tagMsg[n];
        out += "Deleted tag '" + n + "' (was " + short(s) + ")\n";
      });
      return { out: out, err: err, code: code };
    }
    if (!o._.length || has(o, "-l", "--list")) {
      return ok(keys(repo.refs).filter(function (r) { return r.indexOf("refs/tags/") === 0; })
        .map(function (r) { return r.slice(10); }).sort().map(function (t) { return t + "\n"; }).join(""));
    }
    var name = o._[0], rev = o._[1] || "HEAD";
    if (!validName(name)) return fatal("'" + name + "' is not a valid tag name.");
    if (repo.refs["refs/tags/" + name] && !has(o, "-f", "--force")) return fatal("tag '" + name + "' already exists");
    var sha = resolveRev(repo, rev);
    if (!sha) return fatal("Failed to resolve '" + rev + "' as a valid ref.");
    var msg = val(o, "-m");
    if (has(o, "-a") && !msg) return bad(NO_EDITOR.replace("git commit -m \"Your message\"", "git tag -a " + name + " -m \"Your message\""), 1);
    repo.refs["refs/tags/" + name] = sha;
    if (msg) { repo.tagMsg = repo.tagMsg || {}; repo.tagMsg[name] = { msg: msg, tagger: authorOf(h), time: tick(h.fs) }; }
    return ok("");
  };

  /* ---------- the reflog ----------
     Every place HEAD has been, newest first. The owner's load-bearing
     feature: it is how a commit that "vanished" after reset --hard is found
     again, and HEAD@{n} is how you name it. */
  CMD.reflog = function (ctx, args, h) {
    var rest = args[0] === "show" ? args.slice(1) : args;
    if (args[0] === "expire" || args[0] === "delete") return bad("error: this simulator keeps every reflog entry — there is nothing to expire.\n", 1);
    var o = parse(rest, { "-n": 1 }, ["-n", "--oneline"]);
    if (o.badFlag) return unknown("reflog", o.badFlag);
    var repo = h.repo, name = o._[0] || "HEAD";
    var logName = name === "HEAD" ? "HEAD" : refFor(repo, name);
    if (!logName) return ambiguous(name);
    var log = repo.reflog[logName] || [], deco = decorations(repo), lines = [];
    for (var i = log.length - 1, n = 0; i >= 0; i--, n++) {
      var e = log[i];
      if (!e.to) continue;
      lines.push(short(e.to) + decoStr(deco, e.to) + " " + name + "@{" + n + "}: " + e.msg + "\n");
    }
    var lim = val(o, "-n");
    if (lim != null) lines = lines.slice(0, parseInt(lim, 10) || 0);
    return ok(lines.join(""));
  };
  /* ---------- remotes ----------
     A remote is just another repository on the same filesystem — which is
     also true of real git (`git clone /srv/app.git` works). A lesson can
     alias a URL to a path through fsRoot.gitNet, so the transcript can say
     https://github.com/… while nothing touches a network. */
  function remoteAt(fs, fromPath, url) {
    var target = (fs.gitNet || {})[url] || url;
    var abs = target.charAt(0) === "/" ? target : SH.resolve(fromPath || "/", "/home/you", target);
    return repoAtPath(fs, abs);
  }
  function noRemote(name) {
    return fatal("'" + name + "' does not appear to be a git repository\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.");
  }
  function copyObjects(from, to) {
    keys(from.objects).forEach(function (s) { if (!to.objects[s]) to.objects[s] = copy(from.objects[s]); });
  }
  function padTo(s, n) { s = String(s); while (s.length < n) s += " "; return s; }

  CMD.remote = function (ctx, args, h) {
    var repo = h.repo, sub = args[0], rc = repo.config.remote;
    if (!sub || sub === "-v" || sub === "--verbose") {
      return ok(keys(rc).sort().map(function (n) {
        return sub ? n + "\t" + rc[n].url + " (fetch)\n" + n + "\t" + rc[n].url + " (push)\n" : n + "\n";
      }).join(""));
    }
    if (sub === "add") {
      var n = args[1], url = args[2];
      if (!n || !url) return bad("usage: git remote add <name> <url>\n", 129);
      if (rc[n]) return bad("error: remote " + n + " already exists.\n", 3);
      rc[n] = { url: url };
      return ok("");
    }
    if (sub === "remove" || sub === "rm") {
      if (!rc[args[1]]) return bad("error: No such remote: '" + args[1] + "'\n", 2);
      delete rc[args[1]];
      keys(repo.refs).forEach(function (r) { if (r.indexOf("refs/remotes/" + args[1] + "/") === 0) delete repo.refs[r]; });
      keys(repo.config.branch).forEach(function (b) { if (repo.config.branch[b].remote === args[1]) delete repo.config.branch[b]; });
      return ok("");
    }
    if (sub === "get-url") { if (!rc[args[1]]) return bad("error: No such remote '" + args[1] + "'\n", 2); return ok(rc[args[1]].url + "\n"); }
    if (sub === "set-url") { if (!rc[args[1]]) return bad("error: No such remote '" + args[1] + "'\n", 2); rc[args[1]].url = args[2]; return ok(""); }
    return bad("error: unknown subcommand: `" + sub + "'\nusage: git remote [-v] | add | remove | get-url | set-url\n", 129);
  };

  CMD.clone = function (ctx, args) {
    var o = parse(args, { "-b": 1, "--branch": 1 }, ["-b", "--branch", "-q", "--quiet"]);
    if (o.badFlag) return unknown("clone", o.badFlag);
    var url = o._[0];
    if (!url) return fatal("You must specify a repository to clone.");
    var src = remoteAt(ctx.fs, ctx.cwd, url);
    if (!src) return fatal("repository '" + url + "' does not exist");
    var dirName = o._[1] || url.replace(/\/+$/, "").split("/").pop().replace(/\.git$/, "");
    var abs = SH.resolve(ctx.cwd, ctx.home, dirName), existing = nodeAt(ctx.fs, abs);
    if (existing && (!existing.d || keys(existing.d).length)) return fatal("destination path '" + dirName + "' already exists and is not an empty directory.");
    var node = ctx.fs;
    abs.split("/").filter(Boolean).forEach(function (p) { if (!node.d[p]) node.d[p] = SH.dir(); node = node.d[p]; });
    var srep = src.repo, want = val(o, "-b", "--branch") || branchName(srep) || "main";
    var repo = newRepo(false, want);
    node.d[".git"] = SH.dir();
    node.d[".git"].repo = repo;
    var h = { repo: repo, fs: ctx.fs, root: abs, gitPath: abs + "/.git" };
    repo.config.remote.origin = { url: url };
    copyObjects(srep, repo);
    localBranches(srep).forEach(function (b) { repo.refs["refs/remotes/origin/" + b] = srep.refs["refs/heads/" + b]; });
    keys(srep.refs).filter(function (r) { return r.indexOf("refs/tags/") === 0; }).forEach(function (r) { repo.refs[r] = srep.refs[r]; });
    var out = "Cloning into '" + dirName + "'...\n";
    var tip = srep.refs["refs/heads/" + want];
    if (!tip) {
      if (val(o, "-b", "--branch")) return fatal("Remote branch " + want + " not found in upstream origin");
      return ok(out + "warning: You appear to have cloned an empty repository.\ndone.\n");
    }
    setRef(repo, "refs/heads/" + want, tip, "clone: from " + url);
    logRef(repo, "HEAD", null, tip, "clone: from " + url);
    repo.config.branch[want] = { remote: "origin", merge: "refs/heads/" + want };
    switchTree(h, {}, commitMap(repo, tip));
    return ok(out + "done.\n");
  };

  function fetchFrom(h, name) {
    var repo = h.repo, rc = repo.config.remote[name];
    if (!rc) return noRemote(name);
    var src = remoteAt(h.fs, h.root || h.gitPath, rc.url);
    if (!src) return noRemote(rc.url);
    copyObjects(src.repo, repo);
    var lines = [];
    localBranches(src.repo).forEach(function (b) {
      var ref = "refs/remotes/" + name + "/" + b, old = repo.refs[ref] || null, nw = src.repo.refs["refs/heads/" + b];
      if (old === nw) return;
      if (!old) { lines.push(" * [new branch]      " + padTo(b, 10) + " -> " + name + "/" + b); setRef(repo, ref, nw, "fetch: storing head"); }
      else if (isAncestor(repo, old, nw)) { lines.push("   " + short(old) + ".." + short(nw) + "  " + padTo(b, 10) + " -> " + name + "/" + b); setRef(repo, ref, nw, "fetch: fast-forward"); }
      else { lines.push(" + " + short(old) + "..." + short(nw) + " " + padTo(b, 10) + " -> " + name + "/" + b + "  (forced update)"); setRef(repo, ref, nw, "fetch: forced-update"); }
    });
    keys(src.repo.refs).filter(function (r) { return r.indexOf("refs/tags/") === 0 && !repo.refs[r]; }).forEach(function (r) {
      repo.refs[r] = src.repo.refs[r];
      lines.push(" * [new tag]         " + padTo(r.slice(10), 10) + " -> " + r.slice(10));
    });
    return ok(lines.length ? "From " + rc.url + "\n" + lines.join("\n") + "\n" : "");
  }
  CMD.fetch = function (ctx, args, h) {
    var o = parse(args, {}, ["--all", "--prune", "-p", "-q", "--quiet"]);
    if (o.badFlag) return unknown("fetch", o.badFlag);
    var repo = h.repo;
    if (has(o, "--all")) {
      var out = "";
      for (var i = 0, names = keys(repo.config.remote).sort(); i < names.length; i++) {
        var r = fetchFrom(h, names[i]); if (r.code) return r; out += r.out;
      }
      return ok(out);
    }
    var up = upstreamOf(repo, branchName(repo));
    return fetchFrom(h, o._[0] || (up ? up.remote : "origin"));
  };

  function cfgGet(h, fs, key) {
    var local = h && h.repo.config, g = fs.gitGlobal || {};
    var m = key.match(/^remote\.([^.]+)\.url$/);
    if (m) return local && local.remote[m[1]] ? local.remote[m[1]].url : null;
    m = key.match(/^branch\.([^.]+)\.(remote|merge)$/);
    if (m) return local && local.branch[m[1]] ? local.branch[m[1]][m[2]] : null;
    m = key.match(/^user\.(name|email)$/);
    if (m) return (local && local.user[m[1]]) || (g.user && g.user[m[1]]) || null;
    return (local && local.kv && local.kv[key] != null) ? local.kv[key] : (g.kv && g.kv[key] != null ? g.kv[key] : null);
  }

  var DIVERGED = "hint: You have divergent branches and need to specify how to reconcile them.\n" +
    "hint: You can do so by running one of the following commands sometime before\nhint: your next pull:\nhint:\n" +
    "hint:   git config pull.rebase false  # merge\nhint:   git config pull.rebase true   # rebase\nhint:   git config pull.ff only       # fast-forward only\nhint:\n" +
    "hint: You can replace \"git config\" with \"git config --global\" to set a default\nhint: preference for all repositories. You can also pass --rebase, --no-rebase,\n" +
    "hint: or --ff-only on the command line to override the configured default per\nhint: invocation.\nfatal: Need to specify how to reconcile divergent branches.\n";

  CMD.pull = function (ctx, args, h) {
    var o = parse(args, {}, ["--rebase", "-r", "--no-rebase", "--ff-only", "--no-ff", "--ff"]);
    if (o.badFlag) return unknown("pull", o.badFlag);
    var repo = h.repo, b = branchName(repo), up = upstreamOf(repo, b);
    var remote = o._[0], branch = o._[1];
    if (!remote) {
      if (!up) return bad("There is no tracking information for the current branch.\nPlease specify which branch you want to merge with.\nSee git-pull(1) for details.\n\n    git pull <remote> <branch>\n\n" +
        "If you wish to set tracking information for this branch you can do so with:\n\n    git branch --set-upstream-to=origin/<branch> " + (b || "") + "\n\n", 1);
      remote = up.remote; branch = up.branch;
    } else if (!branch) {
      if (up && up.remote === remote) branch = up.branch;
      else return bad("You asked to pull from the remote '" + remote + "', but did not specify\na branch. Because this is not the default configured remote\nfor your current branch, you must specify a branch on the command line.\n", 1);
    }
    var f = fetchFrom(h, remote);
    if (f.code) return f;
    var theirs = repo.refs["refs/remotes/" + remote + "/" + branch];
    if (!theirs) return { out: f.out, err: "fatal: couldn't find remote ref " + branch + "\n", code: 128 };
    var head = headSha(repo), typed = remote + "/" + branch, out = f.out;
    if (head && isAncestor(repo, theirs, head)) return ok(out + "Already up to date.\n");
    var ff = !head || isAncestor(repo, head, theirs);
    var cfgRebase = cfgGet(h, ctx.fs, "pull.rebase"), cfgFF = cfgGet(h, ctx.fs, "pull.ff");
    var rebase = has(o, "--rebase", "-r") || (cfgRebase === "true" && !has(o, "--no-rebase"));
    if (rebase && !ff) {
      var rr = CMD.rebase(ctx, [typed], h);
      return { out: out + rr.out, err: rr.err, code: rr.code };
    }
    var ffOnly = has(o, "--ff-only") || (cfgFF === "only" && !has(o, "--no-ff", "--ff", "--no-rebase"));
    if (!ff && !ffOnly && !has(o, "--no-rebase", "--no-ff", "--ff") && cfgRebase == null) return { out: out, err: DIVERGED, code: 128 };
    var r = doMerge(h, theirs, typed, {
      ffOnly: ffOnly, noff: has(o, "--no-ff"), reflog: "pull",
      msg: "Merge branch '" + branch + "' of " + repo.config.remote[remote].url
    });
    return { out: out + r.out, err: r.err, code: r.code };
  };

  CMD.push = function (ctx, args, h) {
    var o = parse(args, {}, ["-u", "--set-upstream", "-f", "--force", "--force-with-lease", "--delete", "-d", "--tags"]);
    if (o.badFlag) return unknown("push", o.badFlag);
    var repo = h.repo, b = branchName(repo), up = upstreamOf(repo, b);
    var remote = o._[0], spec = o._[1];
    if (!remote) {
      if (!b) return fatal("You are not currently on a branch.\nTo push the history leading to the current (detached HEAD)\nstate now, use\n\n    git push origin HEAD:<name-of-remote-branch>\n");
      if (!up) {
        if (!keys(repo.config.remote).length) return fatal("No configured push destination.\nEither specify the URL from the command-line or configure a remote repository using\n\n    git remote add <name> <url>\n\nand then push using the remote name\n\n    git push <name>\n");
        return fatal("The current branch " + b + " has no upstream branch.\nTo push the current branch and set the remote as upstream, use\n\n    git push --set-upstream origin " + b + "\n");
      }
      remote = up.remote; spec = b + ":" + up.branch;
    }
    var rc = repo.config.remote[remote];
    if (!rc) return noRemote(remote);
    var dest = remoteAt(h.fs, h.root || h.gitPath, rc.url);
    if (!dest) return noRemote(rc.url);
    var drepo = dest.repo, url = rc.url;
    if (has(o, "--tags")) {
      copyObjects(repo, drepo);
      var tl = keys(repo.refs).filter(function (r) { return r.indexOf("refs/tags/") === 0 && drepo.refs[r] !== repo.refs[r]; });
      tl.forEach(function (r) { drepo.refs[r] = repo.refs[r]; });
      return ok(tl.length ? "To " + url + "\n" + tl.map(function (r) { return " * [new tag]         " + r.slice(10) + " -> " + r.slice(10) + "\n"; }).join("") : "Everything up-to-date\n");
    }
    if (!spec) {
      if (!b) return fatal("You are not currently on a branch.");
      spec = up && up.remote === remote ? b + ":" + up.branch : b;
    }
    var parts = spec.split(":"), srcName = parts[0], dstName = parts[1] || parts[0].replace(/^refs\/heads\//, "");
    if (has(o, "--delete", "-d")) {
      if (!drepo.refs["refs/heads/" + srcName]) return bad("error: unable to delete '" + srcName + "': remote ref does not exist\nerror: failed to push some refs to '" + url + "'\n", 1);
      delete drepo.refs["refs/heads/" + srcName];
      delete repo.refs["refs/remotes/" + remote + "/" + srcName];
      return ok("To " + url + "\n - [deleted]         " + srcName + "\n");
    }
    var srcSha = resolveRev(repo, srcName);
    if (!srcSha) return bad("error: src refspec " + srcName + " does not match any\nerror: failed to push some refs to '" + url + "'\n", 1);
    var dref = "refs/heads/" + dstName, old = drepo.refs[dref] || null, trackRef = "refs/remotes/" + remote + "/" + dstName;
    var label = (srcName === dstName ? dstName : srcName) + " -> " + dstName;
    var out = "To " + url + "\n";
    if (old === srcSha) {
      var note = has(o, "-u", "--set-upstream") && repo.refs["refs/heads/" + srcName] ? setUpstream(repo, srcName, trackRef) : "";
      if (!repo.refs[trackRef]) repo.refs[trackRef] = srcSha;
      return ok("Everything up-to-date\n" + note);
    }
    var force = has(o, "-f", "--force"), lease = has(o, "--force-with-lease");
    if (old && !force) {
      var known = !!repo.objects[old], ffable = known && isAncestor(repo, old, srcSha);
      if (lease) {
        /* The lease: overwrite only if the remote is still where I last saw
           it. If a teammate pushed since my last fetch, my picture is stale
           and I would be destroying work I have never seen. */
        if ((repo.refs[trackRef] || null) !== old) return bad(out + " ! [rejected]        " + label + " (stale info)\nerror: failed to push some refs to '" + url + "'\n", 1);
      } else if (!ffable) {
        var hint = known
          ? "hint: Updates were rejected because the tip of your current branch is behind\nhint: its remote counterpart. If you want to integrate the remote changes,\nhint: use 'git pull' before pushing again.\n"
          : "hint: Updates were rejected because the remote contains work that you do not\nhint: have locally. This is usually caused by another repository pushing to\nhint: the same ref. If you want to integrate the remote changes, use\nhint: 'git pull' before pushing again.\n";
        return bad(out + " ! [rejected]        " + label + " (" + (known ? "non-fast-forward" : "fetch first") + ")\nerror: failed to push some refs to '" + url + "'\n" +
          hint + "hint: See the 'Note about fast-forwards' in 'git push --help' for details.\n", 1);
      }
    }
    if (!drepo.bare && drepo.head.ref === dref) return bad(out + " ! [remote rejected] " + label + " (branch is currently checked out)\nerror: failed to push some refs to '" + url + "'\n", 1);
    copyObjects(repo, drepo);
    drepo.refs[dref] = srcSha;
    logRef(drepo, dref, old, srcSha, "push");
    setRef(repo, trackRef, srcSha, "update by push");
    if (!old) out += " * [new branch]      " + label + "\n";
    else if (isAncestor(repo, old, srcSha)) out += "   " + short(old) + ".." + short(srcSha) + "  " + label + "\n";
    else out += " + " + short(old) + "..." + short(srcSha) + " " + label + " (forced update)\n";
    if (has(o, "-u", "--set-upstream") && repo.refs["refs/heads/" + srcName]) out += setUpstream(repo, srcName, trackRef);
    return ok(out);
  };

  /* ---------- config and check-ignore ---------- */
  CMD.config = function (ctx, args, h) {
    var global = args.indexOf("--global") !== -1;
    var rest = args.filter(function (a) { return a !== "--global" && a !== "--local"; });
    if (!global && !h) return fatal("not in a git directory");
    var fs = ctx.fs, cfg = global ? (fs.gitGlobal = fs.gitGlobal || { user: {}, kv: {} }) : h.repo.config;
    cfg.user = cfg.user || {}; cfg.kv = cfg.kv || {};
    if (rest[0] === "--list" || rest[0] === "-l") {
      var lines = [];
      keys(cfg.user).forEach(function (k) { lines.push("user." + k + "=" + cfg.user[k]); });
      keys(cfg.kv).forEach(function (k) { lines.push(k + "=" + cfg.kv[k]); });
      if (!global) {
        keys(cfg.remote).forEach(function (n) { lines.push("remote." + n + ".url=" + cfg.remote[n].url); });
        keys(cfg.branch).forEach(function (b) { lines.push("branch." + b + ".remote=" + cfg.branch[b].remote, "branch." + b + ".merge=" + cfg.branch[b].merge); });
      }
      return ok(lines.map(function (l) { return l + "\n"; }).join(""));
    }
    var key = rest[0];
    if (!key) return bad("usage: git config [--global] <name> [<value>]\n", 129);
    if (rest.length < 2) { var v = cfgGet(global ? null : h, global ? { gitGlobal: cfg } : fs, key); return v == null ? { out: "", err: "", code: 1 } : ok(v + "\n"); }
    var value = rest.slice(1).join(" ");
    var m = key.match(/^user\.(name|email)$/);
    if (m) cfg.user[m[1]] = value;
    else if (!global && (m = key.match(/^remote\.([^.]+)\.url$/))) cfg.remote[m[1]] = { url: value };
    else cfg.kv[key] = value;
    return ok("");
  };

  CMD["check-ignore"] = function (ctx, args, h) {
    var o = parse(args, {}, ["-v", "--verbose"]);
    if (o.badFlag) return unknown("check-ignore", o.badFlag);
    var out = "", any = false;
    o._.forEach(function (p) {
      var r = ignoredBy(h, p.replace(/^\.\//, ""));
      if (!r) return;
      any = true;
      out += has(o, "-v", "--verbose") ? ".gitignore:" + r.line + ":" + r.src + "\t" + p + "\n" : p + "\n";
    });
    return { out: out, err: "", code: any ? 0 : 1 };
  };

  /* ---------- dispatch ---------- */
  var OUTSIDE = { init: 1, clone: 1 };
  var NEEDS_WT = { status: 1, add: 1, rm: 1, commit: 1, diff: 1, "switch": 1, checkout: 1, restore: 1, reset: 1, merge: 1,
    rebase: 1, "cherry-pick": 1, revert: 1, stash: 1, pull: 1, "check-ignore": 1 };
  var HELP = "usage: git <command> [<args>]\n\nThe commands this terminal knows:\n" +
    "  start a repo   init  clone\n  snapshots      status  add  rm  commit  diff  show  log\n" +
    "  branches       branch  switch  checkout  merge  rebase  cherry-pick  tag\n" +
    "  undoing        restore  reset  revert  stash  reflog\n  remotes        remote  fetch  pull  push\n  settings       config  check-ignore\n";

  function git(ctx, args) {
    var sub = args[0];
    if (!sub || sub === "help" || sub === "--help" || sub === "-h") return ok(HELP);
    if (sub === "--version" || sub === "version") return ok("git version 2.46.0 (CodeLab gitsim)\n");
    var fn = CMD[sub];
    if (!fn) return bad("git: '" + sub + "' is not a git command. See 'git --help'.\n", 1);
    try {
      if (OUTSIDE[sub]) return fn(ctx, args.slice(1));
      var h = findRepo(ctx.fs, ctx.cwd);
      if (sub === "config") return fn(ctx, args.slice(1), h);
      if (!h) return fatal("not a git repository (or any of the parent directories): .git");
      if (!h.root && NEEDS_WT[sub]) return fatal("this operation must be run in a work tree");
      return fn(ctx, args.slice(1), h);
    } catch (e) {
      if (API.strict) throw e;
      return bad("gitsim: internal error in `git " + sub + "`: " + (e && e.message) + "\n", 2);
    }
  }

  /* ============================================================
     TEST HELPERS — what a checkpoint can ask about a repository.
     The same object backs T (after the learner's commands) and
     T.before (after the lesson's setup, before the learner typed).
     ============================================================ */
  function commitInfo(repo, sha) {
    var c = commitObj(repo, sha);
    return c ? { sha: sha, short: short(sha), message: c.message, subject: subjectOf(c.message), parents: c.parents.slice(), author: c.author } : null;
  }
  function testApi(fsRoot, repoPath) {
    function H() { return repoAtPath(fsRoot, repoPath) || findRepo(fsRoot, repoPath); }
    function R() {
      var h = H();
      if (!h) throw new Error("There is no git repository at " + repoPath + " — did `git init` run?");
      return h;
    }
    var api = {
      isRepo: function () { return !!H(); },
      sha: function (rev) { var h = H(); return h ? resolveRev(h.repo, rev || "HEAD") : null; },
      log: function (rev) {
        var h = R(), s = resolveRev(h.repo, rev || "HEAD");
        return s ? walkLog(h.repo, [s], []).map(function (x) { return commitInfo(h.repo, x); }) : [];
      },
      count: function (rev) { return api.log(rev).length; },
      commit: function (rev) {
        var h = R(), s = resolveRev(h.repo, rev || "HEAD"), info = commitInfo(h.repo, s);
        if (info) info.files = contents(h.repo, commitMap(h.repo, s));
        return info;
      },
      branches: function () { return localBranches(R().repo); },
      branch: function () { return branchName(R().repo); },
      head: function () { return headRef(R().repo); },
      headDetached: function () { return !!R().repo.head.detached; },
      wt: function (p) { return wtRead(R(), p); },
      blobAt: function (where, p) {
        var h = R(), map = where === "index" ? h.repo.index : commitMap(h.repo, resolveRev(h.repo, where));
        return map[p] ? getBlob(h.repo, map[p]) : null;
      },
      staged: function () { return status(R()).staged.map(function (x) { return x.path; }); },
      unstaged: function () { return status(R()).unstaged.map(function (x) { return x.path; }); },
      untracked: function () { return status(R()).untracked; },
      conflicts: function () { return conflictPaths(R().repo).sort(); },
      clean: function () { var s = status(R()); return !s.staged.length && !s.unstaged.length && !s.conflicts.length; },
      merging: function () { return !!R().repo.merge; },
      rebasing: function () { var q = R().repo.seq; return !!(q && q.op === "rebase"); },
      inProgress: function () { var r = R().repo; return r.merge ? "merge" : r.seq ? r.seq.op : null; },
      stashList: function () { return R().repo.stash.map(function (e) { return { msg: e.msg }; }); },
      reflog: function (ref) {
        var repo = R().repo, name = !ref || ref === "HEAD" ? "HEAD" : refFor(repo, ref);
        return (repo.reflog[name] || []).slice().reverse().filter(function (e) { return e.to; })
          .map(function (e) { return { sha: e.to, msg: e.msg }; });
      },
      tags: function () { return keys(R().repo.refs).filter(function (r) { return r.indexOf("refs/tags/") === 0; }).map(function (r) { return r.slice(10); }).sort(); },
      remoteSha: function (name) { return R().repo.refs["refs/remotes/" + name] || null; },
      onRemote: function (branch, remote) {
        var h = R(), rc = h.repo.config.remote[remote || "origin"];
        var d = rc && remoteAt(fsRoot, h.root || h.gitPath, rc.url);
        return d ? d.repo.refs["refs/heads/" + branch] || null : null;
      },
      upstream: function (b) { var h = R(), u = upstreamOf(h.repo, b || branchName(h.repo)); return u ? u.name : null; },
      remotes: function () { var rc = R().repo.config.remote, m = {}; keys(rc).forEach(function (n) { m[n] = rc[n].url; }); return m; },
      reachable: function (sha) {
        var repo = R().repo;
        return keys(repo.refs).some(function (r) { return isAncestor(repo, sha, repo.refs[r]); });
      },
      reachableFromAnyBranch: function (sha) {
        var repo = R().repo;
        return localBranches(repo).some(function (b) { return isAncestor(repo, sha, repo.refs["refs/heads/" + b]); });
      },
      config: function (key) { return cfgGet(R(), fsRoot, key); },
      ignored: function (p) { return !!ignoredBy(R(), p); },
      tracked: function (p) { return R().repo.index[p] != null; },
      at: function (path) { return testApi(fsRoot, path); }
    };
    return api;
  }
  /* A deep copy of the whole filesystem, repositories included. */
  function snapshot(fsRoot) {
    var c = SH.cloneNode(fsRoot);
    c.gitClock = fsRoot.gitClock;
    if (fsRoot.gitGlobal) c.gitGlobal = copy(fsRoot.gitGlobal);
    if (fsRoot.gitNet) c.gitNet = fsRoot.gitNet;
    return c;
  }
  function extendT(T, fsRoot, before, repoPath) {
    var api = testApi(fsRoot, repoPath);
    keys(api).forEach(function (k) { T[k] = api[k]; });
    T.git = api;
    T.before = before ? testApi(before, repoPath) : null;
    /* Git prints plenty to stderr (rejections, hints, "Switched to…" in
       real git). T.said checks both streams; T.out stays stdout-only. */
    T.said = function (s) { return (T.out() + T.err()).indexOf(s) !== -1; };
    return T;
  }

  var API = {
    git: git, CMD: CMD, strict: false,
    testApi: testApi, extendT: extendT, snapshot: snapshot,
    findRepo: findRepo, repoAtPath: repoAtPath, resolveRev: resolveRev, status: status,
    mergeText: mergeText, parseIgnore: parseIgnore, hash: hash, short: short, fmtDate: fmtDate
  };
  if (SH && SH.COMMANDS) SH.COMMANDS.git = git;
  root.CODELAB = root.CODELAB || {};
  root.CODELAB.git = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
