/* Israel and Iran */
module.exports = {
  // A tanker at a small desert port on the Red Sea at dusk, white tanks and a pipeline running inland over bare mountains.
  "il_ir-1": (s) => s
    .sky("dusk")
    .mountains({ y: 460, amp: 220, color: "#8a6a5a", depth: 0.35 })
    .pipeline([[1600, 380], [1300, 420], [1000, 470], [700, 480]], { w: 6, depth: 0.2 })
    .tanks(700, 480, 4, { w: 70, h: 40 })
    .ground(480, "#b89a72")
    .sea(500, { color: "#3fa0a6" })
    .rect(200, 540, 500, 16, "#6a6a6a")
    .ship("tanker", 400, 620, { s: 0.9 }),
  // A dim underground hall of long rows of tall grey centrifuge cylinders joined by pipes, cold blue-white light.
  "il_ir-2": (s) => {
    s.mood("night", { light: "#dff0ff" });
    s.room3d({ depth: 4, wall: "#3a4450", side: "#343c48", floor: "#2a3038", ceiling: "#2a3038", lights: "strips" });
    for (let z = 4; z >= 1.3; z -= 0.12) for (let X = 160; X <= 1440; X += 160) { const p = s.pp(X, 900, z), h = 420 / z, w = 30 / z; s.rect(p[0] - w / 2, p[1] - h, w, h, s.c("#9aa4ae", (z - 1) / 4)); }
    return s.fog(500, { h: 300, color: "#9ab8d0", opacity: 0.2 });
  },
  // Rolling hills of southern Lebanon at dusk, a village of pale stone houses and olive groves, a cracked road, far smoke.
  "il_ir-3": (s) => {
    s.sky("dusk", { bottom: "#f2b07a" });
    s.hills({ y: 460, amp: 160, color: "#8a7a5a", depth: 0.4 });
    s.smoke(1300, 380, { len: 400, rise: 3, w: 20, dark: true });
    for (let i = 0; i < 16; i++) s.rect(500 + (i % 8) * 50, 460 + Math.floor(i / 8) * 34, 44, 30, "#e2d6bc");
    s.hills({ y: 640, amp: 120, color: "#7a8a5a", depth: 0.15 });
    s.forest({ y: 680, type: "oak", s: 0.7, gap: 70, color: "#7a8a6a", spread: 100 });
    return s.road({ vanish: [800, 600], w: 1000, color: "#7a7470" }).add('<path d="M700,760 L760,800 L720,850 L800,900" stroke="#4a4440" stroke-width="4" fill="none"/>');
  },
};
