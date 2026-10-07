/* Canada */
module.exports = {
  // A Victorian meeting room: a long table of papers and inkwells, tall windows onto a harbour with sailing ships, men in frock coats.
  "ca-9": (s) => {
    s.mood("afternoon", { light: "#ffe9c4", top: "#9ab8cc", bottom: "#dfe6e6" });
    s.room3d({ depth: 2.4, wall: "#8a6a4a", side: "#7a5a3e", floor: "#5a4030", ceiling: "#9a7a5a", backWindows: [[420, 720, 160, 560], [880, 1180, 160, 560]] });
    s.persp({ vanish: [800, 414], depth: 2.4 });
    [[420, 720], [880, 1180]].forEach(([a]) => { const p = s.pp(a + 150, 560, 2.4); s.ship("tall", p[0], p[1] - 20, { s: 0.25, reflect: false }); });
    s.table3d(560, 1040, 1.3, 2.1, { color: "#4a3022", count: 5, papers: true, chairs: false });
    [[420, 1.6], [480, 1.9], [1150, 1.7], [1200, 2.0]].forEach(([X, z]) => s.figure3d(X, z, { h: 420, color: "#1e1a18", coat: true }));
    return s.glow(800, 300, 400, "#ffd38a", 0.2);
  },
  // A 19th-century steam train on a wooden trestle bridge through snowy Rocky Mountains by a turquoise glacial lake.
  "ca-3": (s) => {
    s.sky("day", { clouds: 5, cloudY: [60, 240] });
    s.mountains({ y: 480, amp: 340, color: "#7a7f8f", depth: 0.3, snow: 0.55 });
    s.forest({ y: 520, type: "pine", s: 1, gap: 18, depth: 0.25 });
    s.sea(540, { color: "#3fb0b0" });
    s.add('<g stroke="#6a4a30" stroke-width="5">' + Array.from({ length: 20 }, (_, i) => `<line x1="${i * 84}" y1="420" x2="${i * 84 - 30}" y2="560"/><line x1="${i * 84}" y1="420" x2="${i * 84 + 30}" y2="560"/>`).join("") + '<line x1="0" y1="420" x2="1600" y2="420" stroke-width="10"/></g>');
    s.train(500, 1100, 418, { color: "#2a2a2a", track: false, steam: true, s: 0.9 });
    return s.forest({ y: 880, x0: -40, x1: 400, type: "pine", s: 2.4, gap: 70 });
  },
  // Rows of small plain orange children's t-shirts on a wooden fence before a prairie field, autumn birches.
  "ca-10": (s) => {
    s.sky("overcast");
    s.ground(480, "#b8a070").forest({ y: 500, type: "birch", s: 1.2, gap: 60, depth: 0.25, color: "#e8e2d2" });
    s.forest({ y: 480, type: "autumn", s: 0.8, gap: 50, color: "#d9a02c", depth: 0.35 });
    s.add('<rect x="-20" y="640" width="1640" height="12" fill="#7a5a3e"/><rect x="-20" y="720" width="1640" height="12" fill="#7a5a3e"/>' + Array.from({ length: 13 }, (_, i) => `<rect x="${i * 130}" y="620" width="16" height="200" fill="#6a4a30"/>`).join(""));
    for (let i = 0; i < 18; i++) { const x = 40 + i * 88; s.add(`<path d="M${x},652 L${x + 60},652 L${x + 76},672 L${x + 64},682 L${x + 58},676 L${x + 58},730 L${x + 2},730 L${x + 2},676 L${x - 4},682 L${x - 16},672 Z" fill="#e0782c"/>`); }
    return s;
  },
  // A huge crowd in 1990s autumn jackets filling a Montreal square, grey stone buildings, spires, blue and white balloons.
  "ca-11": (s) => {
    s.sky("overcast", { top: "#8aa0b8" });
    s.city({ y: 470, h: [140, 240], style: "old", color: "#8a8680", depth: 0.25, lit: false });
    s.spire(400, 300, 220).spire(1200, 290, 260);
    s.ground(470, "#7a7670");
    s.crowd({ y: 520, rows: 9, h: 40, gap: 11, rowGap: 40, banners: 4, colors: ["#3a3a4a", "#5a3a2e", "#2e3a4a", "#6a5a3e", "#4a4040"] });
    for (let i = 0; i < 40; i++) { const x = s.r() * 1600, y = 380 + s.r() * 180; s.add(`<line x1="${x}" y1="${y + 18}" x2="${x}" y2="${y + 70}" stroke="#5a5a5a" stroke-width="1"/><ellipse cx="${x}" cy="${y}" rx="12" ry="16" fill="${i % 2 ? "#3f6aa8" : "#f2efe8"}"/>`); }
    return s;
  },
  // A Gothic Revival parliament with a central clock tower and copper-green roofs on a cliff over a river, red maples.
  "ca-4": (s) => {
    s.sky("day", { top: "#4f86b8", bottom: "#d9e6ee" });
    s.rect(300, 300, 1000, 180, "#c9b892");
    for (let i = 0; i < 24; i++) s.rect(330 + i * 40, 340, 14, 60, "#5a5040");
    s.poly([[280, 300], [1320, 300], [1260, 250], [340, 250]], "#5f9a84");
    s.rect(740, 100, 120, 380, "#c9b892").poly([[730, 100], [870, 100], [800, 20]], "#5f9a84").add('<circle cx="800" cy="160" r="26" fill="#efe9dc"/>');
    [340, 1260].forEach((x) => s.rect(x - 30, 220, 60, 260, "#c9b892").poly([[x - 36, 220], [x + 36, 220], [x, 160]], "#5f9a84"));
    s.ridge({ y: 640, amp: 140, color: "#6a6658", x1: 1600, jag: true, step: 40 });
    s.forest({ y: 520, type: "autumn", s: 1.2, gap: 50, color: "#c9462a" });
    return s.sea(700, { color: "#4f7a9a" });
  },
  // An indoor hockey rink from high up: players in plain red and plain white jerseys battling on the boards, ice spray.
  "ca-5": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.rect(0, 0, 1600, 900, "#2a2c34");
    for (let r = 0; r < 6; r++) for (let i = 0; i < 80; i++) s.add(`<circle cx="${i * 20 + (r % 2) * 10}" cy="${40 + r * 24}" r="6" fill="${s.r.pick(["#3a3c44", "#4a4c54", "#5a3a3a"])}"/>`);
    s.add('<rect x="80" y="200" width="1440" height="680" rx="200" fill="#eef4f8"/><rect x="80" y="200" width="1440" height="680" rx="200" fill="none" stroke="#f2f2f2" stroke-width="14"/><line x1="800" y1="200" x2="800" y2="880" stroke="#c94a3a" stroke-width="10"/><line x1="500" y1="200" x2="500" y2="880" stroke="#3f6aa8" stroke-width="8"/><line x1="1100" y1="200" x2="1100" y2="880" stroke="#3f6aa8" stroke-width="8"/><circle cx="800" cy="540" r="80" fill="none" stroke="#3f6aa8" stroke-width="4"/>');
    [[300, 300, "#c4322a"], [360, 290, "#f4f4f4"], [420, 320, "#c4322a"], [1000, 600, "#f4f4f4"], [1080, 620, "#c4322a"], [700, 700, "#f4f4f4"]].forEach(([x, y, c]) => { s.person(x, y, 70, { color: "#2a2a2e", helmet: true }); s.add(`<rect x="${x - 14}" y="${y - 52}" width="28" height="26" fill="${c}"/>`); });
    return s.glow(330, 300, 80, "#ffffff", 0.6);
  },
  // A line of freight trucks queued on a large suspension bridge at dusk, customs booths at the far end, city lights.
  "ca-6": (s) => {
    s.sky("dusk");
    s.city({ y: 520, h: [40, 160], depth: 0.4, lit: true });
    s.sea(520, { color: "#3a4a6a" });
    s.add('<g stroke="#3a3e48" fill="none"><line x1="400" y1="620" x2="400" y2="250" stroke-width="16"/><line x1="1200" y1="620" x2="1200" y2="250" stroke-width="16"/><path d="M-40,560 Q200,520 400,250 Q800,560 1200,250 Q1400,520 1640,560" stroke-width="4"/></g>');
    s.rect(-20, 620, 1640, 26, "#2e3038");
    for (let i = 0; i < 9; i++) s.vehicle("truck", 120 + i * 150, 620, { s: 0.9, color: s.r.pick(["#d9d2c2", "#6a7a8a", "#8a3a2a"]) });
    for (let i = 0; i < 6; i++) s.rect(1440 + i * 30, 580, 20, 40, "#e8e2d2");
    return s.lamps(0, 1600, 620, 60, { gap: 200 });
  },
  // A vast golden prairie wheat field under towering clouds, oil pumpjacks and a red grain elevator, faint Rockies.
  "ca-7": (s) => {
    s.sky("golden", { clouds: 6, cloudY: [80, 360] });
    s.mountains({ y: 500, amp: 80, color: "#9a9ab0", depth: 0.7 });
    s.ground(500, "#d4ac4c").field(500, 900, { color: "#d9b24c" });
    s.rect(1100, 380, 70, 120, "#a8322a").poly([[1095, 380], [1175, 380], [1135, 330]], "#8a2a22").rect(1170, 440, 40, 60, "#a8322a");
    [[400, 500], [620, 500]].forEach(([x, y]) => s.add(`<g fill="#2a2a2a"><polygon points="${x - 20},${y} ${x + 20},${y} ${x},${y - 50}"/><rect x="${x - 60}" y="${y - 58}" width="110" height="10" transform="rotate(-12 ${x} ${y - 52})"/><path d="M${x - 66},${y - 70} q-14,10 0,26" stroke="#2a2a2a" stroke-width="10" fill="none"/></g>`));
    return s;
  },
  // A small Arctic town of brightly coloured houses on a rocky treeless shore by broken sea ice, a coast guard ship.
  "ca-12": (s) => {
    s.sky("winter", { sun: [1300, 470], r: 30, bottom: "#f2d8b0" });
    s.sea(470, { color: "#6a8aa8", glint: 1300 });
    for (let i = 0; i < 40; i++) s.add(`<polygon points="${s.r() * 1600},${520 + s.r() * 120} ${s.r() * 1600},${520 + s.r() * 120} ${s.r() * 1600},${520 + s.r() * 120}" fill="#f2f4f6" opacity="0.8"/>`);
    s.ship("patrol", 1100, 500, { s: 0.5, hull: "#c43a2a" });
    s.ridge({ y: 780, amp: 120, color: "#7a7a72", jag: true, step: 40 });
    [[200, "#c4322a"], [330, "#3f6aa8"], [450, "#e8c42c"], [580, "#4f8a5a"], [720, "#f2efe8"], [860, "#c4322a"]].forEach(([x, c], i) => s.house(x, 700 - (i % 2) * 20, 100, 60, { color: c, roofColor: "#3a3a3a" }));
    return s;
  },
  // A container port on a rainy Pacific coast: tall gantry cranes loading ships, dark forested mountains in mist.
  "ca-8": (s) => {
    s.sky("overcast", { top: "#7a8a98", bottom: "#b8c4cc" });
    s.mountains({ y: 460, amp: 260, color: "#2e4038", depth: 0.4, jag: false }).fog(440, { h: 120, opacity: 0.7 });
    s.sea(500, { color: "#5a6a7a" });
    s.ship("container", 700, 560, { s: 1.1 });
    for (let i = 0; i < 6; i++) s.crane(200 + i * 220, 600, 1.1, { color: "#c4573c" });
    s.rect(0, 600, 1600, 300, "#6a6a6a");
    s.containers(0, 780, 32, 4, { w: 48, h: 24 });
    return s.rain({ count: 220 });
  },
};
