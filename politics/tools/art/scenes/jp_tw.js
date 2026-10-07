/* Japan & Taiwan */
module.exports = {
  // A red-brick colonial railway station with a small clock tower in a 1930s Taiwanese town, palms and a rickshaw, green mountains.
  "jp_tw-1": (s) => {
    s.sky("afternoon", { clouds: 3 })
      .mountains({ y: 440, amp: 200, color: "jungle", depth: 0.55, jag: false });
    s.ground(560, "#b9ad92");
    s.rect(380, 360, 840, 200, "#a65a44");
    for (let y = 380; y < 560; y += 44) s.rect(380, y, 840, 6, "#e6dfd0");
    for (let i = 0; i < 8; i++) s.path(`M${420 + i * 100},540 L${420 + i * 100},460 A24,24 0 0 1 ${468 + i * 100},460 L${468 + i * 100},540 Z`, "#4a3a32");
    s.rect(730, 200, 140, 170, "#a65a44").poly([[720, 200], [880, 200], [800, 130]], "#4a4e52");
    s.add('<circle cx="800" cy="260" r="34" fill="#efe9dc"/><line x1="800" y1="260" x2="800" y2="236" stroke="#2a2a2a" stroke-width="4"/><line x1="800" y1="260" x2="818" y2="268" stroke="#2a2a2a" stroke-width="4"/>');
    s.poly([[360, 360], [1240, 360], [1200, 330], [400, 330]], "#4a4e52");
    s.tree("palm", 240, 640, { s: 2.3 }).tree("palm", 1380, 640, { s: 2.1 }).tree("palm", 1500, 680, { s: 1.6 });
    s.add('<g transform="translate(980,690)"><circle cx="0" cy="-26" r="26" fill="none" stroke="#2f2a26" stroke-width="5"/><path d="M-30,-60 L30,-60 L40,-26 L-20,-26 Z" fill="#5a3a2c"/><path d="M-34,-62 Q0,-100 34,-62 Z" fill="#3a3430"/><line x1="40" y1="-30" x2="120" y2="-10" stroke="#5a4a3c" stroke-width="5"/></g>');
    s.person(1110, 690, 70, { color: "#3a3a3a" });
    return s;
  },
  // A large modern chip factory with long white buildings and cooling towers among green rice fields and hills, a volcano faint behind.
  "jp_tw-2": (s) => {
    s.sky("morning", { clouds: 3 });
    s.ridge({ y: 400, amp: 220, color: "rock", depth: 0.7, peak: 1150, peakW: 340, step: 40 });
    s.hills({ y: 470, amp: 70, color: "forest", depth: 0.45 });
    s.ground(480, "green", { depth: 0.2 });
    s.building(300, 560, 760, 90, { color: "#eceae4", cell: 30, roof: "flatdark" });
    s.building(1080, 560, 380, 130, { color: "#e2e0da", windows: false, roof: "flatdark" });
    for (let i = 0; i < 5; i++) s.rect(1110 + i * 66, 410, 44, 20, "#c9cbc8");
    s.rect(200, 560, 1300, 30, "#9a9a96");
    s.field(590, 900, { color: "grass", rows: 30 });
    for (let i = 0; i < 6; i++) s.add(`<line x1="0" y1="${620 + i * 50}" x2="1600" y2="${616 + i * 50}" stroke="#a7c4c9" stroke-width="3" opacity="0.6"/>`);
    return s;
  },
  // A small subtropical island with green hills and cliffs, a white lighthouse and a radar dome, a faint coastline on the horizon.
  "jp_tw-3": (s) => {
    s.sky("tropical", { clouds: 3 });
    s.ridge({ y: 470, amp: 60, color: "#7f93a6", depth: 0.8, x0: -20, x1: 900 });
    s.sea(472, { color: "#4f97a6" });
    s.ridge({ y: 640, amp: 240, color: "jungle", x0: 620, x1: 1660, step: 50, peak: 1100, peakW: 420 });
    s.add('<path d="M620,640 L700,620 L760,900 L560,900 Z" fill="#7a7064"/>');
    s.rect(1084, 300, 36, 112, "#f2f0ea").poly([[1076, 300], [1128, 300], [1102, 272]], "#b5543c").rect(1088, 284, 28, 16, "#fff3cf");
    s.rect(1196, 400, 56, 80, "#d9d6cc");
    s.add('<circle cx="1224" cy="392" r="38" fill="#f2f0ea"/>');
    s.ship("patrol", 380, 720, { s: 1.1 });
    s.add('<path d="M700,900 Q900,820 1640,800 L1640,900 Z" fill="#e8e0c8" opacity="0.6"/>');
    return s;
  },
};
