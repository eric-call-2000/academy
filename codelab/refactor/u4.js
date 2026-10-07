/* Refactoring Legacy Code — Unit 4: Seams */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* ---- 4-1: the clock as a parameter ---- */
  var TRIAL = L(
    "function trialStatus(user) {",
    "  var daysLeft = Math.ceil((user.trialEnds - Date.now()) / 86400000);",
    "  if (daysLeft <= 0) return \"expired\";",
    "  if (daysLeft <= 3) return \"ending soon: \" + daysLeft + (daysLeft === 1 ? \" day\" : \" days\");",
    "  return \"active\";",
    "}");
  var TRIAL_DONE = L(
    "function trialStatus(user, now = Date.now()) {",
    "  var daysLeft = Math.ceil((user.trialEnds - now) / 86400000);",
    "  if (daysLeft <= 0) return \"expired\";",
    "  if (daysLeft <= 3) return \"ending soon: \" + daysLeft + (daysLeft === 1 ? \" day\" : \" days\");",
    "  return \"active\";",
    "}");
  var DAY = 86400000, NOW = 1767225600000; // 2026-01-01T00:00:00Z
  /* Users relative to a fixed NOW, as an expression the checks can rebuild. */
  var USERS = "[-2, -0.5, 0, 0.5, 1, 1.2, 2, 3, 3.5, 10].map(function (d) { return { trialEnds: " + NOW + " + d * " + DAY + " }; })";
  /* Run fn with Date.now() frozen at t, then put the real clock back. */
  var FREEZE = "function frozen(t, fn) { var real = Date.now; Date.now = function () { return t; }; try { return fn(); } finally { Date.now = real; } }";
  var TRIAL_OFF = TRIAL.replace("daysLeft <= 3", "daysLeft < 3");

  /* ---- 4-2: sprout a method ---- */
  var CART = L(
    "function checkoutTotal(cart) {",
    "  var total = 0;",
    "  for (var i = 0; i < cart.items.length; i++) {",
    "    var it = cart.items[i];",
    "    var line = it.price * it.qty;",
    "    if (it.onSale) line = line * 0.8;",
    "    total += line;",
    "  }",
    "  if (cart.coupon === \"WELCOME\" && total >= 20) total -= 5;",
    "  if (total < 0) total = 0;",
    "  return Math.round(total * 100) / 100;",
    "}");
  var CART_DONE = L(
    "function checkoutTotal(cart) {",
    "  var total = 0;",
    "  for (var i = 0; i < cart.items.length; i++) {",
    "    var it = cart.items[i];",
    "    var line = it.price * it.qty;",
    "    if (it.onSale) line = line * 0.8;",
    "    total += line;",
    "  }",
    "  if (cart.coupon === \"WELCOME\" && total >= 20) total -= 5;",
    "  if (total < 0) total = 0;",
    "  total += giftWrapFee(cart.items);",
    "  return Math.round(total * 100) / 100;",
    "}",
    "",
    "// $3 per wrapped unit, after the coupon, never discounted.",
    "function giftWrapFee(items) {",
    "  var units = 0;",
    "  for (var i = 0; i < items.length; i++) if (items[i].giftWrap) units += items[i].qty;",
    "  return units * 3;",
    "}",
    "",
    "it(\"nothing wrapped costs nothing\", function () {",
    "  expect(giftWrapFee([{ price: 10, qty: 2 }])).toBe(0);",
    "});",
    "it(\"$3 per wrapped unit, not per line\", function () {",
    "  expect(giftWrapFee([{ price: 10, qty: 2, giftWrap: true }, { price: 5, qty: 1 }])).toBe(6);",
    "});",
    "",
    "run();");
  var CARTS = "(function () { var out = [], items = [[], [{ price: 10, qty: 2 }], [{ price: 10, qty: 2, giftWrap: true }], [{ price: 12.5, qty: 1, onSale: true, giftWrap: true }, { price: 4, qty: 3, giftWrap: true }], [{ price: 30, qty: 1, giftWrap: true }]]; items.forEach(function (it) { out.push([{ items: it }]); out.push([{ items: it, coupon: 'WELCOME' }]); }); return out; })()";

  window.CODELAB.addUnit("refactor", {
    id: "refactor-u4",
    title: "Seams",
    icon: "🪡",
    blurb: "Michael Feathers' idea: a seam is a place where you can change behavior without editing there. Turn a hidden dependency on the clock into a parameter so it can be tested, and add a feature to a function you don't trust by sprouting a new, tested one beside it.",
    cheat: [
      { h: "A seam: the dependency becomes a parameter", lang: "js", code:
"// before: untestable, it reads the real clock\n" +
"function trialStatus(user) { … Date.now() … }\n" +
"// after: tests pass a fixed time, callers don't change\n" +
"function trialStatus(user, now = Date.now()) { … now … }",
        note: "A default parameter keeps every existing call working. Tests become deterministic: no more \"fails on the 31st\"." },
      { h: "Sprout method", lang: "js", code:
"// new behavior in a NEW function, tested on its own\n" +
"function giftWrapFee(items) { … }\n" +
"// one line in the old code calls it\n" +
"total += giftWrapFee(cart.items);",
        note: "Feathers: when you can't safely test the old function, put the new code where you can, and keep your edit to the old one tiny." },
      { h: "Freezing time in a test", lang: "js", code:
"const NOW = Date.UTC(2026, 0, 1);\n" +
"const DAY = 86400000;\n" +
"trialStatus({ trialEnds: NOW + 2 * DAY }, NOW)   // \"ending soon: 2 days\"",
        note: "Build every date in the test from one fixed NOW, and pass it in." }
    ],
    lessons: [

      {
        id: "refactor-u4-1",
        title: "The clock is a dependency",
        kind: "js", chip: "REFACTOR", xp: 25, mins: 14, spec: true, refactor: true,
        brief: "`trialStatus()` reads the real clock with `Date.now()`, so any test of it gives a different answer tomorrow. That's why it has none.\n\nCreate a **seam**: give it a second parameter, `now`, that **defaults** to `Date.now()`. Every existing call keeps working; tests can pass a fixed time.\n\nThen write tests that pass a fixed `now`: one **expired** trial, one **ending soon** (check the exact text, singular and plural), one **active**. Call `run()` at the end.",
        steps: [
          { text: "Called the old way, it behaves exactly as before.",
            test: L(FREEZE,
              "var old = T.legacy(" + JSON.stringify(TRIAL) + ");",
              "var users = " + USERS + ";",
              "frozen(" + NOW + ", function () { T.expectSame(old, function (u) { return trialStatus(u); }, users.map(function (u) { return [u]; }), 'trialStatus(user)'); });") },
          { text: "It takes the time as a second parameter.",
            test: L(FREEZE,
              "T.eq(T.shape(trialStatus).params, 2, 'Add a second parameter: function trialStatus(user, now = Date.now())');",
              "var old = T.legacy(" + JSON.stringify(TRIAL) + ");",
              "var users = " + USERS + ";",
              "users.forEach(function (u) {",
              "  var want = frozen(" + NOW + ", function () { return old(u); });",
              "  var got = frozen(" + NOW + " + 999 * " + DAY + ", function () { return trialStatus(u, " + NOW + "); });",
              "  T.eq(got, want, 'trialStatus(user, now) should use the now it is given, not the real clock');",
              "});") },
          { text: "Your tests are green and catch an off-by-one in \"ending soon\".",
            test: L(
              "var r = await run();",
              "T.expect(r.total >= 3, 'Write at least three tests: expired, ending soon, active.');",
              "T.eq(r.failed, 0, 'Your tests should pass. Build each trialEnds from one fixed time and pass that time in.');",
              "var m = await T.mutate('trialStatus', T.legacy(" + JSON.stringify(TRIAL_OFF.replace("function trialStatus(user) {", "function (user, now) { if (now === undefined) now = Date.now();").replace("Date.now()) / 86400000", "now) / 86400000")) + "), function () { return run(); });",
              "T.expect(m.failed > 0, 'A version where a trial with exactly 3 days left counts as active passed your tests. Test the boundary: 3 days left.');",
              "T.eq((await run()).failed, 0, 'and with the real trialStatus back, green again.');") },
          { text: "Your tests don't depend on today's date.", hidden: true,
            test: L(
              /* Hold the clock still until the suite has FINISHED: run() is
                 async, so restoring it as soon as run() returns would let
                 the tests see the real clock. */
              "var real = Date.now, later;",
              "Date.now = function () { return " + NOW + " + 400 * " + DAY + "; };",
              "try { later = await run(); } finally { Date.now = real; }",
              "T.eq(later.failed, 0, 'Your tests fail when run on a different day. Build every date from one fixed NOW and pass it as the second argument, rather than using Date.now() in the test.');") }
        ],
        files: [{ name: "script.js", content: L(
          TRIAL,
          "",
          "console.log(trialStatus({ trialEnds: Date.now() + 2 * 86400000 }));",
          "",
          "// Your tests (pass a fixed now):",
          "",
          "",
          "run();",
          "") }],
        hints: [
          "Change the signature to function trialStatus(user, now = Date.now()) and replace Date.now() in the body with now. Existing calls don't change.",
          "const NOW = Date.UTC(2026, 0, 1); const DAY = 86400000; then expect(trialStatus({ trialEnds: NOW + 3 * DAY }, NOW)).toBe(\"ending soon: 3 days\"), and an expired and an active case the same way."
        ],
        solution: { "script.js": L(
          TRIAL_DONE,
          "",
          "const NOW = Date.UTC(2026, 0, 1);",
          "const DAY = 86400000;",
          "",
          "it(\"a trial that ended yesterday is expired\", function () {",
          "  expect(trialStatus({ trialEnds: NOW - DAY }, NOW)).toBe(\"expired\");",
          "});",
          "it(\"3 days left is ending soon, 1 day is singular\", function () {",
          "  expect(trialStatus({ trialEnds: NOW + 3 * DAY }, NOW)).toBe(\"ending soon: 3 days\");",
          "  expect(trialStatus({ trialEnds: NOW + DAY }, NOW)).toBe(\"ending soon: 1 day\");",
          "});",
          "it(\"10 days left is active\", function () {",
          "  expect(trialStatus({ trialEnds: NOW + 10 * DAY }, NOW)).toBe(\"active\");",
          "});",
          "",
          "run();",
          "") }
      },

      {
        id: "refactor-u4-2",
        title: "Sprout a method",
        kind: "js", chip: "REFACTOR", xp: 25, mins: 14, spec: true, refactor: true,
        brief: "New requirement: **gift wrapping**. Each unit of an item marked `giftWrap: true` costs **$3**, added **after** the coupon and the zero floor, and never discounted.\n\n`checkoutTotal()` has no tests and nobody fully trusts it. So don't edit its insides. **Sprout** the new behavior:\n\n1. write `giftWrapFee(items)`, a new function, and test it on its own\n2. add **one line** to `checkoutTotal()` that calls it\n\nCarts without gift wrap must total exactly what they did before. Call `run()` at the end.",
        steps: [
          { text: "`giftWrapFee(items)` charges $3 per wrapped unit.",
            test: L(
              "T.expect(typeof giftWrapFee === 'function', 'Write a new function giftWrapFee(items).');",
              "T.eq(giftWrapFee([]), 0, 'No items, no fee.');",
              "T.eq(giftWrapFee([{ price: 9, qty: 2, giftWrap: true }, { price: 4, qty: 5 }]), 6, '$3 per wrapped UNIT: 2 wrapped units is $6.');") },
          { text: "Every cart totals what it did before, plus its gift-wrap fee.",
            test: L(
              "var old = T.legacy(" + JSON.stringify(CART) + ");",
              "T.expectSame(function (cart) { return Math.round((old(cart) + giftWrapFee(cart.items)) * 100) / 100; }, checkoutTotal, " + CARTS + ", 'checkoutTotal');") },
          { text: "Your tests for `giftWrapFee` are green, and catch a fee charged per line instead of per unit.",
            test: L(
              "var r = await run();",
              "T.expect(r.total >= 2, 'Write at least two tests for giftWrapFee.');",
              "T.eq(r.failed, 0, 'Your tests should pass.');",
              "var m = await T.mutate('giftWrapFee', function (items) { return items.filter(function (i) { return i.giftWrap; }).length * 3; }, function () { return run(); });",
              "T.expect(m.failed > 0, 'A giftWrapFee that charges per line, ignoring quantity, passed. Test a wrapped item with qty 2 or more.');",
              "T.eq((await run()).failed, 0, 'and green again after.');") },
          { text: "The old function got one line longer, and no more complicated.", hidden: true,
            test: L(
              "var before = T.shape(T.legacy(" + JSON.stringify(CART) + ")), now = T.shape(checkoutTotal);",
              "T.expect(now.lines <= before.lines + 1, 'checkoutTotal grew by ' + (now.lines - before.lines) + ' lines. Sprouting means one new call in the old code; the logic lives in giftWrapFee.');",
              "T.expect(now.branches <= before.branches, 'checkoutTotal gained conditions. Put the gift-wrap decisions inside giftWrapFee.');") }
        ],
        files: [{ name: "script.js", content: L(
          "// Legacy: no tests. Change it as little as you can.",
          CART,
          "",
          "// Sprout giftWrapFee(items) here, and test it:",
          "",
          "",
          "run();",
          "") }],
        hints: [
          "function giftWrapFee(items) { var units = 0; for (…) if (items[i].giftWrap) units += items[i].qty; return units * 3; }",
          "In checkoutTotal, after `if (total < 0) total = 0;`, add total += giftWrapFee(cart.items); — that's the only change to the old function."
        ],
        solution: { "script.js": L("// Legacy: no tests. Change it as little as you can.", CART_DONE, "") }
      },

      {
        id: "refactor-u4-quiz",
        title: "Unit 4 quiz: Seams",
        kind: "quiz", xp: 10,
        brief: "Seams, hidden dependencies, default parameters and sprouting. 80% to pass.",
        questions: [
          { q: "What's a seam, in Michael Feathers' sense?",
            choices: ["A line in the code where two separately written files were joined together by a merge", "A place where you can change behavior without editing that place", "A merge conflict", "A comment marking legacy code"],
            answer: 1, explain: "A parameter, an injected dependency or an overridable method: a way in for tests." },
          { q: "Why give `now` a default of `Date.now()` instead of making it required?",
            choices: ["Default parameters run faster than required ones in most engines", "Required parameters can't be numbers", "It hides the dependency", "Every existing caller keeps working unchanged"],
            answer: 3, explain: "The seam is invisible to old callers and available to tests." },
          { q: "A test builds its dates from `Date.now()`. What can go wrong?",
            choices: ["It can pass today and fail on another day, near a boundary", "Nothing: it always uses the current time, which is exactly what a test should check", "Date.now() is slower in tests", "It can't be run in parallel"],
            answer: 0, explain: "Tests built on the real clock drift. Build every date from one fixed time." },
          { q: "When is sprouting a method the right call?",
            choices: ["When the old code is already well tested and easy to change, so it's the cheapest option there is", "Never: always edit the old function directly", "When the old code can't safely be tested, and the new behavior can live on its own", "Only for bug fixes"],
            answer: 2, explain: "New, tested code beside the old; one small call into it." },
          { q: "After sprouting, how much should the old function change?",
            choices: ["As much as needed to restructure it fully while you're in there", "As little as possible: ideally one new call", "It must be deleted", "Every line should be renamed"],
            answer: 1, explain: "The less you touch untested code, the less you can break without knowing." }
        ]
      }
    ]
  });
})();
