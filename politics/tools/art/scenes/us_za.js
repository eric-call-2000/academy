/* United States & South Africa */
module.exports = {
  // A 1980s campus lawn with brick halls, makeshift shanties as a protest, students with blank placards, autumn trees.
  "us_za-1": (s) => {
    s.sky("afternoon", { clouds: 3 });
    s.building(140, 470, 520, 220, { color: "#9a5a44", cell: 22, roof: "flatdark" }).rect(130, 242, 540, 14, "#d9cfbd");
    s.building(900, 470, 600, 240, { color: "#a05e46", cell: 22, roof: "flatdark" }).rect(890, 222, 620, 14, "#d9cfbd");
    s.rect(700, 170, 70, 300, s.c("#9a5a44", 0)).poly([[690, 170], [780, 170], [735, 90]], "#5a4a44");
    s.add('<circle cx="735" cy="220" r="20" fill="#e9e3d6"/>');
    s.ground(470, "grass");
    s.tree("autumn", 80, 560, { s: 2.2 }).tree("autumn", 820, 520, { s: 1.6 }).tree("autumn", 1530, 560, { s: 2.3 });
    [[300, 640, 160], [520, 660, 130], [1100, 650, 170]].forEach(([x, y, w]) => {
      s.rect(x, y - 90, w, 90, "#8a7a64").poly([[x - 10, y - 90], [x + w + 10, y - 90], [x + w, y - 110], [x, y - 110]], "#7f8890");
      for (let k = x + 10; k < x + w; k += 14) s.add(`<line x1="${k}" y1="${y - 108}" x2="${k}" y2="${y - 92}" stroke="#6a7278" stroke-width="2"/>`);
      s.rect(x + w * 0.4, y - 60, w * 0.2, 60, "#3e352c");
    });
    s.crowd({ y: 780, x0: 200, x1: 1500, rows: 2, h: 110, gap: 44, signs: 9, colors: ["#3b3a3f", "#5a3a34", "#363d4f", "#4a4036", "#6a5a3e"] });
    return s;
  },
  // A long car assembly line in a bright factory hall: rows of silver sedans, robot arms, overhead conveyors.
  "us_za-2": (s) => {
    s.mood("interior", { light: "#f4f6f2" });
    s.room3d({ depth: 4.2, wall: "#c9cbc8", side: "#b9bcb9", floor: "#8a8d8c", ceiling: "#a9adae", lights: "strips", backWindows: [[500, 1100, 260, 520]] });
    s.quad("floor", [520, 1080, 900, 1, 6], "#6d7072");
    for (let z = 4.2; z >= 1.3; z -= 0.45) {
      [640, 960].forEach((X) => { const p = s.pp(X, 900, z); s.vehicle("car", p[0], p[1], { s: 2.4 / z, color: "#b9bec4" }); });
      [380, 1220].forEach((X) => { const a = s.pp(X, 900, z), b = s.pp(X, 560, z), c = s.pp(X + (X < 800 ? 160 : -160), 640, z); s.add(`<polyline points="${a[0]},${a[1]} ${b[0]},${b[1]} ${c[0]},${c[1]}" stroke="#d9a43c" stroke-width="${(18 / z).toFixed(1)}" fill="none" stroke-linejoin="round"/>`); });
    }
    for (let z = 1.2; z < 4.2; z += 0.4) s.quad("floor", [300, 1300, 180, z, z + 0.05], "#6a6e72");
    s.figure3d(1300, 1.8, { h: 230, color: "#3f5a7a", hat: "hard" }).figure3d(300, 2.4, { h: 230, color: "#3f5a7a", hat: "hard" });
    return s;
  },
  // A quiet clinic waiting room in a South African town: empty plastic chairs, a closed hatch, barred windows, a plant.
  "us_za-3": (s) => {
    s.mood("afternoon", { light: "#fff4d8" });
    s.room3d({ depth: 2.4, wall: "#d9d2b8", side: "#cfc8ad", floor: "#9a8d78", ceiling: "#e6e1d2", windows: { n: 2, side: "left", top: 200, bottom: 520 }, wainscot: true });
    for (let i = 0; i < 2; i++) { const za = 1.15 + i * 0.55; for (let k = 0; k < 4; k++) { const z = za + k * 0.08, a = s.pp(0, 200, z), b = s.pp(0, 520, z); s.add(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#5a5048" stroke-width="${(6 / z).toFixed(1)}"/>`); } }
    s.quad("front", [700, 1000, 380, 560, 2.4], "#7a8a8c");
    s.quad("front", [690, 1010, 560, 590, 2.4], "#8a7a64");
    [1.35, 1.75].forEach((z) => s.chairs3d(420, 1300, z, z + 0.01, { count: 1, gap: 130, color: "#4f7aa0" }));
    const p = s.pp(1450, 900, 1.5);
    s.add(`<rect x="${p[0] - 40}" y="${p[1] - 90}" width="80" height="90" fill="#8a5a3c"/>`);
    s.tree("palm", p[0], p[1] - 80, { s: 1.0 });
    return s;
  },
};
