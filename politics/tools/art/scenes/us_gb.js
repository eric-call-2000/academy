/* United States and the United Kingdom */
module.exports = {
  // A crowded 1940s college gymnasium, a speaker at a far lectern, a large audience in hats and coats, bunting, sepia.
  "us_gb-1": (s) => {
    s.mood("interior", { light: "#ffe2a6" });
    s.room3d({ depth: 3, wall: "#a8865c", side: "#9a7a52", floor: "#8a6a44", ceiling: "#7a6040" });
    s.bunting(100, 200, 1500, 200, { sag: 60, count: 30, colors: ["#e8e2d2", "#a8322a", "#3f5a8a"] });
    const p = s.pp(800, 900, 2.9); s.rect(p[0] - 20, p[1] - 60, 40, 60, "#5a3e28"); s.person(p[0], p[1] - 50, 70, { color: "#1e1a18" });
    s.rows3d({ X0: 80, X1: 1520, z0: 1.15, z1: 2.7, rows: 10, color: "#6a4a30", h: 100, people: 1, personH: 260, peopleColors: ["#2a2420", "#3a3028", "#4a3a2e"] });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.18"/>');
  },
  // A huge crowd marching down a wide London street past grey stone government buildings, blank banners, winter.
  "us_gb-2": (s) => {
    s.sky("overcast");
    s.street3d({ vanish: [800, 430], depth: 5, left: 140, right: 1460, hmin: 500, hmax: 700, colors: ["#b8b4ac", "#a8a49c"], roofs: "#6a6e72", road: "#6a6866", lit: false });
    s.persp({ vanish: [800, 430], depth: 5 });
    for (let i = 0; i < 800; i++) { const z = 1.3 + Math.pow(s.r(), 1.4) * 8, X = 200 + s.r() * 1200, p = s.pp(X, 900, z); s.add(`<circle cx="${p[0].toFixed(1)}" cy="${(p[1] - 170 / z).toFixed(1)}" r="${(24 / z).toFixed(1)}" fill="${s.r.pick(["#2a2a2e", "#3a3a40", "#5a3a34", "#4a5a6a", "#e8e2d2"])}"/>`); }
    for (let i = 0; i < 8; i++) { const z = 1.6 + i * 0.7, a = s.pp(260 + (i * 150) % 1000, 560, z); s.rect(a[0], a[1], 300 / z, 70 / z, s.r.pick(["#ece6d6", "#d8cfbf"])); }
    return s;
  },
  // A grand medieval castle banqueting hall with a very long table set with candelabras, silver and flowers, candlelight.
  "us_gb-3": (s) => {
    s.mood("interior", { light: "#ffd38a" });
    s.room3d({ depth: 4, wall: "#6a5040", side: "#5a4234", floor: "#3a2a20", ceiling: "#4a3428", windows: { n: 4, side: "left", top: 80, bottom: 520, arched: true, color: "#3a4a6a" }, panels: true });
    s.table3d(640, 960, 1.3, 3.8, { cloth: "#f2efe8", count: 8, cups: true });
    for (let z = 1.5; z < 3.8; z += 0.4) { const p = s.pp(800, 670, z); s.glow(p[0], p[1] - 40 / z, 80 / z, "#ffd38a", 0.6); s.add(`<rect x="${p[0] - 2}" y="${p[1] - 40 / z}" width="4" height="${40 / z}" fill="#c9a04a"/><circle cx="${p[0]}" cy="${p[1] - 44 / z}" r="${4 / z + 1}" fill="#fff0c4"/>`); }
    return s;
  },
};
