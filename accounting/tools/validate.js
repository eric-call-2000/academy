#!/usr/bin/env node
/* ============================================================
   Accounting Lab — content validator
   ------------------------------------------------------------
   Loads every script the page loads (tools/load.js) and fails on
   anything that would break a lesson or let a wrong answer key
   ship:

   - units have an id, title, icon and blurb; ids are u01, u02, …
     in page order, and lesson ids are <unit>-1 … <unit>-N
   - every lesson has a title, a reading of 120–600 words and at
     least 3 exercises, each with an explanation ("why")
   - journal-entry answer keys use real accounts, put a positive
     amount on one side of each line, and BALANCE
   - number answers are finite; choice answers point at an option;
     sort exercises use only their own categories and use each one
   - the chart of accounts has unique ids and numbers, valid types,
     and numbers in the range for their type
   - interview questions have unique ids, a "why", a model answer of
     40–320 words, and review links that point at real lessons

   Usage: node tools/validate.js        exit 1 on any error
   ============================================================ */
const { load } = require("./load");
const { L, scripts } = load();
const errors = [];
const err = (where, msg) => errors.push(where + ": " + msg);

/* ---------- chart of accounts ---------- */
const RANGES = {
  asset: [1000, 1999], "contra-asset": [1000, 1999], liability: [2000, 2999],
  equity: [3000, 3999], "contra-equity": [3000, 3999], revenue: [4000, 4999],
  "contra-revenue": [4000, 4999], expense: [5000, 7999]
};
const nos = {};
L.accounts.forEach((a) => {
  const w = "accounts.js[" + a.id + "]";
  if (!/^[a-z][a-z0-9_]*$/.test(a.id)) err(w, "id must be lower_snake_case");
  if (!a.name) err(w, "missing name");
  if (!L.type(a.type)) err(w, "unknown type " + a.type);
  else if (a.no < RANGES[a.type][0] || a.no > RANGES[a.type][1]) err(w, "number " + a.no + " is outside the " + a.type + " range");
  if (nos[a.no]) err(w, "number " + a.no + " is also used by " + nos[a.no]);
  nos[a.no] = a.id;
});

/* ---------- units and lessons ---------- */
const unitScripts = scripts.filter((s) => /^units\//.test(s));
if (unitScripts.length !== L.units.length) err("index.html", unitScripts.length + " unit scripts but " + L.units.length + " units registered");
let exercises = 0;
L.units.forEach((u, ui) => {
  const w = "units/" + u.id + ".js";
  const want = "u" + String(ui + 1).padStart(2, "0");
  if (u.id !== want) err(w, "unit " + (ui + 1) + " should have id " + want);
  if (unitScripts[ui] !== "units/" + u.id + ".js") err("index.html", "script " + (ui + 1) + " should be units/" + u.id + ".js");
  ["title", "icon", "blurb"].forEach((k) => { if (!u[k]) err(w, "missing " + k); });
  if (!Array.isArray(u.lessons) || u.lessons.length < 2) { err(w, "needs at least 2 lessons"); return; }
  u.lessons.forEach((l, li) => {
    const lw = w + " " + l.id;
    if (l.id !== u.id + "-" + (li + 1)) err(lw, "lesson " + (li + 1) + " should have id " + u.id + "-" + (li + 1));
    if (!l.title) err(lw, "missing title");
    const words = L.words(l.read);
    if (words < 120 || words > 600) err(lw, "reading is " + words + " words (want 120–600)");
    if (!Array.isArray(l.steps) || l.steps.length < 3) { err(lw, "needs at least 3 exercises"); return; }
    l.steps.forEach((ex, si) => {
      exercises++;
      const ew = lw + " exercise " + (si + 1);
      if (!ex.q) err(ew, "missing question");
      if (!ex.why) err(ew, "missing explanation (why)");
      if (ex.type === "entry") {
        if (!Array.isArray(ex.lines) || ex.lines.length < 2) { err(ew, "an entry needs at least 2 lines"); return; }
        let dr = 0, cr = 0;
        ex.lines.forEach((ln, i) => {
          if (!L.account(ln.acct)) err(ew, "line " + (i + 1) + " uses unknown account " + ln.acct);
          const d = ln.dr || 0, c = ln.cr || 0;
          if ((d > 0) === (c > 0)) err(ew, "line " + (i + 1) + " needs a positive amount on exactly one side");
          if (d < 0 || c < 0) err(ew, "line " + (i + 1) + " has a negative amount");
          dr += d; cr += c;
        });
        if (Math.abs(L.round2(dr) - L.round2(cr)) >= L.CENT) err(ew, "answer key doesn't balance: Dr " + L.round2(dr) + " vs Cr " + L.round2(cr));
        const self = L.checkEntry(ex.lines, ex.lines);
        if (!self.ok) err(ew, "answer key fails its own check: " + self.msg);
      } else if (ex.type === "number") {
        if (typeof ex.answer !== "number" || !isFinite(ex.answer)) err(ew, "answer must be a number");
        if (ex.tol != null && !(ex.tol >= 0)) err(ew, "tol must be ≥ 0");
      } else if (ex.type === "choice") {
        if (!Array.isArray(ex.options) || ex.options.length < 2) err(ew, "needs at least 2 options");
        else if (!(Number.isInteger(ex.answer) && ex.answer >= 0 && ex.answer < ex.options.length)) err(ew, "answer must index an option");
        else if (new Set(ex.options).size !== ex.options.length) err(ew, "duplicate options");
      } else if (ex.type === "classify") {
        const cats = (ex.cats || []).map((c) => c[0]);
        if (cats.length < 2) err(ew, "needs at least 2 categories");
        if (!Array.isArray(ex.items) || ex.items.length < 3) err(ew, "needs at least 3 items");
        else {
          ex.items.forEach((it) => { if (cats.indexOf(it[1]) === -1) err(ew, "item \"" + it[0] + "\" uses unknown category " + it[1]); });
          cats.forEach((c) => { if (!ex.items.some((it) => it[1] === c)) err(ew, "category " + c + " is never the answer"); });
        }
      } else err(ew, "unknown exercise type " + ex.type);
    });
  });
});

/* ---------- parts ---------- */
const inPart = {};
L.PARTS.forEach((pt, i) => {
  if (!pt.title || !pt.blurb) err("core.js PARTS[" + i + "]", "needs a title and blurb");
  pt.units.forEach((id) => {
    if (!L.unit(id)) err("core.js PARTS[" + i + "]", "unknown unit " + id);
    if (inPart[id]) err("core.js PARTS[" + i + "]", id + " is already in " + inPart[id]);
    inPart[id] = pt.title;
  });
});
L.units.forEach((u) => { if (!inPart[u.id]) err("core.js PARTS", u.id + " isn't in any part"); });
const order = [].concat.apply([], L.PARTS.map((pt) => pt.units));
if (order.join() !== L.units.map((u) => u.id).join()) err("core.js PARTS", "parts must list the units in path order");

/* ---------- interview prep ---------- */
const qids = {};
if (!L.interview.length) err("interview.js", "no interview sections registered");
L.interview.forEach((sec) => {
  const w = "interview.js[" + sec.id + "]";
  ["id", "title", "icon", "blurb"].forEach((k) => { if (!sec[k]) err(w, "missing " + k); });
  if (!Array.isArray(sec.questions) || sec.questions.length < 3) { err(w, "needs at least 3 questions"); return; }
  sec.questions.forEach((q) => {
    const qw = w + " " + q.id;
    if (!/^[a-z0-9-]+$/.test(q.id || "")) err(qw, "id must be lower-kebab-case");
    if (qids[q.id]) err(qw, "id is also used in " + qids[q.id]);
    qids[q.id] = sec.id;
    if (!q.q || !/[?.)]$/.test(q.q.trim())) err(qw, "question must be a full sentence ending in ? or .");
    if (!q.why) err(qw, "missing why");
    const words = L.words(q.answer);
    if (words < 40 || words > 320) err(qw, "model answer is " + words + " words (want 40–320)");
    (q.lessons || []).forEach((id) => { if (!L.lesson(id)) err(qw, "review link to unknown lesson " + id); });
  });
});

const lessons = L.allLessons().length;
if (errors.length) {
  console.log(errors.length + " problem" + (errors.length === 1 ? "" : "s") + ":\n  " + errors.join("\n  "));
  process.exitCode = 1;
} else {
  console.log("OK — " + L.units.length + " units, " + lessons + " lessons, " + exercises + " exercises, " + L.accounts.length + " accounts, " +
    L.allQuestions().length + " interview questions in " + L.interview.length + " sections.");
}
