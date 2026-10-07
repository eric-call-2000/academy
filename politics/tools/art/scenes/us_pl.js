/* United States & Poland */
module.exports = {
  // A crowded steamship of the 1900s arriving in an American harbour, brick warehouses and chimneys behind, haze.
  "us_pl-1": (s) => {
    s.sky("morning", { sun: [1300, 220], r: 40, clouds: 3 })
      .city({ y: 470, x0: -20, x1: 1640, style: "old", h: [50, 160], depth: 0.65, windows: false });
    s.chimney(240, 470, 200, { depth: 0.55, smoke: true }).chimney(1380, 470, 230, { depth: 0.55, smoke: true });
    s.sea(470, { glint: 1300 });
    s.rect(0, 470, 520, 40, s.c("#6a5a4a", 0.3));
    for (let x = 20; x < 520; x += 110) s.building(x, 470, 100, 70, { color: "#8a4a3a", depth: 0.3, cell: 16 });
    s.ship("steam", 900, 640, { s: 2.6, smoke: true });
    for (let x = 640; x < 1160; x += 11) s.person(x + s.r() * 6, 548 + s.r() * 4, 22, { color: s.r.pick(["#3b3a3f", "#4a4036", "#363d4f", "#5a3a34"]) });
    s.ship("boat", 280, 700, { s: 0.9 });
    return s;
  },
  // A large crowd of workers at a decorated shipyard gate with flowers and plain banners, cranes and a hull behind.
  "us_pl-2": (s) => {
    s.sky("overcast", { clouds: 4 });
    s.crane(260, 520, 1.6, { color: "#7a6a5a", depth: 0.4 }).crane(1250, 520, 1.8, { color: "#7a6a5a", depth: 0.4 });
    s.path("M560,520 L620,330 L1120,330 L1180,520 Z", s.c("#5a5048", 0.35));
    s.ground(520, "concrete", { depth: 0.2 });
    s.rect(560, 380, 70, 240, "#8a8478").rect(970, 380, 70, 240, "#8a8478").rect(560, 360, 480, 40, "#7a7468");
    s.fence(630, 970, 620, 200, { color: "#3a3a3a", gap: 20 });
    for (let i = 0; i < 70; i++) { const x = 600 + s.r() * 400, y = 360 + s.r() * 260; s.add(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(4 + s.r() * 5).toFixed(1)}" fill="${s.r.pick(["#c9463c", "#e8e2d2", "#d9b23c", "#b0563c"])}"/>`); }
    s.crowd({ y: 690, rows: 3, h: 70, gap: 26, rowGap: 46, banners: 3, thin: 0.15, colors: ["#3b3a3f", "#4a4036", "#363d4f", "#2c2f38", "#5a5048"] });
    s.ground(840, "concrete", { depth: 0 });
    return s;
  },
  // Rows of tanks and armoured vehicles at a base on a flat plain bordered by pine forest, low barracks, cold morning.
  "us_pl-3": (s) => {
    s.sky("winter", { sun: [360, 300], r: 36, clouds: 2 })
      .forest({ y: 440, type: "pine", s: 0.75, depth: 0.5, gap: 18 });
    s.ground(470, "tundra");
    s.barracks(140, 500, 360, { h: 60 }).barracks(1080, 500, 380, { h: 60 });
    s.add('<path d="M560,500 L560,430 Q700,380 840,430 L840,500 Z" fill="#7a7f7a"/>');
    s.fog(520, { h: 80, opacity: 0.45 });
    [[560, 0.7, 0.35], [650, 0.95, 0.2], [770, 1.25, 0.05]].forEach(([y, sc, dep]) => { for (let x = 120 + (y % 7) * 10; x < 1560; x += 230 * sc) s.vehicle("tank", x, y, { s: sc, depth: dep }); });
    s.convoy("apc", 200, 1500, 860, { s: 1.4, gap: 420 });
    return s;
  },
};
