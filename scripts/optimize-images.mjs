// Gera as versões WebP responsivas das fotos usadas no site.
// Uso: npm run images
//
// Cada foto vira public/img/<nome>-<largura>.webp para todas as larguras de
// IMAGE_WIDTHS. O loader em src/lib/image-loader.ts aponta o next/image para
// esses arquivos, o que permite usar <Image> no export estático.

import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { IMAGE_WIDTHS } from "../src/lib/image-widths.mjs";

const SRC = "identidade-visual/fotos-advogado";
const OUT = "public/img";

/** crop (opcional): recorte em pixels da imagem original, ex. { left, top, width, height }. */
const PHOTOS = [
  { file: "busto-serio-bracos-cruzados.jpg", name: "jhonny-serio" },
  { file: "busto-sorrindo-bracos-cruzados.jpg", name: "jhonny-sorrindo" },
  { file: "busto-sorrindo-mao-lapela.jpg", name: "jhonny-lapela" },
];

await mkdir(OUT, { recursive: true });

for (const photo of PHOTOS) {
  const input = sharp(path.join(SRC, photo.file)).rotate();
  const base = photo.crop ? input.extract(photo.crop) : input;
  const buffer = await base.toBuffer();
  const { width: originalWidth } = await sharp(buffer).metadata();

  for (const width of IMAGE_WIDTHS) {
    await sharp(buffer)
      .resize({ width: Math.min(width, originalWidth), withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(path.join(OUT, `${photo.name}-${width}.webp`));
  }
  console.log(`✓ ${photo.name}`);
}
