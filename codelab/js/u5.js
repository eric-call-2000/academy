/* Learn JavaScript — Unit 5: Loops & Iteration Patterns */
window.CODELAB.addUnit("js", {
  id: "js-u5",
  title: "Loops & Iteration Patterns",
  icon: "🔁",
  blurb: "while, for…of, break/continue, nested loops and the accumulator pattern.",
  cheat: [
    { h: "while: loop until a condition changes", lang: "js", code: "let fuel = 100;\nwhile (fuel > 0) {\n  fuel -= 30;\n}", note: "Use while when you don't know the iteration count in advance. ALWAYS change something the condition reads, or it loops forever." },
    { h: "for…of (items) & for…in (keys)", lang: "js", code: "for (const word of words) { }   // values of an array\nfor (const key in player)  { }  // keys of an object" },
    { h: "break & continue", lang: "js", code: "for (const n of nums) {\n  if (n === 0) break;      // leave the loop entirely\n  if (n < 0) continue;     // skip to the next item\n  total += n;\n}" },
    { h: "The accumulator pattern", lang: "js", code: "let total = 0;             // start empty\nfor (const n of nums) {\n  total += n;              // fold each item in\n}\n// total is the answer", note: "Sum, longest, count, joined string — 80% of loops are this shape." },
    { h: "Nested loops = grids", lang: "js", code: "for (let row = 0; row < 3; row++) {\n  for (let col = 0; col < 3; col++) {\n    // visits all 9 cells, row by row\n  }\n}" }
  ],
  lessons: [

    {
      id: "js-u5-1",
      title: "while: loop until",
      kind: "js", chip: "JS", xp: 15,
      brief: "`for` shines when you know how many laps to run. **`while`** shines when you only know the *stopping condition*:\n\n`while (fuel > 0) { … }`\n\nGolden rule: the body must change something the condition reads — otherwise you've built an infinite loop (this sandbox will catch you, but production won't be so kind).",
      steps: [
        { text: "Write `halvings(n)` — how many times you can halve `n` before it drops below 1. Use `while`.",
          test: "T.expect(typeof halvings === 'function', 'Define halvings(n).');\nT.eq(halvings(8), 4, 'halvings(8): 8→4→2→1→0.5 = 4 halvings to get below 1');\nT.eq(halvings(1), 1, 'halvings(1): 1→0.5 = one halving');\nT.eq(halvings(0.5), 0, 'Already below 1 → zero halvings (the loop never runs)');\nT.eq(halvings(100), 7, 'halvings(100)');" },
        { text: "Write `drainBattery(charge, drain)` — returns how many uses until charge would go below `drain`; e.g. 100 with drain 30 → 3 uses.",
          test: "T.expect(typeof drainBattery === 'function', 'Define drainBattery(charge, drain).');\nT.eq(drainBattery(100, 30), 3, '100 → 70 → 40 → 10: three full uses fit');\nT.eq(drainBattery(90, 30), 3, '90 → 60 → 30 → 0: exactly-zero still counts as a use');\nT.eq(drainBattery(10, 30), 0, 'Not enough for a single use');" },
        { text: "Log the halvings of 64.",
          test: "T.expect(T.logged('7'), 'console.log(halvings(64));');" }
      ],
      files: [
        { name: "script.js", content: "// 1) halvings(n): while n >= 1, halve it and count\n\n// 2) drainBattery(charge, drain): while charge >= drain, subtract and count\n\n// 3) log halvings(64)\n" }
      ],
      hints: [
        "The accumulator + while combo: `let laps = 0; while (n >= 1) { n = n / 2; laps++; } return laps;`",
        "drainBattery is the same skeleton with `charge >= drain` and `charge -= drain`."
      ],
      solution: {
        "script.js": "function halvings(n) {\n  let laps = 0;\n  while (n >= 1) {\n    n = n / 2;\n    laps++;\n  }\n  return laps;\n}\n\nfunction drainBattery(charge, drain) {\n  let uses = 0;\n  while (charge >= drain) {\n    charge -= drain;\n    uses++;\n  }\n  return uses;\n}\n\nconsole.log(halvings(64));\n"
      }
    },

    {
      id: "js-u5-2",
      title: "for…of and for…in",
      kind: "js", chip: "JS", xp: 15,
      brief: "Two loops built for collections:\n\n- `for (const item of array)` — walks the **values** of an array. Your default.\n- `for (const key in object)` — walks the **keys** of an object.\n\nMnemonic: **of** = values **of** a list; **in** = keys **in** an object.",
      steps: [
        { text: "Write `longestWord(words)` with `for…of` — returns the longest string (first wins ties); empty list → `\"\"`.",
          test: "T.expect(typeof longestWord === 'function', 'Define longestWord(words).');\nT.eq(longestWord(['sky', 'mountain', 'sea']), 'mountain', 'longestWord picks mountain');\nT.eq(longestWord(['aa', 'bb']), 'aa', 'First wins ties');\nT.eq(longestWord([]), '', 'Empty list → empty string');" },
        { text: "Write `keyList(obj)` with `for…in` — returns the object's keys joined by `\", \"`.",
          test: "T.expect(typeof keyList === 'function', 'Define keyList(obj).');\nT.eq(keyList({ hp: 40, mp: 20, gold: 7 }), 'hp, mp, gold', 'keyList of a game character');\nT.eq(keyList({}), '', 'Empty object → empty string');" },
        { text: "Write `totalLetters(words)` — total characters across all words (accumulator + for…of).",
          test: "T.expect(typeof totalLetters === 'function', 'Define totalLetters(words).');\nT.eq(totalLetters(['hi', 'there']), 7, 'totalLetters([\"hi\", \"there\"])');\nT.eq(totalLetters([]), 0, 'Empty → 0');" }
      ],
      files: [
        { name: "script.js", content: "// 1) longestWord(words) — for…of, track the best so far\n\n// 2) keyList(obj) — for…in, collect keys, join with \", \"\n//    hint: push keys into an array, then .join(\", \")\n\n// 3) totalLetters(words) — accumulate word.length\n\nconsole.log(longestWord([\"sky\", \"mountain\", \"sea\"]));\n" }
      ],
      hints: [
        "Track-the-best: `let best = \"\"; for (const w of words) { if (w.length > best.length) best = w; }`",
        "keyList: `const keys = []; for (const k in obj) keys.push(k); return keys.join(\", \");`"
      ],
      solution: {
        "script.js": "function longestWord(words) {\n  let best = \"\";\n  for (const w of words) {\n    if (w.length > best.length) best = w;\n  }\n  return best;\n}\n\nfunction keyList(obj) {\n  const keys = [];\n  for (const k in obj) {\n    keys.push(k);\n  }\n  return keys.join(\", \");\n}\n\nfunction totalLetters(words) {\n  let total = 0;\n  for (const w of words) {\n    total += w.length;\n  }\n  return total;\n}\n\nconsole.log(longestWord([\"sky\", \"mountain\", \"sea\"]));\n"
      }
    },

    {
      id: "js-u5-3",
      title: "break & continue",
      kind: "js", chip: "JS", xp: 15,
      brief: "Two escape hatches inside any loop:\n\n- `break` — leave the loop **entirely** (found what you came for / hit a stop signal)\n- `continue` — abandon **this iteration** and move to the next (skip the junk)\n\nYou're processing a cash-register tape where `0` means \"end of day\" and negative entries are voided sales.",
      steps: [
        { text: "Write `sumUntilZero(nums)` — add numbers until you hit a `0`, then stop (`break`).",
          test: "T.expect(typeof sumUntilZero === 'function', 'Define sumUntilZero(nums).');\nT.eq(sumUntilZero([5, 10, 0, 99, 99]), 15, 'Stops AT the zero — the 99s never count');\nT.eq(sumUntilZero([1, 2, 3]), 6, 'No zero → sum everything');\nT.eq(sumUntilZero([0, 7]), 0, 'Zero first → 0');" },
        { text: "Write `sumValidSales(nums)` — sum everything but **skip negatives** (`continue`), still stopping at 0.",
          test: "T.expect(typeof sumValidSales === 'function', 'Define sumValidSales(nums).');\nT.eq(sumValidSales([10, -4, 20, 0, 50]), 30, 'Skip the -4, stop at 0');\nT.eq(sumValidSales([-1, -2, 5]), 5, 'All the negatives skipped');\nT.eq(sumValidSales([]), 0, 'Empty tape → 0');" },
        { text: "Write `firstOver(nums, limit)` — return the first number above the limit, or `null` (break-with-answer, aka a search loop).",
          test: "T.expect(typeof firstOver === 'function', 'Define firstOver(nums, limit).');\nT.eq(firstOver([3, 9, 4, 12], 8), 9, 'First number over 8 is 9');\nT.eq(firstOver([1, 2], 10), null, 'Nothing qualifies → null');" }
      ],
      files: [
        { name: "script.js", content: "// The register tape: 0 = end of day, negatives = voided sales.\n\n// 1) sumUntilZero(nums) — break at 0\n\n// 2) sumValidSales(nums) — continue past negatives, break at 0\n\n// 3) firstOver(nums, limit) — return early when found, null after the loop\n\nconsole.log(sumValidSales([10, -4, 20, 0, 50]));\n" }
      ],
      hints: [
        "`if (n === 0) break;` goes first inside the loop body.",
        "Order matters in #2: check break (0) before continue (negative)? Actually either order works here — but check `n === 0` first for clarity.",
        "firstOver: inside the loop, `if (n > limit) return n;` — after the loop, `return null;`"
      ],
      solution: {
        "script.js": "function sumUntilZero(nums) {\n  let total = 0;\n  for (const n of nums) {\n    if (n === 0) break;\n    total += n;\n  }\n  return total;\n}\n\nfunction sumValidSales(nums) {\n  let total = 0;\n  for (const n of nums) {\n    if (n === 0) break;\n    if (n < 0) continue;\n    total += n;\n  }\n  return total;\n}\n\nfunction firstOver(nums, limit) {\n  for (const n of nums) {\n    if (n > limit) return n;\n  }\n  return null;\n}\n\nconsole.log(sumValidSales([10, -4, 20, 0, 50]));\n"
      }
    },

    {
      id: "js-u5-4",
      title: "Nested loops: grids",
      kind: "js", chip: "JS", xp: 15,
      brief: "A loop inside a loop visits every **cell of a grid**: the outer loop walks rows, the inner walks columns. Boards, pixels, spreadsheets, seating charts — all nested loops.\n\nFor each outer lap, the inner loop runs **completely**: 3 rows × 4 cols = 12 visits, in reading order.",
      steps: [
        { text: "Write `seatLabels(rows, cols)` — an array of `\"R1C1\"`-style labels for every seat, row by row.",
          test: "T.expect(typeof seatLabels === 'function', 'Define seatLabels(rows, cols).');\nT.eq(seatLabels(2, 3), ['R1C1', 'R1C2', 'R1C3', 'R2C1', 'R2C2', 'R2C3'], 'seatLabels(2, 3) in reading order');\nT.eq(seatLabels(1, 1), ['R1C1'], 'A one-seat theater');\nT.eq(seatLabels(0, 5), [], 'Zero rows → no seats');" },
        { text: "Write `timesTable(n)` — a string with lines `\"i x j = k\"` for i and j from 1 to n, joined with newlines.",
          test: "T.expect(typeof timesTable === 'function', 'Define timesTable(n).');\nT.eq(timesTable(2), '1 x 1 = 1\\n1 x 2 = 2\\n2 x 1 = 2\\n2 x 2 = 4', 'timesTable(2) — four lines');\nT.eq(timesTable(1), '1 x 1 = 1', 'timesTable(1)');" },
        { text: "Log the full 3×3 times table.",
          test: "T.expect(T.logged('3 x 3 = 9'), 'console.log(timesTable(3)); — the last line proves the nesting ran to completion.');" }
      ],
      files: [
        { name: "script.js", content: "// 1) seatLabels(rows, cols) → [\"R1C1\", \"R1C2\", …] row by row\n//    (loop row 1..rows, inside loop col 1..cols)\n\n// 2) timesTable(n) → lines \"i x j = k\", joined with \\n\n//    hint: push lines into an array, return lines.join(\"\\n\")\n\n// 3) log timesTable(3)\n" }
      ],
      hints: [
        "Start counters at 1 and use <=: `for (let r = 1; r <= rows; r++)`.",
        "Build strings with template literals: `` labels.push(`R${r}C${c}`); ``",
        "Collect lines in an array and `join(\"\\n\")` at the end — cleaner than string concatenation."
      ],
      solution: {
        "script.js": "function seatLabels(rows, cols) {\n  const labels = [];\n  for (let r = 1; r <= rows; r++) {\n    for (let c = 1; c <= cols; c++) {\n      labels.push(`R${r}C${c}`);\n    }\n  }\n  return labels;\n}\n\nfunction timesTable(n) {\n  const lines = [];\n  for (let i = 1; i <= n; i++) {\n    for (let j = 1; j <= n; j++) {\n      lines.push(`${i} x ${j} = ${i * j}`);\n    }\n  }\n  return lines.join(\"\\n\");\n}\n\nconsole.log(timesTable(3));\n"
      }
    },

    {
      id: "js-quiz-5",
      title: "Unit 5 quiz: Loops & Iteration",
      kind: "quiz", xp: 10,
      brief: "while, of/in, escapes and grids. 80% to pass.",
      questions: [
        { q: "When is `while` the right loop?",
          choices: ["When you know the STOPPING CONDITION but not the iteration count", "When looping over an array", "Never — for replaced it", "Only for infinite loops"],
          answer: 0, explain: "\"Keep going until the battery dies\" = while. \"Do this 10 times\" = for." },
        { q: "What's wrong here?",
          code: "let n = 10;\nwhile (n > 0) {\n  console.log(n);\n}",
          lang: "js",
          choices: ["n never changes — infinite loop", "while needs parentheses", "n should be const", "Nothing"],
          answer: 0, explain: "The body must move the condition toward false: add n-- (or similar) or loop forever." },
        { q: "`for…of` vs `for…in`?",
          choices: ["of walks an array's VALUES; in walks an object's KEYS", "They're interchangeable", "in is for numbers only", "of is deprecated"],
          answer: 0, explain: "Values OF a list, keys IN an object — the mnemonic that sticks." },
        { q: "What does this sum to?",
          code: "let t = 0;\nfor (const n of [5, -2, 0, 9]) {\n  if (n === 0) break;\n  if (n < 0) continue;\n  t += n;\n}",
          lang: "js",
          choices: ["5 — skip the -2, stop at 0, never see 9", "12", "14", "3"],
          answer: 0, explain: "continue skips one item; break abandons the whole loop. The 9 sits beyond the break." },
        { q: "How many times does the inner body run?",
          code: "for (let r = 0; r < 3; r++) {\n  for (let c = 0; c < 4; c++) {\n    visit(r, c);\n  }\n}",
          lang: "js",
          choices: ["12 — the inner loop completes fully for EACH outer lap", "7", "3", "4"],
          answer: 0, explain: "rows × cols. Nested loops multiply." },
        { q: "The \"accumulator pattern\" is…",
          choices: ["Start with an empty result, fold each item into it inside the loop", "A loop that never ends", "Two loops side by side", "A special keyword"],
          answer: 0, explain: "let total = 0 … total += n. Sum, longest, count, collected array — one pattern, endless uses." }
      ]
    },

    {
      id: "js-u5-p",
      title: "Project: ASCII art printer",
      kind: "js", chip: "JS", xp: 40, project: true, mins: 30,
      brief: "Loops you can **see**: build an ASCII art generator — stairs, pyramids and a checkerboard, straight to the console. Every shape is a nested-loop pattern in disguise, and the console output is weirdly satisfying.",
      steps: [
        { text: "`stairs(n)` — n lines, line `i` is `i` hash marks; returned as one string, newline-joined.",
          test: "T.expect(typeof stairs === 'function', 'Define stairs(n).');\nT.eq(stairs(3), '#\\n##\\n###', 'stairs(3)');\nT.eq(stairs(1), '#', 'stairs(1)');\nT.eq(stairs(0), '', 'stairs(0) → empty string');" },
        { text: "`pyramid(n)` — centered: line `i` has `n - i` spaces then `2i - 1` hashes.",
          test: "T.expect(typeof pyramid === 'function', 'Define pyramid(n).');\nT.eq(pyramid(3), '  #\\n ###\\n#####', 'pyramid(3) — spaces make it point');\nT.eq(pyramid(1), '#', 'pyramid(1)');" },
        { text: "`checkerboard(size)` — `#` where row+col is even, `.` where odd.",
          test: "T.expect(typeof checkerboard === 'function', 'Define checkerboard(size).');\nT.eq(checkerboard(3), '#.#\\n.#.\\n#.#', 'checkerboard(3)');\nT.eq(checkerboard(2), '#.\\n.#', 'checkerboard(2)');" },
        { text: "Print all three (4-step stairs, 4-pyramid, 4-board) to the console gallery.",
          test: "T.expect(T.logged('####'), 'Log stairs(4) — its last line has four hashes.');\nT.expect(T.logged('#######'), 'Log pyramid(4) — its base is 7 hashes wide.');\nT.expect(T.logged('#.#.'), 'Log checkerboard(4).');" }
      ],
      files: [
        { name: "script.js", content: "// ASCII art factory. Tip: \"#\".repeat(i) makes i hashes;\n// \" \".repeat(k) makes k spaces.\n\n// 1) stairs(n)\n\n// 2) pyramid(n): per line i (1..n): \" \".repeat(n - i) + \"#\".repeat(2 * i - 1)\n\n// 3) checkerboard(size): (row + col) % 2 === 0 ? \"#\" : \".\"\n\n// 4) console.log each: stairs(4), pyramid(4), checkerboard(4)\n" }
      ],
      hints: [
        "stairs: collect `\"#\".repeat(i)` for i = 1..n, then join(\"\\n\").",
        "pyramid line: `\" \".repeat(n - i) + \"#\".repeat(2 * i - 1)` — the formula is given, wire the loop.",
        "checkerboard: nested loops build each row string cell by cell, push the row, join rows with \\n."
      ],
      solution: {
        "script.js": "// ASCII art factory.\n\nfunction stairs(n) {\n  const lines = [];\n  for (let i = 1; i <= n; i++) {\n    lines.push(\"#\".repeat(i));\n  }\n  return lines.join(\"\\n\");\n}\n\nfunction pyramid(n) {\n  const lines = [];\n  for (let i = 1; i <= n; i++) {\n    lines.push(\" \".repeat(n - i) + \"#\".repeat(2 * i - 1));\n  }\n  return lines.join(\"\\n\");\n}\n\nfunction checkerboard(size) {\n  const rows = [];\n  for (let r = 0; r < size; r++) {\n    let row = \"\";\n    for (let c = 0; c < size; c++) {\n      row += (r + c) % 2 === 0 ? \"#\" : \".\";\n    }\n    rows.push(row);\n  }\n  return rows.join(\"\\n\");\n}\n\nconsole.log(stairs(4));\nconsole.log(pyramid(4));\nconsole.log(checkerboard(4));\n"
      }
    }
  ]
});
