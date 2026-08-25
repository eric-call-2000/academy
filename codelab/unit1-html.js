/* Unit 1 — Web Foundations & HTML */
window.CODELAB.addUnit({
  id: "html",
  title: "Fundamentals of HTML",
  icon: "🧱",
  color: "#ff9600",
  blurb: "Every website starts here — structure your first pages with real HTML.",
  cheat: [
    { h: "Anatomy of a tag", lang: "html", code: "<h1>My heading</h1>\n<p>A paragraph of text.</p>", note: "Opening tag, content, closing tag. Most tags come in pairs." },
    { h: "Page skeleton", lang: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My page</title>\n</head>\n<body>\n  <!-- visible content lives here -->\n</body>\n</html>" },
    { h: "Headings", lang: "html", code: "<h1>Biggest</h1>\n<h2>Section</h2>\n<h3>Sub-section</h3>", note: "h1 → h6. One `<h1>` per page is the convention." },
    { h: "Links & images", lang: "html", code: "<a href=\"https://example.com\">Visit</a>\n<img src=\"cat.png\" alt=\"A sleepy cat\">", note: "`alt` describes the image for screen readers and broken loads." },
    { h: "Lists", lang: "html", code: "<ul>\n  <li>Unordered item</li>\n</ul>\n<ol>\n  <li>Numbered item</li>\n</ol>" },
    { h: "Semantic layout", lang: "html", code: "<header>…</header>\n<nav>…</nav>\n<main>…</main>\n<footer>…</footer>", note: "Tags that say what content *means* — better for accessibility and SEO." },
    { h: "Forms", lang: "html", code: "<form>\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"text\" placeholder=\"you@site.com\">\n  <button>Send</button>\n</form>" }
  ],
  lessons: [

    {
      id: "html-1",
      title: "Your first HTML tags",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Welcome to CodeLab! 👋 Every page on the web is built with **HTML** — HyperText Markup Language. HTML wraps content in **tags** that tell the browser what each piece is.\n\nA tag looks like `<h1>Hello</h1>`: an opening tag, some content, and a closing tag with a `/`. `<h1>` is the page's main heading; `<p>` is a paragraph.\n\nWrite your code in the **Code** tab, then press **Run** to see your page and check your work.",
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
      id: "html-3",
      title: "Links & images",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Two tags make the web *the web*:\n\n- `<a href=\"https://…\">text</a>` — a **link**. The `href` **attribute** says where it goes.\n- `<img src=\"…\" alt=\"…\">` — an **image**. `src` is the picture's address; `alt` describes it for screen readers. `<img>` has no closing tag.\n\nAttributes always live inside the opening tag: `name=\"value\"`.",
      steps: [
        { text: "Add a link (`<a>`) with an `href` starting with `https://` and some link text.",
          test: "var a = T.$('a');\nT.expect(a, 'No <a> element found yet.');\nT.expect(((a.getAttribute('href') || '').indexOf('http') === 0), 'Give your <a> an href that starts with https://');\nT.expect((a.textContent || '').trim().length >= 2, 'Put some clickable text between <a> and </a>.');" },
        { text: "Add an image (`<img>`) with a `src` **and** a descriptive `alt`.",
          test: "var img = T.$('img');\nT.expect(img, 'No <img> element found yet.');\nT.expect((img.getAttribute('src') || '').length > 3, 'Your <img> needs a src attribute.');\nT.expect((img.getAttribute('alt') || '').length >= 3, 'Add a descriptive alt attribute (a few words).');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My favorite corner of the internet</h1>\n  <!-- 1) Add a link. Try href=\"https://developer.mozilla.org\" -->\n\n  <!-- 2) Add an image. You can use src=\"https://picsum.photos/300/200\" -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "A link: `<a href=\"https://developer.mozilla.org\">MDN docs</a>`",
        "An image: `<img src=\"https://picsum.photos/300/200\" alt=\"A random landscape\">`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>My favorite corner of the internet</h1>\n  <a href=\"https://developer.mozilla.org\">MDN — the web developer's manual</a>\n\n  <img src=\"https://picsum.photos/300/200\" alt=\"A random scenic landscape\">\n</body>\n</html>\n"
      }
    },

    {
      id: "html-4",
      title: "Lists",
      kind: "web", chip: "HTML", xp: 15,
      brief: "HTML has two list flavors:\n\n- `<ul>` — an **unordered** (bulleted) list\n- `<ol>` — an **ordered** (numbered) list\n\nEach item inside is an `<li>` (*list item*). Lists can hold anything: nav menus, todo items, steps in a recipe…",
      steps: [
        { text: "Create a `<ul>` with at least **3** `<li>` items (things you want to build).",
          test: "T.expect(T.$('ul'), 'No <ul> found yet.');\nT.expect(T.count('ul li') >= 3, 'Your <ul> needs at least 3 <li> items — found ' + T.count('ul li') + '.');" },
        { text: "Create an `<ol>` with at least **2** `<li>` steps (your learning plan, in order).",
          test: "T.expect(T.$('ol'), 'No <ol> found yet.');\nT.expect(T.count('ol li') >= 2, 'Your <ol> needs at least 2 <li> items — found ' + T.count('ol li') + '.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Builder's list</h1>\n\n  <h2>Things I want to build</h2>\n  <!-- unordered list here -->\n\n  <h2>My plan</h2>\n  <!-- ordered list here -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "The pattern: `<ul> <li>First</li> <li>Second</li> </ul>` — items go INSIDE the list tag.",
        "`<ol>` works exactly like `<ul>`, the browser numbers it for you."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Builder's list</h1>\n\n  <h2>Things I want to build</h2>\n  <ul>\n    <li>A portfolio site</li>\n    <li>A todo app</li>\n    <li>A tiny game</li>\n  </ul>\n\n  <h2>My plan</h2>\n  <ol>\n    <li>Learn HTML, CSS and JavaScript</li>\n    <li>Build projects and ship them</li>\n  </ol>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-5",
      title: "Semantic structure",
      kind: "web", chip: "HTML", xp: 15,
      brief: "You *could* build a whole page out of generic boxes, but HTML has tags that describe what each region **means**:\n\n- `<header>` — top of the page (logo, title, nav)\n- `<nav>` — navigation links\n- `<main>` — the unique content of this page\n- `<footer>` — the bottom (copyright, contact)\n\nSemantic tags make pages accessible to screen readers and easier for search engines (and future-you) to understand.",
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
      id: "html-6",
      title: "Forms & inputs",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Forms are how users talk back to your site — search boxes, logins, checkout pages.\n\n- `<form>` wraps the whole thing\n- `<input>` is a field; `placeholder` shows ghost text\n- `<label for=\"id\">` names a field — clicking the label focuses the input with the matching `id`\n- `<button>` submits\n\nWe'll make this form actually *do* something in the JavaScript units.",
      steps: [
        { text: "Add a `<form>` element to the page.",
          test: "T.expect(T.$('form'), 'No <form> found yet.');" },
        { text: "Inside it, add an `<input>` with an `id` and a `placeholder`.",
          test: "var i = T.$('form input');\nT.expect(i, 'Put an <input> inside the <form>.');\nT.expect((i.getAttribute('placeholder') || '').length > 0, 'Give the input a placeholder.');\nT.expect((i.getAttribute('id') || '').length > 0, 'Give the input an id.');" },
        { text: "Add a `<label>` whose `for` matches the input's `id`.",
          test: "var i = T.$('form input');\nvar l = T.$('label');\nT.expect(l, 'No <label> found yet.');\nT.expect(l.getAttribute('for') && i && l.getAttribute('for') === i.getAttribute('id'), 'The label\\'s for=\"…\" must exactly match the input\\'s id=\"…\".');" },
        { text: "Add a `<button>` inside the form with some text.",
          test: "var b = T.$('form button');\nT.expect(b, 'Add a <button> inside the <form>.');\nT.expect((b.textContent || '').trim().length >= 2, 'Put text on the button, like Sign up.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Join my newsletter</h1>\n  <!-- Build the form here -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Skeleton: `<form> <label for=\"email\">Email</label> <input id=\"email\" placeholder=\"you@site.com\"> <button>Sign up</button> </form>`",
        "The `for` and `id` values must match exactly — same spelling, same case."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Join my newsletter</h1>\n  <form>\n    <label for=\"email\">Email</label>\n    <input id=\"email\" type=\"text\" placeholder=\"you@site.com\">\n    <button>Sign up</button>\n  </form>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-quiz",
      title: "HTML checkpoint quiz",
      kind: "quiz", xp: 10,
      questions: [
        { q: "What does HTML stand for?",
          choices: ["HyperText Markup Language", "High-Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Management Language"],
          answer: 0, explain: "HyperText (documents with links) + Markup (tags that label content) Language." },
        { q: "Which tag makes the **largest, most important** heading?",
          choices: ["`<h1>`", "`<h6>`", "`<heading>`", "`<head>`"],
          answer: 0, explain: "Headings go h1 (biggest/most important) down to h6. <head> is metadata, not a heading!" },
        { q: "What is the `alt` attribute on `<img>` for?",
          choices: ["Describes the image for screen readers and broken loads", "Makes the image load faster", "Adds a caption below the image", "Links the image to another page"],
          answer: 0, explain: "alt text is read aloud by screen readers and shown if the image fails — accessibility 101." },
        { q: "Which semantic tag should wrap the *unique main content* of a page?",
          choices: ["`<main>`", "`<body>`", "`<section>`", "`<content>`"],
          answer: 0, explain: "<main> marks the page's primary content. <body> wraps EVERYTHING visible; <content> doesn't exist." },
        { q: "Which snippet is a correct unordered list?",
          code: "A) <ul><li>One</li><li>Two</li></ul>\nB) <ol><item>One</item></ol>\nC) <list><li>One</li></list>",
          lang: "html",
          choices: ["A", "B", "C"],
          answer: 0, explain: "Lists are <ul> or <ol> with <li> items inside. <item> and <list> aren't real tags." },
        { q: "In `<a href=\"https://x.com\">Go</a>`, what is `href`?",
          choices: ["An attribute", "A tag", "An element", "A selector"],
          answer: 0, explain: "name=\"value\" pairs inside an opening tag are attributes. The whole thing is an element." },
        { q: "Why does a `<label>`'s `for` attribute matter?",
          choices: ["It connects the label to the input with that id, helping clicks and screen readers", "It changes the input's type", "It submits the form", "It's just decoration"],
          answer: 0, explain: "for=\"email\" + id=\"email\" links them: clicking the label focuses the field, and assistive tech announces it." }
      ]
    },

    {
      id: "html-project",
      title: "Project: About-Me page",
      kind: "web", chip: "HTML", xp: 40, project: true,
      brief: "Time to combine everything from Unit 1 into a real page: **your About-Me page**. 🏗️\n\nNo training wheels this time — build it from the checkpoints. You can peek at the cheatsheet (📋 on the unit card) any time.",
      steps: [
        { text: "Use a `<header>` containing exactly one `<h1>` with your name or title.",
          test: "T.expect(T.$('header h1'), 'Add a <header> with an <h1> inside.');\nT.expect(T.count('h1') === 1, 'Keep exactly one <h1> on the page.');" },
        { text: "Add an `<img>` of/for you (any src) with a real `alt`.",
          test: "var img = T.$('img');\nT.expect(img, 'Add an <img>.');\nT.expect((img.getAttribute('alt') || '').length >= 3, 'Give the image a descriptive alt.');" },
        { text: "Inside `<main>`, write at least **2** paragraphs about yourself.",
          test: "T.expect(T.$('main'), 'Wrap your content in <main>.');\nT.expect(T.count('main p') >= 2, 'Write at least two <p> paragraphs inside <main>.');" },
        { text: "Add a `<ul>` of at least **3** skills or interests.",
          test: "T.expect(T.count('ul li') >= 3, 'Add a <ul> with at least 3 <li> items.');" },
        { text: "Link out somewhere (an `<a>` with `https://…`).",
          test: "var ok = T.$$('a').some(function (a) { return (a.getAttribute('href') || '').indexOf('http') === 0; });\nT.expect(ok, 'Add an <a> whose href starts with https://');" },
        { text: "Close the page with a `<footer>`.",
          test: "T.expect(T.$('footer'), 'Add a <footer> at the end of the body.');\nT.expect((T.text('footer') || '').length >= 3, 'Write something in the footer.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <!-- Your About-Me page:\n       header (h1) → img → main (2+ p, ul of skills, a link) → footer -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Sketch the skeleton first: header → main → footer. Then fill each in.",
        "Image idea: `<img src=\"https://picsum.photos/200\" alt=\"Placeholder portrait\">`",
        "Stuck on one checkpoint? Its error message tells you exactly what's missing."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <header>\n    <h1>Eric — future full-stack dev</h1>\n  </header>\n\n  <img src=\"https://picsum.photos/200\" alt=\"Placeholder portrait photo\">\n\n  <main>\n    <p>Hi! I'm learning to build things for the web, from the pixels to the servers.</p>\n    <p>This page is my very first project — built with nothing but HTML.</p>\n    <ul>\n      <li>HTML &amp; CSS</li>\n      <li>JavaScript</li>\n      <li>Building APIs</li>\n    </ul>\n    <a href=\"https://github.com\">Find me on GitHub</a>\n  </main>\n\n  <footer>\n    Built by hand, one tag at a time.\n  </footer>\n</body>\n</html>\n"
      }
    }
  ]
});
