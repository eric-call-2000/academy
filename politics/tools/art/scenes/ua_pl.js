/* Ukraine and Poland */
module.exports = {
  // A simple weathered wooden cross in tall summer grass at the edge of a dark forest, a few wildflowers, overcast.
  "ua_pl-1": (s) => {
    s.sky("overcast");
    s.forest({ y: 480, type: "pine", s: 1.4, gap: 20, color: "#2a3a2e", depth: 0.2 });
    s.ground(480, "#7a8a5a");
    for (let i = 0; i < 200; i++) { const x = s.r() * 1600, y = 520 + s.r() * 380; s.add(`<line x1="${x}" y1="${y}" x2="${x + s.r() * 10 - 5}" y2="${y - 20 - (y - 500) / 10}" stroke="#8a9a5a" stroke-width="2"/>`); }
    for (let i = 0; i < 20; i++) s.add(`<circle cx="${s.r() * 1600}" cy="${600 + s.r() * 300}" r="5" fill="${s.r.pick(["#e8e2d2", "#c94a6a", "#d9b23c", "#6a6ac0"])}"/>`);
    return s.rect(780, 380, 30, 380, "#6a5a48").rect(720, 450, 150, 26, "#6a5a48");
  },
  // A long line of cargo lorries stopped on a flat rural road in winter, farm tractors parked across it, snowy fields.
  "ua_pl-2": (s) => {
    s.sky("winter", { top: "#8a929a" });
    s.forest({ y: 470, type: "bare", s: 0.9, gap: 60, depth: 0.3 });
    s.ground(480, "snow").road({ vanish: [800, 480], w: 1100, color: "#6a6866", line: false });
    for (let i = 0; i < 7; i++) s.vehicle("truck", 800 + (i % 2) * 10, 520 + i * 10, { s: 0.3 + i * 0.03, color: "#c9c4bc" });
    [[560, 760, "#3f8a3a"], [1000, 780, "#c43a2a"]].forEach(([x, y, c]) => s.add(`<g><rect x="${x - 60}" y="${y - 70}" width="70" height="50" fill="${c}"/><rect x="${x}" y="${y - 50}" width="60" height="30" fill="${c}"/><circle cx="${x - 30}" cy="${y - 20}" r="34" fill="#2a2a2a"/><circle cx="${x + 46}" cy="${y - 10}" r="16" fill="#2a2a2a"/></g>`));
    return s;
  },
  // An ornate enamel and gold medal shaped like a white eagle on a deep red ribbon in an open velvet box on dark wood.
  "ua_pl-3": (s) => {
    s.mood("interior", { light: "#ffe2a6" });
    s.rect(0, 0, 1600, 900, "#2a1e18").glow(800, 450, 600, "#ffe2a6", 0.25);
    s.add('<rect x="400" y="200" width="800" height="520" rx="20" fill="#3a1a2a"/><rect x="430" y="230" width="740" height="460" rx="14" fill="#5a1e34"/>');
    s.add('<path d="M720,250 L880,250 L860,470 L800,430 L740,470 Z" fill="#a8222a"/>');
    s.add('<g transform="translate(800,520)"><path d="M0,-70 L18,-40 L80,-60 L60,-10 L100,10 L40,20 L20,70 L0,50 L-20,70 L-40,20 L-100,10 L-60,-10 L-80,-60 L-18,-40 Z" fill="#f4f2ee" stroke="#c9a24a" stroke-width="6"/><circle cx="0" cy="-10" r="14" fill="#c9a24a"/></g>');
    return s;
  },
};
