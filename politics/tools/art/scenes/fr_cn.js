/* France & China */
module.exports = {
  // Stone ruins of a European-style palace, broken carved columns and arches, beside a lake in a Chinese garden.
  "fr_cn-1": (s) => {
    s.sky("overcast", { clouds: 3 });
    s.hills({ y: 460, amp: 60, color: "#7a8a6a", depth: 0.6 });
    s.ground(480, "#8a9a6a");
    s.add('<path d="M380,560 L380,330 L420,330 L420,560 Z M520,560 L520,280 L560,280 L560,560 Z M720,560 L720,360 L760,350 L760,560 Z M940,560 L940,300 L980,300 L980,560 Z" fill="#d9d2c2"/>');
    s.add('<path d="M560,300 L720,300 L720,340 Q640,300 560,340 Z" fill="#d2cab8"/><path d="M360,330 L440,330 L440,312 L360,312 Z M500,280 L580,280 L580,262 L500,262 Z M920,300 L1000,300 L1000,282 L920,282 Z" fill="#cfc6b2"/>');
    s.add('<path d="M980,460 Q1060,420 1080,470 L1100,560 L980,560 Z" fill="#cfc6b2"/><path d="M780,560 L800,520 L860,530 L880,560 Z M420,560 L440,540 L500,548 L510,560 Z" fill="#c4bba8"/>');
    s.sea(560, { color: "#6a8a8a", lines: 40 });
    for (let i = 0; i < 26; i++) s.add(`<ellipse cx="${(s.r() * 1600).toFixed(0)}" cy="${(640 + s.r() * 240).toFixed(0)}" rx="${(18 + s.r() * 20).toFixed(0)}" ry="${(7 + s.r() * 6).toFixed(0)}" fill="#4f7a4a" opacity="0.85"/>`);
    [[120, 600], [1400, 620], [1250, 580]].forEach(([x, y]) => { s.add(`<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 260}" stroke="#5a4a3c" stroke-width="10"/>`); for (let k = 0; k < 16; k++) { const a = x + s.r.range(-90, 90); s.add(`<path d="M${x},${y - 250} Q${a},${y - 240} ${a + s.r.range(-10, 10)},${y - s.r.range(40, 140)}" stroke="#8aa060" stroke-width="5" fill="none" opacity="0.8"/>`); } });
    s.fog(500, { h: 100, opacity: 0.45 });
    return s;
  },
  // A nuclear power station with two white domed reactor buildings on a green coastal headland, calm bay and hills.
  "fr_cn-2": (s) => {
    s.sky("haze", {});
    s.hills({ y: 430, amp: 90, color: "#7a8a6a", depth: 0.55 });
    s.sea(480, { color: "#7a9aa0" });
    s.add('<path d="M-20,900 L-20,600 Q300,520 700,530 Q1000,540 1200,600 Q1350,640 1640,620 L1640,900 Z" fill="#6e8a5a"/>');
    [[520, 560], [820, 560]].forEach(([x, y]) => s.add(`<rect x="${x - 90}" y="${y - 150}" width="180" height="150" fill="#eceae4"/><path d="M${x - 90},${y - 150} A90,80 0 0 1 ${x + 90},${y - 150} Z" fill="#f4f2ec"/><rect x="${x - 90}" y="${y - 30}" width="180" height="6" fill="#c9c6bc"/>`));
    s.rect(960, 470, 300, 90, "#d9d6cc").rect(960, 462, 300, 10, "#bdb9ae").rect(300, 500, 120, 60, "#cfccc2");
    s.pylons(1300, 1640, 560, { h: 120, gap: 200 });
    return s;
  },
  // Copper pot stills in an old stone barn of a cognac distillery, oak barrels along the walls, a doorway onto vineyards.
  "fr_cn-3": (s) => {
    s.mood("interior", { light: "#ffd59a" });
    s.room({ wall: "#b9a688", floorY: 640, floor: "#6a5a48" });
    for (let y = 40; y < 640; y += 40) for (let x = (y / 40) % 2 ? 0 : 50; x < 1600; x += 100) s.add(`<rect x="${x}" y="${y}" width="96" height="36" fill="none" stroke="#a69676" stroke-width="2"/>`);
    s.rect(1080, 140, 340, 500, "#efc98a");
    s.add('<rect x="1080" y="140" width="340" height="500" fill="#efc98a"/><rect x="1080" y="380" width="340" height="260" fill="#9a8a4a"/>');
    for (let i = 0; i < 9; i++) s.add(`<line x1="${1250 + (i - 4) * 10}" y1="380" x2="${1250 + (i - 4) * 50}" y2="640" stroke="#5a6a3a" stroke-width="6"/>`);
    s.add('<rect x="1060" y="120" width="20" height="520" fill="#5a4a3a"/><rect x="1420" y="120" width="20" height="520" fill="#5a4a3a"/><rect x="1060" y="110" width="380" height="20" fill="#5a4a3a"/>');
    s.add('<polygon points="1080,640 1420,640 1560,900 980,900" fill="#efc98a" opacity="0.18"/>');
    for (let r = 0; r < 3; r++) for (let i = 0; i < 4; i++) s.add(`<ellipse cx="${80 + i * 80 + (r % 2) * 40}" cy="${600 - r * 64}" rx="38" ry="32" fill="#7a5034"/><ellipse cx="${80 + i * 80 + (r % 2) * 40}" cy="${600 - r * 64}" rx="26" ry="22" fill="#8a6040"/><circle cx="${80 + i * 80 + (r % 2) * 40}" cy="${600 - r * 64}" r="4" fill="#4a3020"/>`);
    [[560, 1], [860, 0.9]].forEach(([x, k]) => s.add(`<g transform="translate(${x},700) scale(${k})"><rect x="-90" y="-40" width="180" height="40" fill="#8a6a4a"/><path d="M-110,-40 Q-120,-200 0,-210 Q120,-200 110,-40 Z" fill="#b8693a"/><path d="M-80,-60 Q-90,-180 0,-190" stroke="#e09a5a" stroke-width="10" fill="none" opacity="0.6"/><path d="M-30,-210 Q-30,-270 0,-280 Q30,-270 30,-210 Z" fill="#a85a2e"/><path d="M0,-280 Q60,-320 140,-260 L180,-160" stroke="#b8693a" stroke-width="12" fill="none"/></g>`));
    s.glow(1250, 380, 500, "#ffd59a", 0.25);
    return s;
  },
};
