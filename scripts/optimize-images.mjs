// Gera as versões WebP responsivas das fotos usadas no site.
// Uso: npm run images
//
// Cada foto vira public/img/<nome>-<largura>.webp para todas as larguras de
// IMAGE_WIDTHS. O loader em src/lib/image-loader.ts aponta o next/image para
// esses arquivos, o que permite usar <Image> no export estático.

import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { IMAGE_WIDTHS } from "../src/lib/image-widths.mjs";

const OUT = "public/img";

/** Fotos do advogado (originais do ensaio). `crop` recorta em pixels da imagem original. */
const LAWYER = [
  { file: "identidade-visual/fotos-advogado/busto-serio-bracos-cruzados.jpg", name: "jhonny-serio" },
  { file: "identidade-visual/fotos-advogado/busto-sorrindo-bracos-cruzados.jpg", name: "jhonny-sorrindo" },
  // Em pé (página Sobre), sem as plantas da borda.
  {
    file: "identidade-visual/fotos-advogado/corpo-inteiro-serio-mao-lapela.jpg",
    name: "jhonny-corpo",
    crop: { left: 300, top: 0, width: 1000, height: 1333 },
  },
];

/**
 * Banco de imagens (Unsplash, licença livre): uma foto por tema, com o mesmo nome do slug da landing.
 * Créditos em identidade-visual/banco-de-imagens/CREDITOS.md.
 */
const STOCK_DIR = "identidade-visual/banco-de-imagens";
const STOCK = (await readdir(STOCK_DIR))
  .filter((f) => f.endsWith(".jpg"))
  .map((f) => ({ file: path.join(STOCK_DIR, f), name: `tema-${f.replace(/\.jpg$/, "")}`, stock: true }));

await mkdir(OUT, { recursive: true });

for (const photo of [...LAWYER, ...STOCK]) {
  let image = sharp(photo.file).rotate();
  if (photo.crop) image = image.extract(photo.crop);
  // Tom único para o banco de imagens: cores um pouco mais contidas, para conviver com a paleta da marca.
  if (photo.stock) image = image.modulate({ saturation: 0.88 });
  const buffer = await image.toBuffer();
  const { width: originalWidth } = await sharp(buffer).metadata();

  for (const width of IMAGE_WIDTHS) {
    await sharp(buffer)
      .resize({ width: Math.min(width, originalWidth), withoutEnlargement: true })
      .webp({ quality: 76, effort: 6 })
      .toFile(path.join(OUT, `${photo.name}-${width}.webp`));
  }
  console.log(`✓ ${photo.name}`);
}
