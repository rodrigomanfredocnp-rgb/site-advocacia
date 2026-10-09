import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LogoSymbol } from "@/components/brand/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function NotFound() {
  return (
    <>
      <SiteHeader variant="home" />
      <main id="conteudo" className="flex flex-1 items-center bg-white py-24">
        <div className="container-narrow flex flex-col items-center text-center">
          <LogoSymbol className="h-16 w-auto" />
          <p className="eyebrow mt-8">Erro 404</p>
          <h1 className="accent mt-4 text-display-lg">
            Esta página <em>não foi encontrada</em>
          </h1>
          <p className="mt-5 max-w-[46ch] text-text-muted">
            O endereço pode ter mudado. Volte para o início para ver todas as áreas de atuação, ou fale direto com o advogado.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn btn-outline">
              Ir para o início
            </Link>
            <WhatsAppButton source="404">Falar no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
