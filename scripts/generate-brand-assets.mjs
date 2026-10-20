// Gera favicon, ícones de app e a imagem de compartilhamento (Open Graph)
// a partir do vetor da logo e das fotos. Uso: npm run brand-assets
//
// Saídas:
//   src/app/icon.png        512×512 (favicon moderno)
//   src/app/apple-icon.png  180×180
//   src/app/favicon.ico     32×32
//   public/og.jpg           1200×630 (prévia no WhatsApp, Facebook, LinkedIn)
//   public/brand/*.svg      símbolo, nome e logo completa em dourado (usados pelo site como <img>: o navegador
//                           baixa uma vez e guarda, em vez de repetir ~45 KB de vetor em cada página)

import { mkdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const paths = await readFile("src/components/brand/paths.ts", "utf8");
const pick = (name) => JSON.parse(paths.match(new RegExp(`export const ${name} = ([^;]+);`))[1].replace(/ as const$/, ""));
const SYMBOL = pick("SYMBOL_PATHS");
const NAME = pick("NAME_PATH");
const SUB = pick("SUBLINE_PATH");
const RULES = pick("SUBLINE_RULES_PATH");

const INK = "#100f0d";
const gradient = `<linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#f3dc86"/><stop offset="0.38" stop-color="#d8b257"/>
  <stop offset="0.62" stop-color="#b38a35"/><stop offset="1" stop-color="#e9c96a"/></linearGradient>`;
const symbolPaths = SYMBOL.map((d) => `<path d="${d}"/>`).join("");

/** Símbolo dourado centralizado num quadrado preto. */
function iconSvg(size, padding) {
  // viewBox do símbolo: 270 213 180 194
  const inner = size - padding * 2;
  const scale = inner / 194;
  const w = 180 * scale;
  const x = (size - w) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>${gradient}</defs>
  <rect width="${size}" height="${size}" fill="${INK}"/>
  <g transform="translate(${x} ${padding}) scale(${scale}) translate(-270 -213)" fill="url(#g)" fill-rule="evenodd">${symbolPaths}</g>
</svg>`;
}

await sharp(Buffer.from(iconSvg(512, 64)))
  .png()
  .toFile("src/app/icon.png");
await sharp(Buffer.from(iconSvg(180, 22)))
  .png()
  .toFile("src/app/apple-icon.png");

// favicon.ico com PNG embutido de 32×32 (formato aceito por todos os navegadores atuais).
const png32 = await sharp(Buffer.from(iconSvg(32, 3)))
  .png()
  .toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt8(0, 8);
header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18);
await writeFile("src/app/favicon.ico", Buffer.concat([header, png32]));

// Imagem de compartilhamento: logo completa à esquerda, retrato à direita.
const W = 1200;
const H = 630;
const photoW = 470;
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W - photoW}" height="${H}" viewBox="0 0 ${W - photoW} ${H}">
  <defs>${gradient}
    <radialGradient id="glow" cx="0.2" cy="0.9" r="0.9"><stop offset="0" stop-color="#6b1a2a" stop-opacity="0.35"/><stop offset="1" stop-color="#6b1a2a" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="${INK}"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <g transform="translate(${(W - photoW - 484 * 1.1) / 2} 120) scale(1.1) translate(-118 -211)" fill="url(#g)" fill-rule="evenodd">
    ${symbolPaths}<path d="${NAME}"/><path d="${SUB}"/><path d="${RULES}"/>
  </g>
  <text x="${(W - photoW) / 2}" y="${H - 92}" text-anchor="middle" fill="#d8b257" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" letter-spacing="4">CÍVEL · TRABALHISTA · PREVIDENCIÁRIO</text>
  <text x="${(W - photoW) / 2}" y="${H - 62}" text-anchor="middle" fill="#b5ac9e" font-family="DejaVu Sans, Arial, sans-serif" font-size="15" letter-spacing="3">CAMPO NOVO DO PARECIS · MT · PRESENCIAL E ONLINE</text>
</svg>`;

const left = await sharp(Buffer.from(logoSvg)).png().toBuffer();
const photo = await sharp("identidade-visual/fotos-advogado/busto-sorrindo-mao-lapela.jpg")
  .resize({ width: photoW, height: H, fit: "cover", position: "top" })
  .toBuffer();
const frame = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect x="${W - photoW}" y="0" width="2" height="${H}" fill="#c9a24b"/></svg>`,
);

await sharp({ create: { width: W, height: H, channels: 3, background: INK } })
  .composite([
    { input: left, left: 0, top: 0 },
    { input: photo, left: W - photoW, top: 0 },
    { input: frame, left: 0, top: 0 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile("public/og.jpg");

// Logos em SVG para o site, com o degradê dourado da marca.
const VIEWBOX = { symbol: pick("SYMBOL_VIEWBOX"), name: pick("NAME_VIEWBOX"), full: pick("FULL_LOGO_VIEWBOX") };
const brandSvg = (viewBox, body) => {
  const [, , w, h] = viewBox.split(" ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${w}" height="${h}"><defs>${gradient.replace(/\n\s*/g, "")}</defs><g fill="url(#g)" fill-rule="evenodd">${body}</g></svg>`;
};
await mkdir("public/brand", { recursive: true });
await writeFile("public/brand/simbolo.svg", brandSvg(VIEWBOX.symbol, symbolPaths));
await writeFile("public/brand/nome.svg", brandSvg(VIEWBOX.name, `<path d="${NAME}"/>`));
await writeFile(
  "public/brand/logo.svg",
  brandSvg(VIEWBOX.full, `${symbolPaths}<path d="${NAME}"/><path d="${SUB}"/><path d="${RULES}"/>`),
);

console.log("✓ ícones, og.jpg e logos SVG gerados");
