import type { Landing } from "../types";

export const desvioDeFuncao: Landing = {
  slug: "desvio-de-funcao",
  category: "trabalhista",
  icon: "shuffle",
  topic: "Desvio de função e salário",
  summary: "Faz o trabalho de outro cargo ou ganha menos que um colega na mesma função? Pode haver diferença salarial a receber.",
  seo: {
    title: "Desvio de função e equiparação salarial: seus direitos",
    description:
      "Quem exerce função de cargo superior ou ganha menos que colega na mesma função pode cobrar diferenças salariais. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Faço trabalho de outra função e ganho menos por isso.",
  hero: {
    eyebrow: "Desvio de função e equiparação",
    question: "Faz o trabalho de um cargo e recebe por outro?",
    answer: "A diferença de salário *pode ser cobrada*.",
    lead:
      "Contratado como auxiliar e trabalhando como operador, registrado como serviços gerais e fazendo a função de motorista, ou ganhando menos que o colega ao lado pelo mesmo trabalho. Nesses casos, a lei garante o pagamento da diferença.",
    legalBadge: "CLT, art. 461 · OJ 125 da SDI-1 do TST",
  },
  law: {
    title: "Mesmo trabalho, *mesmo salário*",
    paragraphs: [
      "A CLT garante salário igual para quem exerce função idêntica, com trabalho de igual valor, para o mesmo empregador e no mesmo estabelecimento, sem distinção de sexo, etnia, nacionalidade ou idade. A diferença de tempo de serviço entre os dois não pode passar de 4 anos, e a de tempo na função, de 2 anos (art. 461).",
      "Já no desvio de função, quando o empregado passa a exercer as atividades de um cargo mais bem remunerado, o TST garante o pagamento das diferenças salariais do período, ainda que não haja mudança formal de cargo (OJ 125 da SDI-1).",
    ],
    pillars: [
      { title: "Função real", text: "O que importa é o que você faz no dia a dia, não o nome do cargo na carteira." },
      { title: "Comparação", text: "Compara-se com o salário do cargo exercido ou do colega que faz o mesmo trabalho." },
      { title: "Diferenças", text: "A diferença mensal é paga com reflexos em férias, 13º, FGTS e demais verbas." },
    ],
  },
  summaryBox:
    "Se a empresa tem plano de cargos e salários válido, a equiparação segue as regras do plano. Já fazer tarefas compatíveis com a sua função, mesmo que variadas, em regra não gera adicional. A análise depende de comparar o seu cargo com o que você realmente faz.",
  situations: {
    title: "Qual destas *descreve o seu caso*?",
    intro: "Escolha a situação mais próxima da sua rotina.",
    items: [
      {
        title: "Fui registrado em um cargo e trabalho em outro",
        text: "Exercer as atividades de um cargo de salário maior gera direito às diferenças salariais.",
        whatsapp: "Olá, Dr. Jhonny! Sou registrado em um cargo, mas trabalho em outro que paga mais.",
      },
      {
        title: "Um colega ganha mais para fazer o mesmo",
        text: "Função idêntica, mesmo estabelecimento e diferença de tempo dentro do limite legal garantem salário igual.",
        whatsapp: "Olá, Dr. Jhonny! Um colega recebe mais do que eu para fazer o mesmo trabalho.",
      },
      {
        title: "Substituo o chefe sem receber por isso",
        text: "Substituições que não são meramente eventuais podem garantir o salário do substituído durante o período.",
        whatsapp: "Olá, Dr. Jhonny! Eu substituo meu chefe, mas não recebo o salário dele.",
      },
      {
        title: "Ganho menos por ser mulher",
        text: "A lei proíbe diferença salarial por sexo, etnia, nacionalidade ou idade para o mesmo trabalho.",
        whatsapp: "Olá, Dr. Jhonny! Recebo menos que colegas homens para fazer o mesmo trabalho.",
      },
      {
        title: "Prometeram promoção que nunca veio",
        text: "Se você já exerce a nova função, a diferença salarial pode ser devida mesmo sem a promoção formal.",
        whatsapp: "Olá, Dr. Jhonny! Já faço a função de um cargo superior, mas a promoção nunca saiu.",
      },
      {
        title: "Opero máquinas, mas sou registrado como ajudante",
        text: "Situação comum no agro e na indústria. O registro deve refletir a função exercida e o salário correspondente.",
        whatsapp: "Olá, Dr. Jhonny! Opero máquinas, mas sou registrado como ajudante.",
      },
    ],
  },
  documents: [
    "Carteira de trabalho com o cargo registrado",
    "Contracheques",
    "Mensagens, escalas ou ordens que mostrem a função real",
    "Nome do colega usado como comparação, se for o caso",
    "Certificados e habilitações exigidos pela função (ex.: CNH, NR)",
    "Convenção coletiva da categoria, se tiver",
  ],
  mistakes: [
    "Achar que o nome do cargo na carteira é o que vale",
    "Não guardar provas da função realmente exercida",
    "Aceitar “promessa de promoção” por anos sem registro",
    "Perder o prazo de 2 anos após o fim do contrato",
  ],
  myths: [
    {
      myth: "Se na carteira está outro cargo, não tenho como provar.",
      fact: "Prevalece a realidade: testemunhas, mensagens e documentos mostram a função exercida.",
    },
    {
      myth: "Desvio de função me dá direito ao cargo novo.",
      fact: "O desvio garante as diferenças salariais do período, não o reenquadramento automático no cargo.",
      source: "OJ 125 da SDI-1 do TST",
    },
    {
      myth: "Salário diferente para o mesmo trabalho é escolha da empresa.",
      fact: "A lei exige salário igual para trabalho de igual valor, dentro dos requisitos do art. 461.",
      source: "CLT, art. 461",
    },
    {
      myth: "Fazer várias tarefas sempre gera adicional.",
      fact: "Tarefas compatíveis com a função contratada, em regra, não geram adicional. O desvio exige função de outro cargo.",
      source: "CLT, art. 456, parágrafo único",
    },
  ],
  faq: [
    {
      q: "O que é equiparação salarial?",
      a: "É o direito de receber o mesmo salário de um colega que exerce a mesma função, com a mesma produtividade e perfeição técnica, para o mesmo empregador e no mesmo estabelecimento, respeitados os limites de diferença de tempo previstos no art. 461 da CLT.",
    },
    {
      q: "Qual é a diferença entre desvio e acúmulo de função?",
      a: "No desvio, você deixa de fazer a sua função e passa a fazer a de outro cargo. No acúmulo, soma atividades de outra função à sua. O acúmulo é mais restrito e depende do caso e da norma coletiva.",
    },
    {
      q: "Posso cobrar enquanto ainda trabalho lá?",
      a: "Pode. As diferenças dos últimos 5 anos podem ser cobradas. A conversa com o advogado é sigilosa.",
    },
  ],
  related: ["horas-extras", "rescisao-indireta", "verbas-rescisorias", "trabalhador-rural"],
};
