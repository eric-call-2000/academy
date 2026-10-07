/* Turkey and Israel */
module.exports = {
  // A large white passenger ferry at dawn surrounded by small grey fast military boats, a helicopter, choppy water.
  "tr_il-1": (s) => s
    .sky("dawn", { top: "#9aa0b0" })
    .sea(460, { color: "#5a6a7a", lines: 140 })
    .ship("liner", 800, 600, { s: 1.1, funnel: "#5a6a7a" })
    .ship("patrol", 340, 640, { s: 0.6, wake: true, reflect: false })
    .ship("patrol", 1260, 660, { s: 0.6, dir: -1, wake: true, reflect: false })
    .ship("patrol", 1100, 540, { s: 0.4, dir: -1, depth: 0.2, reflect: false })
    .plane("heli", 500, 240, { s: 0.8, color: "#3a3e44" }),
  // A busy Mediterranean container port: colourful stacks, tall cranes, a ship leaving, hills and a far mosque dome.
  "tr_il-2": (s) => {
    s.sky("afternoon");
    s.hills({ y: 420, amp: 120, color: "#9a9a6a", depth: 0.4 });
    s.dome(1200, 420, 30, { depth: 0.4 }).minaret(1240, 420, 60, { depth: 0.4 });
    s.sea(440, { glint: 1300 });
    s.ship("container", 1100, 520, { s: 0.7, wake: true });
    s.rect(0, 580, 1600, 320, "#8a8682");
    for (let i = 0; i < 5; i++) s.crane(100 + i * 170, 600, 1, { color: "#c4573c" });
    return s.containers(0, 780, 32, 6, { w: 48, h: 24 });
  },
  // A desert military airfield: a long runway marked by craters, empty concrete aircraft shelters, a control tower.
  "tr_il-3": (s) => {
    s.sky("haze");
    s.ground(440, "#a8906c");
    for (let i = 0; i < 5; i++) s.add(`<path d="M${150 + i * 260},500 L${150 + i * 260},460 A80,60 0 0 1 ${310 + i * 260},460 L${310 + i * 260},500 Z" fill="#9a948a"/><path d="M${180 + i * 260},500 L${180 + i * 260},470 A50,36 0 0 1 ${280 + i * 260},470 L${280 + i * 260},500 Z" fill="#3a3632"/>`);
    s.rect(1450, 360, 30, 140, "#8a847a").rect(1420, 340, 90, 30, "#5a6a7a");
    s.add('<polygon points="-40,700 1640,620 1640,720 -40,820" fill="#6a6662"/>');
    [[300, 750], [700, 715], [1150, 690]].forEach(([x, y]) => s.add(`<ellipse cx="${x}" cy="${y}" rx="60" ry="18" fill="#3a2e26"/><ellipse cx="${x}" cy="${y - 4}" rx="76" ry="24" fill="none" stroke="#b89a72" stroke-width="8"/>`));
    return s;
  },
};
