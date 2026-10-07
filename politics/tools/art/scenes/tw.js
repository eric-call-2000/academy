/* Taiwan */
module.exports = {
  // A crowded 1949 harbour quay: steamships moored, soldiers and civilians with suitcases, subtropical hills, haze.
  "tw-9": (s) => {
    s.sky("haze", { top: "#b8b4a4", bottom: "#e2d8c4" });
    s.hills({ y: 420, amp: 160, color: "#5a7a54", depth: 0.5 });
    s.sea(440, { color: "#8a9494" });
    s.ship("steam", 600, 560, { s: 1.4, smoke: true }).ship("steam", 1300, 520, { s: 0.9, dir: -1, smoke: true, depth: 0.3 });
    s.add('<path d="M760,520 L980,640" stroke="#5a4a3a" stroke-width="16"/>');
    s.rect(0, 620, 1600, 280, "#8a8070");
    return s.crowd({ y: 690, rows: 5, h: 60, gap: 22, rowGap: 46, colors: ["#5a5a4a", "#6a6450", "#3a3432", "#e2d9c8", "#4a4a40"] });
  },
  // A white memorial hall with a deep blue octagonal roof beyond a vast plaza, a peaceful crowd, spring evening.
  "tw-3": (s) => {
    s.sky("golden", { top: "#7f8fb0" });
    s.rect(640, 260, 320, 200, "#f2efe8").poly([[600, 260], [1000, 260], [920, 160], [680, 160]], "#2f4a8a").poly([[680, 160], [920, 160], [860, 90], [740, 90]], "#2f4a8a");
    for (let i = 0; i < 10; i++) s.rect(500 - i * 6 + 0, 460 + i * 10, 600 + i * 12, 10, "#e8e2d2");
    s.ground(560, "#d9d2c2");
    [200, 1400].forEach((x) => { s.rect(x - 90, 420, 180, 140, "#f2efe8"); s.poly([[x - 120, 420], [x + 120, 420], [x, 380]], "#2f4a8a"); for (let k = 0; k < 3; k++) s.rect(x - 70 + k * 56, 470, 28, 90, "#4a3a3a"); });
    return s.crowd({ y: 640, rows: 6, h: 30, gap: 10, rowGap: 30, thin: 0.3, colors: ["#3a3432", "#4a4440", "#2e3440"] });
  },
  // A memorial park with a tall abstract monument among tropical trees, people laying white lilies on a ledge.
  "tw-10": (s) => {
    s.sky("overcast");
    s.forest({ y: 560, type: "oak", s: 1.6, gap: 70, depth: 0.3, color: "#4f7a4a" }).forest({ y: 580, x0: 1100, x1: 1640, type: "palm", s: 1.4, gap: 120 });
    s.poly([[720, 600], [880, 600], [830, 140], [800, 100], [770, 140]], "#a8aaa8").poly([[800, 100], [830, 140], [880, 600], [820, 600]], "#8a8c8a");
    s.ground(600, "#7a8a6a");
    s.rect(300, 700, 1000, 40, "#c9c4bc");
    for (let i = 0; i < 30; i++) s.add(`<ellipse cx="${330 + s.r() * 940}" cy="${696}" rx="14" ry="6" fill="#f8f6f0"/>`);
    return s.person(600, 860, 150, { color: "#2a2e38" }).person(720, 870, 156, { color: "#3a3432" }).person(1040, 860, 146, { color: "#2e2a30" });
  },
  // A 1970s international assembly hall: curved rows of delegates' desks from the back, a glowing vote board.
  "tw-11": (s) => {
    s.mood("interior", { light: "#ffe2a6" });
    s.rect(0, 0, 1600, 900, "#3a3430").add('<ellipse cx="800" cy="0" rx="800" ry="160" fill="#5a4a3a"/>');
    s.rect(560, 160, 480, 200, "#1e1a18").glow(800, 260, 300, "#9fd0ff", 0.3);
    for (let r = 0; r < 5; r++) for (let c = 0; c < 14; c++) s.add(`<circle cx="${590 + c * 30}" cy="${190 + r * 34}" r="8" fill="${(r + c) % 3 ? "#7fd0a6" : "#e86a4a"}"/>`);
    s.rect(0, 380, 1600, 520, "#5a3e2e");
    return s.hemicycle({ x: 800, y: 380, r0: 220, rows: 7, step: 90, tilt: 0.55, color: "#c9a07a", people: 0.35, peopleColors: ["#1a1a1e", "#2a2a30"] });
  },
  // A night market street: glowing food stalls, paper lanterns, steam, a small campaign truck with blank banners.
  "tw-4": (s) => {
    s.sky("night", { stars: 0 });
    s.street3d({ vanish: [800, 440], depth: 4, left: 360, right: 1240, hmin: 360, hmax: 520, colors: ["#3a3e48", "#44464e"], road: "#3a3836", lit: true, shops: true, shopColor: "#ffd38a" });
    s.persp({ vanish: [800, 440], depth: 4 });
    for (let z = 1.1; z < 5; z *= 1.15) [500, 1100].forEach((X) => { const p = s.pp(X, 300, z); s.glow(p[0], p[1], 50 / z, "#ff8a5a", 0.6); s.add(`<ellipse cx="${p[0]}" cy="${p[1]}" rx="${20 / z}" ry="${26 / z}" fill="#d9433a"/>`); });
    s.add('<path d="M380,560 Q800,520 1220,560" stroke="#3a3a3a" stroke-width="2" fill="none"/>');
    s.smoke(560, 600, { len: 200, rise: 2, w: 30, color: "#e8e6e0" }).smoke(1040, 620, { len: 200, rise: 2, w: 30, color: "#e8e6e0" });
    s.vehicle("truck", 820, 680, { s: 1.2, color: "#e8e2d2" });
    s.rect(730, 580, 150, 50, "#f4f1ea");
    return s.crowd({ y: 860, rows: 2, h: 150, gap: 70, rowGap: 30, colors: ["#1e2026", "#2a2c34", "#3a3030"] });
  },
  // Volunteers at a folding table on a rainy street corner, passers-by with umbrellas, scooters, wet reflections.
  "tw-5": (s) => {
    s.sky("dusk", { top: "#2a3448", bottom: "#5a6478" });
    for (let i = 0; i < 6; i++) s.building(i * 280 - 40, 600, 260, 420, { color: "#5a5e68", lit: true });
    for (let i = 0; i < 6; i++) s.rect(i * 280, 480, 200, 120, "#ffd38a", 'opacity="0.8"');
    s.rect(0, 600, 1600, 300, "#3a3c44");
    for (let i = 0; i < 20; i++) s.rect(s.r() * 1600, 640 + s.r() * 240, 8 + s.r() * 20, 50, "#ffd38a", 'opacity="0.15"');
    s.rect(600, 700, 360, 16, "#d9d2c2").rect(620, 716, 10, 80, "#8a8a8a").rect(930, 716, 10, 80, "#8a8a8a");
    s.person(640, 700, 120, { color: "#3a5a8a" }).person(920, 700, 120, { color: "#8a3a3a" });
    s.person(780, 860, 190, { color: "#2a2c34", umbrella: "#dfe6ea" }).person(1160, 820, 170, { color: "#3a3030", umbrella: "#3a4a6a" });
    [[200, 820], [330, 830]].forEach(([x, y]) => s.add(`<circle cx="${x - 30}" cy="${y - 14}" r="14" fill="#222"/><circle cx="${x + 30}" cy="${y - 14}" r="14" fill="#222"/><path d="M${x - 40},${y - 24} Q${x - 10},${y - 60} ${x + 30},${y - 34} L${x + 34},${y - 70}" stroke="#5a7a8a" stroke-width="16" fill="none"/>`));
    return s.rain({ count: 260 });
  },
  // A vast semiconductor plant at night: long windowless white buildings, cooling vapour, a highway, dark hills.
  "tw-6": (s) => {
    s.sky("night", { stars: 30 });
    s.hills({ y: 440, amp: 140, color: "#1e2a24", depth: 0.2 });
    for (let r = 0; r < 3; r++) { const y = 520 + r * 70; s.rect(80 + r * 60, y - 80, 1440 - r * 120, 80, "#d9dcdc"); s.rect(80 + r * 60, y - 80, 1440 - r * 120, 6, "#b8bcbc"); s.glow(800, y - 40, 700, "#e0f0ff", 0.12); }
    [400, 900, 1300].forEach((x) => s.smoke(x, 440, { len: 300, rise: 2, w: 40, color: "#a8b4c4" }));
    s.rect(0, 720, 1600, 60, "#2a2a2e");
    for (let i = 0; i < 4; i++) s.add(`<line x1="0" y1="${734 + i * 10}" x2="1600" y2="${734 + i * 10}" stroke="${i % 2 ? "#ffe2a6" : "#e86a4a"}" stroke-width="3" opacity="0.8"/>`);
    return s;
  },
  // Two coastguard boats on a grey choppy strait, a warship far off, low heavy clouds, spray.
  "tw-7": (s) => s
    .sky("storm", { clouds: 6, cloudColor: "#5a6068" })
    .sea(480, { color: "#4a5a66", lines: 160 })
    .ship("warship", 1300, 490, { s: 0.3, depth: 0.5, dir: -1, reflect: false })
    .ship("patrol", 520, 620, { s: 1.2, hull: "#e8e6e0", reflect: false, wake: true })
    .ship("patrol", 1000, 700, { s: 1.4, hull: "#e8e6e0", reflect: false, dir: -1, wake: true })
    .add(Array.from({ length: 30 }, (_, i) => `<circle cx="${(i * 131) % 1600}" cy="${520 + (i * 53) % 380}" r="${3 + (i % 4)}" fill="#e8eef2" opacity="0.5"/>`).join("")),
  // Green mountains and terraced fields near the Pacific, a small village, people in red, white and black woven clothes in a circle.
  "tw-12": (s) => {
    s.sky("golden", { top: "#7fa2bf" });
    s.mountains({ y: 420, amp: 240, color: "forest", depth: 0.4, jag: false });
    s.sea(420, { color: "#4f8aa8" }).rect(0, 400, 400, 30, "#4f8aa8");
    for (let k = 0; k < 6; k++) s.ridge({ y: 480 + k * 30, amp: 20, color: s.r.pick(["#6f9a4a", "#7aa652", "#5f8a42"]), depth: 0.3 - k * 0.04, step: 120 });
    for (let i = 0; i < 7; i++) s.house(1000 + i * 80, 640, 70, 40, { color: "#d9d2c2", roofColor: "#5a5a5a", depth: 0.2 });
    s.ground(680, "#7a8a5a");
    for (let i = 0; i < 18; i++) { const a = i / 18 * Math.PI * 2, x = 700 + Math.cos(a) * 320, y = 790 + Math.sin(a) * 60; s.person(x, y, 80 + Math.sin(a) * 14, { color: "#2a2424", robe: ["#b8322a", "#f2efe8", "#1e1a1a"][i % 3] }); }
    return s;
  },
  // A dusk skyline dominated by a very tall segmented tower like stacked pagoda sections, forested mountains.
  "tw-8": (s) => {
    s.sky("dusk", { top: "#5a6a9a", bottom: "#e8b0b0" });
    s.mountains({ y: 460, amp: 220, color: "forest", depth: 0.35, jag: false });
    s.city({ y: 620, h: [60, 200], depth: 0.25, lit: true });
    const x = 900, c = "#6a8a8a";
    s.rect(x - 70, 420, 140, 200, c);
    for (let k = 0; k < 8; k++) s.poly([[x - 60, 420 - k * 34], [x + 60, 420 - k * 34], [x + 78, 386 - k * 34], [x - 78, 386 - k * 34]], k % 2 ? c : shade(c));
    s.rect(x - 20, 100, 40, 48, c).rect(x - 3, 40, 6, 60, c);
    return s.ground(620, "#3a3e44");
    function shade(c) { return "#5f7f80"; }
  },
};
