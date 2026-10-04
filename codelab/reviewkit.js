/* ============================================================
   CodeLab — review lessons: the diff, the key, and the grading
   (DOM-free)
   ------------------------------------------------------------
   A review lesson hands the learner someone else's change — two
   versions of some files — and asks what is wrong with it. There
   is no editor. The learner taps lines, files a comment with a
   category and a severity, and ends with a verdict. app.js draws
   it (renderCodeReview); this file decides what the change looks like
   as a diff, what counts as finding a problem, and what counts as
   a well-formed lesson. It takes no DOM and no profile, so
   tools/validate.js can require it and tools/test-reviewkit.js can
   pin every rule. The contract lives at the top of that file.

   Named reviewkit, not review: review.js is Recall's scheduler.

   Evidence vs claims (the Recall rule again): where a comment sits,
   its category, its severity and the verdict are graded against
   the key, so they are EVIDENCE. What the comment SAYS is checked
   by the learner against a rubric afterwards, so it is a CLAIM and
   never enters the pass/fail result.
   ============================================================ */
(function (root) {
  var CATEGORIES = ["bug", "security", "design", "tests", "readability", "nit"];
  var CATEGORY_LABELS = {
    bug: "Bug", security: "Security", design: "Design", tests: "Tests",
    readability: "Naming / readability", nit: "Nit"
  };
  var SEVERITIES = ["blocking", "nonblocking"];
  var VERDICTS = ["approve", "comment", "request"];
  var VERDICT_LABELS = { approve: "Approve", comment: "Comment", request: "Request changes" };
  /* A comment one line outside a finding's range still found it: flagging
     line 13 for a bug on 14–16 is pointing at the right thing. */
  var SLACK = 1;
  /* What a false alarm costs. A blocking comment on code that is fine is
     what slows a real team down, so it costs double. */
  var COST = { blocking: 2, nonblocking: 1 };
  var MAX_FALSE = 1, MAX_FALSE_PROJECT = 0;
  /* Reading speed the minutes model assumes: SmartBear/Cisco found defect
     discovery falls off above ~500 lines an hour, so ~8 lines a minute is
     a careful pace, plus two minutes to read the brief. */
  var LINES_PER_MIN = 8;

  function lines(text) {
    var t = String(text == null ? "" : text);
    if (t === "") return [];
    if (t.charAt(t.length - 1) === "\n") t = t.slice(0, -1);
    return t.split("\n");
  }

  /* ---------- the diff ----------
     A plain LCS line diff. Lessons are small (well under 200 changed
     lines, by design), so the O(n·m) table is a few thousand cells and
     the readable algorithm wins over Myers. Ties prefer deleting before
     adding, which is the order every diff tool shows a replaced line. */
  function diffLines(baseText, headText) {
    var a = lines(baseText), b = lines(headText);
    var n = a.length, m = b.length, i, j;
    var L = [];
    for (i = 0; i <= n; i++) { L.push(new Array(m + 1)); L[i][m] = 0; }
    for (j = 0; j <= m; j++) L[n][j] = 0;
    for (i = n - 1; i >= 0; i--) {
      for (j = m - 1; j >= 0; j--) {
        L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
      }
    }
    var rows = [];
    i = 0; j = 0;
    while (i < n || j < m) {
      if (i < n && j < m && a[i] === b[j]) {
        rows.push({ type: "ctx", base: i + 1, head: j + 1, text: a[i] });
        i++; j++;
      } else if (i < n && (j >= m || L[i + 1][j] >= L[i][j + 1])) {
        rows.push({ type: "del", base: i + 1, head: null, text: a[i] });
        i++;
      } else {
        rows.push({ type: "add", base: null, head: j + 1, text: b[j] });
        j++;
      }
    }
    return rows;
  }

  /* The files a lesson touches, in the order the diff shows them: head's
     order, then any file the change deletes. */
  function fileNames(lesson) {
    var base = lesson.base || {}, head = lesson.head || {};
    var out = Object.keys(head);
    Object.keys(base).forEach(function (f) { if (out.indexOf(f) === -1) out.push(f); });
    return out;
  }

  function lessonDiff(lesson) {
    var base = lesson.base || {}, head = lesson.head || {};
    return fileNames(lesson).map(function (f) {
      var rows = diffLines(base[f], head[f]);
      /* "unchanged": a file shown for context. Some problems live in the
         code a change should have touched and didn't. */
      var status = !(f in base) ? "added" : !(f in head) ? "deleted" : base[f] === head[f] ? "unchanged" : "modified";
      return { file: f, status: status, rows: rows };
    });
  }

  /* A comment is anchored to one row: { file, side, line }. Context and
     added rows anchor on the head side, deleted rows on the base side,
     which is how a finding names its lines too. */
  function anchorOf(file, row) {
    return row.type === "del"
      ? { file: file, side: "base", line: row.base }
      : { file: file, side: "head", line: row.head };
  }
  function allAnchors(lesson) {
    var out = [];
    lessonDiff(lesson).forEach(function (fd) {
      fd.rows.forEach(function (r) {
        var a = anchorOf(fd.file, r); a.type = r.type; out.push(a);
      });
    });
    return out;
  }
  function rowAt(lesson, file, side, line) {
    var fd = lessonDiff(lesson).filter(function (d) { return d.file === file; })[0];
    if (!fd) return null;
    for (var i = 0; i < fd.rows.length; i++) {
      var r = fd.rows[i];
      if (side === "base" ? (r.type === "del" && r.base === line) : (r.type !== "del" && r.head === line)) return r;
    }
    return null;
  }

  function sideOf(x) { return x.side || "head"; }
  function inRange(c, item, slack) {
    if (c.file !== item.file || sideOf(c) !== sideOf(item)) return false;
    return c.line >= item.lines[0] - slack && c.line <= item.lines[1] + slack;
  }
  function categoryFits(f, cat) {
    return f.category === cat || (f.alsoOk || []).indexOf(cat) !== -1;
  }
  function verdictFits(lesson, v) {
    if (lesson.verdict === "approve") return v === "approve" || v === "comment";
    return v === lesson.verdict;
  }
  function maxFalse(lesson) {
    if (lesson.maxFalse != null) return lesson.maxFalse;
    return lesson.project ? MAX_FALSE_PROJECT : MAX_FALSE;
  }
  /* What gates the lesson: every blocking finding, plus any non-blocking
     one the key names in mustFind (an "approve" lesson is only worth
     doing if approving is not the whole answer). */
  function gating(lesson) {
    var must = lesson.mustFind || [];
    return (lesson.findings || []).filter(function (f) {
      return f.severity === "blocking" || must.indexOf(f.id) !== -1;
    });
  }

  /* ---------- grading ----------
     review = { comments: [{ file, side, line, category, severity }], verdict }
     Each comment is matched to the first finding whose range it lands in.
     Right place and right category finds it; right place, wrong category
     is a near miss (not found, but not a false alarm either — the learner
     was looking at the right thing). A comment that lands on no finding
     is a false alarm, and if it lands on a decoy the result says which,
     so the reveal can explain why that line was fine. Several comments
     on one finding are fine: only the first is needed. */
  function grade(lesson, review) {
    var findings = lesson.findings || [], decoys = lesson.decoys || [];
    var comments = (review && review.comments) || [];
    var found = {}, near = {}, severityRight = {};
    var falseAlarms = [], cost = 0;
    var perComment = [];    // per comment: "found" | "near" | "false"
    comments.forEach(function (c, ci) {
      var hit = null, nearHit = null;
      for (var k = 0; k < findings.length; k++) {
        var f = findings[k];
        if (!inRange(c, f, SLACK)) continue;
        if (categoryFits(f, c.category)) { hit = f; break; }
        if (!nearHit) nearHit = f;
      }
      if (hit) {
        if (found[hit.id] == null) { found[hit.id] = ci; severityRight[hit.id] = c.severity === hit.severity; }
        perComment.push("found");
        return;
      }
      if (nearHit) { if (near[nearHit.id] == null) near[nearHit.id] = ci; perComment.push("near"); return; }
      perComment.push("false");
      var decoy = null;
      for (var d = 0; d < decoys.length; d++) if (inRange(c, decoys[d], 0)) { decoy = d; break; }
      var w = COST[c.severity] || COST.blocking;
      cost += w;
      falseAlarms.push({ comment: ci, decoy: decoy, cost: w });
    });
    var gate = gating(lesson);
    var missedGate = gate.filter(function (f) { return found[f.id] == null; }).map(function (f) { return f.id; });
    var verdictRight = verdictFits(lesson, review && review.verdict);
    var limit = maxFalse(lesson);
    return {
      found: Object.keys(found),
      missed: findings.filter(function (f) { return found[f.id] == null; }).map(function (f) { return f.id; }),
      nearMiss: Object.keys(near).filter(function (id) { return found[id] == null; }),
      missedGating: missedGate,
      severityWrong: Object.keys(severityRight).filter(function (id) { return !severityRight[id]; }),
      falseAlarms: falseAlarms,
      falseCost: cost,
      perComment: perComment,
      maxFalse: limit,
      verdictRight: verdictRight,
      pass: !missedGate.length && verdictRight && cost <= limit
    };
  }

  /* The key's own review: one comment per finding at its first line. A
     lesson whose key cannot pass itself is broken. */
  function keyReview(lesson) {
    return {
      comments: (lesson.findings || []).map(function (f) {
        return { file: f.file, side: sideOf(f), line: f.lines[0], category: f.category, severity: f.severity };
      }),
      verdict: lesson.verdict
    };
  }

  /* A reviewer who flags everything: one comment on every row of the
     diff, all in one category. If any category lets that pass, the
     lesson rewards volume, not reading. Severity is non-blocking, the
     cheapest a false alarm can be. */
  function spamReviews(lesson) {
    var anchors = allAnchors(lesson);
    return CATEGORIES.map(function (cat) {
      return {
        category: cat,
        review: {
          comments: anchors.map(function (a) {
            return { file: a.file, side: a.side, line: a.line, category: cat, severity: "nonblocking" };
          }),
          verdict: lesson.verdict
        }
      };
    });
  }

  function changedLineCount(lesson) {
    var n = 0;
    lessonDiff(lesson).forEach(function (fd) {
      fd.rows.forEach(function (r) { if (r.type !== "ctx") n++; });
    });
    return n;
  }
  /* Minutes floor: reading the change at a careful pace, plus the brief
     and the verdict. Context lines are read too, at half weight. */
  function minsFloor(lesson) {
    var changed = 0, ctx = 0;
    lessonDiff(lesson).forEach(function (fd) {
      fd.rows.forEach(function (r) { if (r.type === "ctx") ctx++; else changed++; });
    });
    return Math.ceil((changed + ctx / 2) / LINES_PER_MIN + 2);
  }

  /* Is this finding on a line the change did not touch? */
  function onContext(lesson, f) {
    if (sideOf(f) === "base") return false;
    for (var l = f.lines[0]; l <= f.lines[1]; l++) {
      var r = rowAt(lesson, f.file, "head", l);
      if (r && r.type !== "ctx") return false;
    }
    return true;
  }

  /* ---------- schema ----------
     Returns a list of problems (strings); empty means well-formed. The
     validator also runs the self-tests below on every lesson. */
  function checkLesson(l) {
    var p = [], id = l.id || "?";
    function bad(msg) { p.push(id + ": " + msg); }
    if (l.kind !== "review") bad('kind must be "review"');
    if (!l.title) bad("no title");
    if (!l.brief) bad("no brief — say what the change is for, from the author's side");
    if (!l.base || typeof l.base !== "object") bad("no base files");
    if (!l.head || typeof l.head !== "object") bad("no head files");
    if (!l.base || !l.head) return p;
    var files = fileNames(l);
    if (!files.length) bad("the change touches no files");
    if (!changedLineCount(l)) bad("base and head are identical — there is no change to review");
    if (VERDICTS.indexOf(l.verdict) === -1) bad("verdict must be one of " + VERDICTS.join(", "));
    var findings = l.findings || [], decoys = l.decoys || [];
    var ids = {};
    function checkRange(x, what) {
      var side = sideOf(x);
      if (side !== "head" && side !== "base") { bad(what + ": side must be head or base"); return false; }
      if (files.indexOf(x.file) === -1) { bad(what + ": file " + x.file + " is not in the change"); return false; }
      if (!Array.isArray(x.lines) || x.lines.length !== 2 || !(x.lines[0] >= 1) || x.lines[1] < x.lines[0]) {
        bad(what + ": lines must be [first, last] with first ≥ 1"); return false;
      }
      for (var ln = x.lines[0]; ln <= x.lines[1]; ln++) {
        if (!rowAt(l, x.file, side, ln)) {
          bad(what + ": " + x.file + " has no " + side + " line " + ln + " in the diff" +
            (side === "head" ? "" : " (base-side ranges must be deleted lines)"));
          return false;
        }
      }
      return true;
    }
    findings.forEach(function (f, i) {
      var what = "finding " + (f.id || "#" + (i + 1));
      if (!f.id) bad(what + ": no id");
      else if (ids[f.id]) bad(what + ": duplicate id");
      ids[f.id] = true;
      if (CATEGORIES.indexOf(f.category) === -1) bad(what + ": category must be one of " + CATEGORIES.join(", "));
      (f.alsoOk || []).forEach(function (c) { if (CATEGORIES.indexOf(c) === -1) bad(what + ": alsoOk has unknown category " + c); });
      if (SEVERITIES.indexOf(f.severity) === -1) bad(what + ": severity must be blocking or nonblocking");
      if (!f.why) bad(what + ": no why — the reveal has nothing to say");
      checkRange(f, what);
    });
    decoys.forEach(function (d, i) {
      var what = "decoy #" + (i + 1);
      if (!d.why) bad(what + ": no why — say why this line is fine");
      if (!checkRange(d, what)) return;
      findings.forEach(function (f) {
        if (f.lines && inRange({ file: d.file, side: sideOf(d), line: d.lines[0] }, f, SLACK) ||
            f.lines && inRange({ file: d.file, side: sideOf(d), line: d.lines[1] }, f, SLACK))
          bad(what + ": sits within a line of finding " + f.id + ", so a comment on it is ambiguous");
      });
    });
    (l.mustFind || []).forEach(function (mid) { if (!ids[mid]) bad("mustFind names unknown finding " + mid); });
    var blocking = findings.filter(function (f) { return f.severity === "blocking"; });
    if (l.verdict === "request" && !blocking.length) bad('verdict "request" needs at least one blocking finding');
    if (l.verdict !== "request" && blocking.length) bad("a blocking finding means the verdict must be \"request\"");
    if (l.verdict === "approve" && !gating(l).length)
      bad('an "approve" lesson must name at least one non-blocking finding in mustFind — otherwise tapping Approve is the whole lesson');
    if (!decoys.length && !l.project) bad("needs at least one decoy: a line that looks wrong and isn't");
    if (l.rubric && (!Array.isArray(l.rubric) || l.rubric.length < 2)) bad("rubric, when given, needs at least 2 points");
    if (!p.length) {
      if (!grade(l, keyReview(l)).pass) bad("the key's own review does not pass this lesson");
      if (grade(l, { comments: [], verdict: l.verdict }).pass && l.verdict === "request")
        bad("an empty review passes");
      spamReviews(l).forEach(function (s) {
        if (grade(l, s.review).pass) bad("commenting on every line as \"" + s.category + "\" passes — add decoys or tighten maxFalse");
      });
      var floor = minsFloor(l);
      if (!l.mins) bad("no mins (the modelled floor is " + floor + ")");
      else if (l.mins < floor || l.mins > floor * 2 + 4)
        bad("mins " + l.mins + " is outside the modelled range " + floor + "–" + (floor * 2 + 4) +
          " (" + changedLineCount(l) + " changed lines at " + LINES_PER_MIN + "/min + 2)");
    }
    return p;
  }

  var API = {
    CATEGORIES: CATEGORIES, CATEGORY_LABELS: CATEGORY_LABELS,
    SEVERITIES: SEVERITIES, VERDICTS: VERDICTS, VERDICT_LABELS: VERDICT_LABELS,
    SLACK: SLACK, COST: COST, LINES_PER_MIN: LINES_PER_MIN,
    diffLines: diffLines, lessonDiff: lessonDiff, anchorOf: anchorOf, allAnchors: allAnchors,
    grade: grade, keyReview: keyReview, spamReviews: spamReviews, gating: gating,
    changedLineCount: changedLineCount, minsFloor: minsFloor, onContext: onContext,
    checkLesson: checkLesson
  };
  root.CODELAB = root.CODELAB || {};
  root.CODELAB.reviewkit = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
