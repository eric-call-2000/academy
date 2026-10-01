/* China */
module.exports = {
  // A huge container port at night seen from a hill, gantry cranes lit, a ship waiting offshore.
  "cn-5": (s) => {
    s.sky("night", { moon: [1260, 170], r: 30, stars: 60 })
      .ridge({ y: 470, amp: 50, color: "#2b3445", depth: 0.4, x0: 900 })
      .sea(470, { glint: 1260, lines: 50 })
      .ship("container", 1200, 500, { s: 0.38, depth: 0.5, dir: -1 });
    s.rect(0, 520, 1600, 380, "#2a2f38");
    s.glow(700, 560, 700, "#ffb25a", 0.28);
    for (let i = 0; i < 9; i++) s.crane(120 + i * 150, 560, 0.75, { color: "#b9663f" });
    s.containers(20, 640, 32, 4, { w: 48, h: 22 });
    s.containers(60, 720, 30, 3, { w: 50, h: 24 });
    s.ground(760, "#33302c");
    s.forest({ y: 790, type: "oak", s: 0.9, gap: 30, color: "#1f2826" });
    s.ridge({ y: 900, amp: 110, color: "#161c1f", step: 120 });
    return s;
  },
};
