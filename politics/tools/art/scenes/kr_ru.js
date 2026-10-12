/* South Korea & Russia */
module.exports = {
  // A white 19th-century legation building with a square tower above the curved tiled roofs of Korean houses, pines.
  "kr_ru-1": (s) => {
    s.sky("winter", { sun: [1300, 260], r: 40 });
    s.hills({ y: 380, amp: 90, color: "#6a7a6a", depth: 0.5 });
    s.add('<path d="M-20,560 Q500,440 900,420 Q1200,420 1640,500 L1640,900 L-20,900 Z" fill="#8a8a76"/>');
    s.building(640, 430, 360, 130, { color: "#eeece6", cell: 26, roof: "flatdark" });
    s.rect(940, 220, 90, 210, "#eeece6").rect(932, 212, 106, 12, "#d6d2c8");
    for (let i = 0; i < 3; i++) s.add(`<path d="M${952 + i * 26},300 L${952 + i * 26},270 A8,8 0 0 1 ${968 + i * 26},270 L${968 + i * 26},300 Z" fill="#8a929a"/>`);
    s.forest({ y: 470, x0: 400, x1: 620, type: "pine", s: 0.9, gap: 40 }).forest({ y: 460, x0: 1060, x1: 1300, type: "pine", s: 0.9, gap: 40 });
    s.rect(-20, 600, 1660, 30, "#8a6a5a").rect(-20, 590, 1660, 12, "#5a5450");
    for (let k = 0; k < 3; k++) for (let i = 0; i < 6; i++) { const x = -60 + i * 300 + k * 120, y = 700 + k * 80, w = 240; s.rect(x + 30, y - 40, w - 60, 40, "#c9bca8"); s.add(`<path d="M${x},${y - 40} Q${x + 30},${y - 50} ${x + 40},${y - 80} L${x + w - 40},${y - 80} Q${x + w - 30},${y - 50} ${x + w},${y - 40} Q${x + w / 2},${y - 30} ${x},${y - 40} Z" fill="#4a4e54"/>`); }
    return s;
  },
  // A large car factory with long white buildings and a chimney, rows of new cars under light snow at winter dusk.
  "kr_ru-2": (s) => {
    s.sky("wintdusk", { clouds: 3 });
    s.forest({ y: 470, type: "birch", s: 0.7, depth: 0.5, gap: 30 });
    s.building(160, 520, 900, 120, { color: "#e6e8ec", cell: 24, lit: true, litShare: 0.25, roof: "flatdark" });
    s.chimney(1100, 520, 260, { color: "#c9ccd2", smokeLen: 260 });
    s.building(1180, 520, 380, 90, { color: "#dfe2e6", cell: 24, lit: true, roof: "flatdark" });
    s.ground(520, "snow");
    for (let r = 0; r < 5; r++) for (let i = 0; i < 12; i++) { const y = 600 + r * 60, k = 0.6 + r * 0.15, x = 80 + i * 130 * (1 + r * 0.05) + (r % 2) * 40; s.vehicle("car", x, y, { s: k, color: s.r.pick(["#7a7f86", "#3a3e44", "#8a2e2a", "#5a606a", "#2f4a6a"]) }); s.rect(x - 40 * k, y - 42 * k, 82 * k, 6 * k, "#eef2f6"); }
    s.lamps(100, 1500, 580, 150, { gap: 350 });
    s.snowfall({ count: 90 });
    return s;
  },
  // An empty car factory yard in winter, high gates closed, snow on empty parking rows, one lit window, grey dusk.
  "kr_ru-3": (s) => {
    s.sky("overcast", { top: "#5a6270", bottom: "#a9b0b8" });
    s.forest({ y: 460, type: "birch", s: 0.7, depth: 0.5, gap: 30 });
    s.building(140, 520, 1000, 130, { color: "#c9ccd2", windows: false, roof: "flatdark" });
    s.rect(820, 440, 30, 40, "#ffd59a");
    s.glow(835, 460, 60, "#ffd59a", 0.4);
    s.building(1180, 520, 380, 100, { color: "#bfc2c8", windows: false, roof: "flatdark" });
    s.ground(520, "snow");
    for (let r = 0; r < 4; r++) s.add(`<line x1="0" y1="${600 + r * 50}" x2="1600" y2="${600 + r * 50}" stroke="#c9cfd6" stroke-width="3" stroke-dasharray="6 90"/>`);
    s.rect(300, 760, 14, 140, "#4a4e54").rect(1286, 760, 14, 140, "#4a4e54");
    s.add('<g stroke="#3a3e44" stroke-width="5">' + Array.from({ length: 22 }, (_, i) => `<line x1="${314 + i * 44}" y1="770" x2="${314 + i * 44}" y2="900"/>`).join("") + '<line x1="314" y1="780" x2="1286" y2="780"/><line x1="314" y1="880" x2="1286" y2="880"/><line x1="800" y1="770" x2="800" y2="900" stroke-width="10"/></g>');
    s.snowfall({ count: 60 });
    return s;
  },
};
