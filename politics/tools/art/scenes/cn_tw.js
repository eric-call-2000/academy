/* China and Taiwan */
module.exports = {
  // A polished wooden negotiating table in a 1990s hotel room, empty leather chairs, teacups and folders, a city window.
  "cn_tw-1": (s) => {
    s.mood("day");
    s.room3d({ depth: 2.6, wall: "#c9b89a", side: "#bca88a", floor: "#6a4a3a", ceiling: "#d9ccb0", backWindows: [[340, 1260, 160, 560]] });
    s.city({ y: 560, x0: 340, x1: 1260, h: [60, 220], style: "towers", depth: 0.4, lit: false });
    s.persp({ vanish: [800, 414], depth: 2.6 });
    s.quad("front", [-200, 340, 0, 900, 2.6], "#c9b89a").quad("front", [1260, 1800, 0, 900, 2.6], "#c9b89a");
    return s.table3d(620, 980, 1.3, 2.3, { color: "#5a3a24", count: 5, cups: true, folders: [[700, 1.5], [900, 1.5], [700, 1.9], [900, 1.9]] });
  },
  // A vast electronics factory campus at dusk: long white factory buildings and dormitories, shuttle buses, workers.
  "cn_tw-2": (s) => {
    s.sky("dusk", { top: "#8a7a9a", bottom: "#f2c0b0" });
    for (let i = 0; i < 5; i++) s.building(80 + i * 300, 460, 240, 200, { color: "#c9c4c0", lit: true, cell: 16, depth: 0.3 });
    s.rect(0, 460, 1600, 120, "#ece8e2").rect(0, 540, 1600, 6, "#c9c4c0");
    s.ground(580, "#7a7672");
    for (let i = 0; i < 8; i++) s.vehicle("bus", 120 + i * 180, 660, { s: 0.8, color: "#e8e6e0" });
    return s.crowd({ y: 760, rows: 2, h: 40, gap: 30, rowGap: 40, thin: 0.3, walk: true, colors: ["#3a5a8a", "#e8e2d2", "#3a3a3e"] });
  },
  // A quiet island beach lined with rusting anti-landing spikes, a modern Chinese city skyline across the water at dusk.
  "cn_tw-3": (s) => {
    s.sky("dusk");
    s.city({ y: 470, style: "towers", h: [100, 260], depth: 0.4, lit: true });
    s.sea(470, { color: "#5a5a7a" });
    s.ground(640, "#d9c4a4");
    for (let i = 0; i < 26; i++) { const x = 40 + i * 62, y = 680 + (i % 2) * 40; s.add(`<g stroke="#6a3a2a" stroke-width="6"><line x1="${x - 30}" y1="${y}" x2="${x + 10}" y2="${y - 70}"/><line x1="${x + 30}" y1="${y}" x2="${x - 10}" y2="${y - 70}"/></g>`); }
    return s;
  },
};
