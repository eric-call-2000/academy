/* ============================================================
   CodeLab — labs for concept lessons
   ------------------------------------------------------------
   A lab is a small interactive model a learner pokes at AFTER
   committing to a prediction (renderConcept enforces the order: the
   research on visualizations says watching teaches little, acting
   on one teaches a lot). Labs are never graded; the prediction is.

   Labs run AUTHOR code only, in the page — the counting functions a
   lesson ships in its params. Learner code never runs here; it stays
   in the sandboxed Worker. Each lab is:
     window.CODELAB.labs[name](host, params)
   and must stay cheap: validate.js runs every lab function at every
   size it declares and fails a lab that is slow.
   ============================================================ */
(function () {
  var C = window.CODELAB = window.CODELAB || {};

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function fmt(n) { return Math.round(n).toLocaleString("en-US"); }
  function code(src) {
    var pre = el("pre", "q-code cx-lab-code");
    var c = document.createElement("code");
    if (C.hl) c.innerHTML = C.hl(src, "js"); else c.textContent = src;
    pre.appendChild(c);
    return pre;
  }
  /* Author functions ship as source strings so the page shows exactly the
     code that produces the numbers. */
  function compile(src) { return (0, eval)("(" + src + ")"); }

  var LABS = {};

  /* doubling — { fns: [{ label, code }], sizes: [n, ...] }
     Pick a size; every function's step count at that size is shown as a
     bar, with the ratio to the previous size when that size is half. */
  LABS.doubling = function (host, params) {
    var fns = (params.fns || []).map(function (f) { return { label: f.label, code: f.code, fn: compile(f.code) }; });
    var sizes = params.sizes || [250, 500, 1000, 2000];
    var counts = fns.map(function (f) { return sizes.map(function (n) { return f.fn(n); }); });

    var box = el("div", "cx-lab");
    box.appendChild(el("div", "cx-lab-title", "Lab: count the steps"));
    fns.forEach(function (f) {
      box.appendChild(el("div", "cx-lab-label", f.label));
      box.appendChild(code(f.code));
    });
    box.appendChild(el("div", "cx-lab-hint", "Tap a size of n:"));
    var chips = el("div", "cx-chips");
    box.appendChild(chips);
    var out = el("div", "cx-bars");
    box.appendChild(out);

    function show(si) {
      Array.prototype.forEach.call(chips.children, function (b, i) { b.classList.toggle("on", i === si); });
      out.innerHTML = "";
      var max = Math.max.apply(null, counts.map(function (c) { return c[si]; }).concat([1]));
      fns.forEach(function (f, fi) {
        var v = counts[fi][si];
        var row = el("div", "cx-bar-row");
        var head = el("div", "cx-bar-head");
        head.appendChild(el("span", "cx-bar-name", f.label));
        var val = fmt(v) + " steps";
        if (si > 0 && sizes[si] === sizes[si - 1] * 2) {
          var r = v / Math.max(counts[fi][si - 1], 1);
          val += "  ·  ×" + (Math.round(r * 100) / 100) + " since n = " + fmt(sizes[si - 1]);
        }
        head.appendChild(el("span", "cx-bar-val", val));
        row.appendChild(head);
        var track = el("div", "cx-bar-track");
        var fill = el("div", "cx-bar-fill");
        fill.style.width = Math.max(0.5, v / max * 100) + "%";
        track.appendChild(fill);
        row.appendChild(track);
        out.appendChild(row);
      });
    }
    sizes.forEach(function (n, i) {
      var b = el("button", "cx-chip", "n = " + fmt(n));
      b.type = "button";
      b.onclick = function () { show(i); };
      chips.appendChild(b);
    });
    host.appendChild(box);
    show(0);
  };

  /* halving — { max }
     A hidden number from 1 to max. "Guess the middle" halves the range;
     "Guess the lowest" checks one number at a time. The guess counter is
     the point: about log2(max) against up to max. */
  LABS.halving = function (host, params) {
    var max = params.max || 1000000;
    var box = el("div", "cx-lab");
    box.appendChild(el("div", "cx-lab-title", "Lab: find the hidden number"));
    var range = el("div", "cx-lab-big");
    var status = el("div", "cx-lab-hint");
    box.appendChild(range);
    box.appendChild(status);
    var row = el("div", "cx-chips");
    var mid = el("button", "cx-chip on", "Guess the middle");
    var low = el("button", "cx-chip", "Guess the lowest");
    var auto = el("button", "cx-chip", "Finish with middles");
    var reset = el("button", "cx-chip", "New number");
    [mid, low, auto, reset].forEach(function (b) { b.type = "button"; row.appendChild(b); });
    box.appendChild(row);
    var log = el("div", "cx-lab-log");
    box.appendChild(log);

    var secret, lo, hi, guesses, done;
    function start() {
      secret = 1 + Math.floor(Math.random() * max);
      lo = 1; hi = max; guesses = 0; done = false;
      log.innerHTML = "";
      draw();
    }
    function draw() {
      range.textContent = done ? "Found " + fmt(secret) : "Somewhere in " + fmt(lo) + " – " + fmt(hi);
      status.textContent = guesses + (guesses === 1 ? " guess" : " guesses") +
        (done ? "" : "  ·  " + fmt(hi - lo + 1) + " numbers left");
      [mid, low, auto].forEach(function (b) { b.disabled = done; });
    }
    function guess(g) {
      if (done) return;
      guesses++;
      var line;
      if (g === secret) { done = true; line = fmt(g) + ": that's it"; }
      else if (g < secret) { lo = g + 1; line = fmt(g) + ": higher"; }
      else { hi = g - 1; line = fmt(g) + ": lower"; }
      var entry = el("div", "", "Guess " + guesses + " — " + line);
      log.insertBefore(entry, log.firstChild);
      while (log.children.length > 6) log.removeChild(log.lastChild);
      draw();
    }
    mid.onclick = function () { guess(Math.floor((lo + hi) / 2)); };
    low.onclick = function () { guess(lo); };
    auto.onclick = function () { var n = 0; while (!done && n++ < 64) guess(Math.floor((lo + hi) / 2)); };
    reset.onclick = start;
    host.appendChild(box);
    start();
  };

  /* buckets — { size, keys: [...], hashes: [{ label, code }] }
     A hash table with `size` buckets. Pick a hash function, tap keys to
     insert them (or insert them all), and watch where they land. The
     longest bucket is what a lookup in it has to compare against. */
  LABS.buckets = function (host, params) {
    var size = params.size || 8;
    var keys = params.keys || [];
    var hashes = (params.hashes || []).map(function (h) { return { label: h.label, code: h.code, fn: compile(h.code) }; });
    var box = el("div", "cx-lab");
    box.appendChild(el("div", "cx-lab-title", "Lab: a hash table with " + size + " buckets"));
    box.appendChild(el("div", "cx-lab-hint", "Hash function:"));
    var hashChips = el("div", "cx-chips");
    box.appendChild(hashChips);
    var codeHost = el("div", "");
    box.appendChild(codeHost);
    box.appendChild(el("div", "cx-lab-hint", "Tap keys to insert them:"));
    var keyChips = el("div", "cx-chips");
    box.appendChild(keyChips);
    var grid = el("div", "cx-buckets");
    box.appendChild(grid);
    var stat = el("div", "cx-lab-big");
    box.appendChild(stat);

    var hi = 0, inserted = [];
    function bucketOf(k) { return ((hashes[hi].fn(k) % size) + size) % size; }
    function draw() {
      Array.prototype.forEach.call(hashChips.children, function (b, i) { b.classList.toggle("on", i === hi); });
      codeHost.innerHTML = "";
      codeHost.appendChild(code(hashes[hi].code));
      Array.prototype.forEach.call(keyChips.children, function (b) {
        var k = b.getAttribute("data-key");
        if (k != null) b.classList.toggle("on", inserted.indexOf(k) !== -1);
      });
      grid.innerHTML = "";
      var rows = [];
      for (var i = 0; i < size; i++) rows.push([]);
      inserted.forEach(function (k) { rows[bucketOf(k)].push(k); });
      var longest = 0;
      rows.forEach(function (r, i) {
        longest = Math.max(longest, r.length);
        var row = el("div", "cx-bucket" + (r.length > 1 ? " crowded" : ""));
        row.appendChild(el("span", "cx-bucket-n", String(i)));
        row.appendChild(el("span", "cx-bucket-keys", r.length ? r.join(" → ") : "·"));
        grid.appendChild(row);
      });
      stat.textContent = inserted.length
        ? "Longest bucket: " + longest + (longest === 1 ? " key" : " keys") + ". A lookup there compares up to " + longest + "."
        : "Nothing inserted yet.";
    }
    hashes.forEach(function (h, i) {
      var b = el("button", "cx-chip", h.label);
      b.type = "button";
      b.onclick = function () { hi = i; draw(); };
      hashChips.appendChild(b);
    });
    keys.forEach(function (k) {
      var b = el("button", "cx-chip", k);
      b.type = "button";
      b.setAttribute("data-key", k);
      b.onclick = function () {
        var at = inserted.indexOf(k);
        if (at === -1) inserted.push(k); else inserted.splice(at, 1);
        draw();
      };
      keyChips.appendChild(b);
    });
    var all = el("button", "cx-chip", "Insert all");
    all.type = "button";
    all.onclick = function () { inserted = keys.slice(); draw(); };
    keyChips.appendChild(all);
    host.appendChild(box);
    draw();
  };

  /* calltree — { sizes: [3, 4, 5, 6], bigger: [10, 20, 30] }
     The calls fib(n) makes, drawn as an indented tree, with a switch that
     remembers results. With it on, a repeated call is a single remembered
     lookup instead of a whole subtree. Below the tree, call counts for
     bigger n, where the tree would no longer fit. */
  LABS.calltree = function (host, params) {
    var sizes = params.sizes || [3, 4, 5, 6];
    var bigger = params.bigger || [10, 20, 30];
    var box = el("div", "cx-lab");
    box.appendChild(el("div", "cx-lab-title", "Lab: the calls fib(n) makes"));
    box.appendChild(code("function fib(n) {\n  if (n < 2) { return n; }\n  return fib(n - 1) + fib(n - 2);\n}"));
    var chips = el("div", "cx-chips");
    box.appendChild(chips);
    var memoRow = el("div", "cx-chips");
    var memoBtn = el("button", "cx-chip", "Remember results: off");
    memoBtn.type = "button";
    memoRow.appendChild(memoBtn);
    box.appendChild(memoRow);
    var stat = el("div", "cx-lab-big");
    box.appendChild(stat);
    var tree = el("div", "cx-tree");
    box.appendChild(tree);
    var table = el("div", "cx-bars");
    box.appendChild(table);

    var si = sizes.length - 1, memo = false;
    function calls(n, remember) {
      var count = 0, seen = {};
      (function f(k) {
        count++;
        if (remember && seen[k]) return;
        if (k >= 2) { f(k - 1); f(k - 2); }
        seen[k] = true;
      })(n);
      return count;
    }
    function draw() {
      Array.prototype.forEach.call(chips.children, function (b, i) { b.classList.toggle("on", i === si); });
      memoBtn.textContent = "Remember results: " + (memo ? "on" : "off");
      memoBtn.classList.toggle("on", memo);
      tree.innerHTML = "";
      var seen = {}, count = 0;
      (function f(k, depth) {
        count++;
        var line = el("div", "cx-tree-line");
        line.style.paddingLeft = (depth * 14) + "px";
        if (memo && seen[k]) {
          line.textContent = "fib(" + k + ")  remembered";
          line.classList.add("remembered");
          tree.appendChild(line);
          return;
        }
        line.textContent = "fib(" + k + ")";
        tree.appendChild(line);
        if (k >= 2) { f(k - 1, depth + 1); f(k - 2, depth + 1); }
        seen[k] = true;
      })(sizes[si], 0);
      stat.textContent = "fib(" + sizes[si] + ") makes " + count + (count === 1 ? " call" : " calls");
      table.innerHTML = "";
      bigger.forEach(function (n) {
        var row = el("div", "cx-bar-head");
        row.appendChild(el("span", "cx-bar-name", "fib(" + n + ")"));
        row.appendChild(el("span", "cx-bar-val", fmt(calls(n, memo)) + " calls"));
        table.appendChild(row);
      });
    }
    sizes.forEach(function (n, i) {
      var b = el("button", "cx-chip", "n = " + n);
      b.type = "button";
      b.onclick = function () { si = i; draw(); };
      chips.appendChild(b);
    });
    memoBtn.onclick = function () { memo = !memo; draw(); };
    host.appendChild(box);
    draw();
  };

  /* grid — { grid: ["....", ".#..", ...], start: [r, c], goal: [r, c] }
     Breadth-first or depth-first search on a grid, one visit at a time.
     Each cell shows the order it was visited in; when the goal is reached
     the lab reports the length of the path that search found. Neighbours
     are tried right, down, left, up. */
  LABS.grid = function (host, params) {
    var G = params.grid, start = params.start, goal = params.goal;
    var rows = G.length, cols = G[0].length;
    var DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    var box = el("div", "cx-lab");
    box.appendChild(el("div", "cx-lab-title", "Lab: search a grid"));
    var modes = el("div", "cx-chips");
    box.appendChild(modes);
    var board = el("div", "cx-grid");
    board.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)";
    box.appendChild(board);
    var stat = el("div", "cx-lab-big");
    box.appendChild(stat);
    var acts = el("div", "cx-chips");
    box.appendChild(acts);

    var mode = "BFS", order, frontier, parent, done, found;
    function key(r, c) { return r + "," + c; }
    function reset() {
      order = {}; parent = {}; done = false; found = false;
      frontier = [[start[0], start[1]]];
      parent[key(start[0], start[1])] = null;
      draw();
    }
    function step() {
      if (done) return;
      if (!frontier.length) { done = true; draw(); return; }
      var cell = mode === "BFS" ? frontier.shift() : frontier.pop();
      var k = key(cell[0], cell[1]);
      if (order[k] != null) { step(); return; }
      order[k] = Object.keys(order).length + 1;
      if (cell[0] === goal[0] && cell[1] === goal[1]) { done = true; found = true; draw(); return; }
      var next = [];
      DIRS.forEach(function (d) {
        var r = cell[0] + d[0], c = cell[1] + d[1], nk = key(r, c);
        if (r < 0 || c < 0 || r >= rows || c >= cols || G[r][c] === "#" || order[nk] != null) return;
        if (mode === "BFS" && parent[nk] !== undefined) return;
        if (parent[nk] === undefined || mode === "DFS") parent[nk] = k;
        next.push([r, c]);
      });
      if (mode === "DFS") next.reverse();
      next.forEach(function (n) { frontier.push(n); });
      draw();
    }
    function pathLength() {
      var n = 0, k = key(goal[0], goal[1]);
      while (parent[k]) { k = parent[k]; n++; }
      return n;
    }
    function draw() {
      Array.prototype.forEach.call(modes.children, function (b) { b.classList.toggle("on", b.textContent.indexOf(mode) === 0); });
      board.innerHTML = "";
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
        var k = key(r, c);
        var cell = el("div", "cx-cell-box");
        if (G[r][c] === "#") cell.classList.add("wall");
        else if (order[k] != null) { cell.classList.add("seen"); cell.textContent = String(order[k]); }
        if (r === start[0] && c === start[1] && order[k] == null) cell.textContent = "S";
        if (r === goal[0] && c === goal[1]) { cell.classList.add("goal"); if (order[k] == null) cell.textContent = "G"; }
        board.appendChild(cell);
      }
      var visited = Object.keys(order).length;
      stat.textContent = found
        ? "Reached G after visiting " + visited + " cells. The path " + mode + " found is " + pathLength() + " steps."
        : done ? "G can't be reached." : "Visited " + visited + (visited === 1 ? " cell" : " cells");
    }
    ["BFS (queue)", "DFS (stack)"].forEach(function (label) {
      var b = el("button", "cx-chip", label);
      b.type = "button";
      b.onclick = function () { mode = label.slice(0, 3); reset(); };
      modes.appendChild(b);
    });
    var stepBtn = el("button", "cx-chip", "Visit next");
    stepBtn.type = "button";
    stepBtn.onclick = step;
    var runBtn = el("button", "cx-chip", "Run to the end");
    runBtn.type = "button";
    runBtn.onclick = function () { var guard = rows * cols * 4; while (!done && guard-- > 0) step(); };
    var resetBtn = el("button", "cx-chip", "Reset");
    resetBtn.type = "button";
    resetBtn.onclick = reset;
    [stepBtn, runBtn, resetBtn].forEach(function (b) { acts.appendChild(b); });
    host.appendChild(box);
    reset();
  };

  /* waterfall — { columns, items: [{ label, start, rtt, kind }], caption }
     A timeline in round-trip units. Each item is a bar from column `start`
     to `start + rtt`; the total round trips is the furthest-right column any
     bar reaches. "Reveal one more" steps the trips across so a learner sees
     the request build up after committing to a count. `kind` (setup|request)
     just colours the bar. Used for the single-request critical path (U3) and
     for parallel resources across connections (U7). */
  LABS.waterfall = function (host, params) {
    var items = params.items || [];
    var columns = params.columns || items.reduce(function (m, it) { return Math.max(m, it.start + it.rtt); }, 1);
    var total = items.reduce(function (m, it) { return Math.max(m, it.start + it.rtt); }, 0);
    var box = el("div", "cx-lab");
    box.appendChild(el("div", "cx-lab-title", "Lab: round trips on the timeline"));
    if (params.caption) box.appendChild(el("div", "cx-lab-hint", params.caption));

    var head = el("div", "cx-wf-head");
    head.style.gridTemplateColumns = "120px repeat(" + columns + ", 1fr)";
    head.appendChild(el("div", "cx-wf-corner", ""));
    for (var c = 0; c < columns; c++) head.appendChild(el("div", "cx-wf-col", "RT " + (c + 1)));
    box.appendChild(head);

    var rows = el("div", "cx-wf-rows");
    box.appendChild(rows);
    var stat = el("div", "cx-lab-big");
    box.appendChild(stat);
    var actions = el("div", "cx-chips");
    var more = el("button", "cx-chip", "Reveal one more");
    var all = el("button", "cx-chip", "Reveal all");
    var reset = el("button", "cx-chip", "Reset");
    [more, all, reset].forEach(function (b) { b.type = "button"; actions.appendChild(b); });
    box.appendChild(actions);

    var shown = 0;
    function draw() {
      rows.innerHTML = "";
      items.forEach(function (it) {
        var row = el("div", "cx-wf-row");
        row.style.gridTemplateColumns = "120px repeat(" + columns + ", 1fr)";
        row.appendChild(el("div", "cx-wf-label", it.label));
        for (var c = 0; c < columns; c++) {
          var cell = el("div", "cx-wf-cell");
          if (c >= it.start && c < it.start + it.rtt && c < shown) {
            cell.classList.add("fill", it.kind === "setup" ? "setup" : "request");
          }
          row.appendChild(cell);
        }
        rows.appendChild(row);
      });
      var done = Math.min(shown, total);
      stat.textContent = shown >= total
        ? "Total: " + total + (total === 1 ? " round trip" : " round trips") + " on the critical path."
        : done + " of " + total + " round trips revealed";
      more.disabled = shown >= total;
      all.disabled = shown >= total;
    }
    more.onclick = function () { shown = Math.min(shown + 1, total); draw(); };
    all.onclick = function () { shown = total; draw(); };
    reset.onclick = function () { shown = 0; draw(); };
    host.appendChild(box);
    draw();
  };

  C.labs = LABS;
})();
