import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { headline } from "@/lib/emphasis";
import { Section } from "@/components/ui/Section";
import { lawyerSummary } from "@/content/shared";
import { site } from "@/content/site";

/** "Conheça Jhonny Cardoso": retrato, apresentação resumida e link para a página Sobre. */
export function LawyerIntro() {
  return (
    <Section id="advogado" labelledBy="advogado-titulo" panel>
      <div className="grid items-center gap-10 md:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <figure data-reveal className="mx-auto w-full max-w-[20rem] md:max-w-none">
          <Photo
            name="jhonny-sorrindo"
            alt="Jhonny Henrique Guollo Cardoso, advogado"
            focus="50% 18%"
            sizes="(min-width: 768px) 24rem, 80vw"
            className="aspect-[4/5]"
          />
          <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[1rem]">
            <span className="font-display text-[1.2rem]">{site.lawyer.shortName}</span>
            <span className="text-text-muted">{site.lawyer.oab}</span>
          </figcaption>
        </figure>

        <div>
          <h2 id="advogado-titulo" data-reveal className="accent text-display-lg">
            {headline("Conheça Jhonny Cardoso.")}
          </h2>
          <p data-reveal className="mt-6 max-w-[56ch] text-lead text-text-muted">
            {lawyerSummary}
          </p>
          <Link href="/sobre" data-reveal className="link-arrow mt-9 text-[1.06rem]">
            Sobre o advogado
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>
      </div>
    </Section>
  );
}
