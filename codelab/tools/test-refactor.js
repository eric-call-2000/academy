/* Engine tests for the refactoring harness — pure Node, no browser, well under a second.
   Usage:  node tools/test-refactor.js

   Refactoring Legacy Code grades two things: the behavior did NOT move and
   the shape DID. A wrong rule here either fails a correct refactor ("your
   version behaves differently" when it doesn't) or passes a broken one, with
   nothing in the lesson to show why. This file is the CONTRACT for
   harnessRefactor in runner.js (opted into with `refactor: true`):

     T.legacy(src)                   evaluate a function's source, return the function
     T.sameBehavior(a, b, inputs)    -> { ok: true } | { ok: false, input, what, a, b }
                                     what: "result" | "error" | "arguments"
                                     inputs: each an array of arguments (or one argument)
                                     both functions get deep copies; results compared by
                                     value with keys unordered, undefined/NaN/-0 kept apart
     T.expectSame(a, b, inputs, label)  throws a readable message on the first difference
     T.shape(fn)                     -> { lines, depth, params, branches }
                                     lines: non-blank lines; depth: brace nesting inside the
                                     body (0 = flat); branches: if/for/while/case/catch,
                                     ?:, && and || outside strings and comments
     T.repeats(fn, minLen = 25)      trimmed lines of at least minLen chars that occur twice+
*/
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

/* Same extractor as test-concept.js: `function name(...) { ... }` by brace
   matching, skipping strings and comments. */
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

let HARNESS = null;
try { HARNESS = extract("harnessRefactor"); }
catch (e) { failures.push("runner.js harnessRefactor — " + e.message); }

function build(learnerSrc) {
  const G = { console };
  G.self = G;
  vm.createContext(G);
  vm.runInContext("var T = {};", G);
  vm.runInContext("(" + HARNESS + ")();", G);
  if (learnerSrc) vm.runInContext(learnerSrc, G);
  return G;
}
const run = (G, js) => vm.runInContext(js, G);

if (HARNESS) {
  /* ---- sameBehavior ---- */
  test("sameBehavior: equal functions agree", () => {
    const G = build("function a(x) { return x * 2; } function b(x) { return x + x; }");
    eq(run(G, "T.sameBehavior(a, b, [[1], [0], [-3]])"), { ok: true });
  });
  test("sameBehavior: the first differing input is reported, with both results", () => {
    const G = build("function a(x) { return x >= 18; } function b(x) { return x > 18; }");
    eq(run(G, "T.sameBehavior(a, b, [[30], [18], [5]])"), { ok: false, input: "[18]", what: "result", a: "true", b: "false" });
  });
  test("sameBehavior: a single non-array input is one argument", () => {
    const G = build("function a(x) { return x.length; } function b(x) { return x.length; }");
    eq(run(G, "T.sameBehavior(a, b, ['abc', 'de'])"), { ok: true });
  });
  test("sameBehavior: object key order doesn't matter, values do", () => {
    const G = build("function a() { return { x: 1, y: 2 }; } function b() { return { y: 2, x: 1 }; } function c() { return { x: 1, y: '2' }; }");
    eq(run(G, "T.sameBehavior(a, b, [[]])").ok, true);
    eq(run(G, "T.sameBehavior(a, c, [[]])").ok, false, "2 and '2' differ");
  });
  test("sameBehavior: undefined, null, NaN and -0 are all different", () => {
    const G = build("function u() { return undefined; } function n() { return null; } function nan() { return NaN; } function z() { return 0; } function nz() { return -0; }");
    eq(run(G, "T.sameBehavior(u, n, [[]])").ok, false);
    eq(run(G, "T.sameBehavior(nan, z, [[]])").ok, false);
    eq(run(G, "T.sameBehavior(z, nz, [[]])").ok, false);
  });
  test("sameBehavior: a missing property and an undefined one differ", () => {
    const G = build("function a() { return { x: 1 }; } function b() { return { x: 1, y: undefined }; }");
    eq(run(G, "T.sameBehavior(a, b, [[]])").ok, false);
  });
  test("sameBehavior: thrown errors are compared by name and message", () => {
    const G = build("function a(x) { if (!x) throw new TypeError('no x'); return 1; } function b(x) { if (!x) throw new Error('no x'); return 1; } function c(x) { if (!x) throw new TypeError('no x'); return 1; }");
    eq(run(G, "T.sameBehavior(a, b, [[0]])").what, "error");
    eq(run(G, "T.sameBehavior(a, c, [[0], [1]])").ok, true);
  });
  test("sameBehavior: throwing vs returning is a difference", () => {
    const G = build("function a(x) { return x.y; } function b(x) { return x && x.y; }");
    const r = run(G, "T.sameBehavior(a, b, [[null]])");
    eq(r.what, "error"); ok(/TypeError/.test(r.a), "the original throws");
  });
  test("sameBehavior: changing an argument is behavior", () => {
    const G = build("function a(list) { return list.slice().sort(); } function b(list) { return list.sort(); }");
    const r = run(G, "T.sameBehavior(a, b, [[[3, 1, 2]]])");
    eq(r.what, "arguments");
  });
  test("sameBehavior: each function gets its own copy of the inputs", () => {
    const G = build("function a(o) { o.n++; return o.n; } function b(o) { o.n++; return o.n; }");
    eq(run(G, "var inp = [[{ n: 1 }]]; var r = T.sameBehavior(a, b, inp); [r.ok, inp[0][0].n]"), [true, 1]);
  });
  test("expectSame: the message names the input and both answers", () => {
    const G = build("function a(x) { return x >= 18; } function b(x) { return x > 18; }");
    let msg = "";
    try { run(G, "T.expectSame(a, b, [[18]], 'activeAdults')"); } catch (e) { msg = e.message; }
    ok(/activeAdults/.test(msg) && /\[18\]/.test(msg) && /true/.test(msg) && /false/.test(msg), msg);
  });
  test("legacy: evaluates a function's source", () => {
    const G = build();
    eq(run(G, "T.legacy('function (a, b) { return a + b; }')(2, 3)"), 5);
  });

  /* ---- shape ---- */
  test("shape: a flat function", () => {
    const G = build("function f(a, b) {\n  return a + b;\n}");
    eq(run(G, "T.shape(f)"), { lines: 3, depth: 0, params: 2, branches: 0 });
  });
  test("shape: nesting depth counts braces inside the body", () => {
    const G = build("function f(x) {\n  if (x) {\n    for (;;) {\n      if (x > 1) { return 1; }\n    }\n  }\n}");
    eq(run(G, "T.shape(f).depth"), 3);
    eq(run(G, "T.shape(f).branches"), 3);
  });
  test("shape: braces and keywords in strings and comments don't count", () => {
    const G = build("function f() {\n  // if (x) { while (y) {} }\n  var s = '{ if } && ||';\n  /* for { */\n  return s;\n}");
    const sh = run(G, "T.shape(f)");
    eq([sh.depth, sh.branches], [0, 0]);
  });
  test("shape: ternaries and logical operators are branches; ?. and ?? are not", () => {
    const G = build("function f(a, b) { return a ? (b && a.c) || 1 : a?.d ?? 2; }");
    eq(run(G, "T.shape(f).branches"), 3);
  });
  test("shape: params, including defaults", () => {
    const G = build("function f(a, b = 2, { c, d } = {}) { return 1; } function g() { return 1; }");
    eq(run(G, "[T.shape(f).params, T.shape(g).params]"), [3, 0]);
  });
  test("shape: a function name works too, and a missing one is a clear error", () => {
    const G = build("function f() {}");
    eq(run(G, "T.shape('f').lines"), 1);
    let msg = "";
    try { run(G, "T.shape('nope')"); } catch (e) { msg = e.message; }
    ok(/nope\(\)/.test(msg), msg);
  });

  /* ---- repeats ---- */
  test("repeats: long duplicated lines are found once each", () => {
    const G = build("function f(o) {\n  total = total + o.price * o.quantity;\n  x();\n  total = total + o.price * o.quantity;\n  total  =  total + o.price * o.quantity;\n}");
    eq(run(G, "T.repeats(f)"), ["total = total + o.price * o.quantity;"]);
  });
  test("repeats: short lines like braces and returns are ignored", () => {
    const G = build("function f(a) {\n  if (a) {\n  }\n  if (a) {\n  }\n  return a;\n}");
    eq(run(G, "T.repeats(f)"), []);
  });
}

if (failures.length) {
  console.log("  ✗ refactor: " + passed + " passed, " + failures.length + " failed");
  failures.forEach(f => console.log("    ✗ " + f));
  process.exit(1);
}
console.log("  ✓ refactor: " + passed + " passed, 0 failed");
