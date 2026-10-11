/* France & Ukraine */
module.exports = {
  // A Romanesque stone abbey church with a square bell tower in a French village at sunset, cobbled square.
  "fr_ua-1": (s) => {
    s.sky("golden", { sun: [1380, 360], r: 50, clouds: 2 });
    s.hills({ y: 520, amp: 60, color: "green", depth: 0.5 });
    s.rect(500, 380, 520, 240, "#c9a87a");
    s.poly([[480, 380], [1040, 380], [760, 290]], "#8a5a44");
    s.rect(680, 160, 160, 460, "#c4a070");
    s.poly([[670, 160], [850, 160], [760, 90]], "#7a4e3c");
    for (let i = 0; i < 3; i++) s.add(`<path d="M${700 + i * 50},250 L${700 + i * 50},210 A12,12 0 0 1 ${724 + i * 50},210 L${724 + i * 50},250 Z" fill="#4a3426"/>`);
    for (let i = 0; i < 5; i++) s.add(`<path d="M${540 + i * 100},520 L${540 + i * 100},450 A16,16 0 0 1 ${572 + i * 100},450 L${572 + i * 100},520 Z" fill="#5a3e2c"/>`);
    s.add('<path d="M720,620 L720,540 A40,40 0 0 1 800,540 L800,620 Z" fill="#3a2a20"/>');
    s.house(80, 640, 220, 200, { color: "#c2a27c", roofColor: "#7a4e3c" }).house(1150, 640, 240, 220, { color: "#b9976e", roofColor: "#8a5a44" }).house(1390, 650, 200, 180, { color: "#c9a982", roofColor: "#7a4e3c" });
    s.ground(620, "#a8927a");
    for (let i = 0; i < 160; i++) s.add(`<ellipse cx="${(s.r() * 1600).toFixed(0)}" cy="${(630 + Math.pow(s.r(), 0.7) * 270).toFixed(0)}" rx="${(6 + s.r() * 10).toFixed(0)}" ry="4" fill="#8a7660" opacity="0.5"/>`);
    s.tree("bare", 380, 700, { s: 1.6 }).tree("bare", 1250, 720, { s: 1.8 });
    s.glow(1380, 360, 500, "#ffd59a", 0.2);
    return s;
  },
  // A gilded palace salon with crystal chandeliers and a long negotiating table at night, empty.
  "fr_ua-2": (s) => {
    s.mood("interior", { light: "#ffe2a6" });
    s.room3d({ depth: 3.2, wall: "#c9b48a", side: "#bba57c", floor: "#6a4a36", ceiling: "#d9c69a", lights: "chandeliers", carpet: "#7a2e2a", windows: { n: 3, color: "#1f2a44", side: "both" }, wainscot: true });
    s.table3d(640, 960, 1.3, 2.9, { cloth: "#e8e0cc", count: 6, chairColor: "#b08a4a", glasses: [[690, 1.6], [910, 1.6], [690, 2.1], [910, 2.1], [690, 2.6], [910, 2.6]] });
    return s;
  },
  // Two grey delta-wing fighters with canards parked on an airbase apron at dusk, hangars and runway lights.
  "fr_ua-3": (s) => {
    s.sky("dusk", { sun: [300, 560], r: 40, clouds: 3 });
    s.hills({ y: 560, amp: 40, color: "dark", depth: 0.5 });
    s.ground(580, "concrete");
    [200, 620, 1040].forEach((x) => s.add(`<path d="M${x},580 L${x},470 Q${x + 160},400 ${x + 320},470 L${x + 320},580 Z" fill="#5a5c64"/><path d="M${x + 40},580 L${x + 40},500 Q${x + 160},450 ${x + 280},500 L${x + 280},580 Z" fill="#ffd59a" opacity="0.55"/>`));
    for (let x = 0; x < 1600; x += 60) s.add(`<circle cx="${x}" cy="600" r="3" fill="#ffcf7a"/>`);
    [[520, 760, 1.25], [1100, 700, 1.0]].forEach(([x, y, k]) => s.add(`<g transform="translate(${x},${y}) scale(${k})"><ellipse cx="0" cy="42" rx="220" ry="16" fill="#000" opacity="0.18"/><path d="M-250,0 L-180,-12 L-40,-14 L80,-60 L150,-60 L130,-12 L230,-6 L250,4 L130,14 L-180,16 Z" fill="#6c737c"/><path d="M-170,-10 L-120,-34 L-100,-34 L-110,-10 Z" fill="#5c636c"/><path d="M110,-14 L170,-90 L195,-90 L175,-14 Z" fill="#5f666f"/><path d="M-200,-14 Q-180,-30 -150,-18 Z" fill="#2a3240"/><line x1="-120" y1="16" x2="-120" y2="40" stroke="#2a2a2a" stroke-width="5"/><line x1="90" y1="14" x2="90" y2="40" stroke="#2a2a2a" stroke-width="5"/><circle cx="-120" cy="40" r="6" fill="#222"/><circle cx="90" cy="40" r="6" fill="#222"/></g>`));
    return s;
  },
};
