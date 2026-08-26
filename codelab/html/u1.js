/* Learn HTML — Unit 1: Elements & Structure */
window.CODELAB.addUnit("html", {
  id: "html-u1",
  title: "Elements & Structure",
  icon: "🧱",
  blurb: "Tags, attributes, nesting, and the skeleton every page is built on.",
  cheat: [
    { h: "Anatomy of an element", lang: "html", code: "<h1>My heading</h1>\n<p>A paragraph of text.</p>", note: "Opening tag → content → closing tag. Together they're an **element**." },
    { h: "Attributes", lang: "html", code: "<p id=\"intro\" class=\"note\">Hi</p>", note: "`name=\"value\"` pairs inside the opening tag. `id` is unique; `class` is reusable." },
    { h: "The page skeleton", lang: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Tab title</title>\n</head>\n<body>\n  <!-- visible content -->\n</body>\n</html>" },
    { h: "Headings", lang: "html", code: "<h1>Biggest</h1>\n<h2>Section</h2>\n<h3>Sub-section</h3>", note: "h1 → h6. One `<h1>` per page is the convention." },
    { h: "Divs & spans", lang: "html", code: "<div>a generic block container</div>\n<p>a <span>generic inline</span> piece</p>", note: "Use them for grouping/styling when no better tag fits." },
    { h: "Comments", lang: "html", code: "<!-- notes the browser ignores -->" }
  ],
  lessons: [

    {
      id: "html-1",
      title: "Your first HTML tags",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Welcome to **Learn HTML**! 👋 Every page on the web is built with **HTML** — HyperText Markup Language. HTML wraps content in **tags** that tell the browser what each piece is.\n\nA tag looks like `<h1>Hello</h1>`: an opening tag, some content, and a closing tag with a `/`. `<h1>` is the page's main heading; `<p>` is a paragraph.\n\nWrite your code in the **Code** tab, then press **Run** to see your page and check your work.",
      steps: [
        { text: "Inside `<body>`, add an `<h1>` heading that says **Hello, world!**",
          test: "T.expect(T.$('h1'), 'No <h1> element found yet — add one inside <body>.');\nvar t = (T.text('h1') || '').toLowerCase();\nT.expect(t.indexOf('hello') !== -1, 'Your <h1> should say \"Hello, world!\" (it just needs the word hello).');" },
        { text: "Below it, add a `<p>` paragraph introducing yourself — any text you like.",
          test: "T.expect(T.$('p'), 'No <p> element found yet.');\nT.expect((T.text('p') || '').length >= 3, 'Write a little more text inside your <p>.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- Write your code below this line -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Tags come in pairs: `<h1>` opens, `</h1>` closes. Your text goes between them.",
        "Try: `<h1>Hello, world!</h1>` and then `<p>I'm learning to code!</p>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- Write your code below this line -->\n  <h1>Hello, world!</h1>\n  <p>I'm Eric, and I'm learning full-stack development!</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u1-2",
      title: "Elements have anatomy",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Let's name the parts precisely, because you'll use these words forever:\n\n- **Tag** — the label in angle brackets: `<p>`\n- **Element** — the whole package: opening tag + content + closing tag\n- **Nesting** — elements living inside other elements. The inner element must close **before** the outer one.\n\nNesting is how pages get structure: a `<p>` can hold an `<em>` (emphasis, usually italic), which holds text.",
      example: { lang: "html", code: "<p>This sentence has <em>one emphasized word</em>.</p>" },
      steps: [
        { text: "Add a `<p>` that contains an `<em>` element nested inside it.",
          test: "T.expect(T.$('p'), 'Add a <p> first.');\nT.expect(T.$('p em'), 'Nest an <em> INSIDE the <p>: <p>… <em>word</em> …</p>');\nT.expect((T.text('p em') || '').length >= 2, 'Put a word or two inside the <em>.');" },
        { text: "The paragraph should have text **outside** the `<em>` too (only part of it emphasized).",
          test: "var p = T.$('p'), em = T.$('p em');\nT.expect(p && em && (p.textContent.trim().length > em.textContent.trim().length + 2), 'Only PART of the sentence should be inside <em> — keep normal text around it.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Element anatomy</h1>\n  <!-- add a <p> with an <em> nested inside -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Close the inner element first: `<p>outer <em>inner</em> outer</p>` — never `<p><em></p></em>`.",
        "Example: `<p>I am <em>really</em> enjoying this.</p>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Element anatomy</h1>\n  <p>I am <em>really</em> enjoying this.</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-2",
      title: "Headings organize a page",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Headings run from `<h1>` (most important) to `<h6>` (least). They give your page a **skeleton** readers and search engines can scan.\n\nUse **one** `<h1>` per page, then `<h2>` for each section. Let's build a tiny page about your hobbies.",
      steps: [
        { text: "Give the page exactly **one** `<h1>` (e.g. *My Hobbies*).",
          test: "T.expect(T.count('h1') === 1, 'The page should have exactly one <h1> — found ' + T.count('h1') + '.');" },
        { text: "Add at least **two** `<h2>` section headings (two hobbies).",
          test: "T.expect(T.count('h2') >= 2, 'Add at least two <h2> headings — found ' + T.count('h2') + '.');" },
        { text: "Under each `<h2>`, add a `<p>` describing that hobby (at least two `<p>` total).",
          test: "T.expect(T.count('p') >= 2, 'Add at least two <p> paragraphs — found ' + T.count('p') + '.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- One h1, then h2 sections with paragraphs -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Structure it like an outline: one `<h1>` title at the top, then `<h2>` + `<p>` pairs.",
        "Example section: `<h2>Gaming</h2>` followed by `<p>I love strategy games.</p>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My Hobbies</h1>\n\n  <h2>Building things</h2>\n  <p>I like making websites and small apps.</p>\n\n  <h2>Hiking</h2>\n  <p>Weekend trails clear my head.</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u1-4",
      title: "Divs & spans: generic containers",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Two workhorse tags have **no meaning of their own** — they exist to group things:\n\n- `<div>` — a generic **block** container (starts on its own line). Used to group whole sections for layout and styling.\n- `<span>` — a generic **inline** container (flows within text). Used to mark a few words inside a sentence.\n\nYou'll wrap things in divs constantly once CSS enters the picture — this is the grouping muscle behind every card, banner and sidebar.",
      steps: [
        { text: "Wrap each of the two \"card\" chunks (heading + paragraph) in its own `<div>`.",
          test: "T.expect(T.count('div') >= 2, 'Create two <div> containers — found ' + T.count('div') + '.');\nvar ok = T.$$('div').filter(function (d) { return d.querySelector('h2') && d.querySelector('p'); }).length >= 2;\nT.expect(ok, 'Each <div> should contain an <h2> AND its <p>.');" },
        { text: "In the intro paragraph, wrap the words **two divs** in a `<span>`.",
          test: "T.expect(T.$('p span'), 'Add a <span> inside the intro <p>.');\nT.expect((T.text('p span') || '').toLowerCase().indexOf('two divs') !== -1, 'The span should wrap the words \"two divs\".');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Grouping practice</h1>\n  <p>This page has two divs below this paragraph.</p>\n\n  <!-- card 1: wrap these two in a div -->\n  <h2>Card one</h2>\n  <p>I belong with the heading above me.</p>\n\n  <!-- card 2: wrap these two in a div -->\n  <h2>Card two</h2>\n  <p>Me too!</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "A div wraps AROUND existing elements: `<div> <h2>…</h2> <p>…</p> </div>`.",
        "The span goes inside the sentence: `This page has <span>two divs</span> below…`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Grouping practice</h1>\n  <p>This page has <span>two divs</span> below this paragraph.</p>\n\n  <div>\n    <h2>Card one</h2>\n    <p>I belong with the heading above me.</p>\n  </div>\n\n  <div>\n    <h2>Card two</h2>\n    <p>Me too!</p>\n  </div>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u1-5",
      title: "Attributes, ids & classes",
      kind: "web", chip: "HTML", xp: 15,
      brief: "**Attributes** add information to an element, always in the opening tag: `name=\"value\"`.\n\nThe two you'll use most:\n\n- `id` — a **unique** name for one element. No two elements may share an id.\n- `class` — a reusable label; many elements can share one class, and one element can have several classes separated by spaces.\n\nCSS and JavaScript both find elements through ids and classes — set them up well and everything later gets easier.",
      steps: [
        { text: "Give the `<h1>` an `id` of `main-title`.",
          test: "var h = T.$('h1');\nT.expect(h && h.getAttribute('id') === 'main-title', 'Add id=\"main-title\" inside the <h1> opening tag.');" },
        { text: "Give **both** ingredient paragraphs the class `ingredient`.",
          test: "T.expect(T.count('p.ingredient') >= 2, 'Both <p> elements need class=\"ingredient\" — found ' + T.count('p.ingredient') + '.');" },
        { text: "Give the first ingredient a **second** class, `featured` (two classes, one attribute).",
          test: "var both = T.$$('p').filter(function (p) { return p.classList.contains('ingredient') && p.classList.contains('featured'); });\nT.expect(both.length >= 1, 'One paragraph should have class=\"ingredient featured\" — two class names separated by a space.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Smoothie lab</h1>\n  <p>Frozen mango</p>\n  <p>Coconut milk</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "Attributes live in the opening tag: `<h1 id=\"main-title\">`.",
        "Multiple classes share one attribute: `class=\"ingredient featured\"` — space-separated, no commas."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1 id=\"main-title\">Smoothie lab</h1>\n  <p class=\"ingredient featured\">Frozen mango</p>\n  <p class=\"ingredient\">Coconut milk</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u1-6",
      title: "Comments & readable code",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Two habits separate readable pages from spaghetti:\n\n- **Comments** — `<!-- like this -->` — notes for humans that browsers ignore. Use them to label sections and leave TODOs.\n- **Indentation** — nested elements get indented (2 spaces here), so the structure is visible at a glance.\n\nComments can also temporarily **disable** code without deleting it — a classic debugging move.",
      steps: [
        { text: "Add a comment above the nav div that says **navigation** (any casing).",
          test: "var src = document.documentElement.outerHTML;\nvar hits = src.match(/<!--([\\s\\S]*?)-->/g) || [];\nT.expect(hits.some(function (c) { return c.toLowerCase().indexOf('navigation') !== -1; }), 'Add <!-- navigation --> above the nav div.');" },
        { text: "Comment **out** the \"Under construction\" paragraph so it no longer shows on the page.",
          test: "var ps = T.$$('p').map(function (p) { return (p.textContent || '').toLowerCase(); });\nT.expect(!ps.some(function (t) { return t.indexOf('under construction') !== -1; }), 'Wrap that whole <p> in <!-- … --> so the browser skips it.');\nvar src = document.documentElement.outerHTML;\nT.expect(src.toLowerCase().indexOf('under construction') !== -1, 'Don\\'t DELETE the line — comment it out so it stays in the file.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <div>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n  </div>\n\n  <h1>My site</h1>\n  <p>Welcome!</p>\n  <p>Under construction — do not look at this part.</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "A comment: `<!-- navigation -->` — note the exclamation mark and double dashes.",
        "Commenting out an element wraps ALL of it: `<!-- <p>Under construction…</p> -->`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- navigation -->\n  <div>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">About</a>\n  </div>\n\n  <h1>My site</h1>\n  <p>Welcome!</p>\n  <!-- <p>Under construction — do not look at this part.</p> -->\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u1-7",
      title: "The document skeleton",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Every real HTML document has the same skeleton:\n\n- `<!DOCTYPE html>` — \"this is modern HTML\", always line 1\n- `<html>` — wraps everything\n- `<head>` — invisible setup: the page **title** (browser tab text), links to CSS, metadata\n- `<body>` — everything visible\n\nSo far we gave you the skeleton. This time the file is a mess — fix it.",
      steps: [
        { text: "Give the page a `<title>` inside `<head>`: **My Skeleton Page**.",
          test: "T.expect(document.title.toLowerCase().indexOf('skeleton') !== -1, 'Add <title>My Skeleton Page</title> inside <head> — the checker reads the browser tab title.');" },
        { text: "The `<h1>` must live inside `<body>`, not `<head>` (visible content only in the body!).",
          test: "T.expect(T.$('body h1'), 'Move the <h1> into <body>.');\nT.expect(!document.head.querySelector('h1'), 'Remove the <h1> from <head> — heads hold setup, not content.');" },
        { text: "Add a `<p>` in the body too, so the page has some content.",
          test: "T.expect(T.$('body p'), 'Add a <p> inside <body>.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <h1>Wait… why am I invisible?</h1>\n</head>\n<body>\n</body>\n</html>\n" }
      ],
      hints: [
        "The title element: `<title>My Skeleton Page</title>` — it renders in the TAB, not on the page.",
        "Cut the `<h1>` line out of `<head>` and paste it between `<body>` and `</body>`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Skeleton Page</title>\n</head>\n<body>\n  <h1>Now I'm visible!</h1>\n  <p>Because visible content belongs in the body.</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-quiz",
      title: "Unit 1 quiz: Elements & Structure",
      kind: "quiz", xp: 10,
      brief: "Quick check on tags, attributes, nesting and the document skeleton. You need **80%** to pass — you can retake it any time.",
      questions: [
        { q: "What does HTML stand for?",
          choices: ["HyperText Markup Language", "High-Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Management Language"],
          answer: 0, explain: "HyperText (documents with links) + Markup (tags that label content) Language." },
        { q: "Which is a complete **element**?",
          code: "A) <p>\nB) <p>Hello</p>\nC) Hello</p>",
          lang: "html",
          choices: ["B", "A", "C"],
          answer: 0, explain: "Element = opening tag + content + closing tag. <p> alone is just a tag." },
        { q: "What's wrong with this nesting?",
          code: "<p>Some <em>emphasized</p></em>",
          lang: "html",
          choices: ["The inner element must close before the outer one", "You can't put <em> in a <p>", "<em> needs a class", "Nothing"],
          answer: 0, explain: "Last opened, first closed: <p>Some <em>emphasized</em></p>." },
        { q: "Which tag makes the **largest, most important** heading?",
          choices: ["`<h1>`", "`<h6>`", "`<heading>`", "`<head>`"],
          answer: 0, explain: "Headings go h1 (biggest) down to h6. <head> is metadata, not a heading!" },
        { q: "What's the difference between `id` and `class`?",
          choices: ["id is unique to ONE element; class can be shared by many", "class is unique; id is shared", "They're identical", "id is only for headings"],
          answer: 0, explain: "One id per element per page; classes are reusable labels — and one element can carry several classes." },
        { q: "Where does visible page content belong?",
          choices: ["Inside `<body>`", "Inside `<head>`", "Before `<!DOCTYPE html>`", "Inside `<title>`"],
          answer: 0, explain: "<head> is invisible setup (title, metadata, CSS links); everything you SEE lives in <body>." },
        { q: "Which line is a valid HTML comment?",
          choices: ["`<!-- fix this later -->`", "`// fix this later`", "`# fix this later`", "`/* fix this later */`"],
          answer: 0, explain: "HTML comments are <!-- … -->. The others belong to JavaScript, Python and CSS." },
        { q: "`<div>` vs `<span>` — the real difference?",
          choices: ["div is a block container; span is inline (flows within text)", "span is newer than div", "div is for text, span for images", "There is none"],
          answer: 0, explain: "div stacks like a paragraph; span wraps a few words inside a line. Both are meaningless on their own — pure grouping tools." }
      ]
    }
  ]
});
