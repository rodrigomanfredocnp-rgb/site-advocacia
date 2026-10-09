import { Section } from "@/components/ui/Section";

/** Os dois prazos da Constituição que todo trabalhador precisa conhecer. */
export function Deadlines() {
  return (
    <Section tone="paper-2" labelledBy="prazos">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow">Prazos</p>
          <h2 id="prazos" className="em-gold mt-5 max-w-[16ch] text-display-lg">
            Direito trabalhista <em>tem prazo</em>
          </h2>
          <p className="mt-6 max-w-[48ch] text-text-muted">
            Muita gente deixa para depois e acaba perdendo valores que eram seus. A Constituição fixa dois limites para cobrar
            créditos trabalhistas, e o relógio começa a correr no dia em que o contrato termina.
          </p>
          <p className="mt-6 font-caps text-[0.66rem] tracking-[0.16em] text-gold-deep">§ CONSTITUIÇÃO FEDERAL, ART. 7º, XXIX · CLT, ART. 11</p>
        </div>

        <dl className="grid gap-px border border-paper-3 bg-paper-3 sm:grid-cols-2">
          <div className="bg-paper p-8 md:p-10">
            <dt className="font-caps text-[0.7rem] tracking-[0.18em] text-text-muted">PARA ENTRAR NA JUSTIÇA</dt>
            <dd className="mt-4">
              <span className="nums-lining block font-display text-[4.5rem] leading-none text-gold-deep">2 anos</span>
              <span className="mt-3 block text-text-muted">contados a partir do fim do contrato de trabalho.</span>
            </dd>
          </div>
          <div className="bg-paper p-8 md:p-10">
            <dt className="font-caps text-[0.7rem] tracking-[0.18em] text-text-muted">DE DIREITOS QUE PODEM SER COBRADOS</dt>
            <dd className="mt-4">
              <span className="nums-lining block font-display text-[4.5rem] leading-none text-gold-deep">5 anos</span>
              <span className="mt-3 block text-text-muted">contados para trás, a partir da data em que a ação é proposta.</span>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
