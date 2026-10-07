/* Poland and Russia */
module.exports = {
  // Early-20th-century cavalry and infantry advancing across a misty plain toward a river, church spires on the horizon, smoke.
  "pl_ru-1": (s) => {
    s.sky("overcast", { top: "#8a8478", bottom: "#c9bca4" });
    s.spire(1100, 460, 140, { depth: 0.4 }).spire(1180, 460, 110, { depth: 0.4 });
    s.smoke(400, 400, { len: 500, dark: true, w: 60, rise: 1.4 });
    s.ground(460, "#8a8462").fog(480, { h: 120, opacity: 0.6 });
    s.sea(600, { color: "#8a9494", lines: 20 }).rect(0, 640, 1600, 260, "#7a7a5a");
    for (let i = 0; i < 8; i++) { const x = 100 + i * 180, y = 760 + (i % 2) * 40; s.add(`<g fill="#3a3028"><ellipse cx="${x}" cy="${y - 40}" rx="40" ry="18"/>${[-30, -14, 14, 30].map((d) => `<rect x="${x + d}" y="${y - 30}" width="5" height="32"/>`).join("")}<rect x="${x + 30}" y="${y - 76}" width="12" height="36" transform="rotate(20 ${x + 36} ${y - 58})"/></g>`); s.person(x, y - 46, 56, { color: "#4a4a3a" }); }
    s.crowd({ y: 880, rows: 1, h: 90, gap: 40, walk: true, colors: ["#4a4a3a", "#5a5440"] });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.12"/>');
  },
  // A quiet autumn birch forest with white trunks and golden leaves, a row of simple crosses, ground mist, grey light.
  "pl_ru-2": (s) => {
    s.sky("overcast");
    s.forest({ y: 500, type: "birch", s: 1.4, gap: 40, depth: 0.4 });
    s.forest({ y: 500, type: "autumn", s: 1, gap: 50, color: "#d9a02c", depth: 0.3 });
    s.ground(500, "#7a7452").fog(560, { h: 120, opacity: 0.6 });
    for (let i = 0; i < 9; i++) { const x = 300 + i * 120, y = 700; s.rect(x - 4, y - 90, 8, 90, "#5a4a3a").rect(x - 26, y - 70, 52, 8, "#5a4a3a"); }
    return s.forest({ y: 900, x0: -40, x1: 300, type: "birch", s: 2.6, gap: 100 }).forest({ y: 900, x0: 1300, x1: 1640, type: "birch", s: 2.6, gap: 100 });
  },
  // A railway through a pine forest, a buckled section of track in front, police tape, small distant investigators.
  "pl_ru-3": (s) => {
    s.sky("overcast", { top: "#7a8088" });
    s.forest({ y: 480, type: "pine", s: 1.6, gap: 22, color: "#2e3a32" });
    s.ground(480, "#6a6a5a");
    s.persp({ vanish: [800, 480], depth: 30 });
    for (let z = 1.1; z < 30; z *= 1.12) s.quad("floor", [620, 980, 900, z, z * 1.03], "#5a4a3a");
    s.add('<path d="M650,900 L780,480 M950,900 L820,480" stroke="#8a8e92" stroke-width="8" fill="none"/><path d="M640,900 Q700,780 640,700 Q660,640 760,560" stroke="#8a8e92" stroke-width="10" fill="none"/>');
    s.add('<path d="M300,700 L1300,720" stroke="#e8c42c" stroke-width="5" stroke-dasharray="40 20"/>');
    return s.person(860, 560, 40, { color: "#2a3a5a" }).person(900, 556, 38, { color: "#2a3a5a" });
  },
};
