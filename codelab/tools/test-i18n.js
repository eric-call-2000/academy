/* The contract for i18n.js and tools/validate-i18n.js. Runs in ~1s as
   validate.js phase 0l.

   The translation layer is allowed to change words and nothing else, so most
   of these cases pin down what must NOT move: a translated question keeps its
   answer index, a translated lesson view keeps its tests, a translated Recall
   card keeps grading against English unless its answer reads differently.
   The rest prove the validator catches each way a layer can drift from the
   English it was written against. */
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");
const L = require(path.join(__dirname, "i18n-lib.js"));

const ROOT = path.join(__dirname, "..");
const SRC = fs.readFileSync(path.join(ROOT, "i18n.js"), "utf8");

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failed++; console.log("  ✗ " + name + "\n      " + (e && e.message)); }
}
function eq(a, b, what) {
  const x = JSON.stringify(a), y = JSON.stringify(b);
  if (x !== y) throw new Error((what ? what + ": " : "") + "expected " + y + ", got " + x);
}

/* A fresh i18n.js in its own global, with a chosen saved language. */
function engine(lang) {
  const store = lang ? { codelab_lang_v1: lang } : {};
  const ctx = vm.createContext({
    window: { CODELAB: { _byId: {} } },
    localStorage: { getItem: k => store[k] || null, setItem: (k, v) => { store[k] = v; } },
    navigator: { language: "en-US" },
    RegExp, Object, Array, String, JSON, WeakMap
  });
  vm.runInContext(SRC, ctx);
  return ctx.window.CODELAB.i18n;
}

/* ---------- interface strings ---------- */
test("English is the key and the fallback", () => {
  const I = engine("es");
  I.addStrings("es", { "Start: {0}": "Empezar: {0}" });
  eq(I.t("Start: {0}", "HTML"), "Empezar: HTML");
  eq(I.t("Not in the table {0}", 3), "Not in the table 3");
  eq(engine("en").t("Start: {0}", "HTML"), "Start: HTML");
});
test("plurals pick one/many and keep extra arguments", () => {
  const I = engine("es");
  I.addStrings("es", { "{0} card": "{0} tarjeta", "{0} cards": "{0} tarjetas", "{1} of {0} done": "{1} de {0} listas" });
  eq(I.tn(1, "{0} card", "{0} cards"), "1 tarjeta");
  eq(I.tn(4, "{0} card", "{0} cards"), "4 tarjetas");
  eq(I.tn(5, "{1} of {0} done", "{1} of {0} done", 2), "2 de 5 listas");
});
test("a context key separates two meanings of one English word", () => {
  const I = engine("es");
  I.addStrings("es", { "Close": "Cerrar", "grade|Close": "Casi" });
  eq([I.t("Close"), I.tc("grade", "Close")], ["Cerrar", "Casi"]);
  eq(engine("en").tc("grade", "Close"), "Close");
});
test("the language comes from storage, then the browser, then English", () => {
  eq(engine("es").lang, "es");
  eq(engine("fr").lang, "en");
  const ctx = vm.createContext({ window: {}, localStorage: { getItem: () => null }, navigator: { language: "es-MX" }, RegExp, Object, Array, String, JSON, WeakMap });
  vm.runInContext(SRC, ctx);
  eq(ctx.window.CODELAB.i18n.lang, "es");
});

/* ---------- content views ---------- */
const LESSON = {
  id: "x-1", title: "Arrays", brief: "Use `push`.", hints: ["h1"],
  steps: [{ text: "Call `push`", test: "T.expect(a, 'Add one item.');" }, { text: "Log it", test: "" }],
  questions: [{ q: "Which adds?", choices: ["`push`", "`pop`"], answer: 0, explain: "push adds." }],
  screens: [{ read: "Read me", ask: { type: "pick", q: "Pick", choices: ["a", "b"], answer: 1, why: ["no", "yes"], run: true, check: "code" } }]
};
const TR = {
  title: "Arreglos", brief: "Usa `push`.", more: "Un arreglo es…", hints: ["p1", "p2"],
  steps: [{ text: "Llama a `push`", detail: "Agrega al final." }, null],
  questions: [{ q: "¿Cuál agrega?", choices: ["`push`", null], explain: "push agrega." }],
  screens: [{ read: "Lee", ask: { q: "Elige", choices: ["a", "b-es"], why: [null, "sí"] } }],
  why: ["porque"],
  messages: { "Add one item.": "Agrega un elemento.", "Expected {*} items": "Se esperaban {*} elementos" }
};
test("an untranslated lesson reads as the English", () => {
  const I = engine("es");
  const v = I.lesson(LESSON);
  eq([v.title, v.brief, v.translated, v.steps[0].text], ["Arrays", "Use `push`.", false, "Call `push`"]);
});
test("a lesson view replaces words field by field and keeps every grading field", () => {
  const I = engine("es");
  I.addUnit("es", "x-u1", { lessons: { "x-1": TR } });
  const v = I.lesson(LESSON);
  eq([v.title, v.brief, v.more, v.hints], ["Arreglos", "Usa `push`.", "Un arreglo es…", ["p1", "p2"]]);
  eq(v.steps.map(s => s.text), ["Llama a `push`", "Log it"], "null step falls back");
  eq(v.steps[0].detail, "Agrega al final.");
  eq([v.questions[0].q, v.questions[0].choices, v.questions[0].answer], ["¿Cuál agrega?", ["`push`", "`pop`"], 0]);
  const ask = v.screens[0].ask;
  eq([ask.q, ask.choices, ask.why, ask.answer, ask.run, ask.check], ["Elige", ["a", "b-es"], ["no", "sí"], 1, true, "code"]);
  eq(LESSON.title, "Arrays", "the English object is never modified");
});
test("step-solution explanations translate by checkpoint", () => {
  const I = engine("es");
  I.addUnit("es", "x-u1", { lessons: { "x-1": TR } });
  eq([I.stepWhy("x-1", 0, "because"), I.stepWhy("x-1", 1, "because 2")], ["porque", "because 2"]);
});
test("failure messages: exact, with a runner suffix, with a wildcard, and unknown", () => {
  const I = engine("es");
  I.addUnit("es", "x-u1", { lessons: { "x-1": TR } });
  eq(I.msg("x-1", "Add one item."), "Agrega un elemento.");
  eq(I.msg("x-1", "Add one item. — thrown at line 3"), "Agrega un elemento. — thrown at line 3");
  eq(I.msg("x-1", "Expected 3 items"), "Se esperaban 3 elementos");
  eq(I.msg("x-1", "Something else"), "Something else");
  eq(engine("en").msg("x-1", "Add one item."), "Add one item.");
});
test("a Recall card shows Spanish but stays typed only when the answer reads the same", () => {
  const unit = { id: "x-u1", title: "Unit", lessons: [LESSON] };
  const course = { id: "x", title: "X", units: [unit] };
  /* card() finds the course through window.CODELAB._byId. */
  const C = { _byId: { x: course } };
  const quizItem = { kind: "quiz", quizId: "x-1", qi: 0, courseId: "x", unitId: "x-u1", q: "Which adds?", answer: "`push`", explain: "push adds.", typed: true, courseTitle: "X", unitTitle: "Unit" };
  const ctx = vm.createContext({ window: { CODELAB: C }, localStorage: { getItem: () => "es" }, navigator: {}, RegExp, Object, Array, String, JSON, WeakMap });
  vm.runInContext(SRC, ctx);
  const J = ctx.window.CODELAB.i18n;
  J.addUnit("es", "x-u1", { title: "Unidad", lessons: { "x-1": TR } });
  J.defineCourse("es", "x", { title: "Equis" });
  const v = J.card(quizItem);
  eq([v.q, v.explain, v.answer, v.typed, v.courseTitle, v.unitTitle], ["¿Cuál agrega?", "push agrega.", "`push`", true, "Equis", "Unidad"]);
  const conceptItem = { kind: "pick", quizId: "x-1", si: 0, courseId: "x", unitId: "x-u1", q: "Pick", answer: "b", ask: LESSON.screens[0].ask, typed: true };
  const w = J.card(conceptItem);
  eq([w.q, w.answer, w.typed, w.explain], ["Elige", "b-es", false, "sí"]);
});

/* ---------- interface key extraction ---------- */
test("keys are read from T, Tn and Tc calls, both sides of a conditional", () => {
  const keys = [...L.uiKeys(`x(T("A {0}", y)); z(T(c ? "B" : 'C')); Tn(n, "{0} d", "{0} ds"); Tc("g", "Close"); obj.T("no"); myT("no")`)];
  eq(keys.sort(), ["A {0}", "B", "C", "g|Close", "{0} d", "{0} ds"].sort());
});

/* ---------- the validator, against fixture copies ---------- */
const { C } = L.loadAll(ROOT);
const html1 = C._byId.html.units[0].lessons[0];
const html1Unit = C._byId.html.units[0];
function fixture(layerSrc) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "codelab-i18n-"));
  for (const f of ["core.js", "courses.js", "positions.js", "i18n.js", "app.js", "sync.js"]) fs.copyFileSync(path.join(ROOT, f), path.join(dir, f));
  for (const c of C.courses) for (const f of c.files) {
    fs.mkdirSync(path.join(dir, path.dirname(f)), { recursive: true });
    fs.copyFileSync(path.join(ROOT, f), path.join(dir, f));
  }
  fs.mkdirSync(path.join(dir, "es", "html"), { recursive: true });
  fs.copyFileSync(path.join(ROOT, "es", "ui.js"), path.join(dir, "es", "ui.js"));
  const cat = fs.readFileSync(path.join(ROOT, "es", "catalog.js"), "utf8")
    .replace(/course\("html", ("[^"]*"),\s*("[^"]*")\);/, 'course("html", $1, $2, ["html/u1.js"]);');
  fs.writeFileSync(path.join(dir, "es", "catalog.js"), cat);
  fs.writeFileSync(path.join(dir, "es", "html", "u1.js"), layerSrc);
  return dir;
}
function runCheck(layer) {
  const dir = fixture("window.CODELAB.i18n.addUnit(\"es\", \"html-u1\", " + JSON.stringify(layer) + ");");
  try {
    execFileSync(process.execPath, [path.join(__dirname, "validate-i18n.js"), "--quiet", "--root", dir], { encoding: "utf8" });
    return "";
  } catch (e) { return String(e.stdout || e.message); }
  finally { fs.rmSync(dir, { recursive: true, force: true }); }
}
const GOOD_STEPS = ["Dentro de `<body>`, agrega un encabezado `<h1>` que diga **Hello, world!**",
  "Debajo, agrega un párrafo `<p>` presentándote: el texto que quieras."];
function good(extra) {
  return { lessons: { "html-1": Object.assign({ src: L.lessonHash(html1), title: "Tus primeras etiquetas HTML", steps: GOOD_STEPS }, extra || {}) } };
}
test("a layer that lines up passes", () => {
  eq(runCheck(good({ messages: { "No <h1> element found yet — add one inside <body>.": "Todavía no hay un <h1>: agrega uno dentro de <body>." } })), "");
});
test("a stale layer fails and prints the hash to set", () => {
  const out = runCheck(good({ src: "000000000000" }));
  if (out.indexOf("stale") === -1 || out.indexOf(L.lessonHash(html1)) === -1) throw new Error(out);
});
test("a missing src fails", () => {
  const g = good(); delete g.lessons["html-1"].src;
  if (runCheck(g).indexOf("has no src") === -1) throw new Error("not caught");
});
test("the wrong number of steps fails", () => {
  if (runCheck(good({ steps: [GOOD_STEPS[0]] })).indexOf("steps: 1 given, the English has 2") === -1) throw new Error("not caught");
});
test("a code span that changed fails", () => {
  const out = runCheck(good({ steps: ["Dentro del body, agrega un `<h1>`…", GOOD_STEPS[1]] }));
  if (out.indexOf("code `<body>` must appear unchanged") === -1) throw new Error(out);
});
test("a message the tests can't produce fails", () => {
  if (runCheck(good({ messages: { "No h1 here": "x" } })).indexOf("doesn't occur in the lesson's tests") === -1) throw new Error("not caught");
});
test("a lesson from another unit fails", () => {
  const g = good(); g.lessons["css-1"] = { src: "x" };
  if (runCheck(g).indexOf("not a lesson of html-u1") === -1) throw new Error("not caught");
});
test("unit text needs its own src", () => {
  const g = good(); g.title = "Elementos y estructura";
  const out = runCheck(g);
  if (out.indexOf(L.unitHash(html1Unit)) === -1) throw new Error(out);
  g.src = L.unitHash(html1Unit);
  eq(runCheck(g), "");
});

console.log(`i18n: ${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
