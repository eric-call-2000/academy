/* Learn CSS — Unit 2: Typography */
window.CODELAB.addUnit("css", {
  id: "css-u2",
  title: "Typography",
  icon: "🔤",
  blurb: "Fonts, weights, spacing and rhythm — text is 90% of the web.",
  cheat: [
    { h: "Font stacks", lang: "css", code: "body {\n  font-family: 'Poppins', Arial, sans-serif;\n}", note: "A wish list, left to right; always end with a generic (sans-serif / serif / monospace)." },
    { h: "Size & weight", lang: "css", code: "font-size: 18px;\nfont-weight: 700;   /* 400 = normal, 700 = bold */\nfont-style: italic;" },
    { h: "Rhythm", lang: "css", code: "line-height: 1.6;      /* breathing room between lines */\nletter-spacing: 2px;   /* space between characters */" },
    { h: "Alignment & case", lang: "css", code: "text-align: center;        /* left | center | right */\ntext-transform: uppercase; /* lowercase | capitalize */" },
    { h: "Decoration & shadow", lang: "css", code: "text-decoration: underline;\ntext-decoration: none;      /* strip link underlines */\ntext-shadow: 2px 2px 4px rgba(0,0,0,0.3);" },
    { h: "Google Fonts recipe", lang: "html", code: "<link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap\" rel=\"stylesheet\">\n<!-- then in CSS: font-family: 'Poppins', sans-serif; -->" }
  ],
  lessons: [

    {
      id: "css-3",
      title: "Font family, size & alignment",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Text is 90% of the web, so typography carries your design.\n\n- `font-family` — a comma-separated wish list; the browser uses the first font it has. Always end with a generic like `sans-serif`.\n- `font-size` — pixel sizes for now (`40px`)\n- `text-align` — `left`, `center`, `right`\n\nSet `font-family` once on `body` and everything inherits it (Unit 1 paying off already).",
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
      id: "css-u2-2",
      title: "Weight & style",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Font **weight** runs on a number scale: `400` is normal, `700` is bold (the keyword `bold` = 700). Many fonts also ship 300 (light), 600 (semibold), 900 (black).\n\n`font-style: italic` slants text. Together, weight and style build hierarchy *within* a size — like a menu where the dish is bold and the description is light italic.",
      steps: [
        { text: "Dish names (`.dish`) get `font-weight: 700`.",
          test: "var ds = T.$$('.dish');\nT.expect(ds.length >= 2 && ds.every(function (d) { var w = getComputedStyle(d).fontWeight; return w === '700' || w === 'bold'; }), 'Set .dish { font-weight: 700; }');" },
        { text: "Descriptions (`.desc`) get `font-style: italic`.",
          test: "var ds = T.$$('.desc');\nT.expect(ds.length >= 2 && ds.every(function (d) { return getComputedStyle(d).fontStyle === 'italic'; }), 'Set .desc { font-style: italic; }');" },
        { text: "The `.chef-note` gets a **lighter** weight: `300`.",
          test: "T.expect(T.css('.chef-note', 'font-weight') === '300', 'Set .chef-note { font-weight: 300; }');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Supper club menu</h1>\n\n  <p class=\"dish\">Charred corn ribs</p>\n  <p class=\"desc\">smoked paprika, lime crema</p>\n\n  <p class=\"dish\">Mushroom ragù</p>\n  <p class=\"desc\">pappardelle, aged parmesan</p>\n\n  <p class=\"chef-note\">Menu changes with whatever the market had this morning.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Georgia, serif; }\n\n/* .dish → 700, .desc → italic, .chef-note → 300 */\n\n" }
      ],
      hints: [
        "Numbers, no quotes: `font-weight: 700;`",
        "Italic is a style, not a weight: `font-style: italic;`"
      ],
      solution: {
        "styles.css": "body { font-family: Georgia, serif; }\n\n.dish {\n  font-weight: 700;\n}\n\n.desc {\n  font-style: italic;\n}\n\n.chef-note {\n  font-weight: 300;\n}\n"
      }
    },

    {
      id: "css-u2-3",
      title: "Line height & letter spacing",
      kind: "web", chip: "CSS", xp: 15,
      brief: "The invisible half of typography is **space**:\n\n- `line-height` — vertical room between lines. Cramped text is unreadable; `1.5–1.8×` the font size feels right for body copy. We'll use a px value here so you can see it precisely.\n- `letter-spacing` — horizontal room between characters. A little spacing makes small ALL-CAPS labels look expensive.",
      steps: [
        { text: "Give `.article` text a roomy `line-height: 32px`.",
          test: "T.expect(T.css('.article', 'line-height') === '32px', 'Set .article { line-height: 32px; } — currently ' + T.css('.article', 'line-height') + '.');" },
        { text: "Space out the `.label`: `letter-spacing: 3px`.",
          test: "T.expect(T.css('.label', 'letter-spacing') === '3px', 'Set .label { letter-spacing: 3px; }');" },
        { text: "Also shrink the label to `12px` — small + spaced is the classic kicker look.",
          test: "T.expect(T.css('.label', 'font-size') === '12px', 'Set font-size: 12px on .label.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <p class=\"label\">LONG READS</p>\n  <h1>The night train to Lisbon</h1>\n  <p class=\"article\">The carriage smelled of coffee and rain. Somewhere past the border, the landscape turned to cork oaks and long shadows, and every passenger seemed to exhale at once. This is what slow travel does: it gives your thoughts enough line height to breathe.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Georgia, serif; max-width: 460px; margin: 0 auto; padding: 20px; }\n\n/* .article line-height, .label letter-spacing + size */\n\n" }
      ],
      hints: [
        "`line-height: 32px;` on .article — watch the paragraph relax in the preview.",
        "Both label tweaks go in one rule: `.label { letter-spacing: 3px; font-size: 12px; }`"
      ],
      solution: {
        "styles.css": "body { font-family: Georgia, serif; max-width: 460px; margin: 0 auto; padding: 20px; }\n\n.article {\n  line-height: 32px;\n}\n\n.label {\n  letter-spacing: 3px;\n  font-size: 12px;\n}\n"
      }
    },

    {
      id: "css-u2-4",
      title: "Case & decoration",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Two transforms you'll use weekly:\n\n- `text-transform: uppercase` — casing is a **style** decision, so keep the HTML normal and let CSS shout\n- `text-decoration: none` — links come underlined by default; navs almost always strip it (and show it again on `:hover`)",
      steps: [
        { text: "Make `.nav-link`s uppercase via CSS (don't retype the HTML!).",
          test: "var ls = T.$$('.nav-link');\nT.expect(ls.length >= 3 && ls.every(function (l) { return getComputedStyle(l).textTransform === 'uppercase'; }), 'Set .nav-link { text-transform: uppercase; }');\nvar raw = ls.map(function (l) { return l.textContent; }).join('');\nT.expect(raw !== raw.toUpperCase(), 'Keep the HTML text lowercase — CSS does the shouting.');" },
        { text: "Strip their underlines: `text-decoration: none`.",
          test: "var ls = T.$$('.nav-link');\nT.expect(ls.every(function (l) { return getComputedStyle(l).textDecorationLine === 'none'; }), 'Set text-decoration: none on .nav-link.');" },
        { text: "Bring underlines back **on hover** with a `.nav-link:hover` rule.",
          test: "var st = T.ruleFor('.nav-link:hover');\nT.expect(st, 'Add a .nav-link:hover rule.');\nT.expect((st.getPropertyValue('text-decoration') || st.getPropertyValue('text-decoration-line') || '').indexOf('underline') !== -1, 'Inside it: text-decoration: underline;');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <nav>\n    <a class=\"nav-link\" href=\"#\">work</a>\n    <a class=\"nav-link\" href=\"#\">about</a>\n    <a class=\"nav-link\" href=\"#\">contact</a>\n  </nav>\n  <h1>Studio Nova</h1>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { font-family: Arial, sans-serif; }\nnav a { margin-right: 14px; }\n\n/* uppercase + no underline, underline on hover */\n\n" }
      ],
      hints: [
        "One rule handles the first two checkpoints: `.nav-link { text-transform: uppercase; text-decoration: none; }`",
        "Hover: `.nav-link:hover { text-decoration: underline; }` — try it in the preview."
      ],
      solution: {
        "styles.css": "body { font-family: Arial, sans-serif; }\nnav a { margin-right: 14px; }\n\n.nav-link {\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.nav-link:hover {\n  text-decoration: underline;\n}\n"
      }
    },

    {
      id: "css-u2-5",
      title: "Web fonts (Google Fonts)",
      kind: "web", chip: "CSS", xp: 15,
      brief: "Your users don't have your favorite font installed — so you **ship it** with the page. The free, universal way is Google Fonts:\n\n1. A `<link>` in the `<head>` loads the font file\n2. Your CSS asks for it by name — **with fallbacks**, because networks fail: `font-family: 'Poppins', Arial, sans-serif;`\n\nQuoted name for multi-word fonts, generic family last. That order is the whole craft.",
      steps: [
        { text: "Add the Google Fonts `<link>` for Poppins to the `<head>` (it's in the starter comment — uncomment/complete it).",
          test: "var l = T.$('link[href*=\"fonts.googleapis\"]');\nT.expect(l, 'The <head> needs a <link> whose href points at fonts.googleapis.com.');\nT.expect((l.getAttribute('href') || '').toLowerCase().indexOf('poppins') !== -1, 'The link should request the Poppins family.');" },
        { text: "Use it on `body` **with fallbacks**: `'Poppins', Arial, sans-serif`.",
          test: "var d = (T.decl('body', 'font-family') || '').toLowerCase();\nT.expect(d.indexOf('poppins') !== -1, 'Set font-family on body starting with Poppins.');\nT.expect(d.indexOf('sans-serif') !== -1, 'End the stack with the generic sans-serif fallback.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <!-- uncomment and keep as-is:\n  <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap\" rel=\"stylesheet\">\n  -->\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Poppins says hi</h1>\n  <p>Rounded, friendly, and everywhere on the modern web.</p>\n</body>\n</html>\n" },
        { name: "styles.css", content: "/* body: 'Poppins', Arial, sans-serif */\n\n" }
      ],
      hints: [
        "Delete the `<!--` and `-->` around the link tag to activate it.",
        "Multi-word/imported fonts get quotes: `font-family: 'Poppins', Arial, sans-serif;`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Poppins says hi</h1>\n  <p>Rounded, friendly, and everywhere on the modern web.</p>\n</body>\n</html>\n",
        "styles.css": "body {\n  font-family: 'Poppins', Arial, sans-serif;\n}\n"
      }
    },

    {
      id: "css-u2-6",
      title: "Text shadows",
      kind: "web", chip: "CSS", xp: 15,
      brief: "`text-shadow` gives lettering depth: `text-shadow: x-offset y-offset blur color;`\n\n- `2px 2px 0 #000` — a hard retro shadow\n- `0 2px 8px rgba(0,0,0,0.4)` — a soft glow-under\n\nUsed sparingly (hero titles, banners), it's delicious. Used everywhere, it's 2009.",
      steps: [
        { text: "Give the `.hero-title` a soft shadow: `0 4px 12px rgba(0, 0, 0, 0.5)`.",
          test: "var v = (T.css('.hero-title', 'text-shadow') || '').replace(/\\s+/g, ' ');\nT.expect(v !== 'none' && v.indexOf('12px') !== -1, 'Set text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5) on .hero-title — currently: ' + v);" },
        { text: "Give the `.retro` badge a hard offset shadow: `3px 3px 0` in pure black.",
          test: "var v = (T.css('.retro', 'text-shadow') || '');\nT.expect(v.indexOf('3px 3px 0') !== -1 || v.indexOf('3px 3px 0px') !== -1, 'Set text-shadow: 3px 3px 0 #000 on .retro — zero blur makes it crisp.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <div class=\"hero\">\n    <h1 class=\"hero-title\">MIDNIGHT ARCADE</h1>\n    <p class=\"retro\">INSERT COIN</p>\n  </div>\n</body>\n</html>\n" },
        { name: "styles.css", content: "body { margin: 0; font-family: Arial, sans-serif; }\n.hero {\n  background: #1e1b4b;\n  color: #f8fafc;\n  padding: 60px 24px;\n  text-align: center;\n}\n.retro { color: #facc15; font-weight: bold; letter-spacing: 4px; }\n\n/* shadows here */\n\n" }
      ],
      hints: [
        "Order is x, y, blur, color: `text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);`",
        "Retro = no blur: `text-shadow: 3px 3px 0 #000;`"
      ],
      solution: {
        "styles.css": "body { margin: 0; font-family: Arial, sans-serif; }\n.hero {\n  background: #1e1b4b;\n  color: #f8fafc;\n  padding: 60px 24px;\n  text-align: center;\n}\n.retro { color: #facc15; font-weight: bold; letter-spacing: 4px; }\n\n.hero-title {\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);\n}\n\n.retro {\n  text-shadow: 3px 3px 0 #000;\n}\n"
      }
    },

    {
      id: "css-quiz-2",
      title: "Unit 2 quiz: Typography",
      kind: "quiz", xp: 10,
      brief: "Fonts, weights, spacing, and shipping typefaces to your users. 80% to pass.",
      questions: [
        { q: "`font-family: 'Poppins', Arial, sans-serif;` — why three values?",
          choices: ["A fallback chain: Poppins first, then Arial", "Poppins for headings, Arial for body text", "The browser picks whichever it likes best", "The three blend into a single typeface"],
          answer: 0, explain: "A wish list read left to right: Poppins if it loaded, else Arial, else whatever sans-serif the device happens to have. The generic family at the end is the guaranteed safety net — never leave it off." },
        { q: "Which weight is standard **bold**?",
          choices: ["700", "400", "100", "1000"],
          answer: 0, explain: "400 = normal, 700 = bold. The keyword bold literally maps to 700." },
        { q: "Body text feels cramped. First property to reach for?",
          choices: ["line-height", "letter-spacing", "text-transform", "font-style"],
          answer: 0, explain: "Line height is vertical breathing room — 1.5-1.8 for body copy is the readability sweet spot." },
        { q: "The HTML says `about` but the page shows `ABOUT`. Why might that be good design?",
          choices: ["Casing is a style choice, editable in CSS", "The browser auto-capitalizes every nav link", "Lowercase text in HTML is invalid markup", "Only a font with uppercase glyphs can do it"],
          answer: 0, explain: "Content stays natural in HTML; presentation (the SHOUTING) lives in CSS where it belongs. `text-transform: uppercase` does the shouting, so one line restyles the whole nav — and screen readers still announce the real word." },
        { q: "How do nav menus remove the default link underline?",
          choices: ["text-decoration: none", "text-decoration: hidden", "text-style: plain", "underline: false"],
          answer: 0, explain: "`none` is the value that erases the line — there is no `hidden` for text-decoration, and no `underline` or `text-style` property at all. Nav menus often restore it with a `:hover` rule so links still feel clickable." },
        { q: "What loads a Google Font onto your page?",
          choices: ["A <link> to Google plus a font-family rule", "Just writing font-family: 'Poppins'", "Installing the font file on your own computer", "An <img> tag pointing at the font file"],
          answer: 0, explain: "Two halves, both required: the `<link>` to fonts.googleapis.com in the `<head>` fetches the font files, then `font-family: 'Poppins'` in your CSS opts elements into using them. Installing it locally only styles YOUR machine — visitors would fall back." },
        { q: "In `text-shadow: 2px 4px 8px red`, the `8px` is…",
          choices: ["The blur radius, in pixels", "The horizontal offset, in pixels", "The vertical offset, in pixels", "The font size"],
          answer: 0, explain: "Order: x-offset, y-offset, blur, color. So `2px` pushes the shadow right, `4px` pushes it down, and `8px` is how far the edge is smeared before it fades out. Zero blur = hard retro edge." }
      ]
    }
  ]
});
