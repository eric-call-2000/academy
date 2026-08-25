/* Unit 9 — Full-Stack Capstone */
window.CODELAB.addUnit({
  id: "capstone",
  title: "Full-Stack Capstone",
  icon: "🚀",
  color: "#f59e0b",
  blurb: "Put it all together — build, persist, and ship a complete app.",
  cheat: [
    { h: "localStorage", lang: "js", code: "localStorage.setItem(\"note\", \"hi\");     // save (strings only)\nlocalStorage.getItem(\"note\");           // \"hi\" (or null)\nlocalStorage.removeItem(\"note\");\n\n// objects/arrays ride along as JSON:\nlocalStorage.setItem(\"tasks\", JSON.stringify(tasks));\nconst tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];" },
    { h: "State-driven UI (the big idea)", lang: "js", code: "let tasks = [];        // 1. state = source of truth\n\nfunction render() {    // 2. redraw the UI FROM state\n  list.innerHTML = \"\";\n  tasks.forEach(t => { /* build DOM */ });\n}\n\n// 3. events change state, save, re-render\ntasks.push(newTask); save(); render();", note: "This pattern IS React/Vue in miniature — learn it here, recognize it everywhere." },
    { h: "Ship it with git", lang: "js", code: "git init          // start tracking a folder\ngit add .         // stage your changes\ngit commit -m \"feat: add task filters\"\ngit push          // upload to GitHub", note: "Push to GitHub → enable GitHub Pages → your app is live. Exactly how this course is hosted!" }
  ],
  lessons: [

    {
      id: "cap-1",
      title: "localStorage: remember things",
      kind: "web", chip: "WEB", xp: 15,
      brief: "Until your app has a backend account system, the browser itself can remember data: **localStorage** stores strings per-site, surviving reloads.\n\n- `localStorage.setItem(\"note\", value)` — save\n- `localStorage.getItem(\"note\")` — read (returns `null` if empty)\n\nBuild a sticky note that saves on click and can restore itself. *(In this sandbox, storage is simulated per run — on your real deployed site it persists for good.)*",
      steps: [
        { text: "Clicking `#saveBtn` stores the textarea's value under the key `\"note\"`.",
          test: "T.type('#noteBox', 'remember the milk');\nT.click('#saveBtn');\nT.eq(localStorage.getItem('note'), 'remember the milk', 'In the click handler: localStorage.setItem(\"note\", noteBox.value)');" },
        { text: "…and confirms by setting `#savedMsg` to \"Saved!\".",
          test: "T.expect((T.text('#savedMsg') || '').toLowerCase().indexOf('saved') !== -1, 'Set #savedMsg textContent to Saved! after storing.');" },
        { text: "Write `loadNote()` — reads the stored note (if any) back into the textarea.",
          test: "T.expect(typeof loadNote === 'function', 'Define function loadNote() { … } (a normal named function).');\nlocalStorage.setItem('note', 'planted by the test');\nloadNote();\nT.eq(T.val('#noteBox'), 'planted by the test', 'loadNote() should put localStorage.getItem(\"note\") into the textarea.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Sticky note 📌</h1>\n  <textarea id=\"noteBox\" rows=\"4\" cols=\"32\" placeholder=\"Jot something…\"></textarea>\n  <br>\n  <button id=\"saveBtn\">Save</button>\n  <span id=\"savedMsg\"></span>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const noteBox = document.querySelector(\"#noteBox\");\nconst saveBtn = document.querySelector(\"#saveBtn\");\nconst savedMsg = document.querySelector(\"#savedMsg\");\n\n// 1+2) on click: save noteBox.value under \"note\", show \"Saved!\"\n\n// 3) function loadNote() — restore the saved note into noteBox\n//    (call it once at startup, so reloads keep your note)\nloadNote();\n" }
      ],
      hints: [
        "Click handler: `saveBtn.addEventListener(\"click\", () => { localStorage.setItem(\"note\", noteBox.value); savedMsg.textContent = \"Saved!\"; });`",
        "loadNote: read it, and only fill the box if it isn't null: `const saved = localStorage.getItem(\"note\"); if (saved !== null) noteBox.value = saved;`"
      ],
      solution: {
        "script.js": "const noteBox = document.querySelector(\"#noteBox\");\nconst saveBtn = document.querySelector(\"#saveBtn\");\nconst savedMsg = document.querySelector(\"#savedMsg\");\n\nsaveBtn.addEventListener(\"click\", () => {\n  localStorage.setItem(\"note\", noteBox.value);\n  savedMsg.textContent = \"Saved!\";\n});\n\nfunction loadNote() {\n  const saved = localStorage.getItem(\"note\");\n  if (saved !== null) {\n    noteBox.value = saved;\n  }\n}\nloadNote();\n"
      }
    },

    {
      id: "cap-2",
      title: "TaskMaster: the interface",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Over the next lessons you'll build **TaskMaster** — a complete task app, the rite of passage of every full-stack dev. First: the interface, using your Unit 1–3 skills.\n\nBuild the markup; the stylesheet is already waiting for those exact ids and classes (peek at `styles.css`!).",
      steps: [
        { text: "A `<header>` with an `<h1>` titled **TaskMaster** (emoji welcome).",
          test: "T.expect(T.$('header h1'), 'Add a <header> containing an <h1>.');\nT.expect((T.text('h1') || '').toLowerCase().indexOf('taskmaster') !== -1, 'Name it TaskMaster.');" },
        { text: "A form `id=\"taskForm\"` holding an input `id=\"taskInput\"` (with placeholder) and a button.",
          test: "T.expect(T.$('form#taskForm'), 'Add <form id=\"taskForm\">.');\nvar i = T.$('#taskForm input#taskInput');\nT.expect(i, 'Inside it: <input id=\"taskInput\">.');\nT.expect((i.getAttribute('placeholder') || '').length > 0, 'Give the input a placeholder.');\nT.expect(T.$('#taskForm button'), 'And a <button> to submit.');" },
        { text: "An empty list `id=\"taskList\"` for the tasks.",
          test: "T.expect(T.$('ul#taskList'), 'Add <ul id=\"taskList\"></ul>.');\nT.eq(T.count('#taskList li'), 0, 'Leave it empty — JavaScript will fill it.');" },
        { text: "A footer line with `id=\"counter\"` reading **0 tasks**.",
          test: "T.expect(T.$('#counter'), 'Add an element with id=\"counter\".');\nT.expect((T.text('#counter') || '').indexOf('0') !== -1, 'Start it at \"0 tasks\".');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <!-- header → form#taskForm (input#taskInput + button) → ul#taskList → counter -->\n\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* TaskMaster's design — already keyed to your ids/classes */\nbody {\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 20px;\n}\nheader h1 { margin: 8px 0 16px; }\n#taskForm { display: flex; gap: 8px; }\n#taskInput {\n  flex: 1;\n  padding: 10px 12px;\n  border: 2px solid #cbd5e1;\n  border-radius: 10px;\n  font-size: 15px;\n}\n#taskForm button {\n  padding: 10px 16px;\n  border: none;\n  border-radius: 10px;\n  background: #0ea5e9;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n#taskList { list-style: none; padding: 0; }\n#taskList li {\n  background: white;\n  margin-top: 8px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  cursor: pointer;\n}\n#counter { color: #64748b; font-size: 14px; margin-top: 14px; }\n" }
      ],
      hints: [
        "All the ids are named in the checkpoints — copy them exactly.",
        "Skeleton: `<header><h1>TaskMaster ✅</h1></header>` then the form, then `<ul id=\"taskList\"></ul>`, then `<p id=\"counter\">0 tasks</p>`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header>\n    <h1>TaskMaster ✅</h1>\n  </header>\n\n  <form id=\"taskForm\">\n    <input id=\"taskInput\" placeholder=\"What needs doing?\">\n    <button>Add</button>\n  </form>\n\n  <ul id=\"taskList\"></ul>\n\n  <p id=\"counter\">0 tasks</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "cap-3",
      title: "TaskMaster: make it work",
      kind: "web", chip: "DOM", xp: 15,
      brief: "Interface ✓ — now the brain. This is where the **state-driven pattern** enters: an array `tasks` is the *source of truth*; a `render()` function redraws the list from it; events only ever (1) change the array, (2) call `render()`.\n\nThat one-way loop is the core idea behind React and every modern framework. Learn it here in 30 lines of vanilla JS.",
      example: { lang: "js", code: "// events change state → render() redraws from state\ntasks.push({ text: \"…\", done: false });\nrender();" },
      steps: [
        { text: "Submitting the form adds a task `<li>` (showing its text) and clears the input.",
          test: "T.type('#taskInput', 'Learn the render loop');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 1, 'One submit → one <li> (via tasks.push + render()).');\nT.expect((T.text('#taskList') || '').indexOf('Learn the render loop') !== -1, 'The li shows the task text.');\nT.eq(T.val('#taskInput'), '', 'Clear the input after adding.');" },
        { text: "Empty submissions are ignored.",
          test: "T.type('#taskInput', '   ');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 1, 'Whitespace-only input should NOT add a task (trim it!).');" },
        { text: "Clicking a task toggles its `done` state — the `<li>` gets/loses the class `done`.",
          test: "T.click('#taskList li');\nT.expect(T.$('#taskList li').classList.contains('done'), 'Click → toggle done in the ARRAY, re-render with class done on finished tasks.');\nT.click('#taskList li');\nT.expect(!T.$('#taskList li').classList.contains('done'), 'Clicking again un-does it.');" },
        { text: "Each task has a ✕ button (`class=\"del\"`) that removes just that task.",
          test: "T.type('#taskInput', 'Second task');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 2, '(added a second task)');\nT.click('#taskList li .del');\nT.eq(T.count('#taskList li'), 1, 'The ✕ should delete its task — and ONLY its task.');\nT.expect((T.text('#taskList') || '').indexOf('Second task') !== -1, 'The remaining task should be the second one.');" },
        { text: "`#counter` always shows how many tasks are left **not done**.",
          test: "T.expect((T.text('#counter') || '').indexOf('1') !== -1, 'One undone task → counter shows 1.');\nT.click('#taskList li');\nT.expect((T.text('#counter') || '').indexOf('0') !== -1, 'Marking it done → 0 left. Update the counter inside render().');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header>\n    <h1>TaskMaster ✅</h1>\n  </header>\n\n  <form id=\"taskForm\">\n    <input id=\"taskInput\" placeholder=\"What needs doing?\">\n    <button>Add</button>\n  </form>\n\n  <ul id=\"taskList\"></ul>\n\n  <p id=\"counter\">0 tasks left</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 20px;\n}\nheader h1 { margin: 8px 0 16px; }\n#taskForm { display: flex; gap: 8px; }\n#taskInput {\n  flex: 1; padding: 10px 12px;\n  border: 2px solid #cbd5e1; border-radius: 10px; font-size: 15px;\n}\n#taskForm button {\n  padding: 10px 16px; border: none; border-radius: 10px;\n  background: #0ea5e9; color: white; font-weight: bold; cursor: pointer;\n}\n#taskList { list-style: none; padding: 0; }\n#taskList li {\n  background: white; margin-top: 8px; padding: 12px 14px;\n  border-radius: 10px; display: flex; justify-content: space-between; gap: 8px;\n  cursor: pointer;\n}\n#taskList li.done { opacity: 0.5; text-decoration: line-through; }\n.del { border: none; background: none; color: #ef4444; font-weight: bold; cursor: pointer; }\n#counter { color: #64748b; font-size: 14px; margin-top: 14px; }\n" },
        { name: "script.js", content: "const taskForm = document.querySelector(\"#taskForm\");\nconst taskInput = document.querySelector(\"#taskInput\");\nconst taskList = document.querySelector(\"#taskList\");\nconst counter = document.querySelector(\"#counter\");\n\nlet tasks = [];   // ← the source of truth: [{ text, done }]\n\nfunction render() {\n  taskList.innerHTML = \"\";\n  tasks.forEach((task, index) => {\n    const li = document.createElement(\"li\");\n    li.textContent = task.text;\n    // if task.done → li.classList.add(\"done\")\n    // clicking li → toggle tasks[index].done, render()\n\n    const del = document.createElement(\"button\");\n    del.className = \"del\";\n    del.textContent = \"✕\";\n    // clicking del → remove tasks[index], render()\n    //   (e.stopPropagation() so it doesn't ALSO toggle!)\n    li.appendChild(del);\n\n    taskList.appendChild(li);\n  });\n  // counter: how many tasks are NOT done → \"N tasks left\"\n}\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  // trim the input; ignore empty\n  // push { text, done: false }, clear input, render()\n});\n\nrender();\n" }
      ],
      hints: [
        "Toggle: `li.addEventListener(\"click\", () => { tasks[index].done = !tasks[index].done; render(); });` and add the class when rendering: `if (task.done) li.classList.add(\"done\");`",
        "Delete: `del.addEventListener(\"click\", (e) => { e.stopPropagation(); tasks.splice(index, 1); render(); });`",
        "Counter: `const remaining = tasks.filter(t => !t.done).length; counter.textContent = remaining + \" tasks left\";`",
        "Submit: `const text = taskInput.value.trim(); if (!text) return; tasks.push({ text, done: false }); taskInput.value = \"\"; render();`"
      ],
      solution: {
        "script.js": "const taskForm = document.querySelector(\"#taskForm\");\nconst taskInput = document.querySelector(\"#taskInput\");\nconst taskList = document.querySelector(\"#taskList\");\nconst counter = document.querySelector(\"#counter\");\n\nlet tasks = [];   // ← the source of truth: [{ text, done }]\n\nfunction render() {\n  taskList.innerHTML = \"\";\n  tasks.forEach((task, index) => {\n    const li = document.createElement(\"li\");\n    li.textContent = task.text;\n    if (task.done) li.classList.add(\"done\");\n    li.addEventListener(\"click\", () => {\n      tasks[index].done = !tasks[index].done;\n      render();\n    });\n\n    const del = document.createElement(\"button\");\n    del.className = \"del\";\n    del.textContent = \"✕\";\n    del.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n      tasks.splice(index, 1);\n      render();\n    });\n    li.appendChild(del);\n\n    taskList.appendChild(li);\n  });\n  const remaining = tasks.filter(t => !t.done).length;\n  counter.textContent = remaining + \" tasks left\";\n}\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = taskInput.value.trim();\n  if (!text) return;\n  tasks.push({ text: text, done: false });\n  taskInput.value = \"\";\n  render();\n});\n\nrender();\n"
      }
    },

    {
      id: "cap-4",
      title: "TaskMaster: persistence",
      kind: "web", chip: "WEB", xp: 15,
      brief: "A working TaskMaster (last lesson's solution is your starter) has one flaw: refresh and *poof* — everything's gone. Fix it by pairing the state pattern with localStorage:\n\n- `save()` — `JSON.stringify(tasks)` into key `\"tasks\"` — call it after **every** change\n- on startup — `JSON.parse` what's stored (or fall back to `[]`)\n\nArrays can't go into storage directly — that's why JSON tags along.",
      steps: [
        { text: "Adding tasks writes the array to localStorage under `\"tasks\"`.",
          test: "T.type('#taskInput', 'Persist me');\nT.submit('#taskForm');\nT.type('#taskInput', 'Me too');\nT.submit('#taskForm');\nvar stored = JSON.parse(localStorage.getItem('tasks') || 'null');\nT.expect(Array.isArray(stored) && stored.length === 2, 'After adding, localStorage \"tasks\" should hold the JSON array (call save() in the submit handler).');\nT.eq(stored[0].text, 'Persist me', 'The stored objects keep their text.');" },
        { text: "Toggling saves too.",
          test: "T.click('#taskList li');\nvar stored = JSON.parse(localStorage.getItem('tasks') || '[]');\nT.expect(stored[0] && stored[0].done === true, 'After toggling, the stored copy should show done: true (save() in the toggle handler — or once inside render()).');" },
        { text: "Deleting saves as well.",
          test: "T.click('#taskList li .del');\nvar stored = JSON.parse(localStorage.getItem('tasks') || '[]');\nT.eq(stored.length, 1, 'After deleting, storage should hold 1 task.');" },
        { text: "On startup, tasks come back from storage (`JSON.parse(...) || []`).",
          test: "T.expect(typeof loadTasks === 'function', 'Keep a loadTasks() function that reads storage.');\nlocalStorage.setItem('tasks', JSON.stringify([{ text: 'from a past visit', done: false }, { text: 'also me', done: true }]));\nloadTasks();\nT.eq(T.count('#taskList li'), 2, 'loadTasks() should replace tasks with the stored array and render() — 2 items expected.');\nT.expect((T.text('#taskList') || '').indexOf('from a past visit') !== -1, 'The restored text should appear.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header>\n    <h1>TaskMaster ✅</h1>\n  </header>\n\n  <form id=\"taskForm\">\n    <input id=\"taskInput\" placeholder=\"What needs doing?\">\n    <button>Add</button>\n  </form>\n\n  <ul id=\"taskList\"></ul>\n\n  <p id=\"counter\">0 tasks left</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 20px;\n}\nheader h1 { margin: 8px 0 16px; }\n#taskForm { display: flex; gap: 8px; }\n#taskInput {\n  flex: 1; padding: 10px 12px;\n  border: 2px solid #cbd5e1; border-radius: 10px; font-size: 15px;\n}\n#taskForm button {\n  padding: 10px 16px; border: none; border-radius: 10px;\n  background: #0ea5e9; color: white; font-weight: bold; cursor: pointer;\n}\n#taskList { list-style: none; padding: 0; }\n#taskList li {\n  background: white; margin-top: 8px; padding: 12px 14px;\n  border-radius: 10px; display: flex; justify-content: space-between; gap: 8px;\n  cursor: pointer;\n}\n#taskList li.done { opacity: 0.5; text-decoration: line-through; }\n.del { border: none; background: none; color: #ef4444; font-weight: bold; cursor: pointer; }\n#counter { color: #64748b; font-size: 14px; margin-top: 14px; }\n" },
        { name: "script.js", content: "const taskForm = document.querySelector(\"#taskForm\");\nconst taskInput = document.querySelector(\"#taskInput\");\nconst taskList = document.querySelector(\"#taskList\");\nconst counter = document.querySelector(\"#counter\");\n\nlet tasks = [];\n\n// 1) function save() → localStorage.setItem(\"tasks\", JSON.stringify(tasks))\n\n// 4) function loadTasks() → tasks = JSON.parse(localStorage.getItem(\"tasks\")) || []; render();\n\nfunction render() {\n  taskList.innerHTML = \"\";\n  tasks.forEach((task, index) => {\n    const li = document.createElement(\"li\");\n    li.textContent = task.text;\n    if (task.done) li.classList.add(\"done\");\n    li.addEventListener(\"click\", () => {\n      tasks[index].done = !tasks[index].done;\n      // save!\n      render();\n    });\n\n    const del = document.createElement(\"button\");\n    del.className = \"del\";\n    del.textContent = \"✕\";\n    del.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n      tasks.splice(index, 1);\n      // save!\n      render();\n    });\n    li.appendChild(del);\n\n    taskList.appendChild(li);\n  });\n  const remaining = tasks.filter(t => !t.done).length;\n  counter.textContent = remaining + \" tasks left\";\n}\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = taskInput.value.trim();\n  if (!text) return;\n  tasks.push({ text: text, done: false });\n  // save!\n  taskInput.value = \"\";\n  render();\n});\n\nloadTasks();\n" }
      ],
      hints: [
        "`function save() { localStorage.setItem(\"tasks\", JSON.stringify(tasks)); }` — then sprinkle save() at every `// save!`.",
        "`function loadTasks() { tasks = JSON.parse(localStorage.getItem(\"tasks\")) || []; render(); }`",
        "The `|| []` fallback matters: getItem returns null on a fresh browser, and JSON.parse(null) is null."
      ],
      solution: {
        "script.js": "const taskForm = document.querySelector(\"#taskForm\");\nconst taskInput = document.querySelector(\"#taskInput\");\nconst taskList = document.querySelector(\"#taskList\");\nconst counter = document.querySelector(\"#counter\");\n\nlet tasks = [];\n\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\nfunction loadTasks() {\n  tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n  render();\n}\n\nfunction render() {\n  taskList.innerHTML = \"\";\n  tasks.forEach((task, index) => {\n    const li = document.createElement(\"li\");\n    li.textContent = task.text;\n    if (task.done) li.classList.add(\"done\");\n    li.addEventListener(\"click\", () => {\n      tasks[index].done = !tasks[index].done;\n      save();\n      render();\n    });\n\n    const del = document.createElement(\"button\");\n    del.className = \"del\";\n    del.textContent = \"✕\";\n    del.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n      tasks.splice(index, 1);\n      save();\n      render();\n    });\n    li.appendChild(del);\n\n    taskList.appendChild(li);\n  });\n  const remaining = tasks.filter(t => !t.done).length;\n  counter.textContent = remaining + \" tasks left\";\n}\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = taskInput.value.trim();\n  if (!text) return;\n  tasks.push({ text: text, done: false });\n  save();\n  taskInput.value = \"\";\n  render();\n});\n\nloadTasks();\n"
      }
    },

    {
      id: "cap-quiz",
      title: "Ship it: Git, GitHub & deploys",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What is **git**?",
          choices: ["A version-control system that tracks every change to your code", "A website for hosting videos", "A JavaScript framework", "A database"],
          answer: 0, explain: "Git snapshots your project over time — undo anything, branch safely, collaborate without chaos. GitHub is a site that HOSTS git repositories." },
        { q: "Put the everyday git flow in order:",
          code: "1. git ____   (stage changes)\n2. git ____   (snapshot them)\n3. git ____   (upload to GitHub)",
          lang: "js",
          choices: ["add → commit → push", "push → add → commit", "commit → push → add", "add → push → commit"],
          answer: 0, explain: "Stage (add), snapshot with a message (commit), then upload (push). You'll type these thousands of times." },
        { q: "A good commit message looks like…",
          choices: ["\"Add task filters to TaskMaster\"", "\"stuff\"", "\"asdfgh\"", "\"final version 2 REAL final\""],
          answer: 0, explain: "Say WHAT changed and why it matters. Future-you (and teammates) read these like a diary of the project." },
        { q: "What is a **pull request** (PR)?",
          choices: ["A proposal to merge your branch's changes, where teammates review the code", "A way to download someone's repo", "A bug report", "A paid GitHub feature"],
          answer: 0, explain: "PRs are where code review happens — the heart of team development on GitHub." },
        { q: "GitHub Pages is…",
          choices: ["Free hosting that serves a repo's files as a live website", "A code editor", "A database service", "A CSS framework"],
          answer: 0, explain: "Push static files (like this very course!), flip on Pages, get a URL. Front-ends deploy this way constantly." },
        { q: "Your TaskMaster stores tasks in localStorage. What's the main upgrade a real backend would bring?",
          choices: ["Your tasks follow you across devices, because data lives on a server", "The app gets prettier", "You no longer need HTML", "The browser runs faster"],
          answer: 0, explain: "localStorage is per-browser. A server + database (like your Unit 8 API!) gives every device the same data — that's full-stack." },
        { q: "You've built the front-end AND the back-end of the same app in this path. Connecting them means…",
          choices: ["The front-end calls the back-end's routes with fetch(), exchanging JSON", "Copy-pasting the server code into script.js", "They can't be connected", "Using the same file for both"],
          answer: 0, explain: "fetch(\"/api/todos\") from your DOM code → handleRequest-style routes on the server. You know both sides now. 🎓" }
      ]
    },

    {
      id: "cap-project",
      title: "Portfolio project: TaskMaster Pro",
      kind: "web", chip: "WEB", xp: 60, project: true,
      brief: "The finale. 🏁 Ship **TaskMaster Pro** — everything from this unit **plus filters**: All / Active / Done tabs, like every real todo app.\n\nYou start from your persistent TaskMaster; add a `filter` variable to the state, make `render()` respect it, and wire the three filter buttons. When the checks go green, you'll have built a complete, persistent, filterable app — *from an empty file to portfolio-ready*.",
      steps: [
        { text: "Adding still works (and saves): two tasks → two list items.",
          test: "T.type('#taskInput', 'Design the app');\nT.submit('#taskForm');\nT.type('#taskInput', 'Ship the app');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 2, 'Two adds → two <li>.');\nvar stored = JSON.parse(localStorage.getItem('tasks') || 'null');\nT.expect(Array.isArray(stored) && stored.length === 2, 'And they persist to localStorage.');" },
        { text: "Toggling works: first task done.",
          test: "T.click('#taskList li');\nT.expect(T.$('#taskList li').classList.contains('done'), 'Click the first task → class done.');" },
        { text: "**Active** filter shows only unfinished tasks.",
          test: "T.click('#filterActive');\nT.eq(T.count('#taskList li'), 1, 'One task is done, so Active should list exactly 1.');\nT.expect((T.text('#taskList') || '').indexOf('Ship the app') !== -1, 'And it should be the unfinished one.');" },
        { text: "**Done** filter shows only finished tasks.",
          test: "T.click('#filterDone');\nT.eq(T.count('#taskList li'), 1, 'Done should list exactly 1.');\nT.expect((T.text('#taskList') || '').indexOf('Design the app') !== -1, 'And it should be the finished one.');" },
        { text: "**All** brings everything back — and new tasks appear while it's active.",
          test: "T.click('#filterAll');\nT.eq(T.count('#taskList li'), 2, 'All should show both tasks again.');\nT.type('#taskInput', 'Celebrate');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 3, 'Adding still works with filters in play.');" },
        { text: "The counter tracks remaining (not-done) tasks whatever the filter.",
          test: "T.expect((T.text('#counter') || '').indexOf('2') !== -1, 'Two tasks remain undone → counter shows 2, even though 3 are listed.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header>\n    <h1>TaskMaster Pro 🏆</h1>\n  </header>\n\n  <form id=\"taskForm\">\n    <input id=\"taskInput\" placeholder=\"What needs doing?\">\n    <button>Add</button>\n  </form>\n\n  <nav class=\"filters\">\n    <button id=\"filterAll\" class=\"on\">All</button>\n    <button id=\"filterActive\">Active</button>\n    <button id=\"filterDone\">Done</button>\n  </nav>\n\n  <ul id=\"taskList\"></ul>\n\n  <p id=\"counter\">0 tasks left</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 20px;\n}\nheader h1 { margin: 8px 0 16px; }\n#taskForm { display: flex; gap: 8px; }\n#taskInput {\n  flex: 1; padding: 10px 12px;\n  border: 2px solid #cbd5e1; border-radius: 10px; font-size: 15px;\n}\n#taskForm button {\n  padding: 10px 16px; border: none; border-radius: 10px;\n  background: #0ea5e9; color: white; font-weight: bold; cursor: pointer;\n}\n.filters { display: flex; gap: 6px; margin-top: 12px; }\n.filters button {\n  padding: 6px 14px; border: 2px solid #cbd5e1; border-radius: 999px;\n  background: white; cursor: pointer; font-size: 13px;\n}\n.filters button.on { background: #0ea5e9; border-color: #0ea5e9; color: white; }\n#taskList { list-style: none; padding: 0; }\n#taskList li {\n  background: white; margin-top: 8px; padding: 12px 14px;\n  border-radius: 10px; display: flex; justify-content: space-between; gap: 8px;\n  cursor: pointer;\n}\n#taskList li.done { opacity: 0.5; text-decoration: line-through; }\n.del { border: none; background: none; color: #ef4444; font-weight: bold; cursor: pointer; }\n#counter { color: #64748b; font-size: 14px; margin-top: 14px; }\n" },
        { name: "script.js", content: "const taskForm = document.querySelector(\"#taskForm\");\nconst taskInput = document.querySelector(\"#taskInput\");\nconst taskList = document.querySelector(\"#taskList\");\nconst counter = document.querySelector(\"#counter\");\n\nlet tasks = [];\nlet filter = \"all\";   // \"all\" | \"active\" | \"done\"\n\nfunction save() { localStorage.setItem(\"tasks\", JSON.stringify(tasks)); }\nfunction loadTasks() { tasks = JSON.parse(localStorage.getItem(\"tasks\")) || []; render(); }\n\nfunction render() {\n  taskList.innerHTML = \"\";\n\n  // 1) pick which tasks to show based on `filter`\n  //    all → tasks · active → not done · done → done\n  const visible = tasks; // ← make this respect the filter!\n\n  visible.forEach((task) => {\n    const index = tasks.indexOf(task);\n    const li = document.createElement(\"li\");\n    li.textContent = task.text;\n    if (task.done) li.classList.add(\"done\");\n    li.addEventListener(\"click\", () => {\n      tasks[index].done = !tasks[index].done;\n      save();\n      render();\n    });\n\n    const del = document.createElement(\"button\");\n    del.className = \"del\";\n    del.textContent = \"✕\";\n    del.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n      tasks.splice(index, 1);\n      save();\n      render();\n    });\n    li.appendChild(del);\n    taskList.appendChild(li);\n  });\n\n  const remaining = tasks.filter(t => !t.done).length;\n  counter.textContent = remaining + \" tasks left\";\n}\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = taskInput.value.trim();\n  if (!text) return;\n  tasks.push({ text: text, done: false });\n  save();\n  taskInput.value = \"\";\n  render();\n});\n\n// 2) wire #filterAll / #filterActive / #filterDone:\n//    set `filter`, move the \"on\" class, render()\n\nloadTasks();\n" }
      ],
      hints: [
        "The filter logic: `const visible = filter === \"active\" ? tasks.filter(t => !t.done) : filter === \"done\" ? tasks.filter(t => t.done) : tasks;`",
        "One helper wires all three buttons: `function setFilter(f, btn) { filter = f; document.querySelectorAll(\".filters button\").forEach(b => b.classList.remove(\"on\")); btn.classList.add(\"on\"); render(); }`",
        "Then: `document.querySelector(\"#filterActive\").addEventListener(\"click\", (e) => setFilter(\"active\", e.target));` — and the same for the other two.",
        "Note the starter tracks `tasks.indexOf(task)` so toggling/deleting still hits the right item when a filter hides some — keep that."
      ],
      solution: {
        "script.js": "const taskForm = document.querySelector(\"#taskForm\");\nconst taskInput = document.querySelector(\"#taskInput\");\nconst taskList = document.querySelector(\"#taskList\");\nconst counter = document.querySelector(\"#counter\");\n\nlet tasks = [];\nlet filter = \"all\";   // \"all\" | \"active\" | \"done\"\n\nfunction save() { localStorage.setItem(\"tasks\", JSON.stringify(tasks)); }\nfunction loadTasks() { tasks = JSON.parse(localStorage.getItem(\"tasks\")) || []; render(); }\n\nfunction render() {\n  taskList.innerHTML = \"\";\n\n  const visible = filter === \"active\" ? tasks.filter(t => !t.done)\n    : filter === \"done\" ? tasks.filter(t => t.done)\n    : tasks;\n\n  visible.forEach((task) => {\n    const index = tasks.indexOf(task);\n    const li = document.createElement(\"li\");\n    li.textContent = task.text;\n    if (task.done) li.classList.add(\"done\");\n    li.addEventListener(\"click\", () => {\n      tasks[index].done = !tasks[index].done;\n      save();\n      render();\n    });\n\n    const del = document.createElement(\"button\");\n    del.className = \"del\";\n    del.textContent = \"✕\";\n    del.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n      tasks.splice(index, 1);\n      save();\n      render();\n    });\n    li.appendChild(del);\n    taskList.appendChild(li);\n  });\n\n  const remaining = tasks.filter(t => !t.done).length;\n  counter.textContent = remaining + \" tasks left\";\n}\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = taskInput.value.trim();\n  if (!text) return;\n  tasks.push({ text: text, done: false });\n  save();\n  taskInput.value = \"\";\n  render();\n});\n\nfunction setFilter(f, btn) {\n  filter = f;\n  document.querySelectorAll(\".filters button\").forEach(b => b.classList.remove(\"on\"));\n  btn.classList.add(\"on\");\n  render();\n}\n\ndocument.querySelector(\"#filterAll\").addEventListener(\"click\", (e) => setFilter(\"all\", e.target));\ndocument.querySelector(\"#filterActive\").addEventListener(\"click\", (e) => setFilter(\"active\", e.target));\ndocument.querySelector(\"#filterDone\").addEventListener(\"click\", (e) => setFilter(\"done\", e.target));\n\nloadTasks();\n"
      }
    }
  ]
});
