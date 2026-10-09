import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Open Graph comum a todas as páginas. Quando uma página define o próprio
 * `openGraph`, o Next substitui o objeto inteiro do layout, por isso cada
 * página deve espalhar este objeto antes dos campos próprios.
 */
export const sharedOpenGraph = {
  type: "website",
  locale: "pt_BR",
  siteName: site.name,
  images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `Jhonny Cardoso, Advogado, ${site.lawyer.oab}` }],
} satisfies NonNullable<Metadata["openGraph"]>;
