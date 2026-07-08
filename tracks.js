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

/* Tracks appear on the picker in this order. */
window.ACADEMY.defineTrack({ id: "ai", prefix: "ai", count: 16, title: "AI & Coding", icon: "🤖", color: "#1cb0f6", blurb: "Get fluent in AI — Claude, prompting, coding and agents." });
window.ACADEMY.defineTrack({ id: "marketing", prefix: "marketing", count: 8, title: "Marketing", icon: "📣", color: "#ff9600", blurb: "Reach and grow an audience — brand, content, channels and growth." });
window.ACADEMY.defineTrack({ id: "cyber", prefix: "cyber", count: 10, title: "Cybersecurity", icon: "🛡️", color: "#ff4b4b", blurb: "Stay safe and build securely — for both websites and apps." });
window.ACADEMY.defineTrack({ id: "construction", prefix: "construction", count: 13, title: "Construction", icon: "👷", color: "#58cc02", blurb: "Learn to build — the terms and process for homes and commercial." });
window.ACADEMY.defineTrack({ id: "bim", prefix: "bim", count: 8, title: "BIM Fundamentals", icon: "🏢", color: "#f25f9c", blurb: "BIM the process — dimensions, LOD, ISO 19650, the CDE, and openBIM." });
window.ACADEMY.defineTrack({ id: "revit", prefix: "revit", count: 16, title: "Revit", icon: "📐", color: "#ce82ff", blurb: "Autodesk Revit — families, views, schedules, worksharing, and Dynamo." });
window.ACADEMY.defineTrack({ id: "navisworks", prefix: "navis", count: 8, title: "Navisworks", icon: "🔍", color: "#2bb3a3", blurb: "Autodesk Navisworks — federate models, detect clashes, and 4D coordinate." });
window.ACADEMY.defineTrack({ id: "acc", prefix: "acc", count: 8, title: "ACC / Forma", icon: "☁️", color: "#a560e8", blurb: "Autodesk Construction Cloud (Forma) — Docs, coordination, and the field." });
