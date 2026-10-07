/* United Arab Emirates */
const creek = (s, o) => {
  s.city({ y: 440, x0: 820, x1: 1640, style: "towers", h: [160, 360], depth: 0.25, color: "#8fa6b8", lit: false });
  s.tower(1120, 440, 60, 420, { color: "#9ab0c0", spire: 120 });
  s.sea(470, { glint: o.glint || 1300, color: "#4f8a9a" });
  s.rect(0, 440, 820, 40, "#c9a877");
  for (let i = 0; i < 6; i++) s.windTower(60 + i * 130, 440, 0.7);
  for (let i = 0; i < (o.dhows || 5); i++) s.ship("dhow", 160 + i * 260, 600 + (i % 2) * 70, { s: 1.1, dir: i % 2 ? -1 : 1, sail: o.sails ? "#e6dcc6" : undefined });
  if (o.cargo) for (let i = 0; i < 5; i++) s.crate(100 + i * 260, 590 + (i % 2) * 70, 50, 26, { color: "#a8906c" });
};
module.exports = {
  // A low white 1960s guesthouse with a shaded colonnade on a sandy creek shore, palm trees, hazy sky.
  "ae-9": (s) => {
    s.sky("haze", { top: "#c9c4b0", bottom: "#ece6d4" });
    s.sea(520, { color: "#5fb0b0" });
    s.ground(520, "#e2cfa4").rect(0, 520, 1600, 20, "#d9c49a");
    s.rect(400, 380, 800, 140, "#f4f1ea").rect(380, 360, 840, 24, "#e2ddd0");
    for (let i = 0; i < 12; i++) s.rect(420 + i * 66, 384, 14, 136, "#e8e2d2");
    s.rect(420, 400, 760, 120, "#c9c0ae", 'opacity="0.5"');
    s.sea(640, { color: "#5fb0b0", glint: 800 });
    return s.tree("palm", 300, 560, { s: 1.5 }).tree("palm", 1300, 560, { s: 1.6 }).tree("palm", 1420, 570, { s: 1.3 });
  },
  // Dhows moored along a creek at sunset, low sand-coloured buildings with wind towers, glass skyscrapers opposite.
  "ae-3": (s) => { s.sky("golden", { sun: [1300, 420], r: 40 }); creek(s, { glint: 1300 }); return s; },
  // A creek lined with dhows loaded with sacks and boxes, old trading houses with wind towers, towers behind.
  "ae-10": (s) => { s.sky("afternoon"); creek(s, { cargo: true, dhows: 5 }); return s; },
  // An imposing modern courthouse with tall slender columns and a vast empty plaza at midday, palm trees.
  "ae-11": (s) => {
    s.sky("desert", { top: "#7aa6c8" });
    s.rect(300, 200, 1000, 340, "#e8e2d2").rect(280, 180, 1040, 30, "#d9d2c2");
    for (let i = 0; i < 16; i++) s.rect(330 + i * 62, 210, 12, 330, "#f8f6f0");
    s.rect(330, 210, 940, 330, "#3a4a5a", 'opacity="0.25"');
    s.ground(540, "#efe9dc");
    return s.forest({ y: 600, type: "palm", s: 1.1, gap: 260, x0: 40, x1: 1600 });
  },
  // A vast white marble palace with a central dome and colonnades by a turquoise sea at golden hour, gardens.
  "ae-4": (s) => {
    s.sky("golden", { sun: [1400, 380], r: 36 });
    s.sea(500, { color: "#4fa0a6", glint: 1400 });
    s.rect(200, 360, 1200, 160, "#f4efe4");
    for (let i = 0; i < 30; i++) s.add(`<path d="M${220 + i * 39},520 L${220 + i * 39},460 A13,13 0 0 1 ${246 + i * 39},460 L${246 + i * 39},520 Z" fill="#c9b892"/>`);
    s.dome(800, 360, 150, { color: "#f4efe4" }).dome(480, 360, 60, { color: "#f4efe4" }).dome(1120, 360, 60, { color: "#f4efe4" });
    s.ground(540, "#6f8a52");
    return s.forest({ y: 700, type: "palm", s: 1.1, gap: 160 }).add('<ellipse cx="800" cy="720" rx="200" ry="30" fill="#8fd0d6"/>');
  },
  // A data-centre campus in the desert at night: long low buildings glowing blue, cooling vapour, power lines, dunes.
  "ae-5": (s) => {
    s.sky("night", { stars: 60 });
    s.dunes(480, { depth: 0.6, color: "#6a5a4a" });
    for (let r = 0; r < 4; r++) { const y = 540 + r * 70; s.rect(100 + r * 40, y - 40, 1400 - r * 80, 40, "#2a3444"); s.rect(100 + r * 40, y - 12, 1400 - r * 80, 6, "#5fb0e0"); s.glow(800, y - 10, 600, "#5fb0e0", 0.12); }
    [300, 700, 1100].forEach((x) => s.smoke(x, 480, { len: 300, rise: 2, w: 40, color: "#8a9ab0" }));
    return s.pylons(-100, 1700, 860, { h: 300, gap: 400 });
  },
  // A long line of displaced people walking a dusty desert road at dawn with bundles, a donkey cart, tents, acacias.
  "ae-6": (s) => {
    s.sky("haze", { top: "#c4b8a4" });
    s.tents(1100, 1500, 470, { rows: 2, gap: 50, w: 34, colors: ["#efe9dc"], depth: 0.4 });
    s.ground(480, "#c9a877");
    s.tree("acacia", 200, 540, { s: 1.2 }).tree("acacia", 1450, 560, { s: 1.4 });
    s.add('<path d="M1100,480 Q700,560 300,900" stroke="#d9c09a" stroke-width="120" fill="none"/>');
    for (let i = 0; i < 26; i++) { const t = i / 26, x = 1050 - t * 680 + s.r() * 40, y = 490 + t * t * 380; s.person(x, y, 18 + t * 110, { color: s.r.pick(["#5a4a3c", "#3a3030", "#7a5a44"]), robe: s.r() < 0.4 ? s.r.pick(["#b05a44", "#4a5a6a", "#d9c49a"]) : null, bundle: s.r() < 0.4 ? "#a8906c" : null }); }
    return s.add('<g fill="#6a5040"><rect x="560" y="700" width="90" height="40"/><circle cx="580" cy="745" r="14"/><circle cx="630" cy="745" r="14"/><ellipse cx="700" cy="700" rx="34" ry="16"/><rect x="725" y="670" width="10" height="26"/><ellipse cx="740" cy="668" rx="14" ry="8"/></g>');
  },
  // A glittering coastal skyline of very tall towers at night, interceptor trails over dark water, small flashes.
  "ae-7": (s) => {
    s.sky("night", { stars: 20 });
    s.city({ y: 560, style: "towers", h: [150, 300], depth: 0.2, lit: true, color: "#2a3448" });
    s.tower(900, 560, 60, 500, { color: "#3a4458", spire: 100, lit: true });
    s.intercepts(100, 1500, 560, 8);
    return s.sea(560, { color: "#101a2a", glint: 900 });
  },
  // Construction workers in blue overalls and hard hats walking toward a white bus at dawn, cranes, half-built towers.
  "ae-12": (s) => {
    s.sky("dawn", { top: "#c9a88a", bottom: "#f2d8b0" });
    [[200, 360], [520, 300], [1100, 420]].forEach(([x, h]) => { s.rect(x, 560 - h, 160, h, "#b8aa94"); for (let k = 0; k < h / 40; k++) s.rect(x, 560 - h + k * 40, 160, 6, "#8a7a64"); });
    s.towerCrane(380, 560, 1.4).towerCrane(1000, 560, 1.2);
    s.ground(560, "#c9a877").fog(560, { h: 80, color: "#f2d8b0" });
    s.vehicle("bus", 1180, 760, { s: 2, color: "#f2efe8" });
    for (let i = 0; i < 8; i++) s.person(560 + i * 70 + s.r() * 20, 800 + (i % 2) * 20, 110, { color: "#3a5a8a", hat: "hard", hatColor: "#e8e2d2", walk: true });
    return s;
  },
  // An enormous container port at dawn: towering cranes, colourful stacks, a big container ship heading to sea.
  "ae-8": (s) => {
    s.sky("dawn", { top: "#c9a8b8", bottom: "#f4d8c8" });
    s.sea(460, { glint: 1300 });
    s.ship("container", 1200, 520, { s: 0.8, wake: true });
    s.rect(0, 560, 1600, 340, "#8a8682");
    for (let i = 0; i < 7; i++) s.crane(80 + i * 140, 580, 1.05, { color: "#c4573c" });
    return s.containers(0, 760, 32, 5, { w: 48, h: 24 }).containers(20, 880, 30, 4, { w: 52, h: 26 });
  },
};
