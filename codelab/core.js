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
  if (c) c.units.push(u);
};
