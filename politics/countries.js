/* ============================================================
   Political Academy — the 30 countries, in path order
   ------------------------------------------------------------
   `lessons` is how many briefings are written: 0 means "coming
   soon" (the card shows, but nothing loads). When a unit ships,
   add units/<id>.js and set `lessons` to its count; the validator
   fails if the two disagree.

   `iso` is the ISO 3166-1 numeric code, which is how the Natural
   Earth map data (tools/build-maps.js) names each country.
   The plan behind this list: ../politics-curriculum.md.
   ============================================================ */
(function () {
  var C = window.POLITICS.defineCountry;

  /* Part 1 — The Big Four */
  C({ id: "us", iso: "840", part: 1, name: "United States", flag: "🇺🇸", color: "#1f4e79", lessons: 12,
      blurb: "The largest economy and military. Its tariffs, wars and alliances set the agenda everywhere else.",
      related: ["cn", "ir", "ve", "ca", "mx"] });
  C({ id: "cn", iso: "156", part: 1, name: "China", flag: "🇨🇳", color: "#a8322d", lessons: 12,
      blurb: "The other superpower: the world's factory, the Taiwan question and the race for technology." });
  C({ id: "ru", iso: "643", part: 1, name: "Russia", flag: "🇷🇺", color: "#4a4e69", lessons: 12,
      blurb: "The largest nuclear arsenal, the war in Ukraine, and a bloc with China, Iran and North Korea." });
  C({ id: "in", iso: "356", part: 1, name: "India", flag: "🇮🇳", color: "#c26a1b", lessons: 12,
      blurb: "The most populous country and the swing state between Washington, Moscow and Beijing." });

  /* Part 2 — Europe */
  C({ id: "ua", iso: "804", part: 2, name: "Ukraine", flag: "🇺🇦", color: "#2b6cb0", lessons: 12,
      blurb: "The largest war in Europe since 1945 — and the security order it will decide." });
  C({ id: "de", iso: "276", part: 2, name: "Germany", flag: "🇩🇪", color: "#8a6b12", lessons: 12,
      blurb: "Europe's biggest economy is rearming, stalling, and watching the far right surge." });
  C({ id: "gb", iso: "826", part: 2, name: "United Kingdom", flag: "🇬🇧", color: "#7a2e3a", lessons: 12,
      blurb: "A nuclear power still redefining itself after Brexit — with a new prime minister since July." });
  C({ id: "fr", iso: "250", part: 2, name: "France", flag: "🇫🇷", color: "#3f5fa8", lessons: 12,
      blurb: "The EU's only nuclear power, where a hung parliament keeps toppling governments." });
  C({ id: "it", iso: "380", part: 2, name: "Italy", flag: "🇮🇹", color: "#2f7d4f", lessons: 12,
      blurb: "A G7 heavyweight whose prime minister bridges Trump's Washington and Brussels." });
  C({ id: "pl", iso: "616", part: 2, name: "Poland", flag: "🇵🇱", color: "#b0354a", lessons: 12,
      blurb: "NATO's eastern anchor, where a president's vetoes hold the government hostage." });
  C({ id: "tr", iso: "792", part: 2, name: "Turkey", flag: "🇹🇷", color: "#b5462f", lessons: 12,
      blurb: "Holder of the Bosphorus and broker on Ukraine, Gaza and Syria — the bridge to Part 3." });

  /* Part 3 — The Middle East */
  C({ id: "il", iso: "376", part: 3, name: "Israel", flag: "🇮🇱", color: "#2c6e9b", lessons: 12,
      blurb: "At the centre of Gaza, Iran, Lebanon and Syria, with an election on 27 October 2026." });
  C({ id: "ir", iso: "364", part: 3, name: "Iran", flag: "🇮🇷", color: "#2e7d5b", lessons: 12,
      blurb: "At war with the US and Israel, beside the Strait of Hormuz, under a new Supreme Leader." });
  C({ id: "sa", iso: "682", part: 3, name: "Saudi Arabia", flag: "🇸🇦", color: "#1c5e38", lessons: 12,
      blurb: "The oil superpower of OPEC+, Vision 2030, and a front-row seat in the Iran war." });
  C({ id: "ae", iso: "784", part: 3, name: "United Arab Emirates", flag: "🇦🇪", color: "#5a6b2e", lessons: 12,
      blurb: "A small federation with outsized reach: finance, AI, Sudan — and Iran's missiles." });
  C({ id: "eg", iso: "818", part: 3, name: "Egypt", flag: "🇪🇬", color: "#a0782b", lessons: 12,
      blurb: "The Suez Canal, the Gaza border and the Nile — with an economy on the edge." });

  /* Part 4 — The Indo-Pacific */
  C({ id: "jp", iso: "392", part: 4, name: "Japan", flag: "🇯🇵", color: "#bc2f45", lessons: 12,
      blurb: "America's key Asian ally, rearming under a prime minister with a historic mandate." });
  C({ id: "kr", iso: "410", part: 4, name: "South Korea", flag: "🇰🇷", color: "#3a5f8f", lessons: 12,
      blurb: "A chip and shipbuilding power whose democracy survived a martial-law attempt." });
  C({ id: "kp", iso: "408", part: 4, name: "North Korea", flag: "🇰🇵", color: "#6b2737", lessons: 12,
      blurb: "A nuclear dynasty whose soldiers and shells now fight for Russia." });
  C({ id: "tw", iso: "158", part: 4, name: "Taiwan", flag: "🇹🇼", color: "#3c4f9e", lessons: 12,
      blurb: "Self-governed and claimed by Beijing; maker of the chips the world runs on." });
  C({ id: "pk", iso: "586", part: 4, name: "Pakistan", flag: "🇵🇰", color: "#2f6f4f", lessons: 8,
      blurb: "A nuclear, army-run state of 250 million that became the Iran war's peacemaker." });
  C({ id: "id", iso: "360", part: 4, name: "Indonesia", flag: "🇮🇩", color: "#b8363f", lessons: 8,
      blurb: "The largest Muslim-majority democracy, ASEAN's anchor and the nickel behind EV batteries." });
  C({ id: "au", iso: "036", part: 4, name: "Australia", flag: "🇦🇺", color: "#2a4d7a", lessons: 8,
      blurb: "AUKUS submarines, China trade and a populist surge at home." });

  /* Part 5 — The Americas */
  C({ id: "ca", iso: "124", part: 5, name: "Canada", flag: "🇨🇦", color: "#b3332c", lessons: 8,
      blurb: "America's biggest trading partner, told to be the '51st state', facing a separatism vote." });
  C({ id: "mx", iso: "484", part: 5, name: "Mexico", flag: "🇲🇽", color: "#22704a", lessons: 8,
      blurb: "America's top trading partner: cartels, migration, nearshoring and steady US pressure." });
  C({ id: "br", iso: "076", part: 5, name: "Brazil", flag: "🇧🇷", color: "#3a8d3f", lessons: 8,
      blurb: "Latin America's giant, which jailed an ex-president and votes on 4 October 2026." });
  C({ id: "ar", iso: "032", part: 5, name: "Argentina", flag: "🇦🇷", color: "#4a8ec2", lessons: 8,
      blurb: "Milei's libertarian 'chainsaw' experiment, watched by the whole world." });
  C({ id: "ve", iso: "862", part: 5, name: "Venezuela", flag: "🇻🇪", color: "#c79a1a", lessons: 8,
      blurb: "The largest oil reserves, and the leader the US seized in January 2026." });

  /* Part 6 — Africa */
  C({ id: "za", iso: "710", part: 6, name: "South Africa", flag: "🇿🇦", color: "#1f7a6a", lessons: 8,
      blurb: "Africa's most industrialized economy, run by a ten-party coalition about to be tested." });
  C({ id: "ng", iso: "566", part: 6, name: "Nigeria", flag: "🇳🇬", color: "#4d7c29", lessons: 8,
      blurb: "Africa's most populous country, in a security crisis, voting in January 2027." });
})();
