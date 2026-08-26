/* Learn HTML — Unit 7: Final Projects */
window.CODELAB.addUnit("html", {
  id: "html-u7",
  title: "Final Projects",
  icon: "🏆",
  blurb: "Three build-it-yourself pages that cash in everything from the course.",
  cheat: [
    { h: "Your project toolkit", lang: "html", code: "<!DOCTYPE html> + <head> (title, metas)\n<header> <nav> <main> <section> <article> <footer>\n<h1>–<h6>  <p>  <ul>/<ol>  <table>  <form>\n<a href>  <img alt>  <figure>  <details>", note: "Every checkpoint in these projects is something you've already built once." },
    { h: "A clean page outline", lang: "html", code: "<body>\n  <header>…site name + nav…</header>\n  <main>\n    <section id=\"about\">…</section>\n    <section id=\"work\">…</section>\n    <section id=\"contact\">…</section>\n  </main>\n  <footer>…</footer>\n</body>" }
  ],
  lessons: [

    {
      id: "html-project",
      title: "Project: About-Me page",
      kind: "web", chip: "HTML", xp: 40, project: true, mins: 30,
      brief: "Warm-up project: combine structure, text, images and lists into a real **About-Me page**. 🏗️\n\nNo training wheels — build it from the checkpoints. You can peek at the unit cheatsheets any time.",
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
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n  <header>\n    <h1>Eric — future full-stack dev</h1>\n  </header>\n\n  <main>\n    <img src=\"https://picsum.photos/200\" alt=\"Placeholder portrait photo\">\n    <p>Hi! I'm learning to build things for the web, from the pixels to the servers.</p>\n    <p>This page is my very first project — built with nothing but HTML.</p>\n    <ul>\n      <li>HTML &amp; CSS</li>\n      <li>JavaScript</li>\n      <li>Building APIs</li>\n    </ul>\n    <a href=\"https://github.com\">Find me on GitHub</a>\n  </main>\n\n  <footer>\n    Built by hand, one tag at a time.\n  </footer>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u7-2",
      title: "Project: Recipe page",
      kind: "web", chip: "HTML", xp: 40, project: true, mins: 35,
      brief: "Every food blog is secretly an HTML exam. Build a **recipe page** with a figure, an unordered ingredient list, ordered steps, a nutrition table and an FAQ accordion — pure structure, zero styling needed.",
      steps: [
        { text: "Title the page (browser tab) with the dish's name, and give it exactly one `<h1>`.",
          test: "T.expect(document.title.trim().length >= 3, 'Set a <title> in <head> with your dish\\'s name.');\nT.expect(T.count('h1') === 1, 'Exactly one <h1> for the dish.');" },
        { text: "A `<figure>` with the dish photo (`alt`!) and a `<figcaption>`.",
          test: "T.expect(T.$('figure img'), 'Put an <img> inside a <figure>.');\nT.expect((T.$('figure img').getAttribute('alt') || '').length >= 3, 'The photo needs alt text.');\nT.expect(T.$('figure figcaption'), 'Add a <figcaption>.');" },
        { text: "An **Ingredients** section: `<h2>` + a `<ul>` with at least 4 items.",
          test: "var h = T.$$('h2').filter(function (x) { return x.textContent.toLowerCase().indexOf('ingredient') !== -1; })[0];\nT.expect(h, 'Add an <h2>Ingredients</h2>.');\nT.expect(T.count('ul li') >= 4, 'List at least 4 ingredients in a <ul>.');" },
        { text: "A **Steps** section: `<h2>` + an `<ol>` with at least 3 steps.",
          test: "var h = T.$$('h2').filter(function (x) { return x.textContent.toLowerCase().indexOf('step') !== -1; })[0];\nT.expect(h, 'Add an <h2>Steps</h2> (or Steps to make it).');\nT.expect(T.count('ol li') >= 3, 'Number at least 3 steps in an <ol> — order matters when cooking!');" },
        { text: "A nutrition `<table>`: header row (`th`: Nutrient, Amount) + at least 2 data rows.",
          test: "T.expect(T.count('table th') >= 2, 'Give the table a header row with <th> cells.');\nvar txt = T.$$('th').map(function (x) { return x.textContent.toLowerCase(); }).join(' ');\nT.expect(txt.indexOf('nutrient') !== -1 && txt.indexOf('amount') !== -1, 'Headers: Nutrient and Amount.');\nT.expect(T.count('table tr') >= 3, 'Add at least 2 data rows under the header.');" },
        { text: "An FAQ: at least one `<details>`/`<summary>` question.",
          test: "T.expect(T.$('details summary'), 'Finish with a <details> + <summary> FAQ entry (e.g. Can I freeze it?).');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <!-- title -->\n</head>\n<body>\n  <!-- h1 → figure (img + figcaption) → Ingredients (ul) → Steps (ol)\n       → nutrition table → FAQ (details/summary) -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Pick a real dish you love — writing real content makes the structure obvious.",
        "Table skeleton: `<table><tr><th>Nutrient</th><th>Amount</th></tr><tr><td>Protein</td><td>12g</td></tr>…</table>`",
        "FAQ: `<details><summary>Can I freeze it?</summary><p>Up to 3 months.</p></details>`"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Midnight Ramen</title>\n</head>\n<body>\n  <h1>Midnight Ramen</h1>\n\n  <figure>\n    <img src=\"https://picsum.photos/400/250\" alt=\"A steaming bowl of ramen with egg and scallions\" width=\"400\">\n    <figcaption>Ready in 20 minutes, gone in 5.</figcaption>\n  </figure>\n\n  <h2>Ingredients</h2>\n  <ul>\n    <li>2 packs fresh ramen noodles</li>\n    <li>4 cups chicken stock</li>\n    <li>2 soft-boiled eggs</li>\n    <li>2 scallions, sliced</li>\n  </ul>\n\n  <h2>Steps</h2>\n  <ol>\n    <li>Bring the stock to a gentle simmer.</li>\n    <li>Cook the noodles 2 minutes and divide into bowls.</li>\n    <li>Pour over the stock; top with egg and scallions.</li>\n  </ol>\n\n  <h2>Nutrition</h2>\n  <table>\n    <tr><th>Nutrient</th><th>Amount</th></tr>\n    <tr><td>Calories</td><td>520</td></tr>\n    <tr><td>Protein</td><td>24g</td></tr>\n  </table>\n\n  <h2>FAQ</h2>\n  <details>\n    <summary>Can I freeze it?</summary>\n    <p>The broth, yes — noodles are best fresh.</p>\n  </details>\n</body>\n</html>\n"
      }
    },

    {
      id: "html-u7-3",
      title: "Portfolio project: Your personal site",
      kind: "web", chip: "HTML", xp: 60, project: true, mins: 50,
      brief: "The graduation build: a complete, semantic, accessible **personal site** — the page you could genuinely publish as `yourname.github.io`. 🎓\n\nIt needs a proper head, landmark structure, jump navigation, projects as articles, a skills table, and a working contact form with validation. Take your time; this is the certificate lesson.",
      steps: [
        { text: "Proper `<head>`: a `<title>`, charset meta and viewport meta.",
          test: "T.expect(document.title.trim().length >= 3, 'Set a <title>.');\nT.expect(T.$('meta[charset]'), 'Add <meta charset=\"UTF-8\">.');\nvar v = T.$('meta[name=\"viewport\"]');\nT.expect(v && (v.getAttribute('content') || '').indexOf('width=device-width') !== -1, 'Add the viewport meta tag.');" },
        { text: "Landmarks: `<header>` (with the only `<h1>`), `<nav>`, `<main>`, `<footer>`.",
          test: "T.expect(T.$('header h1') && T.count('h1') === 1, 'One <h1>, inside <header>.');\nT.expect(T.$('nav') && T.$('main') && T.$('footer'), 'Include nav, main and footer landmarks.');" },
        { text: "Jump navigation: nav links `#about`, `#projects`, `#contact` matching section ids inside `<main>`.",
          test: "var wanted = ['#about', '#projects', '#contact'];\nvar hrefs = T.$$('nav a').map(function (a) { return a.getAttribute('href'); });\nT.expect(wanted.every(function (w) { return hrefs.indexOf(w) !== -1; }), 'Nav needs links to #about, #projects and #contact.');\nT.expect(T.$('main #about') && T.$('main #projects') && T.$('main #contact'), 'Give the three sections those ids, inside <main>.');" },
        { text: "The projects section shows **2+ `<article>`s**, each with an `<h3>` and a `<p>`.",
          test: "var arts = T.$$('#projects article');\nT.expect(arts.length >= 2, 'Add at least two <article> project cards in #projects.');\nT.expect(arts.every(function (a) { return a.querySelector('h3') && a.querySelector('p'); }), 'Each article: an <h3> name + a <p> description.');" },
        { text: "A skills `<table>` with a `thead` (Skill, Level) and 3+ body rows.",
          test: "T.expect(T.$('table thead th'), 'The skills table needs a <thead> with <th> cells.');\nvar txt = T.$$('thead th').map(function (x) { return x.textContent.toLowerCase(); }).join(' ');\nT.expect(txt.indexOf('skill') !== -1 && txt.indexOf('level') !== -1, 'Headers: Skill and Level.');\nT.expect(T.count('tbody tr') >= 3, 'List at least 3 skills in <tbody>.');" },
        { text: "The contact section: a form with a labeled, required `type=\"email\"` input, a labeled `<textarea>`, and a button.",
          test: "var i = T.$('#contact form input[type=\"email\"]');\nT.expect(i && i.hasAttribute('required'), '#contact needs a required email input in a form.');\nvar id = i.getAttribute('id');\nT.expect(id && T.$('label[for=\"' + id + '\"]'), 'Label the email input (for ↔ id).');\nvar t = T.$('#contact form textarea');\nT.expect(t, 'Add a message <textarea>.');\nvar tid = t.getAttribute('id');\nT.expect(tid && T.$('label[for=\"' + tid + '\"]'), 'Label the textarea too.');\nT.expect(T.$('#contact form button'), 'And a submit button.');" },
        { text: "Every image on the page has alt text, and the footer shows a real `&copy;` symbol.",
          test: "var imgs = T.$$('img');\nT.expect(imgs.length >= 1, 'Include at least one image (a portrait or project shot).');\nT.expect(imgs.every(function (im) { return im.hasAttribute('alt'); }), 'EVERY image needs an alt attribute.');\nT.expect((T.text('footer') || '').indexOf('\\u00A9') !== -1, 'Footer: use &copy; for the copyright symbol.');" }
      ],
      files: [
        { name: "index.html", content: "<!DOCTYPE html>\n<html>\n<head>\n  <!-- title + charset + viewport -->\n</head>\n<body>\n  <!-- header: h1 + nav (#about / #projects / #contact) -->\n\n  <!-- main:\n         section#about    — a portrait img + a paragraph or two\n         section#projects — 2+ <article>s (h3 + p)\n         section#contact  — form: labeled required email, labeled textarea, button\n       plus a skills table somewhere in main -->\n\n  <!-- footer with &copy; -->\n\n</body>\n</html>\n" }
      ],
      hints: [
        "Build in passes: head ✓ → landmarks ✓ → nav+ids ✓ → then fill each section. Run after every pass.",
        "Section shells first: `<section id=\"about\"><h2>About</h2></section>` etc — the checks see ids immediately.",
        "The form is your Unit 4 sign-up form, shrunk: email + message + button.",
        "Skills rows: `<tr><td>HTML</td><td>Comfortable</td></tr>` — honest levels encouraged 😄"
      ],
      solution: {
        "index.html": "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Eric — Full-Stack Developer</title>\n</head>\n<body>\n  <header>\n    <h1>Eric builds the web</h1>\n    <nav>\n      <a href=\"#about\">About</a>\n      <a href=\"#projects\">Projects</a>\n      <a href=\"#contact\">Contact</a>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"about\">\n      <h2>About</h2>\n      <img src=\"https://picsum.photos/160\" alt=\"Portrait of Eric\" width=\"160\">\n      <p>I'm learning full-stack development by building — this page included.</p>\n    </section>\n\n    <section id=\"projects\">\n      <h2>Projects</h2>\n      <article>\n        <h3>Pricing table</h3>\n        <p>A semantic HTML pricing grid with spans and a footer note.</p>\n      </article>\n      <article>\n        <h3>Recipe page</h3>\n        <p>Figures, ordered steps and a nutrition table for midnight ramen.</p>\n      </article>\n    </section>\n\n    <h2>Skills</h2>\n    <table>\n      <thead>\n        <tr><th>Skill</th><th>Level</th></tr>\n      </thead>\n      <tbody>\n        <tr><td>HTML</td><td>Certified 🎓</td></tr>\n        <tr><td>CSS</td><td>Learning</td></tr>\n        <tr><td>JavaScript</td><td>Next up</td></tr>\n      </tbody>\n    </table>\n\n    <section id=\"contact\">\n      <h2>Contact</h2>\n      <form>\n        <label for=\"email\">Your email</label>\n        <input id=\"email\" type=\"email\" required>\n\n        <label for=\"msg\">Message</label>\n        <textarea id=\"msg\" rows=\"4\"></textarea>\n\n        <button>Send</button>\n      </form>\n    </section>\n  </main>\n\n  <footer>&copy; 2026 Eric — hand-coded with zero frameworks.</footer>\n</body>\n</html>\n"
      }
    }
  ]
});
