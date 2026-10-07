/* Japan and China */
module.exports = {
  // A large dark wooden shrine gate at dawn, rows of stone lanterns along an empty gravel path, bare cherry trees, mist.
  "jp_cn-1": (s) => {
    s.sky("dawn", { top: "#a8a8b8" });
    s.forest({ y: 460, type: "bare", s: 1, gap: 50, depth: 0.4 }).fog(470, { h: 120, opacity: 0.7 });
    s.ground(470, "#b8b0a2");
    s.persp({ vanish: [800, 470], depth: 8 });
    s.quad("floor", [600, 1000, 900, 1, 40], "#d9d2c2");
    for (let z = 1.2; z < 8; z *= 1.25) [520, 1080].forEach((X) => { const p = s.pp(X, 900, z), k = 1 / z; s.add(`<g fill="#8a8478"><rect x="${p[0] - 14 * k}" y="${p[1] - 140 * k}" width="${28 * k}" height="${140 * k}"/><rect x="${p[0] - 36 * k}" y="${p[1] - 190 * k}" width="${72 * k}" height="${50 * k}"/><polygon points="${p[0] - 50 * k},${p[1] - 190 * k} ${p[0] + 50 * k},${p[1] - 190 * k} ${p[0]},${p[1] - 230 * k}"/></g>`); });
    return s.add('<g fill="#3a2a22"><rect x="560" y="240" width="40" height="660"/><rect x="1000" y="240" width="40" height="660"/><rect x="480" y="230" width="640" height="40"/><rect x="520" y="320" width="560" height="24"/><path d="M440,240 Q800,200 1160,240 L1160,214 Q800,180 440,214 Z"/></g>');
  },
  // A steep rocky uninhabited island in a choppy blue-grey sea, two grey patrol ships on either side, overcast.
  "jp_cn-2": (s) => s
    .sky("overcast", { top: "#8a929a" })
    .sea(520, { color: "#5a6a7a", lines: 140 })
    .poly([[540, 560], [620, 470], [700, 380], [760, 300], [810, 320], [860, 400], [940, 450], [1060, 560]], "#6a6a58").poly([[540, 560], [1060, 560], [1040, 576], [560, 576]], "#4a4a40")
    .ship("patrol", 300, 600, { s: 0.7, reflect: false })
    .ship("patrol", 1340, 620, { s: 0.8, dir: -1, reflect: false }),
  // An empty fish market hall early morning: rows of unused stalls, stacked white boxes, wet floor, one forklift.
  "jp_cn-3": (s) => {
    s.mood("overcast", { light: "#f4f8ff" });
    s.room3d({ depth: 3.6, wall: "#8a9098", side: "#7a8088", floor: "#5a6068", ceiling: "#6a7078", lights: "strips" });
    for (let i = 5; i >= 0; i--) { const z = 1.3 + i * 0.4; s.box3d(200, 640, 760, 900, z, z + 0.2, "#9aa0a6"); s.box3d(960, 1400, 760, 900, z, z + 0.2, "#9aa0a6"); }
    for (let k = 0; k < 5; k++) s.box3d(300, 420, 640 - k * 60, 700 - k * 60, 1.25, 1.35, "#f4f4f2");
    for (let i = 0; i < 8; i++) s.quad("floor", [700, 900, 899, 1.3 + i * 0.3, 1.4 + i * 0.3], "#e8f0f8", 'opacity="0.2"');
    const p = s.pp(1200, 900, 2.6); return s.vehicle("truck", p[0], p[1], { s: 0.5, color: "#d9a02c" });
  },
};
