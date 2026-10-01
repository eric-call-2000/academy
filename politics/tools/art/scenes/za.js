/* South Africa */
const unionBuildings = (s, x, y, k, o) => {
  o = o || {};
  const c = s.c("#d4b88a", o.depth);
  s.add(`<path d="M${x - 500 * k},${y} L${x - 500 * k},${y - 140 * k} Q${x},${y - 60 * k} ${x + 500 * k},${y - 140 * k} L${x + 500 * k},${y} Z" fill="${c}"/>`);
  for (let i = 0; i < 20; i++) { const t = i / 19, xx = x - 460 * k + t * 920 * k, yy = y - 130 * k + Math.sin(t * Math.PI) * 60 * k; s.rect(xx - 6 * k, yy, 12 * k, 90 * k, s.c("#b89a6a", o.depth)); }
  [-1, 1].forEach((d) => { const tx = x + d * 220 * k; s.rect(tx - 40 * k, y - 300 * k, 80 * k, 220 * k, c); s.dome(tx, y - 300 * k, 44 * k, { color: "#b8784a", depth: o.depth }); });
};
module.exports = {
  // A sandstone government building with curved colonnades and two domed towers on a hill, terraced gardens, jacarandas.
  "za-9": (s) => {
    s.sky("day", { top: "#3f7ab8", bottom: "#d0e0ec" });
    unionBuildings(s, 800, 440, 0.9);
    s.ground(440, "#5f8a4a");
    for (let k = 0; k < 4; k++) s.rect(200 - k * 40, 480 + k * 50, 1200 + k * 80, 12, "#c9b892");
    for (let i = 0; i < 8; i++) s.tree("oak", 120 + i * 200, 760 + (i % 2) * 40, { s: 1.4, color: "#9a6ac0" });
    return s.person(700, 600, 40).person(740, 604, 38, { color: "#5a4a3c" });
  },
  // A low rocky island with a lighthouse and plain prison buildings, a flat-topped mountain and city across the bay.
  "za-3": (s) => {
    s.sky("dawn");
    s.add('<path d="M600,420 L700,300 L1300,300 L1420,420 Z" fill="#7a7a8a"/>');
    s.city({ y: 430, x0: 500, x1: 1500, h: [20, 60], depth: 0.6, lit: false });
    s.sea(430, { color: "#8a9ab0", glint: 900 });
    s.ridge({ y: 760, amp: 60, color: "#6a6a5a", jag: true, step: 30, x0: 0, x1: 1200 });
    s.rect(240, 620, 400, 80, "#d9d2c2").rect(700, 640, 260, 60, "#cfc8b8").poly([[230, 620], [650, 620], [620, 600], [260, 600]], "#8a8478");
    for (let i = 0; i < 10; i++) s.rect(260 + i * 38, 640, 14, 20, "#5a5a5a");
    return s.rect(1060, 540, 40, 160, "#f2efe8").rect(1050, 520, 60, 24, "#3a3a3a").glow(1080, 530, 50, "#fff0c4", 0.6);
  },
  // Teenage schoolchildren in 1970s uniforms marching down a dusty township street of small brick houses, raised fists.
  "za-10": (s) => {
    s.sky("winter", { top: "#9ab0c4", bottom: "#e0dccc" });
    s.persp({ vanish: [800, 460], depth: 6 });
    s.ground(460, "#b8a07a");
    for (let z = 1.1; z < 8; z *= 1.18) [-200, 1800].forEach((X) => { const a = s.pp(X, 900, z), w = 260 / z, h = 160 / z; const x = X < 800 ? a[0] - w * 0.2 : a[0] - w * 0.8; s.rect(x, a[1] - h, w, h, s.c("#a8644a", (z - 1) / 10)); s.poly([[x - 4, a[1] - h], [x + w + 4, a[1] - h], [x + w / 2, a[1] - h - h * 0.35]], s.c("#7a7a7a", (z - 1) / 10)); });
    for (let i = 0; i < 70; i++) { const z = 1.6 + Math.pow(s.r(), 1.3) * 5, X = 300 + s.r() * 1000, p = s.pp(X, 900, z), h = 340 / z; s.person(p[0], p[1], h, { color: s.r.pick(["#2a3a5a", "#3a3a4a"]), walk: true }); s.rect(p[0] - h * 0.13, p[1] - h * 0.78, h * 0.26, h * 0.36, "#f2efe8"); if (s.r() < 0.25) s.add(`<rect x="${p[0] + h * 0.1}" y="${p[1] - h * 1.3}" width="${h * 0.08}" height="${h * 0.4}" fill="#2a2a2a"/><circle cx="${p[0] + h * 0.14}" cy="${p[1] - h * 1.32}" r="${h * 0.08}" fill="#3a2a24"/>`); if (s.r() < 0.15) s.rect(p[0] - h * 0.3, p[1] - h * 1.5, h * 0.6, h * 0.35, "#d9c8a8"); }
    return s;
  },
  // A 1990s community hall: a long table with a white cloth, microphones and headphones, people listening on plastic chairs.
  "za-11": (s) => {
    s.mood("afternoon", { light: "#fff2d0" });
    s.room3d({ depth: 2.4, wall: "#d9d2c0", side: "#cfc8b4", floor: "#8a7a62", ceiling: "#e2ddd0", windows: { n: 3, side: "both", top: 40, bottom: 220 } });
    s.box3d(360, 1240, 580, 640, 2.0, 2.15, "#f4f1ea");
    s.quad("front", [360, 1240, 580, 760, 2.0], "#f4f1ea");
    const p = s.pp(800, 580, 2.05); for (let i = 0; i < 5; i++) s.add(`<line x1="${p[0] - 200 + i * 100}" y1="${p[1]}" x2="${p[0] - 200 + i * 100}" y2="${p[1] - 26}" stroke="#1a1a1a" stroke-width="3"/>`);
    return s.rows3d({ X0: 220, X1: 1380, z0: 1.25, z1: 1.9, rows: 4, color: "#3f6a8a", h: 120, aisle: 120, people: 1, personH: 240, peopleColors: ["#2a2a2e", "#4a3a34", "#3a4a5a", "#5a4a3c"] });
  },
  // A long sandstone government building with two wings, colonnades and an amphitheatre on a hill, terraced gardens.
  "za-4": (s) => {
    s.sky("morning");
    s.city({ y: 640, h: [40, 120], depth: 0.4, lit: false });
    s.hills({ y: 520, amp: 160, color: "#5f8a4a", peak: 800, peakW: 800, depth: 0.1 });
    unionBuildings(s, 800, 380, 0.8);
    for (let k = 0; k < 4; k++) s.rect(260 - k * 40, 420 + k * 40, 1080 + k * 80, 10, "#c9b892");
    return s;
  },
  // A conference hall set for a summit: a huge ring of tables with microphones and glasses, one section with no chairs.
  "za-5": (s) => {
    s.mood("night", { light: "#cfe0ff" });
    s.room3d({ depth: 3, wall: "#3a4a6a", side: "#34425e", floor: "#2a3248", ceiling: "#2a3248", lights: "grid" });
    s.add('<ellipse cx="800" cy="680" rx="620" ry="170" fill="none" stroke="#e8e6e0" stroke-width="44"/>');
    for (let i = 0; i < 40; i++) { const a = i / 40 * Math.PI * 2; if (a > 0.3 && a < 0.9) continue; const x = 800 + Math.cos(a) * 690, y = 680 + Math.sin(a) * 210; s.rect(x - 10, y - 30, 20, 30, "#1e2230"); const mx = 800 + Math.cos(a) * 620, my = 680 + Math.sin(a) * 170; s.add(`<line x1="${mx}" y1="${my - 6}" x2="${mx - 6}" y2="${my - 26}" stroke="#1a1a1a" stroke-width="2"/><rect x="${mx + 6}" y="${my - 16}" width="6" height="12" fill="#dfe9ee" opacity="0.8"/>`); }
    return s;
  },
  // A formal hearing room: a long table of binders and microphones, a lone witness chair facing a raised panel of three chairs.
  "za-6": (s) => {
    s.mood("day", { light: "#f2f4ee" });
    s.room3d({ depth: 2.4, wall: "#8a6a4a", side: "#7a5a3e", floor: "#5a4a3a", ceiling: "#d9dcd8", lights: "strips", panels: true });
    s.box3d(460, 1140, 520, 640, 2.15, 2.3, "#6a4a30");
    for (let i = 0; i < 3; i++) s.chair3d(600 + i * 200, 2.32, { color: "#2a2a2e", floorY: 640 });
    s.box3d(560, 1040, 700, 760, 1.5, 1.75, "#7a5034");
    for (let i = 0; i < 10; i++) s.box3d(580 + i * 44, 616 + i * 44, 650, 700, 1.55, 1.62, s.r.pick(["#2a3a5a", "#3a3a3a", "#5a2a2a"]));
    return s.chair3d(800, 1.3, { color: "#2a2a2e" });
  },
  // A patient queue of voters outside a township community hall on a sunny morning, colourful houses, a jacaranda.
  "za-7": (s) => {
    s.sky("day");
    for (let i = 0; i < 9; i++) s.house(i * 180 - 20, 480, 150, 80, { color: s.r.pick(["#e8a0a0", "#a0c4e0", "#e8d080", "#a8d0a0", "#e8e2d2"]), roofColor: "#8a8a8a", depth: 0.3 });
    s.rect(500, 380, 600, 180, "#d9d2c2").poly([[480, 380], [1120, 380], [1080, 340], [520, 340]], "#9a948a");
    s.ground(560, "#b8a07a");
    s.tree("oak", 1350, 640, { s: 2, color: "#9a6ac0" });
    for (let x = 200; x < 1500; x += 500) { s.add(`<line x1="${x}" y1="620" x2="${x}" y2="380" stroke="#4a4a4a" stroke-width="5"/>`); s.rect(x - 30, 420, 60, 80, "#efe9dc"); }
    for (let i = 0; i < 18; i++) s.person(700 - i * 40, 580 + i * 18, 60 + i * 6, { color: s.r.pick(["#3a3432", "#5a3a3a", "#3a4a5a"]), robe: s.r() < 0.4 ? s.r.pick(["#c9763c", "#3f8a6a", "#c9b89a"]) : null });
    return s;
  },
  // Golden Free State farmland with fenced maize, a farmhouse among trees, and far off a cluster of tin-roofed houses.
  "za-12": (s) => {
    s.sky("afternoon", { clouds: 6, cloudY: [80, 340] });
    s.ground(480, "#c9a24a").field(480, 900, { color: "#c4a04a", vanish: 600 });
    s.forest({ y: 500, x0: 300, x1: 500, type: "oak", s: 0.8, gap: 30, depth: 0.2 }).house(360, 500, 100, 50, { color: "#f2efe8", roofColor: "#8a4a3c", depth: 0.2 });
    for (let i = 0; i < 24; i++) s.rect(1100 + (i % 8) * 34, 470 + Math.floor(i / 8) * 10, 30, 12, s.r.pick(["#9aa0a4", "#8a8f94", "#a8acb0"]));
    return s.fence(-10, 1610, 620, 40, { gap: 90, color: "#6a5a4a" });
  },
  // A container port at dusk: gantry cranes, stacked containers, a freight train, power station cooling towers far off.
  "za-8": (s) => {
    s.sky("dusk", { top: "#4a3a6a", bottom: "#f2a06a" });
    [1200, 1320, 1440].forEach((x) => s.add(`<path d="M${x - 50},470 Q${x - 30},400 ${x - 36},340 L${x + 36},340 Q${x + 30},400 ${x + 50},470 Z" fill="${s.c("#9a8a8a", 0.4)}"/>`) && s.smoke(x, 340, { len: 200, rise: 2, w: 30 }));
    s.sea(470, { color: "#5a5a7a" });
    for (let i = 0; i < 6; i++) s.crane(150 + i * 170, 560, 1, { color: "#c4573c" });
    s.rect(0, 560, 1600, 340, "#6a6466");
    s.containers(0, 720, 32, 4, { w: 48, h: 24 });
    return s.railcars(-40, 1660, 820, { box: true, color: "#4a3a34" });
  },
};
