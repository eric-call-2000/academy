/* United States and Indonesia */
module.exports = {
  // A 1950s twin-engine bomber flying low over lush tropical islands and a coastal town of tin roofs, smoke from one engine.
  "us_id-1": (s) => {
    s.sky("day", { clouds: 4 });
    s.sea(500, { color: "#3fb0b8" });
    s.add('<path d="M100,560 Q500,400 900,500 Q1200,560 1500,560 Z" fill="#3f7a3a"/>');
    for (let i = 0; i < 20; i++) s.rect(600 + (i % 10) * 34, 520 + Math.floor(i / 10) * 18, 28, 12, "#a8acb0");
    s.plane("bomber", 700, 300, { s: 1.4, color: "#5a6068", angle: -4 });
    s.smoke(660, 300, { len: 300, dark: true, w: 30, rise: 0.2, dir: -1 });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.1"/>');
  },
  // A narrow lane in an old Jakarta neighbourhood: small tiled-roof houses, potted plants, motorbikes, a food cart.
  "us_id-2": (s) => {
    s.sky("golden");
    s.street3d({ vanish: [800, 460], depth: 4, left: 500, right: 1100, hmin: 300, hmax: 380, colors: ["#e8d4b0", "#d9c49a", "#c9e0d0", "#e8c4b0"], roofs: "#a8544a", road: "#8a847a", lit: false });
    s.persp({ vanish: [800, 460], depth: 4 });
    for (let z = 1.2; z < 4; z *= 1.3) [540, 1060].forEach((X) => { const p = s.pp(X, 900, z); s.add(`<rect x="${p[0] - 16 / z}" y="${p[1] - 30 / z}" width="${32 / z}" height="${30 / z}" fill="#a8603a"/><circle cx="${p[0]}" cy="${p[1] - 44 / z}" r="${24 / z}" fill="#4f8a4a"/>`); });
    [[620, 1.6], [980, 2.2]].forEach(([X, z]) => { const p = s.pp(X, 900, z), k = 1 / z; s.add(`<circle cx="${p[0] - 40 * k}" cy="${p[1] - 20 * k}" r="${20 * k}" fill="#222"/><circle cx="${p[0] + 40 * k}" cy="${p[1] - 20 * k}" r="${20 * k}" fill="#222"/><path d="M${p[0] - 50 * k},${p[1] - 34 * k} Q${p[0]},${p[1] - 80 * k} ${p[0] + 40 * k},${p[1] - 44 * k}" stroke="#3a5a8a" stroke-width="${24 * k}" fill="none"/>`); });
    const q = s.pp(860, 900, 1.5); return s.rect(q[0] - 80, q[1] - 160, 160, 120, "#c9763c").rect(q[0] - 90, q[1] - 180, 180, 24, "#e8c42c").add(`<circle cx="${q[0] - 50}" cy="${q[1] - 20}" r="20" fill="#2a2a2a"/><circle cx="${q[0] + 50}" cy="${q[1] - 20}" r="20" fill="#2a2a2a"/>`);
  },
  // A vast open-pit nickel mine of terraced red earth in green tropical hills, haul trucks, a smelter near the coast.
  "us_id-3": (s) => {
    s.sky("haze", { top: "#a8b8b8" });
    s.hills({ y: 400, amp: 200, color: "jungle", depth: 0.35 });
    s.sea(400, { color: "#5f9aa8" }).rect(0, 390, 400, 20, "#5f9aa8");
    s.factory(100, 460, 300, 60, { chimneys: [80, 200], dark: true, depth: 0.2 });
    s.ground(460, "#4f7a3a");
    s.mine(900, 480, 1000, { color: "#a8502a" });
    return s.vehicle("truck", 800, 640, { s: 0.8, color: "#e0b02c" }).vehicle("truck", 1100, 580, { s: 0.7, color: "#e0b02c" });
  },
};
