/* Unit 5 — JavaScript II: Arrays, Objects & Iterators */
window.CODELAB.addUnit("js", {
  id: "js2",
  title: "Arrays, Objects & Iterators",
  icon: "🧩",
  color: "#eab308",
  blurb: "Real programs run on data — collect it, shape it, and query it.",
  cheat: [
    { h: "Arrays", lang: "js", code: "const colors = [\"red\", \"green\", \"blue\"];\ncolors.length;      // 3\ncolors[0];          // \"red\" (zero-indexed!)\ncolors.push(\"purple\"); // add to the end" },
    { h: "map / filter", lang: "js", code: "const nums = [1, 2, 3, 4];\nnums.map(n => n * 2);      // [2, 4, 6, 8]\nnums.filter(n => n % 2 === 0); // [2, 4]", note: "map transforms EVERY item; filter keeps the ones that pass the test. Both return NEW arrays." },
    { h: "reduce / find", lang: "js", code: "const nums = [5, 10, 20];\nnums.reduce((sum, n) => sum + n, 0); // 35\nnums.find(n => n > 8);               // 10 (first match)" },
    { h: "Objects", lang: "js", code: "const profile = {\n  username: \"ada\",\n  level: 3,\n  isOnline: true\n};\nprofile.username;      // dot access\nprofile.level = 4;     // update\nprofile.city = \"Rome\"; // add new key" },
    { h: "Arrays of objects (the real world)", lang: "js", code: "const todos = [\n  { text: \"learn JS\", done: true },\n  { text: \"build app\", done: false }\n];\ntodos.filter(t => t.done).length; // 1" }
  ],
  lessons: [

    {
      id: "js-arr-1",
      title: "Arrays",
      kind: "js", chip: "JS", xp: 15,
      brief: "An **array** is an ordered list: `[\"red\", \"green\", \"blue\"]`.\n\n- `colors[0]` — items are numbered from **zero**\n- `colors.length` — how many\n- `colors.push(x)` — add to the end\n\nBuild a color collection.",
      steps: [
        { text: "Create an array `colors` with **exactly 3** color strings.",
          test: "T.expect(Array.isArray(colors), 'Declare const colors = [ … ] as an array.');\nT.expect(colors.every(function (c) { return typeof c === 'string'; }), 'Every item should be a string in quotes.');" },
        { text: "`push` a **fourth** color onto the end.",
          test: "T.expect(colors.length === 4, 'After one push, colors should hold 4 items — it has ' + colors.length + '.');" },
        { text: "Log the **first** color and the array's **length**.",
          test: "T.expect(T.logged(colors[0]), 'Log colors[0] — remember, counting starts at 0.');\nT.expect(T.logged('4'), 'Log colors.length too.');" }
      ],
      files: [
        { name: "script.js", content: "// 1) const colors = [three strings]\n\n// 2) push a fourth\n\n// 3) log the first color and the length\n" }
      ],
      hints: [
        "`const colors = [\"red\", \"green\", \"blue\"];` — const is fine: push changes the CONTENTS, not the binding.",
        "First item: `colors[0]`. Length: `colors.length`."
      ],
      solution: {
        "script.js": "const colors = [\"red\", \"green\", \"blue\"];\n\ncolors.push(\"purple\");\n\nconsole.log(colors[0]);\nconsole.log(colors.length);\n"
      }
    },

    {
      id: "js-arr-2",
      title: "map & filter",
      kind: "js", chip: "JS", xp: 15,
      brief: "Loops work, but pros reach for **array methods**:\n\n- `.map(fn)` — transform every item → new array, same length\n- `.filter(fn)` — keep items where `fn` returns true → new (possibly shorter) array\n\nBoth take a function — usually a tiny arrow — and **don't touch the original**.",
      steps: [
        { text: "Use `.map` to make `doubled` — every number times 2.",
          test: "T.eq(doubled, [2, 10, 16, 22, 6], 'doubled should be nums.map(n => n * 2)');" },
        { text: "Use `.filter` to make `bigOnes` — only numbers **greater than 5**.",
          test: "T.eq(bigOnes, [8, 11], 'bigOnes should be nums.filter(n => n > 5)');" },
        { text: "Confirm `nums` itself is unchanged, and log both new arrays.",
          test: "T.eq(nums, [1, 5, 8, 11, 3], 'Don\\'t modify nums — map and filter return NEW arrays.');\nT.expect(T.logged('2,10,16,22,6') || T.logged('[2, 10, 16, 22, 6]') || (T.logged('2') && T.logged('22')), 'console.log(doubled) and console.log(bigOnes);');" }
      ],
      files: [
        { name: "script.js", content: "const nums = [1, 5, 8, 11, 3];\n\n// 1) const doubled = nums.map(...)\n\n// 2) const bigOnes = nums.filter(...)\n\n// 3) log them\n" }
      ],
      hints: [
        "`const doubled = nums.map(n => n * 2);` — the arrow runs once per item.",
        "`const bigOnes = nums.filter(n => n > 5);` — filter keeps items whose test is true."
      ],
      solution: {
        "script.js": "const nums = [1, 5, 8, 11, 3];\n\nconst doubled = nums.map(n => n * 2);\n\nconst bigOnes = nums.filter(n => n > 5);\n\nconsole.log(doubled);\nconsole.log(bigOnes);\n"
      }
    },

    {
      id: "js-arr-3",
      title: "Objects",
      kind: "js", chip: "JS", xp: 15,
      brief: "Arrays are lists; **objects** are labeled boxes — `key: value` pairs describing one thing:\n\nAccess with dots (`profile.username`), update the same way, and add brand-new keys just by assigning them.",
      example: { lang: "js", code: "const profile = {\n  username: \"ada\",\n  level: 3\n};\nprofile.level = 4;        // update\nprofile.city = \"London\";  // add" },
      steps: [
        { text: "Create `profile` with a string `username`, a number `level`, and a boolean `isOnline`.",
          test: "T.expect(profile && typeof profile === 'object' && !Array.isArray(profile), 'Declare const profile = { … } as an object.');\nT.expect(typeof profile.username === 'string', 'profile.username should be a string.');\nT.expect(typeof profile.level === 'number', 'profile.level should be a number.');\nT.expect(typeof profile.isOnline === 'boolean', 'profile.isOnline should be true or false.');" },
        { text: "Level up! Increase `profile.level` by 1 (use `+= 1` or `++`, not a rewrite).",
          test: "T.expect(typeof leveledFrom === 'number' && profile.level === leveledFrom + 1, 'After creating profile, do profile.level += 1;');" },
        { text: "Add a **new** key `city` after creation.",
          test: "T.expect(typeof profile.city === 'string' && profile.city.length > 0, 'Assign profile.city = \"…\" AFTER the object is created.');" }
      ],
      files: [
        { name: "script.js", content: "// 1) const profile = { username, level, isOnline }\n\n\n// (leave this line — it remembers your starting level for the checker)\nconst leveledFrom = typeof profile !== 'undefined' ? profile.level : 0;\n\n// 2) level up by 1\n\n// 3) add profile.city\n\nconsole.log(profile);\n" }
      ],
      hints: [
        "Object shape: `const profile = { username: \"ada\", level: 3, isOnline: true };`",
        "Updating: `profile.level += 1;` — adding: `profile.city = \"Lisbon\";`"
      ],
      solution: {
        "script.js": "const profile = {\n  username: \"ada\",\n  level: 3,\n  isOnline: true\n};\n\n// (leave this line — it remembers your starting level for the checker)\nconst leveledFrom = typeof profile !== 'undefined' ? profile.level : 0;\n\nprofile.level += 1;\n\nprofile.city = \"Lisbon\";\n\nconsole.log(profile);\n"
      }
    },

    {
      id: "js-arr-4",
      title: "Arrays of objects",
      kind: "js", chip: "JS", xp: 15,
      brief: "Here's the data shape you'll meet in every real app, API and database: an **array of objects**.\n\nEverything you know composes: `.filter` objects by a property, `.map` out a single field, chain them together.",
      steps: [
        { text: "Write `countDone(list)` — how many todos have `done: true`.",
          test: "T.expect(typeof countDone === 'function', 'Define function countDone(list) { … }');\nT.eq(countDone(todos), 2, 'countDone(todos) with the starter data');\nT.eq(countDone([]), 0, 'countDone([]) — an empty list has zero done');\nT.eq(countDone([{ text: 'x', done: true }]), 1, 'countDone with one finished todo');" },
        { text: "Write `titles(list)` — an array of just the `text` values.",
          test: "T.expect(typeof titles === 'function', 'Define function titles(list) { … }');\nT.eq(titles(todos), ['learn arrays', 'master objects', 'build the app'], 'titles(todos)');\nT.eq(titles([{ text: 'solo', done: false }]), ['solo'], 'titles with a single todo');" },
        { text: "Log how many are done, using your function.",
          test: "T.expect(T.logged('2'), 'console.log(countDone(todos));');" }
      ],
      files: [
        { name: "script.js", content: "const todos = [\n  { text: \"learn arrays\", done: true },\n  { text: \"master objects\", done: true },\n  { text: \"build the app\", done: false }\n];\n\n// 1) function countDone(list) → number of done todos\n\n// 2) function titles(list) → array of the text values\n\n// 3) log countDone(todos)\n" }
      ],
      hints: [
        "Filter then count: `list.filter(t => t.done).length`",
        "Map out one field: `list.map(t => t.text)`",
        "Work on the PARAMETER `list`, not directly on `todos` — that's what makes the function reusable."
      ],
      solution: {
        "script.js": "const todos = [\n  { text: \"learn arrays\", done: true },\n  { text: \"master objects\", done: true },\n  { text: \"build the app\", done: false }\n];\n\nfunction countDone(list) {\n  return list.filter(t => t.done).length;\n}\n\nfunction titles(list) {\n  return list.map(t => t.text);\n}\n\nconsole.log(countDone(todos));\n"
      }
    },

    {
      id: "js-arr-5",
      title: "reduce & find",
      kind: "js", chip: "JS", xp: 15,
      brief: "Two more power tools:\n\n- `.reduce((acc, item) => …, start)` — boil a whole array down to **one value** (a total, a max, anything)\n- `.find(fn)` — the **first item** that passes the test (or `undefined`)\n\nYou're summing a shopping cart and looking up a product.",
      steps: [
        { text: "Use `.reduce` to compute `cartTotal` — the sum of every item's `price`.",
          test: "T.close(cartTotal, 74, 0.001, 'cartTotal should sum the prices (19 + 49 + 6 = 74)');" },
        { text: "Use `.find` to get `keyboard` — the item whose `id` is `\"kb\"`.",
          test: "T.expect(keyboard && typeof keyboard === 'object', 'Use cart.find(...) to locate the keyboard item.');\nT.eq(keyboard.price, 49, 'keyboard should be the { id: \"kb\" } item object');" },
        { text: "Log the total and the keyboard's price.",
          test: "T.expect(T.logged('74'), 'Log cartTotal.');\nT.expect(T.logged('49'), 'Log keyboard.price.');" }
      ],
      files: [
        { name: "script.js", content: "const cart = [\n  { id: \"mug\", price: 19 },\n  { id: \"kb\",  price: 49 },\n  { id: \"pen\", price: 6 }\n];\n\n// 1) const cartTotal = cart.reduce(...)\n\n// 2) const keyboard = cart.find(...)\n\n// 3) log both\n" }
      ],
      hints: [
        "`cart.reduce((sum, item) => sum + item.price, 0)` — the 0 is the starting value.",
        "`cart.find(item => item.id === \"kb\")` returns the whole object, not just the price."
      ],
      solution: {
        "script.js": "const cart = [\n  { id: \"mug\", price: 19 },\n  { id: \"kb\",  price: 49 },\n  { id: \"pen\", price: 6 }\n];\n\nconst cartTotal = cart.reduce((sum, item) => sum + item.price, 0);\n\nconst keyboard = cart.find(item => item.id === \"kb\");\n\nconsole.log(cartTotal);\nconsole.log(keyboard.price);\n"
      }
    },

    {
      id: "js-quiz-2",
      title: "JavaScript II checkpoint quiz",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What is `colors[0]` here?",
          code: "const colors = [\"red\", \"green\", \"blue\"];",
          lang: "js",
          choices: ["\"red\"", "\"green\"", "0", "An error"],
          answer: 0, explain: "Arrays count from ZERO — index 0 is the first item." },
        { q: "Which method keeps only items that pass a test?",
          choices: ["`.filter()`", "`.map()`", "`.push()`", "`.length()`"],
          answer: 0, explain: "filter keeps passers; map transforms everything; push appends." },
        { q: "What does this evaluate to?",
          code: "[1, 2, 3].map(n => n * 10)",
          lang: "js",
          choices: ["[10, 20, 30]", "[1, 2, 3, 10]", "60", "[10]"],
          answer: 0, explain: "map runs the arrow on every item and collects the results in a new array." },
        { q: "How do you read the username?",
          code: "const profile = { username: \"ada\", level: 3 };",
          lang: "js",
          choices: ["profile.username", "profile[username]", "profile->username", "username.profile"],
          answer: 0, explain: "Dot notation. (profile[\"username\"] with QUOTES also works — but profile[username] without them looks for a variable.)" },
        { q: "What single value does this produce?",
          code: "[5, 10, 20].reduce((sum, n) => sum + n, 0)",
          lang: "js",
          choices: ["35", "[5, 10, 20]", "0", "20"],
          answer: 0, explain: "reduce folds the array into one value: 0+5 → 5+10 → 15+20 → 35." },
        { q: "`.find(t => t.done)` on an array of todos returns…",
          choices: ["The first todo object where done is true (or undefined)", "All done todos", "true/false", "The number of done todos"],
          answer: 0, explain: "find = first match, whole item. filter = all matches. some = true/false." }
      ]
    },

    {
      id: "js-project-2",
      title: "Project: Inventory manager",
      kind: "js", chip: "JS", xp: 40, project: true,
      brief: "You're building the stock system for a tiny game shop. 🎮 The inventory is an array of objects; you'll write the four functions every inventory (and honestly, every API) needs.\n\nEach function takes the inventory as its **first parameter** so it works on any list — that habit will pay off in the back-end unit.",
      steps: [
        { text: "`addItem(inv, itemName, qty)` — push `{ itemName, qty }` onto the list and return the list.",
          test: "T.expect(typeof addItem === 'function', 'Define addItem(inv, itemName, qty).');\nvar inv2 = [];\naddItem(inv2, 'potion', 3);\nT.eq(inv2, [{ itemName: 'potion', qty: 3 }], 'addItem should push { itemName, qty } onto the array');\nT.eq(addItem([], 'elixir', 1), [{ itemName: 'elixir', qty: 1 }], 'addItem should also RETURN the list');" },
        { text: "`findItem(inv, itemName)` — return the matching item object (or `undefined`).",
          test: "T.expect(typeof findItem === 'function', 'Define findItem(inv, itemName).');\nvar inv3 = [{ itemName: 'sword', qty: 1 }, { itemName: 'shield', qty: 2 }];\nT.eq(findItem(inv3, 'shield'), { itemName: 'shield', qty: 2 }, 'findItem(inv, \"shield\")');\nT.eq(findItem(inv3, 'wand'), undefined, 'Missing items should give undefined');" },
        { text: "`totalUnits(inv)` — sum of all `qty` values.",
          test: "T.expect(typeof totalUnits === 'function', 'Define totalUnits(inv).');\nvar inv4 = [{ itemName: 'a', qty: 2 }, { itemName: 'b', qty: 5 }, { itemName: 'c', qty: 0 }];\nT.eq(totalUnits(inv4), 7, 'totalUnits should add every qty');\nT.eq(totalUnits([]), 0, 'An empty inventory has 0 units');" },
        { text: "`inStock(inv)` — array of items whose `qty` is above 0.",
          test: "T.expect(typeof inStock === 'function', 'Define inStock(inv).');\nvar inv5 = [{ itemName: 'a', qty: 2 }, { itemName: 'b', qty: 0 }];\nT.eq(inStock(inv5), [{ itemName: 'a', qty: 2 }], 'inStock should filter out qty 0');" },
        { text: "Use your functions on the starter `shop`: add \"health potion\" ×5, then log the total units.",
          test: "T.expect(findItem(shop, 'health potion') && findItem(shop, 'health potion').qty === 5, 'addItem(shop, \"health potion\", 5);');\nT.expect(T.logged(String(totalUnits(shop))), 'console.log(totalUnits(shop));');" }
      ],
      files: [
        { name: "script.js", content: "const shop = [\n  { itemName: \"sword\", qty: 2 },\n  { itemName: \"shield\", qty: 1 }\n];\n\n// 1) addItem(inv, itemName, qty) → push { itemName, qty }, return inv\n\n// 2) findItem(inv, itemName) → the item object or undefined\n\n// 3) totalUnits(inv) → sum of qty\n\n// 4) inStock(inv) → only items with qty > 0\n\n// 5) add \"health potion\" x5 to shop, then log totalUnits(shop)\n" }
      ],
      hints: [
        "addItem: `inv.push({ itemName: itemName, qty: qty }); return inv;` — or the shorthand `{ itemName, qty }`.",
        "findItem: `inv.find(i => i.itemName === itemName)`",
        "totalUnits: `inv.reduce((sum, i) => sum + i.qty, 0)` · inStock: `inv.filter(i => i.qty > 0)`"
      ],
      solution: {
        "script.js": "const shop = [\n  { itemName: \"sword\", qty: 2 },\n  { itemName: \"shield\", qty: 1 }\n];\n\nfunction addItem(inv, itemName, qty) {\n  inv.push({ itemName: itemName, qty: qty });\n  return inv;\n}\n\nfunction findItem(inv, itemName) {\n  return inv.find(i => i.itemName === itemName);\n}\n\nfunction totalUnits(inv) {\n  return inv.reduce((sum, i) => sum + i.qty, 0);\n}\n\nfunction inStock(inv) {\n  return inv.filter(i => i.qty > 0);\n}\n\naddItem(shop, \"health potion\", 5);\nconsole.log(totalUnits(shop));\n"
      }
    }
  ]
});
