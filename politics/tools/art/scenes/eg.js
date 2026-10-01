/* Egypt */
module.exports = {
  // A Nile boulevard in early-1950s Cairo at dusk: vintage cars, palms, belle époque buildings, feluccas.
  "eg-9": (s) => {
    s.sky("dusk", { top: "#5a5a8a", bottom: "#f2b07a" });
    s.city({ y: 520, x0: 700, x1: 1640, h: [180, 300], style: "old", color: "#d9c4a0", depth: 0.2, lit: true });
    s.sea(520, { glint: 400, color: "#5a6a8a" });
    s.ship("dhow", 260, 600, { s: 0.9, sail: "#efe6d0" }).ship("dhow", 520, 640, { s: 0.7, dir: -1, sail: "#efe6d0" });
    s.rect(0, 680, 1600, 220, "#7a7068");
    [[900, 760], [1150, 790], [1380, 760]].forEach(([x, y], i) => s.vehicle("car", x, y, { s: 1.5, color: ["#2a2a2e", "#6a2a2a", "#3a4a3a"][i] }));
    return s.forest({ y: 700, type: "palm", s: 1.8, gap: 220 });
  },
  // A vast crowd filling a circular square at night from above: tents, stages, strings of lights, a museum, a river.
  "eg-3": (s) => {
    s.sky("night", { stars: 20 });
    s.sea(300, { color: "#1e2840" });
    s.add('<path d="M0,280 L1600,300 M0,330 L1600,350" stroke="#3a3e4e" stroke-width="10"/>');
    s.rect(0, 360, 1600, 540, "#3a3438");
    s.rect(1100, 380, 400, 120, "#b8786a").rect(1100, 370, 400, 14, "#9a5a4a");
    s.add('<ellipse cx="700" cy="660" rx="620" ry="220" fill="#2a2428"/>');
    for (let i = 0; i < 1200; i++) { const a = s.r() * Math.PI * 2, rr = Math.sqrt(s.r()); const x = 700 + Math.cos(a) * 600 * rr, y = 660 + Math.sin(a) * 210 * rr; s.add(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(2.5 + (y - 440) / 120).toFixed(1)}" fill="${s.r.pick(["#5a4a44", "#4a3e3a", "#6a5a50", "#e2d6bc"])}"/>`); }
    s.tents(200, 600, 560, { rows: 2, gap: 70, w: 40 });
    for (let k = 0; k < 4; k++) s.add(`<path d="M${100 + k * 200},${480 + k * 40} Q700,${560 + k * 60} ${1300 - k * 100},${480 + k * 40}" stroke="#ffe2a6" stroke-width="2" stroke-dasharray="3 10" fill="none"/>`);
    s.rect(640, 560, 160, 40, "#4a4044").glow(720, 560, 120, "#ffe2a6", 0.5);
    return s;
  },
  // A cargo ship in a straight canal across flat desert at sunset, pale sand banks, a small lighthouse.
  "eg-10": (s) => {
    s.sky("golden", { sun: [800, 430], r: 46 });
    s.ground(470, "#d9b884");
    s.persp({ vanish: [800, 470], depth: 30 });
    s.quad("floor", [620, 980, 900, 1, 200], "#d98a5a");
    s.quad("floor", [640, 960, 899, 1, 200], "#a87a6a");
    s.rect(1180, 380, 30, 100, "#efe9dc").rect(1172, 370, 46, 14, "#b8322a");
    return s.ship("container", 800, 640, { s: 0.6, dir: 1, reflect: false });
  },
  // An empty official reviewing stand under a canopy by a parade ground, jets trailing coloured smoke.
  "eg-11": (s) => {
    s.sky("haze", { top: "#c9c4b4", bottom: "#ece6d6" });
    [["#d9a07a", 260], ["#f2efe8", 300], ["#9ab0c4", 340]].forEach(([c, y], i) => { s.add(`<path d="M-40,${y + 40} Q600,${y - 20} 1100,${y - 60}" stroke="${c}" stroke-width="22" fill="none" opacity="0.55"/>`); s.plane("fighter", 1140, y - 64, { s: 0.6, angle: -6, color: "#5a6068" }); });
    s.ground(520, "#c9b48e");
    s.rect(160, 360, 1280, 30, "#d9cdb6").rect(200, 390, 20, 260, "#a8a090").rect(1380, 390, 20, 260, "#a8a090");
    for (let r = 0; r < 4; r++) for (let i = 0; i < 18; i++) { const x = 240 + i * 64, y = 560 + r * 32; s.rect(x, y - 40, 34, 30, "#8a3a3a").rect(x, y - 12, 34, 8, "#6a2a2a"); }
    return s.rect(160, 680, 1280, 30, "#a8a090");
  },
  // A new government district in the desert: a tall slender tower, empty palm-lined boulevards, cream ministries.
  "eg-4": (s) => {
    s.sky("haze");
    s.tower(1120, 520, 70, 460, { color: "#d9cdb6", spire: 60 });
    for (let i = 0; i < 6; i++) s.building(100 + i * 160, 520, 130, 140, { color: "#e2d6bc", cell: 18, lit: false, depth: 0.2 });
    s.ground(520, "#d4c09a");
    s.persp({ vanish: [800, 520], depth: 8 });
    s.quad("floor", [500, 1100, 900, 1, 40], "#9a9690");
    for (let z = 1.2; z < 8; z *= 1.25) [440, 1160].forEach((X) => { const p = s.pp(X, 900, z); s.tree("palm", p[0], p[1], { s: 1.4 / z }); });
    return s;
  },
  // A modern Red Sea conference centre at dusk: palm-lined drive, empty flagpoles, black cars, red mountains, sea.
  "eg-5": (s) => {
    s.sky("dusk", { top: "#4a5a8a", bottom: "#e8a37c" });
    s.mountains({ y: 420, amp: 160, color: "#a85a4a", depth: 0.3 });
    s.sea(420, { color: "#3fa0a6" });
    s.rect(400, 340, 800, 140, "#e8e2d2").rect(380, 320, 840, 24, "#d9d2c2");
    for (let i = 0; i < 14; i++) s.rect(420 + i * 56, 360, 30, 100, "#ffd38a", 'opacity="0.8"');
    s.ground(480, "#c9b48e");
    for (let i = 0; i < 12; i++) s.add(`<line x1="${200 + i * 110}" y1="560" x2="${200 + i * 110}" y2="440" stroke="#d9d2c2" stroke-width="3"/>`);
    s.rect(0, 560, 1600, 70, "#5a5a5a");
    for (let i = 0; i < 5; i++) s.vehicle("car", 300 + i * 220, 620, { s: 1.4, color: "#121214" });
    return s.forest({ y: 760, type: "palm", s: 1.6, gap: 200 });
  },
  // An aerial view of a long straight canal through pale desert, one container ship, a town and palms on one bank.
  "eg-6": (s) => {
    s.sky("haze", { top: "#d9c4a0", bottom: "#ecdcbc" });
    s.ground(200, "#e0c89a");
    s.add('<polygon points="760,200 800,200 1080,900 760,900" fill="#3f7a8a"/>');
    s.add('<polygon points="560,200 760,200 760,900 0,900 0,600" fill="#d9c090"/>');
    for (let i = 0; i < 40; i++) s.rect(300 + s.r() * 400, 400 + s.r() * 300, 16, 12, "#e8e2d2");
    s.forest({ y: 760, x0: 0, x1: 700, type: "palm", s: 0.6, gap: 30, spread: 120 });
    return s.add('<g transform="translate(900,520) rotate(-68)"><rect x="-120" y="-16" width="240" height="32" rx="8" fill="#2f3a4a"/>' + Array.from({ length: 10 }, (_, i) => `<rect x="${-90 + i * 18}" y="-12" width="16" height="24" fill="${["#9b4b3c", "#4b6a8b", "#c09a4a", "#5d7d5a"][i % 4]}"/>`).join("") + '<rect x="-112" y="-12" width="18" height="24" fill="#e8e2d2"/></g>');
  },
  // An aerial view of a great river at dusk winding through desert, a ribbon of green fields and palms.
  "eg-7": (s) => {
    s.sky("dusk", { top: "#5a4a7a", bottom: "#d98a7a" });
    s.ground(240, "#a07a8a");
    s.add('<path d="M700,240 C800,400 500,500 700,640 S900,820 820,900" stroke="#5a8a3a" stroke-width="320" fill="none"/><path d="M700,240 C800,400 500,500 700,640 S900,820 820,900" stroke="#4a7a3a" stroke-width="200" fill="none" opacity="0.6"/><path d="M700,240 C800,400 500,500 700,640 S900,820 820,900" stroke="#f0c08a" stroke-width="40" fill="none"/>');
    for (let i = 0; i < 20; i++) s.rect(500 + s.r() * 400, 300 + s.r() * 560, 14, 10, "#d9c8b0");
    return s;
  },
  // A modern mosque with a slender minaret at the edge of a wide square at dawn, debris, abandoned tents, smoke.
  "eg-12": (s) => {
    s.sky("dawn", { top: "#a0a0b0", bottom: "#e8c0b8" });
    s.rect(900, 360, 400, 160, "#d9d2c2").dome(1100, 360, 110, { color: "#cfc8b8" }).minaret(1360, 520, 360, { color: "#d9d2c2" });
    s.smoke(500, 460, { len: 400, rise: 1.4, w: 50 });
    s.ground(520, "#a8a090");
    s.tents(100, 800, 600, { rows: 2, gap: 160, w: 90, colors: ["#8a8478", "#9a8a70"] });
    s.add(Array.from({ length: 6 }, (_, i) => `<polygon points="${200 + i * 220},${640 + (i % 2) * 20} ${260 + i * 220},${600 + (i % 2) * 20} ${300 + i * 220},${650 + (i % 2) * 20}" fill="#8a8478" opacity="0.8" transform="rotate(${i * 30} ${250 + i * 220} 630)"/>`).join(""));
    return s.papers(800, 780, 40, { color: "#d9d2c2" });
  },
  // A busy old Cairo street at dusk, a bakery counter stacked with round flatbreads, a queue, minarets and domes.
  "eg-8": (s) => {
    s.sky("dusk", { top: "#6a5a7a", bottom: "#e8a37c" });
    s.minaret(300, 420, 260).minaret(1260, 420, 220).dome(780, 420, 70, { color: "#b8a07a" });
    s.city({ y: 470, h: [60, 160], color: "#b8987a", depth: 0.3, lit: true });
    s.ground(470, "#a8906c");
    s.rect(200, 470, 520, 280, "#8a6a4a").rect(240, 500, 440, 160, "#ffcf7a").glow(460, 580, 300, "#ffcf7a", 0.4);
    for (let r = 0; r < 4; r++) for (let i = 0; i < 9; i++) s.add(`<ellipse cx="${270 + i * 48}" cy="${640 - r * 18}" rx="22" ry="8" fill="#c9905a"/>`);
    s.rect(200, 660, 520, 40, "#5a4030");
    for (let i = 0; i < 10; i++) s.person(760 + i * 70, 780 + i * 8, 120 + i * 6, { color: s.r.pick(["#3a3030", "#4a3a34", "#2e3440"]), robe: s.r() < 0.4 ? s.r.pick(["#c9b89a", "#5a6a7a"]) : null });
    return s.lamp(1500, 900, 360, { lit: true });
  },
};
