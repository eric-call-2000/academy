/* UAE & Iran */
module.exports = {
  // Old coral-stone houses with tall square wind towers beside a creek crowded with wooden dhows, warm afternoon.
  "ae_ir-1": (s) => {
    s.sky("golden", { sun: [1350, 300], r: 46 });
    s.rect(0, 540, 1600, 30, "#b9a07a");
    [[120, 1.7], [400, 2.0], [680, 1.6], [940, 1.9], [1200, 1.7], [1460, 2.0]].forEach(([x, k]) => s.windTower(x, 548, k, { color: "#c4a272" }));
    s.sea(570, { color: "#6a8a8a", lines: 40 });
    [[200, 640, 1.0], [520, 660, 1.2], [860, 650, 1.1], [1220, 670, 1.3]].forEach(([x, y, k]) => s.ship("dhow", x, y, { s: k }));
    s.rect(0, 760, 1600, 140, "#b9a07a");
    for (let i = 0; i < 10; i++) s.rect(100 + i * 150, 740, 60, 30, s.r.pick(["#8a6a44", "#a8885a", "#7a5a3a"]));
    [260, 700, 1100].forEach((x) => s.person(x, 800, 60, { color: "#e6e0d2", robe: "#e6e0d2" }));
    return s;
  },
  // A busy creek wharf stacked with goods, dhows moored side by side, glass towers in the haze behind.
  "ae_ir-2": (s) => {
    s.sky("haze", {});
    s.city({ y: 520, h: [180, 420], depth: 0.55, wmin: 50, wmax: 100, color: "#8a9aa4" });
    s.add('<polygon points="1200,520 1214,140 1228,520" fill="#9aa8b0" opacity="0.8"/>');
    s.sea(520, { color: "#5a7a7a", lines: 30 });
    for (let i = 0; i < 5; i++) s.ship("dhow", 180 + i * 300, 640, { s: 1.1 + (i % 2) * 0.15 });
    s.rect(0, 680, 1600, 220, "#9a8a70");
    for (let i = 0; i < 18; i++) { const x = 40 + i * 88, h = 30 + (i % 3) * 30; s.rect(x, 740 - h, 80, h, s.r.pick(["#c9b89a", "#8a6a4a", "#5a6a7a", "#a85a3a"])); }
    for (let i = 0; i < 6; i++) s.add(`<circle cx="${300 + i * 40}" cy="800" r="18" fill="#2a2a2a"/><circle cx="${300 + i * 40}" cy="800" r="8" fill="#5a5a5a"/>`);
    [500, 900, 1300].forEach((x) => s.person(x, 820, 64, { color: "#3a3a44", walk: true }));
    return s;
  },
  // An oil port with round storage tanks and a tanker at night, mountains behind, interceptor streaks in the sky.
  "ae_ir-3": (s) => {
    s.sky("night", { stars: 60 });
    s.mountains({ y: 480, amp: 160, depth: 0.5, color: "#2a2a34" });
    s.ground(520, "#3a3a3e");
    s.tanks(200, 620, 6, { w: 110, h: 70, color: "#a9a49a" });
    s.tanks(980, 600, 4, { w: 90, h: 56, color: "#9a958c", depth: 0.2 });
    s.sea(650, { color: "#1d2840", lines: 30 });
    s.ship("tanker", 1150, 720, { s: 1.2 });
    s.lamps(150, 1500, 640, 90, { gap: 270 });
    [[300, 120, 900, 300], [1400, 140, 800, 260], [600, 80, 1100, 220]].forEach(([x1, y1, x2, y2]) => s.add(`<path d="M${x2},${y2 + 400} Q${(x1 + x2) / 2},${y1 + 140} ${x1},${y1}" stroke="#fff3cf" stroke-width="3" fill="none" opacity="0.7"/>`));
    [[300, 120], [1400, 140], [600, 80]].forEach(([x, y]) => { s.glow(x, y, 60, "#ffd28a", 0.6); s.add(`<circle cx="${x}" cy="${y}" r="6" fill="#fff6dc"/>`); });
    s.glow(560, 600, 160, "#ff9a4a", 0.35);
    s.smoke(560, 580, { len: 260, dir: 1, dark: true });
    return s;
  },
};
