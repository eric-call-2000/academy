/* Japan */
const fuji = (s, x, y, o) => {
  o = o || {};
  s.add(`<path d="M${x - 700},${y} L${x - 120},${y - 330} Q${x},${y - 350} ${x + 120},${y - 330} L${x + 700},${y} Z" fill="${s.c(o.color || "#6a7a9a", o.depth == null ? 0.4 : o.depth)}"/><path d="M${x - 230},${y - 260} L${x - 120},${y - 330} Q${x},${y - 350} ${x + 120},${y - 330} L${x + 230},${y - 260} L${x + 160},${y - 270} L${x + 90},${y - 240} L${x + 20},${y - 275} L${x - 60},${y - 245} L${x - 140},${y - 272} Z" fill="#f4f6f8"/>`);
};
const torii = (s, x, y, k) => s.add(`<g fill="#b8322a"><rect x="${x - 70 * k}" y="${y - 200 * k}" width="${14 * k}" height="${200 * k}"/><rect x="${x + 56 * k}" y="${y - 200 * k}" width="${14 * k}" height="${200 * k}"/><rect x="${x - 90 * k}" y="${y - 214 * k}" width="${180 * k}" height="${16 * k}"/><rect x="${x - 80 * k}" y="${y - 176 * k}" width="${160 * k}" height="${10 * k}"/><rect x="${x - 100 * k}" y="${y - 226 * k}" width="${200 * k}" height="${10 * k}" fill="#2a2a2a"/></g>`);
const village = (s, o) => {
  s.street3d({ vanish: [800, 520], depth: 4, left: 380, right: 1220, hmin: 260, hmax: 340, colors: ["#6b4f3c", "#5e4434"], roofs: "#3e3d42", road: "#9a8f7c", lit: false });
};
module.exports = {
  // An empty rural village street in autumn light, one elderly figure far away.
  "jp-12": (s) => {
    s.sky("afternoon", { clouds: 3 })
      .mountains({ y: 470, amp: 200, color: "forest", depth: 0.55, jag: false, step: 80 })
      .hills({ y: 520, amp: 90, color: "#5f7a4a", depth: 0.35 })
      .forest({ y: 520, x0: 600, x1: 1000, type: "autumn", s: 0.5, depth: 0.4, gap: 22 })
      .ground(520, "#8c8270")
      .road({ vanish: [800, 520], w: 1100, color: "#9a8f7c", line: false });
    const side = (dir) => {
      for (let i = 0; i < 6; i++) {
        const t = i / 6, near = 1 - t, x = 800 + dir * (180 + 520 * near), y = 520 + 360 * near * near * 0.9 + 10;
        const w = 60 + 300 * near, h = 50 + 260 * near;
        const bx = dir > 0 ? x : x - w;
        s.rect(bx, y - h, w, h, s.c("#6b4f3c", t * 0.6));
        for (let k = 0; k < 4; k++) s.rect(bx + w * (0.1 + k * 0.22), y - h * 0.7, w * 0.12, h * 0.5, s.c("#4a372b", t * 0.6));
        s.poly([[bx - w * 0.1, y - h], [bx + w * 1.1, y - h], [bx + w * 0.95, y - h - h * 0.35], [bx + w * 0.05, y - h - h * 0.35]], s.c("#3e3d42", t * 0.6));
      }
    };
    side(-1); side(1);
    s.person(812, 548, 26, { coat: true, color: "#3b3631" });
    s.tree("autumn", 1450, 760, { s: 1.6 });
    return s;
  },
  // Black-hulled 19th-century steamships anchored in a calm bay, wooded hills, a thatched fishing village, mist.
  "jp-9": (s) => s
    .sky("morning", { top: "#c9c4b0", bottom: "#ece6d4" })
    .hills({ y: 460, amp: 200, color: "#4f6a4c", depth: 0.4, jag: false })
    .fog(460, { h: 80 })
    .add(Array.from({ length: 7 }, (_, i) => `<rect x="${100 + i * 60}" y="${470}" width="44" height="26" fill="#8a7a5a"/><polygon points="${94 + i * 60},470 ${150 + i * 60},470 ${122 + i * 60},446" fill="#b8a070"/>`).join(""))
    .sea(500, { color: "#7a8a8a" })
    .ship("steam", 700, 580, { s: 0.8, smoke: true })
    .ship("steam", 1200, 640, { s: 1.1, dir: -1, smoke: true })
    .ship("boat", 300, 720, { s: 1.2, hull: "#6a5040", cabin: false }),
  // A white high-speed train on a viaduct past a snow-capped volcano, flooded rice fields reflecting the mountain.
  "jp-3": (s) => {
    s.sky("day", { top: "#4f86b8", bottom: "#d9e6ee" });
    fuji(s, 900, 520);
    s.ground(520, "#7a9a5a");
    s.rect(0, 600, 1600, 300, "#9ac0d4");
    s.add('<g opacity="0.35" transform="translate(0,1200) scale(1,-1)"><path d="M200,520 L780,190 Q900,170 1020,190 L1600,520 Z" fill="#6a7a9a"/></g>');
    for (let y = 640; y < 900; y += 60) s.add(`<line x1="0" y1="${y}" x2="1600" y2="${y}" stroke="#6a8a4a" stroke-width="5"/>`);
    s.rect(-20, 570, 1640, 18, "#c9c4bc");
    for (let x = 40; x < 1600; x += 140) s.rect(x, 588, 16, 40, "#b8b4ac");
    return s.train(300, 1200, 570, { type: "fast", color: "#f2f2ee", track: false, s: 0.9 });
  },
  // The skeletal ruin of a domed brick building by a calm river at dusk, a green park, floating paper lanterns.
  "jp-10": (s) => {
    s.sky("dusk", { top: "#3a3a6a", bottom: "#d99a8a" });
    s.city({ y: 440, h: [40, 140], depth: 0.5, lit: true });
    s.rect(560, 300, 380, 160, "#8a7a6a");
    for (let i = 0; i < 6; i++) s.rect(580 + i * 60, 330, 30, 60, "#d99a8a");
    s.add('<path d="M680,300 C680,200 720,170 760,170 C800,170 840,200 840,300" stroke="#3a3a3a" stroke-width="6" fill="none"/>' + Array.from({ length: 7 }, (_, i) => `<line x1="${690 + i * 24}" y1="300" x2="${760 + (i - 3) * 10}" y2="175" stroke="#3a3a3a" stroke-width="3"/>`).join(""));
    s.ground(460, "#4f6a44");
    s.forest({ y: 470, x0: 1000, x1: 1640, type: "oak", s: 0.9, gap: 50 });
    s.sea(520, { color: "#3a4a6a" });
    for (let i = 0; i < 40; i++) { const x = s.r() * 1600, y = 540 + Math.pow(s.r(), 0.8) * 340, k = 0.5 + (y - 540) / 300; s.glow(x, y, 26 * k, "#ffb85a", 0.6); s.rect(x - 8 * k, y - 10 * k, 16 * k, 14 * k, "#ffd38a"); }
    return s;
  },
  // A sleek white bullet train on a viaduct past green rice paddies, a snow-capped volcano behind.
  "jp-11": (s) => {
    s.sky("day", { top: "#4f86b8", bottom: "#d9e6ee" });
    fuji(s, 1100, 500, { depth: 0.45 });
    s.ground(500, "#6f9a4a").field(500, 900, { color: "#7aa64a", vanish: 400, rows: 30 });
    s.add('<path d="M-40,640 L1640,520" stroke="#c9c4bc" stroke-width="22"/>');
    for (let i = 0; i < 12; i++) s.rect(i * 140, 640 - i * 10, 16, 120, "#b8b4ac");
    return s.add('<g transform="rotate(-4 800 580)"><path d="M300,600 L300,560 L1200,560 Q1340,566 1360,600 Z" fill="#f2f2ee"/><rect x="300" y="586" width="1060" height="6" fill="#3f6aa8"/>' + Array.from({ length: 24 }, (_, i) => `<rect x="${320 + i * 36}" y="568" width="22" height="10" fill="#3a4a5a"/>`).join("") + "</g>");
  },
  // A pale granite parliament with a stepped pyramid-topped tower, cherry trees in blossom, a wide plaza.
  "jp-4": (s) => {
    s.sky("morning");
    s.rect(240, 380, 1120, 180, "#d9d2c2");
    for (let i = 0; i < 22; i++) s.rect(270 + i * 50, 410, 20, 120, "#a8a090");
    s.rect(680, 240, 240, 140, "#d9d2c2");
    for (let k = 0; k < 4; k++) s.rect(700 + k * 20, 200 - k * 30, 200 - k * 40, 34, "#cfc8b8");
    s.poly([[760, 110], [840, 110], [800, 60]], "#cfc8b8");
    s.ground(560, "#cfc8b8");
    [[140, 620], [400, 640], [1200, 640], [1460, 620]].forEach(([x, y]) => s.tree("cherry", x, y, { s: 2 }));
    return s;
  },
  // A conference hall from the back: rows of people in dark suits applauding, a small figure at a podium far away.
  "jp-5": (s) => {
    s.mood("interior", { light: "#ffffff" });
    s.room3d({ depth: 3.2, wall: "#d9d6cc", side: "#c9c6bc", floor: "#7a6a5a", ceiling: "#a8a49a", lights: "grid" });
    s.glow(800, 430, 220, "#ffffff", 0.6);
    const p = s.pp(800, 900, 3.1); s.rect(p[0] - 20, p[1] - 60, 40, 60, "#6a5040"); s.person(p[0], p[1] - 50, 60, { color: "#1e2026" });
    return s.rows3d({ z0: 1.25, z1: 2.9, rows: 8, color: "#3a3430", h: 120, aisle: 120, people: 1, personH: 220, peopleColors: ["#1a1c22", "#22242a", "#2a2c32"] });
  },
  // A grey destroyer leaving a harbour at dawn, container cranes and forested hills behind, a long wake.
  "jp-6": (s) => s
    .sky("dawn", { sun: [1300, 360], r: 40, bottom: "#f2d8a0" })
    .hills({ y: 480, amp: 160, color: "forest", depth: 0.4 })
    .crane(200, 500, 0.7, { depth: 0.3 }).crane(330, 500, 0.7, { depth: 0.3 }).crane(460, 500, 0.7, { depth: 0.3 })
    .containers(140, 500, 12, 3, { depth: 0.3, w: 30, h: 14 })
    .sea(500, { glint: 1300 })
    .ship("warship", 900, 640, { s: 1.2, dir: 1, wake: true }),
  // A busy Tokyo crossing at night in light rain, clear umbrellas, a giant screen of blank coloured bars, neon.
  "jp-7": (s) => {
    s.sky("night", { stars: 0 });
    [[0, 300], [380, 360], [1100, 340], [1400, 300]].forEach(([x, w]) => s.building(x, 600, w, 500, { color: "#2a2e3a", lit: true, cell: 18 }));
    s.rect(600, 120, 440, 260, "#141820").glow(820, 250, 400, "#9fd0ff", 0.25);
    [["#e86a4a", 160], ["#5fcf7a", 220], ["#5fa0e8", 120], ["#e8c42c", 190]].forEach(([c, h], i) => s.rect(660 + i * 90, 360 - h, 60, h, c));
    for (let i = 0; i < 10; i++) s.rect(40 + i * 160, 220 + (i % 3) * 100, 20, 120, s.r.pick(["#e86aa8", "#5fd0e8", "#e8c42c"]), 'opacity="0.8"');
    s.rect(0, 600, 1600, 300, "#24262e");
    for (let i = 0; i < 10; i++) s.rect(i * 170, 700, 90, 200, "#d9d6cc", 'opacity="0.35"');
    s.crowd({ y: 760, rows: 4, h: 70, gap: 40, rowGap: 46, umbrellas: ["#dfe6ea"], colors: ["#14161c", "#1e2028", "#2a2c34"] });
    return s.rain({ count: 200 });
  },
  // A rural village in autumn: wooden houses with tiled roofs, a red shrine gate by the forest, maples, an elder walking.
  "jp-8": (s) => {
    s.sky("afternoon");
    s.hills({ y: 470, amp: 200, color: "forest", depth: 0.45, jag: false });
    s.forest({ y: 500, type: "autumn", s: 0.9, gap: 30, color: "#c9462a", depth: 0.2 });
    village(s);
    const p = s.pp(800, 900, 3.2); torii(s, p[0], p[1], 0.45);
    s.persp({ vanish: [800, 520], depth: 4 });
    const q = s.pp(860, 900, 3); s.person(q[0], q[1], 360 / 3, { coat: true, color: "#3b3631" });
    return s.tree("autumn", 140, 860, { s: 2.6, color: "#c9462a" });
  },
};
