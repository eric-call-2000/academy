/* Learn HTML — Unit 2: Text, Links & Images */
window.CODELAB.addUnit("html", {
  id: "html-u2",
  title: "Text, Links & Images",
  icon: "🔗",
  blurb: "Meaningful text, links that go places, images that speak, and lists that organize.",
  cheat: [
    { h: "Emphasis", lang: "html", code: "<strong>important</strong>  <!-- usually bold -->\n<em>stressed</em>          <!-- usually italic -->", note: "These carry MEANING (screen readers change tone); <b>/<i> are style-only." },
    { h: "Links", lang: "html", code: "<a href=\"https://example.com\">Visit</a>\n<a href=\"https://x.com\" target=\"_blank\">New tab</a>\n<a href=\"mailto:you@site.com\">Email me</a>\n<a href=\"#contact\">Jump to contact section</a>" },
    { h: "Images & figures", lang: "html", code: "<img src=\"cat.png\" alt=\"A sleepy cat\" width=\"300\">\n\n<figure>\n  <img src=\"chart.png\" alt=\"Sales chart\">\n  <figcaption>Q3 sales by region</figcaption>\n</figure>" },
    { h: "Lists", lang: "html", code: "<ul>\n  <li>Unordered item</li>\n</ul>\n<ol>\n  <li>Numbered step</li>\n</ol>", note: "Nest a whole <ul> INSIDE an <li> for sub-lists." },
    { h: "Quotes & breaks", lang: "html", code: "<blockquote>A longer quotation, set apart.</blockquote>\nLine one<br>line two\n<hr>" }
  ],
  lessons: [

    {
      id: "html-u2-1",
      title: "strong & em: meaningful emphasis",
      kind: "web", chip: "HTML", xp: 15,
      brief: "HTML has two emphasis tags that carry **meaning**, not just looks:\n\n- `<strong>` — seriously important (browsers show it bold)\n- `<em>` — stressed emphasis, like a change in speaking tone (shown italic)\n\nScreen readers actually change their voice for these — which is why we prefer them over the purely visual `<b>` and `<i>`.",
      steps: [
        { text: "In the warning paragraph, wrap **Do not feed the dragons** in `<strong>`.",
          test: "T.expect(T.$('p strong'), 'Wrap the warning words in <strong>…</strong>.');\nT.expect((T.text('p strong') || '').toLowerCase().indexOf('do not feed') !== -1, 'The <strong> should contain \"Do not feed the dragons\".');" },
        { text: "In the second paragraph, wrap the word **whispering** in `<em>`.",
          test: "T.expect(T.$('em'), 'Add an <em> element.');\nT.expect((T.text('em') || '').toLowerCase().indexOf('whisper') !== -1, 'The <em> should wrap the word whispering.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Dragon sanctuary rules</h1>\n  <p>Do not feed the dragons under any circumstances.</p>\n  <p>Keep to whispering when the hatchlings sleep.</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "Wrap just the phrase: `<p><strong>Do not feed the dragons</strong> under any…</p>`",
        "`<em>` works the same way, around a single word here."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Dragon sanctuary rules</h1>\n  <p><strong>Do not feed the dragons</strong> under any circumstances.</p>\n  <p>Keep to <em>whispering</em> when the hatchlings sleep.</p>\n</body>\n</html>\n"
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
      id: "html-u2-3",
      title: "Where links can go",
      kind: "web", chip: "HTML", xp: 15,
      brief: "`href` is more versatile than it looks:\n\n- `target=\"_blank\"` — open in a **new tab** (good for external sites)\n- `href=\"mailto:you@site.com\"` — opens the user's **email** app\n- `href=\"#contact\"` — **jumps** to the element on this page with `id=\"contact\"`. That's how \"Back to top\" and table-of-contents links work.",
      steps: [
        { text: "Make the docs link open in a **new tab** with `target=\"_blank\"`.",
          test: "var a = T.$$('a').filter(function (x) { return (x.getAttribute('href') || '').indexOf('http') === 0; })[0];\nT.expect(a, 'Keep the https:// docs link.');\nT.expect(a.getAttribute('target') === '_blank', 'Add target=\"_blank\" to the docs link.');" },
        { text: "Add an **email** link whose href starts with `mailto:`.",
          test: "var m = T.$$('a').filter(function (x) { return (x.getAttribute('href') || '').indexOf('mailto:') === 0; });\nT.expect(m.length >= 1, 'Add <a href=\"mailto:…\">…</a>.');\nT.expect((m[0].getAttribute('href') || '').indexOf('@') !== -1, 'Put an actual email address after mailto:');" },
        { text: "Make **Jump to contact** scroll to the contact section: link `href=\"#contact\"` → element `id=\"contact\"`.",
          test: "var j = T.$$('a').filter(function (x) { return x.getAttribute('href') === '#contact'; });\nT.expect(j.length >= 1, 'Set the jump link\\'s href to exactly #contact.');\nT.expect(T.$('#contact'), 'Give the contact <h2> the id=\"contact\" so the link has a destination.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Link laboratory</h1>\n  <a href=\"https://developer.mozilla.org\">Open the docs</a>\n  <br>\n  <!-- add the mailto link here -->\n\n  <br>\n  <a href=\"#\">Jump to contact</a>\n\n  <p>…imagine lots of content here…</p>\n\n  <h2>Contact</h2>\n  <p>hello@example.com</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "New tab: `<a href=\"https://…\" target=\"_blank\">`.",
        "Email: `<a href=\"mailto:hello@example.com\">Email me</a>`.",
        "Jump links are a pair: `<a href=\"#contact\">` + `<h2 id=\"contact\">` — the # matches the id."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Link laboratory</h1>\n  <a href=\"https://developer.mozilla.org\" target=\"_blank\">Open the docs</a>\n  <br>\n  <a href=\"mailto:hello@example.com\">Email me</a>\n\n  <br>\n  <a href=\"#contact\">Jump to contact</a>\n\n  <p>…imagine lots of content here…</p>\n\n  <h2 id=\"contact\">Contact</h2>\n  <p>hello@example.com</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u2-4",
      title: "Figures & captions",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Images that *mean something* deserve better than a bare `<img>`:\n\n- `width` / `height` attributes reserve space so the page doesn't jump while loading\n- `<figure>` groups an image with its caption\n- `<figcaption>` is the visible caption text\n\nThis is exactly how articles and documentation present charts and photos.",
      steps: [
        { text: "Give the image explicit `width=\"300\"`.",
          test: "var img = T.$('img');\nT.expect(img, 'Keep the <img>.');\nT.expect(img.getAttribute('width') === '300', 'Add width=\"300\" to the img tag.');" },
        { text: "Wrap the image in a `<figure>`.",
          test: "T.expect(T.$('figure img'), 'Wrap the <img> inside <figure>…</figure>.');" },
        { text: "Add a `<figcaption>` inside the figure describing the photo.",
          test: "T.expect(T.$('figure figcaption'), 'Add a <figcaption> inside the <figure>.');\nT.expect((T.text('figcaption') || '').length >= 5, 'Write a real caption sentence.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Field notes</h1>\n  <img src=\"https://picsum.photos/300/200\" alt=\"A misty forest valley\">\n</body>\n</html>\n" }
      ],
      hints: [
        "The structure: `<figure> <img …> <figcaption>Caption here</figcaption> </figure>`",
        "width is an attribute on img itself: `<img src=\"…\" alt=\"…\" width=\"300\">`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Field notes</h1>\n  <figure>\n    <img src=\"https://picsum.photos/300/200\" alt=\"A misty forest valley\" width=\"300\">\n    <figcaption>Morning fog rolling through the valley at dawn.</figcaption>\n  </figure>\n</body>\n</html>\n"
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
      id: "html-u2-6",
      title: "Nested lists",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Lists nest: put a whole `<ul>` **inside an `<li>`** and you get sub-items — the structure behind every dropdown menu and outline.\n\nThe key detail everyone gets wrong at first: the inner list goes *inside* the parent `<li>`, **before** its closing `</li>` — not between two `<li>`s.",
      example: { lang: "html", code: "<ul>\n  <li>Fruit\n    <ul>\n      <li>Mango</li>\n      <li>Fig</li>\n    </ul>\n  </li>\n  <li>Vegetables</li>\n</ul>" },
      steps: [
        { text: "Under **Frontend**, nest a sub-list with at least 2 items (e.g. HTML, CSS).",
          test: "var frontLi = T.$$('li').filter(function (l) { return (l.textContent || '').toLowerCase().indexOf('frontend') !== -1 && l.querySelector('ul'); })[0];\nT.expect(frontLi, 'Put a <ul> INSIDE the Frontend <li> (before its </li>).');\nT.expect(frontLi.querySelectorAll('ul li').length >= 2, 'The nested list needs at least 2 items.');" },
        { text: "Under **Backend**, nest a sub-list with at least 2 items too.",
          test: "var backLi = T.$$('li').filter(function (l) { return (l.textContent || '').toLowerCase().indexOf('backend') !== -1 && l.querySelector('ul'); })[0];\nT.expect(backLi, 'Nest a <ul> inside the Backend <li> as well.');\nT.expect(backLi.querySelectorAll('ul li').length >= 2, 'That nested list also needs at least 2 items.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Full-stack skill tree</h1>\n  <ul>\n    <li>Frontend</li>\n    <li>Backend</li>\n  </ul>\n</body>\n</html>\n" }
      ],
      hints: [
        "Open up the li: `<li>Frontend <ul> … </ul> </li>` — the sub-list lives inside it.",
        "Copy the pattern from the example above the checkpoints."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Full-stack skill tree</h1>\n  <ul>\n    <li>Frontend\n      <ul>\n        <li>HTML</li>\n        <li>CSS</li>\n      </ul>\n    </li>\n    <li>Backend\n      <ul>\n        <li>APIs</li>\n        <li>Databases</li>\n      </ul>\n    </li>\n  </ul>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u2-7",
      title: "Quotes, breaks & rules",
      kind: "web", chip: "HTML", xp: 15,
      brief: "Three small tags that finish this unit's toolkit:\n\n- `<blockquote>` — a long quotation, set apart from the text\n- `<br>` — a single **line break** (no closing tag). Use sparingly — for addresses and poems, not for spacing!\n- `<hr>` — a horizontal rule; a thematic break between sections",
      steps: [
        { text: "Wrap the quotation in a `<blockquote>`.",
          test: "T.expect(T.$('blockquote'), 'Wrap the famous quote in <blockquote>…</blockquote>.');\nT.expect((T.text('blockquote') || '').toLowerCase().indexOf('simple') !== -1, 'The quote text should be inside it.');" },
        { text: "Format the address with `<br>` so it renders on **3 lines** (2 breaks).",
          test: "var addr = T.$('.address');\nT.expect(addr, 'Keep the address paragraph (class=\"address\").');\nT.expect(addr.querySelectorAll('br').length >= 2, 'Insert <br> after the name and after the street — 2 breaks for 3 lines.');" },
        { text: "Separate the two sections with an `<hr>`.",
          test: "T.expect(T.$('hr'), 'Add an <hr> between the quote section and the address section.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Studio wall</h1>\n\n  <p>Simple can be harder than complex. — a famous designer</p>\n\n  <p class=\"address\">CodeLab Studio 42 Keyboard Lane Webville</p>\n</body>\n</html>\n" }
      ],
      hints: [
        "`<blockquote>Simple can be harder than complex.</blockquote>` — you can keep the attribution outside it.",
        "`<br>` is self-closing and goes right where the line should end: `Studio<br>42 Keyboard Lane<br>Webville`."
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <h1>Studio wall</h1>\n\n  <blockquote>Simple can be harder than complex.</blockquote>\n  <p>— a famous designer</p>\n\n  <hr>\n\n  <p class=\"address\">CodeLab Studio<br>42 Keyboard Lane<br>Webville</p>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-quiz-2",
      title: "Unit 2 quiz: Text, Links & Images",
      kind: "quiz", xp: 10,
      brief: "Links, images, emphasis and lists — the everyday tags. 80% to pass.",
      questions: [
        { q: "Why prefer `<strong>` over `<b>`?",
          choices: ["<strong> carries meaning (important!) that screen readers convey; <b> is style-only", "<b> is deprecated and won't render", "<strong> is shorter to type", "They're exactly the same"],
          answer: 0, explain: "Both look bold, but <strong> tells assistive tech (and search engines) the content matters." },
        { q: "What does `target=\"_blank\"` do on a link?",
          choices: ["Opens the link in a new tab", "Makes the link invisible", "Downloads the file", "Jumps to the page top"],
          answer: 0, explain: "Handy for external links so visitors don't lose your page." },
        { q: "How do you link to a section **on the same page**?",
          code: "<a href=\"?\">Jump to pricing</a>\n…\n<h2 ?>Pricing</h2>",
          lang: "html",
          choices: ["href=\"#pricing\" on the link + id=\"pricing\" on the heading", "href=\"pricing.html\" on both", "class=\"pricing\" on both", "You can't"],
          answer: 0, explain: "The # prefix means \"find the element with this id on this page\"." },
        { q: "The `alt` attribute on `<img>` is…",
          choices: ["A text description for screen readers and failed loads", "The image's file size", "A caption shown below the image", "Optional decoration"],
          answer: 0, explain: "alt is the accessibility backbone of images. (<figcaption> is the visible caption.)" },
        { q: "Which builds a **numbered** list?",
          code: "A) <ol><li>One</li></ol>\nB) <ul><li>One</li></ul>\nC) <nl><li>One</li></nl>",
          lang: "html",
          choices: ["A", "B", "C"],
          answer: 0, explain: "ol = ordered (numbered), ul = unordered (bullets). <nl> doesn't exist." },
        { q: "Where does a **nested** sub-list go?",
          choices: ["Inside the parent <li>, before its closing </li>", "Between two <li> elements", "Outside the <ul>", "In the <head>"],
          answer: 0, explain: "<li>Parent <ul>…sub items…</ul> </li> — the sub-list belongs to its parent item." },
        { q: "Which tag inserts a simple line break?",
          choices: ["`<br>`", "`<break>`", "`<lb>`", "`<newline>`"],
          answer: 0, explain: "<br> — self-closing. Use it for addresses/poetry, not to fake spacing (that's CSS's job)." }
      ]
    }
  ]
});
