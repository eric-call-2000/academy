/* United Kingdom & Iran */
module.exports = {
  // An early 20th-century wooden oil derrick in rugged dry brown hills, a camp of tents and stone huts below.
  "gb_ir-1": (s) => {
    s.sky("desert", {});
    s.mountains({ y: 420, amp: 200, color: "#a88a6a", depth: 0.5 });
    s.ridge({ y: 560, amp: 140, color: "#9a7a5a", depth: 0.15, jag: true });
    s.ground(600, "arid");
    s.add('<g stroke="#4a3426" stroke-width="7" fill="none"><polygon points="700,620 860,620 800,300 760,300"/><line x1="712" y1="560" x2="848" y2="560"/><line x1="724" y1="490" x2="836" y2="490"/><line x1="738" y1="420" x2="822" y2="420"/><line x1="750" y1="360" x2="810" y2="360"/><line x1="712" y1="560" x2="836" y2="490"/><line x1="724" y1="490" x2="822" y2="420"/></g>');
    s.tents(300, 640, 700, { rows: 2, gap: 120, w: 70 });
    for (let i = 0; i < 4; i++) s.rect(1000 + i * 130, 650, 100, 50, "#b9a07a");
    s.add('<path d="M-20,820 Q600,760 1640,800" stroke="#c9b089" stroke-width="20" fill="none"/>');
    [[400, 800], [460, 806]].forEach(([x, y]) => s.add(`<g transform="translate(${x},${y})"><path d="M-30,-24 L24,-26 L36,-44 L42,-40 L32,-20 L-24,-14 Z" fill="#6a5040"/><line x1="-22" y1="-16" x2="-24" y2="0" stroke="#5a4030" stroke-width="4"/><line x1="24" y1="-20" x2="26" y2="0" stroke="#5a4030" stroke-width="4"/></g>`));
    return s;
  },
  // A high brick wall and iron gate of an old embassy compound on a Tehran street, plane trees, smoke and papers.
  "gb_ir-2": (s) => {
    s.sky("overcast", {});
    s.mountains({ y: 360, amp: 140, depth: 0.7, snow: 0.5 });
    s.forest({ y: 500, type: "oak", s: 1.8, gap: 120, depth: 0.2, color: "#5a6a4a" });
    s.wall(-20, 1640, 620, 200, { color: "#8a5a44" });
    s.rect(640, 420, 320, 200, "#2a2a2c");
    s.add('<g stroke="#1a1a1c" stroke-width="5">' + Array.from({ length: 14 }, (_, i) => `<line x1="${650 + i * 22}" y1="430" x2="${650 + i * 22}" y2="620"/>`).join("") + '</g>');
    [600, 1000].forEach((x) => s.rect(x - 20, 400, 40, 220, "#7a4a38"));
    s.smoke(1200, 420, { len: 300, dark: true, dir: -1 });
    s.ground(620, "asphalt");
    for (let i = 0; i < 40; i++) s.add(`<rect x="${(s.r() * 1600).toFixed(0)}" y="${(660 + s.r() * 220).toFixed(0)}" width="14" height="10" fill="#efe9dc" transform="rotate(${(s.r() * 60 - 30).toFixed(0)})" opacity="0.8"/>`);
    s.crowd({ y: 700, x0: 1150, x1: 1600, rows: 2, h: 70, gap: 30, colors: ["#2a2a2e", "#3a3a40"] });
    return s;
  },
  // A grand stone government building on a quiet London street at night, wet pavement, a parked police car.
  "gb_ir-3": (s) => {
    s.sky("night", { stars: 10 });
    s.rect(100, 200, 1400, 440, "#8a8270");
    for (let r = 0; r < 4; r++) for (let i = 0; i < 18; i++) s.rect(150 + i * 74, 240 + r * 100, 34, 60, r === 1 && i % 3 === 0 ? "#ffd59a" : "#3a3a40", r === 1 && i % 3 === 0 ? 'opacity="0.85"' : "");
    s.rect(100, 190, 1400, 16, "#7a7262");
    s.ground(640, "#2a2c30");
    s.add('<rect x="0" y="640" width="1600" height="40" fill="#4a4a4e"/>');
    s.lamps(150, 1450, 680, 200, { gap: 325 });
    s.vehicle("car", 1050, 790, { s: 2.2, color: "#e6e8ec" });
    s.add('<rect x="1000" y="700" width="40" height="8" fill="#3a5a9a"/><rect x="980" y="740" width="150" height="8" fill="#3a5a9a"/>');
    for (let i = 0; i < 6; i++) s.add(`<rect x="${200 + i * 260}" y="${780 + (i % 2) * 40}" width="80" height="4" fill="#ffd59a" opacity="0.3"/>`);
    return s;
  },
};
