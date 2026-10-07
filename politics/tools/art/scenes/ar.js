/* Argentina */
const casaRosada = (s, x, y, k, o) => {
  o = o || {};
  s.palace(x, y, k, { color: "#e0a8a0", w: 700, h: 160, cols: 8, depth: o.depth });
  s.rect(x - 60 * k, y - 230 * k, 120 * k, 70 * k, s.c("#e0a8a0", o.depth || 0));
  if (o.balcony) { s.rect(x - 50 * k, y - 120 * k, 100 * k, 50 * k, "#ffd38a"); s.glow(x, y - 100 * k, 80 * k, "#ffd38a", 0.6); }
};
const plaza = (s, y) => { s.forest({ y: y + 40, x0: -40, x1: 300, type: "palm", s: 1.6, gap: 120 }).forest({ y: y + 40, x0: 1300, x1: 1640, type: "palm", s: 1.6, gap: 120 }); };
module.exports = {
  // A whitewashed colonial town hall with a long row of arches and a bell tower, a crowd with umbrellas in light rain.
  "ar-9": (s) => {
    s.sky("overcast", { top: "#8a929a" });
    s.rect(300, 300, 1000, 240, "#f2efe8");
    for (let r = 0; r < 2; r++) for (let i = 0; i < 11; i++) s.add(`<path d="M${330 + i * 88},${(r ? 540 : 420)} L${330 + i * 88},${(r ? 470 : 360)} A30,30 0 0 1 ${390 + i * 88},${(r ? 470 : 360)} L${390 + i * 88},${(r ? 540 : 420)} Z" fill="#6a6a62"/>`);
    s.rect(740, 160, 120, 140, "#f2efe8").dome(800, 160, 50, { color: "#d9d2c2" });
    s.ground(540, "#8a847a");
    s.crowd({ y: 620, rows: 6, h: 60, gap: 22, rowGap: 46, umbrellas: ["#2a2a2e", "#4a3a3a", "#3a4a5a"], colors: ["#2a2a2e", "#3a3432", "#4a4040"] });
    return s.rain({ count: 160 });
  },
  // A pink neoclassical palace on a plaza with palms and a small white pyramid monument, painted white headscarves.
  "ar-3": (s) => {
    s.sky("golden");
    casaRosada(s, 800, 500, 1);
    s.ground(500, "#c9c0ae");
    plaza(s, 500);
    s.poly([[760, 640], [840, 640], [800, 560]], "#f4f1ea").rect(770, 640, 60, 20, "#e8e2d2");
    for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2, x = 800 + Math.cos(a) * 340, y = 700 + Math.sin(a) * 110; s.add(`<path d="M${x - 18},${y + 6} Q${x},${y - 20} ${x + 18},${y + 6} Q${x},${y - 4} ${x - 18},${y + 6} Z" fill="#f8f6f0"/>`); }
    return s.birds(800, 400, 10, { color: "#5a5a5a" });
  },
  // A huge crowd of 1940s workers at night facing a pink palace with a lit balcony, some with feet in a fountain.
  "ar-10": (s) => {
    s.sky("night", { stars: 20 });
    casaRosada(s, 800, 440, 0.9, { balcony: true });
    s.ground(440, "#3a3434");
    s.add('<ellipse cx="400" cy="760" rx="200" ry="40" fill="#4a5a6a"/><ellipse cx="400" cy="752" rx="180" ry="30" fill="#7a9ab0"/>');
    s.crowd({ y: 500, rows: 10, h: 40, gap: 10, rowGap: 38, colors: ["#e8e2d2", "#d9d2c2", "#3a3432", "#5a4a3c"] });
    return s.lamps(100, 1500, 520, 120, { gap: 280 });
  },
  // Older women in white headscarves walking slowly in a circle round a white obelisk-like monument, palms.
  "ar-11": (s) => {
    s.sky("afternoon");
    casaRosada(s, 800, 420, 0.6, { depth: 0.35 });
    s.ground(420, "#c9c0ae");
    plaza(s, 420);
    s.poly([[770, 640], [830, 640], [812, 440], [800, 420], [788, 440]], "#f4f1ea").rect(750, 640, 100, 20, "#e8e2d2");
    for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2, x = 800 + Math.cos(a) * 340, y = 700 + Math.sin(a) * 110, h = 90 + Math.sin(a) * 20; s.person(x, y, h, { color: s.r.pick(["#3a3432", "#4a4a54", "#5a4a44"]), walk: true }); s.add(`<path d="M${x - h * 0.16},${y - h * 0.86} Q${x},${y - h * 1.04} ${x + h * 0.16},${y - h * 0.86} L${x + h * 0.18},${y - h * 0.72} L${x - h * 0.18},${y - h * 0.72} Z" fill="#f8f6f0"/>`); }
    return s;
  },
  // A red chainsaw on an old wooden government desk piled with files, a green banker's lamp, a dim tall office.
  "ar-4": (s) => {
    s.mood("interior", { light: "#ffd38a" });
    s.rect(0, 0, 1600, 900, "#3a3028");
    for (let x = 0; x < 1600; x += 200) s.rect(x, 0, 6, 560, "#2e2620");
    s.rect(100, 120, 300, 440, "#4a3e34").glow(800, 400, 600, "#ffd38a", 0.15);
    s.rect(200, 560, 1200, 40, "#6a4a30").rect(240, 600, 1120, 300, "#5a3e28");
    for (let i = 0; i < 4; i++) for (let k = 0; k < 6 + i; k++) s.rect(260 + i * 90, 560 - (k + 1) * 14, 80, 13, s.r.pick(["#d9cdb0", "#c9b48e", "#e2d6bc", "#8a6a4a"]));
    s.desk(1100, 560, 0, { lampAt: 1180 });
    s.add('<g><rect x="600" y="470" width="220" height="80" rx="16" fill="#c4322a"/><rect x="640" y="440" width="80" height="34" rx="8" fill="#2a2a2a"/><path d="M820,500 L1060,480 Q1090,490 1060,512 L820,530 Z" fill="#9aa0a4"/><path d="M830,486 L1060,470" stroke="#3a3a3a" stroke-width="4" stroke-dasharray="8 4"/></g>');
    return s;
  },
  // A small grocery counter: shelves of pasta, yerba mate and tins, handwritten price cards crossed out, a calculator.
  "ar-5": (s) => {
    s.mood("afternoon", { light: "#ffe2a6" });
    s.rect(0, 0, 1600, 900, "#c9b08a");
    for (let r = 0; r < 4; r++) { s.rect(100, 120 + r * 120, 1400, 12, "#6a4a30"); for (let i = 0; i < 26; i++) { const x = 120 + i * 52, c = s.r.pick(["#e8c42c", "#3f6a3a", "#c4322a", "#3f6aa8", "#e8e2d2", "#b87a3a"]); s.rect(x, 120 + r * 120 - 80, 40, 80, c); } for (let i = 0; i < 5; i++) { const x = 160 + i * 280; s.rect(x, 136 + r * 120, 70, 34, "#f8f4e8"); s.add(`<path d="M${x + 8},${150 + r * 120} q20,-8 50,2 M${x + 6},${144 + r * 120} L${x + 60},${164 + r * 120}" stroke="#2a2a5a" stroke-width="2" fill="none"/>`); } }
    s.rect(0, 620, 1600, 280, "#7a5034").rect(0, 600, 1600, 30, "#9a6a44");
    return s.rect(980, 540, 120, 70, "#3a3a3a").rect(992, 550, 96, 20, "#a8c4a0").rect(300, 500, 200, 110, "#3a3e44");
  },
  // A street at night with a glowing currency board on an old stone building, panels blank, a figure in a coat passing.
  "ar-6": (s) => {
    s.sky("night", { stars: 0 });
    s.rect(200, 0, 1200, 640, "#5a5450");
    for (let r = 0; r < 3; r++) for (let i = 0; i < 8; i++) s.rect(260 + i * 140, 40 + r * 120, 50, 80, "#3a3430");
    s.rect(520, 380, 560, 200, "#141618").glow(800, 480, 400, "#e86a4a", 0.3);
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) s.rect(560 + c * 170, 400 + r * 44, 140, 32, r % 2 ? "#e86a4a" : "#5fcf7a", 'opacity="0.85"');
    s.rect(0, 640, 1600, 260, "#2a2a2e");
    s.add('<rect x="520" y="660" width="560" height="200" fill="#e86a4a" opacity="0.12"/>');
    return s.person(980, 860, 220, { color: "#141416", coat: true, walk: true });
  },
  // A huge union march on a very wide avenue, plain blue-and-white banners, bass drums, a white obelisk, flare smoke.
  "ar-7": (s) => {
    s.sky("day", { clouds: 3 });
    s.poly([[770, 500], [830, 500], [812, 120], [800, 90], [788, 120]], "#f4f1ea");
    s.city({ y: 500, x0: -20, x1: 600, h: [140, 260], depth: 0.3, lit: false }).city({ y: 500, x0: 1000, x1: 1620, h: [140, 260], depth: 0.3, lit: false });
    s.ground(500, "#7a7670");
    s.crowd({ y: 560, rows: 9, h: 40, gap: 11, rowGap: 38, colors: ["#2a2a2e", "#3a3a40", "#4a4040", "#5a5a6a"] });
    for (let i = 0; i < 5; i++) { const x = 100 + i * 300, y = 520 + i * 40; s.rect(x, y, 220, 50, i % 2 ? "#f8f6f0" : "#7aa6d8"); }
    for (let i = 0; i < 4; i++) s.add(`<circle cx="${300 + i * 330}" cy="${800}" r="40" fill="#e8e2d2" stroke="#3a3a3a" stroke-width="5"/>`);
    return s.smoke(300, 560, { len: 300, rise: 1.5, w: 50, color: "#e88a8a" }).smoke(1300, 600, { len: 300, rise: 1.5, w: 50, color: "#9ab8e8", dir: -1 });
  },
  // A memorial wall on a narrow street with rows of small blank plaques and fresh flowers, a few people in silence.
  "ar-12": (s) => {
    s.sky("winter");
    s.street3d({ vanish: [1000, 440], depth: 3, left: 300, right: 1400, hmin: 400, hmax: 500, colors: ["#9a948a", "#8a847a"], road: "#7a766e", lit: false, only: "right" });
    s.persp({ vanish: [1000, 440], depth: 3 });
    s.quad("wallX", [300, 200, 900, 1, 6], "#8a8478");
    for (let z = 1.05; z < 4; z *= 1.1) for (let r = 0; r < 3; r++) s.quad("wallX", [300, 500 + r * 60, 540 + r * 60, z, z * 1.05], "#d9d2c2");
    for (let i = 0; i < 30; i++) { const z = 1.1 + s.r() * 2.5, p = s.pp(320, 890, z); s.add(`<circle cx="${p[0] + 10 / z}" cy="${p[1] - 10 / z}" r="${12 / z}" fill="${s.r.pick(["#f8f6f0", "#e86a8a", "#e8c42c"])}"/>`); }
    s.forest({ y: 460, x0: 900, x1: 1100, type: "bare", s: 0.8, gap: 50 });
    [[700, 1.8], [780, 2.0], [900, 2.4]].forEach(([X, z]) => s.figure3d(X, z, { h: 300, color: "#2a2c34", coat: true }));
    return s;
  },
  // A tall oil drilling rig in a dry Patagonian desert of red rock and grey scrub, snowy Andes on the horizon.
  "ar-8": (s) => {
    s.sky("day", { top: "#3f7ab8", bottom: "#d0e0ec" });
    s.mountains({ y: 480, amp: 160, color: "#8a8a9a", depth: 0.5, snow: 0.5 });
    s.ridge({ y: 560, amp: 60, color: "#a8603a", jag: true, step: 30 });
    s.ground(560, "#b8906a");
    for (let i = 0; i < 50; i++) s.add(`<ellipse cx="${s.r() * 1600}" cy="${580 + s.r() * 320}" rx="${10 + s.r() * 18}" ry="7" fill="#8a8a7a"/>`);
    s.add('<g stroke="#4a4e54" stroke-width="6" fill="none"><path d="M960,700 L1040,240 L1120,700"/><path d="M980,580 L1100,580 M1000,460 L1080,460 M1020,340 L1060,340 M980,580 L1080,460 M1000,460 L1060,340"/></g><rect x="900" y="690" width="280" height="30" fill="#5a5e64"/><rect x="1180" y="650" width="120" height="70" fill="#c9a42c"/>');
    return s.add('<polygon points="900,720 1300,720 1600,800 1100,800" fill="#6a4a30" opacity="0.25"/>');
  },
};
