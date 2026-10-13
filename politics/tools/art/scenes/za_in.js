/* South Africa & India */
module.exports = {
  // A small Victorian railway station platform at night with gas lamps, a steam train waiting, cold mist.
  "za_in-1": (s) => {
    s.sky("night", { stars: 50 });
    s.building(300, 560, 600, 180, { color: "#8a4a3a", cell: 40, lit: true, litShare: 0.5, roof: "pitched", roofColor: "#4a3a34" });
    s.rect(200, 470, 1200, 16, "#3a3a3e");
    for (let x = 220; x < 1400; x += 160) s.rect(x, 486, 8, 90, "#3a3a3e");
    s.train(-200, 1700, 640, { color: "#3a3430" });
    s.rect(0, 660, 1600, 240, "#5a5650");
    s.lamps(150, 1450, 660, 150, { gap: 260 });
    s.person(900, 700, 70, { color: "#1f1f24" });
    s.add('<rect x="880" y="690" width="40" height="22" fill="#4a3a2e"/>');
    s.fog(640, { h: 160, opacity: 0.4 });
    return s;
  },
  // A large cricket stadium under bright floodlights at dusk, packed stands, tiny players, a city skyline behind.
  "za_in-2": (s) => {
    s.sky("dusk", {});
    s.city({ y: 360, h: [60, 160], depth: 0.6, lit: true });
    s.add('<path d="M-20,560 Q800,300 1640,560 L1640,640 Q800,420 -20,640 Z" fill="#3a3e48"/>');
    for (let i = 0; i < 400; i++) { const t = s.r(), x = t * 1600, y0 = 560 - Math.sin(t * Math.PI) * 240, y = y0 + s.r() * 70; s.add(`<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="3" fill="${s.r.pick(["#e6e0d2", "#3a6a9a", "#c9a33a", "#8a3a3a", "#5a7a5a"])}" opacity="0.8"/>`); }
    [[160, 260], [520, 160], [1080, 160], [1440, 260]].forEach(([x, y]) => { s.rect(x - 4, y, 8, 300, "#5a5e64"); s.rect(x - 40, y - 30, 80, 34, "#f4f2e8"); s.glow(x, y - 10, 200, "#fff6dc", 0.5); });
    s.add('<ellipse cx="800" cy="780" rx="900" ry="200" fill="#5a8a4a"/><rect x="770" y="740" width="60" height="120" fill="#b9a678"/>');
    [[700, 760], [900, 800], [600, 820], [1000, 740], [790, 720], [810, 880]].forEach(([x, y]) => s.person(x, y, 30, { color: "#f4f2ea" }));
    return s;
  },
  // A cheetah resting on a flat rock in dry golden grassland with scattered thorny trees and hills, hazy light.
  "za_in-3": (s) => {
    s.sky("haze", {});
    s.hills({ y: 470, amp: 70, color: "#8a8a5a", depth: 0.5 });
    s.ground(500, "#c9ab6a");
    s.forest({ y: 520, type: "acacia", s: 0.9, gap: 220, color: "#6a7a44" });
    s.add('<path d="M500,720 Q520,640 700,630 Q900,620 1000,660 Q1060,700 1040,740 Z" fill="#8a8070"/>');
    s.add('<g transform="translate(780,640)"><path d="M-120,0 Q-110,-40 -40,-46 Q40,-50 90,-40 Q120,-34 120,-10 L110,0 Z" fill="#d9a85a"/><circle cx="130" cy="-50" r="26" fill="#d9a85a"/><path d="M118,-74 L124,-90 L132,-74 Z M140,-74 L148,-88 L152,-70 Z" fill="#c99a4a"/><path d="M138,-54 Q142,-36 150,-30" stroke="#2a2a2a" stroke-width="3" fill="none"/><path d="M-120,-10 Q-200,0 -220,40" stroke="#d9a85a" stroke-width="12" fill="none" stroke-linecap="round"/>' + Array.from({ length: 30 }, (_, i) => `<circle cx="${-110 + (i % 10) * 22}" cy="${-36 + Math.floor(i / 10) * 12}" r="3.5" fill="#3a2a1a"/>`).join("") + '</g>');
    for (let i = 0; i < 60; i++) s.add(`<line x1="${(s.r() * 1600).toFixed(0)}" y1="${(760 + s.r() * 140).toFixed(0)}" x2="${(s.r() * 1600).toFixed(0)}" y2="${(740 + s.r() * 140).toFixed(0)}" stroke="#a88a4a" stroke-width="2" opacity="0.5" stroke-dasharray="6 400"/>`);
    return s;
  },
};
