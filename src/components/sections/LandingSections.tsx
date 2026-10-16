import Link from "next/link";
import { ArrowRight, Check, FileText, Info } from "lucide-react";
import type { CSSProperties } from "react";
import { Section, SectionTitle } from "@/components/ui/Section";
import type { Landing } from "@/content/types";
import { headline } from "@/lib/emphasis";

/** "Assuntos atendidos" + "Documentos que ajudam", lado a lado no computador. */
export function TopicsAndDocuments({ landing }: { landing: Landing }) {
  return (
    <Section id="atendidos" labelledBy={landing.topics ? "atendidos-titulo" : "documentos-titulo"} className="pt-16 md:pt-24">
      <div className={`grid gap-5 ${landing.topics ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
        {landing.topics && (
          <div data-reveal className="bg-white px-6 py-10 sm:px-10 md:py-12">
            <h2 id="atendidos-titulo" className="font-display text-display-md">
              {headline(`${landing.topics.title ?? "Assuntos atendidos"}.`)}
            </h2>
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {landing.topics.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[1.08rem] leading-snug">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-champagne text-gold-text">
                    <Check className="size-4" strokeWidth={2.5} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {landing.documents.length > 0 && (
          <div data-reveal style={{ "--i": 1 } as CSSProperties} className="bg-white px-6 py-10 sm:px-10 md:py-12">
            <h2 id="documentos-titulo" className="font-display text-display-md">
              {headline(`${landing.documentsTitle ?? "Documentos que ajudam"}.`)}
            </h2>
            <ul className={`mt-8 grid gap-4 ${landing.topics ? "" : "sm:grid-cols-2 sm:gap-x-8"}`}>
              {landing.documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-[1.08rem] leading-snug">
                  <FileText className="mt-0.5 size-5 shrink-0 text-gold-text" strokeWidth={1.6} aria-hidden />
                  {doc}
                </li>
              ))}
            </ul>
            {!landing.documentsTitle && (
              <p className="mt-7 text-[1rem] text-text-muted">
                Não é preciso ter tudo para pedir informações. O envio dos documentos é combinado no atendimento.
              </p>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}

/** Explicações curtas da página (o que é o BPC, como funciona a parceria...). */
export function Notes({ notes }: { notes: NonNullable<Landing["notes"]> }) {
  return (
    <Section labelledBy="explicacoes-titulo" className="!pt-0">
      <h2 id="explicacoes-titulo" className="sr-only">
        Explicações
      </h2>
      <div className={`grid gap-5 ${notes.length > 1 ? "md:grid-cols-2" : ""}`}>
        {notes.map((note, i) => (
          <div
            key={note.title}
            data-reveal
            style={{ "--i": i } as CSSProperties}
            className="flex gap-5 border-l-2 border-gold bg-white px-6 py-8 sm:px-9"
          >
            <Info className="mt-1 size-6 shrink-0 text-gold-text" strokeWidth={1.6} aria-hidden />
            <div>
              <h3 className="font-display text-[1.45rem] leading-tight">{note.title}</h3>
              <p className="mt-3 max-w-[60ch] text-[1.08rem] text-text-muted">{note.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** Caminhos destacados de uma área (ex.: Trabalhadores | Empresas). */
export function Paths({ paths }: { paths: NonNullable<Landing["paths"]> }) {
  return (
    <Section labelledBy="caminhos-titulo" className="pt-16 md:pt-24">
      <SectionTitle id="caminhos-titulo" title="Para quem é o atendimento." />
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {paths.map((p, i) => (
          <li key={p.title} data-reveal style={{ "--i": i } as CSSProperties}>
            <Link
              href={p.href}
              className="group flex h-full flex-col bg-white px-6 py-9 transition-shadow duration-500 hover:shadow-[0_24px_50px_-30px_rgb(14_13_11/0.35)] sm:px-10"
            >
              <h3 className="font-display text-display-md">{p.title}</h3>
              <p className="mt-4 max-w-[46ch] text-[1.08rem] text-text-muted">{p.text}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-gold-text">
                {p.cta}
                <ArrowRight className="size-5 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
