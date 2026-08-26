/* Responsive Design & Layout — Unit 6: Responsive projects */
window.CODELAB.addUnit("resp", {
  id: "resp-u6",
  title: "Responsive projects",
  icon: "🏆",
  blurb: "The graduation unit — an app shell, a photo gallery and a full dashboard, built with every responsive tool you own.",
  cheat: [
    { h: "App shell: named areas", lang: "css", code: ".shell {\n  display: grid;\n  grid-template-areas:\n    \"topbar\"\n    \"main\";\n}\n.topbar { grid-area: topbar; }\n.main { grid-area: main; }", note: "The parent draws the map; every child claims a name with grid-area. HTML order stops mattering." },
    { h: "Remap the shell at a breakpoint", lang: "css", code: "@media (min-width: 900px) {\n  .shell {\n    grid-template-columns: 220px 1fr;\n    grid-template-areas:\n      \"topbar topbar\"\n      \"sidebar main\";\n  }\n}", note: "A name written twice spans those columns." },
    { h: "Gallery with zero media queries", lang: "css", code: ".gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n}", note: "auto-fit picks the column count; minmax sets each column's floor and stretch." },
    { h: "Centered page container", lang: "css", code: ".container {\n  max-width: 900px;\n  margin: 0 auto;\n}" },
    { h: "Hide on phones, show on desktops", lang: "css", code: ".sidebar { display: none; }\n\n@media (min-width: 900px) {\n  .sidebar { display: block; }\n}", note: "Mobile-first: hidden is the default; the query brings it back." },
    { h: "Fluid stat number", lang: "css", code: ".statNum {\n  font-size: clamp(1.4rem, 5vw, 2.2rem);\n}", note: "Scales with the viewport (5vw) but never below 1.4rem or above 2.2rem." }
  ],
  lessons: [

    {
      id: "resp-u6-1",
      title: "The app shell",
      kind: "web", chip: "CSS", xp: 15, mins: 14,
      brief: "Real apps aren't one column of stuff — they're a **shell**: topbar on top, a sidebar, the main content. `grid-template-areas` lets you sketch that skeleton as ASCII art:\n\n- each child claims a name with `grid-area`\n- the parent draws rows of names in `grid-template-areas`\n- redraw the map inside `@media (min-width: 700px)` and the whole page rearranges — zero HTML changes\n\nOn phones everything stacks: `\"topbar\" \"main\" \"sidebar\"`. From **700px** up, a **220px** sidebar slides in left of main. Draw both maps.",
      example: { lang: "css", code: ".shell {\n  display: grid;\n  grid-template-areas:\n    \"topbar\"\n    \"main\"\n    \"sidebar\";\n}\n\n.topbar { grid-area: topbar; }" },
      steps: [
        { text: "Make `.shell` a grid and draw the mobile map: three rows — `\"topbar\"`, `\"main\"`, `\"sidebar\"`.",
          test: "T.expect(T.css('.shell', 'display') === 'grid', 'Set display: grid on .shell.');\nvar v = (T.decl('.shell', 'grid-template-areas') || '').replace(/\\s+/g, '').replace(/'/g, '\"');\nT.expect(v === '\"topbar\"\"main\"\"sidebar\"', 'Outside any media query, .shell needs grid-template-areas: \"topbar\" \"main\" \"sidebar\" — three rows, one quoted name per row.');" },
        { text: "Each child claims its slot: `grid-area: topbar` on `.topbar`, `main` on `.main`, `sidebar` on `.sidebar`.",
          test: "var a = (T.decl('.topbar', 'grid-area') || '').replace(/\\s+/g, '');\nT.expect(a === 'topbar' || a.indexOf('topbar/') === 0, 'Set grid-area: topbar on .topbar.');\nvar b = (T.decl('.main', 'grid-area') || '').replace(/\\s+/g, '');\nT.expect(b === 'main' || b.indexOf('main/') === 0, 'Set grid-area: main on .main.');\nvar c = (T.decl('.sidebar', 'grid-area') || '').replace(/\\s+/g, '');\nT.expect(c === 'sidebar' || c.indexOf('sidebar/') === 0, 'Set grid-area: sidebar on .sidebar.');" },
        { text: "From **700px** up: two columns (`220px 1fr`) and a redrawn map — `\"topbar topbar\"` over `\"sidebar main\"`.",
          test: "T.expect(T.hasMedia('(min-width:700px)'), 'Add an @media (min-width: 700px) { … } block below your base styles.');\nvar v = (T.mediaDecl('(min-width:700px)', '.shell', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v === '220px1fr', 'Inside the media query, set .shell { grid-template-columns: 220px 1fr; }.');\nvar a = (T.mediaDecl('(min-width:700px)', '.shell', 'grid-template-areas') || '').replace(/\\s+/g, '').replace(/'/g, '\"');\nT.expect(a === '\"topbartopbar\"\"sidebarmain\"', 'Inside the query, redraw the map: grid-template-areas: \"topbar topbar\" \"sidebar main\" — topbar written twice spans both columns.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"shell\">\n    <header class=\"topbar\">☰ TaskBoard</header>\n    <main class=\"main\">\n      <h1>Today</h1>\n      <p>3 tasks left — you've got this.</p>\n    </main>\n    <aside class=\"sidebar\">\n      <p>📥 Inbox</p>\n      <p>⭐ Starred</p>\n      <p>🗓️ Upcoming</p>\n    </aside>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n\n.shell {\n  /* 1) display: grid + the mobile map:\n     grid-template-areas with rows \"topbar\" \"main\" \"sidebar\" */\n}\n\n.topbar {\n  background: #0f172a;\n  color: white;\n  padding: 14px 18px;\n  font-weight: bold;\n  /* 2) grid-area: topbar */\n}\n\n.main {\n  padding: 18px;\n  /* 2) grid-area: main */\n}\n\n.sidebar {\n  background: #e2e8f0;\n  padding: 18px;\n  /* 2) grid-area: sidebar */\n}\n\n/* 3) @media (min-width: 700px): columns 220px 1fr,\n   areas \"topbar topbar\" / \"sidebar main\" */\n" }
      ],
      hints: [
        "Two halves that must match: the parent draws the map (grid-template-areas), each child claims a name (grid-area). Spelling counts.",
        "Base: .shell { display: grid; grid-template-areas: \"topbar\" \"main\" \"sidebar\"; } — one quoted string per row.",
        "The media block: @media (min-width: 700px) { .shell { grid-template-columns: 220px 1fr; grid-template-areas: \"topbar topbar\" \"sidebar main\"; } } — topbar appears twice, so it spans both columns."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n\n.shell {\n  display: grid;\n  grid-template-areas:\n    \"topbar\"\n    \"main\"\n    \"sidebar\";\n}\n\n.topbar {\n  background: #0f172a;\n  color: white;\n  padding: 14px 18px;\n  font-weight: bold;\n  grid-area: topbar;\n}\n\n.main {\n  padding: 18px;\n  grid-area: main;\n}\n\n.sidebar {\n  background: #e2e8f0;\n  padding: 18px;\n  grid-area: sidebar;\n}\n\n@media (min-width: 700px) {\n  .shell {\n    grid-template-columns: 220px 1fr;\n    grid-template-areas:\n      \"topbar topbar\"\n      \"sidebar main\";\n  }\n}\n"
      }
    },

    {
      id: "resp-u6-p1",
      title: "Project: Photo gallery",
      kind: "web", chip: "CSS", xp: 50, mins: 35, project: true,
      brief: "Time to build something you'll actually want to show people: a **photo gallery** that looks great at every width. The recipe stacks everything from the whole course:\n\n- a centered `.container` — `max-width: 900px; margin: 0 auto;`\n- `repeat(auto-fit, minmax(150px, 1fr))` — the grid reflows with **zero** media queries\n- `aspect-ratio: 1 / 1` — perfectly square tiles at any size\n- a caption bar on each tile — flexbox, title left, likes right\n- one `@media (min-width: 700px)` block that widens the gap on big screens\n\nThe \"photos\" are gradient tiles, so everything loads instantly. Resize the preview when you're done — it never breaks.",
      steps: [
        { text: "Center the page: `.container` gets `max-width: 900px` and `margin: 0 auto`.",
          test: "var mw = (T.decl('.container', 'max-width') || '').replace(/\\s+/g, '');\nT.expect(mw === '900px', 'Set max-width: 900px on .container.');\nvar m = (T.decl('.container', 'margin') || '').replace(/\\s+/g, '').replace(/0px/g, '0');\nT.expect(m === '0auto' || m === '0auto0auto', 'Center the page with margin: 0 auto on .container.');" },
        { text: "Make `.gallery` an auto-fit grid: `repeat(auto-fit, minmax(150px, 1fr))` with a **10px** gap.",
          test: "T.expect(T.css('.gallery', 'display') === 'grid', 'Set display: grid on .gallery.');\nvar v = (T.decl('.gallery', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('auto-fit') !== -1 && v.indexOf('minmax(150px,1fr)') !== -1, 'Use grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) on .gallery.');\nvar g = (T.decl('.gallery', 'gap') || T.decl('.gallery', 'row-gap') || '').replace(/\\s+/g, '');\nT.expect(g === '10px' || g === '10px10px', 'Set gap: 10px on .gallery — the base (mobile) spacing. (The 700px media query bumps it later — this check reads the BASE rule.)');" },
        { text: "Square the tiles: `.tile` gets `aspect-ratio: 1 / 1` and `border-radius: 14px`.",
          test: "T.expect(T.count('.tile') >= 6, 'Keep all six .tile figures in the gallery.');\nvar ar = (T.decl('.tile', 'aspect-ratio') || '').replace(/\\s+/g, '');\nT.expect(ar === '1/1' || ar === '1', 'Give .tile aspect-ratio: 1 / 1 so every tile stays a perfect square at any width.');\nT.expect(parseInt(T.css('.tile', 'border-top-left-radius')) >= 12, 'Round the tiles: border-radius: 14px on .tile.');" },
        { text: "The caption bar: `.caption` is a flex row — `justify-content: space-between`, `align-items: center`.",
          test: "T.expect(T.css('.caption', 'display') === 'flex', 'Set display: flex on .caption.');\nT.expect(T.css('.caption', 'justify-content') === 'space-between', 'Set justify-content: space-between on .caption — title on the left, likes on the right.');\nT.expect(T.css('.caption', 'align-items') === 'center', 'Set align-items: center on .caption.');" },
        { text: "From **700px** up, give the gallery more air: `gap: 18px` inside a media query.",
          test: "T.expect(T.hasMedia('(min-width:700px)'), 'Add an @media (min-width: 700px) { … } block at the bottom.');\nvar g = (T.mediaDecl('(min-width:700px)', '.gallery', 'gap') || '').replace(/\\s+/g, '');\nT.expect(g === '18px', 'Inside the query, give .gallery a roomier gap: 18px.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"container\">\n    <h1>🌄 Shots of the year</h1>\n    <p class=\"sub\">Six favorites — resize the window and watch them reflow.</p>\n    <div class=\"gallery\">\n      <figure class=\"tile\">\n        <figcaption class=\"caption\"><span>Dunes</span><span>♥ 41</span></figcaption>\n      </figure>\n      <figure class=\"tile\">\n        <figcaption class=\"caption\"><span>Reef</span><span>♥ 87</span></figcaption>\n      </figure>\n      <figure class=\"tile\">\n        <figcaption class=\"caption\"><span>Bloom</span><span>♥ 23</span></figcaption>\n      </figure>\n      <figure class=\"tile\">\n        <figcaption class=\"caption\"><span>Glacier</span><span>♥ 65</span></figcaption>\n      </figure>\n      <figure class=\"tile\">\n        <figcaption class=\"caption\"><span>Canyon</span><span>♥ 52</span></figcaption>\n      </figure>\n      <figure class=\"tile\">\n        <figcaption class=\"caption\"><span>Meadow</span><span>♥ 78</span></figcaption>\n      </figure>\n    </div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.sub {\n  color: #64748b;\n}\n\n.container {\n  padding: 0 16px 24px;\n  /* 1) max-width: 900px + margin: 0 auto */\n}\n\n.gallery {\n  /* 2) auto-fit grid: repeat(auto-fit, minmax(150px, 1fr)), gap: 10px */\n}\n\n.tile {\n  margin: 0;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  /* 3) aspect-ratio: 1 / 1 + border-radius: 14px */\n}\n\n.caption {\n  width: 100%;\n  padding: 8px 10px;\n  background: rgba(15, 23, 42, 0.55);\n  color: white;\n  font-size: 14px;\n  /* 4) flex row: space-between, vertically centered */\n}\n\n.tile:nth-child(1) { background: linear-gradient(135deg, #fbbf24, #f97316); }\n.tile:nth-child(2) { background: linear-gradient(135deg, #34d399, #0ea5e9); }\n.tile:nth-child(3) { background: linear-gradient(135deg, #f472b6, #a78bfa); }\n.tile:nth-child(4) { background: linear-gradient(135deg, #38bdf8, #6366f1); }\n.tile:nth-child(5) { background: linear-gradient(135deg, #fca5a5, #ef4444); }\n.tile:nth-child(6) { background: linear-gradient(135deg, #4ade80, #14b8a6); }\n\n/* 5) @media (min-width: 700px): gap: 18px on .gallery */\n" }
      ],
      hints: [
        "Work top-down: container first (max-width + margin), then the grid, then tiles, caption, media query — each checkpoint is one rule.",
        "The gallery line: grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); — auto-fit decides how many columns fit, minmax gives each a 150px floor and lets it stretch.",
        "Finishers: .tile { aspect-ratio: 1 / 1; border-radius: 14px; } — and the last block is @media (min-width: 700px) { .gallery { gap: 18px; } }"
      ],
      solution: {
        "styles.css": "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.sub {\n  color: #64748b;\n}\n\n.container {\n  padding: 0 16px 24px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n}\n\n.tile {\n  margin: 0;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  aspect-ratio: 1 / 1;\n  border-radius: 14px;\n}\n\n.caption {\n  width: 100%;\n  padding: 8px 10px;\n  background: rgba(15, 23, 42, 0.55);\n  color: white;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tile:nth-child(1) { background: linear-gradient(135deg, #fbbf24, #f97316); }\n.tile:nth-child(2) { background: linear-gradient(135deg, #34d399, #0ea5e9); }\n.tile:nth-child(3) { background: linear-gradient(135deg, #f472b6, #a78bfa); }\n.tile:nth-child(4) { background: linear-gradient(135deg, #38bdf8, #6366f1); }\n.tile:nth-child(5) { background: linear-gradient(135deg, #fca5a5, #ef4444); }\n.tile:nth-child(6) { background: linear-gradient(135deg, #4ade80, #14b8a6); }\n\n@media (min-width: 700px) {\n  .gallery {\n    gap: 18px;\n  }\n}\n"
      }
    },

    {
      id: "resp-u6-p2",
      title: "Project: Responsive dashboard",
      kind: "web", chip: "CSS", xp: 60, mins: 45, project: true,
      brief: "The capstone. Every dashboard you've ever used — analytics, banking, hosting — is this exact skeleton:\n\n- `.shell` mapped with `grid-template-areas`: just `\"topbar\" \"main\"` on phones\n- the sidebar is `display: none` on mobile and returns at `@media (min-width: 900px)`, where the shell remaps to `\"topbar topbar\"` / `\"sidebar main\"` with a **220px** column\n- a `.stats` row: `flex-wrap: wrap` cards with `flex: 1` that share the row and wrap on phones\n- hero numbers sized with `clamp(1.4rem, 5vw, 2.2rem)` — fluid, never too small or too big\n- a `.cards` grid: `repeat(auto-fit, minmax(220px, 1fr))`\n\nBuild it, then resize the preview and grin.",
      steps: [
        { text: "Make `.shell` a grid with the mobile map: `\"topbar\"` over `\"main\"` — no sidebar row on phones.",
          test: "T.expect(T.css('.shell', 'display') === 'grid', 'Set display: grid on .shell.');\nvar v = (T.decl('.shell', 'grid-template-areas') || '').replace(/\\s+/g, '').replace(/'/g, '\"');\nT.expect(v === '\"topbar\"\"main\"', 'The base (mobile) map is just two rows: grid-template-areas: \"topbar\" \"main\" — the sidebar gets NO row on phones.');" },
        { text: "Give all three children their names: `grid-area: topbar`, `main`, and `sidebar`.",
          test: "var a = (T.decl('.topbar', 'grid-area') || '').replace(/\\s+/g, '');\nT.expect(a === 'topbar' || a.indexOf('topbar/') === 0, 'Set grid-area: topbar on .topbar.');\nvar b = (T.decl('.main', 'grid-area') || '').replace(/\\s+/g, '');\nT.expect(b === 'main' || b.indexOf('main/') === 0, 'Set grid-area: main on .main.');\nvar c = (T.decl('.sidebar', 'grid-area') || '').replace(/\\s+/g, '');\nT.expect(c === 'sidebar' || c.indexOf('sidebar/') === 0, 'Set grid-area: sidebar on .sidebar — hidden on mobile, but it needs its name ready for 900px.');" },
        { text: "Hide `.sidebar` on phones (`display: none`), then bring it back inside `@media (min-width: 900px)`.",
          test: "var d = (T.decl('.sidebar', 'display') || '').replace(/\\s+/g, '');\nT.expect(d === 'none', 'Hide the sidebar on phones: display: none in the base .sidebar rule.');\nT.expect(T.hasMedia('(min-width:900px)'), 'Add an @media (min-width: 900px) { … } block.');\nvar md = (T.mediaDecl('(min-width:900px)', '.sidebar', 'display') || '').replace(/\\s+/g, '');\nT.expect(md === 'block' || md === 'flex', 'Inside the 900px query, bring it back: .sidebar { display: block; }.');" },
        { text: "Also at **900px**: remap `.shell` — columns `220px 1fr`, areas `\"topbar topbar\"` / `\"sidebar main\"`.",
          test: "var v = (T.mediaDecl('(min-width:900px)', '.shell', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v === '220px1fr', 'Inside the 900px query, set .shell { grid-template-columns: 220px 1fr; }.');\nvar a = (T.mediaDecl('(min-width:900px)', '.shell', 'grid-template-areas') || '').replace(/\\s+/g, '').replace(/'/g, '\"');\nT.expect(a === '\"topbartopbar\"\"sidebarmain\"', 'Inside the query, redraw the map: grid-template-areas: \"topbar topbar\" \"sidebar main\".');" },
        { text: "The `.stats` row: flex, `flex-wrap: wrap`, `gap: 12px` — and every `.stat` gets `flex: 1`.",
          test: "T.expect(T.css('.stats', 'display') === 'flex', 'Set display: flex on .stats.');\nT.expect(T.css('.stats', 'flex-wrap') === 'wrap', 'Set flex-wrap: wrap on .stats so the cards drop to new lines on narrow screens.');\nT.expect(T.css('.stats', 'gap') === '12px' || T.css('.stats', 'column-gap') === '12px', 'Set gap: 12px on .stats.');\nT.expect(T.count('.stat') >= 3, 'Keep at least three .stat cards.');\nT.expect(T.css('.stat', 'flex-grow') === '1', 'Give .stat the shorthand flex: 1 so the cards share the row equally.');" },
        { text: "Finish: `.statNum` sized with `clamp(1.4rem, 5vw, 2.2rem)`, and `.cards` as an auto-fit grid — `minmax(220px, 1fr)`, `gap: 14px`.",
          test: "var f = (T.decl('.statNum', 'font-size') || '').replace(/\\s+/g, '');\nT.expect(f.indexOf('clamp(1.4rem,5vw,2.2rem)') !== -1, 'Give .statNum a fluid size: font-size: clamp(1.4rem, 5vw, 2.2rem).');\nT.expect(T.css('.cards', 'display') === 'grid', 'Set display: grid on .cards.');\nvar v = (T.decl('.cards', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('auto-fit') !== -1 && v.indexOf('minmax(220px,1fr)') !== -1, 'Use grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) on .cards.');\nT.expect(T.css('.cards', 'gap') === '14px' || (T.css('.cards', 'row-gap') === '14px' && T.css('.cards', 'column-gap') === '14px'), 'Set gap: 14px on .cards.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"shell\">\n    <header class=\"topbar\"><span>📊 Pulse</span><span class=\"user\">EC</span></header>\n    <aside class=\"sidebar\">\n      <p>🏠 Overview</p>\n      <p>📈 Reports</p>\n      <p>👥 Customers</p>\n      <p>⚙️ Settings</p>\n    </aside>\n    <div class=\"main\">\n      <section class=\"stats\">\n        <div class=\"stat\">\n          <div class=\"statNum\">1,284</div>\n          <div class=\"statLabel\">Visitors today</div>\n        </div>\n        <div class=\"stat\">\n          <div class=\"statNum\">$8,940</div>\n          <div class=\"statLabel\">Revenue</div>\n        </div>\n        <div class=\"stat\">\n          <div class=\"statNum\">99.9%</div>\n          <div class=\"statLabel\">Uptime</div>\n        </div>\n      </section>\n      <section class=\"cards\">\n        <div class=\"card\"><h2>Traffic</h2><p>Steady climb since Monday — mobile leads 58/42.</p></div>\n        <div class=\"card\"><h2>Signups</h2><p>112 this week. The new landing page is working.</p></div>\n        <div class=\"card\"><h2>Latency</h2><p>p95 at 180 ms. Cache hit rate 94%.</p></div>\n        <div class=\"card\"><h2>Errors</h2><p>3 today, all retries. Nothing on fire.</p></div>\n      </section>\n    </div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.shell {\n  /* 1) display: grid + mobile map: \"topbar\" / \"main\" (no sidebar row!) */\n}\n\n.topbar {\n  background: #0f172a;\n  color: white;\n  padding: 14px 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* 2) grid-area: topbar */\n}\n\n.user {\n  background: #334155;\n  border-radius: 999px;\n  padding: 4px 10px;\n  font-size: 13px;\n}\n\n.sidebar {\n  background: #1e293b;\n  color: #cbd5e1;\n  padding: 18px;\n  /* 2) grid-area: sidebar   3) hidden on mobile: display: none */\n}\n\n.main {\n  padding: 18px;\n  /* 2) grid-area: main */\n}\n\n.stats {\n  margin-bottom: 16px;\n  /* 5) flex row that wraps, gap: 12px */\n}\n\n.stat {\n  background: white;\n  border-radius: 12px;\n  padding: 14px 16px;\n  /* 5) flex: 1 — share the row equally */\n}\n\n.statNum {\n  font-weight: bold;\n  /* 6) fluid size: clamp(1.4rem, 5vw, 2.2rem) */\n}\n\n.statLabel {\n  color: #64748b;\n  font-size: 13px;\n}\n\n.cards {\n  /* 6) auto-fit grid: minmax(220px, 1fr), gap: 14px */\n}\n\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 16px;\n}\n\n.card h2 {\n  margin-top: 0;\n  font-size: 16px;\n}\n\n/* 3 + 4) @media (min-width: 900px):\n   .shell → columns 220px 1fr, areas \"topbar topbar\" / \"sidebar main\"\n   .sidebar → display: block */\n" }
      ],
      hints: [
        "The mobile map has NO sidebar row: grid-template-areas: \"topbar\" \"main\"; — the sidebar is display: none until 900px, so the grid never reserves space for it.",
        "One media block does three things: @media (min-width: 900px) { .shell { grid-template-columns: 220px 1fr; grid-template-areas: \"topbar topbar\" \"sidebar main\"; } .sidebar { display: block; } }",
        "The finishers: .stats { display: flex; flex-wrap: wrap; gap: 12px; } with .stat { flex: 1; } — then .statNum { font-size: clamp(1.4rem, 5vw, 2.2rem); } and .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }"
      ],
      solution: {
        "styles.css": "body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  background: #f1f5f9;\n}\n\n.shell {\n  display: grid;\n  grid-template-areas:\n    \"topbar\"\n    \"main\";\n}\n\n.topbar {\n  background: #0f172a;\n  color: white;\n  padding: 14px 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  grid-area: topbar;\n}\n\n.user {\n  background: #334155;\n  border-radius: 999px;\n  padding: 4px 10px;\n  font-size: 13px;\n}\n\n.sidebar {\n  background: #1e293b;\n  color: #cbd5e1;\n  padding: 18px;\n  grid-area: sidebar;\n  display: none;\n}\n\n.main {\n  padding: 18px;\n  grid-area: main;\n}\n\n.stats {\n  margin-bottom: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.stat {\n  background: white;\n  border-radius: 12px;\n  padding: 14px 16px;\n  flex: 1;\n}\n\n.statNum {\n  font-weight: bold;\n  font-size: clamp(1.4rem, 5vw, 2.2rem);\n}\n\n.statLabel {\n  color: #64748b;\n  font-size: 13px;\n}\n\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n}\n\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 16px;\n}\n\n.card h2 {\n  margin-top: 0;\n  font-size: 16px;\n}\n\n@media (min-width: 900px) {\n  .shell {\n    grid-template-columns: 220px 1fr;\n    grid-template-areas:\n      \"topbar topbar\"\n      \"sidebar main\";\n  }\n\n  .sidebar {\n    display: block;\n  }\n}\n"
      }
    },

    {
      id: "resp-quiz-6",
      title: "Final quiz: Responsive design",
      kind: "quiz", xp: 10,
      questions: [
        { q: "A flex container has `flex-direction: column`. Which property now controls the VERTICAL distribution of its children?",
          choices: ["align-items — it always handles vertical", "text-align", "justify-content — it follows the main axis, and column makes that axis vertical", "vertical-align"],
          answer: 2, explain: "justify-content always works along the main axis. flex-direction: column rotates that axis, so justify-content goes vertical and align-items takes over horizontal." },
        { q: "The row gets squeezed. What happens?",
          code: ".side { width: 220px; flex-shrink: 0; }\n.content { flex: 1; }",
          lang: "css",
          choices: ["The sidebar holds exactly 220px; .content absorbs all the growing and shrinking", "Both shrink equally", ".content vanishes first", "The browser reports an error"],
          answer: 0, explain: "flex-shrink: 0 exempts the sidebar from shrinking, and flex: 1 makes .content the stretchy part — the classic fixed-plus-fluid pair." },
        { q: "What does `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))` buy you?",
          choices: ["Exactly 150 columns", "Columns only on screens wider than 150px", "It still needs a media query per breakpoint", "As many ≥150px columns as fit, stretched to fill the row — responsive with zero media queries"],
          answer: 3, explain: "auto-fit recalculates the column count at every width, and minmax gives each column a floor (150px) and a stretch (1fr)." },
        { q: "The shell map names a `sidebar` slot. How does the sidebar element land in it?",
          code: ".shell {\n  grid-template-areas:\n    \"topbar topbar\"\n    \"sidebar main\";\n}",
          lang: "css",
          choices: ["Automatically — grid matches class names to area names", "Give the element grid-area: sidebar", "Set position: absolute on it", "Put it first in the HTML"],
          answer: 1, explain: "Area names are labels YOU connect: the parent draws the map, and each child opts into a slot with grid-area. Class names play no part." },
        { q: "The mobile-first recipe is…",
          choices: ["Write desktop styles first, then max-width queries for phones", "Build a separate mobile site", "Default styles target small screens; @media (min-width: …) blocks layer on the wide-screen layout", "Use only vw units everywhere"],
          answer: 2, explain: "Small screens get the plain styles; min-width queries enhance upward. That order keeps phones — most of your traffic — on the simplest CSS." },
        { q: "What does the middle value do?",
          code: "h1 { font-size: clamp(1.2rem, 4vw, 2rem); }",
          lang: "css",
          choices: ["It is a fallback for browsers without clamp support", "It is the preferred size — 4% of the viewport width, so the text scales fluidly but stays pinned between the two limits", "It sets a 4-second transition", "It only applies inside media queries"],
          answer: 1, explain: "clamp(min, preferred, max): the browser uses 4vw, but never lets it drop below 1.2rem or grow past 2rem." },
        { q: "Why does nearly every responsive stylesheet include `img { max-width: 100%; height: auto; }`?",
          choices: ["It makes images download faster", "It crops every image to a square", "Images will not display without it", "The image can never overflow its container, and height: auto keeps its aspect ratio while it scales down"],
          answer: 3, explain: "max-width: 100% caps the image at its container width; height: auto lets the height follow so the picture scales instead of distorting or spilling out." }
      ]
    }
  ]
});
