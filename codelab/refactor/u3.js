/* Refactoring Legacy Code — Unit 3: Small, safe steps */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }
  /* The legacy source goes into each check as a string and is evaluated
     there with T.legacy, so the learner's file never contains the original
     and "refactored" can't secretly mean "calls the old one". */
  function same(name, src, inputsJs, label) {
    return "T.expectSame(T.legacy(" + JSON.stringify(src) + "), " + name + ", " + inputsJs + ", " + JSON.stringify(label || name) + ");";
  }

  /* ---- 3-1: guard clauses ---- */
  var CHECKOUT = L(
    "function canCheckout(user, cart) {",
    "  if (user) {",
    "    if (!user.banned) {",
    "      if (cart.items.length > 0) {",
    "        if (cart.total <= user.creditLimit || user.verified) {",
    "          return { ok: true };",
    "        } else {",
    "          return { ok: false, reason: \"over credit limit\" };",
    "        }",
    "      } else {",
    "        return { ok: false, reason: \"empty cart\" };",
    "      }",
    "    } else {",
    "      return { ok: false, reason: \"account suspended\" };",
    "    }",
    "  } else {",
    "    return { ok: false, reason: \"not signed in\" };",
    "  }",
    "}");
  var CHECKOUT_INPUTS = "(function () { var us = [null, { banned: true, creditLimit: 100 }, { banned: false, creditLimit: 100 }, { banned: false, creditLimit: 100, verified: true }], cs = [{ items: [], total: 0 }, { items: [1], total: 50 }, { items: [1, 2], total: 100 }, { items: [1], total: 150 }], out = []; us.forEach(function (u) { cs.forEach(function (c) { out.push([u, c]); }); }); return out; })()";
  var CHECKOUT_DONE = L(
    "function canCheckout(user, cart) {",
    "  if (!user) return { ok: false, reason: \"not signed in\" };",
    "  if (user.banned) return { ok: false, reason: \"account suspended\" };",
    "  if (cart.items.length === 0) return { ok: false, reason: \"empty cart\" };",
    "  if (cart.total > user.creditLimit && !user.verified) return { ok: false, reason: \"over credit limit\" };",
    "  return { ok: true };",
    "}");

  /* ---- 3-2: extract and name ---- */
  var INVOICE = L(
    "function invoiceTotal(order) {",
    "  // subtotal",
    "  var sub = 0;",
    "  for (var i = 0; i < order.lines.length; i++) {",
    "    sub += order.lines[i].price * order.lines[i].qty;",
    "  }",
    "  // discount: 10% over $100, 15% over $500",
    "  var disc = 0;",
    "  if (sub > 500) disc = sub * 0.15;",
    "  else if (sub > 100) disc = sub * 0.1;",
    "  // tax on the discounted amount, unless exempt",
    "  var tax = order.taxExempt ? 0 : (sub - disc) * 0.08;",
    "  return Math.round((sub - disc + tax) * 100) / 100;",
    "}");
  var INVOICE_INPUTS = "(function () { var out = [], ls = [[], [{ price: 20, qty: 2 }], [{ price: 60, qty: 2 }], [{ price: 100, qty: 1 }], [{ price: 250, qty: 2 }, { price: 1.5, qty: 3 }], [{ price: 600, qty: 1 }], [{ price: 33.33, qty: 3 }]]; ls.forEach(function (l) { out.push([{ lines: l }]); out.push([{ lines: l, taxExempt: true }]); }); return out; })()";
  var INVOICE_DONE = L(
    "function subtotal(lines) {",
    "  var sum = 0;",
    "  for (var i = 0; i < lines.length; i++) sum += lines[i].price * lines[i].qty;",
    "  return sum;",
    "}",
    "",
    "// 10% over $100, 15% over $500",
    "function discountFor(amount) {",
    "  if (amount > 500) return amount * 0.15;",
    "  if (amount > 100) return amount * 0.1;",
    "  return 0;",
    "}",
    "",
    "function taxFor(amount, exempt) {",
    "  return exempt ? 0 : amount * 0.08;",
    "}",
    "",
    "function invoiceTotal(order) {",
    "  var sub = subtotal(order.lines);",
    "  var disc = discountFor(sub);",
    "  var tax = taxFor(sub - disc, order.taxExempt);",
    "  return Math.round((sub - disc + tax) * 100) / 100;",
    "}");

  /* ---- 3-3: one helper instead of three copies ---- */
  var REPORT = L(
    "function weeklyReport(s) {",
    "  var out = [];",
    "  out.push(\"Signups: \" + s.signups + \" (\" + (s.signups >= s.lastSignups ? \"+\" : \"\") + (s.signups - s.lastSignups) + \")\");",
    "  out.push(\"Orders: \" + s.orders + \" (\" + (s.orders >= s.lastOrders ? \"+\" : \"\") + (s.orders - s.lastOrders) + \")\");",
    "  out.push(\"Refunds: \" + s.refunds + \" (\" + (s.refunds >= s.lastRefunds ? \"+\" : \"\") + (s.refunds - s.lastRefunds) + \")\");",
    "  return out.join(\"\\n\");",
    "}");
  var REPORT_INPUTS = "[[{ signups: 10, lastSignups: 8, orders: 5, lastOrders: 9, refunds: 1, lastRefunds: 1 }], [{ signups: 0, lastSignups: 0, orders: 40, lastOrders: 12, refunds: 0, lastRefunds: 3 }], [{ signups: 3, lastSignups: 7, orders: 7, lastOrders: 7, refunds: 2, lastRefunds: 0 }]]";
  var REPORT_DONE = L(
    "function trendLine(label, now, before) {",
    "  var sign = now >= before ? \"+\" : \"\";",
    "  return label + \": \" + now + \" (\" + sign + (now - before) + \")\";",
    "}",
    "",
    "function weeklyReport(s) {",
    "  return [",
    "    trendLine(\"Signups\", s.signups, s.lastSignups),",
    "    trendLine(\"Orders\", s.orders, s.lastOrders),",
    "    trendLine(\"Refunds\", s.refunds, s.lastRefunds)",
    "  ].join(\"\\n\");",
    "}");

  /* ---- 3-4: name the magic numbers ---- */
  var FEE = L(
    "function lateFee(daysLate, balance) {",
    "  if (daysLate <= 3) return 0;",
    "  var fee = Math.min(balance * 0.015 * Math.ceil((daysLate - 3) / 30), 25);",
    "  return Math.round(fee * 100) / 100;",
    "}");
  var FEE_INPUTS = "(function () { var out = []; [0, 3, 4, 20, 33, 34, 64, 400].forEach(function (d) { [0, 50, 400, 2000].forEach(function (b) { out.push([d, b]); }); }); return out; })()";
  var FEE_DONE = L(
    "const GRACE_DAYS = 3;",
    "const MONTHLY_RATE = 0.015;",
    "const DAYS_PER_MONTH = 30;",
    "const FEE_CAP = 25;",
    "",
    "function lateFee(daysLate, balance) {",
    "  if (daysLate <= GRACE_DAYS) return 0;",
    "  var months = Math.ceil((daysLate - GRACE_DAYS) / DAYS_PER_MONTH);",
    "  var fee = Math.min(balance * MONTHLY_RATE * months, FEE_CAP);",
    "  return Math.round(fee * 100) / 100;",
    "}");

  window.CODELAB.addUnit("refactor", {
    id: "refactor-u3",
    title: "Small, safe steps",
    icon: "🪜",
    blurb: "Four refactorings from Fowler's catalog, each graded twice: the behavior must not move on dozens of inputs, and the shape must measurably improve. Guard clauses, extract and name, one helper instead of three copies, and named constants.",
    cheat: [
      { h: "Guard clauses", lang: "js", code:
"// before: the real work is four levels deep\n" +
"if (user) { if (!user.banned) { … } else { return fail; } } else { return fail; }\n" +
"// after: get the exits out of the way first\n" +
"if (!user) return fail;\n" +
"if (user.banned) return fail;\n" +
"…\n" +
"return ok;",
        note: "Invert each condition and return early. Careful with the inversions: !(a <= b || v) is (a > b && !v)." },
      { h: "Extract and name", lang: "js", code:
"// a comment saying what the next lines do\n" +
"// is a function waiting for a name\n" +
"var disc = discountFor(sub);",
        note: "Fowler's Extract Function. The comment becomes the name; the caller reads like a summary." },
      { h: "Three copies → one helper", lang: "js", code:
"function trendLine(label, now, before) { … }\n" +
"trendLine(\"Orders\", s.orders, s.lastOrders)",
        note: "Copies drift: fix one, forget the other two. One helper means one place to change." },
      { h: "Named constants", lang: "js", code:
"const GRACE_DAYS = 3;   // was 3, twice, meaning the same thing\n" +
"const FEE_CAP = 25;",
        note: "A name says what the number means and lets you change it in one place." },
      { h: "How these lessons grade", lang: "text", code:
"same behavior   original vs yours, on dozens of inputs\n" +
"better shape    depth, lines and branches, measured",
        note: "Results, errors and changes to arguments are all compared. Run often: each small step should stay green." }
    ],
    lessons: [

      {
        id: "refactor-u3-1",
        title: "Guard clauses",
        kind: "js", chip: "REFACTOR", xp: 20, mins: 12, refactor: true,
        brief: "`canCheckout()` works, but the one success case is buried four `if`s deep, and every failure is an `else` far from its condition.\n\nRewrite it with **guard clauses**: check each reason to fail first and return straight away, then return success at the end. Same results for every user and cart.\n\nInverting conditions is where this refactoring goes wrong. Take one `if` at a time and **Run** after each.",
        steps: [
          { text: "Every combination of user and cart gets the same answer as before.",
            test: same("canCheckout", CHECKOUT, CHECKOUT_INPUTS) },
          { text: "No more than one level of nesting inside the function.",
            test: L("var d = T.shape(canCheckout).depth;", "T.expect(d <= 1, 'canCheckout still nests ' + d + ' levels deep. Turn each if/else into an early return.');") },
          { text: "No new conditions, and shorter than before.", hidden: true,
            test: L(
              "var before = T.shape(T.legacy(" + JSON.stringify(CHECKOUT) + ")), now = T.shape(canCheckout);",
              "T.expect(now.branches <= before.branches, 'The new version checks more conditions than the old one (' + now.branches + ' vs ' + before.branches + '). Guard clauses only invert, they don\\'t add.');",
              "T.expect(now.lines <= 10, 'At ' + now.lines + ' lines it\\'s still long: with guard clauses each failure is one line, and there\\'s no else.');") }
        ],
        files: [{ name: "script.js", content: CHECKOUT + "\n\nconsole.log(canCheckout({ banned: false, creditLimit: 100 }, { items: [1], total: 50 }));\n" }],
        hints: [
          "Start from the outside: `if (!user) return { ok: false, reason: \"not signed in\" };` replaces the outer if/else. Then `if (user.banned) …`, then the empty cart.",
          "The last condition inverts: !(cart.total <= user.creditLimit || user.verified) is (cart.total > user.creditLimit && !user.verified). Then `return { ok: true };`."
        ],
        solution: { "script.js": CHECKOUT_DONE + "\n" }
      },

      {
        id: "refactor-u3-2",
        title: "Extract and name",
        kind: "js", chip: "REFACTOR", xp: 20, mins: 12, refactor: true,
        brief: "`invoiceTotal()` does three jobs, and its comments tell you where each one starts. A comment that says what the next few lines do is a function waiting for a name.\n\nExtract three functions, with exactly these names:\n\n- `subtotal(lines)`: the sum of price × quantity\n- `discountFor(amount)`: the discount on a subtotal\n- `taxFor(amount, exempt)`: the tax on an amount\n\nThen `invoiceTotal()` should read like a summary of the three. Every invoice must total exactly what it did before.",
        steps: [
          { text: "Every invoice totals exactly what it did before.",
            test: same("invoiceTotal", INVOICE, INVOICE_INPUTS) },
          { text: "`subtotal`, `discountFor` and `taxFor` exist and do their one job.",
            test: L(
              "T.expect(typeof subtotal === 'function' && typeof discountFor === 'function' && typeof taxFor === 'function', 'Extract subtotal(lines), discountFor(amount) and taxFor(amount, exempt).');",
              "T.eq(subtotal([{ price: 2, qty: 3 }, { price: 1.5, qty: 2 }]), 9, 'subtotal(lines) adds price × qty.');",
              "T.eq([discountFor(50), discountFor(200), discountFor(1000)], [0, 20, 150], 'discountFor(amount): nothing up to $100, 10% over, 15% over $500.');",
              "T.eq([taxFor(100, false), taxFor(100, true)], [8, 0], 'taxFor(amount, exempt): 8%, or nothing when exempt.');") },
          { text: "`invoiceTotal` reads like a summary.",
            test: L("var sh = T.shape(invoiceTotal);", "T.expect(sh.lines <= 7 && sh.depth === 0, 'invoiceTotal is ' + sh.lines + ' lines and ' + sh.depth + ' levels deep. It should call the three helpers and combine their answers.');") }
        ],
        files: [{ name: "script.js", content: INVOICE + "\n\nconsole.log(invoiceTotal({ lines: [{ price: 60, qty: 2 }] }));\n" }],
        hints: [
          "Move the loop into `function subtotal(lines) { … return sum; }` and call it: `var sub = subtotal(order.lines);`. Run.",
          "Then `function discountFor(amount)` with the two ifs as returns, and `function taxFor(amount, exempt)`. Keep the arithmetic in the same order so the cents come out the same."
        ],
        solution: { "script.js": INVOICE_DONE + "\n" }
      },

      {
        id: "refactor-u3-3",
        title: "Three copies, one helper",
        kind: "js", chip: "REFACTOR", xp: 20, mins: 12, refactor: true,
        brief: "`weeklyReport()` builds three lines the same way, by copy and paste. The day someone changes how a trend is shown, they'll fix one copy and miss two.\n\nExtract **one helper** that builds a line from a label, this week's number and last week's, and use it for all three. The report must read exactly as before, signs and all.",
        steps: [
          { text: "Every report reads exactly as before.",
            test: same("weeklyReport", REPORT, REPORT_INPUTS) },
          { text: "`weeklyReport` no longer makes any decisions itself.",
            test: L("var sh = T.shape(weeklyReport);", "T.eq(sh.branches, 0, 'weeklyReport still has ' + sh.branches + ' conditions in it. Move the line-building, sign and all, into one helper.');") },
          { text: "The sign is decided in exactly one place.", hidden: true,
            test: L("var src = __FILES['script.js'];", "var n = (src.match(/>=/g) || []).length;", "T.eq(n, 1, 'The \"+\" rule appears ' + n + ' times. One helper means one place to change it.');") }
        ],
        files: [{ name: "script.js", content: REPORT + "\n\nconsole.log(weeklyReport({ signups: 10, lastSignups: 8, orders: 5, lastOrders: 9, refunds: 1, lastRefunds: 1 }));\n" }],
        hints: [
          "Write `function trendLine(label, now, before)` that returns one line, e.g. trendLine(\"Orders\", 5, 9) → \"Orders: 5 (-4)\". Check it against one of the existing lines.",
          "Then weeklyReport returns [trendLine(\"Signups\", s.signups, s.lastSignups), …].join(\"\\n\")."
        ],
        solution: { "script.js": REPORT_DONE + "\n" }
      },

      {
        id: "refactor-u3-4",
        title: "Name the magic numbers",
        kind: "js", chip: "REFACTOR", xp: 20, mins: 10, refactor: true,
        brief: "`lateFee()` is correct and unreadable: `3`, `0.015`, `30` and `25` mean nothing to the next reader, and the grace period appears twice.\n\nGive each number a name, as a top-level `const` in CAPITALS (`GRACE_DAYS`, and so on), and use the names in the function. The fee must come out the same for every case.",
        steps: [
          { text: "Every fee comes out the same as before.",
            test: same("lateFee", FEE, FEE_INPUTS) },
          { text: "No unexplained numbers left in `lateFee`.",
            test: L(
              "var body = lateFee.toString();",
              "var left = (body.match(/\\b(3|30|25|0\\.015)\\b/g) || []);",
              "T.eq(left, [], 'lateFee still uses ' + left.join(', ') + ' directly. Give each a name with const, outside the function.');") },
          { text: "Each number is defined once, with a name that says what it is.", hidden: true,
            test: L(
              "var src = __FILES['script.js'];",
              "var consts = src.match(/const\\s+[A-Z][A-Z0-9_]{2,}\\s*=\\s*[0-9.]+/g) || [];",
              "T.expect(consts.length >= 4, 'Declare each value as a named const in CAPITALS: the grace period, the monthly rate, the days in a month and the cap.');",
              "T.expect((src.match(/=\\s*3\\s*;/g) || []).length === 1, 'The grace period should be defined once and used twice.');") }
        ],
        files: [{ name: "script.js", content: FEE + "\n\nconsole.log(lateFee(40, 400));\n" }],
        hints: [
          "const GRACE_DAYS = 3; const MONTHLY_RATE = 0.015; const DAYS_PER_MONTH = 30; const FEE_CAP = 25; above the function.",
          "Then replace each number in lateFee with its name. A `months` variable for Math.ceil((daysLate - GRACE_DAYS) / DAYS_PER_MONTH) makes the fee line read easily."
        ],
        solution: { "script.js": FEE_DONE + "\n" }
      },

      {
        id: "refactor-u3-quiz",
        title: "Unit 3 quiz: Small, safe steps",
        kind: "quiz", xp: 10,
        brief: "Guard clauses, extracting functions, removing duplication and naming numbers. 80% to pass.",
        questions: [
          { q: "What's the inverse of `if (total <= limit || verified)`?",
            choices: ["if (total > limit || !verified)", "if (total >= limit && verified)", "if (total > limit && !verified)", "if (!total <= limit)"],
            answer: 2, explain: "!(a || b) is (!a && !b), and !(x <= y) is (x > y). Inverting conditions is where guard clauses go wrong." },
          { q: "A comment above five lines says \"// apply discount\". What does it suggest?",
            choices: ["The comment should be made longer and more detailed, so the next reader understands it", "Those lines want to be a function called something like applyDiscount", "The lines should be deleted", "Nothing: comments are always good"],
            answer: 1, explain: "Extract Function: the comment becomes the name, and the caller reads like a summary." },
          { q: "Why is copy-pasted code risky even when every copy is correct today?",
            choices: ["It runs slower", "JavaScript engines refuse to run files that contain duplicate lines", "It uses more memory", "A later fix to one copy tends to miss the others"],
            answer: 3, explain: "Copies drift. One helper gives the next change one place to happen." },
          { q: "The number 3 appears twice in a function, both meaning the grace period. Best refactor?",
            choices: ["const GRACE_DAYS = 3, used in both places", "Leave it: two is not a lot", "Replace one with 2 + 1", "Add a comment next to each one explaining that it means the grace period"],
            answer: 0, explain: "One named definition says what it means and keeps the two uses in step." },
          { q: "How do you know a refactor kept the behavior?",
            choices: ["It looks the same", "It still compiles and runs without throwing, and the function is noticeably shorter than it was", "The original and new versions give identical results on many inputs, including edge cases", "The function is shorter"],
            answer: 2, explain: "Compare results, errors and argument changes across inputs that reach every branch." }
        ]
      }
    ]
  });
})();
