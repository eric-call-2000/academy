/* France & Nigeria */
module.exports = {
  // An old four-engine propeller cargo plane on a rough red-earth jungle airstrip at dusk, crates being unloaded.
  "fr_ng-1": (s) => {
    s.sky("dusk", { clouds: 3 });
    s.forest({ y: 500, type: "oak", s: 1.0, depth: 0.5, gap: 30, color: "#2f4a34" });
    s.ground(520, "red");
    s.add('<polygon points="0,560 1600,540 1600,620 0,660" fill="#8a4a32"/>');
    s.add('<g transform="translate(820,600)"><ellipse cx="0" cy="34" rx="330" ry="14" fill="#000" opacity="0.2"/><path d="M-320,-10 Q-330,-34 -290,-40 L260,-44 Q330,-40 340,-20 Q330,0 260,4 L-290,6 Q-326,4 -320,-10 Z" fill="#5a5e58"/><path d="M-300,-40 L-340,-120 L-300,-120 L-250,-42 Z" fill="#4a4e48"/><rect x="-200" y="-36" width="420" height="10" fill="#4a4e48"/>' + [-150, -60, 80, 170].map((x) => `<rect x="${x - 14}" y="-50" width="28" height="22" rx="6" fill="#3a3e38"/><line x1="${x + 16}" y1="-70" x2="${x + 16}" y2="-12" stroke="#2a2a2a" stroke-width="3"/>`).join("") + '<circle cx="-120" cy="24" r="12" fill="#222"/><circle cx="160" cy="24" r="12" fill="#222"/><rect x="-60" y="-30" width="90" height="34" fill="#2a2a2a"/></g>');
    [[620, 700], [700, 710], [560, 720]].forEach(([x, y]) => s.rect(x, y - 30, 50, 30, "#7a6a4a"));
    [640, 720, 600].forEach((x, i) => s.person(x, 700 + i * 8, 54, { color: "#2a2a2e" }));
    return s;
  },
  // A huge floating oil production ship moored at sea off West Africa, a supply boat, a gas flare, tall clouds.
  "fr_ng-2": (s) => {
    s.sky("tropical", { clouds: 6, cloudY: [100, 320] });
    s.sea(520);
    s.add('<path d="M380,600 L1240,600 L1220,640 L400,640 Z" fill="#7a4a3a"/>');
    s.rect(420, 540, 160, 60, "#e6e2da").rect(440, 500, 100, 40, "#d6d2ca");
    s.pipes(600, 1200, 600, { count: 2, r: 10 });
    [700, 820, 940, 1060].forEach((x) => s.rect(x, 520, 60, 40, "#9aa0a4"));
    s.rect(1180, 400, 10, 200, "#8a8f92"); s.flare(1185, 400, 1.0);
    s.add('<line x1="1000" y1="600" x2="1000" y2="430" stroke="#c9a33a" stroke-width="6"/><line x1="1000" y1="430" x2="1120" y2="480" stroke="#c9a33a" stroke-width="4"/>');
    s.ship("patrol", 300, 700, { s: 0.8, hull: "#c9a33a" });
    return s;
  },
  // A classical stone palace courtyard in Paris lit warmly at night, a black car arriving through tall iron gates.
  "fr_ng-3": (s) => {
    s.sky("night", { stars: 20 });
    s.rect(200, 300, 1200, 300, "#c9bfa8");
    s.rect(560, 230, 480, 80, "#c9bfa8").poly([[540, 232], [1060, 232], [800, 170]], "#b4a98f");
    for (let i = 0; i < 14; i++) s.rect(240 + i * 80, 360, 36, 90, "#ffd59a", 'opacity="0.75"');
    for (let i = 0; i < 14; i++) s.rect(240 + i * 80, 480, 36, 90, "#ffd59a", 'opacity="0.6"');
    s.glow(800, 450, 600, "#ffd59a", 0.18);
    s.ground(600, "#8a8070");
    s.vehicle("car", 800, 760, { s: 2.2, color: "#1a1c20" });
    s.add('<g stroke="#1a1a1c" stroke-width="5">' + Array.from({ length: 40 }, (_, i) => `<line x1="${i * 40}" y1="900" x2="${i * 40}" y2="780"/>`).filter((_, i) => i < 14 || i > 26).join("") + '</g><rect x="0" y="790" width="560" height="8" fill="#1a1a1c"/><rect x="1080" y="790" width="520" height="8" fill="#1a1a1c"/>');
    [560, 1080].forEach((x) => s.rect(x - 16, 740, 32, 160, "#b9ae96"));
    s.forest({ y: 620, x0: 100, x1: 300, type: "cypress", s: 0.9, gap: 60 }).forest({ y: 620, x0: 1300, x1: 1500, type: "cypress", s: 0.9, gap: 60 });
    return s;
  },
};
