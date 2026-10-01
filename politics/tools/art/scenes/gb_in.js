/* United Kingdom and India */
module.exports = {
  // An overcrowded 1947 steam train with people on its roof and clinging to doors, crossing a flat dusty plain, hazy sky.
  "gb_in-1": (s) => {
    s.sky("haze", { top: "#b8a888" });
    s.ground(500, "#c4a87a");
    s.train(200, 1500, 640, { color: "#3a302a", steam: true, people: true, s: 1.4 });
    for (let i = 0; i < 40; i++) s.add(`<circle cx="${220 + i * 32}" cy="${560 - (i % 2) * 6}" r="8" fill="${s.r.pick(["#e8e0cf", "#3a3030", "#c9a07a"])}"/>`);
    for (let i = 0; i < 8; i++) s.person(320 + i * 160, 650, 40, { color: "#3a3030", robe: "#e8e0cf" });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.15"/>');
  },
  // An ornate jewelled crown with a large oval diamond on a purple velvet cushion in a glass case, dim museum light.
  "gb_in-2": (s) => {
    s.mood("night", { light: "#ffe9bf" });
    s.rect(0, 0, 1600, 900, "#1a1a20").glow(800, 480, 500, "#ffe9bf", 0.3);
    s.add('<rect x="460" y="200" width="680" height="560" fill="#dfe9ee" opacity="0.08" stroke="#8a9aa6" stroke-width="3"/><rect x="460" y="760" width="680" height="140" fill="#2a2a30"/>');
    s.add('<ellipse cx="800" cy="680" rx="220" ry="50" fill="#5a2a7a"/><ellipse cx="800" cy="664" rx="200" ry="40" fill="#6a3a8a"/>');
    s.add('<path d="M640,640 L640,500 L700,560 L760,460 L800,540 L840,460 L900,560 L960,500 L960,640 Z" fill="#c9a24a"/><rect x="630" y="620" width="340" height="30" fill="#b8902a"/>');
    s.add('<ellipse cx="800" cy="590" rx="30" ry="40" fill="#f4faff"/><ellipse cx="792" cy="580" rx="10" ry="14" fill="#ffffff"/>');
    for (let i = 0; i < 8; i++) s.add(`<circle cx="${660 + i * 40}" cy="635" r="7" fill="${["#c4322a", "#3f8a5a", "#3f6aa8", "#f4faff"][i % 4]}"/>`);
    return s.beam(1300, 0, 140, { len: 600, w: 60, opacity: 0.08 });
  },
  // Wooden crates of whisky being loaded onto a cargo ship at a busy port, containers and cranes, grey northern sky.
  "gb_in-3": (s) => {
    s.sky("overcast", { top: "#7a8088" });
    s.sea(440, { color: "#5a6a74" });
    s.ship("container", 700, 520, { s: 1.2 });
    s.crane(1100, 560, 1.1, { color: "#c4573c" });
    s.rect(0, 560, 1600, 340, "#7a7672");
    s.containers(1200, 700, 8, 4, { w: 48, h: 24 });
    for (let r = 0; r < 3; r++) for (let i = 0; i < 6; i++) s.crate(120 + i * 110, 820 - r * 64, 100, 60, { color: "#8a6a44" });
    return s.add('<rect x="1060" y="500" width="100" height="60" fill="#8a6a44" stroke="#5a3e28" stroke-width="3"/><line x1="1110" y1="420" x2="1110" y2="500" stroke="#3a3a3a" stroke-width="3"/>');
  },
};
