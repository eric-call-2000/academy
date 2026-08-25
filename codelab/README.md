# ⚡ CodeLab — Full-Stack Engineer Path

Your own Codecademy: learn full-stack development by **writing real code in the browser**, checkpoint by checkpoint — built to work great on your phone.

**65 lessons across 9 units**: 47 auto-graded coding lessons, 9 quizzes, 9 guided projects (incl. a portfolio capstone), plus per-unit cheatsheets, a free-play sandbox, XP, streaks, and a printable certificate.

## The experience (Codecademy-style)

Every coding lesson is a 3-pane workspace — **Learn** (narrative + numbered checkpoints), **Code** (a real editor with file tabs, syntax highlighting, and a mobile coding-keys bar), and **Result** (live preview + console + check results). Press **Run**: your code executes in a sandbox and each checkpoint turns ✓ or ✕ with a specific error message. Stuck? Reveal **hints** one at a time, or view the **solution**. Finish a unit's lessons, pass its **quiz** (80%+), and ship its **project**.

- **HTML/CSS/DOM lessons** run in a sandboxed `<iframe>` — the page you build *is* the preview.
- **JS & backend lessons** run in a Web Worker — an infinite loop can't freeze the app; it just times out with a friendly message.
- Your code **autosaves per lesson, per profile** (localStorage). Progress, XP and streaks too.

## The path

| # | Unit | What you build |
|---|------|----------------|
| 1 | 🧱 Fundamentals of HTML | Pages, links, lists, forms → **About-Me page** |
| 2 | 🎨 Fundamentals of CSS | Selectors, box model, typography → **Profile card** |
| 3 | 📐 Flexbox, Grid & Responsive | Navbars, grids, media queries → **Responsive landing page** |
| 4 | ⚡ Fundamentals of JavaScript | Variables, logic, functions, loops → **FizzBuzz** |
| 5 | 🧩 Arrays, Objects & Iterators | map/filter/reduce, data shapes → **Inventory manager** |
| 6 | 🖱️ The DOM & Events | Select, create, listen → **Mood board & counter** |
| 7 | 📡 Async JS & APIs | Promises, async/await, fetch (mock API included) → **Team directory** |
| 8 | 🖥️ Back-End Foundations | Request→response, routing, REST, CRUD, status codes → **Todos API** |
| 9 | 🚀 Full-Stack Capstone | localStorage, state-driven UI, git/deploy quiz → **TaskMaster Pro** |

Front-end → back-end → connect the two, mirroring Codecademy's Full-Stack Engineer career path — adapted so every exercise runs 100% client-side (free static hosting, works offline-ish, nothing to install).

## 🔗 Connected to the Academy app

If CodeLab and [Academy](https://github.com/eric-call-2000/academy) are hosted on the same GitHub Pages origin (`https://<user>.github.io/codelab/` + `https://<user>.github.io/academy/`), they **share profiles automatically**:

- CodeLab reads/creates profiles in Academy's store (`academy_users_v1`) — pick the same person in both.
- Completed CodeLab lessons, XP and streaks sync into the Academy profile as track `fullstack`, so Academy's profile picker counts them in its totals.
- The Academy track picker can show a "Full-Stack Coding Lab ↗" card that links here (see the companion PR in the academy repo).

No backend, no accounts — same-origin localStorage does the work. (On different origins each app simply keeps its own progress.)

## Run it

- **Hosted**: enable GitHub Pages and visit the site — the included workflow (`.github/workflows/pages.yml`) deploys `main` automatically. If the first run can't enable Pages itself: repo **Settings → Pages → Source: GitHub Actions**, then re-run the workflow.
- **Locally**: `node server.js` → http://localhost:5180 (or just open `index.html`; JS lessons need the server/hosted version in some browsers).
- **On your phone**: open the Pages URL → share menu → **Add to Home Screen** for an app-like fullscreen experience (manifest + icons included).

## File layout

```
codelab/
├── index.html        # loads everything (add new unit <script> tags here)
├── styles.css        # app styles (mobile-first)
├── core.js           # curriculum registry (CODELAB.addUnit)
├── editor.js         # mobile code editor + syntax highlighting
├── runner.js         # sandbox runner + checkpoint grader (worker/iframe)
├── app.js            # screens, progress, XP/streaks, Academy sync
├── unit1-html.js … unit9-capstone.js   # the curriculum
├── server.js         # local preview server (port 5180)
├── manifest.webmanifest, icons/        # installable web app
└── tools/validate.js # runs every lesson's solution in real Chromium
```

## Adding a lesson

Append to a unit's `lessons` array (or create `unit10-….js` + a script tag):

```js
{
  id: "unique-id", title: "Lesson title", kind: "web",   // "web" | "js" | "quiz"
  chip: "HTML", xp: 15,                 // project: true for projects
  brief: "Markdown-ish intro (**bold**, `code`, blank-line paragraphs).",
  steps: [                              // checkpoints, graded in order
    { text: "Add an `<h1>`.", test: "T.expect(T.$('h1'), 'No <h1> yet.');" }
  ],
  files: [{ name: "index.html", content: "…starter…" }], // + styles.css / script.js
  hints: ["First hint", "Bigger hint"],
  solution: { "index.html": "…must pass every step…" },
  // mock: { "/api/thing": {...} }      // optional fake fetch endpoints
}
```

Checkpoint tests run **inside the sandbox** with the `T` helper API: `T.$`, `T.text`, `T.css`, `T.count`, `T.attr`, `T.decl`/`T.mediaDecl` (stylesheet-as-written), `T.click`, `T.type`, `T.submit`, `T.expect`, `T.eq`, `T.logged`, `T.sleep` — see `runner.js`.

**Validate your content** (needs Chromium + `npm i playwright-core` somewhere on `NODE_PATH`):

```
node tools/validate.js
```

It boots the app in headless Chromium, runs **every** lesson's solution (must pass all its checkpoints) and starter (must not), checks quiz shape, and smoke-tests the mobile UI.

## Roadmap ideas

React unit (component thinking is already seeded by the capstone's state→render pattern), SQL basics, TypeScript, accessibility deep-dive, spaced-repetition practice from missed checkpoints.
