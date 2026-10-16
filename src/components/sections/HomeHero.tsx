import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/content/site";

/**
 * Abertura da home (revisão do titular, seção 8):
 * - celular: nome e OAB à esquerda com o retrato pequeno à direita; depois o título em largura total,
 *   o texto, o botão e o link para as áreas;
 * - computador: duas colunas, texto à esquerda e retrato à direita (~42% da largura), com nome e OAB
 *   logo abaixo da foto, como texto real (sem cartão flutuante).
 * Um único retrato no HTML: o grid muda a posição dos blocos. Com o texto do celular muito ampliado
 * (consulta de contêiner em em), retrato, nome e título ficam um embaixo do outro.
 */
export function HomeHero() {
  return (
    <section aria-labelledby="titulo" className="bg-glow on-ink @container text-text-inverse" data-hero>
      <div className="container-site grid grid-cols-[minmax(0,1fr)_auto] gap-x-5 gap-y-7 pt-[calc(4.75rem+1.75rem)] pb-14 [grid-template-areas:'ident_photo'_'main_main'] lg:grid-cols-[1.25fr_0.95fr] lg:gap-x-16 lg:gap-y-5 lg:pt-[calc(5.5rem+3.5rem)] lg:pb-20 lg:[grid-template-areas:'main_photo'_'main_ident'] @max-[14em]:grid-cols-1 @max-[14em]:[grid-template-areas:'photo'_'ident'_'main']">
        <p className="flex flex-col justify-center self-center [grid-area:ident] lg:self-start lg:border-l lg:border-gold/60 lg:pl-4">
          <span className="font-display text-[1.45rem] leading-tight lg:text-[1.6rem]">{site.lawyer.shortName}</span>
          <span className="mt-1 text-[0.98rem] text-text-inverse-muted">
            Advogado
            <span className="max-sm:hidden"> · </span>
            <br className="sm:hidden" />
            {site.lawyer.oab}
          </span>
        </p>

        <figure className="photo-in w-[120px] [grid-area:photo] sm:w-[144px] lg:w-full lg:max-w-[30rem] lg:justify-self-end">
          <Photo
            name="jhonny-serio"
            alt="Jhonny Henrique Guollo Cardoso, advogado"
            focus="50% 12%"
            sizes="(min-width: 1024px) 30rem, 9rem"
            priority
            className="aspect-[4/5] rounded-sm"
          />
        </figure>

        <div className="flex min-w-0 flex-col items-start [grid-area:main] lg:self-center">
          <h1 id="titulo" className="accent max-w-[15ch] text-[2.05rem] leading-[1.08] sm:text-display-xl">
            Advocacia cível, trabalhista e previdenciária
          </h1>
          <p style={{ "--d": 0 } as CSSProperties} className="load-in mt-6 max-w-[46ch] text-lead text-text-inverse-muted">
            Atendimento presencial em Campo Novo do Parecis/MT e online em todo o Brasil. Atuação nacional nas áreas trabalhista e
            previdenciária, com análise individual de cada demanda.
          </p>
          <div style={{ "--d": 1 } as CSSProperties} className="load-in mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
            <WhatsAppButton source="topo-home" variant="gold">
              Informações pelo WhatsApp
            </WhatsAppButton>
            <Link href="/#areas" className="link-arrow text-[1.06rem] text-text-inverse transition-colors hover:text-gold-light">
              Conheça as áreas de atuação
              <ArrowRight className="size-5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
