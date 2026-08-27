/* Building Interactive Websites — Unit 5: Components from scratch */
window.CODELAB.addUnit("dom", {
  id: "dom-u5",
  title: "Components from scratch",
  icon: "🧩",
  blurb: "Build the UI patterns every site uses — tabs, modals, accordions, and a theme toggle that remembers.",
  cheat: [
    { h: "Tabs: the exclusive-class pattern", lang: "js", code: "tabs.forEach((tab) => {\n  tab.addEventListener(\"click\", () => {\n    tabs.forEach((t) => t.classList.remove(\"active\"));\n    panels.forEach((p) => p.classList.remove(\"active\"));\n    tab.classList.add(\"active\");\n    document.querySelector(\"#\" + tab.dataset.panel).classList.add(\"active\");\n  });\n});", note: "Deactivate everything, activate one. Tabs, galleries, steppers — same move." },
    { h: "Modal: open, close, overlay click", lang: "js", code: "function openModal()  { overlay.classList.remove(\"hidden\"); }\nfunction closeModal() { overlay.classList.add(\"hidden\"); }\n\noverlay.addEventListener(\"click\", (e) => {\n  if (e.target === overlay) closeModal(); // dialog clicks bubble, but target is the dialog\n});", note: "Never name globals plain open/close — window already owns those names." },
    { h: "Accordion: toggle, close the rest", lang: "js", code: "const wasOpen = item.classList.contains(\"open\");\nitems.forEach((it) => it.classList.remove(\"open\"));\nif (!wasOpen) item.classList.add(\"open\");" },
    { h: "localStorage: remember choices", lang: "js", code: "localStorage.setItem(\"theme\", \"dark\"); // strings only\nlocalStorage.getItem(\"theme\");         // \"dark\" — or null if never saved" },
    { h: "classList.toggle returns a boolean", lang: "js", code: "const isDark = document.body.classList.toggle(\"dark\");\nlocalStorage.setItem(\"theme\", isDark ? \"dark\" : \"light\");" }
  ],
  lessons: [

    {
      id: "dom-u5-1",
      title: "Tabs",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "Tabs are everywhere — settings screens, product pages, your browser itself. The machinery is one pattern:\n\n- every tab button and panel can wear an `active` class\n- CSS shows `.panel.active` and hides the rest\n- on click: remove `active` from **all** tabs and panels, then add it to the clicked tab and its panel\n\nEach button carries `data-panel=\"home\"` so JS knows which panel it owns: `tab.dataset.panel`. One listener body, three tabs, zero duplicated code.",
      steps: [
        { text: "Clicking the **Menu** tab activates it: the button gets the class `active` and the `#menu` panel becomes visible.",
          test: "T.click('[data-panel=\"menu\"]');\nvar menuTab = T.$('[data-panel=\"menu\"]');\nT.expect(menuTab && menuTab.classList.contains('active'), 'Clicking a tab should add \"active\" to that button — loop over the tabs and give each one a click listener.');\nT.expect(T.css('[data-panel=\"menu\"]', 'background-color') === 'rgb(14, 165, 233)', 'With the class on, the CSS paints the active tab blue automatically — no inline styles needed.');\nT.expect(T.css('#menu', 'display') === 'block', 'Also add \"active\" to the matching panel: document.querySelector(\"#\" + tab.dataset.panel).');" },
        { text: "Only one tab and one panel are active at a time — the old ones get deactivated.",
          test: "T.expect(!T.$('[data-panel=\"home\"]').classList.contains('active'), 'Home was active before the Menu click — remove \"active\" from EVERY tab before activating the new one.');\nT.expect(T.css('#home', 'display') === 'none', 'The #home panel should be hidden now — remove \"active\" from every panel too.');\nT.eq(T.count('.tab.active'), 1, 'Exactly one tab should be active at a time.');\nT.eq(T.count('.panel.active'), 1, 'Exactly one panel should be active at a time.');" },
        { text: "It works for every tab: clicking **Hours** shows the hours and hides the menu.",
          test: "T.click('[data-panel=\"hours\"]');\nT.expect(T.css('#hours', 'display') === 'block', 'Clicking Hours should reveal the #hours panel — the same listener logic should cover all three tabs.');\nT.expect(T.css('#menu', 'display') === 'none', 'And the #menu panel should hide again.');\nT.eq(T.count('.tab.active'), 1, 'Still exactly one active tab.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Luna Café</h1>\n\n  <div class=\"tabs\">\n    <button class=\"tab active\" data-panel=\"home\">Home</button>\n    <button class=\"tab\" data-panel=\"menu\">Menu</button>\n    <button class=\"tab\" data-panel=\"hours\">Hours</button>\n  </div>\n\n  <section id=\"home\" class=\"panel active\">Welcome to Luna Café — best espresso on the block.</section>\n  <section id=\"menu\" class=\"panel\">Espresso · Matcha latte · Almond croissant</section>\n  <section id=\"hours\" class=\"panel\">Open 8am–4pm, every day.</section>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\n\n.tab {\n  padding: 8px 16px;\n  border: 2px solid #cbd5e1;\n  background: white;\n  cursor: pointer;\n}\n\n.tab.active {\n  background: #0ea5e9;\n  border-color: #0ea5e9;\n  color: white;\n}\n\n.panel {\n  display: none;\n  padding: 16px;\n  border: 2px solid #cbd5e1;\n  margin-top: 8px;\n}\n\n.panel.active {\n  display: block;\n}\n" },
        { name: "script.js", content: "const tabs = document.querySelectorAll(\".tab\");\nconst panels = document.querySelectorAll(\".panel\");\n\n// For each tab button, add a \"click\" listener that:\n// 1) removes \"active\" from EVERY tab and EVERY panel\n// 2) adds \"active\" to the clicked tab\n// 3) adds \"active\" to its panel:\n//    document.querySelector(\"#\" + tab.dataset.panel)\n" }
      ],
      hints: [
        "Loop with forEach: `tabs.forEach((tab) => { tab.addEventListener(\"click\", () => { … }); });`",
        "Deactivate everything first: `tabs.forEach((t) => t.classList.remove(\"active\")); panels.forEach((p) => p.classList.remove(\"active\"));`",
        "Then activate the pair: `tab.classList.add(\"active\"); document.querySelector(\"#\" + tab.dataset.panel).classList.add(\"active\");`"
      ],
      solution: {
        "script.js": "const tabs = document.querySelectorAll(\".tab\");\nconst panels = document.querySelectorAll(\".panel\");\n\ntabs.forEach((tab) => {\n  tab.addEventListener(\"click\", () => {\n    tabs.forEach((t) => t.classList.remove(\"active\"));\n    panels.forEach((p) => p.classList.remove(\"active\"));\n    tab.classList.add(\"active\");\n    document.querySelector(\"#\" + tab.dataset.panel).classList.add(\"active\");\n  });\n});\n"
      }
    },

    {
      id: "dom-u5-2",
      title: "Modal",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "Modals (popups) look fancy but they're two moving parts: a full-screen **overlay** div and a `hidden` class. Remove the class → modal on. Add it back → gone.\n\nWrite `openModal()` and `closeModal()` — never plain `open`/`close`; the browser already defines `window.open` and `window.close`, and shadowing them causes weird bugs.\n\nThe pro detail: clicking the dark backdrop closes the modal, but clicking inside the white dialog doesn't. Clicks inside bubble up to the overlay — check `e.target === overlay` to tell the difference.",
      steps: [
        { text: "Define `openModal()` and `closeModal()`. The modal starts hidden, and clicking **Leave a review** opens it.",
          test: "T.expect(typeof openModal === 'function' && typeof closeModal === 'function', 'Define two functions: openModal and closeModal (NOT plain open/close — the browser already owns those names).');\nT.expect(T.css('#overlay', 'display') === 'none', 'Before any click the overlay should still wear the \"hidden\" class.');\nT.click('#openBtn');\nT.expect(T.css('#overlay', 'display') !== 'none', 'Clicking #openBtn should call openModal() and remove \"hidden\" from the overlay.');" },
        { text: "The ✕ button closes it again.",
          test: "T.click('#closeBtn');\nT.expect(T.css('#overlay', 'display') === 'none', 'Clicking #closeBtn should call closeModal() and hide the overlay again.');" },
        { text: "Clicking the dark **overlay** closes the modal — but clicking inside the white dialog does not.",
          test: "T.click('#openBtn');\nT.click('#dialog');\nT.expect(T.css('#overlay', 'display') !== 'none', 'A click INSIDE the dialog must NOT close the modal — in the overlay listener, only close when e.target === overlay.');\nT.click('#overlay');\nT.expect(T.css('#overlay', 'display') === 'none', 'A click on the overlay itself (e.target === overlay) should close it.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Photo of the day 🌄</h1>\n  <button id=\"openBtn\">Leave a review</button>\n\n  <div id=\"overlay\" class=\"overlay hidden\">\n    <div id=\"dialog\" class=\"dialog\">\n      <button id=\"closeBtn\">✕</button>\n      <h2>Your review</h2>\n      <p>Five stars, obviously.</p>\n    </div>\n  </div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\n\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dialog {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  min-width: 220px;\n  position: relative;\n}\n\n#closeBtn {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  border: none;\n  background: none;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n/* keep .hidden last so it wins */\n.hidden { display: none; }\n" },
        { name: "script.js", content: "const overlay = document.querySelector(\"#overlay\");\nconst openBtn = document.querySelector(\"#openBtn\");\nconst closeBtn = document.querySelector(\"#closeBtn\");\n\n// 1) openModal(): remove \"hidden\" from the overlay\n//    closeModal(): add it back\n//    (never name globals plain open/close — the browser owns those!)\n\n// 2) openBtn opens, closeBtn closes\n\n// 3) clicking the dark overlay ITSELF closes too:\n//    in an overlay click listener, close only if e.target === overlay\n" }
      ],
      hints: [
        "`function openModal() { overlay.classList.remove(\"hidden\"); }` — closeModal adds it back.",
        "Wire the buttons: `openBtn.addEventListener(\"click\", openModal); closeBtn.addEventListener(\"click\", closeModal);`",
        "The overlay guard: `overlay.addEventListener(\"click\", (e) => { if (e.target === overlay) closeModal(); });` — dialog clicks bubble up, but their target is the dialog, not the overlay."
      ],
      solution: {
        "script.js": "const overlay = document.querySelector(\"#overlay\");\nconst openBtn = document.querySelector(\"#openBtn\");\nconst closeBtn = document.querySelector(\"#closeBtn\");\n\nfunction openModal() {\n  overlay.classList.remove(\"hidden\");\n}\n\nfunction closeModal() {\n  overlay.classList.add(\"hidden\");\n}\n\nopenBtn.addEventListener(\"click\", openModal);\ncloseBtn.addEventListener(\"click\", closeModal);\n\noverlay.addEventListener(\"click\", (e) => {\n  if (e.target === overlay) {\n    closeModal();\n  }\n});\n"
      }
    },

    {
      id: "dom-u5-3",
      title: "Accordion",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "The accordion: click a question, its answer folds out; click again, it folds shut. One `open` class on the `.item`, CSS does the reveal.\n\n- `classList.toggle(\"open\")` gets you 90% of the way\n- the classy upgrade: opening one item **closes the others**, so only one answer shows\n\nThe trick for the upgrade: remember whether the clicked item was already open, close *all* of them, then reopen it only if it wasn't. Plain toggle can't do that.",
      steps: [
        { text: "Clicking a question opens its answer: the `.item` gets the class `open`.",
          test: "T.click('#item1 .item-header');\nT.expect(T.$('#item1').classList.contains('open'), 'Clicking the first question should add \"open\" to its .item — listen for clicks on each .item-header.');\nT.expect(T.css('#item1 .item-body', 'display') === 'block', 'With \"open\" on, the CSS reveals the answer automatically.');" },
        { text: "Clicking the same question again closes it — a true toggle.",
          test: "T.click('#item1 .item-header');\nT.expect(!T.$('#item1').classList.contains('open'), 'A second click on the same header should remove \"open\" again.');\nT.expect(T.css('#item1 .item-body', 'display') === 'none', 'The answer should be hidden once \"open\" is gone.');" },
        { text: "Opening one item closes the others — only one answer visible at a time.",
          test: "T.click('#item1 .item-header');\nT.click('#item2 .item-header');\nT.expect(T.$('#item2').classList.contains('open'), 'Item 2 should be open after its click.');\nT.expect(!T.$('#item1').classList.contains('open'), 'Item 1 should have closed when item 2 opened — close ALL items before opening the clicked one.');\nT.eq(T.count('.item.open'), 1, 'Exactly one item may be open at a time.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>FAQ</h1>\n\n  <div id=\"faq\">\n    <div class=\"item\" id=\"item1\">\n      <button class=\"item-header\">Do you ship internationally?</button>\n      <div class=\"item-body\">Yes — everywhere except the Moon (customs is a nightmare).</div>\n    </div>\n    <div class=\"item\" id=\"item2\">\n      <button class=\"item-header\">Can I return an order?</button>\n      <div class=\"item-body\">Within 30 days, no questions asked.</div>\n    </div>\n    <div class=\"item\" id=\"item3\">\n      <button class=\"item-header\">Is there a student discount?</button>\n      <div class=\"item-body\">10% off with a valid student email.</div>\n    </div>\n  </div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\n\n.item {\n  border: 2px solid #cbd5e1;\n  margin-bottom: 8px;\n}\n\n.item-header {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 12px;\n  border: none;\n  background: #f1f5f9;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.item-body {\n  display: none;\n  padding: 12px;\n}\n\n.item.open .item-body {\n  display: block;\n}\n\n.item.open .item-header {\n  background: #0ea5e9;\n  color: white;\n}\n" },
        { name: "script.js", content: "const items = document.querySelectorAll(\".item\");\n\n// For each item, listen for clicks on its header\n// (item.querySelector(\".item-header\")) and toggle the \"open\" class.\n//\n// Step 3 upgrade: opening one item should CLOSE the others —\n// remember whether THIS item was open, close all, reopen if it wasn't.\n" }
      ],
      hints: [
        "Start with a plain toggle: `items.forEach((item) => { item.querySelector(\".item-header\").addEventListener(\"click\", () => { item.classList.toggle(\"open\"); }); });`",
        "For step 3, toggle alone is not enough — you have to close the other items first, without breaking the second-click-closes behavior.",
        "The full move: `const wasOpen = item.classList.contains(\"open\"); items.forEach((it) => it.classList.remove(\"open\")); if (!wasOpen) item.classList.add(\"open\");`"
      ],
      solution: {
        "script.js": "const items = document.querySelectorAll(\".item\");\n\nitems.forEach((item) => {\n  const header = item.querySelector(\".item-header\");\n  header.addEventListener(\"click\", () => {\n    const wasOpen = item.classList.contains(\"open\");\n    items.forEach((it) => it.classList.remove(\"open\"));\n    if (!wasOpen) {\n      item.classList.add(\"open\");\n    }\n  });\n});\n"
      }
    },

    {
      id: "dom-u5-4",
      title: "Theme toggle with memory",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "A theme toggle users love is one that **remembers**. Two halves:\n\n- toggle: flip the `dark` class on `document.body`, then save `\"dark\"` or `\"light\"` with `localStorage.setItem(\"theme\", ...)`\n- restore: `applySavedTheme()` reads `localStorage.getItem(\"theme\")` and applies the class — call it once on page load\n\nHandy: `classList.toggle` returns `true` when the class is now ON — perfect for deciding what to save. localStorage stores strings and survives reloads, so the next visit opens already in the user's theme.",
      steps: [
        { text: "Clicking `#themeBtn` toggles the class `dark` on `document.body` — dark page, light text.",
          test: "document.body.classList.remove('dark');\nT.click('#themeBtn');\nT.expect(document.body.classList.contains('dark'), 'The click should toggle the \"dark\" class on document.body.');\nT.expect(T.css('body', 'background-color') === 'rgb(15, 23, 42)', 'With the class on, the CSS turns the page dark automatically.');\nT.click('#themeBtn');\nT.expect(!document.body.classList.contains('dark'), 'A second click should toggle it back off.');\nT.expect(T.css('body', 'background-color') === 'rgb(248, 250, 252)', 'Back to the light background.');" },
        { text: "Every toggle saves the current choice — `\"dark\"` or `\"light\"` — under the key `theme` in localStorage.",
          test: "T.click('#themeBtn');\nT.eq(localStorage.getItem('theme'), 'dark', 'After toggling to dark, save it: localStorage.setItem(\"theme\", \"dark\").');\nT.click('#themeBtn');\nT.eq(localStorage.getItem('theme'), 'light', 'And after toggling back, save \"light\".');" },
        { text: "`applySavedTheme()` reads the saved value and applies it — the test plants a value and calls your function.",
          test: "T.expect(typeof applySavedTheme === 'function', 'Define a function named applySavedTheme (and call it once at the bottom of your script).');\nlocalStorage.setItem('theme', 'dark');\napplySavedTheme();\nT.expect(document.body.classList.contains('dark'), 'The test saved \"dark\" — applySavedTheme() should read localStorage and add the class.');\nlocalStorage.setItem('theme', 'light');\napplySavedTheme();\nT.expect(!document.body.classList.contains('dark'), 'The test saved \"light\" — applySavedTheme() should remove the class.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Night reader 🌙</h1>\n  <button id=\"themeBtn\">Toggle theme</button>\n  <p>Some sites remember your theme forever. Yours is about to.</p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n  background: #f8fafc;\n  color: #0f172a;\n}\n\nbody.dark {\n  background: #0f172a;\n  color: #f8fafc;\n}\n\n#themeBtn {\n  padding: 8px 16px;\n  font-size: 15px;\n  cursor: pointer;\n}\n" },
        { name: "script.js", content: "const themeBtn = document.querySelector(\"#themeBtn\");\n\n// 1) On #themeBtn click: toggle the \"dark\" class on document.body,\n//    then save \"dark\" or \"light\" with localStorage.setItem(\"theme\", ...)\n\n// 2) applySavedTheme(): read localStorage.getItem(\"theme\");\n//    if it is \"dark\", add the class; otherwise remove it.\n\n// 3) Call applySavedTheme() once here at the bottom.\n" }
      ],
      hints: [
        "`document.body.classList.toggle(\"dark\")` returns `true` when the class is now ON — perfect for deciding what to save.",
        "Inside the click handler: `const isDark = document.body.classList.toggle(\"dark\"); localStorage.setItem(\"theme\", isDark ? \"dark\" : \"light\");`",
        "`function applySavedTheme() { if (localStorage.getItem(\"theme\") === \"dark\") { document.body.classList.add(\"dark\"); } else { document.body.classList.remove(\"dark\"); } }` — then call `applySavedTheme();` at the bottom."
      ],
      solution: {
        "script.js": "const themeBtn = document.querySelector(\"#themeBtn\");\n\nthemeBtn.addEventListener(\"click\", () => {\n  const isDark = document.body.classList.toggle(\"dark\");\n  localStorage.setItem(\"theme\", isDark ? \"dark\" : \"light\");\n});\n\nfunction applySavedTheme() {\n  if (localStorage.getItem(\"theme\") === \"dark\") {\n    document.body.classList.add(\"dark\");\n  } else {\n    document.body.classList.remove(\"dark\");\n  }\n}\n\napplySavedTheme();\n"
      }
    },

    {
      id: "dom-quiz-5",
      title: "Unit 5 quiz: Components",
      kind: "quiz", xp: 10,
      brief: "Tabs, modals, accordions and remembered themes. 80% to pass.",
      questions: [
        { q: "A tab bar shows exactly one panel at a time. What's the standard pattern on each click?",
          choices: ["Set panel.style.display by hand on each panel", "Rebuild all the panels with innerHTML each time", "Deactivate every tab and panel, then activate one", "Give each panel its own click listener"],
          answer: 2, explain: "Deactivate everything, then activate exactly one — the exclusive-class pattern behind tabs, accordions, image galleries and more. Strip the active class off ALL tabs and ALL panels first, then add it back to the clicked tab and its matching panel, and let CSS do the showing." },
        { q: "This modal closes even when you click inside the dialog. The fix?",
          code: "overlay.addEventListener(\"click\", (e) => {\n  closeModal();\n});",
          lang: "js",
          choices: ["Only call closeModal() when e.target === overlay", "Listen for dblclick on the overlay instead", "Move the listener onto document instead of the overlay", "Take the dialog element out of the overlay"],
          answer: 0, explain: "Clicks inside the dialog bubble up to the overlay, so the overlay's handler runs either way — but e.target stays the element you actually pressed. Guard on it and the backdrop still closes, while a click on the dialog is ignored." },
        { q: "What does `el.classList.toggle(\"open\")` do?",
          choices: ["Adds the class every time it is called", "Removes the class every time it is called", "Throws an error when the class is already there", "Adds it if missing, removes it if present"],
          answer: 3, explain: "One call, both directions — that is the whole point of toggle. It also hands back a boolean: true when the class is now ON, false when it just came off, which is perfect for saving the new state right after the flip." },
        { q: "`localStorage.getItem(\"theme\")` when nothing was ever saved returns…",
          choices: ["An empty string", "null", "undefined", "It throws an error"],
          answer: 1, explain: "Missing keys come back as null — compare against the value you expect (=== \"dark\") instead of trusting it blindly." },
        { q: "Which is true about `localStorage.setItem(\"theme\", \"dark\")`?",
          choices: ["The value disappears when the tab closes", "It can store objects and arrays directly", "It stores a string that survives reloads", "It syncs the value to your server automatically"],
          answer: 2, explain: "localStorage keeps string values on the user's own machine, across reloads and across visits — perfect for remembering a preference like a theme. Nothing is sent anywhere, and objects have to go through JSON.stringify on the way in. (sessionStorage is the one that dies with the tab.)" },
        { q: "Why name your modal functions `openModal`/`closeModal` instead of `open`/`close`?",
          choices: ["open and close are reserved keywords in JavaScript", "window.open and window.close already exist", "Shorter function names run measurably slower", "No reason at all — any name works equally well"],
          answer: 1, explain: "Global functions share a namespace with window's built-ins — open, close, name, status, focus, print. Declaring your own open() shadows window.open, so anything expecting the real one breaks in ways that are miserable to debug. Specific names dodge the collision, and none of these words are reserved keywords." }
      ]
    }
  ]
});
