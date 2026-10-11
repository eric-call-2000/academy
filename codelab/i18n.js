/* ============================================================
   CodeLab — interface language + translation layer
   ------------------------------------------------------------
   English is the source of truth. Every lesson, test, solution
   and Recall key is computed from the English files and NEVER
   changes with the language: a translation is a separate layer,
   loaded on top, that only replaces the words a learner reads.

   Two kinds of text:

   1. INTERFACE — buttons, headers, toasts in app.js. Written in
      English at the call site as t("Continue: {0}", title); the
      English string IS the key, and a language supplies a table
      of replacements with addStrings(). A missing entry falls
      back to the English, so nothing ever renders blank.

   2. CONTENT — course, unit and lesson text. A language layer
      lives at <lang>/<course>/uN.js and calls addUnit(lang,
      unitId, {...}) with only the fields it translates, matched
      to the English by id and position. The views below merge it
      over the English field by field.

   What never changes: files, solution, tests, code blocks, and
   which choice is the answer. The views copy those across from
   the English untouched, so the runner and every grader see
   exactly what validate.js checked.

   A translation may say MORE than the English: `more` (a longer
   explanation under the brief), a per-step `detail`, and a unit
   `glossary`. Learners reading in a second language get the
   extra words; the checkpoints stay the same.

   tools/validate-i18n.js keeps the layer honest: every key must
   point at real English, and each translated lesson records a
   hash (`src`) of the English it was translated from, so an
   English edit flags the translation as stale.
   ============================================================ */
(function () {
  "use strict";
  var C = window.CODELAB = window.CODELAB || {};
  var LANG_KEY = "codelab_lang_v1";
  var LANGS = {
    en: { label: "English", native: "English" },
    es: { label: "Spanish", native: "Español" }
  };

  function detect() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved && LANGS[saved]) return saved;
    } catch (e) {}
    var nav = "";
    try { nav = (navigator.languages && navigator.languages[0]) || navigator.language || ""; } catch (e) {}
    return /^es\b/i.test(nav) ? "es" : "en";
  }

  var I = C.i18n = {
    KEY: LANG_KEY,
    LANGS: LANGS,
    lang: detect(),
    ui: {},          // lang -> { english: translated }
    courses: {},     // lang -> courseId -> { title, blurb, units: [files] }
    positions: {},   // lang -> positionId -> { title, blurb, screen }
    cats: {},        // lang -> categoryId -> label
    units: {},       // lang -> unitId -> overlay
    lessons: {}      // lang -> lessonId -> lesson overlay (index into units)
  };
  try { if (typeof document !== "undefined") document.documentElement.lang = I.lang; } catch (e) {}

  function bag(map, lang) { return map[lang] || (map[lang] = {}); }
  function has(o, k) { return o != null && Object.prototype.hasOwnProperty.call(o, k); }
  /* A translated field wins when it is a real string; null, "" and absent
     all mean "not translated yet — show the English". */
  function pick(tr, en) { return (typeof tr === "string" && tr.length) ? tr : en; }

  I.setLang = function (lang) {
    if (!LANGS[lang]) return;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    I.lang = lang;
  };

  /* ---------- interface strings ---------- */
  I.addStrings = function (lang, map) {
    var b = bag(I.ui, lang);
    Object.keys(map).forEach(function (k) { b[k] = map[k]; });
  };
  function fill(s, args) {
    return String(s).replace(/\{(\d+)\}/g, function (m, n) {
      return args[n] != null ? String(args[n]) : m;
    });
  }
  /* t("Start: {0}", title) — the English is the key and the fallback. */
  I.t = function (en) {
    var table = I.lang === "en" ? null : I.ui[I.lang];
    var s = (table && has(table, en)) ? table[en] : en;
    return fill(s, Array.prototype.slice.call(arguments, 1));
  };
  /* tc("grade", "Close") — when one English word means two things on
     screen ("Close" the sheet, "Close" as in nearly right), the table key
     carries a context: "grade|Close". English still shows "Close". */
  I.tc = function (ctx, en) {
    var table = I.lang === "en" ? null : I.ui[I.lang];
    var k = ctx + "|" + en;
    var s = (table && has(table, k)) ? table[k] : en;
    return fill(s, Array.prototype.slice.call(arguments, 2));
  };
  /* tn(n, "{0} credit", "{0} credits") — Spanish and English both split
     plurals at exactly one, so two forms cover both languages. */
  I.tn = function (n, one, many) {
    var rest = Array.prototype.slice.call(arguments, 3);
    return I.t.apply(null, [n === 1 ? one : many, n].concat(rest));
  };

  /* ---------- catalog-level text ---------- */
  I.defineCourse = function (lang, id, d) { bag(I.courses, lang)[id] = d; };
  I.definePosition = function (lang, id, d) { bag(I.positions, lang)[id] = d; };
  I.defineCategories = function (lang, map) {
    var b = bag(I.cats, lang);
    Object.keys(map).forEach(function (k) { b[k] = map[k]; });
  };

  /* Language-layer files to lazy-load after a course's English units. */
  I.overlayFiles = function (course) {
    if (I.lang === "en") return [];
    var d = (I.courses[I.lang] || {})[course.id];
    return ((d && d.units) || []).map(function (f) { return I.lang + "/" + f; });
  };

  I.course = function (c) {
    var d = (I.courses[I.lang] || {})[c.id] || {};
    return {
      title: pick(d.title, c.title),
      blurb: pick(d.blurb, c.blurb || ""),
      level: I.t(c.level || "Beginner"),
      translated: !!(d.units && d.units.length)
    };
  };
  I.position = function (p) {
    var d = (I.positions[I.lang] || {})[p.id] || {};
    return { title: pick(d.title, p.title), blurb: pick(d.blurb, p.blurb || ""), screen: pick(d.screen, p.screen || "") };
  };
  I.catLabel = function (id, en) {
    return pick((I.cats[I.lang] || {})[id], en);
  };

  /* ---------- content layers ---------- */
  I.addUnit = function (lang, unitId, d) {
    d = d || {};
    bag(I.units, lang)[unitId] = d;
    var idx = bag(I.lessons, lang);
    Object.keys(d.lessons || {}).forEach(function (lid) { idx[lid] = d.lessons[lid]; });
  };
  function unitTr(u) { return (I.units[I.lang] || {})[u.id] || null; }
  function lessonTr(id) { return (I.lessons[I.lang] || {})[id] || null; }

  I.unit = function (u) {
    var d = unitTr(u) || {};
    var cheat = (u.cheat || []).map(function (c, i) {
      var tc = (d.cheat || [])[i] || {};
      return { h: pick(tc.h, c.h), note: c.note == null ? c.note : pick(tc.note, c.note), code: c.code, lang: c.lang };
    });
    return {
      title: pick(d.title, u.title),
      blurb: u.blurb == null ? u.blurb : pick(d.blurb, u.blurb),
      cheat: cheat,
      glossary: d.glossary || []
    };
  };

  function mergeChoices(en, tr) {
    return (en || []).map(function (c, i) { return pick((tr || [])[i], c); });
  }
  /* A question view: every field the graders read (answer, accept, lines,
     rows, exact, run, check, lab, params…) comes from the English. Only the
     words a learner reads are replaced. */
  function mergeAsk(en, tr) {
    if (!en) return en;
    tr = tr || {};
    var out = {};
    Object.keys(en).forEach(function (k) { out[k] = en[k]; });
    if (en.q != null) out.q = pick(tr.q, en.q);
    if (en.choices) out.choices = mergeChoices(en.choices, tr.choices);
    if (typeof en.why === "string") out.why = pick(tr.why, en.why);
    else if (en.why) out.why = mergeChoices(en.why, tr.why);
    if (en.model != null) out.model = pick(tr.model, en.model);
    if (en.rubric) out.rubric = mergeChoices(en.rubric, tr.rubric);
    if (en.predict) out.predict = mergeAsk(en.predict, tr.predict);
    return out;
  }
  I.mergeAsk = mergeAsk;

  /* The lesson as a learner reads it. Display only: hand the ORIGINAL
     lesson to the runner, the graders and anything that computes a key. */
  I.lesson = function (l) {
    var d = lessonTr(l.id);
    if (!d) {
      return {
        title: l.title, brief: l.brief, more: null, hints: l.hints || [],
        steps: (l.steps || []).map(function (s) { return { text: s.text, detail: null }; }),
        questions: l.questions, screens: l.screens, translated: false
      };
    }
    var ts = d.steps || [];
    return {
      title: pick(d.title, l.title),
      brief: l.brief == null ? l.brief : pick(d.brief, l.brief),
      more: d.more || null,
      /* Hints replace as a set: a fuller explanation may need more of them
         (or fewer), and a hint has no grader to line up with. */
      hints: (d.hints && d.hints.length) ? d.hints : (l.hints || []),
      steps: (l.steps || []).map(function (s, i) {
        var t = ts[i];
        if (typeof t === "string") t = { text: t };
        t = t || {};
        return { text: pick(t.text, s.text), detail: t.detail || null };
      }),
      questions: l.questions && l.questions.map(function (q, i) {
        var tq = (d.questions || [])[i] || {};
        var out = {};
        Object.keys(q).forEach(function (k) { out[k] = q[k]; });
        out.q = pick(tq.q, q.q);
        out.choices = mergeChoices(q.choices, tq.choices);
        out.explain = pick(tq.explain, q.explain);
        return out;
      }),
      screens: l.screens && l.screens.map(function (s, i) {
        var tsc = (d.screens || [])[i] || {};
        return { read: s.read == null ? s.read : pick(tsc.read, s.read), ask: mergeAsk(s.ask, tsc.ask) };
      }),
      translated: true
    };
  };

  /* Per-checkpoint solution explanation (stepsol `why`). */
  I.stepWhy = function (lessonId, i, en) {
    var d = lessonTr(lessonId);
    return pick(d && (d.why || [])[i], en);
  };

  /* ---------- checkpoint failure messages ----------
     The tests are English code and stay that way, so their messages are
     translated on the way out instead. A key matches the whole message, or
     the start of it (the runner appends " — thrown at line 3"), and {*}
     stands for a part that varies at run time, e.g. what the learner typed:
       "Expected {*} items, got {*}": "Se esperaban {*} elementos, llegaron {*}" */
  function escRx(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function compile(map) {
    return Object.keys(map).map(function (k) {
      var parts = k.split("{*}");
      return {
        en: k, tr: map[k], wild: parts.length > 1,
        rx: new RegExp("^" + parts.map(escRx).join("([\\s\\S]*?)") + (parts.length > 1 ? "(?=$|\\s—\\s)" : ""))
      };
    }).sort(function (a, b) { return b.en.length - a.en.length; });
  }
  var compiled = typeof WeakMap === "function" ? new WeakMap() : null;
  I.msg = function (lessonId, msg) {
    if (!msg || I.lang === "en") return msg;
    var d = lessonTr(lessonId);
    var map = d && d.messages;
    if (!map) return msg;
    var list = compiled && compiled.get(map);
    if (!list) { list = compile(map); if (compiled) compiled.set(map, list); }
    var s = String(msg);
    if (has(map, s)) return map[s];
    for (var i = 0; i < list.length; i++) {
      var e = list[i], m = s.match(e.rx);
      if (!m) continue;
      var n = 0, caps = m.slice(1);
      var head = e.tr.replace(/\{\*\}/g, function () { return caps[n++] || ""; });
      return head + s.slice(m[0].length);
    }
    return msg;
  };

  /* ---------- Recall cards ----------
     A card's key and its grading are English forever (review.js hashes the
     English prompt and answer). In another language the card SHOWS the
     translation, and a typed card stays typed only while its answer reads
     the same in both languages — code, numbers, keywords. A prose answer
     that was translated is self-graded instead, because the learner would
     be typing Spanish against an English key. */
  I.card = function (item) {
    var view = {
      q: item.q, answer: item.answer, explain: item.explain, typed: item.typed,
      ask: item.ask, courseTitle: item.courseTitle, unitTitle: item.unitTitle
    };
    if (I.lang === "en") return view;
    var course = C._byId && C._byId[item.courseId];
    if (course) view.courseTitle = I.course(course).title;
    var unit = course && (course.units || []).filter(function (u) { return u.id === item.unitId; })[0];
    if (unit) view.unitTitle = I.unit(unit).title;
    var d = lessonTr(item.quizId);
    if (!d) return view;
    var ansTr = null;
    if (item.kind === "quiz" && item.qi != null) {
      var tq = (d.questions || [])[item.qi] || {};
      var q = course && lessonQuestion(course, item.quizId, item.qi);
      view.q = pick(tq.q, item.q);
      view.explain = pick(tq.explain, item.explain);
      if (q) ansTr = (tq.choices || [])[q.answer];
    } else if (item.si != null && item.ask) {
      var tsc = (d.screens || [])[item.si] || {};
      var ask = mergeAsk(item.ask, tsc.ask);
      view.ask = ask;
      view.q = ask.q;
      if (item.kind === "pick") {
        ansTr = (((tsc.ask || {}).choices) || [])[item.ask.answer];
        view.explain = (ask.why || [])[item.ask.answer] || item.explain;
      } else if (item.kind === "explain") {
        view.answer = ask.model;
      } else if (typeof ask.why === "string") {
        view.explain = ask.why;
      }
    }
    if (typeof ansTr === "string" && ansTr.length) {
      view.answer = ansTr;
      if (ansTr.trim() !== String(item.answer || "").trim()) view.typed = false;
    }
    return view;
  };
  function lessonQuestion(course, lessonId, qi) {
    var units = course.units || [];
    for (var u = 0; u < units.length; u++) {
      var ls = units[u].lessons || [];
      for (var j = 0; j < ls.length; j++) if (ls[j].id === lessonId) return (ls[j].questions || [])[qi] || null;
    }
    return null;
  }
})();
