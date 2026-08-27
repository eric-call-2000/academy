/* ============================================================
   CodeLab — Handoff: moving one profile between two devices
   ------------------------------------------------------------
   Pure and DOM-free, taking the profile as a parameter, the same
   convention review.js uses — so tools/validate.js can require()
   this in plain Node and run property tests over thousands of
   generated profile pairs with no browser.

   THE PROBLEM. localStorage is per-origin AND per-device, so the
   phone and the desktop are two stores that never see each other.
   There is no server. Progress made on one is simply stranded.

   THE SHAPE OF THE ANSWER. Every merge rule here is a set union,
   a per-key max, or a selection ordered by evidence the store
   actually contains. That buys three properties that matter more
   than cleverness:

     idempotent  — importing the same file twice changes nothing
     commutative — merge(A,B) equals merge(B,A)
     convergent  — phone->desktop then desktop->phone leaves both
                   devices holding the same thing

   THE CLOCK. It is tempting to say "there are no timestamps" and
   fall back to a coin flip on conflicts. That is false. grade()
   writes dueDay = today + interval[box], so every card record
   bounds its own last-graded day:

       lo = dueDay - interval[box]      hi = dueDay - 1

   If one record's lo is past the other's hi, it was PROVABLY
   graded later and wins outright. Only when those windows
   overlap is there genuinely no ordering — and there the answer
   is min/min, not a guess, because the costs are lopsided:
   scheduling a card too early costs one extra review, while
   scheduling it too late buries something you have actually
   forgotten for up to 90 days.
   ============================================================ */
(function (root) {
  "use strict";

  var REV = (root.CODELAB && root.CODELAB.review) || null;
  if (!REV && typeof require === "function") {
    try { REV = require("./review.js"); } catch (e) { /* browser load order */ }
  }

  var ENVELOPE_V = 1;
  var DAYS_RING = 64;        // how many study days travel with a profile

  /* ---------- days ----------
     lastDay is written by todayKey() as an UNPADDED "2026-8-27". Emitting
     "2026-08-27" here would make bumpStreak's === comparison never match,
     which silently resets the streak to 1 every single day — in this app and
     in the Academy mirror. Round-tripping through todayKey()'s exact format
     is the single most load-bearing detail in this file. */
  function dayStr(n) {
    var d = new Date(n * 864e5);
    return d.getUTCFullYear() + "-" + (d.getUTCMonth() + 1) + "-" + d.getUTCDate();
  }
  function dayNum(str) {
    if (!str) return null;
    var m = String(str).split("-");
    if (m.length !== 3) return null;
    var n = Math.round(Date.UTC(+m[0], +m[1] - 1, +m[2]) / 864e5);
    return isNaN(n) ? null : n;
  }
  function uniqSortedDays(list, today) {
    var seen = {}, out = [];
    (list || []).forEach(function (d) {
      var n = Math.round(d);
      if (isNaN(n)) return;
      /* A foreign or wrong clock can shorten a run but must never fabricate
         one, so days from the future are dropped rather than trusted. */
      if (today != null && n > today) return;
      if (!seen[n]) { seen[n] = 1; out.push(n); }
    });
    out.sort(function (a, b) { return a - b; });
    return out.length > DAYS_RING ? out.slice(out.length - DAYS_RING) : out;
  }
  /* The streak is DERIVED from the day set, never merged as a number. Merging
     a count against a separate end-date is what fabricates a live 30-day
     flame out of a run that died six days ago. */
  function streakFromDays(days) {
    if (!days || !days.length) return 0;
    var run = 1;
    for (var i = days.length - 1; i > 0; i--) {
      if (days[i] - days[i - 1] === 1) run++;
      else break;
    }
    return run;
  }
  /* Reconstructs the current run from the pre-Handoff (streak, lastDay) pair
     so an existing profile keeps its flame across the upgrade. */
  function backfillDays(streak, lastDay) {
    var end = dayNum(lastDay);
    if (end == null || !streak || streak < 1) return end == null ? [] : [end];
    var n = Math.min(streak, DAYS_RING), out = [];
    for (var i = n - 1; i >= 0; i--) out.push(end - i);
    return out;
  }

  /* ---------- the per-card clock ---------- */
  function intervalsFor(key) {
    return (REV && REV.isDrillKey && REV.isDrillKey(key)) ? REV.D_IV : REV.Q_IV;
  }
  function lastGradedBounds(key, rec) {
    var IV = intervalsFor(key) || [1];
    var box = Math.max(0, Math.min(rec[0] | 0, IV.length - 1));
    var iv = IV[box] || 1;
    return { lo: rec[1] - iv, hi: rec[1] - 1 };
  }
  function mergeRecord(key, a, b) {
    if (!a) return b.slice();
    if (!b) return a.slice();
    var A = lastGradedBounds(key, a), B = lastGradedBounds(key, b), pair;
    if (A.lo > B.hi) pair = [a[0], a[1]];        // a provably graded later
    else if (B.lo > A.hi) pair = [b[0], b[1]];   // b provably graded later
    else pair = [Math.min(a[0], b[0]), Math.min(a[1], b[1])];
    /* Take box and dueDay as a PAIR. A box from one record with a due date
       from the other is a schedule neither device was ever in. */
    return [pair[0], pair[1], Math.max(a[2] || 0, b[2] || 0), Math.max(a[3] || 0, b[3] || 0)];
  }

  /* ---------- small joins ---------- */
  function unionTrue(a, b) {
    var out = {}, k;
    for (k in (a || {})) if (has(a, k)) out[k] = true;
    for (k in (b || {})) if (has(b, k)) out[k] = true;
    return out;
  }
  function maxMap(a, b) {
    var out = {}, k;
    for (k in (a || {})) if (has(a, k)) out[k] = a[k];
    for (k in (b || {})) if (has(b, k)) out[k] = (out[k] == null) ? b[k] : Math.max(out[k], b[k]);
    return out;
  }
  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  /* answerMatches compares NORMALIZED strings, so a raw concat leaves three
     spellings of the same accepted answer and is not idempotent. */
  function unionAlts(a, b) {
    var out = {};
    [a || {}, b || {}].forEach(function (src) {
      for (var k in src) {
        if (!has(src, k)) continue;
        var seen = {}, list = out[k] || [];
        list.forEach(function (v) { seen[normKey(v)] = 1; });
        (src[k] || []).forEach(function (v) {
          var n = normKey(v);
          if (!seen[n]) { seen[n] = 1; list.push(v); }
        });
        out[k] = list;
      }
    });
    return out;
  }
  function normKey(v) { return REV && REV.normalize ? REV.normalize(v, false) : String(v).trim().toLowerCase(); }

  /* ---------- revStats as a G-counter ----------
     Lifetime counters cannot be summed on merge (a repeat import doubles
     them) and cannot be maxed (parallel work on both devices is lost). Keyed
     per device they can be both: per-device max is exact, idempotent and
     commutative, and the displayed total is just the sum. */
  function mergeStatsSrc(a, b) {
    var out = {}, dev;
    function fold(src) {
      for (dev in (src || {})) {
        if (!has(src, dev)) continue;
        var cur = out[dev] || { s: 0, a: 0, c: 0, ta: 0, tc: 0 }, inc = src[dev] || {};
        out[dev] = {
          s: Math.max(cur.s || 0, inc.s || 0), a: Math.max(cur.a || 0, inc.a || 0),
          c: Math.max(cur.c || 0, inc.c || 0), ta: Math.max(cur.ta || 0, inc.ta || 0),
          tc: Math.max(cur.tc || 0, inc.tc || 0)
        };
      }
    }
    fold(a); fold(b);
    return out;
  }
  function sumStats(src) {
    var t = { s: 0, a: 0, c: 0, ta: 0, tc: 0 };
    for (var d in (src || {})) {
      if (!has(src, d)) continue;
      var v = src[d] || {};
      t.s += v.s || 0; t.a += v.a || 0; t.c += v.c || 0; t.ta += v.ta || 0; t.tc += v.tc || 0;
    }
    return t;
  }

  /* ---------- the merge ----------
     Computes into a fresh object. The preview diffs THIS result and the
     commit writes THIS result, so what you were shown can never disagree
     with what happens. */
  function mergeProfile(local, incoming, ctx) {
    ctx = ctx || {};
    var today = ctx.today != null ? ctx.today : (REV ? REV.revToday() : 0);
    var L = local || {}, I = incoming || {};
    var out = {};

    out.done = unionTrue(L.done, I.done);
    out.quiz = maxMap(L.quiz, I.quiz);

    /* XP is a pure accumulation over done, so extending by the delta is
       exact — it never rewrites history and a repeat import adds zero
       because the delta set is empty the second time. */
    var owed = [];
    var gained = 0;
    Object.keys(out.done).forEach(function (id) {
      if (L.done && L.done[id]) return;
      var v = ctx.xpOf ? ctx.xpOf(id) : null;
      if (v == null) owed.push(id);        // course not loaded; pay on next load
      else gained += v;
    });
    out.xp = (L.xp || 0) + gained;
    out.xpOwed = uniqStrings((L.xpOwed || []).concat(owed));

    out.days = uniqSortedDays((L.days || []).concat(I.days || []), today);
    out.streak = streakFromDays(out.days);
    out.lastDay = out.days.length ? dayStr(out.days[out.days.length - 1]) : (L.lastDay || null);

    /* The only non-monotone field. Keeping local costs one tap and preserves
       commutativity, which "the file wins" would break. */
    out.lastCourse = L.lastCourse || I.lastCourse || null;

    /* Cards. Park is a holding pen, not a second schedule: a key live on
       either side is live in the result. */
    var liveKeys = {}, parkKeys = {};
    collect(L.rev, liveKeys); collect(I.rev, liveKeys);
    collect(L.revPark, parkKeys); collect(I.revPark, parkKeys);
    out.revSkip = unionTrue(L.revSkip, I.revSkip);

    out.rev = {}; out.revPark = {};
    Object.keys(liveKeys).forEach(function (k) {
      var rec = mergeRecord(k, pick(L, k), pick(I, k));
      /* A tombstone must not destroy a dozen gradings — skipping parks the
         record so un-skip can restore it exactly. */
      if (out.revSkip[k]) out.revPark[k] = rec; else out.rev[k] = rec;
    });
    Object.keys(parkKeys).forEach(function (k) {
      if (out.rev[k] || out.revPark[k]) return;
      out.revPark[k] = mergeRecord(k, parkOf(L, k), parkOf(I, k));
    });

    out.revAlt = unionAlts(L.revAlt, I.revAlt);
    out.revStatsSrc = mergeStatsSrc(L.revStatsSrc, I.revStatsSrc);
    out.revStats = sumStats(out.revStatsSrc);

    /* Day-scoped and disposable. An imported queue would either hijack a live
       session or hide the very cards the merge just made due. */
    out.revDay = null;
    out.revQueue = null;

    return { user: out, owed: owed };

    function collect(bag, into) { for (var k in (bag || {})) if (has(bag, k)) into[k] = 1; }
    function pick(side, k) { return (side.rev && side.rev[k]) || (side.revPark && side.revPark[k]) || null; }
    function parkOf(side, k) { return (side.revPark && side.revPark[k]) || null; }
  }
  function uniqStrings(list) {
    var seen = {}, out = [];
    (list || []).forEach(function (v) { if (!seen[v]) { seen[v] = 1; out.push(v); } });
    return out;
  }

  /* ---------- what changed, for the preview ---------- */
  function diffProfiles(before, after) {
    var b = before || {}, a = after || {};
    var newDone = Object.keys(a.done || {}).filter(function (k) { return !(b.done && b.done[k]); });
    var revAdded = 0, revChanged = 0, k;
    for (k in (a.rev || {})) {
      if (!has(a.rev, k)) continue;
      var was = (b.rev && b.rev[k]) || null;
      if (!was) revAdded++;
      else if (was[0] !== a.rev[k][0] || was[1] !== a.rev[k][1]) revChanged++;
    }
    var quizUp = 0;
    for (k in (a.quiz || {})) {
      if (!has(a.quiz, k)) continue;
      if (!b.quiz || b.quiz[k] == null || a.quiz[k] > b.quiz[k]) quizUp++;
    }
    return {
      lessons: newDone.length, lessonIds: newDone,
      xp: (a.xp || 0) - (b.xp || 0),
      cardsAdded: revAdded, cardsChanged: revChanged,
      quizzesImproved: quizUp,
      daysAdded: (a.days || []).length - (b.days || []).length,
      streakBefore: b.streak || 0, streakAfter: a.streak || 0,
      parked: Object.keys(a.revPark || {}).length - Object.keys(b.revPark || {}).length,
      owed: (a.xpOwed || []).length,
      empty: newDone.length === 0 && revAdded === 0 && revChanged === 0 && quizUp === 0 &&
             (a.days || []).length === (b.days || []).length
    };
  }

  /* ---------- envelope ----------
     Keys are emitted sorted so two exports of an unchanged profile are
     byte-identical and diffable. */
  function stable(v) {
    if (v === null || typeof v !== "object") return JSON.stringify(v);
    if (Object.prototype.toString.call(v) === "[object Array]") {
      return "[" + v.map(stable).join(",") + "]";
    }
    var keys = Object.keys(v).sort();
    return "{" + keys.map(function (k) { return JSON.stringify(k) + ":" + stable(v[k]); }).join(",") + "}";
  }
  function checksum(payload) {
    var s = stable(payload);
    return REV && REV.hash6 ? REV.hash6(s) : String(s.length);
  }

  function buildEnvelope(profileName, u, ctx) {
    ctx = ctx || {};
    var p = {
      done: Object.keys(u.done || {}).sort(),   // every value is literally true
      xp: u.xp || 0,
      days: (u.days || []).slice(),
      quiz: u.quiz || {},
      lastCourse: u.lastCourse || null,
      rev: u.rev || {},
      revPark: u.revPark || {},
      revSkip: u.revSkip || {},
      revAlt: u.revAlt || {},
      revStatsSrc: u.revStatsSrc || {}
    };
    return {
      app: "codelab", kind: "progress", v: ENVELOPE_V,
      at: ctx.at || null,
      day: ctx.today != null ? ctx.today : (REV ? REV.revToday() : 0),
      from: ctx.from || "",
      src: ctx.deviceId || "unknown",
      profile: profileName,
      counts: {
        done: p.done.length, rev: Object.keys(p.rev).length,
        park: Object.keys(p.revPark).length, skip: Object.keys(p.revSkip).length,
        alt: Object.keys(p.revAlt).length, days: p.days.length
      },
      sum: checksum(p),
      omits: ["code", "streak", "lastDay", "revQueue", "revDay", "academy"],
      p: p
    };
  }

  /* Rehydrates the transported shape back into a profile-like object the
     merge understands (done travels as an array to save ~1.8KB of "true"). */
  function envelopeToProfile(env) {
    var p = env.p || {}, done = {};
    (p.done || []).forEach(function (id) { done[id] = true; });
    return {
      done: done, xp: p.xp || 0, days: p.days || [], quiz: p.quiz || {},
      lastCourse: p.lastCourse || null, rev: p.rev || {}, revPark: p.revPark || {},
      revSkip: p.revSkip || {}, revAlt: p.revAlt || {}, revStatsSrc: p.revStatsSrc || {}
    };
  }

  function parseEnvelope(text) {
    var raw = String(text == null ? "" : text);
    /* Compact JSON contains no raw newline bytes, so stripping them is
       lossless — and it repairs exactly the soft line breaks that mail and
       chat clients insert into a long single-line paste. */
    raw = raw.replace(/^﻿/, "").replace(/[\r\n]/g, "").trim();
    if (!raw) return { ok: false, error: "Nothing pasted." };
    var env;
    try { env = JSON.parse(raw); }
    catch (e) { return { ok: false, error: "That is not a valid sync code — it looks truncated or partly copied." }; }
    if (!env || env.app !== "codelab") return { ok: false, error: "That code is not from CodeLab." };
    if (env.kind !== "progress") return { ok: false, error: 'Expected a progress code, got "' + env.kind + '".' };
    /* Refused loudly rather than best-effort parsed: guessing at the
       semantics of a newer format is how you corrupt a schedule. */
    if (env.v !== ENVELOPE_V) return { ok: false, error: "That code is version " + env.v + "; this app reads version " + ENVELOPE_V + ". Update the other device." };
    if (!env.p) return { ok: false, error: "That code has no progress in it." };
    if (env.sum && env.sum !== checksum(env.p)) return { ok: false, error: "That code is damaged — the checksum does not match. Copy it again, all of it." };
    return { ok: true, env: env };
  }

  var API = {
    ENVELOPE_V: ENVELOPE_V, DAYS_RING: DAYS_RING,
    dayStr: dayStr, dayNum: dayNum, uniqSortedDays: uniqSortedDays,
    streakFromDays: streakFromDays, backfillDays: backfillDays,
    lastGradedBounds: lastGradedBounds, mergeRecord: mergeRecord,
    mergeStatsSrc: mergeStatsSrc, sumStats: sumStats,
    mergeProfile: mergeProfile, diffProfiles: diffProfiles,
    buildEnvelope: buildEnvelope, envelopeToProfile: envelopeToProfile,
    parseEnvelope: parseEnvelope, checksum: checksum, stable: stable
  };

  root.CODELAB = root.CODELAB || {};
  root.CODELAB.sync = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);
