/* Brazil & India */
module.exports = {
  // A large herd of white humped zebu cattle on a vast green tropical pasture, a cowboy on horseback, palms.
  "br_in-1": (s) => {
    s.sky("afternoon", { clouds: 6, cloudY: [80, 280] });
    s.hills({ y: 470, amp: 60, color: "#6a8a5a", depth: 0.5 });
    s.ground(480, "grass");
    s.forest({ y: 500, x0: 1200, x1: 1640, type: "palm", s: 0.9, gap: 120 });
    const cow = (x, y, k) => s.add(`<g transform="translate(${x},${y}) scale(${k})"><path d="M-40,-30 Q-42,-50 -20,-52 L-6,-62 Q4,-54 10,-52 L36,-52 Q50,-50 52,-36 L60,-40 Q70,-38 66,-26 L52,-24 L46,-28 L44,0 L36,0 L34,-22 L-26,-22 L-28,0 L-36,0 Z" fill="#f2efe6"/><path d="M60,-42 L64,-50 M66,-40 L72,-46" stroke="#9a948a" stroke-width="2"/></g>`);
    for (let i = 0; i < 40; i++) { const y = 520 + s.r() * 300, k = 0.5 + (y - 520) / 300 * 1.2; cow(s.r() * 1500 + 40, y, k * (s.r() < 0.5 ? 1 : -1) > 0 ? k : k); }
    s.add('<g transform="translate(300,620)"><path d="M-40,-30 L40,-34 L56,-60 L64,-56 L50,-24 L-30,-18 Z" fill="#6a4a30"/><line x1="-30" y1="-20" x2="-34" y2="0" stroke="#5a3a24" stroke-width="5"/><line x1="40" y1="-24" x2="44" y2="0" stroke="#5a3a24" stroke-width="5"/></g>');
    s.person(300, 590, 50, { color: "#3a3a44" });
    return s;
  },
  // A grey regional jet with a long flat radar beam on top parked on an airfield apron in hazy afternoon light.
  "br_in-2": (s) => {
    s.sky("haze", {});
    s.add('<path d="M100,520 L100,430 Q260,380 420,430 L420,520 Z M1100,520 L1100,440 Q1260,390 1420,440 L1420,520 Z" fill="#8a8a84"/>');
    s.ground(520, "concrete");
    s.add('<g transform="translate(800,680)"><ellipse cx="0" cy="40" rx="380" ry="16" fill="#000" opacity="0.18"/><path d="M-380,-10 Q-390,-34 -340,-38 L300,-40 Q370,-34 380,-14 Q370,4 300,6 L-340,8 Q-376,6 -380,-10 Z" fill="#8a9096"/><path d="M-360,-38 L-400,-130 L-360,-130 L-300,-40 Z" fill="#7a8086"/><path d="M-420,-130 L-330,-130 L-330,-120 L-420,-120 Z" fill="#7a8086"/><rect x="-200" y="-70" width="300" height="20" rx="6" fill="#6a7076"/><rect x="-170" y="-54" width="10" height="16" fill="#6a7076"/><rect x="60" y="-54" width="10" height="16" fill="#6a7076"/><ellipse cx="-280" cy="-44" rx="40" ry="14" fill="#6a7076"/><path d="M300,-30 Q330,-34 350,-24 Z" fill="#2a3240"/><line x1="-200" y1="8" x2="-200" y2="40" stroke="#2a2a2a" stroke-width="5"/><line x1="240" y1="6" x2="240" y2="40" stroke="#2a2a2a" stroke-width="5"/><circle cx="-200" cy="40" r="8" fill="#222"/><circle cx="240" cy="40" r="8" fill="#222"/></g>');
    s.add('<polygon points="-20,560 1640,540 1640,560 -20,580" fill="#7a7a74" opacity="0.4"/>');
    return s;
  },
  // A grand red and cream sandstone colonnaded government building in New Delhi with domes, black cars arriving.
  "br_in-3": (s) => {
    s.sky("haze", {});
    s.rect(200, 300, 1200, 220, "#c9a088").rect(200, 300, 1200, 60, "#d9c4a8");
    for (let i = 0; i < 24; i++) s.rect(230 + i * 48, 370, 18, 150, "#e6d6bc");
    s.dome(800, 300, 120, { color: "#c9a088" });
    s.rect(780, 120, 40, 60, "#c9a088");
    [400, 1200].forEach((x) => { s.rect(x - 40, 250, 80, 50, "#d9c4a8"); s.dome(x, 250, 40, { color: "#c9a088" }); });
    s.ground(520, "#c9b896");
    s.rect(0, 560, 1600, 20, "#b9a688");
    for (let i = 0; i < 6; i++) s.vehicle("car", 400 + i * 160, 700, { s: 1.5, color: "#1a1c20" });
    s.forest({ y: 560, x0: -40, x1: 180, type: "oak", s: 1.4, gap: 70, color: "#6a8a5a" }).forest({ y: 560, x0: 1420, x1: 1640, type: "oak", s: 1.4, gap: 70, color: "#6a8a5a" });
    s.fog(500, { h: 120, opacity: 0.35 });
    return s;
  },
};
