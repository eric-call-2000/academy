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

  C.labs = LABS;
})();
