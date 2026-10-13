/* South Korea & Australia */
module.exports = {
  // Steep rocky wooded hills above a narrow river valley in Korea in early spring, small soldiers on a ridge, mist.
  "kr_au-1": (s) => {
    s.sky("morning", { clouds: 3 });
    s.mountains({ y: 420, amp: 200, depth: 0.6, color: "#6a7a6a" });
    s.ridge({ y: 560, amp: 260, color: "#5a6a4a", depth: 0.2, peak: 400, peakW: 500, jag: true });
    s.ridge({ y: 640, amp: 160, color: "#4a5a3e", depth: 0, peak: 1300, peakW: 400, x0: 900 });
    s.river({ from: [820, 600], to: [760, 900], w0: 30, w1: 220, bend: 220, color: "#8aa0b0" });
    s.forest({ y: 420, x0: 200, x1: 600, type: "pine", s: 0.5, gap: 30, color: "#3f5a40" });
    [[300, 330], [360, 320], [420, 330], [500, 350]].forEach(([x, y]) => s.person(x, y, 22, { color: "#2a2e26", helmet: true }));
    s.fog(620, { h: 120, opacity: 0.55 });
    return s;
  },
  // A huge bulk carrier loading red iron ore from a conveyor jetty on a red-earth coast, ore trains on shore.
  "kr_au-2": (s) => {
    s.sky("day", {});
    s.sea(480);
    s.ship("bulk", 820, 560, { s: 2.0 });
    s.add('<path d="M1100,500 L1640,470 L1640,520 L1100,540 Z" fill="#6a6460"/><line x1="1050" y1="470" x2="1640" y2="440" stroke="#5a5450" stroke-width="10"/><line x1="1050" y1="470" x2="980" y2="520" stroke="#5a5450" stroke-width="8"/>');
    s.add('<path d="M-20,900 L-20,600 Q800,570 1640,620 L1640,900 Z" fill="#a8654a"/>');
    s.add('<path d="M200,640 Q300,560 400,640 Z M480,650 Q620,540 760,650 Z" fill="#8a3e2a"/>');
    s.railcars(900, 1600, 700, { box: true, color: "#7a3a2a" });
    s.add('<rect x="820" y="660" width="70" height="40" fill="#d9a43c"/>');
    return s;
  },
  // A row of olive-green tracked infantry fighting vehicles outside a large new factory beside a calm bay at dawn.
  "kr_au-3": (s) => {
    s.sky("dawn", { sun: [1350, 420], r: 40 });
    s.sea(470, { lines: 20 });
    s.add('<path d="M-20,520 L1640,500 L1640,900 L-20,900 Z" fill="#9a9a88"/>');
    s.rect(200, 330, 1100, 190, "#d9dcd8").rect(200, 320, 1100, 14, "#a9aca8");
    for (let i = 0; i < 6; i++) s.rect(260 + i * 170, 420, 120, 100, "#5a6066");
    s.tree("oak", 120, 520, { s: 1.4, color: "#7a8a6a" }).tree("oak", 1420, 520, { s: 1.6, color: "#7a8a6a" });
    for (let i = 0; i < 6; i++) { const x = 160 + i * 250; s.vehicle("apc", x, 720, { s: 1.6, color: "#4f5a3e" }); s.add(`<rect x="${x - 70}" y="${720 - 20}" width="140" height="16" fill="#2a2a2a"/><rect x="${x - 20}" y="${720 - 96}" width="50" height="22" fill="#4a5438"/><line x1="${x + 30}" y1="${720 - 88}" x2="${x + 110}" y2="${720 - 92}" stroke="#4a5438" stroke-width="6"/>`); }
    return s;
  },
};
