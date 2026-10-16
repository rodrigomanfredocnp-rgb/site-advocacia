import type { Landing } from "../types";

export const acidenteDeTrabalho: Landing = {
  slug: "acidente-de-trabalho",
  category: "trabalhista",
  topic: "Acidente de trabalho",
  summary: "Se machucou no trabalho ou no caminho? Você pode ter direitos.",
  photoAlt: "Trabalhador com colete refletivo sentado na traseira de uma van, segurando o joelho",
  photoFocus: "50% 50%",
  seo: {
    title: "Acidente de trabalho: estabilidade, INSS e indenização",
    description:
      "Quem sofre acidente de trabalho pode ter 12 meses de estabilidade, auxílio do INSS e indenização da empresa. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Sofri um acidente de trabalho e quero entender meus direitos.",
  hero: {
    title: "Sofreu um acidente no trabalho?",
    lead: "Depois de um acidente, você pode ter direito a benefício do INSS, a estabilidade no emprego e, em alguns casos, a indenização da empresa.",
  },
  situations: [
    {
      title: "A empresa não fez a CAT do meu acidente",
      whatsapp: "Olá, Dr. Jhonny! Sofri acidente de trabalho e a empresa não emitiu a CAT.",
    },
    {
      title: "Fui demitido depois de voltar do afastamento",
      whatsapp: "Olá, Dr. Jhonny! Fui demitido depois de voltar de afastamento por acidente de trabalho.",
    },
    {
      title: "Fiquei com sequela do acidente",
      whatsapp: "Olá, Dr. Jhonny! Fiquei com sequela depois de um acidente de trabalho.",
    },
    {
      title: "Faltava equipamento de segurança",
      whatsapp: "Olá, Dr. Jhonny! Me acidentei no trabalho e faltava equipamento de segurança.",
    },
    {
      title: "Me acidentei no caminho do trabalho",
      whatsapp: "Olá, Dr. Jhonny! Sofri um acidente no caminho de casa para o trabalho.",
    },
    {
      title: "O INSS negou ou cortou meu benefício",
      whatsapp: "Olá, Dr. Jhonny! O INSS negou meu benefício depois de um acidente de trabalho.",
    },
  ],
  law: {
    text: "Acidente de trabalho é o que acontece por causa do serviço e machuca a ponto de tirar ou diminuir a capacidade de trabalhar. O acidente no caminho entre casa e trabalho também conta. Quem fica afastado pelo INSS por causa do acidente tem pelo menos 12 meses de estabilidade depois que volta.",
    source: "Lei 8.213/91, arts. 19, 21 e 118",
  },
  faq: [
    {
      q: "A empresa não fez a CAT. E agora?",
      a: "A CAT é o aviso do acidente ao INSS. A empresa deve fazer até o primeiro dia útil seguinte. Se não fizer, você, seus dependentes, o sindicato ou o médico podem fazer.",
    },
    {
      q: "Recebo do INSS. A empresa ainda pode ter que indenizar?",
      a: "Pode. O benefício do INSS não impede a indenização quando a empresa teve culpa, como falta de equipamento ou de treinamento, ou em atividade de risco.",
    },
    {
      q: "O que é o auxílio-acidente?",
      a: "É um valor mensal pago pelo INSS quando fica uma sequela que diminui a capacidade de trabalhar. Ele pode ser recebido junto com o salário.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["doenca-ocupacional", "inss", "insalubridade-periculosidade"],
};
