/* United Kingdom & Australia */
module.exports = {
  // Scrub-covered cliffs above a narrow beach at dawn, small rowing boats approaching through sea mist, a warship offshore.
  "gb_au-1": (s) => {
    s.sky("dawn", { sun: [260, 380], r: 40 });
    s.sea(500, { glint: 260 });
    s.ship("warship", 360, 500, { s: 0.6, depth: 0.75 });
    s.add('<path d="M900,900 L900,560 Q960,420 1040,360 Q1120,250 1220,230 Q1320,200 1420,260 Q1520,300 1640,280 L1640,900 Z" fill="#7a6a52"/><path d="M1000,420 Q1100,300 1220,280 Q1350,260 1460,320 L1640,330 L1640,900 L1000,900 Z" fill="#6a5c46" opacity="0.6"/>');
    for (let i = 0; i < 70; i++) s.add(`<ellipse cx="${(980 + s.r() * 660).toFixed(0)}" cy="${(280 + s.r() * 400).toFixed(0)}" rx="${(10 + s.r() * 14).toFixed(0)}" ry="6" fill="#5a6a44" opacity="0.7"/>`);
    s.add('<path d="M760,900 Q840,700 920,620 L980,640 Q960,760 1000,900 Z" fill="#cdbb98"/>');
    s.fog(620, { h: 160, opacity: 0.5 });
    [[520, 700, 1.0], [680, 650, 0.8], [380, 640, 0.7], [620, 780, 1.2]].forEach(([x, y, k]) => s.add(`<g transform="translate(${x},${y}) scale(${k})"><path d="M-70,0 L70,0 L56,14 L-60,14 Z" fill="#3e3a34"/>${[-50, -30, -10, 10, 30, 50].map((dx) => `<circle cx="${dx}" cy="-8" r="6" fill="#2e2c2a"/><line x1="${dx}" y1="4" x2="${dx - 30}" y2="24" stroke="#4a443c" stroke-width="2"/>`).join("")}</g>`));
    return s;
  },
  // A long low white parliament building with a colonnade, wide steps and a green lawn, a crowd with plain placards.
  "gb_au-2": (s) => {
    s.sky("day", { clouds: 4 });
    s.forest({ y: 450, type: "oak", s: 0.9, depth: 0.4, gap: 50, color: "#6a8a5a" });
    s.rect(260, 330, 1080, 150, "#efece4").rect(250, 320, 1100, 14, "#dcd8ce");
    s.rect(620, 280, 360, 50, "#efece4").rect(610, 272, 380, 10, "#dcd8ce");
    for (let i = 0; i < 18; i++) s.rect(640 + i * 19, 340, 8, 120, "#d6d2c8");
    for (let i = 0; i < 8; i++) { s.rect(290 + i * 38, 360, 16, 60, "#9aa4ac"); s.rect(1000 + i * 38, 360, 16, 60, "#9aa4ac"); }
    s.rect(560, 480, 480, 14, "#d9d4c8").rect(520, 494, 560, 14, "#cfcabe").rect(480, 508, 640, 14, "#c5c0b4");
    s.ground(480, "grass");
    s.rect(560, 480, 480, 14, "#d9d4c8").rect(520, 494, 560, 14, "#cfcabe").rect(480, 508, 640, 14, "#c5c0b4");
    s.crowd({ y: 700, rows: 4, h: 80, gap: 34, rowGap: 45, thin: 0.25, signs: 12, colors: ["#3a3f4a", "#5a4a3e", "#4a5a6a", "#6a3e3a", "#3e4e3e"] });
    return s;
  },
  // A long black submarine moored at a dockside in a shipyard at dusk, cranes and a huge assembly hall behind.
  "gb_au-3": (s) => {
    s.sky("dusk", { sun: [1300, 470], r: 36 });
    s.rect(200, 300, 900, 260, "#4a4e58");
    for (let i = 0; i < 12; i++) s.rect(230 + i * 72, 340, 40, 14, "#ffd59a", 'opacity="0.5"');
    s.crane(1200, 560, 1.3, { color: "#5a5e66" }).crane(120, 560, 1.1, { color: "#5a5e66" });
    s.towerCrane(1450, 560, 1.1, { color: "#8a7a5a" });
    s.rect(0, 560, 1600, 50, "#5a5c60");
    s.sea(610, { lines: 50 });
    s.add('<path d="M180,650 Q160,630 220,622 L1300,618 Q1360,622 1380,640 Q1360,660 1300,664 L220,666 Q170,664 180,650 Z" fill="#1d1f22"/><path d="M640,620 L660,560 L780,560 L790,620 Z" fill="#1d1f22"/><path d="M680,580 L620,582 L620,590 L684,592 Z" fill="#1d1f22"/><path d="M1360,640 L1420,612 L1424,668 Z" fill="#1d1f22"/>');
    s.add('<path d="M220,690 L1300,690" stroke="#1d1f22" stroke-width="18" opacity="0.25"/>');
    s.lamps(100, 1500, 560, 110, { gap: 280 });
    return s;
  },
};
