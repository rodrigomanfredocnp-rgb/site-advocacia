import type { Landing } from "../types";

export const trabalhadorRural: Landing = {
  slug: "trabalhador-rural",
  category: "trabalhista",
  icon: "wheat",
  topic: "Trabalhador rural",
  summary: "Operador de máquina, tratorista, safrista ou trabalhador de fazenda? O trabalho no campo tem regras e direitos próprios.",
  seo: {
    title: "Direitos do trabalhador rural: safra, horas extras e adicional",
    description:
      "Safristas, operadores de máquinas e trabalhadores de fazenda têm direitos próprios: adicional noturno de 25%, indenização de safra e mais. Fale com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Trabalho (ou trabalhei) no campo e quero entender meus direitos.",
  hero: {
    eyebrow: "Trabalho rural",
    question: "Trabalha na safra ou na fazenda?",
    answer: "O trabalho no campo tem *direitos próprios*, e muitos ficam sem pagar.",
    lead:
      "Jornadas longas no plantio e na colheita, trabalho de madrugada, contrato de safra, aplicação de defensivos, alojamento e transporte. A Lei do Trabalho Rural e a Constituição garantem ao trabalhador do campo os mesmos direitos do trabalhador urbano, e alguns a mais.",
    legalBadge: "Lei 5.889/73 · CF, art. 7º · NR-31",
  },
  law: {
    title: "A lei que protege *quem trabalha no campo*",
    paragraphs: [
      "A Constituição garante os mesmos direitos a trabalhadores urbanos e rurais (art. 7º). A Lei 5.889/73 considera empregado rural quem presta serviço não eventual em propriedade rural, sob dependência e mediante salário (art. 2º).",
      "No campo, o trabalho noturno vai das 21h às 5h na lavoura e das 20h às 4h na pecuária, com adicional de 25% (art. 7º). Ao fim do contrato de safra, o safrista recebe indenização de 1/12 do salário por mês trabalhado (art. 14). A NR-31 fixa as regras de segurança, alojamento, água, refeição e equipamentos no trabalho rural.",
    ],
    pillars: [
      { title: "Jornada", text: "Mesmo limite de 8 horas diárias e 44 semanais, com horas extras de pelo menos 50%." },
      { title: "Noite no campo", text: "Adicional noturno de 25%, maior que o do trabalhador urbano." },
      { title: "Safra", text: "Contrato de safra tem indenização própria, além de FGTS, férias e 13º proporcionais." },
    ],
  },
  summaryBox:
    "Em regiões de safra como a Chapada dos Parecis, é comum o operador de máquinas trabalhar 12 horas ou mais por dia na colheita, sem registro correto da jornada. Essas horas, o adicional noturno e a exposição a calor e defensivos podem gerar valores significativos.",
  situations: {
    title: "Como é *o seu trabalho* no campo?",
    intro: "Escolha a situação mais parecida com a sua.",
    items: [
      {
        title: "Jornadas longas na safra",
        text: "Plantio e colheita não suspendem o limite de jornada. O excesso deve ser pago como hora extra.",
        whatsapp: "Olá, Dr. Jhonny! Trabalho jornadas muito longas na safra sem receber hora extra.",
      },
      {
        title: "Trabalho de madrugada na colheita",
        text: "Na lavoura, o trabalho entre 21h e 5h tem adicional de 25% sobre a hora normal.",
        whatsapp: "Olá, Dr. Jhonny! Trabalho de madrugada na colheita e não recebo adicional noturno.",
      },
      {
        title: "Contrato de safra encerrado",
        text: "Ao fim da safra, são devidos indenização de 1/12 por mês, FGTS, férias e 13º proporcionais.",
        whatsapp: "Olá, Dr. Jhonny! Meu contrato de safra acabou e quero conferir o que tenho a receber.",
      },
      {
        title: "Aplico defensivos ou trabalho no calor",
        text: "Exposição a agrotóxicos e calor acima dos limites pode gerar adicional de insalubridade.",
        whatsapp: "Olá, Dr. Jhonny! Trabalho exposto a agrotóxicos ou calor intenso na fazenda.",
      },
      {
        title: "Trabalho sem registro na fazenda",
        text: "Diarista frequente, “chapa” ou ajudante fixo pode ter o vínculo reconhecido, com todos os direitos.",
        whatsapp: "Olá, Dr. Jhonny! Trabalho na fazenda sem carteira assinada.",
      },
      {
        title: "Alojamento e condições precárias",
        text: "A NR-31 exige alojamento adequado, água potável, instalações sanitárias e local para refeição.",
        whatsapp: "Olá, Dr. Jhonny! As condições de alojamento e trabalho na fazenda são precárias.",
      },
    ],
  },
  documents: [
    "Carteira de trabalho e contrato de safra, se houver",
    "Contracheques ou recibos de pagamento",
    "Mensagens com horários, escalas e ordens",
    "Fotos do alojamento, das máquinas e do local de trabalho",
    "Nome de colegas da mesma fazenda ou safra",
    "Fichas de EPI e exames médicos (ASO)",
  ],
  mistakes: [
    "Achar que na safra “não tem hora extra”",
    "Não guardar mensagens com horários de início e fim",
    "Deixar o prazo de 2 anos correr entre uma safra e outra",
    "Não pedir os documentos e o PPP ao sair da fazenda",
  ],
  myths: [
    {
      myth: "Na safra, o patrão pode exigir jornada sem limite.",
      fact: "O trabalhador rural tem o mesmo limite de jornada do urbano. O excesso é hora extra.",
      source: "CF, art. 7º, XIII e XVI",
    },
    {
      myth: "Adicional noturno no campo é igual ao da cidade.",
      fact: "No meio rural, o adicional noturno é de 25%, e o horário noturno varia entre lavoura e pecuária.",
      source: "Lei 5.889/73, art. 7º",
    },
    {
      myth: "Safrista não tem direito a nada no fim do contrato.",
      fact: "O safrista recebe indenização de 1/12 do salário por mês, além de férias, 13º e FGTS proporcionais.",
      source: "Lei 5.889/73, art. 14",
    },
    {
      myth: "O tempo de ônibus até a fazenda é sempre jornada.",
      fact: "Desde a Reforma Trabalhista de 2017, o trajeto não conta como jornada. Períodos anteriores a novembro de 2017 podem ter tratamento diferente.",
      source: "CLT, art. 58, § 2º",
    },
  ],
  faq: [
    {
      q: "O trabalhador rural tem FGTS?",
      a: "Sim. Desde a Constituição de 1988, o trabalhador rural tem os mesmos direitos do urbano, incluindo FGTS, férias com um terço, 13º e seguro-desemprego.",
    },
    {
      q: "Trabalho em várias safras para o mesmo produtor. Isso muda algo?",
      a: "Pode mudar. Contratos de safra sucessivos e sem intervalo podem indicar um vínculo contínuo, com direitos maiores. Vale analisar as datas de cada contrato.",
    },
    {
      q: "Operador de máquina agrícola tem direito a insalubridade?",
      a: "Depende da exposição a ruído, vibração, calor e poeira, e da eficácia dos equipamentos de proteção. A perícia avalia caso a caso.",
    },
    {
      q: "Trabalho rural ajuda na aposentadoria?",
      a: "Sim. O trabalhador rural pode se aposentar por idade aos 60 anos (homem) e 55 (mulher), comprovando 15 anos de atividade rural. O tempo no campo também pode somar com o tempo urbano.",
    },
  ],
  related: ["horas-extras", "insalubridade-periculosidade", "carteira-assinada", "aposentadoria"],
};
