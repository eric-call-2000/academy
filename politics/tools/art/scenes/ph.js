/* Philippines */
module.exports = {
  // An old baroque church of coral stone with buttresses and a square bell tower beside a plaza with palms.
  "ph-9": (s) => {
    s.sky("day");
    s.clouds(4, [80, 260]);
    s.ground(600, "#cbbf9e");
    s.rect(500, 300, 520, 300, "#c8b08a");
    s.poly([[500, 300], [760, 190], [1020, 300]], "#b89c74");
    s.add('<path d="M720,600 L720,470 A40,40 0 0 1 800,470 L800,600 Z" fill="#5a4230"/>');
    for (const x of [470, 640, 860, 1030]) s.poly([[x, 600], [x + 40, 600], [x + 30, 360], [x + 10, 360]], "#b09a76");
    s.rect(1060, 200, 180, 400, "#c0a882").rect(1050, 190, 200, 20, "#a8906a");
    s.add('<path d="M1120,320 L1120,270 A30,30 0 0 1 1180,270 L1180,320 Z" fill="#4a3a2a"/><path d="M1120,450 L1120,400 A30,30 0 0 1 1180,400 L1180,450 Z" fill="#4a3a2a"/>');
    s.poly([[1060, 190], [1150, 130], [1240, 190]], "#9a7a5a");
    s.rect(0, 600, 1600, 300, "#d8ccb0");
    return s.forest({ y: 700, type: "palm", s: 1.2, gap: 380, x0: 60, x1: 1600 });
  },
  // A bay at sunset from a seawall with palms, broken fortress walls in front, grey warships on the horizon.
  "ph-3": (s) => {
    s.sky("dusk", { sun: [1100, 420] });
    s.sea(440, { lines: 25 });
    s.ship("warship", 500, 440, { s: 0.3, depth: 0.5 }).ship("warship", 760, 445, { s: 0.25, depth: 0.5 });
    s.rect(0, 620, 1600, 30, "#8a7a6a").ground(650, "#6a5e52");
    s.forest({ y: 640, type: "palm", s: 0.9, gap: 300, x0: 700, x1: 1600, color: "#2e3a2e" });
    s.add('<path d="M0,900 L0,620 L80,620 L80,600 L140,600 L140,620 L220,620 L240,680 L300,660 L330,720 L420,700 L460,900 Z" fill="#6a5a4a"/>');
    return s.add('<path d="M520,900 L540,780 L600,760 L640,800 L700,790 L720,900 Z" fill="#5a4c3e"/>');
  },
  // A white colonial palace beside a dark river at night, military trucks at iron gates, searchlights sweeping.
  "ph-10": (s) => {
    s.sky("night", { stars: 20 });
    s.beam(400, 560, -70, { len: 700, w: 40 }).beam(1200, 560, -115, { len: 700, w: 40 });
    s.rect(420, 330, 760, 240, "#d8d4c8").rect(400, 320, 800, 16, "#c8c4b8");
    for (let i = 0; i < 10; i++) s.add(`<path d="M${450 + i * 72},500 L${450 + i * 72},420 A20,20 0 0 1 ${490 + i * 72},420 L${490 + i * 72},500 Z" fill="#e8c878" opacity="0.6"/>`);
    s.ground(570, "#2a2e34");
    for (let x = 0; x < 1600; x += 24) s.rect(x, 600, 4, 70, "#14161a");
    s.rect(0, 600, 1600, 5, "#14161a");
    s.vehicle("truck", 300, 690, { s: 1.2 }).vehicle("truck", 1200, 700, { s: 1.3, dir: -1 });
    s.rect(0, 720, 1600, 180, "#1e2a3a");
    return s.lamps(80, 1540, 720, 120, { gap: 360 });
  },
  // A packed highway crowd with yellow ribbons and wordless banners, armoured vehicles halted, an overpass.
  "ph-11": (s) => {
    s.sky("haze");
    s.city({ y: 440, h: [50, 120], depth: 0.4 });
    s.rect(0, 330, 1600, 30, "#a8a49a").rect(200, 360, 30, 90, "#9a968c").rect(1400, 360, 30, 90, "#9a968c");
    s.ground(450, "#8a8680");
    s.crowd({ y: 500, rows: 3, h: 60, gap: 14, rowGap: 46 });
    s.vehicle("apc", 560, 680, { s: 1.6 }).vehicle("apc", 1000, 660, { s: 1.4, dir: -1 });
    s.crowd({ y: 800, rows: 3, h: 80, gap: 16, rowGap: 40 });
    for (let i = 0; i < 26; i++) s.add(`<rect x="${(i * 131) % 1560}" y="${470 + (i * 53) % 300}" width="${18 + (i % 3) * 10}" height="8" fill="#e8c23a" transform="rotate(${(i % 5) * 8 - 16} ${(i * 131) % 1560} ${470 + (i * 53) % 300})"/>`);
    for (let i = 0; i < 4; i++) s.rect(150 + i * 380, 440 + (i % 2) * 40, 120, 40, "#f2e6a8");
    return s;
  },
  // A neoclassical government building with tall white columns and a wide staircase on a palm boulevard at dusk.
  "ph-4": (s) => {
    s.sky("dusk");
    s.portico(800, 600, 1.4, { cols: 10, color: "#ece6d8" });
    s.ground(600, "#8a847a");
    for (let i = 0; i < 6; i++) s.rect(560 - i * 20, 600 + i * 14, 480 + i * 40, 14, i % 2 ? "#d8d2c4" : "#cfc9bb");
    s.forest({ y: 690, type: "palm", s: 1.1, gap: 280, x0: 40, x1: 1600 });
    s.road({ vanish: [800, 690], w: 1600, color: "#5a5654", line: false });
    return s.vehicle("car", 400, 820, { s: 1 }).vehicle("car", 1250, 850, { s: 1.1, dir: -1 });
  },
  // A modern court complex of pale towers and green glass beside grassy dunes under a grey northern sky.
  "ph-5": (s) => {
    s.sky("overcast");
    s.dunes(560, { color: "#b8b49a" });
    [[420, 200, 260], [620, 160, 330], [800, 220, 220], [1040, 180, 290]].forEach(([x, w, h], i) => {
      s.rect(x, 560 - h, w, h, i % 2 ? "#e2e0d8" : "#d6d4cc");
      for (let y = 560 - h + 20; y < 540; y += 40) s.rect(x + 14, y, w - 28, 18, "#7a9a8a");
    });
    s.ground(560, "#7a8a5a");
    for (let x = 0; x < 1600; x += 18) s.rect(x, 610, 3, 60, "#3a3e40");
    s.rect(0, 610, 1600, 4, "#3a3e40");
    s.tree("bare", 220, 640, { s: 1.1 }).tree("bare", 1400, 650, { s: 1.2 });
    return s.road({ vanish: [800, 680], w: 1600, color: "#8a8a86", line: false });
  },
  // A flooded street in heavy rain, water up to shop doors, a crumbling half-built embankment, stalled jeepneys.
  "ph-6": (s) => {
    s.sky("storm");
    for (let i = 0; i < 8; i++) s.building(i * 200, 560, 190, 160 + (i % 3) * 50, { color: ["#c8b8a0", "#a8b8b0", "#d0a890", "#b8b0a0"][i % 4], cell: 22 });
    s.rect(0, 520, 1600, 380, "#8a7258");
    s.add('<path d="M0,540 L1600,540" stroke="#a88e6a" stroke-width="3"/>');
    s.poly([[1000, 900], [1080, 600], [1600, 600], [1600, 900]], "#9a968e");
    for (let x = 1100; x < 1600; x += 50) s.rect(x, 560, 4, 50, "#5a4a40");
    s.poly([[1180, 600], [1260, 600], [1240, 660], [1200, 650]], "#8a7258");
    s.vehicle("bus", 300, 640, { s: 1, color: "#d84a3a" }).vehicle("bus", 680, 660, { s: 0.9, color: "#3a7ab8", dir: -1 });
    s.rect(0, 620, 1000, 280, "#8a7258", 'opacity="0.75"');
    return s.rain({ count: 260 });
  },
  // A large white coast guard cutter firing water cannon at a small grey patrol boat on a choppy sea.
  "ph-7": (s) => {
    s.sky("day");
    s.sea(380, { lines: 40 });
    s.add('<ellipse cx="1300" cy="420" rx="220" ry="22" fill="#7ad0c8" opacity="0.7"/>');
    s.ship("frigate", 1450, 410, { s: 0.25, depth: 0.5, hull: "#f0eee8" }).ship("patrol", 200, 420, { s: 0.25, depth: 0.5 });
    s.ship("frigate", 380, 700, { s: 1.6, hull: "#f4f2ec", dir: 1 });
    s.add('<path d="M640,520 Q900,380 1120,610" stroke="#f4fbff" stroke-width="26" fill="none" opacity="0.85"/><path d="M640,520 Q900,400 1120,610" stroke="#ffffff" stroke-width="10" fill="none"/>');
    s.ship("patrol", 1200, 720, { s: 1.3, dir: -1 });
    return s.add('<ellipse cx="1130" cy="610" rx="90" ry="40" fill="#ffffff" opacity="0.6"/>');
  },
  // A narrow slum alley at night with tin roofs, tangled power lines, one harsh streetlight and a candle shrine.
  "ph-12": (s) => {
    s.sky("night", { stars: 10 });
    s.poly([[0, 0], [560, 260], [560, 900], [0, 900]], "#3a3430");
    s.poly([[1600, 0], [1040, 260], [1040, 900], [1600, 900]], "#342e2a");
    for (let i = 0; i < 6; i++) { s.poly([[0, 120 + i * 120], [560, 300 + i * 90], [560, 316 + i * 90], [0, 146 + i * 120]], "#6a6a70"); s.poly([[1600, 120 + i * 120], [1040, 300 + i * 90], [1040, 316 + i * 90], [1600, 146 + i * 120]], "#5e5e64"); }
    s.rect(560, 260, 480, 520, "#22242a");
    s.poly([[560, 900], [700, 780], [900, 780], [1040, 900]], "#3a3a3a");
    for (let k = 0; k < 6; k++) s.add(`<path d="M${200 + k * 40},${180 + k * 20} Q800,${330 + k * 18} ${1400 - k * 30},${190 + k * 22}" stroke="#14141a" stroke-width="2" fill="none"/>`);
    s.rect(980, 300, 8, 300, "#2a2a2a");
    s.glow(970, 300, 160, "#f6e8b0", 0.6);
    s.candles(720, 880, 860, 10);
    return s.glow(800, 850, 80, "#ffb84a", 0.5);
  },
  // A city skyline across a calm bay at sunset, seawall and palms in front, outrigger fishing boats.
  "ph-8": (s) => {
    s.sky("dusk", { top: "#4a3a6a", bottom: "#f0a068", sun: [400, 440] });
    s.city({ y: 450, h: [80, 260], style: "modern", lit: true, depth: 0.35 });
    s.sea(460, { lines: 25 });
    s.ship("fishing", 600, 600, { s: 0.6 }).ship("fishing", 1100, 640, { s: 0.5, dir: -1 });
    s.rect(0, 760, 1600, 40, "#7a6a5a");
    s.ground(800, "#4a4038");
    return s.forest({ y: 820, type: "palm", s: 1.3, gap: 320, x0: 80, x1: 1600 });
  }
};
