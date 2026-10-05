/* Refactoring Legacy Code — Unit 2: Pin it down first */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* ---- 2-1: shippingQuote, with two quirks worth pinning ---- */
  var SHIP = L(
    "function shippingQuote(order) {",
    "  if (!order.items || order.items.length === 0) return 0;",
    "  var weight = 0;",
    "  for (var i = 0; i < order.items.length; i++) weight += order.items[i].kg * order.items[i].qty;",
    "  var cost = 4.99 + Math.max(0, Math.ceil(weight) - 1) * 1.5;",
    "  if (order.subtotal >= 50 && order.country === \"US\" && order.state !== \"AK\" && order.state !== \"HI\") cost = 0;",
    "  if (order.express) cost = cost * 2 + 5;",
    "  return Math.round(cost * 100) / 100;",
    "}");
  /* Mutants: the same function with ONE behavior changed. */
  function variant(find, repl) {
    if (SHIP.indexOf(find) === -1) throw new Error("bad mutant: " + find);
    return SHIP.replace(find, repl);
  }
  var M_CEIL = variant("Math.ceil(weight)", "Math.round(weight)");
  var M_AKHI = variant(" && order.state !== \"AK\" && order.state !== \"HI\"", "");
  var M_EXPRESS = variant("if (order.express) cost = cost * 2 + 5;", "if (order.express) cost = cost === 0 ? 0 : cost * 2 + 5;");
  var SHIP_INPUTS = JSON.stringify([
    [{ items: [], subtotal: 0 }],
    [{ items: [{ kg: 0.4, qty: 1 }], subtotal: 10, country: "US", state: "NY" }],
    [{ items: [{ kg: 1.2, qty: 2 }], subtotal: 20, country: "US", state: "CA" }],
    [{ items: [{ kg: 1, qty: 1 }], subtotal: 80, country: "US", state: "AK" }],
    [{ items: [{ kg: 1, qty: 1 }], subtotal: 80, country: "US", state: "TX", express: true }],
    [{ items: [{ kg: 3.5, qty: 1 }], subtotal: 30, country: "CA", express: true }]
  ]);

  /* ---- 2-2: invoiceLine, for a golden master ---- */
  var LINE = L(
    "function invoiceLine(item) {",
    "  if (item.qty === 0) return item.name + \": cancelled\";",
    "  var unit = item.price;",
    "  if (item.discount) unit = Math.round(unit * (100 - item.discount)) / 100;",
    "  var total = (unit * item.qty).toFixed(2);",
    "  var label = item.qty + \" \" + (item.qty === 1 ? item.unit : item.unit + \"s\");",
    "  var note = item.taxFree ? \" (tax free)\" : \"\";",
    "  return item.name + \": \" + label + \" @ $\" + unit.toFixed(2) + \" = $\" + total + note;",
    "}");
  function lineVariant(find, repl) {
    if (LINE.indexOf(find) === -1) throw new Error("bad mutant: " + find);
    return LINE.replace(find, repl);
  }
  var L_PLURAL = lineVariant("item.qty === 1 ? item.unit : item.unit + \"s\"", "item.unit + \"s\"");
  var L_DISC = lineVariant("Math.round(unit * (100 - item.discount)) / 100", "unit * (100 - item.discount) / 100");
  var L_TAX = lineVariant("\" (tax free)\"", "\"\"");
  var L_CANCEL = lineVariant("if (item.qty === 0) return item.name + \": cancelled\";", "");

  function mutantCheck(name, src, msg) {
    return L(
      "var r = await T.mutate('" + name + "', T.legacy(" + JSON.stringify(src) + "), function () { return run(); });",
      "T.expect(r.failed > 0, " + JSON.stringify(msg) + ");",
      "var back = await run();",
      "T.eq(back.failed, 0, 'With the real " + name + "() back, your suite should be green again.');");
  }

  window.CODELAB.addUnit("refactor", {
    id: "refactor-u2",
    title: "Pin it down first",
    icon: "📌",
    blurb: "Before changing code you don't understand, record what it does today: characterization tests that pin the quirks too, and a golden master that compares many outputs at once. Graded the hard way: a version with one behavior changed has to turn your suite red.",
    cheat: [
      { h: "A characterization test", lang: "js", code:
"// 1. call it and look\n" +
"console.log(shippingQuote({ items: [], subtotal: 0 }));   // 0\n" +
"// 2. pin exactly that\n" +
"it(\"an empty order costs nothing\", function () {\n" +
"  expect(shippingQuote({ items: [], subtotal: 0 })).toBe(0);\n" +
"});",
        note: "Assert what it does, not what it should do. A quirk you don't pin is a quirk a refactor can silently change." },
      { h: "Where the behavior hides", lang: "text", code:
"every if        one case each side of it\n" +
"every boundary  exactly at it (50, not 49 or 51)\n" +
"every combo     two conditions true at once (free AND express)\n" +
"every rounding  a value that rounds differently",
        note: "Read the code for its conditions, then write one test per condition. That's how you know you've covered it." },
      { h: "A golden master", lang: "js", code:
"const SAMPLES = [ /* many inputs */ ];\n" +
"const MASTER = SAMPLES.map(invoiceLine);   // recorded once, today\n" +
"it(\"still matches the master\", function () {\n" +
"  SAMPLES.forEach(function (s, i) { expect(invoiceLine(s)).toBe(MASTER[i]); });\n" +
"});",
        note: "Approval testing, as Llewellyn Falco named it: cheap coverage for output you don't fully understand. It's only as good as the samples you pick." }
    ],
    lessons: [

      {
        id: "refactor-u2-1",
        title: "Characterize, don't correct",
        kind: "js", chip: "REFACTOR", xp: 25, mins: 15, spec: true, refactor: true,
        brief: "`shippingQuote()` decides what every order pays for shipping. It has no tests, and next week someone is going to refactor it. Your job today is the safety net.\n\nWrite **characterization tests**: tests of what it does **now**. Call it, look at what it returns (`console.log`), and pin exactly that, even where it looks odd. Then call `run()`.\n\nDon't change `shippingQuote()` itself.\n\nThe checks will try versions of it with **one** behavior changed. Each one should turn your suite red.",
        steps: [
          { text: "`shippingQuote()` is unchanged.",
            test: L("T.expectSame(T.legacy(" + JSON.stringify(SHIP) + "), shippingQuote, " + SHIP_INPUTS + ", 'shippingQuote');") },
          { text: "At least four tests, all green against the real function.",
            test: L(
              "var r = await run();",
              "T.expect(r.total >= 4, 'Register at least four tests with it(), one per behavior you find.');",
              "T.eq(r.failed, 0, 'Characterization tests must pass against the code as it is today. The panel names the failing test: assert what it actually returns.');") },
          { text: "A version that rounds weight to the nearest kilo instead of up turns your suite red.",
            test: mutantCheck("shippingQuote", M_CEIL, "A shippingQuote() that rounds weight to the nearest kilo passed all your tests. Pin a weight like 1.2 kg: it's charged as 2 kilos today.") },
          { text: "A version that gives Alaska and Hawaii free shipping too turns it red.",
            test: mutantCheck("shippingQuote", M_AKHI, "A version that ships free to Alaska and Hawaii passed. Read the condition: who doesn't get free shipping over $50?") },
          { text: "Another quirk is pinned.", hidden: true,
            test: mutantCheck("shippingQuote", M_EXPRESS, "One more behavior isn't pinned. Look at the last if: what happens when two conditions are true at once?") }
        ],
        files: [{ name: "script.js", content: L(
          "// Legacy: no tests. Don't change it — pin what it does.",
          SHIP,
          "",
          "// Look first:",
          "console.log(shippingQuote({ items: [{ kg: 1, qty: 1 }], subtotal: 10, country: \"US\", state: \"NY\" }));",
          "",
          "// Your characterization tests:",
          "",
          "",
          "run();",
          "") }],
        hints: [
          "Read each condition and test both sides: an empty order; a weight like 1.2 kg (charged as 2 kilos); over $50 in a normal state vs. in AK; express.",
          "The quirk: express on an order that's otherwise free costs 0 * 2 + 5 = 5. Pin it: expect(shippingQuote({ items: [{ kg: 1, qty: 1 }], subtotal: 80, country: \"US\", state: \"TX\", express: true })).toBe(5)."
        ],
        solution: { "script.js": L(
          "// Legacy: no tests. Don't change it — pin what it does.",
          SHIP,
          "",
          "it(\"an empty order costs nothing\", function () {",
          "  expect(shippingQuote({ items: [], subtotal: 0 })).toBe(0);",
          "});",
          "it(\"the first kilo is the base price\", function () {",
          "  expect(shippingQuote({ items: [{ kg: 1, qty: 1 }], subtotal: 10, country: \"US\", state: \"NY\" })).toBe(4.99);",
          "});",
          "it(\"part kilos round UP: 1.2 kg is charged as 2\", function () {",
          "  expect(shippingQuote({ items: [{ kg: 1.2, qty: 1 }], subtotal: 10, country: \"US\", state: \"NY\" })).toBe(6.49);",
          "});",
          "it(\"over $50 in the US ships free\", function () {",
          "  expect(shippingQuote({ items: [{ kg: 1, qty: 1 }], subtotal: 50, country: \"US\", state: \"TX\" })).toBe(0);",
          "});",
          "it(\"but not to Alaska or Hawaii\", function () {",
          "  expect(shippingQuote({ items: [{ kg: 1, qty: 1 }], subtotal: 80, country: \"US\", state: \"AK\" })).toBe(4.99);",
          "  expect(shippingQuote({ items: [{ kg: 1, qty: 1 }], subtotal: 80, country: \"US\", state: \"HI\" })).toBe(4.99);",
          "});",
          "it(\"express doubles it and adds $5\", function () {",
          "  expect(shippingQuote({ items: [{ kg: 1, qty: 1 }], subtotal: 10, country: \"US\", state: \"NY\", express: true })).toBe(14.98);",
          "});",
          "it(\"quirk: express on a free order still costs $5\", function () {",
          "  expect(shippingQuote({ items: [{ kg: 1, qty: 1 }], subtotal: 80, country: \"US\", state: \"TX\", express: true })).toBe(5);",
          "});",
          "",
          "run();",
          "") }
      },

      {
        id: "refactor-u2-2",
        title: "A golden master",
        kind: "js", chip: "REFACTOR", xp: 25, mins: 15, spec: true, refactor: true,
        brief: "`invoiceLine()` formats one line of an invoice, with half a dozen special cases you don't fully understand yet. Writing a careful test for each would take an afternoon.\n\nInstead, build a **golden master** (an approval test): a list of sample inputs, their outputs recorded **today**, and one test that checks the function still produces exactly those outputs.\n\n```js\nconst SAMPLES = [ /* items */ ];\nconst MASTER = SAMPLES.map(invoiceLine);\n```\n\nThe catch: a golden master only protects what its samples reach. The checks will change one behavior at a time.",
        steps: [
          { text: "`invoiceLine()` is unchanged.",
            test: L("T.expectSame(T.legacy(" + JSON.stringify(LINE) + "), invoiceLine, [[{ name: 'Tea', qty: 2, unit: 'box', price: 4.5 }], [{ name: 'Mug', qty: 0, unit: 'mug', price: 9 }]], 'invoiceLine');") },
          { text: "A golden-master test, green against the real function.",
            test: L(
              "T.expect(typeof SAMPLES !== 'undefined' && SAMPLES.length >= 4, 'Declare const SAMPLES = [...] with at least four items.');",
              "T.expect(typeof MASTER !== 'undefined' && MASTER.length === SAMPLES.length, 'Record the master: const MASTER = SAMPLES.map(invoiceLine);');",
              "var r = await run();",
              "T.expect(r.total >= 1, 'Register a test that checks every sample against MASTER.');",
              "T.eq(r.failed, 0, 'Against the real function, every sample should match its recorded output.');") },
          { text: "A version that always writes plurals (\"1 boxs\") turns it red.",
            test: mutantCheck("invoiceLine", L_PLURAL, "A version that writes \"1 boxs\" passed. Do your samples include a quantity of exactly 1?") },
          { text: "A version that stops rounding discounted prices turns it red.",
            test: mutantCheck("invoiceLine", L_DISC, "A version that doesn't round discounted unit prices passed. Add a sample whose discounted price has a fraction of a cent, bought several times so the difference shows, e.g. price 0.99, discount 50, quantity 10.") },
          { text: "The rarer cases are covered too.", hidden: true,
            test: L(
              mutantCheck("invoiceLine", L_TAX, "A version that drops the \"(tax free)\" note passed. Read the function again: which properties does it look at?"),
              mutantCheck("invoiceLine", L_CANCEL, "A version that mishandles a quantity of 0 passed. What does a cancelled line look like today?")) }
        ],
        files: [{ name: "script.js", content: L(
          "// Legacy: no tests. Don't change it.",
          LINE,
          "",
          "console.log(invoiceLine({ name: \"Tea\", qty: 2, unit: \"box\", price: 4.5 }));",
          "",
          "// Your golden master:",
          "",
          "",
          "run();",
          "") }],
        hints: [
          "Pick samples that walk every branch: a quantity of 1 and of 2+, a discount that leaves a fraction of a cent (price 0.99 at 50% off is 49.5 cents) bought several times, a tax-free item, and a quantity of 0.",
          "const MASTER = SAMPLES.map(invoiceLine); then it(\"matches the master\", function () { SAMPLES.forEach(function (s, i) { expect(invoiceLine(s)).toBe(MASTER[i]); }); });"
        ],
        solution: { "script.js": L(
          "// Legacy: no tests. Don't change it.",
          LINE,
          "",
          "const SAMPLES = [",
          "  { name: \"Tea\", qty: 2, unit: \"box\", price: 4.5 },",
          "  { name: \"Mug\", qty: 1, unit: \"mug\", price: 9 },",
          "  { name: \"Pens\", qty: 10, unit: \"pen\", price: 0.99, discount: 50 },",
          "  { name: \"Book\", qty: 1, unit: \"copy\", price: 12, taxFree: true },",
          "  { name: \"Lamp\", qty: 0, unit: \"lamp\", price: 30 }",
          "];",
          "const MASTER = SAMPLES.map(invoiceLine);",
          "",
          "it(\"matches the master\", function () {",
          "  SAMPLES.forEach(function (s, i) { expect(invoiceLine(s)).toBe(MASTER[i]); });",
          "});",
          "",
          "run();",
          "") }
      },

      {
        id: "refactor-u2-quiz",
        title: "Unit 2 quiz: Pin it down first",
        kind: "quiz", xp: 10,
        brief: "Characterization tests, quirks, golden masters and their samples. 80% to pass.",
        questions: [
          { q: "What does a characterization test check?",
            choices: ["What the code actually does today", "That the code matches its specification", "That the code is fast enough", "That the code has no bugs"],
            answer: 0, explain: "It records current behavior, so any change to it, intended or not, turns a test red." },
          { q: "Express shipping on a free order costs $5, which looks like a bug. Your characterization test should…",
            choices: ["assert $0, the correct answer, so the test documents what the code should do", "skip that case entirely", "assert $5, and you note it as a possible bug", "assert that it throws"],
            answer: 2, explain: "Pin it as it is. Fixing it is a separate change with its own review." },
          { q: "How do you check a characterization suite actually protects a behavior?",
            choices: ["Count the tests", "Change that behavior on purpose and see the suite go red", "Run it twice", "Measure its code coverage, and call it done once every line has been run"],
            answer: 1, explain: "That's mutation testing: a suite that stays green when behavior changes hasn't pinned it." },
          { q: "What's a golden master?",
            choices: ["The most senior engineer's copy of the code, kept as the reference for every review", "A test that always passes", "The main branch", "Outputs for many inputs, recorded once and compared after every change"],
            answer: 3, explain: "Approval testing: cheap coverage for output you don't fully understand yet." },
          { q: "A golden master with ten samples misses a bug in the \"quantity 0\" branch. Why?",
            choices: ["None of the samples had quantity 0", "Golden masters can't test branches", "Ten samples is always too few", "The master was recorded too late"],
            answer: 0, explain: "A golden master only protects what its samples reach. Pick samples that walk every branch." }
        ]
      }
    ]
  });
})();
