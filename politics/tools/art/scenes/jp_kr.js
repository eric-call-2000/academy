/* Japan and South Korea */
module.exports = {
  // A bronze statue of a seated girl in a simple Korean dress beside an empty bronze chair on a pavement, autumn leaves.
  "jp_kr-1": (s) => {
    s.sky("afternoon");
    s.building(-20, 520, 700, 400, { color: "#a8a49c", lit: false }).building(900, 520, 720, 380, { color: "#9a968e", lit: false });
    s.ground(520, "#b8b0a2");
    for (let i = 0; i < 60; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${560 + s.r() * 340}" rx="8" ry="5" fill="${s.r.pick(["#c9763c", "#d9a02c", "#a8462a"])}"/>`);
    s.rect(560, 760, 500, 30, "#8a8478");
    const c = "#5a4a32"; s.add(`<g fill="${c}"><rect x="640" y="600" width="90" height="16"/><rect x="644" y="616" width="10" height="144"/><rect x="716" y="616" width="10" height="144"/><rect x="640" y="520" width="12" height="96"/><rect x="900" y="600" width="90" height="16"/><rect x="904" y="616" width="10" height="144"/><rect x="976" y="616" width="10" height="144"/><rect x="900" y="520" width="12" height="96"/><circle cx="690" cy="480" r="28"/><path d="M660,600 L664,512 Q690,500 716,512 L722,600 Z"/><path d="M664,600 L730,600 L736,700 L700,700 L700,620 L664,620 Z"/></g>`);
    return s;
  },
  // A semiconductor cleanroom lit yellow: workers in white suits beside large wafer machines, gleaming floors.
  "jp_kr-2": (s) => {
    s.mood("day", { light: "#fff4b0" });
    s.room3d({ depth: 3.4, wall: "#e8d890", side: "#e0d080", floor: "#d9d4b8", ceiling: "#f2e8b0", lights: "strips" });
    for (let i = 4; i >= 0; i--) { const z = 1.4 + i * 0.4; s.box3d(160, 560, 520, 900, z, z + 0.25, "#d9dcd8"); s.box3d(1040, 1440, 520, 900, z, z + 0.25, "#d9dcd8"); }
    return s.figure3d(700, 1.8, { h: 420, color: "#f4f4f2" }).figure3d(900, 2.3, { h: 420, color: "#f4f4f2" }).figure3d(760, 3, { h: 420, color: "#f4f4f2" });
  },
  // An ancient wooden temple hall with sweeping dark roofs, deer grazing on a lawn, red and gold maples, winter morning.
  "jp_kr-3": (s) => {
    s.sky("winter");
    s.forest({ y: 480, type: "autumn", s: 1, gap: 40, color: "#c9462a", depth: 0.3 });
    s.rect(400, 340, 800, 180, "#6a4a32");
    for (let i = 0; i < 10; i++) s.rect(420 + i * 80, 360, 16, 160, "#4a3022");
    s.add('<path d="M300,350 Q500,330 600,250 L1000,250 Q1100,330 1300,350 Z" fill="#2a2a2e"/><path d="M420,250 Q560,230 640,170 L960,170 Q1040,230 1180,250 Z" fill="#2a2a2e"/>');
    s.ground(520, "#8a9a6a");
    [[400, 700], [560, 740], [1100, 720]].forEach(([x, y]) => s.add(`<g fill="#8a6a44"><ellipse cx="${x}" cy="${y - 34}" rx="34" ry="16"/>${[-22, -10, 10, 22].map((d) => `<rect x="${x + d}" y="${y - 24}" width="4" height="26"/>`).join("")}<rect x="${x + 24}" y="${y - 64}" width="8" height="30" transform="rotate(20 ${x + 28} ${y - 50})"/><ellipse cx="${x + 36}" cy="${y - 66}" rx="11" ry="7"/></g>`));
    return s;
  },
};
