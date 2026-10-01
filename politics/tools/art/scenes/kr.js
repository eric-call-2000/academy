/* South Korea */
const palaceGate = (s, x, y, k, o) => {
  o = o || {};
  s.gateTower(x, y, k, { color: o.wall || "#8a8a82", roof: o.roof || "#4a5048", depth: o.depth, w: 760 });
  s.rect(x - 260 * k, y - 300 * k, 520 * k, 16 * k, s.c("#3f7a6a", o.depth || 0));
};
module.exports = {
  // A traditional palace gate with sweeping tiled roofs, a big crowd in 1940s clothes gathered in front, August sun.
  "kr-9": (s) => {
    s.sky("day", { sun: [1300, 160], r: 40 });
    palaceGate(s, 800, 520, 1);
    s.ground(520, "#c9b89a");
    return s.crowd({ y: 580, rows: 8, h: 60, gap: 16, rowGap: 40, colors: ["#e8e2d2", "#d9d2c2", "#3a3432", "#5a4a3c", "#f2efe8"] });
  },
  // A huge crowd of students and workers seen from above filling an avenue in the late 1980s, haze, a palace gate.
  "kr-3": (s) => {
    s.sky("haze", { top: "#b0a898", bottom: "#d0c6b0" });
    palaceGate(s, 800, 320, 0.3, { depth: 0.3 });
    s.ground(320, "#8a8070");
    s.persp({ vanish: [800, 300], depth: 20 });
    s.quad("floor", [300, 1300, 900, 1, 60], "#6a6258");
    s.city({ y: 900, x0: -20, x1: 300, h: [300, 560], depth: 0.1, lit: false, color: "#8a8478" }).city({ y: 900, x0: 1300, x1: 1620, h: [300, 560], depth: 0.1, lit: false, color: "#8a8478" });
    for (let i = 0; i < 1600; i++) { const z = 1 + Math.pow(s.r(), 1.6) * 16, X = 320 + s.r() * 960, p = s.pp(X, 900, z); s.add(`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${(9 / z + 0.6).toFixed(1)}" fill="${s.r.pick(["#2a2a2e", "#3a3a40", "#e8e2d2", "#4a4040"])}"/>`); }
    return s.fog(500, { h: 300, opacity: 0.3 });
  },
  // A vast shipyard at dawn: giant red and white gantry cranes over a half-built hull, calm sea, orange sunrise.
  "kr-10": (s) => {
    s.sky("dawn", { sun: [1300, 400], r: 50, bottom: "#f2b07a" });
    s.sea(520, { glint: 1300 });
    s.add('<g fill="#c43a2a"><rect x="200" y="160" width="40" height="400"/><rect x="900" y="160" width="40" height="400"/><rect x="160" y="130" width="820" height="50"/></g><g fill="#efe9dc"><rect x="200" y="300" width="40" height="40"/><rect x="900" y="300" width="40" height="40"/><rect x="400" y="130" width="60" height="50"/></g>');
    s.add('<path d="M260,560 L260,440 L880,440 L860,560 Z" fill="#5a5a60"/><path d="M260,440 L880,440 L870,420 L270,420 Z" fill="#8a2a2a"/>');
    return s.rect(0, 560, 1600, 40, "#6a6a6a").crane(1100, 560, 1.4, { color: "#efe9dc" });
  },
  // A street filled with young 1980s protesters with white headbands, office buildings, drifting white smoke.
  "kr-11": (s) => {
    s.sky("overcast");
    s.street3d({ vanish: [800, 440], depth: 5, left: 200, right: 1400, hmin: 500, hmax: 800, colors: ["#8a8a86", "#7a7a76"], road: "#6a6866", lit: false });
    s.persp({ vanish: [800, 440], depth: 5 });
    for (let i = 0; i < 90; i++) { const z = 1.4 + Math.pow(s.r(), 1.3) * 4, X = 260 + s.r() * 1080, p = s.pp(X, 900, z), h = 340 / z; s.person(p[0], p[1], h, { color: s.r.pick(["#2a2a30", "#3a3a40", "#e8e2d2"]) }); s.rect(p[0] - h * 0.13, p[1] - h * 0.92, h * 0.26, h * 0.05, "#f4f1ea"); }
    return s.smoke(600, 500, { len: 600, rise: 0.4, w: 90, color: "#f2f2ee" }).smoke(1100, 560, { len: 500, rise: 0.3, w: 80, dir: -1, color: "#f2f2ee" });
  },
  // Curved palace roofs and painted eaves in front, glass skyscrapers behind, a forested mountain, dusk.
  "kr-4": (s) => {
    s.sky("dusk", { top: "#3a4a7a", bottom: "#e0a07a" });
    s.mountains({ y: 400, amp: 200, color: "#3a4a3a", depth: 0.3, jag: false });
    s.city({ y: 560, style: "towers", h: [200, 360], depth: 0.25, lit: true, color: "#5a6a8a" });
    s.add('<path d="M-60,600 Q120,660 300,620 Q500,560 800,560 Q1100,560 1300,620 Q1480,660 1660,600 L1660,700 L-60,700 Z" fill="#3a3e44"/>' + Array.from({ length: 60 }, (_, i) => `<line x1="${-40 + i * 28}" y1="${590 + Math.abs(i - 30) * 1.2}" x2="${-40 + i * 28}" y2="700" stroke="#2a2e34" stroke-width="3"/>`).join("") + '<rect x="-40" y="700" width="1680" height="26" fill="#3f7a6a"/><rect x="-40" y="726" width="1680" height="30" fill="#8a3a2a"/>');
    for (let i = 0; i < 20; i++) s.rect(-20 + i * 86, 740, 18, 160, "#8a3a2a");
    return s.rect(-40, 756, 1680, 144, "#5a3e30", 'opacity="0.5"');
  },
  // Citizens linking arms outside the iron gate of a domed parliament at night, soldiers far off, phone lights.
  "kr-5": (s) => {
    s.sky("night", { stars: 20 });
    s.palace(800, 520, 1.2, { color: "#d9d2c2", dome: true, w: 640 });
    s.ground(520, "#2a2c34");
    for (let i = 0; i < 10; i++) s.person(400 + i * 80, 560, 40, { color: "#3a4a3a", helmet: true });
    s.add('<g stroke="#1a1a1a" stroke-width="5">' + Array.from({ length: 40 }, (_, i) => `<line x1="${i * 40}" y1="720" x2="${i * 40}" y2="560"/>`).join("") + '<line x1="0" y1="580" x2="1600" y2="580"/></g>');
    s.crowd({ y: 860, rows: 2, h: 200, gap: 70, rowGap: 40, colors: ["#14161c", "#1e2028", "#2a2c34"] });
    for (let i = 0; i < 30; i++) s.add(`<circle cx="${s.r() * 1600}" cy="${560 + s.r() * 120}" r="4" fill="#fff8e0"/>`);
    return s.fog(700, { h: 100, color: "#c0c8d4", opacity: 0.2 });
  },
  // A shipyard at dusk: a huge half-built hull in dry dock, towering yellow gantry cranes, welding sparks.
  "kr-6": (s) => {
    s.sky("dusk");
    s.add('<g fill="#d9b23c"><rect x="120" y="140" width="44" height="560"/><rect x="1440" y="140" width="44" height="560"/><rect x="80" y="110" width="1440" height="56"/></g>');
    s.add('<path d="M240,700 L240,420 L1340,420 L1260,700 Z" fill="#5a5e66"/><path d="M240,420 L1340,420 L1330,400 L250,400 Z" fill="#7a3a3a"/>');
    for (let i = 0; i < 6; i++) { const x = 400 + i * 160, y = 460 + (i % 3) * 60; s.glow(x, y, 50, "#ffe2a6", 0.9); for (let k = 0; k < 8; k++) s.add(`<line x1="${x}" y1="${y}" x2="${x + s.r() * 40 - 20}" y2="${y + s.r() * 40}" stroke="#ffe9a0" stroke-width="2"/>`); s.person(x + 20, y + 30, 20, { hat: "hard" }); }
    return s.rect(0, 700, 1600, 200, "#4a4a4c");
  },
  // A subway exit at evening, commuters walking past a row of blank campaign posters, neon, apartment towers.
  "kr-7": (s) => {
    s.sky("dusk");
    for (let i = 0; i < 6; i++) s.building(i * 280, 520, 200, 320 + (i % 2) * 60, { color: "#8a8a92", lit: true, cell: 16 });
    s.ground(520, "#5a5a60");
    for (let i = 0; i < 8; i++) s.rect(60 + i * 190, 260 + (i % 3) * 60, 120, 40, s.r.pick(["#e86aa8", "#5fd0e8", "#e8c42c", "#5fcf7a"]), 'opacity="0.8"');
    s.rect(100, 540, 1400, 160, "#7a7a76");
    for (let i = 0; i < 12; i++) s.rect(130 + i * 112, 560, 90, 120, "#efe9dc");
    s.rect(1200, 600, 300, 160, "#3a4a5a").rect(1220, 640, 260, 120, "#1e2228");
    return s.crowd({ y: 860, rows: 2, h: 150, gap: 70, rowGap: 30, walk: true, colors: ["#1e2026", "#2a2c34", "#4a4040", "#3a4a5a"] });
  },
  // Glass corporate skyscrapers in a dense city at night, light trails and neon below, a river reflecting lights.
  "kr-12": (s) => {
    s.sky("night", { stars: 10 });
    s.city({ y: 560, style: "towers", h: [160, 320], depth: 0.2, lit: true, color: "#2a3448" });
    [[600, 520], [780, 600], [960, 480]].forEach(([x, h]) => s.tower(x, 560, 90, h, { color: "#3a4a64", lit: true }));
    for (let i = 0; i < 4; i++) s.add(`<path d="M-40,${590 + i * 14} L1640,${600 + i * 14}" stroke="${i % 2 ? "#ffe2a6" : "#e86a4a"}" stroke-width="3" opacity="0.8"/>`);
    s.sea(650, { color: "#141c2c" });
    for (let i = 0; i < 80; i++) s.add(`<rect x="${s.r() * 1600}" y="${660 + s.r() * 240}" width="${10 + s.r() * 30}" height="3" fill="${s.r.pick(["#ffd38a", "#e86aa8", "#5fd0e8"])}" opacity="0.5"/>`);
    return s;
  },
  // A guard post on a green hill over a wide valley, double barbed-wire fences, misty mountains, autumn colours.
  "kr-8": (s) => {
    s.sky("overcast", { bottom: "#d9d6cc" });
    s.mountains({ y: 400, amp: 200, color: "#7a8a8a", depth: 0.6, jag: false }).fog(420, { h: 80 });
    s.hills({ y: 520, amp: 120, color: "#8a7a4a", depth: 0.3 });
    s.add('<path d="M-40,560 Q600,500 1640,540" stroke="#3a3a38" stroke-width="2" fill="none"/><path d="M-40,600 Q600,540 1640,580" stroke="#3a3a38" stroke-width="2" fill="none"/>');
    for (let x = 0; x < 1600; x += 50) s.add(`<line x1="${x}" y1="${560 - x * 0.012}" x2="${x}" y2="${520 - x * 0.012}" stroke="#3a3a38" stroke-width="2"/>`);
    s.hills({ y: 760, amp: 220, color: "#5f7a44", peak: 300, peakW: 500 });
    s.rect(220, 470, 140, 80, "#6a6a5a").rect(210, 460, 160, 16, "#4a4a40").rect(240, 490, 100, 20, "#2a2a2a");
    return s.forest({ y: 860, x0: 900, x1: 1640, type: "autumn", s: 1.4, gap: 60, color: "#c9763c" });
  },
};
