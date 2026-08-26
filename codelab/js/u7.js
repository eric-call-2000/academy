/* Learn JavaScript — Unit 7: Objects & Methods Deep Dive */
window.CODELAB.addUnit("js", {
  id: "js-u7",
  title: "Objects & Methods Deep Dive",
  icon: "🧬",
  blurb: "Methods, this, nested data, Object.keys/values/entries, and sorting.",
  cheat: [
    { h: "Methods & this", lang: "js", code: "const player = {\n  score: 0,\n  addPoints(n) {\n    this.score += n;   // this = the object the method lives on\n  }\n};\nplayer.addPoints(10);" },
    { h: "Nested data & optional chaining", lang: "js", code: "order.customer.address.city      // 💥 crashes if address is missing\norder?.customer?.address?.city   // undefined instead of a crash\ncity ?? \"Unknown\"                // then default it" },
    { h: "Object.keys / values / entries", lang: "js", code: "const scores = { ada: 91, bob: 77 };\nObject.keys(scores)    // [\"ada\", \"bob\"]\nObject.values(scores)  // [91, 77]\nObject.entries(scores) // [[\"ada\", 91], [\"bob\", 77]]", note: "The bridge from objects to all your array superpowers (map, filter, reduce)." },
    { h: "Sorting without wrecking", lang: "js", code: "const byScore = [...players].sort((a, b) => b.score - a.score);\n// copy first! .sort() mutates the array it's called on", note: "b - a = descending, a - b = ascending." }
  ],
  lessons: [

    {
      id: "js-u7-1",
      title: "Methods & this",
      kind: "js", chip: "JS", xp: 15,
      brief: "A function stored on an object is a **method**, and inside it, `this` means *the object I live on*. That's how data and behavior travel together:\n\nBuild a game character that manages its own health — the object protects its own rules.",
      example: { lang: "js", code: "const player = {\n  score: 0,\n  addPoints(n) {\n    this.score += n;\n  }\n};" },
      steps: [
        { text: "Create `hero` with `hp: 100` and a method `hit(dmg)` that subtracts damage (never below 0).",
          test: "T.expect(hero && typeof hero === 'object', 'Create const hero = { … }.');\nT.expect(typeof hero.hit === 'function', 'Give hero a hit(dmg) method.');\nhero.hit(30);\nT.eq(hero.hp, 70, 'After hit(30), hp is 70 — use this.hp inside the method');\nhero.hit(90);\nT.eq(hero.hp, 0, 'hp can\\'t go below 0 (Math.max is your friend)');" },
        { text: "Add a `heal(amount)` method — hp rises but never above 100.",
          test: "T.expect(typeof hero.heal === 'function', 'Add heal(amount).');\nhero.heal(45);\nT.eq(hero.hp, 45, 'From 0, heal(45) → 45');\nhero.heal(100);\nT.eq(hero.hp, 100, 'Capped at 100');" },
        { text: "Add `status()` — returns `` `${this.hp}/100 HP` ``.",
          test: "T.expect(typeof hero.status === 'function', 'Add status().');\nT.eq(hero.status(), '100/100 HP', 'status() reads this.hp live');\nhero.hit(25);\nT.eq(hero.status(), '75/100 HP', 'It always reflects the current hp.');" }
      ],
      files: [
        { name: "script.js", content: "// A character that manages its own health.\n// const hero = { hp: 100, hit(dmg) {…}, heal(amount) {…}, status() {…} };\n\n\nconsole.log(hero.status());\n" }
      ],
      hints: [
        "Method shorthand inside an object: `hit(dmg) { this.hp = Math.max(0, this.hp - dmg); }`",
        "heal mirrors it with Math.min: `this.hp = Math.min(100, this.hp + amount);`",
        "status: `` return `${this.hp}/100 HP`; ``"
      ],
      solution: {
        "script.js": "const hero = {\n  hp: 100,\n  hit(dmg) {\n    this.hp = Math.max(0, this.hp - dmg);\n  },\n  heal(amount) {\n    this.hp = Math.min(100, this.hp + amount);\n  },\n  status() {\n    return `${this.hp}/100 HP`;\n  }\n};\n\nconsole.log(hero.status());\n"
      }
    },

    {
      id: "js-u7-2",
      title: "Nested data & optional chaining",
      kind: "js", chip: "JS", xp: 15,
      brief: "Real API data nests deep: `order.customer.address.city`. And the moment `address` is missing, that line **crashes** the whole script.\n\nThe fix is **optional chaining**: `order?.customer?.address?.city` — any missing link yields `undefined` instead of an explosion. Pair it with `??` for a default and you can read hostile data fearlessly.",
      steps: [
        { text: "Write `cityOf(order)` — the customer's city, or `\"Unknown\"` when any part of the chain is missing.",
          test: "T.expect(typeof cityOf === 'function', 'Define cityOf(order).');\nT.eq(cityOf({ customer: { address: { city: 'Lisbon' } } }), 'Lisbon', 'Full chain present');\nT.eq(cityOf({ customer: {} }), 'Unknown', 'Missing address must NOT crash');\nT.eq(cityOf({}), 'Unknown', 'Missing customer must NOT crash');\nT.eq(cityOf(null), 'Unknown', 'Even a null order survives (start the chain with order?.)');" },
        { text: "Write `firstItemName(order)` — the name of the first item in `order.items`, or `\"—\"` (arrays chain too: `items?.[0]`).",
          test: "T.expect(typeof firstItemName === 'function', 'Define firstItemName(order).');\nT.eq(firstItemName({ items: [{ label: 'Mug' }, { label: 'Pen' }] }), 'Mug', 'First item\\'s label');\nT.eq(firstItemName({ items: [] }), '—', 'Empty items → dash');\nT.eq(firstItemName({}), '—', 'No items at all → dash');" }
      ],
      files: [
        { name: "script.js", content: "// Hostile data drills. No crashes allowed.\n\n// 1) cityOf(order) → order?.customer?.address?.city ?? \"Unknown\"\n\n// 2) firstItemName(order) → order?.items?.[0]?.label ?? \"—\"\n\nconsole.log(cityOf({}), firstItemName({ items: [{ label: \"Mug\" }] }));\n" }
      ],
      hints: [
        "Both functions are one-liners — the entire lesson is the ?. and ?? syntax.",
        "Array access chains with a dot before the bracket: `items?.[0]?.label`."
      ],
      solution: {
        "script.js": "// Hostile data drills. No crashes allowed.\n\nfunction cityOf(order) {\n  return order?.customer?.address?.city ?? \"Unknown\";\n}\n\nfunction firstItemName(order) {\n  return order?.items?.[0]?.label ?? \"—\";\n}\n\nconsole.log(cityOf({}), firstItemName({ items: [{ label: \"Mug\" }] }));\n"
      }
    },

    {
      id: "js-u7-3",
      title: "Object.keys, values & entries",
      kind: "js", chip: "JS", xp: 15,
      brief: "Objects don't have `.map` or `.reduce` — but three converters hand their contents to arrays, which do:\n\n- `Object.keys(obj)` → the key strings\n- `Object.values(obj)` → just the values\n- `Object.entries(obj)` → `[key, value]` pairs\n\nConvert, then unleash every array skill from Unit 2.",
      steps: [
        { text: "Write `teamSize(scores)` — how many players are in a scores object.",
          test: "T.expect(typeof teamSize === 'function', 'Define teamSize(scores).');\nT.eq(teamSize({ ada: 91, bob: 77, cy: 84 }), 3, 'Three keys → 3');\nT.eq(teamSize({}), 0, 'Empty object → 0');" },
        { text: "Write `totalScore(scores)` — sum of all the values (values + reduce).",
          test: "T.expect(typeof totalScore === 'function', 'Define totalScore(scores).');\nT.eq(totalScore({ ada: 91, bob: 77 }), 168, 'totalScore({ada: 91, bob: 77})');\nT.eq(totalScore({}), 0, 'Empty → 0 (give reduce its starting 0!)');" },
        { text: "Write `scoreLines(scores)` — an array of `\"name: score\"` strings via `Object.entries`.",
          test: "T.expect(typeof scoreLines === 'function', 'Define scoreLines(scores).');\nT.eq(scoreLines({ ada: 91, bob: 77 }), ['ada: 91', 'bob: 77'], 'Entries mapped to strings');\nT.eq(scoreLines({}), [], 'Empty → []');" }
      ],
      files: [
        { name: "script.js", content: "// The object → array bridge.\n\n// 1) teamSize(scores) → Object.keys(...).length\n\n// 2) totalScore(scores) → Object.values(...).reduce(...)\n\n// 3) scoreLines(scores) → Object.entries(...).map(([k, v]) => `${k}: ${v}`)\n\nconsole.log(totalScore({ ada: 91, bob: 77 }));\n" }
      ],
      hints: [
        "`Object.values(scores).reduce((sum, v) => sum + v, 0)` — the 0 makes empty objects safe.",
        "Entries destructure beautifully: `.map(([who, pts]) => `${who}: ${pts}`)`"
      ],
      solution: {
        "script.js": "// The object → array bridge.\n\nfunction teamSize(scores) {\n  return Object.keys(scores).length;\n}\n\nfunction totalScore(scores) {\n  return Object.values(scores).reduce((sum, v) => sum + v, 0);\n}\n\nfunction scoreLines(scores) {\n  return Object.entries(scores).map(([who, pts]) => `${who}: ${pts}`);\n}\n\nconsole.log(totalScore({ ada: 91, bob: 77 }));\n"
      }
    },

    {
      id: "js-u7-4",
      title: "Sorting arrays of objects",
      kind: "js", chip: "JS", xp: 15,
      brief: "`.sort()` takes a **comparator**: `(a, b) => a.score - b.score`. Negative → a first, positive → b first. So `b.score - a.score` sorts **descending**.\n\nOne trap worth respecting: `.sort()` **mutates** the array. Professionals copy first — `[...players].sort(…)` — so the original stays trustworthy.",
      steps: [
        { text: "Write `rankPlayers(players)` — a NEW array sorted by score, highest first. The input array must stay in its original order!",
          test: "T.expect(typeof rankPlayers === 'function', 'Define rankPlayers(players).');\nvar squad = [{ tag: 'ada', score: 91 }, { tag: 'bob', score: 77 }, { tag: 'cy', score: 84 }];\nvar ranked = rankPlayers(squad);\nT.eq(ranked.map(function (p) { return p.tag; }), ['ada', 'cy', 'bob'], 'Highest score first');\nT.eq(squad.map(function (p) { return p.tag; }), ['ada', 'bob', 'cy'], 'ORIGINAL untouched — copy before sorting: [...players].sort(…)');" },
        { text: "Write `champion(players)` — the top player's tag (reuse rankPlayers), or `null` for an empty roster.",
          test: "T.expect(typeof champion === 'function', 'Define champion(players).');\nT.eq(champion([{ tag: 'ada', score: 91 }, { tag: 'bob', score: 97 }]), 'bob', 'Top scorer wins');\nT.eq(champion([]), null, 'Empty roster → null');" },
        { text: "Write `sortByName(players)` — a new array alphabetical by tag (strings compare with `.localeCompare`).",
          test: "T.expect(typeof sortByName === 'function', 'Define sortByName(players).');\nvar out = sortByName([{ tag: 'cy' }, { tag: 'ada' }, { tag: 'bob' }]);\nT.eq(out.map(function (p) { return p.tag; }), ['ada', 'bob', 'cy'], 'Alphabetical by tag — comparator: (a, b) => a.tag.localeCompare(b.tag)');" }
      ],
      files: [
        { name: "script.js", content: "// Leaderboard mechanics.\n\n// 1) rankPlayers(players) → NEW array, score descending\n//    [...players].sort((a, b) => b.score - a.score)\n\n// 2) champion(players) → top tag, or null if empty\n\n// 3) sortByName(players) → new array, alphabetical by tag\n\nconsole.log(champion([{ tag: \"ada\", score: 91 }, { tag: \"bob\", score: 97 }]));\n" }
      ],
      hints: [
        "Numbers: `b.score - a.score` (descending). Strings: `a.tag.localeCompare(b.tag)`.",
        "champion: `const ranked = rankPlayers(players); return ranked.length ? ranked[0].tag : null;`"
      ],
      solution: {
        "script.js": "// Leaderboard mechanics.\n\nfunction rankPlayers(players) {\n  return [...players].sort((a, b) => b.score - a.score);\n}\n\nfunction champion(players) {\n  const ranked = rankPlayers(players);\n  return ranked.length ? ranked[0].tag : null;\n}\n\nfunction sortByName(players) {\n  return [...players].sort((a, b) => a.tag.localeCompare(b.tag));\n}\n\nconsole.log(champion([{ tag: \"ada\", score: 91 }, { tag: \"bob\", score: 97 }]));\n"
      }
    },

    {
      id: "js-quiz-7",
      title: "Unit 7 quiz: Objects Deep Dive",
      kind: "quiz", xp: 10,
      brief: "this, chains, converters and comparators. 80% to pass.",
      questions: [
        { q: "Inside a method, `this` refers to…",
          choices: ["The object the method was called on", "The window, always", "The function itself", "The nearest variable"],
          answer: 0, explain: "player.addPoints(5) → inside addPoints, this IS player. Data and behavior, together." },
        { q: "What does `order?.customer?.city` do when customer is missing?",
          choices: ["Evaluates to undefined instead of crashing", "Throws TypeError", "Returns null", "Creates customer"],
          answer: 0, explain: "Each ?. bails out gracefully. Pair with ?? \"default\" to finish the job." },
        { q: "Which converts an object so you can `.reduce` over its numbers?",
          choices: ["Object.values(obj)", "obj.toArray()", "obj.reduce directly", "JSON.parse(obj)"],
          answer: 0, explain: "keys → names, values → the data, entries → both as pairs. Then all array methods apply." },
        { q: "What does this comparator produce?",
          code: "players.sort((a, b) => b.score - a.score)",
          lang: "js",
          choices: ["Highest score first (descending)", "Lowest first", "Alphabetical", "Random"],
          answer: 0, explain: "Positive result → b goes first. b - a flips the order; a - b would be ascending." },
        { q: "Why copy before sorting (`[...players].sort(…)`)?",
          choices: [".sort() MUTATES the original array — copying keeps it intact", "Sorting copies are faster", "sort doesn't work on originals", "No reason"],
          answer: 0, explain: "One of the classic JS betrayals: sort (and reverse, splice, push) modify in place. Spread-copy first." },
        { q: "What prints?",
          code: "const cat = {\n  lives: 9,\n  useLife() { this.lives--; }\n};\ncat.useLife();\ncat.useLife();\nconsole.log(cat.lives);",
          lang: "js",
          choices: ["7", "9", "8", "undefined"],
          answer: 0, explain: "Each call decrements the object's own property through this. 9 → 8 → 7." }
      ]
    },

    {
      id: "js-u7-p",
      title: "Project: Gradebook",
      kind: "js", chip: "JS", xp: 40, project: true, mins: 35,
      brief: "Build a teacher's **gradebook**: an object mapping students to grade arrays, plus the query functions a real reporting screen would call. Objects, methods, converters and sorting — the whole unit in one dataset.",
      steps: [
        { text: "`addGrade(book, student, grade)` — appends to the student's array, creating it on first sight; returns the book.",
          test: "T.expect(typeof addGrade === 'function', 'Define addGrade(book, student, grade).');\nvar b = {};\naddGrade(b, 'ada', 90);\naddGrade(b, 'ada', 100);\naddGrade(b, 'bob', 80);\nT.eq(b, { ada: [90, 100], bob: [80] }, 'New students get a fresh array; repeats append');" },
        { text: "`averageFor(book, student)` — that student's mean, rounded to 1 decimal; unknown student → `null`.",
          test: "T.expect(typeof averageFor === 'function', 'Define averageFor(book, student).');\nvar b = { ada: [90, 100, 94], bob: [80] };\nT.eq(averageFor(b, 'ada'), 94.7, '(90+100+94)/3 = 94.666… → 94.7 (Math.round(x * 10) / 10)');\nT.eq(averageFor(b, 'bob'), 80, 'Single grade → itself');\nT.eq(averageFor(b, 'zoe'), null, 'Unknown student → null');" },
        { text: "`classAverage(book)` — the mean of every grade from every student, rounded to 1 decimal; empty book → `null`.",
          test: "T.expect(typeof classAverage === 'function', 'Define classAverage(book).');\nT.eq(classAverage({ ada: [90, 100], bob: [80] }), 90, '(90+100+80)/3 = 90');\nT.eq(classAverage({}), null, 'Empty book → null');" },
        { text: "`topStudent(book)` — the name with the highest average.",
          test: "T.expect(typeof topStudent === 'function', 'Define topStudent(book).');\nT.eq(topStudent({ ada: [90, 100], bob: [99] }), 'bob', 'bob\\'s 99 beats ada\\'s 95');\nT.eq(topStudent({ solo: [70] }), 'solo', 'One student → that student');" },
        { text: "`honorRoll(book, cutoff = 90)` — alphabetized names whose average meets the cutoff.",
          test: "T.expect(typeof honorRoll === 'function', 'Define honorRoll(book, cutoff = 90).');\nvar b = { cy: [95, 91], ada: [98, 96], bob: [72, 80] };\nT.eq(honorRoll(b), ['ada', 'cy'], 'Default cutoff 90, alphabetical order');\nT.eq(honorRoll(b, 70), ['ada', 'bob', 'cy'], 'Lower the bar and everyone makes it');\nT.eq(honorRoll(b, 99), [], 'Nobody clears 99');" }
      ],
      files: [
        { name: "script.js", content: "// The gradebook: { studentName: [grades...] }\n\n// 1) addGrade(book, student, grade)\n//    hint: if (!book[student]) book[student] = [];\n\n// 2) averageFor(book, student) → 1-decimal mean, or null\n\n// 3) classAverage(book) → mean of ALL grades, or null when empty\n//    hint: Object.values(book).flat()\n\n// 4) topStudent(book) → name with the best average\n\n// 5) honorRoll(book, cutoff = 90) → sorted names at/above cutoff\n\nconst book = {};\naddGrade(book, \"ada\", 98);\naddGrade(book, \"ada\", 96);\naddGrade(book, \"bob\", 80);\nconsole.log(topStudent(book), honorRoll(book));\n" }
      ],
      hints: [
        "One rounding helper serves everything: `const round1 = (x) => Math.round(x * 10) / 10;`",
        "classAverage: `const all = Object.values(book).flat(); if (!all.length) return null;` then mean.",
        "topStudent: loop `Object.keys(book)`, track the best averageFor so far.",
        "honorRoll: `Object.keys(book).filter(s => averageFor(book, s) >= cutoff).sort()`"
      ],
      solution: {
        "script.js": "// The gradebook: { studentName: [grades...] }\n\nconst round1 = (x) => Math.round(x * 10) / 10;\n\nfunction addGrade(book, student, grade) {\n  if (!book[student]) book[student] = [];\n  book[student].push(grade);\n  return book;\n}\n\nfunction averageFor(book, student) {\n  const grades = book[student];\n  if (!grades || !grades.length) return null;\n  const total = grades.reduce((sum, g) => sum + g, 0);\n  return round1(total / grades.length);\n}\n\nfunction classAverage(book) {\n  const all = Object.values(book).flat();\n  if (!all.length) return null;\n  return round1(all.reduce((sum, g) => sum + g, 0) / all.length);\n}\n\nfunction topStudent(book) {\n  let best = null;\n  for (const student of Object.keys(book)) {\n    if (best === null || averageFor(book, student) > averageFor(book, best)) {\n      best = student;\n    }\n  }\n  return best;\n}\n\nfunction honorRoll(book, cutoff = 90) {\n  return Object.keys(book)\n    .filter(s => averageFor(book, s) >= cutoff)\n    .sort();\n}\n\nconst book = {};\naddGrade(book, \"ada\", 98);\naddGrade(book, \"ada\", 96);\naddGrade(book, \"bob\", 80);\nconsole.log(topStudent(book), honorRoll(book));\n"
      }
    }
  ]
});
