import { Laptop, Lock, ShieldCheck } from "lucide-react";
import { Portrait } from "@/components/ui/Portrait";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { Landing } from "@/content/types";
import { site } from "@/content/site";
import { emphasis } from "@/lib/emphasis";

export function LandingHero({ landing }: { landing: Landing }) {
  const { hero } = landing;
  return (
    <section aria-labelledby="titulo" className="bg-white">
      <div className="container-site grid items-center gap-16 pt-12 pb-20 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pb-24">
        <div className="flex flex-col items-start">
          <p className="eyebrow animate-rise">{hero.eyebrow}</p>

          <h1 id="titulo" className="accent mt-6 animate-rise text-display-xl [animation-delay:80ms]">
            {hero.question}
          </h1>
          <p className="accent mt-5 animate-rise font-display text-display-sm text-text-muted [animation-delay:140ms]">
            {emphasis(hero.answer)}
          </p>

          <p className="mt-6 max-w-[54ch] animate-rise text-[1.06rem] text-text-muted [animation-delay:200ms]">{hero.lead}</p>

          <div className="mt-9 flex animate-rise flex-col items-start gap-3 [animation-delay:260ms]">
            <WhatsAppButton source="hero" message={landing.whatsapp} />
            <span className="text-[0.84rem] text-text-muted">Resposta do próprio advogado · Conversa sigilosa</span>
          </div>

          <ul className="mt-10 flex w-full flex-wrap gap-x-7 gap-y-3 border-t border-line pt-6 text-[0.88rem] text-text-muted">
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-gold-text" strokeWidth={1.75} aria-hidden />
              {site.lawyer.oab}
            </li>
            <li className="flex items-center gap-2">
              <Laptop className="size-4 text-gold-text" strokeWidth={1.75} aria-hidden />
              Presencial ou online
            </li>
            <li className="flex items-center gap-2">
              <Lock className="size-4 text-gold-text" strokeWidth={1.75} aria-hidden />
              Sigilo profissional
            </li>
          </ul>
        </div>

        <Portrait
          photo="jhonny-lapela"
          alt="Dr. Jhonny Cardoso, advogado, de terno escuro e gravata vermelha"
          sizes="(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 90vw"
          priority
          className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:mr-4 lg:max-w-none"
        >
          <figcaption className="absolute -bottom-8 -left-3 z-10 max-w-[17rem] border-l-2 border-gold bg-white px-5 py-4 shadow-[0_18px_40px_-22px_rgb(15_15_15/0.4)] sm:-left-8">
            <span className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold-text uppercase">Base legal</span>
            <span className="mt-1 block text-[0.92rem] leading-snug">{hero.legalBadge}</span>
          </figcaption>
        </Portrait>
      </div>
      <div className="container-site">
        <hr className="border-line" />
      </div>
    </section>
  );
}
