/* Australia and China */
module.exports = {
  // A vast open-cut iron ore mine with terraced red walls, huge yellow haul trucks on ramps, an ore train, blue sky.
  "au_cn-1": (s) => {
    s.sky("day", { top: "#3f7ab8" });
    s.ground(360, "#a8603a");
    s.mine(800, 360, 1400, { color: "#a8502a" });
    s.railcars(-40, 1660, 380, { box: true, color: "#6a3a2a" });
    [[500, 540], [900, 640], [1200, 500]].forEach(([x, y]) => s.vehicle("truck", x, y, { s: 0.7, color: "#e0b02c" }));
    return s;
  },
  // Neat rows of grapevines in a sunny valley, golden hills, a corrugated-iron winery shed and gum trees, blue sky.
  "au_cn-2": (s) => {
    s.sky("day");
    s.hills({ y: 460, amp: 120, color: "#c9a85a", depth: 0.3 });
    s.rect(1100, 400, 220, 80, "#a8acb0").poly([[1090, 400], [1330, 400], [1210, 360]], "#8a8e92");
    s.tree("birch", 1400, 480, { s: 1.2, color: "#e8e2d2" }).tree("oak", 1000, 480, { s: 1, color: "#7a8a5a" });
    return s.ground(480, "#8a9a5a").field(480, 900, { color: "#5f7a3a", rows: 30, dark: true });
  },
  // A tropical harbour at sunset with a few container cranes and a long wharf, palms and mangroves, a grey warship.
  "au_cn-3": (s) => s
    .sky("golden", { sun: [1200, 420], r: 40 })
    .crane(300, 470, 0.7, { depth: 0.2 }).crane(440, 470, 0.7, { depth: 0.2 })
    .forest({ y: 480, x0: 600, x1: 1000, type: "palm", s: 0.7, gap: 50 })
    .forest({ y: 490, x0: 1000, x1: 1640, type: "oak", s: 0.6, gap: 30, color: "#3f5a3a" })
    .sea(480, { glint: 1200 })
    .rect(0, 520, 700, 16, "#6a6a6a")
    .ship("warship", 1100, 600, { s: 0.9, dir: -1 }),
};
