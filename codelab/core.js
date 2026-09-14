/* ============================================================
   CodeLab — course registry + credit model
   ------------------------------------------------------------
   Loaded FIRST. courses.js defines the catalog (metadata + which
   unit files to lazy-load); unit files register their units with
   window.CODELAB.addUnit(courseId, {...}) when app.js loads them.
   positions.js defines the job requirement sheets.

   TO ADD A COURSE: add a defineCourse({...}) in courses.js and
   create its unit files under <course-folder>/.
   TO ADD A UNIT: create the file, list it in that course's
   `files`, and bump the course's `items` count.

   ---- the credit model -------------------------------------
   A course pays CREDITS when it is COMPLETED — never per lesson,
   the same way a university awards nothing for a half-finished
   semester. Credits are typed by CATEGORY, and a course that
   spans several APPORTIONS its credits across them rather than
   paying full value into each: the category columns must sum
   back to the course total, so the ledger can never mint credit
   that no one sat through. tools/validate.js gates both halves
   of that (credits ≈ real modelled hours, and the split sums).

   Credits EXPIRE after CREDIT_EXPIRY_DAYS unless the learner
   keeps that course's Recall drills current — any successful
   review of an item belonging to the course resets its clock.
   So the transcript measures what you can still do, not what
   you once did.
   ============================================================ */
window.CODELAB = window.CODELAB || {};
window.CODELAB.courses = window.CODELAB.courses || [];
window.CODELAB._byId = window.CODELAB._byId || {};
window.CODELAB.positions = window.CODELAB.positions || [];
window.CODELAB._posById = window.CODELAB._posById || {};

/* One credit is this many hours of real, modelled material. Raising it
   does not create content — validate.js re-derives every course's credits
   from the lessons actually in the files and fails on a mismatch. */
window.CODELAB.CREDIT_HOURS = 2;
window.CODELAB.CREDIT_EXPIRY_DAYS = 730;   // 2 years
window.CODELAB.CREDIT_WARN_DAYS = 60;      // "expiring soon" runway

/* Category order here is the order they render in, everywhere. */
window.CODELAB.CATEGORIES = [
  { id: "fnd",   label: "Foundations", color: "#ff9600" },
  { id: "fe",    label: "Frontend",    color: "#58cc02" },
  { id: "be",    label: "Backend",     color: "#6c5ce7" },
  { id: "data",  label: "Data",        color: "#eab308" },
  { id: "qa",    label: "Quality",     color: "#e11d48" },
  { id: "sec",   label: "Security",    color: "#dc2626" },
  { id: "ops",   label: "Operations",  color: "#0891b2" },
  { id: "integ", label: "Integration", color: "#f59e0b" }
];
window.CODELAB._catById = {};
window.CODELAB.CATEGORIES.forEach(function (c) { window.CODELAB._catById[c.id] = c; });
window.CODELAB.catLabel = function (id) {
  var c = window.CODELAB._catById[id];
  return c ? c.label : id;
};

window.CODELAB.defineCourse = function (c) {
  c.units = [];
  c._loaded = false;
  /* A stub is a course on the roadmap with no lessons written yet. It holds
     a place in the catalog and in the job sheets — which is exactly how the
     job board can say "DevOps needs 6 more Operations credits" instead of
     silently pretending the position is reachable — but it pays nothing and
     lazy-loads nothing. `files: []` keeps it out of the loader entirely. */
  c.stub = !!c.stub;
  c.files = c.files || [];
  c.items = c.items || 0;
  c.hours = c.hours || 0;
  c.credits = c.credits || 0;
  c.categories = c.categories || {};
  window.CODELAB.courses.push(c);
  window.CODELAB._byId[c.id] = c;
};

/* A job position is a requirement sheet, read exactly like a degree audit:
     total    — credits needed overall
     min      — per-category floors, e.g. { be: 10, data: 3 }
     required — courses that must be completed outright; no substitution.
   Required courses STACK: their credits also count toward `total` and
   toward their categories. One sheet per title, all at junior level. */
window.CODELAB.definePosition = function (p) {
  p.min = p.min || {};
  p.required = p.required || [];
  window.CODELAB.positions.push(p);
  window.CODELAB._posById[p.id] = p;
};

/* Per-checkpoint solutions, one generated file per course (see
   tools/build-step-solutions.js): lesson id -> { hash, steps: [{ chunks,
   after, why }] }. Loaded after the course's units; absent is fine. */
window.CODELAB._stepSol = window.CODELAB._stepSol || {};
window.CODELAB.addStepSolutions = function (courseId, map) {
  Object.keys(map).forEach(function (id) { window.CODELAB._stepSol[id] = map[id]; });
};

window.CODELAB.addUnit = function (courseId, u) {
  u.lessons = u.lessons || [];
  var c = window.CODELAB._byId[courseId];
  if (!c) return;
  /* Registering the same unit twice doubles courseLessons(), halves every
     progress percentage and makes courseComplete() unreachable — and it
     vanishes on reload, so it looks like progress randomly resetting. */
  for (var i = 0; i < c.units.length; i++) if (c.units[i].id === u.id) return;
  c.units.push(u);
};
