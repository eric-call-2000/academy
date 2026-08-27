/* Async JavaScript & APIs — Unit 4: Writing data: POST & friends */
window.CODELAB.addUnit("async", {
  id: "async-u4",
  title: "Writing data: POST & friends",
  icon: "✍️",
  blurb: "Stop just reading APIs — create, update and delete with POST, PUT and DELETE, and handle the server's yes (201) and no (400).",
  cheat: [
    { h: "POST: send data to a server", lang: "js", code: "const res = await fetch(\"/api/notes\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ text: \"Buy milk\" })\n});", note: "Three parts, every time: the method, the JSON header, the stringified body." },
    { h: "PUT & DELETE", lang: "js", code: "// replace note 7 with new data\nawait fetch(`/api/notes/${id}`, {\n  method: \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ text: \"New text\" })\n});\n\n// remove note 7 — no body needed\nawait fetch(`/api/notes/${id}`, { method: \"DELETE\" });", note: "POST creates, PUT updates, DELETE removes. The URL names the thing, the method names the action." },
    { h: "Status codes a writer meets", lang: "js", code: "// 200 OK          — worked\n// 201 Created     — new thing saved (the classic POST reply)\n// 400 Bad Request — server rejected YOUR data\n// 404 Not Found   — wrong URL\nres.status  // the number\nres.ok      // true for any 2xx" },
    { h: "Branch on res.ok", lang: "js", code: "if (res.ok) {\n  showSuccess();\n} else {\n  const data = await res.json(); // error bodies parse too!\n  showError(data.error);\n}", note: "fetch does NOT throw on 400/404 — checking res.ok is your job." },
    { h: "Classic trap: raw object body", lang: "js", code: "body: { text: \"hi\" }                 // ❌ becomes \"[object Object]\"\nbody: JSON.stringify({ text: \"hi\" }) // ✅ real JSON" }
  ],
  lessons: [

    {
      id: "async-u4-1",
      title: "POST with fetch",
      kind: "js", chip: "API", xp: 15, mins: 12,
      mock: {
        "POST /api/notes": { __status: 201, body: { saved: true } }
      },
      brief: "So far you've only **read** from APIs. Time to write. Saving a note, posting a comment, signing up — that's a **POST** request, and it carries three extras a GET never needs:\n\n- `method: \"POST\"` — the verb\n- `headers: { \"Content-Type\": \"application/json\" }` — \"the body is JSON\"\n- `body: JSON.stringify(...)` — your data, as text\n\nThe server answers with a **status code**: `201 Created` means your data landed. The mock endpoint `POST /api/notes` replies 201 to every well-formed save — but only if you actually send a POST!",
      example: { lang: "js", code: "const res = await fetch(\"/api/notes\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ text: \"Buy milk\" })\n});\nres.status // 201 — created!" },
      steps: [
        { text: "Write async `saveNote(text)` — POST to `/api/notes` and **return** `res.status === 201`.",
          test: "T.expect(typeof saveNote === 'function', 'Define async function saveNote(text) { … }');\nvar result = await saveNote('Buy milk');\nT.eq(result, true, 'saveNote should return res.status === 201. Getting false? A plain fetch() sends GET — this endpoint only answers to method: \"POST\".');" },
        { text: "Send it properly: the `Content-Type: application/json` header and a `JSON.stringify({ text })` body.",
          test: "var src = saveNote.toString();\nT.expect(src.indexOf('Content-Type') !== -1, 'Add the header: headers: { \"Content-Type\": \"application/json\" } — it tells the server how to read your body.');\nT.expect(src.indexOf('JSON.stringify') !== -1, 'Send the body as text: body: JSON.stringify({ text }) — fetch cannot ship a raw object.');\nT.eq(await saveNote('Second note'), true, 'Keep returning res.status === 201.');" },
        { text: "Call it from `main()` and log **\"saved!\"** when it returns true.",
          test: "await T.sleep(250);\nT.expect(T.logged('saved'), 'In main(): if (await saveNote(\"Buy milk\")) console.log(\"saved!\");');" }
      ],
      files: [
        { name: "script.js", content: "// mock API: POST /api/notes → replies 201 { saved: true }\n\n// 1) async saveNote(text):\n//    fetch \"/api/notes\" with { method, headers, body } —\n//    then return res.status === 201\n\n// 2) call it from main() and log \"saved!\" if it worked\nasync function main() {\n  // const ok = await saveNote(\"Buy milk\");\n}\nmain();\n" }
      ],
      hints: [
        "The options object is fetch's SECOND argument: `fetch(\"/api/notes\", { method: \"POST\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify({ text }) })`.",
        "`return res.status === 201;` — the comparison already IS a boolean, no if needed.",
        "To log: `async function main() { if (await saveNote(\"Buy milk\")) { console.log(\"saved!\"); } } main();`"
      ],
      solution: {
        "script.js": "// mock API: POST /api/notes → replies 201 { saved: true }\n\nasync function saveNote(text) {\n  const res = await fetch(\"/api/notes\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ text })\n  });\n  return res.status === 201;\n}\n\nasync function main() {\n  const ok = await saveNote(\"Buy milk\");\n  if (ok) {\n    console.log(\"saved!\");\n  }\n}\nmain();\n"
      }
    },

    {
      id: "async-u4-2",
      title: "PUT & DELETE",
      kind: "js", chip: "API", xp: 15, mins: 12,
      mock: {
        "PUT /api/notes/7": { updated: true },
        "DELETE /api/notes/7": { removed: true }
      },
      brief: "POST creates — but real apps also **update** and **remove**. HTTP has a verb for each:\n\n- **PUT** `/api/notes/7` — replace note 7 with new data\n- **DELETE** `/api/notes/7` — remove note 7\n\nThe URL names the *thing*, the method names the *action* — that pairing is the heart of REST APIs everywhere. Build both calls and boil the server's answer down to one clean boolean with `res.ok` (true for any 2xx status).\n\nOne rule to burn in: the id belongs **in the path**. Template literals are your friend — and a wrong id means a 404, so `res.ok` reports the truth for free.",
      steps: [
        { text: "Write async `updateNote(text)` — **PUT** to `/api/notes/7` with a JSON body, return `res.ok`.",
          test: "T.expect(typeof updateNote === 'function', 'Define async function updateNote(text) { … }');\nT.eq(await updateNote('Fresh text'), true, 'updateNote should return res.ok. Getting false? The mock only answers method: \"PUT\" at /api/notes/7.');\nvar src = updateNote.toString();\nT.expect(src.indexOf('PUT') !== -1, 'Spell the method in caps: method: \"PUT\".');" },
        { text: "Write async `deleteNote(id)` — **DELETE** `/api/notes/${id}`, return `res.ok`.",
          test: "T.expect(typeof deleteNote === 'function', 'Define async function deleteNote(id) { … }');\nT.eq(await deleteNote(7), true, 'deleteNote(7) should DELETE /api/notes/7 and return res.ok.');\nvar src = deleteNote.toString();\nT.expect(src.indexOf('DELETE') !== -1, 'Use method: \"DELETE\" — deleting with a GET would be a terrifying production bug.');" },
        { text: "The URL must be built **from the id** — a bogus id hits a missing endpoint and returns `false`.",
          test: "T.eq(await deleteNote(99), false, 'deleteNote(99) should request /api/notes/99 — which does not exist, so res.ok is false. Build the path with a template literal from the id, never hardcode 7.');" }
      ],
      files: [
        { name: "script.js", content: "// mock API:\n//   PUT    /api/notes/7 → { updated: true }\n//   DELETE /api/notes/7 → { removed: true }\n\n// 1) async updateNote(text):\n//    PUT /api/notes/7 with a JSON body { text }, return res.ok\n\n// 2) async deleteNote(id):\n//    DELETE `/api/notes/${id}`  (template literal!), return res.ok\n\nasync function main() {\n  // console.log(\"updated:\", await updateNote(\"Fresh text\"));\n  // console.log(\"deleted:\", await deleteNote(7));\n}\nmain();\n" }
      ],
      hints: [
        "updateNote is the POST shape with a different verb: `fetch(\"/api/notes/7\", { method: \"PUT\", headers: { \"Content-Type\": \"application/json\" }, body: JSON.stringify({ text }) })`.",
        "deleteNote needs no headers and no body: `fetch(`/api/notes/${id}`, { method: \"DELETE\" })`.",
        "`res.ok` is already a boolean — just `return res.ok;`."
      ],
      solution: {
        "script.js": "// mock API:\n//   PUT    /api/notes/7 → { updated: true }\n//   DELETE /api/notes/7 → { removed: true }\n\nasync function updateNote(text) {\n  const res = await fetch(\"/api/notes/7\", {\n    method: \"PUT\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ text })\n  });\n  return res.ok;\n}\n\nasync function deleteNote(id) {\n  const res = await fetch(`/api/notes/${id}`, { method: \"DELETE\" });\n  return res.ok;\n}\n\nasync function main() {\n  console.log(\"updated:\", await updateNote(\"Fresh text\"));\n  console.log(\"deleted:\", await deleteNote(7));\n}\nmain();\n"
      }
    },

    {
      id: "async-u4-3",
      title: "Forms that POST",
      kind: "web", chip: "API", xp: 15, mins: 14,
      mock: {
        "POST /api/notes": { __status: 201, body: { saved: true } }
      },
      brief: "Time to wire a real UI to a write — the **form → POST → update the page** loop behind every comment box on the internet.\n\nThe flow on submit:\n\n1. `e.preventDefault()` — forms reload the page by default; stop that first\n2. read the input's value (bail out early if it's empty)\n3. **POST** the note as JSON\n4. only on **201**: append the note to the list, clear the input, flash *Saved ✓*\n\nNotice the sleight of hand: we render the text we *already have* — the server just confirms it landed.",
      steps: [
        { text: "Submitting the form POSTs the note and appends it as an `<li>` in `#notes` — no page reload!",
          test: "T.type('#noteInput', 'Walk the dog');\nT.submit('#noteForm');\nawait T.sleep(300);\nT.eq(T.count('#notes li'), 1, 'After submit + the ~60ms POST, one <li> should appear in #notes. Order inside the handler: preventDefault, read the value, fetch, append on 201.');\nvar txt = (T.text('#notes') || '').toLowerCase();\nT.expect(txt.indexOf('walk the dog') !== -1, 'The <li> should show the typed text — read input.value BEFORE you clear it.');" },
        { text: "On success (**201**) the input clears and `#statusLine` says **Saved ✓**.",
          test: "T.eq(T.val('#noteInput'), '', 'Clear the input after a successful save: input.value = \"\".');\nT.expect((T.text('#statusLine') || '').toLowerCase().indexOf('saved') !== -1, 'Inside the res.status === 201 branch, set #statusLine to \"Saved ✓\".');" },
        { text: "It works again and again — a second note joins the first.",
          test: "T.type('#noteInput', 'Water the plants');\nT.submit('#noteForm');\nawait T.sleep(300);\nT.eq(T.count('#notes li'), 2, 'Each submit should APPEND one new <li> — two saves, two notes.');\nvar txt = (T.text('#notes') || '').toLowerCase();\nT.expect(txt.indexOf('walk the dog') !== -1 && txt.indexOf('water the plants') !== -1, 'Append, never overwrite — both notes stay on the page.');" },
        { text: "An empty input is ignored: no POST, no empty `<li>`.",
          test: "T.submit('#noteForm');\nawait T.sleep(300);\nT.eq(T.count('#notes li'), 2, 'The input is empty right now, so submitting should change nothing. Guard early: trim the value and return before fetching if it is empty.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Sticky notes 📝</h1>\n  <form id=\"noteForm\">\n    <input id=\"noteInput\" type=\"text\" placeholder=\"Write a note…\">\n    <button type=\"submit\">Save</button>\n  </form>\n  <p id=\"statusLine\"></p>\n  <ul id=\"notes\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\ninput {\n  font-size: 15px;\n  padding: 8px 10px;\n  border: 2px solid #cbd5e1;\n  border-radius: 8px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n#statusLine {\n  color: #16a34a;\n  font-weight: bold;\n  min-height: 20px;\n}\n#notes {\n  padding: 0;\n}\n#notes li {\n  list-style: none;\n  background: #fef9c3;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin-bottom: 6px;\n}\n" },
        { name: "script.js", content: "// mock API: POST /api/notes → replies 201 { saved: true }\n\nconst form = document.querySelector(\"#noteForm\");\nconst input = document.querySelector(\"#noteInput\");\nconst listEl = document.querySelector(\"#notes\");\nconst statusEl = document.querySelector(\"#statusLine\");\n\nform.addEventListener(\"submit\", async (e) => {\n  // 1) e.preventDefault() — no page reload!\n  // 2) const noteText = input.value.trim(); if it's empty, return\n  // 3) POST it: fetch(\"/api/notes\", { method, headers, body: JSON.stringify({ text: noteText }) })\n  // 4) if res.status === 201:\n  //    - append an <li> with noteText to #notes\n  //    - clear the input\n  //    - statusEl says \"Saved ✓\"\n});\n" }
      ],
      hints: [
        "First line of the handler: `e.preventDefault();` — otherwise the iframe reloads and everything resets.",
        "The guard: `const noteText = input.value.trim(); if (noteText === \"\") return;`",
        "The 201 branch: `const li = document.createElement(\"li\"); li.textContent = noteText; listEl.appendChild(li); input.value = \"\"; statusEl.textContent = \"Saved ✓\";`"
      ],
      solution: {
        "script.js": "// mock API: POST /api/notes → replies 201 { saved: true }\n\nconst form = document.querySelector(\"#noteForm\");\nconst input = document.querySelector(\"#noteInput\");\nconst listEl = document.querySelector(\"#notes\");\nconst statusEl = document.querySelector(\"#statusLine\");\n\nform.addEventListener(\"submit\", async (e) => {\n  e.preventDefault();\n\n  const noteText = input.value.trim();\n  if (noteText === \"\") return;\n\n  const res = await fetch(\"/api/notes\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ text: noteText })\n  });\n\n  if (res.status === 201) {\n    const li = document.createElement(\"li\");\n    li.textContent = noteText;\n    listEl.appendChild(li);\n    input.value = \"\";\n    statusEl.textContent = \"Saved ✓\";\n  }\n});\n"
      }
    },

    {
      id: "async-u4-4",
      title: "Handle the 400",
      kind: "web", chip: "API", xp: 15, mins: 12,
      mock: {
        "POST /api/newsletter": { __status: 201, body: { subscribed: true } },
        "POST /api/signup": { __status: 400, body: { error: "email taken" } }
      },
      brief: "Servers say no. An email already in use, a password too short — the server answers **400 Bad Request** *and* puts a human-readable reason in the JSON body.\n\nRemember unit 3: `fetch` does **not** throw on a 400 — you branch on `res.ok`. And here's the pro move: error bodies parse with `await res.json()` exactly like happy ones, so you can show the **server's own message** instead of a vague \"something went wrong\".\n\nThis page has two buttons sharing one `sendSignup(path)` function: one endpoint loves you (`201`), one rejects you (`400`). Handle both branches.",
      steps: [
        { text: "**Join the newsletter** POSTs to `/api/newsletter` — on `res.ok`, `#result` celebrates with **Welcome aboard! 🎉**.",
          test: "T.click('#goodBtn');\nawait T.sleep(300);\nT.expect((T.text('#result') || '').toLowerCase().indexOf('welcome') !== -1, 'In sendSignup, POST to the path it receives; when res.ok is true, set #result to \"Welcome aboard! 🎉\".');" },
        { text: "**Create account** hits the doomed `/api/signup` (400). Parse the body and show the **server's** error message, styled with the class `error`.",
          test: "T.click('#badBtn');\nawait T.sleep(300);\nT.expect((T.text('#result') || '').toLowerCase().indexOf('email taken') !== -1, 'The 400 response still has a JSON body — await res.json() and display data.error (the server says \"email taken\"), not a made-up message.');\nT.expect(T.$('#result').classList.contains('error'), 'Add the class \"error\" to #result in the failure branch so the message turns red.');" },
        { text: "Good news clears the gloom — clicking the newsletter button again shows the welcome message and **removes** the `error` class.",
          test: "T.click('#goodBtn');\nawait T.sleep(300);\nT.expect((T.text('#result') || '').toLowerCase().indexOf('welcome') !== -1, 'Both buttons share sendSignup — the happy branch should run again after a failure.');\nT.expect(!T.$('#result').classList.contains('error'), 'In the res.ok branch, classList.remove(\"error\") — success should never wear the error style.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Join DevClub</h1>\n  <p>Two servers, two moods.</p>\n  <button id=\"goodBtn\">Join the newsletter</button>\n  <button id=\"badBtn\">Create account</button>\n  <p id=\"result\"></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n  margin-right: 8px;\n}\n#result {\n  font-size: 17px;\n  font-weight: bold;\n  min-height: 24px;\n  color: #16a34a;\n}\n#result.error {\n  color: #dc2626;\n}\n" },
        { name: "script.js", content: "// mock API:\n//   POST /api/newsletter → 201 { subscribed: true }\n//   POST /api/signup     → 400 { error: \"email taken\" }\n\nconst goodBtn = document.querySelector(\"#goodBtn\");\nconst badBtn = document.querySelector(\"#badBtn\");\nconst resultEl = document.querySelector(\"#result\");\n\nasync function sendSignup(path) {\n  // 1) POST to `path` with a JSON body — any email works, the mock never reads it\n  // 2) if res.ok:\n  //    resultEl says \"Welcome aboard! 🎉\", classList.remove(\"error\")\n  // 3) else:\n  //    const data = await res.json();\n  //    resultEl shows data.error, classList.add(\"error\")\n}\n\ngoodBtn.addEventListener(\"click\", () => sendSignup(\"/api/newsletter\"));\nbadBtn.addEventListener(\"click\", () => sendSignup(\"/api/signup\"));\n" }
      ],
      hints: [
        "Any body will do — the mock never reads it: `body: JSON.stringify({ email: \"kai@devclub.io\" })` (plus the usual method and Content-Type header).",
        "The skeleton: `if (res.ok) { … classList.remove(\"error\"); } else { const data = await res.json(); … classList.add(\"error\"); }`",
        "`resultEl.textContent = data.error;` — the server already wrote the message for you."
      ],
      solution: {
        "script.js": "// mock API:\n//   POST /api/newsletter → 201 { subscribed: true }\n//   POST /api/signup     → 400 { error: \"email taken\" }\n\nconst goodBtn = document.querySelector(\"#goodBtn\");\nconst badBtn = document.querySelector(\"#badBtn\");\nconst resultEl = document.querySelector(\"#result\");\n\nasync function sendSignup(path) {\n  const res = await fetch(path, {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ email: \"kai@devclub.io\" })\n  });\n\n  if (res.ok) {\n    resultEl.textContent = \"Welcome aboard! 🎉\";\n    resultEl.classList.remove(\"error\");\n  } else {\n    const data = await res.json();\n    resultEl.textContent = data.error;\n    resultEl.classList.add(\"error\");\n  }\n}\n\ngoodBtn.addEventListener(\"click\", () => sendSignup(\"/api/newsletter\"));\nbadBtn.addEventListener(\"click\", () => sendSignup(\"/api/signup\"));\n"
      }
    },

    {
      id: "async-quiz-4",
      title: "Unit 4 quiz: Writing data",
      kind: "quiz", xp: 10,
      questions: [
        { q: "You're adding a brand-new note to the server. Which HTTP method is the conventional choice?",
          choices: ["GET — it gets the note to the server", "PUT — you're literally putting a note there", "POST — create something new on the server", "DELETE — clears space for the new note"],
          answer: 2, explain: "POST creates, PUT replaces something that already exists, DELETE removes, GET only ever reads." },
        { q: "What does `JSON.stringify` do in this request?",
          code: "body: JSON.stringify({ title: \"Hi\" })",
          lang: "js",
          choices: ["Converts the object into JSON text", "Encrypts the object in transit", "Parses the server's response into an object", "Makes the request synchronous"],
          answer: 0, explain: "HTTP bodies travel as TEXT, so a live JavaScript object can't go on the wire as-is. JSON.stringify serialises it into JSON text on the way out, and the server parses that text back into an object on its side." },
        { q: "Why send the header `\"Content-Type\": \"application/json\"` with a POST?",
          choices: ["It makes the response arrive faster", "It's required on every GET request too", "It converts the body to JSON for you", "It tells the server how to read the body"],
          answer: 3, explain: "Headers describe the request, and this one says \"what I'm sending you is JSON\" — it labels the body, it never converts it. Without that label many servers won't even try to parse what you sent." },
        { q: "Your POST comes back with status **201**. What is the server saying?",
          choices: ["Try again later — the server is busy", "Created — the new resource was saved", "Moved — the resource lives at a new URL", "Unauthorized — you need to log in first"],
          answer: 1, explain: "Any 2xx is success, and 201 is the specific 'I created what you sent me' — the classic reply to a good POST." },
        { q: "After this request, `res.status` is 400. What just happened?",
          code: "const res = await fetch(\"/api/signup\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ email })\n});",
          lang: "js",
          choices: ["fetch threw, so this line never finished", "The network connection dropped mid-request", "The server got the request and rejected the DATA", "The browser will retry it automatically"],
          answer: 2, explain: "fetch only rejects on network failure. A 400 is a perfectly successful conversation with an unhappy server: the request arrived, the server read it, and the DATA was refused. Nothing throws, so this line resolves normally — branching on res.ok is your job." },
        { q: "That 400 arrived with the body `{ \"error\": \"email taken\" }`. How do you show that message to the user?",
          choices: ["You can't — error responses have no readable body", "await res.json(), then display data.error", "It's in res.error automatically", "Read it from res.statusText"],
          answer: 1, explain: "Error bodies parse exactly like happy ones — await res.json() and put the server's own words in your UI instead of a generic apology." }
      ]
    }
  ]
});
