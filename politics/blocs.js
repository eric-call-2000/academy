/* ============================================================
   Political Academy — blocs and clubs, for the world map's lenses
   ------------------------------------------------------------
   Each bloc lists which of the 30 countries belong to it (only
   those; the club may have other members). The map shades the
   members and dims everyone else. `term` links the bloc to its
   glossary entry when there is one; `note` is a one-line caveat
   shown under the map. Keep membership current: it is a fact the
   briefings rely on, and the validator checks every id.
   ============================================================ */
(function () {
  var B = window.POLITICS.defineBloc;

  B({ id: "nato", name: "NATO", color: "#1f4e79", term: "nato",
      members: ["us", "ca", "gb", "fr", "de", "it", "pl", "tr"],
      note: "The Western military alliance: an attack on one is treated as an attack on all." });
  B({ id: "eu", name: "EU", color: "#2b4fa0",
      members: ["de", "fr", "it", "pl"],
      note: "The European Union, 27 countries with a single market. The UK left in 2020." });
  B({ id: "g7", name: "G7", color: "#5b4a8a",
      members: ["us", "ca", "gb", "fr", "de", "it", "jp"],
      note: "The seven largest rich democracies, which meet once a year. Russia was suspended in 2014." });
  B({ id: "brics", name: "BRICS", color: "#a0522d", term: "brics",
      members: ["br", "ru", "in", "cn", "za", "eg", "ir", "ae", "id"],
      note: "Full members only. Saudi Arabia was invited in 2023 but has not confirmed; Nigeria is a partner country." });
  B({ id: "sco", name: "SCO", color: "#9a3b3b",
      members: ["cn", "ru", "in", "pk", "ir"],
      note: "The Shanghai Cooperation Organisation, a China- and Russia-led security club with Central Asia." });
  B({ id: "quad", name: "Quad", color: "#2e6b4f", term: "quad",
      members: ["us", "jp", "in", "au"],
      note: "Four democracies coordinating in the Indo-Pacific, largely with China in mind." });
  B({ id: "aukus", name: "AUKUS", color: "#3d4f7a", term: "aukus",
      members: ["au", "gb", "us"],
      note: "A security pact built around nuclear-powered submarines for Australia." });
  B({ id: "opec-plus", name: "OPEC+", color: "#8a6b12", term: "opec-plus",
      members: ["sa", "ir", "ve", "ng", "ru", "mx"],
      note: "OPEC members plus Russia and Mexico. The UAE left OPEC on 1 May 2026." });
  B({ id: "nuclear", name: "Nuclear-armed", color: "#b5382f",
      members: ["us", "ru", "cn", "gb", "fr", "in", "pk", "kp", "il"],
      note: "Countries with nuclear weapons. Israel has never confirmed its arsenal." });
})();
