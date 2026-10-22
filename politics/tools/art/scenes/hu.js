/* Hungary */
/* The neo-Gothic parliament on the Danube: a long front, a ribbed dome and rows of spires. */
const parliament = (s, x, y, k, o) => {
  o = o || {};
  const d = o.depth || 0, col = s.c(o.color || "#e4d8c2", d), roof = s.c(o.roof || "#7a4a3a", d), w = 1100 * k;
  s.rect(x - w / 2, y - 120 * k, w, 120 * k, col);
  s.poly([[x - w / 2, y - 120 * k], [x + w / 2, y - 120 * k], [x + w / 2 - 20 * k, y - 150 * k], [x - w / 2 + 20 * k, y - 150 * k]], roof);
  for (let i = 0; i < 30; i++) s.rect(x - w / 2 + 16 * k + i * (w - 40 * k) / 29, y - 105 * k, 10 * k, 70 * k, s.c("#b8a88e", d));
  [-0.42, -0.25, 0.25, 0.42].forEach((f) => { s.rect(x + f * w - 30 * k, y - 190 * k, 60 * k, 190 * k, col); s.spire(x + f * w, y - 190 * k, 120 * k, { color: roof, depth: d }); });
  for (let i = 0; i < 14; i++) { const sx = x - w * 0.46 + i * w * 0.0707; s.spire(sx, y - 150 * k, 60 * k, { color: shade(roof), depth: d }); }
  s.rect(x - 90 * k, y - 260 * k, 180 * k, 140 * k, col);
  s.add(`<path d="M${x - 110 * k},${y - 260 * k} Q${x},${y - 430 * k} ${x + 110 * k},${y - 260 * k} Z" fill="${roof}"/>`);
  s.spire(x, y - 390 * k, 110 * k, { color: roof, depth: d });
  if (o.lit) for (let i = 0; i < 40; i++) s.rect(x - w / 2 + 20 * k + s.r() * (w - 40 * k), y - 100 * k + s.r() * 70 * k, 5, 9, s.m.light);
  return s;
};
function shade(c) { return c; }

module.exports = {
  // A column of horsemen seen from behind riding across a vast grassy plain toward low wooded hills, long clouds.
  "hu-9": (s) => {
    s.sky("afternoon", { clouds: 4, sun: [1250, 230], r: 50 });
    s.hills({ y: 520, amp: 60, color: "#6f7f55", depth: 0.55 });
    s.hills({ y: 560, amp: 30, color: "#7d8a5a", depth: 0.3 });
    s.field(570, 900, { color: "#a3a46a", rows: 0 });
    const riders = [];
    for (let i = 0; i < 34; i++) { const t = Math.pow(s.r(), 0.8); riders.push([t, 300 + t * 820 + s.r() * 260 * (1 - t) - 130 * (1 - t), 870 - t * 300 + s.r() * 30 * (1 - t)]); }
    riders.sort((a, b) => a[2] - b[2]).forEach(([t, x, y]) => {
      const k = 2.2 - t * 1.9, c = s.c("#3e3428", t * 0.6);
      s.add(`<g fill="${c}"><ellipse cx="${x}" cy="${y - 46 * k}" rx="${34 * k}" ry="${15 * k}"/><rect x="${x - 26 * k}" y="${y - 40 * k}" width="${6 * k}" height="${40 * k}"/><rect x="${x + 20 * k}" y="${y - 40 * k}" width="${6 * k}" height="${40 * k}"/><rect x="${x + 26 * k}" y="${y - 76 * k}" width="${10 * k}" height="${34 * k}" transform="rotate(20 ${x + 30 * k} ${y - 60 * k})"/></g>`);
      s.person(x - 4 * k, y - 52 * k, 50 * k, { color: c, depth: t * 0.6 });
    });
    return s.birds(1100, 200, 7);
  },
  // A crowd seen from behind in a square before a long neo-Gothic parliament with a dome and spires by a river, dusk.
  "hu-3": (s) => {
    s.sky("dusk", { clouds: 2 });
    parliament(s, 800, 560, 1.15, { lit: true, depth: 0.15 });
    s.ground(560, "#5a5a5e");
    s.lamps(80, 1540, 640, 150, { gap: 290 });
    return s.crowd({ y: 700, rows: 5, h: 70, gap: 18, rowGap: 40, signs: 6 });
  },
  // A pale baroque former monastery on a castle hill above a river at dusk, lit windows, a city with bridges below.
  "hu-4": (s) => {
    s.sky("dusk", { clouds: 2 });
    s.city({ y: 640, h: [40, 110], style: "old", depth: 0.55, lit: true });
    s.sea(640, { lines: 40 });
    s.bridge(80, 1520, 660, { type: "suspension", h: 90, color: "#4a4e58", depth: 0.4 });
    s.ridge({ y: 560, amp: 150, color: "#55624e", x0: 560, x1: 1700, peak: 1150, peakW: 600, taper: 420 });
    s.poly([[820, 470], [1600, 470], [1600, 700], [700, 700]], "#55624e");
    s.building(900, 420, 560, 150, { color: "#e8dcc4", cell: 26, lit: true, litShare: 0.7, roof: "pitched", roofColor: "#8a5a4a" });
    s.fortWall(860, 1500, 440, 50, { color: "#b8aa92" });
    for (let i = 0; i < 5; i++) s.person(980 + i * 60, 430, 18, { depth: 0.3 });
    return s.lamps(940, 1440, 430, 60, { gap: 125 });
  },
  // A village school used as a polling station at dawn, a queue of people in coats at the door, a church tower behind.
  "hu-5": (s) => {
    s.sky("dawn", { clouds: 2 });
    s.hills({ y: 520, amp: 50, depth: 0.5, color: "#7c8a68" });
    s.spire(1180, 520, 260, { color: "#cfc3ad", depth: 0.2 });
    s.rect(1150, 400, 60, 120, s.c("#e6dccb", 0.2));
    s.ground(540, "#8a8a6a");
    s.house(380, 640, 620, 210, { color: "#e3d6bd", roofColor: "#9a5a44" });
    for (let i = 0; i < 4; i++) s.rect(420 + i * 140, 500, 70, 80, "#6c7a86");
    ["bare", "bare", "bare"].forEach((t, i) => s.tree(t, 1080 + i * 160, 640, { s: 1.6 }));
    return s.crowd({ x0: 120, x1: 1500, y: 760, rows: 2, h: 110, gap: 34, rowGap: 30, colors: ["#3e4048", "#5a4a42", "#4a5a52", "#6a5a4a"] });
  },
  // A darkened television news studio seen through a glass wall: empty curved desks, cameras, dimmed blue screens.
  "hu-6": (s) => {
    s.sky("interior");
    s.room({ wall: "#2a3240", floorY: 660, floor: "#1c2129" });
    s.screen(240, 160, 520, 280, { color: "#2e4a68", glow: "#4a7aa8" });
    s.screen(840, 160, 520, 280, { color: "#2e4a68", glow: "#4a7aa8" });
    s.add('<path d="M300,620 Q800,520 1300,620 L1300,680 Q800,580 300,680 Z" fill="#3a4250"/>');
    s.chairs(560, 1040, 640, { gap: 160, color: "#2a2e36" });
    [[200, 760], [1400, 760], [800, 820]].forEach(([x, y]) => s.add(`<g fill="#15181e"><rect x="${x - 50}" y="${y - 130}" width="100" height="60" rx="6"/><rect x="${x + 50}" y="${y - 115}" width="40" height="30"/><line x1="${x}" y1="${y - 70}" x2="${x - 50}" y2="${y + 60}" stroke="#15181e" stroke-width="6"/><line x1="${x}" y1="${y - 70}" x2="${x + 50}" y2="${y + 60}" stroke="#15181e" stroke-width="6"/><line x1="${x}" y1="${y - 70}" x2="${x}" y2="${y + 60}" stroke="#15181e" stroke-width="6"/></g>`));
    s.glow(800, 300, 400, "#9fc0e0", 0.12);
    return s.add('<rect x="0" y="0" width="1600" height="900" fill="#8fb0c8" opacity="0.06"/><line x1="0" y1="40" x2="1600" y2="40" stroke="#6a7a88" stroke-width="4" opacity="0.4"/>');
  },
  // A big steel oil pipeline on supports crossing a flat green plain toward a distant refinery with chimneys and tanks.
  "hu-7": (s) => {
    s.sky("morning", { clouds: 3 });
    s.refinery(1250, 520, 0.8, { depth: 0.45 });
    s.tanks(980, 520, 4, { depth: 0.45 });
    s.ground(520, "#7d9a5e");
    s.field(520, 900, { color: "#86a062", rows: 30 });
    s.pipeline([[-20, 860], [600, 700], [1100, 560], [1250, 525]], { color: "#8a8f94", w: 34 });
    for (let i = 0; i < 9; i++) { const t = i / 9, x = -20 + t * 1180, y = 860 - t * 320; s.rect(x - 4, y, 8, 40 * (1 - t) + 6, "#5a5e62"); }
    return s.birds(400, 220, 5);
  },
  // An eighteenth-century palace hall: tall arched windows, a long table with green cloth and papers, empty chairs.
  "hu-10": (s) => {
    s.sky("overcast");
    s.room({ wall: "#cfc4ae", floorY: 650, floor: "#8a6a4a", panels: 200, windows: [[160, 120, 200, 400], [700, 120, 200, 400], [1240, 120, 200, 400]], outsideTop: "#9aa4ac", outsideBottom: "#d9dcd8" });
    s.chandelier(530, 90, 1.2).chandelier(1070, 90, 1.2);
    s.table(800, 700, 1100, { color: "#3e5a44", top: "#4f6e52", persp: 120, depthPx: 80 });
    s.papers(560, 660, 14);
    s.chairs(320, 1280, 640, { gap: 120, color: "#a88a4a" });
    return s.chairs(260, 1340, 860, { gap: 150, color: "#a88a4a", h: 130 });
  },
  // A wide boulevard in late autumn between grey apartment blocks, an abandoned old tank, cobblestones, thin smoke.
  "hu-11": (s) => {
    s.sky("overcast", { top: "#8a8e92", bottom: "#c4c2ba" });
    s.city({ x0: -20, x1: 520, y: 640, h: [220, 320], style: "old", depth: 0.15, windows: true });
    s.city({ x0: 1080, x1: 1620, y: 640, h: [220, 320], style: "old", depth: 0.15, windows: true });
    s.city({ x0: 520, x1: 1080, y: 560, h: [120, 200], style: "old", depth: 0.55 });
    s.road({ vanish: [800, 560], w: 1300, color: "#6a6862", line: false });
    ["bare", "bare"].forEach((t, i) => { s.tree(t, 470 - i * 120, 720 + i * 60, { s: 2 }); s.tree(t, 1130 + i * 120, 720 + i * 60, { s: 2 }); });
    s.vehicle("tank", 820, 760, { s: 1.4, color: "#4a4e44", dir: -1 });
    for (let i = 0; i < 60; i++) s.rect(300 + s.r() * 1000, 780 + s.r() * 110, 14, 9, "#8a857a");
    s.smoke(1000, 640, { len: 380, w: 50, rise: 1.4 });
    return s.papers(400, 840, 10, { color: "#e8e2d4" });
  },
  // A large crowd at night holding small phone lights in a square, a pale classical palace lit up on a hill behind.
  "hu-12": (s) => {
    s.sky("night", { stars: 40 });
    s.ridge({ y: 520, amp: 160, color: "#343c4e", x0: 200, x1: 1500, peak: 850, peakW: 520, taper: 360 });
    s.glow(850, 320, 360, "#ffe2a6", 0.25);
    s.poly([[480, 368], [1220, 368], [1400, 560], [300, 560]], "#2c3342");
    s.palace(850, 370, 1.1, { color: "#e8e0cc", cols: 8, h: 110 });
    s.ground(560, "#252b36");
    s.crowd({ y: 640, rows: 6, h: 70, gap: 16, rowGap: 42, colors: ["#141820", "#1c2028", "#20242c"] });
    for (let i = 0; i < 160; i++) { const x = s.r() * 1600, y = 560 + s.r() * 260; s.glow(x, y, 14, "#d8ecff", 0.5); s.rect(x - 2, y - 3, 4, 6, "#eef6ff"); }
    return s;
  },
  // A nineteenth-century chain suspension bridge with two stone arched towers over a wide river at sunrise, a domed basilica.
  "hu-8": (s) => {
    s.sky("dawn", { sun: [1200, 330], r: 46, clouds: 2 });
    s.city({ y: 480, h: [60, 140], style: "old", depth: 0.45 });
    s.dome(1150, 380, 70, { color: "#7f8f86", depth: 0.4 });
    s.rect(1090, 380, 120, 100, s.c("#d9cdb6", 0.4));
    s.sea(480, { glint: 1200 });
    s.fog(500, { h: 50, opacity: 0.4 });
    [430, 1170].forEach((x) => { s.rect(x - 50, 330, 100, 220, "#b8aa92"); s.add(`<path d="M${x - 26},550 L${x - 26},420 A26,26 0 0 1 ${x + 26},420 L${x + 26},550 Z" fill="#8a96a6"/>`); });
    s.add('<path d="M-20,520 Q200,520 430,340 Q800,520 1170,340 Q1400,520 1620,520" stroke="#3e4a44" stroke-width="10" fill="none"/>');
    for (let x = 0; x <= 1600; x += 40) { const y = x < 430 ? 520 - 180 * Math.pow(x / 430, 2) : x < 1170 ? 340 + 180 * (1 - Math.pow((x - 800) / 370, 2)) : 520 - 180 * Math.pow((1600 - x) / 430, 2); s.add(`<line x1="${x}" y1="${y}" x2="${x}" y2="548" stroke="#3e4a44" stroke-width="2"/>`); }
    return s.rect(-20, 545, 1640, 18, "#4a5450").rect(-20, 563, 1640, 6, "#2e3632");
  }
};
