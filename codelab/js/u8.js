/* Learn JavaScript — Unit 8: Final Projects */
window.CODELAB.addUnit("js", {
  id: "js-u8",
  title: "Final Projects",
  icon: "🏆",
  blurb: "Three build-outs that use the entire course — ending with your own quiz engine.",
  cheat: [
    { h: "Your JavaScript toolkit", lang: "js", code: "/* variables, math, strings, template literals   (U1) */\n/* arrays, objects, map/filter/reduce            (U2) */\n/* else-if, &&/||, switch, ternary, ??           (U3) */\n/* defaults, guards, callbacks, closures, purity (U4) */\n/* while, for…of/in, break/continue, nesting     (U5) */\n/* slice/replaceAll/padStart, Math, conversion   (U6) */\n/* methods & this, ?. , Object.entries, sort     (U7) */" },
    { h: "State machine in one object", lang: "js", code: "const state = { room: \"cave\", bag: [] };\n// every action reads state, changes state, reports back", note: "Games, forms, apps — they're all \"state + functions that move it\"." }
  ],
  lessons: [

    {
      id: "js-u8-1",
      title: "Project: Text adventure engine",
      kind: "js", chip: "JS", xp: 40, project: true, mins: 40,
      brief: "Build the engine of a tiny **text adventure** — a world map as nested objects, a state object for the player, and actions that move them through it. This is a real state machine, the pattern behind every game *and* every app screen you'll ever build.\n\nThe world: a `cave` (has a torch) connects east to a `forest` (has a key), which connects north to a locked `tower` — enterable only with the key.",
      steps: [
        { text: "A `WORLD` object: each room has a `desc`, an `exits` object, and an `item` (or `null`).",
          test: "T.expect(WORLD && typeof WORLD === 'object', 'Create const WORLD = { cave: {…}, forest: {…}, tower: {…} }.');\nT.expect(WORLD.cave && WORLD.forest && WORLD.tower, 'Three rooms: cave, forest, tower.');\nT.eq(WORLD.cave.exits.east, 'forest', 'cave exits east → forest');\nT.eq(WORLD.forest.exits.north, 'tower', 'forest exits north → tower');\nT.eq(WORLD.forest.exits.west, 'cave', 'forest exits west → cave (you can walk back)');\nT.eq(WORLD.cave.item, 'torch', 'The cave holds a torch');\nT.eq(WORLD.forest.item, 'key', 'The forest holds a key');\nT.expect(typeof WORLD.cave.desc === 'string' && WORLD.cave.desc.length > 5, 'Every room needs a desc sentence.');" },
        { text: "`newGame()` — a fresh state: `{ room: \"cave\", bag: [] }`.",
          test: "T.expect(typeof newGame === 'function', 'Define newGame().');\nT.eq(newGame(), { room: 'cave', bag: [] }, 'newGame() starts in the cave, empty-handed');\nvar s1 = newGame(), s2 = newGame();\nT.expect(s1 !== s2 && s1.bag !== s2.bag, 'Each call returns a FRESH object (new bag array too).');" },
        { text: "`look(state)` — the current room's description plus `\" You see a <item>.\"` when one is there.",
          test: "T.expect(typeof look === 'function', 'Define look(state).');\nvar s = newGame();\nT.expect(look(s).indexOf(WORLD.cave.desc) === 0, 'Starts with the room desc');\nT.expect(look(s).toLowerCase().indexOf('you see a torch') !== -1, 'Mentions the torch while it lies there');" },
        { text: "`take(state)` — moves the room's item into the bag: returns `\"Taken: <item>\"` or `\"Nothing to take.\"` (room's item becomes null).",
          test: "var s = newGame();\nWORLD.cave.item = 'torch';\nT.eq(take(s), 'Taken: torch', 'take in the cave');\nT.eq(s.bag, ['torch'], 'The torch is in the bag');\nT.eq(WORLD.cave.item, null, 'And gone from the room');\nT.eq(take(s), 'Nothing to take.', 'Second take finds nothing');" },
        { text: "`go(state, dir)` — moves through an exit (`\"You go <dir>.\"`), rejects walls (`\"You can't go that way.\"`), and the tower demands the key (`\"The tower door is locked.\"`).",
          test: "WORLD.cave.item = 'torch'; WORLD.forest.item = 'key';\nvar s = newGame();\nT.eq(go(s, 'north'), \"You can't go that way.\", 'No north exit from the cave');\nT.eq(go(s, 'east'), 'You go east.', 'East works');\nT.eq(s.room, 'forest', 'State moved to the forest');\nT.eq(go(s, 'north'), 'The tower door is locked.', 'No key, no entry');\nT.eq(s.room, 'forest', 'Still in the forest');\ntake(s);\nT.eq(go(s, 'north'), 'You go north.', 'Key in bag → tower opens');\nT.eq(s.room, 'tower', 'Victory: standing in the tower');" }
      ],
      files: [
        { name: "script.js", content: "// The world: cave —east→ forest —north→ tower (locked without the key)\n//            cave ←west— forest\n\n// 1) const WORLD = {\n//      cave:   { desc: \"…\", exits: { east: \"forest\" }, item: \"torch\" },\n//      forest: { desc: \"…\", exits: { west: \"cave\", north: \"tower\" }, item: \"key\" },\n//      tower:  { desc: \"…\", exits: {}, item: null }\n//    };\n\n// 2) newGame() → { room: \"cave\", bag: [] }\n\n// 3) look(state) → desc (+ \" You see a <item>.\" if present)\n\n// 4) take(state) → \"Taken: X\" | \"Nothing to take.\"\n\n// 5) go(state, dir) — walls, the locked tower, and movement\n\n// demo drive (read-only so the world stays pristine for the checks):\nconst s = newGame();\nconsole.log(look(s));\nconsole.log(go(s, \"east\"));\nconsole.log(look(s));\n" }
      ],
      hints: [
        "look: `const room = WORLD[state.room]; let out = room.desc; if (room.item) out += ` You see a ${room.item}.`; return out;`",
        "take: read `WORLD[state.room].item`; if present, push to bag, null it out, return the message.",
        "go: `const dest = WORLD[state.room].exits[dir]; if (!dest) return \"You can't go that way.\";` then the lock check: `if (dest === 'tower' && !state.bag.includes('key')) …` then move.",
        "Test your engine in the console below — you built a playable game!"
      ],
      solution: {
        "script.js": "// The world: cave —east→ forest —north→ tower (locked without the key)\n\nconst WORLD = {\n  cave: { desc: \"A damp cave with dripping walls.\", exits: { east: \"forest\" }, item: \"torch\" },\n  forest: { desc: \"Pines whisper overhead.\", exits: { west: \"cave\", north: \"tower\" }, item: \"key\" },\n  tower: { desc: \"You made it — the wizard's tower!\", exits: {}, item: null }\n};\n\nfunction newGame() {\n  return { room: \"cave\", bag: [] };\n}\n\nfunction look(state) {\n  const room = WORLD[state.room];\n  let out = room.desc;\n  if (room.item) out += ` You see a ${room.item}.`;\n  return out;\n}\n\nfunction take(state) {\n  const room = WORLD[state.room];\n  if (!room.item) return \"Nothing to take.\";\n  state.bag.push(room.item);\n  const taken = room.item;\n  room.item = null;\n  return `Taken: ${taken}`;\n}\n\nfunction go(state, dir) {\n  const dest = WORLD[state.room].exits[dir];\n  if (!dest) return \"You can't go that way.\";\n  if (dest === \"tower\" && !state.bag.includes(\"key\")) {\n    return \"The tower door is locked.\";\n  }\n  state.room = dest;\n  return `You go ${dir}.`;\n}\n\n// demo drive (read-only so the world stays pristine for the checks):\nconst s = newGame();\nconsole.log(look(s));\nconsole.log(go(s, \"east\"));\nconsole.log(look(s));\n"
      }
    },

    {
      id: "js-u8-2",
      title: "Project: Sales analytics",
      kind: "js", chip: "JS", xp: 40, project: true, mins: 35,
      brief: "You've been handed a year of sales data and a dashboard to feed. Write the **analytics layer**: totals, best month, growth deltas and a human summary. This is exactly the data-crunching your Async course will later fetch from an API — build the muscles now.",
      steps: [
        { text: "`totalRevenue(months)` — sum of all `revenue` values.",
          test: "T.expect(typeof totalRevenue === 'function', 'Define totalRevenue(months).');\nT.eq(totalRevenue(SALES), 46000, 'totalRevenue(SALES) — reduce over revenue');\nT.eq(totalRevenue([]), 0, 'No data → 0');" },
        { text: "`bestMonth(months)` — the entry with the highest revenue.",
          test: "T.expect(typeof bestMonth === 'function', 'Define bestMonth(months).');\nT.eq(bestMonth(SALES), { month: 'Mar', revenue: 15000 }, 'March was the peak');\nT.eq(bestMonth([]), null, 'Empty data → null');" },
        { text: "`growth(months)` — array of month-over-month deltas (one shorter than the input).",
          test: "T.expect(typeof growth === 'function', 'Define growth(months).');\nT.eq(growth(SALES), [2000, 5000, -9000, 1000], 'Deltas between consecutive months');\nT.eq(growth([{ month: 'Jan', revenue: 5 }]), [], 'A single month has no deltas');" },
        { text: "`bestStreak(months)` — the longest run of consecutive positive deltas.",
          test: "T.expect(typeof bestStreak === 'function', 'Define bestStreak(months).');\nT.eq(bestStreak(SALES), 2, 'Jan→Feb→Mar grew twice in a row');\nT.eq(bestStreak([{ month: 'a', revenue: 9 }, { month: 'b', revenue: 3 }]), 0, 'Never grew → 0');" },
        { text: "`summary(months)` — `` `Total $X. Best: <month> ($Y).` `` using your groupThousands-style formatting (commas!), then log it.",
          test: "T.expect(typeof summary === 'function', 'Define summary(months).');\nT.eq(summary(SALES), 'Total $46,000. Best: Mar ($15,000).', 'The dashboard headline, commas included');\nT.expect(T.logged('total $46,000'), 'console.log(summary(SALES));');" }
      ],
      files: [
        { name: "script.js", content: "// The data feed. Leave it exactly as-is — the dashboard depends on it.\nconst SALES = [\n  { month: \"Jan\", revenue: 8000 },\n  { month: \"Feb\", revenue: 10000 },\n  { month: \"Mar\", revenue: 15000 },\n  { month: \"Apr\", revenue: 6000 },\n  { month: \"May\", revenue: 7000 }\n];\n\n// 1) totalRevenue(months)\n\n// 2) bestMonth(months) → the object with the highest revenue, or null\n\n// 3) growth(months) → [m2-m1, m3-m2, …]\n\n// 4) bestStreak(months) → longest run of positive deltas\n\n// 5) summary(months) → `Total $X. Best: <month> ($Y).` with comma grouping\n//    (reuse your groupThousands from the Formatter kit!) — then log it\n" }
      ],
      hints: [
        "growth needs indexes, not for…of: `for (let i = 1; i < months.length; i++) deltas.push(months[i].revenue - months[i - 1].revenue);`",
        "bestStreak rides on growth: walk the deltas with a running counter — `run = d > 0 ? run + 1 : 0;` — and keep the max run seen.",
        "summary reuses everything: bestMonth for the name, totalRevenue + your comma-grouper for the numbers. Copy groupThousands in from the last project — real devs reuse their utils."
      ],
      solution: {
        "script.js": "// The data feed. Leave it exactly as-is — the dashboard depends on it.\nconst SALES = [\n  { month: \"Jan\", revenue: 8000 },\n  { month: \"Feb\", revenue: 10000 },\n  { month: \"Mar\", revenue: 15000 },\n  { month: \"Apr\", revenue: 6000 },\n  { month: \"May\", revenue: 7000 }\n];\n\nfunction totalRevenue(months) {\n  return months.reduce((sum, m) => sum + m.revenue, 0);\n}\n\nfunction bestMonth(months) {\n  if (!months.length) return null;\n  let best = months[0];\n  for (const m of months) {\n    if (m.revenue > best.revenue) best = m;\n  }\n  return best;\n}\n\nfunction growth(months) {\n  const deltas = [];\n  for (let i = 1; i < months.length; i++) {\n    deltas.push(months[i].revenue - months[i - 1].revenue);\n  }\n  return deltas;\n}\n\nfunction bestStreak(months) {\n  let best = 0, run = 0;\n  for (const d of growth(months)) {\n    run = d > 0 ? run + 1 : 0;\n    if (run > best) best = run;\n  }\n  return best;\n}\n\nfunction groupThousands(n) {\n  const s = String(n);\n  let out = \"\", count = 0;\n  for (let i = s.length - 1; i >= 0; i--) {\n    out = s[i] + out;\n    count++;\n    if (count % 3 === 0 && i > 0) out = \",\" + out;\n  }\n  return out;\n}\n\nfunction summary(months) {\n  const best = bestMonth(months);\n  return `Total $${groupThousands(totalRevenue(months))}. Best: ${best.month} ($${groupThousands(best.revenue)}).`;\n}\n\nconsole.log(summary(SALES));\n"
      }
    },

    {
      id: "js-u8-3",
      title: "Portfolio project: Quiz engine",
      kind: "js", chip: "JS", xp: 60, project: true, mins: 50,
      brief: "The graduation build — and it's deliciously meta: write the engine of a **quiz platform like the one grading you right now**. 🎓 Question validation, answer grading, scoring, pass/fail and a review of what you missed. Every unit of this course shows up somewhere in these functions.",
      steps: [
        { text: "`isValidQuestion(q)` — has a non-empty `prompt` string, a `choices` array of 2+, and an integer `answer` that's a real index.",
          test: "T.expect(typeof isValidQuestion === 'function', 'Define isValidQuestion(q).');\nT.eq(isValidQuestion({ prompt: '2+2?', choices: ['3', '4'], answer: 1 }), true, 'A healthy question');\nT.eq(isValidQuestion({ prompt: '', choices: ['a', 'b'], answer: 0 }), false, 'Empty prompt');\nT.eq(isValidQuestion({ prompt: 'x', choices: ['only one'], answer: 0 }), false, 'Needs 2+ choices');\nT.eq(isValidQuestion({ prompt: 'x', choices: ['a', 'b'], answer: 5 }), false, 'answer must index a choice');\nT.eq(isValidQuestion({ prompt: 'x', choices: ['a', 'b'], answer: 0.5 }), false, 'Number.isInteger!');\nT.eq(isValidQuestion(null), false, 'null survives the guards');" },
        { text: "`addQuestion(quizData, q)` — push only valid questions (pure-ish: returns true/false for accepted).",
          test: "T.expect(typeof addQuestion === 'function', 'Define addQuestion(quizData, q).');\nvar qs = [];\nT.eq(addQuestion(qs, { prompt: 'ok?', choices: ['y', 'n'], answer: 0 }), true, 'Valid → accepted');\nT.eq(qs.length, 1, '…and stored');\nT.eq(addQuestion(qs, { prompt: '', choices: ['y', 'n'], answer: 0 }), false, 'Invalid → rejected');\nT.eq(qs.length, 1, '…and NOT stored');" },
        { text: "`gradeQuiz(quizData, answers)` — returns `{ score, total, pct, missed }`: count of correct, total questions, whole-number percent, and the **indexes** the user got wrong.",
          test: "T.expect(typeof gradeQuiz === 'function', 'Define gradeQuiz(quizData, answers).');\nvar r = gradeQuiz(DEMO_QUIZ, [1, 0, 2]);\nT.eq(r, { score: 2, total: 3, pct: 67, missed: [1] }, 'Two right, question #1 missed, 66.7% → 67 (Math.round)');\nvar perfect = gradeQuiz(DEMO_QUIZ, [1, 1, 2]);\nT.eq(perfect, { score: 3, total: 3, pct: 100, missed: [] }, 'A perfect run');\nT.eq(gradeQuiz([], []), { score: 0, total: 0, pct: 0, missed: [] }, 'Empty quiz: 0/0 → pct 0 (guard the division!)');" },
        { text: "`isPassing(result, cutoff = 80)` — pass/fail from a grade result.",
          test: "T.expect(typeof isPassing === 'function', 'Define isPassing(result, cutoff = 80).');\nT.eq(isPassing({ pct: 85 }), true, '85 passes the default 80');\nT.eq(isPassing({ pct: 67 }), false, '67 fails it');\nT.eq(isPassing({ pct: 67 }, 60), true, 'Custom cutoffs work');\nT.eq(isPassing({ pct: 80 }), true, 'Exactly 80 passes (>=)');" },
        { text: "`reviewSheet(quizData, result)` — for each missed index: `` `Q<n>: <prompt> → <correct choice>` `` (n is 1-based).",
          test: "T.expect(typeof reviewSheet === 'function', 'Define reviewSheet(quizData, result).');\nvar r = gradeQuiz(DEMO_QUIZ, [1, 0, 2]);\nT.eq(reviewSheet(DEMO_QUIZ, r), ['Q2: Which tag makes the largest heading? → h1'], 'One miss, one review line');\nvar r2 = gradeQuiz(DEMO_QUIZ, [0, 0, 0]);\nT.eq(reviewSheet(DEMO_QUIZ, r2).length, 3, 'Miss everything, review everything');\nT.eq(reviewSheet(DEMO_QUIZ, gradeQuiz(DEMO_QUIZ, [1, 1, 2])), [], 'Perfect run → empty sheet');" },
        { text: "Run the demo: grade `[1, 0, 2]`, log the pct, pass/fail, and the review sheet.",
          test: "T.expect(T.logged('67'), 'Log the result pct.');\nT.expect(T.logged('false'), 'Log isPassing(result) — 67 fails.');\nT.expect(T.logged('largest heading'), 'Log the review sheet so future-you studies the misses.');" }
      ],
      files: [
        { name: "script.js", content: "// The engine behind every quiz you've taken in this course. Meta enough?\n\nconst DEMO_QUIZ = [\n  { prompt: \"What does CSS style?\", choices: [\"Structure\", \"Presentation\", \"Servers\"], answer: 1 },\n  { prompt: \"Which tag makes the largest heading?\", choices: [\"h6\", \"h1\", \"head\"], answer: 1 },\n  { prompt: \"What does ?? provide?\", choices: [\"Loops\", \"Comments\", \"Defaults for null/undefined\"], answer: 2 }\n];\n\n// 1) isValidQuestion(q) — guard clauses all the way down\n\n// 2) addQuestion(quizData, q) — only valid questions get in\n\n// 3) gradeQuiz(quizData, answers) → { score, total, pct, missed }\n\n// 4) isPassing(result, cutoff = 80)\n\n// 5) reviewSheet(quizData, result) → [`Q2: prompt → correct choice`, …]\n\n// 6) const result = gradeQuiz(DEMO_QUIZ, [1, 0, 2]);\n//    log result.pct, isPassing(result), reviewSheet(DEMO_QUIZ, result)\n" }
      ],
      hints: [
        "isValidQuestion is one guard chain: `if (!q || typeof q !== 'object') return false;` then prompt, then Array.isArray(q.choices) && length >= 2, then Number.isInteger(q.answer) && in range.",
        "gradeQuiz: loop with an index (`for (let i = 0; …)`), compare `answers[i] === quizData[i].answer`, collect misses; `pct: total ? Math.round(score / total * 100) : 0`.",
        "reviewSheet maps the missed indexes: `` result.missed.map(i => `Q${i + 1}: ${quizData[i].prompt} → ${quizData[i].choices[quizData[i].answer]}`) ``",
        "When the checks go green: you've implemented the very machine that just graded you. Take the screenshot. 🏆"
      ],
      solution: {
        "script.js": "// The engine behind every quiz you've taken in this course.\n\nconst DEMO_QUIZ = [\n  { prompt: \"What does CSS style?\", choices: [\"Structure\", \"Presentation\", \"Servers\"], answer: 1 },\n  { prompt: \"Which tag makes the largest heading?\", choices: [\"h6\", \"h1\", \"head\"], answer: 1 },\n  { prompt: \"What does ?? provide?\", choices: [\"Loops\", \"Comments\", \"Defaults for null/undefined\"], answer: 2 }\n];\n\nfunction isValidQuestion(q) {\n  if (!q || typeof q !== \"object\") return false;\n  if (typeof q.prompt !== \"string\" || q.prompt.length === 0) return false;\n  if (!Array.isArray(q.choices) || q.choices.length < 2) return false;\n  if (!Number.isInteger(q.answer)) return false;\n  if (q.answer < 0 || q.answer >= q.choices.length) return false;\n  return true;\n}\n\nfunction addQuestion(quizData, q) {\n  if (!isValidQuestion(q)) return false;\n  quizData.push(q);\n  return true;\n}\n\nfunction gradeQuiz(quizData, answers) {\n  let score = 0;\n  const missed = [];\n  for (let i = 0; i < quizData.length; i++) {\n    if (answers[i] === quizData[i].answer) {\n      score++;\n    } else {\n      missed.push(i);\n    }\n  }\n  const total = quizData.length;\n  return {\n    score: score,\n    total: total,\n    pct: total ? Math.round((score / total) * 100) : 0,\n    missed: missed\n  };\n}\n\nfunction isPassing(result, cutoff = 80) {\n  return result.pct >= cutoff;\n}\n\nfunction reviewSheet(quizData, result) {\n  return result.missed.map(\n    (i) => `Q${i + 1}: ${quizData[i].prompt} → ${quizData[i].choices[quizData[i].answer]}`\n  );\n}\n\nconst result = gradeQuiz(DEMO_QUIZ, [1, 0, 2]);\nconsole.log(result.pct);\nconsole.log(isPassing(result));\nconsole.log(reviewSheet(DEMO_QUIZ, result));\n"
      }
    }
  ]
});
