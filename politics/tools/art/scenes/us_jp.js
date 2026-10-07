/* United States and Japan */
module.exports = {
  // A grey aircraft carrier at a naval pier in a Japanese harbour, forested hills and houses behind, cranes, morning haze.
  "us_jp-1": (s) => {
    s.sky("morning", { top: "#a8b8c8" });
    s.hills({ y: 440, amp: 180, color: "#4f6a4a", depth: 0.35 });
    for (let i = 0; i < 20; i++) s.house(100 + i * 70, 450 + (i % 3) * 8, 50, 26, { color: "#e2ddd0", roofColor: "#5a5a62", depth: 0.3 });
    s.crane(1300, 480, 0.6, { depth: 0.3 }).crane(1420, 480, 0.6, { depth: 0.3 });
    s.sea(480, { color: "#7a8a9a" }).fog(500, { h: 60 });
    s.rect(0, 600, 1600, 30, "#8a8a8a");
    return s.ship("carrier", 760, 600, { s: 1.6 }).ship("frigate", 1300, 540, { s: 0.5, depth: 0.2 });
  },
  // A military airfield runway through a dense subtropical town of low white houses, a turquoise sea and reef.
  "us_jp-2": (s) => {
    s.sky("tropical");
    s.sea(300, { color: "#3fb0b8" }).add('<rect x="0" y="300" width="1600" height="30" fill="#8ad0c8"/>');
    s.ground(340, "#c9c4b0");
    for (let i = 0; i < 200; i++) { const x = s.r() * 1600, y = 360 + s.r() * 540; if (y > 540 && y < 640) continue; s.rect(x, y, 30 + (y - 340) / 20, 18 + (y - 340) / 40, "#f2efe8"); }
    s.add('<polygon points="-40,560 1640,520 1640,620 -40,660" fill="#5a5a5e"/><line x1="0" y1="610" x2="1600" y2="570" stroke="#e8e6e0" stroke-width="4" stroke-dasharray="40 30"/>');
    return s.plane("cargo", 400, 590, { s: 0.6, color: "#6a7078" }).plane("fighter", 900, 580, { s: 0.5, color: "#6a7078" });
  },
  // Rows of shiny new cars on a vast port dock beside a huge boxy car-carrier ship, cranes, clear blue sky.
  "us_jp-3": (s) => {
    s.sky("day", { top: "#3f7ab8" });
    s.sea(420, { color: "#4f7a9a" });
    s.rect(600, 160, 900, 280, "#f2efe8").poly([[1500, 160], [1560, 220], [1560, 440], [1500, 440]], "#e2ddd0");
    for (let i = 0; i < 6; i++) s.rect(620, 180 + i * 40, 860, 4, "#d9d2c2");
    s.crane(300, 440, 0.7);
    s.rect(0, 440, 1600, 460, "#9a9690");
    for (let r = 0; r < 8; r++) for (let i = 0; i < 14; i++) s.vehicle("car", 60 + i * 110 + (r % 2) * 50, 500 + r * 50, { s: 0.6 + r * 0.06, color: ["#e8e6e0", "#3a3e44", "#a8322a", "#5a7a9a"][(i + r) % 4] });
    return s;
  },
};
