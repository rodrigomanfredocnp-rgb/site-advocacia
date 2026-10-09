import type { Landing } from "../types";

export const aposentadoria: Landing = {
  slug: "aposentadoria",
  category: "previdenciario",
  icon: "hourglass",
  topic: "Aposentadoria",
  summary:
    "Quer saber quando e como se aposentar, ou acha que o INSS calculou errado? Tempo rural e especial podem fazer diferença.",
  seo: {
    title: "Aposentadoria pelo INSS: planejamento, tempo rural e revisão",
    description:
      "Entenda as regras da aposentadoria após a reforma, o tempo rural e especial e quando cabe revisão. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Quero entender minha aposentadoria.",
  hero: {
    eyebrow: "Aposentadoria",
    question: "Quer se aposentar, mas não sabe por onde começar?",
    answer: "Um planejamento pode *antecipar ou melhorar* o seu benefício.",
    lead: "Depois da Reforma da Previdência de 2019, as regras ficaram mais complexas, com várias regras de transição. Tempo rural, tempo em atividade insalubre e períodos sem registro podem mudar a data e o valor da sua aposentadoria.",
    legalBadge: "CF, art. 201, § 7º · EC 103/2019 · Lei 8.213/91",
  },
  law: {
    title: "As regras *depois da reforma*",
    paragraphs: [
      "Pela Constituição, a aposentadoria por idade exige 65 anos para homens e 62 para mulheres, além do tempo mínimo de contribuição. Para trabalhadores rurais e em regime de economia familiar, as idades são de 60 e 55 anos (art. 201, § 7º).",
      "Quem já contribuía antes de 13 de novembro de 2019 pode se encaixar em regras de transição da Emenda Constitucional 103, como a de pontos, a de idade mínima progressiva e as de pedágio. Quem trabalhou exposto a agentes nocivos pode ter direito à aposentadoria especial (Lei 8.213/91, art. 57).",
    ],
    pillars: [
      { title: "Levantamento", text: "Reunir todo o histórico: CNIS, carteiras, tempo rural, tempo especial e contribuições." },
      { title: "Simulação", text: "Comparar as regras possíveis para encontrar a data e o valor mais vantajosos." },
      { title: "Pedido ou revisão", text: "Fazer o pedido com as provas certas ou revisar um benefício calculado errado." },
    ],
  },
  summaryBox:
    "Erros no CNIS, vínculos sem registro, salários que não aparecem e tempo rural não reconhecido estão entre as causas mais comuns de aposentadoria negada ou com valor menor. A revisão de um benefício concedido tem prazo de 10 anos (Lei 8.213/91, art. 103).",
  situations: {
    title: "Em que momento *você está*?",
    intro: "Escolha a situação mais próxima da sua.",
    items: [
      {
        title: "Quero saber quando posso me aposentar",
        text: "Um planejamento compara as regras e mostra a melhor data e o melhor valor possível.",
        whatsapp: "Olá, Dr. Jhonny! Quero saber quando posso me aposentar.",
      },
      {
        title: "Trabalhei na roça e não sei se conta",
        text: "O tempo de atividade rural pode ser reconhecido com documentos e testemunhas, inclusive somado ao urbano.",
        whatsapp: "Olá, Dr. Jhonny! Trabalhei na roça e quero saber se esse tempo conta para a aposentadoria.",
      },
      {
        title: "Trabalhei exposto a ruído, calor ou químicos",
        text: "O tempo especial pode reduzir o tempo necessário ou aumentar o valor do benefício.",
        whatsapp: "Olá, Dr. Jhonny! Trabalhei em atividade insalubre e quero saber sobre aposentadoria especial.",
      },
      {
        title: "O INSS negou minha aposentadoria",
        text: "Períodos não reconhecidos podem ser comprovados em recurso ou na Justiça.",
        whatsapp: "Olá, Dr. Jhonny! O INSS negou minha aposentadoria.",
      },
      {
        title: "Acho que o valor veio errado",
        text: "Salários faltando no cálculo ou tempo não computado podem justificar uma revisão.",
        whatsapp: "Olá, Dr. Jhonny! Acho que o valor da minha aposentadoria está errado.",
      },
      {
        title: "Tenho períodos sem carteira assinada",
        text: "O reconhecimento do vínculo na Justiça do Trabalho pode contar tempo para a aposentadoria.",
        whatsapp: "Olá, Dr. Jhonny! Tenho períodos sem carteira que quero incluir na aposentadoria.",
      },
    ],
  },
  documents: [
    "Extrato do CNIS (aplicativo Meu INSS)",
    "Todas as carteiras de trabalho, inclusive as antigas",
    "PPP e laudos de atividades insalubres",
    "Documentos rurais: notas de produtor, ITR, contratos, certidões",
    "Carnês de contribuição individual, se tiver",
    "Carta de concessão, se já for aposentado",
  ],
  mistakes: [
    "Pedir a aposentadoria sem conferir o CNIS antes",
    "Jogar fora carteiras de trabalho antigas",
    "Não pedir o PPP ao sair de empresas com atividade insalubre",
    "Deixar passar 10 anos sem revisar um benefício calculado errado",
  ],
  myths: [
    {
      myth: "Depois da reforma, ninguém mais se aposenta por tempo de contribuição.",
      fact: "Quem já contribuía antes de 13/11/2019 pode usar regras de transição que consideram tempo de contribuição.",
      source: "EC 103/2019",
    },
    {
      myth: "Tempo na roça não conta se eu não contribuí.",
      fact: "O trabalhador rural pode se aposentar por idade comprovando a atividade rural, mesmo sem contribuições em carnê.",
      source: "Lei 8.213/91, art. 48, §§ 1º e 2º",
    },
    {
      myth: "Valor de aposentadoria não pode ser revisto.",
      fact: "O ato de concessão pode ser revisto no prazo de 10 anos.",
      source: "Lei 8.213/91, art. 103",
    },
    {
      myth: "O INSS sempre considera todos os meus períodos.",
      fact: "O cálculo é feito com base no CNIS, que muitas vezes tem vínculos ou salários faltando.",
    },
  ],
  faq: [
    {
      q: "Qual é a idade mínima para se aposentar hoje?",
      a: "Pela regra geral, 65 anos para homens e 62 para mulheres, com tempo mínimo de contribuição. Trabalhadores rurais: 60 e 55 anos. Quem já contribuía antes da reforma pode ter regras de transição mais favoráveis.",
    },
    {
      q: "Como comprovar o tempo rural?",
      a: "Com documentos da época, como notas de produtor, contratos, cadastro do imóvel, certidões e declarações, complementados por testemunhas.",
    },
    {
      q: "O que é o CNIS?",
      a: "É o Cadastro Nacional de Informações Sociais, o histórico de vínculos e contribuições que o INSS usa para calcular o benefício. Dá para consultar pelo aplicativo Meu INSS.",
    },
    {
      q: "Vale a pena fazer planejamento previdenciário?",
      a: "Para quem está perto de se aposentar, comparar as regras pode mostrar a melhor data e evitar um benefício menor do que o possível.",
    },
  ],
  related: ["inss", "bpc-loas", "trabalhador-rural", "insalubridade-periculosidade"],
};
