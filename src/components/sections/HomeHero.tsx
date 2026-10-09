import { ShieldCheck } from "lucide-react";
import { Portrait } from "@/components/ui/Portrait";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/content/site";

export function HomeHero() {
  return (
    <section aria-labelledby="titulo" className="bg-white">
      <div className="container-site grid items-center gap-16 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-28">
        <div className="flex flex-col items-start">
          <p className="eyebrow animate-rise">Advocacia trabalhista e previdenciária</p>
          <h1 id="titulo" className="accent mt-6 animate-rise text-display-xl [animation-delay:80ms]">
            Seus direitos de trabalhador <em>levados a sério.</em>
          </h1>
          <p className="mt-7 max-w-[50ch] animate-rise text-[1.1rem] text-text-muted [animation-delay:160ms]">
            Atendimento próximo e transparente para quem trabalha: rescisão, horas extras, gestante, acidentes, assédio, trabalho
            rural e benefícios do INSS.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap items-center gap-3 [animation-delay:240ms]">
            <WhatsAppButton source="hero-home">Agende um atendimento</WhatsAppButton>
            <a href="#atuacao" className="btn btn-outline">
              Áreas de atuação
            </a>
          </div>
          <p className="mt-8 text-[0.88rem] text-text-muted">Campo Novo do Parecis · Mato Grosso</p>
        </div>

        <Portrait
          photo="jhonny-serio"
          alt="Dr. Jhonny Cardoso, advogado, de braços cruzados, terno escuro e gravata vermelha"
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 60vw, 90vw"
          priority
          className="mx-auto w-full max-w-[24rem] sm:max-w-[28rem] lg:mr-4 lg:max-w-none"
        >
          <figcaption className="absolute -bottom-8 -left-3 z-10 flex items-center gap-3 border-l-2 border-gold bg-white px-5 py-4 shadow-[0_18px_40px_-22px_rgb(15_15_15/0.4)] sm:-left-8">
            <ShieldCheck className="size-6 shrink-0 text-gold-text" strokeWidth={1.5} aria-hidden />
            <span>
              <span className="block font-display text-[1.15rem] leading-tight">{site.lawyer.displayName}</span>
              <span className="text-[0.82rem] text-text-muted">Advogado · {site.lawyer.oab}</span>
            </span>
          </figcaption>
        </Portrait>
      </div>
      <div className="container-site">
        <hr className="border-line" />
      </div>
    </section>
  );
}
