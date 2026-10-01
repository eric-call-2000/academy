/* Germany and Turkey */
module.exports = {
  // An ornate stone railway station with a steep slate roof and turrets on a waterfront, a steam train, ferries in front.
  "de_tr-1": (s) => {
    s.sky("golden");
    s.rect(400, 300, 800, 220, "#c9b08a").poly([[380, 300], [1220, 300], [1140, 200], [460, 200]], "#4a4e58");
    [420, 1180].forEach((x) => { s.rect(x - 40, 160, 80, 360, "#c9b08a"); s.poly([[x - 50, 160], [x + 50, 160], [x, 80]], "#4a4e58"); });
    for (let i = 0; i < 8; i++) s.add(`<path d="M${480 + i * 90},500 L${480 + i * 90},400 A30,30 0 0 1 ${540 + i * 90},400 L${540 + i * 90},500 Z" fill="#6a5a4a"/>`);
    s.train(100, 700, 520, { color: "#2a2a2a", steam: true, s: 0.8 });
    s.sea(540, { glint: 1300 });
    return s.ship("ferry", 500, 660, { s: 0.6 }).ship("ferry", 1100, 720, { s: 0.7, dir: -1 });
  },
  // A 1960s platform with a long train, young men in suits and caps with suitcases stepping off, steam, a station clock.
  "de_tr-2": (s) => {
    s.mood("overcast");
    s.rect(0, 0, 1600, 900, "#8a8478");
    s.add('<path d="M0,120 L1600,40 L1600,0 L0,0 Z" fill="#5a5650"/>');
    for (let x = 100; x < 1600; x += 260) s.rect(x, 80, 12, 520, "#4a4640");
    s.add('<circle cx="1300" cy="200" r="50" fill="#f2efe8" stroke="#2a2a2a" stroke-width="6"/><line x1="1300" y1="200" x2="1300" y2="166" stroke="#2a2a2a" stroke-width="4"/><line x1="1300" y1="200" x2="1324" y2="210" stroke="#2a2a2a" stroke-width="4"/>');
    s.train(-40, 1660, 600, { color: "#3a4a3a", s: 2, track: false });
    s.smoke(300, 420, { len: 400, rise: 1, w: 80, color: "#e8e6e0" });
    s.rect(0, 600, 1600, 300, "#9a948a");
    for (let i = 0; i < 9; i++) { const x = 160 + i * 150, y = 760 + (i % 2) * 40; s.person(x, y, 170, { color: s.r.pick(["#3a3a40", "#4a3a34", "#2a2c34"]) }); s.rect(x + 26, y - 60, 44, 40, "#6a4a30"); s.add(`<ellipse cx="${x}" cy="${y - 168}" rx="22" ry="7" fill="#2a2a2a"/>`); }
    return s.add('<rect width="1600" height="900" fill="#8a7a6a" opacity="0.15"/>');
  },
  // A grey twin-engine delta-wing fighter taking off with gear up, heat shimmer, dry brown mountains, blue sky.
  "de_tr-3": (s) => {
    s.sky("day", { top: "#3f7ab8" });
    s.mountains({ y: 520, amp: 220, color: "#8a6a4a", depth: 0.35 });
    s.ground(520, "#b89a72").add('<polygon points="-40,700 1640,640 1640,720 -40,800" fill="#6a6662"/>');
    s.add('<g transform="translate(800,480) rotate(-12)"><path d="M140,0 L-30,-12 L-90,-70 L-112,-70 L-90,-10 L-120,-8 L-140,-40 L-152,-40 L-140,0 L-152,40 L-140,40 L-120,8 L-90,10 L-112,70 L-90,70 L-30,12 Z" fill="#7a8088"/><path d="M-152,-6 L-210,0 L-152,6 Z" fill="#ffb85a"/></g>');
    return s.fog(640, { h: 60, color: "#d9c4a0", opacity: 0.5 });
  },
};
