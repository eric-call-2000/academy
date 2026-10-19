/* ============================================================
   CodeLab — look: path stages + the line-icon set
   ------------------------------------------------------------
   STAGES groups the catalog into the six parts of the path. A
   course names its stage in courses.js (`stage: "front"`); the
   stage, not the course, owns the colour, so a course's colour
   says where it sits on the path. Colours are CSS custom
   properties (--stage-<id>) so every theme can retune them.

   ICONS is one stroke-icon set (24px grid, currentColor) used in
   place of emoji, which render differently on every OS. Paths are
   drawn in the Lucide style. icon(name) returns an inline <svg>;
   courseIcon(course) picks the course's glyph by id.
   ============================================================ */
(function () {
  var C = window.CODELAB = window.CODELAB || {};

  C.STAGES = [
    { id: "found",  name: "Foundations",        blurb: "Markup, style, the language, and your tools" },
    { id: "front",  name: "Front-end",          blurb: "How the web works and how pages come alive" },
    { id: "back",   name: "Back-end & data",    blurb: "Servers, databases, APIs and pipelines" },
    { id: "qual",   name: "Quality & security", blurb: "Finding bugs, testing, and keeping users safe" },
    { id: "ops",    name: "Ship & operate",     blurb: "Deploying, automating and running in the cloud" },
    { id: "cap",    name: "Capstone",           blurb: "Put the whole path together in one build" }
  ];
  C._stageById = {};
  C.STAGES.forEach(function (s) { C._stageById[s.id] = s; });
  C.stageOf = function (course) {
    return C._stageById[course && course.stage] || C.STAGES[0];
  };
  C.stageColor = function (course) { return "var(--stage-" + C.stageOf(course).id + ")"; };

  var P = {
    /* courses */
    html:   '<path d="M8 8l-4 4 4 4"/><path d="M16 8l4 4-4 4"/><path d="M13.5 5l-3 14"/>',
    css:    '<path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.5 0-.4-.2-.8-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15.5" cy="8" r="1"/>',
    resp:   '<rect x="2" y="4" width="14" height="11" rx="1.5"/><rect x="17.5" y="8" width="4.5" height="12" rx="1"/><path d="M6 19h6"/>',
    js:     '<path d="M8 4c-2 0-3 1-3 3v2c0 1-1 2-2 3 1 1 2 2 2 3v2c0 2 1 3 3 3"/><path d="M16 4c2 0 3 1 3 3v2c0 1 1 2 2 3-1 1-2 2-2 3v2c0 2-1 3-3 3"/>',
    algo:   '<path d="M3 20h18"/><path d="M5 16l4-5 4 3 6-8"/><path d="M15 6h4v4"/>',
    web:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
    dom:    '<path d="M5 3l14 7-6 2-2 6z"/><path d="M13 13l6 6"/>',
    async:  '<circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M5.6 5.6a9 9 0 0 0 0 12.8"/><path d="M18.4 5.6a9 9 0 0 1 0 12.8"/>',
    debug:  '<rect x="8" y="7" width="8" height="13" rx="4"/><path d="M12 7V5"/><path d="M9.5 3.5L11 5.5"/><path d="M14.5 3.5L13 5.5"/><path d="M4 11h4"/><path d="M16 11h4"/><path d="M4 17l4-1.5"/><path d="M20 17l-4-1.5"/><path d="M12 11v9"/>',
    srv:    '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01"/><path d="M7 16.5h.01"/>',
    test:   '<path d="M9 3h6"/><path d="M10 3v6l-5.2 9.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 9V3"/><path d="M7.5 15h9"/>',
    cap:    '<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 15l-3-3c1-4 4.5-8.5 12-9-.5 7.5-5 11-9 12z"/><circle cx="14.5" cy="9.5" r="1.5"/>',
    sec:    '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    ship:   '<path d="M21 3L10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>',
    nodejs: '<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/><path d="M9.5 9.5v5"/><path d="M14.5 9.5c-1.5 0-2 .7-2 1.3s.5 1.2 2 1.2 2 .6 2 1.2-.5 1.3-2 1.3"/>',
    db:     '<ellipse cx="12" cy="5.5" rx="8" ry="2.5"/><path d="M4 5.5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-13"/><path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5"/>',
    api:    '<path d="M9 3v5"/><path d="M15 3v5"/><path d="M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v4"/>',
    auth:   '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v2"/>',
    cli:    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3"/><path d="M12 15h5"/>',
    git:    '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="7" r="2"/><path d="M6 7v10"/><path d="M18 9c0 4-4 5-11 8.5"/>',
    cicd:   '<path d="M20 12a8 8 0 0 1-14 5.3"/><path d="M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4"/><path d="M6 21v-4h4"/>',
    docker: '<path d="M3 7.5l9-4.5 9 4.5v9l-9 4.5-9-4.5z"/><path d="M3 7.5l9 4.5 9-4.5"/><path d="M12 12v9"/>',
    cloud:  '<path d="M7 19a5 5 0 0 1-.5-10A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 10.5z"/>',
    etl:    '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a2 2 0 0 1 2 2v7"/>',
    /* interface */
    bolt:     '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    flame:    '<path d="M12 22c4 0 7-2.7 7-7 0-3.5-2.2-6-4-8-.4 2-1.5 3.3-3 4 0-3.5-1.5-6.5-4-9 .3 3.5-3 6-3 11 0 5 3 9 7 9z"/>',
    star:     '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    recall:   '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/>',
    theme:    '<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M12 3a9 9 0 0 1 0 18" fill="currentColor"/>',
    briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
    sandbox:  '<path d="M9 3h6"/><path d="M10 3v6l-5.2 9.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 9V3"/>',
    phone:    '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    lock:     '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    unlock:   '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.5-2"/>',
    check:    '<path d="M5 12l5 5 9-10"/>',
    x:        '<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',
    play:     '<path d="M7 4l13 8-13 8z"/>',
    arrow:    '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    back:     '<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>',
    book:     '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    code:     '<path d="M8 8l-4 4 4 4"/><path d="M16 8l4 4-4 4"/>',
    bulb:     '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
    award:    '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    sheet:    '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 10h6"/><path d="M9 14h6"/>',
    reset:    '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    target:   '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    pin:      '<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    plus:     '<path d="M12 5v14"/><path d="M5 12h14"/>',
    link:     '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    book2:    '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>'
  };
  C.ICONS = P;

  /* size in px; cls lands on the <svg>. Unknown names fall back to a book,
     so a new course without a glyph still gets an icon, never a gap. */
  C.icon = function (name, size, cls) {
    var s = size || 18;
    return '<svg class="ico-svg' + (cls ? " " + cls : "") + '" width="' + s + '" height="' + s +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (P[name] || P.book2) + "</svg>";
  };
  C.courseIcon = function (course, size) { return C.icon(course && course.id, size); };
})();
