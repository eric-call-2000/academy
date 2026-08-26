/* ============================================================
   CodeLab — course registry
   ------------------------------------------------------------
   Loaded FIRST. courses.js defines the catalog (metadata + which
   unit files to lazy-load); unit files register their units with
   window.CODELAB.addUnit(courseId, {...}) when app.js loads them.

   TO ADD A COURSE: add a defineCourse({...}) in courses.js and
   create its unit files under <course-folder>/.
   TO ADD A UNIT: create the file, list it in that course's
   `files`, and bump the course's `items` count.
   ============================================================ */
window.CODELAB = window.CODELAB || {};
window.CODELAB.courses = window.CODELAB.courses || [];
window.CODELAB._byId = window.CODELAB._byId || {};

window.CODELAB.defineCourse = function (c) {
  c.units = [];
  c._loaded = false;
  window.CODELAB.courses.push(c);
  window.CODELAB._byId[c.id] = c;
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
