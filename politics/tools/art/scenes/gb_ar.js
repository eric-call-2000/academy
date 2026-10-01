/* United Kingdom and Argentina */
module.exports = {
  // A small harbour town of bright wooden houses with coloured roofs on a windswept shore, a church, a calm bay.
  "gb_ar-1": (s) => {
    s.sky("day", { clouds: 7, cloudY: [60, 320] });
    s.hills({ y: 440, amp: 80, color: "#a8a46a", depth: 0.4 });
    for (let i = 0; i < 10; i++) s.house(200 + i * 110, 500 - (i % 2) * 10, 90, 50, { color: "#f2efe8", roofColor: ["#c4322a", "#3f8a5a", "#3f6aa8"][i % 3] });
    s.rect(1360, 400, 100, 100, "#f2efe8").spire(1410, 400, 120, { color: "#c4322a" });
    s.sea(520, { color: "#7a8a9a" });
    return s.ship("boat", 600, 640, { s: 1.1, hull: "#c4322a" });
  },
  // Rows of white wooden crosses in a fenced cemetery on a windswept grassy hillside, a curved stone wall, an inlet.
  "gb_ar-2": (s) => {
    s.sky("overcast", { top: "#7a8088" });
    s.sea(430, { color: "#6a7a84" });
    s.hills({ y: 520, amp: 120, color: "#9a9a6a", depth: 0.2, peak: 800, peakW: 900 });
    s.add('<path d="M500,520 Q800,460 1100,520" stroke="#8a8478" stroke-width="40" fill="none"/>');
    for (let r = 0; r < 6; r++) for (let i = 0; i < 18; i++) { const x = 160 + i * 74 + r * 6, y = 580 + r * 50, k = 0.6 + r * 0.12; s.add(`<g fill="#f4f2ee"><rect x="${x - 3 * k}" y="${y - 50 * k}" width="${6 * k}" height="${50 * k}"/><rect x="${x - 16 * k}" y="${y - 40 * k}" width="${32 * k}" height="${6 * k}"/></g>`); if (s.r() < 0.15) s.add(`<circle cx="${x + 8}" cy="${y - 4}" r="5" fill="#e86a8a"/>`); }
    return s.fence(-10, 1610, 880, 60, { gap: 80, color: "#5a5a5a" });
  },
  // A floating oil production ship in a rough grey South Atlantic, an orange supply boat, albatrosses, spray.
  "gb_ar-3": (s) => s
    .sky("storm", { clouds: 6, cloudColor: "#5a6068" })
    .sea(480, { color: "#4a5a66", lines: 160 })
    .ship("tanker", 800, 580, { s: 1.3, dir: -1 })
    .rig(700, 560, 0.6, { flare: true })
    .ship("patrol", 300, 640, { s: 0.7, hull: "#e0782c", reflect: false })
    .birds(1200, 220, 4, { color: "#2a2a2a" })
    .add(Array.from({ length: 30 }, (_, i) => `<circle cx="${(i * 131) % 1600}" cy="${520 + (i * 53) % 380}" r="${3 + (i % 4)}" fill="#e8eef2" opacity="0.5"/>`).join("")),
};
