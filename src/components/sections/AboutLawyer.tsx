import { LogoSymbol } from "@/components/brand/Logo";
import { Portrait } from "@/components/ui/Portrait";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { lawyerBio, values } from "@/content/shared";
import { site } from "@/content/site";

/**
 * A faixa escura do advogado. Na home aparece completa; nas landings, mais curta,
 * só para dar rosto e credencial a quem vai atender.
 */
export function AboutLawyer({ variant = "full", whatsapp }: { variant?: "full" | "short"; whatsapp?: string }) {
  const bio = variant === "full" ? lawyerBio : lawyerBio.slice(0, 2);
  return (
    <section id="advogado" aria-labelledby="advogado-titulo" className="on-ink ink-texture relative overflow-hidden py-20 text-text-inverse md:py-28">
      <LogoSymbol tone="current" className="pointer-events-none absolute -top-16 -right-24 h-[30rem] w-auto text-gold/[0.05]" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Portrait
          photo="jhonny-sorrindo"
          alt="Dr. Jhonny Cardoso sorrindo, de braços cruzados"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 55vw, 90vw"
          className="mx-auto w-full max-w-[24rem] lg:max-w-none"
        >
          <figcaption className="mt-5 text-center font-caps text-[0.66rem] tracking-[0.2em] text-gold">
            {site.lawyer.fullName.toUpperCase()} · {site.lawyer.oab}
          </figcaption>
        </Portrait>

        <div>
          <p className="eyebrow">Quem vai cuidar do seu caso</p>
          <h2 id="advogado-titulo" className="em-gold mt-5 text-display-lg">
            Conheça o <em>Dr. Jhonny Cardoso</em>
          </h2>
          <div className="mt-8 space-y-5 text-[1.0625rem] text-text-inverse-muted">
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-px border border-ink-3 bg-ink-3 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v.title} className="bg-ink-2 p-5">
                <h3 className="font-caps text-[0.72rem] tracking-[0.16em] text-gold">{v.title.toUpperCase()}</h3>
                <p className="mt-2 text-[0.94rem] text-text-inverse-muted">{v.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <WhatsAppButton source="advogado" message={whatsapp}>
              Falar com o Dr. Jhonny
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
