/* Russia and Ukraine */
module.exports = {
  // A snowbound gas compressor station at dusk: big pipes, a lit control building, bare birches.
  "ru_ua-2": (s) => s
    .sky("wintdusk", { sun: [1350, 420], r: 30 })
    .ridge({ y: 470, amp: 20, color: "#5a6578", depth: 0.5 })
    .forest({ y: 470, type: "pine", s: 0.35, depth: 0.55, gap: 14 })
    .ground(480, "snow")
    .building(980, 560, 320, 70, { color: "#6f7480", lit: true, litShare: 0.5, cell: 22 })
    .pipes(-20, 1640, 760, { count: 2, r: 24, risers: [300, 460, 620], color: "#a7adb3" })
    .pipes(-20, 900, 620, { count: 1, r: 14, risers: [180], color: "#9aa0a6" })
    .fence(-10, 1610, 820, 46, { gap: 70, color: "#3a4150" })
    .forest({ y: 860, x0: 1180, x1: 1640, type: "birch", s: 1.2, gap: 70 })
    .snowfall({ count: 120 }),
  // The golden domes and white walls of an ancient monastery on a wooded hill above a river, autumn trees, mist.
  "ru_ua-1": (s) => s
    .sky("morning")
    .hills({ y: 520, amp: 260, color: "#7a7a44", peak: 600, peakW: 700, depth: 0.2 })
    .church(600, 300, 0.9, { domes: 5, bell: true })
    .forest({ y: 420, type: "autumn", s: 0.9, gap: 30, spread: 120, color: "#c9a02c" })
    .forest({ y: 470, type: "autumn", s: 0.9, gap: 40, spread: 60, color: "#b8462a" })
    .sea(540, { color: "#7a8a9a" }).fog(550, { h: 90 })
    .person(900, 440, 18).person(920, 442, 16),
  // A white bus arriving at a rural border checkpoint at dawn, families waiting with flowers and blank signs, birches.
  "ru_ua-3": (s) => {
    s.sky("overcast", { bottom: "#d9d6cc" });
    s.forest({ y: 470, type: "birch", s: 1.2, gap: 40, depth: 0.3 });
    s.ground(480, "#8a8a72").road({ vanish: [800, 480], w: 900, color: "#6a6866", line: false });
    s.rect(1000, 400, 160, 90, "#d9d2c2").barrier(900, 1200, 520);
    s.vehicle("bus", 800, 600, { s: 1.4, color: "#f2efe8" });
    for (let i = 0; i < 12; i++) { const x = 120 + i * 60, y = 720 + (i % 2) * 20; s.person(x, y, 120, { color: s.r.pick(["#3a3a4a", "#5a3a3a", "#4a4a3a"]) }); if (i % 3 === 0) s.rect(x - 20, y - 160, 40, 30, "#ece6d6"); if (i % 3 === 1) s.add(`<circle cx="${x + 16}" cy="${y - 80}" r="10" fill="#e86a8a"/>`); }
    return s;
  },
};
