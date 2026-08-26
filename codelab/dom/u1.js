/* Unit 6 — Building Interactive Websites: the DOM & events */
window.CODELAB.addUnit("dom", {
  id: "dom",
  title: "The DOM & Events",
  icon: "🖱️",
  color: "#58cc02",
  blurb: "Connect JavaScript to the page — select, change, create, and react to clicks.",
  cheat: [
    { h: "Selecting elements", lang: "js", code: "const title = document.querySelector(\"#title\"); // first match (CSS selector!)\nconst items = document.querySelectorAll(\".item\"); // all matches" },
    { h: "Changing elements", lang: "js", code: "el.textContent = \"New text\";\nel.style.color = \"royalblue\";\nel.classList.add(\"active\");\nel.classList.toggle(\"dark\");" },
    { h: "Creating elements", lang: "js", code: "const li = document.createElement(\"li\");\nli.textContent = \"New item\";\nlist.appendChild(li);" },
    { h: "Events", lang: "js", code: "btn.addEventListener(\"click\", () => {\n  count++;\n});\n\ninput.addEventListener(\"input\", (e) => {\n  console.log(e.target.value);\n});" },
    { h: "Forms", lang: "js", code: "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();   // stop the page reload!\n  // read input.value, do things…\n  input.value = \"\";     // clear the field\n});" }
  ],
  lessons: [

    {
      id: "dom-1",
      title: "Select & change",
      kind: "web", chip: "DOM", xp: 15,
      brief: "The browser turns your HTML into a live object tree — the **DOM** (Document Object Model). JavaScript can grab any node and change it:\n\n- `document.querySelector(\"#title\")` — find by any **CSS selector**\n- `.textContent` — read/replace its text\n- `.style.color` — set inline styles\n\nYour script runs in `script.js` (see the file tabs). It's already linked at the bottom of the HTML — scripts load *after* the elements they touch.",
      steps: [
        { text: "Change the `#title` text to **\"Hello, DOM!\"** using `querySelector` + `textContent`.",
          test: "var t = (T.text('#title') || '').toLowerCase();\nT.expect(t.indexOf('dom') !== -1, 'Set document.querySelector(\"#title\").textContent = \"Hello, DOM!\" — the heading still says: ' + T.text('#title'));" },
        { text: "Turn the `#intro` paragraph **royalblue** via `.style.color`.",
          test: "T.expect(T.css('#intro', 'color') === 'rgb(65, 105, 225)', 'Set .style.color = \"royalblue\" on the #intro element.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1 id=\"title\">Just a static page…</h1>\n  <p id=\"intro\">Nothing ever changes around here.</p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "// 1) grab #title, change its textContent\n\n// 2) grab #intro, set style.color = \"royalblue\"\n" }
      ],
      hints: [
        "`const title = document.querySelector(\"#title\");` then `title.textContent = \"Hello, DOM!\";`",
        "Styles from JS: `document.querySelector(\"#intro\").style.color = \"royalblue\";`"
      ],
      solution: {
        "script.js": "const title = document.querySelector(\"#title\");\ntitle.textContent = \"Hello, DOM!\";\n\nconst intro = document.querySelector(\"#intro\");\nintro.style.color = \"royalblue\";\n"
      }
    },

    {
      id: "dom-2",
      title: "classList: styles the right way",
      kind: "web", chip: "DOM", xp: 15,
      brief: "Inline styles get messy fast. The pro move: define looks in **CSS classes**, then let JavaScript switch classes on and off:\n\n- `el.classList.add(\"active\")`\n- `el.classList.remove(\"active\")`\n- `el.classList.toggle(\"active\")`\n\n`styles.css` already defines what `.active` looks like — your job is one line of JS.",
      steps: [
        { text: "Add the class `active` to the `#box` element from JavaScript.",
          test: "var box = T.$('#box');\nT.expect(box && box.classList.contains('active'), 'Use box.classList.add(\"active\").');\nT.expect(T.css('#box', 'background-color') === 'rgb(34, 197, 94)', 'Once the class is on, the CSS should turn the box green automatically.');" },
        { text: "Also add the class `rounded` (elements can wear many classes).",
          test: "T.expect(T.$('#box').classList.contains('rounded'), 'Add a second class: classList.add(\"rounded\") — or add(\"active\", \"rounded\") in one call.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div id=\"box\">status: pending…</div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Already styled for you — just switch the classes on */\n#box {\n  padding: 24px;\n  background: #e2e8f0;\n  font-family: Arial, sans-serif;\n}\n\n.active {\n  background: #22c55e !important;\n  color: white;\n}\n\n.rounded {\n  border-radius: 16px;\n}\n" },
        { name: "script.js", content: "const box = document.querySelector(\"#box\");\n\n// add the classes here\n" }
      ],
      hints: [
        "`box.classList.add(\"active\");` — the CSS does the rest.",
        "classList.add accepts several at once: `box.classList.add(\"active\", \"rounded\");`"
      ],
      solution: {
        "script.js": "const box = document.querySelector(\"#box\");\n\nbox.classList.add(\"active\", \"rounded\");\n"
      }
    },

    {
      id: "dom-3",
      title: "Creating elements",
      kind: "web", chip: "DOM", xp: 15,
      brief: "Real apps *build* their UI from data (think: your inbox, a feed, search results). The loop:\n\n- `document.createElement(\"li\")` — make a node\n- set its `textContent`\n- `parent.appendChild(node)` — mount it\n\nRender the `crew` array into the empty `#list`.",
      steps: [
        { text: "Create one `<li>` per crew member and append it to `#list`.",
          test: "T.expect(T.count('#list li') >= 3, 'Loop over crew and append an <li> per member — the list has ' + T.count('#list li') + ' items.');" },
        { text: "Each `<li>` should show that member's name.",
          test: "var txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('rosa') !== -1 && txt.indexOf('kim') !== -1 && txt.indexOf('dev') !== -1, 'Set li.textContent to the member name inside the loop.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Crew roster</h1>\n  <ul id=\"list\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const crew = [\"Rosa\", \"Kim\", \"Dev\"];\nconst list = document.querySelector(\"#list\");\n\n// loop over crew:\n//   create an li, set its textContent, append it to list\n" }
      ],
      hints: [
        "A for…of loop reads nicely: `for (const member of crew) { … }`",
        "Inside: `const li = document.createElement(\"li\"); li.textContent = member; list.appendChild(li);`"
      ],
      solution: {
        "script.js": "const crew = [\"Rosa\", \"Kim\", \"Dev\"];\nconst list = document.querySelector(\"#list\");\n\nfor (const member of crew) {\n  const li = document.createElement(\"li\");\n  li.textContent = member;\n  list.appendChild(li);\n}\n"
      }
    },

    {
      id: "dom-4",
      title: "Click events",
      kind: "web", chip: "DOM", xp: 15,
      brief: "Now the fun part: **reacting to the user**. `addEventListener(\"click\", fn)` runs your function on every click.\n\nBuild the classic first interactive app: a click counter. Keep the count in a `let` variable — the variable is the *source of truth*; the DOM just displays it.\n\nTry your buttons in the preview after you run!",
      steps: [
        { text: "The `#count` display starts at **0**.",
          test: "T.eq(T.text('#count'), '0', 'Leave the starting count at 0.');" },
        { text: "Clicking `#btn` increases the number shown — every click.",
          test: "T.click('#btn');\nT.click('#btn');\nT.eq(T.text('#count'), '2', 'After two clicks the display should read 2 — add a click listener that increments a counter variable and updates #count.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Cookie clicker 🍪</h1>\n  <p>Cookies: <span id=\"count\">0</span></p>\n  <button id=\"btn\">Click me</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const btn = document.querySelector(\"#btn\");\nconst countEl = document.querySelector(\"#count\");\n\nlet cookies = 0;\n\n// add a \"click\" listener on btn:\n//   increment cookies, then show it in countEl\n" }
      ],
      hints: [
        "`btn.addEventListener(\"click\", () => { … });`",
        "Inside the listener: `cookies++; countEl.textContent = cookies;`"
      ],
      solution: {
        "script.js": "const btn = document.querySelector(\"#btn\");\nconst countEl = document.querySelector(\"#count\");\n\nlet cookies = 0;\n\nbtn.addEventListener(\"click\", () => {\n  cookies++;\n  countEl.textContent = cookies;\n});\n"
      }
    },

    {
      id: "dom-5",
      title: "Reacting to typing",
      kind: "web", chip: "DOM", xp: 15,
      brief: "The `input` event fires on **every keystroke** — that's how live searches and previews work.\n\nInside the listener, `e.target.value` (or `inputEl.value`) is what's typed *right now*. Build a live greeting that updates as you type.",
      steps: [
        { text: "Listening for `input` on `#nameInput`, show `` `Hello, ${value}!` `` in `#preview`.",
          test: "T.type('#nameInput', 'Zoe');\nvar t = (T.text('#preview') || '');\nT.expect(t.indexOf('Zoe') !== -1, 'Typing Zoe should make #preview say Hello, Zoe! — listen for the \"input\" event and use the value.');\nT.expect(t.toLowerCase().indexOf('hello') !== -1, 'Format the preview as Hello, <value>!');" },
        { text: "It updates continuously — new keystrokes replace the old greeting.",
          test: "T.type('#nameInput', 'Marcus');\nT.expect((T.text('#preview') || '').indexOf('Marcus') !== -1 && (T.text('#preview') || '').indexOf('Zoe') === -1, 'Each input event should REPLACE the preview text (assign, don\\'t append).');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Name badge printer</h1>\n  <input id=\"nameInput\" placeholder=\"Type your name…\">\n  <p id=\"preview\"></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const nameInput = document.querySelector(\"#nameInput\");\nconst preview = document.querySelector(\"#preview\");\n\n// listen for the \"input\" event:\n//   set preview's text to `Hello, ${nameInput.value}!`\n" }
      ],
      hints: [
        "`nameInput.addEventListener(\"input\", () => { … });`",
        "Inside: `preview.textContent = `Hello, ${nameInput.value}!`;`"
      ],
      solution: {
        "script.js": "const nameInput = document.querySelector(\"#nameInput\");\nconst preview = document.querySelector(\"#preview\");\n\nnameInput.addEventListener(\"input\", () => {\n  preview.textContent = `Hello, ${nameInput.value}!`;\n});\n"
      }
    },

    {
      id: "dom-6",
      title: "Handling forms",
      kind: "web", chip: "DOM", xp: 15,
      brief: "Forms fire a **submit** event (pressing Enter counts too!). Two golden rules:\n\n- `e.preventDefault()` — stop the browser's old-school page reload\n- clear the input afterwards so the user can keep going\n\nThis is the heart of every todo app, chat box, and comment section ever built.",
      steps: [
        { text: "On submit, add the typed text as a new `<li>` in `#items` (and don't reload — `preventDefault`!).",
          test: "T.type('#itemInput', 'Buy milk');\nT.submit('#addForm');\nT.eq(T.count('#items li'), 1, 'Submitting should append exactly one <li> — remember e.preventDefault().');\nT.expect((T.text('#items') || '').toLowerCase().indexOf('buy milk') !== -1, 'The <li> should contain the typed text.');" },
        { text: "Clear the input after each submit.",
          test: "T.eq(T.val('#itemInput'), '', 'After submitting, set the input\\'s .value = \"\".');" },
        { text: "It keeps working — a second submit adds a second item.",
          test: "T.type('#itemInput', 'Walk dog');\nT.submit('#addForm');\nT.eq(T.count('#items li'), 2, 'Two submits → two list items.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Shopping list</h1>\n  <form id=\"addForm\">\n    <input id=\"itemInput\" placeholder=\"Add an item…\">\n    <button>Add</button>\n  </form>\n  <ul id=\"items\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const addForm = document.querySelector(\"#addForm\");\nconst itemInput = document.querySelector(\"#itemInput\");\nconst items = document.querySelector(\"#items\");\n\naddForm.addEventListener(\"submit\", (e) => {\n  // 1) stop the reload\n  // 2) create an li with itemInput.value, append to items\n  // 3) clear the input\n});\n" }
      ],
      hints: [
        "First line inside the handler: `e.preventDefault();`",
        "Then it's dom-3 again: createElement, textContent = itemInput.value, appendChild.",
        "Finally: `itemInput.value = \"\";`"
      ],
      solution: {
        "script.js": "const addForm = document.querySelector(\"#addForm\");\nconst itemInput = document.querySelector(\"#itemInput\");\nconst items = document.querySelector(\"#items\");\n\naddForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const li = document.createElement(\"li\");\n  li.textContent = itemInput.value;\n  items.appendChild(li);\n  itemInput.value = \"\";\n});\n"
      }
    },

    {
      id: "dom-quiz",
      title: "DOM checkpoint quiz",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What does DOM stand for?",
          choices: ["Document Object Model", "Data Object Management", "Digital Ordering Machine", "Document Orientation Mode"],
          answer: 0, explain: "The live object tree the browser builds from your HTML — JavaScript's handle on the page." },
        { q: "`document.querySelector(\".card\")` returns…",
          choices: ["The FIRST element matching the CSS selector .card", "Every .card element", "The text inside .card", "A CSS rule"],
          answer: 0, explain: "querySelector = first match (querySelectorAll = all of them). And yes — it takes CSS selectors." },
        { q: "The cleanest way to restyle an element from JS?",
          choices: ["Toggle a CSS class with classList", "Write every style inline with .style", "Rewrite the HTML string", "Use alert()"],
          answer: 0, explain: "Keep looks in CSS, switch classes in JS. Inline styles are fine for one-offs, but classes scale." },
        { q: "What's wrong here?",
          code: "form.addEventListener(\"submit\", (e) => {\n  addTodoFromInput();\n});",
          lang: "js",
          choices: ["Missing e.preventDefault() — the page will reload and wipe everything", "submit isn't a real event", "Arrow functions can't be listeners", "Nothing"],
          answer: 0, explain: "Default form submission navigates/reloads. preventDefault() keeps your app alive." },
        { q: "Which event fires on **every keystroke** in a text field?",
          choices: ["input", "click", "submit", "keypressed"],
          answer: 0, explain: "\"input\" fires as the value changes. (\"change\" only fires when the field loses focus.)" },
        { q: "What appears in the list?",
          code: "const li = document.createElement(\"li\");\nli.textContent = \"Hi\";\n// …and then nothing else",
          lang: "js",
          choices: ["Nothing — the li was never appended to the page", "An empty li", "\"Hi\" at the end of the list", "An error"],
          answer: 0, explain: "createElement makes a node in memory. Until appendChild (or append) mounts it, it's invisible." }
      ]
    },

    {
      id: "dom-project",
      title: "Project: Mood board & counter",
      kind: "web", chip: "DOM", xp: 40, project: true,
      brief: "Combine everything: a **mood switcher** (buttons that retheme the page) and a **score counter** with +, −, and reset. Two little widgets, every DOM skill in one page.\n\nAfter the checks pass, play with it in the preview — you built a real interactive UI.",
      steps: [
        { text: "The `#score` display starts at **0**, and `#plus` adds 1 per click.",
          test: "T.eq(T.text('#score'), '0', 'Score should start at 0.');\nT.click('#plus');\nT.click('#plus');\nT.eq(T.text('#score'), '2', 'Two + clicks should show 2.');" },
        { text: "`#minus` subtracts 1.",
          test: "T.click('#minus');\nT.eq(T.text('#score'), '1', 'After +2 then −1, the score should be 1.');" },
        { text: "`#reset` puts it back to 0.",
          test: "T.click('#reset');\nT.eq(T.text('#score'), '0', 'Reset should show 0 (and really reset your variable, not just the text).');\nT.click('#plus');\nT.eq(T.text('#score'), '1', 'Counting must still work after a reset.');" },
        { text: "Clicking `#sunnyBtn` sets the page background to `#fef3c7` and `#mood` to \"sunny\".",
          test: "T.click('#sunnyBtn');\nawait T.sleep(500); // let the CSS transition finish\nT.expect(T.css('body', 'background-color') === 'rgb(254, 243, 199)', 'Set document.body.style.backgroundColor = \"#fef3c7\" in the sunny handler.');\nT.expect((T.text('#mood') || '').toLowerCase().indexOf('sunny') !== -1, 'Update #mood to say sunny.');" },
        { text: "Clicking `#oceanBtn` sets the background to `#e0f2fe` and `#mood` to \"ocean\".",
          test: "T.click('#oceanBtn');\nawait T.sleep(500); // let the CSS transition finish\nT.expect(T.css('body', 'background-color') === 'rgb(224, 242, 254)', 'Set the ocean background to #e0f2fe.');\nT.expect((T.text('#mood') || '').toLowerCase().indexOf('ocean') !== -1, 'Update #mood to say ocean.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Control room</h1>\n\n  <section>\n    <h2>Mood: <span id=\"mood\">none</span></h2>\n    <button id=\"sunnyBtn\">☀️ Sunny</button>\n    <button id=\"oceanBtn\">🌊 Ocean</button>\n  </section>\n\n  <section>\n    <h2>Score: <span id=\"score\">0</span></h2>\n    <button id=\"plus\">+1</button>\n    <button id=\"minus\">−1</button>\n    <button id=\"reset\">Reset</button>\n  </section>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\nbutton {\n  font-size: 15px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\nsection { margin-bottom: 24px; }\n" },
        { name: "script.js", content: "// --- counter ---\nlet score = 0;\nconst scoreEl = document.querySelector(\"#score\");\n\n// wire up #plus, #minus, #reset\n\n\n// --- mood switcher ---\nconst moodEl = document.querySelector(\"#mood\");\n\n// wire up #sunnyBtn (background #fef3c7, mood \"sunny\")\n// and #oceanBtn (background #e0f2fe, mood \"ocean\")\n" }
      ],
      hints: [
        "Write a tiny helper so you never forget the display: `function show() { scoreEl.textContent = score; }` — call it in every handler.",
        "Background from JS: `document.body.style.backgroundColor = \"#fef3c7\";`",
        "Three counter listeners look almost identical — change score, then show()."
      ],
      solution: {
        "script.js": "// --- counter ---\nlet score = 0;\nconst scoreEl = document.querySelector(\"#score\");\n\nfunction show() {\n  scoreEl.textContent = score;\n}\n\ndocument.querySelector(\"#plus\").addEventListener(\"click\", () => {\n  score++;\n  show();\n});\n\ndocument.querySelector(\"#minus\").addEventListener(\"click\", () => {\n  score--;\n  show();\n});\n\ndocument.querySelector(\"#reset\").addEventListener(\"click\", () => {\n  score = 0;\n  show();\n});\n\n// --- mood switcher ---\nconst moodEl = document.querySelector(\"#mood\");\n\ndocument.querySelector(\"#sunnyBtn\").addEventListener(\"click\", () => {\n  document.body.style.backgroundColor = \"#fef3c7\";\n  moodEl.textContent = \"sunny\";\n});\n\ndocument.querySelector(\"#oceanBtn\").addEventListener(\"click\", () => {\n  document.body.style.backgroundColor = \"#e0f2fe\";\n  moodEl.textContent = \"ocean\";\n});\n"
      }
    }
  ]
});
