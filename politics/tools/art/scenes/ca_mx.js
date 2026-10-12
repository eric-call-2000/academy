/* Canada & Mexico */
module.exports = {
  // Farm workers picking tomatoes along long rows of vines inside a large greenhouse in soft morning light.
  "ca_mx-1": (s) => {
    s.mood("morning");
    s.room3d({ depth: 4, wall: "#dfe6e2", side: "#cfd9d4", floor: "#8a7a62", ceiling: "#e8eeec" });
    for (let i = 1; i < 12; i++) { const z = 1 + i * 0.25, a = s.pp(0, 0, z), b = s.pp(1600, 0, z); s.add(`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#b9c4c2" stroke-width="${(3 / z).toFixed(1)}"/>`); }
    [-200, 250, 700, 1150, 1600].forEach((X) => s.box3d(X - 60, X + 60, 330, 900, 1.05, 4, "#4f7a46", { top: "#6a9458", side: "#3f6a3a" }));
    for (let i = 0; i < 260; i++) { const X = s.r.pick([-200, 250, 700, 1150, 1600]) + s.r.range(-70, 70), z = s.r.range(1.1, 3.8), Y = s.r.range(420, 820), p = s.pp(X, Y, z); s.add(`<circle cx="${p[0].toFixed(0)}" cy="${p[1].toFixed(0)}" r="${(9 / z).toFixed(1)}" fill="${s.r.pick(["#c4442e", "#d65a32", "#b83a2a", "#7fa040"])}"/>`); }
    [[470, 1.5], [930, 2.2], [480, 2.9], [920, 1.3]].forEach(([X, z]) => s.figure3d(X, z, { h: 380, color: s.r.pick(["#3a4a5e", "#5a4a3a", "#4a5a4a"]), hat: "hard", hatColor: "#d8c79a" }));
    [[520, 1.25], [880, 1.7]].forEach(([X, z]) => { const p = s.pp(X, 900, z); s.rect(p[0] - 40 / z, p[1] - 50 / z, 80 / z, 50 / z, "#3f6a9a"); });
    return s;
  },
  // A busy airport arrivals hall with passport control booths and travellers queuing behind a barrier.
  "ca_mx-2": (s) => {
    s.mood("interior", { light: "#eef2f6" });
    s.room3d({ depth: 3, wall: "#c9cfd4", side: "#b9c0c6", floor: "#9aa0a4", ceiling: "#d9dde0", lights: "strips", backWindows: [[80, 1520, 140, 520]], backGlass: "#a9c2d6" });
    s.plane("airliner", 1150, 420, { s: 1.4, color: "#eceae4" });
    for (let i = 0; i < 6; i++) { const X = 220 + i * 230; s.box3d(X, X + 140, 560, 900, 2.6, 2.75, "#5a6470", { top: "#7a848e" }); }
    s.barrier(100, 1500, 820, {});
    for (let row = 0; row < 3; row++) for (let i = 0; i < 7; i++) { if (s.r() < 0.3) continue; const X = 260 + i * 180 + s.r.range(-30, 30), z = 1.5 + row * 0.4; s.figure3d(X, z, { h: 260, color: s.r.pick(["#2f3a4a", "#4a3a3a", "#3a4a3e", "#5a5048"]) }); if (s.r() < 0.5) { const p = s.pp(X + 50, 900, z); s.rect(p[0], p[1] - 50 / z, 30 / z, 50 / z, s.r.pick(["#3a3a3a", "#6a3a3a", "#2f4a6a"])); } }
    return s;
  },
  // A long line of freight trucks waiting at a border crossing on a highway at dawn, inspection canopies ahead.
  "ca_mx-3": (s) => {
    s.sky("dawn", { sun: [1250, 420], r: 40, clouds: 3 });
    s.hills({ y: 470, amp: 50, color: "arid", depth: 0.6 });
    s.ground(480, "arid");
    s.add('<polygon points="760,480 840,480 1500,900 100,900" fill="#5a5c60"/>');
    s.add('<polygon points="560,470 1040,470 1060,500 540,500" fill="#d9d6ce"/>');
    for (let i = 0; i < 7; i++) s.rect(580 + i * 70, 500, 14, 40, "#8a8a86");
    for (let i = 0; i < 6; i++) s.rect(600 + i * 70, 505, 30, 30, "#6a7480");
    for (let i = 0; i < 6; i++) { const t = i / 5, y = 560 + t * t * 300, sc = 0.6 + t * 1.6; s.vehicle("truck", 640 - t * 160, y, { s: sc, color: s.r.pick(["#c9c4b8", "#8a3a2e", "#e2dcd0", "#4a5a6a"]) }); s.vehicle("truck", 950 + t * 200, y, { s: sc, dir: -1, color: s.r.pick(["#d9d2c2", "#3a5a7a", "#9a4a3a"]) }); }
    s.fog(500, { h: 70, opacity: 0.4 });
    return s;
  },
};
