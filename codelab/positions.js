/* ============================================================
   CodeLab — job positions (requirement sheets)
   ------------------------------------------------------------
   A position is read exactly like a university degree audit:
     total    — credits needed overall
     min      — per-category floors
     required — courses that must be completed outright
   Required courses STACK: they are named AND their credits count
   toward `total` and toward their categories. There is one sheet
   per job title and every sheet is junior-level — seniority comes
   from shipped work and years, not from coursework.

   A learner never picks a track. Courses pay credits, credits
   accumulate, and positions unlock when all three tests pass. One
   course therefore advances several positions at once: finishing
   Testing Fundamentals moves QA, Backend and Full-Stack together.

   EIGHT-COURSE RULE: every sheet names at least 8 required courses
   (validate.js fails one that names fewer). A job title is a
   curriculum, not a credit count — the floors and `total` only
   decide the electives on top. `total` = required credits (stubs at
   their planned value) + ~3, i.e. room for one elective.

   HONESTY RULE: these thresholds are set against what a junior is
   actually screened on, NOT against what CodeLab happens to hold.
   Three of the seven sheets below are currently unreachable, and
   that is the point — the board reports the shortfall in credits
   so the gap is a number ("Operations is 6 credits short") rather
   than a vibe. Do not lower a floor to make a position light up.

   Role selection and thresholds are grounded in 2025–26 hiring
   data: full-stack is the largest single role (~27% of working
   developers) and backend second (~14%); QA automation is the
   lowest-barrier entry point; security postings grew fastest.
   ============================================================ */

window.CODELAB.definePosition({
  id: "fe", title: "Junior Frontend Developer",
  icon: "🖥️", color: "#58cc02",
  blurb: "Builds what people actually touch: semantic markup, responsive layout, and interactive pages that work on every screen.",
  screen: "HTML/CSS/JS depth, DOM work, responsive layout, and a page you can show.",
  total: 37,
  min: { fnd: 12, fe: 10 },
  required: ["html", "css", "resp", "js", "dom", "async", "test", "git"]
});

window.CODELAB.definePosition({
  id: "fs", title: "Junior Full-Stack Developer",
  icon: "🚀", color: "#f59e0b",
  blurb: "The largest single developer role. Owns a feature end to end — interface, endpoint, and the wiring between them.",
  screen: "One app you built on both sides, plus the judgement to know where a bug lives and what your code costs as data grows.",
  /* algo (How Code Scales) is required because junior screens still ask
     about big-O and hash maps. Its credits rise as tranches land, and the
     total rises with them: required + ~3. */
  total: 45,
  min: { fnd: 12, fe: 8, be: 8, integ: 1 },
  required: ["html", "css", "js", "algo", "dom", "async", "srv", "db", "test", "git", "cap"]
});

window.CODELAB.definePosition({
  id: "be", title: "Junior Backend Developer",
  icon: "⚙️", color: "#6c5ce7",
  blurb: "Extends REST endpoints, writes and optimises queries, handles auth and validation, and covers it with tests.",
  screen: "REST design, SQL you wrote yourself, auth and validation, tests that catch regressions, and the cost of your code as data grows.",
  /* algo: see the Full-Stack sheet. */
  total: 36,
  min: { be: 10, data: 3, qa: 4 },
  required: ["js", "algo", "async", "srv", "nodejs", "db", "test", "git", "sec"]
});

window.CODELAB.definePosition({
  id: "qa", title: "Junior QA Automation Engineer",
  icon: "🔬", color: "#e11d48",
  blurb: "The most accessible way into engineering. Decides whether a change is safe enough to release, and automates the answer.",
  screen: "Test design, automation code, API checks, and clear reporting on what broke and why.",
  total: 37,
  min: { qa: 5, be: 4, fnd: 6 },
  required: ["html", "js", "dom", "async", "srv", "test", "git", "debug"]
});

window.CODELAB.definePosition({
  id: "devops", title: "Junior DevOps Engineer",
  icon: "🛠️", color: "#0891b2",
  blurb: "Owns the path from a merged commit to running software — pipelines, containers, environments, and the rollback when it goes wrong.",
  screen: "Git fluency, a pipeline you configured, containers, and a deploy you have rolled back.",
  total: 42,
  min: { ops: 10, be: 6, qa: 4 },
  required: ["cli", "git", "js", "srv", "test", "ship", "cicd", "docker", "cloud"]
});

window.CODELAB.definePosition({
  id: "sec", title: "Junior Security Engineer",
  icon: "🛡️", color: "#dc2626",
  blurb: "Fastest-growing posting category. Finds the hole before someone else does, then closes it.",
  screen: "Exploiting and fixing XSS and injection, secrets handling, auth design, security headers.",
  total: 36,
  min: { sec: 6, be: 6, fnd: 8 },
  required: ["html", "js", "srv", "db", "sec", "auth", "cli", "git"]
});

window.CODELAB.definePosition({
  id: "data", title: "Junior Data Engineer",
  icon: "🗄️", color: "#eab308",
  blurb: "Models the data, moves it, and keeps the queries fast enough that everything built on top stays usable.",
  screen: "SQL depth, schema design and normalization, indexes, and pipelines that survive bad input.",
  total: 35,
  min: { data: 6, be: 6, fnd: 8 },
  required: ["js", "cli", "git", "db", "srv", "nodejs", "test", "etl"]
});
