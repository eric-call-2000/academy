/* United Kingdom and Nigeria */
module.exports = {
  // Ornate bronze relief plaques and a commemorative bronze head in glass cases in a dim museum gallery, warm spotlights.
  "gb_ng-1": (s) => {
    s.mood("night", { light: "#ffd38a" });
    s.room3d({ depth: 2.6, wall: "#2a2624", side: "#24201e", floor: "#3a3430", ceiling: "#1e1a18" });
    for (let i = 0; i < 4; i++) { const x = 560 + i * 140; s.rect(x, 280, 110, 160, "#6a4a2a"); for (let k = 0; k < 3; k++) s.person(x + 25 + k * 30, 420, 50, { color: "#8a6a3a" }); s.glow(x + 55, 360, 90, "#ffd38a", 0.35); }
    s.box3d(700, 900, 620, 900, 1.5, 1.6, "#1e1c1a");
    s.add('<rect x="680" y="420" width="240" height="220" fill="#dfe9ee" opacity="0.08" stroke="#8a9aa6" stroke-width="2"/><path d="M760,600 L760,540 Q760,470 800,466 Q840,470 840,540 L840,600 Z" fill="#8a5a2a"/><ellipse cx="800" cy="600" rx="50" ry="10" fill="#6a4420"/>');
    return s.glow(800, 520, 140, "#ffd38a", 0.4);
  },
  // A 1960s armoured car on a red dirt road through dense tropical forest, palms, a burned-out hut in the distance.
  "gb_ng-2": (s) => {
    s.sky("overcast");
    s.forest({ y: 500, type: "palm", s: 1.4, gap: 50, color: "#3f6a3a" });
    s.forest({ y: 560, type: "oak", s: 1.2, gap: 40, color: "#2f5a2a" });
    s.ground(560, "#4f7a3a");
    s.road({ vanish: [800, 560], w: 900, color: "#a8542c", line: false });
    s.add('<rect x="1100" y="520" width="80" height="40" fill="#2a2420"/><path d="M1096,520 L1120,500 L1150,520 L1170,506 L1184,520 Z" fill="#1e1a18"/>');
    s.smoke(1140, 500, { len: 200, rise: 3, w: 20, dark: true });
    return s.vehicle("apc", 760, 740, { s: 2, color: "#5a6050" });
  },
  // A ceremonial horse-drawn carriage procession with mounted guards approaching a grand stone castle, green lawns, spring.
  "gb_ng-3": (s) => {
    s.sky("day", { clouds: 4 });
    s.fortWall(300, 1300, 460, 120, { color: "#a8a094" });
    [360, 800, 1240].forEach((x, i) => { s.rect(x - 60, 260 - i % 2 * 40, 120, 200 + i % 2 * 40, "#a8a094"); s.fortWall(x - 64, x + 64, 260 - i % 2 * 40, 16, { color: "#a8a094", merlon: 10 }); });
    s.ground(460, "#6f9a52");
    s.add('<path d="M800,460 Q700,700 400,900" stroke="#c9b892" stroke-width="80" fill="none"/>');
    [[720, 560, 0.6], [660, 640, 0.75], [600, 740, 0.9]].forEach(([x, y, k], i) => { s.add(`<g fill="#3a2a1e"><ellipse cx="${x}" cy="${y - 40 * k}" rx="${40 * k}" ry="${18 * k}"/>${[-30, -14, 14, 30].map((d) => `<rect x="${x + d * k}" y="${y - 30 * k}" width="${5 * k}" height="${32 * k}"/>`).join("")}</g>`); s.person(x, y - 46 * k, 56 * k, { color: "#b8322a", helmet: true }); });
    s.add('<g><rect x="460" y="760" width="160" height="80" rx="10" fill="#c9a24a"/><circle cx="480" cy="850" r="26" fill="none" stroke="#3a2a1e" stroke-width="6"/><circle cx="600" cy="850" r="26" fill="none" stroke="#3a2a1e" stroke-width="6"/></g>');
    return s;
  },
};
