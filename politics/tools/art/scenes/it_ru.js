/* Italy & Russia */
module.exports = {
  // Rows of small boxy 1970s sedans outside a huge long Soviet factory hall in light snow, birches and a chimney.
  "it_ru-1": (s) => {
    s.sky("winter", { clouds: 4 });
    s.forest({ y: 460, type: "birch", s: 0.7, depth: 0.5, gap: 26 });
    s.building(100, 520, 1200, 150, { color: "#c9c4b8", cell: 30, roof: "flatdark" });
    s.chimney(1360, 520, 300, { color: "#a9a49a", smokeLen: 260 });
    s.ground(520, "snow");
    for (let r = 0; r < 4; r++) for (let i = 0; i < 11; i++) { const y = 600 + r * 80, k = 0.75 + r * 0.25, x = 80 + i * 145 * (1 + r * 0.04); s.vehicle("car", x, y, { s: k, color: s.r.pick(["#c9b47a", "#8a3a2e", "#e6e2d6", "#4a6a5a", "#3a5a8a"]) }); s.rect(x - 38 * k, y - 42 * k, 80 * k, 5 * k, "#eef2f6"); }
    s.snowfall({ count: 70 });
    return s;
  },
  // A large white villa among umbrella pines above a turquoise Mediterranean cove with a jetty and a motor yacht.
  "it_ru-2": (s) => {
    s.sky("day", { clouds: 2 });
    s.sea(460, { color: "#3f9ab0" });
    s.add('<path d="M-20,900 L-20,420 Q300,380 600,460 Q800,520 900,620 Q1000,700 1100,900 Z" fill="#a8a07a"/><path d="M1640,900 L1640,500 Q1500,520 1400,600 Q1300,700 1280,900 Z" fill="#9a926c"/>');
    s.rect(200, 380, 420, 100, "#f4f0e8").rect(260, 330, 260, 50, "#f4f0e8");
    s.poly([[190, 380], [630, 380], [600, 360], [220, 360]], "#c97a5a").poly([[250, 330], [530, 330], [500, 312], [280, 312]], "#c97a5a");
    for (let i = 0; i < 7; i++) s.rect(220 + i * 56, 410, 30, 40, "#5a7a8a");
    const pine = (x, y, k) => s.add(`<rect x="${x - 4 * k}" y="${y - 90 * k}" width="${8 * k}" height="${90 * k}" fill="#5a4a3a"/><ellipse cx="${x}" cy="${y - 100 * k}" rx="${80 * k}" ry="${26 * k}" fill="#3f5a3a"/>`);
    [[100, 500, 1], [700, 520, 1.1], [820, 600, 1.3], [1480, 600, 1.2], [60, 640, 1.4]].forEach(([x, y, k]) => pine(x, y, k));
    s.rect(1000, 700, 200, 10, "#8a7a6a");
    s.ship("patrol", 1150, 760, { s: 0.9, hull: "#f2efe8", sup: "#e6e2da" });
    return s;
  },
  // A large LNG carrier with round tanks arriving at a floating terminal off a rocky Italian coast with a hill town.
  "it_ru-3": (s) => {
    s.sky("golden", { sun: [300, 380], r: 44 });
    s.add('<path d="M900,480 Q1100,330 1300,360 Q1500,380 1640,330 L1640,520 L900,520 Z" fill="#8a7a5a"/>');
    for (let i = 0; i < 14; i++) s.rect(1100 + i * 30 + (i % 3) * 6, 360 - (i % 4) * 14, 28, 40 + (i % 4) * 14, s.r.pick(["#e6d6b8", "#d9b88a", "#c9a07a"]));
    s.add('<polygon points="1230,330 1240,280 1250,330" fill="#d9c6a6"/>');
    s.sea(500, { glint: 300 });
    s.ship("lng", 650, 700, { s: 1.6 });
    s.add('<rect x="1100" y="650" width="320" height="40" fill="#5a5e64"/><rect x="1150" y="610" width="80" height="40" fill="#e6e2da"/><line x1="1330" y1="650" x2="1330" y2="560" stroke="#8a8f92" stroke-width="5"/>');
    return s;
  },
};
