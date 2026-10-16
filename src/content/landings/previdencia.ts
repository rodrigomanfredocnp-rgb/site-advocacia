import type { Landing } from "../types";
import { outraCidadePrevidencia } from "./_shared";

/*
 * Assuntos previdenciários (foco pedido pelo titular: auxílio, pensão por morte, aposentadorias e
 * incapacidade permanente; BPC com destaque, identificado como benefício assistencial).
 * Citações conferidas no texto oficial da Lei 8.213/91 e da Lei 8.742/93 (LOAS).
 * Sem prazos ou valores que dependam de regulamento ou de categoria do segurado.
 */

export const bpcLoas: Landing = {
  slug: "bpc-loas",
  area: "previdenciario",
  kind: "assunto",
  name: "BPC/LOAS",
  summary: "Benefício assistencial para idosos e pessoas com deficiência.",
  photo: { alt: "Casal de idosos em cadeiras de rodas, sorrindo e batendo palmas", focus: "50% 35%" },
  seo: {
    title: "BPC para idosos e pessoas com deficiência",
    description:
      "Análise de pedidos, negativas e cortes do Benefício de Prestação Continuada (BPC/LOAS), considerando a composição familiar e a situação socioeconômica.",
  },
  hero: {
    title: "BPC para idosos e pessoas com deficiência",
    lead: "Análise de pedidos, negativas e cortes do Benefício de Prestação Continuada, considerando os requisitos pessoais, a composição da família e a situação socioeconômica.",
  },
  topics: {
    items: [
      "Pedido do BPC para pessoa idosa",
      "Pedido do BPC para pessoa com deficiência",
      "BPC negado",
      "BPC suspenso ou cortado",
    ],
  },
  notes: [
    {
      title: "Um benefício assistencial",
      text: "O BPC é um benefício da assistência social. A análise não se limita a verificar se houve contribuição ao INSS: considera critérios próprios previstos na lei, como a renda e a composição da família.",
    },
  ],
  law: {
    text: "O BPC garante um salário mínimo por mês à pessoa com deficiência e à pessoa idosa com 65 anos ou mais que comprovem não ter meios de se manter nem de ser mantidas pela família, conforme os critérios da lei.",
    source: "Lei 8.742/93 (LOAS), art. 20",
  },
  documents: [
    "Decisão do INSS, se houver",
    "Informações do CadÚnico",
    "Composição e renda da família",
    "Documentos sobre a deficiência, quando for o caso",
  ],
  faq: [
    {
      q: "O BPC é uma aposentadoria?",
      a: "Não. É um benefício assistencial, com requisitos e características próprios.",
    },
    {
      q: "Ter outra pessoa recebendo benefício em casa impede o pedido?",
      a: "Depende de quem faz parte da família, do tipo de renda e das exclusões previstas na lei. O caso exige análise individual.",
    },
  ],
};

export const auxilioDoenca: Landing = {
  slug: "auxilio-doenca",
  area: "previdenciario",
  kind: "assunto",
  name: "Auxílio-doença",
  summary: "Sem condições de trabalhar por doença? Veja como funciona.",
  photo: { alt: "Homem de chapéu e camiseta, ao ar livre", focus: "50% 30%" },
  seo: {
    title: "Auxílio-doença (auxílio por incapacidade temporária)",
    description:
      "Quem fica incapaz para o trabalho por mais de 15 dias seguidos pode ter direito ao auxílio por incapacidade temporária, o antigo auxílio-doença.",
  },
  hero: {
    title: "Está sem condições de trabalhar por doença?",
    lead: "Quem fica incapaz para o trabalho por mais de 15 dias seguidos pode ter direito ao auxílio por incapacidade temporária, o antigo auxílio-doença, se cumprir os requisitos.",
  },
  topics: {
    items: [
      "Primeiro pedido do benefício",
      "Perícia marcada ou já realizada",
      "Auxílio-doença negado",
      "Pedido de prorrogação",
      "Benefício cortado antes da recuperação",
    ],
  },
  law: {
    text: "O auxílio-doença é devido a quem fica incapaz para o trabalho ou para a atividade habitual por mais de 15 dias seguidos. Para o empregado, a empresa paga os primeiros 15 dias e o INSS paga a partir do 16º. Em regra, são exigidas 12 contribuições, com exceções previstas em lei.",
    source: "Lei 8.213/91, arts. 25, 26, 59 e 60",
  },
  documents: [
    "Laudos, exames e atestados recentes",
    "Extrato do CNIS (no aplicativo Meu INSS)",
    "Carteira de trabalho",
    "Carta com a decisão do INSS, se houver",
  ],
  faq: [
    {
      q: "Como funciona a perícia?",
      a: "A incapacidade é verificada em perícia médica. Laudos, exames e receitas recentes que mostrem a doença e as limitações ajudam na avaliação.",
    },
    {
      q: "O benefício foi cortado, mas ainda não me recuperei. E agora?",
      a: "A decisão pode ser analisada para verificar se cabe pedido de prorrogação, recurso ou ação judicial, conforme os documentos e os prazos.",
    },
    outraCidadePrevidencia,
  ],
};

export const aposentadoriaPorInvalidez: Landing = {
  slug: "aposentadoria-por-invalidez",
  area: "previdenciario",
  kind: "assunto",
  name: "Aposentadoria por invalidez",
  summary: "Incapacidade permanente para o trabalho? Pode existir direito.",
  photo: { alt: "Senhor de cabelos grisalhos e camisa azul, ao ar livre", focus: "50% 30%" },
  seo: {
    title: "Aposentadoria por invalidez (incapacidade permanente)",
    description:
      "Quando a incapacidade é permanente e não há possibilidade de reabilitação, pode existir direito à aposentadoria por incapacidade permanente.",
  },
  hero: {
    title: "Não tem mais condições de trabalhar?",
    lead: "Quando a incapacidade é permanente e não há possibilidade de reabilitação para outra atividade, pode existir direito à aposentadoria por incapacidade permanente, a antiga aposentadoria por invalidez.",
  },
  topics: {
    items: [
      "Doença ou lesão que impede o trabalho",
      "Auxílio-doença por muito tempo",
      "Pedido negado depois da perícia",
      "Benefício cortado em revisão",
    ],
  },
  law: {
    text: "A aposentadoria por incapacidade permanente é devida a quem for considerado incapaz e sem possibilidade de reabilitação para uma atividade que garanta o sustento, enquanto continuar nessa condição. A incapacidade é verificada em perícia médica. Em regra, são exigidas 12 contribuições, com exceções previstas em lei.",
    source: "Lei 8.213/91, arts. 25, 26 e 42",
  },
  documents: [
    "Laudos, exames e relatórios médicos",
    "Extrato do CNIS (no aplicativo Meu INSS)",
    "Histórico de benefícios recebidos",
    "Carta com a decisão do INSS, se houver",
  ],
  faq: [
    {
      q: "Preciso ter recebido auxílio-doença antes?",
      a: "Não necessariamente. A lei permite a aposentadoria por incapacidade permanente estando ou não em auxílio-doença. O que importa é a incapacidade verificada na perícia.",
    },
    outraCidadePrevidencia,
  ],
};

export const pensaoPorMorte: Landing = {
  slug: "pensao-por-morte",
  area: "previdenciario",
  kind: "assunto",
  name: "Pensão por morte",
  summary: "Benefício para a família de quem era segurado do INSS.",
  photo: { alt: "Senhora sorrindo, sentada, com os braços cruzados", focus: "50% 30%" },
  seo: {
    title: "Pensão por morte do INSS",
    description:
      "A pensão por morte é paga aos dependentes de quem era segurado do INSS, aposentado ou não. Requisitos e duração dependem de cada situação.",
  },
  hero: {
    title: "Perdeu um familiar e dependia da renda dele?",
    lead: "A pensão por morte é paga aos dependentes de quem era segurado do INSS, aposentado ou não. Os requisitos e a duração dependem de cada situação.",
  },
  topics: {
    items: [
      "Pedido de pensão para cônjuge ou companheiro(a)",
      "Pedido de pensão para filhos",
      "Comprovação de união estável",
      "Pensão negada",
      "Dúvidas sobre a duração da pensão",
    ],
  },
  law: {
    text: "A pensão por morte é devida ao conjunto dos dependentes do segurado que falecer, aposentado ou não. A lei define quem são os dependentes, como cônjuge, companheiro(a) e filhos, e não exige número mínimo de contribuições. A data do pedido influencia o início do pagamento.",
    source: "Lei 8.213/91, arts. 16, 26, I, e 74",
  },
  documents: [
    "Certidão de óbito",
    "Certidão de casamento ou provas da união estável",
    "Documentos dos filhos, se for o caso",
    "Carta com a decisão do INSS, se houver",
  ],
  faq: [
    {
      q: "Existe prazo para pedir?",
      a: "O pedido pode ser feito depois, mas a data em que é feito pode mudar o início do pagamento. Por isso, vale buscar orientação logo.",
    },
    {
      q: "Quanto tempo dura a pensão?",
      a: "Depende de quem recebe, da idade, do tempo de casamento ou de união estável e das contribuições de quem faleceu. A duração é verificada caso a caso.",
    },
  ],
};

export const aposentadoria: Landing = {
  slug: "aposentadoria",
  area: "previdenciario",
  kind: "assunto",
  name: "Aposentadoria",
  summary: "Quer saber se já pode se aposentar? Seu histórico é analisado.",
  photo: { alt: "Casal de idosos sorrindo, abraçados, em um parque", focus: "50% 40%" },
  seo: {
    title: "Aposentadoria pelo INSS: requisitos e planejamento",
    description:
      "As regras mudaram em 2019 e existem regras de transição. O tempo de trabalho, as contribuições e o tipo de atividade são analisados para verificar os requisitos.",
  },
  hero: {
    title: "Quer saber se já pode se aposentar?",
    lead: "As regras mudaram em 2019 e existem regras de transição. O tempo de trabalho, as contribuições e o tipo de atividade são analisados para verificar os requisitos.",
  },
  topics: {
    items: [
      "Aposentadoria por idade",
      "Tempo de trabalho rural",
      "Atividade com exposição a agentes nocivos",
      "Aposentadoria negada",
      "Conferência do cálculo do benefício",
      "Períodos sem carteira assinada",
    ],
  },
  law: {
    text: "A Reforma da Previdência de 2019 mudou os requisitos e criou regras de transição para quem já contribuía. Não existe uma única combinação de idade e tempo para todos: cada tipo de aposentadoria tem requisitos próprios.",
    source: "Emenda Constitucional 103/2019 · Lei 8.213/91",
  },
  documents: [
    "Extrato do CNIS (no aplicativo Meu INSS)",
    "Todas as carteiras de trabalho, inclusive as antigas",
    "Documentos de trabalho rural, se houver",
    "Carta de concessão, se já for aposentado",
  ],
  faq: [
    {
      q: "Trabalhei na roça sem pagar carnê. Conta?",
      a: "Pode contar, conforme as regras do trabalho rural e as provas da atividade, como documentos da época e testemunhas.",
    },
    {
      q: "O que é o CNIS?",
      a: "É o seu histórico no INSS, com os empregos e as contribuições. Dá para ver no aplicativo Meu INSS. Às vezes faltam períodos, o que é conferido no atendimento.",
    },
    outraCidadePrevidencia,
  ],
};

export const inss: Landing = {
  slug: "inss",
  area: "previdenciario",
  kind: "assunto",
  name: "Benefício negado ou cortado",
  summary: "O INSS negou ou cortou seu benefício? A decisão pode ser analisada.",
  photo: { alt: "Senhor de boné e camiseta branca, olhando para a câmera", focus: "50% 30%" },
  seo: {
    title: "Benefício do INSS negado ou cortado",
    description:
      "A decisão do INSS e os seus motivos podem ser analisados para verificar se cabe recurso, novo pedido ou ação judicial, considerando prazos e documentos.",
  },
  hero: {
    title: "O INSS negou ou cortou seu benefício?",
    lead: "A decisão do INSS e os seus motivos podem ser analisados para verificar se cabe recurso, novo pedido ou ação judicial, considerando documentos, requisitos e prazos.",
  },
  topics: {
    items: [
      "Perícia que considerou você apto ao trabalho",
      "Benefício cessado (cortado)",
      "Negativa por falta de contribuições",
      "Negativa por perda da qualidade de segurado",
      "Alta do INSS sem condições de voltar ao trabalho",
    ],
  },
  law: {
    text: "Os benefícios por incapacidade exigem, em regra, 12 contribuições, com exceções previstas em lei. O prazo em que a pessoa continua segurada depois de parar de contribuir varia conforme a categoria e o histórico de contribuições, e precisa ser verificado individualmente.",
    source: "Lei 8.213/91, arts. 15, 25 e 26",
  },
  documents: [
    "Carta de negativa ou de corte do INSS",
    "Laudos, exames e atestados",
    "Extrato do CNIS (no aplicativo Meu INSS)",
    "Carteira de trabalho",
  ],
  faq: [
    {
      q: "Existe prazo para recorrer?",
      a: "Sim, e costuma ser curto. Por isso, vale buscar orientação logo depois de receber a decisão.",
    },
    {
      q: "Preciso recorrer no INSS antes de ir à Justiça?",
      a: "Nem sempre. O caminho mais adequado (recurso, novo pedido ou ação judicial) é definido depois da análise da decisão.",
    },
    outraCidadePrevidencia,
  ],
};
