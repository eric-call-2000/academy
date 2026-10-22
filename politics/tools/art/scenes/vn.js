/* Vietnam */
module.exports = {
  // Limestone karst towers rising from a misty bay at dawn, old junks with ribbed rust-coloured sails.
  "vn-9": (s) => {
    s.sky("dawn");
    s.sea(520, { lines: 30 });
    const karst = (x, w, h, col) => s.path(`M${x},540 C${x - 10},${540 - h * 0.6} ${x + w * 0.1},${540 - h} ${x + w * 0.4},${540 - h} C${x + w * 0.75},${540 - h * 1.02} ${x + w * 0.9},${540 - h * 0.5} ${x + w},540 Z`, col);
    [[60, 160, 260, "#9aa6a0"], [300, 120, 200, "#a4aea8"], [1150, 200, 300, "#9aa6a0"], [1400, 140, 220, "#a4aea8"]].forEach(([x, w, h, c]) => karst(x, w, h, c));
    s.fog(470, { h: 90, opacity: 0.45 });
    [[180, 220, 420, "#5e7466"], [520, 180, 340, "#66806e"], [960, 240, 460, "#5a7062"], [1300, 160, 300, "#66806e"]].forEach(([x, w, h, c]) => karst(x, w, h, c));
    s.ship("dhow", 760, 640, { s: 0.6, sail: "#a8542e" }).ship("dhow", 420, 700, { s: 0.45, sail: "#b8643a", dir: -1 }).ship("dhow", 1180, 620, { s: 0.35, sail: "#a8542e" });
    return s.fog(560, { h: 60, opacity: 0.25 });
  },
  // Flooded rice paddies and palms at dusk, helicopters silhouetted far away, smoke on the horizon.
  "vn-3": (s) => {
    s.sky("dusk", { top: "#5a3a4a", bottom: "#e08a4a" });
    s.forest({ y: 500, type: "palm", s: 0.6, gap: 90, x0: 0, x1: 1600, depth: 0.3, color: "#2e3a2e" });
    s.smoke(1250, 500, { len: 300, w: 40, rise: 1.8 });
    s.ground(500, "#4a5a3a");
    for (let i = 0; i < 6; i++) s.rect(0, 520 + i * 60, 1600, 34, i % 2 ? "#c98a5a" : "#b87a50", 'opacity="0.55"');
    for (let i = 0; i < 6; i++) s.rect(0, 554 + i * 60, 1600, 26, "#4a6a3a");
    s.plane("heli", 520, 260, { s: 0.6, color: "#1e1a1e" }).plane("heli", 700, 220, { s: 0.45, color: "#1e1a1e" }).plane("heli", 860, 280, { s: 0.35, color: "#1e1a1e" });
    return s.forest({ y: 900, type: "palm", s: 1.4, gap: 900, x0: 60, x1: 1600, color: "#1e281e" });
  },
  // A flat valley ringed by jungle hills under monsoon cloud, a dirt airstrip and earthwork bunkers, smoke rising.
  "vn-10": (s) => {
    s.sky("storm");
    s.clouds(6, [60, 260], "#6a6e70");
    s.mountains({ y: 420, amp: 200, color: "#3e5a44", depth: 0.4 });
    s.hills({ y: 520, amp: 120, color: "#34503a", depth: 0.2 });
    s.ground(560, "#8a8a5a");
    s.poly([[300, 700], [1300, 640], [1320, 670], [320, 740]], "#a89a74");
    for (let i = 0; i < 12; i++) { const x = 160 + i * 115, y = 620 + (i % 3) * 60; s.add(`<ellipse cx="${x}" cy="${y}" rx="40" ry="14" fill="#6a5a3e"/><rect x="${x - 14}" y="${y - 14}" width="28" height="8" fill="#3a3226"/>`); }
    s.smoke(500, 640, { len: 260, w: 40, rise: 1.6 }).smoke(1000, 620, { len: 300, w: 50, rise: 1.6 }).smoke(1350, 700, { len: 220, w: 30, rise: 1.6 });
    return s.fog(560, { h: 60, opacity: 0.25 });
  },
  // A busy riverside market: boats piled with fruit, stalls under umbrellas, motorbikes, shophouses behind.
  "vn-11": (s) => {
    s.sky("morning");
    for (let i = 0; i < 10; i++) s.building(60 + i * 150, 440, 140, 120 + (i % 3) * 40, { color: ["#e0c890", "#c9d8c0", "#e8b8a0", "#d8d0b8"][i % 4], cell: 20 });
    s.ground(440, "#b8a88a");
    s.stalls(80, 1520, 520, {});
    s.crowd({ y: 540, rows: 1, h: 50, gap: 40 });
    s.rect(0, 580, 1600, 320, "#9a8a62");
    s.add('<path d="M0,600 L1600,600" stroke="#a88a60" stroke-width="3"/>');
    [[200, 690], [560, 740], [900, 680], [1260, 750]].forEach(([x, y], i) => {
      s.ship("boat", x, y, { s: 2, dir: i % 2 ? -1 : 1, hull: "#3a2a1e", cabin: false });
      for (let k = 0; k < 9; k++) s.add(`<circle cx="${x - 64 + k * 16}" cy="${y - 62 - (k % 3) * 7}" r="10" fill="${["#e0a030", "#5a9a40", "#c84a30"][k % 3]}"/>`);
    });
    return s;
  },
  // A modern white parliament building with a low glass dome on a wide square at dusk, an older grey mausoleum nearby.
  "vn-4": (s) => {
    s.sky("dusk");
    s.forest({ y: 560, type: "oak", s: 0.8, gap: 90, x0: 0, x1: 1600, depth: 0.3 });
    s.rect(80, 420, 260, 140, "#8a8a86").rect(60, 400, 300, 24, "#9a9a94");
    for (let i = 0; i < 6; i++) s.rect(100 + i * 42, 430, 16, 120, "#767672");
    s.building(560, 560, 760, 230, { color: "#ece8de", cell: 26, lit: true });
    s.add('<path d="M800,330 A140,60 0 0 1 1080,330 Z" fill="#9ab8c8" opacity="0.9"/>');
    s.ground(560, "#b8b2a6");
    s.road({ vanish: [940, 560], w: 1400, color: "#8a867e", line: false });
    return s.lamps(100, 1500, 640, 150, { gap: 280 });
  },
  // A grand yellow colonial-era government building with green shutters; a truck being loaded with boxes.
  "vn-5": (s) => {
    s.sky("morning");
    s.building(260, 640, 1080, 380, { color: "#e8c868", cell: 34, windows: true });
    for (let i = 0; i < 14; i++) s.rect(300 + i * 74, 340, 22, 50, "#4a7a5a").rect(300 + i * 74, 450, 22, 50, "#4a7a5a").rect(300 + i * 74, 560, 22, 50, "#4a7a5a");
    s.poly([[640, 260], [960, 260], [800, 200]], "#c09a48");
    s.ground(640, "#a8a296");
    s.forest({ y: 680, type: "oak", s: 1.2, gap: 400, x0: 40, x1: 1600 });
    s.vehicle("truck", 900, 800, { s: 1.4 });
    s.crate(1120, 800, 50, 40).crate(1180, 800, 50, 40).crate(1150, 760, 50, 40);
    s.person(1060, 800, 70, { color: "#3a3a40" }).person(1250, 810, 74, { color: "#3a3a40" });
    return s;
  },
  // A busy container port at dusk: gantry cranes, stacked containers, a big ship, factories and a highway behind.
  "vn-6": (s) => {
    s.sky("dusk");
    for (let i = 0; i < 6; i++) s.factory(60 + i * 260, 440, 220, 70, {});
    s.ground(440, "#5a5a5e");
    s.convoy("truck", 0, 1600, 470, { s: 0.4 });
    s.containers(80, 600, 12, 4, {});
    s.containers(760, 620, 10, 5, {});
    s.crane(300, 700, 1.1).crane(700, 700, 1.1).crane(1100, 700, 1.1);
    s.rect(0, 700, 1600, 20, "#4a4a4c");
    s.sea(720, { lines: 15 });
    return s.ship("container", 820, 820, { s: 1.3 });
  },
  // A long low artificial island in turquoise sea with an airstrip, a small harbour and dredgers pumping sand.
  "vn-7": (s) => {
    s.sky("day");
    s.sea(300, { lines: 30, color: "#3aa0b0" });
    s.add('<ellipse cx="800" cy="560" rx="760" ry="150" fill="#7ad0d0" opacity="0.6"/>');
    s.poly([[160, 600], [1380, 470], [1460, 520], [240, 680]], "#ece2c4");
    s.poly([[260, 610], [1340, 495], [1360, 515], [280, 632]], "#6a6a66");
    s.add('<path d="M300,622 L1320,507" stroke="#f2f2ea" stroke-width="2" stroke-dasharray="20 18"/>');
    s.poly([[1100, 600], [1300, 580], [1320, 640], [1120, 660]], "#e2d6b8");
    s.rect(1180, 560, 30, 40, "#d8d4c8").rect(1230, 555, 40, 30, "#c8c4b8");
    s.ship("bulk", 360, 760, { s: 0.6 }).ship("bulk", 1300, 760, { s: 0.5, dir: -1 });
    s.add('<path d="M420,730 Q520,660 600,650" stroke="#e6dcbc" stroke-width="14" fill="none" opacity="0.8"/><path d="M1250,735 Q1180,680 1120,670" stroke="#e6dcbc" stroke-width="12" fill="none" opacity="0.8"/>');
    return s.birds(700, 200, 4);
  },
  // A long modernist palace with a lattice facade behind iron gates and a lawn; a single tank at the open gates.
  "vn-12": (s) => {
    s.sky("haze");
    s.forest({ y: 470, type: "oak", s: 1, gap: 120, x0: 0, x1: 1600, depth: 0.3 });
    s.rect(300, 230, 1000, 240, "#e2ddd0");
    for (let x = 320; x < 1290; x += 26) s.rect(x, 250, 12, 200, "#c8c2b4");
    s.rect(280, 220, 1040, 16, "#cfc9bb").rect(300, 450, 1000, 20, "#b8b2a4");
    s.ground(470, "#6a9a5a");
    s.rect(0, 680, 1600, 30, "#8a8a86");
    for (let x = 0; x < 1600; x += 22) if (x < 640 || x > 960) s.rect(x, 600, 5, 80, "#2e2e30");
    s.rect(0, 600, 640, 6, "#2e2e30").rect(960, 600, 640, 6, "#2e2e30");
    s.vehicle("tank", 800, 720, { s: 1.6, color: "#3e4a36" });
    return s.ground(720, "#9a9a94");
  },
  // A modern skyline on a wide river at dusk: one very tall tower, a cable-stayed bridge, motorbike lights, boats.
  "vn-8": (s) => {
    s.sky("dusk", { top: "#3a2e5a", bottom: "#e89a6a" });
    s.tower(1000, 470, 90, 400, { color: "#7a8aa8" });
    s.city({ y: 470, h: [80, 220], style: "modern", lit: true, depth: 0.35 });
    s.sea(480, { lines: 25 });
    s.add('<path d="M120,560 L1500,520" stroke="#d8d4cc" stroke-width="8"/><rect x="420" y="380" width="14" height="170" fill="#d8d4cc"/>');
    for (let k = 0; k < 8; k++) s.add(`<line x1="427" y1="390" x2="${160 + k * 40}" y2="${556 - k}" stroke="#d8d4cc" stroke-width="1.5"/><line x1="427" y1="390" x2="${470 + k * 40}" y2="${548 - k}" stroke="#d8d4cc" stroke-width="1.5"/>`);
    s.ship("boat", 900, 640, { s: 0.6 }).ship("boat", 1300, 680, { s: 0.5, dir: -1 });
    s.ground(760, "#3a3440");
    for (let i = 0; i < 70; i++) s.add(`<circle cx="${(i * 47) % 1600}" cy="${790 + (i % 4) * 14}" r="3" fill="${i % 3 ? "#ffe0a0" : "#ff6a5a"}"/>`);
    return s;
  }
};
