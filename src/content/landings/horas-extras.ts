import type { Landing } from "../types";

export const horasExtras: Landing = {
  slug: "horas-extras",
  category: "trabalhista",
  icon: "clock",
  topic: "Horas extras",
  summary: "Trabalhou além do horário, sem intervalo ou à noite e não recebeu? Essas horas podem ser cobradas.",
  seo: {
    title: "Horas extras não pagas: como cobrar os seus direitos",
    description:
      "Hora extra vale no mínimo 50% a mais. Intervalo de almoço cortado e trabalho noturno também geram pagamento. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Fazia horas extras e não recebia corretamente.",
  hero: {
    eyebrow: "Jornada de trabalho",
    question: "Trabalhou além do horário e não recebeu?",
    answer: "Cada hora extra vale *pelo menos 50% a mais*.",
    lead: "Chegar antes, sair depois, almoçar em 20 minutos, trabalhar no sábado ou de madrugada. Tudo isso tem regra e tem valor, e o que não foi pago pode ser cobrado dos últimos cinco anos.",
    legalBadge: "CF, art. 7º, XIII e XVI · CLT, arts. 59, 71 e 73",
  },
  law: {
    title: "O que a lei diz sobre a *sua jornada*",
    paragraphs: [
      "A Constituição limita a jornada a 8 horas por dia e 44 por semana e garante que a hora extra seja paga com adicional de, no mínimo, 50% (art. 7º, XIII e XVI). A CLT permite no máximo duas horas extras por dia (art. 59).",
      "Quem trabalha mais de 6 horas tem direito a pelo menos 1 hora de intervalo. Se o intervalo é cortado, o tempo suprimido deve ser pago com 50% a mais (CLT, art. 71, § 4º). O trabalho entre 22h e 5h é noturno e tem adicional de pelo menos 20%, com hora reduzida de 52 minutos e 30 segundos (art. 73).",
    ],
    pillars: [
      { title: "Limite", text: "8 horas por dia e 44 por semana, salvo regime de compensação válido." },
      { title: "Adicional", text: "Hora extra com pelo menos 50% a mais, ou o percentual maior da convenção coletiva." },
      { title: "Reflexos", text: "Horas extras habituais refletem em descanso semanal, férias, 13º, aviso prévio e FGTS." },
    ],
  },
  summaryBox:
    "Não é só a hora a mais no fim do dia. Intervalo de almoço reduzido, tempo esperando ordens, troca de uniforme obrigatória e trabalho em domingos e feriados também podem gerar pagamento. O primeiro passo é reconstruir a sua rotina real de trabalho.",
  situations: {
    title: "Como era *a sua rotina*?",
    intro: "Escolha a situação que mais se parece com o seu dia a dia de trabalho.",
    items: [
      {
        title: "Saía depois do horário todo dia",
        text: "As horas além da jornada contratada devem ser pagas como extras, com adicional e reflexos.",
        whatsapp: "Olá, Dr. Jhonny! Eu saía depois do horário todos os dias e não recebia hora extra.",
      },
      {
        title: "O almoço era corrido ou não existia",
        text: "Intervalo menor que 1 hora em jornada acima de 6 horas gera pagamento do tempo suprimido com 50% (CLT, art. 71, § 4º).",
        whatsapp: "Olá, Dr. Jhonny! Não tinha intervalo de almoço completo no trabalho.",
      },
      {
        title: "Trabalhava à noite sem adicional",
        text: "Entre 22h e 5h, o adicional noturno é de pelo menos 20%, e a hora noturna é menor que a diurna.",
        whatsapp: "Olá, Dr. Jhonny! Trabalhava à noite e não recebia adicional noturno.",
      },
      {
        title: "O ponto não mostrava a hora real",
        text: "Ponto “britânico”, sempre com o mesmo horário, ou ajustado pela empresa, pode ser questionado com outras provas.",
        whatsapp: "Olá, Dr. Jhonny! O ponto da empresa não mostrava o horário que eu realmente trabalhava.",
      },
      {
        title: "Diziam que eu era “cargo de confiança”",
        text: "Só fica fora do controle de jornada quem tem poder real de gestão e gratificação de pelo menos 40% (CLT, art. 62).",
        whatsapp: "Olá, Dr. Jhonny! A empresa dizia que eu era cargo de confiança e não pagava hora extra.",
      },
      {
        title: "Banco de horas que nunca era compensado",
        text: "O banco de horas tem regras de prazo. Horas não compensadas a tempo devem ser pagas como extras.",
        whatsapp: "Olá, Dr. Jhonny! Tinha banco de horas, mas as horas nunca eram compensadas.",
      },
    ],
  },
  documents: [
    "Espelhos de ponto ou fotos do registro de ponto",
    "Contracheques (para ver o que foi pago)",
    "Mensagens com horários, ordens fora do expediente ou escalas",
    "Nome de colegas que podem confirmar a rotina",
    "Anotações pessoais com horários de entrada e saída",
    "Contrato de trabalho e convenção coletiva, se tiver",
  ],
  mistakes: [
    "Achar que hora extra só conta se estiver no ponto",
    "Apagar conversas de WhatsApp com ordens fora do horário",
    "Acreditar que o “banco de horas” sempre substitui o pagamento",
    "Esperar mais de 2 anos depois da saída e perder o direito",
  ],
  myths: [
    {
      myth: "Se não estava no ponto, não tenho como provar.",
      fact: "Testemunhas, mensagens, e-mails e registros de sistema também servem como prova da jornada.",
      source: "CLT, art. 818",
    },
    {
      myth: "Cargo de confiança nunca recebe hora extra.",
      fact: "A exceção exige poder real de gestão e gratificação de função de pelo menos 40% do salário.",
      source: "CLT, art. 62, II e parágrafo único",
    },
    {
      myth: "Intervalo de almoço cortado não vale nada.",
      fact: "O tempo de intervalo suprimido deve ser pago com acréscimo de 50%.",
      source: "CLT, art. 71, § 4º",
    },
    {
      myth: "Só dá para cobrar o último ano.",
      fact: "É possível cobrar os últimos 5 anos, desde que a ação seja proposta em até 2 anos após o fim do contrato.",
      source: "CF, art. 7º, XXIX",
    },
  ],
  faq: [
    {
      q: "Quanto vale uma hora extra?",
      a: "No mínimo o valor da hora normal acrescido de 50%. Muitas convenções coletivas preveem percentuais maiores, e domingos e feriados trabalhados sem folga compensatória costumam ser pagos em dobro.",
    },
    {
      q: "Ainda trabalho na empresa. Posso cobrar?",
      a: "Pode. O prazo de 2 anos só começa a correr depois do fim do contrato, mas a cobrança alcança apenas os últimos 5 anos. Vale avaliar o momento certo com o advogado.",
    },
    {
      q: "Minha empresa tem menos de 20 funcionários e não tem ponto. E agora?",
      a: "O registro de ponto é obrigatório para estabelecimentos com mais de 20 trabalhadores (CLT, art. 74, § 2º). Sem ponto, a jornada pode ser provada por testemunhas, mensagens e outros documentos.",
    },
    {
      q: "Tempo para trocar de uniforme conta como jornada?",
      a: "Quando a troca é obrigatória e precisa ser feita na empresa, esse tempo pode ser considerado à disposição do empregador. Variações de até 5 minutos na marcação, limitadas a 10 por dia, não são computadas (CLT, art. 58, § 1º).",
    },
    {
      q: "Horas extras entram nas outras verbas?",
      a: "Sim, quando habituais. Elas refletem no descanso semanal remunerado, nas férias com um terço, no 13º, no aviso prévio e no FGTS.",
    },
  ],
  related: ["verbas-rescisorias", "fgts", "trabalhador-rural", "rescisao-indireta"],
};
