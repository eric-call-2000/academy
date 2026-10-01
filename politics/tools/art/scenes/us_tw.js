/* United States and Taiwan */
module.exports = {
  // A low-rise office compound of pale stone and glass on a tree-lined street, green hills, a guard post at the gate.
  "us_tw-1": (s) => {
    s.sky("morning");
    s.hills({ y: 420, amp: 160, color: "forest", depth: 0.35, jag: false });
    s.rect(300, 320, 1000, 220, "#e2ddd0");
    for (let i = 0; i < 12; i++) s.rect(330 + i * 80, 360, 50, 140, "#7a96aa");
    s.rect(280, 300, 1040, 24, "#d4cfc2");
    s.ground(540, "#9a948a");
    s.forest({ y: 600, type: "oak", s: 1.4, gap: 160, color: "#4f7a4a" });
    return s.rect(1200, 560, 80, 90, "#d9d2c2").rect(1214, 576, 52, 30, "#3a4a5a").barrier(1040, 1200, 660);
  },
  // A grey carrier with escorts in a choppy grey strait, a mountainous green island on the horizon, shafts of light.
  "us_tw-2": (s) => s
    .sky("storm", { clouds: 6, cloudColor: "#5a6068" })
    .beam(1000, 0, 100, { len: 600, w: 140, color: "#e8ecf0", opacity: 0.15 })
    .mountains({ y: 470, amp: 160, color: "#3f5a44", depth: 0.4, jag: false, x0: 900 })
    .sea(480, { color: "#4a5a66", lines: 150 })
    .ship("frigate", 300, 560, { s: 0.5, depth: 0.2 })
    .ship("carrier", 760, 640, { s: 1.3 })
    .ship("frigate", 1300, 600, { s: 0.6, depth: 0.15 }),
  // A wooden chess board mid-game between two empty high-backed chairs in a grand hall, one piece alone at the centre.
  "us_tw-3": (s) => {
    s.mood("afternoon", { light: "#fff2d0" });
    s.room3d({ depth: 2.4, wall: "#c9b48e", side: "#b8a27e", floor: "#6a4a34", ceiling: "#d9ccb0", windows: { n: 2, side: "left", top: 80, bottom: 560, arched: true }, lights: "chandeliers" });
    s.chair3d(500, 1.6, { color: "#5a2a24" }).chair3d(1100, 1.6, { color: "#5a2a24" });
    s.box3d(560, 1040, 620, 650, 1.4, 1.9, "#4a3020");
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) { const z = 1.5 + r * 0.04, X = 680 + c * 30; s.quad("floor", [X, X + 30, 619, z, z + 0.04], (r + c) % 2 ? "#e8d4b0" : "#5a3a24"); }
    const pcs = [[700, 1.52], [740, 1.52], [860, 1.52], [900, 1.8], [720, 1.82], [820, 1.66]];
    pcs.forEach(([X, z], i) => { const p = s.pp(X, 619, z); s.rect(p[0] - 5, p[1] - 22 / z * 1.4, 10, 22 / z * 1.4, i < 3 ? "#f2efe8" : "#1e1a18"); });
    return s;
  },
};
