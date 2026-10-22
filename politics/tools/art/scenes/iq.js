/* Iraq */
module.exports = {
  // An ancient stepped ziggurat of mud brick with a central stairway on a flat plain at sunset, palms and a river beyond.
  "iq-9": (s) => {
    s.sky("golden", { sun: [1280, 330] });
    s.ground(560, "#c9a87a");
    s.add('<path d="M0,560 C400,548 900,572 1600,556 L1600,586 C900,600 400,580 0,592 Z" fill="#8aa0a0" opacity="0.8"/>');
    s.forest({ y: 560, type: "palm", s: 0.5, gap: 70, x0: 0, x1: 1600, depth: 0.4 });
    s.ground(600, "#d2b07e");
    [[300, 1300, 700, 90], [400, 1200, 610, 80], [500, 1100, 530, 70], [600, 1000, 460, 60]].forEach(([a, b, y, h], i) => {
      s.rect(a, y - h, b - a, h, ["#a8784a", "#b5845a", "#bf9064", "#c99a6e"][i]);
      s.rect(a, y - h, b - a, 6, "#d8b088");
    });
    s.poly([[740, 700], [860, 700], [830, 400], [770, 400]], "#9a6a40");
    for (let y = 410; y < 700; y += 18) s.rect(770 - (y - 400) * 0.1, y, 60 + (y - 400) * 0.2, 4, "#c99a6e");
    s.ground(700, "#d9ba8a");
    return s.birds(1100, 200, 5);
  },
  // A dusk street lined with tall grey blast walls, a blue-tiled dome and minaret behind, palms, cars with headlights.
  "iq-3": (s) => {
    s.sky("dusk");
    s.city({ y: 520, h: [80, 180], style: "mideast", lit: true, depth: 0.4 });
    s.dome(1000, 430, 110, { color: "#3a7a9a" });
    s.rect(890, 430, 220, 90, "#c9b08a");
    s.minaret(1180, 520, 300, { color: "#d8c7a7" });
    s.forest({ y: 540, type: "palm", s: 0.7, gap: 160, x0: 100, x1: 1500, depth: 0.2 });
    s.ground(540, "#6a645a");
    s.road({ vanish: [800, 540], w: 1300, color: "#4a4844" });
    for (let i = 0; i < 9; i++) { const x = 20 + i * 62; s.poly([[x, 820 - i * 30], [x + 56, 820 - i * 30], [x + 50, 560 - i * 3], [x + 6, 560 - i * 3]], i % 2 ? "#9a968e" : "#8a867e"); }
    for (let i = 0; i < 9; i++) { const x = 1580 - i * 62; s.poly([[x, 820 - i * 30], [x - 56, 820 - i * 30], [x - 50, 560 - i * 3], [x - 6, 560 - i * 3]], i % 2 ? "#9a968e" : "#8a867e"); }
    s.vehicle("car", 720, 690, { s: 0.9 }).vehicle("car", 860, 620, { s: 0.6, dir: -1 });
    s.glow(745, 670, 30, "#fff4c8", 0.8).glow(870, 605, 20, "#fff4c8", 0.7);
    return s;
  },
  // A mountain town of flat-roofed houses in a green valley under snowy peaks, a pale yellow haze in empty streets.
  "iq-10": (s) => {
    s.sky("morning");
    s.mountains({ y: 420, amp: 220, color: "#8a8e96", snow: true, depth: 0.4 });
    s.hills({ y: 560, amp: 90, color: "#6f8a5a", depth: 0.2 });
    s.ground(600, "#7f9a62");
    [[300, 680], [440, 650], [600, 700], [760, 660], [920, 690], [1080, 650], [1240, 700], [520, 780], [860, 800], [1160, 790]].forEach(([x, y]) => s.house(x, y, 120, 70, { color: "#cbbca0", roof: "flat" }));
    s.add('<ellipse cx="800" cy="720" rx="760" ry="110" fill="#d8d27a" opacity="0.35"/><ellipse cx="700" cy="790" rx="600" ry="70" fill="#e2dc8a" opacity="0.3"/>');
    return s.fog(700, { h: 120, opacity: 0.25 });
  },
  // A city square with a tall empty stone plinth, beige armoured vehicles at the edge, palms and a tall hotel behind.
  "iq-11": (s) => {
    s.sky("haze");
    s.building(1050, 560, 260, 380, { color: "#c9bfae", cell: 22 });
    s.city({ y: 560, h: [60, 140], style: "mideast", depth: 0.4 });
    s.forest({ y: 570, type: "palm", s: 0.8, gap: 220, x0: 80, x1: 1550, depth: 0.15 });
    s.ground(570, "#bdb09a");
    s.rect(700, 330, 200, 330, "#a8a090").rect(660, 640, 280, 40, "#9a9282").rect(690, 310, 220, 24, "#b8b0a0");
    s.vehicle("apc", 220, 760, { s: 1.1, color: "#8a7a5a" }).vehicle("apc", 1250, 780, { s: 1.2, color: "#8a7a5a", dir: -1 });
    return s.papers(400, 780, 8);
  },
  // A golden-domed shrine with two golden minarets over a crowded square at dusk, pilgrims from behind, lamps glowing.
  "iq-4": (s) => {
    s.sky("dusk", { top: "#1e2a50", bottom: "#4a5a8a" });
    s.rect(500, 300, 600, 300, "#c9b08a");
    for (let i = 0; i < 8; i++) s.add(`<path d="M${520 + i * 72},600 L${520 + i * 72},470 A28,28 0 0 1 ${576 + i * 72},470 L${576 + i * 72},600 Z" fill="#2a6a7a"/>`);
    s.dome(800, 300, 160, { color: "#e2b84a" });
    s.minaret(560, 600, 460, { color: "#e2b84a", w: 34 }).minaret(1040, 600, 460, { color: "#e2b84a", w: 34 });
    s.glow(800, 260, 220, "#ffd88a", 0.35);
    s.ground(600, "#7a6a58");
    s.lamps(80, 1540, 640, 170, { gap: 260 });
    return s.crowd({ y: 700, rows: 5, h: 70, gap: 16, rowGap: 36, colors: ["#1c1a1e", "#2a2428", "#242030"] });
  },
  // A desert air base at night with hangars and blast walls, interceptors streaking upward, flashes, city lights on hills.
  "iq-5": (s) => {
    s.sky("night", { stars: 50 });
    s.hills({ y: 520, amp: 60, color: "#22283a", depth: 0 });
    for (let i = 0; i < 60; i++) s.add(`<circle cx="${80 + (i * 97) % 1500}" cy="${470 + (i * 37) % 50}" r="2" fill="#ffd18a" opacity="0.8"/>`);
    s.ground(600, "#3a3a3a");
    s.intercepts(300, 1300, 600, 7);
    s.flash(560, 160).flash(1100, 220);
    [[200, 260], [560, 300], [980, 260]].forEach(([x, w]) => { s.add(`<path d="M${x},700 L${x},620 A${w / 2},70 0 0 1 ${x + w},620 L${x + w},700 Z" fill="#4a4a48"/>`); });
    for (let i = 0; i < 12; i++) s.poly([[80 + i * 125, 820], [190 + i * 125, 820], [180 + i * 125, 740], [90 + i * 125, 740]], i % 2 ? "#5a5a56" : "#52524e");
    s.ground(820, "#2e2e2c");
    return s;
  },
  // A flat hot coast with long empty jetties, rows of idle storage tanks, a single tanker far offshore, white haze.
  "iq-6": (s) => {
    s.sky("haze", { top: "#d8d6cc", bottom: "#f2efe4" });
    s.sea(440, { lines: 20 });
    s.ship("tanker", 1250, 470, { s: 0.35, depth: 0.5 });
    s.ground(600, "#d6c7a2");
    s.rect(200, 560, 18, 40, "#8a8478").rect(200, 470, 900, 14, "#8a8478");
    for (let x = 260; x < 1100; x += 120) s.rect(x, 484, 8, 76, "#7a7468");
    s.rect(500, 520, 900, 12, "#8a8478");
    for (let x = 560; x < 1400; x += 140) s.rect(x, 532, 7, 68, "#7a7468");
    s.tanks(120, 760, 7, { w: 150, h: 110 });
    s.tanks(240, 860, 6, { w: 180, h: 120, color: "#e2ded4" });
    return s.pipes(0, 1600, 640, { count: 3 });
  },
  // A dusty highway checkpoint with concrete barriers, sandbags, parked pickups, blank banners, small armed figures.
  "iq-7": (s) => {
    s.sky("afternoon");
    s.city({ y: 480, h: [40, 100], style: "mideast", depth: 0.5 });
    s.ground(480, "#cbb48a");
    s.road({ vanish: [820, 480], w: 1300, color: "#9a907e" });
    s.flagpole(380, 640, 300, { color: "#e8e2d2", w: 120 }).flagpole(1240, 640, 300, { color: "#e8e2d2", w: 120 });
    s.vehicle("pickup", 200, 740, { s: 1.1 }).vehicle("pickup", 1300, 760, { s: 1.2, dir: -1, color: "#d8d2c4" });
    s.sandbags(560, 760, 700, 3);
    s.barrier(860, 1120, 700);
    for (let i = 0; i < 5; i++) s.rect(500 + i * 130, 820, 110, 60, "#b8b2a6");
    [[640, 690], [700, 690], [980, 690], [1060, 700]].forEach(([x, y]) => s.person(x, y, 70, { color: "#3e4a3a" }));
    return s;
  },
  // A ruined old city of pale stone beside a river, the stump of a brick minaret amid rubble, cranes rebuilding beyond.
  "iq-12": (s) => {
    s.sky("morning");
    s.city({ y: 470, h: [60, 160], style: "mideast", depth: 0.5 });
    s.towerCrane(1200, 470, 0.9).towerCrane(1400, 470, 0.7);
    s.ground(470, "#c9bca0");
    for (let i = 0; i < 16; i++) { const x = 60 + i * 95, h = 40 + ((i * 53) % 90); s.poly([[x, 640], [x + 90, 640], [x + 90, 640 - h * 0.6], [x + 60, 640 - h], [x + 20, 640 - h * 0.7]], i % 2 ? "#d6c8aa" : "#c8b898"); }
    s.add('<path d="M560,640 L566,420 L600,380 L612,440 L626,640 Z" fill="#a8744a"/>');
    for (let y = 440; y < 640; y += 22) s.rect(568, y, 54, 3, "#c08a5a");
    s.ground(640, "#d9ccb0");
    s.add('<path d="M0,760 C500,720 1100,800 1600,740 L1600,900 L0,900 Z" fill="#7a9098"/>');
    return s.add('<path d="M0,770 C500,735 1100,812 1600,752" stroke="#a8bcc0" stroke-width="4" fill="none"/>');
  },
  // A wide river through a city at sunset, palms on the near bank, a blue dome, minaret and towers beyond, small boats.
  "iq-8": (s) => {
    s.sky("dusk", { sun: [400, 380] });
    s.tower(1250, 470, 70, 300, { color: "#8a8ea0" }).tower(1360, 470, 60, 240, { color: "#7a7e90" });
    s.city({ y: 470, h: [60, 150], style: "mideast", lit: true, depth: 0.4 });
    s.rect(760, 400, 200, 70, "#c9b08a");
    s.dome(860, 400, 100, { color: "#3a7a9a" });
    s.minaret(1010, 470, 280, { color: "#d8c7a7" });
    s.sea(480, { lines: 25 });
    s.ship("dhow", 600, 600, { s: 0.35, sail: "#e8dcc4" }).ship("dhow", 1100, 650, { s: 0.3, sail: "#e8dcc4", dir: -1 });
    s.ground(760, "#5a5038");
    return s.forest({ y: 780, type: "palm", s: 1.3, gap: 260, x0: 40, x1: 1600 });
  }
};
