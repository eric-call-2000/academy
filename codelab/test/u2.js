/* Testing Fundamentals — Unit 2: Build the Runner */
window.CODELAB.addUnit("test", {
  id: "test-u2",
  title: "Build the Runner",
  icon: "⚙️",
  blurb: "it() is a try/catch, describe() is a label, the report is a count — build the test runner every later unit stands on.",
  cheat: [
    { h: "it(): a try/catch that records", lang: "js", code: "function it(name, fn) {\n  try {\n    fn();\n    results.push({ name: name, pass: true, error: null });\n  } catch (e) {\n    results.push({ name: name, pass: false, error: e.message });\n  }\n}", note: "A failing test becomes data, not a crash — that catch is the whole invention." },
    { h: "describe(): a label, nothing more", lang: "js", code: "let currentSuite = \"\";\nfunction describe(label, fn) {\n  currentSuite = label;\n  fn();               // the it() calls inside record with the label\n  currentSuite = \"\";  // reset on the way out\n}" },
    { h: "The report is a count", lang: "js", code: "function report() {\n  const passed = results.filter(r => r.pass).length;\n  return {\n    total: results.length,\n    passed: passed,\n    failed: results.length - passed\n  };\n}", note: "total, one filter, one subtraction. That is all a green/red summary is." },
    { h: "Registry + run(): how real runners work", lang: "js", code: "function it(name, fn) {          // register only — nothing runs yet\n  tests.push({ suite: currentSuite, name: name, fn: fn });\n}\n\nfunction run() {                 // the player\n  results = [];\n  for (const t of tests) {\n    hooks.forEach(h => h());     // beforeEach, before EVERY test\n    try { t.fn(); results.push({ suite: t.suite, name: t.name, pass: true, error: null }); }\n    catch (e) { results.push({ suite: t.suite, name: t.name, pass: false, error: e.message }); }\n  }\n  const passed = results.filter(r => r.pass).length;\n  return { total: results.length, passed: passed, failed: results.length - passed, results: results };\n}", note: "it() registers, run() executes — the split is why a suite can re-run." },
    { h: "beforeEach: a fresh fixture", lang: "js", code: "let hooks = [];\nfunction beforeEach(fn) { hooks.push(fn); }\n\nbeforeEach(() => { cart = []; }); // every test starts clean", note: "Green run 1 + red run 2 = a test leaked state. Reset it here." },
    { h: "The same thing in Jest", lang: "js", code: "describe(\"cart\", () => {\n  beforeEach(() => { cart = []; });\n  it(\"starts empty\", () => {\n    expect(cart.length).toBe(0);\n  });\n});", note: "Identical shape to yours — except now you know what every line actually does." }
  ],
  lessons: [

    {
      id: "test-u2-1",
      title: "it(): catch the throw, record the result",
      kind: "js", chip: "TEST", xp: 15, mins: 13,
      brief: "Something strange, said out loud: for eight courses, every checkmark you have earned was produced by a **test runner** — code that ran your code, caught what it threw, and wrote down the verdict. That machine is what you build in this unit. The checks you have been passing ARE the thing on the workbench now. If that feels circular, good — it means you are seeing it straight.\n\nYou know from Unit 1 that an assertion **throws**. So the smallest runner is a function that **catches the throw and records it**: `it(name, fn)` runs the body in a `try/catch` and pushes one entry — `{ name, pass, error }` — onto a `results` array. No throw → `pass: true, error: null`. Throw → `pass: false`, with `e.message` saved as `error`.\n\nThe catch is the whole invention: a failing test becomes **data instead of a crash**, so every test after it still gets its turn. Your `expect()` from Unit 1 ships at the top of the file, ready to use.",
      example: { lang: "js", code: "// after some it() calls, results might look like:\n[\n  { name: \"capitalizes ada\", pass: true,  error: null },\n  { name: \"handles empty\",   pass: false, error: \"expected Ada to be ada\" }\n]" },
      steps: [
        { text: "Declare `let results = [];`, then write `it(name, fn)` — run the body and record a **pass** entry `{ name, pass: true, error: null }`.",
          test: "T.expect(typeof it === 'function', 'Define it(name, fn).');\nT.expect(Array.isArray(results), 'Declare the runner memory at the top level: let results = [];');\nvar base = results.length;\nit('ckpt: two is two', function () { expect(2).toBe(2); });\nT.eq(results.length, base + 1, 'Every it() call must push exactly ONE entry into results.');\nT.eq(results[base].name, 'ckpt: two is two', 'Record the test name on the entry — the report needs it later.');\nT.eq(results[base].pass, true, 'A body that runs without throwing is a PASS: pass: true.');\nT.eq(results[base].error, null, 'On a pass, store error: null — every entry keeps the same shape.');" },
        { text: "A failing body is **caught and recorded** — `pass: false`, with the thrown `e.message` stored as `error`.",
          test: "var base = results.length;\nvar crashed = false;\ntry { it('ckpt: two is three', function () { expect(2).toBe(3); }); } catch (e) { crashed = true; }\nT.expect(!crashed, 'The throw escaped it()! Catch it: a failing test gets RECORDED — it must never crash the run.');\nT.eq(results.length, base + 1, 'The failing test still pushes its one entry.');\nT.eq(results[base].pass, false, 'A body that throws is a FAIL: pass: false.');\nT.expect(/2/.test(String(results[base].error)) && /3/.test(String(results[base].error)), 'Store e.message as the entry error — it names both values so the report can say what happened. Yours stored: ' + results[base].error);" },
        { text: "One bad test never stops the suite — the test **after** a failure still runs.",
          test: "var base = results.length;\nit('ckpt: fails first', function () { expect('a').toBe('b'); });\nit('ckpt: still runs', function () { expect('ok').toBe('ok'); });\nT.eq(results.length, base + 2, 'Two it() calls, two entries — both must land in results.');\nT.eq(results[base].pass, false, 'The first one records its failure…');\nT.eq(results[base + 1].pass, true, '…and the test AFTER the failure still ran and passed. That is why it() catches: one broken test must never silence the rest.');" }
      ],
      files: [
        { name: "script.js", content: "// ===== yours from Unit 1 — ready to use =====\nfunction expect(actual) {\n  return {\n    toBe: function (expected) {\n      if (actual !== expected) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to be \" + JSON.stringify(expected));\n      }\n    },\n    toEqual: function (expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to equal \" + JSON.stringify(expected));\n      }\n    }\n  };\n}\n// ============================================\n\n// The code under test — already written, already correct:\nfunction capitalize(word) {\n  if (typeof word !== \"string\" || word === \"\") return \"\";\n  return word[0].toUpperCase() + word.slice(1);\n}\n\n// 1) The runner's memory:\n//      let results = [];\n//\n// 2) it(name, fn) — run the body inside try/catch:\n//      no throw → results.push({ name: name, pass: true,  error: null })\n//      throw e  → results.push({ name: name, pass: false, error: e.message })\n//    The throw must NEVER escape it(). Record it instead.\n\n// Try your runner (uncomment once it() exists):\n// it(\"capitalizes ada\", function () { expect(capitalize(\"ada\")).toBe(\"Ada\"); });\n// it(\"wrong on purpose\", function () { expect(capitalize(\"bob\")).toBe(\"bob\"); });\n// console.log(results.length + \" tests recorded\");\n" }
      ],
      hints: [
        "The whole body of it(): `try { fn(); results.push({ name: name, pass: true, error: null }); } catch (e) { results.push({ name: name, pass: false, error: e.message }); }`",
        "`e.message` is the exact string your expect() threw — store that as `error`, not the whole Error object.",
        "If a checkpoint says the throw escaped, your `fn()` call is sitting outside the `try` block."
      ],
      solution: {
        "script.js": "// ===== yours from Unit 1 — ready to use =====\nfunction expect(actual) {\n  return {\n    toBe: function (expected) {\n      if (actual !== expected) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to be \" + JSON.stringify(expected));\n      }\n    },\n    toEqual: function (expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to equal \" + JSON.stringify(expected));\n      }\n    }\n  };\n}\n// ============================================\n\n// The code under test — already written, already correct:\nfunction capitalize(word) {\n  if (typeof word !== \"string\" || word === \"\") return \"\";\n  return word[0].toUpperCase() + word.slice(1);\n}\n\nlet results = [];\n\nfunction it(name, fn) {\n  try {\n    fn();\n    results.push({ name: name, pass: true, error: null });\n  } catch (e) {\n    results.push({ name: name, pass: false, error: e.message });\n  }\n}\n\nit(\"capitalizes ada\", function () { expect(capitalize(\"ada\")).toBe(\"Ada\"); });\nit(\"wrong on purpose\", function () { expect(capitalize(\"bob\")).toBe(\"bob\"); });\nconsole.log(results.length + \" tests recorded\");\n"
      }
    },

    {
      id: "test-u2-2",
      title: "describe(): grouping tests that belong together",
      kind: "js", chip: "TEST", xp: 15, mins: 12,
      brief: "In Jest, `describe(\"cart\", ...)` looks like deep framework magic. It is nearly nothing: a **label**. Set a `currentSuite` variable, call the function (the `it()` calls inside record as usual — now stamped with the label), then set the label back to `\"\"` on the way out.\n\nYour entries grow one field: `{ suite, name, pass, error }`. A test registered inside `describe(\"cart\", ...)` gets `suite: \"cart\"`; a test registered outside any describe gets `suite: \"\"`. That reset on the way out is the part people forget — and the checkpoint checks it.\n\nOne rule stays sacred from lesson 1: grouping changes the **label**, never the safety net. A failure inside a describe is still caught, still recorded, and the tests after it still run.",
      steps: [
        { text: "Add `let currentSuite = \"\";` and `describe(label, fn)` — set the label, call `fn()`, and record `suite: currentSuite` on every entry.",
          test: "T.expect(typeof describe === 'function', 'Define describe(label, fn).');\nvar base = results.length;\ndescribe('ckpt math', function () {\n  it('adds', function () { expect(1 + 1).toBe(2); });\n  it('multiplies', function () { expect(2 * 3).toBe(6); });\n});\nT.eq(results.length, base + 2, 'describe() must CALL its function — the it() calls inside record as usual.');\nT.eq(results[base].suite, 'ckpt math', 'Each entry records the label it was born inside: suite: currentSuite.');\nT.eq(results[base + 1].suite, 'ckpt math', 'Both tests in the group carry the label.');" },
        { text: "Reset the label on the way out — a test registered **outside** any describe gets `suite: \"\"`.",
          test: "var base = results.length;\ndescribe('ckpt strings', function () {\n  it('upcases', function () { expect('a'.toUpperCase()).toBe('A'); });\n});\nit('ckpt outside', function () { expect(true).toBe(true); });\nT.eq(results[base].suite, 'ckpt strings', 'Inside the describe, the label applies…');\nT.eq(results[base + 1].suite, '', '…and once describe returns, the label must be gone: set currentSuite back to the empty string after calling fn().');" },
        { text: "Grouping never breaks the safety net: a failure inside a describe is caught, and the test after it still runs.",
          test: "var base = results.length;\nvar crashed = false;\ntry {\n  describe('ckpt cart', function () {\n    it('breaks on purpose', function () { expect('left').toBe('right'); });\n    it('after the break', function () { expect(1).toBe(1); });\n  });\n} catch (e) { crashed = true; }\nT.expect(!crashed, 'A failing test inside a describe must stay caught — describe() itself never explodes.');\nT.eq(results[base].pass, false, 'The failure is recorded…');\nT.eq(results[base].suite, 'ckpt cart', '…with its suite label attached…');\nT.eq(results[base + 1].pass, true, '…and the test after it still ran. describe changes the label, never the try/catch.');" }
      ],
      files: [
        { name: "script.js", content: "// ===== yours from Unit 1 — ready to use =====\nfunction expect(actual) {\n  return {\n    toBe: function (expected) {\n      if (actual !== expected) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to be \" + JSON.stringify(expected));\n      }\n    },\n    toEqual: function (expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to equal \" + JSON.stringify(expected));\n      }\n    }\n  };\n}\n// ============================================\n\n// The code under test:\nfunction capitalize(word) {\n  if (typeof word !== \"string\" || word === \"\") return \"\";\n  return word[0].toUpperCase() + word.slice(1);\n}\n\n// Your runner from last lesson:\nlet results = [];\n\nfunction it(name, fn) {\n  try {\n    fn();\n    results.push({ name: name, pass: true, error: null });\n  } catch (e) {\n    results.push({ name: name, pass: false, error: e.message });\n  }\n}\n\n// 1) let currentSuite = \"\";\n// 2) describe(label, fn): set currentSuite = label, call fn(), reset currentSuite = \"\"\n// 3) Update BOTH pushes in it() so every entry records its group:\n//      { suite: currentSuite, name: name, pass: …, error: … }\n\n// A suite to group (uncomment once describe exists):\n// describe(\"capitalize()\", function () {\n//   it(\"capitalizes ada\", function () { expect(capitalize(\"ada\")).toBe(\"Ada\"); });\n//   it(\"leaves Ada alone\", function () { expect(capitalize(\"Ada\")).toBe(\"Ada\"); });\n// });\n// console.log(results.length + \" results, all labelled\");\n" }
      ],
      hints: [
        "describe is three lines: `currentSuite = label; fn(); currentSuite = \"\";` — set, run, reset.",
        "The only change to it() is the entry shape: `results.push({ suite: currentSuite, name: name, pass: true, error: null })` — and the same `suite` field in the catch branch.",
        "The it() calls inside fn() just run normally while the label happens to be set — describe does not loop, schedule or copy anything."
      ],
      solution: {
        "script.js": "// ===== yours from Unit 1 — ready to use =====\nfunction expect(actual) {\n  return {\n    toBe: function (expected) {\n      if (actual !== expected) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to be \" + JSON.stringify(expected));\n      }\n    },\n    toEqual: function (expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to equal \" + JSON.stringify(expected));\n      }\n    }\n  };\n}\n// ============================================\n\n// The code under test:\nfunction capitalize(word) {\n  if (typeof word !== \"string\" || word === \"\") return \"\";\n  return word[0].toUpperCase() + word.slice(1);\n}\n\n// Your runner from last lesson:\nlet results = [];\nlet currentSuite = \"\";\n\nfunction describe(label, fn) {\n  currentSuite = label;\n  fn();\n  currentSuite = \"\";\n}\n\nfunction it(name, fn) {\n  try {\n    fn();\n    results.push({ suite: currentSuite, name: name, pass: true, error: null });\n  } catch (e) {\n    results.push({ suite: currentSuite, name: name, pass: false, error: e.message });\n  }\n}\n\ndescribe(\"capitalize()\", function () {\n  it(\"capitalizes ada\", function () { expect(capitalize(\"ada\")).toBe(\"Ada\"); });\n  it(\"leaves Ada alone\", function () { expect(capitalize(\"Ada\")).toBe(\"Ada\"); });\n});\nconsole.log(results.length + \" results, all labelled\");\n"
      }
    },

    {
      id: "test-u2-3",
      title: "The report: a summary you can read",
      kind: "js", chip: "TEST", xp: 15, mins: 13,
      brief: "Nobody reads a raw results array. The `2 passed, 1 failed` line at the end of every Jest run is not framework magic either — it is a **count over your results**: `report()` returns `{ total, passed, failed }`, which is one filter and one subtraction.\n\nThen make it human: `printReport()` logs the summary line — `3 tests: 2 passed, 1 failed` — followed by one line per failure: `FAIL <name>: <error>`. This is why lesson 1 stored the name and the message: the report is where that data pays off.\n\nThe demo suite ships with **one failure on purpose** (keep it!), so your report always has something to show. A report that only ever prints good news teaches you nothing.",
      steps: [
        { text: "Write `report()` — returns `{ total, passed, failed }`, counted from the live `results` array.",
          test: "T.expect(typeof report === 'function', 'Define report().');\nvar p = results.filter(function (r) { return r.pass; }).length;\nvar r = report();\nT.expect(r && typeof r === 'object', 'report() must RETURN the summary object, not log it.');\nT.eq(r.total, results.length, 'total is results.length — every recorded test, pass or fail.');\nT.eq(r.passed, p, 'passed counts the entries with pass: true.');\nT.eq(r.failed, results.length - p, 'failed is the rest: total minus passed.');" },
        { text: "report() must **count, not memorize** — registering another test changes the numbers.",
          test: "var r1 = report();\nit('ckpt: one more pass', function () { expect(1).toBe(1); });\nvar r2 = report();\nT.eq(r2.total, r1.total + 1, 'report() must count the LIVE results array — registering a new test bumps total.');\nT.eq(r2.passed, r1.passed + 1, 'The new passing test lands in passed…');\nT.eq(r2.failed, r1.failed, '…and leaves failed alone.');\nit('ckpt: one more fail', function () { expect('left').toBe('right'); });\nvar r3 = report();\nT.eq(r3.failed, r2.failed + 1, 'A new failing test bumps failed…');\nT.eq(r3.passed, r2.passed, '…and leaves passed alone.');" },
        { text: "Write `printReport()` — log the summary line, then `FAIL <name>: <error>` for every failure — and call it at the bottom.",
          test: "T.expect(typeof printReport === 'function', 'Define printReport().');\nvar p = results.filter(function (r) { return r.pass; }).length;\nvar f = results.length - p;\nprintReport();\nT.expect(T.logged(p + ' passed'), 'printReport() must log the summary line — right now it should read: ' + results.length + ' tests: ' + p + ' passed, ' + f + ' failed');\nT.expect(T.logged(f + ' failed'), 'The summary line also carries the failure count: ' + f + ' failed.');\nT.expect(T.logged('FAIL'), 'After the summary, log one line per failing test, starting with FAIL.');\nT.expect(T.logged('adds 2 and 2'), 'Each FAIL line names its test — the deliberate failure in the demo suite (adds 2 and 2) should appear in your output. Keep that test in the file!');" }
      ],
      files: [
        { name: "script.js", content: "// ===== yours from Unit 1 — ready to use =====\nfunction expect(actual) {\n  return {\n    toBe: function (expected) {\n      if (actual !== expected) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to be \" + JSON.stringify(expected));\n      }\n    },\n    toEqual: function (expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to equal \" + JSON.stringify(expected));\n      }\n    }\n  };\n}\n// ============================================\n\n// Your runner so far:\nlet results = [];\nlet currentSuite = \"\";\n\nfunction describe(label, fn) {\n  currentSuite = label;\n  fn();\n  currentSuite = \"\";\n}\n\nfunction it(name, fn) {\n  try {\n    fn();\n    results.push({ suite: currentSuite, name: name, pass: true, error: null });\n  } catch (e) {\n    results.push({ suite: currentSuite, name: name, pass: false, error: e.message });\n  }\n}\n\n// The code under test:\nfunction add(a, b) {\n  return a + b;\n}\n\n// The demo suite — one failure ON PURPOSE, so your report has something to show:\ndescribe(\"add()\", function () {\n  it(\"adds small numbers\", function () { expect(add(2, 3)).toBe(5); });\n  it(\"adds negatives\", function () { expect(add(-2, -3)).toBe(-5); });\n  it(\"adds 2 and 2 (wrong on purpose)\", function () { expect(add(2, 2)).toBe(5); });\n});\n\n// 1) report() → { total, passed, failed }   (count the results array)\n//\n// 2) printReport() → log the summary, then one line per failure:\n//      \"<total> tests: <passed> passed, <failed> failed\"\n//      \"FAIL <name>: <error>\"\n//\n// 3) Call printReport() at the bottom.\n" }
      ],
      hints: [
        "passed is one filter: `results.filter(r => r.pass).length` — and failed is just `results.length - passed`.",
        "printReport() builds on report(): `const r = report(); console.log(r.total + \" tests: \" + r.passed + \" passed, \" + r.failed + \" failed\");`",
        "Failure lines: `results.filter(x => !x.pass).forEach(x => console.log(\"FAIL \" + x.name + \": \" + x.error));`"
      ],
      solution: {
        "script.js": "// ===== yours from Unit 1 — ready to use =====\nfunction expect(actual) {\n  return {\n    toBe: function (expected) {\n      if (actual !== expected) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to be \" + JSON.stringify(expected));\n      }\n    },\n    toEqual: function (expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to equal \" + JSON.stringify(expected));\n      }\n    }\n  };\n}\n// ============================================\n\n// Your runner so far:\nlet results = [];\nlet currentSuite = \"\";\n\nfunction describe(label, fn) {\n  currentSuite = label;\n  fn();\n  currentSuite = \"\";\n}\n\nfunction it(name, fn) {\n  try {\n    fn();\n    results.push({ suite: currentSuite, name: name, pass: true, error: null });\n  } catch (e) {\n    results.push({ suite: currentSuite, name: name, pass: false, error: e.message });\n  }\n}\n\n// The code under test:\nfunction add(a, b) {\n  return a + b;\n}\n\n// The demo suite — one failure ON PURPOSE, so your report has something to show:\ndescribe(\"add()\", function () {\n  it(\"adds small numbers\", function () { expect(add(2, 3)).toBe(5); });\n  it(\"adds negatives\", function () { expect(add(-2, -3)).toBe(-5); });\n  it(\"adds 2 and 2 (wrong on purpose)\", function () { expect(add(2, 2)).toBe(5); });\n});\n\nfunction report() {\n  const passed = results.filter(function (r) { return r.pass; }).length;\n  return { total: results.length, passed: passed, failed: results.length - passed };\n}\n\nfunction printReport() {\n  const r = report();\n  console.log(r.total + \" tests: \" + r.passed + \" passed, \" + r.failed + \" failed\");\n  results.filter(function (x) { return !x.pass; }).forEach(function (x) {\n    console.log(\"FAIL \" + x.name + \": \" + x.error);\n  });\n}\n\nprintReport();\n"
      }
    },

    {
      id: "test-u2-4",
      title: "beforeEach and run(): a fresh world for every test",
      kind: "js", chip: "TEST", xp: 15, mins: 15,
      brief: "Your runner has a flaw every real runner solved long ago: `it()` executes **immediately**, so a suite can only run once. Two upgrades fix that. First, **split registration from execution**: `it()` now just pushes `{ suite, name, fn }` into a `tests` list; a new `run()` empties `results`, plays every registered body inside the familiar try/catch, and returns `{ total, passed, failed, results }`. Now the same suite can run again and again.\n\nSecond: **`beforeEach(fn)`**. Push each hook into a `hooks` array (an array — later hooks add, they never replace), and have `run()` call every hook before **every** test body. That gives each test a fresh world.\n\nThe cart suite shows why this matters. Without a reset, test 2 leaves an apple in the cart — and the next `run()` asks `starts empty` while standing in test 2's leftovers. The checkpoint runs your suite **twice** and demands identical results: a suite that leaks state disagrees with itself.",
      steps: [
        { text: "Refactor: `it()` only **registers** into a `tests` list; `run()` executes them all and returns `{ total, passed, failed, results }`.",
          test: "T.expect(typeof run === 'function', 'Define run().');\nvar ran = false;\nit('ckpt: lazy body', function () { ran = true; expect(1).toBe(1); });\nT.expect(!ran, 'it() must not execute the body any more — it only REGISTERS { suite, name, fn } into the tests list. run() is what executes.');\nvar r1 = run();\nT.expect(ran === true, 'run() must execute every registered body — the test the checkpoint just registered never ran.');\nT.expect(r1 && typeof r1.total === 'number' && Array.isArray(r1.results), 'run() returns the summary object { total, passed, failed, results }.');\nT.eq(r1.passed + r1.failed, r1.total, 'passed + failed must add up to total.');\nvar r2 = run();\nT.eq(r2.total, r1.total, 'Same registered tests, same total — if total just doubled, run() must EMPTY results before refilling it.');\nT.expect(r2.results.some(function (x) { return x.name === 'ckpt: lazy body' && x.pass === true; }), 'Each results entry still carries { suite, name, pass, error }.');" },
        { text: "Add `beforeEach(fn)` and register the cart reset — then two runs in a row must **agree**, and both must be green.",
          test: "T.expect(typeof beforeEach === 'function', 'Define beforeEach(fn) — push the hook into a hooks array.');\ncart = [];\nvar r1 = run();\nvar r2 = run();\nT.eq(r2.results.map(function (x) { return x.name + ':' + x.pass; }), r1.results.map(function (x) { return x.name + ':' + x.pass; }), 'Your second run disagrees with your first — a test is seeing what an earlier test left behind in the cart. Register beforeEach(function () { cart = []; }) so every test starts fresh.');\nT.eq(r1.failed, 0, 'The whole suite must be green — with the beforeEach reset, starts empty really does start empty on every run.');" },
        { text: "Hooks fire before **every** test, and they stack — a second hook adds to the list, it never replaces the first.",
          test: "var calls = 0;\nbeforeEach(function () { calls++; });\nvar r = run();\nT.eq(calls, r.total, 'Hooks must run before EVERY test: ' + r.total + ' tests should mean ' + r.total + ' hook calls, but the counter hook ran ' + calls + ' time(s). Call every stored hook inside the loop, once per test.');\nT.eq(r.failed, 0, 'And the suite stays green — if the cart tests just went red, your beforeEach REPLACED the earlier hook instead of adding to a list. Store hooks in an array and run them all.');" }
      ],
      files: [
        { name: "script.js", content: "// ===== yours from Unit 1 — ready to use =====\nfunction expect(actual) {\n  return {\n    toBe: function (expected) {\n      if (actual !== expected) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to be \" + JSON.stringify(expected));\n      }\n    },\n    toEqual: function (expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to equal \" + JSON.stringify(expected));\n      }\n    }\n  };\n}\n// ============================================\n\n// Your runner so far — it() still runs the body IMMEDIATELY:\nlet results = [];\nlet currentSuite = \"\";\n\nfunction describe(label, fn) {\n  currentSuite = label;\n  fn();\n  currentSuite = \"\";\n}\n\nfunction it(name, fn) {\n  try {\n    fn();\n    results.push({ suite: currentSuite, name: name, pass: true, error: null });\n  } catch (e) {\n    results.push({ suite: currentSuite, name: name, pass: false, error: e.message });\n  }\n}\n\n// The fixture and the code under test:\nlet cart = [];\n\nfunction addToCart(item) {\n  cart.push(item);\n}\n\n// The suite. Spot the leak: test 2 leaves an apple in the cart.\ndescribe(\"cart\", function () {\n  it(\"starts empty\", function () { expect(cart.length).toBe(0); });\n  it(\"addToCart puts the item in\", function () {\n    addToCart(\"apple\");\n    expect(cart[0]).toBe(\"apple\");\n    expect(cart.length).toBe(1);\n  });\n});\n\n// 1) Refactor to a REGISTRY:\n//      let tests = [];\n//      it(name, fn) → tests.push({ suite: currentSuite, name: name, fn: fn })  — nothing runs yet!\n//      run() → results = []; play every registered test in the same try/catch,\n//              push { suite, name, pass, error } per test,\n//              return { total, passed, failed, results }\n//\n// 2) Hooks:\n//      let hooks = [];\n//      beforeEach(fn) → hooks.push(fn)\n//      run() calls EVERY hook before EVERY test body\n//\n// 3) Register the reset:  beforeEach(function () { cart = []; });\n//    Then at the bottom:  const first = run();\n//                         console.log(first.passed + \" of \" + first.total + \" passing\");\n" }
      ],
      hints: [
        "The new it() is one line: `tests.push({ suite: currentSuite, name: name, fn: fn });` — the try/catch MOVES into run()'s loop.",
        "run() skeleton: `results = []; for (const t of tests) { for (const h of hooks) h(); try { t.fn(); results.push({ suite: t.suite, name: t.name, pass: true, error: null }); } catch (e) { results.push({ suite: t.suite, name: t.name, pass: false, error: e.message }); } }` — then count passed and return `{ total, passed, failed, results }`.",
        "beforeEach is two lines: `let hooks = []; function beforeEach(fn) { hooks.push(fn); }` — an ARRAY, so a later hook adds instead of replacing. Then register the reset: `beforeEach(function () { cart = []; });`"
      ],
      solution: {
        "script.js": "// ===== yours from Unit 1 — ready to use =====\nfunction expect(actual) {\n  return {\n    toBe: function (expected) {\n      if (actual !== expected) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to be \" + JSON.stringify(expected));\n      }\n    },\n    toEqual: function (expected) {\n      if (JSON.stringify(actual) !== JSON.stringify(expected)) {\n        throw new Error(\"expected \" + JSON.stringify(actual) + \" to equal \" + JSON.stringify(expected));\n      }\n    }\n  };\n}\n// ============================================\n\n// The runner — registry model:\nlet results = [];\nlet tests = [];\nlet hooks = [];\nlet currentSuite = \"\";\n\nfunction describe(label, fn) {\n  currentSuite = label;\n  fn();\n  currentSuite = \"\";\n}\n\nfunction it(name, fn) {\n  tests.push({ suite: currentSuite, name: name, fn: fn });\n}\n\nfunction beforeEach(fn) {\n  hooks.push(fn);\n}\n\nfunction run() {\n  results = [];\n  for (const t of tests) {\n    for (const h of hooks) h();\n    try {\n      t.fn();\n      results.push({ suite: t.suite, name: t.name, pass: true, error: null });\n    } catch (e) {\n      results.push({ suite: t.suite, name: t.name, pass: false, error: e.message });\n    }\n  }\n  const passed = results.filter(function (r) { return r.pass; }).length;\n  return { total: results.length, passed: passed, failed: results.length - passed, results: results };\n}\n\n// The fixture and the code under test:\nlet cart = [];\n\nfunction addToCart(item) {\n  cart.push(item);\n}\n\nbeforeEach(function () { cart = []; });\n\ndescribe(\"cart\", function () {\n  it(\"starts empty\", function () { expect(cart.length).toBe(0); });\n  it(\"addToCart puts the item in\", function () {\n    addToCart(\"apple\");\n    expect(cart[0]).toBe(\"apple\");\n    expect(cart.length).toBe(1);\n  });\n});\n\nconst first = run();\nconsole.log(first.passed + \" of \" + first.total + \" passing\");\n"
      }
    },

    {
      id: "test-quiz-2",
      title: "Unit 2 quiz: Inside a test runner",
      kind: "quiz", xp: 10,
      brief: "How a test runner works from the inside — because you just built one. 80% to pass.",
      questions: [
        { q: "At its heart, what is `it(name, fn)` in the runner you built?",
          choices: [
            "A loop that retries the body until it finally passes",
            "A scheduler that queues the body to run after a delay",
            "A try/catch around fn() that records the outcome",
            "A wrapper that hides every error the body throws so the output stays clean"
          ],
          answer: 2,
          explain: "it() runs the body and catches the throw: no throw → record a pass, throw → record a fail with the message. Recording is the key — the error is not silenced (it is stored for the report) and nothing is retried or delayed. That one try/catch is why a failing test never crashes the run." },
        { q: "Five tests are registered with this runner. Test 2's body throws. What happens?",
          code: "function it(name, fn) {\n  fn();                          // no try/catch!\n  results.push({ name, pass: true });\n}",
          lang: "js",
          choices: [
            "The run crashes at test 2 — tests 3, 4 and 5 never execute",
            "Test 2 is recorded as a fail and the remaining four tests still run",
            "All five run, but every entry claims pass: true",
            "Test 2 is skipped and the runner moves straight to test 3"
          ],
          answer: 0,
          explain: "Without the try/catch, the throw escapes it() and kills the whole run — you learn about one failure and lose all information about the tests after it. Catching and recording is what lets a runner show every red test at once instead of only the first." },
        { q: "After this unit's final refactor (registry + `run()`), what does calling `it()` do?",
          choices: [
            "Runs the body immediately and records the outcome",
            "It only registers the test",
            "Runs the hooks, then the body, then the report",
            "Stores a copy of the body's result for run() to reuse"
          ],
          answer: 1,
          explain: "In the registry model, it() just pushes { suite, name, fn } into the tests list — nothing executes yet. run() is the player: it walks the list, fires the hooks, runs each body fresh, and rebuilds results from scratch. That split is exactly why one suite can re-run any number of times." },
        { q: "What should `report()` return for this results array?",
          code: "let results = [\n  { name: \"a\", pass: true },\n  { name: \"b\", pass: false },\n  { name: \"c\", pass: true }\n];",
          lang: "js",
          choices: [
            "{ total: 3, passed: 1, failed: 2 }",
            "{ passed: true, failed: false }",
            "{ total: 2, passed: 2, failed: 0 }",
            "{ total: 3, passed: 2, failed: 1 }"
          ],
          answer: 3,
          explain: "The report is a count over results: total is the length (3), passed counts the pass: true entries (a and c → 2), and failed is the rest (just b → 1). No magic — one filter and a subtraction, which is the whole reason the lesson calls the report a count you can read." },
        { q: "Your suite is green on the first `run()` and red on the second, with no code changed in between. The classic cause?",
          choices: [
            "run() only works once per program load",
            "The runner shuffles the test order on every call",
            "A test mutated shared state, and the rerun inherited the leftovers",
            "The expect matchers cache their previous answers"
          ],
          answer: 2,
          explain: "Identical code with a different outcome means leaked state: some test changed a shared fixture — like pushing into a cart array — and the next run saw the leftovers instead of a fresh world. The fix is a beforeEach that resets the fixture, which is exactly why the lesson graded your suite by running it twice and demanding identical results." },
        { q: "Which piece of the runner gives every test a fresh cart before its body runs?",
          choices: [
            "`describe`",
            "`beforeEach`",
            "`report`",
            "`expect`"
          ],
          answer: 1,
          explain: "beforeEach stores a setup hook, and run() calls every stored hook before each test body — so each test starts from the same fresh fixture instead of the previous test's leftovers. describe only labels entries, report only counts them, and expect only compares values." }
      ]
    }
  ]
});
