/* United States and India */
module.exports = {
  // A grey aircraft carrier across a hazy tropical bay, small wooden fishing boats in the foreground, humid sky.
  "us_in-1": (s) => s
    .sky("haze", { top: "#b8bcb4" })
    .sea(460, { color: "#7a8a88" })
    .ship("carrier", 900, 520, { s: 0.9, dir: -1, depth: 0.3 })
    .ship("boat", 260, 700, { s: 1.4, hull: "#6a5040", cabin: false })
    .ship("dhow", 600, 760, { s: 1, sail: "#c9b89a" })
    .ship("boat", 1300, 780, { s: 1.5, hull: "#4f6a8a", cabin: false }),
  // A nuclear power station with two big domed reactor buildings on a tropical coast at sunset, palms, calm sea.
  "us_in-2": (s) => {
    s.sky("golden", { sun: [1300, 420], r: 44, bottom: "#f2a06a" });
    [[600, 130], [920, 130]].forEach(([x, r]) => { s.rect(x - r, 360, r * 2, 120, "#e2ddd0"); s.add(`<path d="M${x - r},360 A${r},${r * 0.9} 0 0 1 ${x + r},360 Z" fill="#ece8e0"/>`); });
    s.forest({ y: 480, x0: -40, x1: 400, type: "palm", s: 1, gap: 70 }).forest({ y: 480, x0: 1100, x1: 1640, type: "palm", s: 1, gap: 90 });
    return s.sea(480, { glint: 1300 });
  },
  // A tech office campus at dusk: glass buildings lit from inside, a palm-lined walkway, a few people walking home.
  "us_in-3": (s) => {
    s.sky("dusk");
    s.building(120, 520, 560, 300, { color: "#5a7a9a", lit: true, litShare: 0.7, cell: 18 }).building(800, 520, 680, 240, { color: "#6a8aa8", lit: true, litShare: 0.7, cell: 18 });
    s.ground(520, "#4a5a4a");
    s.add('<polygon points="700,520 900,520 1200,900 400,900" fill="#a8a49c"/>');
    s.persp({ vanish: [800, 520], depth: 8 });
    for (let z = 1.2; z < 8; z *= 1.3) [560, 1040].forEach((X) => { const p = s.pp(X, 900, z); s.tree("palm", p[0], p[1], { s: 1.6 / z }); });
    return s.person(760, 760, 110, { walk: true }).person(860, 700, 90, { color: "#4a3a3a", walk: true }).person(820, 640, 60, { walk: true });
  },
};
