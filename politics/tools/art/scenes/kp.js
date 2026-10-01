/* North Korea */
const juche = (s, x, y, k, o) => {
  o = o || {};
  const c = s.c("#d9d2c2", o.depth);
  s.poly([[x - 40 * k, y], [x + 40 * k, y], [x + 22 * k, y - 520 * k], [x - 22 * k, y - 520 * k]], c);
  s.add(`<path d="M${x - 20 * k},${y - 520 * k} Q${x},${y - 600 * k} ${x + 20 * k},${y - 520 * k} Z" fill="${s.c("#d9433a", o.depth)}"/>`);
  s.glow(x, y - 550 * k, 60 * k, "#ff8a5a", 0.5);
};
module.exports = {
  // A 1940s city square: a crowd in period clothes faces a simple wooden stage hung with plain red banners.
  "kp-9": (s) => {
    s.sky("overcast", { bottom: "#d4cfc0" });
    s.hills({ y: 420, amp: 80, color: "#7a7a6a", depth: 0.5 });
    s.city({ y: 470, h: [60, 120], style: "old", color: "#9a8a7a", depth: 0.3, lit: false });
    s.ground(470, "#a09688");
    s.rect(500, 400, 600, 110, "#6a4a34").rect(480, 380, 640, 20, "#5a3a2a");
    for (let i = 0; i < 5; i++) s.rect(520 + i * 120, 400, 60, 90, "#a8322a");
    return s.crowd({ y: 580, rows: 7, h: 64, gap: 18, rowGap: 44, colors: ["#3a3432", "#4a4440", "#e2d9c8", "#5a4a3c"] });
  },
  // A vast oval stadium from above at night, performers holding coloured cards forming a geometric mosaic, torches.
  "kp-3": (s) => {
    s.sky("night", { stars: 30 });
    s.add('<ellipse cx="800" cy="520" rx="760" ry="340" fill="#2a2a34"/><ellipse cx="800" cy="520" rx="700" ry="300" fill="#3a3a46"/>');
    for (let i = 0; i < 70; i++) for (let j = 0; j < 30; j++) {
      const a = i / 70 * Math.PI * 2, rr = 0.6 + j / 30 * 0.4, x = 800 + Math.cos(a) * 700 * rr, y = 520 + Math.sin(a) * 300 * rr;
      if (Math.abs(x - 800) < 500 * rr && Math.abs(y - 520) < 150 && rr < 0.75) continue;
      const band = Math.floor((a + 0.3) / (Math.PI / 4)) % 4;
      s.rect(x - 5, y - 3, 10, 6, ["#c9433a", "#e8c42c", "#3f6aa8", "#e8e2d2"][(band + Math.floor(j / 8)) % 4]);
    }
    s.add('<ellipse cx="800" cy="520" rx="400" ry="150" fill="#5a7a44"/>');
    for (let i = 0; i < 40; i++) { const a = i / 40 * Math.PI * 2; s.rect(800 + Math.cos(a) * 360 - 3, 520 + Math.sin(a) * 130 - 3, 6, 6, "#e8e2d2"); }
    for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; s.glow(800 + Math.cos(a) * 760, 520 + Math.sin(a) * 340, 30, "#ffb85a", 0.9); }
    return s;
  },
  // A snowy mountain road in winter, a long line of early-1950s refugees carrying bundles and children.
  "kp-10": (s) => {
    s.sky("winter", { top: "#8a929a", bottom: "#c9ccd0" });
    s.mountains({ y: 440, amp: 220, color: "#8a8e94", depth: 0.4, snow: 0.3 });
    s.ground(480, "snow");
    s.forest({ y: 500, type: "bare", s: 0.8, gap: 70, depth: 0.3 });
    s.add('<path d="M1100,480 Q800,600 200,900" stroke="#c9ccd0" stroke-width="140" fill="none"/>');
    for (let i = 0; i < 30; i++) { const t = i / 30, x = 1080 - t * 760 + s.r() * 40, y = 490 + t * t * 380; s.person(x, y, 18 + t * 120, { color: s.r.pick(["#4a4440", "#5a5048", "#3a3634"]), coat: true, bundle: s.r() < 0.6 ? "#d9d2c2" : null }); }
    return s.snowfall({ count: 160 });
  },
  // An informal street market on a dirt road in a small 1990s town: women in padded jackets selling vegetables on cloths.
  "kp-11": (s) => {
    s.sky("winter", { bottom: "#c9c4b4" });
    s.hills({ y: 420, amp: 120, color: "#8a7a62", depth: 0.4 });
    for (let i = 0; i < 6; i++) s.building(i * 280, 520, 220, 160, { color: "#8f8c86", lit: false, depth: 0.2 });
    s.ground(520, "#9a8a6a");
    for (let i = 0; i < 7; i++) { const x = 140 + i * 210, y = 640 + (i % 2) * 90; s.add(`<polygon points="${x - 70},${y} ${x + 70},${y} ${x + 90},${y + 40} ${x - 90},${y + 40}" fill="${s.r.pick(["#5a6a8a", "#8a5a4a", "#6a7a5a"])}"/>`); for (let k = 0; k < 5; k++) s.add(`<circle cx="${x - 50 + k * 25}" cy="${y + 20}" r="9" fill="${s.r.pick(["#d9b23c", "#6a8a3c", "#c9763c"])}"/>`); s.person(x + 20, y + 4, 80, { color: s.r.pick(["#4a4a54", "#5a4a44", "#3a4a4a"]), coat: true }); }
    return s;
  },
  // An empty grand boulevard at dawn: pastel apartment towers, a tall stone tower with a red flame by a river, mist.
  "kp-4": (s) => {
    s.sky("dawn", { top: "#b8b8c4", bottom: "#ecdcd0" });
    s.city({ y: 520, h: [200, 360], wmin: 90, wmax: 150, colors: undefined, color: "#d9b8b0", depth: 0.4, lit: false });
    [[160, "#a8c4b8"], [1300, "#c4b8d4"]].forEach(([x, c]) => s.building(x, 520, 140, 380, { color: c, lit: false, depth: 0.3 }));
    juche(s, 1050, 560, 0.75);
    s.sea(560, { color: "#9aa4b0" }).fog(560, { h: 100 });
    s.persp({ vanish: [600, 560], depth: 10 });
    s.quad("floor", [-1000, 1300, 900, 1, 40], "#8a8a86");
    return s.vehicle("car", 520, 640, { s: 0.6, color: "#2a2a2e" });
  },
  // A freight train of covered wagons on a steel girder bridge over a frozen river in heavy snow, bare hills.
  "kp-5": (s) => {
    s.sky("winter", { top: "#8a9098", bottom: "#c4c8cc" });
    s.hills({ y: 480, amp: 160, color: "#9a9a94", depth: 0.4 });
    s.rect(0, 560, 1600, 340, "#d9dee4");
    s.add('<g stroke="#4a4e54" stroke-width="5" fill="none">' + Array.from({ length: 16 }, (_, i) => `<path d="M${i * 100},520 L${i * 100 + 50},440 L${i * 100 + 100},520"/>`).join("") + '<line x1="0" y1="440" x2="1600" y2="440"/><line x1="0" y1="520" x2="1600" y2="520"/></g>');
    for (let x = 100; x < 1600; x += 400) s.rect(x - 20, 520, 40, 80, "#6a6e74");
    s.railcars(-40, 1660, 516, { box: true, color: "#4a4e44" });
    return s.snowfall({ count: 300 });
  },
  // A huge parade from above: ranks of marching soldiers, missiles on trucks, a long red reviewing stand, aircraft.
  "kp-6": (s) => {
    s.sky("day", { bottom: "#d4d8dc" });
    [[500, 120], [580, 150], [420, 150], [660, 180], [340, 180]].forEach(([x, y]) => s.plane("fighter", x, y, { s: 0.5, color: "#5a6068" }));
    s.rect(200, 250, 1200, 60, "#a8322a").rect(160, 230, 1280, 24, "#d9d2c2");
    s.ground(320, "#b8b4ac");
    for (let r = 0; r < 6; r++) for (let c = 0; c < 26; c++) s.rect(140 + c * 50 + r * 6, 360 + r * 26, 10, 18, "#3a4a3a");
    for (let i = 0; i < 5; i++) { const y = 560 + i * 60; s.vehicle("truck", 300 + i * 40, y, { s: 0.9, color: "#4a5a44" }); s.add(`<rect x="${250 + i * 40}" y="${y - 70}" width="160" height="16" rx="8" fill="#6a7a64"/>`); s.vehicle("truck", 1000 + i * 40, y, { s: 0.9, color: "#4a5a44" }); s.add(`<rect x="${950 + i * 40}" y="${y - 70}" width="160" height="16" rx="8" fill="#6a7a64"/>`); }
    return s;
  },
  // A congress hall with thousands of delegates in identical dark rows seen from the back, a red curtain, a long table.
  "kp-7": (s) => {
    s.mood("interior", { light: "#ffffff" });
    s.room3d({ depth: 3.4, wall: "#a8322a", side: "#d9d2c2", floor: "#7a6a5a", ceiling: "#e8e2d2", lights: "grid" });
    s.box3d(560, 1040, 640, 700, 3.2, 3.3, "#e8e2d2");
    return s.rows3d({ X0: 40, X1: 1560, z0: 1.15, z1: 3.1, rows: 14, color: "#4a3a30", h: 110, people: 1, personH: 220, peopleColors: ["#1a1c22", "#1e2026"] });
  },
  // A wide frozen river at dusk between low wooded banks, one small figure in a padded coat far away, snow.
  "kp-12": (s) => s
    .sky("wintdusk")
    .forest({ y: 460, type: "pine", s: 0.6, gap: 16, depth: 0.4, color: "#1e2a2a" })
    .ground(470, "#9aa8bc")
    .rect(0, 520, 1600, 380, "#c4d0dc")
    .add('<path d="M0,600 L1600,580 M0,700 L1600,690" stroke="#aebccc" stroke-width="3"/>')
    .forest({ y: 900, x0: -40, x1: 400, type: "pine", s: 1.8, gap: 60, color: "#1e2a2a" })
    .person(1000, 474, 18, { color: "#2a2e3a", coat: true })
    .snowfall({ count: 120 }),
  // An empty multi-lane motorway into misty mountains, an abandoned concrete pedestal by the road.
  "kp-8": (s) => {
    s.sky("overcast");
    s.mountains({ y: 460, amp: 200, color: "#7a8088", depth: 0.5, jag: false }).fog(460, { h: 120, opacity: 0.8 });
    s.ground(470, "#8a8a7a");
    s.road({ vanish: [800, 470], w: 1800, color: "#6a6a68" });
    s.persp({ vanish: [800, 470], depth: 6 });
    s.quad("floor", [790, 810, 899, 1, 60], "#d9d2bd");
    return s.rect(1180, 560, 120, 140, "#a8a49c").rect(1160, 690, 160, 20, "#9a968e");
  },
};
