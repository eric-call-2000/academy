/* United States & Iran */
module.exports = {
  // A 1950s refinery with towers and tanks on a hazy gulf shore at dusk, a tanker at the jetty.
  "us_ir-1": (s) => {
    s.sky("dusk", { sun: [1240, 360], r: 46, clouds: 3, cloudY: [60, 240] })
      .ridge({ y: 430, amp: 50, color: "arid", depth: 0.7, x0: -20, x1: 760 })
      .sea(430, { glint: 1240 });
    s.ship("tanker", 1150, 560, { s: 1.3, dir: -1 });
    s.rect(780, 566, 820, 14, s.c("#4e4a44", 0.05));
    for (let x = 800; x < 1600; x += 70) s.rect(x, 566, 8, 60, s.c("#4e4a44", 0.05));
    s.ground(600, "arid");
    s.refinery(360, 640, 2.1, { smoke: true });
    s.tanks(40, 760, 3, { w: 130, h: 80 });
    s.tanks(640, 650, 2, { w: 100, h: 64 });
    s.chimney(900, 640, 300, { smoke: true });
    s.pipeline([[520, 700], [820, 700], [980, 600], [1600, 600]], { w: 10 });
    s.pipes(500, 1600, 800, { count: 2, r: 12 });
    return s;
  },
  // A walled embassy compound at night, a large crowd at the gate with plain banners, mountains behind.
  "us_ir-2": (s) => {
    s.sky("night", { moon: [1300, 140], r: 26 })
      .mountains({ y: 420, amp: 200, color: "rock", depth: 0.75, snow: 0.7 })
      .city({ y: 470, h: [30, 90], depth: 0.6, lit: true });
    s.ground(470, "concrete", { depth: 0.2 });
    s.building(520, 560, 560, 200, { color: "#8a5a44", cell: 26, lit: true, litShare: 0.25 });
    s.rect(500, 352, 600, 12, s.c("#6a4232", 0.05));
    s.tree("pine", 420, 560, { s: 1.6 }).tree("pine", 1180, 560, { s: 1.5 });
    s.wall(0, 700, 640, 90, { color: "#9a8a72", panels: 60 });
    s.wall(900, 1600, 640, 90, { color: "#9a8a72", panels: 60 });
    s.rect(690, 540, 24, 100, s.c("#6a5a48", 0)).rect(886, 540, 24, 100, s.c("#6a5a48", 0));
    s.fence(714, 886, 640, 80, { color: "#2a2826", gap: 14 });
    s.lamps(160, 1500, 640, 170, { gap: 340 });
    s.crowd({ y: 720, rows: 5, h: 64, gap: 15, rowGap: 30, banners: 4, signs: 6, bannerColors: ["#d8cfbf", "#c9b9a6", "#e3d6b8"] });
    return s;
  },
  // A grey destroyer patrolling a narrow strait at sunset, a tanker beyond, brown mountains on the far shore.
  "us_ir-3": (s) => {
    s.sky("golden", { sun: [380, 400], r: 50, clouds: 2 })
      .mountains({ y: 470, amp: 170, color: "arid", depth: 0.55, x0: 600 })
      .ridge({ y: 470, amp: 60, color: "arid", depth: 0.75, x1: 620 })
      .sea(470, { glint: 380 });
    s.ship("tanker", 1220, 505, { s: 0.6, depth: 0.45 });
    s.ship("tanker", 300, 495, { s: 0.4, depth: 0.6, dir: -1 });
    s.ship("warship", 760, 720, { s: 2.6, dir: -1 });
    s.add('<path d="M1240,740 Q1500,736 1640,742" stroke="#f3e6c8" stroke-width="4" opacity="0.4" fill="none"/>');
    s.plane("heli", 1240, 300, { s: 0.8, dir: -1, depth: 0.2 });
    return s;
  },
};
