/* United States and Mexico */
module.exports = {
  // Long lines of cargo trucks at a desert land border crossing at dawn, customs canopies, factories and hills beyond.
  "us_mx-1": (s) => {
    s.sky("dawn", { bottom: "#f2d0a0" });
    s.hills({ y: 440, amp: 100, color: "#a8885e", depth: 0.4 });
    s.factory(200, 460, 300, 50, { chimneys: [], depth: 0.4 }).factory(1000, 460, 400, 50, { chimneys: [], depth: 0.4 });
    s.ground(460, "#c9a877");
    s.rect(300, 480, 1000, 20, "#e8e2d2");
    for (let i = 0; i < 10; i++) s.rect(320 + i * 100, 500, 30, 60, "#d9d2c2");
    for (let l = 0; l < 4; l++) for (let k = 0; k < 4; k++) s.vehicle("truck", 300 + l * 300 + k * 30, 620 + k * 80, { s: 0.6 + k * 0.2, color: s.r.pick(["#d9d2c2", "#a8322a", "#3f6aa8", "#5a5a5a"]) });
    return s.fog(500, { h: 80, color: "#f2d0a0", opacity: 0.4 });
  },
  // A tall steel bollard fence across rolling desert hills at sunset, a small town lighting up, an empty dirt road.
  "us_mx-2": (s) => {
    s.sky("dusk", { sun: [300, 420], r: 36 });
    s.hills({ y: 480, amp: 120, color: "#a8805a", depth: 0.3 });
    for (let i = 0; i < 60; i++) s.add(`<circle cx="${1000 + s.r() * 500}" cy="${470 + s.r() * 40}" r="2" fill="#ffd38a"/>`);
    s.add('<path d="M-40,780 Q600,560 1640,520" stroke="#b89a72" stroke-width="40" fill="none"/>');
    for (let i = 0; i < 160; i++) { const t = i / 160, x = -40 + t * 1700, y = 720 - t * 230 - Math.sin(t * 9) * 20; s.rect(x, y - 180 * (1 - t * 0.6), 6 * (1 - t * 0.5), 180 * (1 - t * 0.6), "#4a3a32"); }
    return s.ground(760, "#9a7a54");
  },
  // A highway checkpoint at night under floodlights: a pickup stopped with doors open, two officers with a dog, headlights.
  "us_mx-3": (s) => {
    s.sky("night", { stars: 20 });
    s.ground(480, "#1e1e22").road({ vanish: [800, 480], w: 1600, color: "#2a2a2e" });
    s.rect(300, 340, 1000, 30, "#d9d2c2").rect(320, 370, 20, 200, "#9a948a").rect(1260, 370, 20, 200, "#9a948a");
    s.glow(800, 360, 500, "#f4f8ff", 0.4);
    for (let i = 0; i < 10; i++) s.add(`<circle cx="${700 + (i % 2) * 40}" cy="${500 + i * 6}" r="${3 + i * 0.4}" fill="#fff4d0"/>`);
    s.vehicle("pickup", 820, 720, { s: 2.4, color: "#5a5e66" });
    s.add('<polygon points="760,640 700,600 700,680 760,700" fill="#4a4e56"/>');
    s.person(560, 820, 160, { color: "#2a3a2a" }).person(1060, 820, 160, { color: "#2a3a2a" });
    return s.add('<g fill="#3a2e22"><ellipse cx="640" cy="800" rx="30" ry="12"/><circle cx="672" cy="790" r="9"/><rect x="616" y="804" width="4" height="14"/><rect x="660" y="804" width="4" height="14"/></g>');
  },
};
