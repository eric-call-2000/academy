/* Turkey */
module.exports = {
  // A pale stone mausoleum with a square colonnade on a hilltop, a long avenue lined with stone lions.
  "tr-9": (s) => {
    s.sky("day", { top: "#4f86b8", bottom: "#d9e6ee" });
    s.city({ y: 470, h: [30, 80], depth: 0.6 });
    s.hills({ y: 470, amp: 60, color: "#9a9a7a", depth: 0.3, peak: 800, peakW: 700 });
    s.portico(800, 420, 1.1, { cols: 10, w: 560, h: 200, color: "#e6dfd0" });
    s.persp({ vanish: [800, 420], depth: 8 });
    s.ground(430, "#b8b0a0");
    s.quad("floor", [560, 1040, 900, 1, 30], "#d9d2c2");
    for (let z = 1.3; z < 9; z *= 1.22) [470, 1130].forEach((X) => { const p = s.pp(X, 900, z), k = 1 / z; s.add(`<g fill="#cfc6b2"><rect x="${p[0] - 50 * k}" y="${p[1] - 60 * k}" width="${100 * k}" height="${60 * k}"/><ellipse cx="${p[0]}" cy="${p[1] - 80 * k}" rx="${48 * k}" ry="${26 * k}"/><circle cx="${p[0] + (X < 800 ? 34 : -34) * k}" cy="${p[1] - 110 * k}" r="${22 * k}"/></g>`); });
    return s;
  },
  // Istanbul at dusk from across the strait: domes and slender minarets, a lit suspension bridge, ferries.
  "tr-3": (s) => {
    s.sky("dusk", { top: "#3f3a6a", bottom: "#e8b07a" });
    s.city({ y: 500, h: [40, 110], depth: 0.35, lit: true, style: "old" });
    s.mosque(500, 470, 0.7, { color: "#3a3450", domeColor: "#2e2a44" }).mosque(1000, 480, 0.55, { color: "#3a3450", domeColor: "#2e2a44" });
    s.sea(500, { glint: 1300, color: "#4a4a6a" });
    s.add('<g stroke="#2a2840" fill="none"><line x1="1180" y1="560" x2="1180" y2="380" stroke-width="10"/><line x1="1520" y1="560" x2="1520" y2="380" stroke-width="10"/><path d="M1000,500 Q1180,380 1180,380 Q1350,520 1520,380 Q1560,420 1640,470" stroke-width="3"/><line x1="900" y1="560" x2="1640" y2="560" stroke-width="10"/></g>');
    for (let x = 920; x < 1640; x += 24) s.add(`<circle cx="${x}" cy="555" r="3" fill="#ffe2a6"/>`);
    return s.ship("ferry", 360, 640, { s: 0.6, wake: true }).ship("ferry", 900, 720, { s: 0.8, dir: -1, wake: true });
  },
  // A ruined medieval stone church with a conical dome alone on a highland plateau at dusk.
  "tr-10": (s) => s
    .sky("dusk", { sun: [1300, 450], r: 30 })
    .mountains({ y: 470, amp: 130, color: "#6a6070", depth: 0.5 })
    .ground(480, "#8a7a5a")
    .poly([[640, 640], [640, 440], [700, 400], [760, 450], [760, 380], [840, 380], [840, 450], [900, 420], [960, 470], [960, 640]], "#a8907a")
    .poly([[760, 380], [840, 380], [800, 290]], "#9a826c")
    .poly([[880, 640], [880, 470], [930, 520], [960, 470], [960, 640]], "#8a7462")
    .add('<path d="M780,640 L780,560 A20,20 0 0 1 820,560 L820,640 Z" fill="#3a2e2a"/><rect x="792" y="410" width="16" height="30" fill="#3a2e2a"/>')
    .add('<polygon points="640,640 960,640 1500,700 600,700" fill="#5a4a3a" opacity="0.3"/>'),
  // A suspension bridge over a dark strait at night, tanks at one end, a large crowd gathering.
  "tr-11": (s) => {
    s.sky("night", { stars: 30 });
    s.city({ y: 520, h: [40, 110], depth: 0.3, lit: true });
    s.sea(520, { color: "#1a2234" });
    s.add('<g stroke="#3a4054" fill="none"><line x1="300" y1="640" x2="300" y2="240" stroke-width="18"/><line x1="1300" y1="640" x2="1300" y2="240" stroke-width="18"/><path d="M-40,560 Q150,520 300,240 Q800,560 1300,240 Q1450,520 1640,560" stroke-width="4"/></g>');
    s.rect(-20, 640, 1640, 30, "#2a2e3a");
    for (let x = 0; x < 1600; x += 40) s.add(`<circle cx="${x}" cy="632" r="4" fill="#ffcf7a"/>`), s.glow(x, 632, 22, "#ffcf7a", 0.4);
    s.vehicle("tank", 1350, 640, { s: 0.8, color: "#2a2e2a", dir: -1 }).vehicle("tank", 1480, 640, { s: 0.8, color: "#2a2e2a", dir: -1 });
    s.rect(0, 670, 1600, 230, "#1e2230");
    return s.crowd({ y: 720, rows: 5, h: 60, gap: 18, rowGap: 40, colors: ["#0e1018", "#141824", "#1a1a22"] });
  },
  // A vast modern palace complex with long lit colonnades on a low hill at dusk, stairs, gardens, a far skyline.
  "tr-4": (s) => {
    s.sky("dusk", { top: "#1e2a5a", bottom: "#5a6a9a" });
    s.city({ y: 470, h: [30, 90], depth: 0.6, lit: true });
    s.hills({ y: 560, amp: 70, color: "#3a4a3a", depth: 0.2 });
    s.rect(160, 360, 1280, 140, "#e6dfd0");
    for (let i = 0; i < 40; i++) s.rect(180 + i * 31.5, 380, 12, 110, "#ffd38a", 'opacity="0.85"');
    s.rect(140, 340, 1320, 24, "#d9d2c2").rect(560, 260, 480, 100, "#e6dfd0").rect(540, 250, 520, 14, "#d9d2c2");
    for (let i = 0; i < 10; i++) s.rect(600 - i * 20, 500 + i * 10, 400 + i * 40, 10, i % 2 ? "#cfc8ba" : "#bdb6a8");
    return s.forest({ y: 640, type: "cypress", s: 0.8, gap: 60, x0: -20, x1: 520 }).forest({ y: 640, type: "cypress", s: 0.8, gap: 60, x0: 1080, x1: 1620 });
  },
  // A huge night crowd from above holding up phone lights before a modern city hall, wet street, police vans.
  "tr-5": (s) => {
    s.sky("night", { stars: 0 });
    s.building(400, 360, 800, 260, { color: "#5a6070", cell: 26, lit: true, litShare: 0.6 });
    s.rect(0, 360, 1600, 540, "#1e222c");
    for (let i = 0; i < 900; i++) { const y = 400 + Math.pow(s.r(), 0.8) * 500, x = s.r() * 1600, k = 0.4 + (y - 400) / 500; s.add(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(6 * k).toFixed(1)}" fill="${s.r.pick(["#2a2e3a", "#343846", "#3a3030"])}"/>`); if (s.r() < 0.35) { s.add(`<circle cx="${x.toFixed(1)}" cy="${(y - 12 * k).toFixed(1)}" r="${(2.4 * k).toFixed(1)}" fill="#fff8e0"/>`); } }
    for (let i = 0; i < 4; i++) s.vehicle("bus", 80 + i * 110, 470, { s: 0.5, color: "#3a4a6a" });
    return s.rain({ count: 160 });
  },
  // Rugged brown mountains at dawn, mist in the passes, a village of flat-roofed stone houses, a shepherd with sheep.
  "tr-6": (s) => {
    s.sky("dawn", { sun: [1200, 340], r: 40 });
    s.mountains({ y: 420, amp: 220, color: "#7a6250", depth: 0.5 }).fog(430, { h: 90 });
    s.mountains({ y: 540, amp: 180, color: "#6a5240", depth: 0.25 });
    s.ground(600, "#6f8a52");
    for (let i = 0; i < 12; i++) s.rect(380 + i * 52 + (i % 3) * 10, 560 + (i % 4) * 12, 44, 30, "#9a8a76");
    s.add('<path d="M-40,880 Q400,700 700,640 Q900,600 1100,620" stroke="#a8906c" stroke-width="20" fill="none"/>');
    s.person(1200, 740, 40, { robe: "#5a4a3a", color: "#3a3030" });
    for (let i = 0; i < 18; i++) s.add(`<ellipse cx="${1080 + s.r() * 220}" cy="${750 + s.r() * 50}" rx="10" ry="6" fill="#e8e2d2"/>`);
    return s;
  },
  // A cargo ship in a narrow strait at sunrise, wooded hills, waterside mansions, a fortress tower, a ferry, mist.
  "tr-7": (s) => {
    s.sky("dawn", { sun: [800, 330], r: 44 });
    s.hills({ y: 470, amp: 160, color: "forest", depth: 0.4, x1: 760 }).hills({ y: 480, amp: 140, color: "forest", depth: 0.45, x0: 840 });
    s.kremlinTower(300, 360, 0.4, { color: "#b8aa90", roof: "#6a6a62", star: false, depth: 0.3 });
    for (let i = 0; i < 6; i++) { s.house(i * 120, 520, 100, 50, { color: s.r.pick(["#d9c49a", "#c9a07a", "#e2d6bc"]), depth: 0.3 }); s.house(1000 + i * 110, 520, 96, 46, { color: s.r.pick(["#d9c49a", "#c9a07a", "#e2d6bc"]), depth: 0.35 }); }
    s.sea(520, { glint: 800 }).fog(540, { h: 60 });
    return s.ship("bulk", 820, 600, { s: 0.8, dir: -1 }).ship("ferry", 300, 760, { s: 0.6, wake: true });
  },
  // An old street of weathered stone houses blocked by sandbags, rusty barrels and wire, a watchtower, bougainvillea.
  "tr-12": (s) => {
    s.sky("afternoon");
    s.street3d({ vanish: [800, 460], depth: 3, left: 360, right: 1240, hmin: 360, hmax: 460, colors: ["#c9b08a", "#b8a07a", "#a8987a"], road: "#9a8a72", lit: false });
    s.watchtower(820, 470, 0.5);
    s.sandbags(420, 1180, 700, 5);
    [[480, 700], [560, 705], [1100, 700]].forEach(([x, y]) => s.rect(x - 26, y - 160, 52, 70, "#8a4a2a").rect(x - 26, y - 140, 52, 6, "#6a3a22"));
    s.add('<path d="M380,600 ' + Array.from({ length: 40 }, (_, i) => `L${380 + i * 21},${600 + (i % 2 ? -12 : 8)}`).join(" ") + '" stroke="#3a3a3a" stroke-width="2" fill="none"/>');
    s.rect(1260, 520, 400, 380, "#c9b08a").rect(1260, 510, 400, 14, "#b8a07a");
    for (let i = 0; i < 40; i++) s.add(`<circle cx="${1270 + s.r() * 330}" cy="${490 + s.r() * 140}" r="${8 + s.r() * 10}" fill="#c94a8a" opacity="0.85"/>`);
    return s;
  },
  // Inside a historic covered bazaar: vaulted painted ceilings, stalls of spices, glowing mosaic lamps, shoppers.
  "tr-8": (s) => {
    s.mood("interior", { light: "#ffd38a" });
    s.room3d({ depth: 4, wall: "#b8865a", side: "#a8784e", floor: "#7a6250", ceiling: "#c9a07a" });
    for (let z = 1.2; z < 4; z += 0.4) { const L = s.pp(0, 200, z), R = s.pp(1600, 200, z), T = s.pp(800, -150, z); s.add(`<path d="M${L[0]},${L[1]} Q${T[0]},${T[1]} ${R[0]},${R[1]}" stroke="#2f5a7a" stroke-width="${16 / z}" fill="none"/>`); }
    for (let z = 1.3; z < 4; z += 0.35) ["left", "right"].forEach((sd) => { const X = sd === "left" ? 0 : 1600; s.quad("wallX", [X, 640, 900, z, z + 0.25], "#5a3e2e"); for (let k = 0; k < 4; k++) { const p = s.pp(sd === "left" ? 80 : 1520, 640, z + 0.05 + k * 0.05); s.add(`<path d="M${p[0] - 24 / z},${p[1]} Q${p[0]},${p[1] - 50 / z} ${p[0] + 24 / z},${p[1]} Z" fill="${["#c9562c", "#d9a02c", "#8a4a2a", "#b8322a"][k]}"/>`); } });
    for (let i = 0; i < 7; i++) { const z = 1.3 + i * 0.4, p = s.pp(800, 260, z); s.glow(p[0], p[1], 70 / z, "#ffb85a", 0.7); s.add(`<circle cx="${p[0]}" cy="${p[1]}" r="${14 / z}" fill="${["#c94a3a", "#3f7a9a", "#d9a02c"][i % 3]}"/>`); }
    for (let i = 0; i < 18; i++) s.figure3d(500 + s.r() * 600, 1.6 + s.r() * 2, { h: 360, color: s.r.pick(["#3a2e2a", "#4a3a3a", "#2e3440"]) });
    return s;
  },
};
