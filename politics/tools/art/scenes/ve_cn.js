/* Venezuela and China */
module.exports = {
  // A white rocket lifting off from a launch tower in green mountains at dawn, bright flame and smoke, control buildings.
  "ve_cn-1": (s) => {
    s.sky("dawn");
    s.mountains({ y: 520, amp: 280, color: "#4f7a4a", depth: 0.3, jag: false });
    s.rect(1200, 500, 160, 40, "#d9d6d0").rect(1380, 510, 100, 30, "#d9d6d0");
    s.add('<g stroke="#8a5a3a" stroke-width="5"><line x1="680" y1="620" x2="680" y2="200"/><line x1="720" y1="620" x2="720" y2="200"/>' + Array.from({ length: 10 }, (_, i) => `<line x1="680" y1="${220 + i * 40}" x2="720" y2="${240 + i * 40}"/>`).join("") + "</g>");
    s.add('<path d="M784,420 L784,180 Q800,120 816,180 L816,420 Z" fill="#f4f4f2"/><path d="M784,420 L770,450 L784,400 Z M816,420 L830,450 L816,400 Z" fill="#d9d6d0"/>');
    s.glow(800, 460, 120, "#ffb85a", 0.9).add('<path d="M786,420 Q800,520 814,420 Z" fill="#ffe08a"/>');
    s.smoke(700, 560, { len: 400, rise: 0.2, w: 90, dir: -1, color: "#e8e6e0" }).smoke(900, 560, { len: 400, rise: 0.2, w: 90, color: "#e8e6e0" });
    return s.ground(620, "#5a7a44");
  },
  // A large crude tanker at a long jetty beside white storage tanks on a tropical coast, palms, hazy hills, loading arms.
  "ve_cn-2": (s) => s
    .sky("golden", { top: "#8aa0b0" })
    .hills({ y: 440, amp: 120, color: "#5a7a4a", depth: 0.45 })
    .tanks(100, 480, 6, { w: 90, h: 50 })
    .forest({ y: 480, x0: 700, x1: 1600, type: "palm", s: 0.8, gap: 70 })
    .ground(480, "#8a8670")
    .sea(500, { color: "#4f7a9a" })
    .rect(-20, 590, 1000, 16, "#6a6a6a")
    .add('<g stroke="#8a8a8e" stroke-width="6" fill="none"><path d="M500,590 L540,520 L620,560"/><path d="M700,590 L740,520 L820,560"/></g>')
    .ship("tanker", 900, 690, { s: 1.4, dir: -1 }),
  // A colonial-style presidential palace courtyard at night under floodlights, tall windows onto an empty reception room.
  "ve_cn-3": (s) => {
    s.sky("night", { stars: 20 });
    s.rect(200, 280, 1200, 300, "#e8e2d2");
    for (let i = 0; i < 8; i++) s.rect(260 + i * 140, 340, 80, 160, i === 3 || i === 4 ? "#ffe2a6" : "#3a3e48");
    [3, 4].forEach((i) => { for (let k = 0; k < 3; k++) s.rect(276 + i * 140 + k * 22, 460, 14, 30, "#6a4a30"); });
    s.poly([[180, 280], [1420, 280], [1340, 240], [260, 240]], "#a8604a");
    s.glow(800, 420, 600, "#f4f8ff", 0.15);
    s.ground(580, "#6a6460").forest({ y: 640, type: "palm", s: 1.4, gap: 340, x0: 100 });
    return s.plane("heli", 300, 140, { s: 0.4, color: "#1a1a1e" }).plane("heli", 1300, 120, { s: 0.35, color: "#1a1a1e", dir: -1 });
  },
};
