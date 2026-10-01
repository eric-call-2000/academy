/* India */
module.exports = {
  // A circular colonial-era parliament ringed with pale sandstone columns on a red base, lawns, trees.
  "in-9": (s) => {
    s.sky("morning", { clouds: 3 });
    s.forest({ y: 560, x0: -40, x1: 340, type: "oak", s: 1.2, gap: 50, depth: 0.3 }).forest({ y: 560, x0: 1260, x1: 1640, type: "oak", s: 1.2, gap: 50, depth: 0.3 });
    s.add('<ellipse cx="800" cy="560" rx="560" ry="70" fill="#a85a44"/>');
    s.rect(240, 420, 1120, 140, "#e2d3b6");
    for (let i = 0; i < 36; i++) { const t = i / 35, x = 800 - Math.cos(t * Math.PI) * 540; s.rect(x - 7, 420, 14, 140, "#c9b892"); }
    s.rect(230, 400, 1140, 22, "#d6c5a2").rect(400, 360, 800, 42, "#e2d3b6");
    s.ground(600, "#6f9a5a");
    return s.rect(0, 580, 1600, 20, "#b9a67e");
  },
  // A crowded 1940s railway platform in hazy afternoon light, families with bundles and trunks, a steam train.
  "in-3": (s) => {
    s.sky("haze");
    s.persp({ vanish: [1100, 380], depth: 6 });
    s.quad("floor", [-1000, 3000, 900, 1, 40], "#9a8a72");
    s.quad("floor", [-1000, 700, 860, 1, 40], "#b8a688");
    for (let z = 1.2; z < 12; z *= 1.25) { const a = s.pp(150, 860, z), b = s.pp(150, 120, z); s.add(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#4a3f36" stroke-width="${10 / z}"/>`); }
    s.quad("floor", [-1000, 700, 120, 1, 40], "#6a5a4a");
    s.train(1180, 1700, 640, { color: "#3a302a", track: false, s: 1.6 }).smoke(1260, 520, { len: 400, dir: -1, w: 50 });
    for (let i = 0; i < 70; i++) { const z = 1.7 + Math.pow(s.r(), 1.5) * 6, X = -200 + s.r() * 880; s.figure3d(X, z, { h: 340, floorY: 860, color: s.r.pick(["#5a4a3c", "#e8e0cf", "#3a3432", "#8a6a4a", "#c9b9a0"]), bundle: s.r() < 0.3 ? "#a8906c" : null, robe: s.r() < 0.4 ? s.r.pick(["#e8e0cf", "#c9a07a", "#b05a44"]) : null }); }
    return s;
  },
  // An old newspaper printing room at night: a big press with a blank page, stacks of paper, one hanging lamp.
  "in-10": (s) => {
    s.mood("night", { light: "#ffd38a" });
    s.room3d({ depth: 2.3, wall: "#4a4640", side: "#403c36", floor: "#2e2b28", ceiling: "#2a2724" });
    s.glow(800, 420, 520, "#ffd38a", 0.35);
    s.add('<line x1="800" y1="0" x2="800" y2="250" stroke="#1e1c1a" stroke-width="3"/><path d="M760,250 L840,250 L820,220 L780,220 Z" fill="#2f4a3c"/>');
    s.box3d(520, 1080, 520, 760, 1.5, 1.9, "#3a3e42");
    s.add('<circle cx="640" cy="540" r="70" fill="#2a2e32"/><circle cx="960" cy="540" r="70" fill="#2a2e32"/>');
    s.quad("floor", [620, 980, 519, 1.55, 1.85], "#f4f0e6");
    s.box3d(140, 420, 640, 900, 1.25, 1.5, "#d9d2c2").box3d(1180, 1440, 700, 900, 1.25, 1.45, "#cfc8b8");
    s.papers(800, 830, 26);
    return s;
  },
  // A glass-and-steel office campus with palms and bougainvillea, auto-rickshaws and motorbikes on the road.
  "in-11": (s) => {
    s.sky("tropical", { clouds: 3 });
    s.building(160, 600, 520, 360, { color: "#7fa2b6", cell: 18, lit: false }).building(760, 600, 680, 280, { color: "#8fb0c2", cell: 18, lit: false });
    s.ground(600, "#6f8a5a");
    [120, 720, 1500].forEach((x) => s.tree("palm", x, 660, { s: 1.6 }));
    for (let i = 0; i < 16; i++) s.add(`<circle cx="${200 + i * 85}" cy="${650 + (i % 3) * 6}" r="${18 + (i % 4) * 4}" fill="${i % 2 ? "#c94a7a" : "#3f6a3c"}"/>`);
    s.rect(0, 690, 1600, 210, "#6a6966").rect(0, 780, 1600, 4, "#d9d2bd");
    [[200, 760, "#2f4a3c"], [520, 750, "#d9b23c"], [900, 860, "#2f4a3c"], [1250, 760, "#d9b23c"]].forEach(([x, y, c]) => s.add(`<path d="M${x - 40},${y} L${x - 40},${y - 50} Q${x - 30},${y - 74} ${x + 10},${y - 74} L${x + 40},${y - 40} L${x + 40},${y} Z" fill="${c}"/><circle cx="${x - 24}" cy="${y}" r="10" fill="#222"/><circle cx="${x + 28}" cy="${y}" r="10" fill="#222"/>`));
    [380, 700, 1080, 1400].forEach((x, i) => s.add(`<g><circle cx="${x - 22}" cy="${830 - (i % 2) * 70}" r="12" fill="#222"/><circle cx="${x + 22}" cy="${830 - (i % 2) * 70}" r="12" fill="#222"/><path d="M${x - 22},${820 - (i % 2) * 70} L${x + 22},${820 - (i % 2) * 70} L${x + 8},${800 - (i % 2) * 70} Z" fill="#555"/></g>`).toString() && "");
    [380, 700, 1080, 1400].forEach((x, i) => { const y = 840 - (i % 2) * 80; s.add(`<circle cx="${x - 22}" cy="${y}" r="12" fill="#222"/><circle cx="${x + 22}" cy="${y}" r="12" fill="#222"/><path d="M${x - 24},${y - 10} L${x + 20},${y - 10} L${x + 6},${y - 28} Z" fill="#6a6e72"/>`); s.person(x, y - 10, 46, { color: "#3a3a3e" }); });
    return s;
  },
  // A vast outdoor rally ground at dusk from the back of the crowd, plain coloured flags, a lit stage, loudspeakers.
  "in-4": (s) => {
    s.sky("dusk", { top: "#4a4060", bottom: "#e0a07a" });
    s.ground(520, "#8a7058").fog(520, { h: 120, color: "#d9a87a", opacity: 0.6 });
    s.rect(620, 440, 360, 80, "#3a3030").glow(800, 440, 300, "#fff0c4", 0.6).rect(640, 420, 320, 20, "#fff0c4");
    [300, 1300].forEach((x) => { s.add(`<line x1="${x}" y1="520" x2="${x}" y2="300" stroke="#2a2a2a" stroke-width="5"/>`); s.poly([[x - 6, 300], [x + 40, 284], [x + 40, 316]], "#3a3a3a"); });
    s.crowd({ y: 560, rows: 9, h: 34, gap: 9, rowGap: 30, colors: ["#3a2f2c", "#4a3a34", "#e0d4bc", "#c9763c", "#2f3a4a"] });
    for (let i = 0; i < 26; i++) { const x = s.r() * 1600, y = 520 + s.r() * 200; s.flagpole(x, y, 90 + (y - 520) * 0.4, { color: s.r.pick(["#d98a2c", "#2f7a4a", "#e8e2d2", "#3f6aa8"]), stroke: 2 }); }
    return s;
  },
  // A green Himalayan meadow at dusk ringed by pines and snow peaks, a few riderless ponies, long shadows.
  "in-5": (s) => {
    s.sky("dusk", { top: "#4a5a7a", bottom: "#e8b88a" });
    s.mountains({ y: 420, amp: 240, color: "#7a7f8f", depth: 0.4, snow: 0.5 });
    s.forest({ y: 470, type: "pine", s: 1.2, gap: 20, depth: 0.3 });
    s.ground(500, "#6f8f52");
    [[600, 640], [760, 660], [1020, 620]].forEach(([x, y]) => { s.add(`<ellipse cx="${x}" cy="${y - 34}" rx="40" ry="18" fill="#5a3e2e"/><rect x="${x + 26}" y="${y - 70}" width="14" height="40" fill="#5a3e2e" transform="rotate(20,${x + 30},${y - 50})"/><ellipse cx="${x + 46}" cy="${y - 70}" rx="16" ry="9" fill="#5a3e2e"/>${[-28, -14, 14, 28].map((d) => `<rect x="${x + d}" y="${y - 22}" width="5" height="22" fill="#4a3226"/>`).join("")}<ellipse cx="${x - 60}" cy="${y}" rx="90" ry="6" fill="#3a4a2c" opacity="0.4"/>`); });
    return s.forest({ y: 860, x0: -40, x1: 300, type: "pine", s: 2.6, gap: 70 }).forest({ y: 860, x0: 1380, x1: 1640, type: "pine", s: 2.6, gap: 70 });
  },
  // A large tanker slowly turning from a busy tropical port at sunset, cranes and palms, fishing boats.
  "in-6": (s) => s
    .sky("golden", { sun: [500, 400], r: 50 })
    .city({ y: 470, x0: 900, x1: 1640, h: [30, 90], depth: 0.5 })
    .crane(1000, 480, 0.6, { depth: 0.4 }).crane(1150, 480, 0.6, { depth: 0.4 }).crane(1300, 480, 0.6, { depth: 0.4 })
    .forest({ y: 480, x0: 1300, x1: 1640, type: "palm", s: 0.5, gap: 40, depth: 0.4 })
    .sea(480, { glint: 500 })
    .ship("tanker", 760, 580, { s: 0.95, dir: -1, wake: true })
    .ship("boat", 260, 700, { s: 1.2 }).ship("boat", 420, 760, { s: 1.3, dir: -1 }).ship("fishing", 1300, 700, { s: 0.9 }),
  // Women in bright saris queuing outside a village school polling booth, one raising an inked finger.
  "in-7": (s) => {
    s.sky("desert", { sun: [800, 120], r: 40 });
    s.ground(540, "#c9a877");
    s.building(400, 580, 800, 200, { color: "#e2d6b8", windows: false }).rect(400, 380, 800, 16, "#4f7a8a");
    for (let i = 0; i < 4; i++) s.rect(470 + i * 180, 440, 70, 80, "#4f7a8a");
    s.rect(760, 470, 80, 110, "#6a4a36");
    s.tree("acacia", 200, 600, { s: 1.6 });
    for (let i = 0; i < 9; i++) { const x = 870 + i * 70, y = 640 + i * 18; s.person(x, y, 90 + i * 6, { robe: ["#d94a3c", "#e0a02c", "#3f8a6a", "#c94a8a", "#3f6aa8"][i % 5], color: "#3a2a24" }); }
    s.person(560, 820, 230, { robe: "#e07a2c", color: "#3a2a24" });
    return s.add('<rect x="590" y="520" width="12" height="70" rx="5" fill="#3a2a24"/><rect x="593" y="514" width="7" height="12" fill="#2a2a5a"/>');
  },
  // Young students holding folders queuing outside a colonial-style university building with a clock tower.
  "in-12": (s) => {
    s.sky("morning", { clouds: 2 });
    s.rect(200, 300, 1200, 300, "#c9a07a").rect(200, 290, 1200, 16, "#e2d6c2");
    for (let i = 0; i < 9; i++) s.add(`<path d="M${250 + i * 125},600 L${250 + i * 125},470 A40,40 0 0 1 ${330 + i * 125},470 L${330 + i * 125},600 Z" fill="#6a4a36"/>`);
    s.rect(730, 120, 140, 180, "#c9a07a").add('<circle cx="800" cy="190" r="40" fill="#efe9dc"/><line x1="800" y1="190" x2="800" y2="164" stroke="#3a2a24" stroke-width="4"/><line x1="800" y1="190" x2="818" y2="196" stroke="#3a2a24" stroke-width="4"/>').poly([[720, 120], [880, 120], [800, 60]], "#8a5a44");
    s.ground(600, "#b8a688");
    return s.crowd({ y: 690, x0: 0, x1: 1600, rows: 4, h: 80, gap: 30, rowGap: 50, colors: ["#e8e2d2", "#3f5a7a", "#c94a3c", "#3a3432", "#d9b23c"] });
  },
  // A ceremonial avenue at dusk, a sandstone memorial arch far away, domed red sandstone buildings, fountains.
  "in-8": (s) => {
    s.sky("dusk", { sun: [800, 420], r: 30 });
    s.arch(800, 470, 0.45, { color: "#c9a07a", attic: true, depth: 0.3 });
    s.persp({ vanish: [800, 470], depth: 8 });
    s.ground(470, "#4f6a44");
    s.quad("floor", [620, 980, 900, 1, 40], "#a08a72");
    [[160, 1], [1440, 1]].forEach(([x]) => { const dir = x < 800 ? -1 : 1; s.rect(x - 150, 520, 300, 160, "#b5634a"); s.rect(x - 150, 510, 300, 14, "#d9c09a"); s.dome(x, 510, 70, { color: "#c9a07a" }); for (let k = 0; k < 8; k++) s.rect(x - 130 + k * 36, 560, 14, 50, s.m.light, 'opacity="0.8"'); });
    [[560, 760], [1040, 760]].forEach(([x, y]) => { s.add(`<ellipse cx="${x}" cy="${y}" rx="90" ry="16" fill="#8fa6b8"/>`); s.add(`<path d="M${x},${y - 6} Q${x - 30},${y - 80} ${x - 60},${y - 6} M${x},${y - 6} Q${x + 30},${y - 80} ${x + 60},${y - 6} M${x},${y - 6} L${x},${y - 90}" stroke="#e8eef2" stroke-width="5" fill="none" opacity="0.8"/>`); });
    return s.lamps(380, 1220, 560, 70, { gap: 210 });
  },
};
