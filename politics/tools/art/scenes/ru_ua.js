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
};
