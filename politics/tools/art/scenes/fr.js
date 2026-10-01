/* France */
module.exports = {
  // A huge crowd in 18th-century clothes surging toward a massive medieval fortress with round towers, smoke.
  "fr-9": (s) => {
    s.sky("day", { clouds: 4 });
    s.rect(380, 200, 840, 320, "#8a8478");
    [380, 600, 1000, 1220].forEach((x) => { s.rect(x - 60, 160, 120, 360, "#7f796e"); s.fortWall(x - 64, x + 64, 160, 20, { color: "#7f796e", merlon: 10 }); });
    s.fortWall(380, 1220, 200, 20, { color: "#8a8478", merlon: 12 });
    s.smoke(500, 260, { len: 600, w: 70, rise: 1.2 }).smoke(1100, 300, { len: 500, w: 60, rise: 1, dir: -1 });
    s.ground(520, "#9a8a6a");
    return s.crowd({ y: 580, rows: 8, h: 50, gap: 12, rowGap: 40, walk: true, signs: 6, colors: ["#3a3432", "#5a3e2e", "#e2d6bc", "#4a5a6a", "#7a2a22"] });
  },
  // A Parisian boulevard of pale stone buildings, protesters in yellow vests seen from behind, a distant arch.
  "fr-3": (s) => {
    s.sky("overcast");
    s.street3d({ vanish: [800, 460], depth: 5, left: 160, right: 1440, hmin: 520, hmax: 620, colors: ["#d9cdb6", "#cfc3aa", "#e2d6bf"], roofs: "#5a6068", road: "#6a6866", lit: false });
    s.arch(800, 470, 0.32, { attic: true, depth: 0.3 });
    s.persp({ vanish: [800, 460], depth: 5 });
    for (let z = 1.3; z < 6; z *= 1.3) [380, 1220].forEach((X) => { const p = s.pp(X, 900, z); s.tree("bare", p[0], p[1], { s: 2.4 / z }); });
    for (let i = 0; i < 90; i++) { const z = 1.6 + Math.pow(s.r(), 1.3) * 3.5, X = 420 + s.r() * 760, p = s.pp(X, 900, z); s.person(p[0], p[1], 320 / z, { color: "#2e3036" }); if (s.r() < 0.75) s.add(`<rect x="${p[0] - 50 / z}" y="${p[1] - 250 / z}" width="${100 / z}" height="${90 / z}" fill="#e8d23c" opacity="0.95"/>`); }
    return s;
  },
  // A whitewashed Mediterranean city climbing above a harbour, a dense casbah, colonial arcades, deep blue sea.
  "fr-10": (s) => {
    s.sky("desert", { top: "#4f86b8", bottom: "#d9e6ee" });
    s.hills({ y: 520, amp: 300, color: "#c9b48a", peak: 600, peakW: 700, depth: 0.1 });
    for (let k = 0; k < 9; k++) { const y = 260 + k * 34; for (let x = 200 + k * 18 + s.r() * 30; x < 1100 - k * 12; x += 34 + s.r() * 20) s.rect(x, y, 30 + s.r() * 20, 30, s.r.pick(["#f4f1ea", "#ece6d8", "#e6dfd0"])), s.rect(x + 8, y + 10, 6, 10, "#4a4a4a"); }
    s.rect(0, 560, 1600, 70, "#f2ede2");
    for (let i = 0; i < 30; i++) s.add(`<path d="M${20 + i * 54},630 L${20 + i * 54},595 A18,18 0 0 1 ${56 + i * 54},595 L${56 + i * 54},630 Z" fill="#5a5a5a"/>`);
    s.minaret(1180, 560, 240, { color: "#f2ede2" });
    s.sea(630, { color: "#2f6a9a", glint: 1300 });
    return s.ship("boat", 400, 720, { s: 1.1 }).ship("fishing", 900, 760, { s: 0.8 });
  },
  // A narrow Parisian street of cream stone buildings, a cobblestone barricade with chairs and a toppled car, smoke.
  "fr-11": (s) => {
    s.sky("morning");
    s.street3d({ vanish: [800, 430], depth: 4, left: 360, right: 1240, hmin: 600, hmax: 700, colors: ["#e2d6bf", "#d9cdb6"], roofs: "#5a6068", road: "#7a7670", lit: false });
    s.persp({ vanish: [800, 430], depth: 4 });
    for (let z = 1.1; z < 6; z *= 1.25) [360, 1240].forEach((X) => s.quad("wallX", [X, 380, 400, z, z * 1.18], "#2a2a2a"));
    s.smoke(700, 560, { len: 600, w: 80, rise: 1.5 });
    s.ridge({ y: 760, amp: 120, color: "#6a645e", x0: 280, x1: 1320, jag: true, step: 30, bottom: 900 });
    s.add('<g transform="translate(980,700) rotate(160)"><rect x="-90" y="-30" width="180" height="50" rx="10" fill="#5a6a7a"/><rect x="-50" y="-60" width="90" height="34" rx="8" fill="#5a6a7a"/><circle cx="-55" cy="22" r="20" fill="#222"/><circle cx="55" cy="22" r="20" fill="#222"/></g>');
    [[500, 700, -30], [620, 690, 40], [1180, 720, 20]].forEach(([x, y, a]) => s.add(`<g transform="translate(${x},${y}) rotate(${a})"><rect x="-30" y="-10" width="60" height="10" fill="#4a3a30"/><rect x="-30" y="-60" width="8" height="60" fill="#4a3a30"/><rect x="22" y="-10" width="8" height="40" fill="#4a3a30"/><rect x="-30" y="-10" width="8" height="40" fill="#4a3a30"/></g>`));
    return s;
  },
  // The gravel courtyard of an 18th-century palace at night, lit windows, two guards at a wrought-iron gate, black cars.
  "fr-4": (s) => {
    s.sky("night", { stars: 20 });
    s.palace(800, 560, 1.7, { color: "#d9cdb6", cols: 8, h: 200, w: 820 });
    for (let i = 0; i < 16; i++) s.rect(130 + i * 86, 420, 30, 80, "#ffd38a", 'opacity="0.85"');
    s.ground(560, "#a8a090");
    s.vehicle("car", 560, 660, { s: 1.6, color: "#151618" }).vehicle("car", 980, 670, { s: 1.6, color: "#151618", dir: -1 });
    s.add('<g stroke="#121212" stroke-width="5">' + Array.from({ length: 41 }, (_, i) => `<line x1="${i * 40}" y1="900" x2="${i * 40}" y2="${700 - (i % 4 === 0 ? 20 : 0)}"/>`).join("") + '<line x1="0" y1="730" x2="1600" y2="730"/></g>');
    s.rect(560, 640, 40, 260, "#d9cdb6").rect(1000, 640, 40, 260, "#d9cdb6");
    s.person(640, 880, 150, { color: "#1e2230", helmet: true }).person(960, 880, 150, { color: "#1e2230", helmet: true });
    return s;
  },
  // An older couple from behind on a green park bench in a provincial square, plane trees, a fountain, a café.
  "fr-5": (s) => {
    s.sky("golden", { sun: [1300, 300], r: 36 });
    s.house(-20, 560, 300, 240, { color: "#e2cfa8", roofColor: "#8a5a44" }).house(1260, 560, 360, 260, { color: "#d9c09a", roofColor: "#7a4a3c" });
    s.rect(1280, 470, 300, 20, "#b8322a").rect(1280, 490, 300, 70, "#4a3a30");
    for (let i = 0; i < 4; i++) s.add(`<circle cx="${1300 + i * 70}" cy="600" r="16" fill="#e8e2d2"/>`);
    s.ground(560, "#c9b48e");
    s.add('<ellipse cx="760" cy="620" rx="140" ry="24" fill="#a8a090"/><rect x="740" y="520" width="40" height="100" fill="#a8a090"/><ellipse cx="760" cy="520" rx="60" ry="12" fill="#a8a090"/><path d="M760,520 Q720,460 690,560 M760,520 Q800,460 830,560" stroke="#dfe9ee" stroke-width="5" fill="none" opacity="0.7"/>');
    s.person(980, 620, 40).person(1020, 625, 36, { walk: true });
    [300, 1150].forEach((x) => s.tree("oak", x, 700, { s: 2.6, color: "#6a8a4a" }));
    s.rect(500, 790, 360, 14, "#3f6a4c").rect(500, 740, 360, 12, "#3f6a4c").rect(500, 765, 360, 12, "#3f6a4c").rect(520, 804, 10, 60, "#2a3a2c").rect(830, 804, 10, 60, "#2a3a2c");
    return s.person(620, 830, 150, { color: "#4a4a5a" }).person(740, 830, 140, { color: "#6a4a4a" });
  },
  // A long modern ministry building stretching over a riverbank at dusk, lit windows reflected, a barge.
  "fr-6": (s) => s
    .sky("dusk", { top: "#3f5a8a", bottom: "#e8a37c" })
    .city({ y: 440, h: [40, 100], depth: 0.6 })
    .building(-20, 520, 1640, 140, { color: "#9a9a96", cell: 22, lit: true, litShare: 0.7 })
    .add(Array.from({ length: 8 }, (_, i) => `<rect x="${100 + i * 200}" y="520" width="24" height="60" fill="#7a7a76"/>`).join(""))
    .sea(560, { color: "#3a4a6a" })
    .add(Array.from({ length: 60 }, (_, i) => `<rect x="${(i * 97) % 1600}" y="${580 + (i * 37) % 200}" width="22" height="3" fill="#ffd59a" opacity="0.4"/>`).join(""))
    .ship("bulk", 900, 720, { s: 0.6, dir: -1 }),
  // A row of identical blank metal election poster boards on a town street, a boulangerie with a striped awning.
  "fr-7": (s) => {
    s.sky("morning");
    s.house(-20, 600, 420, 300, { color: "#e2d6bf", roofColor: "#5a6068" }).house(1100, 600, 520, 320, { color: "#d9cdb6", roofColor: "#5a6068" });
    s.rect(1130, 470, 400, 20, "#4a6a8a");
    for (let i = 0; i < 8; i++) s.poly([[1130 + i * 50, 470], [1155 + i * 50, 470], [1150 + i * 50, 510], [1125 + i * 50, 510]], i % 2 ? "#e8e2d2" : "#4a6a8a");
    s.rect(1150, 520, 360, 80, "#3a3a3a").ground(600, "#a8a49c");
    for (let i = 0; i < 9; i++) { const x = 160 + i * 110; s.rect(x, 560, 96, 130, "#9aa0a4").rect(x + 6, 566, 84, 118, "#d9dcdc").rect(x + 40, 690, 14, 60, "#6a6e72"); }
    return s.bicycle(1000, 820, 2.4, { color: "#2a2c30" }).person(1000, 760, 120, { color: "#3a3e46" });
  },
  // Concrete housing tower blocks in a suburb at dusk, a modern tram in front, a small mosque with a green dome.
  "fr-12": (s) => {
    s.sky("dusk", { top: "#3a4a7a", bottom: "#e0a07a" });
    [[60, 420], [340, 520], [1000, 460], [1280, 540]].forEach(([x, h]) => s.building(x, 640, 220, h, { color: "#a8a49c", cell: 20, lit: true, litShare: 0.45 }));
    s.rect(640, 560, 220, 80, "#ece6d8").dome(750, 560, 60, { color: "#4f8a5a" }).minaret(880, 640, 160, { color: "#ece6d8" });
    s.ground(640, "#5a5a56").rect(0, 720, 1600, 8, "#8a8a86");
    s.rect(200, 660, 900, 80, "#d9dcdc").rect(200, 660, 900, 10, "#4a8a9a");
    for (let i = 0; i < 14; i++) s.rect(230 + i * 62, 680, 40, 30, "#ffd38a", 'opacity="0.85"');
    return s.add('<line x1="0" y1="640" x2="1600" y2="640" stroke="#2a2a2a" stroke-width="2"/>');
  },
  // A grand semicircular chamber from a high gallery: red velvet seats mostly empty, a marble rostrum, columns.
  "fr-8": (s) => {
    s.mood("afternoon");
    s.rect(0, 0, 1600, 900, "#d9c49a");
    s.add('<rect x="0" y="0" width="1600" height="200" fill="#c9a87a"/><ellipse cx="800" cy="60" rx="600" ry="120" fill="#e8d4a8" opacity="0.6"/>');
    for (let i = 0; i < 10; i++) s.rect(120 + i * 150, 120, 40, 360, "#ece2c8");
    s.rect(600, 300, 400, 180, "#e8e2d2").rect(700, 360, 200, 120, "#d9cdb6");
    s.rect(0, 480, 1600, 420, "#6a2a26");
    return s.hemicycle({ x: 800, y: 480, r0: 160, rows: 9, step: 80, tilt: 0.5, color: "#9a2a2a", people: 0.08, peopleColors: ["#1e2026", "#2a2c30"] });
  },
};
