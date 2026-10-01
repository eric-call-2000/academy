/* United States and Pakistan */
module.exports = {
  // A slender black high-altitude spy plane with very long wings on a runway at dawn, ground crew far off, dry mountains.
  "us_pk-1": (s) => {
    s.sky("dawn", { bottom: "#f2c8a0" });
    s.mountains({ y: 480, amp: 220, color: "#8a6a4a", depth: 0.35 });
    s.ground(480, "#b89a72").add('<polygon points="-40,720 1640,640 1640,740 -40,820" fill="#6a6662"/>');
    s.add('<g transform="translate(800,670) rotate(-2)"><path d="M-220,0 Q-230,-12 -200,-14 L200,-12 Q240,-8 250,0 Q240,8 200,10 L-200,10 Z" fill="#141618"/><rect x="-520" y="-6" width="1040" height="10" rx="5" fill="#1a1c20"/><path d="M-200,-12 L-240,-60 L-226,-60 L-180,-12 Z" fill="#141618"/></g>');
    return s.person(1300, 650, 30, { color: "#3a3a3a" }).person(1340, 648, 30, { color: "#3a3a3a" }).add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.12"/>');
  },
  // A large walled compound in a quiet hillside town at night, dark helicopters approaching low over roofs, pine hills.
  "us_pk-2": (s) => {
    s.sky("night", { stars: 60 });
    s.hills({ y: 460, amp: 180, color: "#141c1a", depth: 0.2 });
    s.forest({ y: 470, type: "pine", s: 0.7, gap: 20, color: "#141c1a" });
    for (let i = 0; i < 14; i++) { const x = 60 + i * 115, y = 560 + (i % 3) * 20; s.rect(x, y - 50, 90, 50, "#2a2c30"); if (s.r() < 0.4) s.rect(x + 30, y - 36, 14, 14, "#ffd38a"); }
    s.wall(500, 1100, 760, 120, { color: "#4a4840" });
    s.rect(640, 520, 300, 120, "#3a3834").rect(700, 560, 20, 20, "#ffd38a");
    return s.plane("heli", 300, 360, { s: 1.4, color: "#0e1014" }).plane("heli", 1200, 300, { s: 1.1, color: "#0e1014", dir: -1 });
  },
  // A rugged dry mountain landscape with an open-pit mine, heavy trucks carrying ore down a winding road, dust, snow peaks.
  "us_pk-3": (s) => {
    s.sky("haze", { top: "#a8b0b8" });
    s.mountains({ y: 400, amp: 200, color: "#9a9aa2", depth: 0.4, snow: 0.45 });
    s.ground(440, "#a8885e");
    s.mine(500, 440, 700, { color: "#9a6a44" });
    s.add('<path d="M800,480 Q1200,560 900,680 T1300,900" stroke="#c4a87a" stroke-width="40" fill="none"/>');
    s.vehicle("truck", 1060, 590, { s: 0.8, color: "#d9a02c" }).vehicle("truck", 1000, 720, { s: 1, color: "#d9a02c" });
    return s.fog(560, { h: 160, color: "#d9c4a0", opacity: 0.4 });
  },
};
