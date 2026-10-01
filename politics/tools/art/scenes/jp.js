/* Japan */
module.exports = {
  // An empty rural village street in autumn light, one elderly figure far away.
  "jp-12": (s) => {
    s.sky("afternoon", { clouds: 3 })
      .mountains({ y: 470, amp: 200, color: "forest", depth: 0.55, jag: false, step: 80 })
      .hills({ y: 520, amp: 90, color: "#5f7a4a", depth: 0.35 })
      .forest({ y: 520, x0: 600, x1: 1000, type: "autumn", s: 0.5, depth: 0.4, gap: 22 })
      .ground(520, "#8c8270")
      .road({ vanish: [800, 520], w: 1100, color: "#9a8f7c", line: false });
    // wooden houses with dark tiled roofs on both sides, shrinking toward the vanishing point
    const side = (dir) => {
      for (let i = 0; i < 6; i++) {
        const t = i / 6, near = 1 - t, x = 800 + dir * (180 + 520 * near), y = 520 + 360 * near * near * 0.9 + 10;
        const w = 60 + 300 * near, h = 50 + 260 * near;
        const bx = dir > 0 ? x : x - w;
        s.rect(bx, y - h, w, h, s.c("#6b4f3c", t * 0.6));
        for (let k = 0; k < 4; k++) s.rect(bx + w * (0.1 + k * 0.22), y - h * 0.7, w * 0.12, h * 0.5, s.c("#4a372b", t * 0.6));
        s.poly([[bx - w * 0.1, y - h], [bx + w * 1.1, y - h], [bx + w * 0.95, y - h - h * 0.35], [bx + w * 0.05, y - h - h * 0.35]], s.c("#3e3d42", t * 0.6));
      }
    };
    side(-1); side(1);
    s.person(812, 548, 26, { coat: true, color: "#3b3631" });
    s.tree("autumn", 1450, 760, { s: 1.6 });
    return s;
  },
};
