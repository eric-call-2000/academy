/* ============================================================
   Political Academy — relationships between countries
   ------------------------------------------------------------
   Each link is a short unit of 2-3 briefings on how two of the
   30 countries deal with each other: units/<id>.js, where the id
   is the two country ids joined by "_" (e.g. "us_cn"). The world
   map (#/map) draws a line between the two countries, and both
   country pages list it under "Relationships".

   `lessons` is how many briefings are written; the validator
   fails if it disagrees with the unit file.
   ============================================================ */
(function () {
  var L = window.POLITICS.defineLink;

  L({ id: "us_cn", a: "us", b: "cn", lessons: 3, color: "#6b3a55",
      title: "Steel, tariffs and soybeans",
      blurb: "How cheap Chinese steel met American tariffs, and how China hit back at American farmers." });
})();
