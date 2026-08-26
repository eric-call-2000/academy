// Generates icon-192.png and icon-512.png (gradient tile + "</>" glyph)
// with zero dependencies. Run: node icons/gen-icons.js
const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

function crc32(buf) {
  let c, table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}
function png(size, pixelAt) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  let o = 0;
  for (let y = 0; y < size; y++) {
    raw[o++] = 0; // filter none
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = pixelAt(x, y);
      raw[o++] = r; raw[o++] = g; raw[o++] = b; raw[o++] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

// "</>" glyph on a 24x24 grid (1 = lit pixel)
const G = [
  "........................",
  "........................",
  "........................",
  "........................",
  "......X..........X......",
  ".....XX..........XX.....",
  "....XX....X.X.....XX....",
  "...XX.....X.X......XX...",
  "..XX......X.X.......XX..",
  ".XX.......X.X........XX.",
  "XX........X.X.........XX",
  "XX........X.X.........XX",
  ".XX.......X.X........XX.",
  "..XX......X.X.......XX..",
  "...XX.....X.X......XX...",
  "....XX....X.X.....XX....",
  ".....XX..........XX.....",
  "......X..........X......",
  "........................",
  "........................",
  "........................",
  "........................",
  "........................",
  "........................"
].map(r => r.split("").map(c => (c === "X" ? 1 : 0)));

// build a slash: overwrite middle column pattern with a diagonal
for (let y = 4; y < 20; y++) {
  for (let x = 0; x < 24; x++) if (G[y][x] === 1 && x > 8 && x < 15) G[y][x] = 0;
}
for (let y = 5; y <= 18; y++) {
  const x = Math.round(14.5 - (y - 5) * (5 / 13)); // diagonal from top-right to bottom-left
  if (G[y]) { G[y][x] = 1; if (G[y][x + 1] !== undefined) G[y][x + 1] = 1; }
}

function makeIcon(size) {
  const cell = size / 24;
  return png(size, (x, y) => {
    // vertical gradient sky -> indigo
    const t = y / size;
    const r = Math.round(14 + (99 - 14) * t);
    const g = Math.round(165 + (102 - 165) * t);
    const b = Math.round(233 + (241 - 233) * t);
    const gx = Math.floor(x / cell), gy = Math.floor(y / cell);
    const lit = G[gy] && G[gy][gx];
    if (lit) return [255, 255, 255, 255];
    return [r, g, b, 255];
  });
}

for (const size of [192, 512]) {
  fs.writeFileSync(path.join(__dirname, `icon-${size}.png`), makeIcon(size));
  console.log(`icon-${size}.png written`);
}
