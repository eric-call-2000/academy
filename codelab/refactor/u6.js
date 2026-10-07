/* Refactoring Legacy Code — Unit 6: Two projects */
(function () {
  function L() { return Array.prototype.join.call(arguments, "\n"); }

  /* ---- Project 1: priceOrder ---- */
  var PRICE = L(
    "function priceOrder(order) {",
    "  var total = 0;",
    "  for (var i = 0; i < order.lines.length; i++) {",
    "    var l = order.lines[i];",
    "    if (l.qty > 0) {",
    "      if (l.category === \"book\") {",
    "        total = total + Math.round(l.price * l.qty * 100) / 100;",
    "      } else {",
    "        if (l.qty >= 10) {",
    "          total = total + Math.round(l.price * l.qty * 0.9 * 100) / 100;",
    "        } else {",
    "          total = total + Math.round(l.price * l.qty * 100) / 100;",
    "        }",
    "      }",
    "    }",
    "  }",
    "  if (order.member) {",
    "    if (total > 100) {",
    "      total = total - 10;",
    "    } else {",
    "      total = total - Math.round(total * 0.05 * 100) / 100;",
    "    }",
    "  }",
    "  if (order.country !== \"US\") {",
    "    total = total + 15;",
    "  } else {",
    "    if (total < 35) {",
    "      total = total + 5;",
    "    }",
    "  }",
    "  return Math.round(total * 100) / 100;",
    "}");
  function pv(find, repl) {
    if (PRICE.indexOf(find) === -1) throw new Error("bad mutant: " + find);
    return PRICE.replace(find, repl);
  }
  var P_BOOKS = pv("if (l.category === \"book\") {", "if (false) {");
  var P_MEMBER = pv("if (total > 100) {", "if (total >= 100) {");
  var P_NEG = pv("if (l.qty > 0) {", "if (l.qty !== 0) {");
  var P_SHIP = pv("  if (order.member) {", "  var before = total;\n  if (order.member) {").replace("if (total < 35) {", "if (before < 35) {");
  /* 300 seeded orders: categories, bulk sizes, zero and negative lines,
     members around the $100 line, US and elsewhere. */
  var ORDERS = "(function () { var s = 12345; function r() { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; } var out = []; for (var k = 0; k < 300; k++) { var n = 1 + Math.floor(r() * 4), lines = []; for (var j = 0; j < n; j++) lines.push({ category: r() < 0.3 ? 'book' : 'gear', price: Math.round(r() * 6000) / 100, qty: Math.floor(r() * 14) - 1 }); out.push([{ lines: lines, member: r() < 0.5, country: r() < 0.7 ? 'US' : 'CA' }]); } out.push([{ lines: [{ category: 'gear', price: 10, qty: 10 }], member: true, country: 'US' }]); out.push([{ lines: [{ category: 'book', price: 100, qty: 1 }], member: true, country: 'US' }]); out.push([{ lines: [], member: false, country: 'US' }]); return out; })()";
  var PICKED = "[[{ lines: [{ category: 'book', price: 12, qty: 10 }], country: 'US' }], [{ lines: [{ category: 'gear', price: 5, qty: 10 }], country: 'US' }], [{ lines: [{ category: 'gear', price: 100, qty: 1 }], member: true, country: 'US' }], [{ lines: [{ category: 'gear', price: 120, qty: 1 }], member: true, country: 'CA' }], [{ lines: [{ category: 'gear', price: 20, qty: -2 }, { category: 'book', price: 8, qty: 1 }], country: 'US' }]]";
  var PRICE_DONE = L(
    "const BULK_QTY = 10;",
    "const BULK_RATE = 0.9;",
    "",
    "function cents(x) { return Math.round(x * 100) / 100; }",
    "",
    "// Books never get the bulk discount; lines with qty <= 0 are ignored.",
    "function lineTotal(l) {",
    "  if (l.qty <= 0) return 0;",
    "  var rate = l.category !== \"book\" && l.qty >= BULK_QTY ? BULK_RATE : 1;",
    "  return cents(l.price * l.qty * rate);",
    "}",
    "",
    "// Members: $10 off over $100, otherwise 5% off.",
    "function memberDiscount(total) {",
    "  return total > 100 ? 10 : cents(total * 0.05);",
    "}",
    "",
    "// Outside the US: $15. In the US: $5 under $35, after any member discount.",
    "function shipping(total, country) {",
    "  if (country !== \"US\") return 15;",
    "  return total < 35 ? 5 : 0;",
    "}",
    "",
    "function priceOrder(order) {",
    "  var total = 0;",
    "  for (var i = 0; i < order.lines.length; i++) total = total + lineTotal(order.lines[i]);",
    "  if (order.member) total = total - memberDiscount(total);",
    "  total = total + shipping(total, order.country);",
    "  return cents(total);",
    "}",
    "",
    "it(\"books never get the bulk discount\", function () {",
    "  expect(priceOrder({ lines: [{ category: \"book\", price: 12, qty: 10 }], country: \"US\" })).toBe(120);",
    "});",
    "it(\"10 or more of anything else is 10% off\", function () {",
    "  expect(priceOrder({ lines: [{ category: \"gear\", price: 5, qty: 10 }], country: \"US\" })).toBe(45);",
    "});",
    "it(\"members: exactly $100 gets 5%, over $100 gets $10\", function () {",
    "  expect(priceOrder({ lines: [{ category: \"gear\", price: 100, qty: 1 }], member: true, country: \"US\" })).toBe(95);",
    "  expect(priceOrder({ lines: [{ category: \"gear\", price: 120, qty: 1 }], member: true, country: \"US\" })).toBe(110);",
    "});",
    "it(\"lines with zero or negative quantity are ignored\", function () {",
    "  expect(priceOrder({ lines: [{ category: \"gear\", price: 20, qty: -2 }, { category: \"book\", price: 40, qty: 1 }], country: \"US\" })).toBe(40);",
    "});",
    "it(\"US shipping is decided after the member discount\", function () {",
    "  expect(priceOrder({ lines: [{ category: \"gear\", price: 36, qty: 1 }], member: true, country: \"US\" })).toBe(39.2);",
    "});",
    "it(\"outside the US shipping is $15\", function () {",
    "  expect(priceOrder({ lines: [{ category: \"gear\", price: 10, qty: 1 }], country: \"CA\" })).toBe(25);",
    "});",
    "",
    "run();");

  /* ---- Project 2: notifications ---- */
  var NOTE = L(
    "function notification(event, channel) {",
    "  if (channel === \"email\") {",
    "    if (event.type === \"shipped\") return { to: event.user.email, subject: \"Your order shipped\", body: \"Order \" + event.orderId + \" is on its way.\" };",
    "    if (event.type === \"delivered\") return { to: event.user.email, subject: \"Delivered\", body: \"Order \" + event.orderId + \" was delivered.\" };",
    "    if (event.type === \"refund\") return { to: event.user.email, subject: \"Refund issued\", body: \"We refunded $\" + event.amount.toFixed(2) + \" for order \" + event.orderId + \".\" };",
    "  }",
    "  if (channel === \"push\") {",
    "    if (event.type === \"shipped\") return { to: event.user.deviceId, body: \"Order \" + event.orderId + \" is on its way.\" };",
    "    if (event.type === \"delivered\") return { to: event.user.deviceId, body: \"Order \" + event.orderId + \" was delivered.\" };",
    "    if (event.type === \"refund\") return { to: event.user.deviceId, body: \"We refunded $\" + event.amount.toFixed(2) + \" for order \" + event.orderId + \".\" };",
    "  }",
    "  return null;",
    "}");
  var NOTE_DONE = L(
    "const SUBJECTS = { shipped: \"Your order shipped\", delivered: \"Delivered\", refund: \"Refund issued\" };",
    "",
    "function messageText(event) {",
    "  if (event.type === \"shipped\") return \"Order \" + event.orderId + \" is on its way.\";",
    "  if (event.type === \"delivered\") return \"Order \" + event.orderId + \" was delivered.\";",
    "  if (event.type === \"refund\") return \"We refunded $\" + event.amount.toFixed(2) + \" for order \" + event.orderId + \".\";",
    "  return null;",
    "}",
    "",
    "function notification(event, channel) {",
    "  var text = messageText(event);",
    "  if (text === null) return null;",
    "  if (channel === \"email\") return { to: event.user.email, subject: SUBJECTS[event.type], body: text };",
    "  if (channel === \"push\") return { to: event.user.deviceId, body: text };",
    "  if (channel === \"sms\") return { to: event.user.phone, body: \"Shop: \" + text };",
    "  return null;",
    "}");
  var EVENTS = "(function () { var u = { email: 'a@example.com', deviceId: 'dev-1', phone: '+15550100' }, ev = [{ type: 'shipped', orderId: 'A1', user: u }, { type: 'delivered', orderId: 'B2', user: u }, { type: 'refund', orderId: 'C3', amount: 12.5, user: u }, { type: 'review', orderId: 'D4', user: u }], out = []; ev.forEach(function (e) { ['email', 'push', 'fax'].forEach(function (c) { out.push([e, c]); }); }); return out; })()";

  window.CODELAB.addUnit("refactor", {
    id: "refactor-u6",
    title: "Two projects",
    icon: "🏗️",
    blurb: "No new techniques. Pin a tangled pricing function with characterization tests and reshape it without moving a cent, then make a change easy before you make it. Most of the checks are hidden, and the big one runs your code against the original on hundreds of orders.",
    cheat: [
      { h: "The whole method", lang: "text", code:
"1 read it: list every condition\n" +
"2 pin it: one characterization test per condition, quirks too\n" +
"3 reshape it in small steps, Run after each\n" +
"4 only then: the new feature, with its own tests",
        note: "Everything from Units 2–4, in order. If a test goes red during step 3, undo the last step rather than fixing forward." }
    ],
    lessons: [

      {
        id: "refactor-u6-1",
        title: "Project: pin it, then reshape it",
        kind: "js", chip: "REFACTOR", xp: 50, mins: 35, project: true, spec: true, refactor: true,
        brief: "`priceOrder()` prices every order the shop takes. It's four levels deep, it repeats itself, and nobody remembers all its rules. Next sprint someone needs to change it. Make that safe.\n\n1. **Pin it.** Characterization tests for what it does today, every rule and quirk. Call `run()` at the end.\n2. **Reshape it** in small steps, running after each: flatten it, extract helpers, remove the repetition.\n\nYour finished `priceOrder()` must return **exactly** what the original does, to the cent, for every order. Some of the checks are hidden.",
        steps: [
          { text: "Your characterization tests are green.",
            test: L(
              "var r = await run();",
              "T.expect(r.total >= 4, 'Write at least four characterization tests, one per rule you find.');",
              "T.eq(r.failed, 0, 'Your tests should pass against priceOrder as it is.');") },
          { text: "They catch bulk discounts given on books.",
            test: L(
              "var m = await T.mutate('priceOrder', T.legacy(" + JSON.stringify(P_BOOKS) + "), function () { return run(); });",
              "T.expect(m.failed > 0, 'A version that gives books the bulk discount passed your tests. Pin it: 10 books cost full price.');") },
          { text: "They catch the other rules too.", hidden: true,
            test: L(
              "var m1 = await T.mutate('priceOrder', T.legacy(" + JSON.stringify(P_MEMBER) + "), function () { return run(); });",
              "T.expect(m1.failed > 0, 'A boundary isn\\'t pinned: what does a member pay on exactly $100?');",
              "var m2 = await T.mutate('priceOrder', T.legacy(" + JSON.stringify(P_NEG) + "), function () { return run(); });",
              "T.expect(m2.failed > 0, 'A quirk isn\\'t pinned: what happens to a line with a negative quantity?');",
              "var m3 = await T.mutate('priceOrder', T.legacy(" + JSON.stringify(P_SHIP) + "), function () { return run(); });",
              "T.expect(m3.failed > 0, 'An ordering isn\\'t pinned: is the $35 shipping threshold checked before or after the member discount?');",
              "T.eq((await run()).failed, 0, 'and green again with the real priceOrder.');") },
          { text: "Hand-picked orders price exactly as before.",
            test: "T.expectSame(T.legacy(" + JSON.stringify(PRICE) + "), priceOrder, " + PICKED + ", 'priceOrder');" },
          { text: "It's reshaped: at most two levels deep, short, and no repeated lines.",
            test: L(
              "var sh = T.shape(priceOrder);",
              "T.expect(sh.depth <= 2, 'priceOrder is still ' + sh.depth + ' levels deep. Guard clauses and extracted helpers flatten it.');",
              "T.expect(sh.lines <= 15, 'priceOrder is ' + sh.lines + ' lines. Extract the line total, the member discount and the shipping into helpers.');",
              "var dup = T.repeats(priceOrder);",
              "T.eq(dup, [], 'These lines still repeat: ' + dup.join(' / '));") },
          { text: "Every order prices exactly as before.", hidden: true,
            test: "T.expectSame(T.legacy(" + JSON.stringify(PRICE) + "), priceOrder, " + ORDERS + ", 'priceOrder (300 orders)');" }
        ],
        files: [{ name: "script.js", content: L(
          "// Legacy. Pin it, then reshape it.",
          PRICE,
          "",
          "console.log(priceOrder({ lines: [{ category: \"gear\", price: 20, qty: 2 }], country: \"US\" }));",
          "",
          "// Your characterization tests:",
          "",
          "",
          "run();",
          "") }],
        hints: [
          "List the conditions first: qty > 0, books vs. the rest, qty >= 10, member and the $100 line (> not >=), non-US, and the $35 check, which comes after the member discount. Pin each one, both sides of each boundary.",
          "Then extract lineTotal(line), memberDiscount(total) and shipping(total, country), keeping every Math.round exactly where it was. Run after each extraction: the hand-picked check tells you straight away if a cent moved.",
          "priceOrder becomes: sum lineTotal over the lines; subtract memberDiscount if member; add shipping; round. Keep the order of operations: shipping looks at the total AFTER the member discount."
        ],
        solution: { "script.js": L("// Legacy, pinned and reshaped.", PRICE_DONE, "") }
      },

      {
        id: "refactor-u6-2",
        title: "Project: make the change easy",
        kind: "js", chip: "REFACTOR", xp: 50, mins: 25, project: true, refactor: true,
        brief: "The ticket: **add SMS notifications.** An SMS goes to `event.user.phone` and its body is the same text as the push notification with `\"Shop: \"` in front. So, for a shipped order: `{ to: phone, body: \"Shop: Order A1 is on its way.\" }`.\n\nYou could paste a third block of three nearly identical lines. Then the next channel needs a fourth, and the next message wording has to be changed in three places.\n\nKent Beck: **make the change easy (this may be hard), then make the easy change.** Refactor `notification()` so each message's wording exists in exactly one place, with email and push working exactly as before. Then add SMS. Unknown event types and channels still return `null`.",
        steps: [
          { text: "Email and push behave exactly as before, for every event and channel.",
            test: "T.expectSame(T.legacy(" + JSON.stringify(NOTE) + "), notification, " + EVENTS + ", 'notification');" },
          { text: "SMS works for every event type.",
            test: L(
              "var u = { email: 'a@example.com', deviceId: 'dev-1', phone: '+15550100' };",
              "T.eq(notification({ type: 'shipped', orderId: 'A1', user: u }, 'sms'), { to: '+15550100', body: 'Shop: Order A1 is on its way.' }, 'An SMS goes to the phone, with \"Shop: \" in front of the push text.');",
              "T.eq(notification({ type: 'refund', orderId: 'C3', amount: 12.5, user: u }, 'sms'), { to: '+15550100', body: 'Shop: We refunded $12.50 for order C3.' }, 'Refunds too.');",
              "T.eq(notification({ type: 'review', orderId: 'D4', user: u }, 'sms'), null, 'An unknown event type is still null.');") },
          { text: "Each message's wording appears exactly once.",
            test: L(
              "var src = __FILES['script.js'];",
              "['is on its way', 'was delivered', 'We refunded'].forEach(function (p) {",
              "  var n = src.split(p).length - 1;",
              "  T.eq(n, 1, '\"' + p + '\" is written ' + n + ' times. Make the change easy first: one place for each message.');",
              "});") },
          { text: "A fourth channel would be one more line.", hidden: true,
            test: L(
              "var sh = T.shape(notification);",
              "T.expect(sh.lines <= 10, 'notification is ' + sh.lines + ' lines. Each channel should be one line that uses the shared message text.');",
              "T.expect(sh.depth <= 1, 'notification still nests ' + sh.depth + ' levels. Work out the text once, then pick the channel.');") }
        ],
        files: [{ name: "script.js", content: L(
          "// Legacy. Make the change easy, then add SMS.",
          NOTE,
          "",
          "console.log(notification({ type: \"shipped\", orderId: \"A1\", user: { email: \"a@example.com\", deviceId: \"dev-1\", phone: \"+15550100\" } }, \"push\"));",
          "") }],
        hints: [
          "First, without adding SMS: extract messageText(event) that returns the body text for each type (or null), and use it for both channels. Run: the first check should stay green.",
          "Email also needs a subject per type; a small map like const SUBJECTS = { shipped: \"Your order shipped\", … } keeps it in one place.",
          "Now notification is: text = messageText(event); if null, return null; then one line per channel. SMS is one more line: { to: event.user.phone, body: \"Shop: \" + text }."
        ],
        solution: { "script.js": L("// Made easy, then changed.", NOTE_DONE, "") }
      }
    ]
  });
})();
