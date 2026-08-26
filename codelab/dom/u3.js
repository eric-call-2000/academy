/* Building Interactive Websites — Unit 3: Events in depth */
window.CODELAB.addUnit("dom", {
  id: "dom-u3",
  title: "Events in depth",
  icon: "⚡",
  blurb: "One handler for many buttons, keyboard shortcuts, bubbling and delegation — the patterns behind every real UI.",
  cheat: [
    { h: "The event object: who got clicked?", lang: "js", code: "board.addEventListener(\"click\", (e) => {\n  e.target;                 // the element the click actually hit\n  e.target.dataset.sound;   // its data-* attributes\n  e.target.textContent;     // its label\n});", note: "e.target = where the event STARTED · e.currentTarget = the element this listener is attached to." },
    { h: "Keyboard: keydown + e.key", lang: "js", code: "input.addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Enter\")  addNote();\n  if (e.key === \"Escape\") clearDraft();\n});", note: "e.key is a readable name: \"a\", \"Enter\", \"Escape\", \"ArrowDown\"." },
    { h: "Event delegation", lang: "js", code: "list.addEventListener(\"click\", (e) => {\n  const item = e.target.closest(\"li\");\n  if (!item) return;        // click hit the gaps\n  item.classList.toggle(\"done\");\n});", note: "ONE listener on the parent covers every child — even items added later." },
    { h: "Bubbling & stopPropagation", lang: "js", code: "// a click on <button> fires handlers on:\n//   button → its parent → … → body   (it bubbles UP)\ninner.addEventListener(\"click\", (e) => {\n  e.stopPropagation();      // stop the climb (rarely needed)\n});" },
    { h: "dblclick & change", lang: "js", code: "photo.addEventListener(\"dblclick\", likePhoto);\n\nsizePick.addEventListener(\"change\", (e) => {\n  e.target.value;           // the new selection\n});", note: "\"change\" fires when a pick is made or focus leaves; \"input\" fires on every keystroke." }
  ],
  lessons: [

    {
      id: "dom-u3-1",
      title: "The event object",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Three buttons, ten buttons, a hundred — you do **not** write a hundred handlers. You write ONE function, and let the **event object** tell you what happened:\n\n- every handler receives an event object (call it `e`)\n- `e.target` — the element that was actually clicked\n- `e.target.dataset.sound` / `e.target.textContent` — read the clicked thing\n\nThis soundboard has three pads. Wire them all to a single `handlePad` function — the exact pattern behind emoji pickers, on-screen keyboards and calculator apps.",
      steps: [
        { text: "Write one function `handlePad(e)` and attach it to **every** `.pad` button. Clicking a pad shows its `data-sound` in `#nowPlaying`.",
          test: "var pads = T.$$('.pad');\nT.expect(pads.length === 3, 'Keep the three .pad buttons in the HTML.');\npads[0].click();\nT.eq(T.text('#nowPlaying'), 'boom', 'Clicking the 💥 pad should show boom in #nowPlaying — set nowPlaying.textContent = e.target.dataset.sound inside the handler.');\npads[2].click();\nT.eq(T.text('#nowPlaying'), 'zap', 'The SAME function must work for every pad — e.target is always the button that was actually clicked.');" },
        { text: "Also show the clicked pad's emoji in `#lastEmoji` — that is `e.target.textContent`.",
          test: "var pads = T.$$('.pad');\npads[1].click();\nT.eq(T.text('#nowPlaying'), 'splash', 'The 🌊 pad plays splash — the shared handler covers it too.');\nT.eq(T.text('#lastEmoji'), '🌊', 'Set lastEmoji.textContent = e.target.textContent — the emoji written on the clicked button.');" },
        { text: "Every press also logs `playing: ` + the sound to the console.",
          test: "T.$$('.pad')[0].click();\nT.expect(T.logged('playing: boom'), 'Add console.log(\"playing: \" + e.target.dataset.sound) inside handlePad.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Emoji soundboard 🔊</h1>\n  <div id=\"board\">\n    <button class=\"pad\" data-sound=\"boom\">💥</button>\n    <button class=\"pad\" data-sound=\"splash\">🌊</button>\n    <button class=\"pad\" data-sound=\"zap\">⚡</button>\n  </div>\n  <p>Now playing: <strong id=\"nowPlaying\">—</strong></p>\n  <p>Last pad: <span id=\"lastEmoji\">—</span></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const pads = document.querySelectorAll(\".pad\");\nconst nowPlaying = document.querySelector(\"#nowPlaying\");\nconst lastEmoji = document.querySelector(\"#lastEmoji\");\n\n// 1) write ONE function handlePad(e) that:\n//    - shows e.target.dataset.sound in nowPlaying\n//    - shows e.target.textContent in lastEmoji\n//    - logs \"playing: \" + e.target.dataset.sound\n\n// 2) loop over pads and attach it: pad.addEventListener(\"click\", handlePad)\n" }
      ],
      hints: [
        "Define once, attach many: `function handlePad(e) { … }` then `pad.addEventListener(\"click\", handlePad);` — no parentheses after handlePad, you are handing over the function itself.",
        "Inside the handler: `nowPlaying.textContent = e.target.dataset.sound;` and `lastEmoji.textContent = e.target.textContent;`",
        "The loop: `for (const pad of pads) { pad.addEventListener(\"click\", handlePad); }` — plus the `console.log(\"playing: \" + e.target.dataset.sound);` line inside handlePad."
      ],
      solution: {
        "script.js": "const pads = document.querySelectorAll(\".pad\");\nconst nowPlaying = document.querySelector(\"#nowPlaying\");\nconst lastEmoji = document.querySelector(\"#lastEmoji\");\n\nfunction handlePad(e) {\n  nowPlaying.textContent = e.target.dataset.sound;\n  lastEmoji.textContent = e.target.textContent;\n  console.log(\"playing: \" + e.target.dataset.sound);\n}\n\nfor (const pad of pads) {\n  pad.addEventListener(\"click\", handlePad);\n}\n"
      }
    },

    {
      id: "dom-u3-2",
      title: "Keyboard events",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Time to hear the keyboard. The **`keydown`** event fires for *every* key — letters, arrows, Enter, Escape — and `e.key` names it as a readable string: `\"a\"`, `\"Enter\"`, `\"Escape\"`, `\"ArrowDown\"`.\n\nTwo shortcuts power half the apps you use:\n\n- **Enter** → commit (send the chat, add the todo)\n- **Escape** → bail out (close the box, wipe the draft)\n\nBuild a quick-capture pad with both. Note: the `input` event only fires when the *text changes* — Escape needs `keydown`.",
      steps: [
        { text: "Listen for `keydown` on `#noteInput` and show every key in `#keyReadout` as `last key: <e.key>`.",
          test: "T.$('#noteInput').dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));\nT.expect((T.text('#keyReadout') || '').indexOf('ArrowDown') !== -1, 'Pressing a key should show its name — in a keydown listener, set keyReadout.textContent = \"last key: \" + e.key.');" },
        { text: "**Enter** adds the current text as a new `<li>` in `#notes`, then clears the input.",
          test: "T.type('#noteInput', 'buy milk');\nT.$('#noteInput').dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));\nT.eq(T.count('#notes li'), 1, 'Pressing Enter should append exactly one <li> — check e.key === \"Enter\".');\nT.expect((T.text('#notes') || '').toLowerCase().indexOf('buy milk') !== -1, 'The new item should contain the typed text (noteInput.value).');\nT.eq(T.val('#noteInput'), '', 'Clear the input after adding — noteInput.value = \"\".');" },
        { text: "**Escape** wipes the draft without adding anything.",
          test: "T.type('#noteInput', 'oops draft');\nT.$('#noteInput').dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));\nT.eq(T.val('#noteInput'), '', 'Escape should wipe the draft — check e.key === \"Escape\" and empty the value.');\nT.eq(T.count('#notes li'), 1, 'Escape must NOT add a note — the list still has exactly the 1 item from the previous step.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Quick capture ⌨️</h1>\n  <input id=\"noteInput\" placeholder=\"Type a note, press Enter…\" autocomplete=\"off\">\n  <p id=\"keyReadout\">last key: —</p>\n  <ul id=\"notes\"></ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const noteInput = document.querySelector(\"#noteInput\");\nconst notes = document.querySelector(\"#notes\");\nconst keyReadout = document.querySelector(\"#keyReadout\");\n\nnoteInput.addEventListener(\"keydown\", (e) => {\n  // 1) keyReadout.textContent = \"last key: \" + e.key\n\n  // 2) if e.key is \"Enter\": append an li with noteInput.value, then clear the input\n\n  // 3) if e.key is \"Escape\": just clear the input\n});\n" }
      ],
      hints: [
        "One listener handles everything — the readout line runs unconditionally at the top, then two `if (e.key === …)` branches below it.",
        "Enter branch: `const li = document.createElement(\"li\"); li.textContent = noteInput.value; notes.appendChild(li); noteInput.value = \"\";`",
        "Escape branch: `if (e.key === \"Escape\") { noteInput.value = \"\"; }` — and the top line is `keyReadout.textContent = \"last key: \" + e.key;`"
      ],
      solution: {
        "script.js": "const noteInput = document.querySelector(\"#noteInput\");\nconst notes = document.querySelector(\"#notes\");\nconst keyReadout = document.querySelector(\"#keyReadout\");\n\nnoteInput.addEventListener(\"keydown\", (e) => {\n  keyReadout.textContent = \"last key: \" + e.key;\n\n  if (e.key === \"Enter\") {\n    const li = document.createElement(\"li\");\n    li.textContent = noteInput.value;\n    notes.appendChild(li);\n    noteInput.value = \"\";\n  }\n\n  if (e.key === \"Escape\") {\n    noteInput.value = \"\";\n  }\n});\n"
      }
    },

    {
      id: "dom-u3-3",
      title: "Event delegation",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "You *could* attach a listener to every `<li>`… and re-attach every time a new one is created. Exhausting. **Event delegation** flips it:\n\n- ONE listener on the parent (`#trail`)\n- clicks inside it **bubble up** to the parent\n- `e.target.closest(\"li\")` finds which item the click landed in\n- items added later work automatically — the listener never needed to know them\n\nThis is THE professional pattern for lists, tables, menus and feeds. The CSS already styles `.done` — your whole job is three lines of JS.",
      steps: [
        { text: "Add **one** click listener on `#trail` (the `<ul>`). A click anywhere inside an item toggles class `done` on that `<li>` — find it with `e.target.closest(\"li\")`.",
          test: "var items = T.$$('#trail li');\nT.expect(items.length === 3, 'Keep the three starter items.');\nitems[1].querySelector('span').click();\nT.expect(items[1].classList.contains('done'), 'Clicking an item (the test clicked the SPAN inside Trail mix) should mark its <li> done — listen on #trail and use e.target.closest(\"li\").');\nT.expect(!items[0].classList.contains('done') && !items[2].classList.contains('done'), 'Only the clicked item changes — closest(\"li\") finds the right <li> from wherever the click landed.');\nT.expect(T.css('#trail li.done', 'color') === 'rgb(148, 163, 184)', 'With the class on, the stylesheet grays the item out automatically — no inline styles needed.');" },
        { text: "Clicking a done item **un-checks** it (use `toggle`, not `add`).",
          test: "var items = T.$$('#trail li');\nitems[1].querySelector('span').click();\nT.expect(!items[1].classList.contains('done'), 'A second click should un-check it — classList.toggle(\"done\") handles both directions in one call.');" },
        { text: "The payoff: an item added **later** works with zero extra code. (The test appends a new item, then clicks it.)",
          test: "var trail = T.$('#trail');\nvar li = document.createElement('li');\nvar sp = document.createElement('span');\nsp.textContent = 'Map';\nli.appendChild(sp);\ntrail.appendChild(li);\nsp.click();\nT.expect(li.classList.contains('done'), 'An item added AFTER your code ran must still work — the listener lives on the parent, so new children are covered for free. If this fails, you probably attached listeners to each li instead of #trail.');\nT.eq(T.count('#trail li.done'), 1, 'Right now only the new Map item should be done.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Trail checklist 🥾</h1>\n  <p>Click an item to check it off — click again to undo.</p>\n  <ul id=\"trail\">\n    <li><span>Water bottle</span></li>\n    <li><span>Trail mix</span></li>\n    <li><span>Headlamp</span></li>\n  </ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n\n#trail li {\n  padding: 8px 10px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.done {\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n" },
        { name: "script.js", content: "const trail = document.querySelector(\"#trail\");\n\n// ONE listener, on the ul itself:\n//   trail.addEventListener(\"click\", (e) => { … })\n// inside:\n//   1) const item = e.target.closest(\"li\")\n//   2) if there is no item (the click hit the empty ul), return\n//   3) toggle class \"done\" on item\n" }
      ],
      hints: [
        "`trail.addEventListener(\"click\", (e) => { … });` — the ONLY listener in this lesson.",
        "`const item = e.target.closest(\"li\");` — then bail if it is null: `if (!item) return;`",
        "Last line: `item.classList.toggle(\"done\");` — three lines total, and it works for items that do not exist yet."
      ],
      solution: {
        "script.js": "const trail = document.querySelector(\"#trail\");\n\ntrail.addEventListener(\"click\", (e) => {\n  const item = e.target.closest(\"li\");\n  if (!item) return;\n  item.classList.toggle(\"done\");\n});\n"
      }
    },

    {
      id: "dom-u3-4",
      title: "Bubbling, dblclick & change",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Events do not stay where they happen — they **bubble**: after firing on the clicked element, they fire on its parent, then *its* parent, all the way up. That is why a listener on a `<figure>` hears double-clicks on the caption inside it. (Need to stop the climb? `e.stopPropagation()` — rarely.)\n\nTwo new events while we are here:\n\n- `dblclick` — the double-click-to-like move\n- `change` — a `<select>` made its pick (read `e.target.value`)\n\nAnd meet **`e.currentTarget`**: the element the listener is *attached to* — versus `e.target`, where the event started.",
      steps: [
        { text: "Double-clicking `#photo` likes it: bump `#likeCount` (keep the count in a variable) and add class `liked` to the figure.",
          test: "T.eq(T.text('#likeCount'), '0', 'Leave the starting like count at 0.');\nT.$('#photo').dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));\nT.eq(T.text('#likeCount'), '1', 'Listen for \"dblclick\" on #photo — one double-click should show 1.');\nT.expect(T.$('#photo').classList.contains('liked'), 'Also add the class liked so the pink frame switches on.');" },
        { text: "Double-click the **caption** — bubbling carries it up to your listener. Make sure the class lands on the figure: use `e.currentTarget`, not `e.target`.",
          test: "T.$('#photo figcaption').dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));\nT.eq(T.text('#likeCount'), '2', 'The dblclick starts on the caption and BUBBLES up to #photo — your existing listener catches it, making the count 2.');\nT.expect(T.$('#photo').classList.contains('liked') && !T.$('#photo figcaption').classList.contains('liked'), 'The class must land on the figure, not the caption — use e.currentTarget (the element the listener is attached to), never e.target here.');" },
        { text: "When `#sizePick` fires `change`, show the pick in `#sizeReadout` as `size: <value>`.",
          test: "var pick = T.$('#sizePick');\npick.value = 'large';\npick.dispatchEvent(new Event('change', { bubbles: true }));\nT.expect((T.text('#sizeReadout') || '').indexOf('large') !== -1, 'On \"change\", write the selected value into #sizeReadout — e.target.value holds the pick.');\npick.value = 'small';\npick.dispatchEvent(new Event('change', { bubbles: true }));\nT.expect((T.text('#sizeReadout') || '').indexOf('small') !== -1, 'It should track every new selection.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>One-photo gallery 📸</h1>\n\n  <figure id=\"photo\">\n    <div class=\"pic\">🌄</div>\n    <figcaption>Sunrise over the ridge</figcaption>\n  </figure>\n\n  <p>Likes: <strong id=\"likeCount\">0</strong> — double-click the photo!</p>\n\n  <label>\n    Frame size:\n    <select id=\"sizePick\">\n      <option value=\"small\">small</option>\n      <option value=\"medium\" selected>medium</option>\n      <option value=\"large\">large</option>\n    </select>\n  </label>\n  <p id=\"sizeReadout\">size: medium</p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n\n#photo {\n  width: 220px;\n  margin: 0 0 12px;\n  padding: 12px;\n  text-align: center;\n  border: 4px solid #e2e8f0;\n  border-radius: 12px;\n}\n\n.pic {\n  font-size: 64px;\n}\n\nfigcaption {\n  color: #64748b;\n  margin-top: 6px;\n}\n\n.liked {\n  border-color: #f472b6;\n  background: #fdf2f8;\n}\n" },
        { name: "script.js", content: "const photo = document.querySelector(\"#photo\");\nconst likeCount = document.querySelector(\"#likeCount\");\nconst sizePick = document.querySelector(\"#sizePick\");\nconst sizeReadout = document.querySelector(\"#sizeReadout\");\n\nlet likes = 0;\n\n// 1) on \"dblclick\" on photo:\n//    - likes++ and show it in likeCount\n//    - add class \"liked\" to e.currentTarget (the figure) — NOT e.target!\n\n// 2) on \"change\" on sizePick:\n//    - sizeReadout.textContent = \"size: \" + e.target.value\n" }
      ],
      hints: [
        "Two listeners: `photo.addEventListener(\"dblclick\", …)` and `sizePick.addEventListener(\"change\", …)`.",
        "Dblclick handler: `likes++; likeCount.textContent = likes; e.currentTarget.classList.add(\"liked\");` — currentTarget is always the figure, even when the double-click started on the caption.",
        "Change handler: `sizeReadout.textContent = \"size: \" + e.target.value;`"
      ],
      solution: {
        "script.js": "const photo = document.querySelector(\"#photo\");\nconst likeCount = document.querySelector(\"#likeCount\");\nconst sizePick = document.querySelector(\"#sizePick\");\nconst sizeReadout = document.querySelector(\"#sizeReadout\");\n\nlet likes = 0;\n\nphoto.addEventListener(\"dblclick\", (e) => {\n  likes++;\n  likeCount.textContent = likes;\n  e.currentTarget.classList.add(\"liked\");\n});\n\nsizePick.addEventListener(\"change\", (e) => {\n  sizeReadout.textContent = \"size: \" + e.target.value;\n});\n"
      }
    },

    {
      id: "dom-quiz-3",
      title: "Unit 3 quiz: Events",
      kind: "quiz", xp: 10,
      brief: "target vs currentTarget, delegation, bubbling — and picking the right event for the job.",
      questions: [
        { q: "One handler serves ten buttons. Inside it, which expression tells you which button was actually clicked?",
          choices: ["this.button", "window.clicked", "e.target", "e.type"],
          answer: 2, explain: "Every handler receives the event object; e.target is the element the event started on — read its dataset or textContent to react per-button." },
        { q: "You click an <li> inside #list. What is `e.currentTarget` in this handler?",
          code: "list.addEventListener(\"click\", (e) => {\n  // …\n});",
          lang: "js",
          choices: ["The #list element the listener is attached to", "The <li> that was clicked", "document", "The string \"click\""],
          answer: 0, explain: "currentTarget = where the listener LIVES (here, the list); target = where the event STARTED (the li). They differ whenever the click bubbles up." },
        { q: "Why put ONE click listener on a list's parent instead of one on every <li>?",
          choices: ["Lists cannot receive clicks any other way", "It keeps working for items added later — and uses one listener instead of dozens", "It makes each click fire twice", "preventDefault only works on parents"],
          answer: 1, explain: "Delegation rides on bubbling: new children are covered automatically because the parent hears everything inside it." },
        { q: "You click a <button> inside a <form> inside <body>, each with its own click handler. In the bubbling phase, which order do they fire?",
          choices: ["body → form → button", "Only the form's handler fires", "The order is random", "button → form → body"],
          answer: 3, explain: "Bubbling travels UP from the target through its ancestors. e.stopPropagation() would halt the climb partway." },
        { q: "You want to react when the user presses **Escape** in a text field. Which event?",
          choices: ["input", "keydown — it gives you e.key", "change", "submit"],
          answer: 1, explain: "input only fires when the VALUE changes, and Escape changes nothing. keydown fires for every key and names it in e.key." },
        { q: "On a text field, when does the `change` event fire?",
          choices: ["On every keystroke", "Only when Enter is pressed", "After the value changed AND the field loses focus (selects fire it as soon as you pick)", "Never on text fields"],
          answer: 2, explain: "change is the \"done editing\" event. For keystroke-by-keystroke updates use input instead." }
      ]
    }
  ]
});
