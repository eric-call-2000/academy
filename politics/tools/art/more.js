/* ============================================================
   More pieces for the illustration toolkit (see lib.js):
   one-point perspective (rooms, halls, streets, tables, rows of
   seats) and landmarks that recur across the lessons.

   Perspective: s.persp({ vanish: [vx, vy], depth }) sets a camera
   whose picture plane is the frame (z = 1) and whose far plane is
   z = depth. A point (X, Y) on the picture plane, pushed back to
   distance z, lands at s.pp(X, Y, z). Floors are Y = H (or floorY),
   ceilings Y = 0, the left wall X = 0 and the right wall X = W.
   ============================================================ */
"use strict";
const { Scene, W, H, mix, shade } = require("./lib");

const n = (v) => Math.round(v * 10) / 10;
const pts = (arr) => arr.map((p) => n(p[0]) + "," + n(p[1])).join(" ");

Object.assign(Scene.prototype, {
  /* ---------- perspective ---------- */
  persp(o) {
    o = o || {};
    const [vx, vy] = o.vanish || [W / 2, H * 0.46];
    this.P = { vx, vy, Z: o.depth || 3 };
    return this;
  },
  pp(X, Y, z) {
    const P = this.P || (this.persp(), this.P);
    return [P.vx + (X - P.vx) / z, P.vy + (Y - P.vy) / z];
  },
  /* quad in a plane: kind "floor" (X0..X1 at height Y, z0..z1), "wallX" (plane X, Y0..Y1, z0..z1), "front" (X0..X1, Y0..Y1 at z) */
  quad(kind, a, color, extra) {
    let p;
    if (kind === "floor") { const [X0, X1, Y, z0, z1] = a; p = [this.pp(X0, Y, z0), this.pp(X1, Y, z0), this.pp(X1, Y, z1), this.pp(X0, Y, z1)]; }
    else if (kind === "wallX") { const [X, Y0, Y1, z0, z1] = a; p = [this.pp(X, Y0, z0), this.pp(X, Y0, z1), this.pp(X, Y1, z1), this.pp(X, Y1, z0)]; }
    else { const [X0, X1, Y0, Y1, z] = a; p = [this.pp(X0, Y0, z), this.pp(X1, Y0, z), this.pp(X1, Y1, z), this.pp(X0, Y1, z)]; }
    return this.add(`<polygon points="${pts(p)}" fill="${color}" ${extra || ""}/>`);
  },
  /* a solid box standing on Y1 (its base), seen from the camera: front, top and the visible side */
  box3d(X0, X1, Y0, Y1, z0, z1, color, o) {
    o = o || {};
    const P = this.P;
    const top = o.top || shade(color, 0.12), side = o.side || shade(color, -0.15);
    if (Y0 > P.vy) this.quad("floor", [X0, X1, Y0, z0, z1], top);
    else if (Y1 < P.vy) this.quad("floor", [X0, X1, Y1, z0, z1], shade(color, -0.25));
    if (X1 < P.vx) this.quad("wallX", [X1, Y0, Y1, z0, z1], side);
    if (X0 > P.vx) this.quad("wallX", [X0, Y0, Y1, z0, z1], side);
    return this.quad("front", [X0, X1, Y0, Y1, z0], color);
  },
  /* a room or hall seen down its length */
  room3d(o) {
    o = o || {};
    this.persp(o);
    const Z = this.P.Z, fl = o.floorY || H, cl = o.ceilY || 0;
    const wall = o.wall || "#b9ad9a", side = o.side || shade(wall, -0.08), floor = o.floor || shade(wall, -0.38), ceil = o.ceiling || shade(wall, -0.18);
    this.add(`<rect width="${W}" height="${H}" fill="${ceil}"/>`);
    this.quad("floor", [0, W, cl, 1, Z], ceil);
    this.quad("floor", [0, W, fl, 1, Z], floor);
    this.quad("wallX", [0, cl, fl, 1, Z], side);
    this.quad("wallX", [W, cl, fl, 1, Z], shade(side, -0.05));
    this.quad("front", [0, W, cl, fl, Z], wall);
    if (o.carpet) this.quad("floor", [W * 0.36, W * 0.64, fl, 1, Z], o.carpet);
    if (o.boards) for (let i = 1; i < 14; i++) { const X = i * W / 14; this.add(`<line x1="${n(this.pp(X, fl, 1)[0])}" y1="${fl}" x2="${n(this.pp(X, fl, Z)[0])}" y2="${n(this.pp(X, fl, Z)[1])}" stroke="${shade(floor, -0.12)}" stroke-width="2" opacity="0.6"/>`); }
    // windows down the side walls
    const win = o.windows;
    if (win) {
      const count = win.n || 4, y0 = win.top == null ? H * 0.12 : win.top, y1 = win.bottom == null ? H * 0.62 : win.bottom;
      const glass = win.color || mix(this.m.top, this.m.light, 0.5);
      ["left", "right"].forEach((sd) => {
        if (win.side && win.side !== sd && win.side !== "both") return;
        const X = sd === "left" ? 0 : W;
        for (let i = 0; i < count; i++) {
          const za = 1.15 + i * (Z - 1.3) / count, zb = za + (Z - 1.3) / count * 0.55;
          if (win.arched) this.quad("wallX", [X, y0 - 30, y1, za, zb], glass);
          this.quad("wallX", [X, y0, y1, za, zb], glass);
          if (o.beams !== false && sd === (win.lightFrom || "left")) {
            const a = this.pp(X, y0, za), b = this.pp(X, y1, zb), c = this.pp(X, y1, za);
            const fx = sd === "left" ? 1 : -1;
            this.add(`<polygon points="${pts([a, c, [c[0] + fx * 420 / za, fl], [b[0] + fx * 420 / zb, this.pp(X, fl, zb)[1]], b])}" fill="${this.m.light}" opacity="0.08"/>`);
          }
        }
      });
    }
    if (o.backWindows) o.backWindows.forEach(([X0, X1, Y0, Y1]) => this.quad("front", [X0, X1, Y0, Y1, Z], o.backGlass || mix(this.m.top, this.m.light, 0.45)));
    if (o.columns) for (let i = 0; i < o.columns; i++) {
      const z = 1.2 + i * (Z - 1.2) / o.columns, cw = o.colW || 60;
      this.box3d(o.colX || 140, (o.colX || 140) + cw, cl, fl, z, z + 0.05, o.colColor || shade(wall, 0.1));
      this.box3d(W - (o.colX || 140) - cw, W - (o.colX || 140), cl, fl, z, z + 0.05, o.colColor || shade(wall, 0.1));
    }
    if (o.panels) for (let i = 0; i <= 10; i++) { const z = 1 + i * (Z - 1) / 10; ["left", "right"].forEach((sd) => { const X = sd === "left" ? 0 : W; const a = this.pp(X, fl * 0.6, z), b = this.pp(X, fl, z); this.add(`<line x1="${n(a[0])}" y1="${n(a[1])}" x2="${n(b[0])}" y2="${n(b[1])}" stroke="${shade(side, -0.2)}" stroke-width="2"/>`); }); }
    if (o.wainscot) { this.quad("wallX", [0, fl * 0.62, fl, 1, Z], shade(side, -0.18)); this.quad("wallX", [W, fl * 0.62, fl, 1, Z], shade(side, -0.22)); this.quad("front", [0, W, fl * 0.62, fl, Z], shade(wall, -0.18)); }
    if (o.lights === "grid") for (let i = 0; i < 8; i++) for (let j = 0; j < 9; j++) { const p = this.pp(W * (0.08 + j * 0.105), cl, 1.1 + i * (Z - 1.2) / 8); this.add(`<circle cx="${n(p[0])}" cy="${n(p[1])}" r="${n(5 / (1 + i * 0.4))}" fill="#fff4d6" opacity="0.85"/>`); }
    if (o.lights === "chandeliers") for (let i = 0; i < 3; i++) { const z = 1.4 + i * (Z - 1.4) / 3, p = this.pp(W / 2, cl + 160, z); this.chandelier(p[0], p[1] - 40 / z, 1.3 / z); }
    if (o.lights === "strips") for (let i = 0; i < 5; i++) { const z = 1.2 + i * (Z - 1.2) / 5; this.quad("floor", [W * 0.3, W * 0.7, cl + 6, z, z + 0.08], "#f4f6f2"); }
    return this;
  },
  /* a long table running away from the camera, with chairs down both sides */
  table3d(X0, X1, z0, z1, o) {
    o = o || {};
    const fl = o.floorY || H, th = o.h || 230, col = o.color || "#5b4636", top = o.cloth || shade(col, 0.15);
    if (o.chairs !== false) this.chairs3d(X0 - 70, X1 + 70, z0, z1, { count: o.count, color: o.chairColor, floorY: fl, sides: true, back: X0 - 70 });
    this.box3d(X0, X1, fl - th, fl - th + 26, z0, z1, o.cloth ? shade(o.cloth, -0.1) : col, { top });
    if (o.cloth) { this.quad("wallX", [X0, fl - th, fl - th + 90, z0, z1], shade(o.cloth, -0.18)); this.quad("wallX", [X1, fl - th, fl - th + 90, z0, z1], shade(o.cloth, -0.22)); this.quad("front", [X0, X1, fl - th, fl - th + 90, z0], shade(o.cloth, -0.12)); }
    else { this.box3d(X0 + 10, X0 + 40, fl - th + 26, fl, z0 + 0.05, z0 + 0.12, shade(col, -0.2)); this.box3d(X1 - 40, X1 - 10, fl - th + 26, fl, z0 + 0.05, z0 + 0.12, shade(col, -0.2)); }
    if (o.cups || o.papers || o.folders) {
      const count = o.count || 6;
      for (let i = 0; i < count; i++) {
        const z = z0 + (i + 0.5) * (z1 - z0) / count;
        [X0 + 50, X1 - 50].forEach((X) => {
          if (o.cups) { const p = this.pp(X, fl - th, z); this.add(`<rect x="${n(p[0] - 9 / z)}" y="${n(p[1] - 18 / z)}" width="${n(18 / z)}" height="${n(18 / z)}" rx="${n(3 / z)}" fill="#f4f1ea"/>`); }
          if (o.papers) this.quad("floor", [X - 40, X + 30, fl - th - 1, z - 0.05, z + 0.05], "#efe9dc");
        });
      }
      if (o.folders) o.folders.forEach(([X, z, c]) => this.quad("floor", [X - 50, X + 50, fl - th - 2, z - 0.06, z + 0.06], c || "#3e2f28"));
    }
    if (o.glasses) o.glasses.forEach(([X, z]) => { const p = this.pp(X, fl - th, z); this.add(`<rect x="${n(p[0] - 7 / z)}" y="${n(p[1] - 30 / z)}" width="${n(14 / z)}" height="${n(30 / z)}" fill="#dfe9ee" opacity="0.7"/>`); });
    return this;
  },
  /* chairs: along a line X0..X1 at z (a row facing away), or with sides:true down both sides of a table */
  chair3d(X, z, o) {
    o = o || {};
    const fl = o.floorY || H, col = o.color || "#4a3a30", w = 70, seat = 130, back = 260;
    this.box3d(X - w / 2, X + w / 2, fl - back, fl - seat, z + 0.03, z + 0.05, shade(col, -0.05));
    this.box3d(X - w / 2, X + w / 2, fl - seat, fl - seat + 14, z, z + 0.05, col);
    this.box3d(X - w / 2, X - w / 2 + 8, fl - seat + 14, fl, z, z + 0.01, shade(col, -0.2));
    return this.box3d(X + w / 2 - 8, X + w / 2, fl - seat + 14, fl, z, z + 0.01, shade(col, -0.2));
  },
  chairs3d(X0, X1, z0, z1, o) {
    o = o || {};
    const count = o.count || 6, list = [];
    for (let i = 0; i < count; i++) {
      const z = z1 - (i + 0.5) * (z1 - z0) / count;
      if (o.sides) { list.push([X0, z]); list.push([X1, z]); } else for (let X = X0; X <= X1; X += o.gap || 110) list.push([X, z]);
    }
    list.forEach(([X, z]) => { if (!o.empty || this.r() > o.empty) this.chair3d(X, z, o); });
    return this;
  },
  /* rows of desks / benches / seats filling a floor area (assemblies, classrooms, courts, halls) */
  rows3d(o) {
    const X0 = o.X0 == null ? 160 : o.X0, X1 = o.X1 == null ? W - 160 : o.X1, z0 = o.z0 || 1.3, z1 = o.z1 || 2.6, rows = o.rows || 6;
    const fl = o.floorY || H, col = o.color || "#6b4f3c", h = o.h || 150, aisle = o.aisle;
    for (let i = rows - 1; i >= 0; i--) {
      const z = z0 + i * (z1 - z0) / rows, d = (z1 - z0) / rows * 0.4;
      const segs = aisle ? [[X0, W / 2 - aisle / 2], [W / 2 + aisle / 2, X1]] : [[X0, X1]];
      segs.forEach(([a, b]) => {
        this.box3d(a, b, fl - h, fl, z, z + d, i % 2 && o.alt ? o.alt : col, { top: o.top || shade(col, 0.12) });
        if (o.people && this.r() < o.people) { const cols = o.peopleColors || [this.m.ink]; for (let X = a + 60; X < b - 30; X += 90 + this.r() * 80) if (this.r() < 0.6) this.figure3d(X, z + d + 0.02, { h: o.personH || 300, color: this.r.pick(cols), floorY: fl - h * 0.4, sitting: true }); }
        if (o.cloth) this.quad("front", [a, b, fl - h, fl - h + 40, z], o.cloth);
      });
    }
    return this;
  },
  /* a person at depth z on the floor (seen from behind) */
  figure3d(X, z, o) {
    o = o || {};
    const fl = o.floorY || H, p = this.pp(X, fl, z), h = (o.h || 420) / z;
    return this.person(p[0], p[1], h, Object.assign({}, o, { h: undefined }));
  },
  /* a semicircle of seats rising round a floor, seen from the back (parliament chambers) */
  hemicycle(o) {
    // rows are U-shaped arcs round the rostrum at (x, y), opening away from the viewer
    o = o || {};
    const cx = o.x || W / 2, cy = o.y || 480, rx0 = o.r0 || 200, rows = o.rows || 8, col = o.color || "#7a3f3a", r = this.r;
    const tilt = o.tilt || 0.45, step = o.step || 70, bw = o.bench || step * 0.55;
    for (let i = rows - 1; i >= 0; i--) {
      const rx = rx0 + i * step, ry = rx * tilt;
      this.add(`<path d="M${n(cx - rx)},${n(cy)} A${n(rx)},${n(ry)} 0 0 0 ${n(cx + rx)},${n(cy)}" stroke="${shade(col, -0.25)}" stroke-width="${n(bw + 8)}" fill="none"/><path d="M${n(cx - rx)},${n(cy - 4)} A${n(rx)},${n(ry)} 0 0 0 ${n(cx + rx)},${n(cy - 4)}" stroke="${shade(col, 0.05 * (i % 2))}" stroke-width="${n(bw)}" fill="none"/>`);
      if (o.people) for (let a = 0.04; a < 0.96; a += 0.025) {
        if (r() > o.people) continue;
        const t = Math.PI * a, px = cx - Math.cos(t) * rx, py = cy + Math.sin(t) * ry;
        this.add(`<circle cx="${n(px)}" cy="${n(py - 8)}" r="${n(5 + i * 0.5)}" fill="${r.pick(o.peopleColors || [this.m.ink, shade(this.m.ink, 0.15)])}"/>`);
      }
    }
    return this;
  },
  /* a street running away from the camera, buildings down both sides */
  street3d(o) {
    o = o || {};
    this.persp(o);
    const Z = this.P.Z, r = this.r, fl = H, Xl = o.left == null ? 300 : o.left, Xr = o.right == null ? W - 300 : o.right;
    this.quad("floor", [-2000, W + 2000, fl, 1, Z * 3], o.road || this.c("#6b6a66", 0.1));
    if (o.pavement !== false) { this.quad("floor", [-2000, Xl + 120, fl - 2, 1, Z * 3], o.pavementColor || shade(o.road || "#6b6a66", 0.12)); this.quad("floor", [Xr - 120, W + 2000, fl - 2, 1, Z * 3], o.pavementColor || shade(o.road || "#6b6a66", 0.12)); }
    if (o.lines) this.quad("floor", [W / 2 - 6, W / 2 + 6, fl - 1, 1, Z * 3], "#d9d2bd", 'opacity="0.5"');
    const pal = o.colors || ["#a28f7c", "#8f8a80", "#b29a7e", "#7f7a76", "#9c8a7a"];
    ["left", "right"].forEach((sd) => {
      if (o.only && o.only !== sd) return;
      const X = sd === "left" ? Xl : Xr;
      let z = 1;
      while (z < Z * 2.5) {
        const len = r.range(0.25, 0.6) * z, top = fl - r.range(o.hmin || 500, o.hmax || 1100), col = r.pick(pal), dep = Math.min(1, (z - 1) / (Z * 2));
        const c = this.c(col, dep * 0.8);
        this.quad("wallX", [X, top, fl, z, z + len], c);
        // windows / shopfronts
        const floors = Math.floor((fl - top) / 150);
        for (let f = 0; f < floors; f++) for (let k = 0; k < 3; k++) {
          const za = z + len * (0.12 + k * 0.3), zb = za + len * 0.14, wy = top + 50 + f * 150;
          if (wy + 70 > fl - 140) continue;
          const lit = (o.lit === undefined ? this.m.lit : o.lit) && r() < 0.35;
          this.quad("wallX", [X, wy, wy + 70, za, zb], lit ? this.m.light : shade(c, -0.22), lit ? 'opacity="0.85"' : "");
        }
        if (o.shops) this.quad("wallX", [X, fl - 130, fl - 10, z + len * 0.1, z + len * 0.9], o.shopColor || shade(c, -0.3));
        if (o.awnings && r() < 0.5) this.quad("wallX", [X, fl - 160, fl - 130, z + len * 0.1, z + len * 0.9], this.c(r.pick(o.awnings), dep));
        if (o.roofs) { const a = this.pp(X, top, z), b = this.pp(X, top, z + len); const lift = 60 / z; this.add(`<polygon points="${pts([a, b, [b[0], b[1] - lift * z / (z + len)], [a[0], a[1] - lift]])}" fill="${this.c(o.roofs, dep)}"/>`); }
        // the end wall facing the street, a gap, then the next building
        const gapLen = r() < 0.25 ? r.range(0.04, 0.12) * z : 0;
        z += len + gapLen;
      }
      if (o.lamps) for (let z2 = 1.3; z2 < Z * 2; z2 += 0.6 * z2) { const Xl2 = sd === "left" ? X + 140 : X - 140, a = this.pp(Xl2, fl, z2), b = this.pp(Xl2, fl - 520, z2); this.add(`<line x1="${n(a[0])}" y1="${n(a[1])}" x2="${n(b[0])}" y2="${n(b[1])}" stroke="${this.c("#2f3134", 0.1)}" stroke-width="${n(8 / z2)}"/>`); if (this.m.lit || o.lampsLit) this.glow(b[0], b[1], 90 / z2, "#ffcf7a", 0.6); }
    });
    return this;
  },

  /* ---------- landmarks ---------- */
  /* mud-brick fort: walls with square crenellated towers */
  mudFort(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#b8875a", d), w = (o.w || 520) * s;
    this.rect(x - w / 2, y - 120 * s, w, 120 * s, col);
    for (let i = 0; i < Math.floor(w / (24 * s)); i++) this.poly([[x - w / 2 + i * 24 * s, y - 120 * s], [x - w / 2 + i * 24 * s + 12 * s, y - 120 * s], [x - w / 2 + i * 24 * s + 6 * s, y - 136 * s]], col);
    (o.towers || [-0.5, -0.15, 0.25, 0.5]).forEach((t, i) => {
      const tx = x + t * w, th = (180 + (i % 2) * 50) * s;
      this.poly([[tx - 34 * s, y], [tx + 34 * s, y], [tx + 26 * s, y - th], [tx - 26 * s, y - th]], shade(col, -0.04 * (i % 2)));
      for (let k = 0; k < 3; k++) this.poly([[tx - 26 * s + k * 18 * s, y - th], [tx - 14 * s + k * 18 * s, y - th], [tx - 20 * s + k * 18 * s, y - th - 16 * s]], col);
      this.rect(tx - 5 * s, y - th * 0.7, 10 * s, 18 * s, this.c("#4a3426", d));
    });
    return this.rect(x - 22 * s, y - 70 * s, 44 * s, 70 * s, this.c("#5a3e2a", d));
  },
  /* Gulf wind tower house */
  windTower(x, y, s, o) {
    o = o || {};
    const col = this.c(o.color || "#d4b88a", o.depth);
    this.rect(x - 70 * s, y - 70 * s, 140 * s, 70 * s, col);
    this.rect(x - 20 * s, y - 150 * s, 40 * s, 80 * s, shade(col, -0.04));
    for (let k = 0; k < 3; k++) this.rect(x - 14 * s + k * 11 * s, y - 140 * s, 6 * s, 40 * s, this.c("#5a4a3a", o.depth));
    return this.rect(x - 10 * s, y - 40 * s, 20 * s, 40 * s, this.c("#6a5038", o.depth));
  },
  /* interceptor trails rising from the ground and small bursts high above */
  intercepts(x0, x1, yGround, count, o) {
    o = o || {};
    const r = this.r;
    for (let i = 0; i < count; i++) {
      const x = r.range(x0, x1), top = r.range(80, 320), bend = r.range(-160, 160);
      this.add(`<path d="M${n(x)},${yGround} Q${n(x + bend * 0.3)},${n((yGround + top) / 2)} ${n(x + bend)},${n(top)}" stroke="#fff4dc" stroke-width="2.5" fill="none" opacity="0.8"/>`);
      if (r() < 0.7) { this.glow(x + bend, top, 40, "#ffcf7a", 0.8); this.add(`<circle cx="${n(x + bend)}" cy="${n(top)}" r="4" fill="#fff8e0"/>`); }
    }
    return this;
  },
  /* a very tall glass tower with a tapering top */
  tower(x, y, w, h, o) {
    o = o || {};
    const col = this.c(o.color || "#8fa6b8", o.depth);
    this.rect(x - w / 2, y - h, w, h, col);
    this.rect(x - w / 2, y - h, w * 0.3, h, shade(col, 0.12));
    if (o.spire) this.poly([[x - w * 0.2, y - h], [x + w * 0.2, y - h], [x, y - h - o.spire]], col);
    if (o.lit || this.m.lit) for (let i = 0; i < h / 14; i++) if (this.r() < 0.5) this.rect(x - w / 2 + 3 + this.r() * (w - 8), y - h + i * 14, 4, 5, this.m.light);
    return this;
  },
  onion(x, y, rr, o) {
    o = o || {};
    const col = this.c(o.color || "#d7aa3c", o.depth);
    return this.add(`<path d="M${n(x - rr)},${n(y)} C${n(x - rr * 1.25)},${n(y - rr * 1.1)} ${n(x - rr * 0.2)},${n(y - rr * 1.3)} ${n(x)},${n(y - rr * 2.1)} C${n(x + rr * 0.2)},${n(y - rr * 1.3)} ${n(x + rr * 1.25)},${n(y - rr * 1.1)} ${n(x + rr)},${n(y)} Z" fill="${col}"/><rect x="${n(x - 1.5)}" y="${n(y - rr * 2.7)}" width="3" height="${n(rr * 0.7)}" fill="${col}"/><rect x="${n(x - rr * 0.25)}" y="${n(y - rr * 2.5)}" width="${n(rr * 0.5)}" height="2.5" fill="${col}"/>`);
  },
  /* Orthodox church: white body, drum(s) and onion domes */
  church(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#ece6da", d), dome = o.dome || "#d7aa3c", w = (o.w || 200) * s, h = (o.h || 140) * s;
    this.rect(x - w / 2, y - h, w, h, col);
    this.poly([[x - w / 2 - 6 * s, y - h], [x + w / 2 + 6 * s, y - h], [x + w / 2 - 20 * s, y - h - 26 * s], [x - w / 2 + 20 * s, y - h - 26 * s]], this.c(shade(dome, -0.25), d));
    for (let i = 0; i < 3; i++) this.add(`<path d="M${n(x - w * 0.3 + i * w * 0.3 - 9 * s)},${n(y - h * 0.3)} L${n(x - w * 0.3 + i * w * 0.3 - 9 * s)},${n(y - h * 0.7)} A${n(9 * s)},${n(9 * s)} 0 0 1 ${n(x - w * 0.3 + i * w * 0.3 + 9 * s)},${n(y - h * 0.7)} L${n(x - w * 0.3 + i * w * 0.3 + 9 * s)},${n(y - h * 0.3)} Z" fill="${shade(col, -0.25)}"/>`);
    const drums = o.domes || 1;
    const spots = drums === 1 ? [[0, 1]] : drums === 3 ? [[-0.32, 0.7], [0, 1], [0.32, 0.7]] : [[-0.32, 0.7], [-0.12, 0.75], [0, 1], [0.12, 0.75], [0.32, 0.7]];
    spots.forEach(([fx, k]) => { const dx = x + fx * w, dw = 34 * s * k, dh = 60 * s * k; this.rect(dx - dw / 2, y - h - 26 * s - dh, dw, dh, col); this.onion(dx, y - h - 26 * s - dh, dw * 0.75, { color: dome, depth: d }); });
    if (o.bell) { this.rect(x + w / 2 + 10 * s, y - h * 2.2, 36 * s, h * 2.2, col); this.onion(x + w / 2 + 28 * s, y - h * 2.2, 18 * s, { color: dome, depth: d }); }
    return this;
  },
  /* Kremlin-style pointed brick tower */
  kremlinTower(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#9a3b30", d), roof = this.c(o.roof || "#4f5a52", d), w = 70 * s;
    this.rect(x - w / 2, y - 240 * s, w, 240 * s, col);
    for (let i = -2; i <= 2; i++) this.rect(x + i * w * 0.2 - w * 0.07, y - 252 * s, w * 0.14, 14 * s, col);
    this.rect(x - w * 0.36, y - 330 * s, w * 0.72, 80 * s, shade(col, 0.04));
    this.poly([[x - w * 0.42, y - 330 * s], [x + w * 0.42, y - 330 * s], [x, y - 460 * s]], roof);
    if (o.star !== false) this.add(`<circle cx="${n(x)}" cy="${n(y - 470 * s)}" r="${n(6 * s)}" fill="${this.c("#b8483c", d)}"/>`);
    return this;
  },
  /* crenellated fortress wall */
  fortWall(x0, x1, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#9a3b30", o.depth);
    let s = `<rect x="${x0}" y="${y - h}" width="${x1 - x0}" height="${h}" fill="${col}"/>`;
    for (let x = x0; x < x1; x += (o.merlon || 22) * 2) s += `<path d="M${x},${y - h} L${x},${n(y - h - 18)} L${x + 7},${n(y - h - 24)} L${x + 15},${n(y - h - 18)} L${x + 15},${y - h} Z" fill="${col}"/>`;
    if (o.snow) s += `<rect x="${x0}" y="${n(y - h - 4)}" width="${x1 - x0}" height="5" fill="#eef2f6"/>`;
    return this.add(s);
  },
  /* Chinese gate tower: red base wall with arches, two tiers of sweeping golden roofs */
  gateTower(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, red = this.c(o.color || "#a8382c", d), roof = this.c(o.roof || "#c9a24a", d), w = (o.w || 900) * s;
    this.rect(x - w / 2, y - 180 * s, w, 180 * s, red);
    for (let i = -2; i <= 2; i++) this.add(`<path d="M${n(x + i * 150 * s - 30 * s)},${y} L${n(x + i * 150 * s - 30 * s)},${n(y - 70 * s)} A${n(30 * s)},${n(30 * s)} 0 0 1 ${n(x + i * 150 * s + 30 * s)},${n(y - 70 * s)} L${n(x + i * 150 * s + 30 * s)},${y} Z" fill="${this.c("#4a2a24", d)}"/>`);
    this.rect(x - w * 0.42, y - 196 * s, w * 0.84, 16 * s, this.c("#d9d2c2", d));
    this.rect(x - w * 0.36, y - 290 * s, w * 0.72, 94 * s, red);
    for (let i = 0; i < 12; i++) this.rect(x - w * 0.34 + i * w * 0.06, y - 280 * s, 6 * s, 84 * s, this.c("#7a2a22", d));
    const eave = (yy, ww, hh) => this.add(`<path d="M${n(x - ww / 2 - 40 * s)},${n(yy)} Q${n(x - ww / 2)},${n(yy - 6 * s)} ${n(x - ww / 2 + 30 * s)},${n(yy - hh)} L${n(x + ww / 2 - 30 * s)},${n(yy - hh)} Q${n(x + ww / 2)},${n(yy - 6 * s)} ${n(x + ww / 2 + 40 * s)},${n(yy)} Z" fill="${roof}"/>`);
    eave(y - 280 * s, w * 0.8, 40 * s);
    this.rect(x - w * 0.3, y - 340 * s, w * 0.6, 40 * s, red);
    eave(y - 330 * s, w * 0.7, 60 * s);
    return this;
  },
  /* a domed capitol / parliament: wings, portico, drum and dome */
  capitol(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#ece8df", d);
    this.palace(x, y, s, Object.assign({ w: 760, h: 110, cols: 12 }, o, { dome: false }));
    this.rect(x - 90 * s, y - 230 * s, 180 * s, 120 * s, col);
    for (let i = 0; i < 9; i++) this.rect(x - 80 * s + i * 20 * s, y - 220 * s, 7 * s, 100 * s, shade(col, -0.12));
    this.add(`<path d="M${n(x - 100 * s)},${n(y - 230 * s)} C${n(x - 100 * s)},${n(y - 330 * s)} ${n(x - 40 * s)},${n(y - 350 * s)} ${n(x)},${n(y - 352 * s)} C${n(x + 40 * s)},${n(y - 350 * s)} ${n(x + 100 * s)},${n(y - 330 * s)} ${n(x + 100 * s)},${n(y - 230 * s)} Z" fill="${shade(col, 0.04)}"/>`);
    this.rect(x - 12 * s, y - 392 * s, 24 * s, 42 * s, col);
    this.add(`<path d="M${n(x - 14 * s)},${n(y - 392 * s)} A${n(14 * s)},${n(12 * s)} 0 0 1 ${n(x + 14 * s)},${n(y - 392 * s)} Z" fill="${col}"/>`);
    return this;
  },
  /* triumphal / memorial arch */
  arch(x, y, s, o) {
    o = o || {};
    const col = this.c(o.color || "#d8cbb2", o.depth), w = 240 * s, h = 300 * s;
    this.add(`<path d="M${n(x - w / 2)},${y} L${n(x - w / 2)},${n(y - h)} L${n(x + w / 2)},${n(y - h)} L${n(x + w / 2)},${y} L${n(x + w * 0.22)},${y} L${n(x + w * 0.22)},${n(y - h * 0.45)} A${n(w * 0.22)},${n(w * 0.22)} 0 0 0 ${n(x - w * 0.22)},${n(y - h * 0.45)} L${n(x - w * 0.22)},${y} Z" fill="${col}"/>`);
    this.rect(x - w / 2 - 8 * s, y - h - 14 * s, w + 16 * s, 16 * s, shade(col, -0.08));
    if (o.attic) this.rect(x - w * 0.4, y - h - 60 * s, w * 0.8, 48 * s, col);
    return this;
  },
  /* monument column / obelisk */
  column(x, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#ece8df", o.depth), w = o.w || h * 0.06;
    if (o.obelisk) return this.poly([[x - w / 2, y], [x + w / 2, y], [x + w * 0.35, y - h], [x, y - h - w * 0.8], [x - w * 0.35, y - h]], col);
    this.rect(x - w * 1.4, y - h * 0.08, w * 2.8, h * 0.08, shade(col, -0.08));
    this.rect(x - w / 2, y - h, w, h * 0.92, col);
    this.rect(x - w * 0.8, y - h - w * 0.4, w * 1.6, w * 0.4, shade(col, -0.05));
    if (o.statue) this.person(x, y - h - w * 0.4, w * 2.6, { color: this.c(o.statue, o.depth), robe: o.statue });
    return this;
  },
  watchtower(x, y, s, o) {
    o = o || {};
    const col = this.c(o.color || "#5a4c40", o.depth);
    let g = `<line x1="${n(x - 30 * s)}" y1="${y}" x2="${n(x - 18 * s)}" y2="${n(y - 200 * s)}" stroke="${col}" stroke-width="${n(5 * s)}"/><line x1="${n(x + 30 * s)}" y1="${y}" x2="${n(x + 18 * s)}" y2="${n(y - 200 * s)}" stroke="${col}" stroke-width="${n(5 * s)}"/>`;
    for (let i = 1; i < 4; i++) g += `<line x1="${n(x - 30 * s + i * 3 * s)}" y1="${n(y - i * 50 * s)}" x2="${n(x + 30 * s - i * 3 * s)}" y2="${n(y - (i + 1) * 50 * s)}" stroke="${col}" stroke-width="${n(3 * s)}"/>`;
    g += `<rect x="${n(x - 32 * s)}" y="${n(y - 250 * s)}" width="${n(64 * s)}" height="${n(50 * s)}" fill="${col}"/><rect x="${n(x - 24 * s)}" y="${n(y - 242 * s)}" width="${n(48 * s)}" height="${n(20 * s)}" fill="${shade(col, -0.4)}"/><polygon points="${n(x - 42 * s)},${n(y - 250 * s)} ${n(x + 42 * s)},${n(y - 250 * s)} ${x},${n(y - 285 * s)}" fill="${shade(col, -0.15)}"/>`;
    if (o.light) { g += `<circle cx="${n(x + 30 * s)}" cy="${n(y - 255 * s)}" r="${n(5 * s)}" fill="#fff4cf"/>`; this.beam(x + 30 * s, y - 255 * s, o.light, { len: 700, w: 70, opacity: 0.12 }); }
    return this.add(g);
  },
  barracks(x, y, w, o) {
    o = o || {};
    const col = this.c(o.color || "#5f5246", o.depth), h = o.h || 60;
    this.rect(x, y - h, w, h, col);
    this.poly([[x - 8, y - h], [x + w + 8, y - h], [x + w - 10, y - h - h * 0.5], [x + 10, y - h - h * 0.5]], this.c(o.roof || "#4a4038", o.depth));
    if (o.snow) this.poly([[x - 8, y - h], [x + w + 8, y - h], [x + w - 10, y - h - h * 0.5], [x + 10, y - h - h * 0.5]], this.c("#eef2f6", o.depth), 'opacity="0.85"');
    for (let i = 0; i < Math.floor(w / 50); i++) this.rect(x + 18 + i * 50, y - h * 0.7, 16, 18, this.c(o.lit ? this.m.light : "#2e2924", o.depth));
    return this;
  },
  tent(x, y, w, o) {
    o = o || {};
    const col = this.c(o.color || "#cfc6b0", o.depth), h = w * 0.55;
    return this.add(`<polygon points="${n(x - w / 2)},${y} ${n(x)},${n(y - h)} ${n(x + w / 2)},${y}" fill="${col}"/><polygon points="${n(x - w * 0.08)},${y} ${n(x)},${n(y - h * 0.5)} ${n(x + w * 0.08)},${y}" fill="${shade(col, -0.35)}"/>`);
  },
  tents(x0, x1, y, o) {
    o = o || {};
    const r = this.r, rows = o.rows || 3;
    for (let k = 0; k < rows; k++) for (let x = x0 + r.range(0, 40); x < x1; x += (o.gap || 90) * (1 + k * 0.25)) this.tent(x, y + k * (o.rowGap || 40), (o.w || 60) * (1 + k * 0.25), { color: r.pick(o.colors || ["#cfc6b0", "#b8b2a0", "#a9b4b8", "#c9b79a"]), depth: Math.max(0, (o.depth || 0) - k * 0.1) });
    return this;
  },
  ferris(x, y, rr, o) {
    o = o || {};
    const col = this.c(o.color || "#c9a33a", o.depth);
    let g = `<circle cx="${x}" cy="${y - rr - 20}" r="${rr}" fill="none" stroke="${col}" stroke-width="5"/><circle cx="${x}" cy="${y - rr - 20}" r="${rr * 0.85}" fill="none" stroke="${col}" stroke-width="2"/>`;
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6, cx = x + Math.cos(a) * rr, cy = y - rr - 20 + Math.sin(a) * rr; g += `<line x1="${x}" y1="${y - rr - 20}" x2="${n(cx)}" y2="${n(cy)}" stroke="${col}" stroke-width="2"/><rect x="${n(cx - 9)}" y="${n(cy)}" width="18" height="16" fill="${shade(col, -0.1)}"/>`; }
    g += `<polygon points="${x},${y - rr - 20} ${x - rr * 0.5},${y} ${x - rr * 0.4},${y} ${x},${y - rr - 10} ${x + rr * 0.4},${y} ${x + rr * 0.5},${y}" fill="${shade(col, -0.2)}"/>`;
    return this.add(g);
  },
  lamp(x, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#2f3134", o.depth);
    this.add(`<line x1="${x}" y1="${y}" x2="${x}" y2="${y - h}" stroke="${col}" stroke-width="${o.w || 4}"/><rect x="${x - 6}" y="${y - h - 10}" width="12" height="12" fill="${col}"/>`);
    if (this.m.lit || o.lit) { this.glow(x, y - h, h * 0.6, o.glow || "#ffcf7a", 0.6); this.add(`<circle cx="${x}" cy="${y - h - 3}" r="5" fill="#fff0c4"/>`); }
    return this;
  },
  lamps(x0, x1, y, h, o) { for (let x = x0; x <= x1; x += (o && o.gap) || 160) this.lamp(x, y, h, o); return this; },
  /* a plain flag on a pole: one colour or stripes, never a real flag's symbols */
  flagpole(x, y, h, o) {
    o = o || {};
    const col = this.c("#3a3a3a", o.depth), at = o.at == null ? 1 : o.at, fy = y - h + (1 - at) * h * 0.8, fw = o.w || h * 0.32;
    this.add(`<line x1="${x}" y1="${y}" x2="${x}" y2="${y - h}" stroke="${col}" stroke-width="${o.stroke || 3}"/>`);
    const stripes = o.stripes || [o.color || "#b03a2e"];
    stripes.forEach((c, i) => this.add(`<path d="M${x},${n(fy + i * fw * 0.6 / stripes.length)} q${n(fw * 0.5)},-6 ${n(fw)},4 l0,${n(fw * 0.6 / stripes.length)} q-${n(fw * 0.5)},-10 -${n(fw)},-4 Z" fill="${this.c(c, o.depth)}"/>`));
    return this;
  },
  cannon(x, y, s, o) {
    o = o || {};
    const col = this.c(o.color || "#3b3a36", o.depth);
    return this.add(`<rect x="${n(x - 10 * s)}" y="${n(y - 34 * s)}" width="${n(80 * s)}" height="${n(14 * s)}" rx="${n(6 * s)}" fill="${col}" transform="rotate(-8,${x},${y - 28 * s})"/><circle cx="${x}" cy="${n(y - 16 * s)}" r="${n(16 * s)}" fill="none" stroke="${col}" stroke-width="${n(4 * s)}"/><line x1="${x}" y1="${n(y - 16 * s)}" x2="${n(x - 40 * s)}" y2="${y}" stroke="${col}" stroke-width="${n(5 * s)}"/>`);
  },
  ballotBox(x, y, s, o) {
    o = o || {};
    s = s || 1;
    const col = o.color || "#dfe7ea";
    return this.add(`<rect x="${n(x - 40 * s)}" y="${n(y - 60 * s)}" width="${n(80 * s)}" height="${n(60 * s)}" fill="${col}" opacity="${o.clear ? 0.55 : 1}" stroke="${shade(col, -0.3)}" stroke-width="2"/><rect x="${n(x - 16 * s)}" y="${n(y - 62 * s)}" width="${n(32 * s)}" height="${n(4 * s)}" fill="${shade(col, -0.5)}"/>` + (o.clear ? `<rect x="${n(x - 30 * s)}" y="${n(y - 20 * s)}" width="${n(60 * s)}" height="${n(16 * s)}" fill="#f2efe6" opacity="0.8"/>` : ""));
  },
  booths(x0, x1, y, o) {
    o = o || {};
    const col = this.c(o.color || "#8d9aa6", o.depth), h = o.h || 150, w = o.w || 90;
    let g = "";
    for (let x = x0; x + w <= x1; x += w + 16) g += `<rect x="${x}" y="${y - h}" width="${w}" height="${h * 0.75}" fill="${col}"/><rect x="${x}" y="${y - h}" width="${w}" height="10" fill="${shade(col, -0.2)}"/><line x1="${x + 6}" y1="${y - h * 0.25}" x2="${x + 6}" y2="${y}" stroke="${shade(col, -0.3)}" stroke-width="3"/><line x1="${x + w - 6}" y1="${y - h * 0.25}" x2="${x + w - 6}" y2="${y}" stroke="${shade(col, -0.3)}" stroke-width="3"/>`;
    return this.add(g);
  },
  /* Buddhist / Tibetan monastery: white walls, dark red band, a gold roof */
  monastery(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, wall = this.c("#ece6d8", d), red = this.c(o.trim || "#7a2a26", d);
    [[-160, 120, 80], [-30, 200, 150], [120, 140, 100]].forEach(([dx, w, h]) => {
      const bx = x + dx * s;
      this.poly([[bx - w * s / 2 - 8 * s, y], [bx + w * s / 2 + 8 * s, y], [bx + w * s / 2, y - h * s], [bx - w * s / 2, y - h * s]], wall);
      this.rect(bx - w * s / 2, y - h * s, w * s, 16 * s, red);
      for (let i = 0; i < Math.floor(w / 26); i++) this.rect(bx - w * s / 2 + 10 * s + i * 26 * s, y - h * s * 0.6, 8 * s, 14 * s, this.c("#3a2a26", d));
    });
    this.rect(x - 60 * s, y - 175 * s, 60 * s, 25 * s, this.c("#c9a24a", d));
    return this;
  },
  stupa(x, y, s, o) {
    o = o || {};
    const col = this.c(o.color || "#efe9dc", o.depth);
    return this.add(`<rect x="${n(x - 60 * s)}" y="${n(y - 30 * s)}" width="${n(120 * s)}" height="${n(30 * s)}" fill="${shade(col, -0.08)}"/><path d="M${n(x - 50 * s)},${n(y - 30 * s)} A${n(50 * s)},${n(46 * s)} 0 0 1 ${n(x + 50 * s)},${n(y - 30 * s)} Z" fill="${col}"/><polygon points="${n(x - 10 * s)},${n(y - 74 * s)} ${n(x + 10 * s)},${n(y - 74 * s)} ${x},${n(y - 150 * s)}" fill="${this.c(o.spire || "#c9a24a", o.depth)}"/>`);
  },
  /* strings of plain coloured prayer flags */
  bunting(x0, y0, x1, y1, o) {
    o = o || {};
    const r = this.r, pal = o.colors || ["#3f6aa8", "#e8e2d2", "#b03a2e", "#4f8a4f", "#d9b23c"];
    let g = `<path d="M${x0},${y0} Q${(x0 + x1) / 2},${Math.max(y0, y1) + (o.sag || 40)} ${x1},${y1}" stroke="${this.m.ink}" stroke-width="1.2" fill="none" opacity="0.6"/>`;
    const N = o.count || 18;
    for (let i = 1; i < N; i++) {
      const t = i / N, x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * (x0 + x1) / 2 + t * t * x1, y = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * (Math.max(y0, y1) + (o.sag || 40)) + t * t * y1;
      g += `<rect x="${n(x - 7)}" y="${n(y)}" width="14" height="18" fill="${this.c(pal[i % pal.length], o.depth)}" opacity="0.85" transform="rotate(${n(r.range(-10, 10))},${n(x)},${n(y)})"/>`;
    }
    return this.add(g);
  },
  bicycle(x, y, s, o) {
    o = o || {};
    s = s || 1;
    const col = this.c(o.color || "#2f3134", o.depth);
    return this.add(`<g fill="none" stroke="${col}" stroke-width="${n(2.5 * s)}"><circle cx="${n(x - 22 * s)}" cy="${n(y - 14 * s)}" r="${n(14 * s)}"/><circle cx="${n(x + 22 * s)}" cy="${n(y - 14 * s)}" r="${n(14 * s)}"/><path d="M${n(x - 22 * s)},${n(y - 14 * s)} L${n(x - 6 * s)},${n(y - 34 * s)} L${n(x + 16 * s)},${n(y - 34 * s)} L${n(x + 22 * s)},${n(y - 14 * s)} M${n(x - 6 * s)},${n(y - 34 * s)} L${x},${n(y - 14 * s)} L${n(x + 16 * s)},${n(y - 34 * s)} M${n(x + 16 * s)},${n(y - 34 * s)} L${n(x + 14 * s)},${n(y - 42 * s)}"/></g>`);
  },
  /* market stalls with plain awnings */
  stalls(x0, x1, y, o) {
    o = o || {};
    const r = this.r, w = o.w || 110, pal = o.colors || ["#b0563c", "#d9b23c", "#4f7a8a", "#e2dccf", "#7a8a4f"];
    for (let x = x0; x + w <= x1; x += w + 14) {
      const c = this.c(r.pick(pal), o.depth);
      this.rect(x + 6, y - 60, w - 12, 60, this.c("#6b5a48", o.depth));
      this.add(`<polygon points="${x},${y - 90} ${x + w},${y - 90} ${x + w + 10},${y - 64} ${x - 10},${y - 64}" fill="${c}"/>`);
      for (let k = 0; k < 5; k++) this.add(`<circle cx="${n(x + 18 + k * (w - 30) / 4)}" cy="${y - 60}" r="7" fill="${this.c(r.pick(["#c9763c", "#a33a2a", "#d9b23c", "#6a8a3c"]), o.depth)}"/>`);
    }
    return this;
  },
  /* sandbags stacked against a wall */
  sandbags(x0, x1, y, rows, o) {
    o = o || {};
    const col = this.c(o.color || "#a8987a", o.depth);
    let g = "";
    for (let k = 0; k < rows; k++) for (let x = x0 + (k % 2) * 18; x < x1 - 20; x += 38) g += `<rect x="${x}" y="${y - (k + 1) * 18}" width="36" height="17" rx="7" fill="${shade(col, (k % 2) * -0.06)}"/>`;
    return this.add(g);
  },
  barrier(x0, x1, y, o) {
    o = o || {};
    let g = `<rect x="${x0}" y="${y - 50}" width="10" height="50" fill="#3a3a3a"/><rect x="${x0}" y="${y - 50}" width="${x1 - x0}" height="10" fill="#e8e2d2"/>`;
    for (let x = x0 + 20; x < x1; x += 50) g += `<rect x="${x}" y="${y - 50}" width="22" height="10" fill="#b03a2e"/>`;
    return this.add(g);
  },
  /* a monitor-lit control room desk or a single glowing screen at a desk */
  desk(x, y, w, o) {
    o = o || {};
    const col = o.color || "#4a3c32";
    this.rect(x - w / 2, y - 12, w, 12, shade(col, 0.1)).rect(x - w / 2 + 10, y, 12, 90, col).rect(x + w / 2 - 22, y, 12, 90, col);
    if (o.lampAt) { this.glow(o.lampAt, y - 50, 160, "#ffd38a", 0.45); this.add(`<path d="M${o.lampAt - 26},${y - 70} L${o.lampAt + 26},${y - 70} L${o.lampAt + 12},${y - 100} L${o.lampAt - 12},${y - 100} Z" fill="#2f4a3c"/><line x1="${o.lampAt}" y1="${y - 70}" x2="${o.lampAt}" y2="${y - 12}" stroke="#8a7650" stroke-width="3"/>`); }
    return this;
  },
  /* a portico of columns (courts, museums, banks) */
  portico(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#e6e1d6", d), w = (o.w || 420) * s, h = (o.h || 220) * s, cols = o.cols || 8;
    this.rect(x - w / 2 - 20 * s, y - 24 * s, w + 40 * s, 24 * s, shade(col, -0.1));
    this.rect(x - w / 2 - 10 * s, y - 40 * s, w + 20 * s, 16 * s, shade(col, -0.05));
    this.rect(x - w / 2, y - h, w, h - 40 * s, shade(col, -0.25));
    for (let i = 0; i < cols; i++) this.rect(x - w / 2 + 6 * s + i * (w - 30 * s) / (cols - 1), y - h, 18 * s, h - 40 * s, col);
    this.rect(x - w / 2 - 10 * s, y - h - 26 * s, w + 20 * s, 26 * s, col);
    this.poly([[x - w / 2 - 14 * s, y - h - 26 * s], [x + w / 2 + 14 * s, y - h - 26 * s], [x, y - h - 26 * s - w * 0.16]], shade(col, 0.04));
    if (o.dome) this.dome(x, y - h - 26 * s - w * 0.12, w * 0.22, { color: o.domeColor || shade(col, -0.05), depth: d });
    return this;
  },
  /* a big steel arch bridge seen side-on */
  archBridge(x0, x1, deck, rise, o) {
    o = o || {};
    const col = this.c(o.color || "#4b4f55", o.depth);
    let d = "";
    for (let i = 0; i <= 40; i++) { const t = i / 40; d += (i ? " L" : "M") + n(x0 + (x1 - x0) * t) + "," + n(deck - rise * 4 * t * (1 - t)); }
    let g = `<path d="${d}" stroke="${col}" stroke-width="${o.w || 18}" fill="none"/>`;
    for (let x = x0 + 50; x < x1 - 30; x += 46) { const t = (x - x0) / (x1 - x0); g += `<line x1="${x}" y1="${deck}" x2="${x}" y2="${n(deck - rise * 4 * t * (1 - t))}" stroke="${col}" stroke-width="4"/>`; }
    g += `<rect x="${x0 - 200}" y="${deck}" width="${x1 - x0 + 400}" height="${o.deckH || 20}" fill="${shade(col, -0.1)}"/>`;
    return this.add(g);
  },
  /* tanker / goods rail cars in a line */
  railcars(x0, x1, y, o) {
    o = o || {};
    const col = this.c(o.color || "#2f3134", o.depth);
    let g = `<line x1="${x0 - 100}" y1="${y + 2}" x2="${x1 + 100}" y2="${y + 2}" stroke="${shade(col, 0.1)}" stroke-width="4"/>`;
    for (let x = x0; x < x1; x += 150) {
      g += o.box ? `<rect x="${x}" y="${y - 54}" width="140" height="44" fill="${col}"/>` : `<rect x="${x}" y="${y - 50}" width="140" height="36" rx="16" fill="${col}"/><rect x="${x + 60}" y="${y - 58}" width="20" height="10" fill="${col}"/>`;
      g += `<circle cx="${x + 20}" cy="${y - 6}" r="7" fill="${shade(col, -0.3)}"/><circle cx="${x + 120}" cy="${y - 6}" r="7" fill="${shade(col, -0.3)}"/>`;
    }
    return this.add(g);
  },
});

module.exports = Scene;
