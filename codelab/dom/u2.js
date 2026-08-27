/* Building Interactive Websites — Unit 2: Traversal, Attributes & Dataset */
window.CODELAB.addUnit("dom", {
  id: "dom-u2",
  title: "Traversal, attributes & dataset",
  icon: "🧭",
  blurb: "Walk the DOM tree, act on every match at once, and hide data right inside your HTML.",
  cheat: [
    { h: "Walking the tree", lang: "js", code: "el.parentElement         // one step up\nel.children              // element children (no text nodes)\nel.firstElementChild     // first of those\nel.closest(\".card\")      // climb UP to the nearest match (el counts too)", note: "closest only climbs upward and stops at the first match — or returns null." },
    { h: "All matches + forEach", lang: "js", code: "const items = document.querySelectorAll(\".item\");\nitems.forEach((item) => {\n  item.classList.add(\"seen\");\n});\nconsole.log(items.length);", note: "querySelectorAll returns a NodeList — it has forEach and length. Need map/filter? Spread it: [...items]." },
    { h: "Attributes", lang: "js", code: "link.getAttribute(\"href\")           // read\nlink.setAttribute(\"href\", \"#docs\")  // write (creates it if missing)\nbtn.removeAttribute(\"disabled\")     // delete\nbtn.disabled = false;               // boolean attrs: use the property", note: "Boolean attributes (disabled, checked) are ON just by existing — setAttribute(\"disabled\", \"false\") still disables!" },
    { h: "dataset: read data-*", lang: "js", code: "// <li data-price=\"12\" data-qty=\"2\">\nconst price = Number(li.dataset.price); // \"12\" → 12\nconst qty = Number(li.dataset.qty);     // \"2\"  → 2", note: "dataset values are ALWAYS strings — Number() before doing math." },
    { h: "dataset: write it back", lang: "js", code: "li.dataset.lineTotal = 24;\n// HTML now reads: <li data-line-total=\"24\" …>", note: "camelCase in JS ↔ kebab-case in HTML: dataset.lineTotal ↔ data-line-total." }
  ],
  lessons: [

    {
      id: "dom-u2-1",
      title: "Walking the tree",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "Every element knows its neighbors. From any node you can walk the **DOM tree**:\n\n- `el.parentElement` — one step up\n- `el.children` / `el.firstElementChild` — the element children below\n- `el.closest(\"selector\")` — climb up until an ancestor matches (checks `el` itself first!)\n\nThe scenario: one comment got flagged as spam. Starting from just that `<p>`, you will reach its surrounding card, then the whole thread — no extra ids needed. This is exactly how real apps find \"the row this button lives in\".",
      steps: [
        { text: "The flagged `<p>` sits inside a card. Use `flagged.parentElement` to reach that card and add the class `reported`.",
          test: "var cardB = T.$('#cardB');\nT.expect(cardB && cardB.classList.contains('reported'), 'Use flagged.parentElement to reach the surrounding card, then card.classList.add(\"reported\").');\nT.expect(!T.$('#cardA').classList.contains('reported'), 'Only the card that CONTAINS the flagged comment should be reported — walk up from flagged instead of selecting cards directly.');\nT.expect(T.css('#cardB', 'background-color') === 'rgb(254, 226, 226)', 'Once the reported class is on, the CSS tints that card red automatically.');" },
        { text: "Use `flagged.closest(\"section\")` to jump all the way up to the thread and add the class `has-reports` to it.",
          test: "T.expect(T.$('#thread').classList.contains('has-reports'), 'closest(\"section\") climbs from the paragraph, past the card, to the section — add the class has-reports there.');" },
        { text: "The thread's `firstElementChild` is the first card. Give it the class `top-comment` — reach it through the thread, not by id.",
          test: "T.expect(T.$('#cardA').classList.contains('top-comment'), 'thread.firstElementChild is the first card — add the class top-comment to it.');\nT.expect(!T.$('#cardB').classList.contains('top-comment'), 'Only the FIRST card is the top comment — firstElementChild picks exactly one element.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Comment thread</h1>\n  <section id=\"thread\">\n    <article class=\"card\" id=\"cardA\">\n      <h2>Rosa</h2>\n      <p>Great article — learned a lot!</p>\n    </article>\n    <article class=\"card\" id=\"cardB\">\n      <h2>Kim</h2>\n      <p id=\"flagged\">Buy cheap watches at spam dot example!!!</p>\n    </article>\n  </section>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\n\n.card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 12px;\n}\n.card h2 { margin: 0 0 6px; font-size: 16px; }\n.card p { margin: 0; }\n\n.reported {\n  background: #fee2e2;\n  border-color: #fca5a5;\n}\n\n.top-comment {\n  border: 2px solid #22c55e;\n}\n\n.has-reports {\n  border-left: 4px solid #f97316;\n  padding-left: 12px;\n}\n" },
        { name: "script.js", content: "// Start from the ONE node we grabbed — walk the tree from here.\nconst flagged = document.querySelector(\"#flagged\");\n\n// 1) flagged.parentElement is the card around it → add class \"reported\"\n\n// 2) flagged.closest(\"section\") is the whole thread → add class \"has-reports\"\n\n// 3) the thread's firstElementChild is the FIRST card → add class \"top-comment\"\n" }
      ],
      hints: [
        "`flagged.parentElement` hands you the `<article>` around it — store it: `const card = flagged.parentElement;` then `card.classList.add(\"reported\");`",
        "`closest` climbs as many levels as needed: `const thread = flagged.closest(\"section\");`",
        "You can chain the last one: `thread.firstElementChild.classList.add(\"top-comment\");`"
      ],
      solution: {
        "script.js": "const flagged = document.querySelector(\"#flagged\");\n\nconst card = flagged.parentElement;\ncard.classList.add(\"reported\");\n\nconst thread = flagged.closest(\"section\");\nthread.classList.add(\"has-reports\");\n\nthread.firstElementChild.classList.add(\"top-comment\");\n"
      }
    },

    {
      id: "dom-u2-2",
      title: "querySelectorAll & forEach",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "`querySelector` gives you the FIRST match. **`querySelectorAll`** gives you a NodeList of *all* of them — and it has `.forEach`:\n\n- `document.querySelectorAll(\".product\")` — every match\n- `list.forEach((item) => { … })` — visit each one\n- `list.length` — how many\n\nAdd an `if` inside the loop and you can act on just the matches that qualify — here, striking through everything the café has run out of. One pattern, a hundred uses: mark, count, restyle, collect.",
      steps: [
        { text: "Give **every** `.product` the class `menu-item` using `querySelectorAll` + `forEach`.",
          test: "T.eq(T.count('.product.menu-item'), 4, 'All 4 products need the class — products.forEach((item) => item.classList.add(\"menu-item\")).');" },
        { text: "Items whose text contains **\"sold out\"** get the class `sold-out` — an `if` inside the loop.",
          test: "var items = T.$$('.product');\nT.expect(items[1].classList.contains('sold-out') && items[3].classList.contains('sold-out'), 'The croissant and the bagel say sold out — check item.textContent.includes(\"sold out\") inside the loop.');\nT.expect(!items[0].classList.contains('sold-out') && !items[2].classList.contains('sold-out'), 'The espresso and iced latte are still available — only mark items whose text contains sold out.');\nT.expect(T.css('.sold-out', 'color') === 'rgb(148, 163, 184)', 'Once the class is on, the CSS grays the item out and strikes it through.');" },
        { text: "Count the sold-out items and show that count in `#summary` (e.g. \"2 sold out\").",
          test: "var s = (T.text('#summary') || '').toLowerCase();\nT.expect(s.indexOf('2') !== -1 && s.indexOf('sold out') !== -1, 'Two items are gone — #summary should read something like: 2 sold out. Bump a counter inside the loop, or use document.querySelectorAll(\".sold-out\").length.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Café menu</h1>\n  <ul id=\"menu\">\n    <li class=\"product\">Espresso — $3</li>\n    <li class=\"product\">Croissant — $4 (sold out)</li>\n    <li class=\"product\">Iced latte — $5</li>\n    <li class=\"product\">Bagel — $3 (sold out)</li>\n  </ul>\n  <p id=\"summary\"></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\n\n#menu { padding: 0; }\n\n.menu-item {\n  list-style: none;\n  padding: 8px 12px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.sold-out {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n" },
        { name: "script.js", content: "const products = document.querySelectorAll(\".product\");\n\n// 1) products.forEach(...) — add the class \"menu-item\" to every item\n\n// 2) inside a loop: if item.textContent.includes(\"sold out\"),\n//    add the class \"sold-out\" to that item\n\n// 3) count the sold-out items, then show `${count} sold out` in #summary\n" }
      ],
      hints: [
        "`products.forEach((item) => { item.classList.add(\"menu-item\"); });`",
        "One loop can do all three jobs: add menu-item, check `item.textContent.includes(\"sold out\")`, and bump a counter when it does.",
        "Finish with: `document.querySelector(\"#summary\").textContent = `${count} sold out`;`"
      ],
      solution: {
        "script.js": "const products = document.querySelectorAll(\".product\");\n\nlet count = 0;\n\nproducts.forEach((item) => {\n  item.classList.add(\"menu-item\");\n  if (item.textContent.includes(\"sold out\")) {\n    item.classList.add(\"sold-out\");\n    count++;\n  }\n});\n\ndocument.querySelector(\"#summary\").textContent = `${count} sold out`;\n"
      }
    },

    {
      id: "dom-u2-3",
      title: "Attributes",
      kind: "web", chip: "DOM", xp: 15, mins: 12,
      brief: "HTML attributes are readable *and* writable from JavaScript:\n\n- `el.getAttribute(\"href\")` — read\n- `el.setAttribute(\"href\", \"#docs\")` — write (creates the attribute if missing)\n- `el.removeAttribute(\"disabled\")` — delete\n\n**Boolean attributes** like `disabled` and `checked` are special: they are ON just by being present — `setAttribute(\"disabled\", \"false\")` still disables! Use the property instead: `btn.disabled = false`.\n\nYour job: this page has gone stale — one link points nowhere, one has no href at all, and the signup button is stuck disabled. Fix all three.",
      steps: [
        { text: "First, the diagnosis: log `docsLink.getAttribute(\"href\")` — *before* you fix anything — to see where it points now.",
          test: "T.expect(T.logged('missing-page'), 'console.log(docsLink.getAttribute(\"href\")) at the TOP of your script — it should print missing-page.html (log it BEFORE you change it).');" },
        { text: "Repoint both links with `setAttribute`: `#docsLink` → `\"#docs\"`, and give the href-less `#blogLink` → `\"#blog\"`.",
          test: "T.eq(T.attr('#docsLink', 'href'), '#docs', 'docsLink.setAttribute(\"href\", \"#docs\") — overwrite the broken target.');\nT.eq(T.attr('#blogLink', 'href'), '#blog', 'setAttribute can CREATE an attribute too: blogLink.setAttribute(\"href\", \"#blog\").');" },
        { text: "Un-stick `#joinBtn`: clear its `disabled` state so it can be clicked again.",
          test: "T.expect(T.$('#joinBtn').disabled === false, 'Set joinBtn.disabled = false (or removeAttribute(\"disabled\")). Warning: setAttribute(\"disabled\", \"false\") does NOT work — boolean attributes are on just by being present.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Link rescue 🛠️</h1>\n  <ul>\n    <li><a id=\"docsLink\" href=\"missing-page.html\">Docs</a></li>\n    <li><a id=\"blogLink\">Blog (unclickable — no href!)</a></li>\n  </ul>\n  <button id=\"joinBtn\" disabled>Join the beta</button>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "script.js", content: "const docsLink = document.querySelector(\"#docsLink\");\nconst blogLink = document.querySelector(\"#blogLink\");\nconst joinBtn = document.querySelector(\"#joinBtn\");\n\n// 1) log docsLink.getAttribute(\"href\") — where does it point right now?\n\n// 2) setAttribute(\"href\", ...): docsLink → \"#docs\", blogLink → \"#blog\"\n\n// 3) enable joinBtn (disabled = false, or removeAttribute)\n" }
      ],
      hints: [
        "Read first: `console.log(docsLink.getAttribute(\"href\"));`",
        "Write: `docsLink.setAttribute(\"href\", \"#docs\");` and `blogLink.setAttribute(\"href\", \"#blog\");`",
        "Booleans are presence-based: `joinBtn.disabled = false;` — never `setAttribute(\"disabled\", \"false\")`."
      ],
      solution: {
        "script.js": "const docsLink = document.querySelector(\"#docsLink\");\nconst blogLink = document.querySelector(\"#blogLink\");\nconst joinBtn = document.querySelector(\"#joinBtn\");\n\nconsole.log(docsLink.getAttribute(\"href\"));\n\ndocsLink.setAttribute(\"href\", \"#docs\");\nblogLink.setAttribute(\"href\", \"#blog\");\n\njoinBtn.disabled = false;\n"
      }
    },

    {
      id: "dom-u2-4",
      title: "dataset: data hiding in your HTML",
      kind: "web", chip: "DOM", xp: 15, mins: 14,
      brief: "You can stash your own data right in the HTML with **`data-*` attributes**, and read it back through `el.dataset`:\n\n- `<li data-price=\"12\">` → `li.dataset.price` → `\"12\"`\n- writes work too: `li.dataset.lineTotal = 24` becomes `data-line-total=\"24\"` (camelCase ↔ kebab-case!)\n- everything comes back as a **string** — `Number(...)` before math!\n\nThis is how real shops render carts: the markup carries the numbers, JavaScript does the math. Total up this cart without hard-coding a single price.",
      steps: [
        { text: "For each `.row`, compute `price × qty` from its dataset and write it back: `row.dataset.lineTotal = …`.",
          test: "var rows = T.$$('.row');\nT.eq(rows.map(function (r) { return r.dataset.lineTotal; }), ['24', '30', '12'], 'Each row needs data-line-total = price × qty: 12×2=24, 30×1=30, 4×3=12. Remember Number() — dataset values are strings.');\nT.eq(T.attr('.row', 'data-line-total'), '24', 'dataset.lineTotal shows up in the HTML as data-line-total — camelCase in JS, kebab-case in HTML.');" },
        { text: "Add all the line totals into one sum and show it in `#total`.",
          test: "T.eq(T.text('#total'), '66', 'The grand total is 24 + 30 + 12 = 66 — add each line total to a running sum inside the loop, then set totalEl.textContent after it.');" },
        { text: "Any row with a line total of **25 or more** gets the class `big-ticket`.",
          test: "var rows = T.$$('.row');\nT.expect(rows[1].classList.contains('big-ticket'), 'Only the hoodie row reaches 25 (its line total is 30) — add big-ticket inside your loop when lineTotal >= 25.');\nT.expect(!rows[0].classList.contains('big-ticket') && !rows[2].classList.contains('big-ticket'), 'The poster (24) and the stickers (12) stay under 25 — no big-ticket class for them.');\nT.expect(T.css('.big-ticket', 'background-color') === 'rgb(254, 249, 195)', 'Once the class is on, the CSS highlights that row in yellow.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Shop cart</h1>\n  <ul id=\"cart\">\n    <li class=\"row\" data-price=\"12\" data-qty=\"2\">Poster ×2</li>\n    <li class=\"row\" data-price=\"30\" data-qty=\"1\">Hoodie ×1</li>\n    <li class=\"row\" data-price=\"4\" data-qty=\"3\">Stickers ×3</li>\n  </ul>\n  <p>Total: $<span id=\"total\">?</span></p>\n\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; padding: 20px; }\n\n#cart { padding: 0; }\n\n.row {\n  list-style: none;\n  padding: 8px 12px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.big-ticket {\n  background: #fef9c3;\n  font-weight: bold;\n}\n" },
        { name: "script.js", content: "const rows = document.querySelectorAll(\".row\");\nconst totalEl = document.querySelector(\"#total\");\n\n// 1) for each row: lineTotal = Number(row.dataset.price) * Number(row.dataset.qty)\n//    write it back: row.dataset.lineTotal = lineTotal\n\n// 2) add every lineTotal into one sum, show it in #total\n\n// 3) rows with lineTotal >= 25 get the class \"big-ticket\"\n" }
      ],
      hints: [
        "Dataset math needs conversion first: `const lineTotal = Number(row.dataset.price) * Number(row.dataset.qty);`",
        "One forEach can do all three steps: write `row.dataset.lineTotal = lineTotal;`, add it to a `total` variable, and check the 25 threshold.",
        "After the loop: `totalEl.textContent = total;` — and inside it: `if (lineTotal >= 25) row.classList.add(\"big-ticket\");`"
      ],
      solution: {
        "script.js": "const rows = document.querySelectorAll(\".row\");\nconst totalEl = document.querySelector(\"#total\");\n\nlet total = 0;\n\nrows.forEach((row) => {\n  const lineTotal = Number(row.dataset.price) * Number(row.dataset.qty);\n  row.dataset.lineTotal = lineTotal;\n  total += lineTotal;\n\n  if (lineTotal >= 25) {\n    row.classList.add(\"big-ticket\");\n  }\n});\n\ntotalEl.textContent = total;\n"
      }
    },

    {
      id: "dom-quiz-2",
      title: "Unit 2 quiz: Traversal & attributes",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What does `el.closest(\".card\")` do?",
          choices: [
            "Finds the nearest .card anywhere in the document",
            "Searches el's children for the first .card inside it",
            "Starts at el itself and climbs to the first .card",
            "Returns every .card ancestor of el as a list"
          ],
          answer: 2,
          explain: "closest only climbs upward — el itself first, then its parent, then its grandparent — and stops at the first match, handing back null if it never finds one. Children never count, and you get one element, not a list." },
        { q: "`document.querySelectorAll(\".item\")` returns…",
          choices: [
            "A NodeList containing every match",
            "Only the first matching element",
            "A plain Array with map and filter built in",
            "A string of HTML for the matches"
          ],
          answer: 0,
          explain: "A NodeList has `length` and `.forEach`, so you can loop it the moment you get it. Want `map` or `filter`? Spread it into a real array first: `[...items]`." },
        { q: "A Buy button sits in `<div class=\"actions\">` inside `<article class=\"card\">`. From the button, which expression reaches the card?",
          choices: [
            "btn.parentElement",
            "btn.closest(\".card\")",
            "btn.firstElementChild",
            "btn.children[0]"
          ],
          answer: 1,
          explain: "parentElement climbs exactly ONE level — that's the .actions div. closest keeps climbing until the selector matches, however deep the nesting." },
        { q: "What does this log?",
          code: "// <li id=\"item\" data-price=\"12\"></li>\nconst li = document.querySelector(\"#item\");\nconsole.log(li.dataset.price + 3);",
          lang: "js",
          choices: ["15", "An error", "undefined", "\"123\""],
          answer: 3,
          explain: "dataset values are ALWAYS strings, and string + number concatenates. Convert first: Number(li.dataset.price) + 3 → 15." },
        { q: "Which attribute call re-enables `<button disabled>`?",
          choices: [
            "btn.setAttribute(\"disabled\", \"false\")",
            "btn.removeAttribute(\"disabled\")",
            "btn.classList.remove(\"disabled\")",
            "btn.setAttribute(\"enabled\", \"true\")"
          ],
          answer: 1,
          explain: "Boolean attributes are ON just by being present — `setAttribute(\"disabled\", \"false\")` leaves it sitting there, so the button stays dead. Strip the attribute, or set the property: `btn.disabled = false`. A CSS class disables nothing, and there is no `enabled` attribute." },
        { q: "`el.dataset.userId` reads which HTML attribute?",
          choices: ["userId", "data-userid", "data-user-id", "user-id"],
          answer: 2,
          explain: "dataset auto-converts between camelCase in JS and `data-` prefixed kebab-case in HTML: `dataset.userId` ↔ `data-user-id`. Every capital in JS becomes a hyphen plus a lowercase letter in the markup, and the prefix in HTML is always `data-`." }
      ]
    }
  ]
});
