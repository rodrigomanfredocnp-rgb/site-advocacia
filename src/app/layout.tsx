import type { Metadata, Viewport } from "next";
import { Cinzel, EB_Garamond, Figtree } from "next/font/google";
import { BrandDefs } from "@/components/brand/Logo";
import { Analytics } from "@/components/layout/Analytics";
import { site } from "@/content/site";
import { sharedOpenGraph } from "@/lib/metadata";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-cinzel",
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
    default: "Jhonny Cardoso Advogado | Direito do Trabalho em Campo Novo do Parecis/MT",
    template: "%s | Jhonny Cardoso Advogado",
  },
  description:
    "Advocacia trabalhista e previdenciária em Campo Novo do Parecis/MT, com atendimento presencial e pelo WhatsApp. Rescisão, horas extras, gestante, acidente de trabalho, INSS e mais.",
  applicationName: site.name,
  authors: [{ name: site.lawyer.fullName }],
  creator: site.lawyer.fullName,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: sharedOpenGraph,
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#100f0d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${garamond.variable} ${cinzel.variable} ${figtree.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <BrandDefs />
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded bg-ink px-4 py-3 text-text-inverse focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Pular para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
