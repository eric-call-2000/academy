/* India & Indonesia */
module.exports = {
  // Tall pointed stone Hindu temple spires above palm trees and rice fields at sunrise, a volcano behind.
  "in_id-1": (s) => {
    s.sky("dawn", { sun: [1300, 360], r: 48 });
    s.add('<path d="M900,470 Q1100,250 1180,230 Q1260,250 1460,470 Z" fill="#8a8aa0" opacity="0.6"/>');
    s.hills({ y: 480, amp: 50, color: "#6a8a5a", depth: 0.5 });
    const spire = (x, y, h, w) => s.add(`<path d="M${x - w},${y} L${x - w},${y - h * 0.35} Q${x - w * 0.8},${y - h * 0.8} ${x},${y - h} Q${x + w * 0.8},${y - h * 0.8} ${x + w},${y - h * 0.35} L${x + w},${y} Z" fill="#7a6a5a"/>` + Array.from({ length: 7 }, (_, i) => `<line x1="${x - w * (1 - i * 0.1)}" y1="${y - h * 0.35 - i * h * 0.08}" x2="${x + w * (1 - i * 0.1)}" y2="${y - h * 0.35 - i * h * 0.08}" stroke="#5a4a3e" stroke-width="3"/>`).join(""));
    spire(560, 560, 200, 50); spire(700, 560, 260, 60); spire(840, 560, 360, 80); spire(980, 560, 260, 60); spire(1120, 560, 200, 50);
    s.rect(480, 556, 720, 24, "#6a5a4c");
    s.field(580, 900, { color: "#7a9a4a", rows: 30 });
    s.forest({ y: 600, x0: -40, x1: 480, type: "palm", s: 1.2, gap: 70 }).forest({ y: 600, x0: 1220, x1: 1640, type: "palm", s: 1.2, gap: 70 });
    s.fog(580, { h: 60, opacity: 0.4 });
    return s;
  },
  // A tanker loading at a jetty on a tropical estuary, oil palm plantations on shore, a coal barge in front.
  "in_id-2": (s) => {
    s.sky("tropical", { clouds: 5 });
    s.add('<path d="M-20,500 L1640,470 L1640,560 L-20,560 Z" fill="#4f6a3a"/>');
    for (let r = 0; r < 4; r++) for (let x = -20 + r * 30; x < 1640; x += 90) s.tree("palm", x, 520 + r * 12, { s: 0.45 + r * 0.08, color: "#4f7a3a" });
    s.sea(560, { color: "#7a8a6a", lines: 40 });
    s.rect(900, 540, 600, 14, "#6a6460");
    for (let x = 920; x < 1500; x += 80) s.rect(x, 554, 8, 40, "#5a5450");
    s.ship("tanker", 1150, 600, { s: 1.0 });
    s.add('<path d="M100,780 L760,780 L740,830 L120,830 Z" fill="#3a3430"/><path d="M140,780 Q260,730 380,780 Z M420,780 Q540,720 660,780 Z" fill="#1f1d1c"/>');
    s.add('<rect x="760" y="770" width="70" height="40" fill="#5a4a3a"/>');
    return s;
  },
  // A wide ceremonial avenue in New Delhi leading to a great sandstone arch, marching columns and crowds.
  "in_id-3": (s) => {
    s.sky("haze", {});
    s.arch(800, 420, 1.1, { color: "#d0b48a", attic: true });
    s.forest({ y: 440, x0: -40, x1: 620, type: "oak", s: 0.8, gap: 50, depth: 0.4 }).forest({ y: 440, x0: 980, x1: 1640, type: "oak", s: 0.8, gap: 50, depth: 0.4 });
    s.ground(440, "#c9b896");
    s.add('<polygon points="760,440 840,440 1300,900 300,900" fill="#b9a688"/>');
    s.add('<polygon points="700,440 760,440 300,900 120,900" fill="#7a9a5a"/><polygon points="840,440 900,440 1480,900 1300,900" fill="#7a9a5a"/>');
    for (let r = 0; r < 6; r++) { const t = r / 5, y = 520 + t * t * 260, k = 0.4 + t * 1.1; for (let c = -2; c <= 2; c++) s.person(800 + c * 30 * k * 1.4, y, 50 * k, { color: "#4a5a3a", helmet: true }); }
    s.crowd({ y: 700, x0: -20, x1: 260, rows: 4, h: 60, gap: 22, colors: ["#e8dcc6", "#5a4a6a", "#b0603a", "#3a4a6a"] });
    s.crowd({ y: 700, x0: 1340, x1: 1620, rows: 4, h: 60, gap: 22, colors: ["#e8dcc6", "#5a4a6a", "#b0603a", "#3a4a6a"] });
    return s;
  },
};
