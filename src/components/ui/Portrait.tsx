import Image from "next/image";
import type { ReactNode } from "react";

export type PhotoName = "jhonny-serio" | "jhonny-sorrindo" | "jhonny-lapela";

const SIZE = { width: 1335, height: 2000 };

/**
 * Retrato limpo, com um fio dourado deslocado atrás da foto
 * (lembrança discreta da moldura da logo).
 */
export function Portrait({
  photo,
  alt,
  sizes,
  priority = false,
  aspect = "aspect-[4/5]",
  position = "50% 18%",
  className = "",
  children,
}: {
  photo: PhotoName;
  alt: string;
  sizes: string;
  priority?: boolean;
  aspect?: string;
  position?: string;
  className?: string;
  /** Cartões sobrepostos à foto. */
  children?: ReactNode;
}) {
  return (
    <figure className={`relative ${className}`}>
      <span aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/70" />
      <div className={`relative overflow-hidden bg-ink ${aspect}`}>
        <Image
          src={`/img/${photo}`}
          alt={alt}
          width={SIZE.width}
          height={SIZE.height}
          sizes={sizes}
          preload={priority}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      {children}
    </figure>
  );
}
