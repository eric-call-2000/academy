/* Germany & Ukraine */
module.exports = {
  // A quiet wooded ravine on the edge of a city in autumn, a stone memorial and candles among the trees.
  "de_ua-1": (s) => {
    s.sky("overcast", { clouds: 4 });
    s.city({ y: 380, h: [40, 140], depth: 0.75, windows: false });
    s.add('<path d="M-20,420 Q400,460 800,620 Q1200,460 1640,420 L1640,900 L-20,900 Z" fill="#7a6a4a"/>');
    s.add('<path d="M400,520 Q800,780 1200,520 L1200,900 L400,900 Z" fill="#5a4a36" opacity="0.6"/>');
    s.forest({ y: 470, x0: -40, x1: 520, type: "birch", s: 1.2, gap: 40 });
    s.forest({ y: 470, x0: 1080, x1: 1640, type: "autumn", s: 1.3, gap: 50 });
    s.forest({ y: 700, x0: -40, x1: 300, type: "autumn", s: 2.0, gap: 90 }).forest({ y: 720, x0: 1300, x1: 1640, type: "birch", s: 2.0, gap: 70 });
    s.rect(700, 560, 200, 160, "#8f8a82").rect(680, 720, 240, 20, "#7a766e");
    s.candles(640, 960, 760, 30);
    for (let i = 0; i < 40; i++) s.add(`<ellipse cx="${(s.r() * 1600).toFixed(0)}" cy="${(700 + s.r() * 200).toFixed(0)}" rx="5" ry="2.5" fill="${s.r.pick(["#c9922a", "#b0602a", "#d9b23c"])}"/>`);
    return s;
  },
  // A row of heavy main battle tanks loaded on flatbed rail wagons at a freight station in winter, light snow.
  "de_ua-2": (s) => {
    s.sky("winter", { clouds: 5 });
    s.forest({ y: 440, type: "pine", s: 0.7, depth: 0.5, gap: 20 });
    s.ground(460, "snow");
    s.building(1200, 520, 160, 120, { color: "#9a5a44", cell: 18, roof: "pitched", roofColor: "#5a4a44" });
    s.pylons(-40, 1640, 480, { h: 120, gap: 260, depth: 0.3 });
    s.add('<line x1="0" y1="652" x2="1600" y2="652" stroke="#3e3b38" stroke-width="5"/>');
    for (let x = -40; x < 1640; x += 300) { s.rect(x, 610, 290, 30, "#4a4846"); [x + 40, x + 250].forEach((wx) => s.add(`<circle cx="${wx}" cy="646" r="10" fill="#2a2a2a"/>`)); s.vehicle("tank", x + 145, 610, { s: 1.6, color: "#5c6150" }); }
    s.rect(0, 660, 1600, 240, "#e2e6ea");
    s.snowfall({ count: 120 });
    return s;
  },
  // A modern factory hall with long workbenches where workers assemble rows of small fixed-wing drones under bright lights.
  "de_ua-3": (s) => {
    s.mood("interior", { light: "#f4f6f2" });
    s.room3d({ depth: 3.6, wall: "#c9cbc8", side: "#b9bcb9", floor: "#8a8d8c", ceiling: "#a9adae", lights: "strips" });
    [[360, 640], [960, 1240]].forEach(([a, b]) => s.box3d(a, b, 680, 700, 1.3, 3.4, "#6a6e72", { top: "#9aa0a4" }));
    for (let z = 1.4; z < 3.3; z += 0.3) [500, 1100].forEach((X) => { const p = s.pp(X, 680, z), k = 1 / z; s.add(`<g transform="translate(${p[0].toFixed(0)},${(p[1] - 6 * k).toFixed(0)}) scale(${k.toFixed(2)})"><rect x="-70" y="-6" width="140" height="10" rx="4" fill="#3f4a3a"/><rect x="-16" y="-22" width="40" height="18" rx="6" fill="#4a5446"/><rect x="40" y="-24" width="6" height="22" fill="#3f4a3a"/></g>`); });
    [[300, 1.6], [1300, 1.9], [800, 2.6], [700, 1.5]].forEach(([X, z]) => s.figure3d(X, z, { h: 260, color: "#2f4a6a" }));
    return s;
  },
};
