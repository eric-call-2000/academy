/* Mexico and Brazil */
module.exports = {
  // A 1940s propeller fighter over a green tropical island with jungle and a bay, others in formation, puffy clouds.
  "mx_br-1": (s) => {
    s.sky("day", { clouds: 6 });
    s.sea(560, { color: "#3fa0b8" });
    s.add('<path d="M200,600 Q500,420 900,460 Q1200,480 1400,600 Z" fill="#3f7a3a"/><path d="M700,600 Q800,560 900,600 Z" fill="#5fc0c8"/>');
    s.forest({ y: 560, x0: 300, x1: 1300, type: "palm", s: 0.5, gap: 30 });
    [[600, 260, 1.2], [800, 220, 0.8], [960, 200, 0.6], [1100, 240, 0.5]].forEach(([x, y, k]) => s.add(`<g transform="translate(${x},${y}) scale(${k})"><path d="M60,0 Q50,-10 20,-10 L-60,-6 L-80,-24 L-90,-24 L-80,0 L-90,8 L-60,6 L20,10 Q50,10 60,0 Z" fill="#5a6a4a"/><path d="M10,-6 L-20,-60 L-34,-60 L-16,-6 Z M10,6 L-20,40 L-34,40 L-16,6 Z" fill="#4a5a3a"/><line x1="64" y1="-14" x2="64" y2="14" stroke="#2a2a2a" stroke-width="3"/></g>`));
    return s.add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.1"/>');
  },
  // A modern white regional jet taxiing on a runway in a dry northern Mexican landscape, brown mountains, blue sky.
  "mx_br-2": (s) => s
    .sky("day", { top: "#3f7ab8" })
    .mountains({ y: 480, amp: 200, color: "#8a6a4a", depth: 0.35 })
    .ground(480, "#c4a87a")
    .add('<polygon points="-40,680 1640,620 1640,720 -40,800" fill="#6a6662"/><line x1="0" y1="740" x2="1600" y2="670" stroke="#e8e6e0" stroke-width="4" stroke-dasharray="40 30"/>')
    .plane("airliner", 800, 640, { s: 2 }),
  // A country road forking into two through green rolling hills, one toward a distant city, one toward distant mountains.
  "mx_br-3": (s) => {
    s.sky("golden");
    s.mountains({ y: 440, amp: 160, color: "#7a7a9a", depth: 0.5, x0: 900 });
    s.city({ y: 440, x0: 200, x1: 600, style: "towers", h: [40, 120], depth: 0.6, lit: false });
    s.hills({ y: 520, amp: 100, color: "#6f9a52", depth: 0.2 });
    s.ground(560, "#7aa05a");
    return s.add('<path d="M700,900 Q760,700 800,620 Q700,560 420,460" stroke="#c4a87a" stroke-width="50" fill="none"/><path d="M800,620 Q900,560 1200,470" stroke="#c4a87a" stroke-width="40" fill="none"/>');
  },
};
