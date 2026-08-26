/* Full-Stack Capstone — Unit 1: TaskMaster returns */
window.CODELAB.addUnit("cap", {
  id: "cap-u1",
  title: "TaskMaster returns",
  icon: "📌",
  blurb: "Rebuild the classic task app — state, render, storage — and lock in the pattern every later unit upgrades.",
  cheat: [
    { h: "localStorage", lang: "js", code: "localStorage.setItem(\"note\", \"hi\");     // save (strings only)\nlocalStorage.getItem(\"note\");           // \"hi\" (or null)\nlocalStorage.removeItem(\"note\");\n\n// objects/arrays ride along as JSON:\nlocalStorage.setItem(\"tasks\", JSON.stringify(tasks));\nconst tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];" },
    { h: "State-driven UI (the big idea)", lang: "js", code: "let tasks = [];        // 1. state = source of truth\n\nfunction render() {    // 2. redraw the UI FROM state\n  list.innerHTML = \"\";\n  tasks.forEach(t => { /* build DOM */ });\n}\n\n// 3. events change state, save, re-render\ntasks.push(newTask); save(); render();", note: "This pattern IS React/Vue in miniature — you learned it in the DOM course; this whole capstone is built on it." },
    { h: "Save on every change", lang: "js", code: "function save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// every mutation ends the same way:\ntasks.push(newTask);  save();  render();\ntasks.splice(i, 1);   save();  render();", note: "One helper, called after every mutation — storage can never drift away from state." },
    { h: "Boot from storage", lang: "js", code: "function loadTasks() {\n  tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n  render();\n}\nloadTasks();   // last line of the script", note: "The || [] covers the first visit: getItem gives null, JSON.parse(null) gives null." },
    { h: "Filters are a view, not a copy", lang: "js", code: "let viewFilter = \"all\";   // \"all\" | \"open\" | \"done\"\n\n// inside render():\nconst visible = viewFilter === \"open\" ? tasks.filter(t => !t.done)\n  : viewFilter === \"done\" ? tasks.filter(t => t.done)\n  : tasks;", note: "Never fork the array — derive what's visible at render time, and keep counting from the full state." }
  ],
  lessons: [

    {
      id: "cap-u1-1",
      title: "localStorage: remember things",
      kind: "web", chip: "WEB", xp: 15, mins: 12,
      brief: "Welcome to the capstone — the course where everything you've built finally snaps together into one shippable app. 🏁\n\nFirst tool back out of the bag: **localStorage**, the browser's built-in memory. It stores strings per-site and survives reloads:\n\n- `localStorage.setItem(\"note\", value)` — save\n- `localStorage.getItem(\"note\")` — read (returns `null` if nothing's there)\n\nWarm up with a sticky note that saves on click and restores itself at startup. *(In this sandbox, storage is simulated per run — on your real deployed site it persists for good.)*",
      steps: [
        { text: "Clicking `#saveBtn` stores the textarea's value under the key `\"note\"`.",
          test: "T.type('#noteBox', 'remember the milk');\nT.click('#saveBtn');\nT.eq(localStorage.getItem('note'), 'remember the milk', 'In the click handler: localStorage.setItem(\"note\", noteBox.value)');" },
        { text: "…and confirms by setting `#savedMsg` to \"Saved!\".",
          test: "T.expect((T.text('#savedMsg') || '').toLowerCase().indexOf('saved') !== -1, 'Set #savedMsg textContent to Saved! right after storing.');" },
        { text: "Write `loadNote()` — reads the stored note (if any) back into the textarea — and call it once at the bottom.",
          test: "T.expect(typeof loadNote === 'function', 'Define function loadNote() { … } (a normal named function — the checks call it).');\nlocalStorage.setItem('note', 'planted by the test');\nloadNote();\nT.eq(T.val('#noteBox'), 'planted by the test', 'loadNote() should put localStorage.getItem(\"note\") into the textarea.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Sticky note 📌</h1>\n  <textarea id=\"noteBox\" rows=\"4\" cols=\"32\" placeholder=\"Jot something…\"></textarea>\n  <br>\n  <button id=\"saveBtn\">Save</button>\n  <span id=\"savedMsg\"></span>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const noteBox = document.querySelector(\"#noteBox\");\nconst saveBtn = document.querySelector(\"#saveBtn\");\nconst savedMsg = document.querySelector(\"#savedMsg\");\n\n// 1+2) on click: save noteBox.value under the key \"note\", then show \"Saved!\"\n\n// 3) function loadNote() — restore the saved note into noteBox\n//    …then call loadNote(); once at the bottom, so every visit restores it\n" }
      ],
      hints: [
        "Click handler: `saveBtn.addEventListener(\"click\", () => { localStorage.setItem(\"note\", noteBox.value); savedMsg.textContent = \"Saved!\"; });`",
        "loadNote: read it, and only fill the box if it isn't null: `const saved = localStorage.getItem(\"note\"); if (saved !== null) noteBox.value = saved;`",
        "Don't forget the actual `loadNote();` call as the last line — a function you never call restores nothing."
      ],
      solution: {
        "script.js": "const noteBox = document.querySelector(\"#noteBox\");\nconst saveBtn = document.querySelector(\"#saveBtn\");\nconst savedMsg = document.querySelector(\"#savedMsg\");\n\nsaveBtn.addEventListener(\"click\", () => {\n  localStorage.setItem(\"note\", noteBox.value);\n  savedMsg.textContent = \"Saved!\";\n});\n\nfunction loadNote() {\n  const saved = localStorage.getItem(\"note\");\n  if (saved !== null) {\n    noteBox.value = saved;\n  }\n}\nloadNote();\n"
      }
    },

    {
      id: "cap-u1-2",
      title: "TaskMaster: the interface",
      kind: "web", chip: "HTML", xp: 15, mins: 12,
      brief: "Time to bring back an old friend. Over the next lessons you'll rebuild **TaskMaster** — the task app that is every full-stack dev's rite of passage — and then spend the rest of this course upgrading it into a real client-server product.\n\nToday: just the interface, pure muscle memory from your HTML days. Write the semantic markup; the stylesheet is already keyed to those exact ids and classes (peek at `styles.css`!).",
      steps: [
        { text: "A `<header>` with an `<h1>` titled **TaskMaster** (emoji welcome).",
          test: "T.expect(T.$('header h1'), 'Add a <header> containing an <h1>.');\nT.expect((T.text('h1') || '').toLowerCase().indexOf('taskmaster') !== -1, 'Name it TaskMaster.');" },
        { text: "A form `id=\"taskForm\"` holding an input `id=\"taskInput\"` (with placeholder) and a button.",
          test: "T.expect(T.$('form#taskForm'), 'Add <form id=\"taskForm\">.');\nvar i = T.$('#taskForm input#taskInput');\nT.expect(i, 'Inside it: <input id=\"taskInput\">.');\nT.expect((i.getAttribute('placeholder') || '').length > 0, 'Give the input a placeholder.');\nT.expect(T.$('#taskForm button'), 'And a <button> to submit.');" },
        { text: "An empty list `id=\"taskList\"` for the tasks.",
          test: "T.expect(T.$('ul#taskList'), 'Add <ul id=\"taskList\"></ul>.');\nT.eq(T.count('#taskList li'), 0, 'Leave it empty — JavaScript will fill it next lesson.');" },
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
      id: "cap-u1-3",
      title: "TaskMaster: make it work",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "Interface ✓ — now the brain, and you already know it by heart: the **state-driven pattern**. An array `tasks` is the *source of truth*; a `render()` function redraws the list from it; events only ever (1) change the array, (2) call `render()`.\n\nThat one-way loop is the core idea behind React and every modern framework — and it's the spine of everything you'll build in this capstone. Thirty lines of vanilla JS, no framework required.",
      example: { lang: "js", code: "// events change state → render() redraws from state\ntasks.push({ text: \"…\", done: false });\nrender();" },
      steps: [
        { text: "Submitting the form adds a task `<li>` (showing its text) and clears the input — and whitespace-only submissions are ignored.",
          test: "T.type('#taskInput', 'Learn the render loop');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 1, 'One submit → one <li> (push to tasks, then render()).');\nT.expect((T.text('#taskList') || '').indexOf('Learn the render loop') !== -1, 'The <li> should show the task text.');\nT.eq(T.val('#taskInput'), '', 'Clear the input after adding.');\nT.type('#taskInput', '   ');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 1, 'Whitespace-only input should NOT add a task — trim it and bail early.');" },
        { text: "Clicking a task toggles its `done` state — the `<li>` gets/loses the class `done`.",
          test: "T.click('#taskList li');\nT.expect(T.$('#taskList li').classList.contains('done'), 'Click → flip done in the ARRAY, then re-render with class done on finished tasks.');\nT.click('#taskList li');\nT.expect(!T.$('#taskList li').classList.contains('done'), 'Clicking again should un-do it — that is what toggling means.');" },
        { text: "Each task has a ✕ button (`class=\"del\"`) that removes just that task.",
          test: "T.type('#taskInput', 'Second task');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 2, '(added a second task)');\nT.click('#taskList li .del');\nT.eq(T.count('#taskList li'), 1, 'The ✕ should delete its task — and ONLY its task (e.stopPropagation so it does not ALSO toggle).');\nT.expect((T.text('#taskList') || '').indexOf('Second task') !== -1, 'The remaining task should be the second one.');" },
        { text: "`#counter` always shows how many tasks are left **not done**.",
          test: "T.expect((T.text('#counter') || '').indexOf('1') !== -1, 'One undone task → the counter shows 1. Compute it inside render().');\nT.click('#taskList li');\nT.expect((T.text('#counter') || '').indexOf('0') !== -1, 'Marking it done → 0 left. The counter updates on every render.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header>\n    <h1>TaskMaster ✅</h1>\n  </header>\n\n  <form id=\"taskForm\">\n    <input id=\"taskInput\" placeholder=\"What needs doing?\">\n    <button>Add</button>\n  </form>\n\n  <ul id=\"taskList\"></ul>\n\n  <p id=\"counter\">0 tasks left</p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
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
      id: "cap-u1-4",
      title: "TaskMaster: keep it",
      kind: "web", chip: "WEB", xp: 15, mins: 14,
      brief: "A working TaskMaster (last lesson's solution is your starter) with one flaw: refresh and *poof* — gone. In Back-End Foundations a database played the role of memory; here the browser does. Pair the state pattern with localStorage:\n\n- `save()` — `JSON.stringify(tasks)` under the key `\"tasks\"` — after **every** change\n- `loadTasks()` on boot — `JSON.parse(...) || []`, then render\n\nThen add the classic filter row — **All / Open / Done** — driven by a single `viewFilter` variable. The golden rule: filters change what's *shown*, never what's *stored*. The counter keeps counting every open task, whatever the view.",
      steps: [
        { text: "Adding tasks writes the whole array to localStorage under `\"tasks\"` — write `save()` and call it in the submit handler.",
          test: "T.type('#taskInput', 'Water the plants');\nT.submit('#taskForm');\nT.type('#taskInput', 'Ship unit one');\nT.submit('#taskForm');\nT.eq(T.count('#taskList li'), 2, 'Two adds → two <li> (the render loop still works).');\nvar stored = JSON.parse(localStorage.getItem('tasks') || 'null');\nT.expect(Array.isArray(stored) && stored.length === 2, 'After adding, localStorage \"tasks\" should hold the JSON array — fill in save() and call it in the submit handler.');\nT.eq(stored[0].text, 'Water the plants', 'The stored objects keep their text.');" },
        { text: "Toggling and deleting save too — every mutation ends with `save()`.",
          test: "T.click('#taskList li');\nvar stored = JSON.parse(localStorage.getItem('tasks') || '[]');\nT.expect(stored[0] && stored[0].done === true, 'After toggling, the stored copy shows done: true — save() in the toggle handler too.');\nT.click('#taskList li .del');\nstored = JSON.parse(localStorage.getItem('tasks') || '[]');\nT.eq(stored.length, 1, 'After deleting, storage should hold exactly 1 task — save() in the delete handler as well.');\nT.eq(stored[0].text, 'Ship unit one', 'And it should be the one you did not delete.');" },
        { text: "On boot, `loadTasks()` restores the array from storage (`JSON.parse(...) || []`) and renders.",
          test: "T.expect(typeof loadTasks === 'function', 'Keep loadTasks() as a normal named function — the checks call it.');\nlocalStorage.setItem('tasks', JSON.stringify([{ text: 'Buy stamps', done: false }, { text: 'Mail the letter', done: true }]));\nloadTasks();\nT.eq(T.count('#taskList li'), 2, 'loadTasks() should replace tasks with the stored array AND call render() — 2 items expected.');\nT.expect((T.text('#taskList') || '').indexOf('Buy stamps') !== -1, 'The restored text should appear in the list.');" },
        { text: "The filter row works: **Open** shows unfinished, **Done** shows finished, **All** shows everything — all driven by `viewFilter` — while the counter keeps counting every open task.",
          test: "T.click('#filterOpen');\nT.eq(T.count('#taskList li'), 1, 'Open should list only the unfinished task — filter what render() SHOWS, never the tasks array itself.');\nT.expect((T.text('#taskList') || '').indexOf('Buy stamps') !== -1, 'The open one is Buy stamps.');\nT.expect(T.$('#filterOpen').classList.contains('on') && !T.$('#filterAll').classList.contains('on'), 'Move the class \"on\" to the clicked filter button.');\nT.click('#filterDone');\nT.eq(T.count('#taskList li'), 1, 'Done should list only the finished task.');\nT.expect((T.text('#taskList') || '').indexOf('Mail the letter') !== -1, 'The finished one is Mail the letter.');\nT.click('#filterAll');\nT.eq(T.count('#taskList li'), 2, 'All brings everything back.');\nT.expect((T.text('#counter') || '').indexOf('1') !== -1, 'One task is open → the counter shows 1 — count from the FULL array, not the visible slice.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header>\n    <h1>TaskMaster ✅</h1>\n  </header>\n\n  <form id=\"taskForm\">\n    <input id=\"taskInput\" placeholder=\"What needs doing?\">\n    <button>Add</button>\n  </form>\n\n  <nav class=\"filters\">\n    <button id=\"filterAll\" class=\"on\">All</button>\n    <button id=\"filterOpen\">Open</button>\n    <button id=\"filterDone\">Done</button>\n  </nav>\n\n  <ul id=\"taskList\"></ul>\n\n  <p id=\"counter\">0 tasks left</p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  background: #f1f5f9;\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 20px;\n}\nheader h1 { margin: 8px 0 16px; }\n#taskForm { display: flex; gap: 8px; }\n#taskInput {\n  flex: 1; padding: 10px 12px;\n  border: 2px solid #cbd5e1; border-radius: 10px; font-size: 15px;\n}\n#taskForm button {\n  padding: 10px 16px; border: none; border-radius: 10px;\n  background: #0ea5e9; color: white; font-weight: bold; cursor: pointer;\n}\n.filters { display: flex; gap: 6px; margin-top: 12px; }\n.filters button {\n  padding: 6px 14px; border: 2px solid #cbd5e1; border-radius: 999px;\n  background: white; cursor: pointer; font-size: 13px;\n}\n.filters button.on { background: #0ea5e9; border-color: #0ea5e9; color: white; }\n#taskList { list-style: none; padding: 0; }\n#taskList li {\n  background: white; margin-top: 8px; padding: 12px 14px;\n  border-radius: 10px; display: flex; justify-content: space-between; gap: 8px;\n  cursor: pointer;\n}\n#taskList li.done { opacity: 0.5; text-decoration: line-through; }\n.del { border: none; background: none; color: #ef4444; font-weight: bold; cursor: pointer; }\n#counter { color: #64748b; font-size: 14px; margin-top: 14px; }\n" },
        { name: "script.js", content: "const taskForm = document.querySelector(\"#taskForm\");\nconst taskInput = document.querySelector(\"#taskInput\");\nconst taskList = document.querySelector(\"#taskList\");\nconst counter = document.querySelector(\"#counter\");\n\nlet tasks = [];\nlet viewFilter = \"all\";   // \"all\" | \"open\" | \"done\"\n\nfunction save() {\n  // 1) localStorage.setItem(\"tasks\", JSON.stringify(tasks))\n}\n\nfunction loadTasks() {\n  // 3) tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];  then render()\n}\n\nfunction render() {\n  taskList.innerHTML = \"\";\n\n  // 4) respect viewFilter: all → tasks · open → not done · done → done\n  const visible = tasks; // ← make this respect viewFilter!\n\n  visible.forEach((task) => {\n    const index = tasks.indexOf(task);  // real index, even when a filter hides some\n    const li = document.createElement(\"li\");\n    li.textContent = task.text;\n    if (task.done) li.classList.add(\"done\");\n    li.addEventListener(\"click\", () => {\n      tasks[index].done = !tasks[index].done;\n      // 2) save!\n      render();\n    });\n\n    const del = document.createElement(\"button\");\n    del.className = \"del\";\n    del.textContent = \"✕\";\n    del.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n      tasks.splice(index, 1);\n      // 2) save!\n      render();\n    });\n    li.appendChild(del);\n    taskList.appendChild(li);\n  });\n\n  const remaining = tasks.filter(t => !t.done).length;\n  counter.textContent = remaining + \" tasks left\";\n}\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = taskInput.value.trim();\n  if (!text) return;\n  tasks.push({ text: text, done: false });\n  // 2) save!\n  taskInput.value = \"\";\n  render();\n});\n\n// 5) wire #filterAll / #filterOpen / #filterDone:\n//    set viewFilter, move the \"on\" class between them, render()\n\nloadTasks();\n" }
      ],
      hints: [
        "`function save() { localStorage.setItem(\"tasks\", JSON.stringify(tasks)); }` — then a `save();` call at every `// save!` marker.",
        "`function loadTasks() { tasks = JSON.parse(localStorage.getItem(\"tasks\")) || []; render(); }` — the `|| []` covers the very first visit, when getItem returns null.",
        "The visible list: `const visible = viewFilter === \"open\" ? tasks.filter(t => !t.done) : viewFilter === \"done\" ? tasks.filter(t => t.done) : tasks;`",
        "One helper wires all three buttons: `function setFilter(f, btn) { viewFilter = f; document.querySelectorAll(\".filters button\").forEach(b => b.classList.remove(\"on\")); btn.classList.add(\"on\"); render(); }` — then `document.querySelector(\"#filterOpen\").addEventListener(\"click\", (e) => setFilter(\"open\", e.target));` and the same for the other two."
      ],
      solution: {
        "script.js": "const taskForm = document.querySelector(\"#taskForm\");\nconst taskInput = document.querySelector(\"#taskInput\");\nconst taskList = document.querySelector(\"#taskList\");\nconst counter = document.querySelector(\"#counter\");\n\nlet tasks = [];\nlet viewFilter = \"all\";   // \"all\" | \"open\" | \"done\"\n\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\nfunction loadTasks() {\n  tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n  render();\n}\n\nfunction render() {\n  taskList.innerHTML = \"\";\n\n  const visible = viewFilter === \"open\" ? tasks.filter(t => !t.done)\n    : viewFilter === \"done\" ? tasks.filter(t => t.done)\n    : tasks;\n\n  visible.forEach((task) => {\n    const index = tasks.indexOf(task);  // real index, even when a filter hides some\n    const li = document.createElement(\"li\");\n    li.textContent = task.text;\n    if (task.done) li.classList.add(\"done\");\n    li.addEventListener(\"click\", () => {\n      tasks[index].done = !tasks[index].done;\n      save();\n      render();\n    });\n\n    const del = document.createElement(\"button\");\n    del.className = \"del\";\n    del.textContent = \"✕\";\n    del.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n      tasks.splice(index, 1);\n      save();\n      render();\n    });\n    li.appendChild(del);\n    taskList.appendChild(li);\n  });\n\n  const remaining = tasks.filter(t => !t.done).length;\n  counter.textContent = remaining + \" tasks left\";\n}\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = taskInput.value.trim();\n  if (!text) return;\n  tasks.push({ text: text, done: false });\n  save();\n  taskInput.value = \"\";\n  render();\n});\n\nfunction setFilter(f, btn) {\n  viewFilter = f;\n  document.querySelectorAll(\".filters button\").forEach(b => b.classList.remove(\"on\"));\n  btn.classList.add(\"on\");\n  render();\n}\n\ndocument.querySelector(\"#filterAll\").addEventListener(\"click\", (e) => setFilter(\"all\", e.target));\ndocument.querySelector(\"#filterOpen\").addEventListener(\"click\", (e) => setFilter(\"open\", e.target));\ndocument.querySelector(\"#filterDone\").addEventListener(\"click\", (e) => setFilter(\"done\", e.target));\n\nloadTasks();\n"
      }
    },

    {
      id: "cap-quiz-1",
      title: "Unit 1 quiz: State-driven apps",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What can localStorage actually store?",
          choices: ["Any JavaScript value, arrays included", "Only numbers", "Only strings — objects and arrays ride along as JSON", "Nothing once the tab closes"],
          answer: 2, explain: "setItem coerces everything to a string. That's why arrays travel as JSON.stringify(tasks) on the way in and JSON.parse(...) on the way out — and the data survives reloads just fine." },
        { q: "In the state-driven pattern, what is the ONLY job of an event handler?",
          choices: ["Build the new <li> by hand and append it to the list", "Change the state (and save), then call render()", "Reload the page so the list refreshes", "Edit index.html directly"],
          answer: 1, explain: "Handlers never touch the list DOM directly — they mutate the array, save, and let render() redraw everything from state. One source of truth, zero drift." },
        { q: "Why the `|| []` at the end?",
          code: "tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];",
          lang: "js",
          choices: ["It merges the stored array with a new one", "JSON.parse is slow, so [] acts as a cache", "It wipes storage on every load", "First visit: getItem returns null, JSON.parse(null) is null — fall back to an empty array"],
          answer: 3, explain: "On a fresh browser nothing is stored yet. Without the fallback, tasks would be null and the first tasks.push would explode." },
        { q: "Why does the submit handler start with e.preventDefault()?",
          choices: ["Forms reload the page on submit by default — preventDefault keeps your state (and your app) alive", "It stops the user from typing in the input", "It saves the form to localStorage automatically", "It's decoration; nothing changes without it"],
          answer: 0, explain: "A default form submit navigates away, throwing your in-memory array out with it. preventDefault turns the form into a pure JavaScript event source." },
        { q: "The Open filter is active, hiding 3 done tasks — yet the counter must still say how many are open. Where do the list and the counter each get their numbers?",
          choices: ["Both from the DOM — count the <li> elements", "The counter from the DOM, the list from state", "Both derive from the tasks array — the DOM is just a picture of state", "The counter needs its own separate array"],
          answer: 2, explain: "render() derives a `visible` slice for display and counts open tasks from the FULL array. Reading numbers back out of the DOM is how apps drift out of sync." },
        { q: "Nothing was ever saved under that key. What logs?",
          code: "const saved = localStorage.getItem(\"neverSaved\");\nconsole.log(saved);",
          lang: "js",
          choices: ["An empty string", "null", "undefined", "It throws an error"],
          answer: 1, explain: "Missing keys read back as null — which is exactly why loadNote() checks `!== null` and loadTasks() leans on `|| []`." }
      ]
    }
  ]
});
