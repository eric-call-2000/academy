/* Syria */
module.exports = {
  // A vast mosque courtyard with arched arcades, a small domed pavilion on columns and a tall square minaret, evening.
  "sy-9": (s) => {
    s.sky("golden");
    s.rect(0, 300, 1600, 300, "#d9c4a0");
    for (let i = 0; i < 18; i++) s.add(`<path d="M${40 + i * 88},600 L${40 + i * 88},420 A34,34 0 0 1 ${108 + i * 88},420 L${108 + i * 88},600 Z" fill="#8a6a4a"/>`);
    s.rect(0, 290, 1600, 20, "#b8a07a");
    s.rect(1200, 60, 70, 240, "#d9c4a0").rect(1190, 50, 90, 20, "#b8a07a");
    s.poly([[1200, 50], [1270, 50], [1235, 0]], "#6a8a6a");
    s.dome(500, 250, 120, { color: "#6a7a6a" });
    s.rect(380, 250, 240, 50, "#c9b08a");
    s.rect(0, 600, 1600, 300, "#e2d6c0");
    s.rect(640, 640, 120, 60, "#c9b08a");
    [[700, 560, 0.55]].forEach(([x, y, k]) => { s.rect(x - 70 * k, y - 120 * k, 140 * k, 120 * k, "#b8a07a"); s.dome(x, y - 120 * k, 70 * k, { color: "#6a8a6a" }); });
    for (let i = 0; i < 6; i++) s.person(300 + i * 200, 820 + (i % 2) * 20, 70, { color: "#3e342c" });
    return s;
  },
  // A large square at night lit by lamps, a huge bronze statue toppled beside its plinth, crowds gathered around it.
  "sy-3": (s) => {
    s.sky("night", { stars: 40 });
    s.city({ y: 520, h: [100, 200], style: "mideast", lit: true, depth: 0.3 });
    s.ground(520, "#4a4640");
    s.rect(560, 380, 220, 200, "#8a8478").rect(540, 370, 260, 20, "#9a9488");
    s.add('<g fill="#9a7a4a"><path d="M800,600 L1180,560 L1190,600 L810,640 Z"/><circle cx="1230" cy="570" r="44"/><rect x="980" y="520" width="90" height="40" transform="rotate(-8 1020 540)"/><rect x="820" y="610" width="120" height="30"/></g>');
    s.lamps(80, 1540, 600, 160, { gap: 300 });
    return s.crowd({ y: 760, rows: 4, h: 70, gap: 18, rowGap: 40 });
  },
  // A large modern palace of pale stone on a hilltop above a sprawling city in evening haze, a bare mountain behind.
  "sy-4": (s) => {
    s.sky("dusk");
    s.mountains({ y: 360, amp: 160, color: "#8a7a6a", depth: 0.4 });
    s.ridge({ y: 470, amp: 150, color: "#7a6a54", peak: 1100, peakW: 420, x0: 500, x1: 1700 });
    s.poly([[860, 342], [1360, 342], [1520, 560], [700, 560]], "#7a6a54");
    s.building(900, 340, 420, 80, { color: "#e2d6c0", cell: 18, lit: true });
    s.city({ y: 640, h: [40, 110], style: "mideast", lit: true, depth: 0.35 });
    return s.city({ y: 820, h: [60, 140], style: "mideast", lit: true, depth: 0.1 });
  },
  // A vast grey concrete prison in bare hills at dawn, gates wide open, figures walking out, families waiting.
  "sy-5": (s) => {
    s.sky("dawn");
    s.hills({ y: 460, amp: 80, color: "#a8987a", depth: 0.4 });
    s.rect(500, 300, 600, 220, "#8a8a86");
    s.poly([[500, 300], [800, 230], [1100, 300]], "#7a7a76");
    s.wall(200, 1400, 540, 70, { color: "#9a9a94", wire: true });
    s.rect(730, 470, 140, 70, "#e8dcc4");
    s.ground(540, "#b8a88a");
    s.road({ vanish: [800, 540], w: 900, color: "#8a8478", line: false });
    s.fog(500, { h: 80, opacity: 0.4 });
    for (let i = 0; i < 5; i++) s.person(760 + i * 22, 600 + i * 30, 50 + i * 10, { color: "#4a4038" });
    return s.crowd({ x0: 100, x1: 600, y: 760, rows: 2, h: 90, gap: 30 }).crowd({ x0: 1000, x1: 1500, y: 760, rows: 2, h: 90, gap: 30 });
  },
  // A quiet mountain village of pale stone houses among pines above the sea, smoke rising from two houses, empty road.
  "sy-6": (s) => {
    s.sky("overcast");
    s.sea(380, { lines: 30 });
    s.ridge({ y: 900, amp: 520, color: "#5a6a4a", x0: 200, x1: 1700, peak: 1300, peakW: 900, taper: 300 });
    [[600, 700], [760, 640], [920, 590], [1100, 520], [1260, 470], [840, 760]].forEach(([x, y]) => s.house(x, y, 110, 80, { color: "#e2d8c4", roofColor: "#a8564a" }));
    s.forest({ y: 620, type: "pine", s: 0.9, gap: 60, x0: 400, x1: 1500 });
    s.smoke(800, 600, { len: 400, w: 60, rise: 1.6 }).smoke(1140, 470, { len: 380, w: 50, rise: 1.6 });
    return s;
  },
  // Oil pumpjacks and storage tanks on a flat plain beside a wide river at sunset, a column of trucks on a distant road.
  "sy-7": (s) => {
    s.sky("golden", { sun: [1250, 360], r: 50 });
    s.ground(460, "#9a7a54");
    s.add('<path d="M-20,620 C400,560 900,700 1620,600 L1620,680 C900,780 400,640 -20,700 Z" fill="#6f8aa0"/>');
    s.tanks(1100, 470, 4, { w: 60, h: 50 });
    [[300, 560], [520, 540], [780, 560]].forEach(([x, y]) => s.add(`<g fill="#3a3028"><rect x="${x - 6}" y="${y - 80}" width="12" height="80"/><path d="M${x - 70},${y - 90} L${x + 60},${y - 70} L${x + 60},${y - 60} L${x - 70},${y - 80} Z"/><rect x="${x + 50}" y="${y - 90}" width="30" height="40"/><rect x="${x - 40}" y="${y - 10}" width="80" height="10"/></g>`));
    return s.convoy("truck", 300, 1200, 470, { gap: 120, s: 0.4 });
  },
  // Huge ancient wooden waterwheels on a slow river beside old stone houses, some ruined, rubble, grey winter sky.
  "sy-10": (s) => {
    s.sky("overcast", { top: "#8a8e92" });
    s.city({ y: 560, h: [80, 160], style: "old", color: "#b8a88a", depth: 0.25 });
    for (let i = 0; i < 6; i++) { const x = 100 + s.r() * 1400; s.poly([[x, 560], [x + 40, 470], [x + 90, 520], [x + 140, 560]], "#9a8a70"); }
    s.sea(600, { color: "#6a7a7a", lines: 30 });
    [[450, 560, 200], [900, 580, 170]].forEach(([x, y, r]) => s.add(`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#5a4636" stroke-width="16"/>` + Array.from({ length: 16 }, (_, i) => `<line x1="${x}" y1="${y}" x2="${x + r * Math.cos(i * Math.PI / 8)}" y2="${y + r * Math.sin(i * Math.PI / 8)}" stroke="#6a5444" stroke-width="5"/>`).join("") + `<circle cx="${x}" cy="${y}" r="20" fill="#4a3a2c"/>`));
    return s.rect(0, 740, 1600, 160, "#8a8070");
  },
  // Bombed-out concrete apartment blocks with collapsed floors to the horizon, hazy sky, one small figure on a road.
  "sy-11": (s) => {
    s.sky("haze");
    for (let row = 0; row < 3; row++) for (let i = 0; i < 9; i++) {
      const k = 1 - row * 0.3, x = -40 + i * 200 + row * 70, y = 640 - row * 90, h = 260 * k, w = 160 * k;
      s.building(x, y, w, h, { color: s.c("#9a948a", row * 0.3), cell: 20 * k, windows: true });
      s.poly([[x, y - h], [x + w * 0.4, y - h - 10], [x + w * 0.7, y - h + 60], [x + w, y - h + 20], [x + w, y - h + 80], [x, y - h + 40]], s.c("#d9cdb0", row * 0.3));
    }
    s.ground(640, "#a89a80");
    s.road({ vanish: [800, 640], w: 600, color: "#8a8070", line: false });
    for (let i = 0; i < 40; i++) s.rect(s.r() * 1600, 660 + s.r() * 220, 30 + s.r() * 40, 12, "#7a7060");
    return s.person(820, 760, 70, { color: "#3e342c", walk: true });
  },
  // A broad snow-capped mountain above green and brown hills, a winding valley road, a small military post on a ridge.
  "sy-12": (s) => {
    s.sky("morning", { clouds: 2 });
    s.mountains({ y: 520, amp: 300, color: "#8a8478", peak: 760, peakW: 380, snow: 0.7, depth: 0.3 });
    s.hills({ y: 600, amp: 110, color: "#7a8a5a", depth: 0.15 });
    s.ground(640, "#8a8a5a");
    s.add('<path d="M200,900 C400,780 700,760 900,700 C1100,650 1300,660 1500,640" stroke="#7a7468" stroke-width="22" fill="none"/>');
    s.rect(1180, 560, 120, 60, "#6a6a5a").rect(1230, 480, 8, 80, "#4a4a44").rect(1260, 500, 6, 60, "#4a4a44");
    return s.fence(1140, 1340, 640, 30, { gap: 20 });
  },
  // An old covered market street with an arched iron roof and beams of light, scaffolding, a few reopened shops glowing.
  "sy-8": (s) => {
    s.sky("interior");
    s.room({ wall: "#6a5a48", floorY: 700, floor: "#5a4a3a" });
    s.add('<path d="M0,260 Q800,-60 1600,260 L1600,0 L0,0 Z" fill="#3a3a3e"/>');
    for (let i = 0; i < 9; i++) s.beam(120 + i * 170, 40, 90, { len: 700, w: 30, opacity: 0.18 });
    for (let i = 0; i < 8; i++) { const x = 20 + i * 200, lit = i % 3 !== 1; s.rect(x, 380, 160, 320, lit ? "#e8c77a" : "#4a3e32"); if (lit) s.glow(x + 80, 540, 160, "#ffd38a", 0.35); }
    s.add('<g stroke="#8a7a5a" stroke-width="5"><line x1="610" y1="300" x2="610" y2="700"/><line x1="770" y1="300" x2="770" y2="700"/><line x1="600" y1="420" x2="780" y2="420"/><line x1="600" y1="560" x2="780" y2="560"/></g>');
    return s.crowd({ y: 800, rows: 2, h: 110, gap: 60, thin: 0.3 });
  }
};
