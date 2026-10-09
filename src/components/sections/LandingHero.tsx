import { Laptop, Lock, ShieldCheck } from "lucide-react";
import { LogoSymbol } from "@/components/brand/Logo";
import { Portrait } from "@/components/ui/Portrait";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { Landing } from "@/content/types";
import { site } from "@/content/site";
import { emphasis } from "@/lib/emphasis";

export function LandingHero({ landing }: { landing: Landing }) {
  const { hero } = landing;
  return (
    <section aria-labelledby="titulo" className="relative overflow-hidden bg-paper">
      {/* Monograma em marca d'água, como no papel timbrado do escritório. */}
      <LogoSymbol tone="current" className="pointer-events-none absolute -bottom-24 -left-28 h-[34rem] w-auto text-gold/[0.05] max-lg:hidden" />

      <div className="container-site relative grid items-center gap-12 pt-12 pb-16 md:pt-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pt-20 lg:pb-24">
        <div className="flex flex-col items-start">
          <p className="eyebrow animate-rise">{hero.eyebrow}</p>

          <h1 id="titulo" className="em-gold mt-6 text-display-xl text-text">
            <span className="block animate-rise [animation-delay:80ms]">{hero.question}</span>
            <span className="mt-3 block animate-rise text-display-md text-text-muted [animation-delay:160ms]">
              {emphasis(hero.answer)}
            </span>
          </h1>

          <p className="mt-7 max-w-[56ch] animate-rise text-[1.08rem] text-text-muted [animation-delay:240ms]">{hero.lead}</p>

          <div className="mt-9 animate-rise [animation-delay:320ms]">
            <WhatsAppButton source="hero" message={landing.whatsapp} note="Resposta do próprio advogado · Conversa sigilosa" />
          </div>

          <ul className="mt-10 flex w-full flex-wrap gap-x-7 gap-y-3 border-t border-paper-3 pt-6 text-[0.88rem] text-text-muted">
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold-deep" aria-hidden />
              {site.lawyer.oab}
            </li>
            <li className="flex items-center gap-2">
              <Laptop className="size-4 text-gold-deep" aria-hidden />
              Online ou presencial
            </li>
            <li className="flex items-center gap-2">
              <Lock className="size-4 text-gold-deep" aria-hidden />
              Sigilo profissional
            </li>
          </ul>
        </div>

        <Portrait
          photo="jhonny-lapela"
          alt="Dr. Jhonny Cardoso, advogado, de terno escuro e gravata vermelha"
          sizes="(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 90vw"
          priority
          className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:mr-0 lg:max-w-none"
        >
          <figcaption className="absolute -bottom-6 -left-2 z-10 max-w-[17rem] border border-paper-3 bg-paper px-5 py-4 shadow-[0_18px_40px_-20px_rgb(16_15_13/0.45)] sm:-left-8">
            <span className="font-caps text-[0.65rem] tracking-[0.18em] text-gold-deep">§ Base legal</span>
            <span className="mt-1.5 block text-[0.92rem] leading-snug font-medium text-text">{hero.legalBadge}</span>
          </figcaption>
        </Portrait>
      </div>
    </section>
  );
}
