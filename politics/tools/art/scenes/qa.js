/* Qatar */
/* A big plane parked on the ground, side view, nose to the right; (x, y) is where the wheels touch. */
const parked = (s, x, y, k, col) => s.add(`<g fill="${col}"><rect x="${x - 200 * k}" y="${y - 70 * k}" width="${400 * k}" height="${44 * k}" rx="${22 * k}"/><path d="M${x + 190 * k},${y - 70 * k} Q${x + 250 * k},${y - 60 * k} ${x + 240 * k},${y - 36 * k} L${x + 190 * k},${y - 26 * k} Z"/><path d="M${x - 190 * k},${y - 66 * k} L${x - 240 * k},${y - 150 * k} L${x - 205 * k},${y - 150 * k} L${x - 140 * k},${y - 66 * k} Z"/><path d="M${x - 40 * k},${y - 40 * k} L${x + 60 * k},${y - 40 * k} L${x - 10 * k},${y - 14 * k} L${x - 110 * k},${y - 14 * k} Z" opacity="0.8"/></g><g fill="#2a2a2e"><rect x="${x - 6 * k}" y="${y - 26 * k}" width="${6 * k}" height="${18 * k}"/><circle cx="${x - 3 * k}" cy="${y - 6 * k}" r="${7 * k}"/><circle cx="${x + 170 * k}" cy="${y - 6 * k}" r="${6 * k}"/><rect x="${x + 168 * k}" y="${y - 26 * k}" width="${4 * k}" height="${16 * k}"/></g>`);
module.exports = {
  // Wooden dhows with tall triangular sails in shallow turquoise water off a sandy shore, divers, a low mud-brick fort.
  "qa-9": (s) => {
    s.sky("desert", { sun: [1300, 160], r: 50 });
    s.ground(430, "sand");
    s.mudFort(420, 440, 0.9, { color: "#c9a877" });
    s.sea(460, { color: "#4fa6a6", lines: 50 });
    [[500, 620, 1.6], [980, 560, 1.1], [1320, 660, 1.8]].forEach(([x, y, k]) => s.ship("dhow", x, y, { s: k }));
    for (let i = 0; i < 6; i++) s.add(`<circle cx="${650 + i * 90}" cy="${700 + (i % 2) * 30}" r="8" fill="#3a3028"/>`);
    return s;
  },
  // A futuristic skyline of tall glass towers along a curved bay at night, lit wooden dhows in the foreground.
  "qa-3": (s) => {
    s.sky("night", { stars: 40 });
    s.city({ x0: 200, x1: 1400, y: 520, h: [180, 420], style: "towers", lit: true, depth: 0.15 });
    s.tower(760, 520, 70, 480, { color: "#6a8aa8", spire: 60, lit: true });
    s.add('<ellipse cx="1050" cy="230" rx="40" ry="190" fill="#7a9ab8"/>');
    s.sea(520, { color: "#1d2840", glint: 800 });
    [[400, 700], [900, 760], [1300, 690]].forEach(([x, y]) => { s.ship("dhow", x, y, { s: 1.3 }); for (let i = 0; i < 8; i++) s.glow(x - 90 + i * 25, y - 40, 10, "#ffd38a", 0.8); });
    return s;
  },
  // A white palace with tall arched windows and a crenellated roofline by a palm-lined waterfront, a turquoise sea behind.
  "qa-4": (s) => {
    s.sky("desert", { clouds: 1 });
    s.sea(430, { color: "#4fa6a6" });
    s.ground(560, "#d7c39a");
    s.rect(300, 330, 1000, 230, "#f2efe6");
    for (let i = 0; i < 40; i++) s.rect(300 + i * 25, 318, 14, 14, "#f2efe6");
    for (let i = 0; i < 10; i++) s.add(`<path d="M${360 + i * 92},540 L${360 + i * 92},420 A26,26 0 0 1 ${412 + i * 92},420 L${412 + i * 92},540 Z" fill="#b8c8cc"/>`);
    [150, 1450, 220, 1380].forEach((x, i) => s.tree("palm", x, 600 + (i > 1 ? 80 : 0), { s: 2 }));
    return s.person(700, 640, 50, { robe: "#f4f2ec", color: "#f4f2ec" }).person(760, 650, 52, { robe: "#f4f2ec", color: "#f4f2ec" });
  },
  // A huge gas plant on a flat desert coast at night, spherical tanks and towers lit, dark smoke and fire, a gas tanker.
  "qa-5": (s) => {
    s.sky("night", { stars: 20 });
    s.ground(560, "#3a342e");
    s.refinery(500, 560, 1.4, { lit: true });
    s.tanks(950, 560, 5, { w: 70, h: 70 });
    s.fire(620, 470, 220, { smoke: true });
    s.smoke(620, 420, { len: 700, dark: true, w: 120, rise: 1.6 });
    s.sea(600, { color: "#1d2840", lines: 30 });
    s.rect(1150, 590, 400, 14, "#5a5a5e");
    return s.ship("lng", 1250, 680, { s: 1.6 });
  },
  // A quiet compound of low beige villas behind walls, a column of grey smoke rising from one, palms, hot afternoon light.
  "qa-6": (s) => {
    s.sky("desert");
    s.ground(560, "#cdb68e");
    for (let i = 0; i < 6; i++) s.building(80 + i * 260, 560, 200, 120 + (i % 2) * 30, { color: "#d9c4a0", cell: 24 });
    s.wall(0, 1600, 640, 70, { color: "#c9b28a" });
    s.smoke(860, 420, { len: 600, w: 110, rise: 1.8, dark: false });
    ["palm", "palm", "palm"].forEach((t, i) => s.tree(t, 300 + i * 500, 640, { s: 1.8 }));
    return s.road({ vanish: [800, 640], w: 1600, color: "#9a9080", line: false });
  },
  // A vast desert air base at dawn with large grey refuelling and transport planes on a concrete apron, hangars, tower.
  "qa-7": (s) => {
    s.sky("dawn");
    s.ground(480, "#c9b28a");
    for (let i = 0; i < 4; i++) s.add(`<path d="M${150 + i * 380},480 L${150 + i * 380},400 Q${300 + i * 380},360 ${450 + i * 380},400 L${450 + i * 380},480 Z" fill="#9a9a94"/>`);
    s.rect(1450, 300, 40, 180, "#8a8a84").rect(1425, 280, 90, 30, "#6a8aa0");
    s.rect(0, 540, 1600, 360, "#a8a49a");
    parked(s, 420, 700, 1.3, "#8a9096"); parked(s, 1150, 800, 1.6, "#7a8086");
    return s.fog(500, { h: 40, opacity: 0.4 });
  },
  // A large cargo plane unloading at night under floodlights, pallets of crates and a line of trucks on the tarmac.
  "qa-10": (s) => {
    s.sky("night", { stars: 30 });
    s.ground(560, "#3a3a3e");
    parked(s, 720, 700, 2.1, "#9a9ea4");
    s.glow(300, 300, 300, "#fff0c4", 0.35).glow(1300, 300, 300, "#fff0c4", 0.35);
    s.add('<line x1="300" y1="200" x2="300" y2="560" stroke="#5a5a5e" stroke-width="8"/><line x1="1300" y1="200" x2="1300" y2="560" stroke="#5a5a5e" stroke-width="8"/>');
    for (let i = 0; i < 8; i++) s.crate(200 + i * 70, 760, 60, 50, { color: "#8a7a5a" });
    s.convoy("truck", 900, 1500, 800, { gap: 200 });
    return s.person(600, 760, 60).person(720, 770, 62);
  },
  // A large modern stadium with a curved latticed shell under construction in the desert at dawn, cranes, a line of workers.
  "qa-11": (s) => {
    s.sky("haze");
    s.ground(520, "#c9a877");
    s.add('<path d="M300,520 Q800,140 1300,520 Z" fill="#d9cdb6"/><path d="M360,520 Q800,200 1240,520" fill="none" stroke="#a8a090" stroke-width="6"/>');
    for (let i = 0; i < 12; i++) s.add(`<line x1="${380 + i * 75}" y1="520" x2="${800}" y2="230" stroke="#b8ae9a" stroke-width="3"/>`);
    s.towerCrane(240, 520, 1.3, { color: "#d9a43c" }).towerCrane(1360, 520, 1.1, { color: "#d9a43c" });
    return s.crowd({ x0: 200, x1: 1400, y: 760, rows: 2, h: 90, gap: 30, hats: true, colors: ["#3a5a8a", "#4a6a9a", "#5a5a5a"] });
  },
  // A large modern newsroom: rows of desks and glowing screens, a glass-walled studio in the middle, figures from behind.
  "qa-12": (s) => {
    s.sky("interior");
    s.room({ wall: "#2e3a4a", floorY: 620, floor: "#1e2630" });
    for (let i = 0; i < 6; i++) s.screen(120 + i * 240, 100, 200, 120, { color: i % 2 ? "#4a7aa8" : "#6a9ab8" });
    s.rect(600, 300, 400, 320, "#6a8aa0", 'opacity="0.35"').rect(600, 300, 400, 320, "none", 'stroke="#9ab8d0" stroke-width="4"');
    s.glow(800, 420, 220, "#fff0c4", 0.3);
    for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) { const x = 140 + i * 250, y = 700 + r * 130; s.desk(x, y, 180); s.screen(x - 50, y - 90, 100, 70, { color: "#5a8ab0" }); s.person(x + 40, y + 60, 90, { color: "#141a22" }); }
    return s;
  },
  // A long gas tanker with large round domes in a calm narrow strait at sunrise, rugged mountains, a distant warship.
  "qa-8": (s) => {
    s.sky("dawn", { sun: [1200, 320], r: 50 });
    s.mountains({ y: 430, amp: 170, color: "#8a6a54", depth: 0.4, x0: 600, x1: 1640 });
    s.sea(460, { glint: 1200 });
    s.ship("lng", 650, 700, { s: 2.4 });
    return s.ship("warship", 1350, 520, { s: 0.6 });
  }
};
