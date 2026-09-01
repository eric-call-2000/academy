# CodeLab Architecture Diagram

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         CodeLab — Browser-Based Learning Platform          │
│                    Full-Stack Engineer Path (8 courses, ~69 hours)      │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                         Deployment Layer                                │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                    Static Hosting (No Backend)                   │   │
│  │  - GitHub Pages, Netlify, Vercel, or any static host            │   │
│  │  - No server required — pure client-side application            │   │
│  │  - Local development: node server.js → http://localhost:5180     │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                    Progressive Web App Features                   │   │
│  │  - manifest.webmanifest (Add to Home Screen)                     │   │
│  │  - Mobile-first responsive design                                 │   │
│  │  - Works offline after initial load                             │   │
│  │  - Optimized for phone keyboards and touch                       │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                    Same-Origin Integration                       │   │
│  │  - Shares profiles with Academy app (academy_users_v1 store)     │   │
│  │  - Progress syncs as track "fullstack"                          │   │
│  │  - No backend — localStorage only                               │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                         Application Architecture                        │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Entry Point (index.html)                                        │   │
│  │  - Boot screen → "Booting CodeLab… ⚡"                           │   │
│  │  - Loads core engine scripts in order:                           │   │
│  │    1. core.js (course registry)                                 │   │
│  │    2. review.js (spaced-repetition engine)                      │   │
│  │    3. shell.js (console/terminal)                               │   │
│  │    4. sync.js (profile handoff)                                 │   │
│  │    5. courses.js (catalog manifest)                             │   │
│  │    6. editor.js (code editor)                                   │   │
│  │    7. runner.js (sandbox execution)                             │   │
│  │    8. app.js (UI screens & routing)                             │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Course Catalog (courses.js)                                   │   │
│  │  8 courses defined with:                                        │   │
│  │  - id, prefix (for lesson IDs), title, icon, color               │   │
│  │  - level, hours, items (validated count)                        │   │
│  │  - blurb, files (unit files to lazy-load)                       │   │
│  │                                                                  │   │
│  │  Courses: html, css, resp, js, dom, async, srv, cap, test, sec, ship│   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Lazy Course Loading                                            │   │
│  │  - Unit files load only when course is first opened              │   │
│  │  - Prevents app bloat with 300+ lessons                         │   │
│  │  - Each unit file calls addUnit(courseId, {...})                │   │
│  │  - Prevents duplicate unit registration                         │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Course Content Structure                                       │   │
│  │  Course → Units → Lessons → Checkpoints                          │   │
│  │                                                                  │   │
│  │  Each lesson:                                                     │   │
│  │  - id (prefix + number), title, kind (web|js|quiz)               │   │
│  │  - chip, xp, mins, project flag                                  │   │
│  │  - brief (Markdown teaching text)                               │   │
│  │  - steps (checkpoint instructions + tests)                      │   │
│  │  - files (starter code per file)                                │   │
│  │  - hints (progressive help), solution (answer key)              │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

## Data Flow: Learning Session

```
┌─────────────────┐    1. Open App      ┌─────────────────┐
│   User Browser  │ ──────────────────> │  index.html     │
│   (Mobile/      │                    │  Boot Screen    │
│   Desktop)      │ <────────────────── │                 │
└─────────────────┘    2. Load Scripts  └─────────────────┘
         │
         │ 3. Initialize core systems
         │
         ▼
┌─────────────────┐    4. Load Profile  ┌─────────────────┐
│  Profile Screen │ ──────────────────> │  localStorage   │
│  (Create/       │                    │  codelab_v1     │
│   Select)       │ <────────────────── │  + Academy sync│
└─────────────────┘    5. Progress Data └─────────────────┘
         │
         │ 6. Select Course
         │
         ▼
┌─────────────────┐    7. Lazy Load     ┌─────────────────┐
│  Course Screen  │ ──────────────────> │  Unit Files    │
│  (List Units/   │    Unit Files      │  (html/u1.js…)  │
│   Progress)     │ <────────────────── │                 │
└─────────────────┘    8. Register Units└─────────────────┘
         │
         │ 9. Select Lesson
         │
         ▼
┌─────────────────┐
│  Lesson Workspace                                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  3-Pane Layout                                       │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐            │  │
│  │  │ Learn    │ │ Code     │ │ Result   │            │  │
│  │  │ (narrative│ │ (editor) │ │ (preview │            │  │
│  │  │ + steps) │ │ + tabs)  │ │ + console│            │  │
│  │  └──────────┘ └──────────┘ └──────────┘            │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────┘
         │
         │ 10. User edits code in editor
         │
         ▼
┌─────────────────┐    11. Autosave      ┌─────────────────┐
│  Code Editor    │ ──────────────────> │  localStorage   │
│  (Syntax Highlight│                    │  codelab_code_  │
│   + File Tabs)   │ <────────────────── │  v1|profile|id  │
└─────────────────┘    12. Save State    └─────────────────┘
         │
         │ 13. Press Run
         │
         ▼
┌─────────────────┐    14. Execute Code  ┌─────────────────┐
│  Runner System  │ ──────────────────> │  Sandbox        │
│  (runner.js)    │                    │  (Worker/       │
│                 │                    │   iframe)       │
└─────────────────┘                    └─────────────────┘
         │                                        │
         │                                        │ 15. Run checkpoint tests
         │                                        │    (T helper API)
         │                                        │
         ▼                                        ▼
┌─────────────────┐    16. Grade Results ┌─────────────────┐
│  Checkpoint    │ <────────────────── │  Test Harness   │
│  Evaluation    │    (✓/✕ per step)   │                 │
└─────────────────┘                    └─────────────────┘
         │
         │ 17. Show results in Result pane
         │
         ▼
┌─────────────────┐    18. All Pass?     ┌─────────────────┐
│  Completion     │ ──────────────────> │  Mark Complete  │
│  Logic          │                    │  + Award XP     │
└─────────────────┘                    └─────────────────┘
         │                                        │
         │                                        │ 19. Update localStorage
         │                                        │    + Academy sync
         │                                        │
         ▼                                        ▼
┌─────────────────┐                    ┌─────────────────┐
│  Next Lesson    │                    │  Course Complete│
│  or Quiz        │                    │  + Certificate  │
└─────────────────┘                    └─────────────────┘
```

## Core Systems Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         Core Engine Systems                              │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Course Registry (core.js)                                       │   │
│  │  - window.CODELAB global namespace                              │   │
│  │  - defineCourse({...}) — course metadata                         │   │
│  │  - addUnit(courseId, {...}) — unit registration                 │   │
│  │  - Prevents duplicate unit registration                        │   │
│  │  - Courses indexed by ID for fast lookup                        │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Code Editor (editor.js)                                         │   │
│  │  - Mobile-first <textarea> with syntax-highlighted <pre> overlay│   │
│  │  - File tabs (index.html, styles.css, script.js)               │   │
│  │  - Helper key bar (Tab, brackets, quotes for mobile)           │   │
│  │  - Syntax highlighting for JS, CSS, HTML                        │   │
│  │  - Autosave every 500ms to localStorage                        │   │
│  │  - Exports hl(code, lang) for cheatsheets                       │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Sandbox Runner (runner.js)                                     │   │
│  │  kind "web" → <iframe> sandbox (allow-scripts only)             │   │
│  │  - Assembles index.html + styles.css + script.js                │   │
│  │  - iframe IS the live preview                                    │   │
│  │  - Grader script runs after load via postMessage                │   │
│  │                                                                  │   │
│  │  kind "js" → Web Worker                                          │   │
│  │  - Safe against infinite loops (7s timeout)                    │   │
│  │  - Checkpoint code concatenated after learner code              │   │
│  │  - Can access top-level let/const bindings                       │   │
│  │                                                                  │   │
│  │  Common features:                                               │   │
│  │  - Console interception → streaming to UI                       │   │
│  │  - T helper API for checkpoint tests (DOM, styles, output)       │   │
│  │  - In-memory localStorage shim for sandboxed iframes             │   │
│  │  - Request header guard fix for CORS lessons                    │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Checkpoint Grader (T helper API)                               │   │
│  │  DOM helpers:                                                   │   │
│  │  - T.$(selector) → querySelector                                 │   │
│  │  - T.$$(selector) → querySelectorAll                             │   │
│  │  - T.text(selector) → textContent                                │   │
│  │  - T.val(selector) → input value                                │   │
│  │  - T.attr(selector, name) → attribute value                     │   │
│  │                                                                  │   │
│  │  Style helpers:                                                 │   │
│  │  - T.decl(selector, prop) → computed style                      │   │
│  │  - T.sheet() → stylesheet as written                            │   │
│  │                                                                  │   │
│  │  Structure helpers:                                              │   │
│  │  - T.count(selector) → element count                            │   │
│  │  - T.nth(selector, n) → nth element                              │   │
│  │                                                                  │   │
│  │  Console helpers:                                               │   │
│  │  - T.logContains(text) → console.log includes text               │   │
│  │  - T.expect(condition, message) → assertion                       │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Spaced Repetition Engine (review.js)                            │   │
│  │  Pure function, DOM-free (Node-testable)                        │   │
│  │                                                                  │   │
│  │  Leitner system:                                                 │   │
│  │  - Ladder: 1·1·3·7·16·35·90 days                                 │   │
│  │  - Right → up one box                                           │   │
│  │  - Close → same box, re-spaced                                   │   │
│  │  - Wrong → down two boxes, back tomorrow                         │   │
│  │                                                                  │   │
│  │  Card eligibility:                                               │   │
│  │  - Free recall (no multiple choice shown)                        │   │
│  │  - 106 typed-gradable answers (objective)                        │   │
│  │  - 222 self-graded answers (revealed after attempt)              │   │
│  │  - Excludes questions that require seeing choices               │   │
│  │                                                                  │   │
│  │  Session limits:                                                 │   │
│  │  - MAX_SESSION = 20 cards per day                               │   │
│  │  - NEW_PER_DAY = 10 reserved slots (not leftovers)             │   │
│  │  - SKIM_MS = 1200ms minimum for promotion                        │   │
│  │                                                                  │   │
│  │  Drills (code practice):                                        │   │
│  │  - Ladder: 1·3·10·30·75·180 days                                │   │
│  │  - Grades first k+1 checkpoints based on box                    │   │
│  │  - Chosen by unit heat (failing cards → drilled unit)           │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Profile Sync (sync.js)                                          │   │
│  │  Handoff between devices (phone ↔ desktop)                      │   │
│  │                                                                  │   │
│  │  Export:                                                         │   │
│  │  - Compresses profile to ~14KB base64 code                      │   │
│  │  - Includes: completions, XP, quiz scores, study days, schedule │   │
│  │  - Excludes: saved lesson code (95% of bytes, not critical)     │   │
│  │                                                                  │   │
│  │  Import:                                                         │   │
│  │  - Idempotent (re-import changes nothing)                       │   │
│  │  - Commutative (order doesn't matter)                           │   │
│  │  - Monotone (completions, XP, study days only increase)         │   │
│  │  - Preview before commit (undoable)                              │   │
│  │                                                                  │   │
│  │  Merge rules:                                                    │   │
│  │  - Completions/skips/answers: set union                          │   │
│  │  - XP: extended by delta (never by total)                       │   │
│  │  - Quiz scores: per-quiz max (like retake)                      │   │
│  │  - Streak: derived from study day set (not count)               │   │
│  │  - Lifetime counters: per-device, summed on merge              │   │
│  │  - Card schedules: resolved by evidence (timestamp inference)   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Academy Integration (app.js)                                    │   │
│  │  Same-origin localStorage sharing with Academy app                │   │
│  │                                                                  │   │
│  │  Sync direction:                                                 │   │
│  │  - CodeLab → Academy (academy_users_v1 store)                   │   │
│  │  - Track: "fullstack"                                            │   │
│  │  - Data: completed items, XP, streak, quiz scores                │   │
│  │  - Real-time updates on lesson completion                        │   │
│  │                                                                  │   │
│  │  Academy → CodeLab:                                              │   │
│  │  - Reads Academy profile on boot                                 │   │
│  │  - Merges with CodeLab progress                                 │   │
│  │  - Allows seamless switching between apps                       │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

## Storage Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         localStorage Structure                           │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  codelab_v1 (Main Profile Store)                                 │   │
│  │  - profiles: { [profileId]: { name, xp, streak, … } }           │   │
│  │  - activeProfile: profileId                                       │   │
│  │  - Per-profile:                                                  │   │
│  │    - done: { lessonId: true }                                    │   │
│  │    - skips: { lessonId: true }                                   │   │
│  │    - quizBest: { quizId: score }                                 │   │
│  │    - xp: total                                                  │   │
│  │    - streakDays: [YYYYMMDD, …]                                   │   │
│  │    - cards: { cardKey: { box, dueDay } }                         │   │
│  │    - drills: { lessonId: box }                                   │   │
│  │    - tombstones: { cardKey: true } (permanently excluded)        │   │
│  │  - deviceIds: { [deviceId]: { lifetimeCounters } }               │   │
│  │                                                                  │   │
│  │  Size: ~14KB for full profile (small enough for handoff)          │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  codelab_code_v1|<profileId>|<lessonId> (Lesson Code)            │   │
│  │  - One key per lesson per profile                                │   │
│  │  - Contains: { [fileName]: content }                             │   │
│  │  - Autosaved every 500ms on edit                                  │   │
│  │  - NOT included in handoff (95% of bytes, not critical)          │   │
│  │  - Isolated quota failure (code writes fail, progress saves)     │   │
│  │                                                                  │   │
│  │  Size: ~1-5KB per lesson (varies by code length)                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  codelab_device_v1 (Device Identification)                       │   │
│  │  - deviceId: "d-[random8chars]"                                 │   │
│  │  - Generated once per browser, persists across sessions           │   │
│  │  - Used for per-device lifetime counters (no double-counting)    │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  academy_users_v1 (Academy App Store)                             │   │
│  │  - Same-origin, separate app                                    │   │
│  │  - CodeLab writes progress as track "fullstack"                  │   │
│  │  - Structure: { [profileId]: { tracks: { fullstack: { … } } } }  │   │
│  │  - Academy picker card shows live CodeLab progress               │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Storage Strategy:                                                     │
│  - Separated progress vs code (performance + quota isolation)         │
│  - Per-profile code keys (isolation between learners)                │
│  - Device-specific IDs (accurate lifetime counters)                  │
│  - Same-origin sync with Academy (cross-app integration)             │
└─────────────────────────────────────────────────────────────────────────┘
```

## Course Content Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         Course Content Organization                      │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Course Catalog (courses.js)                                     │   │
│  │  ┌──────────────────────────────────────────────────────────┐  │   │
│  │  │ defineCourse({                                            │  │   │
│  │  │   id: "html", prefix: "html",                              │  │   │
│  │  │   title: "Learn HTML", icon: "🧱", color: "#ff9600",        │  │   │
│  │  │   level: "Beginner", hours: 10, items: 44,                │  │   │
│  │  │   blurb: "Structure, text, tables, forms...",               │  │   │
│  │  │   files: ["html/u1.js", "html/u2.js", …]                    │  │   │
│  │  │ })                                                          │  │   │
│  │  └──────────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Unit File (html/u1.js)                                          │   │
│  │  ┌──────────────────────────────────────────────────────────┐  │   │
│  │  │ window.CODELAB.addUnit("html", {                          │  │   │
│  │  │   id: "html-u1",                                           │  │   │
│  │  │   title: "Elements & Structure", icon: "🧱",             │  │   │
│  │  │   blurb: "Tags, attributes, nesting...",                   │  │   │
│  │  │   cheat: [                                                │  │   │
│  │  │     { h: "Anatomy of an element", lang: "html",           │  │   │
│  │  │       code: "<h1>My heading</h1>",                        │  │   │
│  │  │       note: "Opening tag → content → closing tag" }       │  │   │
│  │  │   ],                                                      │  │   │
│  │  │   lessons: [ … ]                                          │  │   │
│  │  │ })                                                        │  │   │
│  │  └──────────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Lesson Object                                                  │   │
│  │  ┌──────────────────────────────────────────────────────────┐  │   │
│  │  │ {                                                         │  │   │
│  │  │   id: "html-1",                                           │  │   │
│  │  │   title: "Your first HTML tags",                          │  │   │
│  │  │   kind: "web",  // "web" | "js" | "quiz"                 │  │   │
│  │  │   chip: "HTML", xp: 15, mins: 10, project: false,         │  │   │
│  │  │   brief: "Welcome to Learn HTML! Every page...",           │  │   │
│  │  │   steps: [                                                │  │   │
│  │  │     { text: "Add an <h1>...",                             │  │   │
│  │  │       test: "T.expect(T.$('h1'), 'No <h1> found...');" }  │  │   │
│  │  │   ],                                                      │  │   │
│  │  │   files: [                                                │  │   │
│  │  │     { name: "index.html",                                │  │   │
│  │  │       content: "<!DOCTYPE html>..." }                     │  │   │
│  │  │   ],                                                      │  │   │
│  │  │   hints: ["Tags come in pairs..."],                      │  │   │
│  │  │   solution: { "index.html": "..." }                       │  │   │
│  │  │ }                                                         │  │   │
│  │  └──────────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Course Statistics (Current Catalog):                                    │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Course   │ Units │ Items │ Hours │ Level        │              │   │
│  │  ─────────────────────────────────────────────────────────────  │   │
│  │  HTML     │   7   │  44   │  ~10  │ Beginner     │              │   │
│  │  CSS      │   7   │  44   │  ~11  │ Beginner     │              │   │
│  │  Resp     │   6   │  30   │  ~6   │ Intermediate │              │   │
│  │  JS       │   8   │  50   │  ~14  │ Beginner     │              │   │
│  │  DOM      │   8   │  40   │  ~8   │ Intermediate │              │   │
│  │  Async    │   6   │  30   │  ~6   │ Intermediate │              │   │
│  │  Server   │   8   │  38   │  ~8   │ Intermediate │              │   │
│  │  Capstone │   6   │  28   │  ~6   │ Advanced    │              │   │
│  │  Test     │   8   │  40   │  ~9   │ Intermediate │              │   │
│  │  Security │   7   │  33   │  ~7   │ Intermediate │              │   │
│  │  Deploy   │   7   │  35   │  ~8   │ Intermediate │              │   │
│  │  ─────────────────────────────────────────────────────────────  │   │
│  │  TOTAL    │  78   │  412   │  ~93  │              │              │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Item Types:                                                             │
│  - Coding lessons (web/js): ~80% of items, checkpoint-graded             │
│  - Quizzes: Multiple choice, 80% pass threshold, recall-eligible         │
│  - Guided projects: Extended lessons, 30min target, starter→solution     │
└─────────────────────────────────────────────────────────────────────────┘
```

## Validation & Testing System

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         Validation Pipeline                              │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  tools/validate.js (Node.js Script)                              │   │
│  │  ┌──────────────────────────────────────────────────────────┐  │   │
│  │  │ 1. Boot the app in headless browser (Playwright)          │  │   │
│  │  │   - Uses existing Chrome/Edge (no binary download)         │  │   │
│  │  │   - Checks CHROMIUM_PATH env var first                     │  │   │
│  │  │                                                          │  │   │
│  │  │ 2. Manifest validation                                    │  │   │
│  │  │   - Course item counts match actual lessons               │  │   │
│  │  │   - Lesson IDs use correct course prefix                  │  │   │
│  │  │   - Advertised hours within 2× of actual content          │  │   │
│  │  │                                                          │  │   │
│  │  │ 3. Lesson validation                                      │  │   │
│  │  │   - Every solution must pass all checkpoints             │  │   │
│  │  │   - Every starter must NOT pass (fails at least one)       │  │   │
│  │  │   - Quiz length tell analysis (correct answer not longest)│  │   │
│  │  │   - Runs in real Chromium browser                         │  │   │
│  │  │                                                          │  │   │
│  │  │ 4. Recall scheduler validation                           │  │   │
│  │  │   - Simulates 400 days at 4 accuracy levels               │  │   │
│  │   │   - Requires review.js directly (Node-testable)          │  │   │
│  │  │   - Checks invariants: session cap, box range, etc.       │  │   │
│  │  │                                                          │  │   │
│  │  │ 5. Profile merge validation                               │  │   │
│  │   │   - Tests 400 random profile pairs                        │  │   │
│  │   │   - Verifies idempotence, commutativity, monotonicity    │  │   │
│  │  │   - Checks drill isolation (doesn't touch saved code)     │  │   │
│  │  │                                                          │  │   │
│  │  │ 6. Phone UI smoke test                                    │  │   │
│  │  │   - Validates Academy store sync                          │  │   │
│  │  │   - Checks mobile viewport rendering                       │  │   │
│  │  └──────────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Validation Gates (Build Failures)                              │   │
│  │  ┌──────────────────────────────────────────────────────────┐  │   │
│  │  │ • Hours drift > 2× advertised                            │  │   │
│  │  │ • Lesson ID prefix mismatch                              │  │   │
│  │  │ • Solution fails any checkpoint                          │  │   │
│  │  │ • Starter passes all checkpoints (too easy)               │  │   │
│  │  │ • Quiz length tell > 40% (correct answer longest)         │  │   │
│  │  │ • Scheduler invariant violation (box range, etc.)         │  │   │
│  │  │ • Profile merge non-idempotent/commutative               │  │   │
│  │  └──────────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Quality Gates:                                                          │
│  - No false answer keys (audited independently)                         │
│  - No distractors that drifted into being true                           │
│  - Quiz length tell normalized (76% → 26%)                              │
│  - Hours figures backed by actual item count                            │
│  - All 827 checkpoints validated in real browser                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## User Interface Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         UI Screen Flow                                   │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Profile Selection Screen                                       │   │
│  │  - List of existing profiles (name, XP, streak)                 │   │
│  │  - "Create new profile" button                                  │   │
│  │  - Profile management (rename, delete, export)                  │   │
│  │  - Import profile code (handoff from other device)              │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Course Catalog Screen                                          │   │
│  │  - Grid of course cards (icon, title, progress bar)             │   │
│  │  - Overall path progress (XP, total items, streak)              │   │
│  │  - Recall deck access (cards due today, holding streak)        │   │
│  │  - Code drills access (unit heat map)                           │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Course Detail Screen                                           │   │
│  │  - Course header (icon, title, blurb, level)                    │   │
│  │  - Unit list (accordion, progress per unit)                     │   │
│  │  - Per-unit cheatsheet button                                   │   │
│  │  - Start course / resume button                                 │   │
│  │  - Certificate (on completion)                                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Lesson Workspace (3-Pane Layout)                               │   │
│  │  ┌──────────┬──────────┬──────────┐                           │   │
│  │  │ Learn    │ Code     │ Result   │                           │   │
│  │  │          │          │          │                           │   │
│  │  │ • Brief  │ • Editor │ • Preview │                           │   │
│  │  │ • Steps  │ • Tabs   │ • Console│                           │   │
│  │  │ • Hints  │ • Helper │ • Checks  │                           │   │
│  │  │          │ • Keys   │          │                           │   │
│  │  └──────────┴──────────┴──────────┘                           │   │
│  │                                                                  │   │
│  │  Bottom bar: Run button, checkpoint navigation, solution view   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Quiz Interface                                                 │   │
│  │  - Question display (Markdown + code block)                     │   │
│  │  - Answer input (typed or self-graded reveal)                   │   │
│  │  - Feedback (correct/incorrect + explanation)                   │   │
│  │  - Progress (question X of Y, score so far)                    │   │
│  │  - 80% pass threshold                                            │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Recall / Review Screen                                        │   │
│  │  - Card queue (due today, up to 20)                             │   │
│  │  - Free recall interface (no choices shown)                    │   │
│  │  - Typed answer field (for objective questions)                │   │
│  │  - Self-grade buttons (right/close/wrong)                       │   │
│  │  - "Can't answer this" (tombstone)                             │   │
│  │  - Session stats (accuracy, holding streak)                     │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Cheatsheet Viewer                                              │   │
│  │  - Per-unit reference cards                                     │   │
│  │  - Syntax examples with explanations                            │   │
│  │  - Copyable code blocks                                         │   │
│  │  - Syntax highlighted (uses editor.hl())                        │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

## Mobile-First Design Features

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         Mobile Optimization                              │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Code Editor Mobile Adaptations                                 │   │
│  │  - <textarea> (reliable on all phone keyboards)                  │   │
│  │  - Syntax-highlighted <pre> overlay (behind textarea)           │   │
│  │  - Helper key bar: Tab, { }, ( ), [ ], < >, " ", ' ', ` `, ;    │   │
│  │  - Auto-close brackets/quotes                                    │   │
│  │  - Tab key inserts 2 spaces (no raw tab character)              │   │
│  │  - File tabs optimized for touch targets                         │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Touch-Optimized UI                                             │   │
│  │  - Large tap targets (44px minimum)                            │   │
│  │  - Bottom navigation / action bars (thumb zone)                 │   │
│  │  - Swipe gestures for lesson navigation                         │   │
│  │  - Haptic feedback on checkpoint completion                     │   │
│  │  - Viewport meta: user-scalable=no (prevent zoom on focus)       │   │
│  │  - viewport-fit=cover (safe area for notched phones)              │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Performance Optimizations                                      │   │
│  │  - Lazy course loading (unit files load on-demand)               │   │
│  │  - Code isolated from progress (smaller writes, faster saves)    │   │
│  │  - Debounced autosave (500ms)                                   │   │
│  │  - Web Worker for JS lessons (non-blocking)                    │   │
│  │  - Timeout protection (7s watchdog)                             │   │
│  │  - Minimal DOM manipulations (efficient rendering)               │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                   │                                     │
│                                   ▼                                     │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  PWA Features                                                    │   │
│  │  - manifest.webmanifest (Add to Home Screen)                    │   │
│  │  - Apple mobile web app meta tags                               │   │
│  │  - Theme color (#0ea5e9)                                         │   │
│  │  - Icons (192x192, 512x512)                                      │   │
│  │  - .nojekyll (GitHub Pages compatibility)                       │   │
│  │  - Works offline after initial load                             │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

## File Structure

```
codelab/
├── index.html              # Entry point, loads core scripts
├── manifest.webmanifest    # PWA manifest
├── server.js               # Local dev server (port 5180)
├── package.json            # Dependencies (playwright-core)
├── styles.css              # Mobile-first UI styles
├── icons/                  # PWA icons (192, 512)
├── .nojekyll               # GitHub Pages compatibility
│
├── Core Engine:
│   ├── core.js             # Course registry (defineCourse/addUnit)
│   ├── courses.js          # Course catalog (8 courses)
│   ├── app.js              # UI screens & routing
│   ├── editor.js           # Code editor + syntax highlighting
│   ├── runner.js           # Sandbox execution + grader
│   ├── review.js           # Spaced-repetition engine (pure)
│   ├── shell.js            # Console/terminal interface
│   └── sync.js             # Profile handoff (import/export)
│
├── Course Content (per course):
│   ├── html/               # Learn HTML (7 units, 44 items)
│   │   ├── u1.js … u7.js
│   ├── css/                # Learn CSS (7 units, 44 items)
│   │   ├── u1.js … u7.js
│   ├── resp/               # Responsive Design (6 units, 30 items)
│   │   ├── u1.js … u6.js
│   ├── js/                 # Learn JavaScript (8 units, 50 items)
│   │   ├── u1.js … u8.js
│   ├── dom/                # Interactive Websites (8 units, 40 items)
│   │   ├── u1.js … u8.js
│   ├── async/              # Async JavaScript (6 units, 30 items)
│   │   ├── u1.js … u6.js
│   ├── srv/                # Back-End Foundations (8 units, 38 items)
│   │   ├── u1.js … u8.js
│   ├── cap/                # Full-Stack Capstone (6 units, 28 items)
│   │   ├── u1.js … u6.js
│   ├── test/               # Testing Fundamentals (8 units, 40 items)
│   │   ├── u1.js … u8.js
│   ├── sec/                # Web Security Basics (7 units, 33 items)
│   │   ├── u1.js … u7.js
│   └── ship/               # Deploying Your App (7 units, 35 items)
│       ├── u1.js … u7.js
│
├── Tools:
│   ├── validate.js         # Main validation script (Playwright)
│   ├── validate-unit.js    # Per-unit validation helper
│   ├── course-research/    # Course research tools
│   └── shots/              # Screenshots for documentation
│
└── .github/
    └── workflows/
        └── pages.yml        # GitHub Pages deployment
```

## Key Design Decisions

1. **No backend architecture** - Pure client-side, static hosting only
2. **localStorage for persistence** - Per-profile progress + isolated code storage
3. **Lazy course loading** - Unit files load on-demand, instant app boot
4. **Web Worker + iframe sandboxes** - Safe code execution, infinite loop protection
5. **Free-recall spaced repetition** - Hides multiple choice, tests production knowledge
6. **Profile handoff via export code** - Manual but safe cross-device sync
7. **Same-origin Academy integration** - Cross-app progress sharing without backend
8. **Mobile-first editor** - <textarea> + overlay, reliable on all phone keyboards
9. **Leitner not SM-2** - Simpler 3-way outcome (right/close/wrong) fits quiz format
10. **Playwright-core validation** - Uses existing browser, no binary downloads

## Technology Stack Summary

**Frontend:**
- Vanilla JavaScript (no frameworks)
- HTML5 + CSS3 (mobile-first)
- Web Workers (JS lesson sandbox)
- iframes (web lesson sandbox)
- localStorage (persistence)
- PWA manifest (installable)

**Development:**
- Node.js (validation script)
- Playwright-core (browser automation)
- No build step (direct script loading)
- GitHub Actions (deployment)

**Deployment:**
- Static hosting (GitHub Pages, Netlify, Vercel)
- No server required
- Progressive Web App
- Same-origin cross-app integration

**Content:**
- 11 courses, 78 units, 412 items
- 827 auto-graded checkpoints
- 334 quiz questions (Recall deck)
- 30 guided projects
- ~93 hours of content
