/* United States and Saudi Arabia */
module.exports = {
  // A grey 1940s heavy cruiser on a calm pale lake amid flat desert, a carpet and small tent on its deck, a destroyer.
  "us_sa-1": (s) => {
    s.sky("desert");
    s.ground(460, "#d4b88a");
    s.sea(500, { color: "#9ab8c8" });
    s.ship("warship", 760, 640, { s: 1.6, color: "#8a9094" });
    s.add('<rect x="560" y="584" width="140" height="18" fill="#a8322a"/><polygon points="600,584 660,584 630,550" fill="#e8e2d2"/>');
    return s.ship("frigate", 1300, 560, { s: 0.6, depth: 0.2 });
  },
  // Rows of sand-coloured tents and armoured vehicles in a vast flat desert camp, helicopters far off, orange sunset dust.
  "us_sa-2": (s) => {
    s.sky("dusk", { bottom: "#f2a06a" });
    s.ground(480, "#c49a6a");
    s.tents(-20, 1620, 500, { rows: 4, gap: 100, w: 60, colors: ["#c9b08a", "#b89e7a"], rowGap: 46 });
    for (let i = 0; i < 6; i++) s.vehicle(i % 2 ? "tank" : "apc", 200 + i * 230, 760, { s: 0.9, color: "#b89e7a" });
    s.plane("heli", 1200, 300, { s: 0.6 }).plane("heli", 1340, 340, { s: 0.5 });
    return s.fog(500, { h: 160, color: "#f2c08a", opacity: 0.4 });
  },
  // An ornate pale stone consulate behind a high wall and metal gate on a quiet street at dusk, bare trees, lamps.
  "us_sa-3": (s) => {
    s.sky("dusk", { top: "#3a4a6a", bottom: "#c4a0a0" });
    s.rect(400, 240, 800, 300, "#d9cdb6");
    for (let r = 0; r < 2; r++) for (let i = 0; i < 7; i++) s.add(`<path d="M${450 + i * 106},${400 + r * 100} L${450 + i * 106},${330 + r * 100} A20,20 0 0 1 ${490 + i * 106},${330 + r * 100} L${490 + i * 106},${400 + r * 100} Z" fill="#4a4a52"/>`);
    s.wall(-20, 1620, 620, 180, { color: "#b8b0a2" });
    s.rect(700, 460, 200, 160, "#2a2a2e").add('<g stroke="#4a4a4e" stroke-width="4">' + Array.from({ length: 8 }, (_, i) => `<line x1="${712 + i * 25}" y1="460" x2="${712 + i * 25}" y2="620"/>`).join("") + "</g>");
    s.forest({ y: 660, x0: -40, x1: 300, type: "bare", s: 1.4, gap: 80 }).forest({ y: 660, x0: 1300, x1: 1640, type: "bare", s: 1.4, gap: 80 });
    return s.ground(620, "#4a4a4e").lamps(300, 1300, 720, 160, { gap: 500 });
  },
};
