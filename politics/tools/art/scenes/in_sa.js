/* India and Saudi Arabia */
module.exports = {
  // A large crowd of pilgrims in white walking toward a vast mosque with tall minarets at dawn, golden light, haze.
  "in_sa-1": (s) => {
    s.sky("dawn", { bottom: "#f2c890" });
    s.mosque(800, 440, 1.2, { color: "#f2efe8", domeColor: "#cfc8b8" });
    for (let i = 0; i < 4; i++) s.minaret(300 + i * 340, 440, 300, { color: "#f2efe8" });
    s.ground(440, "#e2d6bc").fog(460, { h: 80, color: "#f2d8a0", opacity: 0.5 });
    return s.crowd({ y: 500, rows: 10, h: 34, gap: 9, rowGap: 38, walk: true, colors: ["#f4f2ee", "#ece8e0", "#e2ddd2"] });
  },
  // A long freight train of containers crossing a flat golden desert, a modern port with cranes and ships far off.
  "in_sa-2": (s) => {
    s.sky("desert");
    s.crane(1200, 470, 0.4, { depth: 0.3 }).crane(1300, 470, 0.4, { depth: 0.3 });
    s.sea(470, { color: "#6a9ab0" }).rect(0, 466, 1100, 20, "#d4b48a");
    s.ground(480, "#d9b884");
    s.add('<line x1="-40" y1="680" x2="1640" y2="660" stroke="#5a5450" stroke-width="5"/>');
    for (let x = 0; x < 1600; x += 112) s.rect(x, 620 - x * 0.012, 106, 50, ["#9b4b3c", "#4b6a8b", "#c09a4a", "#5d7d5a"][(x / 112) % 4]);
    return s;
  },
  // A queue of oil tankers waiting off a hazy flat coastline at dusk, refinery flares burning in the distance, calm sea.
  "in_sa-3": (s) => s
    .sky("dusk", { bottom: "#e8a07a" })
    .ground(460, "#6a5a50")
    .flare(1100, 440, 0.6).flare(1250, 440, 0.5).flare(1400, 444, 0.4)
    .sea(470, { color: "#5a5a7a" })
    .ship("tanker", 300, 520, { s: 0.4, depth: 0.3 }).ship("tanker", 700, 560, { s: 0.6, depth: 0.2 }).ship("tanker", 1100, 640, { s: 0.9 }),
};
