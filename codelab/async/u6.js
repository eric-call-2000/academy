/* Async JavaScript & APIs — Unit 6: API projects */
window.CODELAB.addUnit("async", {
  id: "async-u6",
  title: "API projects",
  icon: "🏆",
  blurb: "Ship three real API apps — optimistic saves, a debounced movie search, and a full CRUD bookmarks client.",
  cheat: [
    { h: "Optimistic add + rollback", lang: "js", code: "listEl.appendChild(li);        // show it NOW\nconst res = await fetch(url, opts);\nif (!res.ok) {\n  li.remove();                 // server said no — undo\n  statusEl.textContent = \"Could not save\";\n}", note: "Append before the await, remove in the failure branch. The app feels instant either way." },
    { h: "Debounced search box", lang: "js", code: "let debounceId = null;\ninput.addEventListener(\"input\", () => {\n  clearTimeout(debounceId);\n  debounceId = setTimeout(runFilter, 150);\n});", note: "Every keystroke cancels the previous timer — the filter runs ONCE, after typing pauses." },
    { h: "POST JSON (the full recipe)", lang: "js", code: "const res = await fetch(\"/api/notes\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ text })\n});\nif (res.status === 201) { /* saved! */ }" },
    { h: "State → render()", lang: "js", code: "let bookmarks = [];   // the source of truth\n\nfunction render() {\n  listEl.innerHTML = \"\";\n  for (const b of bookmarks) { /* build DOM */ }\n  countEl.textContent = `${bookmarks.length} bookmarks`;\n}", note: "Never edit the DOM list directly — change the array, call render(). One habit, zero sync bugs." },
    { h: "Client-side filter", lang: "js", code: "const q = input.value.toLowerCase();\nconst shown = allMovies.filter((m) =>\n  m.title.toLowerCase().includes(q)\n);\nrenderMovies(shown);", note: "You already fetched the data — filtering in memory costs 0 ms and 0 requests." }
  ],
  lessons: [

    {
      id: "async-u6-1",
      title: "Optimistic UI",
      kind: "web", chip: "API", xp: 15, mins: 14,
      mock: {
        "POST /api/wishes": { __status: 201, body: { saved: true } },
        "POST /api/doomed": { __status: 400, body: { error: "server had a bad day" } }
      },
      brief: "Tap ❤️ on any social app and the heart fills **instantly** — the server hears about it a beat later. That's **optimistic UI**: update the page *first*, send the request, and only if the server says no do you undo.\n\nThe recipe:\n\n- append the item **before** the `await`\n- `res.ok` → confirm (\"Saved ✓\")\n- failure → `li.remove()` and apologize\n\nYour wishlist has two buttons wired to two endpoints: `POST /api/wishes` answers **201**, `POST /api/doomed` always answers **400**. Same optimistic add for both — only the aftermath differs.",
      steps: [
        { text: "Clicking `#goodBtn` adds an `<li>` with the input's text to `#list` **immediately** — before the server has even answered.",
          test: "T.type('#itemInput', 'ship it');\nT.click('#goodBtn');\nT.eq(T.count('#list li'), 1, 'Append the <li> BEFORE any await — optimistic UI shows the item the instant you click.');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('ship it') !== -1, 'The new <li> should contain the text from #itemInput.');" },
        { text: "A beat later the good server answers **201** — the item stays, and `#statusLine` confirms the save.",
          test: "await T.sleep(250);\nT.eq(T.count('#list li'), 1, 'After a 201 the item simply STAYS — only remove it when the request fails.');\nT.expect((T.text('#statusLine') || '').toLowerCase().indexOf('saved') !== -1, 'When res.ok, set #statusLine to something like \"Saved ✓\".');" },
        { text: "`#doomBtn` does the exact same optimistic add — the item appears instantly too.",
          test: "T.type('#itemInput', 'doomed wish');\nT.click('#doomBtn');\nT.eq(T.count('#list li'), 2, 'Both buttons share the same optimistic add — append first, ask the server second. Wire #doomBtn to addWish(\"/api/doomed\").');" },
        { text: "The doomed server answers **400** — roll the item back out and apologize in `#statusLine`.",
          test: "await T.sleep(250);\nT.eq(T.count('#list li'), 1, 'A 400 means the save FAILED — remove the li you optimistically added (li.remove()).');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('doomed wish') === -1, 'The doomed item must be gone from the list again.');\nT.expect((T.text('#statusLine') || '').toLowerCase().indexOf('sorry') !== -1, 'When !res.ok, apologize — include the word sorry in #statusLine.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Wishlist ✨</h1>\n  <input id=\"itemInput\" placeholder=\"I wish for…\">\n  <button id=\"goodBtn\">Add (good server)</button>\n  <button id=\"doomBtn\">Add (doomed server)</button>\n  <p id=\"statusLine\"></p>\n  <ul id=\"list\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\ninput {\n  font-size: 15px;\n  padding: 8px 10px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n#statusLine {\n  min-height: 20px;\n  color: #64748b;\n}\n#list li {\n  padding: 6px 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n" },
        { name: "script.js", content: "// POST /api/wishes → 201 { saved: true }\n// POST /api/doomed → 400 { error: \"server had a bad day\" }\n\nconst itemInput = document.querySelector(\"#itemInput\");\nconst goodBtn = document.querySelector(\"#goodBtn\");\nconst doomBtn = document.querySelector(\"#doomBtn\");\nconst listEl = document.querySelector(\"#list\");\nconst statusEl = document.querySelector(\"#statusLine\");\n\nasync function addWish(url) {\n  // 1) make an <li> with itemInput.value and append it to listEl NOW\n  //    (before any await — that is the optimistic part)\n  // 2) POST to url: method, Content-Type header, JSON.stringify body\n  // 3) res.ok → statusEl says \"Saved ✓\"\n  //    else   → li.remove() and statusEl apologizes (\"Could not save — sorry!\")\n}\n\n// 4) goodBtn → addWish(\"/api/wishes\"); doomBtn → addWish(\"/api/doomed\")\n" }
      ],
      hints: [
        "Optimistic order inside addWish: build the li, `listEl.appendChild(li)`, THEN `const res = await fetch(url, { ... })`.",
        "The POST recipe: `{ method: \"POST\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify({ text: itemInput.value }) }`.",
        "The rollback is one line in the else branch: `li.remove()` — the li variable is still in scope after the await."
      ],
      solution: {
        "script.js": "// POST /api/wishes → 201 { saved: true }\n// POST /api/doomed → 400 { error: \"server had a bad day\" }\n\nconst itemInput = document.querySelector(\"#itemInput\");\nconst goodBtn = document.querySelector(\"#goodBtn\");\nconst doomBtn = document.querySelector(\"#doomBtn\");\nconst listEl = document.querySelector(\"#list\");\nconst statusEl = document.querySelector(\"#statusLine\");\n\nasync function addWish(url) {\n  const text = itemInput.value;\n  const li = document.createElement(\"li\");\n  li.textContent = text;\n  listEl.appendChild(li); // optimistic: on the page BEFORE the server answers\n  statusEl.textContent = \"Saving…\";\n\n  const res = await fetch(url, {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ text })\n  });\n\n  if (res.ok) {\n    statusEl.textContent = \"Saved ✓\";\n  } else {\n    li.remove(); // roll back\n    statusEl.textContent = \"Could not save — sorry! Try again.\";\n  }\n}\n\ngoodBtn.addEventListener(\"click\", () => addWish(\"/api/wishes\"));\ndoomBtn.addEventListener(\"click\", () => addWish(\"/api/doomed\"));\n"
      }
    },

    {
      id: "async-u6-p1",
      title: "Project: Movie search",
      kind: "web", chip: "API", xp: 50, mins: 35, project: true,
      mock: {
        "/api/movies": [
          { title: "Inception", year: 2010, rating: 8.8 },
          { title: "Spirited Away", year: 2001, rating: 8.6 },
          { title: "The Matrix", year: 1999, rating: 8.7 },
          { title: "Parasite", year: 2019, rating: 8.5 },
          { title: "Interstellar", year: 2014, rating: 8.7 },
          { title: "Coco", year: 2017, rating: 8.4 },
          { title: "The Martian", year: 2015, rating: 8.0 },
          { title: "Arrival", year: 2016, rating: 7.9 }
        ]
      },
      brief: "The most-assigned take-home in frontend interviews: **a searchable list**. You build the whole machine:\n\n- on load, fetch `GET /api/movies` (8 films: `title`, `year`, `rating`) and render a card per movie\n- `#countLine` always tells the truth — \"8 movies\", \"2 movies\"…\n- typing in `#searchBox` filters **client-side** (you already have the data — no refetch!) behind a **150 ms debounce**\n- zero hits shows **No matches**\n\nState first: keep the full array in `allMovies`, compute what to show, and let one `renderMovies(movies)` function do ALL the DOM work.",
      steps: [
        { text: "On load, fetch the movies and render **one `.movie` card per film** into `#results` — Loading… gone, `#countLine` says 8.",
          test: "await T.sleep(500);\nT.eq(T.count('#results .movie'), 8, 'Render 8 div.movie cards into #results — fetch /api/movies, await res.json(), loop, append.');\nT.expect((T.text('#countLine') || '').indexOf('8') !== -1, 'Set #countLine from the array length — something like `8 movies`.');\nT.expect((T.text('#countLine') || '').toLowerCase().indexOf('loading') === -1, 'Replace the Loading… text once the data arrives.');" },
        { text: "Every card shows the **title**, **year** and **rating**.",
          test: "await T.sleep(50);\nvar txt = (T.text('#results') || '').toLowerCase();\nT.expect(txt.indexOf('inception') !== -1 && txt.indexOf('2010') !== -1, 'Each card needs the title and the year — Inception (2010) should be in there.');\nT.expect(txt.indexOf('8.8') !== -1 && txt.indexOf('7.9') !== -1, 'Show the rating too — 8.8 for Inception, 7.9 for Arrival.');" },
        { text: "Typing filters by title (case-insensitive), 150 ms after the last keystroke: searching `the` leaves exactly 2 movies.",
          test: "T.type('#searchBox', 'the');\nawait T.sleep(500);\nT.eq(T.count('#results .movie'), 2, 'In the debounced handler, filter allMovies by m.title.toLowerCase().includes(q) — `the` matches The Matrix and The Martian.');\nvar txt = (T.text('#results') || '').toLowerCase();\nT.expect(txt.indexOf('matrix') !== -1 && txt.indexOf('martian') !== -1 && txt.indexOf('inception') === -1, 'Re-render ONLY the matches — clear #results first (innerHTML = \"\").');\nT.expect((T.text('#countLine') || '').indexOf('2') !== -1, 'The count line follows the filter — 2 movies now.');" },
        { text: "A search with zero hits shows **No matches**, and the count drops to 0.",
          test: "T.type('#searchBox', 'zzz');\nawait T.sleep(500);\nT.eq(T.count('#results .movie'), 0, 'No movie contains zzz — all the movie cards should be gone.');\nvar txt = (T.text('#results') || '').toLowerCase();\nT.expect(txt.indexOf('no matches') !== -1, 'Empty result? Show the message No matches inside #results.');\nT.expect((T.text('#countLine') || '').indexOf('0') !== -1, 'Count line says 0 movies.');" },
        { text: "Clearing the box brings all 8 back.",
          test: "T.type('#searchBox', '');\nawait T.sleep(500);\nT.eq(T.count('#results .movie'), 8, 'An empty query matches everything — all 8 movies return.');\nT.expect((T.text('#countLine') || '').indexOf('8') !== -1, 'And the count line says 8 again.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Movie night 🎬</h1>\n  <input id=\"searchBox\" placeholder=\"Search by title…\">\n  <p id=\"countLine\">Loading…</p>\n  <div id=\"results\"></div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n  padding: 20px;\n}\n#searchBox {\n  font-size: 15px;\n  padding: 8px 12px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n  width: 240px;\n}\n#countLine {\n  color: #64748b;\n}\n.movie {\n  background: white;\n  border-radius: 12px;\n  padding: 12px 16px;\n  margin-bottom: 8px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n.movie h3 {\n  margin: 0 0 4px;\n}\n.movie h3 span {\n  color: #64748b;\n  font-weight: normal;\n}\n.movie p {\n  margin: 0;\n  color: #d97706;\n}\n" },
        { name: "script.js", content: "// GET /api/movies → [{ title, year, rating } x8]\n\nconst searchBox = document.querySelector(\"#searchBox\");\nconst resultsEl = document.querySelector(\"#results\");\nconst countEl = document.querySelector(\"#countLine\");\n\nlet allMovies = [];\nlet debounceId = null;\n\n// 1) renderMovies(movies):\n//    - clear #results (innerHTML = \"\")\n//    - zero movies? append a <p> saying \"No matches\"\n//    - else: one div.movie per film — title, (year), ★ rating\n//    - countEl shows `${movies.length} movies`\n\n// 2) loadMovies(): fetch + parse, save into allMovies, renderMovies(allMovies)\n\n// 3) searchBox \"input\" listener with a 150 ms debounce:\n//    clearTimeout(debounceId);\n//    debounceId = setTimeout(() => { filter allMovies by title, render }, 150)\n\n// 4) call loadMovies()\n" }
      ],
      hints: [
        "The load is the classic two awaits: `const res = await fetch(\"/api/movies\"); allMovies = await res.json();` — then hand the whole array to renderMovies.",
        "The filter: `const q = searchBox.value.toLowerCase(); const shown = allMovies.filter((m) => m.title.toLowerCase().includes(q));` — an empty q matches every title.",
        "Debounce shape: `clearTimeout(debounceId); debounceId = setTimeout(() => { ... }, 150);` — the render call goes INSIDE the setTimeout."
      ],
      solution: {
        "script.js": "// GET /api/movies → [{ title, year, rating } x8]\n\nconst searchBox = document.querySelector(\"#searchBox\");\nconst resultsEl = document.querySelector(\"#results\");\nconst countEl = document.querySelector(\"#countLine\");\n\nlet allMovies = [];\nlet debounceId = null;\n\nfunction renderMovies(movies) {\n  resultsEl.innerHTML = \"\";\n\n  if (movies.length === 0) {\n    const p = document.createElement(\"p\");\n    p.textContent = \"No matches\";\n    resultsEl.appendChild(p);\n  }\n\n  for (const m of movies) {\n    const card = document.createElement(\"div\");\n    card.className = \"movie\";\n    card.innerHTML = `<h3>${m.title} <span>(${m.year})</span></h3><p>★ ${m.rating}</p>`;\n    resultsEl.appendChild(card);\n  }\n\n  countEl.textContent = `${movies.length} movies`;\n}\n\nasync function loadMovies() {\n  const res = await fetch(\"/api/movies\");\n  allMovies = await res.json();\n  renderMovies(allMovies);\n}\n\nsearchBox.addEventListener(\"input\", () => {\n  clearTimeout(debounceId);\n  debounceId = setTimeout(() => {\n    const q = searchBox.value.toLowerCase();\n    const shown = allMovies.filter((m) => m.title.toLowerCase().includes(q));\n    renderMovies(shown);\n  }, 150);\n});\n\nloadMovies();\n"
      }
    },

    {
      id: "async-u6-p2",
      title: "Project: CRUD client",
      kind: "web", chip: "API", xp: 60, mins: 45, project: true,
      mock: {
        "/api/bookmarks": [
          { id: 1, title: "MDN Web Docs", link: "https://developer.mozilla.org" },
          { id: 2, title: "CSS Tricks", link: "https://css-tricks.com" },
          { id: 3, title: "JavaScript.info", link: "https://javascript.info" }
        ],
        "POST /api/bookmarks": { __status: 201, body: { saved: true } },
        "DELETE /api/bookmarks/item": { removed: true }
      },
      brief: "The graduation project: a **bookmarks manager** with the full CRUD loop. The golden rule — **local state is the source of truth**. The `bookmarks` array drives everything; `render()` rebuilds the cards, the count and the empty state from it. The server just gets notified.\n\n- **Read**: seed the array from `GET /api/bookmarks` (3 items)\n- **Create**: the form appends optimistically, then `POST /api/bookmarks` (expect **201**)\n- **Delete**: every card gets a ✕ — drop that bookmark from the array, re-render, fire `DELETE /api/bookmarks/item` (our tiny mock exposes one fixed delete path; the id matters only locally)\n\nDelete everything and the empty state should greet you.",
      steps: [
        { text: "Seed from the API: fetch `GET /api/bookmarks`, store the 3 items in your `bookmarks` array and `render()` — 3 `.bookmark` cards, count says 3.",
          test: "await T.sleep(500);\nT.eq(T.count('#list .bookmark'), 3, 'Fetch /api/bookmarks, save the array into bookmarks, and let render() build one div.bookmark per item.');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('mdn web docs') !== -1 && txt.indexOf('css tricks') !== -1, 'Each card shows the bookmark title.');\nT.expect((T.text('#countLine') || '').indexOf('3') !== -1, 'render() also sets #countLine — something like `3 bookmarks`.');" },
        { text: "Every card shows its **link** and carries a `.del-btn` delete button.",
          test: "await T.sleep(50);\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('css-tricks.com') !== -1 && txt.indexOf('javascript.info') !== -1, 'Show b.link in each card next to the title.');\nT.eq(T.count('#list .bookmark .del-btn'), 3, 'Give every card a button with class del-btn — its click handler comes in step 4.');" },
        { text: "Submitting `#addForm` appends the new bookmark **optimistically** (instantly!), clears both inputs, then POSTs — `#statusLine` confirms the 201.",
          test: "T.type('#titleInput', 'Frontend Masters');\nT.type('#linkInput', 'frontendmasters.com');\nT.submit('#addForm');\nT.eq(T.count('#list .bookmark'), 4, 'Push the new bookmark into the array and render() BEFORE awaiting the POST — and remember e.preventDefault().');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('frontend masters') !== -1, 'The new card shows the title you typed.');\nT.eq(T.val('#titleInput'), '', 'Clear both inputs after adding.');\nawait T.sleep(250);\nT.expect((T.text('#statusLine') || '').toLowerCase().indexOf('saved') !== -1, 'POST /api/bookmarks answers 201 — set #statusLine to something like \"Saved ✓\".');\nT.expect((T.text('#countLine') || '').indexOf('4') !== -1, 'Count line says 4 now.');" },
        { text: "The ✕ works: clicking the first card's delete drops **that** bookmark from the array, re-renders, and fires the DELETE request.",
          test: "T.click('#list .bookmark .del-btn');\nawait T.sleep(250);\nT.eq(T.count('#list .bookmark'), 3, 'Remove the clicked id from the array and render() — bookmarks = bookmarks.filter((b) => b.id !== id).');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('mdn') === -1, 'The FIRST card (MDN Web Docs) was deleted — its card must be gone.');\nT.expect((T.text('#countLine') || '').indexOf('3') !== -1, 'Count line drops back to 3.');" },
        { text: "Delete everything — the list shows an empty-state message and the count reads 0.",
          test: "T.click('#list .bookmark .del-btn');\nawait T.sleep(200);\nT.click('#list .bookmark .del-btn');\nawait T.sleep(200);\nT.click('#list .bookmark .del-btn');\nawait T.sleep(250);\nT.eq(T.count('#list .bookmark'), 0, 'Every delete goes through the same path: update the array, render().');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('no bookmarks') !== -1, 'When bookmarks.length === 0, render() shows a message like \"No bookmarks yet\".');\nT.expect((T.text('#countLine') || '').indexOf('0') !== -1, 'Count line says 0 bookmarks.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Bookmarks 🔖</h1>\n  <form id=\"addForm\">\n    <input id=\"titleInput\" placeholder=\"Title\">\n    <input id=\"linkInput\" placeholder=\"Link\">\n    <button type=\"submit\">Add</button>\n  </form>\n  <p id=\"statusLine\"></p>\n  <p id=\"countLine\">Loading…</p>\n  <div id=\"list\"></div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n  padding: 20px;\n}\ninput {\n  font-size: 15px;\n  padding: 8px 10px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n#statusLine, #countLine {\n  color: #64748b;\n  min-height: 18px;\n}\n.bookmark {\n  background: white;\n  border-radius: 12px;\n  padding: 12px 16px;\n  margin-bottom: 8px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}\n.bookmark span {\n  color: #64748b;\n  font-size: 14px;\n  margin-left: 6px;\n}\n.del-btn {\n  float: right;\n  border-color: #fca5a5;\n  color: #b91c1c;\n}\n" },
        { name: "script.js", content: "// GET    /api/bookmarks      → [{ id, title, link } x3]\n// POST   /api/bookmarks      → 201 { saved: true }\n// DELETE /api/bookmarks/item → { removed: true }   (one fixed path — the id lives in YOUR array)\n\nconst addForm = document.querySelector(\"#addForm\");\nconst titleInput = document.querySelector(\"#titleInput\");\nconst linkInput = document.querySelector(\"#linkInput\");\nconst listEl = document.querySelector(\"#list\");\nconst countEl = document.querySelector(\"#countLine\");\nconst statusEl = document.querySelector(\"#statusLine\");\n\nlet bookmarks = []; // ← the source of truth\nlet nextId = 100;   // ids for bookmarks created locally\n\n// 1) render() — rebuild EVERYTHING from the array:\n//    - listEl.innerHTML = \"\"\n//    - empty array? append a <p> saying \"No bookmarks yet\"\n//    - else per bookmark: div.bookmark showing title + link,\n//      plus a button.del-btn that calls removeBookmark(b.id)\n//    - countEl shows `${bookmarks.length} bookmarks`\n\n// 2) loadBookmarks(): fetch, parse, save into bookmarks, render()\n\n// 3) removeBookmark(id): filter it out of bookmarks, render(),\n//    then fetch(\"/api/bookmarks/item\", { method: \"DELETE\" })\n\n// 4) addForm \"submit\": e.preventDefault();\n//    push { id: nextId++, title: titleInput.value, link: linkInput.value },\n//    render(), clear both inputs, then POST the JSON to /api/bookmarks;\n//    on status 201 → statusEl says \"Saved ✓\"\n\n// 5) call loadBookmarks()\n" }
      ],
      hints: [
        "render() is the ONLY function allowed to rebuild the list. Everything else edits the `bookmarks` array and then calls render() — that keeps cards, count and empty state in sync for free.",
        "Wire deletes while building each card: `del.addEventListener(\"click\", () => removeBookmark(b.id));` — then `bookmarks = bookmarks.filter((b) => b.id !== id);` inside removeBookmark.",
        "The POST recipe: `fetch(\"/api/bookmarks\", { method: \"POST\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify({ title: bTitle, link: bLink }) })` — then check `res.status === 201`."
      ],
      solution: {
        "script.js": "// GET    /api/bookmarks      → [{ id, title, link } x3]\n// POST   /api/bookmarks      → 201 { saved: true }\n// DELETE /api/bookmarks/item → { removed: true }\n\nconst addForm = document.querySelector(\"#addForm\");\nconst titleInput = document.querySelector(\"#titleInput\");\nconst linkInput = document.querySelector(\"#linkInput\");\nconst listEl = document.querySelector(\"#list\");\nconst countEl = document.querySelector(\"#countLine\");\nconst statusEl = document.querySelector(\"#statusLine\");\n\nlet bookmarks = []; // the source of truth\nlet nextId = 100;   // ids for bookmarks created locally\n\nfunction render() {\n  listEl.innerHTML = \"\";\n\n  if (bookmarks.length === 0) {\n    const p = document.createElement(\"p\");\n    p.textContent = \"No bookmarks yet — add one!\";\n    listEl.appendChild(p);\n  }\n\n  for (const b of bookmarks) {\n    const card = document.createElement(\"div\");\n    card.className = \"bookmark\";\n    card.innerHTML = `<strong>${b.title}</strong><span>${b.link}</span>`;\n    const del = document.createElement(\"button\");\n    del.className = \"del-btn\";\n    del.textContent = \"✕\";\n    del.addEventListener(\"click\", () => removeBookmark(b.id));\n    card.appendChild(del);\n    listEl.appendChild(card);\n  }\n\n  countEl.textContent = `${bookmarks.length} bookmarks`;\n}\n\nasync function loadBookmarks() {\n  const res = await fetch(\"/api/bookmarks\");\n  bookmarks = await res.json();\n  render();\n}\n\nasync function removeBookmark(id) {\n  bookmarks = bookmarks.filter((b) => b.id !== id);\n  render(); // local state first — the page never waits on the server\n  await fetch(\"/api/bookmarks/item\", { method: \"DELETE\" });\n}\n\nasync function saveBookmark(bTitle, bLink) {\n  bookmarks.push({ id: nextId++, title: bTitle, link: bLink });\n  render(); // optimistic append\n  statusEl.textContent = \"Saving…\";\n\n  const res = await fetch(\"/api/bookmarks\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ title: bTitle, link: bLink })\n  });\n\n  statusEl.textContent = res.status === 201 ? \"Saved ✓\" : \"Save failed\";\n}\n\naddForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  saveBookmark(titleInput.value, linkInput.value);\n  titleInput.value = \"\";\n  linkInput.value = \"\";\n});\n\nloadBookmarks();\n"
      }
    },

    {
      id: "async-quiz-6",
      title: "Final quiz: Async & APIs",
      kind: "quiz", xp: 10,
      questions: [
        { q: "The heart fills the instant you tap ❤️ — the request is still in flight. What pattern is that?",
          choices: ["Lazy loading", "Server-side rendering", "Optimistic UI", "Debouncing"],
          answer: 2, explain: "Optimistic UI updates the page FIRST and rolls the change back if the server says no. It bets on success to buy an instant feel, and that rollback branch is what keeps the bet honest when the request fails." },
        { q: "The server answers 404. What does this line do?",
          code: "const res = await fetch(\"/api/nope\");",
          lang: "js",
          choices: ["Resolves normally — res.ok is false, status 404", "Throws, jumping straight to your catch", "res is null — there was no resource", "Retries automatically until it gets a 200"],
          answer: 0, explain: "fetch only rejects on network failure. HTTP errors arrive as a perfectly normal response — checking res.ok is YOUR job." },
        { q: "Which call correctly POSTs the object `data` as JSON?",
          choices: ["fetch(url, { method: \"POST\", headers: { \"Content-Type\": \"application/json\" }, body: data })", "fetch(url, { method: \"POST\", headers: { \"Content-Type\": \"multipart/form-data\" }, body: JSON.stringify(data) })", "fetch(url, { method: \"GET\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify(data) })", "fetch(url, { method: \"POST\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify(data) })"],
          answer: 3, explain: "Three parts every time: the method, a Content-Type header that MATCHES what you actually send, and a STRINGIFIED body. fetch never stringifies an object for you (you'd ship the literal text \"[object Object]\"), a mislabelled type sends the server hunting for form parts that aren't there, and a GET can't carry a body at all." },
        { q: "You need two independent endpoints, and you want the data as fast as possible. Best tool?",
          choices: ["await the first, then await the second one", "Promise.all — both run at the same time", "A setInterval that polls both endpoints", "Nest the second fetch inside the first's .then"],
          answer: 1, explain: "Sequential awaits add the latencies together; Promise.all overlaps them, so you wait roughly for the slowest one, not the sum." },
        { q: "Your search box re-filters on every keystroke — the eight letters of `parasite` repaint the page eight times. The classic fix?",
          choices: ["Cache the keystrokes in localStorage", "Make the filter loop faster", "Debounce the keystroke handler", "Only allow one-letter searches"],
          answer: 2, explain: "Debouncing means every keystroke resets a short timer — clearTimeout + setTimeout on each input event — so the filter runs ONCE after typing pauses, roughly 150 ms after the last key, instead of once per letter." },
        { q: "What lands in `result`?",
          code: "async function getRating() {\n  const res = await fetch(\"/api/movie\");\n  const data = await res.json();\n  return data.rating;\n}\nconst result = getRating();",
          lang: "js",
          choices: ["The rating number, ready to use", "A Promise you still have to await", "undefined — the value never came back", "The raw JSON text of the response"],
          answer: 1, explain: "async functions ALWAYS return a promise, even when the body returns a plain value — that contract never bends. To get the number out you need await getRating() (or .then), which means the caller has to be async too." },
        { q: "What prints, in order?",
          code: "console.log(\"A\");\nfetch(\"/api/x\").then(() => console.log(\"B\"));\nconsole.log(\"C\");",
          lang: "js",
          choices: ["A, B, C", "B, A, C", "C, A, B", "A, C, B"],
          answer: 3, explain: "Same rule as day one: synchronous code runs to the end first; the .then callback fires later, when the response arrives." }
      ]
    }
  ]
});
