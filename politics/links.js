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
  L({ id: "us_mx", a: "us", b: "mx", lessons: 3, color: "#2e6b4f",
      title: "Factories, migrants and guns",
      blurb: "Two economies built as one, a border that has closed, and a drug war each blames on the other." });
  L({ id: "us_ca", a: "us", b: "ca", lessons: 3, color: "#8c2f39",
      title: "Allies, lumber and oil",
      blurb: "The closest of allies, a forty-year fight over lumber, and the oil and power that flow south." });
  L({ id: "ru_ua", a: "ru", b: "ua", lessons: 3, color: "#3d4f7a",
      title: "One people? Gas and captives",
      blurb: "Moscow's claim that Ukrainians are Russians, gas as a weapon, and the children and prisoners taken by the war." });
  L({ id: "il_ir", a: "il", b: "ir", lessons: 3, color: "#5b4a8a",
      title: "From allies to arch-enemies",
      blurb: "Secret friends under the Shah, a shadow war of sabotage and assassination, and Iran's network of armed allies." });
  L({ id: "in_pk", a: "in", b: "pk", lessons: 0, color: "#a0522d",
      title: "Wars, water and cricket",
      blurb: "Four wars and nuclear bombs, a treaty that shares the Indus, and a border that is almost closed." });
  L({ id: "cn_tw", a: "cn", b: "tw", lessons: 0, color: "#9a3b3b",
      title: "Consensus, trade and Kinmen",
      blurb: "A deliberately vague formula, an economic embrace Taiwan is loosening, and islands within sight of China." });
})();
