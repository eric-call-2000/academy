/* Responsive Design & Layout — Unit 4: Media queries & mobile-first */
window.CODELAB.addUnit("resp", {
  id: "resp-u4",
  title: "Media queries & mobile-first",
  icon: "📱",
  blurb: "One page, every screen — write phone styles first, then layer on @media breakpoints for tablets and desktops.",
  cheat: [
    { h: "The mobile-first recipe", lang: "css", code: "/* phone styles first — no query */\n.cards {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n/* enhance when there's room */\n@media (min-width: 700px) {\n  .cards { grid-template-columns: repeat(3, 1fr); }\n}", note: "Defaults serve the smallest screens; queries only ADD." },
    { h: "Stacking breakpoints (small → large)", lang: "css", code: "@media (min-width: 700px) {\n  .cards { grid-template-columns: repeat(2, 1fr); }\n}\n\n@media (min-width: 900px) {\n  .cards { grid-template-columns: repeat(4, 1fr); }\n}", note: "At 1000px BOTH match — the later block wins, so order them smallest first." },
    { h: "Show / hide per screen", lang: "css", code: "/* phone-only element */\n@media (min-width: 700px) {\n  .menuBtn { display: none; }\n}\n\n/* wide-only element */\n.deco { display: none; }\n@media (min-width: 700px) {\n  .deco { display: block; }\n}" },
    { h: "min-width vs max-width", lang: "css", code: "@media (min-width: 700px) { /* 700px and UP  */ }\n@media (max-width: 699px) { /* 699px and DOWN */ }", note: "Mobile-first sticks to min-width — the base styles ARE the phone layout." },
    { h: "Common breakpoints (convention, not law)", lang: "css", code: "/* 600px  — big phones\n   768px  — tablets\n   900px  — small laptops\n   1200px — desktops */", note: "Pick breakpoints where YOUR layout breaks, not where a chart says." }
  ],
  lessons: [

    {
      id: "resp-u4-1",
      title: "Your first media query",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Half the web's traffic is phones — including you, right now! One page that adapts to every screen: that is **responsive design**, and **media queries** are the tool.\n\nThe **mobile-first** recipe:\n\n- Write your default styles for small screens (single column — no query needed)\n- Then add `@media (min-width: 700px) { … }` blocks that *enhance* the layout when there is room\n\nRules inside the block only apply when the viewport is **700px or wider** — below that, the browser skips them completely.\n\nMake `.features` one column on phones and three columns on wide screens.",
      example: { lang: "css", code: "@media (min-width: 700px) {\n  .features {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}" },
      steps: [
        { text: "Base (mobile) styles: make `.features` a grid with **one** column (`grid-template-columns: 1fr`).",
          test: "T.expect(T.css('.features', 'display') === 'grid', 'Set display: grid on .features.');\nvar v = (T.decl('.features', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v === '1fr', 'Outside any media query, .features needs grid-template-columns: 1fr — one column is the mobile default.');" },
        { text: "Add a media query for `(min-width: 700px)`.",
          test: "T.expect(T.hasMedia('(min-width:700px)'), 'Add an @media (min-width: 700px) { … } block below your base styles.');" },
        { text: "Inside it, switch `.features` to **3 columns**.",
          test: "var v = (T.mediaDecl('(min-width:700px)', '.features', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('repeat(3,1fr)') !== -1 || v === '1fr1fr1fr', 'Inside the media query, set .features { grid-template-columns: repeat(3, 1fr); }');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Why go responsive?</h1>\n  <div class=\"features\">\n    <div class=\"feature\">📱 One page, every screen</div>\n    <div class=\"feature\">⚡ Loads fast on the go</div>\n    <div class=\"feature\">🖥️ Shines on desktop too</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.feature {\n  background: #ccfbf1;\n  padding: 18px;\n  border-radius: 12px;\n}\n\n.features {\n  gap: 12px;\n  /* 1) mobile-first grid here: display grid, ONE column */\n}\n\n/* 2) media query here: exactly @media (min-width: 700px) — 3 columns inside */\n" }
      ],
      hints: [
        "Base rule first: `.features { display: grid; grid-template-columns: 1fr; }` — no query around it.",
        "Then below it: `@media (min-width: 700px) { .features { grid-template-columns: repeat(3, 1fr); } }`",
        "Drag the preview edge wider and narrower to watch the layout snap between one and three columns."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.feature {\n  background: #ccfbf1;\n  padding: 18px;\n  border-radius: 12px;\n}\n\n.features {\n  gap: 12px;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 700px) {\n  .features {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n"
      }
    },

    {
      id: "resp-u4-2",
      title: "Mobile-first, two breakpoints",
      kind: "web", chip: "CSS", xp: 15, mins: 14,
      brief: "Real product pages do not jump straight from 1 column to 4 — they step through **breakpoints**. Stack multiple `@media` blocks, ordered small → large:\n\n- base: `1fr` (phones)\n- `@media (min-width: 700px)` → `repeat(2, 1fr)` (tablets)\n- `@media (min-width: 900px)` → `repeat(4, 1fr)` (desktops)\n\nAt 1000px wide BOTH queries match — and the **later rule wins** the cascade. That is exactly why mobile-first sheets always order breakpoints smallest first.\n\nLay out the storefront.",
      steps: [
        { text: "Base: `.products` is a grid with **one** column.",
          test: "T.expect(T.css('.products', 'display') === 'grid', 'Set display: grid on .products.');\nvar v = (T.decl('.products', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v === '1fr', 'Outside any media query, .products needs grid-template-columns: 1fr — phones come first.');" },
        { text: "From **700px**: two columns. Add the first media query.",
          test: "T.expect(T.hasMedia('(min-width:700px)'), 'Add an @media (min-width: 700px) { … } block.');\nvar v = (T.mediaDecl('(min-width:700px)', '.products', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('repeat(2,1fr)') !== -1 || v === '1fr1fr', 'Inside the 700px query, set .products { grid-template-columns: repeat(2, 1fr); }');" },
        { text: "From **900px**: four columns. Add the second query BELOW the first.",
          test: "T.expect(T.hasMedia('(min-width:900px)'), 'Add a second block: @media (min-width: 900px) { … } — after the 700px one.');\nvar v = (T.mediaDecl('(min-width:900px)', '.products', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('repeat(4,1fr)') !== -1 || v === '1fr1fr1fr1fr', 'Inside the 900px query, set .products { grid-template-columns: repeat(4, 1fr); }');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Gadget shop</h1>\n  <div class=\"products\">\n    <div class=\"product\"><div class=\"emoji\">🎧</div>Headphones<div class=\"price\">$59</div></div>\n    <div class=\"product\"><div class=\"emoji\">🕹️</div>Controller<div class=\"price\">$39</div></div>\n    <div class=\"product\"><div class=\"emoji\">⌚</div>Watch<div class=\"price\">$129</div></div>\n    <div class=\"product\"><div class=\"emoji\">📷</div>Camera<div class=\"price\">$249</div></div>\n    <div class=\"product\"><div class=\"emoji\">🔌</div>Charger<div class=\"price\">$25</div></div>\n    <div class=\"product\"><div class=\"emoji\">🖱️</div>Mouse<div class=\"price\">$29</div></div>\n    <div class=\"product\"><div class=\"emoji\">⌨️</div>Keyboard<div class=\"price\">$79</div></div>\n    <div class=\"product\"><div class=\"emoji\">🔦</div>Flashlight<div class=\"price\">$19</div></div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f8fafc;\n  padding: 16px;\n}\n\n.product {\n  background: white;\n  border-radius: 12px;\n  padding: 14px;\n  text-align: center;\n}\n\n.emoji { font-size: 40px; }\n\n.price { color: #0ea5e9; font-weight: bold; }\n\n.products {\n  gap: 12px;\n  /* 1) base (mobile): grid, ONE column */\n}\n\n/* 2) @media (min-width: 700px): two columns */\n\n/* 3) @media (min-width: 900px): four columns */\n" }
      ],
      hints: [
        "Three layers, top to bottom: the base .products rule, then the 700px block, then the 900px block.",
        "Each block re-declares ONLY what changes: `grid-template-columns: repeat(2, 1fr)` at 700px, `repeat(4, 1fr)` at 900px.",
        "First block: `@media (min-width: 700px) { .products { grid-template-columns: repeat(2, 1fr); } }` — copy it, change 700 → 900 and 2 → 4 for the second."
      ],
      solution: {
        "styles.css": "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f8fafc;\n  padding: 16px;\n}\n\n.product {\n  background: white;\n  border-radius: 12px;\n  padding: 14px;\n  text-align: center;\n}\n\n.emoji { font-size: 40px; }\n\n.price { color: #0ea5e9; font-weight: bold; }\n\n.products {\n  gap: 12px;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 700px) {\n  .products {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 900px) {\n  .products {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n"
      }
    },

    {
      id: "resp-u4-3",
      title: "Responsive navbar",
      kind: "web", chip: "CSS", xp: 15, mins: 14,
      brief: "Every real navbar leads a double life: on phones the brand, the ☰ button, and the links **stack**; on desktops everything sits in one row.\n\nSame HTML, two layouts:\n\n- base: `nav` is a flex **column** — everything stacked, 10px gap\n- at `@media (min-width: 700px)`: `flex-direction: row` + `justify-content: space-between`\n- the `.menuBtn` is for phones only — inside the query, `display: none`\n\n(A real hamburger needs a dab of JS to open the menu — today is pure layout day.)",
      steps: [
        { text: "Base: make `nav` a flex container with `flex-direction: column` and a **10px** gap.",
          test: "T.expect(T.css('nav', 'display') === 'flex', 'Set display: flex on nav.');\nvar fd = (T.decl('nav', 'flex-direction') || '').replace(/\\s+/g, '');\nT.expect(fd === 'column', 'In the base nav rule (OUTSIDE any media query), set flex-direction: column so everything stacks on phones.');\nT.expect(T.css('nav', 'row-gap') === '10px' || T.css('nav', 'gap') === '10px', 'Add gap: 10px to nav.');" },
        { text: "At **700px**: `nav` becomes a row with `justify-content: space-between` (add `align-items: center` too — it looks better).",
          test: "T.expect(T.hasMedia('(min-width:700px)'), 'Add an @media (min-width: 700px) { … } block.');\nvar fd = (T.mediaDecl('(min-width:700px)', 'nav', 'flex-direction') || '').replace(/\\s+/g, '');\nT.expect(fd === 'row', 'Inside the query, add a nav rule with flex-direction: row.');\nvar jc = (T.mediaDecl('(min-width:700px)', 'nav', 'justify-content') || '').replace(/\\s+/g, '');\nT.expect(jc === 'space-between', 'Also inside the query, on nav: justify-content: space-between puts the brand left and the links right.');" },
        { text: "Hide `.menuBtn` on wide screens — `display: none` **inside the query only** (phones keep it!).",
          test: "var base = (T.decl('.menuBtn', 'display') || '').replace(/\\s+/g, '');\nT.expect(base !== 'none', 'Do NOT hide .menuBtn in the base styles — phones need the button. The display: none belongs inside the media query.');\nvar md = (T.mediaDecl('(min-width:700px)', '.menuBtn', 'display') || '').replace(/\\s+/g, '');\nT.expect(md === 'none', 'Inside the 700px query, add a separate .menuBtn rule with display: none — wide screens show the full link row instead.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <nav>\n    <div class=\"brand\">🌮 TacoTown</div>\n    <button class=\"menuBtn\">☰ Menu</button>\n    <div class=\"navLinks\">\n      <a href=\"#\">Menu</a>\n      <a href=\"#\">Locations</a>\n      <a href=\"#\">Order</a>\n    </div>\n  </nav>\n  <h1>Tacos worth resizing for</h1>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n\nnav {\n  background: #0f172a;\n  color: white;\n  padding: 14px 20px;\n  /* 1) flex COLUMN with a 10px gap — the phone layout */\n}\n\n.brand {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.menuBtn {\n  border: 1px solid #475569;\n  background: #1e293b;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  width: max-content;\n}\n\n.navLinks {\n  display: flex;\n  gap: 14px;\n}\n\nnav a { color: #7dd3fc; text-decoration: none; }\n\n/* 2) @media (min-width: 700px):\n      nav → row, space-between, centered\n      .menuBtn → display: none (its own rule) */\n" }
      ],
      hints: [
        "Base nav rule gets three new lines: `display: flex; flex-direction: column; gap: 10px;` — the stack IS the phone layout.",
        "One media query, TWO rules inside it: one for `nav`, one for `.menuBtn` — keep each selector in its own rule.",
        "`@media (min-width: 700px) { nav { flex-direction: row; justify-content: space-between; align-items: center; } .menuBtn { display: none; } }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n\nnav {\n  background: #0f172a;\n  color: white;\n  padding: 14px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.brand {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.menuBtn {\n  border: 1px solid #475569;\n  background: #1e293b;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  width: max-content;\n}\n\n.navLinks {\n  display: flex;\n  gap: 14px;\n}\n\nnav a { color: #7dd3fc; text-decoration: none; }\n\n@media (min-width: 700px) {\n  nav {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .menuBtn {\n    display: none;\n  }\n}\n"
      }
    },

    {
      id: "resp-u4-4",
      title: "Polish per screen",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Layout is only half of responsive design — **polish** is the rest. Wide screens can afford roomier padding, bigger headlines, and extra decoration that would crowd a phone.\n\n- more space: bump `padding` and `font-size` inside the query\n- wide-only elements: `display: none` in the base, `display: block` inside the query\n\nYou will meet the 'classic' breakpoints in the wild — **600, 768, 900, 1200** — but they are convention, not law: resize YOUR page and add a breakpoint where YOUR design breaks. Here we stay with 700px.",
      steps: [
        { text: "At **700px**, give `.hero` room to breathe: `padding: 48px` inside the query.",
          test: "T.expect(T.hasMedia('(min-width:700px)'), 'Add an @media (min-width: 700px) { … } block at the bottom of the sheet.');\nvar p = (T.mediaDecl('(min-width:700px)', '.hero', 'padding') || '').replace(/\\s+/g, '');\nT.expect(p === '48px', 'Inside the query, add a .hero rule with padding: 48px — the base 16px stays for phones.');" },
        { text: "Also inside the query: grow `.heroTitle` to `font-size: 2.5rem`.",
          test: "var fs = (T.mediaDecl('(min-width:700px)', '.heroTitle', 'font-size') || '').replace(/\\s+/g, '');\nT.expect(fs === '2.5rem', 'Inside the query, add a .heroTitle rule with font-size: 2.5rem. Phones keep the base 1.5rem.');" },
        { text: "The `.deco` banner is wide-screen-only: `display: none` in its **base** rule, `display: block` inside the query.",
          test: "var base = (T.decl('.deco', 'display') || '').replace(/\\s+/g, '');\nT.expect(base === 'none', 'Add display: none to the base .deco rule — phones skip the decoration.');\nvar md = (T.mediaDecl('(min-width:700px)', '.deco', 'display') || '').replace(/\\s+/g, '');\nT.expect(md === 'block', 'Inside the query, add a .deco rule with display: block so wide screens get it back.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <section class=\"hero\">\n    <aside class=\"deco\"></aside>\n    <h1 class=\"heroTitle\">Look great at every size</h1>\n    <p>Same page — tuned per screen.</p>\n  </section>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.hero {\n  background: #0f172a;\n  color: white;\n  padding: 16px;\n}\n\n.heroTitle {\n  font-size: 1.5rem;\n  margin: 8px 0;\n}\n\n.deco {\n  height: 60px;\n  border-radius: 12px;\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n  /* 3) hide me on phones: display: none goes right here… */\n}\n\n/* 1–2) @media (min-width: 700px):\n      .hero      → padding: 48px\n      .heroTitle → font-size: 2.5rem\n   3) …and .deco → display: block (wide screens only) */\n" }
      ],
      hints: [
        "Everything new goes in ONE `@media (min-width: 700px) { … }` block with three rules inside: .hero, .heroTitle, .deco.",
        "The .deco trick is two halves: `display: none;` added to the EXISTING base .deco rule, and `display: block;` in a .deco rule inside the query.",
        "Inside the query: `.hero { padding: 48px; }` `.heroTitle { font-size: 2.5rem; }` `.deco { display: block; }`"
      ],
      solution: {
        "styles.css": "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.hero {\n  background: #0f172a;\n  color: white;\n  padding: 16px;\n}\n\n.heroTitle {\n  font-size: 1.5rem;\n  margin: 8px 0;\n}\n\n.deco {\n  height: 60px;\n  border-radius: 12px;\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n  display: none;\n}\n\n@media (min-width: 700px) {\n  .hero {\n    padding: 48px;\n  }\n  .heroTitle {\n    font-size: 2.5rem;\n  }\n  .deco {\n    display: block;\n  }\n}\n"
      }
    },

    {
      id: "resp-quiz-4",
      title: "Unit 4 quiz: Media queries",
      kind: "quiz", xp: 10,
      questions: [
        { q: "Your page is viewed on a 390px-wide phone. Which rules apply?",
          code: ".cards { grid-template-columns: 1fr; }\n\n@media (min-width: 700px) {\n  .cards { grid-template-columns: repeat(3, 1fr); }\n}",
          lang: "css",
          choices: ["Both — media queries always apply", "Only the base rule: one column", "Only the media query: three columns", "Neither — 390px matches nothing"],
          answer: 1, explain: "min-width: 700px only kicks in at 700px and up; at 390px the browser skips the whole block and the base (mobile) styles stand alone." },
        { q: "`@media (min-width: 700px)` applies when the viewport is…",
          choices: ["narrower than 700px", "exactly 700px and no other width", "taller than 700px", "700px wide or wider"],
          answer: 3, explain: "Read min-width as 'at least this wide'. Its mirror, max-width, means 'at most this wide'." },
        { q: "The mobile-first recipe is…",
          choices: ["Build the desktop layout first, then shrink it with max-width queries", "Ship a separate m.example.com site for phones", "Write phone styles as the default, then enhance bigger screens with min-width queries", "Put every style inside a media query"],
          answer: 2, explain: "The defaults serve the smallest screens; each min-width block layers on enhancements. Nothing gets undone — only added." },
        { q: "The viewport is 1000px wide. How many columns does .cards get?",
          code: "@media (min-width: 700px) {\n  .cards { grid-template-columns: repeat(2, 1fr); }\n}\n@media (min-width: 900px) {\n  .cards { grid-template-columns: repeat(4, 1fr); }\n}",
          lang: "css",
          choices: ["2 — the first matching query wins", "4 — both queries match, and the later rule wins the cascade", "6 — the queries add up", "An error — two queries can't set the same property"],
          answer: 1, explain: "At 1000px both blocks apply, so the normal cascade decides: the later rule overrides. That is why mobile-first sheets order breakpoints small → large." },
        { q: "You want the ☰ menu button visible on phones only. Which CSS?",
          choices: ["Leave .menuBtn visible by default; inside @media (min-width: 700px), set .menuBtn { display: none; }", "Set .menuBtn { display: none; } in the base styles", "Inside @media (min-width: 700px), set .menuBtn { display: block; }", "Delete the button from the HTML"],
          answer: 0, explain: "Mobile-first: the default IS the phone behavior (visible), and the wide-screen query takes it away with display: none." },
        { q: "Are breakpoints like 600, 768, 900 and 1200px official CSS values?",
          choices: ["Yes — browsers only accept those four", "Yes — other numbers are silently ignored", "No — they're just popular conventions; pick breakpoints where YOUR layout breaks", "No — breakpoints must always be written in rem, never px"],
          answer: 2, explain: "Any length works in a media query. The classics come from common device sizes, but the pro move is resizing your page and adding a breakpoint exactly where the design breaks." }
      ]
    }
  ]
});
