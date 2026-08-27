# ⚡ CodeLab — Full-Stack Engineer Path

Your own Codecademy: a **catalog of full-size courses** where you learn full-stack development by writing real code in the browser, checkpoint by checkpoint — built to work great on your phone.

**8 courses · ~69 hours · 304 items — the full path, complete** (each item is a checkpoint-graded coding lesson, a quiz, or a guided project). 251 coding lessons including 30 guided projects, 53 quizzes, 827 auto-graded checkpoints. Courses lazy-load, so the app opens instantly however big the catalog gets.

## The catalog

**Hours describe the material that is actually in the files.** The validator models each
item at 10 min (30 for a project, 5 for a quiz) and **fails the build if a course
advertises more than 2× what it holds** — so these numbers cannot drift back into fiction.
The model puts the catalog at **~65h**; the advertised ~69h is the same material at a
learner's pace rather than an author's.

Course sizes are aimed at real Codecademy course lengths (Learn HTML ≈ 9h, Learn CSS 14h,
Learn JavaScript 17h, Intermediate JS 15h, Node 5h per their catalog listings). No course
carries a `targetHours` any more: **every one of them is full-depth**, so the ambition and
the content are the same number. A new course starts with `targetHours` for its goal and an
honest `hours` for what it holds, then trades one for the other as it fills out.

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

**No seed courses remain.** Async, Back-End and the Capstone were the last three — one unit deep each until waves 6–8 filled them out, the same way wave 5 finished Responsive Design. Every hours figure above is backed by the items beside it.

Every course has its own units, per-unit **cheatsheets**, **quizzes** (80% to pass), **guided projects**, and a **certificate** on completion — plus a whole-path certificate when everything's done.

### A note on the length tell

The 53 quizzes originally had a measurable flaw: **the correct answer was also the longest choice 76% of the time**, because the correct option carried its own justification while the distractors were bare claims. That made "pick the wordiest option" a partly-working strategy, and it means every quiz score recorded before this was somewhat inflated.

A normalization pass fixed it across all 334 questions — the *claim* stays in the choice, the *justification* moved into `explain` (where it's shown after you answer anyway), and thin distractors were rewritten into fuller, specific misconceptions. The result:

| | Before | After |
|---|---|---|
| Correct answer is longest | 76% | **26%** (chance ≈ 25%) |
| Correct − mean distractor length | +27.5 chars | **+0.6 chars** |
| Answers objectively graded in Recall | 84 | **106** |

`tools/validate.js` now **fails the build** if any course drifts back above 40%, the same way the hours guard keeps the catalog honest.

Every one of the 334 rewritten questions was then re-audited independently for correctness: **zero broken answer keys, zero distractors that had drifted into being true.** The audit did surface a set of smaller defects, all since fixed — a worked example in one explain that computed the wrong result, two pairs of duplicate distractors, several overstatements, and answers that had become impossible to produce cold in review mode (an HTML-comment answer whose "right" text included invented filler, for instance, now asks for the syntax itself).

## The experience (Codecademy-style)

Each coding lesson is a 3-pane workspace — **Learn** (narrative + numbered checkpoints), **Code** (real editor: file tabs, syntax highlighting, mobile coding-keys bar), **Result** (live preview + console + check results). Press **Run**: your code executes in a sandbox and each checkpoint turns ✓/✕ with a specific error message. Stuck? Sequential **hints**, then **view solution**.

- **HTML/CSS/DOM lessons** run in a sandboxed `<iframe>` — the page you build *is* the preview.
- **JS & backend lessons** run in a Web Worker — infinite loops can't freeze the app; they time out politely.
- Checkpoints can grade computed styles, the stylesheet **as written** (`T.decl`/`T.sheet`), `@media`/`@keyframes` rules, DOM structure, simulated clicks/typing/submits, console output, and function behavior.
- Code **autosaves** per lesson per profile; XP and 🔥 streaks track daily work.

## 📲 Handoff — phone ↔ desktop

`localStorage` is per-origin **and per-device**, so your phone and your desktop are two stores that never see each other. There's no server, so nothing crosses on its own. **Handoff** makes the crossing manual but safe: copy a code from one device, paste it on the other.

- **What travels**: completions, XP, quiz scores, study days, and the whole Recall schedule — about **14 KB** for a full profile, small enough to paste into a note or message to yourself.
- **What doesn't**: saved lesson code. It's ~95% of the bytes and none of what gets stranded, and including it is what would make the whole flow impossible on a phone.

**Importing the same code twice does nothing.** That isn't a promise, it's a property the build tests: the merge is **idempotent** (re-import changes nothing), **commutative** (it doesn't matter which device you import into first), and **monotone** (completions, XP and study days can only go up). 400 random profile pairs are checked on every validation run.

How the tricky fields are handled:

| Field | Rule |
|---|---|
| Completions, skips, accepted answers | Set union — a lesson done anywhere is done |
| XP | Extended by the *delta*, never by the incoming total, so a repeat import adds zero |
| Quiz scores | Per-quiz max, exactly like a retake |
| **Streak** | Derived from a **set of study days**, not merged as a number |
| **Lifetime counters** | Kept **per device** and summed, so parallel work is neither lost nor double-counted |
| **Card schedules** | Ordered by evidence — see below |

**The streak is a day-set, not a count.** A count paired with an end-date can't be merged without inventing runs — max them and a run that died six days ago comes back as a live 30-day flame. Storing the days themselves means a 30-day desktop run plus one phone day is simply 31, and a run that already ended honestly collapses to 1.

**Card conflicts are resolved by evidence, not a coin flip.** It looks like there are no timestamps, but there are: `grade()` writes `dueDay = today + interval[box]`, so every record bounds its own last-graded day (`dueDay − interval[box]` … `dueDay − 1`). If one record's window is entirely later than the other's, it was *provably* graded more recently and wins outright. Only when the windows overlap is there no answer — and there the merge takes the **lower** box and **earlier** due date, because scheduling a card too early costs one extra review while scheduling it too late buries something you've genuinely forgotten for up to 90 days.

Nothing is written until a **preview** built by running the real merge, so what you're shown can't disagree with what happens — and the last merge is undoable.

### Where your work is stored

Two localStorage areas, deliberately separate:

- **`codelab_v1`** — progress: completions, XP, streak, quiz scores, review schedule. Small, written often.
- **`codelab_code_v1|<profile>|<lessonId>`** — your saved files, **one key per lesson**.

Code used to live inside `codelab_v1`, which meant the editor's 500 ms autosave rewrote *every profile and every lesson's files* to persist a few hundred bytes of typing — a write that got slower the more of the course you finished, which is exactly backwards. Splitting it costs a keystroke a couple of KB instead of a couple of hundred, and it isolates the failure: code is the bulk of the 5 MB origin budget, so when quota runs out it's code writes that fail while XP, streaks and the review schedule keep saving. Existing profiles migrate themselves on first load, moving each lesson only once its new key is safely written.

## 🧠 Recall — spaced repetition

Finishing a course is not the same as still knowing it in June. **Recall** turns the quiz bank into a review deck: a few cards a day, scheduled so each one comes back just before you'd forget it.

**A card is a quiz question with its four choices hidden.** That is the whole design decision: recognising an answer among four options is a far weaker test than producing it, and an SRS makes gameable items *worse* — a card you can guess gets promoted to a long interval and disappears.

This bank made that concrete. It shipped with the correct answer also being the longest choice **76% of the time**, so the quizzes partly measured string length. A [normalization pass](#a-note-on-the-length-tell) brought that down to **27%** (chance is 25%), and a validator gate now fails the build above 40% per course.

Of 334 questions, **328 work as free recall** (6 excluded automatically — questions that only mean something while their options are on screen). **106 have a single canonical answer short enough to type and grade objectively**; the rest are revealed and self-graded.

An answer only qualifies for typed grading if there's one right way to spell it. A choice like `alt="" — deliberately empty` is a value plus a gloss, so demanding it verbatim would fail someone who typed the value perfectly — those stay self-graded. That asymmetry is deliberate: a false *miss* on something you knew is exactly what makes a review tool feel rigged.

Those two accuracies are **reported separately and never merged** — typed answers are evidence, self-grading is a claim, and the gap between them is the only read you get on how generous you're being with yourself.

- **The ladder** is Leitner: `1 · 1 · 3 · 7 · 16 · 35 · 90` days. Right → up one box. Close → same box, re-spaced. Wrong → down two boxes and back tomorrow. Promote +1 / fail −2 puts break-even at about two right in three.
- **No XP.** All 5,255 XP in the app stays bolted to the 304 catalog items, so the star keeps meaning "material completed." Recall's reward is **🛡️ holding at 35+ days** — the one number here that goes *down* when you're genuinely forgetting.
- **It does bump the 🔥 streak** on a real session (5+ cards), so a 3-minute queue holds the flame on a day with no time to build. This changes what the flame means, from "I completed a lesson" to "I studied today" — flip `REVIEW_BUMPS_STREAK` in `app.js` to undo it.
- **No seeding, no invented dates.** `done[id]` is a bare boolean with no timestamp, so nothing is backfilled: an item with no schedule record simply hasn't been introduced yet. 10 new cards a day get **reserved** slots (not leftovers), which introduces the whole deck in ~33 days. Questions added in a future wave join on their own.
- **"Can't answer this one"** sets a card aside for good. Passing four regexes isn't proof a human can answer a question cold, and this converts that guess into measured data.
- **🎯 Practice from scratch** on any finished lesson reloads the *starter* files and stops saving, so re-solving is real work instead of re-reading your own saved answer.

`review.js` holds the scheduler, is DOM-free, and takes the profile as a parameter — so `tools/validate.js` requires it directly and simulates 400 days at four accuracy levels with no browser, gating the invariants (session cap, introduction cap, box range, a failed card never scheduled beyond tomorrow).

### 🎯 Code drills — reviewing what you can *write*

Cards review concepts. **Drills review production.** A drill reopens a finished lesson **from its starter files** and grades only the **first k+1 checkpoints**, where k rises as the item climbs its ladder:

- **box 0** — "make the first checkpoint pass." A minute of work.
- **box b** — the first b+1 checkpoints.
- **top box** — the whole lesson, rebuilt from nothing.

Grading a *single* checkpoint in isolation is impossible: the runner executes steps in order in one sandbox with state accumulating between them, and later steps click and type into what earlier steps built. A **prefix** is the largest unit that is both gradeable and adjustable — and it needs no new content, since all 827 checkpoints are already written and already validated.

- **Ladder** `1 · 3 · 10 · 30 · 75 · 180` days — heavier item, longer gaps.
- **One drill is offered per session, never queued.** A queue of 15-minute items is a chore, and chores get abandoned.
- **Chosen by unit heat**: the unit whose *cards* keep lapsing is the unit you get drilled on. That's the answer to "there's no per-checkpoint history" — the card tier generates unit-level failure data for free.
- **Walking away counts as a miss.** Otherwise the ladder only ever hears about your successes.
- **Hints cap the result at "close."** So does needing more than three runs.
- A failing Run only counts against you on `js` lessons. On `web` lessons Run **is** the preview button — counting it would pin two thirds of the pool at box 0 forever.
- Scratch work lives in `drillCode`, never `code`, so an interrupted drill resumes next time and **your saved solution is never touched**. The validator asserts exactly that, byte for byte.
- If a prefix turns out to be one the starter already satisfies, the drill **goes one deeper** instead of handing out a free pass.

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
├── review.js             # Recall: the spaced-repetition scheduler (pure, Node-testable)
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
