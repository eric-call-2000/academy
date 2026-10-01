/* Germany */
module.exports = {
  // A modest white modernist government building with big windows beside a tree-lined river, a small ferry.
  "de-9": (s) => s
    .sky("morning", { clouds: 3 })
    .forest({ y: 480, type: "oak", s: 0.8, gap: 30, depth: 0.4 })
    .building(420, 520, 760, 160, { color: "#eeeeea", cell: 30, lit: false })
    .add(Array.from({ length: 12 }, (_, i) => `<rect x="${440 + i * 62}" y="390" width="44" height="110" fill="#8fa6b4"/>`).join(""))
    .ground(520, "#7a9a62")
    .sea(560, { color: "#6f8aa0" })
    .ship("ferry", 1100, 640, { s: 0.35, dir: -1, wake: true })
    .forest({ y: 560, x0: -40, x1: 300, type: "oak", s: 1.2, gap: 50 }),
  // Jubilant crowds at night climbing a concrete wall covered in graffiti-like colour, a floodlit stone gate, fireworks.
  "de-3": (s) => {
    s.sky("night", { stars: 30 });
    s.glow(800, 400, 400, "#ffe2a6", 0.4);
    s.portico(800, 520, 1.2, { cols: 6, w: 460, h: 240, color: "#e6dcc4" });
    s.rect(560, 200, 480, 40, "#e6dcc4");
    [[300, 120, "#ffd38a"], [1240, 160, "#e86a8a"], [520, 90, "#9fd0ff"]].forEach(([x, y, c]) => { for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8; s.add(`<line x1="${x}" y1="${y}" x2="${x + Math.cos(a) * 60}" y2="${y + Math.sin(a) * 60}" stroke="${c}" stroke-width="3" opacity="0.8"/>`); } });
    s.ground(520, "#3a3a40");
    s.rect(0, 600, 1600, 140, "#b9b4aa");
    for (let i = 0; i < 30; i++) s.rect(s.r() * 1560, 610 + s.r() * 100, 30 + s.r() * 80, 10 + s.r() * 30, s.r.pick(["#c94a4a", "#3f6aa8", "#d9b23c", "#4f8a4f", "#8a4a9a"]), 'opacity="0.55"');
    s.crowd({ y: 600, rows: 1, h: 70, gap: 34, thin: 0.3, colors: ["#1e222c", "#2a2e38", "#3a2e2a"] });
    s.crowd({ y: 790, rows: 3, h: 80, gap: 22, rowGap: 40, colors: ["#1e222c", "#2a2e38", "#3a2e2a"] });
    for (let i = 0; i < 6; i++) s.add(`<circle cx="${s.r() * 1600}" cy="${700 + s.r() * 150}" r="5" fill="#ffffff"/>`);
    return s;
  },
  // A field of grey concrete slabs of different heights in a tight grid on undulating ground, at dusk.
  "de-10": (s) => {
    s.sky("dusk", { sun: [1300, 430], r: 30 });
    s.forest({ y: 460, x0: 1100, x1: 1640, type: "bare", s: 0.8, gap: 50, depth: 0.3 });
    s.ground(460, "#6a6662");
    s.persp({ vanish: [700, 400], depth: 8 });
    for (let k = 14; k >= 0; k--) {
      const z = 1.2 + k * 0.45;
      for (let j = -7; j <= 7; j++) {
        const X = 700 + j * 210, wave = Math.sin(j * 0.7 + k * 0.5) * 60, hgt = 120 + ((j * 7 + k * 13) % 9) * 50 + wave;
        s.box3d(X - 70, X + 70, 900 - hgt + wave, 900 + wave, z, z + 0.25, "#8a8784", { top: "#a8a5a0", side: "#6f6c69" });
      }
    }
    return s;
  },
  // A long concrete wall covered in faded abstract murals beside a river, a concrete watchtower, autumn trees.
  "de-11": (s) => {
    s.sky("afternoon", { clouds: 3 });
    s.city({ y: 440, h: [60, 180], depth: 0.6 });
    s.forest({ y: 470, type: "autumn", s: 0.8, gap: 40, depth: 0.3 });
    s.rect(1380, 280, 50, 190, "#a8a49c").rect(1360, 250, 90, 40, "#a8a49c");
    s.persp({ vanish: [1500, 470], depth: 6 });
    s.ground(470, "#8a8a7a");
    s.quad("floor", [-2000, 800, 900, 1, 40], "#6f8aa0");
    s.quad("wallX", [900, 470, 900, 1, 20], "#cfcac0");
    const cols = ["#c94a4a", "#3f6aa8", "#d9b23c", "#4f8a4f", "#8a4a9a", "#e07a3c"];
    for (let z = 1.05; z < 12; z *= 1.12) s.quad("wallX", [900, 520 + s.r() * 100, 760 + s.r() * 100, z, z * 1.08], s.r.pick(cols), 'opacity="0.55"');
    return s;
  },
  // A stone parliament with a modern glass dome at dusk, visitor silhouettes on a ramp inside, a wide lawn.
  "de-4": (s) => {
    s.sky("dusk", { top: "#5a6a8a", bottom: "#c9b0a0" });
    s.palace(800, 600, 1.6, { color: "#c9c0ae", w: 700, h: 170, cols: 6 });
    [400, 1200].forEach((x) => s.rect(x - 70, 300, 140, 300, "#c9c0ae"));
    s.glow(800, 260, 220, "#ffe2a6", 0.55);
    s.add('<path d="M640,330 C640,190 720,150 800,150 C880,150 960,190 960,330 Z" fill="#d9e6ee" opacity="0.75"/>');
    for (let i = 0; i < 5; i++) s.add(`<path d="M${660 + i * 8},${310 - i * 30} Q800,${290 - i * 30} ${940 - i * 8},${310 - i * 30}" stroke="#8a9aa6" stroke-width="3" fill="none"/>`);
    for (let i = 0; i < 12; i++) s.person(680 + i * 22, 300 - (i % 5) * 30, 14, { color: "#2a2e38" });
    return s.ground(600, "#4f6a44");
  },
  // A brightly lit factory hall: a row of olive-green armoured vehicles on a line, workers with tablets.
  "de-5": (s) => {
    s.mood("day", { light: "#ffffff" });
    s.room3d({ depth: 4, wall: "#c9ccce", side: "#b9bcbe", floor: "#8f9294", ceiling: "#a9acae", lights: "strips" });
    for (let z = 1.3; z < 4; z += 0.5) { const a = s.pp(0, 60, z), b = s.pp(1600, 60, z); s.add(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#6a6e72" stroke-width="${10 / z}"/>`); }
    s.quad("floor", [500, 1100, 899, 1, 4], "#d9b23c", 'opacity="0.2"');
    for (let i = 5; i >= 0; i--) { const z = 1.35 + i * 0.45, p = s.pp(800, 900, z); s.vehicle("apc", p[0], p[1], { s: 2.4 / z, color: "#5a6044" }); }
    [[380, 1.5], [1200, 1.7], [1300, 2.4]].forEach(([X, z]) => { s.figure3d(X, z + 0.4, { h: 340, color: "#3a4a6a" }); });
    return s;
  },
  // A quiet small-town square in autumn, a modest town hall, a few voters walking in, yellow plane trees.
  "de-6": (s) => {
    s.sky("overcast");
    s.house(160, 560, 200, 220, { color: "#d9c49a", roofColor: "#8a4a3c" }).house(1280, 560, 180, 200, { color: "#c9b0a0", roofColor: "#7a3a30" });
    s.building(1460, 560, 200, 240, { color: "#a8a49c", lit: false });
    s.building(560, 560, 480, 260, { color: "#e2d6bc", roof: "pitched", roofColor: "#7a4a3c", lit: false, cell: 30 });
    s.rect(760, 460, 80, 100, "#5a4a3c").rect(880, 470, 70, 90, "#efe9dc");
    s.ground(560, "#9a948a");
    [460, 1140].forEach((x) => s.tree("autumn", x, 640, { s: 1.6, color: "#d9b23c" }));
    s.person(720, 640, 60, { coat: true }).person(780, 620, 54, { coat: true, color: "#4a3a34" }).person(980, 700, 76, { coat: true, color: "#3a4a5a" });
    return s;
  },
  // A car factory at night from a distance: one hall lit warm, a half-empty car park, covered wagons, rain.
  "de-7": (s) => {
    s.sky("night", { stars: 0 });
    s.factory(200, 500, 500, 140, { chimneys: [420], depth: 0.2, smoke: false });
    s.factory(760, 500, 600, 160, { chimneys: [], depth: 0.2, lit: true });
    s.glow(1060, 420, 500, "#ffcf7a", 0.25);
    s.ground(500, "#2a2c30");
    s.railcars(-40, 1660, 580, { box: true, color: "#3a3e46" });
    s.lamps(160, 1500, 760, 150, { gap: 330, glow: "#ffa94d" });
    for (let i = 0; i < 14; i++) if (s.r() < 0.5) s.vehicle("car", 120 + i * 105, 820, { s: 0.8, color: s.r.pick(["#5a5e66", "#7a7e86", "#3a3e46"]) });
    return s.rain({ count: 220 });
  },
  // A railway station hall with an arched iron-and-glass roof, travellers with bags, volunteers at tables.
  "de-12": (s) => {
    s.mood("afternoon", { light: "#ffe9c4" });
    s.persp({ vanish: [800, 520], depth: 5 });
    s.rect(0, 0, 1600, 900, "#8a8478");
    for (let z = 5; z >= 1; z -= 0.25) { const L = s.pp(0, 900, z), R = s.pp(1600, 900, z), T = s.pp(800, -500, z); s.add(`<path d="M${L[0]},${L[1]} L${L[0]},${s.pp(0, 200, z)[1]} Q${T[0]},${T[1]} ${R[0]},${s.pp(1600, 200, z)[1]} L${R[0]},${R[1]}" stroke="#4a4640" stroke-width="${8 / z}" fill="none"/>`); }
    s.add('<path d="M560,560 Q800,240 1040,560 Z" fill="#f4ead6" opacity="0.8"/>');
    s.quad("floor", [-500, 2100, 900, 1, 20], "#a89e8e");
    s.box3d(160, 520, 720, 900, 1.3, 1.5, "#cfc4ae").box3d(1150, 1450, 720, 900, 1.4, 1.6, "#cfc4ae");
    for (let i = 0; i < 40; i++) { const z = 1.9 + Math.pow(s.r(), 1.4) * 3, X = 300 + s.r() * 1000; s.figure3d(X, z, { h: 340, color: s.r.pick(["#3a3e46", "#5a4a3c", "#4a5a6a", "#6a3a3a"]), bundle: s.r() < 0.4 ? "#3f5a4a" : null }); }
    return s;
  },
  // A river winding through terraced vineyards, a castle on a hilltop, a barge, half sun half storm.
  "de-8": (s) => s
    .sky("storm", { top: "#5a6068", bottom: "#d9c49a", clouds: 4, cloudColor: "#6a6e72" })
    .beam(300, 0, 70, { len: 900, w: 160, color: "#ffe2a6", opacity: 0.15 })
    .hills({ y: 520, amp: 260, color: "#8a7a44", depth: 0.25, peak: 1200, peakW: 400 })
    .add('<g>' + Array.from({ length: 14 }, (_, i) => `<path d="M${900 + i * 10},${300 + i * 16} L1600,${260 + i * 18}" stroke="#6a5a2c" stroke-width="2" opacity="0.5"/>`).join("") + "</g>")
    .rect(1140, 220, 120, 60, "#8a847a").rect(1180, 180, 40, 40, "#8a847a").rect(1240, 200, 30, 80, "#8a847a")
    .hills({ y: 640, amp: 200, color: "#b0703f", depth: 0.1, peak: 200, peakW: 500 })
    .river({ from: [900, 520], to: [1100, 900], w0: 60, w1: 600, bend: 200 })
    .ship("bulk", 1000, 700, { s: 0.35, reflect: false }),
};
