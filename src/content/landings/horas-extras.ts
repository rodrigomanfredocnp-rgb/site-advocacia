import type { Landing } from "../types";

export const horasExtras: Landing = {
  slug: "horas-extras",
  category: "trabalhista",
  topic: "Horas extras",
  summary: "Trabalhou além do horário e não recebeu? Essas horas podem ser cobradas.",
  photoAlt: "Mesa de trabalho com notebook e uma luminária acesa à noite",
  photoFocus: "40% 55%",
  seo: {
    title: "Horas extras não pagas: como cobrar os seus direitos",
    description:
      "Hora extra vale no mínimo 50% a mais. Intervalo de almoço cortado e trabalho noturno também geram pagamento. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Fazia horas extras e não recebia corretamente.",
  hero: {
    title: "Trabalhou além do horário e não recebeu?",
    lead: "Cada hora extra vale pelo menos 50% a mais. Almoço cortado e trabalho à noite também entram na conta, e o que não foi pago pode ser cobrado.",
  },
  situations: [
    {
      title: "Saía depois do horário todo dia",
      whatsapp: "Olá, Dr. Jhonny! Eu saía depois do horário todos os dias e não recebia hora extra.",
    },
    {
      title: "Meu almoço era corrido ou não existia",
      whatsapp: "Olá, Dr. Jhonny! Não tinha intervalo de almoço completo no trabalho.",
    },
    {
      title: "Trabalhava à noite sem adicional",
      whatsapp: "Olá, Dr. Jhonny! Trabalhava à noite e não recebia adicional noturno.",
    },
    {
      title: "O ponto não mostrava minha hora real",
      whatsapp: "Olá, Dr. Jhonny! O ponto da empresa não mostrava o horário que eu realmente trabalhava.",
    },
    {
      title: "Diziam que eu era “cargo de confiança”",
      whatsapp: "Olá, Dr. Jhonny! A empresa dizia que eu era cargo de confiança e não pagava hora extra.",
    },
    {
      title: "Meu banco de horas nunca era compensado",
      whatsapp: "Olá, Dr. Jhonny! Tinha banco de horas, mas as horas nunca eram compensadas.",
    },
  ],
  law: {
    text: "A jornada normal é de até 8 horas por dia e 44 por semana, e cada hora a mais vale pelo menos 50% a mais. Quem trabalha mais de 6 horas tem direito a 1 hora de intervalo e, se ele for cortado, esse tempo deve ser pago com 50% a mais. Entre 22h e 5h, o adicional noturno é de pelo menos 20%.",
    source: "CF, art. 7º, XIII e XVI · CLT, art. 71, § 4º · CLT, art. 73",
  },
  faq: [
    {
      q: "Não estava no ponto. Como vou provar?",
      a: "Colegas podem ser testemunhas. Mensagens, e-mails, escalas e anotações suas com os horários de entrada e saída também ajudam a mostrar a rotina real.",
    },
    {
      q: "Qual é o prazo para cobrar?",
      a: "Até 2 anos depois de sair da empresa, e a cobrança alcança os últimos 5 anos. Quem ainda trabalha lá também pode cobrar.",
    },
    {
      q: "Hora extra aumenta outros valores?",
      a: "Quando é frequente, sim. Ela também aumenta o valor do descanso semanal remunerado, das férias com um terço, do 13º, do aviso prévio e do FGTS.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["verbas-rescisorias", "rescisao-indireta", "trabalhador-rural"],
};
