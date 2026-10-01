/* Nigeria */
module.exports = {
  // A festive 1960 crowd in agbadas, wrappers and head ties in an open stadium at night, fireworks bursting.
  "ng-9": (s) => {
    s.sky("night", { stars: 40 });
    [[300, 160, "#ffd38a"], [800, 110, "#e86a8a"], [1250, 180, "#9fd0ff"], [560, 230, "#5fcf7a"]].forEach(([x, y, c]) => { s.glow(x, y, 80, c, 0.4); for (let i = 0; i < 18; i++) { const a = i * Math.PI / 9; s.add(`<line x1="${x}" y1="${y}" x2="${x + Math.cos(a) * 70}" y2="${y + Math.sin(a) * 70}" stroke="${c}" stroke-width="3" opacity="0.85"/>`); } });
    s.add('<path d="M-40,460 Q800,340 1640,460 L1640,520 L-40,520 Z" fill="#2a2a34"/>');
    s.ground(520, "#2a2c30");
    s.crowd({ y: 560, rows: 8, h: 52, gap: 13, rowGap: 44, colors: ["#e8c42c", "#3f8a6a", "#c94a3c", "#3f6aa8", "#f2efe8", "#8a3a8a"] });
    for (let i = 0; i < 50; i++) { const x = s.r() * 1600, y = 520 + s.r() * 300; s.add(`<ellipse cx="${x}" cy="${y}" rx="10" ry="7" fill="${s.r.pick(["#e8c42c", "#c94a3c", "#3f8a6a", "#8a3a8a"])}"/>`); }
    return s;
  },
  // A vast smooth granite monolith over a planned capital, a large mosque with a golden dome and minarets, boulevards.
  "ng-3": (s) => {
    s.sky("afternoon");
    s.add('<path d="M700,520 Q720,300 900,240 Q1100,220 1220,320 Q1300,420 1320,520 Z" fill="#7a7068"/><path d="M900,240 Q1100,220 1220,320 Q1300,420 1320,520 L1200,520 Q1180,380 900,240 Z" fill="#6a6058"/>');
    s.city({ y: 540, h: [60, 160], depth: 0.35, lit: false });
    s.hills({ y: 560, amp: 60, color: "#5f8a4a", depth: 0.2 });
    s.mosque(500, 640, 1.3, { color: "#f2efe8", domeColor: "#d9a92c" });
    s.ground(640, "#9a948a");
    return s.road({ vanish: [900, 640], w: 1400, color: "#6a6866" });
  },
  // A narrow road used as an airstrip at night in palm forest, lanterns, an old four-engine cargo plane landing.
  "ng-10": (s) => {
    s.sky("night", { stars: 40 });
    s.forest({ y: 520, type: "palm", s: 1.2, gap: 40, color: "#1a2a1e" });
    s.ground(520, "#141c16");
    s.road({ vanish: [800, 520], w: 900, color: "#2a2a26", line: false });
    s.persp({ vanish: [800, 520], depth: 10 });
    for (let z = 1.1; z < 12; z *= 1.25) [350, 1250].forEach((X) => { const p = s.pp(X, 900, z); s.glow(p[0], p[1] - 10 / z, 40 / z, "#ffcf7a", 0.8); s.add(`<circle cx="${p[0]}" cy="${p[1] - 10 / z}" r="${6 / z}" fill="#fff0c4"/>`); });
    s.plane("cargo", 820, 360, { s: 1.6, angle: 6, color: "#3a3e44" });
    s.beam(900, 380, 30, { len: 400, w: 50, color: "#fff4dc", opacity: 0.18 });
    return s.person(200, 720, 60, { color: "#0e1210" }).person(240, 724, 58, { color: "#0e1210" }).rect(270, 690, 70, 30, "#2a2420");
  },
  // A long orderly line of voters in colourful early-1990s clothes at a rural polling station under a shade tree.
  "ng-11": (s) => {
    s.sky("desert", { sun: [800, 100], r: 40 });
    s.ground(500, "#c9a877");
    s.tree("oak", 1100, 640, { s: 4, color: "#4f7a3a" });
    s.rect(1000, 600, 220, 14, "#8a6a4a").rect(1016, 614, 10, 70, "#6a4a30").rect(1196, 614, 10, 70, "#6a4a30");
    s.ballotBox(1110, 600, 0.6);
    for (let i = 0; i < 20; i++) s.person(960 - i * 46, 640 + i * 12, 80 + i * 5, { color: "#2a2424", robe: s.r.pick(["#e8c42c", "#3f8a6a", "#c94a3c", "#3f6aa8", "#f2efe8", "#8a3a8a"]) });
    return s;
  },
  // A busy highway in a huge coastal city at dusk, yellow minibuses and cars, a long bridge over a lagoon, glass towers.
  "ng-4": (s) => {
    s.sky("dusk", { top: "#4a3a6a", bottom: "#f2a06a" });
    s.city({ y: 480, style: "towers", h: [120, 280], depth: 0.35, lit: true });
    s.sea(480, { color: "#4a5070", glint: 1200 });
    s.bridge(-20, 1620, 560, { pier: 200, span: 220, color: "#8a847a" });
    for (let i = 0; i < 14; i++) s.vehicle(i % 3 ? "bus" : "car", 60 + i * 115, 550, { s: 0.45, color: i % 3 ? "#e8c42c" : s.r.pick(["#3a3a3e", "#d9d2c2", "#8a3a2a"]) });
    s.rect(0, 700, 1600, 200, "#3a3836");
    for (let i = 0; i < 10; i++) s.vehicle(i % 2 ? "bus" : "car", 80 + i * 160, 820 - (i % 2) * 60, { s: 1, color: i % 2 ? "#e8c42c" : "#5a5e66" });
    return s;
  },
  // A long queue of cars and motorbike taxis at a busy petrol station in a hot city, jerry cans, vendors with umbrellas.
  "ng-5": (s) => {
    s.sky("haze", { top: "#c4b8a4" });
    s.city({ y: 460, h: [60, 140], depth: 0.4, lit: false });
    s.rect(900, 360, 600, 30, "#c43a2a").rect(920, 390, 16, 140, "#9a948a").rect(1460, 390, 16, 140, "#9a948a");
    [1060, 1200, 1340].forEach((x) => s.rect(x - 16, 440, 32, 90, "#e8e2d2"));
    s.ground(530, "#8a8478");
    for (let i = 0; i < 8; i++) s.vehicle("car", 840 - i * 110, 600 + i * 18, { s: 0.7 + i * 0.06, color: s.r.pick(["#5a5e66", "#d9d2c2", "#8a3a2a", "#3a4a6a"]) });
    for (let i = 0; i < 18; i++) s.rect(200 + i * 40, 820, 30, 40, s.r.pick(["#e8c42c", "#3f6aa8", "#c94a3c", "#3f8a6a"]));
    [[1300, 760, "#c94a3c"], [1460, 780, "#3f6aa8"]].forEach(([x, y, c]) => s.add(`<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 140}" stroke="#4a4a4a" stroke-width="4"/><path d="M${x - 90},${y - 120} Q${x},${y - 190} ${x + 90},${y - 120} Z" fill="${c}"/>`).person(x + 40, y + 20, 110, { color: "#2a2424", robe: "#e8c42c" }));
    return s;
  },
  // An empty rural school compound in dry savanna: single-storey painted classrooms, a dusty yard, a lone tree, an open gate.
  "ng-6": (s) => {
    s.sky("haze", { top: "#d4c8b0" });
    s.ground(480, "#c9a877");
    [[200, 520, 480], [760, 500, 520]].forEach(([x, y, w]) => { s.rect(x, y - 110, w, 110, "#e8d4b0").rect(x, y - 40, w, 40, "#5f9ab0").poly([[x - 16, y - 110], [x + w + 16, y - 110], [x + w - 10, y - 140], [x + 10, y - 140]], "#9aa0a4"); for (let i = 0; i < w / 90; i++) s.rect(x + 30 + i * 90, y - 90, 40, 40, "#4a3a2a"); });
    s.tree("acacia", 1350, 640, { s: 1.6 });
    return s.fence(-10, 700, 820, 60, { gap: 60, color: "#5a5a5a" }).add('<g stroke="#5a5a5a" stroke-width="4" fill="none"><rect x="760" y="760" width="160" height="60"/><line x1="760" y1="790" x2="920" y2="790"/></g>').fence(1000, 1610, 820, 60, { gap: 60, color: "#5a5a5a" });
  },
  // A military barracks gate at night under harsh floodlights, an empty guard post, a lowered barrier, a bare flagpole.
  "ng-7": (s) => {
    s.sky("night", { stars: 20 });
    s.wall(-20, 560, 620, 140, { color: "#9a948a" }).wall(1040, 1620, 620, 140, { color: "#9a948a" });
    s.rect(560, 460, 120, 160, "#b8b2a8").rect(580, 500, 80, 40, "#2a2a2e").rect(550, 450, 140, 14, "#8a847a");
    s.add('<line x1="1100" y1="620" x2="1100" y2="260" stroke="#6a6a6a" stroke-width="5"/>');
    [[300, 400], [1300, 400]].forEach(([x, y]) => { s.add(`<line x1="${x}" y1="480" x2="${x}" y2="${y}" stroke="#4a4a4a" stroke-width="5"/>`); s.glow(x, y, 220, "#f4f8ff", 0.5); s.beam(x, y, 100, { len: 500, w: 160, color: "#f4f8ff", opacity: 0.12 }); for (let i = 0; i < 10; i++) s.add(`<circle cx="${x + s.r() * 80 - 40}" cy="${y + s.r() * 60 - 30}" r="2" fill="#f2f2ee"/>`); });
    s.ground(620, "#2a2a2c").road({ vanish: [860, 620], w: 700, color: "#3a3a3c", line: false });
    return s.barrier(680, 1040, 700);
  },
  // A Niger Delta creek lined with mangroves, a fisherman in a dugout canoe, oily sheen, a distant gas flare at dusk.
  "ng-12": (s) => {
    s.sky("haze", { top: "#a8806a", bottom: "#e8b07a" });
    s.flare(1100, 460, 1.4);
    s.forest({ y: 480, x0: -40, x1: 700, type: "oak", s: 1.4, gap: 40, color: "#2f4a2a" }).forest({ y: 470, x0: 1200, x1: 1640, type: "oak", s: 1.2, gap: 40, color: "#2f4a2a" });
    s.sea(500, { color: "#5a5a54", glint: 1100 });
    for (let i = 0; i < 8; i++) s.add(`<ellipse cx="${200 + i * 170}" cy="${620 + (i % 3) * 70}" rx="120" ry="12" fill="url(#none)" stroke="${["#8a5ab0", "#5ab0a0", "#c9a03c"][i % 3]}" stroke-width="2" opacity="0.4"/>`);
    s.add('<path d="M560,760 Q800,800 1040,740 L1000,770 Q800,790 600,775 Z" fill="#4a3020"/>');
    return s.person(820, 772, 90, { color: "#1e1a18" }).add('<line x1="850" y1="700" x2="920" y2="810" stroke="#3a2a1e" stroke-width="4"/>');
  },
  // A huge open-air market from above: a sea of colourful umbrellas, stalls of tomatoes, peppers, yams, grains.
  "ng-8": (s) => {
    s.sky("morning");
    s.city({ y: 260, h: [40, 120], depth: 0.4, lit: false });
    s.rect(0, 260, 1600, 640, "#8a7a62");
    for (let i = 0; i < 160; i++) { const y = 280 + Math.pow(s.r(), 0.8) * 620, x = s.r() * 1600, k = 0.4 + (y - 280) / 500; s.add(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(40 * k).toFixed(1)}" fill="${s.r.pick(["#c94a3c", "#e8c42c", "#3f6aa8", "#3f8a6a", "#e86a2c", "#8a3a8a", "#f2efe8"])}"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(4 * k).toFixed(1)}" fill="#3a3a3a"/>`); if (s.r() < 0.5) for (let j = 0; j < 4; j++) s.add(`<circle cx="${(x + 40 * k + j * 10 * k).toFixed(1)}" cy="${(y + 20 * k).toFixed(1)}" r="${(5 * k).toFixed(1)}" fill="${s.r.pick(["#c4322a", "#e86a2c", "#a8865a", "#d9b23c"])}"/>`); }
    return s;
  },
};
