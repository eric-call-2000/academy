/* ============================================================
   CodeLab — job positions (requirement sheets)
   ------------------------------------------------------------
   A position is read exactly like a university degree audit:
     total    — credits needed overall
     min      — per-category floors
     required — courses that must be completed outright
   Required courses STACK: they are named AND their credits count
   toward `total` and toward their categories. There is one sheet
   per job title.

   JUNIOR AND SENIOR. Junior sheets can be met by coursework. Senior
   sheets can't: each one extends its junior sheet, adds the senior
   courses, and lists the shipped work and years no course can award
   (`offPlatform`), saying so on the board. The best a senior sheet
   ever shows is "Coursework complete" — seniority still comes from
   shipped work and years, and the sheet is honest about it.

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
  /* web (How the Web Works) is required across fe/fs/be: what a request is,
     DNS, the round-trip model, HTTP methods/status, caching and the HTTP
     versions are a canonical junior screen, and every one of these roles is
     built on the network it explains. */
  total: 41,
  min: { fnd: 12, fe: 10 },
  required: ["html", "css", "resp", "js", "dom", "async", "web", "test", "git"]
});

window.CODELAB.definePosition({
  id: "fs", title: "Junior Full-Stack Developer",
  icon: "🚀", color: "#f59e0b",
  blurb: "The largest single developer role. Owns a feature end to end — interface, endpoint, and the wiring between them.",
  screen: "One app you built on both sides, plus the judgement to know where a bug lives and what your code costs as data grows.",
  /* algo (How Code Scales) is required because junior screens still ask
     about big-O and hash maps. */
  total: 53,
  min: { fnd: 12, fe: 8, be: 8, integ: 1 },
  required: ["html", "css", "js", "algo", "dom", "async", "web", "srv", "db", "test", "git", "cap"]
});

window.CODELAB.definePosition({
  id: "be", title: "Junior Backend Developer",
  icon: "⚙️", color: "#6c5ce7",
  blurb: "Extends REST endpoints, writes and optimises queries, handles auth and validation, and covers it with tests.",
  screen: "REST design, SQL you wrote yourself, auth and validation, tests that catch regressions, and the cost of your code as data grows.",
  /* algo: see the Full-Stack sheet. */
  total: 44,
  min: { be: 10, data: 3, qa: 4 },
  required: ["js", "algo", "async", "web", "srv", "nodejs", "db", "test", "git", "sec"]
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

/* ============================================================
   SENIOR SHEETS — see senior-curriculum.md at the repo root.
   Each `extends` its junior sheet (that list is copied in first),
   `required` here is only what the senior sheet ADDS, and
   `offPlatform` is what no course can award. validate.js requires
   every senior sheet to list `years`, so none can be reached from
   coursework alone.

   What employers expect from a senior and not a junior — scope,
   design, review, running production, changing live systems,
   mentoring — comes from public career ladders (Google, Dropbox,
   CircleCI, GitLab) and 2025–26 hiring data; sources in the plan.
   `total` = required credits (stubs at planned value) + ~3, the
   same one-elective rule as the junior sheets.
   ============================================================ */
(function () {
var SENIOR_YEARS = { id: "years", label: "About 5 years of shipped work",
  why: "Most senior postings ask for five or more years. No course can stand in for them." };
var SENIOR_LED = { id: "led", label: "A project you led from design to launch",
  why: "Senior scope is owning something end to end with little direction, not finishing assigned tasks." };
var SENIOR_ONCALL = { id: "oncall", label: "Time on a real on-call rotation",
  why: "The incident course teaches diagnosis on a simulator. Only production teaches the pager." };
var SENIOR_MENTOR = { id: "mentor", label: "Mentoring at least one other engineer",
  why: "Every published ladder lists raising other engineers as a senior expectation." };

window.CODELAB.definePosition({
  id: "sr-be", title: "Senior Backend Engineer", level: "senior", extends: "be",
  icon: "⚙️", color: "#4c3fbf",
  blurb: "Owns backend systems end to end: designs them, reviews them, keeps them running, and changes them without breaking the people who depend on them.",
  screen: "A system design you can defend, reviews that catch real defects, incident diagnosis, and migrations without downtime — on top of years of doing it for real.",
  total: 61,
  min: { be: 12, data: 4, qa: 7, arch: 8 },
  required: ["review", "oncall", "design", "change", "refactor"],
  offPlatform: [SENIOR_YEARS, SENIOR_LED, SENIOR_ONCALL, SENIOR_MENTOR]
});

window.CODELAB.definePosition({
  id: "sr-fs", title: "Senior Full-Stack Engineer", level: "senior", extends: "fs",
  icon: "🚀", color: "#c2410c",
  blurb: "Owns a product area across both sides: decides how it's built, reviews the work going into it, and keeps it changeable as it grows.",
  screen: "Design trade-offs across client and server, code review, safe refactoring and live changes, and a testing strategy — on top of years of shipping.",
  total: 69,
  min: { fnd: 12, fe: 8, be: 8, qa: 8, integ: 1, arch: 8 },
  required: ["review", "design", "change", "refactor", "teststrat"],
  offPlatform: [SENIOR_YEARS, SENIOR_LED, SENIOR_MENTOR]
});

window.CODELAB.definePosition({
  id: "sr-fe", title: "Senior Frontend Engineer", level: "senior", extends: "fe",
  icon: "🖥️", color: "#3f8f00",
  blurb: "Sets the bar for the interface a team ships: how it's structured, how it's tested, and what gets through review.",
  screen: "Front-end architecture you can explain, code review, refactoring a large UI safely, and a testing strategy — on top of years of shipping.",
  total: 53,
  min: { fnd: 12, fe: 10, qa: 8, arch: 6 },
  required: ["review", "refactor", "teststrat", "design"],
  offPlatform: [SENIOR_YEARS, SENIOR_LED, SENIOR_MENTOR]
});

window.CODELAB.definePosition({
  id: "sr-devops", title: "Senior DevOps / SRE Engineer", level: "senior", extends: "devops",
  icon: "🛠️", color: "#0e7490",
  blurb: "Owns how software reaches production and how it stays up: designs the path, leads the incident, and changes running systems safely.",
  screen: "Incident command and postmortems, reliability design, reviewing infrastructure changes, and migrations without downtime — on top of years on call.",
  total: 54,
  min: { ops: 13, be: 6, qa: 6, arch: 6 },
  required: ["review", "oncall", "design", "change"],
  offPlatform: [SENIOR_YEARS, SENIOR_LED, SENIOR_ONCALL, SENIOR_MENTOR]
});
})();
