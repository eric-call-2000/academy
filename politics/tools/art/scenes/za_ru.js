/* South Africa and Russia */
module.exports = {
  // A 1970s training camp in dry bushland: simple huts and tents, recruits in drill formation far off, acacias, dusty light.
  "za_ru-1": (s) => {
    s.sky("golden");
    s.ground(480, "#c4a070");
    s.tree("acacia", 200, 500, { s: 1.4 }).tree("acacia", 1400, 490, { s: 1.6 }).tree("acacia", 700, 470, { s: 0.8 });
    for (let i = 0; i < 4; i++) s.barracks(900 + i * 160, 500, 130, { color: "#8a6a4a", h: 40 });
    s.tents(100, 700, 520, { rows: 1, gap: 120, w: 70, colors: ["#a8a07a"] });
    for (let r = 0; r < 4; r++) for (let i = 0; i < 10; i++) s.person(500 + i * 50 + r * 10, 640 + r * 30, 50 + r * 4, { color: "#5a5a3e" });
    return s.fog(500, { h: 100, color: "#e8c890", opacity: 0.4 });
  },
  // A dark cargo ship at a quiet naval base harbour at night, grey warships, floodlit cranes, steep mountains, stars.
  "za_ru-2": (s) => {
    s.sky("night", { stars: 120 });
    s.mountains({ y: 460, amp: 260, color: "#1a1e26", depth: 0.2, jag: false });
    s.sea(480, { color: "#141c2c" });
    s.rect(0, 560, 1600, 30, "#2a2c30");
    s.crane(300, 560, 0.8, { color: "#5a5e64" }).crane(1300, 560, 0.8, { color: "#5a5e64" });
    [300, 1300].forEach((x) => s.glow(x, 400, 200, "#f4f8ff", 0.25));
    return s.ship("bulk", 800, 680, { s: 1.4, hull: "#1e2024" }).ship("warship", 1300, 620, { s: 0.6, color: "#4a5058" }).ship("warship", 200, 630, { s: 0.6, color: "#4a5058" });
  },
  // A busy airport arrivals hall: anxious families behind a barrier with blank handmade signs and flowers, bright light.
  "za_ru-3": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.room3d({ depth: 2.8, wall: "#d9dcdc", side: "#c9cccc", floor: "#b8b4ac", ceiling: "#e8eaea", lights: "strips" });
    s.persp({ vanish: [800, 414], depth: 2.8 });
    s.quad("front", [500, 1100, 300, 900, 2.8], "#3a4a5a");
    s.add('<rect x="0" y="680" width="1600" height="8" fill="#8a8e92"/>' + Array.from({ length: 20 }, (_, i) => `<rect x="${i * 84}" y="688" width="6" height="80" fill="#8a8e92"/>`).join(""));
    s.crowd({ y: 900, rows: 2, h: 220, gap: 90, rowGap: -30, colors: ["#2a2c34", "#3a3030", "#4a5a6a", "#5a4a3c"] });
    for (let i = 0; i < 6; i++) { const x = 140 + i * 250; s.rect(x, 560, 110, 70, "#ece6d6"); if (i % 2) s.add(`<circle cx="${x + 140}" cy="${620}" r="16" fill="#e86a8a"/><circle cx="${x + 160}" cy="${610}" r="12" fill="#e8c42c"/>`); }
    return s;
  },
};
