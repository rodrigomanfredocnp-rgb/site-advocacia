import Image from "next/image";
import type { ReactNode } from "react";

export type PhotoName = "jhonny-serio" | "jhonny-sorrindo" | "jhonny-lapela";

const SIZES: Record<PhotoName, { width: number; height: number }> = {
  "jhonny-serio": { width: 1335, height: 2000 },
  "jhonny-sorrindo": { width: 1335, height: 2000 },
  "jhonny-lapela": { width: 1335, height: 2000 },
};

/**
 * Retrato na moldura dupla dourada, a mesma da logo.
 * O fundo escuro das fotos de estúdio vira parte da composição.
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
  /** Selos sobrepostos à foto. */
  children?: ReactNode;
}) {
  const { width, height } = SIZES[photo];
  return (
    <figure className={`relative ${className}`}>
      <div className="frame-double bg-ink">
        <div className={`relative overflow-hidden bg-ink ${aspect}`}>
          <Image
            src={`/img/${photo}`}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            preload={priority}
            loading={priority ? "eager" : "lazy"}
            className="absolute inset-0 size-full object-cover"
            style={{ objectPosition: position }}
          />
        </div>
      </div>
      {children}
    </figure>
  );
}
