/* Learn JavaScript — Unit 3: Conditionals & Logic */
window.CODELAB.addUnit("js", {
  id: "js-u3",
  title: "Conditionals & Logic",
  icon: "🔀",
  blurb: "else-if chains, logical operators, switch, ternaries, and truthiness.",
  cheat: [
    { h: "else-if chains", lang: "js", code: "if (score >= 90) return \"A\";\nelse if (score >= 80) return \"B\";\nelse if (score >= 70) return \"C\";\nelse return \"F\";", note: "Checked top-down; the FIRST true branch runs, the rest are skipped." },
    { h: "Logical operators", lang: "js", code: "a && b   // AND — both must be true\na || b   // OR — at least one true\n!a       // NOT — flips it" },
    { h: "switch", lang: "js", code: "switch (animal) {\n  case \"dog\": return \"woof\";\n  case \"cat\": return \"meow\";\n  default:    return \"…?\";\n}", note: "Cleaner than a long else-if chain when you're matching one value against many options." },
    { h: "Ternary", lang: "js", code: "const label = price === 0 ? \"Free\" : \"$\" + price;", note: "condition ? valueIfTrue : valueIfFalse — an if/else that fits in an expression." },
    { h: "Truthy, falsy & defaults", lang: "js", code: "// falsy: false, 0, \"\", null, undefined, NaN\nconst who = input || \"Anonymous\";  // any falsy → default\nconst n   = value ?? 0;            // ONLY null/undefined → default" }
  ],
  lessons: [

    {
      id: "js-u3-1",
      title: "else-if chains",
      kind: "js", chip: "JS", xp: 15,
      brief: "One `if/else` picks between two paths. Real decisions often have more — that's the **else-if chain**:\n\nThe order matters! Checks run **top-down** and the first true branch wins — so start from the strictest condition (highest score) and work down.\n\nYou're writing the grading machine for CodeLab itself. No pressure.",
      example: { lang: "js", code: "if (score >= 90) {\n  return \"A\";\n} else if (score >= 80) {\n  return \"B\";\n}" },
      steps: [
        { text: "Write `gradeFor(score)`: 90+ → `\"A\"`, 80+ → `\"B\"`, 70+ → `\"C\"`, below → `\"F\"`.",
          test: "T.expect(typeof gradeFor === 'function', 'Define function gradeFor(score) { … }');\nT.eq(gradeFor(95), 'A', 'gradeFor(95)');\nT.eq(gradeFor(90), 'A', 'gradeFor(90) — 90 itself is an A (use >=)');\nT.eq(gradeFor(84), 'B', 'gradeFor(84)');\nT.eq(gradeFor(71), 'C', 'gradeFor(71)');\nT.eq(gradeFor(69), 'F', 'gradeFor(69)');" },
        { text: "The order is doing real work: a 95 must NOT fall through to \"C\".",
          test: "T.eq(gradeFor(100), 'A', 'gradeFor(100) — if this says C or F, your checks are in the wrong order.');\nT.eq(gradeFor(80), 'B', 'gradeFor(80) — boundaries belong to the higher grade.');" },
        { text: "Log the grade for a score of 87.",
          test: "T.expect(T.logged('b'), 'console.log(gradeFor(87));');" }
      ],
      files: [
        { name: "script.js", content: "// gradeFor(score) → \"A\" | \"B\" | \"C\" | \"F\"\n// 90+, 80+, 70+, otherwise F\n\nfunction gradeFor(score) {\n  // your chain here\n}\n\nconsole.log(gradeFor(87));\n" }
      ],
      hints: [
        "Strictest first: check >= 90, then >= 80, then >= 70, then the else.",
        "Each branch just returns: `if (score >= 90) return \"A\";` — returns make else optional, but the chain reads clearly either way."
      ],
      solution: {
        "script.js": "// gradeFor(score) → \"A\" | \"B\" | \"C\" | \"F\"\n// 90+, 80+, 70+, otherwise F\n\nfunction gradeFor(score) {\n  if (score >= 90) {\n    return \"A\";\n  } else if (score >= 80) {\n    return \"B\";\n  } else if (score >= 70) {\n    return \"C\";\n  } else {\n    return \"F\";\n  }\n}\n\nconsole.log(gradeFor(87));\n"
      }
    },

    {
      id: "js-u3-2",
      title: "AND, OR, NOT",
      kind: "js", chip: "JS", xp: 15,
      brief: "Combine conditions with the three logical operators:\n\n- `&&` (AND) — both sides must be true\n- `||` (OR) — at least one side true\n- `!` (NOT) — flips a boolean\n\nYou're coding the rules for a theme-park ride: ride alone at **140cm+**, or from **120cm with an adult**. Park logic is boolean logic.",
      steps: [
        { text: "Write `canRide(heightCm, hasAdult)` implementing the rule above (one return with `&&` and `||`).",
          test: "T.expect(typeof canRide === 'function', 'Define canRide(heightCm, hasAdult).');\nT.eq(canRide(150, false), true, 'canRide(150, false) — tall enough alone');\nT.eq(canRide(130, true), true, 'canRide(130, true) — 120+ WITH an adult');\nT.eq(canRide(130, false), false, 'canRide(130, false) — 130cm alone is not enough');\nT.eq(canRide(110, true), false, 'canRide(110, true) — under 120 rides with no one');\nT.eq(canRide(140, false), true, 'canRide(140, false) — 140 exactly counts (>=)');" },
        { text: "Write `isClosed(open)` using `!` — the sign flips whatever the gate says.",
          test: "T.expect(typeof isClosed === 'function', 'Define isClosed(open).');\nT.eq(isClosed(true), false, 'isClosed(true)');\nT.eq(isClosed(false), true, 'isClosed(false) — return !open, no if needed.');" },
        { text: "Log whether a 125cm kid with an adult can ride.",
          test: "T.expect(T.logged('true'), 'console.log(canRide(125, true));');" }
      ],
      files: [
        { name: "script.js", content: "// Ride rule: 140cm+ alone, OR 120cm+ with an adult.\n\n// 1) canRide(heightCm, hasAdult)\n\n// 2) isClosed(open) → the opposite of open\n\n// 3) log canRide(125, true)\n" }
      ],
      hints: [
        "Parentheses group the AND: `heightCm >= 140 || (heightCm >= 120 && hasAdult)`",
        "`isClosed` is one line: `return !open;`"
      ],
      solution: {
        "script.js": "// Ride rule: 140cm+ alone, OR 120cm+ with an adult.\n\nfunction canRide(heightCm, hasAdult) {\n  return heightCm >= 140 || (heightCm >= 120 && hasAdult);\n}\n\nfunction isClosed(open) {\n  return !open;\n}\n\nconsole.log(canRide(125, true));\n"
      }
    },

    {
      id: "js-u3-3",
      title: "switch: one value, many cases",
      kind: "js", chip: "JS", xp: 15,
      brief: "When you're matching **one value** against a menu of options, `switch` beats a pile of else-ifs:\n\n- each `case` compares with strict equality\n- `return` (or `break`) stops the fall-through\n- `default` catches everything else — your safety net\n\nBuild the barnyard translator.",
      example: { lang: "js", code: "switch (animal) {\n  case \"dog\": return \"woof\";\n  case \"cat\": return \"meow\";\n  default:    return \"…?\";\n}" },
      steps: [
        { text: "Write `soundFor(animal)` with a switch: dog→woof, cat→meow, cow→moo, duck→quack.",
          test: "T.expect(typeof soundFor === 'function', 'Define soundFor(animal).');\nT.eq(soundFor('dog'), 'woof', 'soundFor(\"dog\")');\nT.eq(soundFor('cat'), 'meow', 'soundFor(\"cat\")');\nT.eq(soundFor('cow'), 'moo', 'soundFor(\"cow\")');\nT.eq(soundFor('duck'), 'quack', 'soundFor(\"duck\")');" },
        { text: "Unknown animals hit the `default` and get `\"???\"`.",
          test: "T.eq(soundFor('axolotl'), '???', 'soundFor(\"axolotl\") should reach default and return \"???\".');\nT.eq(soundFor(''), '???', 'Even an empty string falls to default.');" },
        { text: "Log the cow's sound.",
          test: "T.expect(T.logged('moo'), 'console.log(soundFor(\"cow\"));');" }
      ],
      files: [
        { name: "script.js", content: "// soundFor(animal): dog/cat/cow/duck → their sounds, anything else → \"???\"\n\nfunction soundFor(animal) {\n  switch (animal) {\n    // cases here\n  }\n}\n\nconsole.log(soundFor(\"cow\"));\n" }
      ],
      hints: [
        "Each case can return directly: `case \"dog\": return \"woof\";` — no break needed after a return.",
        "`default: return \"???\";` goes last."
      ],
      solution: {
        "script.js": "// soundFor(animal): dog/cat/cow/duck → their sounds, anything else → \"???\"\n\nfunction soundFor(animal) {\n  switch (animal) {\n    case \"dog\": return \"woof\";\n    case \"cat\": return \"meow\";\n    case \"cow\": return \"moo\";\n    case \"duck\": return \"quack\";\n    default: return \"???\";\n  }\n}\n\nconsole.log(soundFor(\"cow\"));\n"
      }
    },

    {
      id: "js-u3-4",
      title: "The ternary operator",
      kind: "js", chip: "JS", xp: 15,
      brief: "An `if/else` that fits **inside an expression**:\n\n`condition ? valueIfTrue : valueIfFalse`\n\nPerfect for choosing between two values — labels, messages, prices. (And only for that: nested ternaries are a crime scene. Chains of decisions still belong in if/else.)",
      steps: [
        { text: "Write `priceLabel(price)` with a ternary: `0` → `\"Free\"`, otherwise `\"$\" + price`.",
          test: "T.expect(typeof priceLabel === 'function', 'Define priceLabel(price).');\nT.eq(priceLabel(0), 'Free', 'priceLabel(0)');\nT.eq(priceLabel(9), '$9', 'priceLabel(9)');\nT.eq(priceLabel(25), '$25', 'priceLabel(25)');" },
        { text: "Write `stockMsg(count)` in ONE return: `\"In stock\"` when count is above 0, else `\"Sold out\"`.",
          test: "T.expect(typeof stockMsg === 'function', 'Define stockMsg(count).');\nT.eq(stockMsg(5), 'In stock', 'stockMsg(5)');\nT.eq(stockMsg(0), 'Sold out', 'stockMsg(0)');\nT.expect(String(stockMsg).indexOf('?') !== -1, 'Use a ternary (the checker peeks: your function source should contain a ?).');" },
        { text: "Log both: the label for 0 and the message for 3.",
          test: "T.expect(T.logged('free'), 'console.log(priceLabel(0));');\nT.expect(T.logged('in stock'), 'console.log(stockMsg(3));');" }
      ],
      files: [
        { name: "script.js", content: "// 1) priceLabel(price): 0 → \"Free\", else \"$\" + price   (ternary!)\n\n// 2) stockMsg(count): > 0 → \"In stock\", else \"Sold out\" (one return)\n\n// 3) log priceLabel(0) and stockMsg(3)\n" }
      ],
      hints: [
        "`return price === 0 ? \"Free\" : \"$\" + price;`",
        "Same shape for stock: `return count > 0 ? \"In stock\" : \"Sold out\";`"
      ],
      solution: {
        "script.js": "// 1) priceLabel(price): 0 → \"Free\", else \"$\" + price   (ternary!)\nfunction priceLabel(price) {\n  return price === 0 ? \"Free\" : \"$\" + price;\n}\n\n// 2) stockMsg(count): > 0 → \"In stock\", else \"Sold out\" (one return)\nfunction stockMsg(count) {\n  return count > 0 ? \"In stock\" : \"Sold out\";\n}\n\nconsole.log(priceLabel(0));\nconsole.log(stockMsg(3));\n"
      }
    },

    {
      id: "js-u3-5",
      title: "Truthy, falsy & default values",
      kind: "js", chip: "JS", xp: 15,
      brief: "In a condition, every value acts true or false. The **falsy six**: `false, 0, \"\", null, undefined, NaN` — everything else is truthy.\n\nThat powers two default-value operators:\n\n- `input || fallback` — fallback on ANY falsy input\n- `input ?? fallback` — fallback ONLY on `null`/`undefined`\n\nThe difference bites when `0` or `\"\"` are *legitimate* values — that's exactly what you'll fix here.",
      steps: [
        { text: "Write `displayName(input)` — any falsy input (empty string, null…) becomes `\"Anonymous\"`. Use `||`.",
          test: "T.expect(typeof displayName === 'function', 'Define displayName(input).');\nT.eq(displayName('Ada'), 'Ada', 'displayName(\"Ada\")');\nT.eq(displayName(''), 'Anonymous', 'Empty string → Anonymous');\nT.eq(displayName(null), 'Anonymous', 'null → Anonymous');\nT.eq(displayName(undefined), 'Anonymous', 'undefined → Anonymous');" },
        { text: "Write `ticketsLeft(count)` — missing count (`null`/`undefined`) becomes `0`, but a **real 0 stays 0**… and so does 5. Use `??`.",
          test: "T.expect(typeof ticketsLeft === 'function', 'Define ticketsLeft(count).');\nT.eq(ticketsLeft(5), 5, 'ticketsLeft(5)');\nT.eq(ticketsLeft(0), 0, 'ticketsLeft(0) must STAY 0 — this is why || would be wrong here!');\nT.eq(ticketsLeft(null), 0, 'null → 0');\nT.eq(ticketsLeft(undefined), 0, 'undefined → 0');" },
        { text: "Prove you know the falsy six: make `falsyCount` equal how many of `[0, \"hi\", \"\", null, 42, NaN]` are falsy.",
          test: "T.eq(falsyCount, 4, 'Count the falsy values in [0, \"hi\", \"\", null, 42, NaN] — the falsy ones are 0, \"\", null and NaN.');" }
      ],
      files: [
        { name: "script.js", content: "// 1) displayName(input) → input, or \"Anonymous\" for ANY falsy input  (||)\n\n// 2) ticketsLeft(count) → count, or 0 ONLY when count is null/undefined  (??)\n\n// 3) const falsyCount = ?   // how many of [0, \"hi\", \"\", null, 42, NaN] are falsy\n" }
      ],
      hints: [
        "`return input || \"Anonymous\";` — || swaps out every falsy value.",
        "`return count ?? 0;` — ?? only swaps null/undefined, so a real 0 survives.",
        "falsy six: false, 0, \"\", null, undefined, NaN. Count which appear in that array."
      ],
      solution: {
        "script.js": "// 1) displayName(input) → input, or \"Anonymous\" for ANY falsy input  (||)\nfunction displayName(input) {\n  return input || \"Anonymous\";\n}\n\n// 2) ticketsLeft(count) → count, or 0 ONLY when count is null/undefined  (??)\nfunction ticketsLeft(count) {\n  return count ?? 0;\n}\n\n// 3) how many of [0, \"hi\", \"\", null, 42, NaN] are falsy\nconst falsyCount = 4;\n\nconsole.log(displayName(\"\"), ticketsLeft(0), falsyCount);\n"
      }
    },

    {
      id: "js-quiz-3",
      title: "Unit 3 quiz: Conditionals & Logic",
      kind: "quiz", xp: 10,
      brief: "Chains, operators, switches and the falsy six. 80% to pass.",
      questions: [
        { q: "In an else-if chain, which branch runs?",
          choices: ["The first one whose condition is true", "Every branch whose condition is true", "The last branch whose condition is true", "The branch with the strictest condition"],
          answer: 0, explain: "Top-down, first-match-wins: the moment a condition is true its block runs and the whole chain is abandoned — the remaining `else if`s are never even evaluated, no matter how many of them would also be true. That is exactly why you order your checks from strictest to loosest." },
        { q: "What does `gradeFor(95)` return here?",
          code: "function gradeFor(s) {\n  if (s >= 70) return \"C\";\n  else if (s >= 80) return \"B\";\n  else if (s >= 90) return \"A\";\n  return \"F\";\n}",
          lang: "js",
          choices: ["\"C\"", "\"A\"", "\"B\"", "\"F\""],
          answer: 0, explain: "The loosest check sits first, so it wins every time: 95 >= 70 is true, the function returns \"C\" immediately, and the 80 and 90 branches never get a look. Order an else-if chain STRICTEST first — 90, then 80, then 70 — and the grades come out right." },
        { q: "`a && b` is true when…",
          choices: ["Both a AND b are true", "Either one is true", "Neither is true", "a is truthy and b is falsy"],
          answer: 0, explain: "&& needs both. || needs at least one. ! flips one." },
        { q: "When is `switch` nicer than an else-if chain?",
          choices: ["Matching ONE value against many exact options", "Comparing numeric ranges like score >= 90", "Combining several different variables", "Checking whether a value is truthy"],
          answer: 0, explain: "`switch` does STRICT EQUALITY on a single value — menus, commands, animal sounds, HTTP status codes. Ranges like `score >= 90`, tests that combine several variables, and plain truthiness checks all still belong in an if/else chain." },
        { q: "What does this evaluate to?",
          code: "const label = 0 ? \"yes\" : \"no\";",
          lang: "js",
          choices: ["\"no\"", "\"yes\"", "0", "undefined"],
          answer: 0, explain: "A ternary reads `condition ? ifTrue : ifFalse`. The condition here is `0`, and 0 is one of the falsy six — so the false branch wins and label becomes \"no\". Note the ternary hands back one of the two branches, never the condition itself." },
        { q: "Which are ALL of the falsy values?",
          choices: ["false, 0, \"\", null, undefined, NaN", "false, 0, \"\", [], {}, null, undefined", "false, 0, -1, \"\", null, undefined", "false, null, undefined, and empty arrays"],
          answer: 0, explain: "The falsy six, memorise them: `false`, `0`, `\"\"`, `null`, `undefined`, `NaN`. Everything else is TRUTHY — including `[]`, `{}`, `-1` and even the string `\"0\"`. Empty arrays and objects tricking people into thinking they are falsy is the classic gotcha." },
        { q: "A user legitimately has 0 items in their cart. Which default is safe?",
          code: "const items = cart.count ?? 0;   // A\nconst items = cart.count || 0;   // B",
          lang: "js",
          choices: ["`??` — only null or undefined trigger the default", "`||` — it also passes a genuine 0 straight through", "`??` — it swaps in the default for any falsy value", "`||` — `??` cannot be used with number values"],
          answer: 0, explain: "`??` treats ONLY null and undefined as missing, so a legitimate `0` sails straight through untouched. `||` treats every falsy value as missing — 0, `\"\"`, false — which is how an empty cart silently turns into a default. Both lines print 0 for this exact snippet; only `??` keeps behaving when the count really is 0." }
      ]
    },

    {
      id: "js-u3-p",
      title: "Project: Rock, Paper, Scissors",
      kind: "js", chip: "JS", xp: 40, project: true, mins: 35,
      brief: "Build the referee for **rock-paper-scissors** — a pure logic machine: who beats whom, judging a round, and scoring a whole match. This shape (rules table → judge → tally) is the skeleton of every turn-based game.",
      steps: [
        { text: "A `BEATS` object encodes the rules: rock→scissors, scissors→paper, paper→rock.",
          test: "T.expect(BEATS && typeof BEATS === 'object', 'Create const BEATS = { … }.');\nT.eq(BEATS.rock, 'scissors', 'BEATS.rock');\nT.eq(BEATS.scissors, 'paper', 'BEATS.scissors');\nT.eq(BEATS.paper, 'rock', 'BEATS.paper');" },
        { text: "`judge(a, b)` returns `\"draw\"`, `\"a\"` or `\"b\"` — using the BEATS table, not nine ifs.",
          test: "T.expect(typeof judge === 'function', 'Define judge(a, b).');\nT.eq(judge('rock', 'rock'), 'draw', 'Same throw → draw');\nT.eq(judge('rock', 'scissors'), 'a', 'rock beats scissors');\nT.eq(judge('paper', 'rock'), 'a', 'paper beats rock');\nT.eq(judge('rock', 'paper'), 'b', 'paper beats rock (from the other side)');\nT.eq(judge('scissors', 'rock'), 'b', 'rock beats scissors (other side)');" },
        { text: "`scoreMatch(rounds)` takes an array of `[a, b]` throws and returns `{ a, b, draws }` totals.",
          test: "T.expect(typeof scoreMatch === 'function', 'Define scoreMatch(rounds).');\nT.eq(scoreMatch([['rock','scissors'],['paper','paper'],['rock','paper']]), { a: 1, b: 1, draws: 1 }, 'scoreMatch on 3 mixed rounds');\nT.eq(scoreMatch([]), { a: 0, b: 0, draws: 0 }, 'An empty match is all zeros');\nT.eq(scoreMatch([['scissors','paper'],['scissors','paper']]), { a: 2, b: 0, draws: 0 }, 'A clean sweep for player a');" },
        { text: "`winnerOf(rounds)` uses the totals: `\"a\"`, `\"b\"` or `\"tie\"`.",
          test: "T.expect(typeof winnerOf === 'function', 'Define winnerOf(rounds).');\nT.eq(winnerOf([['rock','scissors'],['rock','paper'],['paper','rock']]), 'a', 'a wins 2-1');\nT.eq(winnerOf([['rock','paper']]), 'b', 'b wins 1-0');\nT.eq(winnerOf([['rock','rock']]), 'tie', 'All draws → tie');" },
        { text: "Play the sample match and log each round plus the final winner.",
          test: "T.expect(T.logged('winner'), 'After the loop, log something like `Winner: ${winnerOf(MATCH)}`.');\nT.expect(T.logs().length >= 4, 'Log each round of MATCH as you loop (3 rounds + the winner line).');" }
      ],
      files: [
        { name: "script.js", content: "// The referee. Rules: rock > scissors > paper > rock.\n\n// 1) const BEATS = { rock: ?, scissors: ?, paper: ? }\n\n// 2) judge(a, b) → \"draw\" | \"a\" | \"b\"\n//    hint: if BEATS[a] === b, a wins.\n\n// 3) scoreMatch(rounds) → { a, b, draws }   rounds = [[a, b], …]\n\n// 4) winnerOf(rounds) → \"a\" | \"b\" | \"tie\"\n\nconst MATCH = [\n  [\"rock\", \"scissors\"],\n  [\"paper\", \"rock\"],\n  [\"scissors\", \"rock\"]\n];\n\n// 5) loop over MATCH logging each round's result, then log the winner\n" }
      ],
      hints: [
        "judge in three lines: draw check first, then `if (BEATS[a] === b) return \"a\";`, else return \"b\".",
        "scoreMatch: start `{ a: 0, b: 0, draws: 0 }`, loop the rounds, judge each, and bump the right counter (result === 'draw' ? draws : result).",
        "winnerOf: get the totals object, then an if/else-if/else on totals.a vs totals.b.",
        "The round loop: `for (const [a, b] of MATCH) { console.log(a, 'vs', b, '→', judge(a, b)); }`"
      ],
      solution: {
        "script.js": "// The referee. Rules: rock > scissors > paper > rock.\n\nconst BEATS = { rock: \"scissors\", scissors: \"paper\", paper: \"rock\" };\n\nfunction judge(a, b) {\n  if (a === b) return \"draw\";\n  if (BEATS[a] === b) return \"a\";\n  return \"b\";\n}\n\nfunction scoreMatch(rounds) {\n  const totals = { a: 0, b: 0, draws: 0 };\n  for (const [a, b] of rounds) {\n    const result = judge(a, b);\n    if (result === \"draw\") totals.draws++;\n    else totals[result]++;\n  }\n  return totals;\n}\n\nfunction winnerOf(rounds) {\n  const totals = scoreMatch(rounds);\n  if (totals.a > totals.b) return \"a\";\n  if (totals.b > totals.a) return \"b\";\n  return \"tie\";\n}\n\nconst MATCH = [\n  [\"rock\", \"scissors\"],\n  [\"paper\", \"rock\"],\n  [\"scissors\", \"rock\"]\n];\n\nfor (const [a, b] of MATCH) {\n  console.log(a, \"vs\", b, \"→\", judge(a, b));\n}\nconsole.log(\"Winner:\", winnerOf(MATCH));\n"
      }
    }
  ]
});
