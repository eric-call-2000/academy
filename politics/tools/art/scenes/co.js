/* Colombia */
module.exports = {
  // A small arched stone bridge over a stream in a green Andean valley, towering clouds in a bright sky.
  "co-9": (s) => {
    s.sky("day");
    s.clouds(5, [60, 300], "#ffffff");
    s.mountains({ y: 420, amp: 160, color: "#6a8a6a", depth: 0.5 });
    s.hills({ y: 540, amp: 90, color: "#5a8a4a", depth: 0.2 });
    s.ground(560, "#6a9a4a");
    s.add('<path d="M0,760 C300,700 600,720 760,690 C900,665 1100,700 1600,640 L1600,700 C1100,760 900,725 760,750 C600,780 300,770 0,820 Z" fill="#7a98a8"/>');
    s.add('<path d="M600,700 L600,660 Q760,560 920,660 L920,700 L860,700 Q760,620 660,700 Z" fill="#a8a092"/><rect x="590" y="650" width="340" height="16" fill="#9a9284"/>');
    s.tree("oak", 300, 640, { s: 1.4 }).tree("oak", 1250, 600, { s: 1.2 }).tree("oak", 1420, 620, { s: 1.3 });
    return s;
  },
  // Steep cloud-forest mountains, a winding red dirt road down to a village of white houses with red roofs and a church.
  "co-3": (s) => {
    s.sky("overcast");
    s.mountains({ y: 360, amp: 240, color: "#4a6a4a", depth: 0.4 });
    s.fog(330, { h: 110, opacity: 0.55 });
    s.ridge({ y: 560, amp: 220, color: "#3e5e3e", peak: 300, peakW: 500, x0: -200, x1: 900 });
    s.ridge({ y: 600, amp: 200, color: "#456a44", peak: 1300, peakW: 500, x0: 800, x1: 1800 });
    s.add('<path d="M300,380 C500,460 300,560 600,600 C800,630 700,700 900,760" stroke="#a8603a" stroke-width="14" fill="none"/>');
    s.ground(720, "#5a7a44");
    [[700, 760], [800, 740], [900, 770], [1000, 750], [1100, 770], [760, 820], [960, 830]].forEach(([x, y]) => s.house(x, y, 80, 50, { color: "#f0ece4", roofColor: "#b04a30" }));
    s.rect(1180, 700, 110, 80, "#f0ece4").rect(1290, 660, 40, 120, "#f0ece4").poly([[1286, 660], [1310, 630], [1334, 660]], "#b04a30").poly([[1176, 700], [1235, 670], [1294, 700]], "#b04a30");
    return s.fog(500, { h: 60, opacity: 0.3 });
  },
  // A 1940s street of colonial buildings with wooden balconies, an overturned tram, smoke and flames under a dark sky.
  "co-10": (s) => {
    s.sky("storm", { top: "#3a3438", bottom: "#8a6a5a" });
    for (let i = 0; i < 6; i++) {
      const x = i * 280;
      s.rect(x, 300, 260, 360, ["#d8ccb8", "#c8b8a0", "#e0d4c0"][i % 3]);
      for (let k = 0; k < 3; k++) s.rect(x + 30 + k * 80, 360, 40, 70, "#3a3030");
      s.rect(x + 10, 440, 240, 14, "#6a4a30");
      for (let k = 0; k < 3; k++) s.rect(x + 30 + k * 80, 480, 40, 90, "#4a3a30");
    }
    s.fire(420, 360, 120).fire(1180, 340, 160);
    s.smoke(440, 320, { len: 340, w: 80, rise: 1.6 }).smoke(1200, 300, { len: 360, w: 90, rise: 1.6 });
    s.ground(660, "#7a7068");
    s.add('<g transform="rotate(-12 760 760)"><rect x="620" y="700" width="300" height="90" fill="#8a3a2a"/><rect x="640" y="715" width="260" height="30" fill="#2a2420"/></g>');
    return s.papers(300, 820, 14);
  },
  // A large colonial square at dusk with people holding white balloons and candles, a twin-towered cathedral behind.
  "co-11": (s) => {
    s.sky("dusk");
    s.rect(500, 260, 600, 340, "#d8ccb8");
    s.rect(500, 160, 130, 440, "#d0c4b0").rect(970, 160, 130, 440, "#d0c4b0");
    s.poly([[500, 160], [565, 100], [630, 160]], "#b8a890").poly([[970, 160], [1035, 100], [1100, 160]], "#b8a890");
    s.add('<path d="M760,600 L760,470 A40,40 0 0 1 840,470 L840,600 Z" fill="#4a3a30"/>');
    s.ground(600, "#8a7a6a");
    s.lamps(80, 1540, 640, 150, { gap: 320 });
    s.crowd({ y: 700, rows: 5, h: 70, gap: 14, rowGap: 40 });
    for (let i = 0; i < 40; i++) s.add(`<line x1="${(i * 41) % 1600}" y1="${640 - (i % 5) * 10}" x2="${(i * 41) % 1600 + 4}" y2="${520 - (i * 13) % 120}" stroke="#ece6da" stroke-width="1"/><circle cx="${(i * 41) % 1600 + 4}" cy="${510 - (i * 13) % 120}" r="14" fill="#f6f4ee"/>`);
    return s.candles(100, 1500, 880, 40);
  },
  // A neoclassical building with a long colonnade on a vast stone square, green mountains directly behind.
  "co-4": (s) => {
    s.sky("overcast");
    s.mountains({ y: 400, amp: 260, color: "#4a6a52", depth: 0.2 });
    s.city({ y: 470, h: [40, 120], depth: 0.35 });
    s.portico(800, 600, 1.6, { cols: 14, color: "#e2ddd0" });
    s.ground(600, "#9a948a");
    for (let i = 0; i < 12; i++) s.add(`<line x1="0" y1="${620 + i * 24}" x2="1600" y2="${620 + i * 24}" stroke="#8a847a" stroke-width="1"/>`);
    return s.birds(300, 760, 8, { color: "#4a4a4a" });
  },
  // A large outdoor stage with bright lights and screens in a city square at night, a crowd, palms and lit hills.
  "co-5": (s) => {
    s.sky("night", { stars: 20 });
    s.hills({ y: 440, amp: 120, color: "#1e2430", depth: 0 });
    for (let i = 0; i < 80; i++) s.add(`<circle cx="${(i * 53) % 1600}" cy="${360 + (i * 29) % 80}" r="2" fill="#ffd88a"/>`);
    s.forest({ y: 560, type: "palm", s: 1, gap: 220, x0: 0, x1: 1600, color: "#14181e" });
    s.rect(420, 340, 760, 220, "#2a2a30").rect(460, 370, 300, 150, "#d8e4f0").rect(840, 370, 300, 150, "#d8e4f0");
    s.rect(400, 320, 800, 20, "#3a3a40");
    s.beam(500, 330, -110, { len: 400, w: 30 }).beam(1100, 330, -70, { len: 400, w: 30 });
    s.ground(560, "#2a2a2e");
    return s.crowd({ y: 680, rows: 6, h: 70, gap: 14, rowGap: 40 });
  },
  // Bright green coca patches on steep jungle hillsides, a small crop-spraying plane flying low, a river below.
  "co-6": (s) => {
    s.sky("haze");
    s.mountains({ y: 360, amp: 200, color: "#3a5a3a", depth: 0.4 });
    s.ridge({ y: 700, amp: 380, color: "#2e5030", peak: 500, peakW: 700, x0: -200, x1: 1200 });
    s.ridge({ y: 720, amp: 320, color: "#34583a", peak: 1300, peakW: 600, x0: 700, x1: 1800 });
    [[380, 460, 160, 70], [520, 420, 140, 60], [600, 520, 180, 80], [1180, 500, 160, 70], [1320, 560, 150, 60]].forEach(([x, y, w, h]) => s.poly([[x, y], [x + w, y - 20], [x + w + 10, y + h], [x + 10, y + h + 20]], "#8ac850"));
    s.add('<path d="M700,900 C800,820 860,760 980,720" stroke="#7a98a0" stroke-width="40" fill="none"/>');
    s.plane("cargo", 900, 340, { s: 0.5, color: "#e8e2d2" });
    s.add('<path d="M860,350 L760,420 L1040,420 L940,350 Z" fill="#e8f0e0" opacity="0.25"/>');
    return s.forest({ y: 900, type: "palm", s: 1.4, gap: 300, x0: 0, x1: 1600, color: "#1e3a22" });
  },
  // A hillside town after an earthquake: collapsed and cracked houses, white rescue tents and trucks in a muddy street.
  "co-7": (s) => {
    s.sky("overcast");
    s.mountains({ y: 380, amp: 160, color: "#4a6a4a", depth: 0.4 });
    s.ground(480, "#6a7a54");
    for (let i = 0; i < 7; i++) { const x = 80 + i * 210, y = 580; if (i % 3 === 1) s.poly([[x, y], [x + 60, y - 50], [x + 120, y - 20], [x + 170, y]], "#a8644a"); else { s.rect(x, y - 140, 170, 140, ["#c87a5a", "#d8ccb8", "#b8a890"][i % 3]); s.add(`<path d="M${x + 40},${y - 140} L${x + 70},${y - 90} L${x + 50},${y - 50} L${x + 90},${y}" stroke="#3a3030" stroke-width="3" fill="none"/>`); } }
    s.ground(600, "#7a6a54");
    s.tents(300, 1300, 720, { rows: 1, gap: 200, w: 110, color: "#f0f0ec" });
    s.vehicle("truck", 1300, 780, { s: 1.3, color: "#c8c4b8" });
    s.papers(200, 820, 12);
    return s.fog(560, { h: 80, opacity: 0.3 });
  },
  // A valley city of red-brick buildings climbing steep hillsides at dusk, cable cars on wires, lights coming on.
  "co-12": (s) => {
    s.sky("dusk");
    s.ridge({ y: 640, amp: 420, color: "#4a5a3a", peak: 200, peakW: 600, x0: -300, x1: 900 });
    s.ridge({ y: 640, amp: 380, color: "#526240", peak: 1400, peakW: 600, x0: 700, x1: 1900 });
    s.poly([[0, 380], [800, 650], [1600, 380], [1600, 900], [0, 900]], "#5a6a44");
    for (let i = 0; i < 160; i++) { const x = (i * 97) % 1600, side = x < 800 ? x : 1600 - x, y = 400 + side * 0.33 + (i % 7) * 9; s.rect(x, y, 30, 20, i % 3 ? "#b0583a" : "#c06a48"); if (i % 4 === 0) s.rect(x + 8, y + 6, 6, 6, "#ffd88a"); }
    s.city({ y: 700, h: [80, 200], style: "modern", lit: true, depth: 0.2 });
    s.add('<line x1="0" y1="260" x2="800" y2="560" stroke="#2a2a2a" stroke-width="2"/><line x1="0" y1="270" x2="800" y2="570" stroke="#2a2a2a" stroke-width="2"/>');
    for (let k = 1; k < 5; k++) s.rect(k * 160 - 14, 260 + k * 60, 28, 24, "#d84a3a");
    return s.ground(700, "#3a3430");
  },
  // A skyline at sunset of towers and red-brick buildings beneath steep mountains with a white church on the peak.
  "co-8": (s) => {
    s.sky("dusk", { top: "#4a4a7a", bottom: "#f0a070" });
    s.ridge({ y: 560, amp: 420, color: "#2e4430", peak: 1100, peakW: 900, x0: 0, x1: 1800 });
    s.rect(1080, 128, 40, 30, "#f4f0e8").poly([[1076, 128], [1100, 104], [1124, 128]], "#f4f0e8");
    s.fog(300, { h: 60, opacity: 0.35 });
    s.tower(700, 620, 70, 360, { color: "#8a90a0" }).tower(820, 620, 60, 300, { color: "#7a8090" });
    s.city({ y: 620, h: [60, 180], lit: true, depth: 0.15 });
    for (let i = 0; i < 40; i++) s.rect((i * 41) % 1600, 600 + (i % 4) * 20, 36, 60, i % 2 ? "#a85a3a" : "#b8664a");
    return s.ground(700, "#3a3430");
  }
};
