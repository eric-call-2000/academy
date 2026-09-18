/* ============================================================
   CodeLab — course catalog manifest
   ------------------------------------------------------------
   Each course lists the unit files app.js lazy-loads when the
   course is opened. `items` = total lessons+quizzes+projects in
   those files (validated by tools/validate.js). `prefix` = the
   required prefix of every lesson id in the course ("html" →
   ids like "html-…"), used to count progress before loading.
   `hours` = the material actually in the files, at the ~15 min/item rate the
   built-out courses run at.

   `credits` / `categories` — what completing the course pays into the
   transcript. credits ≈ modelled hours ÷ CREDIT_HOURS, and `categories`
   APPORTIONS that number across the categories the course serves: the
   split must sum back to `credits` exactly. validate.js re-derives both
   from the lessons actually present, so neither can be inflated without
   writing lessons. See core.js for the model.

   `stub: true` — on the roadmap, no lessons written yet. Pays 0 credits and
   loads nothing; `plannedCredits`/`plannedCategories` record what it WOULD
   pay, which is how the job board can name the courses that would close a
   gap instead of leaving a position mysteriously unreachable.
   ============================================================ */

window.CODELAB.defineCourse({
  id: "html", prefix: "html", title: "Learn HTML",
  icon: "🧱", color: "#ff9600", level: "Beginner", hours: 10, items: 44,
  credits: 5, categories: { fnd: 5 },
  blurb: "Structure, text, tables, forms, semantic markup and accessibility — the full foundation of every website.",
  files: ["html/u1.js", "html/u2.js", "html/u3.js", "html/u4.js", "html/u5.js", "html/u6.js", "html/u7.js"]
});

window.CODELAB.defineCourse({
  id: "css", prefix: "css", title: "Learn CSS",
  icon: "🎨", color: "#a560e8", level: "Beginner", hours: 11, items: 44,
  credits: 4, categories: { fnd: 3, fe: 1 },
  blurb: "Selectors, the box model, colors, typography, effects, transitions and animation — design that ships.",
  files: ["css/u1.js", "css/u2.js", "css/u3.js", "css/u4.js", "css/u5.js", "css/u6.js", "css/u7.js"]
});

window.CODELAB.defineCourse({
  id: "resp", prefix: "resp", title: "Responsive Design & Layout",
  icon: "📐", color: "#2bb3a3", level: "Intermediate", hours: 6, items: 30,
  credits: 3, categories: { fe: 3 },
  blurb: "Flexbox in depth, Grid areas, auto-fit galleries, media queries, clamp() and fluid type — one page that looks right on every screen.",
  files: ["resp/u1.js", "resp/u2.js", "resp/u3.js", "resp/u4.js", "resp/u5.js", "resp/u6.js"]
});

window.CODELAB.defineCourse({
  id: "js", prefix: "js", title: "Learn JavaScript",
  icon: "⚡", color: "#1cb0f6", level: "Beginner", hours: 14, items: 50,
  credits: 6, categories: { fnd: 6 },
  blurb: "The language of the web — variables, logic, functions, closures, loops, data and eight units of real programs.",
  files: ["js/u1.js", "js/u2.js", "js/u3.js", "js/u4.js", "js/u5.js", "js/u6.js", "js/u7.js", "js/u8.js"]
});

/* The first THEORY course: most of its time is concept lessons (predict,
   trace, order, explain) rather than code, which validate.js checks. */
window.CODELAB.defineCourse({
  id: "algo", prefix: "algo", title: "How Code Scales",
  icon: "📈", color: "#4f46e5", level: "Intermediate", hours: 9, items: 40,
  theory: true,
  credits: 5, categories: { fnd: 5 },
  blurb: "Why code that's fast on your laptop crawls on real data. Counting steps instead of timing, the doubling test, big-O as a language, what arrays and hash maps really cost, binary search and sorting, recursion and memoization, stacks, queues and graph search, and deciding under real constraints. A course about reasoning about cost, mostly theory: you predict, trace and explain before you write. Take it after Learn JavaScript.",
  files: ["algo/u1.js", "algo/u2.js", "algo/u3.js", "algo/u4.js", "algo/u5.js", "algo/u6.js", "algo/u7.js", "algo/u8.js"]
});

/* The second THEORY course, built in tranches; credits restate what's
   written so far and the sheets follow at completion. */
window.CODELAB.defineCourse({
  id: "web", prefix: "web", title: "How the Web Works",
  icon: "🌐", color: "#0ea5e9", level: "Intermediate", hours: 4, items: 15,
  theory: true, targetHours: 9,
  credits: 1, categories: { fnd: 1 },
  blurb: "What actually happens when you type a URL and press Enter. The parts of a URL and what an origin is, how DNS turns a name into an address, and how TCP and TLS open a private connection — counted in round trips, the way distance is really measured on the web. A theory course: you predict, trace and explain before you write. Take it after Async JavaScript & APIs.",
  files: ["web/u1.js", "web/u2.js", "web/u3.js"]
});

window.CODELAB.defineCourse({
  id: "dom", prefix: "dom", title: "Building Interactive Websites",
  icon: "🖱️", color: "#58cc02", level: "Intermediate", hours: 8, items: 40,
  credits: 4, categories: { fe: 4 },
  blurb: "The DOM, events, forms, hand-built components, data-driven rendering and timers — eight units of truly interactive pages.",
  files: ["dom/u1.js", "dom/u2.js", "dom/u3.js", "dom/u4.js", "dom/u5.js", "dom/u6.js", "dom/u7.js", "dom/u8.js"]
});

window.CODELAB.defineCourse({
  id: "async", prefix: "async", title: "Async JavaScript & APIs",
  icon: "📡", color: "#f25f9c", level: "Intermediate", hours: 6, items: 30,
  credits: 3, categories: { fe: 2, be: 1 },
  blurb: "Promises, async/await, fetch, error handling, POST/PUT/DELETE, debounce and optimistic UI — talk to servers like every real web app.",
  files: ["async/u1.js", "async/u2.js", "async/u3.js", "async/u4.js", "async/u5.js", "async/u6.js"]
});

window.CODELAB.defineCourse({
  id: "debug", prefix: "debug", title: "Debugging & Diagnosis",
  icon: "🐞", color: "#be123c", level: "Intermediate", hours: 8, items: 35,
  credits: 4, categories: { fnd: 1, qa: 3 },
  blurb: "Read the error before you touch the code: stack traces, reproducing a bug on purpose and isolating it, print debugging done well, breakpoints and the paused program, bugs that aren't in your JavaScript at all — then two real apps to fix. Take it after Async JavaScript & APIs.",
  files: ["debug/u1.js", "debug/u2.js", "debug/u3.js", "debug/u4.js", "debug/u5.js", "debug/u6.js", "debug/u7.js"]
});

window.CODELAB.defineCourse({
  id: "srv", prefix: "srv", title: "Back-End Foundations",
  icon: "🖥️", color: "#6c5ce7", level: "Intermediate", hours: 8, items: 38,
  credits: 4, categories: { be: 4 },
  blurb: "Servers, routing, REST, queries, middleware, auth, validation and pagination — the other half of full-stack, one honest function at a time.",
  files: ["srv/u1.js", "srv/u2.js", "srv/u3.js", "srv/u4.js", "srv/u5.js", "srv/u6.js", "srv/u7.js", "srv/u8.js"]
});

window.CODELAB.defineCourse({
  id: "test", prefix: "test", title: "Testing Fundamentals",
  icon: "🧪", color: "#e11d48", level: "Intermediate", hours: 9, items: 40,
  credits: 5, categories: { qa: 5 },
  blurb: "How do you know it works? Assertions, a test runner you build yourself, TDD, test doubles, async and DOM testing, coverage — and suites graded on whether they catch real bugs.",
  files: ["test/u1.js", "test/u2.js", "test/u3.js", "test/u4.js", "test/u5.js", "test/u6.js", "test/u7.js", "test/u8.js"]
});

window.CODELAB.defineCourse({
  id: "cap", prefix: "cap", title: "Full-Stack Capstone",
  icon: "🚀", color: "#f59e0b", level: "Advanced", hours: 6, items: 28,
  credits: 3, categories: { fe: 1, be: 1, integ: 1 },
  blurb: "Put it all together — client and server in one page, optimistic UI, import/export, accessibility, and NoteStream: your portfolio app.",
  files: ["cap/u1.js", "cap/u2.js", "cap/u3.js", "cap/u4.js", "cap/u5.js", "cap/u6.js"]
});

window.CODELAB.defineCourse({
  id: "sec", prefix: "sec", title: "Web Security Basics",
  icon: "🛡️", color: "#dc2626", level: "Intermediate", hours: 7, items: 33,
  credits: 4, categories: { sec: 3, be: 1 },
  blurb: "Break your own app, then defend it: XSS you can watch fire, escaping and sanitizing, injection, secrets in shipped source, auth and password storage, and the security headers that harden what ships.",
  files: ["sec/u1.js", "sec/u2.js", "sec/u3.js", "sec/u4.js", "sec/u5.js", "sec/u6.js", "sec/u7.js"]
});

window.CODELAB.defineCourse({
  id: "ship", prefix: "ship", title: "Deploying Your App",
  icon: "🛰️", color: "#0891b2", level: "Intermediate", hours: 8, items: 35,
  credits: 4, categories: { ops: 4 },
  blurb: "From localhost to live: how a static host resolves URLs, env vars and builds, a real Cloudflare Worker with CORS, DNS, and shipping, breaking and rolling back.",
  files: ["ship/u1.js", "ship/u2.js", "ship/u3.js", "ship/u4.js", "ship/u5.js", "ship/u6.js", "ship/u7.js"]
});

// Backend Specialist Track
window.CODELAB.defineCourse({
  id: "nodejs", prefix: "nodejs", title: "Node.js Deep Dive",
  icon: "⚡", color: "#68a063", level: "Advanced", hours: 7, items: 37,
  credits: 3, categories: { be: 3 },
  blurb: "Event loop, streams, buffers, file system, modules, npm ecosystem, error handling, debugging, performance, and clustering — production Node.js patterns.",
  files: ["nodejs/u1.js", "nodejs/u2.js", "nodejs/u3.js", "nodejs/u4.js", "nodejs/u5.js", "nodejs/u6.js"]
});

window.CODELAB.defineCourse({
  id: "db", prefix: "db", title: "Database Mastery",
  icon: "🗄️", color: "#eab308", level: "Advanced", hours: 6, items: 32,
  credits: 3, categories: { data: 3 },
  blurb: "SQL fundamentals, database design, normalization, indexes, migrations, NoSQL basics, ORM patterns, transactions, and performance tuning — the data layer mastered.",
  files: ["db/u1.js", "db/u2.js", "db/u3.js", "db/u4.js", "db/u5.js", "db/u6.js"]
});

window.CODELAB.defineCourse({
  id: "api", prefix: "api", title: "Advanced API Design",
  icon: "🔌", color: "#8b5cf6", level: "Advanced", stub: true,
  plannedCredits: 5, plannedCategories: { be: 5 },
  blurb: "REST best practices, GraphQL fundamentals, API versioning, rate limiting, caching strategies, pagination, filtering, and documentation — production-grade APIs.",
  files: []
});

window.CODELAB.defineCourse({
  id: "auth", prefix: "auth", title: "Authentication & Security",
  icon: "🔐", color: "#ef4444", level: "Advanced", hours: 9, items: 41,
  credits: 5, categories: { sec: 3, be: 2 },
  blurb: "How a server knows it's still you: server-side sessions and a hand-written Set-Cookie, cookie-jar rules, CSRF, HMAC signing, JWTs, OAuth 2.0 with PKCE, and second factors — built by hand against a simulated browser and identity provider, then applied in two capstone projects.",
  stepSolutions: "stepsol/auth.js",
  files: ["auth/u1.js", "auth/u2.js", "auth/u3.js", "auth/u4.js", "auth/u5.js", "auth/u6.js", "auth/u7.js", "auth/u8.js"]
});

// DevOps/Engineering Track
window.CODELAB.defineCourse({
  id: "cli", prefix: "cli", title: "The Command Line & Your Machine",
  icon: "⌨️", color: "#475569", level: "Beginner", hours: 6, items: 35,
  credits: 3, categories: { ops: 2, fnd: 1 },
  blurb: "The machine every other course quietly assumes you can drive. Paths and the filesystem, making and breaking files, reading them without an editor, pipes and redirection and exit codes, globs and the searching they unlock, environment variables and PATH and permissions — and finally programs of your own: a script with a shebang, an execute bit, and a place on PATH. Typed into a real terminal, graded on what actually happened.",
  files: ["cli/u1.js", "cli/u2.js", "cli/u3.js", "cli/u4.js", "cli/u5.js", "cli/u6.js", "cli/u7.js"]
});

window.CODELAB.defineCourse({
  id: "git", prefix: "git", title: "Git & Version Control",
  icon: "🌿", color: "#f97316", level: "Intermediate", hours: 8, items: 37,
  credits: 4, categories: { ops: 4 },
  blurb: "Undo for your whole project, typed into a real terminal: snapshots and the staging area, branches, merges and genuine conflicts, every way to undo — restore, reset, revert, stash, and the reflog that finds \"deleted\" commits — then rebase and a remote that rejects your push. Take it any time after Learn HTML; GitHub itself and pull requests are left to your real machine.",
  files: ["git/u1.js", "git/u2.js", "git/u3.js", "git/u4.js", "git/u5.js", "git/u6.js", "git/u7.js", "git/u8.js"]
});

/* Built on cisim.js: workflows are real editor tabs, a `git push` fires the
   pipeline, and every checkpoint grades the RUN (T.run/T.deployed/T.merged),
   never the YAML text. Composes the shell, Git and Docker engines. */
window.CODELAB.defineCourse({
  id: "cicd", prefix: "cicd", title: "CI/CD Pipelines",
  icon: "🔄", color: "#06b6d4", level: "Intermediate", hours: 3, items: 12,
  targetHours: 8,
  credits: 1, categories: { ops: 1 },
  blurb: "Automate the checklist you run before every merge. Write a real workflow, push, and watch the pipeline go green or red; gate merges on lint, test and build; run a matrix and cache dependencies. Every checkpoint grades what the pipeline actually did. Take it after Git, Testing and Docker.",
  files: ["cicd/u1.js", "cicd/u2.js", "cicd/u3.js"]
});

window.CODELAB.defineCourse({
  id: "docker", prefix: "docker", title: "Docker & Containers",
  icon: "🐳", color: "#2563eb", level: "Intermediate", hours: 8, items: 36,
  credits: 4, categories: { ops: 4 },
  blurb: "\"It works on my machine\" — so ship the machine. Images and containers, a Dockerfile you write and build, layers and the build cache, smaller and safer images, ports and networks, volumes that survive, and a Compose stack you repair. Orchestration and CI belong to later courses.",
  files: ["docker/u1.js", "docker/u2.js", "docker/u3.js", "docker/u4.js", "docker/u5.js", "docker/u6.js", "docker/u7.js", "docker/u8.js"]
});

window.CODELAB.defineCourse({
  id: "cloud", prefix: "cloud", title: "Cloud Platforms & Deployment",
  icon: "☁️", color: "#7c3aed", level: "Advanced", stub: true,
  plannedCredits: 4, plannedCategories: { ops: 4 },
  blurb: "Cloud concepts (IaaS, PaaS, serverless), deployment strategies (blue-green, canary, rolling), environment variables, configuration management, monitoring, logging, cost optimization, and disaster recovery.",
  files: []
});

// Quality & Data Track
window.CODELAB.defineCourse({
  id: "etl", prefix: "etl", title: "Data Pipelines & ETL",
  icon: "🚰", color: "#ca8a04", level: "Advanced", hours: 9, items: 40,
  credits: 4, categories: { data: 4 },
  blurb: "Getting data in without getting it wrong: CSV parsed by the RFC, encodings and chunked input, JSON Lines, types converted on purpose, bad rows quarantined with their reasons, schema drift and duplicates caught before loading, and pipelines that plan their tasks, retry safely and run for their logical date. Idempotent loads, incremental updates and history follow.",
  files: ["etl/u1.js", "etl/u2.js", "etl/u3.js", "etl/u4.js", "etl/u5.js", "etl/u6.js", "etl/u7.js", "etl/u8.js"]
});
