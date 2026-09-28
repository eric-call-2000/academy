/* ============================================================
   Political Academy — dispatches
   ------------------------------------------------------------
   Politics keeps moving after a unit ships. A dispatch is a short,
   dated update added here between full rewrites: it shows under
   "What's new" on Today and at the top of its country's page, and
   finished briefings are never rewritten just to add it.

   Add one per event, newest anywhere (the app sorts by date):

   window.POLITICS.addUpdate({
     id: "us-2026-11-04-midterms",         // unique, never reused
     unit: "us",                           // country id
     date: "2026-11-04",
     title: "Midterm results",
     md: "Two or three short paragraphs, same markup as briefings.",
     sources: [{ title: "…", publisher: "…", url: "https://…", date: "2026-11-04" }]
   });

   When the unit's "Where things stand" briefing is next rewritten,
   fold the dispatch into it and delete it from here.
   ============================================================ */
