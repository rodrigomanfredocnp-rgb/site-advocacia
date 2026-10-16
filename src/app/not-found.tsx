import Link from "next/link";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="flex-1">
        <PageHero
          title="Esta página não foi encontrada."
          lead="O endereço pode ter mudado. Volte para o início para ver as áreas de atuação ou peça informações pelo WhatsApp."
          size="sm"
          actions={
            <>
              <WhatsAppButton source="404" variant="gold" />
              <Link href="/" className="btn btn-plain btn-outline-light">
                Ir para o início
              </Link>
            </>
          }
        />
        <div className="h-16 md:h-24" />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
