/* Bangladesh */
module.exports = {
  // A wide calm delta river at dawn, wooden country boats with tall patched square sails, rice fields and huts.
  "bd-9": (s) => {
    s.sky("dawn");
    s.ground(470, "#6a9a4a");
    s.forest({ y: 470, type: "palm", s: 0.5, gap: 110, x0: 0, x1: 1600, depth: 0.3 });
    [[200, 470], [520, 465], [1180, 470]].forEach(([x, y]) => s.house(x, y, 70, 40, { color: "#c8a878", roofColor: "#8a6a3a", depth: 0.3 }));
    s.sea(490, { lines: 30 });
    const sail = (x, y, k, c) => { s.ship("boat", x, y, { s: k * 1.6, hull: "#4a3424", cabin: false }); s.rect(x - 4 * k, y - 230 * k, 5 * k, 190 * k, "#3a2a1e"); s.poly([[x - 70 * k, y - 220 * k], [x + 60 * k, y - 230 * k], [x + 66 * k, y - 60 * k], [x - 64 * k, y - 56 * k]], c); s.rect(x - 30 * k, y - 170 * k, 40 * k, 30 * k, "#c8a070"); };
    sail(500, 680, 1, "#b88a5a"); sail(980, 620, 0.7, "#a87850"); sail(1340, 700, 0.9, "#c09a68");
    s.ground(820, "#5a8a3a");
    return s.fog(500, { h: 70, opacity: 0.35 });
  },
  // A monument of stacked triangular concrete spires on a lawn, reflected in a long pool at dusk.
  "bd-3": (s) => {
    s.sky("dusk");
    s.forest({ y: 560, type: "oak", s: 0.6, gap: 70, x0: 0, x1: 1600, depth: 0.35 });
    s.ground(560, "#6a8a5a");
    [[260, 120], [230, 170], [200, 220], [170, 270], [140, 320], [110, 370], [80, 420]].forEach(([hw, h], i) => s.poly([[800 - hw, 560], [800, 560 - h], [800 + hw, 560]], i % 2 ? "#cfc9bd" : "#bfb9ad", 'opacity="0.95"'));
    s.rect(560, 640, 480, 260, "#5a7088");
    s.add('<g opacity="0.35">' + [[260, 120], [170, 270], [80, 420]].map(([hw, h]) => `<polygon points="${800 - hw * 0.5},640 800,${640 + h * 0.5} ${800 + hw * 0.5},640" fill="#cfc9bd"/>`).join("") + "</g>");
    return s;
  },
  // A vast refugee camp of tents and shelters on a muddy plain under monsoon clouds, a waterlogged road, smoke.
  "bd-10": (s) => {
    s.sky("storm");
    s.clouds(6, [60, 260], "#6a6e72");
    s.ground(440, "#8a7a5a");
    s.tents(0, 1600, 470, { rows: 5, gap: 80, w: 70, rowGap: 70 });
    s.poly([[700, 900], [780, 440], [820, 440], [980, 900]], "#7a8288", 'opacity="0.8"');
    for (let i = 0; i < 6; i++) s.smoke(160 + i * 260, 520 + (i % 2) * 120, { len: 160, w: 20, rise: 1.6 });
    return s.rain({ count: 120 });
  },
  // A huge crowd filling a wide avenue lined with concrete buildings, blank billboards and power lines, hazy sky.
  "bd-11": (s) => {
    s.sky("haze", { top: "#e8e2d0", bottom: "#f4efe2" });
    for (let i = 0; i < 6; i++) { s.building(i * 110 - 20, 640, 120, 360 - i * 40, { color: "#a8a094", cell: 20, depth: i * 0.05 }); s.building(1500 - i * 110, 640, 120, 360 - i * 40, { color: "#9a9488", cell: 20, depth: i * 0.05 }); }
    s.rect(80, 200, 200, 90, "#e8e2d2").rect(1320, 220, 200, 90, "#e8e2d2");
    for (let k = 0; k < 4; k++) s.add(`<path d="M0,${150 + k * 20} Q800,${260 + k * 16} 1600,${150 + k * 22}" stroke="#2a2a2a" stroke-width="2" fill="none"/>`);
    s.ground(640, "#8a8680");
    s.crowd({ y: 600, rows: 8, h: 60, gap: 12, rowGap: 40 });
    for (let i = 0; i < 5; i++) s.rect(180 + i * 280, 520 + (i % 2) * 40, 130, 44, "#efe6cc");
    return s;
  },
  // A vast concrete parliament with huge circular and triangular openings, reflected in a still lake at dusk.
  "bd-4": (s) => {
    s.sky("golden");
    s.ground(560, "#7a8a5a");
    s.rect(380, 210, 840, 350, "#b8afa2");
    [[480, 150], [800, 120], [1120, 150]].forEach(([x, w]) => { s.rect(x - w / 2, 160, w, 400, "#a89f92"); });
    s.add('<circle cx="480" cy="360" r="60" fill="#3a3430"/><circle cx="1120" cy="360" r="60" fill="#3a3430"/><polygon points="740,470 800,330 860,470" fill="#3a3430"/><rect x="600" y="260" width="60" height="140" fill="#3a3430"/><rect x="940" y="260" width="60" height="140" fill="#3a3430"/>');
    s.rect(0, 560, 1600, 340, "#6a7a88");
    s.add('<g opacity="0.3"><rect x="380" y="560" width="840" height="300" fill="#b8afa2"/></g>');
    return s.add('<path d="M0,560 L1600,560" stroke="#d8d0c0" stroke-width="2"/>');
  },
  // An old red-brick colonial court with white arched verandas and a clock tower, police barricades in front.
  "bd-5": (s) => {
    s.sky("haze");
    s.forest({ y: 580, type: "oak", s: 1.2, gap: 160, x0: 0, x1: 1600, depth: 0.25 });
    s.rect(300, 300, 1000, 280, "#a8503a");
    for (let r = 0; r < 2; r++) for (let i = 0; i < 12; i++) s.add(`<path d="M${330 + i * 80},${440 + r * 130} L${330 + i * 80},${370 + r * 130} A30,30 0 0 1 ${390 + i * 80},${370 + r * 130} L${390 + i * 80},${440 + r * 130} Z" fill="#ece6da"/>`);
    s.rect(740, 170, 120, 140, "#a8503a").poly([[730, 170], [800, 120], [870, 170]], "#7a3a2a");
    s.add('<circle cx="800" cy="230" r="34" fill="#ece6da"/>');
    s.ground(580, "#a8a296");
    s.barrier(200, 700, 700).barrier(900, 1400, 700);
    return s.vehicle("truck", 1250, 790, { s: 1.1, color: "#4a5a6a" });
  },
  // A garment factory floor in dim light: rows of idle sewing machines, switched-off lamps, piles of fabric.
  "bd-6": (s) => {
    s.room({ wall: "#8a8c8a", floorY: 520, floor: "#5a5c5a" });
    for (let i = 0; i < 5; i++) s.rect(140 + i * 300, 80, 180, 260, "#b8c0c4", 'opacity="0.5"');
    for (let row = 0; row < 4; row++) {
      const y = 580 + row * 90, k = 1 + row * 0.25;
      for (let x = 80; x < 1600; x += 170 * k) {
        s.rect(x, y - 30 * k, 140 * k, 12 * k, "#7a6a54");
        s.rect(x + 20 * k, y - 60 * k, 50 * k, 30 * k, "#3a3c40").rect(x + 60 * k, y - 66 * k, 12 * k, 36 * k, "#2a2c30");
        if ((x + row) % 3 < 1) s.rect(x + 90 * k, y - 50 * k, 40 * k, 20 * k, ["#c84a3a", "#3a7ab8", "#e0b040"][row % 3]);
      }
    }
    for (let i = 0; i < 8; i++) s.add(`<line x1="${120 + i * 200}" y1="0" x2="${120 + i * 200}" y2="120" stroke="#3a3a3a" stroke-width="2"/><rect x="${90 + i * 200}" y="120" width="60" height="10" fill="#5a5a5a"/>`);
    return s;
  },
  // A school-courtyard polling station: long queues, translucent ballot boxes on tables under a veranda, trees.
  "bd-7": (s) => {
    s.sky("morning");
    s.rect(200, 220, 1200, 320, "#e8d28a");
    for (let i = 0; i < 10; i++) s.rect(250 + i * 115, 260, 50, 70, "#6a8a5a");
    s.rect(180, 380, 1240, 20, "#c8b070");
    for (let i = 0; i < 9; i++) s.rect(220 + i * 145, 400, 14, 140, "#d8c890");
    s.ground(540, "#c8b89a");
    s.table(600, 600, 260, {}).table(1000, 600, 260, {});
    s.ballotBox(600, 560, 0.9, { clear: true }).ballotBox(1000, 560, 0.9, { clear: true });
    s.crowd({ x0: 100, x1: 1500, y: 760, rows: 3, h: 80, gap: 50, rowGap: 50 });
    return s.forest({ y: 560, type: "oak", s: 1.2, gap: 1300, x0: 80, x1: 1600 });
  },
  // A huge hillside camp of bamboo and tarpaulin shelters on bare red earth, narrow paths, scattered trees.
  "bd-12": (s) => {
    s.sky("haze");
    s.hills({ y: 380, amp: 80, color: "#b8704a", depth: 0.3 });
    s.hills({ y: 560, amp: 120, color: "#c47a50", depth: 0.1 });
    for (let row = 0; row < 12; row++) for (let i = 0; i < 26; i++) {
      const x = (i * 64 + row * 23) % 1640 - 20, y = 340 + row * 46 + ((i * 7) % 3) * 6, w = 48 + row * 3;
      s.rect(x, y, w, 24 + row, ["#d8d2c4", "#9ab0c0", "#c8b89a", "#e0d8c8"][(i + row) % 4]);
      s.poly([[x - 2, y], [x + w / 2, y - 10 - row * 0.5], [x + w + 2, y]], ["#5a8ab0", "#e8e2d2", "#a8a090"][(i + row) % 3]);
    }
    return s.tree("acacia", 300, 520, { s: 0.8 }).tree("acacia", 1300, 480, { s: 0.7 });
  },
  // A dense skyline at dusk, an elevated metro with a train, cycle rickshaws below and a river with boats.
  "bd-8": (s) => {
    s.sky("dusk");
    s.city({ y: 470, h: [80, 220], lit: true, depth: 0.3 });
    s.rect(0, 420, 1600, 18, "#8a8a90");
    for (let x = 60; x < 1600; x += 220) s.rect(x, 438, 24, 110, "#7a7a80");
    s.train(300, 1100, 420, { type: "fast", color: "#d8d8dc", s: 0.6 });
    s.ground(548, "#5a5450");
    for (let i = 0; i < 10; i++) { s.bicycle(100 + i * 150, 620, 1.1); s.rect(80 + i * 150, 578, 40, 30, ["#c84a3a", "#3a7ab8", "#e0b040", "#4a9a5a"][i % 4]); }
    s.sea(640, { lines: 20 });
    s.ship("boat", 400, 780, { s: 1.4, hull: "#4a3424", cabin: false }).ship("boat", 1100, 820, { s: 1.6, hull: "#3a2a1e", dir: -1 });
    return s;
  }
};
