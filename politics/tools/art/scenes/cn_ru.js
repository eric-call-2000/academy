/* China and Russia */
module.exports = {
  // A small flat snowy island in a wide frozen river, birch and pine forest on both banks, a far wooden watchtower.
  "cn_ru-1": (s) => s
    .sky("winter", { top: "#8a929a" })
    .forest({ y: 440, type: "pine", s: 0.7, gap: 14, depth: 0.4 })
    .forest({ y: 450, type: "birch", s: 0.8, gap: 30, depth: 0.3 })
    .watchtower(1300, 460, 0.4, { depth: 0.3 })
    .rect(0, 460, 1600, 440, "#d4dce4")
    .add('<ellipse cx="800" cy="640" rx="360" ry="50" fill="#eef2f6"/><ellipse cx="800" cy="632" rx="340" ry="40" fill="#f6f8fa"/>')
    .forest({ y: 640, x0: 600, x1: 1000, type: "bare", s: 0.5, gap: 40 })
    .forest({ y: 900, x0: -40, x1: 300, type: "pine", s: 2.4, gap: 60 }),
  // A grand state banquet hall: deep red carpet, crystal chandeliers, gilded columns, two ornate chairs at the far end.
  "cn_ru-2": (s) => {
    s.mood("interior", { light: "#ffe2a6" });
    s.room3d({ depth: 4, wall: "#e8d8b0", side: "#d9c494", floor: "#e8e0cc", ceiling: "#efe4c4", lights: "chandeliers", columns: 5, colColor: "#d9b04a", colW: 50, carpet: "#9a2a2a" });
    return s.chair3d(740, 3.8, { color: "#c9a04a" }).chair3d(860, 3.8, { color: "#c9a04a" });
  },
  // A large elevated steel gas pipeline running straight through snowy Siberian taiga toward low mountains.
  "cn_ru-3": (s) => {
    s.sky("winter", { sun: [300, 380], r: 30 });
    s.mountains({ y: 440, amp: 80, color: "#8a929a", depth: 0.6, jag: false });
    s.forest({ y: 460, type: "pine", s: 0.9, gap: 14, depth: 0.35 });
    s.ground(470, "snow");
    for (let i = 0; i <= 16; i++) { const t = i / 16, x = -40 + t * 1700, y = 860 - t * 380; s.rect(x - 4 * (1 - t * 0.6), y, 8 * (1 - t * 0.6), 60 * (1 - t * 0.6), "#5a5e64"); }
    s.add('<path d="M-40,860 L1660,480" stroke="#8a9098" stroke-width="30"/><path d="M-40,850 L1660,474" stroke="#b8c0c8" stroke-width="8"/>');
    return s.forest({ y: 900, x0: -40, x1: 500, type: "pine", s: 2, gap: 60 }).forest({ y: 900, x0: 1300, x1: 1640, type: "pine", s: 2, gap: 60 });
  },
};
