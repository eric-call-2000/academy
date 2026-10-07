/* Germany and China */
module.exports = {
  // A car assembly line: orange robot arms welding silver car bodies, sparks, workers behind, bright industrial light.
  "de_cn-1": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.room3d({ depth: 4, wall: "#d9dcdc", side: "#c9cccc", floor: "#a8acae", ceiling: "#b8bcbe", lights: "strips" });
    for (let i = 5; i >= 0; i--) { const z = 1.3 + i * 0.45, p = s.pp(800, 900, z), k = 1 / z; s.add(`<path d="M${p[0] - 140 * k},${p[1] - 40 * k} L${p[0] - 140 * k},${p[1] - 110 * k} L${p[0] - 70 * k},${p[1] - 120 * k} L${p[0] - 30 * k},${p[1] - 180 * k} L${p[0] + 70 * k},${p[1] - 180 * k} L${p[0] + 110 * k},${p[1] - 120 * k} L${p[0] + 150 * k},${p[1] - 110 * k} L${p[0] + 150 * k},${p[1] - 40 * k} Z" fill="#c9ccd0"/>`); [-1, 1].forEach((d) => { const bx = p[0] + d * 320 * k; s.add(`<path d="M${bx},${p[1]} L${bx},${p[1] - 160 * k} L${bx - d * 120 * k},${p[1] - 260 * k} L${bx - d * 180 * k},${p[1] - 190 * k}" stroke="#e0782c" stroke-width="${24 * k}" fill="none" stroke-linecap="round"/>`); s.glow(bx - d * 180 * k, p[1] - 190 * k, 40 * k, "#fff4b0", 0.9); }); }
    return s.figure3d(250, 3.2, { h: 360, color: "#3a4a6a" }).figure3d(1350, 3.4, { h: 360, color: "#3a4a6a" });
  },
  // Several large orange robot arms standing still in a quiet clean factory hall, cool blue window light, polished floor.
  "de_cn-2": (s) => {
    s.mood("winter", { light: "#cfe0ff" });
    s.room3d({ depth: 3.4, wall: "#a8b4c0", side: "#9aa6b2", floor: "#c4ccd4", ceiling: "#8a96a2", windows: { n: 4, side: "both", top: 40, bottom: 260 } });
    [[500, 1.6], [1100, 1.6], [400, 2.4], [1200, 2.4], [700, 3], [900, 3]].forEach(([X, z]) => { const p = s.pp(X, 900, z), k = 1 / z, d = X < 800 ? 1 : -1; s.rect(p[0] - 50 * k, p[1] - 40 * k, 100 * k, 40 * k, "#5a5e64"); s.add(`<path d="M${p[0]},${p[1] - 40 * k} L${p[0]},${p[1] - 220 * k} L${p[0] + d * 160 * k},${p[1] - 320 * k} L${p[0] + d * 220 * k},${p[1] - 250 * k}" stroke="#e0782c" stroke-width="${40 * k}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`); });
    return s;
  },
  // A huge port terminal with thousands of new cars in neat rows beside a giant car carrier, cranes, low evening sun.
  "de_cn-3": (s) => {
    s.sky("golden", { sun: [1400, 260], r: 36 });
    s.sea(260, { color: "#6a7a9a", glint: 1400 });
    s.rect(900, 120, 600, 160, "#f2efe8");
    s.crane(300, 280, 0.6).crane(450, 280, 0.6);
    s.rect(0, 290, 1600, 610, "#8a8682");
    for (let r = 0; r < 18; r++) for (let i = 0; i < 40; i++) { const y = 310 + r * 32, k = 0.4 + r * 0.04; s.rect(i * 40 + (r % 2) * 20, y, 26 * k + 6, 14 * k + 4, ["#e8e6e0", "#3a3e44", "#a8322a", "#5a7a9a", "#c9ccd0"][(i * 3 + r) % 5]); }
    return s;
  },
};
