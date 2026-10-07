/* United Kingdom and China */
module.exports = {
  // Wooden sailing warships and a black steam paddle gunboat firing at a stone fort on a wide river in the 1840s, junks.
  "gb_cn-1": (s) => {
    s.sky("overcast", { top: "#8a8478", bottom: "#c9bca4" });
    s.hills({ y: 440, amp: 120, color: "#6a7a5a", depth: 0.35 });
    s.fortWall(900, 1500, 470, 60, { color: "#9a8e7a" }).rect(1100, 380, 80, 90, "#9a8e7a");
    s.sea(480, { color: "#8a8e84" });
    s.ship("tall", 400, 600, { s: 0.9, dir: 1 }).ship("steam", 700, 680, { s: 0.8, hull: "#1e1e22" });
    [[480, 560], [760, 620]].forEach(([x, y]) => { s.glow(x + 120, y, 40, "#ffb85a", 0.8); s.smoke(x + 120, y, { len: 300, w: 40 }); });
    s.ship("dhow", 1300, 560, { s: 0.6, sail: "#a87a4a", dir: -1 }).ship("dhow", 1450, 600, { s: 0.5, sail: "#a87a4a", dir: -1 });
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.15"/>');
  },
  // A tall phone mast on a green hill above a small brick town, two engineers in hard hats removing grey equipment boxes.
  "gb_cn-2": (s) => {
    s.sky("overcast");
    s.hills({ y: 560, amp: 260, color: "#6f8a52", peak: 900, peakW: 500 });
    for (let k = 0; k < 4; k++) for (let x = -20 + k * 40; x < 700; x += 70) s.house(x, 640 + k * 50, 60, 40, { color: "#8a5040", roofColor: "#4a3a3a" });
    s.add('<g stroke="#8a8e92" stroke-width="5" fill="none"><path d="M860,310 L900,60 L940,310"/><path d="M870,250 L930,250 M880,180 L920,180 M890,110 L910,110 M870,250 L920,180 M880,180 L910,110"/></g>');
    s.rect(870, 120, 24, 50, "#9aa0a4").rect(906, 140, 24, 50, "#9aa0a4");
    s.rect(850, 200, 100, 8, "#5a5e64");
    return s.person(870, 200, 30, { hat: "hard", color: "#e0782c" }).person(930, 200, 30, { hat: "hard", color: "#e0782c" });
  },
  // A grand pale Georgian building behind black railings near a medieval fortress, a crowd with umbrellas and blank placards.
  "gb_cn-3": (s) => {
    s.sky("overcast", { top: "#7a8088" });
    s.fortWall(1100, 1640, 460, 120, { color: "#a8a094", depth: 0.3 }).rect(1240, 260, 120, 200, s.c("#a8a094", 0.3));
    s.rect(200, 240, 840, 300, "#d9d2c2");
    for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) s.rect(240 + i * 90, 280 + r * 80, 40, 56, "#4a4a52");
    s.ground(540, "#6a6866");
    s.add('<g stroke="#121212" stroke-width="4">' + Array.from({ length: 40 }, (_, i) => `<line x1="${180 + i * 22}" y1="640" x2="${180 + i * 22}" y2="560"/>`).join("") + '<line x1="180" y1="570" x2="1060" y2="570"/></g>');
    s.crowd({ y: 820, rows: 3, h: 110, gap: 40, rowGap: 40, signs: 10, umbrellas: ["#2a2a2e", "#3a3a40", "#5a2a2a"], colors: ["#2a2a2e", "#3a3a40", "#4a4040"] });
    return s.rain({ count: 160 });
  },
};
