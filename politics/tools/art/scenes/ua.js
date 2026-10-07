/* Ukraine */
module.exports = {
  // A white monastery with golden domes on a wooded hill above a wide river, a city beyond, summer evening.
  "ua-9": (s) => s
    .sky("golden", { sun: [1300, 360], r: 44 })
    .city({ y: 470, x0: 900, x1: 1640, h: [40, 140], depth: 0.6 })
    .hills({ y: 520, amp: 220, color: "forest", depth: 0.2, peak: 500, peakW: 600 })
    .church(480, 330, 1.0, { domes: 5, bell: true })
    .forest({ y: 420, x0: 100, x1: 820, type: "oak", s: 0.8, gap: 26, spread: 120 })
    .sea(540, { glint: 1300, color: "#6f8aa0" }),
  // A snowy city square at night filled with tents and a crowd round braziers, a tall white column monument.
  "ua-3": (s) => {
    s.sky("night", { stars: 40 });
    s.city({ y: 430, h: [120, 220], style: "old", depth: 0.3, lit: true });
    s.ground(430, "#c9d2dc");
    s.column(800, 470, 320, { color: "#efeae0", statue: "#c9a24a", w: 26 });
    s.tents(60, 1560, 520, { rows: 3, gap: 120, w: 70, colors: ["#5a6a5a", "#7a6a5a", "#4a5a6a", "#8a7a5a"] });
    for (let i = 0; i < 14; i++) { const x = 80 + i * 112, y = 640 + (i % 3) * 60; s.fire(x, y, 22, { smoke: true }); }
    s.crowd({ y: 690, rows: 5, h: 40, gap: 14, rowGap: 36, thin: 0.25, colors: ["#1e222c", "#2a2e38", "#3a2e2a"] });
    for (let i = 0; i < 8; i++) s.flagpole(100 + i * 200, 640, 140, { color: ["#c9b98a", "#8a9aa6", "#b8a07a"][i % 3] });
    return s.snowfall({ count: 120 });
  },
  // A vast bare harvested field under a leaden sky, an abandoned whitewashed thatched house, a leafless tree.
  "ua-10": (s) => s
    .sky("storm", { top: "#5a5e62", bottom: "#a8a8a0" })
    .ground(520, "#8a7a5a")
    .field(520, 900, { color: "#8f7d5a", dark: true })
    .rect(980, 440, 220, 110, "#e6e1d4")
    .poly([[960, 445], [1220, 445], [1170, 380], [1010, 380]], "#9a8460")
    .rect(1080, 480, 40, 70, "#2a2724").rect(1020, 470, 30, 30, "#4a4440").rect(1140, 470, 30, 30, "#4a4440")
    .tree("bare", 1320, 560, { s: 1.4 }),
  // An abandoned Soviet city of concrete blocks overgrown with birches, a rusting yellow Ferris wheel.
  "ua-11": (s) => s
    .sky("overcast")
    .city({ y: 560, h: [180, 320], wmin: 120, wmax: 200, color: "#a4a29c", depth: 0.35, lit: false })
    .forest({ y: 600, type: "birch", s: 1.1, gap: 40, depth: 0.25 })
    .ground(600, "#7a8064")
    .ferris(620, 760, 230, { color: "#c9a33a" })
    .forest({ y: 860, x0: 1000, x1: 1640, type: "birch", s: 1.8, gap: 80 }),
  // A grand government building at night, lower windows walled with sandbags, one upper window lit, a barrier.
  "ua-4": (s) => {
    s.sky("wintdusk", { top: "#141a28", bottom: "#3a4660" });
    s.palace(800, 640, 1.9, { color: "#9aa0a6", cols: 10, h: 230, w: 760 });
    s.rect(1080, 450, 30, 60, "#ffd38a").glow(1095, 480, 80, "#ffd38a", 0.5);
    s.sandbags(60, 1540, 640, 6);
    s.ground(640, "#3a3e44");
    s.forest({ y: 660, x0: -40, x1: 200, type: "bare", s: 1.6, gap: 60 }).forest({ y: 660, x0: 1400, x1: 1640, type: "bare", s: 1.6, gap: 60 });
    return s.barrier(560, 1040, 780);
  },
  // Inside a log dugout at dawn: a soldier from behind watching a small screen, a quadcopter on a crate, a radio.
  "ua-5": (s) => {
    s.mood("winter", { light: "#bcd2ea" });
    s.rect(0, 0, 1600, 900, "#4a3a2c");
    for (let y = 0; y < 900; y += 60) s.rect(0, y, 1600, 54, s.r.pick(["#5a4634", "#4f3e2e", "#5f4a36"]));
    s.rect(1100, 120, 340, 50, "#a8c2dc").glow(1270, 145, 220, "#bcd2ea", 0.4);
    s.beam(1270, 160, 130, { len: 700, w: 80, color: "#bcd2ea", opacity: 0.12 });
    s.crate(180, 820, 260, 150, { color: "#5a5a3a" });
    s.add('<g><rect x="240" y="640" width="120" height="20" rx="6" fill="#2a2c2e"/><line x1="200" y1="630" x2="400" y2="670" stroke="#2a2c2e" stroke-width="5"/><line x1="200" y1="670" x2="400" y2="630" stroke="#2a2c2e" stroke-width="5"/>' + [200, 400].map((x) => `<ellipse cx="${x}" cy="625" rx="34" ry="5" fill="#2a2c2e"/><ellipse cx="${x}" cy="675" rx="34" ry="5" fill="#2a2c2e"/>`).join("") + "</g>");
    s.crate(980, 820, 380, 130, { color: "#6a5a40" });
    s.screen(1080, 580, 160, 110, { color: "#5f8fb0", glow: "#7fb4e0" });
    s.add('<rect x="1300" y="620" width="70" height="70" fill="#3a3e36"/><line x1="1340" y1="620" x2="1340" y2="540" stroke="#2a2a2a" stroke-width="3"/>');
    s.person(820, 880, 360, { color: "#3a3e34", helmet: true });
    return s.add('<path d="M400,820 Q600,860 980,800" stroke="#1e1e1e" stroke-width="4" fill="none"/>');
  },
  // A grand marble corridor with tall windows, two small groups of officials walking toward each other.
  "ua-6": (s) => {
    s.mood("winter", { light: "#f2f0e8" });
    s.room3d({ depth: 4.5, wall: "#d9d4c8", side: "#cfc9bc", floor: "#bdb6a8", ceiling: "#e2ddd2", windows: { n: 6, side: "left", top: 80, bottom: 640 }, columns: 6, colColor: "#e6e1d6", colX: 1, colW: 50 });
    for (let i = 0; i < 12; i++) { const z = 1 + i * 0.3; s.quad("floor", [0, W(), 900, z, z + 0.15], "#cfc8ba"); }
    [[700, 2.0], [760, 2.05], [730, 2.15]].forEach(([X, z]) => s.figure3d(X, z, { h: 420, color: "#23262c" }));
    [[860, 3.6], [900, 3.7], [840, 3.8], [920, 3.85]].forEach(([X, z]) => s.figure3d(X, z, { h: 420, color: "#23262c" }));
    return s;
    function W() { return 1600; }
  },
  // Young people with blank cardboard signs in a square on a summer evening, a grand theatre behind.
  "ua-7": (s) => {
    s.sky("golden", { sun: [1400, 300], r: 40 });
    s.portico(800, 520, 1.3, { cols: 8, color: "#e8dcc4", w: 520, h: 230 });
    s.rect(160, 330, 300, 190, "#e0d2b6").rect(1140, 330, 300, 190, "#e0d2b6");
    s.ground(520, "#a8988a");
    s.crowd({ y: 640, rows: 5, h: 70, gap: 30, rowGap: 46, signs: 20, colors: ["#3a3432", "#5a4a5a", "#3f5a6a", "#7a5a44", "#2a2a2a"] });
    return s;
  },
  // A modern courtroom with a pale-wood judges' bench, empty chairs, case files, tall windows over a city.
  "ua-12": (s) => {
    s.mood("day");
    s.room3d({ depth: 2.4, wall: "#e2ddd2", side: "#d6d0c4", floor: "#a89a86", ceiling: "#ebe8e0", windows: { n: 2, side: "right", top: 60, bottom: 600 }, backWindows: [] });
    s.box3d(300, 1300, 470, 720, 2.1, 2.3, "#d9c49a");
    for (let i = 0; i < 5; i++) s.chair3d(450 + i * 175, 2.32, { color: "#3a3a3e", floorY: 720 });
    s.box3d(240, 700, 640, 680, 1.35, 1.6, "#c9b48a").box3d(900, 1360, 640, 680, 1.35, 1.6, "#c9b48a");
    [[300, 1.4], [420, 1.45], [1000, 1.4], [1200, 1.45]].forEach(([X, z]) => s.box3d(X, X + 90, 600, 640, z, z + 0.06, "#efe9dc"));
    return s.chairs3d(300, 1300, 1.2, 1.3, { count: 1, gap: 200, color: "#3a3a3e" });
  },
  // A vast golden wheat field under a stormy sky, a small white church with golden domes, a strip of sun.
  "ua-8": (s) => s
    .sky("storm", { top: "#3e444c", bottom: "#a8a090", clouds: 5, cloudColor: "#6a6e72" })
    .beam(1200, 0, 105, { len: 700, w: 140, color: "#ffe2a6", opacity: 0.18 })
    .church(1180, 520, 0.45, { domes: 3, depth: 0.3 })
    .ground(520, "#c9a24a")
    .field(520, 900, { color: "#d4ac4c", vanish: 1100 })
    .add('<polygon points="900,560 1500,540 1600,900 600,900" fill="#f2cf6a" opacity="0.35"/>'),
};
