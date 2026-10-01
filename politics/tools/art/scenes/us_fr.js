/* United States and France */
module.exports = {
  // 18th-century soldiers in blue and white coats manning cannons in siege trenches before earthwork forts, warships in a bay.
  "us_fr-1": (s) => {
    s.sky("afternoon", { top: "#a8a090", bottom: "#e0d0b0" });
    s.sea(420, { color: "#7a8a8a" });
    s.ship("tall", 1200, 440, { s: 0.6, depth: 0.3 }).ship("tall", 1450, 450, { s: 0.45, depth: 0.35 });
    s.ridge({ y: 520, amp: 80, color: "#8a7a5a", x0: 200, x1: 900, depth: 0.2 });
    s.ground(520, "#8a8a5a");
    s.smoke(500, 480, { len: 500, w: 70 });
    s.add('<path d="M-40,700 Q800,640 1640,700 L1640,760 Q800,700 -40,760 Z" fill="#6a5a40"/>');
    for (let i = 0; i < 4; i++) { const x = 200 + i * 380; s.cannon(x, 720, 1.6); s.person(x - 60, 730, 120, { color: "#2a3a6a" }); s.rect(x - 74, 640, 28, 30, "#f2efe8"); }
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.15"/>');
  },
  // A large conventional submarine hull under construction in a covered dry dock, welding sparks, scaffolding, cranes.
  "us_fr-2": (s) => {
    s.mood("night", { light: "#ffffff" });
    s.room3d({ depth: 3, wall: "#4a4e56", side: "#3e424a", floor: "#2a2c30", ceiling: "#5a5e66", lights: "strips" });
    s.add('<path d="M240,640 Q240,520 400,520 L1240,520 Q1400,540 1400,640 Q1400,720 1240,740 L400,740 Q240,740 240,640 Z" fill="#2a2c30"/>');
    s.add('<g stroke="#a8a49a" stroke-width="3">' + Array.from({ length: 16 }, (_, i) => `<line x1="${260 + i * 72}" y1="400" x2="${260 + i * 72}" y2="760"/>`).join("") + Array.from({ length: 6 }, (_, i) => `<line x1="240" y1="${420 + i * 60}" x2="1360" y2="${420 + i * 60}"/>`).join("") + "</g>");
    for (let i = 0; i < 5; i++) { const x = 400 + i * 200, y = 560 + (i % 2) * 80; s.glow(x, y, 40, "#ffe2a6", 0.9); }
    return s.add('<g fill="#d9b23c"><rect x="120" y="120" width="30" height="660"/><rect x="1450" y="120" width="30" height="660"/><rect x="100" y="100" width="1400" height="30"/></g>');
  },
  // Brightly painted wooden houses round a small fishing harbour on a rocky treeless North Atlantic island, low grey cloud.
  "us_fr-3": (s) => {
    s.sky("overcast", { top: "#7a8088" });
    s.hills({ y: 440, amp: 100, color: "#7a7a6a", depth: 0.3 });
    for (let i = 0; i < 12; i++) s.house(80 + i * 120, 500 - (i % 3) * 14, 100, 60, { color: ["#c4322a", "#3f6aa8", "#e8c42c", "#4f8a5a", "#f2efe8", "#e0782c"][i % 6], roofColor: "#3a3a3a" });
    s.sea(520, { color: "#5a6a74" });
    return s.ship("boat", 400, 640, { s: 1, hull: "#c4322a" }).ship("boat", 900, 680, { s: 1.1, hull: "#3f6aa8", dir: -1 }).ship("fishing", 1300, 640, { s: 0.6 });
  },
};
