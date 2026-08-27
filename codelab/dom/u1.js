/* Building Interactive Websites — Unit 1: Select, change, create */
window.CODELAB.addUnit("dom", {
  id: "dom-u1",
  title: "Select, change, create",
  icon: "🔍",
  blurb: "Grab any element on the page — then change it, restyle it, build new ones, and delete the rest.",
  cheat: [
    { h: "Selecting elements", lang: "js", code: "const title = document.querySelector(\"#title\"); // FIRST match (CSS selector!)\nconst cards = document.querySelectorAll(\".card\"); // ALL matches" },
    { h: "Changing text & styles", lang: "js", code: "el.textContent = \"New text\";\nel.style.color = \"royalblue\";" },
    { h: "classList — styles the right way", lang: "js", code: "el.classList.add(\"active\", \"rounded\");\nel.classList.remove(\"dusty\");\nel.classList.toggle(\"dark\");", note: "Define the looks in CSS once; JS just flips the switch." },
    { h: "textContent vs innerHTML", lang: "js", code: "el.textContent = \"<b>hi</b>\"; // tags show literally — always safe\nel.innerHTML = \"<b>hi</b>\";    // tags parsed into real elements", note: "NEVER innerHTML untrusted input (comments, usernames…) — that's an XSS attack." },
    { h: "Creating & removing", lang: "js", code: "const li = document.createElement(\"li\");\nli.textContent = \"New item\";\nlist.appendChild(li);\n\noldEl.remove(); // gone from the page" }
  ],
  lessons: [

    {
      id: "dom-u1-1",
      title: "Select & change",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "The browser turns your HTML into a live object tree — the **DOM** (Document Object Model). JavaScript can grab any node and change it, and the page updates instantly:\n\n- `document.querySelector(\"#title\")` — find by any **CSS selector** (`#id`, `.class`, `tag`)\n- `.textContent` — read/replace its text\n- `.style.color` — set inline styles\n\nYour code lives in `script.js` (see the file tabs). It's already linked at the bottom of the HTML — scripts load *after* the elements they touch, so everything is grabbable.",
      steps: [
        { text: "Change the `#title` text to **\"Hello, DOM!\"** using `querySelector` + `textContent`.",
          test: "var t = (T.text('#title') || '').toLowerCase();\nT.expect(t.indexOf('dom') !== -1, 'Set document.querySelector(\"#title\").textContent = \"Hello, DOM!\" — the heading still says: ' + T.text('#title'));" },
        { text: "Turn the `#intro` paragraph **royalblue** via `.style.color`.",
          test: "T.expect(T.css('#intro', 'color') === 'rgb(65, 105, 225)', 'Set .style.color = \"royalblue\" on the #intro element.');" },
        { text: "Selectors are CSS: grab the element with **class** `tagline` (selector `\".tagline\"`) and set its text to **\"This page is live.\"**",
          test: "var tag = (T.text('.tagline') || '').toLowerCase();\nT.expect(tag.indexOf('live') !== -1, 'querySelector(\".tagline\") — class selectors need the leading dot. Then set its textContent to \"This page is live.\"');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1 id=\"title\">Just a static page…</h1>\n  <p id=\"intro\">Nothing ever changes around here.</p>\n  <p class=\"tagline\">Same old text since 1996.</p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "// 1) grab #title, set its textContent to \"Hello, DOM!\"\n\n// 2) grab #intro, set style.color = \"royalblue\"\n\n// 3) grab the element with class \"tagline\" (selector: \".tagline\")\n//    and set its textContent to \"This page is live.\"\n" }
      ],
      hints: [
        "`const title = document.querySelector(\"#title\");` then `title.textContent = \"Hello, DOM!\";`",
        "Styles from JS: `document.querySelector(\"#intro\").style.color = \"royalblue\";`",
        "Classes select with a dot: `document.querySelector(\".tagline\").textContent = \"This page is live.\";`"
      ],
      solution: {
        "script.js": "const title = document.querySelector(\"#title\");\ntitle.textContent = \"Hello, DOM!\";\n\nconst intro = document.querySelector(\"#intro\");\nintro.style.color = \"royalblue\";\n\nconst tagline = document.querySelector(\".tagline\");\ntagline.textContent = \"This page is live.\";\n"
      }
    },

    {
      id: "dom-u1-2",
      title: "classList: styles the right way",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Inline styles get messy fast. The pro move: define looks in **CSS classes**, then let JavaScript switch classes on and off:\n\n- `el.classList.add(\"active\")` — put a class on (several at once works too)\n- `el.classList.remove(\"dusty\")` — take one off\n- `el.classList.toggle(\"dark\")` — flip it each call\n\nOne class can change ten styles at once — that's the power. `styles.css` already defines everything; your whole job is three small lines of JS.",
      steps: [
        { text: "The box starts with a class `dusty` that grays it out. **Remove** it with `classList.remove`.",
          test: "var box = T.$('#box');\nT.expect(box && !box.classList.contains('dusty'), 'Use box.classList.remove(\"dusty\") to wake the box up.');" },
        { text: "Add the class `active` — the CSS turns the box green on its own.",
          test: "var box = T.$('#box');\nT.expect(box && box.classList.contains('active'), 'Use box.classList.add(\"active\").');\nT.expect(T.css('#box', 'background-color') === 'rgb(34, 197, 94)', 'Once the class is on, the CSS should turn the box green automatically — no .style needed.');" },
        { text: "Also add the class `rounded` (elements can wear many classes).",
          test: "T.expect(T.$('#box').classList.contains('rounded'), 'Add a second class: classList.add(\"rounded\") — or add(\"active\", \"rounded\") in one call.');\nT.expect(T.css('#box', 'border-radius') === '16px', 'The .rounded class in styles.css should round the corners once the class is on.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div id=\"box\" class=\"dusty\">deploy: pending…</div>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Already styled for you — your JS just flips the switches */\n#box {\n  padding: 24px;\n  background: #e2e8f0;\n  font-family: Arial, sans-serif;\n}\n\n#box.dusty {\n  opacity: 0.4;\n  filter: grayscale(1);\n}\n\n.active {\n  background: #22c55e !important;\n  color: white;\n}\n\n.rounded {\n  border-radius: 16px;\n}\n" },
        { name: "script.js", content: "const box = document.querySelector(\"#box\");\n\n// 1) remove the \"dusty\" class\n\n// 2) add the \"active\" class\n\n// 3) add the \"rounded\" class too\n" }
      ],
      hints: [
        "`box.classList.remove(\"dusty\");` — the gray filter disappears with the class.",
        "`box.classList.add(\"active\");` — the CSS does the rest.",
        "classList.add accepts several at once: `box.classList.add(\"active\", \"rounded\");`"
      ],
      solution: {
        "script.js": "const box = document.querySelector(\"#box\");\n\nbox.classList.remove(\"dusty\");\nbox.classList.add(\"active\", \"rounded\");\n"
      }
    },

    {
      id: "dom-u1-3",
      title: "textContent vs innerHTML",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Two ways to put content inside an element — and they behave *very* differently:\n\n- `el.textContent = str` — the string shows **as-is**. Tags like `<b>` appear literally on screen.\n- `el.innerHTML = str` — the string is **parsed as HTML**. Tags become real elements.\n\ninnerHTML is great for markup *you* wrote. But feed it something a stranger typed — a comment, a username, a URL parameter — and you've handed them paste-HTML-into-your-page superpowers. That's an **XSS attack**, one of the most common web vulnerabilities. Rule of the pros: **untrusted input goes through textContent, always.**",
      steps: [
        { text: "Set `#plain`'s **textContent** to the string `\"<b>bold?</b>\"` — the tags should appear as literal text.",
          test: "var t = T.text('#plain') || '';\nT.expect(t.indexOf('<b>') !== -1, 'Set plain.textContent = \"<b>bold?</b>\" — with textContent, the tags show up as plain text.');\nT.eq(T.count('#plain b'), 0, 'textContent never builds elements — if a real <b> appeared in #plain, that line used innerHTML.');" },
        { text: "Set `#rich`'s **innerHTML** to `\"Breaking: <strong>DOM mastered</strong>\"` — this time the tag becomes a real element.",
          test: "T.eq(T.count('#rich strong'), 1, 'Set rich.innerHTML to the string with <strong> in it — innerHTML parses tags into real elements.');\nT.expect((T.text('#rich strong') || '').toLowerCase().indexOf('mastered') !== -1, 'The <strong> element should wrap the words \"DOM mastered\".');\nT.expect((T.text('#rich') || '').indexOf('<strong>') === -1, 'No literal tags should be visible in #rich — if you can read <strong> on the page, that line used textContent.');" },
        { text: "`sketchyComment` is attacker-controlled input. Display it inside `#comment` the **safe** way.",
          test: "var c = T.text('#comment') || '';\nT.expect(c.indexOf('<img') !== -1, 'Show sketchyComment in #comment with textContent — the attack should appear as harmless literal text.');\nT.eq(T.count('#comment img'), 0, 'An <img> element exists — the attack went through the HTML parser! Switch that line from innerHTML to textContent.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Tag or text?</h1>\n  <p id=\"plain\"></p>\n  <p id=\"rich\"></p>\n  <h2>Latest comment</h2>\n  <p id=\"comment\"></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const plain = document.querySelector(\"#plain\");\nconst rich = document.querySelector(\"#rich\");\nconst comment = document.querySelector(\"#comment\");\n\n// A \"user comment\" straight from the internet — do NOT trust it:\nconst sketchyComment = \"<img src=nope onerror=stealPasswords()> Nice post!\";\n\n// 1) plain.textContent = \"<b>bold?</b>\"   → tags show as text\n\n// 2) rich.innerHTML = \"Breaking: <strong>DOM mastered</strong>\"   → real markup\n\n// 3) show sketchyComment inside #comment the SAFE way\n" }
      ],
      hints: [
        "Both are plain assignments: `el.textContent = \"...\"` vs `el.innerHTML = \"...\"` — the property name decides whether the string gets parsed.",
        "Step 2 wants real markup: `rich.innerHTML = \"Breaking: <strong>DOM mastered</strong>\";`",
        "The safe display line is `comment.textContent = sketchyComment;` — same string, zero parsing, zero danger."
      ],
      solution: {
        "script.js": "const plain = document.querySelector(\"#plain\");\nconst rich = document.querySelector(\"#rich\");\nconst comment = document.querySelector(\"#comment\");\n\n// A \"user comment\" straight from the internet — do NOT trust it:\nconst sketchyComment = \"<img src=nope onerror=stealPasswords()> Nice post!\";\n\nplain.textContent = \"<b>bold?</b>\";\n\nrich.innerHTML = \"Breaking: <strong>DOM mastered</strong>\";\n\ncomment.textContent = sketchyComment;\n"
      }
    },

    {
      id: "dom-u1-4",
      title: "Creating & removing elements",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "Real apps *build* their UI from data — your inbox, a feed, search results. The production loop:\n\n- `document.createElement(\"li\")` — make a node in memory\n- `li.textContent = ...` — fill it in\n- `list.appendChild(li)` — mount it on the page\n\nAnd the reverse move: `el.remove()` deletes a node. Every \"loading…\" spinner and \"no results yet\" placeholder dies by that method.\n\nClear out the placeholder, then render the whole `crew` array into the list.",
      steps: [
        { text: "Delete the `#placeholder` item with `.remove()`.",
          test: "T.eq(T.count('#placeholder'), 0, 'Grab #placeholder with querySelector and call .remove() on it.');\nT.expect((T.text('#list') || '').toLowerCase().indexOf('no crew') === -1, 'The no-crew placeholder text should be gone from the list.');" },
        { text: "Create one `<li>` per crew member and append it to `#list` — four in total.",
          test: "T.eq(T.count('#list li'), 4, 'Loop over crew and append one <li> per member — the list currently has ' + T.count('#list li') + '.');" },
        { text: "Each `<li>` shows that member's name, in array order.",
          test: "var lis = T.$$('#list li');\nvar txt = (T.text('#list') || '').toLowerCase();\nT.expect(txt.indexOf('rosa') !== -1 && txt.indexOf('kim') !== -1 && txt.indexOf('dev') !== -1 && txt.indexOf('ana') !== -1, 'Set li.textContent to the member name inside the loop.');\nT.expect(lis.length === 4 && (lis[0].textContent || '').indexOf('Rosa') !== -1 && (lis[3].textContent || '').indexOf('Ana') !== -1, 'Append inside the loop so names keep the array order: Rosa first, Ana last.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Crew roster</h1>\n  <ul id=\"list\">\n    <li id=\"placeholder\">No crew yet…</li>\n  </ul>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const crew = [\"Rosa\", \"Kim\", \"Dev\", \"Ana\"];\nconst list = document.querySelector(\"#list\");\n\n// 1) remove the #placeholder li with .remove()\n\n// 2) loop over crew:\n//    create an li, set its textContent to the name, append it to list\n" }
      ],
      hints: [
        "One line kills the placeholder: `document.querySelector(\"#placeholder\").remove();`",
        "A for…of loop reads nicely: `for (const member of crew) { … }`",
        "Inside the loop: `const li = document.createElement(\"li\"); li.textContent = member; list.appendChild(li);`"
      ],
      solution: {
        "script.js": "const crew = [\"Rosa\", \"Kim\", \"Dev\", \"Ana\"];\nconst list = document.querySelector(\"#list\");\n\ndocument.querySelector(\"#placeholder\").remove();\n\nfor (const member of crew) {\n  const li = document.createElement(\"li\");\n  li.textContent = member;\n  list.appendChild(li);\n}\n"
      }
    },

    {
      id: "dom-quiz-1",
      title: "Unit 1 quiz: DOM basics",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What is the DOM?",
          choices: ["A copy of your CSS file that the browser keeps", "A separate scripting language built into the browser", "The live tree of objects built from your HTML", "The database where the browser stores your cookies"],
          answer: 2, explain: "Document Object Model: the browser parses your HTML into a tree of objects, and the page updates the moment you change them. JavaScript reads and rewrites that tree — the DOM is not a language of its own, and not a copy of any file sitting on disk." },
        { q: "`document.querySelectorAll(\".card\")` returns…",
          choices: ["Only the first .card element in the document", "Every match, as a list you can loop over", "The combined text content of every .card element", "An error, since more than one element matches"],
          answer: 1, explain: "querySelector = FIRST match; querySelectorAll = every match, handed back as a NodeList you can loop over with `.forEach`. Both take CSS selectors, exactly like your stylesheet — and when nothing matches you get an empty list, never an error." },
        { q: "Why do pros prefer `el.classList.add(\"active\")` over `el.style.background = \"green\"`?",
          choices: ["classList is shorter to type than .style", "Setting .style throws on most elements", "Inline styles were deprecated back in HTML5", "The look stays in CSS; JS only flips a switch"],
          answer: 3, explain: "Define what `.active` looks like once in the stylesheet; JS just toggles the class. One class can change a dozen styles at once, the rule stays reusable, and a designer can restyle it without ever opening your JS." },
        { q: "`userComment` was typed by a visitor. What's wrong here?",
          code: "msgEl.innerHTML = userComment;",
          lang: "js",
          choices: ["Untrusted input parsed as HTML can inject scripts (XSS)", "innerHTML is read-only, so this assignment is ignored", "Nothing — innerHTML escapes any tags automatically", "The property is spelled innerHtml, not innerHTML"],
          answer: 0, explain: "innerHTML runs whatever the string contains through the HTML parser — including attack markup a visitor typed on purpose. Use `textContent` for user input, always: it writes the characters as text and never as tags." },
        { q: "What shows on the page?",
          code: "const li = document.createElement(\"li\");\nli.textContent = \"Hi\";\n// …and that's the whole script",
          lang: "js",
          choices: ["\"Hi\" appears at the end of the first list", "An empty <li> is added to the page", "Nothing — the node was never appended", "A syntax error, since <li> needs a parent"],
          answer: 2, explain: "createElement builds a node in memory and hands you a reference to it. Until `appendChild` (or `append`) mounts it inside something already on the page, the browser has nothing to draw — no error, just an invisible node." },
        { q: "The element stored in `banner` must go. Which line deletes it from the page?",
          choices: ["banner.delete()", "banner.remove()", "banner.classList.remove()", "document.removeElement(banner)"],
          answer: 1, explain: "el.remove() detaches the element from the DOM. (The old-school way was parent.removeChild(el) — remove() replaced it.)" }
      ]
    }
  ]
});
