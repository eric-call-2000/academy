/* Japan and India */
module.exports = {
  // A quiet Japanese temple garden in autumn: red maples, a grey stone memorial on a low pedestal, gravel, a temple.
  "jp_in-1": (s) => {
    s.sky("golden");
    s.rect(300, 300, 900, 160, "#6a4a32").add('<path d="M240,310 Q400,300 480,240 L1020,240 Q1100,300 1260,310 Z" fill="#2a2a2e"/>');
    s.forest({ y: 480, type: "autumn", s: 1.2, gap: 70, color: "#c9462a" });
    s.ground(480, "#d9d2c2");
    for (let i = 0; i < 12; i++) s.add(`<path d="M0,${520 + i * 32} Q800,${500 + i * 30} 1600,${520 + i * 32}" stroke="#c4bcac" stroke-width="2" fill="none"/>`);
    return s.rect(720, 600, 160, 30, "#8a8478").rect(740, 460, 120, 140, "#9a968e").tree("autumn", 1400, 860, { s: 2.4, color: "#c9462a" });
  },
  // A white bullet train with a long pointed nose on a tall concrete viaduct above green fields and a colourful Indian town.
  "jp_in-2": (s) => {
    s.sky("haze", { top: "#c4c4b8" });
    for (let i = 0; i < 20; i++) s.house(100 + i * 72, 560 + (i % 3) * 6, 60, 40, { color: s.r.pick(["#e8a0a0", "#a0c4e0", "#e8d080", "#a8d0a0", "#f2efe8"]), roofColor: "#a8806a", depth: 0.25 });
    s.ground(560, "#7a9a5a").field(580, 900, { color: "#8aaa5a" });
    s.rect(-20, 440, 1640, 24, "#c9c4bc");
    for (let x = 60; x < 1600; x += 180) s.rect(x, 464, 24, 160, "#b8b4ac");
    return s.add('<path d="M200,440 L200,400 L1100,400 Q1340,404 1400,440 Z" fill="#f4f4f2"/><rect x="200" y="424" width="1200" height="5" fill="#3f6aa8"/>' + Array.from({ length: 24 }, (_, i) => `<rect x="${220 + i * 36}" y="408" width="22" height="10" fill="#3a4a5a"/>`).join(""));
  },
  // Two grey destroyers side by side on a calm deep blue ocean, a helicopter overhead, bright sun and scattered clouds.
  "jp_in-3": (s) => s
    .sky("day", { clouds: 5 })
    .sea(480, { color: "#2f5a9a" })
    .ship("warship", 520, 600, { s: 1.1, wake: true })
    .ship("warship", 1100, 660, { s: 1.2, wake: true })
    .plane("heli", 800, 260, { s: 0.9, color: "#5a6068" }),
};
