/**
 * Dados do escritório. Fonte única para todo o site.
 * Origem: identidade-visual/021 CARTÃO DIGITAL/DADOS.txt, papel timbrado e
 * assinatura de e-mail. A OAB correta é 33424 (confirmada pelo cliente).
 */
export const site = {
  url: "https://jhonnycardoso.adv.br",
  name: "Jhonny Cardoso Advogado",

  lawyer: {
    fullName: "Jhonny Henrique Guollo Cardoso",
    displayName: "Dr. Jhonny Cardoso",
    firstName: "Jhonny",
    oab: "OAB/MT 33424",
    oabNumber: "33424",
    oabState: "MT",
  },

  contact: {
    whatsappNumber: "5565996701835",
    whatsappDisplay: "(65) 99670-1835",
    phoneHref: "tel:+5565996701835",
    email: "juridico@jhonnycardoso.adv.br",
  },

  address: {
    street: "Rua Goiás, nº 510 NE, Sala 02",
    district: "Centro",
    city: "Campo Novo do Parecis",
    state: "MT",
    zip: "78360-000",
    mapsUrl: "https://maps.app.goo.gl/eydM8ZMPcAhectHW9",
  },

  /**
   * Horário de atendimento. Fica oculto enquanto for null.
   * PENDENTE: confirmar com o escritório (ex.: "Segunda a sexta, das 8h às 18h").
   */
  hours: null as string | null,

  social: {
    instagram: "https://www.instagram.com/jhonnycardoso.adv",
    instagramHandle: "@jhonnycardoso.adv",
    facebook: "https://www.facebook.com/profile.php?id=61566370640678",
  },

  /**
   * Avaliações reais do Google. Enquanto `items` estiver vazio, a seção de
   * avaliações não aparece. NUNCA preencher com dados inventados.
   * Exemplo de item: { author: "Maria S.", text: "Texto copiado do Google." }
   */
  reviews: {
    googleRating: null as number | null,
    googleCount: null as number | null,
    googleUrl: null as string | null,
    items: [] as { author: string; text: string }[],
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city}/${site.address.state}, CEP ${site.address.zip}`;
