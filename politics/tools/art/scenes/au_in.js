/* Australia & India */
module.exports = {
  // A cricket match in a vast oval stadium under floodlights at dusk, tiny players on a green field.
  "au_in-1": (s) => {
    s.sky("dusk", { clouds: 3 });
    s.add('<ellipse cx="800" cy="560" rx="900" ry="330" fill="#2f3446"/>');
    for (let i = 0; i < 9; i++) s.add(`<ellipse cx="800" cy="${560 - i * 6}" rx="${900 - i * 40}" ry="${330 - i * 16}" fill="${i % 2 ? "#3a4056" : "#353a4e"}"/>`);
    for (let i = 0; i < 260; i++) { const a = Math.random() * Math.PI, rx = 560 + s.r() * 300, ry = 220 + s.r() * 100; s.add(`<circle cx="${(800 + Math.cos(a + Math.PI) * rx).toFixed(0)}" cy="${(560 - Math.sin(a) * ry).toFixed(0)}" r="2" fill="${s.r.pick(["#c9b9a6", "#8a8fa0", "#d9a46a", "#6a7a9a"])}" opacity="0.7"/>`); }
    s.add('<ellipse cx="800" cy="640" rx="560" ry="200" fill="#4f8a4a"/><ellipse cx="800" cy="640" rx="420" ry="150" fill="#5a9652"/><rect x="770" y="600" width="60" height="90" fill="#c9b98a"/>');
    [[130, 160], [1470, 160], [420, 90], [1180, 90]].forEach(([x, top]) => { s.rect(x - 5, top, 10, 420 - top + 80, "#2a2d36"); s.rect(x - 40, top - 30, 80, 34, "#e8e4d8"); s.glow(x, top - 12, 140, "#fff4cf", 0.55); });
    [[800, 590], [800, 700], [640, 640], [960, 620], [700, 560], [1000, 690], [560, 700], [1120, 600], [880, 520], [740, 640], [860, 650]].forEach(([x, y]) => s.person(x, y, 22, { color: "#f2efe6" }));
    return s;
  },
  // Students walking across a sunny university quadrangle with sandstone cloisters and purple jacaranda trees.
  "au_in-2": (s) => {
    s.sky("afternoon", { clouds: 2 });
    s.rect(120, 220, 1360, 300, "#d9bf8a").poly([[100, 220], [1500, 220], [1460, 170], [140, 170]], "#8a6a4a");
    s.rect(720, 80, 160, 140, "#d9bf8a").poly([[710, 80], [890, 80], [800, 20]], "#8a6a4a");
    for (let i = 0; i < 14; i++) { const x = 160 + i * 94; s.path(`M${x},520 L${x},420 A32,32 0 0 1 ${x + 64},420 L${x + 64},520 Z`, "#7a6448"); s.rect(x + 12, 260, 40, 80, "#8f9ca6"); }
    s.ground(520, "grass");
    s.rect(0, 600, 1600, 70, "#c9b99a");
    [[200, 640, 2.4], [1400, 650, 2.6], [760, 560, 1.4]].forEach(([x, y, k]) => s.tree("oak", x, y, { s: k, color: "#9a6ac0" }));
    s.crowd({ y: 690, x0: 300, x1: 1300, rows: 2, h: 70, gap: 90, thin: 0.35, walk: true, colors: ["#3b3a3f", "#4a6a8a", "#8a4a3a", "#3a5a4a", "#c9a24a"] });
    return s;
  },
  // A large aircraft carrier and a grey frigate in formation on a calm deep-blue ocean, a helicopter overhead.
  "au_in-3": (s) => {
    s.sky("day", { clouds: 4 });
    s.sea(450, { color: "#3f6f8f", glint: 1200 });
    s.ship("frigate", 1180, 520, { s: 0.9, depth: 0.25, dir: -1 });
    s.ship("carrier", 640, 660, { s: 1.9, dir: -1 });
    s.add('<path d="M1060,690 Q1400,700 1640,720" stroke="#e8eef2" stroke-width="10" opacity="0.4" fill="none"/><path d="M1300,526 Q1450,530 1640,536" stroke="#e8eef2" stroke-width="5" opacity="0.4" fill="none"/>');
    s.plane("heli", 980, 280, { s: 1.0, dir: -1 });
    s.plane("jet", 300, 230, { s: 0.5, dir: -1, color: "#7a828a" });
    return s;
  },
};
