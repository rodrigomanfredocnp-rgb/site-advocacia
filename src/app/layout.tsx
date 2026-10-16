import type { Metadata, Viewport } from "next";
import { Figtree, Marcellus } from "next/font/google";
import { BrandDefs } from "@/components/brand/Logo";
import { Analytics } from "@/components/layout/Analytics";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { site } from "@/content/site";
import { sharedOpenGraph } from "@/lib/metadata";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jhonny Cardoso Advogado | Cível, Trabalhista e Previdenciário",
    template: "%s | Jhonny Cardoso Advogado",
  },
  description:
    "Advocacia cível, trabalhista e previdenciária. Atendimento presencial em Campo Novo do Parecis/MT e online em todo o Brasil.",
  applicationName: site.name,
  authors: [{ name: site.lawyer.fullName }],
  creator: site.lawyer.fullName,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: sharedOpenGraph,
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e0d0b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* Marca o <html> com .js antes da pintura: só então as animações de rolagem escondem o conteúdo. */
const JS_FLAG = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${marcellus.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <BrandDefs />
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded-full bg-ink px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Pular para o conteúdo
        </a>
        {children}
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
