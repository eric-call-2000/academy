/* Indonesia and Australia */
module.exports = {
  // Grey military transport ships off a tropical coast of dry hills and palms, small landing craft heading for a beach.
  "id_au-1": (s) => s
    .sky("haze", { top: "#b8c4c8" })
    .hills({ y: 420, amp: 160, color: "#9a8a5a", depth: 0.35 })
    .forest({ y: 440, type: "palm", s: 0.8, gap: 60, depth: 0.2 })
    .rect(0, 440, 1600, 30, "#e2cfa4")
    .sea(470, { color: "#5f9aa8" })
    .ship("warship", 400, 560, { s: 0.9 }).ship("warship", 1200, 540, { s: 0.7, dir: -1 })
    .ship("boat", 700, 680, { s: 0.9, hull: "#6a7078", cabin: false }).ship("boat", 900, 720, { s: 1, hull: "#6a7078", cabin: false }),
  // A large white multi-deck livestock carrier docked at a tropical port, cattle along the rails, cranes and palms.
  "id_au-2": (s) => {
    s.sky("haze");
    s.forest({ y: 440, type: "palm", s: 0.9, gap: 70 });
    s.crane(1300, 460, 0.8);
    s.sea(460, { color: "#5f8a9a" });
    s.rect(140, 380, 1000, 220, "#f2efe8").poly([[1140, 380], [1280, 380], [1220, 600], [1140, 600]], "#f2efe8");
    for (let k = 0; k < 4; k++) { s.rect(160, 400 + k * 46, 960, 6, "#cfc8b8"); for (let i = 0; i < 24; i++) s.rect(170 + i * 40, 410 + k * 46, 24, 14, s.r.pick(["#6a4a30", "#2a2a2a", "#a87a5a"])); }
    return s.rect(0, 600, 1600, 300, "#8a8682");
  },
  // A grand white colonial-era presidential palace with tall columns and a wide lawn, tall palms, bright tropical sky.
  "id_au-3": (s) => s
    .sky("tropical", { clouds: 5 })
    .portico(800, 560, 1.4, { cols: 8, w: 520, h: 240, color: "#f8f6f0" })
    .rect(200, 420, 400, 140, "#f8f6f0").rect(1000, 420, 400, 140, "#f8f6f0")
    .ground(560, "#6f9a4a")
    .forest({ y: 620, type: "palm", s: 2, gap: 400, x0: 120, x1: 1600 }),
};
