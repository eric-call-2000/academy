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
  L({ id: "us_jp", a: "us", b: "jp", lessons: 3, color: "#2a4a7a",
      title: "Alliance, Okinawa and trade",
      blurb: "From occupation to the alliance anchoring US power in Asia, the island that carries the bases, and trade fights." });
  L({ id: "fr_de", a: "fr", b: "de", lessons: 3, color: "#4a4a8a",
      title: "Enemies, engine and the bomb",
      blurb: "Three wars turned into Europe's central friendship, the engine that drives the EU, and a failed jet beside new nuclear talks." });
  L({ id: "tr_il", a: "tr", b: "il", lessons: 3, color: "#8a3a5a",
      title: "Allies to rivals",
      blurb: "Quiet military partners turned bitter enemies, Turkey's trade and airspace bans over Gaza, and a new contest over Syria's skies." });
  L({ id: "sa_ae", a: "sa", b: "ae", lessons: 3, color: "#4a7a3a",
      title: "Mentor, rival, OPEC exit",
      blurb: "Two Gulf princes who went to war together, a clash in Yemen that broke into the open, and the UAE's exit from OPEC." });
  L({ id: "us_in", a: "us", b: "in", lessons: 3, color: "#2a6a6a",
      title: "Estrangement, nukes and visas",
      blurb: "Cold War distance, a nuclear deal that built a strategic partnership, and the visas, deportations and tariffs now testing it." });
  L({ id: "pk_cn", a: "pk", b: "cn", lessons: 3, color: "#2a6a3a",
      title: "Iron brothers, corridor, jets",
      blurb: "An 'all-weather' friendship built on rivalry with India, a corridor under militant attack, and Chinese jets tested in battle." });
  L({ id: "ua_pl", a: "ua", b: "pl", lessons: 3, color: "#3a5a8a",
      title: "Volhynia, refugees and grain",
      blurb: "A painful shared past, refugees and grain disputes in wartime, and a 2026 crisis over how history is honoured." });
  L({ id: "it_fr", a: "it", b: "fr", lessons: 3, color: "#6a3a6a",
      title: "Latin sisters, migrants and a treaty",
      blurb: "Neighbours who helped make each other, quarrel over migrants and ambassadors, and are bound by a friendship treaty and big business." });
  L({ id: "ir_pk", a: "ir", b: "pk", lessons: 3, color: "#5a6a2a",
      title: "Brothers, borders and a pipeline",
      blurb: "The first country to recognise Pakistan, a Baloch border that erupted into missile strikes, and a pipeline stuck by sanctions." });
  L({ id: "us_il", a: "us", b: "il", lessons: 3, color: "#2a5a8a",
      title: "Recognition, aid and a divided public",
      blurb: "Recognised in eleven minutes, armed for decades with record aid, now fighting Iran side by side while American opinion shifts." });
  L({ id: "ca_cn", a: "ca", b: "cn", lessons: 3, color: "#8a3a2a",
      title: "Head tax, hostages and canola",
      blurb: "An early recognition, a Huawei arrest answered by two detained Canadians, and a 2026 canola-for-cars deal that angered Trump." });
  L({ id: "us_tw", a: "us", b: "tw", lessons: 3, color: "#3a6a8a",
      title: "Ambiguity, arms and bargaining",
      blurb: "A treaty ally dropped in 1979 but armed by law, a deliberately vague promise, and arms sales that became a bargaining chip." });
  L({ id: "us_sa", a: "us", b: "sa", lessons: 3, color: "#3a6a4a",
      title: "Oil, terror and a crown prince",
      blurb: "Oil for security since 1945, troops and the 9/11 hijackers, and a crown prince who went from pariah to partner." });
  L({ id: "us_gb", a: "us", b: "gb", lessons: 3, color: "#2a3a7a",
      title: "Special, unequal and tested",
      blurb: "Wartime allies who share spies and nuclear secrets, followed each other into Iraq, and now argue over Iran and Chagos." });
  L({ id: "de_cn", a: "de", b: "cn", lessons: 3, color: "#6a4a2a",
      title: "Cars, rivals and a deficit",
      blurb: "Volkswagen in Shanghai and change through trade, a turn to 'systemic rival', and Chinese cars, chips and a record trade deficit." });
  L({ id: "jp_ru", a: "jp", b: "ru", lessons: 3, color: "#4a3a6a",
      title: "Four islands and no peace",
      blurb: "Two wars and four islands with no peace treaty since 1945, Abe's failed courtship of Putin, and sanctions, Sakhalin gas and a provocative visit." });
  L({ id: "in_ru", a: "in", b: "ru", lessons: 3, color: "#7a4a2a",
      title: "Old friends, arms and oil",
      blurb: "A Cold War friendship sealed in 1971, decades of Russian arms, and cheap oil that brought Trump's tariffs." });
  L({ id: "br_cn", a: "br", b: "cn", lessons: 3, color: "#3a7a3a",
      title: "Soybeans, vaccines and BRICS",
      blurb: "China's biggest farm supplier, a president who campaigned against Beijing then made peace, and record trade as Trump's tariffs bite." });
  L({ id: "eg_sa", a: "eg", b: "sa", lessons: 3, color: "#8a6a2a",
      title: "Rivals, patrons and partners",
      blurb: "Nasser against the Saudi kings, billions for Sisi and two Red Sea islands in return, and a partnership of deposits, power lines and Sudan." });
  L({ id: "za_ru", a: "za", b: "ru", lessons: 3, color: "#6a2a4a",
      title: "Comrades, drills and recruits",
      blurb: "Soviet guns for the ANC's struggle, 'non-alignment' on Ukraine from naval drills to the Lady R, and young men lured to Russia's front." });
  L({ id: "us_au", a: "us", b: "au", lessons: 3, color: "#2a5a7a",
      title: "ANZUS, AUKUS and minerals",
      blurb: "Australia turned to America in 1941, followed it to war and signed AUKUS for nuclear subs, then courted Trump with minerals." });
  L({ id: "us_kr", a: "us", b: "kr", lessons: 3, color: "#2a4a6a",
      title: "Troops, subs and a snub",
      blurb: "An alliance born in the Korean War, 28,500 troops and fights over cost and THAAD, and Trump's nuclear subs and cut-back drills." });
  L({ id: "cn_kp", a: "cn", b: "kp", lessons: 3, color: "#7a2a2a",
      title: "Lips, teeth and a parade",
      blurb: "Chinese armies saved Kim Il Sung in 1950, China became the North's lifeline but opposed its bomb, then won Kim back from Russia." });
  L({ id: "us_ua", a: "us", b: "ua", lessons: 3, color: "#3a5a9a",
      title: "Assurances, arms and a deal",
      blurb: "Nuclear weapons given up for promises in 1994, the largest US war aid in decades, and Trump's minerals deal and push for peace." });
  L({ id: "mx_cn", a: "mx", b: "cn", lessons: 3, color: "#8a4a2a",
      title: "Silver, chemicals and tariffs",
      blurb: "Galleons, migrants and the Torreón massacre, the Chinese chemicals behind Mexican fentanyl, and tariffs imposed under US pressure." });
  L({ id: "ir_ru", a: "ir", b: "ru", lessons: 3, color: "#4a4a6a",
      title: "Old predator, new partner",
      blurb: "Russia took Iran's Caucasus and occupied its north; now they share drones and a treaty that stops short of defence." });
  L({ id: "de_tr", a: "de", b: "tr", lessons: 3, color: "#8a3a3a",
      title: "Allies, guest workers and jets",
      blurb: "First World War allies, three million German Turks from the guest-worker era, and a bumpy partnership over refugees, rallies and jets." });
  L({ id: "ng_cn", a: "ng", b: "cn", lessons: 3, color: "#5a7a2a",
      title: "Railways, loans and traders",
      blurb: "From Biafra to strategic partners, Chinese-built railways and a deep-sea port on Chinese loans, and traders in Lagos and Guangzhou." });
  L({ id: "id_cn", a: "id", b: "cn", lessons: 3, color: "#8a2a3a",
      title: "Nickel, a bullet train and Natuna",
      blurb: "A 23-year freeze after 1965, Chinese money behind Indonesia's nickel boom and its bullet train, and a dispute over the seas off Natuna." });
  L({ id: "ae_il", a: "ae", b: "il", lessons: 3, color: "#2a6a5a",
      title: "Accords, a red line and Iran",
      blurb: "Secret contacts and the 2020 Abraham Accords, a warm peace strained by Gaza, and a military partnership forged against Iran." });
  L({ id: "jp_in", a: "jp", b: "in", lessons: 3, color: "#9a5a2a",
      title: "Goodwill, trains and the Quad",
      blurb: "Wartime links through Bose and Justice Pal, Japanese cars, loans and a bullet train, and a partnership in the Quad." });
  L({ id: "pl_ru", a: "pl", b: "ru", lessons: 3, color: "#8a2a4a",
      title: "Partitions, Katyń and drones",
      blurb: "Centuries of partitions and uprisings, Katyń and the Smolensk crash, and drones and sabotage on NATO's front line." });
  L({ id: "us_tr", a: "us", b: "tr", lessons: 3, color: "#2a3a6a",
      title: "Allies, missiles and F-35s",
      blurb: "NATO allies since 1952 who fell out over the Kurds, a failed coup and Russian S-400s, now bargaining over F-35s." });
  L({ id: "us_eg", a: "us", b: "eg", lessons: 3, color: "#8a6a2a",
      title: "Aid, a coup and the canal",
      blurb: "Rivals over Suez in 1956, partners after Camp David, strained by a coup and Gaza, and bound by .3 billion a year." });
  L({ id: "gb_cn", a: "gb", b: "cn", lessons: 3, color: "#6a2a3a",
      title: "Opium, Huawei and an embassy",
      blurb: "Britain took Hong Kong in the Opium Wars and returned it in 1997; a golden era gave way to spies and bans." });
  L({ id: "ve_cn", a: "ve", b: "cn", lessons: 3, color: "#7a5a1a",
      title: "Oil for loans, then a raid",
      blurb: "Chávez's partner lent about $60 billion against oil; Maduro's capture left Beijing owed billions by a Venezuela tilting to Washington." });
  L({ id: "sa_cn", a: "sa", b: "cn", lessons: 3, color: "#3a6a3a",
      title: "Missiles, oil and a broken peace",
      blurb: "Secret Chinese missiles in 1988, oil and a Beijing-brokered peace with Iran in 2023, then a war that showed China's limits." });
  L({ id: "ir_cn", a: "ir", b: "cn", lessons: 3, color: "#6a3a5a",
      title: "Silkworms, oil and limits",
      blurb: "China armed Iran in the 1980s and buys almost all its oil, but in the 2026 war it condemned, and did not fight." });
  L({ id: "fr_ru", a: "fr", b: "ru", lessons: 3, color: "#3a4a8a",
      title: "Napoleon, Minsk and the bomb",
      blurb: "Old allies against Germany; France talked to Putin for years, then became Europe's loudest voice against Russia." });
  L({ id: "us_br", a: "us", b: "br", lessons: 3, color: "#2a6a4a",
      title: "A coup, spies and a vote",
      blurb: "Wartime allies; the US backed the 1964 coup; spying, Bolsonaro's Trump-style politics and a quarrel over the 2026 vote." });
  L({ id: "ar_cn", a: "ar", b: "cn", lessons: 3, color: "#7a6a2a",
      title: "Soy, dams and a swap",
      blurb: "China buys Argentina's soy and lent for the Kirchners' dams; Milei swore off 'communists', then kept the currency swap." });
  L({ id: "us_ar", a: "us", b: "ar", lessons: 3, color: "#4a7aaa",
      title: "Perón, debts and a bailout",
      blurb: "From 'Braden or Perón' and the Falklands to vulture funds, record IMF loans and Trump's $20 billion rescue of Milei." });
  L({ id: "za_cn", a: "za", b: "cn", lessons: 3, color: "#8a5a2a",
      title: "Taiwan, BRICS and cheap steel",
      blurb: "Mandela switched from Taipei to Beijing; BRICS and party schools followed, then Chinese steel, cars and a trade deal." });
})();
