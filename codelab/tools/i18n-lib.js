/* Shared by tools/validate-i18n.js and tools/test-i18n.js.

   The translation layer (i18n.js + <lang>/…) may only ever replace words a
   learner reads. These checks hold it to that:

   - every interface string app.js asks for has an entry in each language;
   - every course, position, category, unit, lesson, step, question, choice
     and screen a layer names exists in the English, in the same shape
     (same number of steps, choices, screens), so position-matched text can
     never land on the wrong checkpoint or the wrong answer;
   - every `messages` key is a message the lesson's tests can actually
     produce, so a typo cannot silently leave a failure in English;
   - code stays English: each `code span` in an English step or choice
     must appear unchanged in its translation;
   - each translated lesson and unit records `src`, a hash of the English
     it was translated from. Editing the English changes the hash, and the
     translation is reported stale until someone re-reads it and updates
     `src` — the same contract step solutions keep with their lessons. */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function hash(obj) {
  return crypto.createHash("sha256").update(JSON.stringify(obj)).digest("hex").slice(0, 12);
}

/* What a lesson translation is a translation OF. Only learner-facing text:
   a change to a test or a solution doesn't make the Spanish wrong. */
function askText(a) {
  if (!a) return null;
  return [a.q || null, a.choices || null, a.why || null, a.model || null, a.rubric || null, askText(a.predict)];
}
function lessonSource(l) {
  return {
    title: l.title, brief: l.brief || null, hints: l.hints || null,
    steps: (l.steps || []).map(s => s.text),
    questions: (l.questions || []).map(q => [q.q, q.choices, q.explain]),
    screens: (l.screens || []).map(s => [s.read || null, askText(s.ask)])
  };
}
function lessonHash(l) { return hash(lessonSource(l)); }
function unitHash(u) {
  return hash({ title: u.title, blurb: u.blurb || null, cheat: (u.cheat || []).map(c => [c.h, c.note || null]) });
}

/* ---------- interface keys ---------- */
const LIT = /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g;
function literals(src) {
  return (src.match(LIT) || []).map(s => Function('"use strict"; return (' + s + ");")());
}
function splitArgs(src, openIx) {
  const args = [];
  let depth = 0, cur = "", quote = null;
  for (let i = openIx + 1; i < src.length; i++) {
    const ch = src[i];
    if (quote) { cur += ch; if (ch === "\\") { cur += src[++i]; continue; } if (ch === quote) quote = null; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if ("([{".indexOf(ch) !== -1) { depth++; cur += ch; continue; }
    if (")]}".indexOf(ch) !== -1) {
      if (ch === ")" && depth === 0) { args.push(cur); return args; }
      depth--; cur += ch; continue;
    }
    if (ch === "," && depth === 0) { args.push(cur); cur = ""; continue; }
    cur += ch;
  }
  return args;
}
/* T("…"), Tn(n, "…", "…"), Tc("ctx", "…") as app.js writes them. A
   conditional inside the key argument (T(x ? "a" : "b")) yields both. */
function uiKeys(src) {
  const keys = new Set();
  const rx = /(^|[^\w.$])(T|Tn|Tc)\(/g;
  let m;
  while ((m = rx.exec(src))) {
    const open = m.index + m[0].length - 1;
    const args = splitArgs(src, open);
    if (m[2] === "T") literals(args[0] || "").forEach(k => keys.add(k));
    else if (m[2] === "Tn") [args[1], args[2]].forEach(a => literals(a || "").forEach(k => keys.add(k)));
    else {
      const ctx = literals(args[0] || "")[0];
      literals(args[1] || "").forEach(k => keys.add(ctx + "|" + k));
    }
  }
  return keys;
}

/* ---------- loading ---------- */
function loadAll(root) {
  global.window = { CODELAB: { courses: [], _byId: {}, positions: [], _posById: {} } };
  require(path.join(root, "core.js"));
  require(path.join(root, "courses.js"));
  require(path.join(root, "positions.js"));
  for (const c of window.CODELAB.courses) for (const f of c.files) require(path.join(root, f));
  require(path.join(root, "i18n.js"));
  const I = window.CODELAB.i18n;
  const langs = Object.keys(I.LANGS).filter(l => l !== "en");
  const missingFiles = [];
  for (const lang of langs) {
    for (const f of ["ui.js", "catalog.js"]) {
      const p = path.join(root, lang, f);
      if (fs.existsSync(p)) require(p); else missingFiles.push(`${lang}/${f}`);
    }
    for (const id of Object.keys(I.courses[lang] || {})) {
      for (const f of (I.courses[lang][id].units || [])) {
        const p = path.join(root, lang, f);
        if (fs.existsSync(p)) require(p); else missingFiles.push(`${lang}/${f}`);
      }
    }
  }
  return { C: window.CODELAB, I, langs, missingFiles };
}

/* ---------- the checks ---------- */
const CODE = /`[^`\n]+`/g;
function codeSpans(s) { return (String(s || "").match(CODE) || []); }
function keepsCode(en, tr) {
  if (typeof tr !== "string" || !tr) return [];
  return codeSpans(en).filter(c => tr.indexOf(c) === -1);
}
function lenMismatch(what, en, tr) {
  if (tr == null) return null;
  if (!Array.isArray(tr)) return `${what} should be a list`;
  return tr.length !== (en || []).length ? `${what}: ${tr.length} given, the English has ${(en || []).length}` : null;
}
/* Messages are written as JS string literals inside the test source, so
   compare without backslashes: the runtime message has none. */
function inTests(lesson, key) {
  const src = (lesson.steps || []).map(s => s.test || "").join("\n").replace(/\\/g, "");
  return key.replace(/\\/g, "").split("{*}").every(part => !part || src.indexOf(part) !== -1);
}
function checkAsk(where, en, tr, problems) {
  if (!tr) return;
  if (!en) { problems.push(`${where}: translates a question the English screen doesn't have`); return; }
  if (tr.choices) {
    const e = lenMismatch(`${where} choices`, en.choices, tr.choices);
    if (e) problems.push(e);
    else tr.choices.forEach((c, i) => keepsCode(en.choices[i], c).forEach(cs => problems.push(`${where} choice ${i + 1}: code ${cs} must appear unchanged`)));
  }
  if (Array.isArray(tr.why) || Array.isArray(en.why)) {
    if (tr.why != null) { const e = lenMismatch(`${where} why`, en.why, tr.why); if (e) problems.push(e); }
  }
  if (tr.rubric) { const e = lenMismatch(`${where} rubric`, en.rubric, tr.rubric); if (e) problems.push(e); }
  if (tr.predict) checkAsk(where + " predict", en.predict, tr.predict, problems);
}

function check(root) {
  const { C, I, langs, missingFiles } = loadAll(root);
  const failures = [], stale = [], report = [];
  missingFiles.forEach(f => failures.push(`missing file ${f}`));

  const appSrc = ["app.js"].map(f => fs.readFileSync(path.join(root, f), "utf8")).join("\n");
  const keys = uiKeys(appSrc);
  /* Labels app.js translates through a variable rather than a literal. */
  ["Full-Stack Engineer Path", "Base", "Professional", "Dark", "Alternative Light", "Beginner", "Intermediate", "Advanced",
   "PROJECT", "QUIZ", "THEORY", "SHELL", "JS", "WEB"].forEach(k => keys.add(k));
  for (const c of C.courses) keys.add(c.level || "Beginner");
  const syncSrc = fs.readFileSync(path.join(root, "sync.js"), "utf8");
  (syncSrc.match(/bad\((["'])(?:(?!\1)[^\\]|\\.)*\1/g) || []).forEach(s => literals(s.slice(4)).forEach(k => keys.add(k)));

  // Per-lesson lookup in the English
  const lessonIx = {}, unitIx = {};
  for (const c of C.courses) for (const u of c.units) {
    unitIx[u.id] = { unit: u, course: c };
    for (const l of u.lessons) lessonIx[l.id] = { lesson: l, unit: u, course: c };
  }

  for (const lang of langs) {
    const ui = I.ui[lang] || {};
    const missing = [...keys].filter(k => !Object.prototype.hasOwnProperty.call(ui, k));
    missing.forEach(k => failures.push(`${lang}: interface string has no translation: ${JSON.stringify(k)}`));
    const unused = Object.keys(ui).filter(k => !keys.has(k));
    unused.forEach(k => failures.push(`${lang}/ui.js: ${JSON.stringify(k)} is not used by the app — remove it`));
    Object.keys(ui).forEach(k => {
      const want = (k.match(/\{\d+\}/g) || []).sort().join();
      const got = (String(ui[k]).match(/\{\d+\}/g) || []).sort().join();
      if (keys.has(k) && want !== got) failures.push(`${lang}/ui.js: ${JSON.stringify(k)} must keep the placeholders ${want || "(none)"}, has ${got || "(none)"}`);
    });

    for (const id of Object.keys(I.courses[lang] || {})) if (!C._byId[id]) failures.push(`${lang}/catalog.js: no course "${id}"`);
    for (const id of Object.keys(I.positions[lang] || {})) if (!C._posById[id]) failures.push(`${lang}/catalog.js: no position "${id}"`);
    for (const id of Object.keys(I.cats[lang] || {})) if (!C._catById[id]) failures.push(`${lang}/catalog.js: no category "${id}"`);
    for (const c of C.courses) if (!(I.courses[lang] || {})[c.id]) failures.push(`${lang}/catalog.js: course "${c.id}" has no title`);
    for (const p of C.positions) if (!(I.positions[lang] || {})[p.id]) failures.push(`${lang}/catalog.js: position "${p.id}" has no title`);
    for (const k of Object.keys(C._catById)) if (!(I.cats[lang] || {})[k]) failures.push(`${lang}/catalog.js: category "${k}" has no label`);

    const units = I.units[lang] || {};
    const done = {};      // courseId -> { units, lessons, stale }
    for (const uid of Object.keys(units)) {
      const tu = units[uid], hit = unitIx[uid];
      const where = `${lang} ${uid}`;
      if (!hit) { failures.push(`${where}: no English unit with this id`); continue; }
      const { unit, course } = hit;
      const listed = ((I.courses[lang] || {})[course.id] || {}).units || [];
      if (!listed.length) failures.push(`${where}: ${lang}/catalog.js doesn't list this course's layer files, so the app never loads it`);
      const d = done[course.id] || (done[course.id] = { units: 0, lessons: 0, stale: 0 });
      d.units++;
      if (tu.cheat) { const e = lenMismatch(`${where} cheat`, unit.cheat, tu.cheat); if (e) failures.push(e); }
      if (tu.title || tu.blurb || tu.cheat) {
        const want = unitHash(unit);
        if (tu.src !== want) { stale.push(`${where}: unit text ${tu.src ? "is stale" : "has no src"} — re-check title/blurb/cheatsheet, then set src: "${want}"`); d.stale++; }
      }
      for (const lid of Object.keys(tu.lessons || {})) {
        const tl = tu.lessons[lid], lw = `${lang} ${lid}`;
        const lh = lessonIx[lid];
        if (!lh || lh.unit !== unit) { failures.push(`${lw}: not a lesson of ${uid}`); continue; }
        const l = lh.lesson;
        d.lessons++;
        const want = lessonHash(l);
        if (tl.src !== want) { stale.push(`${lw}: ${tl.src ? "stale — the English changed" : "has no src"}; re-check it, then set src: "${want}"`); d.stale++; }
        if (tl.steps) {
          const e = lenMismatch(`${lw} steps`, l.steps, tl.steps);
          if (e) failures.push(e);
          else tl.steps.forEach((s, i) => {
            const text = typeof s === "string" ? s : (s && s.text);
            keepsCode(l.steps[i].text, text).forEach(cs => failures.push(`${lw} step ${i + 1}: code ${cs} must appear unchanged`));
          });
        }
        if (tl.why) { const e = lenMismatch(`${lw} why`, l.steps, tl.why); if (e) failures.push(e); }
        if (tl.questions) {
          const e = lenMismatch(`${lw} questions`, l.questions, tl.questions);
          if (e) failures.push(e);
          else tl.questions.forEach((q, i) => q && checkAsk(`${lw} question ${i + 1}`, l.questions[i], q, failures));
        }
        if (tl.screens) {
          const e = lenMismatch(`${lw} screens`, l.screens, tl.screens);
          if (e) failures.push(e);
          else tl.screens.forEach((s, i) => s && checkAsk(`${lw} screen ${i + 1}`, l.screens[i].ask, s.ask, failures));
        }
        Object.keys(tl.messages || {}).forEach(k => {
          if (!inTests(l, k)) failures.push(`${lw}: message ${JSON.stringify(k)} doesn't occur in the lesson's tests (copy it exactly; {*} marks a part that varies)`);
        });
      }
    }
    for (const c of C.courses) {
      if (c.stub) continue;
      const d = done[c.id] || { units: 0, lessons: 0, stale: 0 };
      const total = c.units.reduce((n, u) => n + u.lessons.length, 0);
      report.push({ lang, course: c.id, units: d.units, unitTotal: c.units.length, lessons: d.lessons, lessonTotal: total, stale: d.stale });
    }
  }
  return { failures, stale, report, keys: [...keys] };
}

module.exports = { lessonHash, unitHash, lessonSource, uiKeys, check, loadAll };
