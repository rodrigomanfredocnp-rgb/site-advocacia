import type { Landing } from "../types";

export const gestante: Landing = {
  slug: "gestante",
  category: "trabalhista",
  topic: "Gestante demitida",
  summary: "Foi demitida grávida? Você pode ter direito à estabilidade.",
  photoAlt: "Mulher grávida em um campo ao entardecer, com as mãos na barriga",
  photoFocus: "50% 45%",
  seo: {
    title: "Fui demitida grávida: quais são os meus direitos?",
    description:
      "A gestante demitida sem justa causa pode ter direito à estabilidade, mesmo se descobriu a gravidez depois. Converse com o Dr. Jhonny Cardoso pelo WhatsApp.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Fui demitida grávida e quero entender meus direitos.",
  hero: {
    title: "Você foi demitida grávida?",
    lead: "A lei protege o emprego da gestante. Você pode ter direito a voltar ao trabalho ou a uma indenização, mesmo que a empresa não soubesse da gravidez.",
  },
  situations: [
    {
      title: "Fui demitida durante a gravidez",
      whatsapp: "Olá, Dr. Jhonny! Fui demitida sem justa causa durante a gravidez.",
    },
    {
      title: "Descobri a gravidez depois da demissão",
      whatsapp: "Olá, Dr. Jhonny! Descobri que estava grávida depois de ser demitida.",
    },
    {
      title: "Pedi demissão sem saber que estava grávida",
      whatsapp: "Olá, Dr. Jhonny! Pedi demissão e depois descobri que estava grávida.",
    },
    {
      title: "Fui dispensada no contrato de experiência",
      whatsapp: "Olá, Dr. Jhonny! Fui dispensada grávida no contrato de experiência.",
    },
    {
      title: "Trabalhava sem carteira assinada",
      whatsapp: "Olá, Dr. Jhonny! Trabalhava sem carteira assinada e fui dispensada grávida.",
    },
  ],
  law: {
    text: "A gestante não pode ser demitida sem justa causa desde a confirmação da gravidez até cinco meses depois do parto. Basta que a gravidez tenha começado antes da demissão, mesmo que ninguém soubesse. A proteção vale também no aviso prévio e no contrato de experiência.",
    source: "ADCT, art. 10, II, “b” · CLT, art. 391-A · STF, Tema 497 · Súmula 244 do TST",
  },
  faq: [
    {
      q: "Tenho direito mesmo se descobri a gravidez depois?",
      a: "Pode ter. O que importa é se a gravidez já tinha começado durante o contrato ou o aviso prévio. O ultrassom com a data provável da concepção ajuda a mostrar isso.",
    },
    {
      q: "Vou ser obrigada a voltar para a empresa?",
      a: "Não necessariamente. Enquanto durar a estabilidade, a lei prevê a volta ao emprego. Quando isso não é possível ou o período já passou, o caminho é a indenização. Isso é conversado com você.",
    },
    {
      q: "Qual é o prazo para buscar meus direitos?",
      a: "Até 2 anos depois do fim do contrato. Quanto antes, mais opções existem, inclusive a de voltar ao emprego.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["carteira-assinada", "verbas-rescisorias", "fgts"],
};
