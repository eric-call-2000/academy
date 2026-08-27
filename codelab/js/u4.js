/* Learn JavaScript — Unit 4: Functions Deep Dive */
window.CODELAB.addUnit("js", {
  id: "js-u4",
  title: "Functions Deep Dive",
  icon: "🛠️",
  blurb: "Defaults, guard clauses, callbacks, closures, and the purity mindset.",
  cheat: [
    { h: "Default parameters", lang: "js", code: "function brew(drink = \"coffee\", size = \"medium\") {\n  return size + \" \" + drink;\n}\nbrew();            // \"medium coffee\"\nbrew(\"tea\", \"large\"); // \"large tea\"" },
    { h: "Guard clauses", lang: "js", code: "function safeDivide(a, b) {\n  if (b === 0) return null;   // bail out early\n  return a / b;               // happy path stays unindented\n}" },
    { h: "Callbacks", lang: "js", code: "function applyTwice(fn, x) {\n  return fn(fn(x));\n}\napplyTwice(n => n * 3, 2); // 18", note: "Functions are values — pass them around like numbers." },
    { h: "Closures", lang: "js", code: "function makeCounter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\nconst tick = makeCounter();\ntick(); tick(); // 1, then 2 — count lives on!", note: "The inner function REMEMBERS the variables around its birth." },
    { h: "Pure functions", lang: "js", code: "// pure: same input → same output, touches nothing outside\nconst withTax = (price) => price * 1.2;\n\n// pure list update: copy, don't mutate\nconst added = [...list, item];" }
  ],
  lessons: [

    {
      id: "js-u4-1",
      title: "Default parameters",
      kind: "js", chip: "JS", xp: 15,
      brief: "Parameters can carry **defaults** — used whenever the caller leaves them out:\n\n`function brew(drink = \"coffee\", size = \"medium\") { … }`\n\nCall `brew()` and you get a medium coffee; pass arguments and they override left-to-right. You're wiring up the café's order counter.",
      steps: [
        { text: "Write `brew(drink = \"coffee\", size = \"medium\")` returning `` `${size} ${drink}` ``.",
          test: "T.expect(typeof brew === 'function', 'Define brew(drink, size) with defaults.');\nT.eq(brew(), 'medium coffee', 'brew() with no arguments uses both defaults');\nT.eq(brew('tea'), 'medium tea', 'brew(\"tea\") keeps the size default');\nT.eq(brew('matcha', 'large'), 'large matcha', 'brew(\"matcha\", \"large\") overrides both');" },
        { text: "Write `receiptLine(item, qty = 1)` returning `` `${qty}x ${item}` ``.",
          test: "T.expect(typeof receiptLine === 'function', 'Define receiptLine(item, qty = 1).');\nT.eq(receiptLine('croissant'), '1x croissant', 'Default qty is 1');\nT.eq(receiptLine('bagel', 3), '3x bagel', 'Explicit qty wins');" },
        { text: "Log a plain `brew()` order.",
          test: "T.expect(T.logged('medium coffee'), 'console.log(brew());');" }
      ],
      files: [
        { name: "script.js", content: "// 1) brew(drink = \"coffee\", size = \"medium\") → `${size} ${drink}`\n\n// 2) receiptLine(item, qty = 1) → `${qty}x ${item}`\n\n// 3) log brew()\n" }
      ],
      hints: [
        "Defaults live in the parameter list: `function brew(drink = \"coffee\", size = \"medium\")`.",
        "Template literals keep it tidy: `` return `${size} ${drink}`; ``"
      ],
      solution: {
        "script.js": "function brew(drink = \"coffee\", size = \"medium\") {\n  return `${size} ${drink}`;\n}\n\nfunction receiptLine(item, qty = 1) {\n  return `${qty}x ${item}`;\n}\n\nconsole.log(brew());\n"
      }
    },

    {
      id: "js-u4-2",
      title: "Guard clauses: bail out early",
      kind: "js", chip: "JS", xp: 15,
      brief: "Instead of nesting your whole function inside `if (everythingIsFine) { … }`, professionals **reject bad input first and return early**:\n\nThe happy path stays flat and readable. Rule of thumb: validate at the top, then write the function as if inputs are good.",
      example: { lang: "js", code: "function safeDivide(a, b) {\n  if (typeof a !== \"number\") return null;\n  if (b === 0) return null;\n  return a / b;\n}" },
      steps: [
        { text: "Write `safeDivide(a, b)` — returns `null` if either argument isn't a number or if `b` is 0; otherwise divides.",
          test: "T.expect(typeof safeDivide === 'function', 'Define safeDivide(a, b).');\nT.eq(safeDivide(10, 2), 5, 'safeDivide(10, 2)');\nT.eq(safeDivide(9, 0), null, 'Dividing by zero → null, not Infinity');\nT.eq(safeDivide('ten', 2), null, 'Non-number a → null');\nT.eq(safeDivide(10, 'two'), null, 'Non-number b → null');" },
        { text: "Write `firstWord(sentence)` — guard: non-string or empty → `\"\"`; otherwise the text before the first space (or the whole string if no space).",
          test: "T.expect(typeof firstWord === 'function', 'Define firstWord(sentence).');\nT.eq(firstWord('hello brave world'), 'hello', 'firstWord of a sentence');\nT.eq(firstWord('solo'), 'solo', 'No space → the whole word');\nT.eq(firstWord(''), '', 'Empty string → \"\"');\nT.eq(firstWord(42), '', 'Not a string → \"\" (guard clause!)');" }
      ],
      files: [
        { name: "script.js", content: "// 1) safeDivide(a, b): guards → null for bad input or b === 0\n\n// 2) firstWord(sentence): guard non-strings/empty → \"\"\n//    hint: sentence.split(\" \")[0]\n\nconsole.log(safeDivide(10, 2), firstWord(\"guard clauses rock\"));\n" }
      ],
      hints: [
        "Guards first: `if (typeof a !== \"number\" || typeof b !== \"number\") return null;` then `if (b === 0) return null;`",
        "firstWord guard: `if (typeof sentence !== \"string\" || sentence === \"\") return \"\";` then `return sentence.split(\" \")[0];`"
      ],
      solution: {
        "script.js": "function safeDivide(a, b) {\n  if (typeof a !== \"number\" || typeof b !== \"number\") return null;\n  if (b === 0) return null;\n  return a / b;\n}\n\nfunction firstWord(sentence) {\n  if (typeof sentence !== \"string\" || sentence === \"\") return \"\";\n  return sentence.split(\" \")[0];\n}\n\nconsole.log(safeDivide(10, 2), firstWord(\"guard clauses rock\"));\n"
      }
    },

    {
      id: "js-u4-3",
      title: "Callbacks: functions as values",
      kind: "js", chip: "JS", xp: 15,
      brief: "In JavaScript, a function is a **value** — you can store it, pass it, return it. A function passed into another function is a **callback**.\n\nYou've already used them (`.map(n => n * 2)` — that arrow IS a callback). Now build the machinery yourself, so map and filter stop feeling like magic.",
      steps: [
        { text: "Write `applyTwice(fn, x)` — calls `fn` on `x`, then on the result.",
          test: "T.expect(typeof applyTwice === 'function', 'Define applyTwice(fn, x).');\nT.eq(applyTwice(function (n) { return n * 3; }, 2), 18, 'Triple twice: 2 → 6 → 18');\nT.eq(applyTwice(function (s) { return s + '!'; }, 'go'), 'go!!', 'Works on strings too');" },
        { text: "Write `countWhere(list, testFn)` — how many items pass the callback's test. (You just rebuilt the heart of `.filter`.)",
          test: "T.expect(typeof countWhere === 'function', 'Define countWhere(list, testFn).');\nT.eq(countWhere([1, 8, 3, 9], function (n) { return n > 5; }), 2, 'Two numbers above 5');\nT.eq(countWhere(['ok', 'nope', 'ok'], function (s) { return s === 'ok'; }), 2, 'Count the oks');\nT.eq(countWhere([], function () { return true; }), 0, 'Empty list → 0');" },
        { text: "Use `countWhere` with an **arrow** callback to count even numbers in `[4, 7, 10, 3, 8]`, and log it.",
          test: "T.eq(evens, 3, 'const evens = countWhere([4, 7, 10, 3, 8], n => n % 2 === 0);');\nT.expect(T.logged('3'), 'console.log(evens);');" }
      ],
      files: [
        { name: "script.js", content: "// 1) applyTwice(fn, x) → fn(fn(x))\n\n// 2) countWhere(list, testFn) → how many items testFn approves\n//    (loop the list, call testFn(item), count the trues)\n\n// 3) const evens = countWhere([4, 7, 10, 3, 8], /* arrow: is n even? */);\n//    then log evens\n" }
      ],
      hints: [
        "`return fn(fn(x));` — that's the whole body.",
        "countWhere: `let hits = 0; for (const item of list) { if (testFn(item)) hits++; } return hits;`",
        "Even test as an arrow: `n => n % 2 === 0`"
      ],
      solution: {
        "script.js": "function applyTwice(fn, x) {\n  return fn(fn(x));\n}\n\nfunction countWhere(list, testFn) {\n  let hits = 0;\n  for (const item of list) {\n    if (testFn(item)) hits++;\n  }\n  return hits;\n}\n\nconst evens = countWhere([4, 7, 10, 3, 8], n => n % 2 === 0);\nconsole.log(evens);\n"
      }
    },

    {
      id: "js-u4-4",
      title: "Closures: functions with memory",
      kind: "js", chip: "JS", xp: 15,
      brief: "A function **remembers the variables that surrounded its birth** — even after the outer function has finished. That memory is a **closure**.\n\nIt's how you make private state: nobody can touch `count` below except the function that owns it. This idea powers React hooks, event handlers, and half of professional JavaScript.",
      example: { lang: "js", code: "function makeCounter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}" },
      steps: [
        { text: "Write `makeCounter()` returning a function that increments and returns its own private count.",
          test: "T.expect(typeof makeCounter === 'function', 'Define makeCounter().');\nvar tick = makeCounter();\nT.expect(typeof tick === 'function', 'makeCounter() must RETURN a function.');\nT.eq(tick(), 1, 'First call → 1');\nT.eq(tick(), 2, 'Second call → 2 — the count survived between calls!');" },
        { text: "Each counter is independent: a second `makeCounter()` starts fresh at 1.",
          test: "var a = makeCounter();\na(); a(); a();\nvar b = makeCounter();\nT.eq(b(), 1, 'A brand-new counter starts at 1, untouched by the other one — each closure has its OWN count.');\nT.eq(a(), 4, 'And the first one keeps its history (4th call → 4).');" },
        { text: "Write `makeGreeter(greeting)` — returns a function that greets any name with the remembered greeting.",
          test: "T.expect(typeof makeGreeter === 'function', 'Define makeGreeter(greeting).');\nvar hi = makeGreeter('Hi');\nvar yo = makeGreeter('Yo');\nT.eq(hi('Ada'), 'Hi, Ada!', 'hi(\"Ada\")');\nT.eq(yo('Linus'), 'Yo, Linus!', 'yo(\"Linus\") — each greeter remembers ITS greeting.');" }
      ],
      files: [
        { name: "script.js", content: "// 1+2) makeCounter() → a function with its own private, persistent count\n\n// 3) makeGreeter(greeting) → (name) => `${greeting}, ${name}!`\n\nconst tick = makeCounter();\nconsole.log(tick(), tick(), tick());\n" }
      ],
      hints: [
        "Declare `let count = 0;` INSIDE makeCounter, then return a function that does `count++; return count;`",
        "makeGreeter returns an arrow that uses the outer parameter: `return (who) => `${greeting}, ${who}!`;`"
      ],
      solution: {
        "script.js": "function makeCounter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}\n\nfunction makeGreeter(greeting) {\n  return (who) => `${greeting}, ${who}!`;\n}\n\nconst tick = makeCounter();\nconsole.log(tick(), tick(), tick());\n"
      }
    },

    {
      id: "js-u4-5",
      title: "Pure functions & immutability",
      kind: "js", chip: "JS", xp: 15,
      brief: "A **pure** function: same input → same output, and it **touches nothing outside itself** — no mutating arguments, no global scribbling. Pure code is trivially testable and never surprises you.\n\nThe classic sin is mutating an array a caller still owns. The cure: **copy, don't mutate** — spread `[...list, item]` gives you a new array.",
      steps: [
        { text: "Write the pure `withTax(price)` — returns the price times 1.2, rounded to 2 decimals.",
          test: "T.expect(typeof withTax === 'function', 'Define withTax(price).');\nT.eq(withTax(10), 12, 'withTax(10)');\nT.eq(withTax(9.99), 11.99, 'withTax(9.99) — round to 2 decimals: Math.round(x * 100) / 100');\nT.eq(withTax(10), 12, 'Calling it again changes nothing — pure functions always agree with themselves.');" },
        { text: "Write `addItemPure(list, item)` — returns a NEW array with the item appended; the original must be untouched.",
          test: "T.expect(typeof addItemPure === 'function', 'Define addItemPure(list, item).');\nvar cart = ['map', 'rope'];\nvar cart2 = addItemPure(cart, 'torch');\nT.eq(cart2, ['map', 'rope', 'torch'], 'The new array has the item appended');\nT.eq(cart, ['map', 'rope'], 'THE ORIGINAL MUST NOT CHANGE — no .push on the parameter! Copy with [...list, item].');\nT.expect(cart2 !== cart, 'Return a genuinely new array, not the same one.');" },
        { text: "Same discipline for objects: `renameUserPure(user, newName)` returns a new object, original untouched.",
          test: "T.expect(typeof renameUserPure === 'function', 'Define renameUserPure(user, newName).');\nvar u = { username: 'ada', level: 7 };\nvar u2 = renameUserPure(u, 'ada_prime');\nT.eq(u2, { username: 'ada_prime', level: 7 }, 'New object: renamed, level kept');\nT.eq(u.username, 'ada', 'The original object keeps its name — spread it: { ...user, username: newName }');" }
      ],
      files: [
        { name: "script.js", content: "// 1) withTax(price) → price * 1.2, rounded to 2 decimals (pure)\n\n// 2) addItemPure(list, item) → NEW array, original untouched\n//    hint: [...list, item]\n\n// 3) renameUserPure(user, newName) → NEW object, original untouched\n//    hint: { ...user, username: newName }\n\nconsole.log(withTax(9.99));\n" }
      ],
      hints: [
        "Two-decimal rounding without strings: `Math.round(price * 1.2 * 100) / 100`.",
        "Spread copies: `[...list, item]` for arrays, `{ ...user, username: newName }` for objects.",
        "If a test says \"the original changed\", hunt down a .push or a direct property assignment."
      ],
      solution: {
        "script.js": "function withTax(price) {\n  return Math.round(price * 1.2 * 100) / 100;\n}\n\nfunction addItemPure(list, item) {\n  return [...list, item];\n}\n\nfunction renameUserPure(user, newName) {\n  return { ...user, username: newName };\n}\n\nconsole.log(withTax(9.99));\n"
      }
    },

    {
      id: "js-quiz-4",
      title: "Unit 4 quiz: Functions Deep Dive",
      kind: "quiz", xp: 10,
      brief: "Defaults, guards, callbacks, closures and purity. 80% to pass.",
      questions: [
        { q: "What does `brew()` return?",
          code: "function brew(drink = \"coffee\", size = \"medium\") {\n  return `${size} ${drink}`;\n}",
          lang: "js",
          choices: ["\"medium coffee\"", "\"coffee medium\"", "\"undefined undefined\"", "\"medium undefined\""],
          answer: 0, explain: "Both arguments are missing, so both defaults kick in, left to right — and the template is `${size} ${drink}`, so size prints first: \"medium coffee\". Defaults only fire for `undefined`; hand in an explicit `null` and you get \"medium null\" instead." },
        { q: "Why do developers love guard clauses?",
          choices: ["Bad input exits early, so the main path stays flat", "They run measurably faster than nested ifs", "Strict mode requires an early validation", "They let you skip the function's return"],
          answer: 0, explain: "Validate-and-bail at the TOP beats wrapping the whole function body in nested ifs: the happy path stays flat, unindented and readable, and each rejection sits next to its reason. It is a readability win, not a speed one — and nothing in strict mode demands it." },
        { q: "A callback is…",
          choices: ["A function handed to another function to run later", "A function that calls itself until a base case hits", "A value a function returns when it finishes running", "A loop that repeats a function a fixed number of times"],
          answer: 0, explain: "Functions are values, so you can pass one INTO another function as an argument — `.map(n => n * 2)` hands that arrow to map, which calls it once per item. A function calling itself is recursion, and a value coming back out is just a return value; neither is a callback." },
        { q: "What prints?",
          code: "function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst a = makeCounter();\nconst b = makeCounter();\na(); a();\nconsole.log(a(), b());",
          lang: "js",
          choices: ["3 1", "3 3", "1 1", "2 2"],
          answer: 0, explain: "Every `makeCounter()` call creates a FRESH `count` that only its own returned arrow can see — each closure owns a private counter. `a` has now been called three times, so it prints 3; `b` is on its very first call, so it prints 1. a's history never leaks into b." },
        { q: "Which line is the PURE way to add to an array parameter?",
          code: "A) list.push(item); return list;\nB) return [...list, item];",
          lang: "js",
          choices: ["B — it copies rather than mutating the input", "A — push is the idiomatic way to append in JS", "A — returning the array afterwards makes it pure", "B — spread is faster, but both avoid side effects"],
          answer: 0, explain: "A calls `push` on an array the CALLER still holds, changing it under their feet — a classic source of spooky bugs at a distance. B spreads the items into a brand-new array and returns that, leaving the input exactly as it was. Purity is about side effects, not about speed or about having a return statement." },
        { q: "A pure function may…",
          choices: ["Read its parameters and return a new value", "Update a module-level counter as it goes", "Write to the page as long as it also returns", "Rewrite the object it was handed and return it"],
          answer: 0, explain: "Same input → same output, zero side effects — reading its parameters and computing a return value is the whole job, nothing else. It may NOT touch globals, mutate the arguments it was handed, or write to the outside world, however careful it is about it. (`console.log` is technically a side effect too — fine while you are learning, but know it.)" }
      ]
    },

    {
      id: "js-u4-p",
      title: "Project: Tip calculator engine",
      kind: "js", chip: "JS", xp: 40, project: true, mins: 35,
      brief: "Build the brains of a **tip calculator** — the app every phone ships with, minus the buttons (your DOM course wires those later). Pure functions, guard clauses, defaults, clean rounding: everything from this unit earning its keep.",
      steps: [
        { text: "`roundMoney(n)` — the shared helper: rounds to 2 decimals (`Math.round(n * 100) / 100`).",
          test: "T.expect(typeof roundMoney === 'function', 'Define roundMoney(n).');\nT.eq(roundMoney(10.005), 10.01, 'roundMoney(10.005)');\nT.eq(roundMoney(7.1), 7.1, 'roundMoney(7.1)');" },
        { text: "`tipAmount(bill, pct = 15)` — the tip in currency, rounded; guard: invalid or negative bill → `null`.",
          test: "T.expect(typeof tipAmount === 'function', 'Define tipAmount(bill, pct = 15).');\nT.eq(tipAmount(40), 6, 'tipAmount(40) uses the 15% default');\nT.eq(tipAmount(40, 20), 8, 'tipAmount(40, 20)');\nT.eq(tipAmount(33.33, 18), 6, 'tipAmount(33.33, 18) → 5.9994 rounds to 6');\nT.eq(tipAmount(-5), null, 'Negative bill → null');\nT.eq(tipAmount('forty'), null, 'Non-number bill → null');" },
        { text: "`totalWithTip(bill, pct = 15)` — bill + tip, rounded, with the same guards.",
          test: "T.expect(typeof totalWithTip === 'function', 'Define totalWithTip(bill, pct = 15).');\nT.eq(totalWithTip(40), 46, 'totalWithTip(40)');\nT.eq(totalWithTip(100, 20), 120, 'totalWithTip(100, 20)');\nT.eq(totalWithTip(0), 0, 'A zero bill is legal — 0 total');\nT.eq(totalWithTip(-1), null, 'Guards still apply');" },
        { text: "`splitBill(bill, people, pct = 15)` — each person's share of the tipped total, rounded; guard: people must be an integer ≥ 1.",
          test: "T.expect(typeof splitBill === 'function', 'Define splitBill(bill, people, pct = 15).');\nT.eq(splitBill(100, 4, 20), 30, '120 split 4 ways');\nT.eq(splitBill(80, 3), 30.67, '92 split 3 ways → 30.666… rounds to 30.67');\nT.eq(splitBill(100, 0), null, 'Zero people → null');\nT.eq(splitBill(100, 2.5), null, 'Fractional people → null (Number.isInteger!)');" },
        { text: "`receipt(bill, people, pct = 15)` — a summary string: `` `Total $X, each pays $Y` `` — reusing your functions, and log one.",
          test: "T.expect(typeof receipt === 'function', 'Define receipt(bill, people, pct = 15).');\nT.eq(receipt(100, 4, 20), 'Total $120, each pays $30', 'receipt(100, 4, 20)');\nT.eq(receipt(80, 3), 'Total $92, each pays $30.67', 'receipt(80, 3) with the default pct');\nT.expect(T.logged('each pays'), 'console.log a receipt so you can admire it.');" }
      ],
      files: [
        { name: "script.js", content: "// The tip calculator's engine. All money answers rounded to 2 decimals.\n\n// 1) roundMoney(n)\n\n// 2) tipAmount(bill, pct = 15) — guards: bill must be a number >= 0\n\n// 3) totalWithTip(bill, pct = 15)\n\n// 4) splitBill(bill, people, pct = 15) — people: integer >= 1\n\n// 5) receipt(bill, people, pct = 15) → `Total $X, each pays $Y`\n//    then log receipt(80, 3)\n" }
      ],
      hints: [
        "Write the guard once in tipAmount, then let the others call tipAmount/totalWithTip and pass nulls through: `const total = totalWithTip(bill, pct); if (total === null) return null;`",
        "People guard: `if (!Number.isInteger(people) || people < 1) return null;`",
        "receipt reuses everything: `` `Total $${totalWithTip(bill, pct)}, each pays $${splitBill(bill, people, pct)}` ``"
      ],
      solution: {
        "script.js": "// The tip calculator's engine. All money answers rounded to 2 decimals.\n\nfunction roundMoney(n) {\n  return Math.round(n * 100) / 100;\n}\n\nfunction tipAmount(bill, pct = 15) {\n  if (typeof bill !== \"number\" || bill < 0) return null;\n  return roundMoney(bill * (pct / 100));\n}\n\nfunction totalWithTip(bill, pct = 15) {\n  const tip = tipAmount(bill, pct);\n  if (tip === null) return null;\n  return roundMoney(bill + tip);\n}\n\nfunction splitBill(bill, people, pct = 15) {\n  const total = totalWithTip(bill, pct);\n  if (total === null) return null;\n  if (!Number.isInteger(people) || people < 1) return null;\n  return roundMoney(total / people);\n}\n\nfunction receipt(bill, people, pct = 15) {\n  return `Total $${totalWithTip(bill, pct)}, each pays $${splitBill(bill, people, pct)}`;\n}\n\nconsole.log(receipt(80, 3));\n"
      }
    }
  ]
});
