/* Australia */
module.exports = {
  // A crowd in Edwardian clothes with hats and parasols in a Sydney park in 1901, an ornate white domed pavilion.
  "au-9": (s) => {
    s.sky("day", { clouds: 4 });
    s.forest({ y: 520, type: "oak", s: 1.6, gap: 70, color: "#7a8a6a", depth: 0.25 });
    s.rect(600, 340, 400, 180, "#f2efe8").dome(800, 340, 120, { color: "#f2efe8" });
    for (let i = 0; i < 8; i++) s.rect(620 + i * 50, 360, 14, 160, "#e2ddd0");
    s.add('<path d="M600,340 Q700,380 800,340 Q900,380 1000,340" stroke="#4f8a4a" stroke-width="8" fill="none"/>');
    s.ground(520, "#7a9a5a");
    return s.crowd({ y: 620, rows: 6, h: 60, gap: 18, rowGap: 44, umbrellas: ["#f2efe8", "#e8d4c4"], colors: ["#2a2a2e", "#3a3432", "#f2efe8", "#5a4a3c"] });
  },
  // A vast red outback at sunset, a huge monolith glowing on the horizon, spinifex and desert oaks.
  "au-3": (s) => {
    s.sky("dusk", { top: "#4a3a6a", bottom: "#f2a06a" });
    s.add('<path d="M500,520 Q520,400 620,380 L1060,380 Q1160,400 1180,520 Z" fill="#c4572c"/><path d="M620,380 L1060,380 Q1160,400 1180,520 L1100,520 Q1080,430 1000,410 Z" fill="#a8441e"/>');
    s.ground(520, "#b8603a");
    for (let i = 0; i < 60; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${560 + Math.pow(s.r(), 0.7) * 340}" rx="${20 + s.r() * 30}" ry="${8 + s.r() * 10}" fill="#9a8a4a"/>`);
    return s.tree("cypress", 200, 760, { s: 1.6, color: "#4a5a3a" }).tree("cypress", 1400, 720, { s: 1.4, color: "#4a5a3a" });
  },
  // A long red dirt road across the outback to a lonely old brick institution, spinifex, one gum tree, a small shoe.
  "au-10": (s) => {
    s.sky("day", { top: "#3f7ab8", bottom: "#c9e0ee" });
    s.ground(480, "#b8703a");
    s.road({ vanish: [800, 480], w: 700, color: "#a8542c", line: false });
    s.rect(740, 440, 120, 50, "#8a4a3a").poly([[730, 440], [870, 440], [800, 410]], "#6a5a50");
    s.tree("birch", 1200, 560, { s: 1.6, color: "#e8e2d2" }).forest({ y: 600, type: "oak", s: 0.3, gap: 40, color: "#9a8a4a" });
    return s.add('<path d="M720,800 Q700,770 730,760 L790,762 Q810,770 806,800 Z" fill="#3a3a5a"/><rect x="760" y="760" width="20" height="10" fill="#e8e2d2"/>');
  },
  // A steep scrub hillside above a pebbly beach at dawn at Gallipoli, small wooden rowing boats on calm water.
  "au-11": (s) => s
    .sky("dawn", { top: "#8a9ab0" })
    .ridge({ y: 520, amp: 300, color: "#6a6a4a", peak: 400, peakW: 700, jag: true, step: 30 })
    .forest({ y: 470, x0: 0, x1: 900, type: "oak", s: 0.3, gap: 18, color: "#5a5a3a", spread: 80 })
    .rect(0, 520, 1600, 30, "#c9c0ae")
    .sea(550, { color: "#7a8aa0" })
    .ship("boat", 600, 650, { s: 1, hull: "#5a4030", cabin: false })
    .ship("boat", 900, 700, { s: 1.2, hull: "#5a4030", cabin: false })
    .ship("boat", 1250, 680, { s: 1.1, hull: "#5a4030", cabin: false }),
  // A parliament built into a hill with a grass-covered roof and a tall four-legged steel flagpole, a reflecting pool.
  "au-4": (s) => {
    s.sky("dusk", { top: "#3a3a7a", bottom: "#b0a0d0" });
    s.add('<path d="M100,560 Q400,420 800,420 Q1200,420 1500,560 Z" fill="#5a7a4a"/>');
    s.rect(500, 470, 600, 90, "#e8e2d2");
    for (let i = 0; i < 16; i++) s.rect(520 + i * 36, 490, 14, 70, "#ffd38a", 'opacity="0.8"');
    s.add('<g stroke="#c9ccd0" stroke-width="5"><line x1="700" y1="430" x2="800" y2="120"/><line x1="900" y1="430" x2="800" y2="120"/><line x1="740" y1="440" x2="800" y2="120"/><line x1="860" y1="440" x2="800" y2="120"/><line x1="800" y1="120" x2="800" y2="60"/></g>');
    s.ground(560, "#4a5a3a");
    return s.rect(400, 620, 800, 120, "#7a7aa8").add('<g opacity="0.3" transform="translate(0,1240) scale(1,-1)"><rect x="500" y="500" width="600" height="60" fill="#e8e2d2"/></g>');
  },
  // A country pub at night: patrons from behind watching a TV of blank coloured result bars, beer glasses, veranda.
  "au-5": (s) => {
    s.mood("interior", { light: "#ffd38a" });
    s.rect(0, 0, 1600, 900, "#6a4a34");
    for (let x = 0; x < 1600; x += 40) s.rect(x, 0, 4, 560, "#5a3e2c");
    s.rect(1100, 100, 440, 400, "#1e2a3a").add('<rect x="1120" y="120" width="400" height="360" fill="#3a4a6a" opacity="0.5"/>').glow(1320, 300, 260, "#9fd0ff", 0.25);
    s.rect(1180, 180, 340, 240, "#141820");
    [["#e86a4a", 180], ["#5f8ae8", 140], ["#5fcf7a", 90]].forEach(([c, w], i) => s.rect(1200, 220 + i * 60, w, 34, c));
    s.rect(80, 120, 380, 300, "#1e2a24").glow(270, 270, 200, "#ffb85a", 0.3).add('<circle cx="170" cy="340" r="20" fill="#c94a2a" opacity="0.8"/><circle cx="220" cy="350" r="16" fill="#c94a2a" opacity="0.8"/>');
    s.rect(0, 560, 1600, 80, "#4a3022").rect(0, 540, 1600, 24, "#7a5034");
    for (let i = 0; i < 9; i++) s.rect(120 + i * 150, 500, 22, 40, "#e8b84a", 'opacity="0.85"').rect(120 + i * 150, 496, 22, 8, "#f8f2e0");
    return s.crowd({ y: 900, rows: 1, h: 230, gap: 120, colors: ["#2a2420", "#3a3030", "#2e3440", "#4a3a2e"] });
  },
  // A city beach at dusk: rows of candles and flowers on the sand, people standing quietly, gentle surf.
  "au-6": (s) => {
    s.sky("dusk", { top: "#6a6a7a", bottom: "#e8b0b0" });
    s.sea(460, { color: "#6a7a8a" });
    s.add(Array.from({ length: 4 }, (_, i) => `<path d="M0,${500 + i * 18} Q800,${490 + i * 18} 1600,${504 + i * 18}" stroke="#f2efe8" stroke-width="3" opacity="0.5" fill="none"/>`).join(""));
    s.ground(560, "#d9c4a4");
    s.candles(80, 1520, 700, 120);
    for (let i = 0; i < 30; i++) s.add(`<circle cx="${100 + s.r() * 1400}" cy="${720 + s.r() * 30}" r="10" fill="${s.r.pick(["#f2efe8", "#e86a8a", "#e8c42c"])}"/>`);
    return s.crowd({ y: 640, rows: 2, h: 90, gap: 50, rowGap: 30, thin: 0.3, colors: ["#2a2c34", "#3a3432", "#4a4040"] });
  },
  // A small rural town main street: tall grain silos, an old two-storey pub with iron-lace veranda, utes, wide sky.
  "au-7": (s) => {
    s.sky("afternoon", { top: "#5f8ab8", bottom: "#e8dcbc" });
    [1100, 1200, 1300].forEach((x) => s.silo(x, 560, 1.6, { color: "#d9d2c2" }));
    s.rect(200, 300, 700, 260, "#c9a07a").rect(200, 420, 700, 14, "#e8e2d2");
    s.add('<g stroke="#e8e2d2" stroke-width="3">' + Array.from({ length: 15 }, (_, i) => `<line x1="${210 + i * 48}" y1="420" x2="${210 + i * 48}" y2="560"/>`).join("") + '</g><rect x="190" y="290" width="720" height="14" fill="#6a5a50"/>');
    for (let i = 0; i < 6; i++) s.rect(240 + i * 110, 330, 50, 70, "#4a3a32");
    s.ground(560, "#c4a46a");
    return s.vehicle("pickup", 400, 680, { s: 1.6, color: "#d9d2c2" }).vehicle("pickup", 760, 690, { s: 1.6, color: "#8a3a2a" }).vehicle("pickup", 1180, 700, { s: 1.6, color: "#3a5a6a" });
  },
  // A grey naval patrol ship on a wide tropical ocean under a heavy sky, a small old wooden fishing boat far away.
  "au-12": (s) => s
    .sky("storm", { top: "#5a6068", bottom: "#a8b0b0" })
    .sea(480, { color: "#4a6a7a", lines: 120 })
    .ship("dhow", 1300, 490, { s: 0.25, depth: 0.5, sail: "#c9b89a" })
    .ship("patrol", 600, 640, { s: 1.6, wake: true }),
  // The dark hull of a large submarine under construction in a covered dry dock, scaffolding, yellow cranes, lights.
  "au-8": (s) => {
    s.mood("night", { light: "#ffffff" });
    s.room3d({ depth: 3, wall: "#4a4e56", side: "#3e424a", floor: "#2a2c30", ceiling: "#5a5e66", lights: "strips" });
    s.add('<path d="M240,640 Q240,520 400,520 L1240,520 Q1400,540 1400,640 Q1400,720 1240,740 L400,740 Q240,740 240,640 Z" fill="#1a1c20"/><rect x="760" y="420" width="140" height="110" fill="#1a1c20"/>');
    s.add('<g stroke="#a8a49a" stroke-width="3">' + Array.from({ length: 16 }, (_, i) => `<line x1="${260 + i * 72}" y1="400" x2="${260 + i * 72}" y2="760"/>`).join("") + Array.from({ length: 6 }, (_, i) => `<line x1="240" y1="${420 + i * 60}" x2="1360" y2="${420 + i * 60}"/>`).join("") + "</g>");
    s.add('<g fill="#d9b23c"><rect x="120" y="120" width="30" height="660"/><rect x="1450" y="120" width="30" height="660"/><rect x="100" y="100" width="1400" height="30"/></g>');
    for (let i = 0; i < 6; i++) s.person(300 + i * 200, 800, 30, { hat: "hard" });
    return s;
  },
};
