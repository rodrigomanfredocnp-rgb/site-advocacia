/**
 * Dados do escritório. Fonte única para todo o site.
 * Origem: identidade-visual/021 CARTÃO DIGITAL/DADOS.txt, papel timbrado, assinatura de e-mail
 * e a revisão do titular (16/10/2026), que informa a OAB no formato "OAB/MT 33.424/O".
 */

/**
 * Ponto do mapa. O endereço geocodificado pelo Google caía na calçada, sobre as salas da frente;
 * a pedido do titular, o ponto foi movido para dentro do prédio do hotel, onde fica o escritório.
 * PENDENTE: o titular confirmar no celular que o ponto ficou certo.
 */
const MAP_POINT = "-13.6625583,-57.8870621";

export const site = {
  url: "https://jhonnycardoso.adv.br",
  name: "Jhonny Cardoso Advogado",

  lawyer: {
    fullName: "Jhonny Henrique Guollo Cardoso",
    shortName: "Jhonny Cardoso",
    oab: "OAB/MT 33.424/O",
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
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_POINT)}`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_POINT)}`,
  },

  /**
   * Horário de atendimento. Fica oculto enquanto for null; no lugar, o site diz
   * "Consulte a disponibilidade de agendamento". PENDENTE: confirmar com o escritório.
   */
  hours: null as string | null,

  social: {
    instagram: "https://www.instagram.com/jhonnycardoso.adv",
    instagramHandle: "@jhonnycardoso.adv",
    facebook: "https://www.facebook.com/profile.php?id=61566370640678",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city}/${site.address.state}, CEP ${site.address.zip}`;
