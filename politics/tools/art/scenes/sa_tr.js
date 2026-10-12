/* Saudi Arabia & Turkey */
module.exports = {
  // Mud-brick ruins of an old walled desert town with crenellated towers on a ridge above a valley of date palms.
  "sa_tr-1": (s) => {
    s.sky("desert", { sun: [1300, 260], r: 46 });
    s.ridge({ y: 480, amp: 120, color: "#b8956a", depth: 0.2, step: 60 });
    s.mudFort(760, 420, 1.3, { color: "#b8875a" });
    s.mudFort(320, 460, 0.8, { color: "#a87a52", depth: 0.2, towers: [-0.5, 0.3] });
    s.ground(560, "desert");
    s.forest({ y: 620, x0: -40, x1: 1640, type: "palm", s: 1.0, gap: 70 });
    s.forest({ y: 720, x0: -40, x1: 1640, type: "palm", s: 1.6, gap: 120 });
    s.fog(560, { h: 60, opacity: 0.3 });
    return s;
  },
  // A modern walled consulate building with cameras on a quiet leafy Istanbul street at night, reporters across the road.
  "sa_tr-2": (s) => {
    s.sky("night", { stars: 40 });
    s.city({ y: 470, h: [60, 160], depth: 0.6, lit: true });
    s.building(480, 640, 640, 260, { color: "#c9c4b8", cell: 22, lit: true, litShare: 0.2, roof: "flatdark" });
    s.wall(380, 1220, 660, 120, { color: "#a9a49a" });
    s.rect(740, 560, 120, 100, "#3a3a3a");
    [420, 1180].forEach((x) => s.rect(x, 520, 8, 20, "#2a2a2a").rect(x - 10, 510, 28, 12, "#3a3a3a"));
    s.forest({ y: 660, x0: -40, x1: 360, type: "oak", s: 1.6, gap: 90 }).forest({ y: 660, x0: 1240, x1: 1640, type: "oak", s: 1.6, gap: 90 });
    s.rect(0, 680, 1600, 220, "#3a3c40");
    s.lamps(100, 1500, 690, 190, { gap: 350 });
    s.crowd({ y: 860, rows: 2, h: 100, gap: 46, rowGap: 30, thin: 0.15, colors: ["#1f2128", "#2a2c34", "#3a3430"] });
    [300, 700, 1150].forEach((x) => s.glow(x, 760, 80, "#f6f2e6", 0.4));
    return s;
  },
  // A large grey military drone with long straight wings and twin engines parked outside an open hangar on a desert airfield at dawn.
  "sa_tr-3": (s) => {
    s.sky("dawn", { sun: [1350, 420], r: 44 });
    s.dunes(440, { layers: 2, depth: 0.6 });
    s.ground(500, "sand");
    s.add('<path d="M200,560 L200,380 Q520,260 840,380 L840,560 Z" fill="#a89a7c"/><path d="M260,560 L260,420 Q520,330 780,420 L780,560 Z" fill="#3a3630"/>');
    s.rect(0, 560, 1600, 340, "#9a9486");
    s.add('<g transform="translate(980,700)"><rect x="-30" y="-20" width="20" height="20" fill="#2a2a2a"/><rect x="200" y="-20" width="16" height="20" fill="#2a2a2a"/><path d="M300,-50 Q300,-80 260,-82 L-160,-80 Q-200,-76 -210,-60 L-200,-40 L260,-36 Q300,-36 300,-50 Z" fill="#8a9096"/><path d="M-200,-60 L-260,-120 L-240,-120 L-170,-62 Z" fill="#7a8086"/><rect x="-330" y="-70" width="780" height="14" rx="6" fill="#7a8086"/><ellipse cx="-80" cy="-58" rx="40" ry="12" fill="#6a7076"/><ellipse cx="140" cy="-58" rx="40" ry="12" fill="#6a7076"/></g>');
    return s;
  },
};
