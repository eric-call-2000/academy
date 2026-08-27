/* Responsive Design & Layout — Unit 3: CSS Grid */
window.CODELAB.addUnit("resp", {
  id: "resp-u3",
  title: "CSS Grid",
  icon: "🔲",
  blurb: "Two-dimensional layout: rows AND columns at once — galleries, mosaics, app shells, and the magic auto-fit line.",
  cheat: [
    { h: "Grid essentials", lang: "css", code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\n  gap: 12px;\n}", note: "Grid goes on the CONTAINER; children flow into the cells." },
    { h: "Mixed tracks & minmax", lang: "css", code: ".app {\n  grid-template-columns: 200px 1fr;             /* fixed + flexible */\n  grid-template-rows: 60px minmax(200px, auto); /* floor + ceiling */\n}", note: "fr shares the free space; minmax(min, max) sets hard limits." },
    { h: "Spanning & placement", lang: "css", code: ".hero { grid-column: span 2; } /* grab 2 tracks */\n.wide { grid-column: 1 / 3; }  /* lines 1→3 = columns 1–2 */\n.tall { grid-row: span 2; }", note: "span counts TRACKS; the slash form counts LINES (a 3-column grid has lines 1–4)." },
    { h: "Named areas", lang: "css", code: ".page {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\nheader { grid-area: header; }", note: "Draw the layout as quoted strings; each child claims its spot with grid-area." },
    { h: "The magic gallery line", lang: "css", code: ".gallery {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}", note: "As many ≥150px columns as fit — responsive with ZERO media queries." }
  ],
  lessons: [

    {
      id: "resp-u3-1",
      title: "Grid basics",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Flexbox lines things up in ONE direction. **CSS Grid** thinks in two — rows AND columns at once — and it is how photo galleries, dashboards and app shells actually get built.\n\n- `display: grid` on the parent\n- `grid-template-columns: repeat(3, 1fr)` — three equal columns (`1fr` = one fraction of the free space)\n- `gap` — spacing between every tile, both directions at once\n\nThese trip photos are stacked in a sad single column. Turn them into a 3-column gallery.",
      steps: [
        { text: "Make `.gallery` a grid container.",
          test: "T.expect(T.css('.gallery', 'display') === 'grid', 'Set display: grid on .gallery (currently ' + T.css('.gallery', 'display') + ').');" },
        { text: "Give it **3 equal columns** with `repeat(3, 1fr)`.",
          test: "var v = (T.decl('.gallery', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('repeat(3,1fr)') !== -1 || v === '1fr1fr1fr', 'Set grid-template-columns: repeat(3, 1fr) on .gallery.');" },
        { text: "Space the tiles with a **10px** gap.",
          test: "T.expect(T.css('.gallery', 'gap') === '10px' || (T.css('.gallery', 'row-gap') === '10px' && T.css('.gallery', 'column-gap') === '10px'), 'Set gap: 10px on .gallery.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Trip photos</h1>\n  <div class=\"gallery\">\n    <div class=\"tile\">🌋</div>\n    <div class=\"tile\">🏜️</div>\n    <div class=\"tile\">🏔️</div>\n    <div class=\"tile\">🌊</div>\n    <div class=\"tile\">🌲</div>\n    <div class=\"tile\">🌅</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.tile {\n  background: #ccfbf1;\n  font-size: 40px;\n  text-align: center;\n  padding: 24px 0;\n  border-radius: 10px;\n}\n\n.gallery {\n  /* 1) display: grid */\n  /* 2) grid-template-columns: repeat(3, 1fr) */\n  /* 3) gap: 10px */\n}\n" }
      ],
      hints: [
        "Grid properties go on the container (.gallery) — the tiles just flow into the cells.",
        "`grid-template-columns: repeat(3, 1fr);` is shorthand for `1fr 1fr 1fr` — three equal shares.",
        "All three lines live in the .gallery rule: `display: grid;  grid-template-columns: repeat(3, 1fr);  gap: 10px;`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.tile {\n  background: #ccfbf1;\n  font-size: 40px;\n  text-align: center;\n  padding: 24px 0;\n  border-radius: 10px;\n}\n\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n"
      }
    },

    {
      id: "resp-u3-2",
      title: "Sizing tracks",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Tracks do not have to be equal — mix fixed and flexible sizes:\n\n- `grid-template-columns: 200px 1fr` — a fixed 200px rail plus a column that takes everything left over\n- `grid-template-rows` — the exact same idea, turned sideways\n- `minmax(200px, auto)` — a track with a floor AND a ceiling: never shorter than 200px, taller whenever content needs room\n\nThis mail app is a 2×2 grid waiting to happen: brand + toolbar across the top, folders + inbox below.",
      example: { lang: "css", code: ".app {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 60px minmax(200px, auto);\n}" },
      steps: [
        { text: "Make `.app` a grid with two columns: a fixed **200px** rail and a flexible `1fr` rest.",
          test: "T.expect(T.css('.app', 'display') === 'grid', 'Set display: grid on .app (currently ' + T.css('.app', 'display') + ').');\nvar v = (T.decl('.app', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v === '200px1fr', 'Set grid-template-columns: 200px 1fr on .app — the fixed rail first, then the flexible rest.');" },
        { text: "Now size the **rows**: `grid-template-rows: 60px 200px` — a 60px top-bar row, then a 200px content row.",
          test: "var v = (T.decl('.app', 'grid-template-rows') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('60px') === 0 && v.length > 4, 'Set grid-template-rows on .app with TWO values, starting with the 60px top-bar row — e.g. 60px 200px.');" },
        { text: "A fixed 200px row clips a long inbox. Swap it for `minmax(200px, auto)` — at least 200px, taller when content needs it.",
          test: "var v = (T.decl('.app', 'grid-template-rows') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('minmax(200px,auto)') !== -1, 'In grid-template-rows, replace the 200px row with minmax(200px, auto).');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"app\">\n    <div class=\"brand\">📮 SwiftMail</div>\n    <div class=\"toolbar\">🔍 Search · ✏️ Compose</div>\n    <div class=\"folders\">📥 Inbox<br>📤 Sent<br>📝 Drafts<br>🗑️ Spam</div>\n    <div class=\"inbox\">\n      <div class=\"mail\">✉️ Lena — Lunch tomorrow?</div>\n      <div class=\"mail\">✉️ GitHub — Your PR was merged 🎉</div>\n      <div class=\"mail\">✉️ Mom — Call me back!</div>\n    </div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n\n.app {\n  /* 1) display: grid + grid-template-columns: 200px 1fr */\n  /* 2) grid-template-rows: 60px 200px */\n  /* 3) upgrade the 200px row to minmax(200px, auto) */\n}\n\n.brand {\n  background: #0f172a;\n  color: white;\n  padding: 14px;\n  font-weight: bold;\n}\n\n.toolbar {\n  background: #1e293b;\n  color: white;\n  padding: 14px;\n}\n\n.folders {\n  background: #e2e8f0;\n  padding: 14px;\n  line-height: 2;\n}\n\n.inbox {\n  padding: 14px;\n}\n\n.mail {\n  background: #f1f5f9;\n  padding: 10px 12px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n}\n" }
      ],
      hints: [
        "Everything goes in the .app rule. Columns first: `grid-template-columns: 200px 1fr;` — px track, space, fr track.",
        "Rows use the same syntax turned sideways: `grid-template-rows: 60px 200px;` — top bar, then content.",
        "The final rows line reads: `grid-template-rows: 60px minmax(200px, auto);`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n\n.app {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 60px minmax(200px, auto);\n}\n\n.brand {\n  background: #0f172a;\n  color: white;\n  padding: 14px;\n  font-weight: bold;\n}\n\n.toolbar {\n  background: #1e293b;\n  color: white;\n  padding: 14px;\n}\n\n.folders {\n  background: #e2e8f0;\n  padding: 14px;\n  line-height: 2;\n}\n\n.inbox {\n  padding: 14px;\n}\n\n.mail {\n  background: #f1f5f9;\n  padding: 10px 12px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n}\n"
      }
    },

    {
      id: "resp-u3-3",
      title: "Spanning",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Real layouts are not uniform — the featured story gets the big tile. Grid **children** can claim extra tracks:\n\n- `grid-column: span 2` — grab two columns from wherever auto-placement drops you\n- `grid-column: 1 / 3` — explicit placement: start at line 1, end at line 3. A 3-column grid has FOUR vertical lines (1–4), so `1 / 3` covers columns 1 and 2\n- `grid-row: span 2` — the same trick, vertically\n\nTurn this flat Tokyo grid into a magazine-style mosaic.",
      example: { lang: "css", code: "/* a 3-column grid has 4 vertical lines: |1  |2  |3  |4 */\n.feature {\n  grid-column: 1 / 3; /* lines 1→3 = columns 1 and 2 */\n}\n.big {\n  grid-row: span 2;   /* two rows tall */\n}" },
      steps: [
        { text: "Feature the tower: give `.hero` a `grid-column: span 2`.",
          test: "var v = (T.decl('.hero', 'grid-column') || T.decl('.hero', 'grid-column-start') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('span2') === 0, 'Add a .hero rule with grid-column: span 2 — it grabs two columns from wherever it lands.');" },
        { text: "Place `.wide` explicitly on columns 1–2 using **line numbers**: `grid-column: 1 / 3`.",
          test: "var v = (T.decl('.wide', 'grid-column') || '').replace(/\\s+/g, '');\nvar ok = (v === '1/3');\nif (!ok) { ok = ((T.decl('.wide', 'grid-column-start') || '').replace(/\\s+/g, '') === '1' && (T.decl('.wide', 'grid-column-end') || '').replace(/\\s+/g, '') === '3'); }\nT.expect(ok, 'Add a .wide rule with grid-column: 1 / 3 — start at line 1, end at line 3, covering columns 1 and 2.');" },
        { text: "Make `.tall` two rows tall with `grid-row: span 2`.",
          test: "var v = (T.decl('.tall', 'grid-row') || T.decl('.tall', 'grid-row-start') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('span2') === 0, 'Add a .tall rule with grid-row: span 2 — same spanning trick, vertically.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Tokyo in nine tiles</h1>\n  <div class=\"mosaic\">\n    <div class=\"tile hero\">🗼 Tokyo Tower</div>\n    <div class=\"tile\">🍜 Ramen</div>\n    <div class=\"tile tall\">🌸 Blossoms</div>\n    <div class=\"tile\">🚄 Shinkansen</div>\n    <div class=\"tile\">⛩️ Shrines</div>\n    <div class=\"tile\">🎮 Arcades</div>\n    <div class=\"tile\">🍣 Sushi</div>\n    <div class=\"tile wide\">🌃 Neon nights</div>\n    <div class=\"tile\">🗻 Mt. Fuji</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.mosaic {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 80px;\n  gap: 10px;\n}\n\n.tile {\n  background: #e0e7ff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 4px;\n}\n\n/* 1) .hero spans 2 columns */\n\n/* 2) .wide sits on columns 1–2 via lines: grid-column: 1 / 3 */\n\n/* 3) .tall spans 2 rows */\n" }
      ],
      hints: [
        "These declarations go on the CHILDREN — write a new rule for each of .hero, .wide and .tall; leave .mosaic alone.",
        "span counts TRACKS (span 2 = two columns wide); the slash form counts LINES — 1 / 3 means start at line 1, stop at line 3.",
        "Three tiny rules: `.hero { grid-column: span 2; }`  `.wide { grid-column: 1 / 3; }`  `.tall { grid-row: span 2; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.mosaic {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 80px;\n  gap: 10px;\n}\n\n.tile {\n  background: #e0e7ff;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 4px;\n}\n\n.hero {\n  grid-column: span 2;\n}\n\n.wide {\n  grid-column: 1 / 3;\n}\n\n.tall {\n  grid-row: span 2;\n}\n"
      }
    },

    {
      id: "resp-u3-4",
      title: "grid-template-areas",
      kind: "web", chip: "CSS", xp: 15, mins: 14,
      brief: "The most readable layout tool in all of CSS: **draw your page as ASCII art**.\n\n- `grid-template-areas` on the container: one quoted string per row, one name per column\n- repeat a name and the area spans those tracks — `\"header header\"` stretches across both columns\n- each child claims its spot with `grid-area: <name>`\n\nChange the drawing, change the layout — no line numbers, no spans. Build the classic app frame: header on top, sidebar beside main, footer below.",
      example: { lang: "css", code: ".page {\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n}" },
      steps: [
        { text: "Make `.page` a grid with columns `220px 1fr` (sidebar rail + flexible main).",
          test: "T.expect(T.css('.page', 'display') === 'grid', 'Set display: grid on .page (currently ' + T.css('.page', 'display') + ').');\nvar v = (T.decl('.page', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v === '220px1fr', 'Set grid-template-columns: 220px 1fr on .page.');" },
        { text: "Draw the map with `grid-template-areas`: three quoted rows — `\"header header\"`, `\"sidebar main\"`, `\"footer footer\"`.",
          test: "var v = (T.decl('.page', 'grid-template-areas') || '').replace(/[\"']/g, ' ').replace(/\\s+/g, ' ').trim();\nT.expect(v === 'header header sidebar main footer footer', 'Set grid-template-areas on .page with three quoted rows: header header, then sidebar main, then footer footer.');" },
        { text: "Now each region claims its name: `grid-area: header` on `header`, `sidebar` on `aside`, `main` on `main`, `footer` on `footer` — one rule each.",
          test: "var h = (T.decl('header', 'grid-area') || T.decl('header', 'grid-row-start') || '').replace(/\\s+/g, '').split('/')[0];\nT.expect(h === 'header', 'Add header { grid-area: header; } so the header claims its named spot.');\nvar sb = (T.decl('aside', 'grid-area') || T.decl('aside', 'grid-row-start') || '').replace(/\\s+/g, '').split('/')[0];\nT.expect(sb === 'sidebar', 'Add aside { grid-area: sidebar; } — the element is aside, the area name is sidebar.');\nvar mn = (T.decl('main', 'grid-area') || T.decl('main', 'grid-row-start') || '').replace(/\\s+/g, '').split('/')[0];\nT.expect(mn === 'main', 'Add main { grid-area: main; }.');\nvar ft = (T.decl('footer', 'grid-area') || T.decl('footer', 'grid-row-start') || '').replace(/\\s+/g, '').split('/')[0];\nT.expect(ft === 'footer', 'Add footer { grid-area: footer; }.');" },
        { text: "Size the three rows: `grid-template-rows: 50px auto 40px` — fixed bars top and bottom, content decides the middle.",
          test: "var v = (T.decl('.page', 'grid-template-rows') || '').replace(/\\s+/g, '');\nT.expect(v === '50pxauto40px', 'Set grid-template-rows: 50px auto 40px on .page — auto lets the middle row grow with its content.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"page\">\n    <header>🍿 FlickFinder</header>\n    <aside>🎬 Genres<br>⭐ Top 100<br>📋 Watchlist</aside>\n    <main>\n      <h2>Tonight's picks</h2>\n      <p>Three movies chosen just for you — grab the popcorn.</p>\n    </main>\n    <footer>© FlickFinder</footer>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; padding: 10px; }\n\n.page {\n  gap: 10px;\n  /* 1) display: grid + grid-template-columns: 220px 1fr */\n  /* 2) grid-template-areas: draw the three rows */\n  /* 4) grid-template-rows: 50px auto 40px */\n}\n\nheader {\n  background: #0f172a;\n  color: white;\n  padding: 12px;\n  font-weight: bold;\n}\n\naside {\n  background: #e2e8f0;\n  padding: 12px;\n  line-height: 2;\n}\n\nmain {\n  background: #f8fafc;\n  padding: 12px;\n}\n\nfooter {\n  background: #0f172a;\n  color: white;\n  padding: 10px;\n}\n\n/* 3) one rule per region: grid-area names header, sidebar, main, footer */\n" }
      ],
      hints: [
        "Steps 1, 2 and 4 all go inside the .page rule; step 3 adds four tiny rules at the bottom of the file.",
        "Three quoted strings, one per row — repeat a name to stretch it: \"header header\" fills both columns of that row.",
        "The four region rules: `header { grid-area: header; }`  `aside { grid-area: sidebar; }`  `main { grid-area: main; }`  `footer { grid-area: footer; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; padding: 10px; }\n\n.page {\n  gap: 10px;\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-rows: 50px auto 40px;\n}\n\nheader {\n  background: #0f172a;\n  color: white;\n  padding: 12px;\n  font-weight: bold;\n}\n\naside {\n  background: #e2e8f0;\n  padding: 12px;\n  line-height: 2;\n}\n\nmain {\n  background: #f8fafc;\n  padding: 12px;\n}\n\nfooter {\n  background: #0f172a;\n  color: white;\n  padding: 10px;\n}\n\nheader { grid-area: header; }\n\naside { grid-area: sidebar; }\n\nmain { grid-area: main; }\n\nfooter { grid-area: footer; }\n"
      }
    },

    {
      id: "resp-u3-5",
      title: "auto-fit + minmax: the magic gallery",
      kind: "web", chip: "CSS", xp: 15, mins: 14,
      brief: "The most famous line in modern CSS:\n\n`grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`\n\n- `auto-fit` — make as many columns as FIT the current width; the count changes as the screen does\n- `minmax(150px, 1fr)` — every column at least 150px, stretching evenly to share the leftovers\n\nOne declaration, fully responsive, **zero media queries**. Build the poster wall, then drag the preview wider and narrower and watch the grid re-flow itself.",
      example: { lang: "css", code: ".gallery {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}" },
      steps: [
        { text: "Make `.gallery` a grid with a **12px** gap.",
          test: "T.expect(T.css('.gallery', 'display') === 'grid', 'Set display: grid on .gallery (currently ' + T.css('.gallery', 'display') + ').');\nT.expect(T.css('.gallery', 'gap') === '12px' || (T.css('.gallery', 'row-gap') === '12px' && T.css('.gallery', 'column-gap') === '12px'), 'Set gap: 12px on .gallery.');" },
        { text: "Write the magic line: `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))`.",
          test: "var v = (T.decl('.gallery', 'grid-template-columns') || '').replace(/\\s+/g, '');\nT.expect(v.indexOf('auto-fit') !== -1, 'Use repeat(auto-fit, ...) in grid-template-columns on .gallery — auto-fit makes as many columns as fit.');\nT.expect(v.indexOf('minmax(150px,1fr)') !== -1, 'Each track should be minmax(150px, 1fr) — at least 150px, stretching to share leftover space.');" },
        { text: "Make the posters look printed: `background: linear-gradient(135deg, #f97316, #ec4899)`, white text, `border-radius: 12px`, `height: 90px` on `.poster`.",
          test: "T.expect(T.css('.poster', 'background-image').indexOf('linear-gradient') !== -1, 'Give .poster a gradient: background: linear-gradient(135deg, #f97316, #ec4899).');\nT.expect(T.css('.poster', 'color') === 'rgb(255, 255, 255)', 'Give .poster white text (color: white).');\nT.expect(T.css('.poster', 'border-top-left-radius') === '12px', 'Round .poster with border-radius: 12px.');\nT.expect(T.css('.poster', 'height') === '90px', 'Give .poster height: 90px.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>The poster wall</h1>\n  <p>Drag the preview wider and narrower — no media queries in sight.</p>\n  <div class=\"gallery\">\n    <div class=\"poster\">🌅 Dawn</div>\n    <div class=\"poster\">🌊 Swell</div>\n    <div class=\"poster\">🌸 Bloom</div>\n    <div class=\"poster\">🌋 Magma</div>\n    <div class=\"poster\">🌵 Dune</div>\n    <div class=\"poster\">🌌 Nebula</div>\n    <div class=\"poster\">🍂 Fall</div>\n    <div class=\"poster\">❄️ Frost</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.gallery {\n  /* 1) display: grid + gap: 12px */\n  /* 2) the magic line: repeat(auto-fit, minmax(150px, 1fr)) */\n}\n\n.poster {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: bold;\n  /* 3) linear-gradient background, white text, border-radius: 12px, height: 90px */\n}\n" }
      ],
      hints: [
        "Steps 1 and 2 go on .gallery (the container); step 3 styles the .poster tiles.",
        "The whole magic line: `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));` — auto-fit and minmax work as a team.",
        "Poster look, four declarations: `background: linear-gradient(135deg, #f97316, #ec4899); color: white; border-radius: 12px; height: 90px;`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.gallery {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}\n\n.poster {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: bold;\n  background: linear-gradient(135deg, #f97316, #ec4899);\n  color: white;\n  border-radius: 12px;\n  height: 90px;\n}\n"
      }
    },

    {
      id: "resp-quiz-3",
      title: "Unit 3 quiz: Grid",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What does `1fr` mean in `grid-template-columns: repeat(3, 1fr)`?",
          choices: ["One frame per second of animation", "1% of the total screen width", "One fraction of the leftover space", "A pointer to the grid's first row"],
          answer: 2, explain: "fr units divide the leftover space proportionally; repeat(3, 1fr) is shorthand for 1fr 1fr 1fr, so the three tracks each take an equal third of whatever is left over." },
        { q: "In a 3-column grid, which columns does this tile cover?",
          code: ".tile {\n  grid-column: 1 / 3;\n}",
          lang: "css",
          choices: ["Columns 1, 2 and 3", "Columns 1 and 2 only", "Column 3 on its own", "Nothing — the slash is invalid"],
          answer: 1, explain: "grid-column takes LINE numbers, not column numbers. A 3-column grid has four vertical lines (1–4), so start line 1 to end line 3 encloses exactly two tracks: columns 1 and 2." },
        { q: "Why is `repeat(auto-fit, minmax(150px, 1fr))` nicknamed the magic gallery line?",
          choices: ["It lazy-loads the images automatically", "It only works when you have exactly 150 tiles", "It still needs one media query per breakpoint", "It packs in as many ≥150px columns as fit"],
          answer: 3, explain: "auto-fit recomputes the column count at every width, and minmax keeps each column between 150px and an equal share — a gallery that reflows on its own, with zero media queries." },
        { q: "You wrote `grid-template-areas: \"header header\" \"sidebar main\"` on the container. How does a child claim the sidebar spot?",
          choices: ["Set `grid-area: sidebar;` on that child", "Set `position: sidebar;` on that child", "Set `grid-template: sidebar;` on the container", "Give the child the class .sidebar"],
          answer: 0, explain: "Area names are connected by grid-area on the child: the container draws the map, and each child opts into a named slot. Class names mean nothing to grid-template-areas — the match is by area name only." },
        { q: "What layout does this produce?",
          code: ".app {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n}",
          lang: "css",
          choices: ["Two equal columns, 200px each", "A 200px column plus a stretchy one", "A single column 201px wide", "200 columns, one fraction each"],
          answer: 1, explain: "Fixed and flexible tracks mix freely: the 200px track stays put at exactly that width, while the 1fr track absorbs ALL the remaining width — the classic sidebar-plus-content shell." },
        { q: "In `minmax(150px, 1fr)`, what does the browser promise about the track?",
          choices: ["It is pinned at exactly 150px, never wider", "It can shrink all the way down to 0", "It never drops below 150px but can grow", "It is capped at 150px and never grows"],
          answer: 2, explain: "minmax(min, max) is a floor and a ceiling: 150px is the smallest allowed size, and 1fr is the stretchy upper bound that lets the track grow to an equal share of the free space." }
      ]
    }
  ]
});
