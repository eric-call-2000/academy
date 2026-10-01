/* Turkey and Egypt */
module.exports = {
  // A great mosque with large domes and two pencil-thin Ottoman minarets on a stone citadel above a city at sunset.
  "tr_eg-1": (s) => {
    s.sky("golden", { sun: [1300, 400], r: 40 });
    s.fortWall(300, 1300, 460, 120, { color: "#c9a87a" });
    s.mosque(800, 340, 0.9, { color: "#d9c49a", domeColor: "#9aa0a4" });
    [560, 1040].forEach((x) => s.minaret(x, 340, 300, { color: "#d9c49a", w: 12 }));
    s.city({ y: 640, h: [40, 120], color: "#c9a87a", depth: 0.25, lit: true });
    return s.fog(600, { h: 160, color: "#f2d0a0", opacity: 0.4 });
  },
  // Grey warships patrolling a calm blue Mediterranean near an offshore gas drilling platform, a distant rocky coast.
  "tr_eg-2": (s) => s
    .sky("day")
    .ridge({ y: 470, amp: 60, color: "#9a8a72", jag: true, depth: 0.5 })
    .sea(480, { color: "#2f6aa8" })
    .rig(1100, 560, 0.8, { flare: false })
    .ship("warship", 400, 600, { s: 0.8, wake: true })
    .ship("frigate", 900, 680, { s: 1, wake: true, dir: -1 }),
  // Two grey frigates side by side across the calm eastern Mediterranean at dawn, a helicopter above, pink light.
  "tr_eg-3": (s) => s
    .sky("dawn", { top: "#a8a0c0" })
    .sea(480, { color: "#7a8aa8", glint: 1200 })
    .ship("frigate", 500, 620, { s: 1.1, wake: true })
    .ship("frigate", 1100, 680, { s: 1.2, wake: true })
    .plane("heli", 800, 260, { s: 0.9, color: "#5a6068" }),
};
