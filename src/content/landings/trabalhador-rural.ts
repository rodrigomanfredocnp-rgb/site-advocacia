import type { Landing } from "../types";

export const trabalhadorRural: Landing = {
  slug: "trabalhador-rural",
  category: "trabalhista",
  topic: "Trabalhador rural",
  summary: "Trabalha na safra ou na fazenda? O trabalho no campo tem direitos próprios.",
  photoAlt: "Trabalhador rural de costas, em pé no meio do pasto",
  photoFocus: "50% 45%",
  seo: {
    title: "Direitos do trabalhador rural: safra, horas extras e adicional",
    description:
      "Safristas, operadores de máquinas e trabalhadores de fazenda têm direitos próprios: adicional noturno de 25%, indenização de safra e mais. Fale com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Trabalho (ou trabalhei) no campo e quero entender meus direitos.",
  hero: {
    title: "Trabalha na safra ou na fazenda?",
    lead: "No campo, você tem os mesmos direitos de quem trabalha na cidade, e alguns a mais. Hora extra, serviço de madrugada e fim de safra podem gerar valores a receber.",
  },
  situations: [
    {
      title: "Faço jornadas muito longas na safra",
      whatsapp: "Olá, Dr. Jhonny! Trabalho jornadas muito longas na safra sem receber hora extra.",
    },
    {
      title: "Trabalho de madrugada na colheita",
      whatsapp: "Olá, Dr. Jhonny! Trabalho de madrugada na colheita e não recebo adicional noturno.",
    },
    {
      title: "Meu contrato de safra acabou",
      whatsapp: "Olá, Dr. Jhonny! Meu contrato de safra acabou e quero conferir o que tenho a receber.",
    },
    {
      title: "Aplico agrotóxico ou trabalho no calor",
      whatsapp: "Olá, Dr. Jhonny! Trabalho exposto a agrotóxicos ou calor intenso na fazenda.",
    },
    {
      title: "Trabalho na fazenda sem carteira assinada",
      whatsapp: "Olá, Dr. Jhonny! Trabalho na fazenda sem carteira assinada.",
    },
    {
      title: "Falta água, banheiro ou alojamento decente",
      whatsapp: "Olá, Dr. Jhonny! As condições de alojamento e trabalho na fazenda são precárias.",
    },
  ],
  law: {
    text: "A Constituição dá a quem trabalha no campo os mesmos direitos de quem trabalha na cidade. No campo, a hora trabalhada à noite vale 25% a mais: das 21h às 5h na lavoura e das 20h às 4h na pecuária. No fim do contrato de safra, a lei prevê uma indenização de 1/12 do salário por mês trabalhado.",
    source: "CF, art. 7º · Lei 5.889/73, arts. 7º e 14",
  },
  faq: [
    {
      q: "Na safra tem hora extra?",
      a: "Tem. Quem trabalha no campo tem o mesmo limite de quem trabalha na cidade: 8 horas por dia e 44 por semana. O que passar disso é hora extra, paga com pelo menos 50% a mais.",
    },
    {
      q: "Faço várias safras para o mesmo patrão. Muda algo?",
      a: "Pode mudar. Contratos de safra seguidos e sem intervalo podem indicar um vínculo contínuo, com mais direitos. Vale conferir as datas e não deixar o prazo de 2 anos correr entre uma safra e outra.",
    },
    {
      q: "Trabalho na roça conta para a aposentadoria?",
      a: "Pode contar. O trabalhador rural pode se aposentar por idade aos 60 anos (homem) e 55 (mulher), comprovando 15 anos de atividade rural. O tempo no campo também pode somar com o tempo na cidade.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["horas-extras", "carteira-assinada", "aposentadoria"],
};
