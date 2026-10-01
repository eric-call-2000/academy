/* South Africa and China */
module.exports = {
  // An empty diplomatic office: packed cardboard boxes, a cleared desk, bare picture hooks, jacarandas through the window.
  "za_cn-1": (s) => {
    s.mood("afternoon", { light: "#ffe9c4" });
    s.room3d({ depth: 2.2, wall: "#d9d2c0", side: "#cfc8b4", floor: "#8a6a4a", ceiling: "#e8e2d4", backWindows: [[900, 1300, 200, 560]] });
    s.add(Array.from({ length: 8 }, (_, i) => `<circle cx="${960 + (i % 4) * 90}" cy="${300 + Math.floor(i / 4) * 90}" r="50" fill="#9a6ac0" opacity="0.85"/>`).join(""));
    s.persp({ vanish: [800, 414], depth: 2.2 });
    s.add('<circle cx="560" cy="280" r="4" fill="#3a3a3a"/><circle cx="700" cy="300" r="4" fill="#3a3a3a"/>');
    s.box3d(500, 900, 600, 640, 1.6, 1.9, "#6a4a30");
    [[260, 1.3], [380, 1.35], [300, 1.5], [1140, 1.4]].forEach(([X, z], i) => s.box3d(X, X + 110, 780 - (i === 2 ? 120 : 0), 900 - (i === 2 ? 120 : 0), z, z + 0.08, "#c4a070"));
    return s;
  },
  // Grey warships in formation off a subtropical harbour city of high-rises and a long beach, blue Indian Ocean.
  "za_cn-2": (s) => s
    .sky("day", { clouds: 4 })
    .city({ y: 440, style: "towers", h: [80, 220], depth: 0.4, lit: false })
    .rect(0, 440, 1600, 20, "#e2cfa4")
    .sea(460, { color: "#2f6aa8" })
    .ship("warship", 300, 560, { s: 0.6, depth: 0.15 })
    .ship("warship", 760, 620, { s: 0.8, depth: 0.1 })
    .ship("frigate", 1250, 700, { s: 1 }),
  // Long rows of new cars in many colours at a port terminal beside a huge car carrier, cranes and a harbour city.
  "za_cn-3": (s) => {
    s.sky("day");
    s.city({ y: 360, h: [60, 180], depth: 0.45, lit: false });
    s.sea(360, { color: "#4f7a9a" });
    s.rect(800, 160, 700, 220, "#f2efe8");
    s.crane(300, 380, 0.6).crane(460, 380, 0.6);
    s.rect(0, 390, 1600, 510, "#8a8682");
    for (let r = 0; r < 14; r++) for (let i = 0; i < 40; i++) { const y = 410 + r * 34, k = 0.4 + r * 0.05; s.rect(i * 40 + (r % 2) * 20, y, 26 * k + 6, 14 * k + 4, ["#e8e6e0", "#3a3e44", "#a8322a", "#5a7a9a", "#e8c42c", "#3f8a5a"][(i * 5 + r) % 6]); }
    return s;
  },
};
