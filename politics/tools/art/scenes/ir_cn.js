/* Iran and China */
module.exports = {
  // An oil tanker on fire in the Gulf in the 1980s, black smoke rising, a white missile trail across a hazy sky, a patrol boat.
  "ir_cn-1": (s) => s
    .sky("haze", { top: "#b8a880" })
    .sea(480, { color: "#7a8a88" })
    .missile(200, 300, { len: 900, angle: 10, curve: -80, w: 4 })
    .ship("tanker", 900, 640, { s: 1.3, fire: true })
    .ship("patrol", 300, 700, { s: 0.6 })
    .add('<rect width="1600" height="900" fill="#8a6a4a" opacity="0.12"/>'),
  // Two old rusty tankers moored side by side on a dark sea at night, thick hoses between them, deck lights, refinery lights.
  "ir_cn-2": (s) => {
    s.sky("night", { stars: 30 });
    for (let i = 0; i < 80; i++) s.add(`<circle cx="${s.r() * 1600}" cy="${470 + s.r() * 10}" r="1.6" fill="#ffb85a"/>`);
    s.flare(1300, 450, 0.5);
    s.sea(480, { color: "#141c2c" });
    s.ship("tanker", 760, 640, { s: 1.4, hull: "#5a3a30" }).ship("tanker", 860, 720, { s: 1.5, dir: -1, hull: "#4a3428" });
    for (let i = 0; i < 4; i++) s.add(`<path d="M${640 + i * 60},606 Q${660 + i * 60},660 ${680 + i * 60},680" stroke="#1a1a1a" stroke-width="8" fill="none"/>`);
    for (let i = 0; i < 12; i++) s.add(`<circle cx="${560 + i * 50}" cy="${596 + (i % 2) * 70}" r="4" fill="#fff0c4"/>`);
    return s;
  },
  // A dense oil refinery on a flat grey coast: rows of tanks, tall columns, idle flare stacks, tankers at a jetty, overcast.
  "ir_cn-3": (s) => s
    .sky("overcast")
    .refinery(900, 520, 1.3, { flare: false })
    .tanks(100, 520, 6, { w: 80, h: 46 })
    .rect(1300, 300, 10, 220, "#8d8f8c").rect(1360, 340, 10, 180, "#8d8f8c")
    .ground(520, "#7a7a76")
    .sea(580, { color: "#6a7a84" })
    .rect(200, 640, 900, 14, "#6a6a6a")
    .ship("tanker", 500, 720, { s: 0.8 }).ship("tanker", 1150, 740, { s: 0.9, dir: -1 }),
};
