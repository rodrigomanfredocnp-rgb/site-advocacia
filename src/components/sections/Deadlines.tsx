import { Section } from "@/components/ui/Section";

/** Os dois prazos da Constituição que todo trabalhador precisa conhecer. */
export function Deadlines() {
  return (
    <Section labelledBy="prazos">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow">Prazos</p>
          <h2 id="prazos" className="accent mt-5 max-w-[16ch] text-display-lg">
            Direito trabalhista <em>tem prazo.</em>
          </h2>
          <p className="mt-6 max-w-[48ch] text-text-muted">
            Muita gente deixa para depois e perde valores que eram seus. A Constituição fixa dois limites para cobrar créditos
            trabalhistas, e o prazo começa a correr no dia em que o contrato termina.
          </p>
          <p className="mt-6 text-[0.82rem] text-text-muted">Constituição Federal, art. 7º, XXIX · CLT, art. 11</p>
        </div>

        <ul className="grid gap-10 sm:grid-cols-2">
          <li className="border-t border-gold pt-8">
            <p className="font-display text-[4rem] leading-none">2 anos</p>
            <p className="mt-4 text-text-muted">para entrar na Justiça, contados do fim do contrato de trabalho.</p>
          </li>
          <li className="border-t border-gold pt-8">
            <p className="font-display text-[4rem] leading-none">5 anos</p>
            <p className="mt-4 text-text-muted">de direitos que podem ser cobrados, contados da data em que a ação é proposta.</p>
          </li>
        </ul>
      </div>
    </Section>
  );
}
