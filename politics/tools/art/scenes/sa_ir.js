/* Saudi Arabia and Iran */
module.exports = {
  // A vast crowd of pilgrims in white walking across a dusty plain toward a city of white tents, rocky hills, haze.
  "sa_ir-1": (s) => {
    s.sky("haze");
    s.mountains({ y: 420, amp: 160, color: "#9a7a5a", depth: 0.4 });
    s.tents(-20, 1620, 430, { rows: 6, gap: 40, w: 30, rowGap: 14, colors: ["#f4f2ee", "#e8e6e0"], depth: 0.3 });
    s.ground(520, "#c9b08a");
    return s.crowd({ y: 560, rows: 9, h: 34, gap: 9, rowGap: 38, walk: true, colors: ["#f4f2ee", "#ece8e0", "#e2ddd2"] });
  },
  // A desert oil plant at night, spherical tanks and towers damaged, tall fires and thick black smoke, floodlights.
  "sa_ir-2": (s) => {
    s.sky("night", { stars: 30 });
    s.ground(560, "#1e1c1a");
    for (let i = 0; i < 5; i++) s.add(`<circle cx="${200 + i * 160}" cy="500" r="60" fill="#8a8a86"/><rect x="${190 + i * 160}" y="540" width="20" height="30" fill="#6a6a66"/>`);
    s.refinery(1200, 560, 1, { lit: true, flare: false });
    [[400, 440, 80], [800, 470, 60], [1150, 380, 90]].forEach(([x, y, w]) => s.fire(x, y, w));
    return s.glow(800, 500, 700, "#ff8a3c", 0.2);
  },
  // A dense Mediterranean coastal city at dusk, apartment blocks climbing to green mountains, some damaged, calm sea.
  "sa_ir-3": (s) => {
    s.sky("dusk", { top: "#5a4a7a", bottom: "#d0a0b0" });
    s.mountains({ y: 380, amp: 200, color: "#4a5a4a", depth: 0.35, jag: false });
    for (let k = 0; k < 5; k++) s.city({ y: 420 + k * 50, h: [60, 140], color: "#d9d2c2", depth: 0.4 - k * 0.07, lit: true, wmin: 50, wmax: 90 });
    [[400, 560], [1100, 620]].forEach(([x, y]) => s.poly([[x, y], [x, y - 140], [x + 30, y - 110], [x + 50, y - 150], [x + 90, y - 100], [x + 100, y]], "#5a5450"));
    return s.sea(680, { color: "#4a5a7a", glint: 900 });
  },
};
