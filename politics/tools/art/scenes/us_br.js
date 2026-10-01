/* United States and Brazil */
module.exports = {
  // A 1960s carrier with escort destroyers on a calm blue ocean, jets parked on deck, long wakes, hazy tropical horizon.
  "us_br-1": (s) => {
    s.sky("tropical", { top: "#8ab0c8" });
    s.sea(460, { color: "#3f7aa8" });
    s.ship("frigate", 300, 540, { s: 0.5, wake: true, depth: 0.2 }).ship("frigate", 1300, 520, { s: 0.45, wake: true, depth: 0.25 });
    s.ship("carrier", 800, 660, { s: 1.5, wake: true });
    for (let i = 0; i < 6; i++) s.plane("fighter", 520 + i * 70, 600, { s: 0.25, color: "#4a5058" });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.08"/>');
  },
  // A crowd swarming over the ramps and flat roofs of white modernist buildings with twin towers, smoke, police lines far off.
  "us_br-2": (s) => {
    s.sky("day", { top: "#3f7ab8" });
    s.rect(200, 460, 1200, 60, "#e8e6e0");
    s.add('<path d="M260,460 L640,460 Q600,540 450,540 Q300,540 260,460 Z" fill="#f2f2ee"/><path d="M1000,460 A160,110 0 0 1 1320,460 Z" fill="#f2f2ee"/>');
    s.rect(720, 160, 60, 300, "#d9dcd8").rect(820, 160, 60, 300, "#d9dcd8");
    s.smoke(1000, 400, { len: 400, dark: true, rise: 2, w: 40 });
    for (let i = 0; i < 400; i++) { const x = 220 + s.r() * 1160, y = 460 + s.r() * 50; s.add(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="${s.r.pick(["#e8c42c", "#3f8a4a", "#2a2a2e", "#e8e2d2"])}"/>`); }
    s.add('<polygon points="400,520 1200,520 1600,900 0,900" fill="#9a948a"/>');
    for (let i = 0; i < 300; i++) { const y = 540 + s.r() * 300, x = 800 + (s.r() - 0.5) * (y - 400) * 2; s.add(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(3 + (y - 540) / 60).toFixed(1)}" fill="${s.r.pick(["#e8c42c", "#3f8a4a", "#2a2a2e", "#e8e2d2"])}"/>`); }
    for (let i = 0; i < 14; i++) s.person(80 + i * 30, 640, 30, { color: "#1e2230", helmet: true });
    return s;
  },
  // A small grey voting machine with a keypad behind a cardboard screen in a sunlit classroom, a hand pressing a key.
  "us_br-3": (s) => {
    s.mood("morning", { light: "#fff6e0" });
    s.room3d({ depth: 2.2, wall: "#e2e6e0", side: "#d4d8d2", floor: "#a8a49c", ceiling: "#f2f2ee", windows: { n: 3, side: "left", top: 100, bottom: 500 } });
    s.rect(300, 600, 1000, 30, "#8a6a4a").rect(330, 630, 20, 270, "#6a4a30").rect(1250, 630, 20, 270, "#6a4a30");
    s.poly([[440, 600], [440, 220], [580, 260], [580, 600]], "#9aa0a4").poly([[1160, 600], [1160, 220], [1020, 260], [1020, 600]], "#9aa0a4").rect(580, 260, 440, 340, "#aeb4b8");
    s.rect(640, 420, 320, 170, "#3a3e44").rect(660, 440, 140, 90, "#c9d6c0");
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) s.rect(830 + c * 38, 438 + r * 34, 30, 26, "#e8e6e0");
    return s.add('<path d="M1100,700 Q1000,640 900,560 Q880,536 900,530 Q920,526 940,548 L1000,600 Q1040,640 1100,650 Z" fill="#a8784a"/>');
  },
};
