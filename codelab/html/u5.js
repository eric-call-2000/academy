/* Learn HTML — Unit 5: Semantic HTML & Accessibility */
window.CODELAB.addUnit("html", {
  id: "html-u5",
  title: "Semantic HTML & Accessibility",
  icon: "♿",
  blurb: "Markup that means something — for screen readers, search engines, and future-you.",
  cheat: [
    { h: "Page landmarks", lang: "html", code: "<header>…logo, title, nav…</header>\n<nav>…links…</nav>\n<main>…this page's unique content…</main>\n<footer>…copyright, contact…</footer>" },
    { h: "Content sections", lang: "html", code: "<section>a themed group with a heading</section>\n<article>self-contained piece (post, card, comment)</article>\n<aside>related but tangential (sidebar, tip box)</aside>" },
    { h: "Accessible images", lang: "html", code: "<img src=\"chart.png\" alt=\"Sales rose 40% in Q3\">\n<img src=\"divider.png\" alt=\"\">", note: "Describe the MEANING. Purely decorative images get an EMPTY alt so screen readers skip them." },
    { h: "Real buttons & aria-label", lang: "html", code: "<button aria-label=\"Close dialog\">✕</button>", note: "Clickable things are <button> or <a> — never bare <div>s. Icon-only buttons need aria-label." },
    { h: "The head", lang: "html", code: "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Page name — Site</title>\n</head>" }
  ],
  lessons: [

    {
      id: "html-5",
      title: "Semantic structure",
      kind: "web", chip: "HTML", xp: 15,
      brief: "You *could* build a whole page out of `<div>`s, but HTML has tags that describe what each region **means**:\n\n- `<header>` — top of the page (logo, title, nav)\n- `<nav>` — navigation links\n- `<main>` — the unique content of this page\n- `<footer>` — the bottom (copyright, contact)\n\nSemantic tags make pages accessible to screen readers and easier for search engines (and future-you) to understand.",
      steps: [
        { text: "Add a `<header>` containing the page's `<h1>`.",
          test: "T.expect(T.$('header'), 'No <header> found yet.');\nT.expect(T.$('header h1'), 'Put your <h1> INSIDE the <header>.');" },
        { text: "Inside the header, add a `<nav>` with at least **2** links.",
          test: "T.expect(T.$('header nav'), 'Add a <nav> inside your <header>.');\nT.expect(T.count('nav a') >= 2, 'Your <nav> needs at least 2 <a> links — found ' + T.count('nav a') + '.');" },
        { text: "Add a `<main>` with at least one paragraph of content.",
          test: "T.expect(T.$('main'), 'No <main> found yet.');\nT.expect(T.$('main p'), 'Put a <p> inside <main>.');" },
        { text: "Finish with a `<footer>` containing some text.",
          test: "T.expect(T.$('footer'), 'No <footer> found yet.');\nT.expect((T.text('footer') || '').length >= 3, 'Write something inside the <footer>.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- header (with h1 + nav) -->\n\n  <!-- main content -->\n\n  <!-- footer -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Nesting matters: `<header> <h1>…</h1> <nav>…</nav> </header>`",
        "Links in a nav are normal `<a>` tags — `href=\"#\"` is fine for now."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <header>\n    <h1>Eric's Workshop</h1>\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">Projects</a>\n    </nav>\n  </header>\n\n  <main>\n    <p>Welcome! This is where I share what I'm building.</p>\n  </main>\n\n  <footer>\n    Made with HTML — 2026\n  </footer>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u5-2",
      title: "Sections, articles & asides",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Inside `<main>`, three tags organize content by *meaning*:\n\n- `<section>` — a themed group that deserves its own heading\n- `<article>` — a **self-contained** piece that would make sense on its own: a blog post, a product card, a comment\n- `<aside>` — related-but-tangential content: sidebars, tip boxes, \"see also\"\n\nRule of thumb: could you syndicate it to another site by itself? Then it's an `<article>`.",
      steps: [
        { text: "Wrap the blog area in a `<section>` that starts with the **Latest posts** `<h2>`.",
          test: "T.expect(T.$('main section'), 'Add a <section> inside <main>.');\nT.expect(T.$('section h2'), 'The section should contain the Latest posts <h2>.');" },
        { text: "Wrap **each post** (its h3 + p) in its own `<article>` — two articles total.",
          test: "var arts = T.$$('article');\nT.expect(arts.length >= 2, 'Wrap both posts in <article> tags — found ' + arts.length + '.');\nvar ok = arts.filter(function (a) { return a.querySelector('h3') && a.querySelector('p'); }).length >= 2;\nT.expect(ok, 'Each <article> holds one post: its <h3> AND its <p>.');" },
        { text: "Mark the pro-tip box as an `<aside>`.",
          test: "T.expect(T.$('aside'), 'Turn the tip div into an <aside>.');\nT.expect((T.text('aside') || '').toLowerCase().indexOf('pro tip') !== -1, 'The aside should contain the pro tip text.');\nT.expect(T.count('div') === 0, 'Replace the old <div> entirely — no divs needed on this page.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <main>\n    <h2>Latest posts</h2>\n\n    <h3>Why I love HTML</h3>\n    <p>It's the skeleton of everything online.</p>\n\n    <h3>Tables aren't scary</h3>\n    <p>Rows, cells, spans — that's the whole trick.</p>\n\n    <div>Pro tip: semantic tags are free SEO.</div>\n  </main>\n</body>\n</html>\n" }
      ],
      hints: [
        "The section wraps everything blog-related: heading + both posts.",
        "`<article> <h3>Why I love HTML</h3> <p>…</p> </article>` — one per post.",
        "Change `<div>` to `<aside>` (both tags, opening and closing)."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <main>\n    <section>\n      <h2>Latest posts</h2>\n\n      <article>\n        <h3>Why I love HTML</h3>\n        <p>It's the skeleton of everything online.</p>\n      </article>\n\n      <article>\n        <h3>Tables aren't scary</h3>\n        <p>Rows, cells, spans — that's the whole trick.</p>\n      </article>\n    </section>\n\n    <aside>Pro tip: semantic tags are free SEO.</aside>\n  </main>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u5-3",
      title: "Accessibility: images & buttons",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Roughly 1 in 8 people browse with some assistive need. Two fixes cover a huge share of common failures:\n\n- **Alt text describes meaning**, not appearance: `alt=\"Sales rose 40% in Q3\"` beats `alt=\"chart\"`. Decorative images get an **empty** `alt=\"\"` so screen readers skip them.\n- **Clickable things are `<button>`** (or `<a>`), never a bare `<div>` — divs can't be focused with a keyboard or announced as pressable.\n\nThis page fails both. Fix it.",
      steps: [
        { text: "Give the chart image meaningful alt text (mention **sales** — at least 10 characters).",
          test: "var img = T.$('#chart');\nT.expect(img, 'Keep the chart image (id=\"chart\").');\nvar alt = img.getAttribute('alt') || '';\nT.expect(alt.length >= 10 && alt.toLowerCase().indexOf('sales') !== -1, 'Describe the MEANING, e.g. alt=\"Sales rose 40% in Q3\". (Yours: \"' + alt + '\")');" },
        { text: "Give the decorative divider an **empty** alt (`alt=\"\"`) so screen readers skip it.",
          test: "var img = T.$('#divider');\nT.expect(img, 'Keep the divider image (id=\"divider\").');\nT.expect(img.getAttribute('alt') === '', 'Decorative images get alt=\"\" — present but empty.');" },
        { text: "Replace the clickable `<div>` with a real `<button>` (same text).",
          test: "var b = T.$$('button').filter(function (x) { return (x.textContent || '').toLowerCase().indexOf('download report') !== -1; })[0];\nT.expect(b, 'Make Download report a real <button>.');\nvar divs = T.$$('div').filter(function (d) { return (d.textContent || '').toLowerCase().indexOf('download report') !== -1; });\nT.expect(divs.length === 0, 'Remove the old clickable <div> — keyboards and screen readers can\\'t use it.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Quarterly review</h1>\n\n  <img id=\"chart\" src=\"https://picsum.photos/400/200\" alt=\"image\">\n\n  <img id=\"divider\" src=\"https://picsum.photos/400/8\">\n\n  <div class=\"btn\">Download report</div>\n</body>\n</html>\n" }
      ],
      hints: [
        "Good alt answers: \"what would I say aloud instead of showing this image?\"",
        "Empty ≠ missing: `alt=\"\"` deliberately says \"decoration, skip me\".",
        "`<button>Download report</button>` — free keyboard focus, free screen-reader support."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Quarterly review</h1>\n\n  <img id=\"chart\" src=\"https://picsum.photos/400/200\" alt=\"Chart showing sales rose 40% in Q3\">\n\n  <img id=\"divider\" src=\"https://picsum.photos/400/8\" alt=\"\">\n\n  <button class=\"btn\">Download report</button>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u5-4",
      title: "Heading order & aria-label",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Screen-reader users navigate by **heading outline** — so headings must form a sane tree:\n\n- exactly **one** `<h1>`\n- never skip levels downward (h2 → h3 is fine; h2 → h5 is not)\n- don't pick headings for their *size* — that's CSS's job\n\nAnd for buttons that show only an icon, `aria-label=\"…\"` provides the spoken name.",
      steps: [
        { text: "Fix the outline: one `<h1>`, sections as `<h2>`, sub-points as `<h3>` — no skipped levels.",
          test: "T.expect(T.count('h1') === 1, 'Exactly one <h1> — found ' + T.count('h1') + '.');\nvar hs = T.$$('h1,h2,h3,h4,h5,h6').map(function (h) { return Number(h.tagName[1]); });\nvar ok = true;\nfor (var i = 1; i < hs.length; i++) { if (hs[i] > hs[i - 1] + 1) ok = false; }\nT.expect(ok, 'Never jump more than one level deeper (h2 → h3, not h2 → h5). Current outline: ' + hs.join(' → '));\nT.expect(T.count('h2') >= 2 && T.count('h3') >= 1, 'Use h2 for the two sections and h3 for the sub-point.');" },
        { text: "Give the ✕ icon button an `aria-label` of **Close menu**.",
          test: "var b = T.$('#closeBtn');\nT.expect(b, 'Keep the ✕ button (id=\"closeBtn\").');\nvar al = (b.getAttribute('aria-label') || '').toLowerCase();\nT.expect(al.indexOf('close') !== -1, 'Add aria-label=\"Close menu\" so screen readers can announce it.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <button id=\"closeBtn\">✕</button>\n\n  <h3>Space Camp</h3>\n\n  <h5>Training program</h5>\n  <p>Twelve weeks of simulations.</p>\n\n  <h1>Zero-G basics</h1>\n  <p>Start with the tether drills.</p>\n\n  <h5>Pricing</h5>\n  <p>Contact us for group rates.</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "Site title = h1 (\"Space Camp\"). Sections = h2 (\"Training program\", \"Pricing\"). The sub-point under training = h3.",
        "aria-label is just an attribute: `<button id=\"closeBtn\" aria-label=\"Close menu\">✕</button>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <button id=\"closeBtn\" aria-label=\"Close menu\">✕</button>\n\n  <h1>Space Camp</h1>\n\n  <h2>Training program</h2>\n  <p>Twelve weeks of simulations.</p>\n\n  <h3>Zero-G basics</h3>\n  <p>Start with the tether drills.</p>\n\n  <h2>Pricing</h2>\n  <p>Contact us for group rates.</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u5-5",
      title: "Inside the head: title & meta",
      kind: "web", chip: "HTML", xp: 15,
      brief: "The `<head>` configures the page:\n\n- `<title>` — the browser-tab text AND the headline search engines show. Convention: `Page — Site name`.\n- `<meta charset=\"UTF-8\">` — text encoding, so emoji and accents work\n- `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` — **the** line that makes pages mobile-friendly instead of tiny-zoomed-out\n\nYou've been reading this course on a phone — this meta tag is why CodeLab isn't microscopic.",
      steps: [
        { text: "Set the title to **Home — Stellar Bakery**.",
          test: "T.expect(document.title.toLowerCase().indexOf('stellar bakery') !== -1, 'Add <title>Home — Stellar Bakery</title> in <head>.');" },
        { text: "Add the charset meta tag.",
          test: "var m = T.$('meta[charset]');\nT.expect(m && (m.getAttribute('charset') || '').toUpperCase() === 'UTF-8', 'Add <meta charset=\"UTF-8\"> in <head>.');" },
        { text: "Add the viewport meta tag for mobile.",
          test: "var m = T.$('meta[name=\"viewport\"]');\nT.expect(m, 'Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">.');\nvar c = (m.getAttribute('content') || '').replace(/\\s+/g, '');\nT.expect(c.indexOf('width=device-width') !== -1, 'Its content must include width=device-width.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <!-- title, charset meta, viewport meta -->\n</head>\n<body>\n  <h1>Stellar Bakery</h1>\n  <p>Croissants that defy gravity. 🥐</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "All three live inside <head>, order doesn't matter much (charset first is convention).",
        "Copy carefully: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Home — Stellar Bakery</title>\n</head>\n<body>\n  <h1>Stellar Bakery</h1>\n  <p>Croissants that defy gravity. 🥐</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-quiz-5",
      title: "Unit 5 quiz: Semantics & Accessibility",
      kind: "quiz", xp: 10,
      brief: "Landmarks, meaning, and markup everyone can use. 80% to pass.",
      questions: [
        { q: "Which tag wraps a page's **unique main content**?",
          choices: ["`<main>`", "`<body>`", "`<section>`", "`<content>`"],
          answer: 0, explain: "<main> — one per page. <body> wraps EVERYTHING visible; <content> doesn't exist." },
        { q: "A blog post in a feed — which wrapper fits best?",
          choices: ["`<article>`", "`<aside>`", "`<div>`", "`<nav>`"],
          answer: 0, explain: "The syndication test: could this chunk stand alone somewhere else — in an RSS reader, on another site — and still make sense? Then it's an <article>. <aside> is tangential extras, <nav> is a set of links, and <div> means nothing at all." },
        { q: "The right alt text for a decorative flourish image is…",
          choices: ["alt=\"\"", "alt=\"image\"", "No alt attribute at all", "alt=\"decorative flourish\""],
          answer: 0, explain: "An empty alt is a deliberate skip: screen readers pass straight over the image and say nothing. MISSING alt makes them read the filename out loud — the worst outcome — while alt=\"image\" and any narration of pure decoration just waste the listener's time." },
        { q: "Why is `<div onclick=…>` worse than `<button>`?",
          choices: ["A div gets no keyboard focus or role", "Divs render more slowly than buttons", "A div can't hold an onclick attribute", "Divs are ignored by search engines"],
          answer: 0, explain: "Real buttons ship with Tab focus, Enter/Space activation, and the button role built in. A clickable div is announced as plain text and never lands in the tab order, so keyboard and screen-reader users simply cannot reach or press it — no matter how nice the click handler is." },
        { q: "Which heading outline is correct?",
          code: "A) h1 → h2 → h3 → h2\nB) h1 → h4 → h2\nC) h3 → h1 → h5",
          lang: "html",
          choices: ["A", "B", "C"],
          answer: 0, explain: "Start at h1, never skip levels going deeper. Coming back UP (h3 → h2) is fine." },
        { q: "What does `aria-label=\"Close\"` on a ✕ button do?",
          choices: ["Gives the icon button a spoken name", "Wires the button up to close the dialog", "Adds a tooltip on hover for everyone", "Prints the word Close inside the button"],
          answer: 0, explain: "Visually it's a ✕; aurally it becomes \"Close, button\". aria-label replaces the accessible name of a control that has no text — nothing is drawn on screen, no tooltip appears (that's `title`), and no behaviour is attached. Icon-only controls always need one." },
        { q: "Which meta tag makes a page render properly on phones?",
          choices: ["`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`", "`<meta name=\"viewport\" content=\"screen-width=device, initial-scale=1\">`", "`<meta charset=\"UTF-8\" name=\"viewport\">`", "`<meta name=\"mobile\" content=\"initial-scale=1\">`"],
          answer: 0, explain: "Without the viewport meta, phones pretend to be 980px-wide desktops and shrink everything. `width=device-width` is the load-bearing half — it tells the browser to use the real screen width — and `initial-scale=1` starts at 100% zoom. There is no `screen-width` property, and `charset` handles text encoding, a different job entirely." }
      ]
    }
  ]
});
