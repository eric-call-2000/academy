/* China */
module.exports = {
  // A huge container port at night seen from a hill, gantry cranes lit, a ship waiting offshore.
  "cn-5": (s) => {
    s.sky("night", { moon: [1260, 170], r: 30, stars: 60 })
      .ridge({ y: 470, amp: 50, color: "#2b3445", depth: 0.4, x0: 900 })
      .sea(470, { glint: 1260, lines: 50 })
      .ship("container", 1200, 500, { s: 0.38, depth: 0.5, dir: -1 });
    s.rect(0, 520, 1600, 380, "#2a2f38");
    s.glow(700, 560, 700, "#ffb25a", 0.28);
    for (let i = 0; i < 9; i++) s.crane(120 + i * 150, 560, 0.75, { color: "#b9663f" });
    s.containers(20, 640, 32, 4, { w: 48, h: 22 });
    s.containers(60, 720, 30, 3, { w: 50, h: 24 });
    s.ground(760, "#33302c");
    s.forest({ y: 790, type: "oak", s: 0.9, gap: 30, color: "#1f2826" });
    s.ridge({ y: 900, amp: 110, color: "#161c1f", step: 120 });
    return s;
  },
  // A vast red imperial gate tower with golden roofs above a huge empty stone square, autumn morning.
  "cn-9": (s) => s
    .sky("morning", { sun: [1350, 200], r: 36, clouds: 3 })
    .gateTower(800, 520, 1.15)
    .ground(520, "#b7b0a2")
    .add(Array.from({ length: 12 }, (_, i) => `<line x1="${-400 + i * 220}" y1="900" x2="${800 + (-400 + i * 220 - 800) * 0.05}" y2="520" stroke="#a39c8f" stroke-width="2" opacity="0.6"/>`).join(""))
    .add(Array.from({ length: 8 }, (_, i) => { const y = 530 + Math.pow(i / 8, 1.8) * 370; return `<line x1="0" y1="${y.toFixed(1)}" x2="1600" y2="${y.toFixed(1)}" stroke="#a39c8f" stroke-width="2" opacity="0.5"/>`; }).join(""))
    .person(620, 600, 26).person(660, 604, 24).person(1040, 590, 22)
    .tree("autumn", 120, 560, { s: 1.4, depth: 0.2 }).tree("autumn", 1490, 560, { s: 1.5, depth: 0.2 }),
  // A vast empty city square at dawn, a long red gatehouse far off, pigeons rising, puddles.
  "cn-3": (s) => s
    .sky("overcast", { bottom: "#e2d6c4" })
    .gateTower(800, 470, 0.55, { depth: 0.35 })
    .ground(470, "#9d978d")
    .add([[300, 640, 260], [900, 720, 340], [1300, 600, 180], [500, 820, 300]].map(([x, y, w]) => `<ellipse cx="${x}" cy="${y}" rx="${w}" ry="${w * 0.08}" fill="#d9d6cf" opacity="0.55"/>`).join(""))
    .birds(900, 320, 26, { color: "#4a4a4a" })
    .birds(700, 400, 14, { color: "#4a4a4a" }),
  // A bare rural village at dusk, a row of crude clay backyard furnaces glowing, smoke, empty fields.
  "cn-10": (s) => {
    s.sky("dusk", { sun: [300, 440], r: 34 })
      .ground(470, "#7a6a54")
      .field(470, 900, { color: "#7f6c52", dark: true })
      .forest({ y: 470, type: "bare", s: 0.6, gap: 60, depth: 0.4 })
      .house(1050, 520, 140, 70, { color: "#8a7a64", roofColor: "#5a4a3c", depth: 0.3 })
      .house(1220, 525, 110, 60, { color: "#8a7a64", roofColor: "#5a4a3c", depth: 0.3 });
    [[260, 760, 1.1], [520, 700, 0.9], [760, 650, 0.75], [960, 610, 0.6], [1130, 585, 0.5]].forEach(([x, y, k]) => {
      s.poly([[x - 50 * k, y], [x + 50 * k, y], [x + 26 * k, y - 140 * k], [x - 26 * k, y - 140 * k]], "#8a5e44");
      s.glow(x, y - 40 * k, 120 * k, "#ff8a3c", 0.7);
      s.rect(x - 16 * k, y - 50 * k, 32 * k, 30 * k, "#f6a24a");
      s.smoke(x, y - 140 * k, { len: 260 * k, dir: 1, w: 30 * k });
    });
    s.person(1380, 560, 30, { depth: 0.3 }).person(1420, 562, 28, { depth: 0.3, bundle: "#6a5a48" });
    return s;
  },
  // A very wide empty avenue at night under orange streetlights, abandoned bicycles, leaflets blowing.
  "cn-11": (s) => {
    s.sky("night", { stars: 20 });
    s.street3d({ vanish: [800, 430], depth: 5, left: -500, right: 2100, hmin: 500, hmax: 900, road: "#3a3936", lines: true, lit: false, colors: ["#3a3e48", "#43454c", "#363a40"] });
    for (let z = 1.3; z < 9; z *= 1.3) [150, 1450].forEach((X) => { const a = s.pp(X, 900, z), b = s.pp(X, 300, z); s.add(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#2a2a2c" stroke-width="${6 / z}"/>`); s.glow(b[0], b[1], 120 / z, "#ffa94d", 0.6); s.glow(a[0], a[1], 200 / z, "#ffa94d", 0.15); });
    for (let i = 0; i < 7; i++) s.bicycle(220 + i * 52, 860 - i * 6, 1.6 - i * 0.05, { color: "#1e2022" });
    for (let i = 0; i < 40; i++) { const x = s.r() * 1600, y = 560 + s.r() * 340, w = 6 + (y - 560) / 18; s.add(`<rect x="${x}" y="${y}" width="${w}" height="${w * 0.7}" fill="#e9e2d0" opacity="0.8" transform="rotate(${s.r() * 60 - 30},${x},${y})"/>`); }
    return s;
  },
  // A vast empty conference hall: rows of red-draped tables, white teacups, a ceiling of lights, one attendant.
  "cn-4": (s) => {
    s.mood("interior", { light: "#fff1d0" });
    s.room3d({ depth: 3.4, wall: "#c9b48e", side: "#b8a27e", floor: "#7a3a30", ceiling: "#d9ccb0", lights: "grid", carpet: "#8f3f34" });
    for (let i = 6; i >= 0; i--) {
      const z = 1.25 + i * 0.3;
      [[120, 740], [860, 1480]].forEach(([a, b]) => {
        s.box3d(a, b, 680, 760, z, z + 0.08, "#9c2f28", { top: "#b8382e" });
        for (let X = a + 40; X < b; X += 70) { const p = s.pp(X, 680, z + 0.04); s.add(`<rect x="${p[0] - 7 / z}" y="${p[1] - 14 / z}" width="${14 / z}" height="${14 / z}" rx="${3 / z}" fill="#f6f3ec"/>`); }
      });
    }
    s.figure3d(1240, 3.0, { h: 420, color: "#2a2a30" });
    return s;
  },
  // Unfinished concrete apartment towers at dusk with idle cranes; a bright new car factory in front.
  "cn-6": (s) => {
    s.sky("dusk", { sun: [1400, 420], r: 30 });
    for (let i = 0; i < 9; i++) s.building(60 + i * 170, 520, 120, 260 + (i % 3) * 50, { color: "#8f8c86", depth: 0.35, lit: false });
    s.towerCrane(380, 520, 1, { depth: 0.3 }).towerCrane(1100, 520, 0.9, { depth: 0.35 });
    s.ground(520, "#5d5b56");
    s.rect(100, 560, 1400, 240, "#d9dcdc").rect(100, 560, 1400, 20, "#b8bcbc");
    s.glow(800, 700, 700, "#ffffff", 0.35);
    s.rect(160, 620, 1280, 150, "#f4f6f4");
    for (let i = 0; i < 9; i++) s.vehicle("car", 240 + i * 140, 760, { s: 1.1, color: ["#3f6a8a", "#e8e8e4", "#5a6a6e", "#8a2a2a"][i % 4] });
    s.rect(0, 800, 1600, 100, "#4a4a48");
    return s;
  },
  // Grey warships in line on a hazy calm sea at dawn, seen from a rocky coast, a patrol plane overhead.
  "cn-7": (s) => s
    .sky("haze", { top: "#a8b2bc", bottom: "#dcdcd4" })
    .sea(500, { color: "#7f8f9a" })
    .ship("warship", 1360, 520, { s: 0.35, depth: 0.6, dir: -1 })
    .ship("warship", 1060, 540, { s: 0.45, depth: 0.5, dir: -1 })
    .ship("frigate", 720, 565, { s: 0.6, depth: 0.4, dir: -1 })
    .ship("warship", 340, 600, { s: 0.75, depth: 0.3, dir: -1 })
    .plane("cargo", 700, 220, { s: 0.5, color: "#5a6068" })
    .ridge({ y: 900, amp: 220, color: "#4f4a46", x1: 600, jag: true, step: 50, taper: 300 }),
  // A high plateau, a white-walled monastery with dark red trim on a hillside, prayer flags, snow peaks.
  "cn-12": (s) => s
    .sky("day", { top: "#3f6fa8", bottom: "#c9d9e6" })
    .mountains({ y: 470, amp: 260, color: "#8a8a92", depth: 0.5, snow: 0.45 })
    .hills({ y: 640, amp: 160, color: "#9a8f6a", depth: 0.2, peak: 900, peakW: 500 })
    .monastery(900, 520, 0.9)
    .ground(720, "#8f8a62")
    .bunting(80, 560, 640, 640, { sag: 60, count: 26 })
    .bunting(120, 620, 700, 720, { sag: 50, count: 24 })
    .stupa(300, 760, 0.9),
  // A modern coastal skyline at dusk across a calm bay, glass towers catching the last light, ferries.
  "cn-8": (s) => s
    .sky("dusk", { sun: [1300, 360], r: 36 })
    .mountains({ y: 470, amp: 200, color: "#5a5a72", depth: 0.55, jag: false, step: 90 })
    .city({ y: 520, style: "towers", h: [90, 300], depth: 0.25, lit: true, color: "#6f7a8c" })
    .sea(520, { glint: 1300 })
    .ship("ferry", 400, 640, { s: 0.45, dir: 1, wake: true })
    .ship("ferry", 1100, 720, { s: 0.6, dir: -1, wake: true }),
};
