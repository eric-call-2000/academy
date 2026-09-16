/* ============================================================
   CodeLab — concept lessons: grading and schema (DOM-free)
   ------------------------------------------------------------
   A concept lesson teaches theory without a code editor: a run of
   short screens, each a little reading and one question the learner
   commits to before the explanation arrives. app.js draws them
   (renderConcept); this file decides what counts as right, and what
   counts as a well-formed lesson. It takes no DOM and no profile so
   tools/validate.js can require it and tools/test-concept.js can pin
   every rule. The contract lives at the top of test-concept.js.

   Evidence vs claims: predict, pick, order, trace and a lab's
   prediction are graded against a key, so they are EVIDENCE. An
   explain is graded by the learner against a rubric, so it is a
   CLAIM, and it is never mixed into the same number (the Recall rule).
   ============================================================ */
(function (root) {
  var TYPES = ["predict", "pick", "order", "trace", "lab", "explain"];
  var LABS = ["doubling", "halving", "buckets", "calltree", "grid"];
  var READ_WORDS_MAX = 180;
  var WORDS_PER_MIN = 200;

  /* ---------- typed answers ----------
     Lenient about spelling that carries no meaning (spacing, backticks,
     a trailing full stop, thousands separators, case) and strict about
     everything else. Big-O answers get one extra pass so O(n²), O(n^2)
     and O( n^2 ) are the same answer, and n·m, n*m and n × m meet. */
  function normalize(s, exact) {
    var t = String(s == null ? "" : s)
      .replace(/`/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/[.;]+$/, "")
      .trim();
    if (/^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(t)) t = t.replace(/,/g, "");
    if (/^o\s*\(/i.test(t)) {
      t = t.replace(/²/g, "^2").replace(/³/g, "^3").replace(/ⁿ/g, "^n")
        .replace(/[·×]/g, "*").replace(/\s+/g, "");
    }
    return exact ? t : t.toLowerCase();
  }

  function gradePredict(ask, typed) {
    var got = normalize(typed, ask.exact);
    if (!got) return false;
    var keys = [ask.answer].concat(ask.accept || []);
    return keys.some(function (k) { return normalize(k, ask.exact) === got; });
  }

  function gradePick(ask, index) {
    return typeof index === "number" && index === ask.answer;
  }

  /* texts: the lines the learner built, in order. Identical lines are
     interchangeable because they are compared as text. A group is a
     contiguous run of line indexes whose order doesn't matter (two
     independent declarations), compared as a multiset. */
  function gradeOrder(ask, texts) {
    var lines = ask.lines || [];
    texts = texts || [];
    var groupAt = {};
    (ask.groups || []).forEach(function (g) {
      var lo = Math.min.apply(null, g), hi = Math.max.apply(null, g);
      for (var i = lo; i <= hi; i++) groupAt[i] = [lo, hi];
    });
    for (var p = 0; p < lines.length; p++) {
      if (p >= texts.length) return { ok: false, firstWrong: p };
      var grp = groupAt[p];
      if (grp && p === grp[0]) {
        var want = lines.slice(grp[0], grp[1] + 1).slice().sort();
        var got = texts.slice(grp[0], grp[1] + 1).slice().sort();
        if (JSON.stringify(want) !== JSON.stringify(got)) return { ok: false, firstWrong: p };
        p = grp[1];
        continue;
      }
      if (texts[p] !== lines[p]) return { ok: false, firstWrong: p };
    }
    if (texts.length > lines.length) return { ok: false, firstWrong: lines.length };
    return { ok: true, firstWrong: null };
  }

  /* cells: what the learner typed, row by row. Columns before `given`
     are shown filled in and not graded. */
  function gradeTrace(ask, cells) {
    var given = ask.given || 0;
    for (var r = 0; r < ask.rows.length; r++) {
      for (var c = given; c < ask.columns.length; c++) {
        var typed = cells && cells[r] ? cells[r][c] : "";
        var got = normalize(typed, true);
        if (!got || got !== normalize(String(ask.rows[r][c]), true)) return { ok: false, firstWrong: [r, c] };
      }
    }
    return { ok: true, firstWrong: null };
  }

  /* The single printed form a run-verified answer is compared against.
     Node and Chrome print arrays differently ([ 1, 2 ] vs (2) [1, 2]), so
     lessons never depend on either: strings print raw, other primitives
     through String, objects and arrays as JSON. Briefs that ask "what
     does this print" use code whose output is the same in both. */
  function formatLog(args) {
    return Array.prototype.map.call(args, function (a) {
      if (typeof a === "string") return a;
      if (a !== null && typeof a === "object") {
        try { return JSON.stringify(a); } catch (e) { return String(a); }
      }
      return String(a);
    }).join(" ");
  }

  /* ---------- time model ---------- */
  function words(s) {
    var t = String(s == null ? "" : s).trim();
    return t ? t.split(/\s+/).length : 0;
  }
  function askWords(ask) {
    if (!ask) return 0;
    var n = words(ask.q) + words(ask.code) + words(ask.model);
    (ask.choices || []).forEach(function (c) { n += words(c); });
    if (typeof ask.why === "string") n += words(ask.why);
    else (ask.why || []).forEach(function (w) { n += words(w); });
    (ask.rubric || []).forEach(function (w) { n += words(w); });
    (ask.lines || []).forEach(function (w) { n += words(w); });
    if (ask.predict) n += askWords(ask.predict);
    return n;
  }
  function modelFloor(lesson) {
    var w = 0, mins = 0;
    (lesson.screens || []).forEach(function (s) {
      w += words(s.read) + askWords(s.ask);
      if (!s.ask) return;
      if (s.ask.type === "explain") mins += 3;
      else if (s.ask.type === "lab") mins += 3;
      else mins += 1.5;
    });
    return w / WORDS_PER_MIN + mins;
  }

  function isEvidence(ask) { return !!ask && ask.type !== "explain"; }
  function transferIndexes(lesson) {
    var out = [];
    (lesson.screens || []).forEach(function (s, i) { if (s.ask && s.ask.transfer) out.push(i); });
    return out;
  }

  /* ---------- schema ---------- */
  function nonEmpty(s) { return typeof s === "string" && s.trim().length > 0; }

  function checkAsk(ask, where, out, inLab) {
    if (!ask || TYPES.indexOf(ask.type) === -1) { out.push(where + ": unknown ask type " + JSON.stringify(ask && ask.type)); return; }
    var t = ask.type;
    if (t !== "lab" && t !== "explain" && !nonEmpty(ask.q)) out.push(where + ": " + t + " needs a q");
    if (ask.transfer && (t === "explain" || t === "lab"))
      out.push(where + ": a transfer ask must be predict, pick, order or trace (" + t + " can't be tested out)");
    if (ask.run && t !== "predict" && t !== "pick" && t !== "trace")
      out.push(where + ": run is only for predict, pick and trace");
    if (ask.run && t !== "predict" && !nonEmpty(ask.check))
      out.push(where + ": run on a " + t + " needs check code that prints the answer");
    if (ask.run && t === "predict" && !nonEmpty(ask.check) && !nonEmpty(ask.code))
      out.push(where + ": run on a predict needs code or check");

    if (t === "predict") {
      if (!nonEmpty(String(ask.answer == null ? "" : ask.answer))) out.push(where + ": predict needs an answer");
      if (!nonEmpty(ask.why)) out.push(where + ": predict needs a why");
    }
    if (t === "pick") {
      var ch = ask.choices || [];
      if (ch.length < 3 || ch.length > 4) out.push(where + ": pick needs 3 or 4 choices (has " + ch.length + ")");
      if (typeof ask.answer !== "number" || !ch[ask.answer]) out.push(where + ": pick answer is not a choice index");
      var why = ask.why || [];
      if (!Array.isArray(why) || why.length !== ch.length) out.push(where + ": pick needs a why per choice");
      else ch.forEach(function (_, i) {
        /* A wrong choice's why is its refutation; the answer's why is what
           a learner reads after getting it right. Both are required. */
        if (!nonEmpty(why[i])) out.push(where + ": pick choice " + i + " has no why");
      });
    }
    if (t === "order") {
      var lines = ask.lines || [];
      if (lines.length < 3) out.push(where + ": order needs at least 3 lines");
      (ask.distractors || []).forEach(function (d) {
        if (lines.indexOf(d) !== -1) out.push(where + ": distractor " + JSON.stringify(d) + " is identical to a real line");
      });
      (ask.groups || []).forEach(function (g) {
        var sorted = g.slice().sort(function (a, b) { return a - b; });
        var contiguous = sorted.every(function (v, i) { return i === 0 || v === sorted[i - 1] + 1; });
        var inRange = sorted.every(function (v) { return v >= 0 && v < lines.length; });
        if (g.length < 2 || !contiguous || !inRange) out.push(where + ": order group " + JSON.stringify(g) + " must be 2+ contiguous line indexes");
      });
      if (!nonEmpty(ask.why)) out.push(where + ": order needs a why");
    }
    if (t === "trace") {
      var cols = ask.columns || [];
      if (!cols.length) out.push(where + ": trace needs columns");
      if (!nonEmpty(ask.code)) out.push(where + ": trace needs code");
      if (!(ask.rows || []).length) out.push(where + ": trace needs rows");
      (ask.rows || []).forEach(function (r, i) {
        if (!Array.isArray(r) || r.length !== cols.length) out.push(where + ": trace row " + i + " has " + (r && r.length) + " cells, needs " + cols.length);
      });
      if ((ask.given || 0) >= cols.length) out.push(where + ": trace gives every column away");
      if (!nonEmpty(ask.why)) out.push(where + ": trace needs a why");
    }
    if (t === "lab") {
      if (inLab) out.push(where + ": a lab can't hold a lab");
      if (LABS.indexOf(ask.lab) === -1) out.push(where + ": unknown lab " + JSON.stringify(ask.lab) + " (known: " + LABS.join(", ") + ")");
      if (!ask.predict || (ask.predict.type !== "predict" && ask.predict.type !== "pick"))
        out.push(where + ": a lab needs a predict or pick ask as its prediction");
      else checkAsk(ask.predict, where + " (lab prediction)", out, true);
    }
    if (t === "explain") {
      if (!nonEmpty(ask.q)) out.push(where + ": explain needs a q");
      if (!nonEmpty(ask.model)) out.push(where + ": explain needs a model answer");
      if (!(ask.rubric || []).length || ask.rubric.length < 2 || !ask.rubric.every(nonEmpty))
        out.push(where + ": explain needs a rubric of at least 2 lines");
    }
  }

  function checkLesson(lesson) {
    var out = [];
    var id = lesson.id || "(no id)";
    if (lesson.steps || lesson.files || lesson.solution) out.push(id + ": concept lessons carry no steps, files or solution");
    var screens = lesson.screens || [];
    if (!screens.length) { out.push(id + ": no screens"); return out; }
    var bare = 0;
    screens.forEach(function (s, i) {
      var where = id + " screen " + (i + 1);
      if (!s || (!nonEmpty(s.read) && !s.ask)) { out.push(where + ": empty screen"); return; }
      if (words(s.read) > READ_WORDS_MAX) out.push(where + ": read is " + words(s.read) + " words (max " + READ_WORDS_MAX + " words)");
      if (s.ask) { bare = 0; checkAsk(s.ask, where, out, false); }
      else if (++bare >= 2) out.push(where + ": two screens in a row without a question");
    });
    if (!screens[screens.length - 1].ask) out.push(id + ": the last screen must ask something");
    if (transferIndexes(lesson).length < 2) out.push(id + ": needs at least 2 transfer asks for Test out (has " + transferIndexes(lesson).length + ")");
    if (!screens.some(function (s) { return isEvidence(s.ask); })) out.push(id + ": needs at least one graded ask");
    var floor = modelFloor(lesson);
    if (typeof lesson.mins !== "number") out.push(id + ": concept lessons need mins");
    else if (lesson.mins < Math.floor(floor) || lesson.mins > Math.ceil(floor * 2))
      out.push(id + ": mins " + lesson.mins + " is outside the honest range " + Math.floor(floor) + "–" + Math.ceil(floor * 2) + " (modelled from words and questions)");
    return out;
  }

  var API = {
    TYPES: TYPES, LABS: LABS, READ_WORDS_MAX: READ_WORDS_MAX,
    normalize: normalize, gradePredict: gradePredict, gradePick: gradePick,
    gradeOrder: gradeOrder, gradeTrace: gradeTrace, formatLog: formatLog,
    words: words, modelFloor: modelFloor, isEvidence: isEvidence,
    transferIndexes: transferIndexes, checkLesson: checkLesson
  };

  root.CODELAB = root.CODELAB || {};
  root.CODELAB.concept = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
