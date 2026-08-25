/* ============================================================
   CodeLab — curriculum registry
   ------------------------------------------------------------
   Loaded FIRST. Unit files register themselves with
   window.CODELAB.addUnit({...}). app.js reads CODELAB.units.

   TO ADD A UNIT: create unitN-<name>.js calling addUnit, then add a
   <script> tag for it in index.html (before app.js).
   TO ADD A LESSON: append to that unit's lessons[] (see README).
   ============================================================ */
window.CODELAB = window.CODELAB || {};
window.CODELAB.units = window.CODELAB.units || [];
window.CODELAB.addUnit = function (u) {
  u.lessons = u.lessons || [];
  window.CODELAB.units.push(u);
};
