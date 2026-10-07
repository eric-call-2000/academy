/* United Kingdom & Russia */
module.exports = {
  // A Second World War convoy and an escort destroyer ploughing through an icy Arctic sea under a low dark sky.
  "gb_ru-1": (s) => {
    s.sky("storm", { clouds: 6, cloudY: [40, 300], bottom: "#b9c3c9" });
    s.add('<rect x="0" y="420" width="1600" height="30" fill="#e6ecef" opacity="0.35"/>');
    s.sea(450, { color: "#4c5d68" });
    [[220, 480, 0.55, 0.6], [560, 470, 0.45, 0.7], [1000, 485, 0.6, 0.55], [1380, 475, 0.5, 0.65]].forEach(([x, y, sc, d]) => s.ship("steam", x, y, { s: sc * 1.6, depth: d, smoke: true, smokeColor: "#8a9096" }));
    s.ship("bulk", 860, 560, { s: 1.1, depth: 0.3 });
    s.ship("warship", 420, 700, { s: 1.9 });
    for (let i = 0; i < 26; i++) { const x = s.r() * 1600, y = 600 + s.r() * 300, w = 30 + s.r() * 90; s.add(`<polygon points="${x},${y} ${x + w},${y - 4} ${x + w * 1.1},${y + 8} ${x + w * 0.2},${y + 12}" fill="#e9eef1" opacity="0.85"/>`); }
    s.snowfall({ count: 160 });
    return s;
  },
  // An English cathedral spire beyond a park bench under bare trees, cordoned off, a forensic tent beside it, grey March.
  "gb_ru-2": (s) => {
    s.sky("overcast", { clouds: 4 });
    s.city({ y: 470, x0: -20, x1: 1640, style: "old", h: [40, 100], depth: 0.6, windows: false });
    s.rect(900, 380, 420, 90, s.c("#a39d92", 0.45)).poly([[890, 380], [1330, 380], [1310, 350], [910, 350]], s.c("#8f887d", 0.45));
    s.rect(1080, 250, 60, 130, s.c("#a39d92", 0.45));
    s.poly([[1076, 250], [1144, 250], [1110, 60]], s.c("#968f84", 0.45));
    s.ground(480, "grass");
    s.forest({ y: 500, x0: -40, x1: 1640, type: "bare", s: 1.1, depth: 0.3, gap: 90 });
    s.rect(0, 600, 1600, 50, s.c("#b7b0a2", 0));
    s.tree("bare", 520, 700, { s: 2.6 }).tree("bare", 1380, 720, { s: 2.8 });
    s.rect(640, 690, 260, 14, "#6b5a46").rect(640, 650, 260, 12, "#6b5a46").rect(650, 704, 10, 40, "#3a3430").rect(880, 704, 10, 40, "#3a3430");
    s.add('<polyline points="560,760 600,700 960,690 1000,770" fill="none" stroke="#e2c84a" stroke-width="5"/><polyline points="560,760 1000,770" fill="none" stroke="#e2c84a" stroke-width="5"/>');
    [560, 600, 960, 1000].forEach((x, i) => s.rect(x - 3, [760, 700, 690, 770][i] - 10, 6, 60, "#3a3a3a"));
    s.poly([[1060, 790], [1300, 790], [1270, 690], [1090, 690]], "#eef0ee").poly([[1090, 690], [1270, 690], [1180, 640]], "#f6f7f6");
    s.rect(1160, 720, 40, 70, "#c9cdc9");
    return s;
  },
  // A large industrial warehouse on fire at night on an urban trading estate, fire engines below, wet tarmac.
  "gb_ru-3": (s) => {
    s.sky("night", { stars: 30 });
    s.city({ y: 480, h: [60, 180], depth: 0.6, lit: true, style: "towers" });
    s.ground(480, "asphalt");
    s.building(380, 640, 760, 220, { color: "#5a5e62", windows: false, roof: "flatdark" });
    for (let x = 400; x < 1120; x += 40) s.add(`<line x1="${x}" y1="420" x2="${x}" y2="640" stroke="#4a4e52" stroke-width="3"/>`);
    s.fire(560, 430, 420, { h: 240 });
    s.fire(900, 440, 200, { h: 170 });
    s.smoke(700, 260, { len: 600, dir: 1, dark: true, rise: 0.4 });
    s.glow(760, 420, 420, "#ff8a3c", 0.45);
    [[240, 760], [1280, 770], [1460, 740]].forEach(([x, y], i) => { s.vehicle("truck", x, y, { s: 1.5, color: "#a8322a", dir: i ? -1 : 1 }); s.glow(x, y - 90, 50, "#4a7aff", 0.6); });
    s.add('<line x1="300" y1="700" x2="620" y2="560" stroke="#dfe6ea" stroke-width="3" opacity="0.5"/><line x1="1240" y1="690" x2="1000" y2="560" stroke="#dfe6ea" stroke-width="3" opacity="0.5"/>');
    for (let i = 0; i < 20; i++) s.add(`<rect x="${(s.r() * 1600).toFixed(0)}" y="${(800 + s.r() * 90).toFixed(0)}" width="${(60 + s.r() * 160).toFixed(0)}" height="3" fill="#ff9a4a" opacity="${(0.15 + s.r() * 0.25).toFixed(2)}"/>`);
    return s;
  },
};
