/* UAE & Egypt */
module.exports = {
  // A low whitewashed 1970s school with arched windows in a desert town, palms and a sandy yard where children play.
  "ae_eg-1": (s) => {
    s.sky("desert", { sun: [300, 200], r: 44 });
    s.ground(520, "sand");
    s.forest({ y: 520, x0: -40, x1: 300, type: "palm", s: 1.2, gap: 80 }).forest({ y: 520, x0: 1360, x1: 1640, type: "palm", s: 1.2, gap: 80 });
    s.rect(300, 330, 1000, 200, "#efe9dc").rect(290, 320, 1020, 14, "#ddd5c4");
    for (let i = 0; i < 10; i++) { const x = 340 + i * 96; if (i === 5) continue; s.add(`<path d="M${x},440 L${x},380 A24,24 0 0 1 ${x + 48},380 L${x + 48},440 Z" fill="#6a8aa0"/>`); }
    s.rect(820, 400, 60, 130, "#5a4632");
    s.person(800, 530, 66, { color: "#3a3a44" });
    for (let i = 0; i < 14; i++) s.person(s.r.range(250, 1350), s.r.range(620, 820), s.r.range(34, 48), { color: s.r.pick(["#5a6a8a", "#8a5a4a", "#e8e2d2", "#4a6a5a"]), walk: true });
    s.add('<line x1="200" y1="760" x2="200" y2="640" stroke="#6a6a6a" stroke-width="5"/><rect x="190" y="620" width="70" height="40" fill="none" stroke="#6a6a6a" stroke-width="4"/>');
    return s;
  },
  // A new government district rising from the desert: towers, domed buildings, an empty boulevard of young trees, cranes.
  "ae_eg-2": (s) => {
    s.sky("haze", { sun: [1300, 220], r: 50 });
    s.city({ y: 470, h: [120, 300], depth: 0.5, style: "mideast" });
    s.add('<polygon points="760,330 800,330 812,470 748,470" fill="#cfc4b0"/><rect x="772" y="250" width="16" height="80" fill="#cfc4b0"/>');
    s.towerCrane(300, 470, 0.9, { depth: 0.3 }).towerCrane(1100, 470, 1.1, { depth: 0.3 }).towerCrane(1450, 470, 0.8, { depth: 0.4 });
    s.mosque(500, 500, 0.6, { color: "#e6dcc6" });
    s.portico(1150, 520, 0.8, { color: "#ebe5d6", w: 460, h: 160, cols: 10, dome: true });
    s.ground(520, "sand");
    s.add('<polygon points="780,520 820,520 1300,900 300,900" fill="#c9c2b2"/>');
    for (let i = 0; i < 8; i++) { const t = i / 7, y = 540 + t * t * 340, k = 0.4 + t * 1.6; s.tree("oak", 780 - t * 520, y, { s: k * 0.6, color: "#7a9a5a" }).tree("oak", 820 + t * 520, y, { s: k * 0.6, color: "#7a9a5a" }); }
    s.fog(520, { h: 60, opacity: 0.35 });
    return s;
  },
  // A turquoise Mediterranean bay with white beaches and limestone headlands, new resort buildings beside tower cranes.
  "ae_eg-3": (s) => {
    s.sky("day", { clouds: 2 });
    s.sea(430, { color: "#3fa6b4" });
    s.add('<path d="M-20,430 Q100,380 260,400 L320,470 Q200,500 -20,520 Z" fill="#d9ccae"/><path d="M1300,430 Q1450,370 1640,390 L1640,560 Q1450,540 1360,500 Z" fill="#d9ccae"/>');
    s.add('<path d="M-20,900 L-20,640 Q400,560 800,590 Q1200,620 1640,560 L1640,900 Z" fill="#efe6cf"/><path d="M-20,640 Q400,560 800,590 Q1200,620 1640,560" stroke="#8fd0d4" stroke-width="10" fill="none" opacity="0.7"/>');
    for (let i = 0; i < 7; i++) { const x = 120 + i * 200, w = 140, h = 60 + (i % 3) * 30; s.building(x, 760, w, h, { color: i === 2 || i === 5 ? "#c9c2b2" : "#f2efe6", cell: 18, roof: "flatdark" }); }
    s.towerCrane(520, 700, 0.9).towerCrane(1180, 700, 1.0);
    s.add('<path d="M-20,860 Q600,800 1640,840" stroke="#b9a684" stroke-width="30" fill="none"/>');
    s.vehicle("truck", 900, 838, { s: 0.9, color: "#d4a43c" });
    return s;
  },
};
