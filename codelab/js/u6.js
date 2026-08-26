/* Learn JavaScript — Unit 6: Strings & Numbers Toolbox */
window.CODELAB.addUnit("js", {
  id: "js-u6",
  title: "Strings & Numbers Toolbox",
  icon: "🧰",
  blurb: "The methods you'll reach for daily — slicing, cleaning, rounding, converting.",
  cheat: [
    { h: "Finding & slicing", lang: "js", code: "s.indexOf(\"@\")      // position (or -1)\ns.includes(\"error\") // true/false\ns.slice(3)          // from index 3 to the end\ns.slice(0, 3)       // first three characters" },
    { h: "Cleaning & shaping", lang: "js", code: "s.trim()                 // strip outer whitespace\ns.toLowerCase()\ns.replaceAll(\" \", \"_\")   // swap every occurrence\ns.padStart(5, \"0\")       // \"42\" → \"00042\"\ns.split(\" \")  /  arr.join(\"-\")" },
    { h: "Math toolkit", lang: "js", code: "Math.round(2.5)   // 3\nMath.floor(2.9)   // 2\nMath.ceil(2.1)    // 3\nMath.max(3, 9, 4) // 9\nMath.abs(-7)      // 7" },
    { h: "Converting types", lang: "js", code: "Number(\"3.14\")    // 3.14\nparseInt(\"42px\")  // 42 — reads leading digits\nString(99)        // \"99\"\nNumber.isNaN(Number(\"nope\")) // true", note: "\"5\" + 1 is \"51\" (string glue!) but \"5\" * 1 is 5. Convert deliberately." },
    { h: "Money formatting", lang: "js", code: "(2.5).toFixed(2)  // \"2.50\" — a STRING with 2 decimals" }
  ],
  lessons: [

    {
      id: "js-u6-1",
      title: "Find & slice",
      kind: "js", chip: "JS", xp: 15,
      brief: "Strings carry a toolbox of methods. Today's four:\n\n- `indexOf(x)` — where `x` starts (or `-1`)\n- `includes(x)` — is it in there at all?\n- `slice(start, end?)` — cut out a piece (end not included)\n- `split(sep)` — chop into an array\n\nYou're building the profile parser every signup form needs.",
      steps: [
        { text: "Write `initials(fullName)` — `\"Ada Lovelace\"` → `\"AL\"` (split on the space, first letter of each part, uppercased).",
          test: "T.expect(typeof initials === 'function', 'Define initials(fullName).');\nT.eq(initials('Ada Lovelace'), 'AL', 'initials(\"Ada Lovelace\")');\nT.eq(initials('grace brewster hopper'), 'GBH', 'Works for any number of names, and uppercases');" },
        { text: "Write `domainOf(email)` — everything after the `@` (use `indexOf` + `slice`).",
          test: "T.expect(typeof domainOf === 'function', 'Define domainOf(email).');\nT.eq(domainOf('ada@lovelace.dev'), 'lovelace.dev', 'domainOf(\"ada@lovelace.dev\")');\nT.eq(domainOf('bob@mail.example.com'), 'mail.example.com', 'Everything after the FIRST @');" },
        { text: "Write `mentionsBug(message)` — `true` if the text contains `\"bug\"` in **any** casing.",
          test: "T.expect(typeof mentionsBug === 'function', 'Define mentionsBug(message).');\nT.eq(mentionsBug('Found a BUG in checkout'), true, 'Catches BUG uppercase — lowercase the text before checking');\nT.eq(mentionsBug('all good here'), false, 'No bug, no true');\nT.eq(mentionsBug('debugging session'), true, 'Substring match is fine (de-bug-ging)');" }
      ],
      files: [
        { name: "script.js", content: "// 1) initials(fullName) → \"AL\"  (split, first letters, join, uppercase)\n\n// 2) domainOf(email) → text after the @  (indexOf + slice)\n\n// 3) mentionsBug(message) → case-insensitive includes(\"bug\")\n\nconsole.log(initials(\"Ada Lovelace\"), domainOf(\"ada@lovelace.dev\"));\n" }
      ],
      hints: [
        "initials: `fullName.split(\" \").map(part => part[0]).join(\"\").toUpperCase()`",
        "domainOf: `email.slice(email.indexOf(\"@\") + 1)` — the +1 skips the @ itself.",
        "mentionsBug: `message.toLowerCase().includes(\"bug\")`"
      ],
      solution: {
        "script.js": "function initials(fullName) {\n  return fullName.split(\" \").map(part => part[0]).join(\"\").toUpperCase();\n}\n\nfunction domainOf(email) {\n  return email.slice(email.indexOf(\"@\") + 1);\n}\n\nfunction mentionsBug(message) {\n  return message.toLowerCase().includes(\"bug\");\n}\n\nconsole.log(initials(\"Ada Lovelace\"), domainOf(\"ada@lovelace.dev\"));\n"
      }
    },

    {
      id: "js-u6-2",
      title: "Clean & shape",
      kind: "js", chip: "JS", xp: 15,
      brief: "Real user input arrives messy — `\"  Ada Lovelace \"` with stray spaces and wild capitalization. The cleanup crew:\n\n- `trim()` — strip outer whitespace\n- `toLowerCase()` / `toUpperCase()`\n- `replaceAll(a, b)` — swap every occurrence\n- `padStart(len, ch)` — left-pad to a fixed width (order numbers, timestamps)",
      steps: [
        { text: "Write `cleanUsername(raw)` — trim it, lowercase it, and turn inner spaces into underscores: `\"  Ada Lovelace \"` → `\"ada_lovelace\"`.",
          test: "T.expect(typeof cleanUsername === 'function', 'Define cleanUsername(raw).');\nT.eq(cleanUsername('  Ada Lovelace '), 'ada_lovelace', 'Trim → lowercase → spaces to underscores (in that order!)');\nT.eq(cleanUsername('BOB'), 'bob', 'Simple names just lowercase');\nT.eq(cleanUsername(' Mary Jane Watson  '), 'mary_jane_watson', 'Every inner space becomes _');" },
        { text: "Write `orderCode(n)` — pad the number to 5 digits with zeros and prefix `#`: `42` → `\"#00042\"`.",
          test: "T.expect(typeof orderCode === 'function', 'Define orderCode(n).');\nT.eq(orderCode(42), '#00042', 'orderCode(42)');\nT.eq(orderCode(12345), '#12345', 'Already 5 digits — unchanged');\nT.eq(orderCode(7), '#00007', 'orderCode(7)');" },
        { text: "Write `censor(text, word)` — replace **every** occurrence of the word with `\"****\"`.",
          test: "T.expect(typeof censor === 'function', 'Define censor(text, word).');\nT.eq(censor('the code word is code', 'code'), 'the **** word is ****', 'Both occurrences replaced — replaceAll, not replace');\nT.eq(censor('clean text', 'zap'), 'clean text', 'Nothing to censor → unchanged');" }
      ],
      files: [
        { name: "script.js", content: "// 1) cleanUsername(raw): trim → toLowerCase → replaceAll(\" \", \"_\")\n\n// 2) orderCode(n): String(n).padStart(5, \"0\"), prefixed with \"#\"\n\n// 3) censor(text, word): replaceAll(word, \"****\")\n\nconsole.log(cleanUsername(\"  Ada Lovelace \"), orderCode(42));\n" }
      ],
      hints: [
        "Chain the cleanup: `raw.trim().toLowerCase().replaceAll(\" \", \"_\")` — trim FIRST or the outer spaces become underscores.",
        "padStart works on strings: convert first with `String(n)`."
      ],
      solution: {
        "script.js": "function cleanUsername(raw) {\n  return raw.trim().toLowerCase().replaceAll(\" \", \"_\");\n}\n\nfunction orderCode(n) {\n  return \"#\" + String(n).padStart(5, \"0\");\n}\n\nfunction censor(text, word) {\n  return text.replaceAll(word, \"****\");\n}\n\nconsole.log(cleanUsername(\"  Ada Lovelace \"), orderCode(42));\n"
      }
    },

    {
      id: "js-u6-3",
      title: "The Math toolkit",
      kind: "js", chip: "JS", xp: 15,
      brief: "The `Math` object is your built-in calculator:\n\n- `Math.round / floor / ceil` — nearest / down / up\n- `Math.max / min` — extremes (of any count of arguments)\n- `Math.abs` — distance from zero\n\nPlus the money move: `n.toFixed(2)` formats to exactly 2 decimals (careful — it returns a **string**).",
      steps: [
        { text: "Write `clampVal(n, lo, hi)` — n, but never below lo nor above hi (pure Math.min/max, no ifs!).",
          test: "T.expect(typeof clampVal === 'function', 'Define clampVal(n, lo, hi).');\nT.eq(clampVal(15, 0, 10), 10, 'Too big → hi');\nT.eq(clampVal(-3, 0, 10), 0, 'Too small → lo');\nT.eq(clampVal(7, 0, 10), 7, 'In range → unchanged');\nT.expect(String(clampVal).indexOf('if') === -1, 'No if statements — compose Math.min and Math.max.');" },
        { text: "Write `priceTag(n)` — `\"$\"` plus the number with exactly 2 decimals: `2.5` → `\"$2.50\"`.",
          test: "T.expect(typeof priceTag === 'function', 'Define priceTag(n).');\nT.eq(priceTag(2.5), '$2.50', 'priceTag(2.5)');\nT.eq(priceTag(10), '$10.00', 'Whole numbers still get .00');\nT.eq(priceTag(3.999), '$4.00', 'toFixed rounds');" },
        { text: "Write `distance(a, b)` — how far apart two numbers are, always positive.",
          test: "T.expect(typeof distance === 'function', 'Define distance(a, b).');\nT.eq(distance(3, 10), 7, 'distance(3, 10)');\nT.eq(distance(10, 3), 7, 'Order must not matter — Math.abs!');\nT.eq(distance(-5, 5), 10, 'Across zero');" }
      ],
      files: [
        { name: "script.js", content: "// 1) clampVal(n, lo, hi) — Math.min(hi, Math.max(lo, n))\n\n// 2) priceTag(n) — \"$\" + n.toFixed(2)\n\n// 3) distance(a, b) — Math.abs(a - b)\n\nconsole.log(clampVal(15, 0, 10), priceTag(2.5), distance(3, 10));\n" }
      ],
      hints: [
        "The clamp sandwich: raise the floor with Math.max(lo, n), then cap it with Math.min(hi, …).",
        "toFixed lives on numbers: `n.toFixed(2)` — already a string, just prefix the $."
      ],
      solution: {
        "script.js": "function clampVal(n, lo, hi) {\n  return Math.min(hi, Math.max(lo, n));\n}\n\nfunction priceTag(n) {\n  return \"$\" + n.toFixed(2);\n}\n\nfunction distance(a, b) {\n  return Math.abs(a - b);\n}\n\nconsole.log(clampVal(15, 0, 10), priceTag(2.5), distance(3, 10));\n"
      }
    },

    {
      id: "js-u6-4",
      title: "Type conversion",
      kind: "js", chip: "JS", xp: 15,
      brief: "Form fields and URLs hand you **strings**, even when they look like numbers — and `\"5\" + 1` is `\"51\"` (string glue!). Convert deliberately:\n\n- `Number(\"3.14\")` → the number (or `NaN` if hopeless)\n- `parseInt(\"42px\")` → `42` — reads leading digits, ignores the rest\n- `String(99)` → `\"99\"`\n- `Number.isNaN(x)` — the safe NaN check",
      steps: [
        { text: "Write `pixelsOf(cssValue)` — `\"42px\"` → the number `42` (parseInt).",
          test: "T.expect(typeof pixelsOf === 'function', 'Define pixelsOf(cssValue).');\nT.eq(pixelsOf('42px'), 42, 'pixelsOf(\"42px\")');\nT.eq(pixelsOf('7.9px'), 7, 'parseInt keeps only the integer part');\nT.eq(pixelsOf('100%'), 100, 'Works on any digits-then-junk string');" },
        { text: "Write `addInputs(a, b)` — the form gave you two strings; return their numeric **sum** (not `\"51\"`!).",
          test: "T.expect(typeof addInputs === 'function', 'Define addInputs(a, b).');\nT.eq(addInputs('5', '1'), 6, 'addInputs(\"5\", \"1\") must be 6, not \"51\"');\nT.eq(addInputs('2.5', '2.5'), 5, 'Decimals convert too — Number, not parseInt');" },
        { text: "Write `isNumeric(text)` — `true` when the whole string converts to a real number.",
          test: "T.expect(typeof isNumeric === 'function', 'Define isNumeric(text).');\nT.eq(isNumeric('3.14'), true, 'isNumeric(\"3.14\")');\nT.eq(isNumeric('abc'), false, 'Letters are not numeric');\nT.eq(isNumeric('12'), true, 'isNumeric(\"12\")');" }
      ],
      files: [
        { name: "script.js", content: "// 1) pixelsOf(cssValue) — parseInt reads the leading digits\n\n// 2) addInputs(a, b) — Number() both, then add\n\n// 3) isNumeric(text) — !Number.isNaN(Number(text))\n\nconsole.log(addInputs(\"5\", \"1\"), pixelsOf(\"42px\"), isNumeric(\"3.14\"));\n" }
      ],
      hints: [
        "`parseInt(\"42px\")` stops at the first non-digit — exactly what CSS values need.",
        "The classic bug is in addInputs: `a + b` on strings CONCATENATES. Convert first: `Number(a) + Number(b)`.",
        "isNumeric: convert then check: `return !Number.isNaN(Number(text));`"
      ],
      solution: {
        "script.js": "function pixelsOf(cssValue) {\n  return parseInt(cssValue);\n}\n\nfunction addInputs(a, b) {\n  return Number(a) + Number(b);\n}\n\nfunction isNumeric(text) {\n  return !Number.isNaN(Number(text));\n}\n\nconsole.log(addInputs(\"5\", \"1\"), pixelsOf(\"42px\"), isNumeric(\"3.14\"));\n"
      }
    },

    {
      id: "js-quiz-6",
      title: "Unit 6 quiz: Strings & Numbers",
      kind: "quiz", xp: 10,
      brief: "Methods, Math and conversions. 80% to pass.",
      questions: [
        { q: "What is `\"5\" + 1`?",
          choices: ["\"51\" — + glues strings before it adds numbers", "6", "NaN", "An error"],
          answer: 0, explain: "The #1 form-input bug in existence. Convert with Number() before doing math." },
        { q: "`\"hello world\".slice(0, 5)` returns…",
          choices: ["\"hello\" — the end index is NOT included", "\"hello \"", "\"world\"", "\"h\""],
          answer: 0, explain: "slice(start, end) cuts up to but excluding end." },
        { q: "Which cleans `\"  Ada Lovelace \"` into `\"ada_lovelace\"`?",
          code: "A) raw.trim().toLowerCase().replaceAll(\" \", \"_\")\nB) raw.toLowerCase().replaceAll(\" \", \"_\").trim()",
          lang: "js",
          choices: ["A — trim FIRST, or the outer spaces become underscores", "B", "Both", "Neither"],
          answer: 0, explain: "Chain order matters: B turns the leading/trailing spaces into stray underscores that trim can no longer remove." },
        { q: "`Math.floor(7.9)` vs `Math.round(7.9)`?",
          choices: ["7 and 8 — floor always drops down, round goes to nearest", "Both 8", "Both 7", "8 and 7"],
          answer: 0, explain: "floor ⬇ always, ceil ⬆ always, round to the closest." },
        { q: "What does `(2.5).toFixed(2)` give you?",
          choices: ["The STRING \"2.50\"", "The number 2.5", "The number 2.50", "An error"],
          answer: 0, explain: "toFixed formats for display and returns a string — don't do further math on it." },
        { q: "`parseInt(\"42px\")` returns…",
          choices: ["42 — it reads leading digits and ignores the rest", "NaN", "\"42\"", "42.0 as a string"],
          answer: 0, explain: "Perfect for CSS values. Number(\"42px\") would give NaN — the whole string must convert." },
        { q: "The reliable way to check \"did my conversion fail\"?",
          choices: ["Number.isNaN(Number(text))", "text === NaN", "typeof text === \"NaN\"", "text.isNaN()"],
          answer: 0, explain: "NaN never equals anything, even itself — so === NaN is always false. Use Number.isNaN." }
      ]
    },

    {
      id: "js-u6-p",
      title: "Project: Formatter kit",
      kind: "js", chip: "JS", xp: 40, project: true, mins: 35,
      brief: "Ship a tiny **formatting library** — the utilities every real codebase keeps in a `utils.js`: URL slugs, tidy truncation, and comma-grouped money. You will genuinely reuse these in your capstone.",
      steps: [
        { text: "`slugify(title)` — lowercase, trimmed, spaces→dashes: `\" Learn JavaScript Fast \"` → `\"learn-javascript-fast\"`.",
          test: "T.expect(typeof slugify === 'function', 'Define slugify(title).');\nT.eq(slugify(' Learn JavaScript Fast '), 'learn-javascript-fast', 'slugify a padded title');\nT.eq(slugify('Hello World'), 'hello-world', 'slugify(\"Hello World\")');" },
        { text: "`truncate(text, max)` — unchanged if it fits; otherwise cut to `max` characters **including** a trailing `…` (one character).",
          test: "T.expect(typeof truncate === 'function', 'Define truncate(text, max).');\nT.eq(truncate('short', 10), 'short', 'Fits → untouched');\nT.eq(truncate('abcdefghij', 5), 'abcd…', '5 chars total: 4 kept + the ellipsis');\nT.eq(truncate('exactly10!', 10), 'exactly10!', 'Exactly max → untouched');" },
        { text: "`groupThousands(n)` — `1234567` → `\"1,234,567\"` (build it yourself — no locale functions).",
          test: "T.expect(typeof groupThousands === 'function', 'Define groupThousands(n).');\nT.eq(groupThousands(1234567), '1,234,567', 'groupThousands(1234567)');\nT.eq(groupThousands(999), '999', 'Under a thousand → no comma');\nT.eq(groupThousands(1000), '1,000', 'groupThousands(1000)');\nT.eq(groupThousands(42), '42', 'groupThousands(42)');" },
        { text: "`formatMoney(n)` — combine: `1234.5` → `\"$1,234.50\"` (group the whole part, toFixed the cents).",
          test: "T.expect(typeof formatMoney === 'function', 'Define formatMoney(n).');\nT.eq(formatMoney(1234.5), '$1,234.50', 'formatMoney(1234.5)');\nT.eq(formatMoney(99), '$99.00', 'formatMoney(99)');\nT.eq(formatMoney(1000000), '$1,000,000.00', 'A cool million');" },
        { text: "Demo the kit: log a slug, a truncation and a money string.",
          test: "T.expect(T.logged('learn-javascript-fast'), 'Log slugify(\" Learn JavaScript Fast \").');\nT.expect(T.logged('$1,234.50'), 'Log formatMoney(1234.5).');\nT.expect(T.logs().length >= 3, 'Log all three demos.');" }
      ],
      files: [
        { name: "script.js", content: "// utils.js, basically.\n\n// 1) slugify(title): trim → lowercase → replaceAll(\" \", \"-\")\n\n// 2) truncate(text, max): if too long, slice(0, max - 1) + \"…\"\n\n// 3) groupThousands(n): walk the digits from the RIGHT, comma every 3\n//    hint: const s = String(n); loop i from the end, prepend chars,\n//    insert a comma every third digit (except at the very front)\n\n// 4) formatMoney(n): \"$\" + groupThousands(whole part) + \".\" + cents\n//    hint: const fixed = n.toFixed(2); const [whole, cents] = fixed.split(\".\");\n\n// 5) log slugify(\" Learn JavaScript Fast \"), truncate(\"abcdefghij\", 5), formatMoney(1234.5)\n" }
      ],
      hints: [
        "truncate: `if (text.length <= max) return text; return text.slice(0, max - 1) + \"…\";`",
        "groupThousands one way: `let out = \"\", count = 0;` loop `i` from `s.length - 1` down to 0: `out = s[i] + out; count++; if (count % 3 === 0 && i > 0) out = \",\" + out;`",
        "formatMoney: `const [whole, cents] = n.toFixed(2).split(\".\"); return \"$\" + groupThousands(Number(whole)) + \".\" + cents;`"
      ],
      solution: {
        "script.js": "// utils.js, basically.\n\nfunction slugify(title) {\n  return title.trim().toLowerCase().replaceAll(\" \", \"-\");\n}\n\nfunction truncate(text, max) {\n  if (text.length <= max) return text;\n  return text.slice(0, max - 1) + \"…\";\n}\n\nfunction groupThousands(n) {\n  const s = String(n);\n  let out = \"\";\n  let count = 0;\n  for (let i = s.length - 1; i >= 0; i--) {\n    out = s[i] + out;\n    count++;\n    if (count % 3 === 0 && i > 0) {\n      out = \",\" + out;\n    }\n  }\n  return out;\n}\n\nfunction formatMoney(n) {\n  const fixed = n.toFixed(2);\n  const parts = fixed.split(\".\");\n  return \"$\" + groupThousands(Number(parts[0])) + \".\" + parts[1];\n}\n\nconsole.log(slugify(\" Learn JavaScript Fast \"));\nconsole.log(truncate(\"abcdefghij\", 5));\nconsole.log(formatMoney(1234.5));\n"
      }
    }
  ]
});
