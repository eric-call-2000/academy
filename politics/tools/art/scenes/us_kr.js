/* United States and South Korea */
module.exports = {
  // A column of 1950s soldiers in heavy winter coats marching a snowy mountain road, bare trees, grey sky, a jeep.
  "us_kr-1": (s) => {
    s.sky("winter", { top: "#8a929a" });
    s.mountains({ y: 440, amp: 240, color: "#8a8e96", depth: 0.4, snow: 0.35 });
    s.ground(480, "snow");
    s.forest({ y: 500, type: "bare", s: 0.9, gap: 70, depth: 0.25 });
    s.add('<path d="M1300,480 Q900,600 200,900" stroke="#c4ccd4" stroke-width="140" fill="none"/>');
    for (let i = 0; i < 28; i++) { const t = i / 28, x = 1260 - t * 900 + s.r() * 30, y = 490 + t * t * 380; s.person(x, y, 20 + t * 120, { color: "#4a4e3e", helmet: true, coat: true, walk: true }); }
    return s.vehicle("jeep", 1300, 500, { s: 0.4, color: "#4a5040" }).snowfall({ count: 60 });
  },
  // A large missile-defence radar and launcher trucks on a cleared green hilltop over rice fields and a tiled-roof village.
  "us_kr-2": (s) => {
    s.sky("overcast");
    s.mountains({ y: 420, amp: 200, color: "#6a7a7a", depth: 0.5, jag: false }).fog(430, { h: 80 });
    s.ground(560, "#7a9a5a").field(560, 900, { color: "#8aaa5a", rows: 24 });
    for (let i = 0; i < 9; i++) s.house(900 + i * 70, 620, 60, 30, { color: "#e2ddd0", roofColor: "#3a3e44" });
    s.ridge({ y: 520, amp: 140, color: "#5f7a44", peak: 500, peakW: 500 });
    s.rect(380, 330, 120, 70, "#8a8e86").rect(370, 320, 140, 14, "#6a6e66");
    return s.vehicle("truck", 600, 400, { s: 0.6, color: "#5a6050" }).vehicle("truck", 700, 400, { s: 0.6, color: "#5a6050" });
  },
  // A riverside shipyard with tall cranes and a long dark submarine hull in dry dock, buildings and a bridge behind.
  "us_kr-3": (s) => {
    s.sky("afternoon");
    s.bridge(-20, 1620, 360, { pier: 120, span: 300, color: "#8a8e92" });
    s.factory(100, 480, 500, 120, { chimneys: [], depth: 0.2 }).factory(1000, 480, 500, 120, { chimneys: [], depth: 0.2 });
    s.sea(480, { color: "#6a8a9a" });
    s.rect(0, 560, 1600, 340, "#7a7672").rect(200, 640, 1200, 160, "#5a5650");
    s.add('<path d="M300,720 Q300,660 400,660 L1200,660 Q1320,670 1320,720 Q1320,780 1200,790 L400,790 Q300,790 300,720 Z" fill="#1e2024"/>');
    s.crane(260, 640, 1.1, { color: "#d9b23c" }).crane(1320, 640, 1.1, { color: "#d9b23c" });
    return s;
  },
};
