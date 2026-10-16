import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { CSSProperties } from "react";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { lawyerIntro, values } from "@/content/shared";
import { site } from "@/content/site";
import { headline } from "@/lib/emphasis";

/** "Quem vai cuidar do seu caso": retrato, apresentação curta, diferenciais e link para a página Sobre. */
export function LawyerIntro({ title = "Quem vai cuidar do seu caso." }: { title?: string }) {
  return (
    <Section id="advogado" labelledBy="advogado-titulo" panel>
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <figure data-reveal="photo" className="mx-auto w-full max-w-[24rem] lg:max-w-none">
          <Photo
            name="jhonny-sorrindo"
            alt="Dr. Jhonny Cardoso sorrindo, de terno escuro e gravata vermelha, com os braços cruzados"
            focus="50% 20%"
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="aspect-[4/5]"
          />
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-[1rem]">
            <span className="font-display text-[1.2rem]">{site.lawyer.displayName}</span>
            <span className="text-text-muted">{site.lawyer.oab}</span>
          </figcaption>
        </figure>

        <div>
          <h2 id="advogado-titulo" data-reveal className="accent max-w-[16ch] text-display-lg">
            {headline(title)}
          </h2>
          <p data-reveal className="mt-6 max-w-[46ch] text-lead text-text-muted">
            {lawyerIntro}
          </p>
          <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <li key={v} data-reveal style={{ "--i": i } as CSSProperties} className="flex items-start gap-3 text-[1.06rem]">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-champagne text-gold-text">
                  <Check className="size-4" strokeWidth={2.5} aria-hidden />
                </span>
                {v}
              </li>
            ))}
          </ul>
          <Link href="/sobre" data-reveal className="link-arrow mt-10 text-[1.06rem]">
            Conheça o Dr. Jhonny
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>
      </div>
    </Section>
  );
}
