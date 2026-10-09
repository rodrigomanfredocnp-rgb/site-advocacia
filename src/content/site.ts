/**
 * Dados do escritório. Fonte única para todo o site.
 * Origem: identidade-visual/021 CARTÃO DIGITAL/DADOS.txt, papel timbrado e
 * assinatura de e-mail. A OAB correta é 33424 (confirmada pelo cliente).
 */
export const site = {
  url: "https://jhonnycardoso.adv.br",
  name: "Jhonny Cardoso Advogado",
  shortName: "Jhonny Cardoso",

  lawyer: {
    fullName: "Jhonny Henrique Guollo Cardoso",
    displayName: "Dr. Jhonny Cardoso",
    firstName: "Jhonny",
    oab: "OAB/MT 33424",
    oabNumber: "33424",
    oabState: "MT",
  },

  practice: {
    main: "Direito do Trabalho",
    secondary: "Direito Previdenciário (INSS)",
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

  /** Horário exibido no rodapé e no contato. Ajustar se o escritório informar outro. */
  hours: "Segunda a sexta, das 8h às 18h",

  /** Como o atendimento acontece. Ajustar se o escritório não atender fora de MT. */
  serviceArea: "Atendimento presencial em Campo Novo do Parecis/MT e online para todo o Brasil",

  social: {
    instagram: "https://www.instagram.com/jhonnycardoso.adv",
    instagramHandle: "@jhonnycardoso.adv",
    facebook: "https://www.facebook.com/profile.php?id=61566370640678",
  },

  /**
   * Avaliações reais do Google. Enquanto estiver vazio, as seções de
   * avaliação não aparecem. NUNCA preencher com dados inventados.
   */
  reviews: {
    googleRating: null as number | null,
    googleCount: null as number | null,
    googleUrl: null as string | null,
    items: [] as { author: string; text: string }[],
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city}/${site.address.state}, CEP ${site.address.zip}`;
