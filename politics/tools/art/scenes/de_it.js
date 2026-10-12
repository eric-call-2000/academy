/* Germany & Italy */
module.exports = {
  // A crowded 1950s station platform at night under an iron and glass roof, men with cardboard suitcases boarding a train.
  "de_it-1": (s) => {
    s.mood("night");
    s.add('<rect width="1600" height="900" fill="#1c2232"/>');
    for (let i = 0; i < 7; i++) s.add(`<path d="M${-100 + i * 300},420 Q${50 + i * 300},120 ${200 + i * 300},420" stroke="#3a4256" stroke-width="10" fill="none"/>`);
    s.add('<rect x="0" y="150" width="1600" height="20" fill="#2a3044"/>');
    s.rect(0, 430, 1600, 470, "#4a4640");
    s.train(-60, 1700, 560, { s: 2.2, color: "#3f5a4a" });
    s.rect(0, 560, 1600, 340, "#5a554c");
    [200, 600, 1000, 1400].forEach((x) => { s.add(`<line x1="${x}" y1="560" x2="${x}" y2="300" stroke="#2a2d36" stroke-width="6"/>`); s.glow(x, 300, 120, "#ffcf7a", 0.5); s.add(`<circle cx="${x}" cy="300" r="10" fill="#fff0c4"/>`); });
    for (let i = 0; i < 18; i++) { const x = 80 + i * 86 + s.r() * 20, y = 760 + s.r() * 60; s.person(x, y, 130, { color: s.r.pick(["#2a2a30", "#3a3430", "#2f3440", "#4a4036"]), coat: true }); s.rect(x + 18, y - 52, 42, 30, s.r.pick(["#8a6a4a", "#7a5a3a", "#9a7a52"])); }
    s.smoke(1500, 420, { len: 400, dir: -1, rise: 0.3, color: "#c9ccd2" });
    return s;
  },
  // A grand Roman government palace at dusk, a crowd of reporters with cameras on a cobbled square outside.
  "de_it-2": (s) => {
    s.sky("dusk", { clouds: 3 });
    s.rect(200, 220, 1200, 360, "#c9a07a");
    s.rect(180, 200, 1240, 30, "#b08a6a");
    for (let r = 0; r < 3; r++) for (let i = 0; i < 13; i++) s.rect(250 + i * 88, 260 + r * 100, 40, 66, r === 0 ? "#4a3a32" : (s.r() < 0.4 ? "#ffd59a" : "#4a3a32"));
    for (let i = 0; i < 6; i++) s.rect(610 + i * 70, 470, 22, 110, "#e2d6c2");
    s.rect(560, 460, 480, 14, "#e2d6c2");
    s.ground(580, "#8a8074");
    for (let i = 0; i < 40; i++) s.add(`<line x1="0" y1="${600 + i * 8}" x2="1600" y2="${600 + i * 8}" stroke="#7a7064" stroke-width="1" opacity="0.4"/>`);
    s.lamps(150, 1500, 620, 200, { gap: 450 });
    s.crowd({ y: 780, rows: 3, h: 90, gap: 34, rowGap: 40, thin: 0.1, colors: ["#2a2a30", "#3a3430", "#2f3440"] });
    for (let i = 0; i < 9; i++) { const x = 160 + i * 160 + s.r() * 40; s.rect(x, 640, 40, 26, "#1f1f22").add(`<line x1="${x + 20}" y1="666" x2="${x + 20}" y2="760" stroke="#1f1f22" stroke-width="4"/>`); }
    return s;
  },
  // A Renaissance villa in Rome with a long colonnade, terracotta roof and cypress and umbrella pines, sunny winter day.
  "de_it-3": (s) => {
    s.sky("morning", { clouds: 3 });
    s.hills({ y: 470, amp: 60, color: "#7a8a5a", depth: 0.5 });
    s.rect(300, 280, 1000, 260, "#e6d6b8");
    s.poly([[280, 280], [1320, 280], [1260, 230], [340, 230]], "#b5603c");
    for (let i = 0; i < 12; i++) s.path(`M${340 + i * 80},540 L${340 + i * 80},430 A30,30 0 0 1 ${400 + i * 80},430 L${400 + i * 80},540 Z`, "#9a8466");
    for (let i = 0; i < 12; i++) s.rect(350 + i * 80, 310, 40, 60, "#6a7a86");
    [150, 1450, 1520].forEach((x, i) => s.tree("cypress", x, 600, { s: 2.6 - i * 0.3 }));
    [[60, 560], [1230, 520]].forEach(([x, y]) => { s.rect(x + 76, y - 40, 10, 140, "#5a4a3c"); s.add(`<ellipse cx="${x + 80}" cy="${y - 50}" rx="130" ry="40" fill="#4f6a44"/>`); });
    s.ground(560, "#cfc2a2");
    [[640, 660], [860, 680]].forEach(([x, y]) => s.vehicle("car", x, y, { s: 1.6, color: "#2a2d32" }));
    return s;
  },
};
