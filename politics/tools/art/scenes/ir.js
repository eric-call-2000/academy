/* Iran */
const azadi = (s, x, y, k, o) => {
  o = o || {};
  const c = s.c("#ece6d8", o.depth);
  s.add(`<path d="M${x - 150 * k},${y} C${x - 120 * k},${y - 200 * k} ${x - 60 * k},${y - 380 * k} ${x - 40 * k},${y - 420 * k} L${x + 40 * k},${y - 420 * k} C${x + 60 * k},${y - 380 * k} ${x + 120 * k},${y - 200 * k} ${x + 150 * k},${y} L${x + 80 * k},${y} C${x + 60 * k},${y - 120 * k} ${x + 20 * k},${y - 180 * k} ${x},${y - 190 * k} C${x - 20 * k},${y - 180 * k} ${x - 60 * k},${y - 120 * k} ${x - 80 * k},${y} Z" fill="${c}"/>`);
  s.rect(x - 46 * k, y - 450 * k, 92 * k, 34 * k, c);
};
module.exports = {
  // Tankers in convoy through the Strait of Hormuz at dusk, a warship on the horizon.
  "ir-7": (s) => s
    .sky("dusk", { sun: [1180, 380], r: 46, clouds: 5, cloudY: [120, 300] })
    .mountains({ y: 520, amp: 150, color: "arid", depth: 0.75, x1: 700 })
    .mountains({ y: 540, amp: 110, color: "arid", depth: 0.55, x0: 1050 })
    .ridge({ y: 560, amp: 70, color: "#7a5c4a", depth: 0.35, jag: true, x1: 520 })
    .sea(540, { glint: 1180 })
    .ship("warship", 1380, 546, { s: 0.4, depth: 0.45, dir: -1, reflect: false })
    .ship("tanker", 980, 590, { s: 0.55, depth: 0.45, wake: true })
    .ship("tanker", 560, 650, { s: 0.85, depth: 0.25, wake: true })
    .ship("tanker", 260, 770, { s: 1.15, wake: true })
    .birds(820, 230, 5),
  // A vast crowd filling a boulevard toward a tall white inverted-Y arch, grey winter sky, faint snowy mountains.
  "ir-9": (s) => {
    s.sky("overcast");
    s.mountains({ y: 420, amp: 160, color: "#9a9aa2", depth: 0.6, snow: 0.5 });
    azadi(s, 800, 470, 0.75);
    s.ground(470, "#8a8a86");
    return s.crowd({ y: 500, rows: 12, h: 26, gap: 7, rowGap: 34, colors: ["#2a2a2e", "#3a3634", "#1e2026", "#4a4440"] });
  },
  // A vast crowd on a wide avenue seen from high above in late-1970s film colours, a white arch far off.
  "ir-3": (s) => {
    s.sky("haze", { top: "#b8a888", bottom: "#d9c8a8" });
    s.mountains({ y: 300, amp: 120, color: "#9a9088", depth: 0.6, snow: 0.5 });
    azadi(s, 800, 330, 0.35, { depth: 0.2 });
    s.ground(330, "#8a7a62");
    s.persp({ vanish: [800, 300], depth: 20 });
    s.quad("floor", [300, 1300, 900, 1, 60], "#6a5e4e");
    for (let i = 0; i < 1600; i++) { const z = 1 + Math.pow(s.r(), 1.6) * 16, X = 320 + s.r() * 960, p = s.pp(X, 900, z); s.add(`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${(9 / z + 0.6).toFixed(1)}" fill="${s.r.pick(["#2a2420", "#3a3028", "#4a3a2e", "#1e1a18", "#6a5a4a"])}"/>`); }
    s.city({ y: 900, x0: -20, x1: 280, h: [300, 500], depth: 0.1, lit: false, color: "#9a8a72" });
    return s.city({ y: 900, x0: 1320, x1: 1620, h: [300, 500], depth: 0.1, lit: false, color: "#9a8a72" });
  },
  // A mid-century oil refinery by a wide river at dusk, towers, pipes and tanks, orange flares, palms.
  "ir-10": (s) => s
    .sky("dusk", { sun: [300, 420], r: 36 })
    .refinery(900, 520, 1.2, { lit: true })
    .flare(1400, 360, 1)
    .forest({ y: 520, type: "palm", s: 0.6, gap: 60, x0: -20, x1: 400 })
    .ground(520, "#5a5048")
    .sea(560, { glint: 300, color: "#5a5a6a" }),
  // A marshland battlefield: muddy trenches, coils of wire, burned palm trunks, hazy orange sky, distant smoke.
  "ir-11": (s) => {
    s.sky("haze", { top: "#a8805a", bottom: "#e0b07a" });
    s.smoke(1200, 460, { len: 400, dark: true, w: 60, rise: 1.6 });
    s.ground(480, "#6a5e48");
    s.sea(480, { color: "#8a7a5a", lines: 30 });
    s.rect(0, 560, 1600, 340, "#5a4e3a");
    s.add('<path d="M-20,680 Q400,640 800,700 T1640,660" stroke="#3a3024" stroke-width="40" fill="none"/>');
    for (let i = 0; i < 9; i++) { const x = 100 + i * 170, h = 120 + (i % 3) * 60; s.add(`<path d="M${x},${560 + (i % 2) * 40} L${x + 6},${560 + (i % 2) * 40 - h}" stroke="#2a2420" stroke-width="10"/>`); }
    return s.add('<g fill="none" stroke="#2a2420" stroke-width="2">' + Array.from({ length: 50 }, (_, i) => `<circle cx="${i * 34}" cy="780" r="22"/>`).join("") + "</g>");
  },
  // A wide boulevard at night almost empty: shuttered shops, a few cars, plane trees, dark mountains, sodium lights.
  "ir-4": (s) => {
    s.sky("night", { stars: 20 });
    s.mountains({ y: 380, amp: 200, color: "#1e2230", depth: 0.2, jag: false });
    s.street3d({ vanish: [800, 440], depth: 5, left: 160, right: 1440, hmin: 320, hmax: 520, colors: ["#4a4640", "#3e3a36"], shops: true, shopColor: "#5a5a58", road: "#2e2c2a", lit: true, lamps: true, lines: true });
    s.persp({ vanish: [800, 440], depth: 5 });
    [[620, 1.8], [980, 3]].forEach(([X, z]) => { const p = s.pp(X, 900, z); s.vehicle("car", p[0], p[1], { s: 2 / z, color: "#2a2a2e" }); s.glow(p[0] + 40 / z, p[1] - 20 / z, 60 / z, "#fff4d0", 0.8); });
    return s;
  },
  // A reinforced tunnel entrance in a barren mountainside, partly collapsed and dusty, craters above, a damaged road.
  "ir-5": (s) => {
    s.sky("desert", { top: "#9ab0c4", bottom: "#efe0c4" });
    s.mountains({ y: 640, amp: 420, color: "#a8885e", depth: 0.1, jag: false, peak: 800, peakW: 700 });
    s.add('<path d="M680,640 L680,520 A120,110 0 0 1 920,520 L920,640 Z" fill="#c9c2b2"/><path d="M710,640 L710,530 A90,84 0 0 1 890,530 L890,640 Z" fill="#2a2420"/>');
    s.ridge({ y: 640, amp: 70, color: "#c9b48e", x0: 700, x1: 900, jag: true, step: 20 });
    [[600, 360], [900, 300], [1040, 420]].forEach(([x, y]) => s.add(`<ellipse cx="${x}" cy="${y}" rx="60" ry="22" fill="#6a5440"/><ellipse cx="${x}" cy="${y - 4}" rx="70" ry="26" fill="none" stroke="#d9c8a8" stroke-width="6"/>`));
    s.ground(640, "#c9b08a");
    return s.add('<path d="M800,640 L760,900 M800,640 L1000,900" stroke="#8a7a62" stroke-width="10"/><path d="M820,700 L840,760 L800,790" stroke="#5a4a3a" stroke-width="4" fill="none"/>');
  },
  // A dark winter street at night, small fires and smoke, darkened apartment blocks, one streetlamp, snow.
  "ir-6": (s) => {
    s.sky("night", { stars: 10 });
    s.street3d({ vanish: [800, 460], depth: 4, left: 260, right: 1340, hmin: 500, hmax: 800, colors: ["#3a3e48", "#30343c"], road: "#d4d8dc", lit: false, pavementColor: "#c4c8cc" });
    [[700, 720, 40], [960, 640, 26], [520, 820, 50]].forEach(([x, y, w]) => s.fire(x, y, w));
    s.lamp(1180, 860, 360, { lit: true });
    return s.snowfall({ count: 80 });
  },
  // A young woman from behind, long dark uncovered hair, walking down a busy street at dusk, shop lights, mountains.
  "ir-12": (s) => {
    s.sky("dusk");
    s.mountains({ y: 380, amp: 160, color: "#6a6a80", depth: 0.5, snow: 0.6 });
    s.street3d({ vanish: [800, 460], depth: 5, left: 220, right: 1380, hmin: 400, hmax: 600, colors: ["#8a7a6a", "#7a6a5e"], shops: true, shopColor: "#ffd38a", road: "#4a4642", lit: true });
    s.persp({ vanish: [800, 460], depth: 5 });
    for (let i = 0; i < 14; i++) { const z = 2 + s.r() * 3, X = 400 + s.r() * 800, p = s.pp(X, 900, z); s.person(p[0], p[1], 360 / z, { color: s.r.pick(["#2a2a30", "#3a3030", "#2e3440"]) }); }
    const h = 220, top = 900 - h;
    s.person(780, 900, h, { color: "#2a2a34", walk: true });
    return s.add(`<path d="M${780 - h * 0.13},${top + h * 0.05} Q780,${top - h * 0.03} ${780 + h * 0.13},${top + h * 0.05} L${780 + h * 0.14},${top + h * 0.36} Q780,${top + h * 0.42} ${780 - h * 0.14},${top + h * 0.36} Z" fill="#141210"/>`);
  },
  // A long vaulted brick bazaar with skylights, half the shops shuttered, a few shoppers, dusty light, rugs and copper.
  "ir-8": (s) => {
    s.mood("interior", { light: "#ffe2a6" });
    s.room3d({ depth: 4, wall: "#b88a62", side: "#a87a54", floor: "#8a7258", ceiling: "#c49a70" });
    for (let z = 1.2; z < 4; z += 0.45) { const L = s.pp(0, 260, z), R = s.pp(1600, 260, z), T = s.pp(800, -120, z); s.add(`<path d="M${L[0]},${L[1]} Q${T[0]},${T[1]} ${R[0]},${R[1]}" stroke="#9a6a44" stroke-width="${22 / z}" fill="none"/>`); const p = s.pp(800, -20, z + 0.2); s.add(`<circle cx="${p[0]}" cy="${p[1]}" r="${30 / z}" fill="#fff6dc"/>`); s.beam(p[0], p[1], 90, { len: 900 / z, w: 40 / z, opacity: 0.12 }); }
    for (let z = 1.3; z < 4; z += 0.35) ["left", "right"].forEach((sd, j) => { const X = sd === "left" ? 0 : 1600, shut = s.r() < 0.5; s.quad("wallX", [X, 560, 900, z, z + 0.25], shut ? "#6a6a66" : "#4a2e22"); if (!shut) { s.quad("wallX", [X, 600, 820, z + 0.03, z + 0.12], s.r.pick(["#9a2a2a", "#3f4a7a", "#a8602c"])); const p = s.pp(sd === "left" ? 90 : 1510, 880, z + 0.18); s.add(`<ellipse cx="${p[0]}" cy="${p[1] - 20 / z}" rx="${22 / z}" ry="${20 / z}" fill="#b8703a"/>`); } else for (let k = 1; k < 6; k++) s.quad("wallX", [X, 560 + k * 56, 562 + k * 56, z, z + 0.25], "#4a4a48"); });
    for (let i = 0; i < 5; i++) s.figure3d(600 + s.r() * 400, 1.9 + s.r() * 1.6, { h: 380, color: s.r.pick(["#2a2a30", "#3a3030"]) });
    return s;
  },
};
