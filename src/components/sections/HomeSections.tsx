import Link from "next/link";
import { ArrowRight, Handshake, MapPin } from "lucide-react";
import type { CSSProperties } from "react";
import { Section, SectionTitle } from "@/components/ui/Section";
import { MAIN_AREA_CARD, mainAreas, otherAreas, proPage } from "@/content/landings";
import { nationalService, partnership } from "@/content/shared";
import { headline } from "@/lib/emphasis";
import { PageList, TopicCard } from "./TopicCards";

/** Os três cartões das áreas principais (Cível primeiro). */
export function MainAreaCards() {
  return (
    <ul className="mt-12 grid gap-3 sm:gap-5 md:grid-cols-3">
      {mainAreas().map((area, i) => (
        <li key={area.slug}>
          <TopicCard
            landing={area}
            index={i}
            text={MAIN_AREA_CARD[area.slug]?.text}
            linkLabel={MAIN_AREA_CARD[area.slug]?.link}
          />
        </li>
      ))}
    </ul>
  );
}

/** Áreas de atuação: três cartões principais e a lista das outras áreas. */
export function AreasSection() {
  return (
    <Section id="areas" labelledBy="areas-titulo" className="pt-16 md:pt-24">
      <SectionTitle id="areas-titulo" title="Áreas de atuação." text="Conheça os assuntos atendidos pelo escritório." />
      <MainAreaCards />

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-12">
        <h3 data-reveal className="font-display text-display-sm">
          Outras áreas atendidas
        </h3>
        <PageList items={otherAreas()} />
      </div>
    </Section>
  );
}

/** Atendimento presencial e online + atuação em parceria (dois blocos de texto). */
export function ServiceBlocks() {
  const blocks = [
    {
      id: "presencial-online",
      icon: MapPin,
      title: "Atendimento presencial e online",
      text: nationalService,
      href: "/atendimento",
    },
    { id: "parceria", icon: Handshake, title: "Atuação em parceria", text: partnership, href: "/dividas-e-agronegocio" },
  ];
  return (
    <Section labelledBy="presencial-online-titulo">
      <div className="grid gap-5 md:grid-cols-2">
        {blocks.map(({ id, icon: Icon, title, text, href }, i) => (
          <div key={id} data-reveal style={{ "--i": i } as CSSProperties} className="flex flex-col bg-white px-6 py-10 sm:px-10">
            <span className="grid size-12 place-items-center rounded-full bg-champagne text-gold-text">
              <Icon className="size-6" strokeWidth={1.6} aria-hidden />
            </span>
            <h2 id={`${id}-titulo`} className="mt-6 font-display text-display-md">
              {headline(`${title}.`)}
            </h2>
            <p className="mt-4 max-w-[52ch] text-[1.08rem] text-text-muted">{text}</p>
            <Link href={href} className="link-arrow mt-auto self-start pt-7 text-[1.02rem]">
              Saiba mais
              <ArrowRight className="size-5" aria-hidden />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** Bloco discreto para advogados e escritórios (perto do fim da home). */
export function ForLawyers() {
  const page = proPage();
  return (
    <Section labelledBy="escritorios-titulo" className="!pt-0">
      <div
        data-reveal
        className="flex flex-col gap-6 border border-line px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h2 id="escritorios-titulo" className="font-display text-display-sm">
            Para advogados e escritórios
          </h2>
          <p className="mt-2 max-w-[60ch] text-[1.06rem] text-text-muted">
            Apoio local em Campo Novo do Parecis/MT para audiências e diligências judiciais e administrativas. O escopo e a
            disponibilidade são avaliados conforme a necessidade do escritório.
          </p>
        </div>
        <Link href={`/${page.slug}`} className="btn btn-plain btn-outline shrink-0 self-start md:self-center">
          Conheça o apoio local
        </Link>
      </div>
    </Section>
  );
}
