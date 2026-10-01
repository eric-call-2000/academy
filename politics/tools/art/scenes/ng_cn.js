/* Nigeria and China */
module.exports = {
  // A busy Lagos street: yellow minibuses and motorbikes, colourful stalls under umbrellas, glass towers and cranes behind.
  "ng_cn-1": (s) => {
    s.sky("day");
    s.city({ y: 440, style: "towers", h: [120, 320], depth: 0.35, lit: false });
    s.towerCrane(1200, 440, 1, { depth: 0.3 });
    s.ground(440, "#8a7a62");
    for (let i = 0; i < 6; i++) s.vehicle("bus", 120 + i * 260, 560, { s: 0.9, color: "#e8c42c" });
    for (let i = 0; i < 12; i++) { const x = 60 + i * 130, y = 760 + (i % 2) * 40; s.add(`<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 120}" stroke="#4a4a4a" stroke-width="3"/><path d="M${x - 70},${y - 100} Q${x},${y - 160} ${x + 70},${y - 100} Z" fill="${s.r.pick(["#c94a3c", "#3f6aa8", "#e8c42c", "#3f8a6a"])}"/>`); }
    return s.crowd({ y: 860, rows: 1, h: 110, gap: 40, thin: 0.3, colors: ["#2a2424", "#e8c42c", "#3f6aa8", "#c94a3c"] });
  },
  // A green-and-white passenger train on a new railway across green savannah with rocky outcrops and scattered trees.
  "ng_cn-2": (s) => {
    s.sky("afternoon");
    s.add('<path d="M200,480 Q260,360 380,370 Q460,380 500,480 Z" fill="#8a8478"/><path d="M1200,480 Q1240,400 1320,410 Q1380,420 1400,480 Z" fill="#8a8478"/>');
    s.ground(480, "#8aa05a");
    [300, 700, 1100, 1450].forEach((x) => s.tree("acacia", x, 520, { s: 1 }));
    s.rect(-20, 620, 1640, 20, "#9a948a");
    s.train(100, 1500, 620, { type: "fast", color: "#3f8a5a", track: false, s: 0.9 });
    return s.add('<rect x="100" y="590" width="1400" height="6" fill="#f2efe8"/>');
  },
  // A busy wholesale market hall: tall stacks of patterned fabric rolls, boxes, hand carts, traders, light through a roof.
  "ng_cn-3": (s) => {
    s.mood("afternoon", { light: "#ffe2a6" });
    s.room3d({ depth: 3, wall: "#b89a72", side: "#a88a62", floor: "#8a7a62", ceiling: "#c4a87a", lights: "strips" });
    for (let z = 1.2; z < 3; z += 0.3) ["l", "r"].forEach((sd) => { const X0 = sd === "l" ? 80 : 1240; for (let k = 0; k < 8; k++) s.box3d(X0 + (k % 4) * 70, X0 + (k % 4) * 70 + 60, 900 - 100 - Math.floor(k / 4) * 100, 900 - Math.floor(k / 4) * 100, z, z + 0.1, s.r.pick(["#c94a3c", "#e8c42c", "#3f6aa8", "#3f8a6a", "#8a3a8a", "#e86a2c"])); });
    for (let i = 0; i < 8; i++) s.figure3d(600 + s.r() * 400, 1.6 + s.r() * 1.2, { h: 380, color: s.r.pick(["#2a2424", "#3a3030"]), robe: s.r.pick(["#e8c42c", "#3f8a6a", "#c94a3c", null]) });
    return s;
  },
};
