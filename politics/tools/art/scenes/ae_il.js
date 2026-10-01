/* The UAE and Israel */
module.exports = {
  // A white neoclassical colonnaded balcony over a wide lawn, a long table with chairs and pens for a signing, guest chairs.
  "ae_il-1": (s) => {
    s.sky("day");
    s.rect(200, 120, 1200, 300, "#f4f2ee");
    for (let i = 0; i < 12; i++) s.rect(240 + i * 100, 140, 30, 280, "#e8e4dc");
    s.rect(180, 410, 1240, 30, "#e2ddd0");
    s.ground(440, "#6f9a52");
    s.rect(500, 500, 600, 20, "#5a3a24").rect(500, 520, 600, 60, "#3f5a3a");
    for (let i = 0; i < 4; i++) s.rect(560 + i * 140, 440, 60, 60, "#6a4a30");
    for (let r = 0; r < 4; r++) for (let i = 0; i < 16; i++) s.rect(140 + i * 84 + r * 10, 640 + r * 60, 50, 50, "#d9b23c");
    return s;
  },
  // A modern airport terminal with a white jet at the gate through tall glass, a desert skyline of very tall towers, evening.
  "ae_il-2": (s) => {
    s.sky("golden");
    s.city({ y: 440, style: "towers", h: [120, 300], depth: 0.5, lit: false });
    s.tower(1200, 440, 50, 380, { spire: 120, depth: 0.4, color: "#8a9ab0" });
    s.ground(440, "#8a8682");
    s.plane("airliner", 700, 540, { s: 2.4 });
    s.rect(0, 0, 1600, 60, "#3a3e44").rect(0, 680, 1600, 220, "#5a5e64");
    for (let x = 0; x < 1600; x += 200) s.rect(x, 60, 12, 620, "#3a3e44");
    return s.person(400, 860, 140, { color: "#2a2c34", bundle: "#5a5e64" }).person(1200, 870, 150, { color: "#3a3030" });
  },
  // Interceptors rising with bright trails over a desert city of tall skyscrapers at night, small bursts, city lights.
  "ae_il-3": (s) => s
    .sky("night", { stars: 20 })
    .city({ y: 640, style: "towers", h: [200, 360], depth: 0.2, lit: true, color: "#2a3448" })
    .tower(900, 640, 60, 520, { spire: 100, lit: true, color: "#3a4458" })
    .intercepts(100, 1500, 640, 9)
    .ground(640, "#1e1e22"),
};
