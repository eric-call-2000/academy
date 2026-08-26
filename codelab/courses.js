/* ============================================================
   CodeLab — course catalog manifest
   ------------------------------------------------------------
   Each course lists the unit files app.js lazy-loads when the
   course is opened. `items` = total lessons+quizzes+projects in
   those files (validated by tools/validate.js). `prefix` = the
   required prefix of every lesson id in the course ("html" →
   ids like "html-…"), used to count progress before loading.
   `hours` mirrors real Codecademy course lengths.
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
  icon: "📐", color: "#2bb3a3", level: "Intermediate", hours: 6, items: 7,
  blurb: "Flexbox, Grid and media queries — one page that looks right on every screen.",
  files: ["resp/u1.js"]
});

window.CODELAB.defineCourse({
  id: "js", prefix: "js", title: "Learn JavaScript",
  icon: "⚡", color: "#1cb0f6", level: "Beginner", hours: 15, items: 15,
  blurb: "The language of the web — variables, logic, functions, loops, arrays, objects and iterators.",
  files: ["js/u1.js", "js/u2.js"]
});

window.CODELAB.defineCourse({
  id: "dom", prefix: "dom", title: "Building Interactive Websites",
  icon: "🖱️", color: "#58cc02", level: "Intermediate", hours: 8, items: 8,
  blurb: "The DOM and events — select, change, create, and react to every click and keystroke.",
  files: ["dom/u1.js"]
});

window.CODELAB.defineCourse({
  id: "async", prefix: "async", title: "Async JavaScript & APIs",
  icon: "📡", color: "#f25f9c", level: "Intermediate", hours: 6, items: 7,
  blurb: "Promises, async/await and fetch — talk to servers like every real web app.",
  files: ["async/u1.js"]
});

window.CODELAB.defineCourse({
  id: "srv", prefix: "srv", title: "Back-End Foundations",
  icon: "🖥️", color: "#6c5ce7", level: "Intermediate", hours: 8, items: 7,
  blurb: "Servers, routing, REST APIs, status codes and CRUD — the other half of full-stack.",
  files: ["srv/u1.js"]
});

window.CODELAB.defineCourse({
  id: "cap", prefix: "cap", title: "Full-Stack Capstone",
  icon: "🚀", color: "#f59e0b", level: "Advanced", hours: 6, items: 6,
  blurb: "Put it all together — build, persist and ship TaskMaster Pro, your portfolio app.",
  files: ["cap/u1.js"]
});
