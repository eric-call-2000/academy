/* Unit 3 — Improved Styling: Flexbox, Grid & Responsive Design */
window.CODELAB.addUnit({
  id: "layout",
  title: "Flexbox, Grid & Responsive",
  icon: "📐",
  color: "#2bb3a3",
  blurb: "Real layouts — line things up, build grids, and make it all work on phones.",
  cheat: [
    { h: "Flexbox essentials", lang: "css", code: ".row {\n  display: flex;          /* children line up in a row */\n  gap: 12px;              /* space between children */\n  justify-content: space-between; /* main-axis spread */\n  align-items: center;    /* cross-axis alignment */\n}" },
    { h: "Perfect centering", lang: "css", code: ".center {\n  display: flex;\n  justify-content: center; /* horizontal */\n  align-items: center;     /* vertical */\n  height: 200px;\n}" },
    { h: "Grid essentials", lang: "css", code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\n  gap: 16px;\n}" },
    { h: "Mobile-first media query", lang: "css", code: "/* phone styles first (no query) */\n.cols { display: grid; grid-template-columns: 1fr; }\n\n/* then enhance on bigger screens */\n@media (min-width: 700px) {\n  .cols { grid-template-columns: repeat(3, 1fr); }\n}" }
  ],
  lessons: [

    {
      id: "flex-1",
      title: "Meet Flexbox",
      kind: "web", chip: "CSS", xp: 15,
      brief: "By default, block elements stack vertically. **Flexbox** turns a container into a layout machine: set `display: flex` on the **parent** and its children line up in a row.\n\n- `gap` — space between children\n- `justify-content` — how children spread along the row (`flex-start`, `center`, `space-between`…)\n\nThe pills below are stacked. Make them a row.",
      steps: [
        { text: "Turn `.row` into a flex container.",
          test: "T.expect(T.css('.row', 'display') === 'flex', 'Set display: flex on .row (currently ' + T.css('.row', 'display') + ').');" },
        { text: "Add a **12px** `gap` between the pills.",
          test: "T.expect(T.css('.row', 'gap') === '12px' || T.css('.row', 'column-gap') === '12px', 'Set gap: 12px on .row.');" },
        { text: "Spread them across the full width with `justify-content: space-between`.",
          test: "T.expect(T.css('.row', 'justify-content') === 'space-between', 'Set justify-content: space-between on .row.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Crew status</h1>\n  <div class=\"row\">\n    <div class=\"pill\">🟢 Ana</div>\n    <div class=\"pill\">🟢 Bo</div>\n    <div class=\"pill\">🌙 Cal</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.pill {\n  background: #e0f2fe;\n  padding: 8px 14px;\n  border-radius: 999px;\n}\n\n.row {\n  /* your flexbox code here */\n}\n" }
      ],
      hints: [
        "Flex properties go on the PARENT (.row), not the children (.pill).",
        "`display: flex;` then `gap: 12px;` then `justify-content: space-between;` — all in the .row rule."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.pill {\n  background: #e0f2fe;\n  padding: 8px 14px;\n  border-radius: 999px;\n}\n\n.row {\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n"
      }
    },

    {
      id: "flex-2",
      title: "Centering (finally easy)",
      kind: "web", chip: "CSS", xp: 15,
      brief: "\"How do I center a div?\" used to be a running joke. Flexbox ended it:\n\n- `justify-content: center` centers along the **main axis** (horizontal, in a row)\n- `align-items: center` centers along the **cross axis** (vertical)\n\nCombine both on a container with a height and its child sits dead-center.",
      steps: [
        { text: "Make `.stage` a flex container.",
          test: "T.expect(T.css('.stage', 'display') === 'flex', 'Set display: flex on .stage.');" },
        { text: "Center horizontally with `justify-content: center`.",
          test: "T.expect(T.css('.stage', 'justify-content') === 'center', 'Set justify-content: center on .stage.');" },
        { text: "Center vertically with `align-items: center` (the stage is 240px tall).",
          test: "T.expect(T.css('.stage', 'align-items') === 'center', 'Set align-items: center on .stage.');\nT.expect(T.css('.stage', 'height') === '240px', 'Keep the 240px height on .stage.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"stage\">\n    <div class=\"gem\">💎 Perfectly centered</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n\n.stage {\n  height: 240px;\n  background: #0f172a;\n  /* center the gem here */\n}\n\n.gem {\n  background: white;\n  padding: 12px 18px;\n  border-radius: 12px;\n}\n" }
      ],
      hints: [
        "Both centering properties go on .stage (the parent).",
        "`justify-content` = main axis (↔ in a row), `align-items` = cross axis (↕)."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n\n.stage {\n  height: 240px;\n  background: #0f172a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gem {\n  background: white;\n  padding: 12px 18px;\n  border-radius: 12px;\n}\n" }
    },

    {
      id: "flex-3",
      title: "Build a navbar",
      kind: "web", chip: "CSS", xp: 15,
      brief: "The classic flexbox interview task: a **navbar** — logo on the left, links on the right, everything vertically centered.\n\nTwo flex containers do it: the `<nav>` itself, and the `<ul>` of links. You'll also want `list-style: none` to drop the bullets.",
      steps: [
        { text: "Make the `nav` a flex row with `justify-content: space-between` and `align-items: center`.",
          test: "T.expect(T.css('nav', 'display') === 'flex', 'Set display: flex on nav.');\nT.expect(T.css('nav', 'justify-content') === 'space-between', 'Set justify-content: space-between on nav.');\nT.expect(T.css('nav', 'align-items') === 'center', 'Set align-items: center on nav.');" },
        { text: "Make the `nav ul` a flex row with a **16px** gap.",
          test: "T.expect(T.css('nav ul', 'display') === 'flex', 'Set display: flex on nav ul.');\nT.expect(T.css('nav ul', 'gap') === '16px' || T.css('nav ul', 'column-gap') === '16px', 'Set gap: 16px on nav ul.');" },
        { text: "Remove the bullets: `list-style: none` on the `ul`.",
          test: "T.expect(T.css('nav ul', 'list-style-type') === 'none', 'Set list-style: none on nav ul.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <nav>\n    <div class=\"logo\">⚡ CodeLab</div>\n    <ul>\n      <li><a href=\"#\">Docs</a></li>\n      <li><a href=\"#\">Blog</a></li>\n      <li><a href=\"#\">About</a></li>\n    </ul>\n  </nav>\n  <h1>Welcome</h1>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n\nnav {\n  background: #0ea5e9;\n  color: white;\n  padding: 12px 20px;\n  /* flex it */\n}\n\nnav ul {\n  margin: 0;\n  padding: 0;\n  /* flex it too */\n}\n\nnav a { color: white; }\n.logo { font-weight: bold; }\n" }
      ],
      hints: [
        "Two separate rules get flexbox: `nav { }` and `nav ul { }`.",
        "`list-style: none;` goes on the ul; keep its margin/padding at 0 (already set)."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n\nnav {\n  background: #0ea5e9;\n  color: white;\n  padding: 12px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nnav ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  gap: 16px;\n  list-style: none;\n}\n\nnav a { color: white; }\n.logo { font-weight: bold; }\n" }
    },

    {
      id: "grid-1",
      title: "CSS Grid",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Flexbox is one-dimensional (a row *or* a column). **CSS Grid** is two-dimensional — perfect for photo galleries, dashboards, card layouts.\n\n- `display: grid` on the parent\n- `grid-template-columns: repeat(3, 1fr)` → three equal columns (`1fr` = one fraction of the free space)\n- `gap` works here too\n\nTurn this pile of tiles into a 3-column gallery.",
      steps: [
        { text: "Make `.gallery` a grid container.",
          test: "T.expect(T.css('.gallery', 'display') === 'grid', 'Set display: grid on .gallery.');" },
        { text: "Give it **3 equal columns** with `repeat(3, 1fr)`.",
          test: "var v = (T.decl('.gallery', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('repeat(3,1fr)') !== -1 || v === '1fr1fr1fr', 'Set grid-template-columns: repeat(3, 1fr) on .gallery.');" },
        { text: "Space the tiles with a **10px** gap.",
          test: "T.expect(T.css('.gallery', 'gap') === '10px' || (T.css('.gallery', 'row-gap') === '10px' && T.css('.gallery', 'column-gap') === '10px'), 'Set gap: 10px on .gallery.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Trip photos</h1>\n  <div class=\"gallery\">\n    <div class=\"tile\">🌋</div>\n    <div class=\"tile\">🏜️</div>\n    <div class=\"tile\">🏔️</div>\n    <div class=\"tile\">🌊</div>\n    <div class=\"tile\">🌲</div>\n    <div class=\"tile\">🌅</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.tile {\n  background: #ccfbf1;\n  font-size: 40px;\n  text-align: center;\n  padding: 24px 0;\n  border-radius: 10px;\n}\n\n.gallery {\n  /* grid code here */\n}\n" }
      ],
      hints: [
        "Grid properties go on the container (.gallery), the tiles just flow in.",
        "`grid-template-columns: repeat(3, 1fr);` is shorthand for `1fr 1fr 1fr`."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.tile {\n  background: #ccfbf1;\n  font-size: 40px;\n  text-align: center;\n  padding: 24px 0;\n  border-radius: 10px;\n}\n\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n" }
    },

    {
      id: "media-1",
      title: "Media queries: mobile-first",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Half the web's traffic is phones — including you, right now! **Responsive design** means one page that adapts to any screen.\n\nThe **mobile-first** recipe:\n\n- Write your default styles for small screens (single column)\n- Then add `@media (min-width: 700px) { … }` blocks that *enhance* the layout when there's room\n\nHere the `.features` list should be one column on phones and three columns on wide screens.",
      example: { lang: "css", code: "@media (min-width: 700px) {\n  .features {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}" },
      steps: [
        { text: "Base (mobile) styles: make `.features` a grid with **one** column (`grid-template-columns: 1fr`).",
          test: "T.expect(T.css('.features', 'display') === 'grid', 'Set display: grid on .features.');\nvar v = (T.decl('.features', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v === '1fr', 'Outside any media query, .features should have grid-template-columns: 1fr.');" },
        { text: "Add a media query for `(min-width: 700px)`.",
          test: "T.expect(T.hasMedia('(min-width:700px)'), 'Add an @media (min-width: 700px) { … } block.');" },
        { text: "Inside it, switch `.features` to **3 columns**.",
          test: "var v = (T.mediaDecl('(min-width:700px)', '.features', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('repeat(3,1fr)') !== -1 || v === '1fr1fr1fr', 'Inside the media query, set .features { grid-template-columns: repeat(3, 1fr); }');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Why CodeLab?</h1>\n  <div class=\"features\">\n    <div class=\"feature\">📱 Works on your phone</div>\n    <div class=\"feature\">✅ Checks your code</div>\n    <div class=\"feature\">🚀 Real projects</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.feature {\n  background: #ccfbf1;\n  padding: 18px;\n  border-radius: 12px;\n}\n\n.features {\n  gap: 12px;\n  /* 1) mobile-first grid here */\n}\n\n/* 2) media query here */\n" }
      ],
      hints: [
        "Base rule first: `.features { display: grid; grid-template-columns: 1fr; }`",
        "Then below it: `@media (min-width: 700px) { .features { grid-template-columns: repeat(3, 1fr); } }`",
        "Drag the preview wider/narrower (or run on desktop) to watch it snap between layouts."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.feature {\n  background: #ccfbf1;\n  padding: 18px;\n  border-radius: 12px;\n}\n\n.features {\n  gap: 12px;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 700px) {\n  .features {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n" }
    },

    {
      id: "layout-quiz",
      title: "Layout checkpoint quiz",
      kind: "quiz", xp: 10,
      questions: [
        { q: "Where do `display: flex` and `justify-content` go?",
          choices: ["On the parent container", "On each child", "On the <body> only", "On the first child only"],
          answer: 0, explain: "Flexbox works by styling the CONTAINER; the children fall in line." },
        { q: "Which pair centers a child both ways in a flex container?",
          choices: ["`justify-content: center` + `align-items: center`", "`text-align: center` + `vertical-align: middle`", "`margin: center` + `padding: center`", "`center: both`"],
          answer: 0, explain: "justify-content handles the main axis, align-items the cross axis." },
        { q: "What does `1fr` mean in `grid-template-columns: repeat(3, 1fr)`?",
          choices: ["One fraction of the available space — so 3 equal columns", "One pixel", "The first row", "1% of the screen"],
          answer: 0, explain: "fr units split the free space proportionally; three 1fr columns are equal thirds." },
        { q: "Flexbox vs Grid — the classic rule of thumb?",
          choices: ["Flexbox for one dimension (a row OR column), Grid for two", "Grid is old, Flexbox replaces it", "Flexbox is only for text", "They can't be used on the same page"],
          answer: 0, explain: "Both are great; Grid shines when you're controlling rows AND columns at once." },
        { q: "What does this media query do?",
          code: "@media (min-width: 700px) {\n  .cols { grid-template-columns: repeat(3, 1fr); }\n}",
          lang: "css",
          choices: ["Applies 3 columns only when the screen is 700px or wider", "Applies 3 columns only on phones", "Limits the page width to 700px", "Loads a different stylesheet"],
          answer: 0, explain: "min-width: 700px = \"from 700px and up\". That's the mobile-first pattern: small screens get the default styles." },
        { q: "\"Mobile-first\" means…",
          choices: ["Default styles target small screens; media queries enhance larger ones", "You must build a separate mobile site", "Testing on a phone before launch", "Using only flexbox"],
          answer: 0, explain: "Write the phone layout as the baseline, then layer on desktop upgrades with min-width queries." }
      ]
    },

    {
      id: "layout-project",
      title: "Project: Responsive landing page",
      kind: "web", chip: "CSS", xp: 40, project: true,
      brief: "Build the layout for a **product landing page**: a centered hero and a responsive feature grid. This is the exact skeleton of a thousand real startup sites.\n\nMobile-first: single column by default, three columns from 700px up.",
      steps: [
        { text: "Make `.hero` a flex **column**, centered: `flex-direction: column`, `align-items: center`, `justify-content: center`, and keep its height.",
          test: "T.expect(T.css('.hero', 'display') === 'flex', 'Set display: flex on .hero.');\nT.expect(T.css('.hero', 'flex-direction') === 'column', 'Set flex-direction: column on .hero.');\nT.expect(T.css('.hero', 'align-items') === 'center', 'Set align-items: center on .hero.');\nT.expect(T.css('.hero', 'justify-content') === 'center', 'Set justify-content: center on .hero.');" },
        { text: "Style `.cta` as a pill button: background `#0ea5e9`, white text, `border-radius: 999px`.",
          test: "T.expect(T.css('.cta', 'background-color') === 'rgb(14, 165, 233)', 'Give .cta background #0ea5e9.');\nT.expect(T.css('.cta', 'color') === 'rgb(255, 255, 255)', 'Give .cta white text.');\nT.expect(T.css('.cta', 'border-top-left-radius') === '999px', 'Round .cta with border-radius: 999px.');" },
        { text: "Make `.features` a single-column grid with a **14px** gap (mobile default).",
          test: "T.expect(T.css('.features', 'display') === 'grid', 'Set display: grid on .features.');\nvar v = (T.decl('.features', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v === '1fr', 'Base .features should be one column (grid-template-columns: 1fr).');\nT.expect(T.css('.features', 'gap') === '14px' || T.css('.features', 'row-gap') === '14px', 'Set gap: 14px on .features.');" },
        { text: "From **700px** wide, switch `.features` to 3 columns with a media query.",
          test: "T.expect(T.hasMedia('(min-width:700px)'), 'Add @media (min-width: 700px) { … }.');\nvar v = (T.mediaDecl('(min-width:700px)', '.features', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('repeat(3,1fr)') !== -1 || v === '1fr1fr1fr', 'Inside it, give .features three 1fr columns.');" },
        { text: "Give each `.feature` card a white background and rounded corners (≥ 10px).",
          test: "var cards = T.$$('.feature');\nT.expect(cards.length >= 3, 'Keep the three .feature cards.');\nvar ok = cards.every(function (c) { var cs = getComputedStyle(c); return cs.backgroundColor === 'rgb(255, 255, 255)' && parseInt(cs.borderTopLeftRadius) >= 10; });\nT.expect(ok, 'Every .feature needs a white background and border-radius of at least 10px.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <section class=\"hero\">\n    <h1>Ship your ideas</h1>\n    <p>The fastest way to go from sketch to site.</p>\n    <a class=\"cta\" href=\"#\">Start free</a>\n  </section>\n\n  <section class=\"features\">\n    <div class=\"feature\">\n      <h2>⚡ Fast</h2>\n      <p>Loads before you blink.</p>\n    </div>\n    <div class=\"feature\">\n      <h2>📱 Responsive</h2>\n      <p>Gorgeous on any screen.</p>\n    </div>\n    <div class=\"feature\">\n      <h2>🔒 Secure</h2>\n      <p>Locked down by default.</p>\n    </div>\n  </section>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.hero {\n  height: 260px;\n  background: #0f172a;\n  color: white;\n  text-align: center;\n  /* 1) flex column, centered */\n}\n\n.cta {\n  text-decoration: none;\n  padding: 12px 24px;\n  /* 2) pill button */\n}\n\n.features {\n  padding: 16px;\n  /* 3) mobile-first grid */\n}\n\n.feature {\n  padding: 16px;\n  /* 5) card look */\n}\n\n/* 4) media query for wide screens */\n" }
      ],
      hints: [
        "The hero needs FOUR declarations: display, flex-direction, align-items, justify-content.",
        "Media query goes at the bottom: `@media (min-width: 700px) { .features { grid-template-columns: repeat(3, 1fr); } }`",
        "If a color check fails, copy the exact hex from the checkpoint text."
      ],
      solution: {
        "styles.css": "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.hero {\n  height: 260px;\n  background: #0f172a;\n  color: white;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.cta {\n  text-decoration: none;\n  padding: 12px 24px;\n  background-color: #0ea5e9;\n  color: white;\n  border-radius: 999px;\n}\n\n.features {\n  padding: 16px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 14px;\n}\n\n.feature {\n  padding: 16px;\n  background-color: white;\n  border-radius: 12px;\n}\n\n@media (min-width: 700px) {\n  .features {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n" }
    }
  ]
});
