/* Learn CSS — Unit 1: Selectors & the Cascade */
window.CODELAB.addUnit("css", {
  id: "css-u1",
  title: "Selectors & the Cascade",
  icon: "🎯",
  blurb: "Target anything on the page — and understand who wins when rules collide.",
  cheat: [
    { h: "A CSS rule", lang: "css", code: "selector {\n  property: value;\n}\n\nh1 {\n  color: crimson;\n}" },
    { h: "Core selectors", lang: "css", code: "p        { }  /* every <p> */\n.card    { }  /* class=\"card\" */\n#title   { }  /* id=\"title\" (unique) */" },
    { h: "Combining selectors", lang: "css", code: ".card p  { }  /* <p> INSIDE .card (descendant) */\np.note   { }  /* <p> that HAS class note (chained) */\nh1, h2   { }  /* both h1 AND h2 (grouped) */" },
    { h: "Pseudo-classes", lang: "css", code: "li:first-child { }\nli:last-child  { }\na:hover        { }  /* while the mouse is over it */" },
    { h: "Specificity (who wins)", lang: "css", code: "/* id  >  class  >  tag */\n#alert   { color: red; }    /* strongest */\n.warning { color: orange; }\np        { color: gray; }   /* weakest */", note: "Same specificity? The LAST rule in the file wins." },
    { h: "Three ways to add CSS", lang: "html", code: "<p style=\"color: red\">inline</p>\n<style> p { color: red; } </style>\n<link rel=\"stylesheet\" href=\"styles.css\">", note: "External files (link) are the professional default." }
  ],
  lessons: [

    {
      id: "css-1",
      title: "Selectors & color",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Welcome to **Learn CSS**! HTML is the skeleton; **CSS** (Cascading Style Sheets) is the skin and clothes.\n\nA CSS **rule** picks elements with a **selector**, then applies `property: value` declarations.\n\nWrite your CSS in `styles.css` (see the file tabs above the editor). The page already links to it.",
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
      id: "css-u1-3",
      title: "Combining selectors",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Selectors combine into precision tools:\n\n- **Descendant**: `.card p` — paragraphs **inside** anything with class `card` (note the space)\n- **Chained**: `p.note` — a `<p>` that **has** class `note` (no space!)\n- **Grouped**: `h1, h2` — one rule for several selectors (comma)\n\nThe space-vs-no-space difference trips everyone up once. Today it trips you zero times.",
      steps: [
        { text: "Only paragraphs **inside `.card`** turn gray `#64748b` — the intro stays black. (The warning one gets its own color next.)",
          test: "var inside = T.$$('.card p').filter(function (p) { return !p.classList.contains('warning'); });\nT.expect(inside.length >= 2 && inside.every(function (p) { return getComputedStyle(p).color === 'rgb(100, 116, 139)'; }), 'Use .card p { color: #64748b; } (descendant selector, WITH a space).');\nvar intro = T.$('#intro');\nT.expect(getComputedStyle(intro).color !== 'rgb(100, 116, 139)', 'The intro paragraph is OUTSIDE the card — it must not turn gray. Did you accidentally style all p?');" },
        { text: "Only the `<p class=\"warning\">` inside the card turns **crimson** — use the chained selector `p.warning`.",
          test: "T.expect(T.css('p.warning', 'color') === 'rgb(220, 20, 60)', 'Use p.warning { color: crimson; } (NO space — a p that has the class).');" },
        { text: "Give `h1` **and** `h2` the same color `#0f172a` with **one grouped rule**.",
          test: "T.expect(T.css('h1', 'color') === 'rgb(15, 23, 42)' && T.css('h2', 'color') === 'rgb(15, 23, 42)', 'Group them: h1, h2 { color: #0f172a; }');\nvar grouped = T.rules().some(function (r) { var s = (r.selectorText || '').replace(/\\s+/g, ''); return s === 'h1,h2' || s === 'h2,h1'; });\nT.expect(grouped, 'Use ONE rule with a comma (h1, h2 { … }), not two separate rules.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Weather station</h1>\n  <p id=\"intro\">Today's readings, straight from the roof.</p>\n\n  <div class=\"card\">\n    <h2>Conditions</h2>\n    <p>Wind: 14 km/h from the northwest.</p>\n    <p>Humidity: 62%.</p>\n    <p class=\"warning\">Storm cell approaching after 18:00.</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* descendant (.card p), chained (p.warning), grouped (h1, h2) */\n\n" }
      ],
      hints: [
        "`.card p` (with space) = any p inside .card. `p.warning` (no space) = a p that itself has the class.",
        "The warning p matches BOTH rules — the more specific p.warning wins for color.",
        "Grouped rule: `h1, h2 { color: #0f172a; }` — comma means \"and also\"."
      ],
      solution: {
        "styles.css": "h1, h2 {\n  color: #0f172a;\n}\n\n.card p {\n  color: #64748b;\n}\n\np.warning {\n  color: crimson;\n}\n"
      }
    },

    {
      id: "css-u1-4",
      title: "Pseudo-classes",
      kind: "web", chip: "CSS", xp: 15,
      brief: "**Pseudo-classes** select elements by *state or position*, written with a colon:\n\n- `li:first-child` — an `li` that is its parent's first child\n- `li:last-child` — …or last\n- `a:hover` — a link **while the mouse is over it** (try it in the preview!)\n\nThey turn static lists into designed lists — no extra classes needed.",
      steps: [
        { text: "Make the **first** item in the leaderboard gold: `color: #d97706` and **bold**.",
          test: "var v = T.css('li:first-child', 'color');\nT.expect(v === 'rgb(217, 119, 6)', 'Use li:first-child { color: #d97706; } — currently ' + v);\nvar w = T.css('li:first-child', 'font-weight');\nT.expect(w === '700' || w === 'bold', 'Also make it font-weight: bold.');" },
        { text: "Fade the **last** item: `color: #94a3b8`.",
          test: "T.expect(T.css('li:last-child', 'color') === 'rgb(148, 163, 184)', 'Use li:last-child { color: #94a3b8; }');" },
        { text: "Give links a hover style: an `a:hover` rule that changes `color` (graded from your stylesheet — then mouse over it in the preview!).",
          test: "var st = T.ruleFor('a:hover');\nT.expect(st, 'Add an a:hover { … } rule.');\nT.expect((st.getPropertyValue('color') || '').length > 0, 'Set a color inside a:hover.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Speedrun leaderboard</h1>\n  <ol>\n    <li>NovaByte — 4:12</li>\n    <li>PixelPirate — 4:31</li>\n    <li>Turbo_Tuna — 4:55</li>\n    <li>LagLord — 9:59</li>\n  </ol>\n  <a href=\"#\">See full rankings</a>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* :first-child, :last-child, :hover */\n\n" }
      ],
      hints: [
        "No space before the colon: `li:first-child { … }`.",
        "Hover rules only apply while pointing: `a:hover { color: crimson; }` — the checker reads the rule itself."
      ],
      solution: {
        "styles.css": "li:first-child {\n  color: #d97706;\n  font-weight: bold;\n}\n\nli:last-child {\n  color: #94a3b8;\n}\n\na:hover {\n  color: crimson;\n}\n"
      }
    },

    {
      id: "css-u1-5",
      title: "Specificity: who wins?",
      kind: "web", chip: "CSS", xp: 15,
      brief: "When several rules target the same element, CSS scores them — **specificity**:\n\n- id selector (`#alert`) — strongest\n- class selector (`.warning`) — middle\n- tag selector (`p`) — weakest\n- tie? The **later** rule in the file wins.\n\nWrite all three layers and watch the strongest take the crown. When a style \"mysteriously doesn't apply\" — and that day will come — specificity is almost always the culprit.",
      steps: [
        { text: "Base layer: all `<p>` gray (`#6b7280`).",
          test: "T.expect(T.css('#plain', 'color') === 'rgb(107, 114, 128)', 'Add p { color: #6b7280; } — the plain paragraph shows it.');" },
        { text: "Class layer: `.warning` orange (`#ea580c`) — it beats the tag rule.",
          test: "T.expect(T.css('#classy', 'color') === 'rgb(234, 88, 12)', 'Add .warning { color: #ea580c; } — the class outranks the p rule.');" },
        { text: "Id layer: `#alert` crimson — it beats **both**, even though that element also has the warning class.",
          test: "T.expect(T.css('#alert', 'color') === 'rgb(220, 20, 60)', 'Add #alert { color: crimson; } — ids outrank classes.');\nvar el = T.$('#alert');\nT.expect(el && el.classList.contains('warning'), 'Keep the warning class on #alert — the point is watching the id WIN over it.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Alert center</h1>\n  <p id=\"plain\">All systems normal.</p>\n  <p id=\"classy\" class=\"warning\">Disk almost full.</p>\n  <p id=\"alert\" class=\"warning\">REACTOR OVERHEATING.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* three layers: p → .warning → #alert */\n\n" }
      ],
      hints: [
        "Write them in any order — specificity, not position, decides here.",
        "The middle paragraph proves the class layer; the last proves id > class."
      ],
      solution: {
        "styles.css": "p {\n  color: #6b7280;\n}\n\n.warning {\n  color: #ea580c;\n}\n\n#alert {\n  color: crimson;\n}\n"
      }
    },

    {
      id: "css-u1-6",
      title: "Three ways to add CSS",
      kind: "web", chip: "CSS", xp: 15,
      brief: "CSS can enter a page three ways:\n\n- **Inline** — a `style=\"…\"` attribute on one element. Quick, but unmaintainable at scale.\n- **Internal** — a `<style>` block in the `<head>`. Fine for one-page experiments.\n- **External** — `<link rel=\"stylesheet\" href=\"styles.css\">`. One file styles many pages: the professional default.\n\nUse each one once, so you'll recognize all three in the wild.",
      steps: [
        { text: "Inline: give the banner paragraph `style=\"color: white; background-color: #0ea5e9\"` directly in the HTML.",
          test: "var b = T.$('#banner');\nT.expect(b && (b.getAttribute('style') || '').length > 5, 'Add a style attribute to #banner.');\nT.expect(getComputedStyle(b).backgroundColor === 'rgb(14, 165, 233)' && getComputedStyle(b).color === 'rgb(255, 255, 255)', 'Inline style: white text on #0ea5e9.');" },
        { text: "Internal: add a `<style>` block in `<head>` that centers the `<h1>` (`text-align: center`).",
          test: "T.expect(document.head.querySelector('style'), 'Add a <style> element inside <head>.');\nT.expect(T.css('h1', 'text-align') === 'center', 'Inside it: h1 { text-align: center; }');" },
        { text: "External: in `styles.css` (already linked), make the body font `Arial, sans-serif`.",
          test: "var v = (T.css('body', 'font-family') || '').toLowerCase();\nT.expect(v.indexOf('arial') !== -1, 'In styles.css: body { font-family: Arial, sans-serif; }');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <!-- 2) add a <style> block here -->\n</head>\n<body>\n  <h1>Three doors for CSS</h1>\n  <p id=\"banner\">I want inline styles.</p>\n  <p>I'm happy being styled from the external file.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* 3) external styles here */\n\n" }
      ],
      hints: [
        "Inline: `<p id=\"banner\" style=\"color: white; background-color: #0ea5e9\">`.",
        "Internal: `<style> h1 { text-align: center; } </style>` goes in the head.",
        "Rule of thumb in real projects: external always, internal rarely, inline almost never."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <style>\n    h1 { text-align: center; }\n  </style>\n</head>\n<body>\n  <h1>Three doors for CSS</h1>\n  <p id=\"banner\" style=\"color: white; background-color: #0ea5e9\">I want inline styles.</p>\n  <p>I'm happy being styled from the external file.</p>\n</body>\n</html>\n",
        "styles.css": "/* 3) external styles here */\nbody {\n  font-family: Arial, sans-serif;\n}\n"
      }
    },

    {
      id: "css-u1-7",
      title: "Inheritance: styles flow downhill",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Set `color` or `font-family` on `<body>` and every descendant **inherits** it — that's the *cascading* in Cascading Style Sheets. Text properties inherit; box properties (borders, padding, backgrounds) deliberately don't.\n\nInherit from the top, then **override locally** only where needed. That's the entire strategy of well-written CSS.",
      steps: [
        { text: "Set `color: #334155` **once on `body`** — the heading, list, and even the nested `<em>` all inherit it.",
          test: "T.expect(T.css('body', 'color') === 'rgb(51, 65, 85)', 'Set body { color: #334155; }');\nT.expect(T.css('li em', 'color') === 'rgb(51, 65, 85)', 'The nested <em> should inherit it — no extra rule needed.');\nT.expect(!T.ruleFor('em') && !T.ruleFor('li'), 'Don\\'t style em or li directly — let inheritance do the work.');" },
        { text: "Override locally: only `.brand` gets `color: #0ea5e9` (the rest stays inherited).",
          test: "T.expect(T.css('.brand', 'color') === 'rgb(14, 165, 233)', 'Add .brand { color: #0ea5e9; }');\nT.expect(T.css('h1', 'color') === 'rgb(51, 65, 85)', 'The h1 keeps the inherited color.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>The <span class=\"brand\">Cascade</span> Cafe</h1>\n  <ul>\n    <li>Everything here inherits from <em>one</em> body rule.</li>\n    <li>Except the brand name — it overrides.</li>\n  </ul>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* one body rule + one .brand override */\n\n" }
      ],
      hints: [
        "Exactly two rules solve this whole lesson: `body { … }` and `.brand { … }`.",
        "If you styled li or em directly, delete those rules — the checker verifies you DIDN'T need them."
      ],
      solution: {
        "styles.css": "body {\n  color: #334155;\n}\n\n.brand {\n  color: #0ea5e9;\n}\n"
      }
    },

    {
      id: "css-quiz",
      title: "Unit 1 quiz: Selectors & the Cascade",
      kind: "quiz", xp: 10,
      brief: "Selectors, specificity, inheritance and the three doors CSS enters through. 80% to pass.",
      questions: [
        { q: "Which selector targets elements with `class=\"card\"`?",
          choices: ["`.card`", "`#card`", "`card`", "`*card`"],
          answer: 0, explain: "Dot = class, hash = id, bare word = tag name." },
        { q: "What's the difference between `.card p` and `p.card`?",
          choices: ["A p inside `.card`, versus a p carrying that class", "Both forms match any p that sits inside a card", "`p.card` is invalid — tag and class can't combine", "`.card p` is the faster of the two to match"],
          answer: 0, explain: "The space means descendant: `.card p` reaches any p nested anywhere inside `.card`. No space means both conditions land on the SAME element: `p.card` is a p that itself carries the class. Combining a tag and a class is perfectly legal — and neither is meaningfully faster." },
        { q: "Who wins this fight?",
          code: "p        { color: gray; }\n.note    { color: orange; }\n#special { color: red; }\n/* on: <p id=\"special\" class=\"note\"> */",
          lang: "css",
          choices: ["#special — the id selector wins", ".note — classes outrank id selectors", "p — the first rule in the file wins", "They blend into a middle color"],
          answer: 0, explain: "Specificity ladder: id > class > tag. `#special` outranks both other rules even though it could have been written first. Position in the file only breaks ties between rules of EQUAL specificity, and declarations never blend." },
        { q: "Two rules have EQUAL specificity. Which applies?",
          choices: ["Whichever appears later in the file", "The first one written wins the tie-break", "The rule with the shorter selector wins", "Neither applies; the property is dropped"],
          answer: 0, explain: "Last-one-wins on ties — source order is the cascade's tiebreaker, and selector length has nothing to do with it. That's why your own stylesheet has to load AFTER any framework you want to override." },
        { q: "Which properties inherit from `body`?",
          choices: ["Text styling like color and font-family", "Box-model properties like border and padding", "Backgrounds and box shadows carry down", "Every property inherits unless you reset it"],
          answer: 0, explain: "Text styles flow down — `color`, `font-family`, `line-height` — so you set them once on `body` and the whole page picks them up. Box-model and background properties do NOT inherit; they would be chaos if they did (imagine every element bordered!)." },
        { q: "`li:first-child` selects…",
          choices: ["An li that is first among its siblings", "The first child element inside every li", "The first word of text in every li", "Any li that carries the class first-child"],
          answer: 0, explain: "Pseudo-classes (with a colon) select by position or state, not by class — `:last-child` and `:hover` work the same way. It counts POSITION, not type: in a `<div>` that opens with an `<h2>`, the `<p>` right after it fails `p:first-child` even though it is the first p in the box. Matching by type instead is what `:first-of-type` is for." },
        { q: "The professional default for adding CSS to a multi-page site?",
          choices: ["An external stylesheet via <link>", "A style= attribute on every element", "A <style> block copied into every page", "A JavaScript file that injects the styles"],
          answer: 0, explain: "One external file, many pages, one place to change things — and the browser caches it across the whole site. Inline `style=` attributes are the last resort, copied `<style>` blocks drift out of sync, and JS-injected styles land after first paint so the page flashes unstyled." },
        { q: "A style \"mysteriously\" isn't applying. Most likely culprit?",
          choices: ["A more specific rule elsewhere is winning", "The browser cached the CSS forever", "CSS only reloads after a full restart", "Properties must be listed alphabetically"],
          answer: 0, explain: "First debugging instinct: who else targets this element, and do they outrank me? Open DevTools, find your declaration with a line through it, and look at the selector that beat it — then raise your specificity or move your rule later." }
      ]
    }
  ]
});
