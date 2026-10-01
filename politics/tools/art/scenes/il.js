/* Israel */
module.exports = {
  // A modest whitewashed building on a tree-lined boulevard, Bauhaus buildings around it, afternoon light.
  "il-9": (s) => {
    s.sky("afternoon");
    [[60, 260], [1180, 300]].forEach(([x, w]) => { s.rect(x, 300, w, 260, "#efe9dc"); for (let k = 0; k < 3; k++) s.rect(x, 340 + k * 70, w, 14, "#d9d2c2"); s.add(`<path d="M${x + w},300 A40,40 0 0 1 ${x + w},380 Z" fill="#efe9dc"/>`); });
    s.rect(560, 360, 480, 200, "#f4f1ea").rect(560, 350, 480, 14, "#e2ddd0");
    for (let i = 0; i < 6; i++) { s.rect(590 + i * 76, 390, 40, 60, "#6a7a86"); s.rect(590 + i * 76, 480, 40, 60, "#6a7a86"); }
    s.ground(560, "#b8b0a0");
    s.persp({ vanish: [800, 520], depth: 6 });
    for (let z = 1.2; z < 6; z *= 1.3) [300, 1300].forEach((X) => { const p = s.pp(X, 900, z); s.tree("oak", p[0], p[1], { s: 2.4 / z, color: "#5f7a4a" }); });
    return s;
  },
  // Honey-coloured old city walls at golden hour, a golden dome and bell towers behind, olive trees, a path.
  "il-3": (s) => s
    .sky("golden", { sun: [1350, 300], r: 40 })
    .dome(820, 380, 90, { color: "#d9a92c" })
    .rect(740, 380, 160, 70, "#3f6a8a")
    .spire(500, 420, 170, { color: "#c9a87a" }).spire(1120, 420, 140, { color: "#c9a87a" })
    .fortWall(-20, 1620, 520, 120, { color: "#d4b88a" })
    .rect(700, 440, 90, 80, "#4a3a2a")
    .hills({ y: 640, amp: 80, color: "#9a8a5a", depth: 0.1 })
    .add('<path d="M200,900 Q500,700 760,640" stroke="#d9c49a" stroke-width="40" fill="none"/>')
    .forest({ y: 720, type: "oak", s: 0.9, gap: 110, color: "#7a8a6a", spread: 120 }),
  // The Old City at dawn from a hillside: a golden dome, pale stone walls and gates, cypress trees.
  "il-10": (s) => {
    s.sky("dawn", { sun: [300, 300], r: 40 });
    s.city({ y: 520, h: [40, 90], color: "#d9cdb6", depth: 0.25, lit: false });
    s.rect(680, 400, 240, 70, "#d9cdb6").rect(720, 400, 160, 70, "#3f6a8a").dome(800, 400, 80, { color: "#e0b030" });
    s.fortWall(-20, 1620, 580, 90, { color: "#d4c09a" });
    s.add('<path d="M560,580 L560,530 A30,30 0 0 1 620,530 L620,580 Z" fill="#4a3a2a"/><path d="M1060,580 L1060,530 A30,30 0 0 1 1120,530 L1120,580 Z" fill="#4a3a2a"/>');
    s.hills({ y: 720, amp: 100, color: "#8a8a5a", depth: 0.05 });
    return s.forest({ y: 800, type: "cypress", s: 1.4, gap: 120, spread: 80 });
  },
  // A big city square at night among modernist apartment buildings, a memorial of dark basalt stones, candles.
  "il-11": (s) => {
    s.sky("night", { stars: 10 });
    [[0, 260], [300, 200], [1100, 240], [1380, 220]].forEach(([x, h]) => s.building(x, 520, 260, h, { color: "#6a6e78", cell: 22, lit: true }));
    s.building(560, 520, 480, 200, { color: "#5a5e68", cell: 22, lit: true });
    s.ground(520, "#3a3a40");
    for (let i = 0; i < 9; i++) s.poly([[540 + i * 60, 760], [560 + i * 60, 660 - (i % 3) * 20], [600 + i * 60, 680], [610 + i * 60, 760]], "#2a2a2e");
    return s.candles(380, 1220, 800, 70);
  },
  // A modern stone parliament on a hill at dusk, a bronze candelabrum sculpture on the lawn, cypress rows.
  "il-4": (s) => {
    s.sky("dusk", { top: "#2a3a6a", bottom: "#a0a0c0" });
    s.hills({ y: 520, amp: 60, color: "#3a4a3a", depth: 0.1 });
    s.rect(380, 340, 840, 160, "#d9cdb6");
    for (let i = 0; i < 12; i++) s.rect(410 + i * 68, 360, 30, 120, "#ffd38a", 'opacity="0.8"');
    s.rect(360, 320, 880, 24, "#cfc3aa");
    s.forest({ y: 520, type: "cypress", s: 0.7, gap: 40, x0: 0, x1: 340 }).forest({ y: 520, type: "cypress", s: 0.7, gap: 40, x0: 1260, x1: 1600 });
    s.ground(560, "#4a5a3a");
    s.rect(780, 600, 40, 180, "#6a5030").rect(700, 780, 200, 20, "#6a5030");
    for (let i = 1; i <= 3; i++) s.add(`<path d="M800,${640 + i * 20} Q${800 - i * 50},${640 + i * 20} ${800 - i * 50},${560 - i * 10} M800,${640 + i * 20} Q${800 + i * 50},${640 + i * 20} ${800 + i * 50},${560 - i * 10}" stroke="#6a5030" stroke-width="12" fill="none"/>`);
    return s;
  },
  // A concrete wall at dusk covered in blank white posters, a quiet crowd before it, candles, yellow ribbons.
  "il-5": (s) => {
    s.sky("dusk");
    s.rect(0, 220, 1600, 400, "#9a948a");
    for (let r = 0; r < 4; r++) for (let c = 0; c < 22; c++) s.rect(30 + c * 72 + (r % 2) * 10, 250 + r * 90, 56, 74, s.r() < 0.2 ? "#d9d2c2" : "#f4f1ea", `transform="rotate(${s.r() * 4 - 2},${60 + c * 72},${280 + r * 90})"`);
    s.ground(620, "#6a6a66");
    s.add('<line x1="0" y1="660" x2="1600" y2="660" stroke="#3a3a3a" stroke-width="4"/>');
    for (let i = 0; i < 20; i++) s.add(`<path d="M${40 + i * 80},660 q6,20 -4,40 M${40 + i * 80},660 q-6,22 6,38" stroke="#e8c42c" stroke-width="5" fill="none"/>`);
    s.candles(100, 1500, 640, 40);
    return s.crowd({ y: 820, rows: 2, h: 130, gap: 70, rowGap: 50, thin: 0.3, colors: ["#2a2c30", "#3a3a40", "#4a4036"] });
  },
  // A coastal city skyline at night from afar, thin streaks of interceptors rising, small flashes, dark windows.
  "il-6": (s) => s
    .sky("night", { stars: 40 })
    .city({ y: 560, style: "towers", h: [60, 240], depth: 0.2, lit: false, color: "#2a3040" })
    .intercepts(200, 1400, 560, 9)
    .sea(560, { color: "#141c2c", glint: 800 }),
  // A landscape of rubble and damaged concrete at dawn, a cleared road with a line of white aid trucks, the sea.
  "il-7": (s) => {
    s.sky("dawn", { top: "#9aa0b8", bottom: "#f0c8b8" });
    s.sea(420, { color: "#8a9ab0" });
    for (let i = 0; i < 14; i++) { const x = s.r() * 1600, h = 60 + s.r() * 140, w = 80 + s.r() * 80; s.poly([[x, 520], [x, 520 - h], [x + w * 0.3, 520 - h + 30], [x + w * 0.6, 520 - h - 10], [x + w, 520 - h + 50], [x + w, 520]], s.c("#a8a49c", 0.3)); }
    s.ridge({ y: 640, amp: 120, color: "#9a948a", jag: true, step: 30 });
    s.add('<path d="M-40,900 Q600,640 1640,600" stroke="#c9c0b0" stroke-width="80" fill="none"/>');
    [[300, 780, 1.1], [560, 720, 0.9], [800, 680, 0.75], [1020, 650, 0.62], [1220, 630, 0.52]].forEach(([x, y, k]) => s.vehicle("truck", x, y, { s: k * 1.3, color: "#e8e6e0" }));
    return s.person(1400, 640, 30).person(1440, 642, 28).fog(560, { h: 100, color: "#f0d8c8", opacity: 0.5 });
  },
  // A narrow stone street in an old Jerusalem neighbourhood at dusk, iron balconies, men in black coats and hats.
  "il-12": (s) => {
    s.sky("dusk");
    s.street3d({ vanish: [800, 460], depth: 4, left: 400, right: 1200, hmin: 420, hmax: 560, colors: ["#d4c4a4", "#c9b896"], road: "#a89a82", lit: true, lamps: true });
    s.persp({ vanish: [800, 460], depth: 4 });
    for (let z = 1.2; z < 6; z *= 1.3) [400, 1200].forEach((X) => s.quad("wallX", [X, 540, 560, z, z * 1.15], "#2a2a2a"));
    [[760, 2.2], [820, 2.3], [870, 2.6], [720, 2.8]].forEach(([X, z]) => { const p = s.pp(X, 900, z), h = 360 / z; s.person(p[0], p[1], h, { color: "#141418", coat: true }); s.add(`<ellipse cx="${p[0]}" cy="${p[1] - h * 0.94}" rx="${h * 0.22}" ry="${h * 0.05}" fill="#141418"/><rect x="${p[0] - h * 0.12}" y="${p[1] - h * 1.06}" width="${h * 0.24}" height="${h * 0.12}" fill="#141418"/>`); });
    return s;
  },
  // A school gym as a polling station: a pale blue ballot box, booths behind cardboard screens, basketball hoops.
  "il-8": (s) => {
    s.mood("morning", { light: "#fff6e0" });
    s.room3d({ depth: 2.6, wall: "#d9d4c4", side: "#cfc9b8", floor: "#c9a06a", ceiling: "#e2ddd0", boards: true, windows: { n: 3, side: "left", top: 60, bottom: 220 } });
    s.add('<rect x="740" y="210" width="120" height="80" fill="#f4f1ea" stroke="#5a5a5a" stroke-width="4"/><circle cx="800" cy="300" r="20" fill="none" stroke="#c94a2a" stroke-width="4"/>');
    s.booths(940, 1400, 640, { color: "#b8a07a", w: 100 });
    s.box3d(460, 780, 620, 680, 1.7, 1.9, "#d9d2c2");
    const p = s.pp(620, 620, 1.8); s.ballotBox(p[0], p[1], 1.1, { color: "#a8c4dc" });
    return s.figure3d(380, 2.0, { h: 380, color: "#3a4a5a" }).figure3d(1150, 1.8, { h: 380, color: "#5a4a3c" });
  },
};
