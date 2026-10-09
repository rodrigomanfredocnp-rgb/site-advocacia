import type { Faq, Landing } from "@/content/types";
import { site } from "@/content/site";

/** Serializa JSON-LD escapando "<" para evitar injeção de HTML (guia oficial do Next). */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const attorneyId = `${site.url}/#advogado`;
export const officeId = `${site.url}/#escritorio`;

/** Pessoa (advogado) + escritório (LegalService). Usado em todas as páginas. */
export function organizationGraph() {
  const rating =
    site.reviews.googleRating && site.reviews.googleCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: site.reviews.googleRating,
            reviewCount: site.reviews.googleCount,
            bestRating: 5,
          },
        }
      : {};

  return [
    {
      "@type": "Attorney",
      "@id": attorneyId,
      name: site.lawyer.fullName,
      alternateName: site.lawyer.displayName,
      url: site.url,
      image: `${site.url}/img/jhonny-serio-828.webp`,
      telephone: `+${site.contact.whatsappNumber}`,
      email: site.contact.email,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Inscrição profissional",
        identifier: site.lawyer.oab,
        recognizedBy: { "@type": "Organization", name: "Ordem dos Advogados do Brasil, Seccional Mato Grosso" },
      },
      knowsAbout: ["Direito do Trabalho", "Direito Previdenciário"],
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
      email: site.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "BR",
      },
      hasMap: site.address.mapsUrl,
      areaServed: [{ "@type": "City", name: "Campo Novo do Parecis" }, { "@type": "Country", name: "Brasil" }],
      employee: { "@id": attorneyId },
      sameAs: [site.social.instagram, site.social.facebook],
      ...rating,
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

export function landingGraph(landing: Landing) {
  const url = `${site.url}/${landing.slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...organizationGraph(),
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: landing.seo.title,
        description: landing.seo.description,
        inLanguage: "pt-BR",
        about: { "@id": officeId },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: landing.topic, item: url },
          ],
        },
      },
      faqGraph(landing.faq),
    ],
  };
}
