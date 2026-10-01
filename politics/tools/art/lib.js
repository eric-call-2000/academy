/* ============================================================
   Political Academy — illustration toolkit.

   Every lesson picture is drawn here as layered vector art in one
   house style: flat, muted shapes with atmospheric depth, a
   gouache-like grain and slightly rough edges. A scene file
   (tools/art/scenes/<unit>.js) composes a picture from the pieces
   below; tools/build-art.js renders it to a 1600x900 WebP.

     s.sky("dusk").mountains({ y: 560 }).sea({ y: 600 })
      .ship("tanker", { x: 500, y: 660 })

   Coordinates are in a 1600x900 frame; y grows downward. Most
   pieces take x, y (the point where they touch the ground or the
   water), s (scale, 1 = normal size) and depth (0 = near, 1 = lost
   in haze). The rules: no text, no flags, no faces, no gore.
   ============================================================ */
"use strict";

const W = 1600, H = 900;

/* ---------- small helpers ---------- */
function rng(seed) {
  let h = 2166136261;
  for (const ch of String(seed)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  let a = h >>> 0;
  const f = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  f.range = (lo, hi) => lo + (hi - lo) * f();
  f.int = (lo, hi) => Math.floor(lo + (hi - lo + 1) * f());
  f.pick = (arr) => arr[Math.floor(f() * arr.length)];
  return f;
}
function hex2rgb(h) {
  h = h.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}
function rgb2hex(r) { return "#" + r.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join(""); }
function mix(a, b, t) {
  const A = hex2rgb(a), B = hex2rgb(b);
  t = Math.max(0, Math.min(1, t));
  return rgb2hex(A.map((v, i) => v + (B[i] - v) * t));
}
const shade = (c, t) => (t >= 0 ? mix(c, "#ffffff", t) : mix(c, "#000000", -t));
const n = (v) => Math.round(v * 10) / 10;
const pts = (arr) => arr.map((p) => n(p[0]) + "," + n(p[1])).join(" ");

/* Smooth closed-to-bottom path through points (Catmull-Rom to Bezier). */
function smoothPath(points, bottom) {
  let d = "M" + n(points[0][0]) + "," + n(bottom) + " L" + n(points[0][0]) + "," + n(points[0][1]);
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i], p1 = points[i], p2 = points[i + 1], p3 = points[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += " C" + n(c1[0]) + "," + n(c1[1]) + " " + n(c2[0]) + "," + n(c2[1]) + " " + n(p2[0]) + "," + n(p2[1]);
  }
  const last = points[points.length - 1];
  return d + " L" + n(last[0]) + "," + n(bottom) + " Z";
}

/* ---------- moods: sky, haze and light ---------- */
const MOODS = {
  dawn:     { top: "#8fa3bd", bottom: "#f1cfae", haze: "#e9cdb4", sun: "#fbe6bf", light: "#fff1d6", ink: "#3b3f4f", water: "#8d9db0", lit: false },
  day:      { top: "#86a9c6", bottom: "#dfe6e6", haze: "#d5dfe2", sun: "#fff8e6", light: "#ffffff", ink: "#3c4552", water: "#6f94ad", lit: false },
  morning:  { top: "#9cb8cc", bottom: "#eae6d6", haze: "#e0e2d8", sun: "#fff6dc", light: "#fffaf0", ink: "#3d4552", water: "#7d9cb1", lit: false },
  afternoon:{ top: "#7fa2bf", bottom: "#ece0c6", haze: "#e6dcc6", sun: "#fff0cc", light: "#fff6e0", ink: "#3e4450", water: "#6d8fa8", lit: false },
  golden:   { top: "#7f8fb0", bottom: "#f2c98f", haze: "#ecc89a", sun: "#ffe2a6", light: "#ffe9bf", ink: "#3d3a46", water: "#8a8fa0", lit: false },
  dusk:     { top: "#3f4870", bottom: "#e8a37c", haze: "#c99a8e", sun: "#f9c88f", light: "#ffd59a", ink: "#2a2a3c", water: "#55607c", lit: true },
  night:    { top: "#0f1626", bottom: "#2f3b55", haze: "#2c3850", sun: "#e9e4cf", light: "#ffcf7a", ink: "#0d121d", water: "#1d2840", lit: true },
  overcast: { top: "#8e979d", bottom: "#cfd2cf", haze: "#c3c7c5", sun: "#e8e8e2", light: "#f2efe4", ink: "#3a4046", water: "#7b878d", lit: false },
  storm:    { top: "#4c535c", bottom: "#9aa09f", haze: "#8a918f", sun: "#c9c9c0", light: "#e9e2c8", ink: "#262b31", water: "#56626a", lit: false },
  winter:   { top: "#7f93ac", bottom: "#dfe4ea", haze: "#d4dbe3", sun: "#f3f1e8", light: "#fff4dc", ink: "#37404d", water: "#7f95ab", lit: false },
  wintdusk: { top: "#2f3d5c", bottom: "#a9b6c9", haze: "#8e9ab0", sun: "#e7d8c4", light: "#ffd18a", ink: "#1c2333", water: "#3d4c66", lit: true },
  desert:   { top: "#93aec4", bottom: "#efdcbc", haze: "#e8d6b6", sun: "#fff3d2", light: "#fff6e2", ink: "#4a3f38", water: "#6e98ad", lit: false },
  haze:     { top: "#b8a98c", bottom: "#ecdcbd", haze: "#e2d1b1", sun: "#fff0c9", light: "#fff2d6", ink: "#4a4038", water: "#9a9580", lit: false },
  tropical: { top: "#6fa2c4", bottom: "#e4eadf", haze: "#d3e1dc", sun: "#fff8e0", light: "#ffffff", ink: "#2f4441", water: "#4f97a6", lit: false },
  interior: { top: "#5a5f6b", bottom: "#8b8d92", haze: "#7f838a", sun: "#f3ead8", light: "#f6e3bd", ink: "#24272e", water: "#5b6b78", lit: true },
};

const LAND = {
  green: "#6e8a5f", forest: "#4c6a4c", arid: "#a8906c", desert: "#c9a877", sand: "#d7bf93",
  snow: "#e8edf2", rock: "#7f7a76", steppe: "#a6a27a", red: "#a8654a", grass: "#87a06a",
  concrete: "#9a9a96", asphalt: "#55585c", dark: "#3b4542", tundra: "#9a9d8a", jungle: "#3f6a4a",
};

/* ---------- the scene ---------- */
class Scene {
  constructor(id, opts) {
    opts = opts || {};
    this.id = id;
    this.r = rng(id);
    this.layers = [];
    this.defs = [];
    this.uid = 0;
    this.mood(opts.mood || "day");
  }
  mood(name, over) {
    this.m = Object.assign({}, MOODS[name] || MOODS.day, over || {});
    this.moodName = name;
    return this;
  }
  id_(p) { return p + "-" + (++this.uid); }
  add(svg) { this.layers.push(svg); return this; }
  def(svg) { this.defs.push(svg); return this; }
  /* colour c pushed toward the haze by depth (0 near, 1 far) */
  c(color, depth) { return mix(color, this.m.haze, (depth || 0) * 0.85); }
  land(name) { return LAND[name] || name; }

  /* ---------- sky ---------- */
  sky(name, o) {
    if (name) this.mood(name, o && o.mood);
    o = o || {};
    const g = this.id_("sky");
    const top = o.top || this.m.top, bottom = o.bottom || this.m.bottom;
    this.def(`<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="${o.mid || 0.75}" stop-color="${bottom}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>`);
    this.add(`<rect width="${W}" height="${H}" fill="url(#${g})"/>`);
    if (o.stars || this.moodName === "night") this.stars(o.stars === undefined ? 90 : o.stars);
    if (o.sun !== false && (o.sun || o.moon)) {
      const [x, y] = o.sun || o.moon, r = o.r || (o.moon ? 34 : 60);
      const glow = this.id_("glow");
      this.def(`<radialGradient id="${glow}"><stop offset="0" stop-color="${this.m.sun}" stop-opacity="0.75"/><stop offset="1" stop-color="${this.m.sun}" stop-opacity="0"/></radialGradient>`);
      this.add(`<circle cx="${x}" cy="${y}" r="${r * 5}" fill="url(#${glow})"/><circle cx="${x}" cy="${y}" r="${r}" fill="${this.m.sun}" opacity="0.95"/>`);
    }
    if (o.clouds) this.clouds(o.clouds, o.cloudY || [80, 320], o.cloudColor);
    return this;
  }
  stars(count) {
    const r = this.r;
    let s = "";
    for (let i = 0; i < count; i++) s += `<circle cx="${n(r() * W)}" cy="${n(r() * H * 0.45)}" r="${n(r.range(0.6, 1.8))}" fill="#fffbe8" opacity="${n(r.range(0.25, 0.8))}"/>`;
    return this.add(`<g>${s}</g>`);
  }
  clouds(count, band, color) {
    const r = this.r, col = color || mix(this.m.bottom, "#ffffff", 0.35);
    const f = this.id_("blur");
    this.def(`<filter id="${f}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>`);
    let s = "";
    for (let i = 0; i < count; i++) {
      const cx = r.range(-100, W + 100), cy = r.range(band[0], band[1]), w = r.range(180, 420);
      for (let k = 0; k < 5; k++) s += `<ellipse cx="${n(cx + r.range(-w / 2, w / 2))}" cy="${n(cy + r.range(-18, 18))}" rx="${n(w * r.range(0.25, 0.45))}" ry="${n(r.range(18, 40))}" fill="${col}" opacity="${n(r.range(0.25, 0.5))}"/>`;
    }
    return this.add(`<g filter="url(#${f})">${s}</g>`);
  }
  /* soft horizontal haze band */
  fog(y, o) {
    o = o || {};
    const f = this.id_("blur");
    this.def(`<filter id="${f}" x="-20%" y="-200%" width="140%" height="500%"><feGaussianBlur stdDeviation="${o.blur || 24}"/></filter>`);
    return this.add(`<rect x="-100" y="${y - (o.h || 60) / 2}" width="${W + 200}" height="${o.h || 60}" fill="${o.color || this.m.haze}" opacity="${o.opacity || 0.55}" filter="url(#${f})"/>`);
  }

  /* ---------- land and water ---------- */
  ridge(o) {
    const r = this.r;
    const y = o.y, amp = o.amp == null ? 80 : o.amp, x0 = o.x0 == null ? -20 : o.x0, x1 = o.x1 == null ? W + 20 : o.x1;
    const step = o.step || (o.jag ? 40 : 90);
    const ph = [r() * 6, r() * 6, r() * 6];
    const points = [];
    for (let x = x0; x <= x1 + step; x += step) {
      let h = Math.sin(x / 260 + ph[0]) * 0.5 + Math.sin(x / 110 + ph[1]) * 0.3 + Math.sin(x / 47 + ph[2]) * 0.2 * (o.jag ? 1.6 : 0.6);
      h = (h + 1) / 2;
      if (o.peak) h = Math.max(h, 1 - Math.abs(x - o.peak) / (o.peakW || 300));
      const tw = o.taper || 160;
      if (x0 > 0) h *= Math.min(1, (x - x0) / tw);
      if (x1 < W) h *= Math.min(1, Math.max(0, x1 - x) / tw);
      points.push([Math.min(x, x1), y - h * amp - (o.jag && h > 0.05 ? r.range(0, amp * 0.15) * Math.min(1, h * 3) : 0)]);
    }
    const color = this.c(this.land(o.color || "green"), o.depth);
    const bottom = o.bottom || H;
    let d;
    if (o.jag) d = "M" + x0 + "," + bottom + " L" + pts(points).replace(/ /g, " L") + " L" + x1 + "," + bottom + " Z";
    else d = smoothPath(points, bottom);
    let out = `<path d="${d}" fill="${color}"/>`;
    if (o.snow) {
      const cp = this.id_("cap");
      this.def(`<clipPath id="${cp}"><rect x="0" y="0" width="${W}" height="${y - amp * (o.snow === true ? 0.55 : o.snow)}"/></clipPath>`);
      out += `<path d="${d}" fill="${this.c("#eef2f6", o.depth)}" clip-path="url(#${cp})"/>`;
    }
    if (o.shade !== false) out += `<path d="${d}" fill="${this.c(this.m.ink, o.depth)}" opacity="0.08" transform="translate(0,${n(amp * 0.25)})"/>`;
    return this.add(out);
  }
  mountains(o) { return this.ridge(Object.assign({ amp: 180, jag: true, color: "rock", depth: 0.6 }, o)); }
  hills(o) { return this.ridge(Object.assign({ amp: 70, color: "green", depth: 0.4 }, o)); }
  ground(y, color, o) {
    o = o || {};
    const col = this.c(this.land(color || "green"), o.depth || 0);
    const g = this.id_("gr");
    this.def(`<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${mix(col, this.m.haze, 0.25)}"/><stop offset="1" stop-color="${shade(col, -0.12)}"/></linearGradient>`);
    return this.add(`<rect x="0" y="${y}" width="${W}" height="${H - y}" fill="url(#${g})"/>`);
  }
  sea(y, o) {
    o = o || {};
    const r = this.r, col = o.color || this.m.water;
    const g = this.id_("sea");
    this.def(`<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${mix(col, this.m.bottom, 0.45)}"/><stop offset="1" stop-color="${shade(col, -0.15)}"/></linearGradient>`);
    let s = `<rect x="0" y="${y}" width="${W}" height="${H - y}" fill="url(#${g})"/>`;
    const lines = o.lines == null ? 70 : o.lines;
    for (let i = 0; i < lines; i++) {
      const ly = y + Math.pow(r(), 1.6) * (H - y), lw = r.range(30, 160) * (0.4 + (ly - y) / (H - y));
      s += `<line x1="${n(r() * W)}" y1="${n(ly)}" x2="${n(r() * W)}" y2="${n(ly)}" stroke="${mix(col, "#ffffff", 0.5)}" stroke-width="${n(r.range(1, 2.4))}" opacity="${n(r.range(0.12, 0.3))}" stroke-dasharray="${n(lw)} 2000"/>`;
    }
    if (o.glint) {
      const gx = o.glint;
      for (let i = 0; i < 26; i++) {
        const ly = y + 6 + i * ((H - y) / 30) * r.range(0.6, 1.1), lw = r.range(20, 90) * (1 + i / 12);
        s += `<line x1="${n(gx - lw / 2 + r.range(-20, 20))}" y1="${n(ly)}" x2="${n(gx + lw / 2)}" y2="${n(ly)}" stroke="${this.m.sun}" stroke-width="2" opacity="${n(0.5 - i / 60)}"/>`;
      }
    }
    return this.add(s);
  }
  river(o) {
    // a band winding from the horizon (top) toward the viewer
    const col = o.color || mix(this.m.water, this.m.bottom, 0.3);
    const [xa, ya] = o.from, [xb, yb] = o.to, wa = o.w0 || 20, wb = o.w1 || 260;
    const bend = o.bend || 160;
    const d = `M${xa - wa / 2},${ya} C${xa - wa + bend},${(ya + yb) / 2} ${xb - wb / 2 - bend},${(ya + yb) / 2} ${xb - wb / 2},${yb} L${xb + wb / 2},${yb} C${xb + wb / 2 - bend},${(ya + yb) / 2} ${xa + wa + bend},${(ya + yb) / 2} ${xa + wa / 2},${ya} Z`;
    return this.add(`<path d="${d}" fill="${col}"/>`);
  }
  dunes(y, o) {
    o = o || {};
    for (let i = 0; i < (o.layers || 3); i++) {
      this.ridge({ y: y + i * 70, amp: 50 + i * 25, color: o.color || "sand", depth: (o.depth == null ? 0.5 : o.depth) - i * 0.2, step: 160 });
    }
    return this;
  }
  /* rows of a ploughed or planted field in perspective */
  field(y0, y1, o) {
    o = o || {};
    const col = this.c(this.land(o.color || "grass"), o.depth || 0), r = this.r;
    let s = `<rect x="0" y="${y0}" width="${W}" height="${y1 - y0}" fill="${col}"/>`;
    const vx = o.vanish || W / 2, rows = o.rows || 26;
    for (let i = 0; i <= rows; i++) {
      const xb = -400 + i * ((W + 800) / rows);
      s += `<line x1="${n(vx + (xb - vx) * 0.05)}" y1="${y0}" x2="${n(xb)}" y2="${y1}" stroke="${shade(col, o.dark ? -0.25 : 0.14)}" stroke-width="${n(2 + r() * 2)}" opacity="0.55"/>`;
    }
    return this.add(s);
  }
  road(o) {
    const col = this.c(this.land(o.color || "asphalt"), o.depth || 0);
    const [vx, vy] = o.vanish, wb = o.w || 500;
    let s = `<polygon points="${vx - 6},${vy} ${vx + 6},${vy} ${vx + wb / 2},${H} ${vx - wb / 2},${H}" fill="${col}"/>`;
    if (o.line !== false) s += `<line x1="${vx}" y1="${vy}" x2="${vx}" y2="${H}" stroke="${o.lineColor || "#d9d2bd"}" stroke-width="4" stroke-dasharray="26 30" opacity="0.6"/>`;
    return this.add(s);
  }
  rect(x, y, w, h, color, extra) { return this.add(`<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${color}" ${extra || ""}/>`); }
  poly(points, color, extra) { return this.add(`<polygon points="${pts(points)}" fill="${color}" ${extra || ""}/>`); }
  path(d, color, extra) { return this.add(`<path d="${d}" fill="${color}" ${extra || ""}/>`); }

  /* ---------- vegetation ---------- */
  tree(type, x, y, o) {
    o = o || {};
    const s = o.s || 1, d = o.depth || 0, r = this.r;
    const leaf = this.c(o.color || ({ pine: "#3f5e48", palm: "#4f7a4f", acacia: "#6c7f4c", birch: "#d9d6cc", cypress: "#3c5a45", oak: "#55734a", bare: "#5a5048", cherry: "#d9a7b0", autumn: "#b0703f" }[type] || "#55734a"), d);
    const trunk = this.c(o.trunk || "#5a4a3c", d);
    let g = "";
    if (type === "pine" || type === "cypress") {
      const h = 120 * s, w = (type === "pine" ? 46 : 24) * s;
      g += `<rect x="${n(x - 3 * s)}" y="${n(y - 14 * s)}" width="${n(6 * s)}" height="${n(14 * s)}" fill="${trunk}"/>`;
      if (type === "pine") for (let i = 0; i < 4; i++) {
        const ty = y - 10 * s - i * h * 0.22, tw = w * (1 - i * 0.2);
        g += `<polygon points="${n(x - tw)},${n(ty)} ${n(x + tw)},${n(ty)} ${n(x)},${n(ty - h * 0.42)}" fill="${shade(leaf, -0.04 * i)}"/>`;
      }
      else g += `<ellipse cx="${x}" cy="${n(y - h * 0.5)}" rx="${n(w * 0.5)}" ry="${n(h * 0.5)}" fill="${leaf}"/>`;
    } else if (type === "palm") {
      const h = 150 * s;
      g += `<path d="M${x},${y} Q${n(x + 18 * s)},${n(y - h * 0.5)} ${n(x + 10 * s)},${n(y - h)}" stroke="${trunk}" stroke-width="${n(7 * s)}" fill="none"/>`;
      for (let i = 0; i < 7; i++) {
        const a = -Math.PI + i * (Math.PI / 6) + r.range(-0.15, 0.15), L = 70 * s;
        const tx = x + 10 * s, ty = y - h;
        g += `<path d="M${n(tx)},${n(ty)} Q${n(tx + Math.cos(a) * L * 0.6)},${n(ty + Math.sin(a) * L * 0.6 - 20 * s)} ${n(tx + Math.cos(a) * L)},${n(ty + Math.sin(a) * L * 0.4 + 25 * s)}" stroke="${leaf}" stroke-width="${n(9 * s)}" fill="none" stroke-linecap="round"/>`;
      }
    } else if (type === "acacia") {
      const h = 90 * s;
      g += `<path d="M${x},${y} L${n(x - 4 * s)},${n(y - h * 0.6)} L${n(x - 20 * s)},${n(y - h)} M${n(x - 4 * s)},${n(y - h * 0.6)} L${n(x + 18 * s)},${n(y - h)}" stroke="${trunk}" stroke-width="${n(5 * s)}" fill="none"/>`;
      g += `<ellipse cx="${x}" cy="${n(y - h - 6 * s)}" rx="${n(70 * s)}" ry="${n(16 * s)}" fill="${leaf}"/>`;
    } else if (type === "birch" || type === "bare") {
      const h = 130 * s;
      g += `<path d="M${x},${y} L${x},${n(y - h)}" stroke="${type === "birch" ? leaf : trunk}" stroke-width="${n(5 * s)}"/>`;
      for (let i = 0; i < 6; i++) {
        const by = y - h * r.range(0.35, 0.95), dir = i % 2 ? 1 : -1;
        g += `<path d="M${x},${n(by)} L${n(x + dir * r.range(18, 40) * s)},${n(by - r.range(20, 40) * s)}" stroke="${trunk}" stroke-width="${n(2 * s)}"/>`;
      }
    } else {
      const h = 100 * s, w = 48 * s;
      g += `<rect x="${n(x - 4 * s)}" y="${n(y - h * 0.45)}" width="${n(8 * s)}" height="${n(h * 0.45)}" fill="${trunk}"/>`;
      for (let i = 0; i < 4; i++) g += `<circle cx="${n(x + r.range(-w * 0.5, w * 0.5))}" cy="${n(y - h * 0.6 - r.range(0, h * 0.35))}" r="${n(w * r.range(0.45, 0.7))}" fill="${shade(leaf, r.range(-0.08, 0.06))}"/>`;
    }
    return this.add(`<g>${g}</g>`);
  }
  forest(o) {
    const r = this.r, x0 = o.x0 == null ? -40 : o.x0, x1 = o.x1 == null ? W + 40 : o.x1;
    const count = o.count || Math.round((x1 - x0) / (o.gap || 28));
    const list = [];
    for (let i = 0; i < count; i++) list.push([r.range(x0, x1), o.y + r.range(0, o.spread || 20)]);
    list.sort((a, b) => a[1] - b[1]);
    list.forEach(([x, y]) => this.tree(o.type || "pine", x, y, { s: (o.s || 0.8) * r.range(0.75, 1.2), depth: o.depth, color: o.color }));
    return this;
  }

  /* ---------- buildings ---------- */
  building(x, y, w, h, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#8e8a84", d), r = this.r;
    let s = `<rect x="${n(x)}" y="${n(y - h)}" width="${n(w)}" height="${n(h)}" fill="${col}"/>`;
    if (o.roof === "pitched") s += `<polygon points="${n(x - 4)},${n(y - h)} ${n(x + w + 4)},${n(y - h)} ${n(x + w / 2)},${n(y - h - w * 0.35)}" fill="${this.c(o.roofColor || "#6d4c3d", d)}"/>`;
    if (o.roof === "flatdark") s += `<rect x="${n(x - 2)}" y="${n(y - h - 4)}" width="${n(w + 4)}" height="5" fill="${shade(col, -0.25)}"/>`;
    const win = o.windows === undefined ? true : o.windows;
    if (win) {
      const lit = o.lit === undefined ? this.m.lit : o.lit;
      const cw = o.cell || 14, rows = Math.floor((h - 10) / (cw * 1.6)), cols = Math.floor((w - 6) / cw);
      for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) {
        const on = lit ? r() < (o.litShare || 0.35) : false;
        if (!lit && r() < 0.15) continue;
        s += `<rect x="${n(x + 5 + j * cw)}" y="${n(y - h + 8 + i * cw * 1.6)}" width="${n(cw * 0.5)}" height="${n(cw * 0.8)}" fill="${on ? this.m.light : shade(col, -0.18)}" opacity="${on ? 0.9 : 0.55}"/>`;
      }
    }
    return this.add(`<g>${s}</g>`);
  }
  city(o) {
    const r = this.r, x0 = o.x0 == null ? -20 : o.x0, x1 = o.x1 == null ? W + 20 : o.x1, y = o.y;
    const [hmin, hmax] = o.h || [60, 220];
    const base = o.color || (o.style === "old" ? "#b39c84" : o.style === "mideast" ? "#c8b28f" : "#8d929a");
    let x = x0;
    while (x < x1) {
      const w = r.range(o.wmin || 34, o.wmax || 90), h = r.range(hmin, hmax);
      const col = shade(base, r.range(-0.12, 0.1));
      if (o.style === "towers" && r() < 0.3) this.building(x, y, w * 0.7, h * 1.6, { depth: o.depth, color: col, lit: o.lit, cell: 10 });
      else this.building(x, y, w, h, { depth: o.depth, color: col, lit: o.lit, roof: o.style === "old" && r() < 0.5 ? "pitched" : (o.style === "mideast" ? null : "flatdark"), windows: o.windows, cell: o.cell });
      if (o.style === "mideast" && r() < 0.18) this.dome(x + w / 2, y - h, w * 0.32, { depth: o.depth, color: o.domeColor });
      if (o.style === "mideast" && r() < 0.1) this.minaret(x + w * 0.8, y - h, h * 0.6, { depth: o.depth });
      if (o.style === "old" && r() < 0.06) this.spire(x + w / 2, y - h, 90, { depth: o.depth });
      if (o.style === "asia" && r() < 0.15) this.pagoda(x + w / 2, y - h + 4, 0.35, { depth: o.depth });
      x += w + r.range(-4, 6);
    }
    return this;
  }
  dome(x, y, rr, o) {
    o = o || {};
    const col = this.c(o.color || "#c9a86a", o.depth);
    return this.add(`<path d="M${n(x - rr)},${n(y)} A${n(rr)},${n(rr * 1.05)} 0 0 1 ${n(x + rr)},${n(y)} Z" fill="${col}"/><rect x="${n(x - 1.5)}" y="${n(y - rr * 1.35)}" width="3" height="${n(rr * 0.35)}" fill="${col}"/>`);
  }
  minaret(x, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#d8c7a7", o.depth), w = o.w || Math.max(8, h * 0.07);
    return this.add(`<rect x="${n(x - w / 2)}" y="${n(y - h)}" width="${n(w)}" height="${n(h)}" fill="${col}"/><rect x="${n(x - w * 0.8)}" y="${n(y - h * 0.72)}" width="${n(w * 1.6)}" height="${n(w * 0.45)}" fill="${shade(col, -0.1)}"/><polygon points="${n(x - w / 2)},${n(y - h)} ${n(x + w / 2)},${n(y - h)} ${n(x)},${n(y - h - w * 2.2)}" fill="${shade(col, -0.15)}"/>`);
  }
  spire(x, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#7c7a78", o.depth);
    return this.add(`<rect x="${n(x - 8)}" y="${n(y - h * 0.45)}" width="16" height="${n(h * 0.45)}" fill="${col}"/><polygon points="${n(x - 9)},${n(y - h * 0.45)} ${n(x + 9)},${n(y - h * 0.45)} ${n(x)},${n(y - h)}" fill="${shade(col, -0.1)}"/>`);
  }
  mosque(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#d9cbb0", d), dc = o.domeColor || "#b9a27a";
    this.rect(x - 160 * s, y - 70 * s, 320 * s, 70 * s, col);
    this.dome(x, y - 70 * s, 95 * s, { depth: d, color: dc });
    this.dome(x - 115 * s, y - 70 * s, 40 * s, { depth: d, color: dc });
    this.dome(x + 115 * s, y - 70 * s, 40 * s, { depth: d, color: dc });
    this.minaret(x - 190 * s, y, 260 * s, { depth: d, color: col, w: 14 * s });
    this.minaret(x + 190 * s, y, 260 * s, { depth: d, color: col, w: 14 * s });
    for (let i = -3; i <= 3; i++) this.add(`<path d="M${n(x + i * 40 * s - 12 * s)},${n(y)} L${n(x + i * 40 * s - 12 * s)},${n(y - 34 * s)} A${n(12 * s)},${n(12 * s)} 0 0 1 ${n(x + i * 40 * s + 12 * s)},${n(y - 34 * s)} L${n(x + i * 40 * s + 12 * s)},${n(y)} Z" fill="${shade(col, -0.22)}"/>`);
    return this;
  }
  /* a classical palace or parliament: wings, columns, optional dome */
  palace(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#e2dccf", d), w = (o.w || 520) * s, h = (o.h || 120) * s;
    this.rect(x - w / 2, y - h, w, h, col);
    this.poly([[x - w * 0.2, y - h], [x + w * 0.2, y - h], [x, y - h - 50 * s]], shade(col, -0.06));
    for (let i = 0; i < (o.cols || 10); i++) {
      const cx = x - w * 0.18 + i * (w * 0.36 / ((o.cols || 10) - 1));
      this.rect(cx - 4 * s, y - h + 10 * s, 8 * s, h - 14 * s, shade(col, -0.12));
    }
    for (let i = 0; i < 8; i++) {
      this.rect(x - w / 2 + 14 * s + i * 22 * s, y - h * 0.75, 10 * s, h * 0.4, shade(col, -0.2));
      this.rect(x + w / 2 - 24 * s - i * 22 * s, y - h * 0.75, 10 * s, h * 0.4, shade(col, -0.2));
    }
    if (o.dome) this.dome(x, y - h - 40 * s, 70 * s, { depth: d, color: o.domeColor || shade(col, -0.05) });
    this.rect(x - w / 2 - 8 * s, y - 6 * s, w + 16 * s, 6 * s, shade(col, -0.18));
    return this;
  }
  pagoda(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#8a3f35", d), roof = this.c(o.roof || "#3f3a3a", d);
    let g = "";
    for (let i = 0; i < (o.tiers || 3); i++) {
      const ty = y - i * 70 * s, tw = (120 - i * 22) * s;
      g += `<rect x="${n(x - tw * 0.35)}" y="${n(ty - 50 * s)}" width="${n(tw * 0.7)}" height="${n(50 * s)}" fill="${col}"/>`;
      g += `<path d="M${n(x - tw * 0.75)},${n(ty - 46 * s)} Q${n(x)},${n(ty - 70 * s)} ${n(x + tw * 0.75)},${n(ty - 46 * s)} L${n(x + tw * 0.45)},${n(ty - 62 * s)} L${n(x - tw * 0.45)},${n(ty - 62 * s)} Z" fill="${roof}"/>`;
    }
    return this.add(`<g>${g}</g>`);
  }
  temple(x, y, s, o) {
    // Hindu shikhara-style temple with stacked spires
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#d7a98a", d);
    this.rect(x - 230 * s, y - 60 * s, 460 * s, 60 * s, shade(col, -0.05));
    [[-150, 150], [-75, 210], [0, 290], [75, 210], [150, 150]].forEach(([dx, h]) => {
      const bx = x + dx * s, w = (dx === 0 ? 60 : 40) * s;
      this.add(`<path d="M${n(bx - w)},${n(y - 60 * s)} Q${n(bx - w * 0.9)},${n(y - h * s * 0.8)} ${n(bx)},${n(y - h * s)} Q${n(bx + w * 0.9)},${n(y - h * s * 0.8)} ${n(bx + w)},${n(y - 60 * s)} Z" fill="${col}"/>`);
      for (let k = 1; k < 6; k++) this.add(`<line x1="${n(bx - w * (1 - k * 0.12))}" y1="${n(y - 60 * s - k * (h - 60) * s / 6)}" x2="${n(bx + w * (1 - k * 0.12))}" y2="${n(y - 60 * s - k * (h - 60) * s / 6)}" stroke="${shade(col, -0.2)}" stroke-width="${n(2 * s)}"/>`);
    });
    return this;
  }
  house(x, y, w, h, o) {
    o = o || {};
    return this.building(x, y, w, h, Object.assign({ roof: "pitched", windows: false }, o)).rect(x + w * 0.4, y - h * 0.55, w * 0.2, h * 0.55, this.c(shade(o.color || "#8e8a84", -0.3), o.depth));
  }
  wall(x0, x1, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#a9a49a", o.depth);
    let s = `<rect x="${x0}" y="${y - h}" width="${x1 - x0}" height="${h}" fill="${col}"/>`;
    if (o.panels) for (let x = x0; x < x1; x += o.panels) s += `<line x1="${x}" y1="${y - h}" x2="${x}" y2="${y}" stroke="${shade(col, -0.2)}" stroke-width="2"/>`;
    if (o.wire) s += `<path d="M${x0},${y - h - 6} ${Array.from({ length: Math.ceil((x1 - x0) / 14) }, (_, i) => `L${x0 + i * 14 + 7},${y - h - (i % 2 ? 2 : 12)}`).join(" ")}" stroke="${shade(col, -0.4)}" fill="none" stroke-width="1.5"/>`;
    return this.add(s);
  }
  fence(x0, x1, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#4a4a4a", o.depth);
    let s = `<line x1="${x0}" y1="${y - h}" x2="${x1}" y2="${y - h}" stroke="${col}" stroke-width="2"/><line x1="${x0}" y1="${y - h * 0.5}" x2="${x1}" y2="${y - h * 0.5}" stroke="${col}" stroke-width="1.5"/>`;
    for (let x = x0; x < x1; x += o.gap || 30) s += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - h - 4}" stroke="${col}" stroke-width="3"/>`;
    return this.add(s);
  }

  /* ---------- people (always tiny, from behind or far away) ---------- */
  person(x, y, h, o) {
    o = o || {};
    const col = this.c(o.color || this.m.ink, o.depth), w = h * 0.26;
    let s = `<circle cx="${n(x)}" cy="${n(y - h + w * 0.55)}" r="${n(w * 0.5)}" fill="${col}"/>`;
    s += `<path d="M${n(x - w * 0.75)},${n(y - h * 0.38)} Q${n(x - w * 0.8)},${n(y - h * 0.8)} ${n(x)},${n(y - h * 0.8)} Q${n(x + w * 0.8)},${n(y - h * 0.8)} ${n(x + w * 0.75)},${n(y - h * 0.38)} Z" fill="${col}"/>`;
    const step = o.walk ? w * 0.4 : w * 0.15;
    s += `<path d="M${n(x - w * 0.5)},${n(y - h * 0.4)} L${n(x - step - w * 0.25)},${n(y)} L${n(x - step + w * 0.05)},${n(y)} L${n(x)},${n(y - h * 0.22)} L${n(x + step - w * 0.05)},${n(y)} L${n(x + step + w * 0.25)},${n(y)} L${n(x + w * 0.5)},${n(y - h * 0.4)} Z" fill="${shade(col, -0.05)}"/>`;
    if (o.hat === "hard") s += `<path d="M${n(x - w * 0.6)},${n(y - h + w * 0.55)} A${n(w * 0.6)},${n(w * 0.55)} 0 0 1 ${n(x + w * 0.6)},${n(y - h + w * 0.55)} Z" fill="${o.hatColor || "#e2b33c"}"/>`;
    if (o.helmet) s += `<path d="M${n(x - w * 0.62)},${n(y - h + w * 0.6)} A${n(w * 0.62)},${n(w * 0.6)} 0 0 1 ${n(x + w * 0.62)},${n(y - h + w * 0.6)} Z" fill="${shade(col, 0.12)}"/>`;
    if (o.coat) s += `<path d="M${n(x - w * 0.75)},${n(y - h * 0.38)} L${n(x - w * 0.8)},${n(y - h * 0.12)} L${n(x + w * 0.8)},${n(y - h * 0.12)} L${n(x + w * 0.75)},${n(y - h * 0.38)} Z" fill="${shade(col, 0.06)}"/>`;
    if (o.umbrella) s += `<path d="M${n(x - w * 2)},${n(y - h * 1.05)} Q${n(x)},${n(y - h * 1.6)} ${n(x + w * 2)},${n(y - h * 1.05)} Z" fill="${this.c(o.umbrella, o.depth)}"/><line x1="${n(x)}" y1="${n(y - h * 1.05)}" x2="${n(x)}" y2="${n(y - h * 0.7)}" stroke="${col}" stroke-width="1.5"/>`;
    if (o.bundle) s += `<rect x="${n(x + w * 0.4)}" y="${n(y - h * 0.62)}" width="${n(w * 0.9)}" height="${n(w * 0.7)}" fill="${this.c(o.bundle, o.depth)}"/>`;
    if (o.robe) s += `<path d="M${n(x - w * 0.8)},${n(y - h * 0.8)} L${n(x - w)},${n(y)} L${n(x + w)},${n(y)} L${n(x + w * 0.8)},${n(y - h * 0.8)} Z" fill="${this.c(o.robe, o.depth)}"/>`;
    return this.add(`<g>${s}</g>`);
  }
  crowd(o) {
    const r = this.r, x0 = o.x0 == null ? 0 : o.x0, x1 = o.x1 == null ? W : o.x1;
    const rows = o.rows || 4, gap = o.gap || 16;
    const palette = o.colors || [this.m.ink, shade(this.m.ink, 0.12), mix(this.m.ink, "#6b5a4a", 0.4), mix(this.m.ink, "#46506a", 0.4)];
    for (let row = 0; row < rows; row++) {
      const y = o.y + row * (o.rowGap || 14), h = (o.h || 60) * (1 + row * 0.12), dep = Math.max(0, (o.depth || 0) - row * 0.08);
      for (let x = x0 + r.range(0, gap); x < x1; x += gap * r.range(0.6, 1.3) * (1 + row * 0.12)) {
        if (r() < (o.thin || 0)) continue;
        this.person(x, y + r.range(-3, 3), h * r.range(0.88, 1.08), { color: r.pick(palette), depth: dep, umbrella: o.umbrellas && r() < 0.3 ? r.pick(o.umbrellas) : null, hat: o.hats ? "hard" : null, walk: o.walk });
      }
    }
    if (o.banners) for (let i = 0; i < o.banners; i++) {
      const bx = r.range(x0 + 40, x1 - 140), by = o.y - (o.h || 60) * 1.1;
      this.add(`<line x1="${n(bx)}" y1="${n(by + 30)}" x2="${n(bx)}" y2="${n(o.y - 10)}" stroke="${this.m.ink}" stroke-width="2"/><line x1="${n(bx + 110)}" y1="${n(by + 30)}" x2="${n(bx + 110)}" y2="${n(o.y - 10)}" stroke="${this.m.ink}" stroke-width="2"/><rect x="${n(bx)}" y="${n(by - 10)}" width="110" height="40" fill="${r.pick(o.bannerColors || ["#e8e2d2", "#d8c9a6", "#c9b9a6"])}"/>`);
    }
    if (o.signs) for (let i = 0; i < o.signs; i++) {
      const bx = r.range(x0, x1), by = o.y - (o.h || 60) * 1.25;
      this.add(`<line x1="${n(bx)}" y1="${n(by + 20)}" x2="${n(bx)}" y2="${n(o.y - (o.h || 60) * 0.6)}" stroke="${this.m.ink}" stroke-width="2"/><rect x="${n(bx - 18)}" y="${n(by - 6)}" width="36" height="26" fill="${r.pick(["#ece6d6", "#d8cfbf", "#e3d6b8"])}"/>`);
    }
    return this;
  }
  candles(x0, x1, y, count) {
    const r = this.r;
    let s = "";
    for (let i = 0; i < count; i++) {
      const x = r.range(x0, x1), yy = y + r.range(-6, 6);
      s += `<circle cx="${n(x)}" cy="${n(yy - 10)}" r="12" fill="${this.m.light}" opacity="0.18"/><rect x="${n(x - 2.5)}" y="${n(yy - 8)}" width="5" height="9" fill="#ece3cf"/><ellipse cx="${n(x)}" cy="${n(yy - 11)}" rx="2" ry="4" fill="#ffcf6a"/>`;
    }
    return this.add(s);
  }

  /* ---------- ships (x = middle of the hull, y = waterline) ---------- */
  ship(type, x, y, o) {
    o = o || {};
    const s = o.s || 1, d = o.depth || 0, f = o.dir === -1 ? -1 : 1, r = this.r;
    const ink = (c) => this.c(c, d);
    const hullC = ink(o.hull || ({ tanker: "#5b3a35", container: "#3c4656", warship: "#6c747b", carrier: "#666e75", frigate: "#7a8288", lng: "#3f4a59", steam: "#2b2b2f", dhow: "#7a5233", tall: "#5a4232", sub: "#2f3337", patrol: "#7d858a", fishing: "#a7a29a", bulk: "#5a3d36", liner: "#f0ece4", ferry: "#e7e2d8" }[type] || "#555b62"));
    const sup = ink(o.sup || "#e9e5dc"), grey = ink("#8d949a");
    let g = "";
    const P = (arr) => arr.map(([a, b]) => [x + f * a * s, y + b * s]);
    const hull = (L, Hh, bow, stern) => `<polygon points="${pts(P([[-L / 2 + (stern || 0), 0], [-L / 2, -Hh], [L / 2, -Hh], [L / 2 - (bow || 30), 0]]))}" fill="${hullC}"/>`;
    const box = (x0, y0, w, h, c) => {
      const p = P([[x0, y0], [x0 + w, y0], [x0 + w, y0 - h], [x0, y0 - h]]);
      return `<polygon points="${pts(p)}" fill="${c}"/>`;
    };
    if (type === "tanker" || type === "bulk") {
      g += hull(460, 34, 34, 6);
      g += box(-220, -34, 70, 46, sup) + box(-210, -80, 50, 18, sup) + box(-195, -98, 14, 22, ink("#3c3c3c"));
      for (let i = 0; i < 9; i++) g += box(-130 + i * 36, -34, 4, 8, grey);
      g += `<line x1="${n(x + f * -140 * s)}" y1="${n(y - 40 * s)}" x2="${n(x + f * 200 * s)}" y2="${n(y - 40 * s)}" stroke="${grey}" stroke-width="${n(2 * s)}"/>`;
      if (type === "bulk") for (let i = 0; i < 6; i++) g += box(-130 + i * 55, -34, 40, 10, ink("#6a5b4f"));
    } else if (type === "container") {
      g += hull(470, 40, 36, 6);
      const cols = ["#9b4b3c", "#4b6a8b", "#c09a4a", "#5d7d5a", "#8a8f94", "#7c4a5c", "#b3763f"];
      for (let i = 0; i < 12; i++) {
        const stack = r.int(2, 5);
        for (let k = 0; k < stack; k++) g += box(-150 + i * 30, -40 - k * 15, 28, 14, ink(cols[(i * 3 + k) % cols.length]));
      }
      g += box(-215, -40, 50, 80, sup) + box(-212, -120, 44, 12, ink("#cfcac0"));
    } else if (type === "lng") {
      g += hull(460, 38, 34, 6);
      for (let i = 0; i < 4; i++) {
        const cx = x + f * (-110 + i * 80) * s;
        g += `<path d="M${n(cx - 34 * s)},${n(y - 38 * s)} A${n(34 * s)},${n(30 * s)} 0 0 1 ${n(cx + 34 * s)},${n(y - 38 * s)} Z" fill="${ink("#e8e2d6")}"/>`;
      }
      g += box(-220, -38, 50, 50, sup);
    } else if (type === "warship" || type === "frigate" || type === "patrol") {
      const L = type === "patrol" ? 200 : 360;
      g += `<polygon points="${pts(P([[-L / 2, 0], [-L / 2, -24], [L / 2 - 10, -24], [L / 2, -30], [L / 2 - 50, 0]]))}" fill="${hullC}"/>`;
      g += `<polygon points="${pts(P([[-L * 0.25, -24], [-L * 0.22, -70], [L * 0.05, -70], [L * 0.12, -24]]))}" fill="${shade(hullC, 0.08)}"/>`;
      g += box(-L * 0.12, -70, 26, 34, shade(hullC, 0.12));
      g += `<line x1="${n(x + f * -L * 0.06 * s)}" y1="${n(y - 104 * s)}" x2="${n(x + f * -L * 0.06 * s)}" y2="${n(y - 140 * s)}" stroke="${hullC}" stroke-width="${n(3 * s)}"/>`;
      g += box(L * 0.24, -24, 26, 12, shade(hullC, 0.05)) + `<line x1="${n(x + f * (L * 0.24 + 26) * s)}" y1="${n(y - 32 * s)}" x2="${n(x + f * (L * 0.24 + 60) * s)}" y2="${n(y - 34 * s)}" stroke="${hullC}" stroke-width="${n(3 * s)}"/>`;
      if (type === "frigate") g += box(-L * 0.42, -24, 40, 20, shade(hullC, 0.06));
    } else if (type === "carrier") {
      g += `<polygon points="${pts(P([[-250, 0], [-260, -34], [280, -34], [230, 0]]))}" fill="${hullC}"/>`;
      g += box(-270, -34, 560, 8, shade(hullC, 0.1));
      g += box(60, -42, 40, 50, shade(hullC, 0.14)) + box(72, -92, 10, 26, hullC);
      for (let i = 0; i < 6; i++) g += box(-200 + i * 40, -42, 22, 6, ink("#4b5157"));
    } else if (type === "steam") {
      g += hull(380, 40, 26, 4);
      g += box(-120, -40, 200, 26, ink("#d9d2c2"));
      g += box(-30, -66, 26, 60, ink(o.funnel || "#1f1f1f")) + box(-30, -66, 26, 10, ink("#a33a2a"));
      g += `<line x1="${n(x + f * -150 * s)}" y1="${n(y - 40 * s)}" x2="${n(x + f * -150 * s)}" y2="${n(y - 170 * s)}" stroke="${hullC}" stroke-width="${n(3 * s)}"/><line x1="${n(x + f * 130 * s)}" y1="${n(y - 40 * s)}" x2="${n(x + f * 130 * s)}" y2="${n(y - 160 * s)}" stroke="${hullC}" stroke-width="${n(3 * s)}"/>`;
    } else if (type === "liner" || type === "ferry") {
      g += hull(420, 36, 30, 4);
      for (let k = 0; k < 3; k++) g += box(-170 + k * 20, -36 - k * 18, 300 - k * 50, 18, ink(shade("#f2eee6", -0.03 * k)));
      g += box(20, -90, 26, 36, ink(o.funnel || "#b04a3a"));
    } else if (type === "dhow" || type === "boat") {
      const L = type === "dhow" ? 160 : 90;
      g += `<path d="M${n(x - f * L / 2 * s)},${n(y - 26 * s)} L${n(x + f * L / 2 * s)},${n(y - 36 * s)} Q${n(x + f * L * 0.32 * s)},${n(y + 4 * s)} ${n(x)},${n(y + 2 * s)} Q${n(x - f * L * 0.36 * s)},${n(y)} ${n(x - f * L / 2 * s)},${n(y - 26 * s)} Z" fill="${hullC}"/>`;
      g += `<path d="M${n(x - f * L / 2 * s)},${n(y - 24 * s)} L${n(x + f * L / 2 * s)},${n(y - 33 * s)}" stroke="${ink(o.stripe || "#efe9dc")}" stroke-width="${n(4 * s)}"/>`;
      if (type === "boat" && o.cabin !== false) g += box(-24, -29, 30, 22, ink(o.cabin || "#e9e5dc")) + box(-20, -44, 22, 8, ink(o.cabin ? shade(o.cabin, 0.1) : "#f4f1ea"));
      if (type === "dhow") {
        g += `<line x1="${n(x)}" y1="${n(y - 18 * s)}" x2="${n(x)}" y2="${n(y - 150 * s)}" stroke="${hullC}" stroke-width="${n(3 * s)}"/>`;
        g += `<polygon points="${pts(P([[0, -150], [70, -40], [-60, -30]]))}" fill="${ink(o.sail || "#e6dcc6")}"/>`;
      } else if (o.lamp) {
        g += `<circle cx="${n(x)}" cy="${n(y - 40 * s)}" r="${n(22 * s)}" fill="${this.m.light}" opacity="0.25"/><circle cx="${n(x)}" cy="${n(y - 40 * s)}" r="${n(4 * s)}" fill="#fff4cf"/>`;
      }
    } else if (type === "fishing") {
      g += hull(160, 26, 20, 4) + box(-70, -26, 40, 24, sup);
      g += `<line x1="${n(x + f * 20 * s)}" y1="${n(y - 26 * s)}" x2="${n(x + f * 20 * s)}" y2="${n(y - 80 * s)}" stroke="${grey}" stroke-width="${n(2 * s)}"/>`;
      if (o.lamps) for (let i = 0; i < 6; i++) { const lx = x + f * (-50 + i * 20) * s; g += `<circle cx="${n(lx)}" cy="${n(y - 50 * s)}" r="${n(14 * s)}" fill="#fff6d0" opacity="0.18"/><circle cx="${n(lx)}" cy="${n(y - 50 * s)}" r="${n(3 * s)}" fill="#fffbe6"/>`; }
    } else if (type === "tall") {
      g += hull(300, 40, 30, 0);
      [-90, 0, 90].forEach((mx) => {
        g += `<line x1="${n(x + f * mx * s)}" y1="${n(y - 40 * s)}" x2="${n(x + f * mx * s)}" y2="${n(y - 250 * s)}" stroke="${hullC}" stroke-width="${n(3 * s)}"/>`;
        for (let k = 0; k < 3; k++) g += box(mx - 38 + k * 4, -70 - k * 60, 76 - k * 8, 46, ink(o.sail || "#e4dccb"));
      });
    } else if (type === "sub") {
      g += `<path d="M${n(x - 200 * s)},${n(y - 6 * s)} Q${n(x - 210 * s)},${n(y - 30 * s)} ${n(x - 160 * s)},${n(y - 30 * s)} L${n(x + 170 * s)},${n(y - 30 * s)} Q${n(x + 210 * s)},${n(y - 22 * s)} ${n(x + 200 * s)},${n(y - 4 * s)} Z" fill="${hullC}"/>`;
      g += box(-60, -30, 50, 40, hullC);
    }
    let out = `<g>${g}</g>`;
    if (o.reflect !== false) out += `<g transform="translate(0,${n(2 * y)}) scale(1,-1)" opacity="0.12">${g}</g>`;
    if (o.wake) {
      const sx = x - f * 225 * s;
      out += `<polygon points="${n(sx)},${n(y - 2 * s)} ${n(sx - f * 260 * s)},${n(y + 10 * s)} ${n(sx - f * 260 * s)},${n(y + 16 * s)} ${n(sx)},${n(y + 4 * s)}" fill="#ffffff" opacity="0.18"/>`;
      out += `<polygon points="${n(x + f * 200 * s)},${n(y)} ${n(x + f * 240 * s)},${n(y + 3 * s)} ${n(x + f * 120 * s)},${n(y + 6 * s)}" fill="#ffffff" opacity="0.3"/>`;
    }
    if (o.smoke) this.smoke(x + f * (type === "steam" ? -17 : -190) * s, y - (type === "steam" ? 66 : 100) * s, { len: 240 * s, dir: -f, color: o.smokeColor });
    if (o.fire) { this.glow(x, y - 30 * s, 160 * s, "#ff8a3c", 0.55); this.smoke(x, y - 40 * s, { len: 420 * s, dir: -1, dark: true, w: 70 * s }); }
    return this.add(out);
  }

  /* ---------- aircraft ---------- */
  plane(type, x, y, o) {
    o = o || {};
    const s = o.s || 1, d = o.depth || 0, f = o.dir === -1 ? -1 : 1, a = o.angle || 0;
    const col = this.c(o.color || ({ fighter: "#5d6670", airliner: "#e2e2de", cargo: "#7b7f74", drone: "#4b5156", bomber: "#4f564e", heli: "#4b5148", shahed: "#55524a", spy: "#1d1f22", jet: "#c9ccce" }[type] || "#666"), d);
    let g = "";
    if (type === "fighter" || type === "jet") {
      g = `<path d="M60,0 L20,-6 L-10,-30 L-22,-30 L-8,-6 L-40,-5 L-52,-20 L-60,-20 L-56,0 L-60,20 L-52,20 L-40,5 L-8,6 L-22,30 L-10,30 L20,6 Z" fill="${col}"/>`;
    } else if (type === "airliner") {
      g = `<path d="M90,0 Q84,-8 60,-8 L-60,-8 L-90,-30 L-98,-30 L-82,-6 L-90,0 L-82,6 L-60,8 L60,8 Q84,8 90,0 Z" fill="${col}"/><path d="M10,-6 L-30,-60 L-44,-60 L-24,-6 Z M10,6 L-30,40 L-44,40 L-24,6 Z" fill="${shade(col, -0.12)}"/>`;
    } else if (type === "cargo" || type === "bomber") {
      g = `<path d="M70,0 Q66,-9 50,-10 L-60,-8 L-80,-34 L-90,-34 L-82,-4 L-86,4 L50,10 Q66,9 70,0 Z" fill="${col}"/><rect x="-8" y="-6" width="26" height="-0" fill="${col}"/><path d="M20,-4 L-4,-90 L-18,-90 L-6,-4 Z M20,4 L-4,60 L-18,60 L-6,4 Z" fill="${shade(col, -0.1)}"/>`;
      [-62, -34, 30, 52].forEach((e) => { if (type === "bomber" && Math.abs(e) > 40) return; g += `<rect x="4" y="${e > 0 ? e - 12 : e}" width="18" height="10" rx="4" fill="${shade(col, -0.2)}"/>`; });
    } else if (type === "drone") {
      g = `<rect x="-14" y="-5" width="28" height="10" rx="3" fill="${col}"/><line x1="-30" y1="-14" x2="30" y2="14" stroke="${col}" stroke-width="3"/><line x1="-30" y1="14" x2="30" y2="-14" stroke="${col}" stroke-width="3"/>` + [[-30, -14], [30, 14], [-30, 14], [30, -14]].map(([px, py]) => `<ellipse cx="${px}" cy="${py}" rx="14" ry="3" fill="${col}" opacity="0.7"/>`).join("");
    } else if (type === "shahed") {
      g = `<path d="M40,0 L-30,-36 L-36,-30 L-20,0 L-36,30 L-30,36 Z" fill="${col}"/>`;
    } else if (type === "spy") {
      g = `<path d="M50,0 L30,-4 L-40,-4 L-50,-12 L-56,-12 L-52,0 L-56,12 L-50,12 L-40,4 L30,4 Z" fill="${col}"/><rect x="-10" y="-80" width="10" height="160" rx="4" fill="${col}"/>`;
    } else if (type === "heli") {
      g = `<ellipse cx="10" cy="0" rx="30" ry="14" fill="${col}"/><rect x="-60" y="-4" width="60" height="7" fill="${col}"/><rect x="-62" y="-14" width="6" height="14" fill="${col}"/><line x1="-50" y1="-20" x2="70" y2="-20" stroke="${col}" stroke-width="3"/><line x1="10" y1="-14" x2="10" y2="-20" stroke="${col}" stroke-width="3"/><line x1="-6" y1="16" x2="30" y2="16" stroke="${col}" stroke-width="3"/>`;
    }
    let out = `<g transform="translate(${n(x)},${n(y)}) rotate(${a}) scale(${n(f * s)},${n(s)})">${g}</g>`;
    if (o.trail) out = `<line x1="${n(x - f * 60 * s)}" y1="${n(y)}" x2="${n(x - f * (60 + o.trail) * s)}" y2="${n(y + Math.tan(a * Math.PI / 180) * -f * o.trail * s)}" stroke="#ffffff" stroke-width="${n(3 * s)}" opacity="0.4"/>` + out;
    return this.add(out);
  }
  /* a rising missile or rocket with its trail */
  missile(x, y, o) {
    o = o || {};
    const len = o.len || 300, a = (o.angle == null ? -70 : o.angle) * Math.PI / 180;
    const tx = x + Math.cos(a) * len, ty = y + Math.sin(a) * len;
    return this.add(`<path d="M${x},${y} Q${n(x + Math.cos(a) * len * 0.4 + (o.curve || 0))},${n(y + Math.sin(a) * len * 0.5)} ${n(tx)},${n(ty)}" stroke="${o.trail || "#f2ede2"}" stroke-width="${o.w || 6}" fill="none" opacity="0.65" stroke-linecap="round"/><circle cx="${n(tx)}" cy="${n(ty)}" r="${o.head || 5}" fill="#fff3cf"/><circle cx="${n(tx)}" cy="${n(ty)}" r="${(o.head || 5) * 4}" fill="#ffd28a" opacity="0.3"/>`);
  }

  /* ---------- vehicles (x = centre, y = ground) ---------- */
  vehicle(type, x, y, o) {
    o = o || {};
    const s = o.s || 1, d = o.depth || 0, f = o.dir === -1 ? -1 : 1;
    const col = this.c(o.color || ({ truck: "#6b6f5c", tank: "#5c6150", apc: "#6a6e5a", car: "#7a7f86", bus: "#c0a252", tanker: "#d1cdc4", jeep: "#5f6450", pickup: "#8a7f6c" }[type] || "#666"), d);
    const dark = this.c("#2a2a2a", d);
    const B = (x0, y0, w, h, c) => `<rect x="${n(x + f * x0 * s - (f < 0 ? w * s : 0))}" y="${n(y + y0 * s)}" width="${n(w * s)}" height="${n(h * s)}" fill="${c}"/>`;
    const wheel = (cx, r) => `<circle cx="${n(x + f * cx * s)}" cy="${n(y - r * s)}" r="${n(r * s)}" fill="${dark}"/>`;
    let g = "";
    if (type === "truck" || type === "tanker") {
      g += B(-70, -46, 34, 36, shade(col, -0.1)) + (type === "tanker" ? `<rect x="${n(x + f * -34 * s - (f < 0 ? 104 * s : 0))}" y="${n(y - 50 * s)}" width="${n(104 * s)}" height="${n(36 * s)}" rx="${n(16 * s)}" fill="${col}"/>` : B(-34, -56, 104, 46, col));
      g += wheel(-56, 10) + wheel(-10, 10) + wheel(50, 10);
    } else if (type === "tank") {
      g += `<path d="M${n(x - 70 * s)},${n(y - 6 * s)} L${n(x - 78 * s)},${n(y - 22 * s)} L${n(x + 78 * s)},${n(y - 22 * s)} L${n(x + 70 * s)},${n(y - 6 * s)} Z" fill="${dark}"/>` + B(-64, -38, 128, 18, col) + B(-28, -56, 54, 20, shade(col, 0.05));
      g += `<line x1="${n(x + f * 26 * s)}" y1="${n(y - 48 * s)}" x2="${n(x + f * 110 * s)}" y2="${n(y - 52 * s)}" stroke="${col}" stroke-width="${n(5 * s)}"/>`;
    } else if (type === "apc") {
      g += `<polygon points="${n(x - 62 * s)},${n(y - 14 * s)} ${n(x - 60 * s)},${n(y - 48 * s)} ${n(x + 40 * s)},${n(y - 48 * s)} ${n(x + 66 * s)},${n(y - 26 * s)} ${n(x + 62 * s)},${n(y - 14 * s)}" fill="${col}"/>` + wheel(-40, 12) + wheel(-6, 12) + wheel(30, 12);
    } else if (type === "car" || type === "jeep" || type === "pickup") {
      g += `<path d="M${n(x - 40 * s)},${n(y - 10 * s)} L${n(x - 40 * s)},${n(y - 24 * s)} L${n(x - 22 * s)},${n(y - 26 * s)} L${n(x - 12 * s)},${n(y - 40 * s)} L${n(x + 18 * s)},${n(y - 40 * s)} L${n(x + 28 * s)},${n(y - 26 * s)} L${n(x + 42 * s)},${n(y - 24 * s)} L${n(x + 42 * s)},${n(y - 10 * s)} Z" fill="${col}"/>` + wheel(-24, 8) + wheel(26, 8);
    } else if (type === "bus") {
      g += B(-80, -60, 160, 50, col) + wheel(-50, 10) + wheel(50, 10);
      for (let i = 0; i < 7; i++) g += B(-72 + i * 21, -54, 16, 16, this.c("#3b4652", d));
    }
    return this.add(`<g>${g}</g>`);
  }
  convoy(type, x0, x1, y, o) {
    o = o || {};
    const gap = o.gap || 170;
    for (let x = x0; x <= x1; x += gap) this.vehicle(type, x, y, o);
    return this;
  }
  train(x0, x1, y, o) {
    o = o || {};
    const s = o.s || 1, d = o.depth || 0, col = this.c(o.color || "#6c4a3c", d), r = this.r;
    const carW = (o.type === "fast" ? 150 : 110) * s;
    let g = "";
    if (o.track !== false) g += `<line x1="${x0 - 400}" y1="${n(y + 2)}" x2="${x1 + 400}" y2="${n(y + 2)}" stroke="${this.c("#3e3b38", d)}" stroke-width="${n(4 * s)}"/>`;
    for (let x = x0, i = 0; x < x1; x += carW + 6 * s, i++) {
      const c = o.type === "freight" ? this.c(r.pick(["#7a4a3c", "#5f6b75", "#8a7a52", "#4d5a4a"]), d) : col;
      if (o.type === "fast" && i === 0) g += `<path d="M${n(x)},${n(y - 4 * s)} L${n(x)},${n(y - 44 * s)} L${n(x + carW * 0.6)},${n(y - 44 * s)} Q${n(x + carW)},${n(y - 40 * s)} ${n(x + carW)},${n(y - 8 * s)} Z" fill="${c}"/>`;
      else g += `<rect x="${n(x)}" y="${n(y - 44 * s)}" width="${n(carW)}" height="${n(40 * s)}" fill="${c}"/>`;
      if (o.type !== "freight") for (let k = 0; k < 6; k++) g += `<rect x="${n(x + 10 * s + k * carW / 6.5)}" y="${n(y - 36 * s)}" width="${n(carW / 10)}" height="${n(12 * s)}" fill="${this.m.lit ? this.m.light : this.c("#3b4652", d)}" opacity="0.8"/>`;
      if (o.type === "freight" && o.cargo === "logs") g += `<rect x="${n(x + 4)}" y="${n(y - 58 * s)}" width="${n(carW - 8)}" height="${n(14 * s)}" fill="${this.c("#8a6a4a", d)}"/>`;
    }
    if (o.people) for (let x = x0; x < x1; x += 18 * s) g += `<circle cx="${n(x + r.range(0, 10))}" cy="${n(y - 50 * s)}" r="${n(5 * s)}" fill="${this.c(this.m.ink, d)}"/>`;
    if (o.steam) this.smoke(x0 + 30 * s, y - 70 * s, { len: 300 * s, dir: -1 });
    return this.add(`<g>${g}</g>`);
  }

  /* ---------- industry and infrastructure ---------- */
  smoke(x, y, o) {
    o = o || {};
    const r = this.r, len = o.len || 260, dir = o.dir || 1, rise = o.rise == null ? 0.6 : o.rise;
    const col = o.color || (o.dark ? mix(this.m.ink, "#555555", 0.4) : mix(this.m.haze, "#ffffff", 0.2));
    const f = this.id_("blur");
    this.def(`<filter id="${f}" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="${o.blur || 10}"/></filter>`);
    let s = "";
    for (let i = 0; i < 14; i++) {
      const t = i / 13;
      s += `<circle cx="${n(x + dir * len * t + r.range(-8, 8))}" cy="${n(y - len * rise * t * (1 - t * 0.4) + r.range(-6, 6))}" r="${n((o.w || 26) * (0.5 + t * 1.6))}" fill="${col}" opacity="${n((o.opacity || 0.55) * (1 - t * 0.7))}"/>`;
    }
    return this.add(`<g filter="url(#${f})">${s}</g>`);
  }
  glow(x, y, rad, color, op) {
    const g = this.id_("g");
    this.def(`<radialGradient id="${g}"><stop offset="0" stop-color="${color || this.m.light}" stop-opacity="${op == null ? 0.6 : op}"/><stop offset="1" stop-color="${color || this.m.light}" stop-opacity="0"/></radialGradient>`);
    return this.add(`<circle cx="${n(x)}" cy="${n(y)}" r="${n(rad)}" fill="url(#${g})"/>`);
  }
  fire(x, y, w, o) {
    o = o || {};
    const r = this.r;
    this.glow(x, y - w * 0.3, w * 2, "#ff9a4a", 0.5);
    let s = "";
    for (let i = 0; i < 7; i++) {
      const fx = x + r.range(-w / 2, w / 2), fh = w * r.range(0.5, 1.1);
      s += `<path d="M${n(fx - w * 0.15)},${n(y)} Q${n(fx - w * 0.1)},${n(y - fh * 0.6)} ${n(fx + r.range(-6, 6))},${n(y - fh)} Q${n(fx + w * 0.1)},${n(y - fh * 0.6)} ${n(fx + w * 0.15)},${n(y)} Z" fill="${r.pick(["#f3a34a", "#f6c66a", "#e8763a"])}" opacity="0.85"/>`;
    }
    this.add(s);
    if (o.smoke !== false) this.smoke(x, y - w, { len: w * 4, dir: o.dir || 1, dark: true, w: w * 0.5 });
    return this;
  }
  chimney(x, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#77716b", o.depth), w = o.w || 18;
    this.add(`<polygon points="${n(x - w / 2)},${y} ${n(x + w / 2)},${y} ${n(x + w * 0.35)},${n(y - h)} ${n(x - w * 0.35)},${n(y - h)}" fill="${col}"/>`);
    if (o.smoke !== false) this.smoke(x, y - h, { len: o.smokeLen || 220, dir: o.dir || 1, dark: o.dark, opacity: o.opacity });
    return this;
  }
  factory(x, y, w, h, o) {
    o = o || {};
    const col = this.c(o.color || "#8a8178", o.depth), teeth = Math.max(2, Math.round(w / 50));
    let s = `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" fill="${col}"/>`;
    for (let i = 0; i < teeth; i++) s += `<polygon points="${n(x + i * w / teeth)},${n(y - h)} ${n(x + (i + 1) * w / teeth)},${n(y - h)} ${n(x + (i + 1) * w / teeth)},${n(y - h - 26)}" fill="${shade(col, -0.08)}"/>`;
    if (this.m.lit || o.lit) for (let i = 0; i < teeth * 2; i++) s += `<rect x="${n(x + 8 + i * w / (teeth * 2))}" y="${n(y - h * 0.55)}" width="10" height="14" fill="${this.m.light}" opacity="0.7"/>`;
    this.add(s);
    (o.chimneys || [w * 0.8]).forEach((cx) => this.chimney(x + cx, y - h, o.chimH || 120, { depth: o.depth, dark: o.dark, smoke: o.smoke }));
    return this;
  }
  tanks(x, y, count, o) {
    o = o || {};
    const col = this.c(o.color || "#d7d3c9", o.depth), w = o.w || 70, h = o.h || 46;
    let s = "";
    for (let i = 0; i < count; i++) {
      const tx = x + i * (w + 16);
      s += `<rect x="${tx}" y="${y - h}" width="${w}" height="${h}" fill="${col}"/><ellipse cx="${tx + w / 2}" cy="${y - h}" rx="${w / 2}" ry="7" fill="${shade(col, 0.08)}"/><line x1="${tx}" y1="${y - h * 0.5}" x2="${tx + w}" y2="${y - h * 0.5}" stroke="${shade(col, -0.12)}" stroke-width="2"/>`;
    }
    return this.add(s);
  }
  refinery(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c("#8d8f8c", d);
    this.tanks(x - 260 * s, y, 3, { depth: d, w: 70 * s, h: 46 * s });
    [[-20, 190], [20, 230], [60, 170], [100, 140]].forEach(([dx, h]) => this.rect(x + dx * s - 9 * s, y - h * s, 18 * s, h * s, col));
    this.add(`<path d="M${n(x - 40 * s)},${n(y - 120 * s)} L${n(x + 120 * s)},${n(y - 120 * s)} M${n(x - 40 * s)},${n(y - 80 * s)} L${n(x + 140 * s)},${n(y - 80 * s)}" stroke="${col}" stroke-width="${n(5 * s)}"/>`);
    this.rect(x + 180 * s, y - 220 * s, 8 * s, 220 * s, col);
    if (o.flare !== false) this.flare(x + 184 * s, y - 220 * s, 1.1 * s);
    if (this.m.lit || o.lit) for (let i = 0; i < 18; i++) this.add(`<circle cx="${n(x + this.r.range(-60, 130) * s)}" cy="${n(y - this.r.range(20, 200) * s)}" r="${n(2.2 * s)}" fill="${this.m.light}"/>`);
    if (o.smoke) this.smoke(x + 20 * s, y - 230 * s, { len: 260, dir: o.dir || 1 });
    return this;
  }
  flare(x, y, s) {
    s = s || 1;
    this.glow(x, y - 20 * s, 90 * s, "#ff9a4a", 0.55);
    return this.add(`<path d="M${n(x - 10 * s)},${n(y)} Q${n(x - 12 * s)},${n(y - 30 * s)} ${n(x)},${n(y - 60 * s)} Q${n(x + 14 * s)},${n(y - 30 * s)} ${n(x + 10 * s)},${n(y)} Z" fill="#f5a443"/><path d="M${n(x - 5 * s)},${n(y)} Q${n(x - 6 * s)},${n(y - 18 * s)} ${n(x)},${n(y - 34 * s)} Q${n(x + 7 * s)},${n(y - 18 * s)} ${n(x + 5 * s)},${n(y)} Z" fill="#fde6a0"/>`);
  }
  rig(x, y, s, o) {
    o = o || {};
    const d = o.depth || 0, col = this.c("#7d7f7c", d), dark = this.c("#4f514f", d);
    let g = "";
    [-80, -30, 30, 80].forEach((lx) => g += `<rect x="${n(x + lx * s - 5 * s)}" y="${n(y - 70 * s)}" width="${n(10 * s)}" height="${n(80 * s)}" fill="${dark}"/>`);
    g += `<rect x="${n(x - 110 * s)}" y="${n(y - 100 * s)}" width="${n(220 * s)}" height="${n(30 * s)}" fill="${col}"/><rect x="${n(x - 90 * s)}" y="${n(y - 140 * s)}" width="${n(100 * s)}" height="${n(40 * s)}" fill="${this.c("#c9c3b5", d)}"/>`;
    g += `<polygon points="${n(x + 30 * s)},${n(y - 100 * s)} ${n(x + 70 * s)},${n(y - 100 * s)} ${n(x + 50 * s)},${n(y - 250 * s)}" fill="none" stroke="${col}" stroke-width="${n(4 * s)}"/>`;
    this.add(g);
    if (o.flare !== false) { this.add(`<line x1="${n(x - 110 * s)}" y1="${n(y - 90 * s)}" x2="${n(x - 190 * s)}" y2="${n(y - 150 * s)}" stroke="${col}" stroke-width="${n(4 * s)}"/>`); this.flare(x - 190 * s, y - 150 * s, 0.8 * s); }
    return this;
  }
  crane(x, y, s, o) {
    // ship-to-shore gantry crane
    o = o || {};
    const d = o.depth || 0, col = this.c(o.color || "#c4573c", d);
    let g = `<rect x="${n(x - 40 * s)}" y="${n(y - 170 * s)}" width="${n(8 * s)}" height="${n(170 * s)}" fill="${col}"/><rect x="${n(x + 32 * s)}" y="${n(y - 170 * s)}" width="${n(8 * s)}" height="${n(170 * s)}" fill="${col}"/>`;
    g += `<rect x="${n(x - 60 * s)}" y="${n(y - 180 * s)}" width="${n((o.boom || 230) * s)}" height="${n(12 * s)}" fill="${col}"/><rect x="${n(x - 44 * s)}" y="${n(y - 205 * s)}" width="${n(90 * s)}" height="${n(25 * s)}" fill="${shade(col, -0.1)}"/>`;
    g += `<line x1="${n(x - 40 * s)}" y1="${n(y - 110 * s)}" x2="${n(x + 40 * s)}" y2="${n(y - 110 * s)}" stroke="${col}" stroke-width="${n(6 * s)}"/>`;
    if (this.m.lit) g += `<circle cx="${n(x)}" cy="${n(y - 200 * s)}" r="${n(4 * s)}" fill="${this.m.light}"/><circle cx="${n(x + 140 * s)}" cy="${n(y - 175 * s)}" r="${n(3 * s)}" fill="#ff6a4a"/>`;
    return this.add(g);
  }
  towerCrane(x, y, s, o) {
    o = o || {};
    const col = this.c(o.color || "#d4a43c", o.depth);
    return this.add(`<rect x="${n(x - 6 * s)}" y="${n(y - 300 * s)}" width="${n(12 * s)}" height="${n(300 * s)}" fill="${col}"/><rect x="${n(x - 80 * s)}" y="${n(y - 304 * s)}" width="${n(260 * s)}" height="${n(8 * s)}" fill="${col}"/><rect x="${n(x - 80 * s)}" y="${n(y - 300 * s)}" width="${n(30 * s)}" height="${n(20 * s)}" fill="${shade(col, -0.3)}"/><line x1="${n(x + 140 * s)}" y1="${n(y - 296 * s)}" x2="${n(x + 140 * s)}" y2="${n(y - 200 * s)}" stroke="${shade(col, -0.4)}" stroke-width="2"/>`);
  }
  containers(x, y, cols, rows, o) {
    o = o || {};
    const r = this.r, d = o.depth || 0, w = (o.w || 46), h = (o.h || 20);
    const pal = o.colors || ["#9b4b3c", "#4b6a8b", "#c09a4a", "#5d7d5a", "#8a8f94", "#7c4a5c", "#b3763f"];
    let s = "";
    for (let i = 0; i < cols; i++) for (let k = 0; k < rows; k++) if (r() > 0.08) s += `<rect x="${n(x + i * (w + 2))}" y="${n(y - (k + 1) * (h + 1))}" width="${w}" height="${h}" fill="${this.c(r.pick(pal), d)}"/>`;
    return this.add(s);
  }
  coils(x, y, cols, rows, o) {
    o = o || {};
    const rad = o.r || 16, col = this.c(o.color || "#8f9497", o.depth);
    let s = "";
    for (let k = 0; k < rows; k++) for (let i = 0; i < cols - k; i++) {
      const cx = x + i * rad * 2.1 + k * rad, cy = y - rad - k * rad * 1.8;
      s += `<circle cx="${n(cx)}" cy="${n(cy)}" r="${rad}" fill="${col}"/><circle cx="${n(cx)}" cy="${n(cy)}" r="${n(rad * 0.4)}" fill="${shade(col, -0.35)}"/>`;
    }
    return this.add(s);
  }
  furnace(x, y, s, o) {
    o = o || {};
    const col = this.c("#5a5551", o.depth);
    this.add(`<polygon points="${n(x - 40 * s)},${y} ${n(x + 40 * s)},${y} ${n(x + 26 * s)},${n(y - 220 * s)} ${n(x - 26 * s)},${n(y - 220 * s)}" fill="${col}"/><rect x="${n(x - 34 * s)}" y="${n(y - 260 * s)}" width="${n(68 * s)}" height="${n(40 * s)}" fill="${shade(col, 0.08)}"/>`);
    this.glow(x, y - 40 * s, 120 * s, "#ff8a3c", 0.65);
    this.add(`<rect x="${n(x - 18 * s)}" y="${n(y - 60 * s)}" width="${n(36 * s)}" height="${n(40 * s)}" fill="#f6a24a"/>`);
    if (o.smoke !== false) this.smoke(x, y - 260 * s, { len: 300 * s, dir: o.dir || 1 });
    return this;
  }
  pipes(x0, x1, y, o) {
    o = o || {};
    const col = this.c(o.color || "#9aa0a4", o.depth), r = o.r || 14;
    let s = "";
    for (let i = 0; i < (o.count || 3); i++) s += `<rect x="${x0}" y="${n(y - (i + 1) * (r * 2 + 6))}" width="${x1 - x0}" height="${r * 2}" rx="${r}" fill="${shade(col, i * 0.04)}"/>`;
    if (o.risers) o.risers.forEach((rx) => s += `<rect x="${rx - r}" y="${n(y - 160)}" width="${r * 2}" height="160" fill="${col}"/><path d="M${rx - r},${y - 160} A${r},${r} 0 0 1 ${rx + r},${y - 160}" fill="${col}"/><rect x="${rx - r - 8}" y="${n(y - 90)}" width="${r * 2 + 16}" height="10" fill="${shade(col, -0.25)}"/>`);
    return this.add(s);
  }
  pipeline(points, o) {
    o = o || {};
    return this.add(`<polyline points="${pts(points)}" fill="none" stroke="${this.c(o.color || "#8b8f92", o.depth)}" stroke-width="${o.w || 12}" stroke-linejoin="round"/>`);
  }
  pylons(x0, x1, y, o) {
    o = o || {};
    const col = this.c(o.color || "#5f6366", o.depth), h = o.h || 160, gap = o.gap || 320;
    let s = "", prev = null;
    for (let x = x0; x <= x1; x += gap) {
      s += `<polygon points="${x - 24},${y} ${x + 24},${y} ${x + 6},${y - h} ${x - 6},${y - h}" fill="none" stroke="${col}" stroke-width="3"/><line x1="${x - 34}" y1="${y - h * 0.8}" x2="${x + 34}" y2="${y - h * 0.8}" stroke="${col}" stroke-width="3"/>`;
      if (prev !== null) s += `<path d="M${prev - 34},${y - h * 0.8} Q${(prev + x) / 2},${y - h * 0.6} ${x - 34},${y - h * 0.8} M${prev + 34},${y - h * 0.8} Q${(prev + x) / 2},${y - h * 0.6} ${x + 34},${y - h * 0.8}" stroke="${col}" fill="none" stroke-width="1.5"/>`;
      prev = x;
    }
    return this.add(s);
  }
  turbines(x0, x1, y, o) {
    o = o || {};
    const col = this.c("#eceae4", o.depth), h = o.h || 200, gap = o.gap || 200, r = this.r;
    let s = "";
    for (let x = x0; x <= x1; x += gap) {
      const a = r.range(0, 120);
      s += `<polygon points="${x - 5},${y} ${x + 5},${y} ${x + 2},${y - h} ${x - 2},${y - h}" fill="${col}"/>`;
      for (let k = 0; k < 3; k++) s += `<rect x="${x - 3}" y="${y - h - h * 0.45}" width="6" height="${n(h * 0.45)}" rx="3" fill="${col}" transform="rotate(${n(a + k * 120)},${x},${y - h})"/>`;
    }
    return this.add(s);
  }
  solar(x0, x1, y0, y1, o) {
    o = o || {};
    const col = this.c("#3c4f6e", o.depth);
    let s = "";
    for (let y = y0; y < y1; y += (y1 - y0) / (o.rows || 6)) s += `<polygon points="${x0},${n(y)} ${x1},${n(y)} ${x1 - 10},${n(y + 12)} ${x0 - 10},${n(y + 12)}" fill="${col}"/>`;
    return this.add(s);
  }
  dish(x, y, s, o) {
    o = o || {};
    const col = this.c("#e7e5df", o.depth);
    return this.add(`<rect x="${n(x - 10 * s)}" y="${n(y - 90 * s)}" width="${n(20 * s)}" height="${n(90 * s)}" fill="${shade(col, -0.15)}"/><path d="M${n(x - 110 * s)},${n(y - 190 * s)} Q${n(x)},${n(y - 60 * s)} ${n(x + 110 * s)},${n(y - 190 * s)} Z" fill="${col}" transform="rotate(${o.tilt || -20},${x},${n(y - 120 * s)})"/><line x1="${x}" y1="${n(y - 110 * s)}" x2="${n(x - 30 * s)}" y2="${n(y - 210 * s)}" stroke="${shade(col, -0.3)}" stroke-width="${n(3 * s)}"/>`);
  }
  dam(x0, x1, y, h, o) {
    o = o || {};
    const col = this.c(o.color || "#b7b2a8", o.depth);
    return this.add(`<path d="M${x0},${y} Q${(x0 + x1) / 2},${y + 30} ${x1},${y} L${x1 - 20},${y - h} Q${(x0 + x1) / 2},${y - h + 24} ${x0 + 20},${y - h} Z" fill="${col}"/><path d="M${x0 + 20},${y - h} Q${(x0 + x1) / 2},${y - h + 24} ${x1 - 20},${y - h}" stroke="${shade(col, -0.2)}" stroke-width="5" fill="none"/>`);
  }
  mine(x, y, w, o) {
    o = o || {};
    const col = this.c(this.land(o.color || "red"), o.depth);
    let s = "";
    for (let i = 0; i < 6; i++) {
      const ww = w * (1 - i * 0.14), hh = 18;
      s += `<ellipse cx="${x}" cy="${n(y + i * hh)}" rx="${n(ww / 2)}" ry="${n(ww / 7)}" fill="${shade(col, -0.05 * i)}" stroke="${shade(col, 0.15)}" stroke-width="3"/>`;
    }
    return this.add(s);
  }
  silo(x, y, s, o) {
    o = o || {};
    const col = this.c(o.color || "#cfcac0", o.depth);
    return this.add(`<rect x="${n(x - 22 * s)}" y="${n(y - 140 * s)}" width="${n(44 * s)}" height="${n(140 * s)}" fill="${col}"/><path d="M${n(x - 22 * s)},${n(y - 140 * s)} A${n(22 * s)},${n(14 * s)} 0 0 1 ${n(x + 22 * s)},${n(y - 140 * s)} Z" fill="${shade(col, -0.08)}"/>`);
  }
  bridge(x0, x1, y, o) {
    o = o || {};
    const col = this.c(o.color || "#6d7377", o.depth), h = o.h || 120;
    let s = `<rect x="${x0}" y="${y - 10}" width="${x1 - x0}" height="12" fill="${col}"/>`;
    if (o.type === "arch") {
      s += `<path d="M${x0 + 40},${y} Q${(x0 + x1) / 2},${y - h * 2} ${x1 - 40},${y}" stroke="${col}" stroke-width="10" fill="none"/>`;
      for (let x = x0 + 80; x < x1 - 60; x += 40) { const t = (x - x0 - 40) / (x1 - x0 - 80); s += `<line x1="${x}" y1="${y - 10}" x2="${x}" y2="${n(y - 4 * h * t * (1 - t) * 1)}" stroke="${col}" stroke-width="2"/>`; }
    } else if (o.type === "suspension") {
      const t1 = x0 + (x1 - x0) * 0.25, t2 = x0 + (x1 - x0) * 0.75;
      s += `<rect x="${t1 - 8}" y="${y - h}" width="16" height="${h}" fill="${col}"/><rect x="${t2 - 8}" y="${y - h}" width="16" height="${h}" fill="${col}"/><path d="M${x0},${y - 20} Q${(x0 + t1) / 2},${y - h * 0.4} ${t1},${y - h} Q${(t1 + t2) / 2},${y - h * 0.15} ${t2},${y - h} Q${(t2 + x1) / 2},${y - h * 0.4} ${x1},${y - 20}" stroke="${col}" stroke-width="3" fill="none"/>`;
    } else {
      for (let x = x0 + 60; x < x1; x += o.span || 160) s += `<rect x="${x - 8}" y="${y}" width="16" height="${o.pier || 120}" fill="${col}"/>`;
    }
    return this.add(s);
  }

  /* ---------- interiors ---------- */
  room(o) {
    o = o || {};
    const wall = o.wall || "#b9ad9a", floorY = o.floorY || 640;
    this.rect(0, 0, W, floorY, wall);
    this.rect(0, floorY, W, H - floorY, o.floor || shade(wall, -0.35));
    if (o.panels) for (let x = 0; x < W; x += o.panels) this.rect(x, 0, 3, floorY, shade(wall, -0.08));
    if (o.windows) o.windows.forEach(([x, y, w, h]) => {
      const g = this.id_("win");
      this.def(`<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${o.outsideTop || this.m.top}"/><stop offset="1" stop-color="${o.outsideBottom || this.m.bottom}"/></linearGradient>`);
      this.add(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${g})"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${shade(wall, -0.3)}" stroke-width="10"/><line x1="${x + w / 2}" y1="${y}" x2="${x + w / 2}" y2="${y + h}" stroke="${shade(wall, -0.3)}" stroke-width="6"/>`);
      if (o.beams !== false) this.add(`<polygon points="${x},${y + h} ${x + w},${y + h} ${x + w + 260},${floorY + 120} ${x + 160},${floorY + 120}" fill="${this.m.light}" opacity="0.12"/>`);
    });
    if (o.curtains) o.windows.forEach(([x, y, w, h]) => this.add(`<rect x="${x - 50}" y="${y - 20}" width="60" height="${h + 60}" fill="${o.curtains}"/><rect x="${x + w - 10}" y="${y - 20}" width="60" height="${h + 60}" fill="${o.curtains}"/>`));
    return this;
  }
  table(x, y, w, o) {
    o = o || {};
    const col = o.color || "#5b4636", top = o.top || shade(col, 0.1);
    let s = `<polygon points="${x - w / 2},${y} ${x + w / 2},${y} ${x + w / 2 - (o.persp || 60)},${y - (o.depthPx || 60)} ${x - w / 2 + (o.persp || 60)},${y - (o.depthPx || 60)}" fill="${top}"/><rect x="${x - w / 2}" y="${y}" width="${w}" height="14" fill="${col}"/>`;
    if (o.legs !== false) s += `<rect x="${x - w / 2 + 10}" y="${y}" width="12" height="${o.legH || 90}" fill="${col}"/><rect x="${x + w / 2 - 22}" y="${y}" width="12" height="${o.legH || 90}" fill="${col}"/>`;
    return this.add(s);
  }
  chairs(x0, x1, y, o) {
    o = o || {};
    const col = o.color || "#3e3a3a", gap = o.gap || 80, h = o.h || 90;
    let s = "";
    for (let x = x0; x <= x1; x += gap) s += `<rect x="${x - 18}" y="${y - h}" width="36" height="${h * 0.65}" rx="6" fill="${col}"/><rect x="${x - 22}" y="${y - h * 0.4}" width="44" height="10" fill="${shade(col, 0.1)}"/><rect x="${x - 18}" y="${y - h * 0.35}" width="5" height="${h * 0.35}" fill="${col}"/><rect x="${x + 13}" y="${y - h * 0.35}" width="5" height="${h * 0.35}" fill="${col}"/>`;
    return this.add(s);
  }
  chandelier(x, y, s) {
    s = s || 1;
    this.glow(x, y + 30 * s, 140 * s, "#ffe2a6", 0.35);
    let g = `<line x1="${x}" y1="0" x2="${x}" y2="${y}" stroke="#8a7650" stroke-width="2"/><ellipse cx="${x}" cy="${y + 20 * s}" rx="${70 * s}" ry="${14 * s}" fill="none" stroke="#c9a85a" stroke-width="${3 * s}"/>`;
    for (let i = -3; i <= 3; i++) g += `<circle cx="${x + i * 20 * s}" cy="${y + 12 * s}" r="${4 * s}" fill="#fff0c4"/><line x1="${x + i * 20 * s}" y1="${y + 16 * s}" x2="${x + i * 18 * s}" y2="${y + 50 * s}" stroke="#d9c79a" stroke-width="2" opacity="0.6"/>`;
    return this.add(g);
  }
  screen(x, y, w, h, o) {
    o = o || {};
    this.glow(x + w / 2, y + h / 2, Math.max(w, h), o.glow || "#9fd0ff", 0.35);
    return this.add(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#1d2430"/><rect x="${x + 4}" y="${y + 4}" width="${w - 8}" height="${h - 8}" fill="${o.color || "#6fa6c9"}" opacity="0.85"/>`);
  }
  crate(x, y, w, h, o) {
    o = o || {};
    const col = o.color || "#6f6a4a";
    return this.add(`<rect x="${x}" y="${y - h}" width="${w}" height="${h}" fill="${col}"/><rect x="${x}" y="${y - h}" width="${w}" height="${h}" fill="none" stroke="${shade(col, -0.3)}" stroke-width="3"/><line x1="${x}" y1="${y - h / 2}" x2="${x + w}" y2="${y - h / 2}" stroke="${shade(col, -0.3)}" stroke-width="2"/>`);
  }
  papers(x, y, count, o) {
    o = o || {};
    const r = this.r;
    let s = "";
    for (let i = 0; i < count; i++) s += `<rect x="${n(x + r.range(-60, 60))}" y="${n(y + r.range(-14, 6))}" width="${n(r.range(34, 46))}" height="${n(r.range(10, 16))}" fill="${o.color || "#efe9dc"}" transform="rotate(${n(r.range(-12, 12))},${x},${y})"/>`;
    return this.add(s);
  }

  /* ---------- weather and atmosphere ---------- */
  rain(o) {
    o = o || {};
    const r = this.r;
    let s = "";
    for (let i = 0; i < (o.count || 260); i++) { const x = r() * W, y = r() * H; s += `<line x1="${n(x)}" y1="${n(y)}" x2="${n(x - 6)}" y2="${n(y + 24)}" stroke="#dfe6ec" stroke-width="1.2" opacity="0.35"/>`; }
    return this.add(s);
  }
  snowfall(o) {
    o = o || {};
    const r = this.r;
    let s = "";
    for (let i = 0; i < (o.count == null ? 220 : o.count); i++) s += `<circle cx="${n(r() * W)}" cy="${n(r() * H)}" r="${n(r.range(1, 3))}" fill="#ffffff" opacity="${n(r.range(0.4, 0.85))}"/>`;
    return this.add(s);
  }
  birds(x, y, count, o) {
    o = o || {};
    const r = this.r;
    let s = "";
    for (let i = 0; i < count; i++) { const bx = x + r.range(-120, 120), by = y + r.range(-40, 40), w = r.range(6, 12); s += `<path d="M${n(bx - w)},${n(by)} Q${n(bx - w / 2)},${n(by - w / 2)} ${n(bx)},${n(by)} Q${n(bx + w / 2)},${n(by - w / 2)} ${n(bx + w)},${n(by)}" stroke="${o.color || this.m.ink}" stroke-width="1.6" fill="none" opacity="0.7"/>`; }
    return this.add(s);
  }
  beam(x, y, angle, o) {
    o = o || {};
    const len = o.len || 900, wdt = o.w || 60, a = angle * Math.PI / 180;
    const tx = x + Math.cos(a) * len, ty = y + Math.sin(a) * len, px = -Math.sin(a) * wdt, py = Math.cos(a) * wdt;
    return this.add(`<polygon points="${x},${y} ${n(tx + px)},${n(ty + py)} ${n(tx - px)},${n(ty - py)}" fill="${o.color || this.m.light}" opacity="${o.opacity || 0.15}"/>`);
  }
  /* distant explosion glow on the horizon (no gore: light and smoke only) */
  flash(x, y, o) {
    o = o || {};
    this.glow(x, y, o.r || 160, o.color || "#ffb066", 0.7);
    return this.smoke(x, y - 20, { len: o.len || 260, dir: o.dir || 1, dark: true, w: 40, rise: 1.2 });
  }

  /* ---------- finish ---------- */
  svg() {
    const grain = "grain", rough = "rough", vig = "vig";
    const defs = this.defs.join("") +
      `<filter id="${rough}" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="${this.r.int(1, 999)}"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter>` +
      `<filter id="${grain}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="${this.r.int(1, 999)}" result="t"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 0.55"/></feComponentTransfer></filter>` +
      `<filter id="paper" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 0.35"/></feComponentTransfer></filter>` +
      `<radialGradient id="${vig}" cx="0.5" cy="0.5" r="0.75"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.38"/></radialGradient>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${defs}</defs>` +
      `<g>${this.layers.join("")}</g><g filter="url(#${rough})">${this.layers.join("")}</g>` +
      `<rect width="${W}" height="${H}" filter="url(#paper)" style="mix-blend-mode:soft-light" opacity="0.8"/>` +
      `<rect width="${W}" height="${H}" filter="url(#${grain})" style="mix-blend-mode:multiply" opacity="0.28"/>` +
      `<rect width="${W}" height="${H}" fill="url(#${vig})"/></svg>`;
  }
}

module.exports = { Scene, W, H, mix, shade, rng, MOODS, LAND };
require("./more");
