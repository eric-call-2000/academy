/* United States & North Korea */
module.exports = {
  // Low blue huts straddling a concrete line between two grey guard buildings, wooded hills, overcast.
  "us_kp-1": (s) => {
    s.sky("overcast", { clouds: 4 })
      .hills({ y: 420, amp: 90, color: "forest", depth: 0.55 })
      .forest({ y: 430, type: "pine", s: 0.55, depth: 0.45, gap: 22 });
    s.ground(470, "#9a978c");
    s.building(60, 520, 380, 150, { color: "#8f8d88", cell: 20, roof: "flatdark" });
    s.building(1160, 520, 400, 170, { color: "#9a9890", cell: 20, roof: "flatdark" });
    [520, 700, 880].forEach((x) => { s.rect(x, 470, 150, 62, "#6e8fb5").rect(x - 6, 462, 162, 10, "#5c7ea5"); s.rect(x + 20, 488, 26, 22, "#3c4a5a").rect(x + 100, 488, 26, 22, "#3c4a5a"); });
    s.rect(0, 530, 1600, 10, "#d9d6cc");
    s.rect(0, 540, 1600, 360, s.c("#a7a399", 0));
    for (let i = 0; i < 9; i++) s.add(`<line x1="${800 + (i - 4) * 60}" y1="540" x2="${800 + (i - 4) * 420}" y2="900" stroke="#8f8b82" stroke-width="3" opacity="0.6"/>`);
    s.rect(1040, 500, 16, 80, "#8a8780").rect(480, 500, 16, 80, "#8a8780");
    s.person(1020, 560, 40, { color: "#4a5040" }).person(470, 560, 40, { color: "#5a5a50" });
    return s;
  },
  // A squat reactor building with a short cooling tower in a river valley among bare brown hills, autumn.
  "us_kp-2": (s) => {
    s.sky("afternoon", { sun: [300, 200], r: 40, clouds: 2 })
      .mountains({ y: 470, amp: 150, color: "arid", depth: 0.6 })
      .hills({ y: 560, amp: 90, color: "#8a7a5c", depth: 0.25 });
    s.river({ from: [820, 560], to: [500, 900], w0: 30, w1: 380, bend: 120 });
    s.building(860, 600, 240, 150, { color: "#8c8c88", windows: false, roof: "flatdark" });
    s.rect(900, 420, 60, 30, s.c("#7c7c78", 0));
    s.path("M1150,600 Q1170,520 1150,420 L1260,420 Q1240,520 1260,600 Z", s.c("#a6a49c", 0));
    s.smoke(1205, 420, { len: 220, dir: 1, rise: 0.8 });
    s.rect(1110, 540, 40, 60, s.c("#7a7a74", 0));
    s.forest({ y: 610, x0: 1300, x1: 1640, type: "bare", s: 0.7, gap: 30 });
    s.forest({ y: 620, x0: -40, x1: 420, type: "bare", s: 0.7, gap: 30 });
    s.ground(820, "#7d6e52");
    return s;
  },
  // A white colonial hotel with arched verandas on a tropical island, palms, a calm sea; a long table inside.
  "us_kp-3": (s) => {
    s.sky("tropical", { clouds: 3 }).sea(480, { color: "#4f97a6" });
    s.ground(560, "#cdbf95");
    s.rect(380, 330, 840, 230, "#efece4");
    s.poly([[360, 330], [1240, 330], [1180, 280], [420, 280]], "#b5543c");
    for (let i = 0; i < 9; i++) { const x = 420 + i * 88; s.path(`M${x},${450} L${x},${400} A28,28 0 0 1 ${x + 56},400 L${x + 56},450 Z`, "#c9d3d4"); s.path(`M${x},${540} L${x},${490} A28,28 0 0 1 ${x + 56},490 L${x + 56},540 Z`, "#a9b6b8"); }
    s.rect(380, 452, 840, 10, "#d9d4c8");
    s.tree("palm", 250, 600, { s: 2.2 }).tree("palm", 1340, 600, { s: 2.0 }).tree("palm", 1460, 620, { s: 1.6 }).tree("palm", 120, 640, { s: 1.7 });
    s.rect(0, 640, 1600, 260, s.c("#7e9a5e", 0));
    return s;
  },
};
