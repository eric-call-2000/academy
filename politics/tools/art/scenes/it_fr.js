/* Italy and France */
module.exports = {
  // A seaside town of pastel ochre and pink houses stacked round a small harbour below green mountains, fishing boats.
  "it_fr-1": (s) => {
    s.sky("afternoon");
    s.mountains({ y: 400, amp: 240, color: "forest", depth: 0.3, jag: false });
    for (let k = 0; k < 6; k++) for (let i = 0; i < 14 - k; i++) s.house(100 + i * 100 + k * 50, 420 + k * 30, 90, 60, { color: s.r.pick(["#e8c08a", "#e8a0a0", "#d9a06a", "#f2e0b0", "#e0b0a0"]), roofColor: "#a8544a" });
    s.sea(600, { color: "#3fa0b0" });
    return s.ship("boat", 400, 700, { s: 1.2, hull: "#3f7aa8" }).ship("boat", 800, 760, { s: 1.3, hull: "#c94a3c", dir: -1 }).ship("boat", 1200, 720, { s: 1.2, hull: "#e0b23c" });
  },
  // A coastal road border crossing along steep cliffs above a blue sea, police vans by a checkpoint, walkers far off.
  "it_fr-2": (s) => {
    s.sky("day", { top: "#3f7ab8" });
    s.sea(420, { color: "#2f6a9a" });
    s.ridge({ y: 900, amp: 560, color: "#9a8a6a", peak: 1400, peakW: 700, jag: true, step: 30 });
    s.add('<path d="M-40,620 Q600,560 1000,480 T1640,380" stroke="#7a7670" stroke-width="40" fill="none"/>');
    s.rect(720, 470, 120, 40, "#e8e2d2").barrier(700, 860, 540);
    s.vehicle("bus", 560, 560, { s: 0.6, color: "#e8e6e0" }).vehicle("bus", 920, 520, { s: 0.6, color: "#3a4a6a" });
    return s.person(1100, 450, 30, { bundle: "#3f5a8a" }).person(1130, 445, 28, { bundle: "#8a3a2a" }).person(1160, 440, 28);
  },
  // A railway tunnel being dug into a steep forested Alpine mountainside, cranes, concrete segments, machinery.
  "it_fr-3": (s) => {
    s.sky("morning");
    s.mountains({ y: 360, amp: 260, color: "#8a929a", depth: 0.35, snow: 0.4 });
    s.ridge({ y: 900, amp: 660, color: "#3f5a3a", peak: 800, peakW: 900 });
    s.forest({ y: 500, type: "pine", s: 0.8, gap: 20, color: "#2f4a2e", spread: 200 });
    s.add('<path d="M640,760 L640,620 A160,140 0 0 1 960,620 L960,760 Z" fill="#c9c4bc"/><path d="M680,760 L680,630 A120,110 0 0 1 920,630 L920,760 Z" fill="#1e1e20"/>');
    s.rect(0, 760, 1600, 140, "#9a948a");
    for (let i = 0; i < 6; i++) s.add(`<path d="M${200 + i * 70},860 A30,30 0 0 1 ${260 + i * 70},860 Z" fill="#b8b4ac"/>`);
    s.towerCrane(1100, 760, 1).vehicle("truck", 1300, 840, { s: 1, color: "#e0b02c" });
    return s;
  },
};
