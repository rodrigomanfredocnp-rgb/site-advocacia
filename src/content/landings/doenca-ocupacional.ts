import type { Landing } from "../types";

export const doencaOcupacional: Landing = {
  slug: "doenca-ocupacional",
  category: "trabalhista",
  topic: "Doença do trabalho",
  summary: "O trabalho te deixou doente? Você pode ter os mesmos direitos de um acidente.",
  photoAlt: "Homem mais velho carregando peso nas costas, com expressão de dor",
  photoFocus: "45% 40%",
  seo: {
    title: "Doença ocupacional: LER, coluna, burnout e seus direitos",
    description:
      "Doença causada ou agravada pelo trabalho é equiparada a acidente de trabalho, com estabilidade e possível indenização. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Adoeci por causa do trabalho e quero entender meus direitos.",
  hero: {
    title: "O trabalho te deixou doente?",
    lead: "Dor na coluna, tendinite, perda auditiva, depressão ou burnout. Se o trabalho causou ou piorou a doença, você pode ter direito a estabilidade e indenização.",
  },
  situations: [
    {
      title: "Tenho dores na coluna ou nos braços",
      whatsapp: "Olá, Dr. Jhonny! Tenho problema na coluna ou nos braços por causa do trabalho.",
    },
    {
      title: "Tenho ansiedade, depressão ou burnout",
      whatsapp: "Olá, Dr. Jhonny! Desenvolvi ansiedade/depressão/burnout por causa do trabalho.",
    },
    {
      title: "Perdi audição ou tenho problema respiratório",
      whatsapp: "Olá, Dr. Jhonny! Tive perda auditiva ou problema respiratório por causa do trabalho.",
    },
    {
      title: "O INSS registrou como doença comum",
      whatsapp: "Olá, Dr. Jhonny! O INSS registrou minha doença do trabalho como doença comum.",
    },
    {
      title: "Fui demitido doente",
      whatsapp: "Olá, Dr. Jhonny! Fui demitido estando doente por causa do trabalho.",
    },
    {
      title: "Não consigo mais fazer o mesmo trabalho",
      whatsapp: "Olá, Dr. Jhonny! Não consigo mais exercer minha função por causa de uma doença do trabalho.",
    },
  ],
  law: {
    text: "Doença causada pelo trabalho conta como acidente de trabalho. Vale também quando o trabalho não foi a única causa, mas ajudou a doença a aparecer ou piorar. Quem fica afastado pelo INSS por esse motivo tem 12 meses de estabilidade ao voltar, e o FGTS continua sendo depositado no afastamento.",
    source: "Lei 8.213/91, arts. 20, 21, I, e 118 · Lei 8.036/90, art. 15, § 5º",
  },
  faq: [
    {
      q: "Como provar que a doença veio do trabalho?",
      a: "Pela perícia médica, que avalia a sua função, o local de trabalho e os seus documentos de saúde. Guarde atestados, laudos e exames, de preferência em ordem de data.",
    },
    {
      q: "Já tinha o problema ou ele é da idade. Tenho direito?",
      a: "Doença própria da idade, em regra, não conta. Mas, se o trabalho piorou o problema ou ajudou a causar, a proteção pode existir. Quem avalia isso é a perícia médica.",
    },
    {
      q: "Depressão pode ser doença do trabalho?",
      a: "Pode, quando tem ligação com o trabalho, como assédio, metas abusivas ou jornadas exaustivas. É preciso mostrar essa ligação. O burnout está na lista de doenças ligadas ao trabalho do Ministério da Saúde.",
    },
    {
      q: "Fui demitido sem ser afastado. Tenho estabilidade?",
      a: "Em regra, a estabilidade exige afastamento de mais de 15 dias pelo INSS. Mas, se depois da demissão ficar provado que a doença veio do trabalho, ela pode ser reconhecida.",
    },
  ],
  related: ["acidente-de-trabalho", "assedio-moral", "inss"],
};
