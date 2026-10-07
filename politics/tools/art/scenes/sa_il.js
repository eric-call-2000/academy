/* Saudi Arabia & Israel */
module.exports = {
  // A long line of 1970s cars queuing at a small petrol station on a grey winter morning, old pumps, bare trees, a wet road.
  "sa_il-1": (s) => {
    s.sky("winter", { clouds: 4 });
    s.forest({ y: 470, type: "bare", s: 1.0, depth: 0.45, gap: 50 });
    s.ground(480, "asphalt", { depth: 0.1 });
    s.rect(1000, 380, 520, 24, "#d9d2bd").rect(1020, 404, 14, 180, "#8a8478").rect(1480, 404, 14, 180, "#8a8478");
    s.building(1180, 584, 280, 140, { color: "#c9c1ad", cell: 24, roof: "flatdark" });
    [1080, 1160].forEach((x) => s.rect(x, 510, 34, 74, "#b5543c").rect(x + 6, 520, 22, 18, "#efe9dc"));
    for (let i = 0; i < 9; i++) s.vehicle("car", 1000 - i * 130, 640 + i * 4, { s: 1.6 - i * 0.04, color: s.r.pick(["#7a5a44", "#5a6a7a", "#8a7a52", "#6a4a3c", "#4f5a4a", "#a8a49a"]) });
    for (let i = 0; i < 10; i++) s.add(`<rect x="${(s.r() * 1600).toFixed(0)}" y="${(700 + s.r() * 180).toFixed(0)}" width="${(80 + s.r() * 200).toFixed(0)}" height="3" fill="#cfd6dc" opacity="0.4"/>`);
    return s;
  },
  // A small private jet on a desert runway at night beside a sleek modern pavilion on the Red Sea coast, mountains, runway lights.
  "sa_il-2": (s) => {
    s.sky("night", { stars: 160 });
    s.mountains({ y: 460, amp: 210, color: "#2a2a34", depth: 0.2 });
    s.sea(470, { color: "#1d2840", lines: 30 });
    s.ground(560, "#4a4236");
    s.rect(0, 610, 1600, 120, "#2f2c2a");
    for (let x = 20; x < 1600; x += 70) { s.add(`<circle cx="${x}" cy="612" r="3" fill="#ffd38a"/><circle cx="${x + 30}" cy="728" r="3.5" fill="#ffd38a"/>`); }
    s.add('<path d="M1000,560 L1080,470 L1500,470 L1560,560 Z" fill="#cfcac0"/>');
    s.rect(1060, 500, 460, 60, "#ffd38a").rect(1060, 500, 460, 60, "#f6e3bd", 'opacity="0.6"');
    s.glow(1300, 520, 240, "#ffcf7a", 0.25);
    s.add('<g transform="translate(560,676) scale(2)"><line x1="-40" y1="-14" x2="-40" y2="0" stroke="#2a2a2a" stroke-width="3"/><line x1="70" y1="-14" x2="70" y2="0" stroke="#2a2a2a" stroke-width="3"/><path d="M110,-24 Q100,-38 70,-38 L-70,-36 L-100,-76 L-112,-76 L-104,-34 Q-104,-16 -80,-16 L80,-14 Q104,-14 110,-24 Z" fill="#e2e2de"/><path d="M20,-22 L-30,-4 L-44,-4 L-10,-24 Z" fill="#c9c9c4"/><rect x="-90" y="-46" width="40" height="14" rx="7" fill="#c9c9c4"/>' + Array.from({ length: 7 }, (_, i) => `<circle cx="${50 - i * 16}" cy="-28" r="3.5" fill="#ffd38a"/>`).join("") + '</g>');
    return s;
  },
  // A large circular international assembly hall with tiers of curved delegates' desks facing a podium, blue and gold tones.
  "sa_il-3": (s) => {
    s.mood("interior", { light: "#f3e2b0" });
    s.add('<rect width="1600" height="900" fill="#3a4a6a"/>');
    s.rect(0, 0, 1600, 300, "#2f3c58");
    s.rect(600, 120, 400, 240, "#c9a24a").rect(620, 140, 360, 200, "#3f5276");
    s.rect(700, 330, 200, 90, "#6a5a48").rect(650, 400, 300, 40, "#c9a24a");
    s.hemicycle({ x: 800, y: 470, r0: 260, rows: 8, step: 64, color: "#3f5a8a", tilt: 0.5, people: 0.5, peopleColors: ["#1f2a3c", "#2a3448", "#5a4a3a"] });
    for (let i = 0; i < 8; i++) s.add(`<circle cx="${200 + i * 170}" cy="40" r="10" fill="#f6e3bd" opacity="0.8"/>`);
    return s;
  },
};
