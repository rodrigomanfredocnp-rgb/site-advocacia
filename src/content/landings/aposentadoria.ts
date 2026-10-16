import type { Landing } from "../types";

export const aposentadoria: Landing = {
  slug: "aposentadoria",
  category: "previdenciario",
  topic: "Aposentadoria",
  summary: "Quer saber quando pode se aposentar? O tempo na roça também pode contar.",
  photoAlt: "Casal de idosos sorrindo, abraçados, em um parque",
  photoFocus: "50% 40%",
  seo: {
    title: "Aposentadoria pelo INSS: planejamento, tempo rural e revisão",
    description:
      "Entenda as regras da aposentadoria após a reforma, o tempo rural e especial e quando cabe revisão. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Quero entender minha aposentadoria.",
  hero: {
    title: "Não sabe quando vai poder se aposentar?",
    lead: "As regras mudaram com a reforma de 2019. Tempo na roça, trabalho insalubre e períodos sem carteira podem mudar a data e o valor da sua aposentadoria.",
  },
  situations: [
    {
      title: "Quero saber quando posso me aposentar",
      whatsapp: "Olá, Dr. Jhonny! Quero saber quando posso me aposentar.",
    },
    {
      title: "Trabalhei na roça e não sei se conta",
      whatsapp: "Olá, Dr. Jhonny! Trabalhei na roça e quero saber se esse tempo conta para a aposentadoria.",
    },
    {
      title: "Trabalhei com barulho, calor ou produtos químicos",
      whatsapp: "Olá, Dr. Jhonny! Trabalhei em atividade insalubre e quero saber sobre aposentadoria especial.",
    },
    {
      title: "O INSS negou minha aposentadoria",
      whatsapp: "Olá, Dr. Jhonny! O INSS negou minha aposentadoria.",
    },
    {
      title: "Acho que o valor veio errado",
      whatsapp: "Olá, Dr. Jhonny! Acho que o valor da minha aposentadoria está errado.",
    },
    {
      title: "Tenho períodos sem carteira assinada",
      whatsapp: "Olá, Dr. Jhonny! Tenho períodos sem carteira que quero incluir na aposentadoria.",
    },
  ],
  law: {
    text: "Pela regra geral, a aposentadoria por idade exige 65 anos para homens e 62 para mulheres, além de um tempo mínimo de contribuição. Para o trabalhador rural, as idades são 60 e 55 anos. Quem já contribuía para o INSS antes de 13 de novembro de 2019 pode ter regras mais vantajosas, chamadas regras de transição.",
    source: "CF, art. 201, § 7º · EC 103/2019 · Lei 8.213/91",
  },
  faq: [
    {
      q: "Trabalhei na roça sem pagar o INSS. Conta?",
      a: "Pode contar. O trabalhador rural pode se aposentar por idade comprovando o trabalho no campo, mesmo sem ter pago carnê. A prova é feita com documentos da época, como notas de produtor e certidões, e com testemunhas.",
    },
    {
      q: "Acho que o valor veio errado. Dá para revisar?",
      a: "Pode dar. Se faltaram salários ou períodos no cálculo, o benefício pode ser revisto. O prazo para pedir a revisão é de 10 anos.",
    },
    {
      q: "O que é o CNIS?",
      a: "É o seu histórico no INSS, com os empregos e as contribuições usados no cálculo. Muitas vezes faltam empregos ou salários nele. Dá para ver no aplicativo Meu INSS. Guarde todas as carteiras de trabalho, inclusive as antigas.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["inss", "bpc-loas", "trabalhador-rural"],
};
