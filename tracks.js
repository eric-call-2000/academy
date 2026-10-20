/* ============================================================
   Academy — track manifest
   ------------------------------------------------------------
   Defines each course ("track") and how many unit files to load.
   Unit files register themselves with window.ACADEMY.addUnit(trackId, {...}).

   TO ADD A TRACK: add a defineTrack({...}) below, then drop in files
   named <prefix>-unit1.js, <prefix>-unit2.js, … and set `count`.
   TO ADD A UNIT to an existing track: add <prefix>-unitN.js and bump `count`.
   ============================================================ */
window.ACADEMY = window.ACADEMY || { tracks: [], _byId: {} };
window.ACADEMY.defineTrack = function (t) { t.units = []; window.ACADEMY.tracks.push(t); window.ACADEMY._byId[t.id] = t; };
window.ACADEMY.addUnit = function (id, unit) { var t = window.ACADEMY._byId[id]; if (t) t.units.push(unit); };

/* The catalog groups tracks under these headings, in this order. Each track
   names its group with `category`; a track with no known category lands in
   "More courses" at the end. `layout: "cards"` shows the group as large cards
   (used for the external labs); every other group is a list of rows. */
window.ACADEMY.categories = [
  { id: "labs", title: "Hands-on labs", note: "Separate apps that share your profile", layout: "cards" },
  { id: "software", title: "Software and AI" },
  { id: "building", title: "Building and BIM" },
  { id: "media", title: "Media and marketing" },
  { id: "psychology", title: "Psychology and behavior" }
];

/* Each track: id, prefix, count (unit files), title, blurb, color (the
   course's colour, dark enough for white text on it), art (a drawing from
   COURSE_ART in app.js; without one the emoji `icon` is shown instead) and
   category. External tracks also take kind and size for their catalog card.
   Within a group, tracks appear in the order below. */
window.ACADEMY.defineTrack({ id: "ai", category: "software", art: "chip", prefix: "ai", count: 16, title: "AI & Coding", icon: "🤖", color: "#0369a1", blurb: "Get fluent in AI — Claude, prompting, coding and agents." });
/* External track: CodeLab (its own app, hosted next to this one). `link` makes the
   card open that URL; CodeLab writes its progress back into this store as track
   id "fullstack", so the XP/lesson counts below stay in sync automatically. */
window.ACADEMY.defineTrack({ id: "fullstack", category: "labs", art: "browser", kind: "Interactive coding", size: "8 courses · 205 exercises", prefix: "fullstack", count: 0, link: "codelab/", cta: "Write real code", title: "Full-Stack Coding Lab", icon: "🧑‍💻", color: "#0e7490", blurb: "Write real code in the browser — HTML, CSS, JS, APIs and a capstone app." });
/* External track: Political Academy (politics/), a reading-first app of daily
   briefings on 30 countries. Like CodeLab it writes its progress back into
   this store, as track id "politics". */
window.ACADEMY.defineTrack({ id: "politics", category: "labs", art: "capitol", kind: "Daily briefings", size: "30 countries · 615 briefings", prefix: "politics", count: 0, link: "politics/", cta: "Read today's briefing", title: "Political Academy", icon: "🗳️", color: "#1f4e79", blurb: "The world's 30 most important countries — who holds power, what just happened, and what to watch." });
/* External track: Accounting Lab (accounting/), a hands-on course in
   professional accounting: you post the journal entries, reconcile and
   close the month, and the app checks each answer. Like the others it
   writes its progress back into this store, as track id "accounting". */
window.ACADEMY.defineTrack({ id: "accounting", category: "labs", art: "ledger", kind: "Checked exercises", size: "15 units · 60 lessons", prefix: "accounting", count: 0, link: "accounting/", cta: "Post your first entry", title: "Accounting Lab", icon: "📒", color: "#0f6b5c", blurb: "Professional accounting, hands-on — journal entries, reconciliations, payroll, the close and more." });
window.ACADEMY.defineTrack({ id: "sysdesign", category: "software", art: "diagram", prefix: "sysdesign", count: 25, title: "System Design", icon: "🏛️", color: "#a16207", blurb: "Architect at AI speed — distributed systems, trade-offs, and running agents at the max level." });
window.ACADEMY.defineTrack({ id: "marketing", category: "media", art: "megaphone", prefix: "marketing", count: 8, title: "Marketing", icon: "📣", color: "#c2410c", blurb: "Reach and grow an audience — brand, content, channels and growth." });
window.ACADEMY.defineTrack({ id: "obs", category: "media", art: "camera", prefix: "obs", count: 8, title: "OBS Studio", icon: "🎥", color: "#4338ca", blurb: "Record studio-quality video with OBS — scenes, sources, audio, encoding and clean exports." });
window.ACADEMY.defineTrack({ id: "overlays", category: "media", art: "layers", prefix: "overlays", count: 8, title: "OBS Overlays", icon: "🎛️", color: "#0369a1", blurb: "Build stream overlays as browser sources — standby, facecam, lower thirds, alerts, goal bars and stingers." });
window.ACADEMY.defineTrack({ id: "content", category: "media", art: "play", prefix: "content", count: 8, title: "Content Creation", icon: "▶️", color: "#be123c", blurb: "Grow on YouTube — ideas, titles, thumbnails, retention, and what actually works." });
window.ACADEMY.defineTrack({ id: "cyber", category: "software", art: "shield", prefix: "cyber", count: 10, title: "Cybersecurity", icon: "🛡️", color: "#b91c1c", blurb: "Stay safe and build securely — for both websites and apps." });
window.ACADEMY.defineTrack({ id: "construction", category: "building", art: "hardhat", prefix: "construction", count: 13, title: "Construction", icon: "👷", color: "#4d7c0f", blurb: "Learn to build — the terms and process for homes and commercial." });
window.ACADEMY.defineTrack({ id: "bim", category: "building", art: "cube", prefix: "bim", count: 8, title: "BIM Fundamentals", icon: "🏢", color: "#be185d", blurb: "BIM the process — dimensions, LOD, ISO 19650, the CDE, and openBIM." });
window.ACADEMY.defineTrack({ id: "revit", category: "building", art: "setsquare", prefix: "revit", count: 16, title: "Revit", icon: "📐", color: "#7e22ce", blurb: "Autodesk Revit — families, views, schedules, worksharing, and Dynamo." });
window.ACADEMY.defineTrack({ id: "navisworks", category: "building", art: "clash", prefix: "navis", count: 8, title: "Navisworks", icon: "🔍", color: "#0f766e", blurb: "Autodesk Navisworks — federate models, detect clashes, and 4D coordinate." });
window.ACADEMY.defineTrack({ id: "acc", category: "building", art: "cloud", prefix: "acc", count: 8, title: "ACC / Forma", icon: "☁️", color: "#6d28d9", blurb: "Autodesk Construction Cloud (Forma) — Docs, coordination, and the field." });

/* Psychology & behavioral-science schools of thought (25 deep units each). */
window.ACADEMY.defineTrack({ id: "evopsych", category: "psychology", art: "dna", prefix: "evopsych", count: 25, title: "Evolutionary Psychology", icon: "🧬", color: "#6d28d9", blurb: "Why the mind evolved — selection, kinship, mating, cooperation and the adapted mind." });
window.ACADEMY.defineTrack({ id: "culture", category: "psychology", art: "globe", prefix: "culture", count: 25, title: "Cultural Psychology", icon: "🌍", color: "#b45309", blurb: "How culture and mind shape each other — the self, cognition, emotion, and the WEIRD problem." });
window.ACADEMY.defineTrack({ id: "behaviorism", category: "psychology", art: "bell", prefix: "behavior", count: 25, title: "Behaviorism", icon: "🐕", color: "#0f766e", blurb: "The science of learning — Pavlov, Skinner, conditioning, schedules and behavior change." });
window.ACADEMY.defineTrack({ id: "attachment", category: "psychology", art: "bond", prefix: "attachment", count: 25, title: "Attachment Theory", icon: "🧸", color: "#be185d", blurb: "How early bonds shape us — Bowlby, Ainsworth, the Strange Situation, and adult love." });
window.ACADEMY.defineTrack({ id: "egt", category: "psychology", art: "payoff", prefix: "egt", count: 25, title: "Evolutionary Game Theory", icon: "♟️", color: "#1d4ed8", blurb: "The math of cooperation and conflict — ESS, Hawk-Dove, and the evolution of strategy." });
