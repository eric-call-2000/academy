/* South Korea and China */
module.exports = {
  // A vast busy container port: huge gantry cranes loading stacks onto enormous ships, apartment towers and hills behind.
  "kr_cn-1": (s) => {
    s.sky("haze", { top: "#a8b4bc" });
    s.hills({ y: 400, amp: 140, color: "#5a6a5a", depth: 0.45 });
    for (let i = 0; i < 10; i++) s.building(40 + i * 160, 420, 90, 140 + (i % 3) * 30, { color: "#b8b8b4", depth: 0.4, lit: false });
    s.sea(420, { color: "#6a7a8a" });
    s.ship("container", 500, 520, { s: 1.2 }).ship("container", 1200, 500, { s: 0.9, depth: 0.15 });
    for (let i = 0; i < 6; i++) s.crane(160 + i * 260, 580, 1.3, { color: "#c4573c" });
    s.rect(0, 580, 1600, 320, "#7a7672");
    return s.containers(0, 800, 32, 7, { w: 48, h: 26 });
  },
  // Missile launcher trucks and a large flat radar array on a hilltop that was once a golf course, fairways, misty hills.
  "kr_cn-2": (s) => {
    s.sky("overcast");
    s.mountains({ y: 420, amp: 200, color: "#6a7a7a", depth: 0.5, jag: false }).fog(430, { h: 90 });
    s.hills({ y: 640, amp: 220, color: "#6f9a4a", peak: 800, peakW: 800 });
    s.add('<path d="M200,700 Q600,520 1000,560 T1500,520" stroke="#8ab05a" stroke-width="60" fill="none"/><circle cx="1300" cy="560" r="20" fill="#d9d2b0"/>');
    s.rect(640, 330, 200, 100, "#4a4e48").rect(620, 420, 240, 20, "#3a3e38");
    s.vehicle("truck", 960, 450, { s: 0.8, color: "#5a6050" }).vehicle("truck", 1100, 470, { s: 0.8, color: "#5a6050" });
    return s.fence(400, 1300, 500, 40, { gap: 50 });
  },
  // A large rusty steel platform on tall legs in grey open sea, a white coastguard ship watching, low clouds, choppy water.
  "kr_cn-3": (s) => s
    .sky("storm", { clouds: 5, cloudColor: "#6a6e72" })
    .sea(460, { color: "#5a6a74", lines: 150 })
    .add('<g fill="#7a5040">' + [600, 700, 860, 960].map((x) => `<rect x="${x}" y="360" width="22" height="300"/>`).join("") + '<rect x="560" y="320" width="460" height="60"/><rect x="600" y="260" width="200" height="60" fill="#8a5a44"/></g>')
    .ship("patrol", 1300, 560, { s: 0.7, hull: "#f2efe8", reflect: false }),
};
