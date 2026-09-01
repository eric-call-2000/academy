/* ============================================================
   CodeLab — course catalog manifest
   ------------------------------------------------------------
   Each course lists the unit files app.js lazy-loads when the
   course is opened. `items` = total lessons+quizzes+projects in
   those files (validated by tools/validate.js). `prefix` = the
   required prefix of every lesson id in the course ("html" →
   ids like "html-…"), used to count progress before loading.
   `hours` = the material actually in the files, at the ~15 min/item rate the
   built-out courses run at. `targetHours` (optional) = the Codecademy-length
   goal for courses still sitting at one unit; when a course is filled out,
   raise `hours` to meet it and drop `targetHours`.
   ============================================================ */

window.CODELAB.defineCourse({
  id: "html", prefix: "html", title: "Learn HTML",
  icon: "🧱", color: "#ff9600", level: "Beginner", hours: 10, items: 44,
  blurb: "Structure, text, tables, forms, semantic markup and accessibility — the full foundation of every website.",
  files: ["html/u1.js", "html/u2.js", "html/u3.js", "html/u4.js", "html/u5.js", "html/u6.js", "html/u7.js"]
});

window.CODELAB.defineCourse({
  id: "css", prefix: "css", title: "Learn CSS",
  icon: "🎨", color: "#a560e8", level: "Beginner", hours: 11, items: 44,
  blurb: "Selectors, the box model, colors, typography, effects, transitions and animation — design that ships.",
  files: ["css/u1.js", "css/u2.js", "css/u3.js", "css/u4.js", "css/u5.js", "css/u6.js", "css/u7.js"]
});

window.CODELAB.defineCourse({
  id: "resp", prefix: "resp", title: "Responsive Design & Layout",
  icon: "📐", color: "#2bb3a3", level: "Intermediate", hours: 6, items: 30,
  blurb: "Flexbox in depth, Grid areas, auto-fit galleries, media queries, clamp() and fluid type — one page that looks right on every screen.",
  files: ["resp/u1.js", "resp/u2.js", "resp/u3.js", "resp/u4.js", "resp/u5.js", "resp/u6.js"]
});

window.CODELAB.defineCourse({
  id: "js", prefix: "js", title: "Learn JavaScript",
  icon: "⚡", color: "#1cb0f6", level: "Beginner", hours: 14, items: 50,
  blurb: "The language of the web — variables, logic, functions, closures, loops, data and eight units of real programs.",
  files: ["js/u1.js", "js/u2.js", "js/u3.js", "js/u4.js", "js/u5.js", "js/u6.js", "js/u7.js", "js/u8.js"]
});

window.CODELAB.defineCourse({
  id: "dom", prefix: "dom", title: "Building Interactive Websites",
  icon: "🖱️", color: "#58cc02", level: "Intermediate", hours: 8, items: 40,
  blurb: "The DOM, events, forms, hand-built components, data-driven rendering and timers — eight units of truly interactive pages.",
  files: ["dom/u1.js", "dom/u2.js", "dom/u3.js", "dom/u4.js", "dom/u5.js", "dom/u6.js", "dom/u7.js", "dom/u8.js"]
});

window.CODELAB.defineCourse({
  id: "async", prefix: "async", title: "Async JavaScript & APIs",
  icon: "📡", color: "#f25f9c", level: "Intermediate", hours: 6, items: 30,
  blurb: "Promises, async/await, fetch, error handling, POST/PUT/DELETE, debounce and optimistic UI — talk to servers like every real web app.",
  files: ["async/u1.js", "async/u2.js", "async/u3.js", "async/u4.js", "async/u5.js", "async/u6.js"]
});

window.CODELAB.defineCourse({
  id: "srv", prefix: "srv", title: "Back-End Foundations",
  icon: "🖥️", color: "#6c5ce7", level: "Intermediate", hours: 8, items: 38,
  blurb: "Servers, routing, REST, queries, middleware, auth, validation and pagination — the other half of full-stack, one honest function at a time.",
  files: ["srv/u1.js", "srv/u2.js", "srv/u3.js", "srv/u4.js", "srv/u5.js", "srv/u6.js", "srv/u7.js", "srv/u8.js"]
});

window.CODELAB.defineCourse({
  id: "test", prefix: "test", title: "Testing Fundamentals",
  icon: "🧪", color: "#e11d48", level: "Intermediate", hours: 9, items: 40,
  blurb: "How do you know it works? Assertions, a test runner you build yourself, TDD, test doubles, async and DOM testing, coverage — and suites graded on whether they catch real bugs.",
  files: ["test/u1.js", "test/u2.js", "test/u3.js", "test/u4.js", "test/u5.js", "test/u6.js", "test/u7.js", "test/u8.js"]
});

window.CODELAB.defineCourse({
  id: "cap", prefix: "cap", title: "Full-Stack Capstone",
  icon: "🚀", color: "#f59e0b", level: "Advanced", hours: 6, items: 28,
  blurb: "Put it all together — client and server in one page, optimistic UI, import/export, accessibility, and NoteStream: your portfolio app.",
  files: ["cap/u1.js", "cap/u2.js", "cap/u3.js", "cap/u4.js", "cap/u5.js", "cap/u6.js"]
});

window.CODELAB.defineCourse({
  id: "sec", prefix: "sec", title: "Web Security Basics",
  icon: "🛡️", color: "#dc2626", level: "Intermediate", hours: 7, items: 33,
  blurb: "Break your own app, then defend it: XSS you can watch fire, escaping and sanitizing, injection, secrets in shipped source, auth and password storage, and the security headers that harden what ships.",
  files: ["sec/u1.js", "sec/u2.js", "sec/u3.js", "sec/u4.js", "sec/u5.js", "sec/u6.js", "sec/u7.js"]
});

window.CODELAB.defineCourse({
  id: "ship", prefix: "ship", title: "Deploying Your App",
  icon: "🛰️", color: "#0891b2", level: "Intermediate", hours: 8, items: 35,
  blurb: "From localhost to live: how a static host resolves URLs, env vars and builds, a real Cloudflare Worker with CORS, DNS, and shipping, breaking and rolling back.",
  files: ["ship/u1.js", "ship/u2.js", "ship/u3.js", "ship/u4.js", "ship/u5.js", "ship/u6.js", "ship/u7.js"]
});

// Backend Specialist Track
window.CODELAB.defineCourse({
  id: "nodejs", prefix: "nodejs", title: "Node.js Deep Dive",
  icon: "⚡", color: "#68a063", level: "Advanced", hours: 10, items: 36,
  blurb: "Event loop, streams, buffers, file system, modules, npm ecosystem, error handling, debugging, performance, and clustering — production Node.js patterns.",
  files: ["nodejs/u1.js", "nodejs/u2.js", "nodejs/u3.js", "nodejs/u4.js", "nodejs/u5.js", "nodejs/u6.js"]
});

window.CODELAB.defineCourse({
  id: "db", prefix: "db", title: "Database Mastery",
  icon: "🗄️", color: "#eab308", level: "Advanced", hours: 12, items: 42,
  blurb: "SQL fundamentals, database design, normalization, indexes, migrations, NoSQL basics, ORM patterns, transactions, and performance tuning — the data layer mastered.",
  files: ["db/u1.js", "db/u2.js", "db/u3.js", "db/u4.js", "db/u5.js", "db/u6.js", "db/u7.js"]
});

window.CODELAB.defineCourse({
  id: "api", prefix: "api", title: "Advanced API Design",
  icon: "🔌", color: "#8b5cf6", level: "Advanced", hours: 10, items: 38,
  blurb: "REST best practices, GraphQL fundamentals, API versioning, rate limiting, caching strategies, pagination, filtering, and documentation — production-grade APIs.",
  files: ["api/u1.js", "api/u2.js", "api/u3.js", "api/u4.js", "api/u5.js", "api/u6.js"]
});

window.CODELAB.defineCourse({
  id: "auth", prefix: "auth", title: "Authentication & Security",
  icon: "🔐", color: "#ef4444", level: "Advanced", hours: 9, items: 36,
  blurb: "Password hashing, JWT implementation, OAuth 2.0 flows, session management, CSRF protection, CORS configuration, security headers, and building secure auth systems.",
  files: ["auth/u1.js", "auth/u2.js", "auth/u3.js", "auth/u4.js", "auth/u5.js", "auth/u6.js"]
});

// DevOps/Engineering Track
window.CODELAB.defineCourse({
  id: "git", prefix: "git", title: "Git & Version Control Mastery",
  icon: "📦", color: "#f97316", level: "Intermediate", hours: 8, items: 32,
  blurb: "Git fundamentals, branching strategies (Gitflow, trunk-based), collaboration workflows, PRs, code review, conflict resolution, Git hooks, and team Git practices.",
  files: ["git/u1.js", "git/u2.js", "git/u3.js", "git/u4.js", "git/u5.js"]
});

window.CODELAB.defineCourse({
  id: "cicd", prefix: "cicd", title: "CI/CD Pipelines",
  icon: "🔄", color: "#06b6d4", level: "Advanced", hours: 10, items: 38,
  blurb: "CI concepts, GitHub Actions workflows, automated testing, linting, builds, pipeline stages, artifact management, environment-specific deployments, and rollback strategies.",
  files: ["cicd/u1.js", "cicd/u2.js", "cicd/u3.js", "cicd/u4.js", "cicd/u5.js", "cicd/u6.js"]
});

window.CODELAB.defineCourse({
  id: "docker", prefix: "docker", title: "Docker & Containers",
  icon: "🐳", color: "#2563eb", level: "Advanced", hours: 11, items: 42,
  blurb: "Container concepts, Dockerfile best practices, multi-stage builds, layer caching, Docker Compose, networking, volumes, container orchestration basics, and security in containers.",
  files: ["docker/u1.js", "docker/u2.js", "docker/u3.js", "docker/u4.js", "docker/u5.js", "docker/u6.js", "docker/u7.js"]
});

window.CODELAB.defineCourse({
  id: "cloud", prefix: "cloud", title: "Cloud Platforms & Deployment",
  icon: "☁️", color: "#7c3aed", level: "Advanced", hours: 9, items: 36,
  blurb: "Cloud concepts (IaaS, PaaS, serverless), deployment strategies (blue-green, canary, rolling), environment variables, configuration management, monitoring, logging, cost optimization, and disaster recovery.",
  files: ["cloud/u1.js", "cloud/u2.js", "cloud/u3.js", "cloud/u4.js", "cloud/u5.js", "cloud/u6.js"]
});
