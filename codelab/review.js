/* ============================================================
   CodeLab — Recall: the spaced-repetition engine
   ------------------------------------------------------------
   Pure and DOM-free on purpose. Every function takes the user
   object as a parameter instead of closing over one, so that
   tools/validate.js can require() this file in plain Node and
   simulate hundreds of days with no browser, and so switching
   profiles mid-session can never write one learner's answer
   into another learner's history.

   THE ITEM. One card is one quiz question rendered as FREE
   RECALL: the prompt and its code block, then the answer. The
   four authored choices are never shown. In this bank the
   correct choice is usually also the longest one, so a
   multiple-choice review mode would measure string length
   rather than knowledge — and an SRS would then promote the
   gamed items out of sight. Hiding the distractors is what
   makes the instrument work.

   THE LADDER. Leitner, not SM-2: SM-2 wants a 0-5 quality
   rating, and the only honest signals here are a three-way
   outcome and a latency. Box 0 repeats after 1 day, never 0,
   or a lapsed item stays due forever and "nothing due" becomes
   unreachable.
   ============================================================ */
(function (root) {
  "use strict";

  /* ---------- tuning ---------- */
  var Q_IV = [1, 1, 3, 7, 16, 35, 90];  // interval per box, in days
  var D_IV = [1, 3, 10, 30, 75, 180];   // drill intervals — heavier item, longer gaps
  var MAX_SESSION = 20;                 // hard cap on one day's offer
  var NEW_PER_DAY = 10;                 // RESERVED slots, not leftovers
  var SKIM_MS = 1200;                   // faster than this cannot promote
  var HOLDING_DAYS = 35;                // the "still holding" trophy line
  var DRILL_MAX_RUNS = 3;               // a pass needing more runs is not a clean pass

  /* ---------- the one clock ----------
     Local calendar components pushed through Date.UTC land on an exact
     multiple of a day, so today + 16 is always a real future day across
     DST and year ends. Using this everywhere keeps due dates and the
     introduction cap rolling over at the same moment as todayKey(). */
  function revToday(now) {
    var d = now ? new Date(now) : new Date();
    return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  }

  /* ---------- keys ----------
     Hash the whole item, not the stem: generic stems like "What does this
     log?" recur across quizzes, and the discriminating content lives in the
     code block. Content-hashing also means inserting or reordering
     questions is free, and editing one resets its schedule, which is what
     you want — the item is no longer the item that was learned. */
  function hash6(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return ("00000" + h.toString(36)).slice(-6);
  }
  function keyOf(quizId, q) {
    var sig = (q.q || "") + "\u001f" + (q.code || "") + "\u001f" + (q.choices || []).join("\u001f");
    return "q:" + quizId + "#" + hash6(sig);
  }

  /* ---------- free-recall eligibility ----------
     Some questions only mean anything while their alternatives are on
     screen: "which of the following", an answer that compares itself to
     another option, an all/none-of-the-above. Those cannot be asked
     without their choices, so they stay out of the pool rather than
     becoming cards nobody can answer.

     This measures the four rules below. It does NOT prove a human can
     answer the survivors cold — only use proves that, which is what the
     "can't answer this" tombstone is for. */
  var Q_REFERS_TO_LIST = /\b(of the following|of these|of the above|which pair|which two|which combination)\b/i;
  var A_REFERS_TO_LIST = /\b(they'?re interchangeable|behave identically|it isn'?t|the others?|both of them|neither|either one|all of them|none of them)\b/i;
  var CHOICE_META = /^\s*(all|none|both|any)\s+of\s+the\s+above\s*$/i;
  var A_TOO_THIN = /^\s*(nothing|nothing[.!]?|no|yes|true|false|it depends)\s*$/i;
  /* A handful of questions put their alternatives inside the code block and
     use "A"/"B"/"C" as the choices. The code block IS shown, so these stay
     answerable — but answering is a one-in-three guess, not retrieval, so
     they do not belong in a recall pool. */
  var A_IS_POINTER = /^\s*[A-D][).]?\s*$/;

  function illPosed(q) {
    var a = (q.choices || [])[q.answer] || "";
    if (Q_REFERS_TO_LIST.test(q.q || "")) return "refers-to-list";
    if (A_REFERS_TO_LIST.test(a)) return "answer-refers-to-others";
    if ((q.choices || []).some(function (c) { return CHOICE_META.test(c); })) return "meta-choice";
    if (A_IS_POINTER.test(a)) return "answer-is-option-letter";
    if (A_TOO_THIN.test(a)) return "answer-too-thin";
    return null;
  }

  /* ---------- typed vs self-graded ----------
     A short answer can be typed and compared objectively. A long one is
     a sentence, and demanding it verbatim would fail correct answers, so
     it is revealed and self-graded. The two are counted separately
     forever: only the typed ones are evidence. */
  function isTyped(q) {
    var a = ((q.choices || [])[q.answer] || "").trim();
    return a.length > 0 && a.length <= 32 && a.split(/\s+/).length <= 5;
  }
  /* Backticks are the author's own signal that the answer is code, and
     code is case-sensitive where prose is not. */
  function isCodeAnswer(q) { return ((q.choices || [])[q.answer] || "").indexOf("`") !== -1; }

  function normalize(s, codeShaped) {
    var t = String(s == null ? "" : s)
      .replace(/`/g, "")
      .replace(/\s+/g, " ")
      .replace(/[;,.]+$/, "")
      .trim();
    return codeShaped ? t : t.toLowerCase();
  }
  function answerMatches(q, typedRaw, alts) {
    var codeShaped = isCodeAnswer(q);
    var got = normalize(typedRaw, codeShaped);
    if (!got) return false;
    if (got === normalize((q.choices || [])[q.answer] || "", codeShaped)) return true;
    return (alts || []).some(function (a) { return normalize(a, codeShaped) === got; });
  }

  /* ---------- pool ----------
     An item is eligible once its quiz has been engaged with. u.quiz[id]
     matters as well as u.done[id]: the quiz screen records the score and
     saves before the learner taps "claim", so a passed quiz can sit at
     100% with done still false. */
  function quizEngaged(u, quizId) {
    return !!(u && ((u.done && u.done[quizId]) || (u.quiz && u.quiz[quizId] != null)));
  }

  function collectItems(courses, u) {
    var out = [];
    (courses || []).forEach(function (c) {
      (c.units || []).forEach(function (unit) {
        (unit.lessons || []).forEach(function (l) {
          if (l.kind !== "quiz") return;
          if (u && !quizEngaged(u, l.id)) return;
          (l.questions || []).forEach(function (q) {
            if (illPosed(q)) return;
            out.push({
              key: keyOf(l.id, q),
              quizId: l.id,
              courseId: c.id,
              courseTitle: c.title,
              unitId: unit.id,
              unitTitle: unit.title,
              q: q.q, code: q.code, lang: q.lang,
              answer: (q.choices || [])[q.answer],
              explain: q.explain,
              typed: isTyped(q),
              codeShaped: isCodeAnswer(q)
            });
          });
        });
      });
    });
    return out;
  }

  /* ---------- schedule access ---------- */
  function recOf(u, key) { return (u.rev && u.rev[key]) || null; }
  function isSkipped(u, key) { return !!(u.revSkip && u.revSkip[key]); }

  /* Content-free: counts due records straight out of localStorage, which is
     what lets the topbar pill render before a single course file loads. */
  function dueCount(u, today) {
    if (!u || !u.rev) return 0;
    var n = 0;
    for (var k in u.rev) {
      if (!Object.prototype.hasOwnProperty.call(u.rev, k)) continue;
      if (isSkipped(u, k)) continue;
      if (u.rev[k][1] <= today) n++;
    }
    return Math.min(n, MAX_SESSION);
  }
  /* Also content-free: every quiz id in this catalog contains "-quiz", so a
     finished quiz can be spotted without loading anything. validate.js
     locks that invariant so this can never quietly start lying. */
  function hasEngagedQuiz(u) {
    if (!u) return false;
    function scan(o) {
      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k) && k.indexOf("-quiz") !== -1) return true;
      return false;
    }
    return scan(u.done || {}) || scan(u.quiz || {});
  }
  /* Every lesson id is "<coursePrefix>-…", so the courses worth loading can be
     derived from progress alone, with no content in memory. This covers ALL
     finished lessons, not just quizzes, because drills come from coding
     lessons in courses whose quiz may not be done yet. */
  function coursePrefixes(u) {
    var seen = {};
    function scan(o) {
      for (var k in o) {
        if (!Object.prototype.hasOwnProperty.call(o, k)) continue;
        var p = String(k).split("-")[0];
        if (p) seen[p] = 1;
      }
    }
    scan((u && u.done) || {}); scan((u && u.quiz) || {});
    return Object.keys(seen);
  }
  function doneLessonCount(u) {
    return u && u.done ? Object.keys(u.done).length : 0;
  }
  /* Cards and drills share the map but not the interval table, so each record
     is measured against its own ladder. */
  function holdingCount(u, days) {
    if (!u || !u.rev) return 0;
    var floor = days == null ? HOLDING_DAYS : days, n = 0;
    for (var k in u.rev) {
      if (!Object.prototype.hasOwnProperty.call(u.rev, k)) continue;
      var table = isDrillKey(k) ? D_IV : Q_IV;
      var iv = table[u.rev[k][0]];
      if (iv != null && iv >= floor) n++;
    }
    return n;
  }

  /* ---------- queue ---------- */
  function shuffle(a, rnd) {
    var r = rnd || Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  /* Blocked practice feels easier and teaches less. One repair pass is
     enough to stop two cards from the same unit sitting next to each
     other; perfect separation is not worth the loop. */
  function deblock(items) {
    for (var i = 1; i < items.length; i++) {
      if (items[i].unitId !== items[i - 1].unitId) continue;
      for (var j = i + 1; j < items.length; j++) {
        if (items[j].unitId === items[i - 1].unitId) continue;
        var t = items[i]; items[i] = items[j]; items[j] = t;
        break;
      }
    }
    return items;
  }
  function roundRobinByUnit(items, rnd) {
    var byUnit = {}, order = [];
    items.forEach(function (it) {
      if (!byUnit[it.unitId]) { byUnit[it.unitId] = []; order.push(it.unitId); }
      byUnit[it.unitId].push(it);
    });
    shuffle(order, rnd);
    var out = [], added = true;
    while (added) {
      added = false;
      for (var i = 0; i < order.length; i++) {
        var bucket = byUnit[order[i]];
        if (bucket.length) { out.push(bucket.shift()); added = true; }
      }
    }
    return out;
  }

  /* Introductions get RESERVED slots. Filling "whatever room is left after
     due cards" sounds equivalent and is not: by about day three the due
     load eats the session and new items stop arriving entirely, which
     stretches a one-month ramp into several. */
  function buildQueue(u, pool, today, rnd) {
    if (u.revQueue && u.revQueue.day === today) {
      var live = {};
      pool.forEach(function (it) { live[it.key] = 1; });
      var keys = u.revQueue.keys.filter(function (k) { return live[k] && !isSkipped(u, k); });
      if (keys.length) { u.revQueue.keys = keys; return u.revQueue; }
    }
    var byKey = {};
    pool.forEach(function (it) { byKey[it.key] = it; });

    var due = [];
    pool.forEach(function (it) {
      if (isSkipped(u, it.key)) return;
      var r = recOf(u, it.key);
      if (r && r[1] <= today) due.push(it);
    });
    due.sort(function (a, b) {
      var ra = recOf(u, a.key), rb = recOf(u, b.key);
      return (ra[0] - rb[0]) || (ra[1] - rb[1]);
    });
    due = due.slice(0, MAX_SESSION - NEW_PER_DAY);

    var slots = MAX_SESSION - due.length;
    var unseen = pool.filter(function (it) { return !recOf(u, it.key) && !isSkipped(u, it.key); });
    var fresh = roundRobinByUnit(unseen, rnd).slice(0, Math.min(NEW_PER_DAY, slots));

    var all = deblock(shuffle(due.concat(fresh), rnd));
    u.revQueue = { day: today, keys: all.map(function (it) { return it.key; }), i: 0, ok: 0, n: all.length, redo: [] };
    return u.revQueue;
  }

  /* ---------- grading ----------
     "got"    promote one box
     "close"  hold the box, re-space it
     "missed" drop two boxes and come back tomorrow

     Promote +1 / fail -2 puts the break-even at roughly two correct in
     three, which is a defensible floor for claiming you know something.
     Deliberately absent: forgiveness for a late fail (it just lowers the
     bar) and a speed bonus (it pays for not reading the prompt). Latency
     is used in one direction only — as a brake. */
  function grade(u, key, outcome, elapsedMs) {
    u.rev = u.rev || {};
    u.revStats = u.revStats || { s: 0, a: 0, c: 0, ta: 0, tc: 0 };
    var today = arguments.length > 4 ? arguments[4] : revToday();
    var r = u.rev[key] || [0, today, 0, 0];
    var max = Q_IV.length - 1;

    if (outcome === "got" && elapsedMs != null && elapsedMs < SKIM_MS) outcome = "close";

    if (outcome === "got") {
      r[0] = Math.min(r[0] + 1, max);
      r[1] = today + Q_IV[r[0]];
    } else if (outcome === "close") {
      r[1] = today + Q_IV[r[0]];
    } else {
      r[0] = Math.max(0, r[0] - 2);
      r[2] = (r[2] || 0) + 1;
      r[1] = today + 1;
    }
    r[3] = (r[3] || 0) + 1;
    u.rev[key] = r;
    u.revStats.a++;
    if (outcome === "got") u.revStats.c++;
    return r;
  }
  function recordTyped(u, correct) {
    u.revStats = u.revStats || { s: 0, a: 0, c: 0, ta: 0, tc: 0 };
    u.revStats.ta++;
    if (correct) u.revStats.tc++;
  }
  function skipItem(u, key) {
    u.revSkip = u.revSkip || {};
    u.revSkip[key] = 1;
    if (u.rev) delete u.rev[key];
  }
  function noteAlt(u, key, typed) {
    u.revAlt = u.revAlt || {};
    u.revAlt[key] = (u.revAlt[key] || []).concat([String(typed).trim()]);
  }
  /* An edited question hashes to a new key, so its old record is orphaned.
     Dropping them on load keeps the store from silently accreting.

     ONLY question keys are considered. Drill records live in the same map but
     are keyed by lesson id, and the pool passed here is questions only — so
     pruning them here would delete every drill schedule the moment the review
     home rendered. (It did, until a test caught it.) */
  function pruneOrphans(u, pool) {
    if (!u.rev) return 0;
    var live = {}, dropped = 0;
    pool.forEach(function (it) { live[it.key] = 1; });
    for (var k in u.rev) {
      if (!Object.prototype.hasOwnProperty.call(u.rev, k)) continue;
      if (isDrillKey(k)) continue;
      if (!live[k]) { delete u.rev[k]; dropped++; }
    }
    return dropped;
  }
  function nextDueDay(u, today) {
    if (!u || !u.rev) return null;
    var best = null;
    for (var k in u.rev) {
      if (!Object.prototype.hasOwnProperty.call(u.rev, k)) continue;
      if (isSkipped(u, k)) continue;
      var d = u.rev[k][1];
      if (d > today && (best === null || d < best)) best = d;
    }
    return best;
  }

  /* ============================================================
     TIER B — checkpoint-prefix drills
     ------------------------------------------------------------
     Tier A reviews concepts. This reviews PRODUCTION: reopen a
     finished coding lesson from its starter files and grade only
     the first k+1 checkpoints, with k rising as the item climbs
     its ladder. Box 0 is "make the first check pass" — a minute.
     The top box is the whole lesson rebuilt from nothing.

     Grading a single checkpoint in isolation is impossible: the
     runner executes steps in order in one sandbox with state
     accumulating between them, and plenty of later steps click
     and type into what earlier steps built. A PREFIX is the
     largest unit that is both gradeable and adjustable, and it
     needs no new content — the 827 checkpoints are already
     written and already validated.
     ============================================================ */
  function drillKey(lessonId) { return "k:" + lessonId; }
  function isDrillKey(key) { return String(key).indexOf("k:") === 0; }
  function lessonIdOfDrill(key) { return String(key).slice(2); }

  /* Depth from box, floored by where the starter actually breaks. The floor
     matters: validate.js proves a starter fails SOME checkpoint, not the
     first one, so a shallow prefix can be one the starter already passes —
     which would open a drill that is complete before it begins. */
  function drillDepth(box, stepCount, firstFailing) {
    var k = Math.min(box, stepCount - 1);
    if (firstFailing != null) k = Math.max(k, firstFailing);
    return Math.max(0, Math.min(k, stepCount - 1));
  }

  /* Tier A generates unit-level failure data for free, which is the answer to
     "there is no per-checkpoint history": drill the unit whose CARDS keep
     lapsing. */
  function unitHeat(u, unitId, pool) {
    var heat = 0;
    (pool || []).forEach(function (it) {
      if (it.unitId !== unitId) return;
      var r = recOf(u, it.key);
      if (r) heat += (r[2] || 0);
    });
    return heat;
  }

  function drillCandidates(u, courses) {
    var out = [];
    (courses || []).forEach(function (c) {
      (c.units || []).forEach(function (unit) {
        (unit.lessons || []).forEach(function (l) {
          if (l.kind === "quiz") return;
          if (!(l.steps || []).length) return;
          if (!(u.done && u.done[l.id])) return;          // only finished lessons
          if (isSkipped(u, drillKey(l.id))) return;
          out.push({
            key: drillKey(l.id), lessonId: l.id, courseId: c.id, courseTitle: c.title,
            unitId: unit.id, unitTitle: unit.title, title: l.title,
            steps: (l.steps || []).length, project: !!l.project
          });
        });
      });
    });
    return out;
  }

  /* One drill is OFFERED per session, never queued — a queue of 15-minute
     items becomes a chore, and a chore gets abandoned. */
  function pickDrill(u, courses, pool, today) {
    var cands = drillCandidates(u, courses);
    if (!cands.length) return null;
    var due = [], fresh = [];
    cands.forEach(function (c) {
      var r = recOf(u, c.key);
      if (!r) fresh.push(c);
      else if (r[1] <= today) due.push(c);
    });
    var pick = null;
    if (due.length) {
      due.sort(function (a, b) { return recOf(u, a.key)[1] - recOf(u, b.key)[1]; });
      pick = due[0];
    } else if (fresh.length) {
      fresh.sort(function (a, b) {
        var h = unitHeat(u, b.unitId, pool) - unitHeat(u, a.unitId, pool);
        if (h) return h;
        return a.steps - b.steps;   // gentler first when nothing is hot yet
      });
      pick = fresh[0];
    }
    if (!pick) return null;
    var rec = recOf(u, pick.key);
    pick.box = rec ? rec[0] : 0;
    pick.heat = unitHeat(u, pick.unitId, pool);
    pick.k = drillDepth(pick.box, pick.steps, null);
    return pick;
  }

  /* Same three outcomes as a card, its own interval table. */
  function gradeDrill(u, key, outcome, today) {
    u.rev = u.rev || {};
    var t = today == null ? revToday() : today;
    var r = u.rev[key] || [0, t, 0, 0];
    var max = D_IV.length - 1;
    if (outcome === "got") { r[0] = Math.min(r[0] + 1, max); r[1] = t + D_IV[r[0]]; }
    else if (outcome === "close") { r[1] = t + D_IV[r[0]]; }
    else { r[0] = Math.max(0, r[0] - 2); r[2] = (r[2] || 0) + 1; r[1] = t + 1; }
    r[3] = (r[3] || 0) + 1;
    u.rev[key] = r;
    return r;
  }

  /* The judgement call of this tier, isolated in one function so it can be
     changed once. 162 of 251 lessons are kind:"web", where Run IS the preview
     button — counting a failing Run as a miss there would pin most of the pool
     at box 0 forever. So a failing run only counts against you on "js"
     lessons, where Run is unambiguously "check my work". */
  function drillOutcome(opts) {
    if (!opts.passed) return "missed";
    if (opts.abandoned) return "missed";
    if (opts.kind === "js" && opts.failedRuns > 0) return "close";
    if (opts.runs > DRILL_MAX_RUNS) return "close";
    if (opts.hintsShown > 0) return "close";
    return "got";
  }

  var API = {
    Q_IV: Q_IV, D_IV: D_IV, DRILL_MAX_RUNS: DRILL_MAX_RUNS,
    drillKey: drillKey, isDrillKey: isDrillKey, lessonIdOfDrill: lessonIdOfDrill,
    drillDepth: drillDepth, unitHeat: unitHeat, drillCandidates: drillCandidates,
    pickDrill: pickDrill, gradeDrill: gradeDrill, drillOutcome: drillOutcome,
    MAX_SESSION: MAX_SESSION, NEW_PER_DAY: NEW_PER_DAY,
    SKIM_MS: SKIM_MS, HOLDING_DAYS: HOLDING_DAYS,
    revToday: revToday, hash6: hash6, keyOf: keyOf,
    illPosed: illPosed, isTyped: isTyped, isCodeAnswer: isCodeAnswer,
    normalize: normalize, answerMatches: answerMatches,
    quizEngaged: quizEngaged, collectItems: collectItems,
    dueCount: dueCount, hasEngagedQuiz: hasEngagedQuiz, coursePrefixes: coursePrefixes,
    doneLessonCount: doneLessonCount,
    holdingCount: holdingCount, nextDueDay: nextDueDay,
    buildQueue: buildQueue, grade: grade, recordTyped: recordTyped,
    skipItem: skipItem, noteAlt: noteAlt, pruneOrphans: pruneOrphans,
    recOf: recOf, shuffle: shuffle
  };

  root.CODELAB = root.CODELAB || {};
  root.CODELAB.review = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
