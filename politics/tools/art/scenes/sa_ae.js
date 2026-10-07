/* Saudi Arabia and the UAE */
module.exports = {
  // Two desert skylines facing each other across golden dunes at dusk, one with a needle tower, one of glass by the sea.
  "sa_ae-1": (s) => {
    s.sky("dusk", { bottom: "#f2a06a" });
    s.city({ y: 470, x0: -20, x1: 500, style: "towers", h: [100, 240], depth: 0.3, lit: true });
    s.tower(300, 470, 50, 380, { spire: 120, color: "#8a9ab0" });
    s.city({ y: 470, x0: 1100, x1: 1620, style: "towers", h: [120, 300], depth: 0.3, lit: true, color: "#8fa6b8" });
    s.sea(470, { color: "#5a6a8a" }).rect(0, 460, 1000, 20, "#c4935e");
    return s.dunes(500, { color: "#d9a066", depth: 0.4 });
  },
  // An old harbour town of white and ochre houses below steep brown mountains on the Arabian Sea, dark smoke by the docks.
  "sa_ae-2": (s) => {
    s.sky("haze");
    s.mountains({ y: 460, amp: 300, color: "#7a5a3e", depth: 0.25 });
    for (let k = 0; k < 4; k++) s.city({ y: 470 + k * 30, x0: 100 + k * 40, x1: 1100 - k * 40, h: [30, 70], color: k % 2 ? "#e8e2d2" : "#d4b88a", depth: 0.2, lit: false, windows: false });
    s.crane(1200, 560, 0.7);
    s.smoke(1250, 540, { len: 400, dark: true, rise: 3, w: 40 });
    return s.sea(570, { color: "#3f7a9a" });
  },
  // Several offshore oil platforms in a calm turquoise Gulf sea, a faint modern skyline on the hazy horizon.
  "sa_ae-3": (s) => s
    .sky("desert")
    .city({ y: 470, x0: 800, x1: 1600, style: "towers", h: [40, 120], depth: 0.75, lit: false })
    .sea(470, { color: "#3fb0b0" })
    .rig(1300, 520, 0.5, { depth: 0.3 }).rig(300, 560, 0.8, { depth: 0.15 }).rig(800, 680, 1.3),
};
