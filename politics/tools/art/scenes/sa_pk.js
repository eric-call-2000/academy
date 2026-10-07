/* Saudi Arabia & Pakistan */
module.exports = {
  // A large white marble mosque with four slender pencil minarets and a tent-like angular prayer hall at the foot of green wooded hills.
  "sa_pk-1": (s) => {
    s.sky("morning", { clouds: 3 })
      .ridge({ y: 470, amp: 230, color: "forest", depth: 0.35, step: 60 });
    s.ground(560, "#cfc9bb");
    s.poly([[560, 560], [1040, 560], [940, 360], [800, 250], [660, 360]], "#eeece6");
    s.poly([[800, 250], [940, 360], [1040, 560], [880, 560]], "#d9d6cd");
    s.poly([[660, 560], [940, 560], [800, 420]], "#c9c5ba");
    [[340, 560], [500, 520], [1100, 520], [1260, 560]].forEach(([x, y]) => s.minaret(x, y, y - 120, { color: "#eeece6", w: 18 }));
    s.rect(-20, 600, 1640, 300, "#bdb6a6");
    for (let i = 0; i < 12; i++) s.add(`<line x1="${-20 + i * 140}" y1="600" x2="${-200 + i * 170}" y2="900" stroke="#a9a292" stroke-width="3"/>`);
    s.crowd({ y: 760, x0: 200, x1: 1400, rows: 1, h: 46, gap: 120, thin: 0.3 });
    return s;
  },
  // Construction workers in hard hats on the scaffolding of a rising concrete tower in a desert city at sunset, tower cranes overhead.
  "sa_pk-2": (s) => {
    s.sky("golden", { sun: [1300, 420], r: 50, clouds: 2 });
    s.city({ y: 560, style: "towers", h: [80, 260], depth: 0.6 });
    s.towerCrane(1100, 560, 1.4).towerCrane(300, 560, 1.1, { depth: 0.3 });
    s.ground(560, "desert");
    s.rect(480, 140, 520, 600, "#a8a39a");
    for (let y = 160; y < 740; y += 70) s.rect(470, y, 540, 12, "#8f8a82");
    for (let x = 500; x < 1000; x += 80) s.rect(x, 140, 12, 600, "#8f8a82");
    for (let y = 150; y < 740; y += 35) s.add(`<line x1="460" y1="${y}" x2="1020" y2="${y}" stroke="#c9a24a" stroke-width="2" opacity="0.7"/>`);
    for (let x = 470; x < 1020; x += 46) s.add(`<line x1="${x}" y1="140" x2="${x}" y2="740" stroke="#c9a24a" stroke-width="2" opacity="0.7"/>`);
    [[560, 290], [700, 360], [860, 290], [620, 500], [920, 570], [760, 640]].forEach(([x, y]) => s.person(x, y, 54, { color: "#3f4a5a", hat: "hard" }));
    s.rect(-20, 740, 1640, 160, "#bfa77f");
    return s;
  },
  // A row of modern fighter jets on a desert airbase at sunrise, a rotating radar and missile launchers beside low hangars.
  "sa_pk-3": (s) => {
    s.sky("dawn", { sun: [260, 420], r: 50, clouds: 2 });
    s.dunes(440, { layers: 2, depth: 0.6 });
    s.ground(520, "sand");
    [[900, 0.6], [1200, 0.6]].forEach(([x]) => s.add(`<path d="M${x - 140},520 L${x - 140},460 Q${x},380 ${x + 140},460 L${x + 140},520 Z" fill="#b5a888"/>`));
    s.dish(1480, 520, 0.8, { tilt: -30 });
    s.rect(0, 600, 1600, 200, "#a39c8c");
    for (let i = 0; i < 4; i++) {
      const x = 260 + i * 330, y = 700;
      s.add(`<g transform="translate(${x},${y}) scale(1.6)"><path d="M90,-20 L60,-26 L10,-28 L-60,-24 L-80,-62 L-92,-62 L-86,-22 L-90,-14 L70,-12 Z" fill="#5d6670"/><path d="M20,-20 L-30,-20 L-50,-4 L0,-4 Z" fill="#4c545c"/><path d="M60,-26 Q50,-38 30,-36 L20,-28 Z" fill="#9fb0bf"/><line x1="40" y1="-12" x2="40" y2="0" stroke="#2a2a2a" stroke-width="3"/><line x1="-40" y1="-12" x2="-40" y2="0" stroke="#2a2a2a" stroke-width="3"/></g>`);
    }
    s.add('<g transform="translate(1300,560)"><rect x="-80" y="-30" width="160" height="30" fill="#7a7458"/><g transform="rotate(-30)"><rect x="-60" y="-70" width="120" height="30" fill="#8a8466"/><rect x="-60" y="-104" width="120" height="30" fill="#8a8466"/></g></g>');
    return s;
  },
};
