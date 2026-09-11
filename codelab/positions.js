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
  total: 20,
  min: { fnd: 12, fe: 10 },
  required: ["html", "css", "js", "dom"]
});

window.CODELAB.definePosition({
  id: "fs", title: "Junior Full-Stack Developer",
  icon: "🚀", color: "#f59e0b",
  blurb: "The largest single developer role. Owns a feature end to end — interface, endpoint, and the wiring between them.",
  screen: "One app you built on both sides, plus the judgement to know where a bug lives.",
  total: 28,
  min: { fnd: 12, fe: 8, be: 8, integ: 1 },
  required: ["js", "dom", "srv", "cap"]
});

window.CODELAB.definePosition({
  id: "be", title: "Junior Backend Developer",
  icon: "⚙️", color: "#6c5ce7",
  blurb: "Extends REST endpoints, writes and optimises queries, handles auth and validation, and covers it with tests.",
  screen: "REST design, SQL you wrote yourself, auth and validation, tests that catch regressions.",
  total: 22,
  min: { be: 10, data: 3, qa: 4 },
  required: ["js", "srv", "test"]
});

window.CODELAB.definePosition({
  id: "qa", title: "Junior QA Automation Engineer",
  icon: "🔬", color: "#e11d48",
  blurb: "The most accessible way into engineering. Decides whether a change is safe enough to release, and automates the answer.",
  screen: "Test design, automation code, API checks, and clear reporting on what broke and why.",
  total: 18,
  min: { qa: 5, be: 4, fnd: 6 },
  required: ["js", "test"]
});

window.CODELAB.definePosition({
  id: "devops", title: "Junior DevOps Engineer",
  icon: "🛠️", color: "#0891b2",
  blurb: "Owns the path from a merged commit to running software — pipelines, containers, environments, and the rollback when it goes wrong.",
  screen: "Git fluency, a pipeline you configured, containers, and a deploy you have rolled back.",
  total: 22,
  min: { ops: 10, be: 6, qa: 4 },
  required: ["ship", "git", "docker"]
});

window.CODELAB.definePosition({
  id: "sec", title: "Junior Security Engineer",
  icon: "🛡️", color: "#dc2626",
  blurb: "Fastest-growing posting category. Finds the hole before someone else does, then closes it.",
  screen: "Exploiting and fixing XSS and injection, secrets handling, auth design, security headers.",
  total: 20,
  min: { sec: 6, be: 6, fnd: 8 },
  required: ["sec", "auth"]
});

window.CODELAB.definePosition({
  id: "data", title: "Junior Data Engineer",
  icon: "🗄️", color: "#eab308",
  blurb: "Models the data, moves it, and keeps the queries fast enough that everything built on top stays usable.",
  screen: "SQL depth, schema design and normalization, indexes, and pipelines that survive bad input.",
  total: 20,
  min: { data: 6, be: 6, fnd: 8 },
  required: ["db", "srv"]
});
