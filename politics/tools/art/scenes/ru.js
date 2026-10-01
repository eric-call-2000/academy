/* Russia */
const kremlin = (s, y, o) => {
  o = o || {};
  s.fortWall(-20, 1620, y, o.h || 110, { snow: o.snow, depth: o.depth });
  (o.towers || [180, 620, 1150, 1480]).forEach((x, i) => s.kremlinTower(x, y, (o.s || 0.75) * (i % 2 ? 1 : 0.85), { depth: o.depth, star: o.star }));
};
module.exports = {
  // A long red-brick fortress wall with pointed towers by a frozen river, golden onion domes behind.
  "ru-9": (s) => {
    s.sky("winter", { sun: [300, 260], r: 34 });
    s.church(980, 520, 1.1, { domes: 5, depth: 0.3 }).church(560, 520, 0.8, { domes: 3, bell: true, depth: 0.35 });
    kremlin(s, 600, { snow: true, s: 0.85 });
    s.ground(600, "snow").rect(0, 680, 1600, 220, "#dfe6ec").add('<path d="M0,700 L1600,690" stroke="#c9d3dc" stroke-width="3"/>').snowfall({ count: 60 });
    return s;
  },
  // A snowy square at night beneath fortress walls and onion domes, a plain red flag being lowered, small figures.
  "ru-3": (s) => {
    s.sky("night", { stars: 30 });
    s.church(400, 470, 0.8, { domes: 5, depth: 0.4 });
    s.rect(900, 360, 360, 120, "#c9c2b2").dome(1080, 360, 70, { color: "#7a8a7a" });
    s.flagpole(1080, 270, 120, { at: 0.55, color: "#a8322a" });
    kremlin(s, 520, { h: 90, s: 0.6, towers: [140, 760, 1460] });
    s.ground(520, "snow").glow(800, 520, 600, "#ffcf7a", 0.18);
    s.crowd({ y: 700, x0: 300, x1: 1300, rows: 2, h: 70, gap: 40, thin: 0.5, colors: ["#1e222c", "#2a2e38"] });
    return s.snowfall({ count: 200 });
  },
  // Rows of low wooden barracks behind a double barbed-wire fence in a snowy clearing, a watchtower.
  "ru-10": (s) => {
    s.sky("overcast", { top: "#7a8088", bottom: "#b9bcbc" });
    s.forest({ y: 470, type: "pine", s: 0.8, gap: 18, depth: 0.45, color: "#2e3a32" });
    s.ground(480, "snow");
    [520, 580, 650].forEach((y, i) => { for (let x = 160 + i * 40; x < 1500; x += 360) s.barracks(x, y, 260, { snow: true, depth: 0.3 - i * 0.1 }); });
    s.watchtower(1380, 700, 1.2);
    s.fence(-10, 1610, 760, 120, { gap: 90, color: "#3a3a38" }).fence(-10, 1610, 830, 130, { gap: 110, color: "#2e2e2c" });
    s.add(Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${650 + i * 12 + (i > 3 ? 40 : 0)}" x2="1600" y2="${650 + i * 12 + (i > 3 ? 40 : 0)}" stroke="#2e2e2c" stroke-width="1.5" stroke-dasharray="6 5"/>`).join(""));
    return s;
  },
  // A ruined industrial city on a wide frozen river in winter, shattered factories and chimneys, smoke.
  "ru-11": (s) => {
    s.sky("storm", { top: "#6a6e72", bottom: "#a9aaa6" });
    for (let i = 0; i < 10; i++) { const x = 40 + i * 160, h = 120 + s.r() * 160; s.poly([[x, 560], [x, 560 - h], [x + 40, 560 - h + 30], [x + 70, 560 - h - 20], [x + 110, 560 - h + 50], [x + 140, 560 - h + 10], [x + 140, 560]], s.c("#6a645e", 0.3)); for (let k = 0; k < 4; k++) s.rect(x + 14 + k * 30, 560 - h * 0.6, 14, 30, s.c("#3a3632", 0.3)); }
    s.chimney(300, 560, 220, { depth: 0.3, smoke: false }).chimney(980, 560, 260, { depth: 0.3, smoke: false });
    s.smoke(600, 460, { len: 500, dark: true, w: 60, rise: 1.4 }).smoke(1250, 470, { len: 400, dark: true, w: 50, rise: 1.4 });
    s.ridge({ y: 640, amp: 60, color: "#d9dde0", step: 50, jag: true });
    s.rect(0, 640, 1600, 260, "#c9d2d9").add('<path d="M0,700 L1600,680 M0,780 L1600,770" stroke="#b3bec8" stroke-width="3"/>');
    return s.snowfall({ count: 90 });
  },
  // A long white and gold palace hall with chandeliers, a very long white table, two chairs at opposite ends.
  "ru-4": (s) => {
    s.mood("afternoon", { light: "#fff3d8" });
    s.room3d({ depth: 4.2, wall: "#ece6d8", side: "#e2dac8", floor: "#c9b48e", ceiling: "#efe9dc", windows: { n: 5, side: "left", top: 120, bottom: 640, arched: true }, columns: 5, colColor: "#d9c58a", colW: 40, colX: 1, lights: "chandeliers", boards: true });
    s.box3d(640, 960, 640, 670, 1.3, 4.0, "#f2efe8", { top: "#faf8f2" });
    s.chair3d(800, 1.15, { color: "#d9c58a", floorY: 900 });
    s.chair3d(800, 4.05, { color: "#d9c58a" });
    return s;
  },
  // An oil refinery on a snowy plain at night, lit towers, one column of dark smoke, tanker rail cars.
  "ru-5": (s) => s
    .sky("night", { stars: 120 })
    .ground(560, "#cfd6de")
    .refinery(900, 560, 1.1, { lit: true })
    .smoke(1000, 300, { len: 600, dark: true, w: 70, rise: 2, dir: -1 })
    .railcars(-40, 1660, 780, { color: "#1e2226" })
    .snowfall({ count: 40 }),
  // A plain negotiating room: one polished table, two empty chairs facing, a folder, two glasses, snow outside.
  "ru-6": (s) => {
    s.mood("winter", { light: "#e8eef4" });
    s.room3d({ depth: 2.4, wall: "#c9c6bf", side: "#bebbb3", floor: "#5f554c", ceiling: "#d6d3cc", backWindows: [[560, 1040, 140, 620]], backGlass: "#d6dde6" });
    for (let i = 0; i < 40; i++) { const x = 600 + s.r() * 400, y = 300 + s.r() * 200; s.add(`<circle cx="${x}" cy="${y}" r="2" fill="#fff" opacity="0.8"/>`); }
    s.chair3d(560, 1.6, { color: "#3a2f28" }).chair3d(1040, 1.6, { color: "#3a2f28" });
    s.box3d(580, 1020, 620, 650, 1.4, 1.9, "#4a3426", { top: "#6a4a36" });
    s.quad("floor", [740, 860, 619, 1.55, 1.7], "#2a1f1a");
    [[640, 1.6], [960, 1.6]].forEach(([X, z]) => { const p = s.pp(X, 620, z); s.add(`<rect x="${p[0] - 8}" y="${p[1] - 30}" width="16" height="30" fill="#dfe9ee" opacity="0.75"/>`); });
    return s;
  },
  // A school gym turned polling station: a transparent ballot box, one voter in a winter coat, an official.
  "ru-7": (s) => {
    s.mood("overcast", { light: "#f2f4ee" });
    s.room3d({ depth: 2.6, wall: "#b9c2b8", side: "#aeb7ad", floor: "#a8865c", ceiling: "#cfd4cf", lights: "strips", boards: true, windows: { n: 3, side: "right", top: 80, bottom: 260 } });
    s.booths(980, 1300, 600, { color: "#7f8f9a" });
    s.box3d(560, 860, 640, 700, 1.6, 1.8, "#c9c2b2");
    const p = s.pp(710, 640, 1.7); s.ballotBox(p[0], p[1], 1.2, { clear: true });
    s.figure3d(560, 1.3, { h: 400, color: "#2f3136", coat: true });
    s.figure3d(1150, 2.4, { h: 420, color: "#4a4a50" });
    return s;
  },
  // A rebuilt city of new glass towers and a large white mosque with four minarets, green mountains.
  "ru-12": (s) => s
    .sky("day", { clouds: 2 })
    .mountains({ y: 450, amp: 200, color: "forest", depth: 0.4, jag: false, snow: 0.8 })
    .city({ y: 600, x0: 900, x1: 1640, style: "towers", h: [160, 300], color: "#8fa6b8", depth: 0.2, lit: false })
    .mosque(520, 620, 1.1, { color: "#f2efe8", domeColor: "#9aa6ae" })
    .ground(620, "#8a9a7a")
    .rect(0, 680, 1600, 220, "#b9b6ae"),
  // Red brick fortress walls and pointed towers at dusk under heavy clouds, a wet cobbled square, lamps.
  "ru-8": (s) => {
    s.sky("dusk", { top: "#3a3c48", bottom: "#a07a6c", clouds: 5, cloudColor: "#5a5a66" });
    kremlin(s, 520, { s: 0.85, depth: 0.15 });
    s.ground(520, "#4a4442");
    for (let i = 0; i < 9; i++) { const y = 540 + Math.pow(i / 9, 1.7) * 360; s.add(`<line x1="0" y1="${y}" x2="1600" y2="${y}" stroke="#3a3432" stroke-width="2"/>`); }
    s.lamps(160, 1500, 560, 120, { gap: 260 });
    [160, 420, 680, 940, 1200, 1460].forEach((x) => s.add(`<ellipse cx="${x}" cy="${700}" rx="16" ry="120" fill="#ffcf7a" opacity="0.12"/>`));
    return s;
  },
};
