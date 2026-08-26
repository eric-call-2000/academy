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
  icon: "📡", color: "#f25f9c", level: "Intermediate", hours: 2, targetHours: 6, items: 7,
  blurb: "Promises, async/await and fetch — talk to servers like every real web app.",
  files: ["async/u1.js"]
});

window.CODELAB.defineCourse({
  id: "srv", prefix: "srv", title: "Back-End Foundations",
  icon: "🖥️", color: "#6c5ce7", level: "Intermediate", hours: 2, targetHours: 8, items: 7,
  blurb: "Servers, routing, REST APIs, status codes and CRUD — the other half of full-stack.",
  files: ["srv/u1.js"]
});

window.CODELAB.defineCourse({
  id: "cap", prefix: "cap", title: "Full-Stack Capstone",
  icon: "🚀", color: "#f59e0b", level: "Advanced", hours: 2, targetHours: 6, items: 6,
  blurb: "Put it all together — build, persist and ship TaskMaster Pro, your portfolio app.",
  files: ["cap/u1.js"]
});
