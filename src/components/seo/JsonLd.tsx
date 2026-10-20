import { parentArea } from "@/content/landings";
import type { Faq, Landing } from "@/content/types";
import { site } from "@/content/site";

/** Serializa JSON-LD escapando "<" para evitar injeção de HTML (guia oficial do Next). */
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}

export const attorneyId = `${site.url}/#advogado`;
export const officeId = `${site.url}/#escritorio`;

/**
 * Pessoa (o advogado) + escritório (LegalService). Só dados verdadeiros e confirmados:
 * sem avaliações, cargos ou títulos (ver a revisão do titular em CLAUDE.md).
 */
export function organizationGraph() {
  return [
    {
      "@type": "Person",
      "@id": attorneyId,
      name: site.lawyer.fullName,
      alternateName: site.lawyer.shortName,
      jobTitle: "Advogado",
      url: site.url,
      image: `${site.url}/img/jhonny-serio-828.webp`,
      telephone: `+${site.contact.whatsappNumber}`,
      ...(site.contact.email ? { email: site.contact.email } : {}),
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Inscrição profissional",
        identifier: site.lawyer.oab,
        recognizedBy: { "@type": "Organization", name: "Ordem dos Advogados do Brasil, Seccional Mato Grosso" },
      },
      knowsAbout: ["Direito Civil", "Direito do Trabalho", "Direito Previdenciário", "Direito de Família e Sucessões"],
      worksFor: { "@id": officeId },
      sameAs: [site.social.instagram, site.social.facebook],
    },
    {
      "@type": "LegalService",
      "@id": officeId,
      name: site.name,
      url: site.url,
      image: `${site.url}/og.jpg`,
      telephone: `+${site.contact.whatsappNumber}`,
      ...(site.contact.email ? { email: site.contact.email } : {}),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "BR",
      },
      hasMap: site.address.mapsUrl,
      areaServed: [
        { "@type": "City", name: "Campo Novo do Parecis" },
        { "@type": "Country", name: "Brasil" },
      ],
      employee: { "@id": attorneyId },
      sameAs: [site.social.instagram, site.social.facebook],
    },
  ];
}

export function faqGraph(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

type Crumb = { name: string; path: string };

/** WebPage com trilha (Início > ... > página) e nós extras (ex.: FAQ). */
function webPageGraph(page: Crumb & { title?: string; description?: string }, parents: Crumb[], extra: object[]) {
  const url = `${site.url}${page.path}`;
  const trail = [{ name: "Início", path: "/" }, ...parents, page];
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...organizationGraph(),
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: page.title ?? page.name,
        ...(page.description ? { description: page.description } : {}),
        inLanguage: "pt-BR",
        about: { "@id": officeId },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: trail.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
            item: `${site.url}${t.path}`,
          })),
        },
      },
      ...extra,
    ],
  };
}

/** Página simples (Sobre, Atendimento, Contato...). */
export function pageGraph(path: string, name: string, extra: object[] = []) {
  return webPageGraph({ name, path }, [], extra);
}

/** Página de área ou de assunto (assunto: Início > área > assunto). */
export function landingGraph(landing: Landing) {
  const parent = landing.kind === "assunto" ? parentArea(landing) : undefined;
  return webPageGraph(
    { name: landing.name, title: landing.seo.title, path: `/${landing.slug}/`, description: landing.seo.description },
    parent ? [{ name: parent.name, path: `/${parent.slug}/` }] : [],
    [faqGraph(landing.faq)],
  );
}
