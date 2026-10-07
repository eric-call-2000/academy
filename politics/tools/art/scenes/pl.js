/* Poland */
const palaceOfCulture = (s, x, y, k, o) => {
  o = o || {};
  const c = s.c("#cfc4ae", o.depth);
  s.rect(x - 220 * k, y - 140 * k, 440 * k, 140 * k, c);
  s.rect(x - 140 * k, y - 300 * k, 280 * k, 160 * k, c);
  s.rect(x - 90 * k, y - 440 * k, 180 * k, 140 * k, c);
  s.rect(x - 55 * k, y - 540 * k, 110 * k, 100 * k, c);
  s.rect(x - 30 * k, y - 610 * k, 60 * k, 70 * k, c);
  s.poly([[x - 12 * k, y - 610 * k], [x + 12 * k, y - 610 * k], [x, y - 720 * k]], c);
  if (o.lit) for (let i = 0; i < 40; i++) s.rect(x - 200 * k + s.r() * 400 * k, y - s.r() * 520 * k, 5, 8, s.m.light);
};
module.exports = {
  // A Renaissance royal castle with red brick walls and towers and a gold-domed cathedral above a wide river.
  "pl-9": (s) => {
    s.sky("afternoon", { clouds: 3 });
    s.hills({ y: 520, amp: 150, color: "#6f7a52", peak: 800, peakW: 600, depth: 0.15 });
    s.fortWall(420, 1180, 400, 90, { color: "#9a4a3a" });
    s.rect(560, 230, 360, 170, "#d9c49a").rect(540, 210, 400, 20, "#8a4a3c");
    [440, 1160].forEach((x) => s.kremlinTower(x, 400, 0.55, { star: false, color: "#9a4a3a" }));
    s.dome(1000, 300, 46, { color: "#d9b23c" }).dome(1080, 320, 34, { color: "#d9b23c" });
    s.rect(960, 300, 140, 100, "#e2d6bf");
    s.forest({ y: 520, type: "autumn", s: 0.7, gap: 30, color: "#c9763c" }).forest({ y: 540, type: "oak", s: 0.6, gap: 50, color: "#b8322a" });
    return s.sea(560, { color: "#6f8aa0" });
  },
  // Shipyard workers in 1980s clothes at a tall iron gate with flowers and blank placards, harbour cranes behind.
  "pl-3": (s) => {
    s.sky("overcast", { bottom: "#cfc6b4" });
    for (let i = 0; i < 5; i++) s.towerCrane(150 + i * 320, 520, 1 + (i % 2) * 0.3, { color: "#8a8a7a", depth: 0.35 });
    s.ground(520, "#7a766c");
    s.rect(300, 280, 30, 360, "#2a2a2a").rect(1270, 280, 30, 360, "#2a2a2a").rect(300, 280, 1000, 24, "#2a2a2a");
    s.add('<g stroke="#2a2a2a" stroke-width="5">' + Array.from({ length: 20 }, (_, i) => `<line x1="${350 + i * 48}" y1="300" x2="${350 + i * 48}" y2="640"/>`).join("") + "</g>");
    for (let i = 0; i < 7; i++) s.rect(380 + i * 130, 360, 90, 60, "#ece6d6");
    for (let i = 0; i < 40; i++) s.add(`<circle cx="${320 + s.r() * 960}" cy="${300 + s.r() * 30}" r="10" fill="${s.r.pick(["#c94a4a", "#e8e2d2", "#d9b23c"])}"/>`);
    return s.crowd({ y: 700, rows: 4, h: 80, gap: 26, rowGap: 50, colors: ["#4a4a42", "#5a5a4a", "#3a3e46", "#6a5a44"] });
  },
  // A ruined city of shattered brick buildings under a smoky sky, the gutted shell of a church tower, rubble.
  "pl-10": (s) => {
    s.sky("storm", { top: "#5a5856", bottom: "#a8a49c" });
    for (let i = 0; i < 9; i++) { const x = s.r() * 1500, h = 140 + s.r() * 200; s.poly([[x, 600], [x, 600 - h], [x + 50, 600 - h + 40], [x + 90, 600 - h - 10], [x + 150, 600 - h + 60], [x + 150, 600]], s.c("#7a5a48", 0.35)); for (let k = 0; k < 6; k++) s.rect(x + 14 + (k % 3) * 44, 600 - h * 0.7 + Math.floor(k / 3) * 60, 22, 34, s.c("#cfc9bc", 0.3)); }
    s.rect(760, 180, 120, 420, "#6a5040").add('<path d="M760,180 L790,150 L820,190 L850,140 L880,190 L880,180" fill="#6a5040"/><rect x="800" y="240" width="40" height="80" fill="#cfc9bc"/><rect x="800" y="360" width="40" height="80" fill="#cfc9bc"/>');
    s.smoke(400, 400, { len: 600, dark: true, w: 70, rise: 1.2 });
    return s.ridge({ y: 760, amp: 220, color: "#6a5a4e", jag: true, step: 40 });
  },
  // A misty birch forest in early spring, rows of small glowing candles in red and white glass, flowers.
  "pl-11": (s) => {
    s.sky("overcast", { bottom: "#d9dcd6" });
    s.forest({ y: 520, type: "birch", s: 1.2, gap: 30, depth: 0.6 }).fog(540, { h: 120, opacity: 0.8 });
    s.forest({ y: 640, type: "birch", s: 1.8, gap: 60, depth: 0.3 });
    s.ground(640, "#6a6a52");
    for (let i = 0; i < 90; i++) { const x = s.r() * 1600, y = 700 + s.r() * 180, k = 0.6 + (y - 700) / 180; s.glow(x, y - 20 * k, 30 * k, "#ffcf7a", 0.5); s.rect(x - 8 * k, y - 26 * k, 16 * k, 26 * k, s.r() < 0.5 ? "#b8322a" : "#ece6d8", 'opacity="0.9"'); }
    return s.add(Array.from({ length: 12 }, (_, i) => `<circle cx="${100 + i * 130}" cy="${820 + (i % 3) * 20}" r="12" fill="${["#e8e2d2", "#c94a6a", "#d9b23c"][i % 3]}"/>`).join(""));
  },
  // A neoclassical palace on a city avenue at night, a bronze equestrian statue, lamps, passers-by, light snow.
  "pl-4": (s) => {
    s.sky("night", { stars: 0 });
    s.palace(800, 600, 1.6, { color: "#d9cdb6", cols: 8, h: 220 });
    s.ground(600, "#4a4a4e");
    s.rect(1040, 520, 80, 120, "#6a6a66").add('<g fill="#3a4a3e"><ellipse cx="1080" cy="480" rx="60" ry="24"/><rect x="1110" y="430" width="16" height="40" transform="rotate(-25 1118 450)"/><ellipse cx="1130" cy="425" rx="22" ry="12"/><rect x="1035" y="490" width="10" height="34"/><rect x="1110" y="490" width="10" height="34"/></g>').person(1070, 470, 50, { color: "#3a4a3e" });
    s.lamps(120, 1480, 700, 130, { gap: 340 });
    s.person(500, 760, 90, { coat: true }).person(560, 770, 84, { coat: true, color: "#4a3a34" });
    return s.snowfall({ count: 160 });
  },
  // Modern tanks on a snowy training ground at dawn, a pine forest edge, soldiers in winter gear, vapour.
  "pl-5": (s) => s
    .sky("winter", { sun: [1300, 400], r: 34, bottom: "#f2d6c0" })
    .forest({ y: 480, type: "pine", s: 1, gap: 18, depth: 0.35, color: "#2e3a32" })
    .ground(490, "snow")
    .vehicle("tank", 380, 620, { s: 1.6, color: "#5a5f4c" })
    .vehicle("tank", 820, 600, { s: 1.4, color: "#5a5f4c", depth: 0.15 })
    .vehicle("tank", 1200, 585, { s: 1.2, color: "#5a5f4c", depth: 0.3 })
    .fog(600, { h: 60, color: "#ffffff", opacity: 0.4 })
    .person(560, 780, 120, { helmet: true, color: "#8a8f86" })
    .person(640, 790, 124, { helmet: true, color: "#7f857c" })
    .person(980, 770, 116, { helmet: true, color: "#8a8f86" }),
  // A modern court building with tall green columns at dusk, a small crowd with candles on the steps.
  "pl-6": (s) => {
    s.sky("dusk", { top: "#203050", bottom: "#5a6a8a" });
    s.rect(200, 220, 1200, 360, "#b8bcc0");
    for (let i = 0; i < 14; i++) s.rect(230 + i * 84, 220, 30, 360, "#3f7a5a");
    s.rect(200, 200, 1200, 24, "#9aa0a4");
    for (let i = 0; i < 6; i++) s.rect(-20, 580 + i * 30, 1640, 30, i % 2 ? "#6a6e76" : "#5f636a");
    s.crowd({ y: 760, rows: 3, h: 80, gap: 30, rowGap: 46, colors: ["#1e2230", "#2a2e3a", "#3a3030"] });
    return s.candles(100, 1500, 700, 60);
  },
  // A village school gymnasium set up as a polling station: wooden booths with curtains, a ballot box, autumn light.
  "pl-7": (s) => {
    s.mood("afternoon", { light: "#ffe9c4" });
    s.room3d({ depth: 2.5, wall: "#d9c9a8", side: "#cfbf9e", floor: "#a8865c", ceiling: "#e2d6bc", boards: true, windows: { n: 4, side: "left", top: 60, bottom: 220 } });
    s.booths(900, 1420, 640, { color: "#8a6a4a", w: 110 });
    for (let i = 0; i < 4; i++) s.rect(910 + i * 126, 500, 90, 100, "#3f6a4c", 'opacity="0.8"');
    s.box3d(480, 780, 620, 680, 1.7, 1.9, "#8a6a4a");
    const p = s.pp(630, 620, 1.8); s.ballotBox(p[0], p[1], 1.1);
    [[300, 1.5], [420, 1.7], [880, 1.35]].forEach(([X, z], i) => s.figure3d(X, z + 0.3, { h: 360, color: ["#4a3a34", "#3a4a5a", "#5a4a3c"][i], coat: true }));
    return s;
  },
  // Glass skyscrapers at dusk around a massive socialist-realist palace with a spire, light trails on an avenue.
  "pl-12": (s) => {
    s.sky("dusk", { top: "#2a3a6a", bottom: "#e0a07a" });
    s.city({ y: 620, style: "towers", h: [200, 360], depth: 0.25, lit: true, color: "#5a6a8a" });
    palaceOfCulture(s, 800, 640, 0.9, { lit: true });
    s.ground(640, "#2e3038");
    for (let i = 0; i < 6; i++) s.add(`<path d="M-40,${720 + i * 22} Q800,${680 + i * 8} 1640,${740 + i * 26}" stroke="${i % 2 ? "#ffe2a6" : "#e86a4a"}" stroke-width="3" fill="none" opacity="0.7"/>`);
    return s;
  },
  // A sunset skyline of glass towers round a tall ornate 1950s palace tower, a river and a bridge in front.
  "pl-8": (s) => {
    s.sky("golden", { top: "#7a6a9a", bottom: "#f2b08a", sun: [1300, 420], r: 40 });
    s.city({ y: 520, style: "towers", h: [160, 300], depth: 0.35, lit: false, color: "#8a8aa0" });
    palaceOfCulture(s, 760, 540, 0.7, { depth: 0.2 });
    s.sea(540, { glint: 1300, color: "#7a7a9a" });
    return s.bridge(-20, 1620, 640, { pier: 260, span: 280, color: "#5a5a66" });
  },
};
