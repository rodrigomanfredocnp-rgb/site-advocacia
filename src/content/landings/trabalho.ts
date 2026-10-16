import type { Landing } from "../types";
import { outraCidadeTrabalho, prazoTrabalhista } from "./_shared";

/*
 * Assuntos trabalhistas (páginas para trabalhadores, também usadas em tráfego pago).
 * Citações conferidas no texto oficial do Planalto. Correções da revisão de 16/10/2026 aplicadas:
 * prazo com a redação revisada, jornada como regra geral, insalubridade sem "sol forte",
 * rescisão indireta sem "qualquer tarefa fora da função", registro sem efeito automático no INSS,
 * trabalho rural sem afirmação geral sobre a indenização do contrato de safra.
 */

export const verbasRescisorias: Landing = {
  slug: "verbas-rescisorias",
  area: "trabalho",
  kind: "assunto",
  name: "Rescisão e verbas",
  summary: "Foi demitido? Confira se o acerto veio completo e no prazo.",
  photo: { alt: "Funcionário saindo do escritório carregando uma caixa com seus pertences", focus: "55% 45%" },
  seo: {
    title: "Rescisão atrasada ou com valores errados",
    description:
      "A empresa tem prazo para pagar a rescisão. Atraso e diferenças de cálculo são analisados com os documentos. Informações sobre atendimento pelo WhatsApp.",
  },
  hero: {
    title: "Sua rescisão atrasou ou veio errada?",
    lead: "A lei fixa um prazo para o pagamento da rescisão. Atraso no pagamento e diferenças nos valores são situações diferentes, e cada uma é analisada com os documentos.",
  },
  topics: {
    items: [
      "Rescisão não paga no prazo",
      "Valores que parecem menores do que o devido",
      "Proposta de parcelar o acerto",
      "FGTS ou seguro-desemprego não liberados",
      "Saída por acordo com a empresa",
      "Empresa que fechou sem pagar",
    ],
  },
  law: {
    text: "Quando o contrato termina, a empresa tem 10 dias para pagar as verbas e entregar os documentos. Se atrasar sem culpa do trabalhador, a lei prevê multa a favor dele, no valor do salário. Diferenças de cálculo são analisadas à parte.",
    source: "CLT, art. 477, §§ 6º e 8º",
  },
  documents: [
    "Termo de rescisão, se houver",
    "Carteira de trabalho",
    "Últimos contracheques",
    "Extrato do FGTS",
    "Aviso prévio ou comunicado de dispensa",
  ],
  faq: [
    {
      q: "O que costuma entrar no acerto?",
      a: "Depende de como foi a saída. Na dispensa sem justa causa, em geral entram saldo de salário, aviso prévio, férias com um terço, 13º proporcional e FGTS com multa de 40%. A conferência é feita com os documentos.",
    },
    prazoTrabalhista,
  ],
};

export const horasExtras: Landing = {
  slug: "horas-extras",
  area: "trabalho",
  kind: "assunto",
  name: "Horas extras",
  summary: "Trabalhou além do horário? Essas horas podem ser analisadas.",
  photo: { alt: "Mesa de trabalho com notebook e uma luminária acesa à noite", focus: "40% 55%" },
  seo: {
    title: "Horas extras não pagas",
    description:
      "Em regra, a jornada é de 8 horas por dia e 44 por semana. Horas a mais, intervalo e trabalho noturno são analisados conforme o regime de trabalho.",
  },
  hero: {
    title: "Trabalhou além do horário e não recebeu?",
    lead: "Em regra, a jornada é de até 8 horas por dia e 44 por semana. O que passa disso pode ser hora extra, conforme o regime de trabalho e os registros de cada caso.",
  },
  topics: {
    items: [
      "Saída depois do horário com frequência",
      "Intervalo de almoço reduzido",
      "Trabalho noturno sem adicional",
      "Ponto que não mostra o horário real",
      "Banco de horas sem compensação",
      "Função tratada como “cargo de confiança”",
    ],
  },
  law: {
    text: "Como regra geral, a Constituição limita a jornada a 8 horas por dia e 44 por semana, e a hora extra vale pelo menos 50% a mais. Acordos e regimes especiais podem mudar essa conta. No trabalho urbano, a hora entre 22h e 5h tem adicional de pelo menos 20%; no trabalho rural, as regras são próprias.",
    source: "CF, art. 7º, XIII e XVI · CLT, art. 73 · Lei 5.889/73, art. 7º",
  },
  documents: [
    "Espelhos ou fotos do registro de ponto",
    "Contracheques",
    "Escalas e mensagens com horários",
    "Anotações pessoais de entrada e saída",
    "Convenção coletiva da categoria, se tiver",
  ],
  faq: [
    {
      q: "O intervalo de almoço é sempre de uma hora?",
      a: "Não em todos os casos. A duração depende da jornada, do período analisado e de eventual norma coletiva. Por isso, o intervalo é conferido caso a caso.",
    },
    {
      q: "Não estava no ponto. Como mostrar a rotina?",
      a: "Colegas, mensagens, escalas e anotações com horários podem ajudar a mostrar a rotina real. O que serve como prova é avaliado no atendimento.",
    },
    prazoTrabalhista,
  ],
};

export const gestante: Landing = {
  slug: "gestante",
  area: "trabalho",
  kind: "assunto",
  name: "Gestante",
  summary: "Foi demitida grávida? Pode existir direito à estabilidade.",
  photo: { alt: "Mulher grávida em um campo ao entardecer, com as mãos na barriga", focus: "50% 45%" },
  seo: {
    title: "Demitida grávida: direitos da gestante",
    description:
      "A gestante tem proteção contra a dispensa sem justa causa desde a confirmação da gravidez até cinco meses após o parto. Informações sobre atendimento.",
  },
  hero: {
    title: "Você foi demitida grávida?",
    lead: "A lei protege o emprego da gestante desde a confirmação da gravidez até cinco meses após o parto. A proteção pode existir mesmo que a empresa não soubesse da gravidez.",
  },
  topics: {
    items: [
      "Dispensa durante a gravidez",
      "Gravidez descoberta depois da dispensa",
      "Pedido de demissão sem saber da gravidez",
      "Dispensa no contrato de experiência",
      "Trabalho sem carteira assinada",
    ],
  },
  law: {
    text: "A gestante não pode ser dispensada sem justa causa desde a confirmação da gravidez até cinco meses depois do parto. Basta que a gravidez tenha começado antes da dispensa, mesmo que ninguém soubesse. A proteção vale também no aviso prévio e no contrato de experiência.",
    source: "ADCT, art. 10, II, “b” · CLT, art. 391-A · STF, Tema 497 · Súmula 244 do TST",
  },
  documents: [
    "Carteira de trabalho",
    "Exame com a data provável da concepção",
    "Termo de rescisão ou aviso de dispensa",
    "Contracheques",
  ],
  faq: [
    {
      q: "Descobri a gravidez depois da dispensa. Pode existir direito?",
      a: "Pode. O ponto principal é se a gravidez já tinha começado durante o contrato ou o aviso prévio. O exame com a data provável da concepção costuma ser importante.",
    },
    {
      q: "Vou ser obrigada a voltar para a empresa?",
      a: "Não necessariamente. Enquanto durar a estabilidade, a lei prevê a volta ao emprego. Quando isso não é possível ou o período já passou, o caminho pode ser a indenização. Isso é analisado com você.",
    },
    prazoTrabalhista,
  ],
};

export const carteiraAssinada: Landing = {
  slug: "carteira-assinada",
  area: "trabalho",
  kind: "assunto",
  name: "Trabalho sem registro",
  summary: "Trabalhou sem carteira assinada? O vínculo pode ser analisado.",
  photo: { alt: "Funcionária de um café trabalhando no balcão", focus: "40% 35%" },
  seo: {
    title: "Trabalhei sem carteira assinada",
    description:
      "O vínculo de emprego pode ser reconhecido quando estão presentes os requisitos da lei e há provas. Informações sobre atendimento pelo WhatsApp.",
  },
  hero: {
    title: "Trabalhou sem carteira assinada?",
    lead: "O vínculo de emprego pode ser reconhecido quando o trabalho era pessoal, frequente, com ordens de um chefe e mediante salário. O reconhecimento depende dos requisitos da lei e das provas.",
  },
  topics: {
    items: [
      "Meses ou anos de trabalho sem registro",
      "Contratação como MEI ou PJ",
      "“Período de teste” sem carteira",
      "Carteira assinada com data posterior à real",
      "Trabalho doméstico sem registro",
      "Parte do salário paga “por fora”",
    ],
  },
  law: {
    text: "A CLT considera empregado quem presta serviço de forma não eventual, sob as ordens de quem paga o salário. O que conta é como o trabalho acontecia, e isso precisa ser demonstrado. No trabalho doméstico, a lei trata de quem trabalha mais de 2 dias por semana para a mesma família.",
    source: "CLT, art. 3º · Lei Complementar 150/2015, art. 1º",
  },
  documents: [
    "Comprovantes de pagamento (Pix, transferências, recibos)",
    "Mensagens com ordens, escalas e horários",
    "Fotos no local de trabalho, crachá ou uniforme",
    "Contrato de “prestação de serviço”, se assinou algum",
  ],
  faq: [
    {
      q: "Como mostrar que eu trabalhava lá?",
      a: "Testemunhas, mensagens, comprovantes de pagamento e fotos podem ajudar. A força de cada prova é avaliada no atendimento.",
    },
    {
      q: "O tempo sem registro conta para a aposentadoria?",
      a: "Pode contar, mas não de forma automática. O aproveitamento do período no INSS depende das provas e das regras previdenciárias, e é analisado à parte.",
    },
    prazoTrabalhista,
  ],
};

export const fgts: Landing = {
  slug: "fgts",
  area: "trabalho",
  kind: "assunto",
  name: "FGTS",
  summary: "Faltam depósitos no seu FGTS? O extrato pode ser conferido.",
  photo: { alt: "Homem sentado no sofá conferindo o celular", focus: "45% 35%" },
  seo: {
    title: "FGTS não depositado",
    description:
      "A empresa deve depositar todo mês 8% da remuneração no FGTS. Meses em branco ou valores menores podem ser conferidos. Informações sobre atendimento.",
  },
  hero: {
    title: "Seu FGTS está com depósitos faltando?",
    lead: "A empresa deve depositar todo mês, na conta do FGTS, 8% da remuneração do trabalhador. Meses em branco ou valores menores podem ser conferidos e cobrados.",
  },
  topics: {
    items: [
      "Meses sem depósito no extrato",
      "Depósitos menores do que o devido",
      "Multa de 40% não depositada na dispensa",
      "FGTS atrasado enquanto ainda trabalha",
      "Saque bloqueado depois da dispensa",
    ],
  },
  law: {
    text: "A empresa deve depositar até o dia 20 de cada mês 8% da remuneração do mês anterior, incluindo parcelas como horas extras, adicionais e 13º. Na dispensa sem justa causa, deve também depositar a multa de 40% sobre os depósitos do contrato.",
    source: "Lei 8.036/90, arts. 15 e 18",
  },
  documents: ["Extrato completo do FGTS", "Contracheques do período", "Carteira de trabalho", "Termo de rescisão, se já saiu"],
  faq: [
    {
      q: "Como confiro meu FGTS?",
      a: "Pelo aplicativo FGTS, da Caixa, ou em uma agência da Caixa. O extrato mostra, mês a mês, o que cada empresa depositou.",
    },
    {
      q: "Qual é o prazo para cobrar?",
      a: "O prazo para cobrar depósitos não feitos tem regras próprias, que dependem das datas dos depósitos e do fim do contrato. Por isso, o extrato é conferido no atendimento.",
    },
  ],
};

export const rescisaoIndireta: Landing = {
  slug: "rescisao-indireta",
  area: "trabalho",
  kind: "assunto",
  name: "Rescisão indireta",
  summary: "A empresa descumpre o contrato? Veja como funciona a saída.",
  photo: { alt: "Duas mulheres revisando documentos sobre uma mesa", focus: "40% 50%" },
  seo: {
    title: "Rescisão indireta: quando a falta é da empresa",
    description:
      "Em faltas graves previstas em lei, o contrato pode ser encerrado por culpa da empresa. O reconhecimento depende de análise e de decisão judicial.",
  },
  hero: {
    title: "A empresa descumpre o contrato e você quer sair?",
    lead: "Em faltas graves previstas em lei, como atraso de salário ou falta de depósito do FGTS, o contrato pode ser encerrado por culpa da empresa. O reconhecimento depende de análise e de decisão judicial.",
  },
  topics: {
    items: [
      "Salário atrasado com frequência",
      "FGTS sem depósito",
      "Tratamento humilhante ou rigor excessivo",
      "Trabalho com risco grave à saúde",
      "Redução do trabalho por peça ou tarefa que afeta o salário",
    ],
  },
  law: {
    text: "A CLT lista faltas graves da empresa que permitem ao trabalhador considerar o contrato encerrado, como não cumprir as obrigações do contrato ou tratá-lo com rigor excessivo. O reconhecimento depende de prova e de decisão judicial.",
    source: "CLT, art. 483",
  },
  documents: [
    "Contracheques e extratos com as datas de pagamento",
    "Extrato do FGTS",
    "Mensagens e comunicados da empresa",
    "Contrato de trabalho",
  ],
  faq: [
    {
      q: "Posso parar de trabalhar?",
      a: "Não é recomendável parar por conta própria antes de orientação. Em alguns casos, como salário ou obrigações do contrato não cumpridas, a lei permite continuar trabalhando enquanto o pedido é analisado.",
    },
    {
      q: "E se o pedido não for reconhecido?",
      a: "O resultado pode ser diferente do esperado. Por isso, as provas e os riscos são analisados antes de qualquer passo.",
    },
    prazoTrabalhista,
  ],
};

export const doencaOcupacional: Landing = {
  slug: "doenca-ocupacional",
  area: "trabalho",
  kind: "assunto",
  name: "Doença ligada ao trabalho",
  summary: "O trabalho prejudicou a sua saúde? Seus direitos podem ser analisados.",
  photo: { alt: "Fisioterapeuta atendendo uma paciente deitada na maca", focus: "50% 40%" },
  seo: {
    title: "Doença ocupacional: direitos de quem adoeceu pelo trabalho",
    description:
      "Quando uma doença é causada ou agravada pelo trabalho, podem existir direitos trabalhistas e previdenciários. A ligação com o trabalho é avaliada por perícia.",
  },
  hero: {
    title: "O trabalho prejudicou a sua saúde?",
    lead: "Quando uma doença é causada ou agravada pelo trabalho, podem existir direitos trabalhistas e previdenciários. A ligação com o trabalho é avaliada por perícia.",
  },
  topics: {
    items: [
      "Dores na coluna, nos braços ou nas articulações",
      "Perda auditiva",
      "Problemas respiratórios",
      "Ansiedade, depressão ou esgotamento ligados ao trabalho",
      "Dispensa durante o tratamento",
    ],
  },
  law: {
    text: "A Lei 8.213/91 protege a doença profissional e a doença do trabalho, e também os casos em que o trabalho não foi a única causa, mas contribuiu para a doença. Quem fica afastado pelo INSS por esse motivo pode ter estabilidade de 12 meses ao voltar.",
    source: "Lei 8.213/91, arts. 20, 21, I, e 118",
  },
  documents: [
    "Atestados, laudos e exames, em ordem de data",
    "Exames ocupacionais (admissional, periódicos e demissional)",
    "Cartas do INSS e resultados de perícias",
    "Descrição da sua função e da rotina de trabalho",
  ],
  faq: [
    {
      q: "Como se mostra que a doença veio do trabalho?",
      a: "Pela perícia médica, que avalia a função, o ambiente de trabalho e os documentos de saúde. Cada caso é analisado individualmente.",
    },
    {
      q: "Fui dispensado sem ter sido afastado. Tenho estabilidade?",
      a: "Em regra, a estabilidade depende de afastamento pelo INSS. Há situações em que a ligação com o trabalho é reconhecida depois da dispensa, o que exige análise.",
    },
  ],
};

export const insalubridadePericulosidade: Landing = {
  slug: "insalubridade-periculosidade",
  area: "trabalho",
  kind: "assunto",
  name: "Insalubridade e periculosidade",
  summary: "Trabalha exposto a riscos? Pode existir adicional no salário.",
  photo: { alt: "Soldador com máscara de proteção trabalhando no alto, ao entardecer", focus: "50% 35%" },
  seo: {
    title: "Adicional de insalubridade e periculosidade",
    description:
      "Exposição a agentes nocivos, inflamáveis ou eletricidade pode gerar adicional. A caracterização depende do agente, da exposição e das normas aplicáveis.",
  },
  hero: {
    title: "Você trabalha exposto a riscos?",
    lead: "Produtos químicos, agrotóxicos, barulho, combustíveis ou eletricidade podem gerar adicional no salário. A caracterização depende de perícia e das normas aplicáveis.",
  },
  topics: {
    items: [
      "Contato com agrotóxicos ou produtos químicos",
      "Barulho ou poeira em excesso",
      "Trabalho com combustível ou inflamáveis",
      "Trabalho com eletricidade",
      "Uso de moto para trabalhar",
    ],
  },
  law: {
    text: "A insalubridade dá adicional de 10%, 20% ou 40%, conforme o grau, quando a exposição passa dos limites das normas. A periculosidade dá adicional de 30% sobre o salário, em atividades como as com inflamáveis ou eletricidade. A caracterização depende do agente, das condições de exposição, do período e do enquadramento nas normas, verificados por perícia.",
    source: "CLT, arts. 192, 193 e 195",
  },
  documents: [
    "Contracheques (para ver se há adicional pago)",
    "Descrição da função e dos produtos ou máquinas usados",
    "Fichas de entrega de equipamentos de proteção",
    "Exames ocupacionais",
  ],
  faq: [
    {
      q: "Usar equipamento de proteção tira o direito?",
      a: "Depende. O adicional de insalubridade deixa de ser devido quando o equipamento elimina o risco à saúde. Isso é verificado na perícia.",
    },
    {
      q: "Posso receber os dois adicionais juntos?",
      a: "Em regra, não. Quando os dois são cabíveis, a lei prevê a escolha de um deles.",
    },
  ],
};

export const trabalhadorRural: Landing = {
  slug: "trabalhador-rural",
  area: "trabalho",
  kind: "assunto",
  name: "Trabalhador rural",
  summary: "Trabalha na safra ou na fazenda? O campo tem regras próprias.",
  photo: { alt: "Trabalhador rural de costas, em pé no meio do pasto", focus: "50% 45%" },
  seo: {
    title: "Direitos do trabalhador rural",
    description:
      "O trabalhador rural tem os direitos garantidos pela Constituição a todos os trabalhadores, com regras próprias da lei do trabalho rural. Informações sobre atendimento.",
  },
  hero: {
    title: "Trabalha na safra ou na fazenda?",
    lead: "O trabalhador rural tem os direitos garantidos pela Constituição a todos os trabalhadores, com algumas regras próprias da lei do trabalho rural.",
  },
  topics: {
    items: [
      "Jornadas longas na safra",
      "Trabalho noturno na colheita",
      "Fim do contrato de safra",
      "Trabalho na fazenda sem carteira assinada",
      "Contato com agrotóxicos",
      "Condições de alojamento, água e banheiro",
    ],
  },
  law: {
    text: "A Constituição garante direitos a trabalhadores urbanos e rurais. Na lei do trabalho rural, a hora noturna tem adicional de 25%: das 21h às 5h na lavoura e das 20h às 4h na pecuária. As verbas do fim de um contrato de safra são conferidas caso a caso.",
    source: "CF, art. 7º · Lei 5.889/73, art. 7º",
  },
  documents: [
    "Carteira de trabalho e contrato de safra, se houver",
    "Contracheques ou recibos",
    "Mensagens com horários e escalas",
    "Fichas de entrega de equipamentos de proteção",
  ],
  faq: [
    {
      q: "Na safra tem hora extra?",
      a: "Pode ter. A regra geral é de 8 horas por dia e 44 por semana, com as particularidades de cada contrato e de eventual norma coletiva.",
    },
    {
      q: "O trabalho na roça conta para a aposentadoria?",
      a: "Pode contar, conforme as regras do INSS e as provas da atividade rural. Isso é analisado no atendimento previdenciário.",
    },
    outraCidadeTrabalho,
  ],
};
