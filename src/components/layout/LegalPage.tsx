import type { ReactNode } from "react";
import { ViewTransition } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppFloat } from "@/components/ui/WhatsAppButton";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Estrutura das páginas institucionais de texto (privacidade, termos). */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero title={`${title}.`} lead={`Última atualização: ${updated}.`} size="sm" />
            <div className="container-site py-10 md:py-14">
              <article className="legal-prose mx-auto max-w-[48rem] bg-white px-5 py-12 text-[1.06rem] sm:px-10 md:px-14 md:py-16">
                {children}
              </article>
            </div>
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <WhatsAppFloat />
    </>
  );
}
