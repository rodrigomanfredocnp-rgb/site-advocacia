import type { Landing } from "../types";
import { outraCidadePrevidencia, outraCidadeTrabalho, prazoTrabalhista } from "./_shared";

/*
 * Páginas das áreas de atuação. Textos da revisão do titular (16/10/2026).
 * Cível vem primeiro: é a área de maior importância hoje.
 */

export const direitoCivel: Landing = {
  slug: "direito-civel",
  area: "civel",
  kind: "area",
  name: "Direito Cível",
  summary: "Contratos, cobranças, acordos descumpridos e responsabilidade civil.",
  photo: { alt: "Pessoa assinando um contrato sobre uma mesa de madeira", focus: "50% 45%" },
  seo: {
    title: "Direito Cível: contratos, cobranças e acordos",
    description:
      "Atuação em contratos, obrigações, responsabilidade civil e demandas patrimoniais. Atendimento presencial em Campo Novo do Parecis/MT e online.",
  },
  hero: {
    title: "Direito Cível",
    lead: "Atuação em questões contratuais, obrigações, responsabilidade civil e demandas patrimoniais, com análise de documentos e acompanhamento das medidas judiciais ou extrajudiciais adequadas ao caso.",
  },
  topics: {
    items: [
      "Contratos e o seu cumprimento",
      "Cobranças",
      "Acordos descumpridos",
      "Responsabilidade civil",
      "Cumprimento de decisões judiciais",
    ],
  },
  notes: [
    {
      title: "O que é a execução",
      text: "A execução é o caminho para buscar o cumprimento de uma obrigação já reconhecida, como um acordo assinado ou uma decisão judicial. A análise mostra quais medidas cabem, sem garantia de recuperação de valores.",
    },
  ],
  documents: [
    "Contrato ou acordo",
    "Comprovantes de pagamento ou de entrega",
    "Notificações enviadas ou recebidas",
    "Mensagens e e-mails importantes sobre o assunto",
    "Número do processo, se houver",
  ],
  faq: [
    {
      q: "Um acordo não foi cumprido. Como o caso é analisado?",
      a: "São examinados o conteúdo do acordo, a forma como foi feito, os vencimentos e os comprovantes disponíveis para avaliar as medidas cabíveis.",
    },
    {
      q: "O atendimento exige entrar com processo?",
      a: "Não necessariamente. A análise pode levar a orientação, negociação, notificação ou atuação judicial, conforme a situação.",
    },
  ],
};

export const direitoDoTrabalho: Landing = {
  slug: "direito-do-trabalho",
  area: "trabalho",
  kind: "area",
  name: "Direito do Trabalho",
  summary: "Para trabalhadores e empresas, com atuação em todo o Brasil.",
  photo: { alt: "Trabalhador de capacete e camisa azul operando uma máquina em uma oficina", focus: "50% 30%" },
  seo: {
    title: "Direito do Trabalho para trabalhadores e empresas",
    description:
      "Atuação trabalhista para trabalhadores e empresas: rescisão, jornada, registro, FGTS, gestante e defesa em reclamações. Atendimento online em todo o Brasil.",
  },
  hero: {
    title: "Direito do Trabalho",
    lead: "Atuação em questões relacionadas ao contrato de trabalho, com atendimento a trabalhadores e empresas e análise das particularidades de cada relação profissional.",
  },
  paths: [
    {
      title: "Trabalhadores",
      text: "Rescisão, verbas trabalhistas, jornada, registro, FGTS, gestação, doenças ligadas ao trabalho e adicionais, conforme cada caso.",
      href: "#assuntos",
      cta: "Ver os assuntos",
    },
    {
      title: "Empresas",
      text: "Orientação sobre relações de trabalho, defesa em reclamações trabalhistas, acompanhamento de audiências e análise de acordos.",
      href: "/trabalhista-para-empresas",
      cta: "Conheça o atendimento a empresas",
    },
  ],
  children: [
    "verbas-rescisorias",
    "horas-extras",
    "carteira-assinada",
    "fgts",
    "gestante",
    "rescisao-indireta",
    "doenca-ocupacional",
    "insalubridade-periculosidade",
    "trabalhador-rural",
  ],
  documents: [
    "Carteira de trabalho (física ou digital)",
    "Contracheques",
    "Termo de rescisão, se houver",
    "Controles de jornada (ponto)",
    "Mensagens e comunicados importantes",
  ],
  faq: [
    outraCidadeTrabalho,
    {
      q: "Posso pedir orientação enquanto ainda trabalho?",
      a: "Sim. É possível buscar orientação durante o contrato. O contato é tratado com sigilo profissional, e as providências são definidas depois da análise.",
    },
    prazoTrabalhista,
  ],
};

export const trabalhistaParaEmpresas: Landing = {
  slug: "trabalhista-para-empresas",
  area: "trabalho",
  kind: "assunto",
  name: "Trabalhista para empresas",
  summary: "Defesa em reclamações, audiências e análise de acordos.",
  photo: { alt: "Dois homens sentados à mesa de um escritório, em reunião", focus: "50% 40%" },
  seo: {
    title: "Direito do Trabalho para empresas",
    description:
      "Orientação sobre relações de trabalho, defesa em reclamações trabalhistas, acompanhamento de audiências e análise de acordos. Atendimento online em todo o Brasil.",
  },
  hero: {
    title: "Direito do Trabalho para empresas",
    lead: "Orientação sobre relações de trabalho, defesa em reclamações trabalhistas, acompanhamento de audiências e análise de acordos.",
  },
  topics: {
    items: [
      "Orientação sobre relações de trabalho",
      "Defesa em reclamações trabalhistas",
      "Acompanhamento de audiências",
      "Análise de propostas de acordo",
    ],
  },
  documents: [
    "Notificação da Justiça do Trabalho, se houver",
    "Contrato de trabalho e ficha do empregado",
    "Controles de jornada e recibos de pagamento",
    "Termo de rescisão, se houver",
    "Propostas de acordo em discussão",
  ],
  faq: [
    {
      q: "A empresa recebeu uma notificação da Justiça do Trabalho. O que fazer?",
      a: "Informe a data da audiência indicada na notificação. Os documentos do contrato são analisados para preparar a defesa e avaliar a possibilidade de acordo.",
    },
    outraCidadeTrabalho,
  ],
};

export const direitoPrevidenciario: Landing = {
  slug: "direito-previdenciario",
  area: "previdenciario",
  kind: "area",
  name: "Direito Previdenciário",
  summary: "INSS, auxílio-doença, pensão por morte, aposentadorias e BPC.",
  photo: { alt: "Senhor sorrindo, abraçado pela filha, ao ar livre", focus: "45% 35%" },
  seo: {
    title: "Benefícios do INSS e aposentadorias",
    description:
      "Auxílio-doença, aposentadoria por invalidez, pensão por morte, aposentadorias, benefício negado ou cortado e BPC/LOAS. Atendimento online em todo o Brasil.",
  },
  hero: {
    title: "Benefícios do INSS e aposentadorias",
    lead: "Orientação e acompanhamento de pedidos no INSS e de processos judiciais sobre benefícios, com análise do histórico de contribuições, dos documentos e dos requisitos de cada caso.",
  },
  topics: {
    title: "Assuntos atendidos",
    items: [
      "Auxílio por incapacidade temporária (antigo auxílio-doença)",
      "Aposentadoria por incapacidade permanente (antiga aposentadoria por invalidez)",
      "Pensão por morte",
      "Aposentadorias",
      "Auxílio-acidente",
      "Benefício negado ou cortado",
      "BPC/LOAS, benefício assistencial",
    ],
  },
  children: ["bpc-loas", "auxilio-doenca", "aposentadoria-por-invalidez", "pensao-por-morte", "aposentadoria", "inss"],
  documents: [
    "Extrato do CNIS (no aplicativo Meu INSS)",
    "Carteiras de trabalho, inclusive as antigas",
    "Carta com a decisão do INSS, se houver",
    "Documentos médicos, quando o assunto for incapacidade",
  ],
  notes: [
    {
      title: "Sua senha é só sua",
      text: "Não é preciso informar a senha do gov.br. Os documentos necessários são indicados no atendimento.",
    },
  ],
  faq: [
    {
      q: "Uma negativa do INSS encerra as possibilidades?",
      a: "Não necessariamente. A decisão e os seus motivos podem ser analisados para verificar se cabe recurso, novo pedido ou ação judicial, considerando documentos, requisitos e prazos.",
    },
    outraCidadePrevidencia,
  ],
};

export const familiaESucessoes: Landing = {
  slug: "familia-e-sucessoes",
  area: "familia",
  kind: "area",
  name: "Família e Sucessões",
  summary: "Divórcio, guarda, alimentos, inventários e partilha.",
  photo: { alt: "Casal lendo papéis juntos na cozinha de casa", focus: "55% 45%" },
  seo: {
    title: "Família, inventários e sucessões",
    description:
      "Divórcio, guarda, convivência, alimentos, inventários e partilha, com análise das possibilidades de solução consensual ou judicial.",
  },
  hero: {
    title: "Família, inventários e sucessões",
    lead: "Orientação e acompanhamento de questões familiares e sucessórias, com análise dos documentos e das possibilidades de solução consensual ou judicial.",
  },
  topics: {
    items: ["Divórcio", "Guarda e convivência", "Pensão alimentícia (alimentos)", "Inventários", "Partilha de bens"],
  },
  documents: [
    "Certidões (casamento, nascimento ou óbito, conforme o caso)",
    "Decisões judiciais já existentes",
    "Documentos dos bens (imóveis, veículos, contas)",
  ],
  faq: [
    {
      q: "Todo inventário precisa ser judicial?",
      a: "Não necessariamente. O caminho adequado depende da situação da família, dos documentos e das regras aplicáveis. A possibilidade de fazer em cartório é avaliada caso a caso.",
    },
    {
      q: "É possível buscar um acordo?",
      a: "Sim, quando o acordo for compatível com os direitos envolvidos e com a situação das partes.",
    },
  ],
};

export const aposentadoriaDeServidores: Landing = {
  slug: "aposentadoria-de-servidores",
  area: "servidores",
  kind: "area",
  name: "Aposentadoria de servidores públicos",
  summary: "Análise do regime aplicável e dos requisitos do benefício.",
  photo: { alt: "Servidora de óculos organizando pastas em um arquivo", focus: "55% 40%" },
  seo: {
    title: "Aposentadoria de servidores públicos",
    description:
      "Análise dos requisitos de aposentadoria de servidores públicos, considerando o vínculo, o regime previdenciário e as regras aplicáveis ao ente público.",
  },
  hero: {
    title: "Aposentadoria de servidores públicos",
    lead: "Análise dos requisitos de aposentadoria de servidores públicos, considerando o vínculo, o regime previdenciário, o histórico de contribuições e as regras aplicáveis ao ente público.",
  },
  topics: {
    items: [
      "Requisitos de aposentadoria",
      "Histórico funcional e de contribuições",
      "Pedidos e decisões administrativas",
      "Revisão de informações que afetam o benefício",
    ],
  },
  documents: [
    "Histórico funcional",
    "Certidões de tempo de contribuição",
    "Contracheques",
    "Decisões administrativas, se houver",
  ],
  faq: [
    {
      q: "Todo servidor se aposenta pelas regras do INSS?",
      a: "Não. É preciso identificar o regime previdenciário do vínculo e as regras aplicáveis à situação do servidor.",
    },
    {
      q: "As regras são iguais em todos os municípios e estados?",
      a: "A análise depende da legislação do ente e do regime, além das datas e das condições do vínculo.",
    },
  ],
};

export const transito: Landing = {
  slug: "transito",
  area: "transito",
  kind: "area",
  name: "Trânsito",
  summary: "Questões administrativas e judiciais relacionadas a trânsito.",
  photo: { alt: "Estrada asfaltada entre árvores, com carros ao longe", focus: "50% 55%" },
  seo: {
    title: "Questões de trânsito",
    description: "Orientação e atuação em questões administrativas e judiciais relacionadas a trânsito, conforme cada caso.",
  },
  hero: {
    title: "Questões de trânsito",
    lead: "Orientação e atuação em questões administrativas e judiciais relacionadas a trânsito, conforme os documentos, as notificações e as particularidades de cada caso.",
  },
  topics: {
    items: ["Análise de notificações e decisões", "Procedimentos administrativos", "Processos judiciais relacionados a trânsito"],
  },
  documents: ["Notificação ou decisão recebida", "Documentos do procedimento, se houver"],
  faq: [
    {
      q: "O que preciso apresentar no primeiro atendimento?",
      a: "Informe o assunto e se existe notificação, decisão ou prazo em andamento. Os documentos necessários são indicados conforme o procedimento.",
    },
    {
      q: "Toda questão de trânsito pode ser resolvida por recurso?",
      a: "A medida depende do tipo de procedimento, dos motivos da decisão e dos prazos. Não existe uma solução única para todas as situações.",
    },
  ],
};

export const criminal: Landing = {
  slug: "criminal",
  area: "criminal",
  kind: "area",
  name: "Criminal",
  summary: "Defesa e acompanhamento, incluindo habeas corpus quando cabível.",
  seo: {
    title: "Atuação criminal",
    description:
      "Defesa e acompanhamento de demandas criminais, com análise das medidas cabíveis, incluindo habeas corpus quando presentes os seus requisitos.",
  },
  hero: {
    title: "Atuação criminal",
    lead: "Defesa e acompanhamento de demandas criminais, com análise das medidas cabíveis em cada situação, incluindo habeas corpus quando presentes os seus requisitos.",
  },
  topics: {
    items: [
      "Defesa em procedimentos e processos criminais",
      "Acompanhamento de demandas criminais",
      "Análise e impetração de habeas corpus, quando cabível",
    ],
  },
  documents: ["Informações sobre a ocorrência", "Decisões já existentes", "Número do procedimento ou do processo, se houver"],
  faq: [
    {
      q: "É possível avaliar a necessidade de habeas corpus?",
      a: "A avaliação depende dos fatos, dos documentos e da situação do processo. O cabimento da medida é definido depois da análise jurídica.",
    },
    {
      q: "O contato pelo site significa atendimento imediato?",
      a: "O contato permite pedir informações sobre a disponibilidade. Receber uma mensagem não confirma a aceitação do caso nem a adoção de uma medida urgente.",
    },
  ],
};

export const dividasEAgronegocio: Landing = {
  slug: "dividas-e-agronegocio",
  area: "dividas",
  kind: "area",
  name: "Dívidas e agronegócio",
  summary: "Atuação em parceria em cobranças, execuções e dívidas rurais.",
  photo: { alt: "Colheitadeira trabalhando em uma lavoura ao entardecer", focus: "50% 55%" },
  seo: {
    title: "Dívidas e agronegócio",
    description:
      "Atuação em parceria com advogados em cobranças, execuções de dívidas e análise de alternativas de renegociação de dívidas do agronegócio.",
  },
  hero: {
    title: "Dívidas e agronegócio",
    lead: "Atuação em parceria com advogados em cobranças e execuções de dívidas e na análise de alternativas de renegociação de obrigações ligadas ao agronegócio.",
  },
  topics: {
    items: ["Cobrança de dívidas", "Execução de dívidas", "Análise de alternativas de renegociação de dívidas rurais"],
  },
  notes: [
    {
      title: "Como é feita a análise",
      text: "A análise considera os contratos, os vencimentos, as garantias e os documentos disponíveis. A possibilidade de renegociação, parcelamento ou outra medida depende das condições jurídicas e contratuais de cada caso.",
    },
    {
      title: "Atuação em parceria",
      text: "Nessas demandas, o escritório pode atuar em conjunto com advogados parceiros. A composição do atendimento e a responsabilidade de cada profissional são esclarecidas conforme o caso.",
    },
  ],
  documents: [
    "Contratos e aditivos",
    "Demonstrativos da dívida",
    "Documentos das garantias",
    "Notificações recebidas",
    "Documentos do processo, se houver",
  ],
  faq: [
    {
      q: "Toda dívida rural pode ser alongada ou parcelada?",
      a: "Não há uma resposta única. É preciso examinar a natureza da dívida, o contrato, os requisitos aplicáveis e a situação concreta.",
    },
    {
      q: "Quem vai acompanhar o caso?",
      a: "A composição do atendimento é definida conforme o caso, com informação sobre a atuação de Jhonny Cardoso e dos advogados parceiros e sobre as responsabilidades de cada um.",
    },
  ],
};

export const apoioAEscritorios: Landing = {
  slug: "apoio-a-escritorios",
  area: "escritorios",
  kind: "area",
  name: "Para advogados e escritórios",
  summary: "Apoio local em Campo Novo do Parecis/MT para audiências e diligências.",
  photo: { alt: "Três pessoas em reunião, uma delas assinando um documento", focus: "50% 50%" },
  seo: {
    title: "Apoio jurídico local em Campo Novo do Parecis",
    description:
      "Apoio a advogados e escritórios de outras cidades em audiências e diligências judiciais e administrativas em Campo Novo do Parecis/MT.",
  },
  hero: {
    title: "Apoio jurídico local em Campo Novo do Parecis",
    lead: "Apoio a advogados e escritórios de outras localidades em audiências e diligências em Campo Novo do Parecis/MT, com definição prévia do escopo, dos documentos necessários e da disponibilidade.",
  },
  topics: {
    title: "Escopo",
    items: [
      "Audiências e diligências trabalhistas",
      "Diligências judiciais e administrativas",
      "Atos perante o Procon, conforme a demanda",
      "Comunicação sobre a realização do ato e envio dos documentos",
    ],
  },
  notes: [
    {
      title: "Quem realiza o ato",
      text: "O atendimento pode envolver Jhonny Cardoso e advogados parceiros, conforme o ato solicitado. O profissional responsável e as condições do serviço são informados antes da execução.",
    },
    {
      title: "Documentos sigilosos",
      text: "Evite enviar documentos sigilosos antes de receber a orientação sobre o canal de envio.",
    },
  ],
  documentsTitle: "Para pedir informações, indique",
  documents: ["O ato a ser realizado", "O local, a data e o horário", "O prazo disponível"],
  faq: [
    {
      q: "O envio de uma solicitação confirma a diligência?",
      a: "Não. A disponibilidade e a aceitação precisam ser confirmadas, com o ajuste do escopo e o recebimento dos documentos necessários.",
    },
    {
      q: "O apoio é oferecido fora de Campo Novo do Parecis?",
      a: "A disponibilidade para outras localidades deve ser consultada antes.",
    },
  ],
  whatsapp: "Olá, gostaria de informações sobre apoio local a escritório. Vim pelo site.",
};
