# ⚡ CodeLab — Full-Stack Engineer Path

Your own Codecademy: a **catalog of full-size courses** where you learn full-stack development by writing real code in the browser, checkpoint by checkpoint — built to work great on your phone.

**8 courses · ~65 hours · 304 items — the full path, complete** (each item is a checkpoint-graded coding lesson, a quiz, or a guided project). 251 coding lessons including 30 guided projects, 53 quizzes, 827 auto-graded checkpoints. Courses lazy-load, so the app opens instantly however big the catalog gets.

## The catalog

Course sizes mirror real Codecademy course lengths (Learn HTML ≈ 9h, Learn CSS 14h, Learn JavaScript 17h, Intermediate JS 15h, Node 5h per their catalog listings). **Every course is now full-depth** — front end to back end to capstone:

| # | Course | Hours | Status |
|---|--------|-------|--------|
| 1 | 🧱 **Learn HTML** | ~10h | ✅ Full — 7 units, 44 items: structure, text/links/images, tables, forms, semantics & accessibility, media, 3 final projects |
| 2 | 🎨 **Learn CSS** | ~11h | ✅ Full — 7 units, 44 items: selectors & cascade, typography, box model, positioning, colors, motion/animations, 2 final projects |
| 3 | 📐 **Responsive Design & Layout** | ~6h | ✅ Full — 6 units, 30 items: flexbox foundations & deep dive (grow/shrink/basis), CSS Grid (areas, auto-fit + minmax), media queries & mobile-first, fluid units (clamp!), flexible media, 2 final projects incl. a responsive dashboard |
| 4 | ⚡ **Learn JavaScript** | ~14h | ✅ Full — 8 units, 50 items: basics, arrays & objects, conditionals & logic, functions deep dive (closures!), loops, strings & numbers toolbox, objects & sorting, 3 final projects incl. a text-adventure engine and a quiz engine |
| 5 | 🖱️ **Building Interactive Websites** | ~8h | ✅ Full — 8 units, 40 items: DOM selection & creation, traversal & dataset, events in depth (delegation!), forms & live validation, hand-built components (tabs, modal, accordion), the state→render loop, timers & rAF, 3 projects incl. a carousel and a memory game |
| 6 | 📡 **Async JavaScript & APIs** | ~6h | ✅ Full — 6 units, 30 items: callbacks → promises → async/await, fetch & JSON, error handling (`res.ok`, try/catch, loading & error UI), POST/PUT/DELETE, async patterns (Promise.all, debounce, timeout & retry), 2 projects incl. a CRUD client |
| 7 | 🖥️ **Back-End Foundations** | ~8h | ✅ Full — 8 units, 38 items: request→response, routing & status codes, the data layer & full REST resource, query params & headers, middleware chains, token auth, validation/error envelopes/pagination, 2 API projects incl. a blog API with auth |
| 8 | 🚀 **Full-Stack Capstone** | ~6h | ✅ Full — 6 units, 28 items: TaskMaster (state-driven + localStorage), client ↔ server in one page, optimistic UI with rollback, JSON export/import & autosave, accessibility polish, and **NoteStream** — the full-stack finale |

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
├── html/u1.js … u7.js    # Learn HTML units          (44 items)
├── css/u1.js … u7.js     # Learn CSS units           (44 items)
├── resp/u1.js … u6.js    # Responsive Design         (30 items)
├── js/u1.js … u8.js      # Learn JavaScript          (50 items)
├── dom/u1.js … u8.js     # Interactive Websites      (40 items)
├── async/u1.js … u6.js   # Async JavaScript & APIs   (30 items)
├── srv/u1.js … u8.js     # Back-End Foundations      (38 items)
├── cap/u1.js … u6.js     # Full-Stack Capstone       (28 items)
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

**Always validate**: `node tools/validate.js` (needs `playwright-core` + Chromium) — it boots the app, checks manifest counts and id prefixes, runs every solution (must pass) and starter (must not), and smoke-tests the phone UI.
