/* Saudi Arabia & Russia */
module.exports = {
  // An old Red Sea port town in the 1920s with tall coral-stone houses and dark wooden latticed balconies.
  "sa_ru-1": (s) => {
    s.sky("morning", { sun: [300, 220], r: 40 });
    s.sea(560, { color: "#5a8aa0", lines: 40 });
    [[300, 600, 1.0], [900, 620, 1.2]].forEach(([x, y, k]) => s.ship("dhow", x, y, { s: k }));
    const house = (x, w, h, y) => { s.rect(x, y - h, w, h, "#e6dcc6"); for (let r = 0; r < Math.floor(h / 90); r++) { s.rect(x + w * 0.2, y - h + 20 + r * 90, w * 0.6, 60, "#5a3e2a"); for (let k = 0; k < 6; k++) s.add(`<line x1="${x + w * 0.2 + k * w * 0.1}" y1="${y - h + 20 + r * 90}" x2="${x + w * 0.2 + k * w * 0.1}" y2="${y - h + 80 + r * 90}" stroke="#7a5a3e" stroke-width="2"/>`); } };
    [[1000, 160, 300], [1170, 140, 360], [1320, 170, 280], [1500, 140, 340]].forEach(([x, w, h]) => house(x, w, h, 700));
    s.rect(0, 700, 1600, 200, "#c9b89a");
    s.rect(940, 640, 700, 60, "#d9cdb4");
    [1100, 1300, 1450].forEach((x) => s.person(x, 760, 60, { color: "#e6e0d2", robe: "#e6e0d2" }));
    return s;
  },
  // A vast desert oil field at dusk with pumping units, silver pipelines and a gas flare, low dunes behind.
  "sa_ru-2": (s) => {
    s.sky("dusk", { sun: [1300, 500], r: 50 });
    s.dunes(480, { layers: 2, depth: 0.5 });
    s.ground(560, "desert");
    s.pipeline([[-20, 700], [600, 660], [1640, 690]], { color: "#b9bcc0", w: 14 });
    s.pipeline([[-20, 760], [700, 720], [1640, 750]], { color: "#a9acb0", w: 14 });
    const jack = (x, y, k) => s.add(`<g transform="translate(${x},${y}) scale(${k})"><polygon points="-30,0 30,0 4,-80 -4,-80" fill="none" stroke="#2a2a30" stroke-width="5"/><path d="M-70,-90 L70,-70 L76,-60 L-70,-78 Z" fill="#2a2a30"/><path d="M60,-74 Q90,-70 84,-40 L74,-40 Q78,-62 60,-64 Z" fill="#2a2a30"/><rect x="-60" y="-30" width="30" height="30" fill="#2a2a30"/></g>`);
    [[200, 640, 1.0], [480, 620, 0.8], [880, 610, 0.7], [1150, 640, 0.9], [1450, 660, 1.1], [320, 820, 1.4]].forEach(([x, y, k]) => jack(x, y, k));
    s.rect(1000, 440, 10, 180, "#4a4a50"); s.flare(1005, 440, 1.0);
    return s;
  },
  // A broad river embankment in St Petersburg with pastel palaces, a white exhibition pavilion and black cars.
  "sa_ru-3": (s) => {
    s.sky("golden", { clouds: 3 });
    const colors = ["#e6c88a", "#9ac0a8", "#e6d6c0", "#c9a0a0", "#a8b8d0"];
    for (let i = 0; i < 6; i++) { const x = -20 + i * 280; s.palace(x + 130, 430, 0.5, { color: colors[i % 5], w: 520, h: 140, cols: 6 }); }
    s.add('<polygon points="700,430 712,250 724,430" fill="#d9b44a"/>');
    s.sea(440, { color: "#6a7a90", lines: 30 });
    s.rect(0, 560, 1600, 340, "#9a958c");
    s.add('<path d="M300,700 L300,600 Q800,540 1300,600 L1300,700 Z" fill="#f4f2ee"/><rect x="300" y="690" width="1000" height="14" fill="#d6d2ca"/>');
    for (let i = 0; i < 10; i++) s.rect(360 + i * 92, 630, 60, 60, "#a8b8c8", 'opacity="0.8"');
    for (let i = 0; i < 9; i++) s.vehicle("car", 160 + i * 160, 820, { s: 1.4, color: "#1a1c20" });
    return s;
  },
};
