/* Building Interactive Websites — Unit 6: Data → DOM: the render loop */
window.CODELAB.addUnit("dom", {
  id: "dom-u6",
  title: "Data → DOM: the render loop",
  icon: "📋",
  blurb: "Keep your data in an array, redraw the page from it — the pattern inside every real list UI.",
  cheat: [
    { h: "State is the source of truth", lang: "js", code: "let todos = [\"Milk\", \"Bread\"];\n// change the DATA…\ntodos.push(\"Eggs\");\n// …then redraw the picture:\nrender();", note: "Never hand-edit the DOM in ten places — edit the array once and re-render." },
    { h: "The render() pattern", lang: "js", code: "function render() {\n  list.innerHTML = \"\";           // wipe\n  for (const item of items) {    // rebuild from state\n    const li = document.createElement(\"li\");\n    li.textContent = item;\n    list.appendChild(li);\n  }\n}" },
    { h: "Remove by id (delegation + filter)", lang: "js", code: "list.addEventListener(\"click\", (e) => {\n  const btn = e.target.closest(\".remove\");\n  if (!btn) return;\n  const id = Number(btn.closest(\"li\").dataset.id);\n  todos = todos.filter((t) => t.id !== id);\n  render();\n});", note: "dataset values are STRINGS — Number(...) before comparing to numeric ids." },
    { h: "Filter the view, not the state", lang: "js", code: "const query = searchInput.value.toLowerCase();\nfor (const item of items) {\n  if (item.toLowerCase().indexOf(query) === -1) continue;\n  // …render only the matches; items[] keeps everything\n}" },
    { h: "Sort a copy", lang: "js", code: "const view = [...items];   // copy first — .sort() mutates!\nview.sort((a, b) => a.name.localeCompare(b.name)); // A–Z\nview.sort((a, b) => a.price - b.price);            // cheap → pricey" }
  ],
  lessons: [

    {
      id: "dom-u6-1",
      title: "State → render",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "Every real list UI — inbox, cart, playlist — runs on one pattern: **the data is the source of truth**, and the DOM is just a picture of it.\n\n- keep your items in an array (`todos`)\n- write ONE function, `render()`, that wipes the container and rebuilds it from the array\n- whenever anything changes: change the array, then call `render()`\n\nNo more hand-editing the DOM in ten different places. One array in, one honest redraw out. This tiny idea is the beating heart of React and Vue — you're learning it in vanilla JS first.",
      steps: [
        { text: "Write `render()`: clear `#list` with `innerHTML = \"\"`, then build one `<li>` per todo. Call it once so the page starts full.",
          test: "T.expect(typeof render === 'function', 'Define a render() function.');\nT.eq(T.count('#list li'), 3, 'Call render() once at the bottom of the file — 3 todos should become 3 <li> elements.');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('water plants') !== -1 && txt.indexOf('send invoice') !== -1, 'Each li should show its todo text via textContent.');" },
        { text: "Prove it re-renders: when the array grows, calling `render()` again must redraw the whole picture.",
          test: "todos.push('Call grandma');\nrender();\nT.eq(T.count('#list li'), 4, 'The state now has 4 todos, so render() should draw 4 items — rebuild from the array every time.');\nT.expect((T.text('#list') || '').toLowerCase().indexOf('call grandma') !== -1, 'The new todo should appear in the list after render().');" },
        { text: "No duplicates allowed: calling `render()` twice in a row must not double the list.",
          test: "render();\nrender();\nT.eq(T.count('#list li'), 4, 'Two render() calls in a row must not duplicate items — make list.innerHTML = \"\" the FIRST line of render().');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Today's todos</h1>\n  <ul id=\"list\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const todos = [\"Water plants\", \"Send invoice\", \"Pack lunch\"];\nconst list = document.querySelector(\"#list\");\n\n// 1) write render():\n//    - FIRST line: list.innerHTML = \"\"  (wipe the old picture)\n//    - then: one <li> per todo (createElement, textContent, appendChild)\n\n// 2) call render() once at the bottom so the page starts full\n" }
      ],
      hints: [
        "render() is Unit 1's create-and-append loop with one new first line: `list.innerHTML = \"\";`.",
        "Skeleton: `function render() { list.innerHTML = \"\"; for (const todo of todos) { const li = document.createElement(\"li\"); li.textContent = todo; list.appendChild(li); } }` — then `render();` at the bottom."
      ],
      solution: {
        "script.js": "const todos = [\"Water plants\", \"Send invoice\", \"Pack lunch\"];\nconst list = document.querySelector(\"#list\");\n\nfunction render() {\n  list.innerHTML = \"\";\n  for (const todo of todos) {\n    const li = document.createElement(\"li\");\n    li.textContent = todo;\n    list.appendChild(li);\n  }\n}\n\nrender();\n"
      }
    },

    {
      id: "dom-u6-2",
      title: "Add & remove by id",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "Time to make the list *live*. Two rules keep it sane:\n\n- **State first.** Add and remove in the `todos` array, THEN call `render()`.\n- **Ids, not positions.** Every item carries a unique `id`, stamped onto its `<li>` as `data-id`, so the ✕ button knows exactly which one to kill.\n\nOne delegated click listener on the `<ul>` handles every ✕ — even on items added later. The classic gotcha: `dataset.id` comes back as a **string**, so `Number(...)` it before comparing with your numeric ids. Keep the `todoCount()` helper — the checks call it.",
      steps: [
        { text: "In `render()`, stamp each `<li>` with `data-id` and give it a ✕ button with class `remove`.",
          test: "T.eq(T.count('#list li'), 2, 'render() should draw the 2 starter todos.');\nvar first = T.$$('#list li')[0];\nT.expect(first && first.dataset.id === '1', 'Stamp each li with its id: li.dataset.id = todo.id (it becomes data-id in the HTML).');\nT.eq(T.count('#list li .remove'), 2, 'Give every li a ✕ button with class \"remove\".');" },
        { text: "Adding: on form submit, push `{ id: nextId, text }` into the array (state first!), bump `nextId`, clear the input, render.",
          test: "T.type('#todoInput', 'Pack lunch');\nT.submit('#addForm');\nT.eq(todoCount(), 3, 'On submit: preventDefault, push { id: nextId, text: todoInput.value } into todos, then nextId++ — STATE first.');\nT.eq(T.count('#list li'), 3, 'Then call render() — the DOM should now show 3 items.');\nT.expect((T.text('#list') || '').toLowerCase().indexOf('pack lunch') !== -1, 'The new todo text should appear in the list.');\nT.eq(T.val('#todoInput'), '', 'Clear the input after adding.');" },
        { text: "Removing: one delegated click listener on `#list` — a ✕ click filters that id out of the array, then renders.",
          test: "T.click('#list li[data-id=\"1\"] .remove');\nT.eq(todoCount(), 2, 'Clicking ✕ must remove the item from the todos ARRAY — filter by id, and Number(...) the dataset value first (dataset gives strings!).');\nT.eq(T.count('#list li'), 2, 'Then render() — the page should show 2 items again.');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('water plants') === -1, 'Water plants (id 1) should be gone.');\nT.expect(txt.indexOf('send invoice') !== -1 && txt.indexOf('pack lunch') !== -1, 'Only the clicked item disappears — the rest survive.');" },
        { text: "The payoff: items added AFTER load can be removed too — that's why the listener lives on the `<ul>`.",
          test: "T.type('#todoInput', 'Stretch');\nT.submit('#addForm');\nT.eq(todoCount(), 3, 'Add one more via the form (it gets id 4).');\nT.click('#list li[data-id=\"4\"] .remove');\nT.eq(todoCount(), 2, 'The brand-new item must be removable too — one listener on the parent handles items that did not exist at load.');\nT.expect((T.text('#list') || '').toLowerCase().indexOf('stretch') === -1, 'Stretch should be gone again.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Todo list — live</h1>\n  <form id=\"addForm\">\n    <input id=\"todoInput\" placeholder=\"Add a todo…\">\n    <button type=\"submit\">Add</button>\n  </form>\n  <ul id=\"list\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\nli {\n  margin: 6px 0;\n}\n.remove {\n  border: none;\n  background: #fee2e2;\n  color: #b91c1c;\n  border-radius: 6px;\n  padding: 2px 8px;\n  cursor: pointer;\n}\n" },
        { name: "script.js", content: "const addForm = document.querySelector(\"#addForm\");\nconst todoInput = document.querySelector(\"#todoInput\");\nconst list = document.querySelector(\"#list\");\n\nlet todos = [\n  { id: 1, text: \"Water plants\" },\n  { id: 2, text: \"Send invoice\" }\n];\nlet nextId = 3;\n\n// used by the checks — leave it in\nfunction todoCount() {\n  return todos.length;\n}\n\nfunction render() {\n  list.innerHTML = \"\";\n  for (const todo of todos) {\n    const li = document.createElement(\"li\");\n    // 1) stamp the id: li.dataset.id = todo.id\n    li.textContent = todo.text + \" \";\n    // 1) create a button: className \"remove\", textContent \"✕\", append it to li\n    list.appendChild(li);\n  }\n}\n\n// 2) submit on #addForm: preventDefault, push { id: nextId, text: todoInput.value },\n//    nextId++, clear the input, render()\n\n// 3) ONE click listener on #list: if e.target.closest(\".remove\"),\n//    id = Number of the closest li's dataset.id, filter todos, render()\n\nrender();\n" }
      ],
      hints: [
        "Inside render's loop: `li.dataset.id = todo.id;` then `const btn = document.createElement(\"button\"); btn.className = \"remove\"; btn.textContent = \"✕\"; li.appendChild(btn);`",
        "Submit handler: `e.preventDefault(); todos.push({ id: nextId, text: todoInput.value }); nextId++; todoInput.value = \"\"; render();`",
        "Delegated remove: `list.addEventListener(\"click\", (e) => { const btn = e.target.closest(\".remove\"); if (!btn) return; const id = Number(btn.closest(\"li\").dataset.id); todos = todos.filter((t) => t.id !== id); render(); });`"
      ],
      solution: {
        "script.js": "const addForm = document.querySelector(\"#addForm\");\nconst todoInput = document.querySelector(\"#todoInput\");\nconst list = document.querySelector(\"#list\");\n\nlet todos = [\n  { id: 1, text: \"Water plants\" },\n  { id: 2, text: \"Send invoice\" }\n];\nlet nextId = 3;\n\n// used by the checks — leave it in\nfunction todoCount() {\n  return todos.length;\n}\n\nfunction render() {\n  list.innerHTML = \"\";\n  for (const todo of todos) {\n    const li = document.createElement(\"li\");\n    li.dataset.id = todo.id;\n    li.textContent = todo.text + \" \";\n    const btn = document.createElement(\"button\");\n    btn.className = \"remove\";\n    btn.textContent = \"✕\";\n    li.appendChild(btn);\n    list.appendChild(li);\n  }\n}\n\naddForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = todoInput.value.trim();\n  if (!text) return;\n  todos.push({ id: nextId, text: text });\n  nextId++;\n  todoInput.value = \"\";\n  render();\n});\n\nlist.addEventListener(\"click\", (e) => {\n  const btn = e.target.closest(\".remove\");\n  if (!btn) return;\n  const id = Number(btn.closest(\"li\").dataset.id);\n  todos = todos.filter((t) => t.id !== id);\n  render();\n});\n\nrender();\n"
      }
    },

    {
      id: "dom-u6-3",
      title: "Filter & search",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Search-as-you-type looks fancy, but with `render()` in hand it's three lines: on every `input` event, re-render; inside `render()`, skip items that don't contain the query.\n\nThe golden rule: **filter the view, never the state**. The `items` array keeps all 5 groceries the whole time — you just choose which ones to *draw*. Lowercase BOTH sides (`item.toLowerCase()`, `query.toLowerCase()`) so \"EA\" still finds Bread.\n\nDeleting data to filter it is the classic beginner trap: clear the box and… everything's gone forever. Not on our watch.",
      steps: [
        { text: "At load (empty search box), `render()` draws all 5 groceries.",
          test: "T.eq(T.count('#list li'), 5, 'render() should draw all 5 items at load — an empty query matches everything (indexOf of \"\" is 0).');" },
        { text: "Typing filters: re-render on every `input` event, skipping items that don't contain the query.",
          test: "T.type('#search', 'mil');\nT.eq(T.count('#list li'), 1, 'Typing \"mil\" should leave only Milk — inside render, skip items whose lowercase text does not contain the query, and re-render on the input event.');\nT.expect((T.text('#list') || '').toLowerCase().indexOf('milk') !== -1, 'The one survivor should be Milk.');" },
        { text: "Make it case-insensitive: \"EA\" (capitals!) should still find Bread and Cereal.",
          test: "T.type('#search', 'EA');\nT.eq(T.count('#list li'), 2, 'Searching \"EA\" should match Bread and Cereal — lowercase BOTH the item and the query before comparing.');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('bread') !== -1 && txt.indexOf('cereal') !== -1, 'Bread and Cereal both contain \"ea\".');" },
        { text: "Clearing the box brings everything back — because the array never changed.",
          test: "T.type('#search', '');\nT.eq(T.count('#list li'), 5, 'Clearing the search should restore all 5 — you filtered what you RENDER, not the data.');\nT.eq(items.length, 5, 'The items array must still hold all 5 groceries — never delete state to filter a view.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Pantry search</h1>\n  <input id=\"search\" placeholder=\"Search groceries…\">\n  <ul id=\"list\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const items = [\"Milk\", \"Bread\", \"Eggs\", \"Limes\", \"Cereal\"];\nconst searchInput = document.querySelector(\"#search\");\nconst list = document.querySelector(\"#list\");\n\nfunction render() {\n  list.innerHTML = \"\";\n  // 1) const query = searchInput.value.toLowerCase();\n  // 2) in the loop: skip items whose lowercase text does NOT contain query\n  for (const item of items) {\n    const li = document.createElement(\"li\");\n    li.textContent = item;\n    list.appendChild(li);\n  }\n}\n\n// 3) re-render on every keystroke: listen for \"input\" on searchInput\n\nrender();\n" }
      ],
      hints: [
        "First line inside render (after the wipe): `const query = searchInput.value.toLowerCase();`",
        "In the loop: `if (item.toLowerCase().indexOf(query) === -1) continue;` — an empty query matches everything, so load and clear both just work.",
        "Wire it up: `searchInput.addEventListener(\"input\", render);` — pass the function itself, no parentheses."
      ],
      solution: {
        "script.js": "const items = [\"Milk\", \"Bread\", \"Eggs\", \"Limes\", \"Cereal\"];\nconst searchInput = document.querySelector(\"#search\");\nconst list = document.querySelector(\"#list\");\n\nfunction render() {\n  list.innerHTML = \"\";\n  const query = searchInput.value.toLowerCase();\n  for (const item of items) {\n    if (item.toLowerCase().indexOf(query) === -1) continue;\n    const li = document.createElement(\"li\");\n    li.textContent = item;\n    list.appendChild(li);\n  }\n}\n\nsearchInput.addEventListener(\"input\", render);\n\nrender();\n"
      }
    },

    {
      id: "dom-u6-4",
      title: "Sort & stats",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Two finishing touches every product list needs: **sorting** and a **stats line**.\n\n- `.sort()` MUTATES the array it's called on — that's the trap. So copy first: `[...products]` and sort the copy. Your view reorders; your state stays pristine.\n- A–Z: `(a, b) => a.name.localeCompare(b.name)` · by price: `(a, b) => a.price - b.price`\n- Stats come from the ARRAY, not the DOM: count the items, total the prices.\n\nA `sortMode` variable remembers the current order. It's state too — render reads it and draws accordingly.",
      steps: [
        { text: "`render()` draws all 3 products and fills `#stats` with `\"3 items · $31 total\"` (count and total computed from the array).",
          test: "T.eq(T.count('#list li'), 3, 'render() should draw all 3 products.');\nvar s = (T.text('#stats') || '');\nT.expect(s.indexOf('3 items') !== -1, 'The #stats line should include \"3 items\" — use products.length.');\nT.expect(s.indexOf('$31') !== -1, 'Total the prices in render(): 4 + 25 + 2 = $31.');" },
        { text: "`#sortAz` re-renders alphabetically — sort a COPY of the array by name.",
          test: "T.click('#sortAz');\nvar lis = T.$$('#list li');\nT.expect(lis[0] && lis[0].textContent.indexOf('Backpack') !== -1, 'After A\\u2013Z, Backpack comes first — set sortMode, then sort a COPY in render: [...products].sort((a, b) => a.name.localeCompare(b.name)).');\nT.expect(lis[2] && lis[2].textContent.indexOf('Notebook') !== -1, 'A\\u2013Z order is Backpack, Marker, Notebook.');" },
        { text: "`#sortPrice` re-renders cheapest-first — and the stats line never changes.",
          test: "T.click('#sortPrice');\nvar lis = T.$$('#list li');\nT.expect(lis[0] && lis[0].textContent.indexOf('Marker') !== -1, 'Cheapest first: Marker ($2) leads — sort the copy with (a, b) => a.price - b.price.');\nT.expect(lis[2] && lis[2].textContent.indexOf('Backpack') !== -1, 'Backpack ($25) goes last.');\nT.expect((T.text('#stats') || '').indexOf('$31') !== -1, 'Sorting must never change the stats — same 3 items, same $31.');" },
        { text: "Proof you sorted a copy: the state array is still in its original order.",
          test: "T.eq(products[0].name, 'Notebook', 'products[0] must still be Notebook — sort a COPY ([...products]), never the state array itself.');\nT.eq(products.length, 3, 'All 3 products still live in state.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Tiny shop</h1>\n  <p>\n    <button id=\"sortAz\">Sort A–Z</button>\n    <button id=\"sortPrice\">Sort by price</button>\n  </p>\n  <p id=\"stats\"></p>\n  <ul id=\"list\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\nbutton {\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n#stats {\n  font-weight: bold;\n  color: #334155;\n}\n" },
        { name: "script.js", content: "const products = [\n  { name: \"Notebook\", price: 4 },\n  { name: \"Backpack\", price: 25 },\n  { name: \"Marker\", price: 2 }\n];\nconst list = document.querySelector(\"#list\");\nconst statsEl = document.querySelector(\"#stats\");\n\nlet sortMode = \"none\"; // \"none\" | \"az\" | \"price\"\n\nfunction render() {\n  list.innerHTML = \"\";\n  // 1) copy first: const view = [...products];\n  //    sortMode \"az\"    -> sort view by name (localeCompare)\n  //    sortMode \"price\" -> sort view by price (a.price - b.price)\n  // 2) one <li> per product, e.g. `${p.name} — $${p.price}` — loop over view!\n  // 3) stats from STATE: `${products.length} items · $${total} total`\n}\n\n// 4) #sortAz: sortMode = \"az\", render()   ·   #sortPrice: sortMode = \"price\", render()\n\nrender();\n" }
      ],
      hints: [
        "Copy, then maybe sort: `const view = [...products]; if (sortMode === \"az\") view.sort((a, b) => a.name.localeCompare(b.name)); if (sortMode === \"price\") view.sort((a, b) => a.price - b.price);` — then loop over `view`, not `products`.",
        "Stats is the accumulator pattern: `let total = 0; for (const p of products) total += p.price;` — then set statsEl.textContent with a template literal: `${products.length} items · $${total} total`.",
        "Each button is two lines: `document.querySelector(\"#sortAz\").addEventListener(\"click\", () => { sortMode = \"az\"; render(); });` — same for #sortPrice with \"price\"."
      ],
      solution: {
        "script.js": "const products = [\n  { name: \"Notebook\", price: 4 },\n  { name: \"Backpack\", price: 25 },\n  { name: \"Marker\", price: 2 }\n];\nconst list = document.querySelector(\"#list\");\nconst statsEl = document.querySelector(\"#stats\");\n\nlet sortMode = \"none\"; // \"none\" | \"az\" | \"price\"\n\nfunction render() {\n  list.innerHTML = \"\";\n\n  const view = [...products];\n  if (sortMode === \"az\") {\n    view.sort((a, b) => a.name.localeCompare(b.name));\n  } else if (sortMode === \"price\") {\n    view.sort((a, b) => a.price - b.price);\n  }\n\n  for (const p of view) {\n    const li = document.createElement(\"li\");\n    li.textContent = `${p.name} — $${p.price}`;\n    list.appendChild(li);\n  }\n\n  let total = 0;\n  for (const p of products) {\n    total += p.price;\n  }\n  statsEl.textContent = `${products.length} items · $${total} total`;\n}\n\ndocument.querySelector(\"#sortAz\").addEventListener(\"click\", () => {\n  sortMode = \"az\";\n  render();\n});\n\ndocument.querySelector(\"#sortPrice\").addEventListener(\"click\", () => {\n  sortMode = \"price\";\n  render();\n});\n\nrender();\n"
      }
    },

    {
      id: "dom-quiz-6",
      title: "Unit 6 quiz: Rendering data",
      kind: "quiz", xp: 10,
      questions: [
        { q: "In the render-loop pattern, what is the single source of truth?",
          choices: ["The <li> elements currently on the page", "Whatever the user last clicked", "The JavaScript array (the state)", "The HTML file on disk"],
          answer: 2, explain: "The array is the truth; the DOM is just a picture of it. Change the array, call render(), and the picture catches up." },
        { q: "What should render() usually do FIRST?",
          choices: ["Sort the state array in place first", "Clear the container: list.innerHTML = \"\"", "Re-attach every event listener", "Save the current state to localStorage"],
          answer: 1, explain: "Wipe, then rebuild from the array. Skip the wipe and every render() call appends a fresh set of rows on top of the last ones — that is the classic \"my list keeps growing\" bug." },
        { q: "Nothing ever gets removed. Why?",
          code: "const id = li.dataset.id;          // li is <li data-id=\"2\">\ntodos = todos.filter((t) => t.id !== id);  // t.id is the number 2\nrender();",
          lang: "js",
          choices: ["filter() cannot shrink an array", "You must use a for loop and splice() to remove items", "render() runs first and undoes the change", "dataset.id is the STRING \"2\", not the number 2"],
          answer: 3, explain: "dataset values are always strings, and 2 !== \"2\" under strict comparison — so t.id !== id stays true even for the item you clicked, and filter() keeps everything. Convert first: Number(li.dataset.id)." },
        { q: "You type \"mil\" in a search box and only Milk stays visible. In a well-built filter, what actually changed?",
          choices: ["The items array — the others were deleted", "Only what render() drew on the page", "The CSS file, which now hides them", "The HTML source stored on the server"],
          answer: 1, explain: "Filter the view, never the state. render() walks the whole array and only draws the rows that match the query, so the array still holds every item — which is exactly why clearing the search box brings them all back instantly." },
        { q: "This sorts the list… and quietly breaks something. What?",
          code: "products.sort((a, b) => a.price - b.price);\nrender();",
          lang: "js",
          choices: ["It sorts descending instead of ascending", "sort() ignores the comparator you pass it", "sort() MUTATES — your state array is reordered", "Numbers must be compared with <, not minus"],
          answer: 2, explain: "sort() rearranges the array in place and hands back that same array, so your state's original order is gone for good. Sort a copy instead — [...products].sort(...) — and render from the copy." },
        { q: "What does [...products] give you?",
          choices: ["A new array holding the same items", "A deep clone of every object inside it", "A sorted version of the products array", "One long string of all the items joined"],
          answer: 0, explain: "Spread copies the array container — a shallow copy, which is exactly what you want before sorting. The objects inside are the very same objects, still shared with the original, so editing one edits both; a real deep clone takes structuredClone." }
      ]
    }
  ]
});
