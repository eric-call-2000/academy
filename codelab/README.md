# ⚡ CodeLab — Full-Stack Engineer Path

Your own Codecademy: a **catalog of full-size courses** where you learn full-stack development by writing real code in the browser, checkpoint by checkpoint — built to work great on your phone.

**8 courses · ~55 hours · 228 items and growing** (each item is a checkpoint-graded coding lesson, a quiz, or a guided project). Courses lazy-load, so the app opens instantly even as the catalog grows.

## The catalog

**Hours describe the material that is actually in the files.** The validator models each
item at 10 min (30 for a project, 5 for a quiz) and **fails the build if a course
advertises more than 2× what it holds** — so these numbers cannot drift back into fiction.

The three remaining seed courses also carry a **target**: the Codecademy-length they are aimed at
(Learn HTML ≈ 9h, Learn CSS 14h, Learn JavaScript 17h, Intermediate JS 15h, Node 5h per
their catalog listings). Ambition lives in `targetHours`, which is never advertised as
material. When a seed course is filled out, raise its `hours` to meet the target and drop
`targetHours` from `courses.js`.

| # | Course | Hours | Status |
|---|--------|-------|--------|
| 1 | 🧱 **Learn HTML** | ~10h | ✅ Full — 7 units, 44 items: structure, text/links/images, tables, forms, semantics & accessibility, media, 3 final projects |
| 2 | 🎨 **Learn CSS** | ~11h | ✅ Full — 7 units, 44 items: selectors & cascade, typography, box model, positioning, colors, motion/animations, 2 final projects |
| 3 | 📐 **Responsive Design & Layout** | ~6h | ✅ Full — 6 units, 30 items: flexbox foundations & deep dive (grow/shrink/basis), CSS Grid (areas, auto-fit + minmax), media queries & mobile-first, fluid units (clamp!), flexible media, 2 final projects incl. a responsive dashboard |
| 4 | ⚡ **Learn JavaScript** | ~14h | ✅ Full — 8 units, 50 items: basics, arrays & objects, conditionals & logic, functions deep dive (closures!), loops, strings & numbers toolbox, objects & sorting, 3 final projects incl. a text-adventure engine and a quiz engine |
| 5 | 🖱️ **Building Interactive Websites** | ~8h | ✅ Full — 8 units, 40 items: DOM selection & creation, traversal & dataset, events in depth (delegation!), forms & live validation, hand-built components (tabs, modal, accordion), the state→render loop, timers & rAF, 3 projects incl. a carousel and a memory game |
| 6 | 📡 Async JavaScript & APIs | ~2h *(target 6h)* | 🌱 Seed unit live — 7 items; expanding |
| 7 | 🖥️ Back-End Foundations | ~2h *(target 8h)* | 🌱 Seed unit live — 7 items; expanding |
| 8 | 🚀 Full-Stack Capstone | ~2h *(target 6h)* | 🌱 Seed unit live — 6 items; expanding |

**208 of the 228 items sit in the five full courses.** The three seed courses — Async, Back-End and the Capstone — hold 20 between them: real, complete lessons, just one unit deep so far. Responsive Design was the fourth until wave 5 filled it out to six units.

Every course has its own units, per-unit **cheatsheets**, **quizzes** (80% to pass), **guided projects**, and a **certificate** on completion — plus a whole-path certificate when everything's done.

## The experience (Codecademy-style)

Each coding lesson is a 3-pane workspace — **Learn** (narrative + numbered checkpoints), **Code** (real editor: file tabs, syntax highlighting, mobile coding-keys bar), **Result** (live preview + console + check results). Press **Run**: your code executes in a sandbox and each checkpoint turns ✓/✕ with a specific error message. Stuck? Sequential **hints**, then **view solution**.

- **HTML/CSS/DOM lessons** run in a sandboxed `<iframe>` — the page you build *is* the preview.
- **JS & backend lessons** run in a Web Worker — infinite loops can't freeze the app; they time out politely.
- Checkpoints can grade computed styles, the stylesheet **as written** (`T.decl`/`T.sheet`), `@media`/`@keyframes` rules, DOM structure, simulated clicks/typing/submits, console output, and function behavior.
- Code **autosaves** per lesson per profile; XP and 🔥 streaks track daily work.

## 🔗 Connected to the Academy app

Hosted on the same origin as [Academy](https://github.com/eric-call-2000/academy) (e.g. `…github.io/academy/` + `…github.io/academy/codelab/`), the two apps **share profiles automatically**: CodeLab records completed items, XP and streaks into Academy's store (`academy_users_v1`) as track `fullstack`, and Academy's picker card shows live progress. No backend, no accounts — same-origin localStorage.

## Run it

- **Hosted**: serve the folder from any static host (GitHub Pages included — `pages.yml` workflow deploys `main` when this lives in its own repo).
- **Locally**: `node server.js` → http://localhost:5180
- **On your phone**: open the URL → share → **Add to Home Screen**.

## File layout

```
codelab/
├── index.html            # boots the engine (unit files lazy-load)
├── courses.js            # the catalog: metadata + which files each course loads
├── core.js               # course registry (defineCourse / addUnit)
├── editor.js             # mobile code editor + syntax highlighting
├── runner.js             # sandbox runner + checkpoint grader (worker/iframe)
├── app.js                # screens: profiles → catalog → course → lesson
├── styles.css            # mobile-first UI
├── html/u1.js … u7.js    # Learn HTML units
├── css/u1.js … u7.js     # Learn CSS units
├── resp/ js/ dom/ async/ srv/ cap/   # the other courses' units
├── server.js, manifest.webmanifest, icons/, .nojekyll
└── tools/validate.js     # runs EVERY lesson's solution in real Chromium
```

## Adding content

**A lesson** — append to a unit's `lessons` array. Ids must start with the course prefix (`html-…`), and bump the course's `items` count in `courses.js`:

```js
{
  id: "html-u2-9", title: "…", kind: "web",        // "web" | "js" | "quiz"
  chip: "HTML", xp: 15, mins: 10,                   // project: true for projects
  brief: "Markdown-ish teaching text.",
  steps: [{ text: "Do X.", test: "T.expect(T.$('h1'), 'No h1 yet.');" }],
  files: [{ name: "index.html", content: "…starter…" }],
  hints: ["…"], solution: { "index.html": "…passes every step…" }
}
```

**A unit** — new file calling `window.CODELAB.addUnit("courseId", {…})`, listed in that course's `files` in `courses.js`.

**A course** — `defineCourse({...})` in `courses.js` + a folder of unit files.

**Always validate**:

```bash
npm install     # once — pulls playwright-core, downloads no browsers
npm run validate
```

It boots the app, checks manifest counts, id prefixes and advertised hours, runs every
solution (must pass) and every starter (must not), and smoke-tests the phone UI including
the Academy store sync. Exit code is non-zero on any failure.

It drives a browser you already have — Chrome, then Edge — rather than downloading one,
since Smart App Control blocks unsigned binaries here. Set `CHROMIUM_PATH` to point it
somewhere else.
