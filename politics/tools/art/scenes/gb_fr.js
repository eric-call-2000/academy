/* United Kingdom and France */
module.exports = {
  // Tall white chalk cliffs above a narrow grey-green sea, a faint low coastline on the far horizon, seagulls.
  "gb_fr-1": (s) => s
    .sky("haze", { top: "#b8bcc0", bottom: "#e0e0d8" })
    .sea(500, { color: "#7a9088" })
    .add('<rect x="900" y="490" width="700" height="10" fill="#9aa4a0"/>')
    .poly([[0, 230], [180, 250], [420, 300], [620, 360], [700, 900], [0, 900]], "#ecebe2")
    .poly([[0, 230], [180, 250], [420, 300], [620, 360], [640, 380], [400, 330], [0, 270]], "#6f8a52")
    .birds(900, 300, 6),
  // A small crowded grey inflatable boat on a choppy grey sea at dawn, seen from far, a low coast of sand dunes behind.
  "gb_fr-2": (s) => {
    s.sky("dawn", { top: "#9aa0ac", bottom: "#d8d4cc" });
    s.dunes(420, { color: "#c9b89a", depth: 0.5, layers: 1 });
    s.sea(460, { color: "#5a6a72", lines: 150 });
    s.add('<path d="M640,640 Q800,664 960,640 Q980,620 960,610 L640,610 Q620,620 640,640 Z" fill="#5a5e62"/>');
    for (let i = 0; i < 20; i++) s.add(`<circle cx="${650 + i * 15}" cy="${600 - (i % 2) * 6}" r="7" fill="${s.r.pick(["#e0782c", "#2a2a2e", "#3a3a40"])}"/>`);
    return s;
  },
  // A large dark submarine partly surfaced in a calm grey sea at dusk, a second faint one far off, low clouds.
  "gb_fr-3": (s) => s
    .sky("overcast", { top: "#5a6068", bottom: "#a8a8a4", clouds: 4, cloudColor: "#6a6e72" })
    .sea(500, { color: "#4a5660" })
    .ship("sub", 1300, 520, { s: 0.3, depth: 0.5 })
    .ship("sub", 700, 660, { s: 1.6 }),
};
