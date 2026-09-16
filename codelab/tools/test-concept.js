/* Engine tests for concept lessons and the operation-counting harness —
   pure Node, no browser, well under a second.
   Usage:  node tools/test-concept.js

   Theory courses grade what a learner predicts, orders and traces, and the
   complexity course grades how a learner's code GROWS. A grading rule that
   is wrong here marks right answers wrong (or wrong ones right) with nothing
   in the lesson to show why, so this file is the CONTRACT: it was written
   before concept.js and harnessCount, and it freezes the surface below.

   ---- concept.js (window.CODELAB.concept; module.exports in Node) ----

   A concept lesson:
     { id, kind: "concept", title, mins, screens: [ { read?, ask? }, ... ] }

   Ask types and their fields:
     predict  { q, code?, answer, accept?, why, run?, check?, transfer?, exact? }
     pick     { q, code?, choices[3..4], answer, why[] (one per choice; why[answer] is the "correct" feedback), run?, check?, transfer? }
     order    { q, lines[>=3], distractors?, groups?, why, transfer? }
     trace    { q, code, columns[], rows[][], given?, why, run?, check?, transfer? }
     lab      { lab, params, predict: <a predict or pick ask> }
     explain  { q, model, rubric[>=2] }

   Grading (all pure):
     normalize(s, exact)          the comparison form of a typed answer
     gradePredict(ask, typed)     -> boolean
     gradePick(ask, index)        -> boolean
     gradeOrder(ask, texts)       -> { ok, firstWrong }   texts = the built lines, in order
     gradeTrace(ask, cells)       -> { ok, firstWrong }   firstWrong = [row, col] or null
     formatLog(args)              the one printed form run-verified answers compare against
     modelFloor(lesson)           minutes: read words / 200 + 1.5 per evidence ask
                                  + 3 per lab + 3 per explain
     checkLesson(lesson)          -> array of problem strings (empty = valid)
     transferIndexes(lesson)      screens a "Test out" shows

   ---- runner.js: instrumentLoops(src), harnessCount(braceless) ----

   instrumentLoops(src) -> { src, braceless }. It puts `__OPS++;` as the
   first statement of every braced for / while / do body, on the same line,
   so line numbers don't move, and counts the loop headers it can't see
   into. One scanner does both, with balanced parentheses and comments and
   strings skipped, so the two answers can never disagree.

   harnessCount(braceless) defines, on the global:
     __OPS                     the running operation count
     T.ops() / T.resetOps()
     T.counted(array)          a Proxy counting element reads/writes (index keys only)
     T.calls(fn)               a wrapper whose .count is how often it was called
     T.growth(make, work, opts) -> { band, counts, ratios, sizes }
        make(n) builds an input with nothing counted; work(input, n) runs with
        __OPS zeroed and the built-in scanners wrapped. Each wrapped built-in
        adds the number of elements it MAY visit (worst case): includes,
        indexOf, lastIndexOf, find, findIndex, findLast, findLastIndex, some,
        every, filter, map, forEach, reduce, reduceRight, join, reverse, fill,
        slice (result length), splice, shift, unshift, concat (result length),
        sort (n log2 n), the array iterators (spread, for-of, new Set(arr));
        String includes/indexOf/split/slice/replace/replaceAll (string length);
        Object.keys/values/entries (result length); Set/Map has/add/get/set/delete (1).
        Bands, from the median doubling ratio: "sublinear" <= 1.3,
        "linear" 1.7..2.4, "quadratic" >= 3.4, anything else "unclear".
        Throws if the learner's code has a brace-less loop, since that loop
        would go uncounted and could make quadratic code look linear. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SRC = fs.readFileSync(path.join(ROOT, "runner.js"), "utf8");

let passed = 0;
const failures = [];
function test(name, fn) {
  try { fn(); passed++; } catch (e) { failures.push(name + " — " + e.message); }
}
function eq(got, want, msg) {
  const a = JSON.stringify(got), b = JSON.stringify(want);
  if (a !== b) throw new Error((msg ? msg + ": " : "") + "expected " + b + ", got " + a);
}
function ok(cond, msg) { if (!cond) throw new Error(msg || "expected true"); }
function caught(fn) { try { fn(); return null; } catch (e) { return e; } }

/* ================= concept.js ================= */

let C = null;
try { C = require(path.join(ROOT, "concept.js")); }
catch (e) { failures.push("concept.js did not load — " + e.message); }

const pick = (extra) => Object.assign({ type: "pick", q: "Which?", choices: ["a", "b", "c", "d"], answer: 2, why: ["no a", "no b", "yes c", "no d"] }, extra || {});
const predict = (extra) => Object.assign({ type: "predict", q: "What prints?", answer: "12", why: "Because." }, extra || {});
function lesson(screens, extra) {
  return Object.assign({ id: "algo-u9-1", kind: "concept", title: "T", mins: 12, screens }, extra || {});
}
const VALID = () => lesson([
  { read: "Some words here.", ask: pick() },
  { ask: predict({ transfer: true }) },
  { read: "More words.", ask: pick({ transfer: true }) },
  { ask: { type: "explain", q: "Why?", model: "Because.", rubric: ["one", "two"] } }
]);

if (C) {
  test("normalize: trims, collapses spaces, drops backticks and trailing punctuation, lowercases", () => {
    eq(C.normalize("  `Hello   World`. "), "hello world");
  });
  test("normalize: exact keeps case", () => {
    eq(C.normalize(" `Map` ", true), "Map");
  });
  test("normalize: thousands separators in a plain number go", () => {
    eq(C.normalize("2,692,537"), "2692537");
    eq(C.normalize("-1,000"), "-1000");
  });
  test("normalize: a comma list that isn't a number keeps its commas", () => {
    eq(C.normalize("1,10,9"), "1,10,9");
  });
  test("normalize: big-O spellings meet", () => {
    const want = C.normalize("O(n^2)");
    eq(C.normalize("O(n²)"), want);
    eq(C.normalize("o( n^2 )"), want);
    eq(C.normalize("O(log n)"), C.normalize("O(logn)"));
    eq(C.normalize("O(n·m)"), C.normalize("O(n*m)"));
    eq(C.normalize("O(n × m)"), C.normalize("O(n*m)"));
  });

  test("gradePredict: answer and accept list, never an empty guess", () => {
    const a = predict({ answer: "O(n)", accept: ["linear"] });
    ok(C.gradePredict(a, "o(n)"));
    ok(C.gradePredict(a, " Linear "));
    ok(!C.gradePredict(a, "O(n^2)"));
    ok(!C.gradePredict(a, ""));
    ok(!C.gradePredict(predict({ answer: "" }), ""), "an empty typed answer never matches");
  });
  test("gradePredict: exact asks are case-sensitive", () => {
    const a = predict({ answer: "NaN", exact: true });
    ok(C.gradePredict(a, "NaN"));
    ok(!C.gradePredict(a, "nan"));
  });

  test("gradePick: only the answer index", () => {
    ok(C.gradePick(pick(), 2));
    ok(!C.gradePick(pick(), 0));
    ok(!C.gradePick(pick(), "2"), "a string index is not a pick");
  });

  const ORDER = { type: "order", q: "Build it", lines: ["let lo = 0;", "let hi = n;", "while (lo < hi) {", "}"], distractors: ["while (lo <= hi) {"], why: "." };
  test("gradeOrder: exact order passes", () => {
    eq(C.gradeOrder(ORDER, ORDER.lines.slice()), { ok: true, firstWrong: null });
  });
  test("gradeOrder: first wrong position is reported", () => {
    eq(C.gradeOrder(ORDER, ["let lo = 0;", "let hi = n;", "while (lo <= hi) {", "}"]), { ok: false, firstWrong: 2 });
  });
  test("gradeOrder: too few lines is wrong at the first missing position", () => {
    eq(C.gradeOrder(ORDER, ["let lo = 0;", "let hi = n;"]), { ok: false, firstWrong: 2 });
  });
  test("gradeOrder: extra lines are wrong", () => {
    eq(C.gradeOrder(ORDER, ORDER.lines.concat(["}"])), { ok: false, firstWrong: 4 });
  });
  test("gradeOrder: lines inside a group may swap", () => {
    const g = Object.assign({}, ORDER, { groups: [[0, 1]] });
    eq(C.gradeOrder(g, ["let hi = n;", "let lo = 0;", "while (lo < hi) {", "}"]), { ok: true, firstWrong: null });
    eq(C.gradeOrder(ORDER, ["let hi = n;", "let lo = 0;", "while (lo < hi) {", "}"]).ok, false, "without the group they may not");
  });
  test("gradeOrder: identical lines are interchangeable", () => {
    const o = { type: "order", q: "q", lines: ["a {", "b {", "}", "}"], why: "." };
    eq(C.gradeOrder(o, ["a {", "b {", "}", "}"]).ok, true);
  });

  const TRACE = { type: "trace", q: "Trace", code: "x", columns: ["lo", "hi", "mid"], rows: [[0, 15, 7], [8, 15, 11]], why: "." };
  test("gradeTrace: numbers typed as text match, spacing ignored", () => {
    eq(C.gradeTrace(TRACE, [["0", " 15", "7"], ["8", "15", "11 "]]), { ok: true, firstWrong: null });
  });
  test("gradeTrace: first wrong cell, row-major", () => {
    eq(C.gradeTrace(TRACE, [["0", "15", "7"], ["8", "14", "10"]]), { ok: false, firstWrong: [1, 1] });
  });
  test("gradeTrace: given columns are not graded", () => {
    const t = Object.assign({}, TRACE, { given: 1 });
    eq(C.gradeTrace(t, [["whatever", "15", "7"], ["", "15", "11"]]), { ok: true, firstWrong: null });
  });
  test("gradeTrace: a blank cell is wrong", () => {
    eq(C.gradeTrace(TRACE, [["0", "", "7"], ["8", "15", "11"]]).firstWrong, [0, 1]);
  });

  test("formatLog: strings raw, numbers and booleans as String, objects and arrays as JSON, joined by a space", () => {
    eq(C.formatLog(["a", 1, true, [1, 2], { k: "v" }, null, undefined]), 'a 1 true [1,2] {"k":"v"} null undefined');
  });

  test("modelFloor: words, evidence, labs and explains", () => {
    const words = new Array(201).join("w ").trim();   // 200 words
    const l = lesson([
      { read: words, ask: pick() },
      { ask: predict() },
      { ask: { type: "lab", lab: "doubling", params: {}, predict: pick() } },
      { ask: { type: "explain", q: "Why?", model: "m", rubric: ["a", "b"] } }
    ]);
    // 200 read words + 33 words of question text, then 1.5 + 1.5 + 3 + 3
    eq(C.modelFloor(l), 233 / 200 + 1.5 + 1.5 + 3 + 3);
  });
  test("modelFloor: words in a q, code, choices and why count too", () => {
    const l = lesson([{ ask: predict({ q: "one two three four", why: "five six" }) }]);
    ok(C.modelFloor(l) > 1.5, "question and feedback text are reading");
  });

  test("checkLesson: a well-formed lesson has no problems", () => {
    eq(C.checkLesson(VALID()), []);
  });
  function problems(l) { return C.checkLesson(l).join(" | "); }
  test("checkLesson: unknown ask type", () => {
    const l = VALID(); l.screens[0].ask = { type: "essay", q: "?" };
    ok(/unknown ask type/.test(problems(l)), problems(l));
  });
  test("checkLesson: a read over 180 words", () => {
    const l = VALID(); l.screens[0].read = new Array(190).join("word ");
    ok(/180 words/.test(problems(l)), problems(l));
  });
  test("checkLesson: two screens in a row without an ask", () => {
    const l = VALID(); l.screens.splice(1, 0, { read: "a" }, { read: "b" });
    ok(/in a row without a question/.test(problems(l)), problems(l));
  });
  test("checkLesson: the last screen must ask something", () => {
    const l = VALID(); l.screens.push({ read: "the end" });
    ok(/last screen/.test(problems(l)), problems(l));
  });
  test("checkLesson: fewer than two transfer asks", () => {
    const l = VALID(); delete l.screens[1].ask.transfer;
    ok(/transfer/.test(problems(l)), problems(l));
  });
  test("checkLesson: explain and lab asks can't be transfer asks", () => {
    const l = VALID(); l.screens[3].ask.transfer = true;
    ok(/transfer/.test(problems(l)), problems(l));
  });
  test("checkLesson: pick needs a why for every choice, including the answer", () => {
    const l = VALID(); l.screens[0].ask.why = ["no a", "", "yes c", "no d"];
    ok(/why/.test(problems(l)), problems(l));
    l.screens[0].ask.why = ["no a", "no b", null, "no d"];
    ok(/why/.test(problems(l)), problems(l));
  });
  test("checkLesson: pick answer out of range", () => {
    const l = VALID(); l.screens[0].ask.answer = 4;
    ok(/answer/.test(problems(l)), problems(l));
  });
  test("checkLesson: pick with 2 or 5 choices", () => {
    const l = VALID(); l.screens[0].ask.choices = ["a", "b"]; l.screens[0].ask.why = ["x", null]; l.screens[0].ask.answer = 1;
    ok(/choices/.test(problems(l)), problems(l));
  });
  test("checkLesson: order groups must be contiguous and in range", () => {
    const l = VALID(); l.screens[0].ask = { type: "order", q: "q", lines: ["a", "b", "c"], groups: [[0, 2]], why: "." };
    ok(/group/.test(problems(l)), problems(l));
  });
  test("checkLesson: a distractor identical to a real line is a bug", () => {
    const l = VALID(); l.screens[0].ask = { type: "order", q: "q", lines: ["a", "b", "c"], distractors: ["b"], why: "." };
    ok(/distractor/.test(problems(l)), problems(l));
  });
  test("checkLesson: trace rows must match the columns", () => {
    const l = VALID(); l.screens[0].ask = { type: "trace", q: "q", code: "c", columns: ["a", "b"], rows: [[1, 2], [3]], why: "." };
    ok(/row/.test(problems(l)), problems(l));
  });
  test("checkLesson: run on a trace needs check code", () => {
    const l = VALID(); l.screens[0].ask = { type: "trace", q: "q", code: "c", columns: ["a"], rows: [[1]], why: ".", run: true };
    ok(/check/.test(problems(l)), problems(l));
  });
  test("checkLesson: a lab must be a known lab with a predict or pick inside", () => {
    const l = VALID(); l.screens[0].ask = { type: "lab", lab: "nope", params: {}, predict: pick() };
    ok(/lab/.test(problems(l)), problems(l));
    const l2 = VALID(); l2.screens[0].ask = { type: "lab", lab: "doubling", params: {}, predict: { type: "explain", q: "?", model: "m", rubric: ["a", "b"] } };
    ok(/lab/.test(problems(l2)), problems(l2));
  });
  test("checkLesson: explain needs a model and at least two rubric lines", () => {
    const l = VALID(); l.screens[3].ask.rubric = ["only one"];
    ok(/rubric/.test(problems(l)), problems(l));
  });
  test("checkLesson: mins must sit between the floor and twice the floor", () => {
    const low = VALID(); low.mins = 1;
    ok(/mins/.test(problems(low)), problems(low));
    const high = VALID(); high.mins = 200;
    ok(/mins/.test(problems(high)), problems(high));
  });
  test("checkLesson: concept lessons carry no steps or files", () => {
    const l = VALID(); l.steps = [{ test: "x" }];
    ok(/steps/.test(problems(l)), problems(l));
  });
  test("transferIndexes: the screens a Test out shows", () => {
    eq(C.transferIndexes(VALID()), [1, 2]);
  });
}

/* ================= runner.js counting ================= */

/* Pull `function name(...) { ... }` out of runner.js by brace matching,
   skipping strings, regex-free comments and quotes (same extractor as
   test-warehouse.js). */
function extract(name) {
  const start = SRC.indexOf("function " + name + "(");
  if (start === -1) throw new Error("runner.js has no function " + name);
  let depth = 0;
  for (let i = SRC.indexOf("{", start); i < SRC.length; i++) {
    const c = SRC[i], n = SRC[i + 1];
    if (c === "/" && n === "/") { i = SRC.indexOf("\n", i); continue; }
    if (c === "/" && n === "*") { i = SRC.indexOf("*/", i + 2) + 1; continue; }
    if (c === '"' || c === "'") {
      for (i++; SRC[i] !== c; i++) if (SRC[i] === "\\") i++;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}" && --depth === 0) return SRC.slice(start, i + 1);
  }
  throw new Error("unbalanced braces in " + name);
}

let countLoops = null, bracelessLoops = null, HARNESS = null;
try {
  const instrumentLoops = vm.runInNewContext("(" + extract("instrumentLoops") + ")");
  countLoops = src => instrumentLoops(src).src;
  bracelessLoops = src => instrumentLoops(src).braceless;
  HARNESS = extract("harnessCount");
} catch (e) { failures.push("runner.js counting functions — " + e.message); }

/* A fresh sandbox per test, with the learner's code instrumented exactly as
   buildWorkerSrc does it. */
function build(learnerSrc) {
  const G = { console };
  G.self = G;
  vm.createContext(G);
  vm.runInContext("var T = {};", G);
  vm.runInContext("(" + HARNESS + ")(" + bracelessLoops(learnerSrc || "") + ");", G);
  if (learnerSrc) vm.runInContext(countLoops(learnerSrc), G);
  return G;
}
const RANGE = "function (n) { return Array.from({ length: n }, function (_, i) { return i; }); }";
function growth(G, workSrc, opts) {
  return vm.runInContext("T.growth(" + RANGE + ", " + workSrc + (opts ? ", " + JSON.stringify(opts) : "") + ")", G);
}

if (countLoops && HARNESS) {
  test("countLoops: every braced for / while / do body starts with __OPS++, on the same line", () => {
    const src = "for (let i = 0; i < n; i++) {\n  x();\n}\nwhile (a(b)) {\n}\ndo {\n} while (x);\nfor (const v of list) {}";
    const out = countLoops(src);
    eq(out.split("\n").length, src.split("\n").length, "line count unchanged");
    eq((out.match(/__OPS\+\+;/g) || []).length, 4);
  });
  test("countLoops: a header with nested calls is still found", () => {
    eq((countLoops("for (let i = f(g(x)); i < h(k(n)); i++) {\n}").match(/__OPS\+\+;/g) || []).length, 1);
  });
  test("countLoops: loop words inside strings, comments and names are ignored", () => {
    const src = "const s = 'for (x) {';\n// while (y) {\nconst forward = 1; function whileLoop() {}";
    eq(countLoops(src), src);
  });
  test("countLoops: code without loops is unchanged", () => {
    eq(countLoops("const a = 1;\nfunction f() { return a; }"), "const a = 1;\nfunction f() { return a; }");
  });
  test("bracelessLoops: finds for/while with no brace, ignores do-while tails and comments", () => {
    eq(bracelessLoops("for (let i = 0; i < n; i++) total += i;"), 1);
    eq(bracelessLoops("while (i < n) i++;"), 1);
    eq(bracelessLoops("do {\n  i++;\n} while (i < n);"), 0);
    eq(bracelessLoops("// for (each item) we loop\nfor (const x of xs) {\n}"), 0);
    eq(bracelessLoops("/* while (true) spin */ const a = 1;"), 0);
    eq(bracelessLoops("for (const x of xs)\n{\n}"), 0, "a brace on the next line still counts as braced");
  });

  test("T.counted: element reads and writes count, length does not", () => {
    const G = build();
    const n = vm.runInContext("var a = T.counted([1, 2, 3]); T.resetOps(); var s = a[0] + a[2]; a[1] = 9; a.length; T.ops();", G);
    eq(n, 3);
  });
  test("T.calls: counts invocations and passes through", () => {
    const G = build();
    eq(vm.runInContext("var f = T.calls(function (x) { return x * 2; }); [f(1), f(2), f.count];", G), [2, 4, 2]);
  });

  test("T.growth: a braced single loop is linear", () => {
    const G = build("function sum(list) { let s = 0; for (let i = 0; i < list.length; i++) { s += list[i]; } return s; }");
    const g = growth(G, "function (list) { return sum(list); }");
    eq(g.band, "linear", "counts " + g.counts);
    eq(g.sizes, [250, 500, 1000, 2000]);
  });
  test("T.growth: nested learner loops are quadratic", () => {
    const G = build("function pairs(list) { let c = 0; for (const a of list) { for (const b of list) { c++; } } return c; }");
    eq(growth(G, "function (list) { return pairs(list); }").band, "quadratic");
  });
  test("T.growth: includes inside a loop is quadratic (the hidden loop)", () => {
    const G = build("function dedupe(list) { const r = []; for (const v of list) { if (!r.includes(v)) { r.push(v); } } return r; }");
    const g = growth(G, "function (list) { return dedupe(list); }");
    eq(g.band, "quadratic", "counts " + g.counts);
  });
  test("T.growth: a Set makes the same function linear", () => {
    const G = build("function dedupe(list) { const seen = new Set(); const r = []; for (const v of list) { if (!seen.has(v)) { seen.add(v); r.push(v); } } return r; }");
    eq(growth(G, "function (list) { return dedupe(list); }").band, "linear");
  });
  test("T.growth: [...new Set(list)] with no loop at all is linear, not free", () => {
    const G = build("function dedupe(list) { return [...new Set(list)]; }");
    const g = growth(G, "function (list) { return dedupe(list); }");
    eq(g.band, "linear", "counts " + g.counts);
    ok(g.counts[0] >= 250, "the Set constructor's walk over the input is counted");
  });
  test("T.growth: spread inside reduce (a copy per item) is quadratic", () => {
    const G = build("function copyAll(list) { return list.reduce(function (acc, x) { return [...acc, x]; }, []); }");
    eq(growth(G, "function (list) { return copyAll(list); }").band, "quadratic");
  });
  test("T.growth: filter with includes over two arrays is quadratic", () => {
    const G = build("function common(a, b) { return a.filter(function (x) { return b.includes(x); }); }");
    eq(growth(G, "function (list) { return common(list, list.slice()); }").band, "quadratic");
  });
  test("T.growth: a halving loop is sublinear", () => {
    const G = build("function halves(list) { let c = 0; for (let i = list.length; i > 1; i = Math.floor(i / 2)) { c++; } return c; }");
    eq(growth(G, "function (list) { return halves(list); }").band, "sublinear");
  });
  test("T.growth: sort is counted as n log n and lands in linear, never quadratic", () => {
    const G = build("function sorted(list) { return list.slice().sort(function (a, b) { return b - a; }); }");
    eq(growth(G, "function (list) { return sorted(list); }").band, "linear");
  });
  test("T.growth: a string built then searched per item is quadratic", () => {
    const G = build("function f(list) { let s = ''; const out = []; for (const x of list) { if (!s.includes('|' + x + '|')) { s += '|' + x + '|'; out.push(x); } } return out; }");
    eq(growth(G, "function (list) { return f(list); }").band, "quadratic");
  });
  test("T.growth: make() is never counted", () => {
    const G = build();
    const g = vm.runInContext("T.growth(function (n) { var a = []; for (var i = 0; i < n * n; i++) { a.push(i); } return a.slice(0, n); }, function (list) { return list.length; })", G);
    eq(g.counts, [0, 0, 0, 0]);
  });
  test("T.growth: a brace-less loop in the learner's code is refused, not under-counted", () => {
    const G = build("function sum(list) { let s = 0; for (let i = 0; i < list.length; i++) s += list[i]; return s; }");
    const e = caught(() => growth(G, "function (list) { return sum(list); }"));
    ok(e && /braces/.test(e.message), "expected a message about braces, got " + (e && e.message));
  });
  test("T.growth: built-ins are restored afterwards, even when work throws", () => {
    const G = build();
    const before = vm.runInContext("Array.prototype.includes", G);
    caught(() => growth(G, "function () { throw new Error('boom'); }"));
    ok(vm.runInContext("Array.prototype.includes", G) === before, "includes restored");
    growth(G, "function (list) { return list.includes(-1); }");
    ok(vm.runInContext("Array.prototype.includes", G) === before, "includes restored after a clean run");
    eq(vm.runInContext("T.resetOps(); [1, 2, 3].includes(3); T.ops();", G), 0, "outside T.growth nothing is counted");
  });
  test("T.growth: bands from ratios", () => {
    const G = build();
    const band = counts => vm.runInContext("T.bandOf(" + JSON.stringify(counts) + ")", G);
    eq(band([100, 100, 101, 100]), "sublinear");
    eq(band([100, 200, 410, 800]), "linear");
    eq(band([100, 390, 1600, 6500]), "quadratic");
    eq(band([100, 300, 900, 2700]), "unclear");
    eq(band([0, 0, 0, 0]), "sublinear");
  });
  test("T.growth: custom sizes", () => {
    const G = build("function f(list) { let c = 0; for (const x of list) { c++; } return c; }");
    eq(growth(G, "function (list) { return f(list); }", { sizes: [100, 200, 400] }).sizes, [100, 200, 400]);
  });
}

/* ---------------- report ---------------- */

if (failures.length) {
  console.log("  ✗ concept: " + passed + " passed, " + failures.length + " failed");
  failures.forEach(f => console.log("    ✗ " + f));
  process.exit(1);
}
console.log("  ✓ concept: " + passed + " passed, 0 failed");
