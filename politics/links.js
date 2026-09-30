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
  L({ id: "in_pk", a: "in", b: "pk", lessons: 3, color: "#a0522d",
      title: "Wars, water and cricket",
      blurb: "Four wars and nuclear bombs, a treaty that shares the Indus, and a border that is almost closed." });
  L({ id: "cn_tw", a: "cn", b: "tw", lessons: 3, color: "#9a3b3b",
      title: "Consensus, trade and Kinmen",
      blurb: "A deliberately vague formula, an economic embrace Taiwan is loosening, and islands within sight of China." });
  L({ id: "jp_cn", a: "jp", b: "cn", lessons: 3, color: "#7a4b2a",
      title: "History, islands and pressure",
      blurb: "A war that still shapes both countries, five islands both claim, and the economic squeeze Beijing applies when relations sour." });
  L({ id: "sa_ir", a: "sa", b: "ir", lessons: 3, color: "#2f6f6a",
      title: "Pilgrims, oil and proxies",
      blurb: "A Sunni kingdom and a Shia republic competing to lead Islam, a drone attack on Saudi oil, and a decade of rival proxies." });
  L({ id: "kr_kp", a: "kr", b: "kp", lessons: 3, color: "#3a6b8c",
      title: "Summits, factories and balloons",
      blurb: "Rounds of engagement that ended in freezes, a factory town in the North, and a propaganda war of balloons and loudspeakers." });
  L({ id: "gb_ar", a: "gb", b: "ar", lessons: 3, color: "#4a6b8a",
      title: "The Falklands: claims, war and oil",
      blurb: "Two claims to the same islands, the road from war to wary partnership, and the squid and oil now driving the dispute." });
  L({ id: "tr_ru", a: "tr", b: "ru", lessons: 3, color: "#8a4a5e",
      title: "Old enemies, awkward partners",
      blurb: "Twelve imperial wars over the Black Sea, a downed jet and a murdered ambassador, and a NATO member tied to Russian gas and reactors." });
  L({ id: "us_ru", a: "us", b: "ru", lessons: 3, color: "#5a5a8a",
      title: "Treaties, resets and swaps",
      blurb: "The nuclear treaties that have all lapsed, repeated resets that ended in rupture, and the prisoners traded between them." });
  L({ id: "de_ru", a: "de", b: "ru", lessons: 3, color: "#6a5a3a",
      title: "Gas, sabotage and spies",
      blurb: "Fifty years of trading pipes for gas, the pipelines blown up under the Baltic, and Russia's shadow war inside Germany." });
  L({ id: "gb_fr", a: "gb", b: "fr", lessons: 3, color: "#3f5f8f",
      title: "Rivals, boats and bombs",
      blurb: "Seven centuries of rivalry turned alliance, the small boats crossing the Channel, and Europe's two nuclear powers working together." });
  L({ id: "jp_kr", a: "jp", b: "kr", lessons: 3, color: "#7a3f6a",
      title: "History, chips and a thaw",
      blurb: "A colonial past that won't settle, a trade war over wartime labour, and two leaders who chose to cooperate anyway." });
  L({ id: "pl_de", a: "pl", b: "de", lessons: 3, color: "#8a3a3a",
      title: "Borders, reparations and trade",
      blurb: "A border moved west and a chancellor on his knees, a €1.3 trillion claim, and neighbours bound by trade and defence." });
  L({ id: "cn_in", a: "cn", b: "in", lessons: 3, color: "#8a5a2a",
      title: "Border, trade and Tibet",
      blurb: "A Himalayan border that has seen war and deadly clashes, a lopsided trade, and the contest over Tibet and the Dalai Lama." });
  L({ id: "au_cn", a: "au", b: "cn", lessons: 3, color: "#b0602a",
      title: "Iron ore, trade war and submarines",
      blurb: "A mine-and-market marriage, China's 2020 trade punishment and how Australia rode it out, and a rivalry over ports and warships." });
  L({ id: "br_ar", a: "br", b: "ar", lessons: 3, color: "#3a7a4a",
      title: "Rivals, Mercosur and a feud",
      blurb: "Rivals who gave up a nuclear race, a common market that never quite worked, and two presidents who barely speak." });
  L({ id: "cn_ru", a: "cn", b: "ru", lessons: 3, color: "#8a2a2a",
      title: "Split, 'no limits' and pipelines",
      blurb: "Allies turned enemies turned partners, a friendship with 'no limits' in wartime, and an energy trade tilted toward Beijing." });
  L({ id: "ng_za", a: "ng", b: "za", lessons: 3, color: "#3a7a5a",
      title: "Solidarity, rivalry and xenophobia",
      blurb: "Nigeria's support for the anti-apartheid struggle, a rivalry for Africa's lead, and the attacks that led to a 2026 airlift." });
  L({ id: "id_au", a: "id", b: "au", lessons: 3, color: "#7a5a2a",
      title: "Timor, spies and a treaty",
      blurb: "Neighbours who fell out over East Timor, cattle, spying and executions, then signed their closest security pact in 2026." });
  L({ id: "us_ve", a: "us", b: "ve", lessons: 3, color: "#5a3a7a",
      title: "Monroe, Citgo and CECOT",
      blurb: "A century of the Monroe Doctrine tested in Venezuela, the fight over its American refineries, and Venezuelans caught in US deportations." });
  L({ id: "eg_il", a: "eg", b: "il", lessons: 3, color: "#8a6a2a",
      title: "Cold peace, gas and Rafah",
      blurb: "The first Arab–Israeli peace and why it stayed cold, Israeli gas that keeps Egypt's lights on, and Gaza's southern border." });
})();
