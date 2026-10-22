/* Kazakhstan */
// a grazing horse silhouette, facing left (f = 1) or right (f = -1)
const horse = (s, x, y, k, f, col) => {
  const X = (dx) => x + f * dx * k, Y = (dy) => y + dy * k;
  s.add(`<path d="M${X(-30)},${Y(-34)} L${X(28)},${Y(-36)} Q${X(36)},${Y(-36)} ${X(36)},${Y(-28)} L${X(34)},${Y(-20)} L${X(-30)},${Y(-20)} Z M${X(-30)},${Y(-34)} L${X(-44)},${Y(-12)} L${X(-50)},${Y(-6)} L${X(-42)},${Y(-4)} L${X(-34)},${Y(-20)} Z" fill="${col}"/>` +
    [-26, -18, 22, 30].map((dx) => `<rect x="${Math.min(X(dx), X(dx + 4))}" y="${Y(-22)}" width="${4 * k}" height="${22 * k}" fill="${col}"/>`).join("") +
    `<path d="M${X(36)},${Y(-30)} Q${X(46)},${Y(-24)} ${X(44)},${Y(-8)}" stroke="${col}" stroke-width="${3 * k}" fill="none"/>`);
};
const yurt = (s, x, y, w, col) => {
  s.rect(x - w / 2, y - w * 0.4, w, w * 0.4, col || "#efe8da");
  s.add(`<path d="M${x - w / 2 - 4},${y - w * 0.4} Q${x},${y - w * 0.85} ${x + w / 2 + 4},${y - w * 0.4} Z" fill="${col || "#e2d9c6"}"/><rect x="${x - w * 0.08}" y="${y - w * 0.28}" width="${w * 0.16}" height="${w * 0.28}" fill="#8a4a3a"/>`);
};
module.exports = {
  // A vast golden steppe at sunset with white yurts, grazing horses and snow-capped mountains far away.
  "kz-9": (s) => {
    s.sky("golden", { sun: [1250, 430] });
    s.mountains({ y: 470, amp: 60, color: "#9aa0b0", snow: true, depth: 0.6 });
    s.ground(480, "#c8a860");
    yurt(s, 360, 600, 120); yurt(s, 520, 580, 90); yurt(s, 640, 610, 110);
    [[900, 640, 1.2, 1], [1020, 620, 1, -1], [1140, 660, 1.3, 1], [1300, 630, 1, 1], [820, 700, 1.5, -1]].forEach(([x, y, k, f]) => horse(s, x, y, k, f, "#4a3428"));
    return s.add('<path d="M0,760 C400,740 1000,780 1600,750 L1600,900 L0,900 Z" fill="#b89850" opacity="0.6"/>');
  },
  // A futuristic capital on the steppe at dusk: a white tower with a golden sphere, a giant tent building, glass towers.
  "kz-3": (s) => {
    s.sky("dusk");
    s.ground(560, "#a89a7a");
    s.city({ y: 560, h: [100, 260], style: "modern", lit: true, depth: 0.35 });
    s.poly([[1150, 560], [1260, 300], [1370, 560]], "#d8e0e4", 'opacity="0.9"');
    s.add('<path d="M790,560 L790,300 L760,240 L780,240 L800,170 L820,240 L840,240 L810,300 L810,560 Z" fill="#f0eee8"/><circle cx="800" cy="200" r="40" fill="#e8b84a"/>');
    s.road({ vanish: [800, 560], w: 1400, color: "#6a6660" });
    return s.lamps(100, 1500, 700, 140, { gap: 300 });
  },
  // An empty frozen steppe under grey winter sky: a bare yurt frame, scattered bones, telegraph poles.
  "kz-10": (s) => {
    s.sky("winter");
    s.ground(520, "#d8d8d4");
    for (let i = 0; i < 9; i++) { const x = 900 + i * 90, h = 120 - i * 10; s.rect(x, 520 - h, 5, h, "#4a4440"); s.rect(x - 16, 520 - h, 37, 4, "#4a4440"); }
    s.add('<path d="M560,640 Q620,760 520,760" stroke="#2e2a28" stroke-width="5" fill="none"/>');
    s.add('<g stroke="#4a3a30" stroke-width="6" fill="none"><path d="M300,700 L300,620 L500,620 L500,700"/><path d="M300,620 Q400,540 500,620"/><path d="M340,620 L400,560 L460,620"/></g>');
    for (let i = 0; i < 14; i++) s.add(`<path d="M${600 + (i * 83) % 700},${720 + (i * 37) % 120} l${20 + (i % 3) * 8},${(i % 2 ? -1 : 1) * 6}" stroke="#ece8de" stroke-width="5" stroke-linecap="round"/>`);
    return s.snowfall({ count: 120 });
  },
  // A flat dry steppe at dawn with a huge pale mushroom cloud far off, a rusting concrete tower and broken posts in front.
  "kz-11": (s) => {
    s.sky("dawn", { top: "#6a6a8a", bottom: "#e8b8a0" });
    s.add('<ellipse cx="980" cy="220" rx="220" ry="90" fill="#e8d8c8"/><ellipse cx="980" cy="250" rx="160" ry="50" fill="#d8c4b0"/><path d="M940,290 Q930,420 900,520 L1060,520 Q1030,420 1020,290 Z" fill="#dccab8"/><ellipse cx="980" cy="520" rx="260" ry="30" fill="#c8b098"/>');
    s.ground(520, "#9a8a6a");
    s.rect(300, 400, 80, 360, "#8a7e70").rect(280, 380, 120, 30, "#7a6e60").rect(310, 440, 60, 24, "#3a3430");
    for (let i = 0; i < 12; i++) s.rect(500 + i * 90, 700 - (i % 3) * 6, 6, 60 + (i % 2) * 20, "#4a4038", `transform="rotate(${(i % 4) * 5 - 8} ${500 + i * 90} 760)"`);
    return s.fog(520, { h: 50, opacity: 0.3 });
  },
  // A white presidential palace with a pale blue dome and golden spire on an empty plaza at night, floodlit.
  "kz-4": (s) => {
    s.sky("night", { stars: 30 });
    s.city({ y: 560, h: [100, 240], style: "modern", lit: true, depth: 0.5 });
    s.rect(420, 360, 760, 200, "#ece8de");
    for (let i = 0; i < 14; i++) s.rect(450 + i * 52, 380, 18, 170, "#d0ccc2");
    s.rect(400, 350, 800, 16, "#d8d4ca");
    s.dome(800, 350, 130, { color: "#8ab0d0" });
    s.add('<path d="M796,220 L800,120 L804,220 Z" fill="#e8b84a"/><circle cx="800" cy="215" r="10" fill="#e8b84a"/>');
    s.glow(800, 420, 400, "#fff0d0", 0.25);
    s.ground(560, "#3a3c44");
    return s.lamps(80, 1540, 700, 150, { gap: 290 });
  },
  // A modern semicircular parliament chamber: empty curved desks, raised podium, domed ceiling with a skylight.
  "kz-5": (s) => {
    s.room({ wall: "#9aa4b0", floorY: 420, floor: "#3a5a8a" });
    s.add('<path d="M0,0 L1600,0 L1600,180 Q800,40 0,180 Z" fill="#c8ccd2"/><ellipse cx="800" cy="110" rx="200" ry="40" fill="#f4f0e4"/>');
    s.rect(640, 340, 320, 90, "#7a5a40").rect(700, 300, 200, 40, "#8a6a4a");
    return s.hemicycle({ x: 800, y: 430, r0: 220, rows: 6, step: 80, color: "#8a6a4a", tilt: 0.42 });
  },
  // An offshore loading buoy and tanker at night, a coastal terminal with lit tanks and a flare, a faint plume.
  "kz-6": (s) => {
    s.sky("night", { stars: 40 });
    s.hills({ y: 420, amp: 80, color: "#1e2430", depth: 0 });
    s.tanks(420, 440, 8, { w: 60, h: 36, color: "#9aa0a8" });
    for (let i = 0; i < 8; i++) s.add(`<circle cx="${450 + i * 76}" cy="420" r="3" fill="#ffd88a"/>`);
    s.flare(1180, 360, 1);
    s.smoke(1180, 340, { len: 240, w: 40, rise: 1.4 });
    s.sea(450, { lines: 20 });
    s.ship("tanker", 700, 700, { s: 1.2 });
    s.add('<ellipse cx="1150" cy="690" rx="40" ry="14" fill="#c84a3a"/><rect x="1144" y="650" width="12" height="40" fill="#e8e2d2"/><path d="M1000,640 Q1080,660 1144,680" stroke="#2a2a2a" stroke-width="5" fill="none"/>');
    return s.glow(1180, 360, 90, "#ffb04a", 0.6);
  },
  // A huge dry port on flat steppe: long container trains, gantry cranes, stacked containers, snowy mountains far off.
  "kz-7": (s) => {
    s.sky("afternoon");
    s.mountains({ y: 440, amp: 110, color: "#9aa6b8", snow: true, depth: 0.5 });
    s.ground(460, "#b8aa86");
    s.containers(100, 560, 14, 3, {});
    s.containers(860, 580, 14, 4, {});
    s.towerCrane(600, 600, 0.8);
    s.crane(420, 640, 0.8).crane(1200, 640, 0.8);
    s.railcars(0, 1600, 700, {});
    return s.railcars(0, 1600, 800, {});
  },
  // A Soviet-era city hall with blackened smoking windows at dusk, burned-out cars on a snowy square, mountains behind.
  "kz-12": (s) => {
    s.sky("wintdusk");
    s.mountains({ y: 400, amp: 220, color: "#b8c0cc", snow: true, depth: 0.4 });
    s.rect(400, 260, 800, 300, "#c8c4b8");
    for (let r = 0; r < 4; r++) for (let i = 0; i < 12; i++) s.rect(430 + i * 64, 290 + r * 64, 36, 40, (i + r) % 3 ? "#2a2624" : "#e08a3a");
    s.smoke(600, 280, { len: 300, w: 60, rise: 1.6 }).smoke(980, 290, { len: 340, w: 70, rise: 1.6 });
    s.ground(560, "#e2e4e6");
    s.vehicle("car", 500, 720, { s: 1.4, color: "#2e2c2a" }).vehicle("car", 1100, 760, { s: 1.5, color: "#3a3634", dir: -1 });
    s.tree("bare", 200, 640, { s: 1.4 }).tree("bare", 1420, 660, { s: 1.5 });
    return s.smoke(1110, 720, { len: 160, w: 24, rise: 1.6 });
  },
  // A city of apartment blocks and a TV tower on a hill beneath huge snowy mountains at sunset, autumn trees.
  "kz-8": (s) => {
    s.sky("dusk", { top: "#5a6a9a", bottom: "#f0b080" });
    s.mountains({ y: 420, amp: 300, color: "#b8a8b8", snow: true, depth: 0.3 });
    s.hills({ y: 520, amp: 60, color: "#6a6a5a", depth: 0.2 });
    s.add('<path d="M1220,470 L1226,220 L1234,220 L1240,470 Z" fill="#d8d4cc"/><rect x="1214" y="300" width="32" height="14" fill="#d8d4cc"/>');
    s.city({ y: 640, h: [80, 200], lit: true, depth: 0.15 });
    s.ground(640, "#5a5048");
    return s.forest({ y: 720, type: "autumn", s: 1, gap: 110, x0: 0, x1: 1600 });
  }
};
