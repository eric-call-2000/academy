/* Testing Fundamentals — Unit 4: Test-driven development */
window.CODELAB.addUnit("test", {
  id: "test-u4",
  title: "Test-driven development",
  icon: "🚦",
  blurb: "Red, green, refactor: write the failing test first, make it pass with the least code, then reshape it under a green bar.",
  cheat: [
    { h: "The loop", lang: "js", code: "// RED       write a failing test — and watch it fail\n// GREEN     write the LEAST code that passes\n// REFACTOR  improve the shape under a green bar\n// …repeat, one small behaviour at a time", note: "The order is the discipline. Code first = tests that describe what you built, not what you meant." },
    { h: "Red: test code that doesn't exist", lang: "js", code: "it(\"writes 4 as IV\", () => {\n  expect(romanNumeral(4)).toBe(\"IV\"); // red: got undefined\n});\nrun();", note: "Red proves the test CAN fail. A test born green proves nothing." },
    { h: "Green: the simplest thing", lang: "js", code: "function romanNumeral(n) {\n  return \"IV\";   // honest! the NEXT test kills it:\n}\nit(\"writes 9 as IX\", () => {\n  expect(romanNumeral(9)).toBe(\"IX\"); // forces real logic\n});", note: "Hardcode, then add the test that makes the hardcode impossible." },
    { h: "Refactor: shape, not behaviour", lang: "js", code: "// before: the same padding ternary, three times…\nfunction pad2(n) { return n < 10 ? \"0\" + n : \"\" + n; }\nfunction formatTime(h, m, s) {\n  return pad2(h) + \":\" + pad2(m) + \":\" + pad2(s);\n}\n// suite green before AND after = behaviour unchanged" },
    { h: "The bug-report (regression) test", lang: "js", code: "// 1. reproduce the ticket — it must be RED\nit(\"ticket #4821: totals to exactly 3.3\", () => {\n  expect(total([{ price: 1.1 }, { price: 2.2 }])).toBe(3.3);\n});\n// 2. fix the code — the test goes green\n// 3. keep the test forever — the bug can never sneak back" },
    { h: "The same moves in Vitest", lang: "js", code: "import { describe, it, expect } from \"vitest\";\n// npm test        run the suite once\n// npx vitest      watch mode: red → green live on save", note: "Same it/expect you have here — the workflow transfers as-is." }
  ],
  lessons: [

    {
      id: "test-u4-1",
      title: "Red: the test comes first",
      kind: "js", chip: "TEST", xp: 15, mins: 12,
      spec: true,
      brief: "Look right of the console: a green/red **Your tests** panel, one bar per `it()`. You earned it — this is the machine you built in Unit 2, now handed to you polished: `describe`, `it`, `expect`, `beforeEach`, and `run()`. From here on you write tests; the framework is furniture.\n\nToday it starts **red on purpose**. Test-driven development writes the test *before* the code — because a test you have never seen fail might be *unable* to fail. Code that does not exist yet is the one thing you cannot accidentally pass.\n\nThe ticket: a blog engine needs `slugify(title)` — **lowercase** the title, **trim** outer spaces, and turn every run of spaces into **one dash**. `\"Hello World\"` → `\"hello-world\"`, `\"  Deploy Friday  \"` → `\"deploy-friday\"`, `\"A  B\"` → `\"a-b\"`.\n\nYour job this lesson is ONLY the tests. Leave `slugify()` empty — a red panel is what success looks like today. (The last check secretly installs a working `slugify()` and expects your suite to go green against it: proof your tests describe the ticket, not something else.)",
      example: { lang: "js", code: "it(\"lowercases and dashes\", function () {\n  expect(slugify(\"Hello World\")).toBe(\"hello-world\");\n});\nrun();" },
      steps: [
        { text: "Write at least **three** `it()` tests — one per promise in the ticket: lowercase+dash, trim, collapse runs of spaces.",
          test: "var r = await run();\nT.expect(r.total >= 3, 'Three promises in the ticket — lowercase+dashes, trimming, collapsing space runs — so register three tests with it().');" },
        { text: "Your panel is **red**: `slugify()` does not exist yet, so every test fails.",
          test: "var r = await run();\nT.expect(r.failed >= 1, 'Right now slugify() returns undefined, so your suite MUST be red — if it is green, your test is not asserting anything.');\nT.expect(r.failed === r.total, 'All ' + r.total + ' tests should be red right now — a test that stays green against an empty slugify() is not actually testing slugify.');" },
        { text: "The hidden proof: against a **correct** `slugify()`, your whole suite goes green.",
          test: "var r = await T.mutate('slugify', function (t) { return String(t).trim().toLowerCase().replace(/\\s+/g, '-'); }, function () { return run(); });\nvar bad = r.results.filter(function (x) { return !x.pass; })[0];\nT.expect(r.failed === 0, 'We secretly installed a WORKING slugify() and your suite must go green against it — but \"' + (bad ? bad.name : '') + '\" still fails (' + (bad ? bad.error : '') + '). A test that fails against correct code is asking for something the ticket does not promise.');" }
      ],
      files: [
        { name: "script.js", content: "// The ticket: slugify(title)\n//   - lowercase the whole title\n//   - trim spaces at the ends\n//   - every RUN of spaces becomes one dash\n//   \"Hello World\" → \"hello-world\"     \"  Deploy Friday  \" → \"deploy-friday\"     \"A  B\" → \"a-b\"\n\nfunction slugify(title) {\n  // leave me empty this lesson — the tests come FIRST\n}\n\n// your tests here: it(name, fn) + expect(...).toBe(...)\n\nrun();\n" }
      ],
      hints: [
        "One test per promise: `it(\"lowercases and dashes\", function () { expect(slugify(\"Hello World\")).toBe(\"hello-world\"); });`",
        "Trim test: `expect(slugify(\"  Deploy Friday  \")).toBe(\"deploy-friday\")` — and a double space: `expect(slugify(\"A  B\")).toBe(\"a-b\")`.",
        "Keep `run();` as the last line so the panel lights up — red is the goal today, so do NOT implement slugify."
      ],
      solution: {
        "script.js": "// The ticket: slugify(title) — lowercase, trim, space-runs → one dash.\n\nfunction slugify(title) {\n  // leave me empty this lesson — the tests come FIRST\n}\n\nit(\"lowercases and dashes\", function () {\n  expect(slugify(\"Hello World\")).toBe(\"hello-world\");\n});\n\nit(\"trims outer spaces\", function () {\n  expect(slugify(\"  Deploy Friday  \")).toBe(\"deploy-friday\");\n});\n\nit(\"collapses runs of spaces\", function () {\n  expect(slugify(\"A  B\")).toBe(\"a-b\");\n});\n\nrun();\n"
      }
    },

    {
      id: "test-u4-2",
      title: "Green: the simplest thing that passes",
      kind: "js", chip: "TEST", xp: 15, mins: 12,
      spec: true,
      brief: "The suite you wrote last lesson ships in the starter — still red, because `slugify()` is still empty. Now comes the satisfying half of the loop: **make it green**.\n\nThe TDD rule for this phase: write the **least** code that satisfies the tests. Not the cleverest, not the most future-proof — the tests define *done*, and anything beyond them is code no test asked for.\n\nWhen your panel flips green, the checkpoints probe with inputs your suite never mentioned. Green earned with real logic survives that; green earned by pattern-matching the test cases does not.",
      steps: [
        { text: "Implement `slugify()` — the whole panel goes **green**.",
          test: "var r = await run();\nT.expect(r.total >= 3, 'Keep all three tests — deleting tests is not how a suite goes green.');\nT.eq(r.failed, 0, 'Make every test pass: lowercase the title, trim it, and replace each run of spaces with one dash.');" },
        { text: "Green survives inputs your tests never mentioned.",
          test: "T.eq(slugify('Ship It Now'), 'ship-it-now', 'Three words, one pass through the same rules');\nT.eq(slugify('  A  '), 'a', 'Trim first, then there is nothing left to dash');\nT.eq(slugify('One  Two   Three'), 'one-two-three', 'Every RUN of spaces — two, three, however many — becomes exactly one dash. A .replace(\" \", \"-\") only hits the first space; use a regex: .replace(/\\\\s+/g, \"-\").');" }
      ],
      files: [
        { name: "script.js", content: "// Last lesson's suite — red until you do your job.\n// Make it green with the LEAST code that passes.\n\nfunction slugify(title) {\n  // your implementation here\n}\n\nit(\"lowercases and dashes\", function () {\n  expect(slugify(\"Hello World\")).toBe(\"hello-world\");\n});\n\nit(\"trims outer spaces\", function () {\n  expect(slugify(\"  Deploy Friday  \")).toBe(\"deploy-friday\");\n});\n\nit(\"collapses runs of spaces\", function () {\n  expect(slugify(\"A  B\")).toBe(\"a-b\");\n});\n\nrun();\n" }
      ],
      hints: [
        "Chain the three rules in ticket order: `return title.trim().toLowerCase().replace(/\\s+/g, \"-\");`",
        "`/\\s+/g` means \"one or MORE whitespace characters, everywhere\" — that is what collapses `\"A  B\"` to `\"a-b\"` in one replace.",
        "Do not touch the tests. If one stays red, read its error in the panel — it names the expected and actual values."
      ],
      solution: {
        "script.js": "// Last lesson's suite — red until you do your job.\n\nfunction slugify(title) {\n  return title.trim().toLowerCase().replace(/\\s+/g, \"-\");\n}\n\nit(\"lowercases and dashes\", function () {\n  expect(slugify(\"Hello World\")).toBe(\"hello-world\");\n});\n\nit(\"trims outer spaces\", function () {\n  expect(slugify(\"  Deploy Friday  \")).toBe(\"deploy-friday\");\n});\n\nit(\"collapses runs of spaces\", function () {\n  expect(slugify(\"A  B\")).toBe(\"a-b\");\n});\n\nrun();\n"
      }
    },

    {
      id: "test-u4-3",
      title: "Refactor: change shape under a green bar",
      kind: "js", chip: "TEST", xp: 15, mins: 13,
      spec: true,
      brief: "Third phase of the loop. The starter's `formatTime(h, m, s)` works, and its suite is green — but look at it: the same padding ternary, copy-pasted **three times**. Working code, ugly shape.\n\n**Refactoring** means changing a program's structure without changing its behaviour — and the green bar is what makes that safe. Before you touch anything, the suite is green. After every edit, run it again. Still green? Behaviour survived. Red? You just learned you changed behaviour, not shape — undo and try again.\n\nThe job: extract the repeated ternary into a named helper `pad2(n)` and route `formatTime` through it. The checkpoints check behaviour is unchanged, that `pad2` exists — and, sneakily, that `formatTime` really *calls* it. A helper nobody calls is decoration, not a refactor.",
      steps: [
        { text: "Behaviour unchanged: the shipped suite is still **green**, and unseen inputs still format right.",
          test: "var r = await run();\nT.eq(r.failed, 0, 'Refactoring must not change behaviour — if the bar went red, an edit changed what formatTime returns.');\nT.eq(formatTime(7, 30, 5), '07:30:05', 'formatTime(7, 30, 5)');\nT.eq(formatTime(23, 59, 59), '23:59:59', 'Two-digit parts pass through untouched');\nT.eq(formatTime(0, 0, 0), '00:00:00', 'Midnight pads every part');" },
        { text: "Extract the helper: `pad2(n)` returns a two-character string.",
          test: "T.expect(typeof pad2 === 'function', 'Extract the repeated ternary into a named helper: function pad2(n) { ... }');\nT.eq(pad2(7), '07', 'pad2(7)');\nT.eq(pad2(12), '12', 'pad2(12) — already two digits, no padding');\nT.eq(pad2(0), '00', 'pad2(0)');" },
        { text: "`formatTime` actually **uses** `pad2` — all three parts flow through it.",
          test: "var out = T.mutate('pad2', function () { return 'XX'; }, function () { return formatTime(1, 2, 3); });\nT.eq(out, 'XX:XX:XX', 'We briefly made pad2() return \"XX\" — formatTime(1, 2, 3) should have come back \"XX:XX:XX\". If any part kept its old ternary, that copy was never replaced by a call to pad2.');\nvar r = await run();\nT.eq(r.failed, 0, 'And with the real pad2 restored, the bar is green again — shape improved, behaviour identical. That IS refactoring.');" }
      ],
      files: [
        { name: "script.js", content: "// formatTime works and its suite is green. But the padding\n// ternary appears THREE times. Extract pad2(n), keep the bar green.\n\nfunction formatTime(h, m, s) {\n  const hh = h < 10 ? \"0\" + h : \"\" + h;\n  const mm = m < 10 ? \"0\" + m : \"\" + m;\n  const ss = s < 10 ? \"0\" + s : \"\" + s;\n  return hh + \":\" + mm + \":\" + ss;\n}\n\ndescribe(\"formatTime\", function () {\n  it(\"pads every part\", function () {\n    expect(formatTime(9, 5, 0)).toBe(\"09:05:00\");\n  });\n  it(\"leaves two-digit parts alone\", function () {\n    expect(formatTime(23, 59, 59)).toBe(\"23:59:59\");\n  });\n  it(\"handles midnight\", function () {\n    expect(formatTime(0, 0, 0)).toBe(\"00:00:00\");\n  });\n});\n\nrun();\n" }
      ],
      hints: [
        "The helper is the ternary with a name: `function pad2(n) { return n < 10 ? \"0\" + n : \"\" + n; }` — declared with `function`, not const.",
        "Then formatTime shrinks to one line: `return pad2(h) + \":\" + pad2(m) + \":\" + pad2(s);` — delete all three old ternaries.",
        "Run after EVERY edit. Green → keep going. Red → the last edit changed behaviour; the failing test's message says how."
      ],
      solution: {
        "script.js": "// formatTime works and its suite is green. Same behaviour, better shape.\n\nfunction pad2(n) {\n  return n < 10 ? \"0\" + n : \"\" + n;\n}\n\nfunction formatTime(h, m, s) {\n  return pad2(h) + \":\" + pad2(m) + \":\" + pad2(s);\n}\n\ndescribe(\"formatTime\", function () {\n  it(\"pads every part\", function () {\n    expect(formatTime(9, 5, 0)).toBe(\"09:05:00\");\n  });\n  it(\"leaves two-digit parts alone\", function () {\n    expect(formatTime(23, 59, 59)).toBe(\"23:59:59\");\n  });\n  it(\"handles midnight\", function () {\n    expect(formatTime(0, 0, 0)).toBe(\"00:00:00\");\n  });\n});\n\nrun();\n"
      }
    },

    {
      id: "test-u4-4",
      title: "The bug-report test: reproduce it, then fix it",
      kind: "js", chip: "TEST", xp: 15, mins: 14,
      spec: true,
      brief: "A ticket lands in your queue:\n\n> **Ticket #4821 — cart shows a silly total.** *\"I added a $1.10 sticker and a $2.20 pin and the cart said $3.3000000000000003. Screenshot attached.\"*\n\nThe TDD-trained first move is NOT to fix `total()`. It is to **reproduce the report as a failing test** — `expect(total([{ price: 1.1 }, { price: 2.2 }])).toBe(3.3)`. Red proves you captured the bug; the moment it goes green, you know the fix landed; and the test stays in the suite forever, so this exact bug can never quietly return. That is a **regression test** — the single highest-value habit in this unit.\n\nWhy it happens: binary floats cannot store 1.1 or 2.2 exactly, so the sum picks up dust. Money code rounds to cents before anyone sees it: `Math.round(sum * 100) / 100` — and returns a **number**, never a `toFixed` string.\n\n(The first checkpoint rewinds `total()` to the shipped buggy version before running your suite — so your reproduction stays proven-red even after you fix the code.)",
      steps: [
        { text: "Reproduce the ticket: a test using the **exact reported input**, red against the shipped `total()`.",
          test: "var r = await T.mutate('total', function (items) { var sum = 0; for (var i = 0; i < items.length; i++) { sum += items[i].price; } return sum; }, function () { return run(); });\nT.expect(r.total >= 1, 'Write the reproduction test BEFORE touching total() — it(\"ticket #4821…\", …).');\nT.expect(r.failed >= 1, 'Against the shipped buggy total() your reproduction MUST be red — if it is green, your test is not asserting anything. Pin the exact display value with toBe(3.3), not toBeCloseTo.');\nT.expect(r.results.some(function (x) { return !x.pass && String(x.error || '').indexOf('3.3000000000000003') !== -1; }), 'Use the ticket EXACTLY: expect(total([{ price: 1.1 }, { price: 2.2 }])).toBe(3.3) — its failure message will show the ugly 3.3000000000000003 from the screenshot.');" },
        { text: "Now fix `total()` — the suite goes green, and the total is exact.",
          test: "var r = await run();\nT.eq(r.failed, 0, 'Ticket closed: round to cents inside total() and your reproduction goes green.');\nT.close(total([{ price: 1.1 }, { price: 2.2 }]), 3.3, 0.001, 'total([{price:1.1},{price:2.2}])');\nT.eq(total([{ price: 1.1 }, { price: 2.2 }]), 3.3, 'Return a NUMBER rounded to cents — Math.round(sum * 100) / 100 — not a toFixed() string.');\nT.eq(total([{ price: 0.1 }, { price: 0.2 }]), 0.3, 'The classic 0.1 + 0.2 rounds clean too');\nT.eq(total([]), 0, 'An empty cart still totals 0');" },
        { text: "Your reproduction is now a **regression test** — it still catches near-miss versions of the bug.",
          test: "var r = await T.mutate('total', function (items) { var sum = 0; for (var i = 0; i < items.length; i++) { sum += items[i].price; } return sum.toFixed(2); }, function () { return run(); });\nT.expect(r.failed > 0, 'A total() that returns the STRING \"3.30\" passed your whole suite — money-as-a-string breaks every caller that does arithmetic with it. toBe(3.3) against a number catches this; keep the assertion exact.');" }
      ],
      files: [
        { name: "script.js", content: "// Ticket #4821 — \"$1.10 + $2.20 shows $3.3000000000000003\".\n// 1) Reproduce the ticket as a FAILING test — before any fix.\n// 2) Only then fix total(). The test stays forever.\n\nfunction total(items) {\n  let sum = 0;\n  for (const item of items) {\n    sum += item.price;\n  }\n  return sum;\n}\n\n// your reproduction test here\n\nrun();\n" }
      ],
      hints: [
        "The reproduction is the ticket, verbatim: `it(\"ticket #4821: 1.10 + 2.20 shows exactly 3.3\", function () { expect(total([{ price: 1.1 }, { price: 2.2 }])).toBe(3.3); });`",
        "`toBe(3.3)`, not `toBeCloseTo` — the ticket is about the exact value the user SAW, so the test must pin it exactly.",
        "The fix is one line at the return: `return Math.round(sum * 100) / 100;` — and keep it a number; `sum.toFixed(2)` returns a string."
      ],
      solution: {
        "script.js": "// Ticket #4821 — \"$1.10 + $2.20 shows $3.3000000000000003\".\n\nfunction total(items) {\n  let sum = 0;\n  for (const item of items) {\n    sum += item.price;\n  }\n  return Math.round(sum * 100) / 100;\n}\n\nit(\"ticket #4821: 1.10 + 2.20 shows exactly 3.3\", function () {\n  expect(total([{ price: 1.1 }, { price: 2.2 }])).toBe(3.3);\n});\n\nrun();\n"
      }
    },

    {
      id: "test-u4-p",
      title: "Project: TDD a Roman-numeral converter",
      kind: "js", chip: "TEST", xp: 50, mins: 40, project: true,
      spec: true,
      brief: "The classic TDD kata, done for real: build `romanNumeral(n)` for 1–3999 — **tests first**.\n\nThe rules of the game: symbols repeat up to three times (`3` → `\"III\"`, `30` → `\"XXX\"`), and the *one-before* forms are subtractive (`4` → `\"IV\"`, `9` → `\"IX\"`, `40` → `\"XL\"`, `90` → `\"XC\"`, `400` → `\"CD\"`, `900` → `\"CM\"`). `1987` → `\"MCMLXXXVII\"`.\n\nWork the loop, and the checkpoints grade each phase. **Red:** the first check rewinds `romanNumeral()` to the empty starter and runs your suite against it — write at least three failing tests before any code. **Green:** implement until the bar flips, then survive the checkpoint's own inputs and two sabotaged converters. **Refactor:** the digit logic repeats for ones, tens, hundreds — extract `romanDigit(digit, one, five, ten)`, which converts one decimal digit given its three symbols (`romanDigit(4, \"I\", \"V\", \"X\")` → `\"IV\"`, `romanDigit(9, \"X\", \"L\", \"C\")` → `\"XC\"`), and keep the bar green the whole way down.",
      steps: [
        { text: "**Red** — at least three tests, all failing against the rewound empty `romanNumeral()`.",
          test: "var r = await T.mutate('romanNumeral', function (n) { }, function () { return run(); });\nT.expect(r.total >= 3, 'Three behaviours to pin before any code: repeated symbols (3 → \"III\"), a subtractive form (4 → \"IV\" or 9 → \"IX\"), and a big composite (1987 → \"MCMLXXXVII\").');\nT.expect(r.failed >= 1, 'We rewound romanNumeral() to the empty starter, so it returns undefined and your suite MUST be red — if it is green, your test is not asserting anything.');" },
        { text: "**Green** — implement `romanNumeral(n)` until your suite passes, and our spot checks agree.",
          test: "var r = await run();\nT.eq(r.failed, 0, 'Green means green: every one of your own tests passes.');\nT.eq(romanNumeral(1), 'I', 'romanNumeral(1)');\nT.eq(romanNumeral(3), 'III', 'romanNumeral(3)');\nT.eq(romanNumeral(4), 'IV', 'romanNumeral(4) — subtractive, not IIII');\nT.eq(romanNumeral(9), 'IX', 'romanNumeral(9)');\nT.eq(romanNumeral(40), 'XL', 'romanNumeral(40)');\nT.eq(romanNumeral(90), 'XC', 'romanNumeral(90)');\nT.eq(romanNumeral(1987), 'MCMLXXXVII', 'romanNumeral(1987)');\nT.eq(romanNumeral(2024), 'MMXXIV', 'romanNumeral(2024)');\nT.eq(romanNumeral(3999), 'MMMCMXCIX', 'romanNumeral(3999) — the top of the range');" },
        { text: "Your suite guards the tricky parts: two sabotaged converters must both go **red**.",
          test: "var realFn = romanNumeral;\nvar r = await T.mutate('romanNumeral', function (n) { var vals = [[1000, 'M'], [500, 'D'], [100, 'C'], [50, 'L'], [10, 'X'], [5, 'V'], [1, 'I']]; var out = ''; for (var i = 0; i < vals.length; i++) { while (n >= vals[i][0]) { out += vals[i][1]; n -= vals[i][0]; } } return out; }, function () { return run(); });\nT.expect(r.failed > 0, 'A converter that writes 4 as \"IIII\" and 1987 as \"MDCCCCLXXXVII\" passed ALL your tests — the subtractive forms are the whole trick. Add expect(romanNumeral(4)).toBe(\"IV\") (or 9, 40, 90).');\nvar r2 = await T.mutate('romanNumeral', function (n) { return realFn(n % 1000); }, function () { return run(); });\nT.expect(r2.failed > 0, 'A converter that silently DROPS the thousands digit passed all your tests — add a case above 1000, e.g. expect(romanNumeral(1987)).toBe(\"MCMLXXXVII\").');" },
        { text: "**Refactor** — extract `romanDigit(digit, one, five, ten)`, route `romanNumeral` through it, bar still green.",
          test: "T.expect(typeof romanDigit === 'function', 'Extract the per-digit logic into a named helper: function romanDigit(digit, one, five, ten) { ... }');\nT.eq(romanDigit(4, 'I', 'V', 'X'), 'IV', \"romanDigit(4, 'I', 'V', 'X')\");\nT.eq(romanDigit(9, 'X', 'L', 'C'), 'XC', \"romanDigit(9, 'X', 'L', 'C') — nine is one-before-ten\");\nT.eq(romanDigit(7, 'X', 'L', 'C'), 'LXX', 'Seven tens: five-symbol plus two ones');\nT.eq(romanDigit(0, 'C', 'D', 'M'), '', 'A zero digit contributes nothing');\nvar out = T.mutate('romanDigit', function () { return '?'; }, function () { return romanNumeral(1987); });\nT.expect(String(out).indexOf('?') !== -1, 'romanNumeral() never calls your helper — we made romanDigit return \"?\" and romanNumeral(1987) did not change. A helper nobody calls is decoration, not a refactor.');\nvar r = await run();\nT.eq(r.failed, 0, 'And the bar is still green after the refactor — behaviour unchanged, shape improved.');\nT.eq(romanNumeral(3999), 'MMMCMXCIX', 'Still correct end-to-end');" }
      ],
      files: [
        { name: "script.js", content: "// TDD kata: romanNumeral(n) for 1–3999.\n//   repeats:      3 → \"III\"    30 → \"XXX\"\n//   subtractive:  4 → \"IV\"   9 → \"IX\"   40 → \"XL\"   90 → \"XC\"   400 → \"CD\"   900 → \"CM\"\n//   composite:    1987 → \"MCMLXXXVII\"\n//\n// Work the loop IN ORDER:\n//   RED       write failing tests below — run, see red\n//   GREEN     implement romanNumeral until the bar flips\n//   REFACTOR  extract romanDigit(digit, one, five, ten), keep it green\n\nfunction romanNumeral(n) {\n}\n\n// your suite:\n\nrun();\n" }
      ],
      hints: [
        "Red first: `it(\"writes 4 as IV, not IIII\", function () { expect(romanNumeral(4)).toBe(\"IV\"); });` — cover a repeat (3), a subtractive (4 or 9), and a composite (1987). Run. Enjoy the red.",
        "Green, digit by digit: `Math.floor(n / 1000)` thousands, `Math.floor(n / 100) % 10` hundreds, `Math.floor(n / 10) % 10` tens, `n % 10` ones — convert each digit with its symbols (ones: I/V/X, tens: X/L/C, hundreds: C/D/M, thousands: just \"M\".repeat(...)).",
        "The helper the refactor step wants: `function romanDigit(d, one, five, ten) { if (d <= 3) return one.repeat(d); if (d === 4) return one + five; if (d <= 8) return five + one.repeat(d - 5); return one + ten; }` — then romanNumeral is four calls glued together."
      ],
      solution: {
        "script.js": "// Roman-numeral converter — built test-first, refactored under a green bar.\n\nfunction romanDigit(d, one, five, ten) {\n  if (d <= 3) return one.repeat(d);\n  if (d === 4) return one + five;\n  if (d <= 8) return five + one.repeat(d - 5);\n  return one + ten;\n}\n\nfunction romanNumeral(n) {\n  return (\n    romanDigit(Math.floor(n / 1000), \"M\", \"\", \"\") +\n    romanDigit(Math.floor(n / 100) % 10, \"C\", \"D\", \"M\") +\n    romanDigit(Math.floor(n / 10) % 10, \"X\", \"L\", \"C\") +\n    romanDigit(n % 10, \"I\", \"V\", \"X\")\n  );\n}\n\ndescribe(\"romanNumeral\", function () {\n  it(\"repeats symbols: 3 is III\", function () {\n    expect(romanNumeral(3)).toBe(\"III\");\n  });\n  it(\"writes 4 as IV, not IIII\", function () {\n    expect(romanNumeral(4)).toBe(\"IV\");\n  });\n  it(\"writes 9 as IX\", function () {\n    expect(romanNumeral(9)).toBe(\"IX\");\n  });\n  it(\"handles round tens: 40 is XL, 90 is XC\", function () {\n    expect(romanNumeral(40)).toBe(\"XL\");\n    expect(romanNumeral(90)).toBe(\"XC\");\n  });\n  it(\"composes big numbers: 1987\", function () {\n    expect(romanNumeral(1987)).toBe(\"MCMLXXXVII\");\n  });\n  it(\"tops out at 3999\", function () {\n    expect(romanNumeral(3999)).toBe(\"MMMCMXCIX\");\n  });\n});\n\nrun();\n"
      }
    },

    {
      id: "test-quiz-4",
      title: "Unit 4 quiz: Test-driven development",
      kind: "quiz", xp: 10,
      brief: "Red, green, refactor — and the bug that never comes back. 80% to pass.",
      questions: [
        { q: "In the TDD loop, why watch the new test fail before touching the implementation?",
          choices: [
            "Failing first warms up the runner for the real work",
            "A red bar is how the runner computes its failure count",
            "It proves the test CAN fail — that it really checks something",
            "It keeps the commit history tidy when a reviewer reads it later"
          ],
          answer: 2,
          explain: "A test you have never seen fail might be incapable of failing — asserting nothing, or testing the wrong thing entirely. Watching it go red against missing code proves it actually detects the behaviour you care about. Only after that does its green mean anything." },
        { q: "What does `run()` report?",
          code: "function romanNumeral(n) { }\n\nit(\"writes 4 as IV\", () => {\n  expect(romanNumeral(4)).toBe(\"IV\");\n});\nrun();",
          lang: "js",
          choices: [
            "1 failed — expected \"IV\" but got undefined",
            "1 passed — romanNumeral exists, so the call works",
            "A crash — the thrown error stops the whole suite",
            "0 total — you cannot register tests for empty code"
          ],
          answer: 0,
          explain: "The empty body returns `undefined`, and `undefined !== \"IV\"`, so the expect throws. `it()` catches that throw and records a failure instead of crashing — you built exactly this try/catch in Unit 2. One recorded red: precisely the failure TDD wants to see first." },
        { q: "Your only test demands `romanNumeral(4) === \"IV\"`. The by-the-book TDD next move?",
          choices: [
            "Implement the full 1–3999 algorithm while you are in there",
            "return \"IV\" — then add a test that forces real logic",
            "Skip the test until the implementation feels finished",
            "Rewrite the test so it accepts whatever comes back"
          ],
          answer: 1,
          explain: "Green phase means the least code that satisfies the current suite — and a hardcoded `return \"IV\"` legitimately is that. The discipline is in the next move: add `romanNumeral(9)`, watch the hardcode die, and let the tests force generality. You never write logic no test demanded." },
        { q: "During the refactor step, the one thing that must NOT change is…",
          choices: [
            "the code's shape",
            "the behavior",
            "the test count",
            "the helper names"
          ],
          answer: 1,
          explain: "Refactoring is changing structure — extracting helpers, deduplicating, renaming — while every input still produces the same output. A green suite before and after is the proof the behaviour survived. If the bar goes red mid-refactor, you changed behaviour, not shape: undo and retry." },
        { q: "A user files a bug report. The TDD-trained first move?",
          choices: [
            "Patch the bug fast, then write tests around the fix later",
            "Add console.logs until the cause reveals itself",
            "Ask the reporter to retry on the latest version",
            "Write a failing test that reproduces the report"
          ],
          answer: 3,
          explain: "Reproduce before you fix: a red test proves you actually captured the reported bug, and the moment it flips green you know the fix landed. Patch-first leaves you guessing on both counts. The reproduction then stays in the suite so the same bug can never quietly return." },
        { q: "You turn a bug report into a failing test, fix the code, and keep the test in the suite forever. What is that test called?",
          choices: [
            "a regression test",
            "a smoke test",
            "an acceptance test",
            "a snapshot test"
          ],
          answer: 0,
          explain: "A regression test exists to keep a fixed bug fixed — it reproduces the original report and fails loudly if the behaviour ever slides back. Smoke tests are broad does-it-even-start checks, and acceptance tests verify user-level requirements; neither is pinned to one specific past bug." }
      ]
    }
  ]
});
