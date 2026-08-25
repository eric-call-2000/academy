/* Unit 2 — Fundamentals of CSS */
window.CODELAB.addUnit({
  id: "css",
  title: "Fundamentals of CSS",
  icon: "🎨",
  color: "#a560e8",
  blurb: "Make it beautiful — selectors, the box model, colors and typography.",
  cheat: [
    { h: "A CSS rule", lang: "css", code: "selector {\n  property: value;\n}\n\nh1 {\n  color: crimson;\n}", note: "Select something, then declare property: value pairs — each ends with `;`." },
    { h: "Selectors", lang: "css", code: "p        { }  /* every <p> */\n.card    { }  /* class=\"card\" */\n#title   { }  /* id=\"title\" (unique) */\n.card p  { }  /* <p> inside .card */" },
    { h: "Text & fonts", lang: "css", code: "font-family: Arial, sans-serif;\nfont-size: 40px;\nfont-weight: bold;\ntext-align: center;\ntext-decoration: underline;" },
    { h: "The box model", lang: "css", code: ".card {\n  padding: 16px;       /* space INSIDE the border */\n  border: 2px solid #94a3b8;\n  margin: 20px;        /* space OUTSIDE the border */\n  border-radius: 12px; /* rounded corners */\n}" },
    { h: "Colors & backgrounds", lang: "css", code: "color: crimson;            /* named  */\ncolor: #0ea5e9;            /* hex    */\ncolor: rgb(14, 165, 233);  /* rgb    */\nbackground-color: #f1f5f9;" }
  ],
  lessons: [

    {
      id: "css-1",
      title: "Selectors & color",
      kind: "web", chip: "CSS", xp: 15,
      brief: "HTML is the skeleton; **CSS** (Cascading Style Sheets) is the skin and clothes.\n\nA CSS **rule** picks elements with a **selector**, then applies `property: value` declarations:\n\nWrite your CSS in `styles.css` (see the file tabs above the editor). The page already links to it.",
      example: { lang: "css", code: "h1 {\n  color: crimson;\n}" },
      steps: [
        { text: "Make the `<h1>` **crimson** (`color: crimson;`).",
          test: "T.expect(T.css('h1', 'color') === 'rgb(220, 20, 60)', 'The <h1> is not crimson yet — add a h1 { color: crimson; } rule in styles.css.');" },
        { text: "Make **every** `<p>` **steelblue** with one rule. (The `.note` one will override this in the next step — that's the cascade at work.)",
          test: "var ps = T.$$('p').filter(function (p) { return !p.classList.contains('note'); });\nT.expect(ps.length >= 2, 'Keep at least two plain <p> elements on the page.');\nvar ok = ps.every(function (p) { return getComputedStyle(p).color === 'rgb(70, 130, 180)'; });\nT.expect(ok, 'All plain <p> elements should be steelblue — one p { color: steelblue; } rule covers them all.');" },
        { text: "Make elements with `class=\"note\"` **gray** using a class selector (`.note`).",
          test: "T.expect(T.css('.note', 'color') === 'rgb(128, 128, 128)', 'Target the class with .note { color: gray; }');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Styling my first page</h1>\n  <p>CSS controls how everything looks.</p>\n  <p>One rule can style many elements at once.</p>\n  <p class=\"note\">This one has class=\"note\".</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Write your CSS rules here */\n\n" }
      ],
      hints: [
        "Selectors: `h1` targets tags, `.note` (with a dot) targets a class.",
        "Each rule: `selector { property: value; }` — don't forget the semicolon."
      ],
      solution: {
        "styles.css": "h1 {\n  color: crimson;\n}\n\np {\n  color: steelblue;\n}\n\n.note {\n  color: gray;\n}\n"
      }
    },

    {
      id: "css-2",
      title: "Classes & IDs",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Two ways to label elements for styling:\n\n- **class** — reusable; many elements can share it. Select with `.classname`\n- **id** — unique; one per page. Select with `#idname`\n\nRule of thumb: reach for classes by default, ids for one-of-a-kind elements.",
      steps: [
        { text: "Underline the element with `id=\"title\"` using an **id selector**.",
          test: "var v = T.css('#title', 'text-decoration-line') || T.css('#title', 'text-decoration') || '';\nT.expect(v.indexOf('underline') !== -1, 'Use #title { text-decoration: underline; }');" },
        { text: "Give **every** `.highlight` element a **yellow** background with a class selector.",
          test: "var els = T.$$('.highlight');\nT.expect(els.length >= 2, 'Keep both class=\"highlight\" elements in the HTML.');\nvar ok = els.every(function (n) { return getComputedStyle(n).backgroundColor === 'rgb(255, 255, 0)'; });\nT.expect(ok, 'Both .highlight elements should have background-color: yellow.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1 id=\"title\">Field notes</h1>\n  <p>Some findings are worth <span class=\"highlight\">calling out</span> so they\n     <span class=\"highlight\">jump off the page</span>.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* #id selectors and .class selectors */\n\n" }
      ],
      hints: [
        "`#title { text-decoration: underline; }` — the # means id.",
        "`.highlight { background-color: yellow; }` — the . means class, and it styles every element carrying it."
      ],
      solution: {
        "styles.css": "#title {\n  text-decoration: underline;\n}\n\n.highlight {\n  background-color: yellow;\n}\n"
      }
    },

    {
      id: "css-3",
      title: "Typography",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Text is 90% of the web, so typography carries your design.\n\n- `font-family` — a comma-separated wish list; the browser uses the first font it has. Always end with a generic like `sans-serif`.\n- `font-size` — pixel sizes for now (`40px`)\n- `text-align` — `left`, `center`, `right`\n\nSet `font-family` once on `body` and everything inherits it. That's the **C** in CSS — styles *cascade* down.",
      steps: [
        { text: "Set the whole page's font: `body { font-family: Arial, sans-serif; }`",
          test: "var v = (T.css('body', 'font-family') || '').toLowerCase();\nT.expect(v.indexOf('arial') !== -1, 'Set font-family on body, starting with Arial.');" },
        { text: "Make the `<h1>` exactly **40px**.",
          test: "T.expect(T.css('h1', 'font-size') === '40px', 'Set h1 { font-size: 40px; } — currently ' + T.css('h1', 'font-size') + '.');" },
        { text: "Center the `.subtitle` text.",
          test: "T.expect(T.css('.subtitle', 'text-align') === 'center', 'Use .subtitle { text-align: center; }');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>The Daily Byte</h1>\n  <p class=\"subtitle\">Tech news, minus the noise</p>\n  <p>Today's issue: why every developer eventually writes a todo app.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Typography */\n\n" }
      ],
      hints: [
        "Fonts on body cascade to every element inside it.",
        "Three separate rules: one for `body`, one for `h1`, one for `.subtitle`."
      ],
      solution: {
        "styles.css": "body {\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  font-size: 40px;\n}\n\n.subtitle {\n  text-align: center;\n}\n"
      }
    },

    {
      id: "css-4",
      title: "The box model",
      kind: "web", chip: "CSS", xp: 15,
      brief: "**Every element is a box** with four layers, inside-out:\n\n- content → **padding** (space inside the border) → **border** → **margin** (space outside)\n\nMastering the box model is what makes layouts stop feeling random. Let's turn a plain `<div>` into a card.",
      example: { lang: "css", code: ".card {\n  padding: 16px;\n  border: 2px solid #94a3b8;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}" },
      steps: [
        { text: "Give `.card` **16px of padding** on all sides.",
          test: "T.expect(T.css('.card', 'padding-top') === '16px' && T.css('.card', 'padding-left') === '16px', 'Set .card { padding: 16px; } — top padding is currently ' + T.css('.card', 'padding-top') + '.');" },
        { text: "Add a **2px solid** border.",
          test: "T.expect(T.css('.card', 'border-top-width') === '2px', 'Border width should be 2px (currently ' + T.css('.card', 'border-top-width') + ').');\nT.expect(T.css('.card', 'border-top-style') === 'solid', 'Border style should be solid.');" },
        { text: "Round the corners with a **12px** border-radius.",
          test: "T.expect(T.css('.card', 'border-top-left-radius') === '12px', 'Set border-radius: 12px on .card.');" },
        { text: "Push the cards apart with **20px** of bottom margin.",
          test: "T.expect(T.css('.card', 'margin-bottom') === '20px', 'Set margin-bottom: 20px on .card (currently ' + T.css('.card', 'margin-bottom') + ').');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <h2>Card one</h2>\n    <p>Boxes all the way down.</p>\n  </div>\n  <div class=\"card\">\n    <h2>Card two</h2>\n    <p>Padding in, margin out.</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Turn .card into an actual card */\n.card {\n\n}\n" }
      ],
      hints: [
        "All four go on the same `.card` rule.",
        "`border` is a shorthand: width, style, color → `border: 2px solid #94a3b8;`"
      ],
      solution: {
        "styles.css": "/* Turn .card into an actual card */\n.card {\n  padding: 16px;\n  border: 2px solid #94a3b8;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n"
      }
    },

    {
      id: "css-5",
      title: "Backgrounds & buttons",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Colors come in three common flavors — named (`crimson`), hex (`#0ea5e9`), and `rgb(14, 165, 233)`. Hex is what you'll see most in real codebases.\n\nLet's style the page background and craft a proper button: color, padding, and a pill shape.",
      steps: [
        { text: "Give the page a soft background: `body { background-color: #f1f5f9; }`",
          test: "T.expect(T.css('body', 'background-color') === 'rgb(241, 245, 249)', 'Set background-color: #f1f5f9 on body.');" },
        { text: "Make `.btn` sky blue (`#0ea5e9`) with **white** text.",
          test: "T.expect(T.css('.btn', 'background-color') === 'rgb(14, 165, 233)', 'Set .btn background-color to #0ea5e9.');\nT.expect(T.css('.btn', 'color') === 'rgb(255, 255, 255)', 'Set .btn text color to white.');" },
        { text: "Pad the button: **12px** top/bottom, **24px** left/right (`padding: 12px 24px;`).",
          test: "T.expect(T.css('.btn', 'padding-top') === '12px' && T.css('.btn', 'padding-left') === '24px', 'Use padding: 12px 24px; (top/bottom then left/right).');" },
        { text: "Make it a pill: `border-radius: 999px;`",
          test: "T.expect(T.css('.btn', 'border-top-left-radius') === '999px', 'Set border-radius: 999px on .btn.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Launch day 🚀</h1>\n  <p>Our product ships today.</p>\n  <button class=\"btn\">Get started</button>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* page background + a real button */\n\n.btn {\n  border: none;\n}\n" }
      ],
      hints: [
        "Two-value padding shorthand: first number is top & bottom, second is left & right.",
        "Hex colors go right where named colors do: `background-color: #0ea5e9;`"
      ],
      solution: {
        "styles.css": "body {\n  background-color: #f1f5f9;\n}\n\n.btn {\n  border: none;\n  background-color: #0ea5e9;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 999px;\n}\n"
      }
    },

    {
      id: "css-quiz",
      title: "CSS checkpoint quiz",
      kind: "quiz", xp: 10,
      questions: [
        { q: "Which selector targets elements with `class=\"card\"`?",
          choices: ["`.card`", "`#card`", "`card`", "`*card`"],
          answer: 0, explain: "Dot = class, hash = id, bare word = tag name." },
        { q: "In the box model, which layer is the space **inside** the border?",
          choices: ["padding", "margin", "outline", "gap"],
          answer: 0, explain: "Padding is inside the border, margin is outside it." },
        { q: "What does the **C** in CSS mean for this code?",
          code: "body { color: navy; }\n/* every <p> inside body is navy too */",
          lang: "css",
          choices: ["Cascading — styles flow down to nested elements", "Compiled — CSS is compiled to HTML", "Colorful — CSS is mainly for colors", "Cached — styles are saved by the browser"],
          answer: 0, explain: "Cascading Style Sheets: rules cascade and inherit down the document tree." },
        { q: "Which is a valid **hex** color?",
          choices: ["#0ea5e9", "rgb#14.165.233", "hex(0ea5e9)", "0ea5e9px"],
          answer: 0, explain: "Hex colors: # + 6 (or 3) hex digits — two each for red, green, blue." },
        { q: "`font-family: Arial, sans-serif;` — why list two values?",
          choices: ["Fallbacks: if Arial is missing, the browser uses any sans-serif font", "It blends both fonts together", "Arial is for headings, sans-serif for body", "The second value sets the font size"],
          answer: 0, explain: "It's a wish list, left to right. Always end with a generic family as the safety net." },
        { q: "Which rule makes ALL paragraphs steelblue?",
          code: "A) p { color: steelblue; }\nB) .p { color: steelblue; }\nC) #p { color: steelblue; }",
          lang: "css",
          choices: ["A", "B", "C"],
          answer: 0, explain: "A bare tag selector styles every element of that tag. .p and #p would need class/id attributes." }
      ]
    },

    {
      id: "css-project",
      title: "Project: Profile card",
      kind: "web", chip: "CSS", xp: 40, project: true,
      brief: "Style a **profile card** — the little component you see on every social app. The HTML is done; the design is on you.\n\nFollow the checkpoints, but feel free to add your own flair afterwards (the checks won't mind extra style).",
      steps: [
        { text: "Page background: `#e2e8f0`.",
          test: "T.expect(T.css('body', 'background-color') === 'rgb(226, 232, 240)', 'Set body background-color: #e2e8f0.');" },
        { text: "Make `.card` a white card: white background, `border-radius` of at least 8px, and at least 16px padding.",
          test: "T.expect(T.css('.card', 'background-color') === 'rgb(255, 255, 255)', 'Give .card a white background.');\nT.expect(parseInt(T.css('.card', 'border-top-left-radius')) >= 8, 'Round .card corners at least 8px.');\nT.expect(parseInt(T.css('.card', 'padding-top')) >= 16, 'Give .card at least 16px padding.');" },
        { text: "Make the `.avatar` image a **circle** (`border-radius: 50%`).",
          test: "T.expect(T.css('.avatar', 'border-top-left-radius') === '50%', 'Set .avatar { border-radius: 50%; }');" },
        { text: "Style `.role` in gray `#64748b` and center-align everything in the card (`text-align: center`).",
          test: "T.expect(T.css('.role', 'color') === 'rgb(100, 116, 139)', 'Color .role with #64748b.');\nT.expect(T.css('.card', 'text-align') === 'center', 'Set text-align: center on .card.');" },
        { text: "Turn each `.tag` into a pill: background `#e0f2fe` and `border-radius: 999px`.",
          test: "var tags = T.$$('.tag');\nT.expect(tags.length >= 2, 'Keep the .tag spans in the HTML.');\nvar ok = tags.every(function (t) { var cs = getComputedStyle(t); return cs.backgroundColor === 'rgb(224, 242, 254)' && cs.borderTopLeftRadius === '999px'; });\nT.expect(ok, 'Every .tag needs background #e0f2fe and border-radius 999px.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"card\">\n    <img class=\"avatar\" src=\"https://picsum.photos/96\" alt=\"Profile photo\" width=\"96\" height=\"96\">\n    <h1 class=\"name\">Sam Rivera</h1>\n    <p class=\"role\">Full-Stack Developer</p>\n    <p>\n      <span class=\"tag\">JavaScript</span>\n      <span class=\"tag\">CSS</span>\n      <span class=\"tag\">APIs</span>\n    </p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* Design the profile card */\nbody {\n  font-family: Arial, sans-serif;\n}\n\n.card {\n\n}\n\n.avatar {\n\n}\n\n.role {\n\n}\n\n.tag {\n  padding: 4px 12px;\n}\n" }
      ],
      hints: [
        "Work top-down: body → .card → .avatar → .role → .tag.",
        "Pills need horizontal padding to look right — the starter already gives .tag some.",
        "Add `max-width: 320px; margin: 40px auto;` to .card for a bonus centered layout (not graded)."
      ],
      solution: {
        "styles.css": "/* Design the profile card */\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #e2e8f0;\n}\n\n.card {\n  background-color: white;\n  border-radius: 16px;\n  padding: 24px;\n  text-align: center;\n  max-width: 320px;\n  margin: 40px auto;\n}\n\n.avatar {\n  border-radius: 50%;\n}\n\n.role {\n  color: #64748b;\n}\n\n.tag {\n  padding: 4px 12px;\n  background-color: #e0f2fe;\n  border-radius: 999px;\n}\n"
      }
    }
  ]
});
