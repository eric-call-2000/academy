/* Canada and China */
module.exports = {
  // 19th-century labourers in wide hats laying a railway along a forested mountainside, a rough trestle over a gorge, sepia.
  "ca_cn-1": (s) => {
    s.sky("overcast", { top: "#a89a80", bottom: "#d9ccb0" });
    s.mountains({ y: 380, amp: 240, color: "#8a8478", depth: 0.4, snow: 0.45 }).fog(400, { h: 100 });
    s.ridge({ y: 900, amp: 480, color: "#5a5a44", peak: 300, peakW: 800 });
    s.forest({ y: 560, x0: -40, x1: 700, type: "pine", s: 1, gap: 30, color: "#3f4a34", spread: 200 });
    s.add('<g stroke="#6a5038" stroke-width="5">' + Array.from({ length: 9 }, (_, i) => `<line x1="${900 + i * 70}" y1="560" x2="${880 + i * 70}" y2="760"/><line x1="${900 + i * 70}" y1="560" x2="${940 + i * 70}" y2="760"/>`).join("") + '<line x1="880" y1="560" x2="1520" y2="560" stroke-width="10"/></g>');
    s.add('<path d="M-40,700 Q400,600 880,560" stroke="#8a7a5a" stroke-width="24" fill="none"/>');
    for (let i = 0; i < 6; i++) { const x = 200 + i * 110, y = 680 - i * 22; s.person(x, y, 70, { color: "#3a3430" }); s.add(`<ellipse cx="${x}" cy="${y - 64}" rx="22" ry="6" fill="#c9b07a"/>`); }
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.15"/>');
  },
  // A passenger jet taking off at night under floodlights, wet tarmac reflecting lights, a second plane waiting.
  "ca_cn-2": (s) => {
    s.sky("night", { stars: 30 });
    s.ground(560, "#2a2c30");
    for (let i = 0; i < 30; i++) s.add(`<circle cx="${i * 56}" cy="${640 + (i % 2) * 2}" r="3" fill="${i % 2 ? "#fff4d0" : "#5fa0e8"}"/>`);
    s.add('<g transform="translate(800,420) rotate(-12)"><path d="M120,0 Q110,-10 80,-10 L-90,-10 L-120,-40 L-130,-40 L-110,-6 L-120,0 L-110,6 L-90,10 L80,10 Q110,10 120,0 Z" fill="#e2e2de"/><path d="M10,-6 L-40,-70 L-60,-70 L-30,-6 Z M10,6 L-40,50 L-60,50 L-30,6 Z" fill="#c9c9c4"/></g>');
    s.plane("airliner", 1300, 600, { s: 0.6, dir: -1 });
    return s.add('<rect x="0" y="660" width="1600" height="240" fill="#f4f8ff" opacity="0.05"/>');
  },
  // A bright yellow canola field on the prairies under a big blue sky, old wooden grain elevators, a line of electric cars.
  "ca_cn-3": (s) => {
    s.sky("day", { top: "#3f7ab8" });
    s.rect(1100, 380, 70, 110, "#8a5a3a").poly([[1095, 380], [1175, 380], [1135, 340]], "#6a4a2e").rect(1250, 400, 60, 90, "#8a5a3a");
    s.ground(480, "#e8d02c").field(480, 900, { color: "#e8d02c", rows: 30 });
    s.add('<polygon points="-40,640 1640,600 1640,650 -40,700" fill="#5a5a5e"/>');
    for (let i = 0; i < 7; i++) s.vehicle("car", 160 + i * 200, 668 - i * 6, { s: 1, color: ["#f2f2ee", "#3a3e44", "#5a7a9a", "#a8322a"][i % 4] });
    return s;
  },
};
