/* Nigeria and South Africa */
module.exports = {
  // A 1970s rally in a West African city from behind: raised fists, blank banners, colourful clothes, dusty sun.
  "ng_za-1": (s) => {
    s.sky("haze", { top: "#c4a880" });
    s.city({ y: 470, h: [40, 120], color: "#c9b08a", depth: 0.3, lit: false });
    s.ground(470, "#b89a72");
    s.crowd({ y: 520, rows: 8, h: 50, gap: 13, rowGap: 44, banners: 5, colors: ["#e8c42c", "#3f8a6a", "#c94a3c", "#3f6aa8", "#f2efe8", "#2a2424"] });
    for (let i = 0; i < 30; i++) { const x = s.r() * 1600, y = 480 + s.r() * 300; s.add(`<rect x="${x}" y="${y - 40}" width="6" height="34" fill="#3a2a24"/><circle cx="${x + 3}" cy="${y - 44}" r="7" fill="#3a2a24"/>`); }
    return s.add('<rect width="1600" height="900" fill="#c9905a" opacity="0.12"/>');
  },
  // A busy Lagos street market under a concrete flyover: yellow minibuses, stalls with umbrellas, crowds, hazy sun.
  "ng_za-2": (s) => {
    s.sky("haze");
    s.city({ y: 440, h: [80, 200], depth: 0.3, lit: false });
    s.rect(-20, 300, 1640, 50, "#9a948a");
    for (let i = 0; i < 6; i++) s.rect(100 + i * 280, 350, 40, 200, "#8a847a");
    s.ground(540, "#8a7a62");
    for (let i = 0; i < 5; i++) s.vehicle("bus", 200 + i * 300, 600, { s: 0.9, color: "#e8c42c" });
    for (let i = 0; i < 12; i++) { const x = 60 + i * 130, y = 760 + (i % 2) * 40; s.add(`<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 120}" stroke="#4a4a4a" stroke-width="3"/><path d="M${x - 70},${y - 100} Q${x},${y - 160} ${x + 70},${y - 100} Z" fill="${s.r.pick(["#c94a3c", "#3f6aa8", "#e8c42c", "#3f8a6a"])}"/>`); }
    return s.crowd({ y: 800, rows: 2, h: 90, gap: 40, rowGap: 40, thin: 0.3, colors: ["#2a2424", "#e8c42c", "#3f6aa8", "#c94a3c"] });
  },
  // A passenger jet at a gate at night, travellers with suitcases walking across wet tarmac to the stairs, floodlights.
  "ng_za-3": (s) => {
    s.sky("night", { stars: 20 });
    s.ground(460, "#2a2c30");
    s.glow(1300, 300, 300, "#f4f8ff", 0.4).add('<line x1="1300" y1="460" x2="1300" y2="300" stroke="#4a4a4a" stroke-width="5"/>');
    s.plane("airliner", 800, 520, { s: 3.2 });
    s.add('<polygon points="1020,560 1100,560 1200,720 1140,720" fill="#d9d2c2"/>');
    for (let i = 0; i < 12; i++) { const x = 200 + i * 80, y = 780 + (i % 2) * 20; s.person(x, y, 110, { color: s.r.pick(["#2a2c34", "#3a3030", "#3a4a5a"]), walk: true }); s.rect(x + 14, y - 34, 24, 34, s.r.pick(["#3a3a3a", "#5a2a2a", "#2a3a5a"])); }
    return s.add('<rect x="0" y="800" width="1600" height="100" fill="#f4f8ff" opacity="0.05"/>');
  },
};
