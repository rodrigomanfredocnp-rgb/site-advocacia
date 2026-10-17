import Image from "next/image";

/**
 * Foto pré-otimizada (public/img/<name>-<largura>.webp, ver npm run images),
 * cobrindo uma caixa com proporção fixa. `focus` é o ponto que não pode ser cortado.
 */
export function Photo({
  name,
  alt,
  sizes,
  focus = "50% 50%",
  priority = false,
  className = "",
  imgClassName = "",
}: {
  name: string;
  alt: string;
  sizes: string;
  focus?: string;
  priority?: boolean;
  /** Classes da caixa (proporção, cantos etc.). */
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-ink-3 ${className}`}>
      <Image
        src={`/img/${name}`}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
        loading={priority ? "eager" : "lazy"}
        className={`object-cover ${imgClassName}`}
        style={{ objectPosition: focus }}
      />
    </div>
  );
}

/** Nome da foto do tema de uma landing. */
export const topicPhoto = (slug: string) => `tema-${slug}`;
