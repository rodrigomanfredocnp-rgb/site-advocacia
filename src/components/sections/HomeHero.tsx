import { ArrowDown } from "lucide-react";
import { LogoSymbol } from "@/components/brand/Logo";
import { Portrait } from "@/components/ui/Portrait";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/content/site";

export function HomeHero() {
  return (
    <section aria-labelledby="titulo" className="relative overflow-hidden bg-paper">
      <LogoSymbol
        tone="current"
        className="pointer-events-none absolute -bottom-28 -left-24 h-[38rem] w-auto text-gold/[0.05] max-lg:hidden"
      />

      <div className="container-site relative grid items-center gap-14 pt-12 pb-20 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-20 lg:pb-28">
        <div className="flex flex-col items-start">
          <p className="eyebrow animate-rise">Advocacia trabalhista e previdenciária</p>
          <h1 id="titulo" className="em-gold mt-6 animate-rise text-display-xl [animation-delay:80ms]">
            Quem trabalha tem direitos. <em>Aqui eles são levados a sério.</em>
          </h1>
          <p className="mt-7 max-w-[54ch] animate-rise text-[1.08rem] text-text-muted [animation-delay:160ms]">
            Rescisão, horas extras, gestante, acidente de trabalho, assédio, trabalho rural e benefícios do INSS. Atendimento
            direto com o {site.lawyer.displayName}, em Campo Novo do Parecis/MT e online.
          </p>
          <div className="mt-9 flex animate-rise flex-wrap items-center gap-4 [animation-delay:240ms]">
            <WhatsAppButton source="hero-home">Conversar com o advogado</WhatsAppButton>
            <a
              href="#atuacao"
              className="inline-flex min-h-14 items-center gap-2.5 rounded-[3px] border border-text/25 px-6 font-semibold text-text transition-colors hover:border-gold-deep hover:text-gold-deep"
            >
              Áreas de atuação
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <Portrait
          photo="jhonny-serio"
          alt="Dr. Jhonny Cardoso, advogado, de braços cruzados, terno escuro e gravata vermelha"
          sizes="(min-width: 1024px) 36vw, (min-width: 640px) 60vw, 90vw"
          priority
          className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:mr-0 lg:max-w-none"
        >
          <figcaption className="absolute right-4 -bottom-7 z-10 border border-ink-3 bg-ink px-5 py-4 text-left sm:-right-6">
            <span className="block font-display text-[1.25rem] leading-tight text-text-inverse">{site.lawyer.displayName}</span>
            <span className="mt-1 block font-caps text-[0.62rem] tracking-[0.2em] text-gold">ADVOGADO · {site.lawyer.oab}</span>
          </figcaption>
        </Portrait>
      </div>
    </section>
  );
}
