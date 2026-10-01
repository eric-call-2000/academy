/* Pakistan and China */
module.exports = {
  // A winding highway through jagged snow-capped Karakoram peaks, brightly painted trucks, a turquoise river below.
  "pk_cn-1": (s) => {
    s.sky("day", { top: "#3f6ab0" });
    s.mountains({ y: 420, amp: 320, color: "#8a8a92", depth: 0.3, snow: 0.45 });
    s.ridge({ y: 900, amp: 420, color: "#8a6a4a", peak: 300, peakW: 900, jag: true, step: 40 });
    s.add('<path d="M1640,900 C1300,800 1200,700 1500,600 S900,520 600,560" stroke="#3fb0b8" stroke-width="30" fill="none"/>');
    s.add('<path d="M-40,760 Q300,600 600,620 T1200,500 T1640,470" stroke="#9a8a7a" stroke-width="24" fill="none"/>');
    [[300, 640], [700, 600], [1100, 520]].forEach(([x, y], i) => s.vehicle("truck", x, y, { s: 0.5 - i * 0.08, color: ["#c94a2a", "#2f7a8a", "#d9a02c"][i] }));
    return s;
  },
  // A modern deep-water port with a few tall cranes and an empty quay on an arid coast, barren cliffs, one small ship.
  "pk_cn-2": (s) => {
    s.sky("desert", { top: "#4f86b8" });
    s.ridge({ y: 520, amp: 260, color: "#c4a074", jag: true, step: 30, x1: 1000 });
    s.rect(0, 520, 1000, 40, "#b8b0a2");
    for (let i = 0; i < 3; i++) s.crane(200 + i * 220, 540, 1, { color: "#e0782c" });
    s.sea(540, { color: "#3f7ab0", glint: 1300 });
    return s.ship("bulk", 1300, 620, { s: 0.4 });
  },
  // A grey delta-winged fighter taking off from a desert base at dawn, afterburner glowing, brown mountains, dust.
  "pk_cn-3": (s) => {
    s.sky("dawn", { bottom: "#f2c8a0" });
    s.mountains({ y: 480, amp: 200, color: "#8a6a4a", depth: 0.35 });
    s.ground(480, "#b89a72").add('<polygon points="-40,700 1640,640 1640,720 -40,800" fill="#6a6662"/>');
    s.add('<g transform="translate(800,520) rotate(-14)"><path d="M120,0 L-40,-10 L-80,-60 L-100,-60 L-80,-8 L-110,-4 L-110,4 L-80,8 L-100,60 L-80,60 L-40,10 Z" fill="#7a8088"/><path d="M-110,-6 L-170,0 L-110,6 Z" fill="#ffb85a"/></g>');
    s.glow(650, 560, 90, "#ffb85a", 0.7);
    return s.fog(700, { h: 120, color: "#d9c4a0", opacity: 0.6 });
  },
};
