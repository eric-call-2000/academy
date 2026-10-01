/* Saudi Arabia and China */
module.exports = {
  // A long pale ballistic missile on a launch vehicle in a rocky desert valley at dusk, part under camouflage netting, bunkers.
  "sa_cn-1": (s) => {
    s.sky("dusk", { bottom: "#f2a06a" });
    s.mountains({ y: 480, amp: 260, color: "#8a5a3a", depth: 0.25 });
    s.ground(480, "#b8865a");
    [[200, 520], [1300, 530]].forEach(([x, y]) => s.add(`<path d="M${x - 90},${y} L${x - 90},${y - 40} Q${x},${y - 80} ${x + 90},${y - 40} L${x + 90},${y} Z" fill="#9a8a72"/>`));
    s.vehicle("truck", 800, 700, { s: 2.2, color: "#8a7a5a" });
    s.add('<rect x="420" y="560" width="700" height="44" rx="22" fill="#e2ddd0"/><path d="M1120,560 Q1180,582 1120,604 Z" fill="#e2ddd0"/><path d="M400,540 Q600,500 800,550 L800,620 L400,620 Z" fill="#6a6a4a" opacity="0.85"/>');
    return s;
  },
  // A long polished conference table under crystal chandeliers, three groups of empty leather chairs and water glasses.
  "sa_cn-2": (s) => {
    s.mood("interior", { light: "#ffe9bf" });
    s.room3d({ depth: 3, wall: "#d9c49a", side: "#c9b48a", floor: "#6a4a34", ceiling: "#e2d4b0", lights: "chandeliers", windows: { n: 3, side: "both", top: 120, bottom: 560 } });
    s.table3d(560, 1040, 1.3, 2.8, { color: "#4a2e1e", count: 9, chairColor: "#3a2a22", glasses: [[620, 1.5], [980, 1.5], [620, 2.0], [980, 2.0], [620, 2.5], [980, 2.5]] });
    return s.add('<rect x="0" y="60" width="60" height="560" fill="#7a2a2a"/><rect x="1540" y="60" width="60" height="560" fill="#7a2a2a"/>');
  },
  // Large tankers at anchor in a hazy narrow strait between dry mountains, grey warships far off, faint smoke on the coast.
  "sa_cn-3": (s) => s
    .sky("haze", { top: "#b8a890" })
    .mountains({ y: 470, amp: 220, color: "#9a7a5a", depth: 0.45, x1: 650 })
    .mountains({ y: 480, amp: 180, color: "#9a7a5a", depth: 0.5, x0: 950 })
    .smoke(1300, 440, { len: 300, rise: 3, w: 24, dark: true })
    .sea(480, { color: "#7a8a8a" })
    .ship("warship", 800, 492, { s: 0.25, depth: 0.5, reflect: false })
    .ship("tanker", 400, 560, { s: 0.7, depth: 0.2 })
    .ship("tanker", 1100, 600, { s: 0.85, dir: -1, depth: 0.15 })
    .ship("tanker", 600, 700, { s: 1.1 }),
};
