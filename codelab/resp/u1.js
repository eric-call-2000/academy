/* Responsive Design & Layout — Unit 1: Flexbox foundations */
window.CODELAB.addUnit("resp", {
  id: "resp-u1",
  title: "Flexbox foundations",
  icon: "📦",
  blurb: "Line anything up with flexbox — rows, perfect centering, real navbars, and chip clouds that wrap on their own.",
  cheat: [
    { h: "Flexbox essentials", lang: "css", code: ".row {\n  display: flex;          /* children line up in a row */\n  gap: 12px;              /* space between children */\n  justify-content: space-between; /* main-axis spread */\n  align-items: center;    /* cross-axis alignment */\n}", note: "All of it goes on the PARENT — the children just fall in line." },
    { h: "Perfect centering", lang: "css", code: ".center {\n  display: flex;\n  justify-content: center; /* main axis */\n  align-items: center;     /* cross axis */\n  height: 240px;\n}" },
    { h: "Column direction (the axes flip!)", lang: "css", code: ".stack {\n  display: flex;\n  flex-direction: column;  /* main axis now points DOWN */\n  align-items: center;     /* cross axis: horizontal */\n  gap: 10px;\n}", note: "justify-content always follows the main axis, wherever it points." },
    { h: "Navbar pattern", lang: "css", code: "nav {\n  display: flex;\n  justify-content: space-between; /* logo ⟷ links */\n  align-items: center;\n}\nnav ul {\n  display: flex;\n  gap: 16px;\n  list-style: none;\n}" },
    { h: "Wrapping rows", lang: "css", code: ".tags {\n  display: flex;\n  flex-wrap: wrap;   /* the default is nowrap! */\n  gap: 12px 8px;     /* row gap, then column gap */\n}" }
  ],
  lessons: [

    {
      id: "resp-u1-1",
      title: "Meet Flexbox",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "By default, block elements stack vertically — one per line, like a grocery list. **Flexbox** turns any container into a layout machine: set `display: flex` on the **parent** and its children snap into a row.\n\n- `display: flex` — flip the switch (on the parent, never the children!)\n- `gap` — space between children, no margin fiddling\n- `justify-content` — how children spread along the row (`flex-start`, `center`, `space-between`…)\n\nThe crew pills below are stacked. Three declarations turn them into a status bar.",
      steps: [
        { text: "Turn `.row` into a flex container.",
          test: "T.expect(T.css('.row', 'display') === 'flex', 'Set display: flex on .row (currently ' + T.css('.row', 'display') + '). It goes in the .row rule, not on .pill.');" },
        { text: "Add a **12px** `gap` between the pills.",
          test: "T.expect(T.css('.row', 'gap') === '12px' || T.css('.row', 'column-gap') === '12px', 'Add gap: 12px inside the .row rule.');" },
        { text: "Spread them across the full width with `justify-content: space-between`.",
          test: "T.expect(T.css('.row', 'justify-content') === 'space-between', 'Add justify-content: space-between to .row — first pill flush left, last flush right.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Crew status</h1>\n  <div class=\"row\">\n    <div class=\"pill\">🟢 Ana</div>\n    <div class=\"pill\">🟢 Bo</div>\n    <div class=\"pill\">🌙 Cal</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.pill {\n  background: #e0f2fe;\n  padding: 8px 14px;\n  border-radius: 999px;\n}\n\n.row {\n  /* 1) display: flex */\n  /* 2) gap: 12px */\n  /* 3) justify-content: space-between */\n}\n" }
      ],
      hints: [
        "Flex properties go on the PARENT (.row), not the children (.pill).",
        "One property per step: first `display: flex;`, then `gap: 12px;`.",
        "The finished rule: `.row { display: flex; gap: 12px; justify-content: space-between; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.pill {\n  background: #e0f2fe;\n  padding: 8px 14px;\n  border-radius: 999px;\n}\n\n.row {\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n"
      }
    },

    {
      id: "resp-u1-2",
      title: "Axes & centering",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Every flex container has two axes. The **main axis** is the direction items flow (horizontal in a row); the **cross axis** runs perpendicular to it.\n\n- `justify-content` — positions items along the **main** axis\n- `align-items` — positions items along the **cross** axis\n- `flex-direction: column` — flips the flow, and the axes swap jobs!\n\n`justify-content: center` + `align-items: center` = perfect centering — the trick that ended a decade of \"how do I center a div?\" jokes. Center the gem, then flip the card deck into a tidy centered column.",
      example: { lang: "css", code: "/* row: main axis ↔, cross axis ↕ */\n.stage { display: flex; justify-content: center; align-items: center; }\n\n/* column: main axis ↕, cross axis ↔ */\n.deck { display: flex; flex-direction: column; align-items: center; }" },
      steps: [
        { text: "Make `.stage` a flex container and center the gem **horizontally** with `justify-content: center`.",
          test: "T.expect(T.css('.stage', 'display') === 'flex', 'Set display: flex on .stage first.');\nT.expect(T.css('.stage', 'justify-content') === 'center', 'Add justify-content: center to .stage — that centers along the main axis (horizontal in a row).');" },
        { text: "Center it **vertically** too with `align-items: center` (keep the 240px height — that's what gives it room to center in).",
          test: "T.expect(T.css('.stage', 'align-items') === 'center', 'Add align-items: center to .stage — the cross axis is vertical in a row.');\nT.expect(T.css('.stage', 'height') === '240px', 'Keep height: 240px on .stage.');" },
        { text: "Now `.deck`: make it a flex **column** (`flex-direction: column`) with `align-items: center` and a **10px** gap. In a column the cross axis is horizontal — watch the cards shrink to their content and line up down the middle.",
          test: "T.expect(T.css('.deck', 'display') === 'flex', 'Set display: flex on .deck.');\nT.expect(T.css('.deck', 'flex-direction') === 'column', 'Add flex-direction: column to .deck.');\nT.expect(T.css('.deck', 'align-items') === 'center', 'Add align-items: center to .deck — in a column that centers HORIZONTALLY, because the axes flipped.');\nT.expect(T.css('.deck', 'gap') === '10px' || T.css('.deck', 'row-gap') === '10px', 'Add gap: 10px to .deck.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"stage\">\n    <div class=\"gem\">💎 Perfectly centered</div>\n  </div>\n\n  <h2>Tonight's picks</h2>\n  <div class=\"deck\">\n    <div class=\"card\">🍕 Pizza night</div>\n    <div class=\"card\">🎬 Movie marathon</div>\n    <div class=\"card\">🎲 Board games</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n\n.stage {\n  height: 240px;\n  background: #0f172a;\n  /* 1) flex, then center on BOTH axes */\n}\n\n.gem {\n  background: white;\n  padding: 12px 18px;\n  border-radius: 12px;\n}\n\nh2 { padding: 0 16px; }\n\n.deck {\n  padding: 0 16px 16px;\n  /* 2) flex COLUMN, centered on the cross axis, 10px gap */\n}\n\n.card {\n  background: #e0f2fe;\n  padding: 10px 16px;\n  border-radius: 10px;\n}\n" }
      ],
      hints: [
        "Both centering properties go on the PARENT: .stage for the gem, .deck for the cards.",
        "Row: justify-content = ↔, align-items = ↕. Column: they swap — align-items becomes the horizontal one.",
        "The deck rule: `.deck { display: flex; flex-direction: column; align-items: center; gap: 10px; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n\n.stage {\n  height: 240px;\n  background: #0f172a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gem {\n  background: white;\n  padding: 12px 18px;\n  border-radius: 12px;\n}\n\nh2 { padding: 0 16px; }\n\n.deck {\n  padding: 0 16px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.card {\n  background: #e0f2fe;\n  padding: 10px 16px;\n  border-radius: 10px;\n}\n"
      }
    },

    {
      id: "resp-u1-3",
      title: "Build a navbar",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "The classic flexbox interview task: a **navbar** — logo on the left, links on the right, everything vertically centered. Every site you visited today has one.\n\nTwo flex containers do the whole job:\n\n- the `<nav>` itself — `space-between` pushes logo and links to opposite ends\n- the `<ul>` of links — a small flex row of its own, with a `gap`\n\nYou'll also want `list-style: none` on the `ul` to drop the bullets — bullet points in a navbar scream 1998.",
      steps: [
        { text: "Make the `nav` a flex row with `justify-content: space-between` and `align-items: center`.",
          test: "T.expect(T.css('nav', 'display') === 'flex', 'Set display: flex on nav.');\nT.expect(T.css('nav', 'justify-content') === 'space-between', 'Add justify-content: space-between to nav — logo left, links right.');\nT.expect(T.css('nav', 'align-items') === 'center', 'Add align-items: center to nav so logo and links sit on the same line.');" },
        { text: "Make the `nav ul` a flex row with a **16px** gap.",
          test: "T.expect(T.css('nav ul', 'display') === 'flex', 'Set display: flex on nav ul — the list items become a row of links.');\nT.expect(T.css('nav ul', 'gap') === '16px' || T.css('nav ul', 'column-gap') === '16px', 'Add gap: 16px to nav ul.');" },
        { text: "Remove the bullets: `list-style: none` on the `ul`.",
          test: "T.expect(T.css('nav ul', 'list-style-type') === 'none', 'Add list-style: none to the nav ul rule.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <nav>\n    <div class=\"logo\">⚡ CodeLab</div>\n    <ul>\n      <li><a href=\"#\">Docs</a></li>\n      <li><a href=\"#\">Blog</a></li>\n      <li><a href=\"#\">About</a></li>\n    </ul>\n  </nav>\n  <h1>Welcome</h1>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; margin: 0; }\n\nnav {\n  background: #0ea5e9;\n  color: white;\n  padding: 12px 20px;\n  /* 1) flex row: space-between, centered */\n}\n\nnav ul {\n  margin: 0;\n  padding: 0;\n  /* 2) flex row with a 16px gap */\n  /* 3) no bullets */\n}\n\nnav a { color: white; }\n.logo { font-weight: bold; }\n" }
      ],
      hints: [
        "Two separate rules get flexbox: `nav { }` and `nav ul { }`.",
        "`space-between` on the nav is what shoves the logo and the links to opposite edges.",
        "The ul rule: `nav ul { margin: 0; padding: 0; display: flex; gap: 16px; list-style: none; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; margin: 0; }\n\nnav {\n  background: #0ea5e9;\n  color: white;\n  padding: 12px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nnav ul {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  gap: 16px;\n  list-style: none;\n}\n\nnav a { color: white; }\n.logo { font-weight: bold; }\n"
      }
    },

    {
      id: "resp-u1-4",
      title: "flex-wrap: when rows run out of room",
      kind: "web", chip: "CSS", xp: 15, mins: 12,
      brief: "Cram ten chips into one narrow flex row and watch them suffer: the default `flex-wrap: nowrap` refuses to break the line, so items squish and spill off the edge. One property saves them:\n\n- `flex-wrap: wrap` — items keep their size and tumble onto new lines\n- `gap: 12px 8px` — **two** values: row gap first (between lines), then column gap (between items)\n\nThat's a tag cloud in three declarations — no widths, no floats, and it re-flows itself at any screen size. Try it, then drag the preview edge and admire.",
      example: { lang: "css", code: ".tags {\n  display: flex;\n  flex-wrap: wrap;   /* items tumble onto new lines */\n  gap: 12px 8px;     /* row gap, column gap */\n}" },
      steps: [
        { text: "Turn `.tags` into a flex container. (Ten chips forced onto ONE line — in this narrow preview they squish. That's `nowrap`, the default, doing its stubborn thing.)",
          test: "T.expect(T.css('.tags', 'display') === 'flex', 'Set display: flex on .tags (currently ' + T.css('.tags', 'display') + ').');" },
        { text: "Let them break onto new lines: `flex-wrap: wrap`.",
          test: "T.expect(T.css('.tags', 'flex-wrap') === 'wrap', 'Add flex-wrap: wrap to .tags — the default nowrap keeps everything on one squished line.');" },
        { text: "Space the cloud with `gap: 12px 8px` — **12px between rows**, **8px between chips**.",
          test: "T.expect(T.css('.tags', 'row-gap') === '12px', 'The FIRST gap value is the row gap — write gap: 12px 8px on .tags.');\nT.expect(T.css('.tags', 'column-gap') === '8px', 'The SECOND gap value is the column gap — write gap: 12px 8px on .tags.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Skills I'm learning</h1>\n  <div class=\"tags\">\n    <div class=\"chip\">HTML</div>\n    <div class=\"chip\">CSS</div>\n    <div class=\"chip\">Flexbox</div>\n    <div class=\"chip\">Grid</div>\n    <div class=\"chip\">Media queries</div>\n    <div class=\"chip\">JavaScript</div>\n    <div class=\"chip\">Responsive design</div>\n    <div class=\"chip\">Accessibility</div>\n    <div class=\"chip\">Git</div>\n    <div class=\"chip\">Debugging</div>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\n\n.chip {\n  background: #ede9fe;\n  padding: 6px 14px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n\n.tags {\n  /* 1) display: flex — watch the chips squish onto one line */\n  /* 2) flex-wrap: wrap */\n  /* 3) gap: 12px 8px  (row gap, then column gap) */\n}\n" }
      ],
      hints: [
        "All three declarations go on the container (.tags) — the chips need no changes.",
        "gap with TWO values: the first number is vertical (between wrapped lines), the second is horizontal (between chips).",
        "The finished rule: `.tags { display: flex; flex-wrap: wrap; gap: 12px 8px; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\n\n.chip {\n  background: #ede9fe;\n  padding: 6px 14px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n\n.tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 8px;\n}\n"
      }
    },

    {
      id: "resp-quiz-1",
      title: "Unit 1 quiz: Flexbox basics",
      kind: "quiz", xp: 10,
      questions: [
        { q: "Flexbox starts with `display: flex` — on which element does it go?",
          choices: ["On every child you want in the row", "On the <body>, always", "On the parent container — the children become flex items automatically", "On the first child only"],
          answer: 2, explain: "Flexbox is a container system: the parent gets display: flex (plus gap, justify-content…) and its direct children fall in line." },
        { q: "In a flex ROW, which property moves children up and down (the cross axis)?",
          choices: ["justify-content", "align-items", "text-align", "flex-direction"],
          answer: 1, explain: "In a row the main axis is horizontal (justify-content's job) and the cross axis is vertical — that's align-items." },
        { q: "What does `justify-content: center` do in this rule?",
          code: ".stack {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}",
          lang: "css",
          choices: ["Centers the items horizontally", "Nothing — justify-content only works in rows", "Centers the text inside each item", "Centers the items VERTICALLY — in a column the main axis points down"],
          answer: 3, explain: "flex-direction: column rotates the main axis to vertical, and justify-content always follows the main axis wherever it points." },
        { q: "A flex row holds more chips than fit. With default settings, what happens?",
          choices: ["They stay on one line, squishing or overflowing — the default is flex-wrap: nowrap", "They wrap onto new lines automatically", "The extra chips are hidden", "The container grows taller to fit them"],
          answer: 0, explain: "nowrap is the default: flex fights to keep a single line, shrinking items and overflowing if it must. Wrapping is opt-in with flex-wrap: wrap." },
        { q: "What does this declaration mean?",
          code: ".tags { gap: 24px 12px; }",
          lang: "css",
          choices: ["24px on the left side, 12px on the right", "A 24px gap on wide screens, 12px on phones", "24px between rows, 12px between items in a row", "It's invalid — gap takes exactly one value"],
          answer: 2, explain: "Two-value gap is row-gap then column-gap — especially handy once a flex row wraps onto multiple lines." },
        { q: "Which value spreads flex children so the first touches the left edge, the last touches the right, with equal space between them?",
          choices: ["justify-content: center", "justify-content: space-between", "align-items: stretch", "gap: auto"],
          answer: 1, explain: "space-between pushes the outer items flush to the edges and distributes the leftover space evenly between neighbors — the navbar special." }
      ]
    }
  ]
});
