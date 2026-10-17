import { IMAGE_WIDTHS } from "./image-widths.mjs";

/**
 * Loader do next/image para o export estático.
 * Recebe `src` no formato "/img/<nome>" (sem extensão) e devolve o WebP
 * pré-gerado com a menor largura disponível que atenda ao pedido.
 */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const chosen = IMAGE_WIDTHS.find((w) => w >= width) ?? IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1];
  return `${src}-${chosen}.webp`;
}
