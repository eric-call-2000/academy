/* India and Russia */
module.exports = {
  // A huge 1960s steel plant: tall blast furnaces, chimneys and gantries under a smoky orange sky, an ore train in front.
  "in_ru-1": (s) => {
    s.sky("dusk", { top: "#5a4a4a", bottom: "#e0884a" });
    s.factory(100, 560, 600, 140, { chimneys: [80, 220, 360, 500], chimH: 240, dark: true });
    s.furnace(900, 560, 1.1).furnace(1150, 560, 0.9).furnace(1380, 560, 1);
    s.add('<path d="M600,420 L900,330" stroke="#3a3632" stroke-width="16"/><path d="M1000,400 L1150,340" stroke="#3a3632" stroke-width="12"/>');
    s.ground(560, "#4a4440");
    s.railcars(-40, 1660, 760, { box: true, color: "#3a3030" });
    for (let i = 0; i < 11; i++) s.add(`<path d="M${i * 150 + 4},${706} Q${i * 150 + 70},${680} ${i * 150 + 136},${706} Z" fill="#6a4a3a"/>`);
    return s.person(400, 640, 30).person(440, 642, 28);
  },
  // Mobile air-defence launchers with tubes raised on heavy trucks in a dusty plain at dawn, a radar vehicle, pink sky.
  "in_ru-2": (s) => {
    s.sky("dawn", { top: "#b8a8b8", bottom: "#f2c8c0" });
    s.ground(500, "#c4a87a");
    [[400, 700, 1.4], [800, 640, 1.1], [1200, 600, 0.9]].forEach(([x, y, k]) => { s.vehicle("truck", x, y, { s: k * 1.2, color: "#6a6e58" }); s.add(`<g transform="rotate(-40 ${x - 30 * k} ${y - 50 * k})">${[0, 1, 2, 3].map((j) => `<rect x="${x - 60 * k}" y="${y - 60 * k - j * 14 * k}" width="${150 * k}" height="${12 * k}" rx="${6 * k}" fill="#7a7e66"/>`).join("")}</g>`); });
    s.vehicle("truck", 1450, 580, { s: 0.7, color: "#6a6e58" });
    return s.add('<rect x="1420" y="480" width="70" height="50" fill="#8a8e74"/>').fog(520, { h: 80, color: "#f2c8c0", opacity: 0.4 });
  },
  // A large oil refinery on a flat tropical coast at night: lit towers, flare stacks, a crude tanker at a long jetty.
  "in_ru-3": (s) => s
    .sky("night", { stars: 20 })
    .refinery(900, 520, 1.2, { lit: true })
    .flare(1300, 360, 1).flare(1450, 380, 0.8)
    .ground(520, "#2a2622")
    .sea(560, { color: "#2a3040" })
    .rect(-20, 600, 900, 14, "#4a4a4e")
    .ship("tanker", 400, 680, { s: 1.1 })
    .fog(540, { h: 120, color: "#5a4a40", opacity: 0.3 }),
};
