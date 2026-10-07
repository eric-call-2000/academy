/* Japan and Australia */
module.exports = {
  // Black smoke from burning ships and wooden wharves in a tropical harbour in 1942, distant aircraft, palms on the shore.
  "jp_au-1": (s) => {
    s.sky("day", { top: "#7aa0c4" });
    s.forest({ y: 460, type: "palm", s: 0.9, gap: 60, depth: 0.3 });
    s.ground(460, "#c9b08a");
    s.sea(500, { color: "#4f7a9a" });
    s.rect(100, 560, 600, 20, "#6a4a30");
    s.ship("steam", 400, 640, { s: 1, fire: true }).ship("steam", 1100, 600, { s: 0.7, fire: true });
    s.fire(300, 560, 60);
    [[700, 160], [800, 140], [900, 170], [1300, 120]].forEach(([x, y]) => s.plane("bomber", x, y, { s: 0.3, color: "#3a3e44" }));
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.15"/>');
  },
  // A large LNG tanker with domed tanks loading at a long jetty by a gas plant on a red arid coast, calm turquoise sea.
  "jp_au-2": (s) => s
    .sky("day", { top: "#3f7ab8" })
    .ridge({ y: 470, amp: 60, color: "#a8502a", jag: true, depth: 0.2 })
    .refinery(1200, 480, 0.8, { flare: true })
    .tanks(800, 480, 3, { w: 80, h: 50 })
    .sea(480, { color: "#3fb0b8" })
    .rect(400, 560, 1200, 14, "#8a8a8a")
    .ship("lng", 700, 660, { s: 1.4 }),
  // A sleek grey stealth frigate with smooth angular sides and an enclosed mast in open blue sea, white wake, clear sky.
  "jp_au-3": (s) => {
    s.sky("day");
    s.sea(480, { color: "#2f6aa8" });
    s.add('<path d="M240,640 L300,580 L1300,580 L1380,600 L1240,660 L300,660 Z" fill="#7a8288"/><path d="M600,580 L640,480 L900,480 L960,580 Z" fill="#8a9298"/><path d="M740,480 L760,380 L820,380 L840,480 Z" fill="#8a9298"/><path d="M1240,660 Q1500,670 1640,700" stroke="#ffffff" stroke-width="6" opacity="0.4" fill="none"/>');
    return s;
  },
};
