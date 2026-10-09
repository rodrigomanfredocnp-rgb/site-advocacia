import { HeartHandshake, MessageSquareText, Scale } from "lucide-react";
import { LogoFull } from "@/components/brand/Logo";
import { Portrait } from "@/components/ui/Portrait";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { lawyerBio, values } from "@/content/shared";
import { site } from "@/content/site";

const VALUE_ICONS = [HeartHandshake, MessageSquareText, Scale];

/**
 * "Sobre o advogado". Na home mostra a marca num cartão preto (a foto já está no topo);
 * nas landings mostra a foto, para dar rosto a quem vai atender.
 */
export function AboutLawyer({ variant = "full", whatsapp }: { variant?: "full" | "short"; whatsapp?: string }) {
  const full = variant === "full";
  const bio = full ? lawyerBio : lawyerBio.slice(0, 2);

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-mist py-20 md:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {full ? (
          <div className="relative">
            <div className="grid aspect-[4/3] place-items-center bg-ink px-10">
              <LogoFull className="h-auto w-full max-w-[19rem]" />
            </div>
            <div className="absolute -bottom-8 left-6 bg-ink px-6 py-5 text-text-inverse shadow-[0_18px_40px_-22px_rgb(15_15_15/0.5)] ring-1 ring-ink-3">
              <span className="block font-display text-[1.6rem] leading-none text-gold">{site.lawyer.oab}</span>
              <span className="mt-1.5 block text-[0.85rem] text-text-inverse-muted">Inscrição na Ordem dos Advogados</span>
            </div>
          </div>
        ) : (
          <Portrait
            photo="jhonny-sorrindo"
            alt="Dr. Jhonny Cardoso sorrindo, de braços cruzados"
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 55vw, 90vw"
            className="mx-auto w-full max-w-[22rem] lg:max-w-[26rem]"
          />
        )}

        <div className={full ? "max-lg:pt-6" : ""}>
          <p className="eyebrow">Sobre o advogado</p>
          <h2 id="sobre-titulo" className="mt-5 text-display-lg">
            Dr. Jhonny Cardoso
          </h2>
          <div className="mt-7 space-y-5 text-[1.0625rem] text-text-muted">
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {full ? (
            <ul className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
              {values.slice(0, 3).map((v, i) => {
                const Icon = VALUE_ICONS[i];
                return (
                  <li key={v.title}>
                    <Icon className="size-6 text-gold-text" strokeWidth={1.5} aria-hidden />
                    <h3 className="mt-4 text-[1.2rem]">{v.title}</h3>
                    <p className="mt-2 text-[0.94rem] text-text-muted">{v.text}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <WhatsAppButton source="advogado" message={whatsapp} className="mt-10">
              Falar com o Dr. Jhonny
            </WhatsAppButton>
          )}
        </div>
      </div>
    </section>
  );
}
