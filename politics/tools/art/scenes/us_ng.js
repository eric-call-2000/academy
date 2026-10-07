/* United States and Nigeria */
module.exports = {
  // An oil platform with a burning flare in a wide river delta lined with mangroves at sunset, small wooden boats.
  "us_ng-1": (s) => s
    .sky("dusk", { top: "#4a3a6a", bottom: "#f2a06a" })
    .forest({ y: 480, type: "oak", s: 1, gap: 30, color: "#2f4a2a" })
    .sea(490, { color: "#5a5a6a", glint: 900 })
    .rig(900, 580, 1, { flare: true })
    .ship("boat", 300, 680, { s: 1, hull: "#5a4030", cabin: false })
    .ship("boat", 1300, 720, { s: 1.1, hull: "#5a4030", cabin: false, dir: -1 }),
  // An empty rural classroom: overturned wooden desks, scattered exercise books, sunlight through broken windows, dust.
  "us_ng-2": (s) => {
    s.mood("afternoon", { light: "#ffe9c4" });
    s.room3d({ depth: 2.2, wall: "#d9c49a", side: "#cfb88e", floor: "#a8885e", ceiling: "#e2d4b0", windows: { n: 3, side: "left", top: 120, bottom: 460 } });
    s.rect(560, 240, 480, 200, "#3a4a3a");
    s.add('<g fill="#6a4a30"><rect x="400" y="680" width="200" height="30" transform="rotate(-20 500 700)"/><rect x="900" y="720" width="220" height="30" transform="rotate(70 1000 730)"/><rect x="700" y="620" width="180" height="26"/><rect x="1100" y="600" width="180" height="26" transform="rotate(-8 1190 610)"/></g>');
    return s.papers(800, 800, 20, { color: "#f2efe0" });
  },
  // A dry savannah at night: scattered acacias and mud-brick villages, a distant orange glow on the horizon, stars.
  "us_ng-3": (s) => {
    s.sky("night", { stars: 160 });
    s.glow(1200, 480, 300, "#ff8a3c", 0.5);
    s.ground(480, "#2a2620");
    for (let i = 0; i < 10; i++) s.rect(200 + i * 60, 470 + (i % 2) * 6, 44, 30, "#4a3a2e");
    [300, 800, 1400].forEach((x) => s.tree("acacia", x, 560, { s: 1.4, color: "#1e2018" }));
    return s;
  },
};
