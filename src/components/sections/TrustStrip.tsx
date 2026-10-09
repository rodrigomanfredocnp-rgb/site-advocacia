import { site } from "@/content/site";

const ITEMS = [
  `Inscrito na ${site.lawyer.oab}`,
  "Atendimento direto com o advogado",
  "Online ou presencial",
  "Sigilo profissional",
];

/** Faixa de credenciais logo abaixo do hero. */
export function TrustStrip() {
  return (
    <div className="hidden border-y border-paper-3 bg-paper-2 md:block">
      <ul className="container-site flex justify-between gap-6 py-5 font-caps text-[0.66rem] tracking-[0.16em] text-gold-deep">
        {ITEMS.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className="size-1 rotate-45 bg-gold" aria-hidden />
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
