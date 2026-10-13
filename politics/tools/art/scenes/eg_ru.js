/* Egypt & Russia */
module.exports = {
  // A huge low rock-fill dam across a wide river in a rocky desert, a lake behind and a lotus-shaped monument.
  "eg_ru-1": (s) => {
    s.sky("desert", { sun: [1350, 200], r: 40 });
    s.ridge({ y: 400, amp: 70, color: "#b8956a", depth: 0.5, step: 80 });
    s.rect(0, 400, 1600, 70, "#4f86ac");
    s.add('<path d="M-20,470 L1640,470 L1640,500 L1500,560 L100,560 L-20,500 Z" fill="#a89478"/><rect x="-20" y="462" width="1660" height="12" fill="#8a7a64"/>');
    s.ground(560, "desert");
    s.add('<path d="M640,560 L960,560 Q1000,700 1180,900 L420,900 Q600,700 640,560 Z" fill="#4a7a9a"/>');
    s.add('<g transform="translate(300,560)"><rect x="-14" y="-30" width="28" height="30" fill="#c9c4b8"/>' + [-1, -0.5, 0, 0.5, 1].map((a) => `<path d="M0,-30 Q${a * 60 - 20},-160 ${a * 50},-280 Q${a * 60 + 20},-160 0,-30 Z" fill="#e6e2d8"/>`).join("") + '</g>');
    s.pylons(1150, 1640, 560, { h: 120, gap: 200 });
    s.add('<rect x="740" y="520" width="120" height="40" fill="#8a7a64"/>');
    return s;
  },
  // A Red Sea resort beach with straw umbrellas and low white hotels, a coral reef and red desert mountains behind.
  "eg_ru-2": (s) => {
    s.sky("day", {});
    s.mountains({ y: 440, amp: 180, color: "#a8654a", depth: 0.3 });
    s.ground(440, "#d9c6a0");
    for (let i = 0; i < 8; i++) s.building(80 + i * 190, 500, 150, 50 + (i % 2) * 20, { color: "#f2efe8", cell: 18, roof: "flatdark" });
    s.add('<path d="M-20,900 L-20,640 Q800,600 1640,650 L1640,900 Z" fill="#3fa6b4"/><path d="M-20,700 Q800,660 1640,710 L1640,760 Q800,720 -20,760 Z" fill="#7fc6c8" opacity="0.6"/>');
    s.add('<path d="M-20,640 Q800,600 1640,650" stroke="#f2ead6" stroke-width="40" fill="none"/>');
    for (let i = 0; i < 12; i++) { const x = 60 + i * 130; s.add(`<line x1="${x}" y1="620" x2="${x}" y2="570" stroke="#7a5a3a" stroke-width="4"/><path d="M${x - 40},575 L${x},545 L${x + 40},575 Z" fill="#c9a66a"/>`); }
    for (let i = 0; i < 20; i++) s.add(`<ellipse cx="${(s.r() * 1600).toFixed(0)}" cy="${(800 + s.r() * 80).toFixed(0)}" rx="${(20 + s.r() * 40).toFixed(0)}" ry="8" fill="#2f7a80" opacity="0.5"/>`);
    return s;
  },
  // Four round concrete reactor buildings under construction on a flat sandy Mediterranean coast, tall cranes.
  "eg_ru-3": (s) => {
    s.sky("day", { clouds: 2 });
    s.sea(450, { color: "#3fa0b0" });
    s.add('<path d="M-20,900 L-20,560 Q800,520 1640,560 L1640,900 Z" fill="#d9c6a0"/>');
    [[250, 560], [580, 560], [910, 560], [1240, 560]].forEach(([x, y], i) => { const h = 200 - i * 30; s.add(`<rect x="${x - 90}" y="${y - h}" width="180" height="${h}" fill="#bfbab0"/>` + (i < 2 ? `<path d="M${x - 90},${y - h} A90,70 0 0 1 ${x + 90},${y - h} Z" fill="#cfcac0"/>` : `<rect x="${x - 90}" y="${y - h - 10}" width="180" height="10" fill="#9a958c"/>`)); });
    s.towerCrane(420, 560, 1.4).towerCrane(1080, 560, 1.5).towerCrane(1450, 560, 1.2);
    s.rect(0, 600, 1600, 20, "#b9a688");
    s.convoy("truck", 200, 1400, 700, { gap: 400, s: 0.9, color: "#d9a43c" });
    return s;
  },
};
