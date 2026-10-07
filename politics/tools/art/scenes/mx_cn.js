/* Mexico and China */
module.exports = {
  // A 16th-century Spanish galleon under full white sails on a wide calm ocean at sunset, a second ship far behind.
  "mx_cn-1": (s) => s
    .sky("golden", { sun: [1300, 440], r: 44 })
    .sea(480, { glint: 1300 })
    .ship("tall", 1100, 500, { s: 0.35, depth: 0.4 })
    .ship("tall", 600, 660, { s: 1.4 }),
  // A busy container port at night: tall stacks of colourful containers, a big ship at the quay, floodlit cranes, wet ground.
  "mx_cn-2": (s) => {
    s.sky("night", { stars: 10 });
    s.sea(420, { color: "#141c2c" });
    s.ship("container", 900, 480, { s: 1.2 });
    for (let i = 0; i < 5; i++) { s.crane(200 + i * 280, 520, 1.2, { color: "#c4573c" }); s.glow(200 + i * 280, 300, 120, "#f4f8ff", 0.3); }
    s.rect(0, 520, 1600, 380, "#2a2c30");
    s.containers(0, 760, 32, 8, { w: 48, h: 26 });
    return s.add('<rect x="0" y="780" width="1600" height="120" fill="#f4f8ff" opacity="0.05"/>');
  },
  // A modern industrial park in northern Mexico's dry hills: white factories and loading bays, lorries, brown mountains.
  "mx_cn-3": (s) => {
    s.sky("day", { top: "#4f86b8" });
    s.mountains({ y: 440, amp: 220, color: "#8a6a4a", depth: 0.35 });
    s.ground(460, "#c4a87a");
    for (let i = 0; i < 4; i++) { const x = 100 + i * 380; s.rect(x, 480, 320, 120, "#f4f4f2").rect(x, 480, 320, 12, "#d9dcdc"); for (let k = 0; k < 5; k++) s.rect(x + 20 + k * 60, 560, 40, 40, "#6a6e72"); }
    s.rect(0, 640, 1600, 80, "#5a5a5e");
    for (let i = 0; i < 6; i++) s.vehicle("truck", 120 + i * 260, 700, { s: 0.9, color: s.r.pick(["#f2efe8", "#3f6aa8", "#a8322a"]) });
    return s;
  },
};
