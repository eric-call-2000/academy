/* Germany & Israel */
module.exports = {
  // A 1950s cargo ship loaded with machinery crates at a North German harbour quay, steam cranes and brick warehouses.
  "de_il-1": (s) => {
    s.sky("overcast", { clouds: 5 });
    s.city({ y: 470, h: [60, 140], depth: 0.6, windows: false, color: "#8a6a5a" });
    s.sea(500, { lines: 50 });
    s.ship("bulk", 820, 620, { s: 1.6, hull: "#2f3438" });
    s.rect(0, 640, 1600, 260, "#6a6460");
    s.add('<line x1="0" y1="642" x2="1600" y2="642" stroke="#4a4642" stroke-width="6"/>');
    [[300, 1.3], [1250, 1.1]].forEach(([x, k]) => s.crane(x, 640, k, { color: "#4a4e52", boom: 260 }));
    for (let i = 0; i < 6; i++) s.crate ? s.crate(380 + i * 120, 760, 90, 60, { color: "#8a6a44" }) : s.rect(380 + i * 120, 700, 90, 60, "#8a6a44");
    s.add('<line x1="960" y1="430" x2="960" y2="560" stroke="#3a3a3a" stroke-width="3"/><rect x="930" y="560" width="60" height="40" fill="#7a5a3a"/>');
    s.smoke(1100, 500, { len: 200, dir: 1, opacity: 0.4 });
    [500, 620, 1000].forEach((x) => s.person(x, 800, 70, { color: "#3a3a40" }));
    return s;
  },
  // A dark diesel submarine sailing out of a Mediterranean harbour past a stone breakwater at dawn, lighthouse behind.
  "de_il-2": (s) => {
    s.sky("dawn", { sun: [1250, 400], r: 46 });
    s.hills({ y: 470, amp: 60, color: "#9a8a6a", depth: 0.5 });
    s.city({ y: 480, h: [30, 80], depth: 0.6, windows: false, color: "#d8cfbf" });
    s.sea(490, { glint: 1250 });
    s.add('<path d="M-20,600 L700,560 L720,580 L-20,640 Z" fill="#9a9284"/>');
    s.rect(640, 470, 26, 90, "#ece6da").rect(634, 460, 38, 14, "#b03a2e");
    s.add('<path d="M360,720 Q340,700 400,694 L1240,690 Q1300,694 1320,708 Q1300,726 1240,730 L400,734 Q350,732 360,720 Z" fill="#23262a"/><path d="M700,692 L716,640 L820,640 L828,692 Z" fill="#23262a"/><path d="M1320,708 L1370,690 L1374,728 Z" fill="#23262a"/>');
    s.add('<path d="M360,740 Q800,760 1320,740" stroke="#f2e6d0" stroke-width="3" fill="none" opacity="0.5"/>');
    return s;
  },
  // A grand stone parliament with a glass dome at dusk, a small crowd with plain placards on the lawn.
  "de_il-3": (s) => {
    s.sky("dusk", { clouds: 3 });
    s.rect(300, 330, 1000, 190, "#b9ab94").rect(290, 316, 1020, 18, "#a69a84");
    for (let i = 0; i < 6; i++) s.rect(640 + i * 56, 360, 26, 150, "#d2c6ae");
    s.rect(300, 270, 110, 60, "#b9ab94").rect(1190, 270, 110, 60, "#b9ab94");
    s.add('<path d="M680,316 Q800,170 920,316 Z" fill="#9ab0c4" opacity="0.85"/><path d="M700,316 Q800,200 900,316" stroke="#e6eef4" stroke-width="3" fill="none"/>');
    s.glow(800, 260, 140, "#ffd59a", 0.4);
    for (let i = 0; i < 14; i++) s.rect(340 + i * 66, 400, 22, 40, "#ffd59a", 'opacity="0.55"');
    s.ground(520, "grass");
    s.lamps(150, 1450, 560, 140, { gap: 260 });
    s.crowd({ y: 760, rows: 3, h: 80, gap: 40, rowGap: 40, thin: 0.3, signs: 9, colors: ["#2a2c38", "#3a3440", "#4a4a5a", "#5a3a3a"] });
    return s;
  },
};
