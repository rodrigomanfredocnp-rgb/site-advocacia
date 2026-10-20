# CLAUDE.md — Site Jhonny Cardoso Advogado

Instruções permanentes do projeto. Leia inteiro antes de qualquer trabalho.
Idioma de trabalho e de todo o conteúdo do site: **português do Brasil**.

## 1. O projeto

Site institucional + páginas por área e por assunto do advogado **Jhonny Henrique Guollo Cardoso**, **OAB/MT 33.424/O** (formato informado pelo titular na revisão de 16/10/2026; o papel timbrado antigo diz 33.428, está errado). Escritório em Campo Novo do Parecis/MT, **atendimento presencial e online em todo o Brasil**, com atuação nacional especialmente trabalhista e previdenciária. **Mais de três anos de atuação** (não inferir ano de início).

**Revisão do titular (16/10/2026) — fonte da verdade do conteúdo.** Documento "Revisão completa do site" + 3 áudios. Decisões:

- **Direito Cível em primeiro plano** (é o motor do escritório). Depois Trabalhista e Previdenciário (áreas principais, atuação nacional).
- Complementares: **Família e Sucessões**, **Aposentadoria de servidores públicos**, **Trânsito**, **Criminal** (discreto, com habeas corpus quando cabível; sem sirenes, algemas, plantão 24h ou promessa de liberdade). **Dívidas e agronegócio** só **em parceria**. **Para advogados e escritórios** (apoio local; única menção permitida ao Procon).
- **Nunca** apresentar Direito do Consumidor como área.
- Previdenciário com mais foco (áudio): auxílio-doença, pensão por morte, aposentadorias, aposentadoria por incapacidade permanente, BPC em destaque como benefício assistencial.
- **Acidente de trabalho saiu** (o titular não atua nesse nicho; não usar a expressão). Também saíram assédio, justa causa e desvio de função (não constam da revisão).
- Cada assunto continua com página própria (para tráfego pago por benefício/assunto).

**Conversa com o titular (19/10/2026, áudio transcrito) — ajustes sobre a v4:**

- Botões do WhatsApp **verdes** (cor da marca WhatsApp) com o texto **"Analisar meu caso"**, em todo o site; ao lado do botão do topo, o **ícone do Instagram** (ele posta lá os outros assuntos).
- **Botão flutuante do WhatsApp** no canto inferior direito, em todas as telas (substitui a barra fixa do celular).
- Cabeçalho **sem telefone**, logo um pouco menor, logo e botão mais perto das bordas, mais espaço entre os links.
- Home: **sem o bloco "Outras áreas atendidas"** (fica só nas Áreas de atuação, em cartões menores sem foto, e no rodapé). "Conheça Jhonny Cardoso" virou **"Quem sou eu"** (texto em primeira pessoa).
- Sobre: retrato no topo (o lado estava vazio) e **mapa do Google** no bloco do escritório. Atendimento: foto no topo. Contato: página mantida, WhatsApp verde, Facebook azul, Instagram nas cores dele, telefone e e-mail normais, endereço organizado com mapa.
- Rodapé **mais compacto**; a linha final é "Jhonny Cardoso · Advogado · OAB/MT 33.424/O" e "Criado e desenvolvido por Rodrigo Manfredo" (link para o WhatsApp de Rodrigo, (65) 99916-4224, com mensagem pronta). Saíram "Campo Novo do Parecis/MT · Atendimento presencial e online" e "Conteúdo informativo...". A OAB foi mantida na linha final (o titular pediu só o nome, mas o art. 44 do Código de Ética exige a inscrição, e o logo do cabeçalho vira só o símbolo em telas pequenas).
- E-mail `juridico@jhonnycardoso.adv.br` é **antigo**; o novo (pessoal) ainda não foi confirmado por escrito, então o e-mail fica fora do site (`site.contact.email = null`).
- OAB confirmada: **33.424/O** ("O" = originária).

Estrutura de URLs (domínio: `jhonnycardoso.adv.br`):

- `/` home institucional; `/areas-de-atuacao`, `/sobre`, `/atendimento`, `/contato`, `/politica-de-privacidade`, `/termos-de-uso`.
- Áreas: `/direito-civel`, `/direito-do-trabalho` (caminhos Trabalhadores | Empresas → `/trabalhista-para-empresas`), `/direito-previdenciario`, `/familia-e-sucessoes`, `/aposentadoria-de-servidores`, `/transito`, `/criminal`, `/dividas-e-agronegocio`, `/apoio-a-escritorios`.
- Assuntos trabalhistas: `/verbas-rescisorias`, `/horas-extras`, `/carteira-assinada`, `/fgts`, `/gestante`, `/rescisao-indireta`, `/doenca-ocupacional`, `/insalubridade-periculosidade`, `/trabalhador-rural`.
- Assuntos previdenciários: `/bpc-loas`, `/auxilio-doenca`, `/aposentadoria-por-invalidez`, `/pensao-por-morte`, `/aposentadoria`, `/inss` (benefício negado ou cortado).

## 2. Stack e arquitetura (implementado)

- **Node.js 22** + **Next.js 16.4** (App Router), **TypeScript**, **Tailwind 4**, **export estático** (`output: "export"` → pasta `out/`, hospeda em qualquer lugar).
- ⚠️ Next 16 tem mudanças incompatíveis: ler `node_modules/next/dist/docs/` antes de usar APIs (ver `AGENTS.md`). `params` é Promise; tipos `PageProps<"/rota">`/`LayoutProps`.
- Conteúdo: `src/content/site.ts` (dados do escritório, ponto do mapa), `src/content/landings/{areas,trabalho,previdencia}.ts` (tipo `Landing` em `src/content/types.ts`: `kind` "area" ou "assunto", `children` = cards de assuntos da área), `src/content/landings/index.ts` (ordem, áreas principais/complementares, textos dos cartões da home), `src/content/shared.ts` (passos, bio, textos institucionais, FAQ institucional). Template único em `src/app/[slug]/page.tsx` (título, apresentação, assuntos atendidos, documentos, explicações, lei conferida, FAQ, um único caminho de contato).
- Cada página monta o próprio `SiteHeader` (com a mensagem de WhatsApp do tema), o próprio `SiteFooter` (que abre com a chamada final) e o `WhatsAppFloat` (botão flutuante). O layout só tem fontes, `RevealObserver` e `Analytics`. Botões em `src/components/ui/WhatsAppButton.tsx` (`WhatsAppButton`, `InstagramButton`, `ContactButtons` para o topo das páginas, `WhatsAppFloat`).
- Mapa: `OfficeLocation` (Sobre e Contato) incorpora o Google Maps sem chave (`mapEmbedUrl` em `site.ts`, formato `/maps/embed?pb=` do "Incorporar um mapa", mesmo ponto ajustado), com `loading="lazy"` e a política de referência padrão do navegador; a privacidade menciona o mapa. Ele carrega sem pedir consentimento (o titular pediu o mapa visível); se preferirem, dá para trocar por "clique para ver o mapa".
- ⚠️ O cache do Turbopack em `.next/` já serviu CSS velho depois de mudar `globals.css`: para build de entrega, `rm -rf .next && npm run build`.
- Imagens: `npm run images` gera WebP em `public/img/` a partir de `identidade-visual/fotos-advogado/` (`jhonny-*`) e `identidade-visual/banco-de-imagens/<slug>.jpg` (`tema-<slug>`, Unsplash, licença livre, créditos em `CREDITOS.md`). O loader `src/lib/image-loader.ts` liga o `next/image` a esses arquivos (componente `Photo`). Tema novo precisa de foto com o nome do slug. Logo vetorial em `src/components/brand/paths.ts`. `npm run brand-assets` gera favicon, ícones e `public/og.jpg`.
- SEO: metadata por página, Open Graph comum em `src/lib/metadata.ts` (espalhar em toda página que definir `openGraph`), JSON-LD `Person` + `LegalService` + `FAQPage` + `BreadcrumbList`, sitemap e robots.
- Medição opcional: `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_META_PIXEL_ID`; scripts só carregam após consentimento; preferência revogável no rodapé.
- Qualidade: `npm run check` (Prettier + ESLint + tsc) deve passar antes de todo commit.
- Texto ampliado/zoom (público mais velho): `overflow-wrap: anywhere` no `body` (nada quebra no meio da palavra em tamanho normal), hífen automático nos títulos quando o `body` (contêiner) fica com menos de 15em, logo do cabeçalho vira só o símbolo quando falta espaço, cards e blocos com `flex-wrap` (o texto desce para baixo da foto/ícone). O painel do menu do celular fica **fora** do `<header>`: o `backdrop-filter` do cabeçalho prende elementos fixos dentro dele (o painel ficava com altura zero).

## 3. Identidade visual (fonte da verdade: arquivos neste repositório)

- Todos os originais ficam em `identidade-visual/` (pastas numeradas do designer, `logo-exportada/`, `fotos-advogado/`). `.cdr` não abre aqui; usar PNG/PDF/WebP.
- Fotos dele: `identidade-visual/fotos-advogado/` (5 retratos, fundo preto-vinho de damasco, terno preto, gravata vermelha, óculos). No site: `jhonny-serio` (abertura da home), `jhonny-sorrindo` (bloco "Quem sou eu"), `jhonny-lapela` (topo da página Sobre), `jhonny-corpo` (em pé, página Sobre, só a partir do tablet). Foto de banco `tema-atendimento` no topo de /atendimento.
- Marca: monograma **J+C** entrelaçado, moldura retangular dupla, coluna jônica e tocha. Texto "JHONNY CARDOSO / ADVOGADO | OAB/MT 33424". Estilo clássico, sóbrio, premium.
- **Proporção ~70% claro / 30% escuro.** Topo de toda página, cabeçalho e rodapé **escuros**; o resto claro.

**Direção visual atual (v4 = v3 aprovada pelo titular — "gostei da paleta, casou bem" — + ajustes da revisão).** Público com muitas pessoas de **50 a 70 anos**: tudo óbvio.

- **Simples e limpo:** fundo cinza-claro quente com painéis brancos (imk.ca), poucos blocos, **textos curtos**, letra grande (corpo 18px), botões grandes com o ícone do WhatsApp num círculo. Botão principal: **"Analisar meu caso"**, verde do WhatsApp (`#25D366`) com texto escuro (9.8:1) e o ícone num círculo branco; ícone redondo do Instagram ao lado no topo de cada página. No cabeçalho, entre 1024 e 1279px, o rótulo encurta para "WhatsApp".
- **Nunca mini-título/rótulo em cima de título.** Títulos de seção diretos, com ponto final em dourado (`headline()`); títulos do topo como definidos na revisão (perguntas com "?" dourado).
- **Abertura da home:** no celular, nome e OAB à esquerda + retrato pequeno (~120×150) à direita, depois o título em largura total (~33px); no computador, duas colunas com retrato à direita e nome/OAB como texto abaixo da foto. **Sem cartão branco flutuante** com miniatura, sem halo/recorte na foto, sem camada escura no rosto.
- **Animações leves:** nada de animar letras ou de rolagem presa. Entradas curtas (fade), blocos sobem ao aparecer, fios se desenham, zoom suave no hover, transição entre páginas (View Transitions: a foto do card "voa" até o topo). Respeita `prefers-reduced-motion`; sem JS tudo visível (`.js`).
- **WhatsApp flutuante:** botão redondo verde no canto inferior direito, em todas as telas e páginas (pedido do titular, 19/10/2026), tamanho em px (não cresce com o texto ampliado). O crédito do rodapé tem folga à direita para não ficar embaixo dele.
- **Mensagem do WhatsApp neutra** ("Olá, gostaria de informações sobre atendimento. Vim pelo site."), sem saúde, criminal ou dados do caso na URL. Exceção: apoio a escritórios.
- **Preto, branco e dourado** (+ toque do vinho das fotos no brilho escuro). **Verde só nos botões do WhatsApp**; azul e degradê só nos ícones do Facebook e do Instagram (Contato e topo das páginas). **Sem itálico.**
- Fotos: retratos reais do advogado (home, "Conheça", Sobre em pé); **banco de imagens** (Unsplash, licença livre) nas áreas e assuntos, com **pessoas de aparência brasileira** (o titular pediu para trocar as de aparência asiática) e **sem pessoas em sofrimento**, crianças ou "sucesso financeiro". Criminal fica sem foto.

Paleta (tokens em `src/app/globals.css`, contraste WCAG conferido com axe):

| Token                     | Cor                               | Uso                                                |
| ------------------------- | --------------------------------- | -------------------------------------------------- |
| `mist` / `white` / `line` | `#F3F1EC` / `#FFFFFF` / `#E2DDD3` | fundo da página, painéis, fios                     |
| `champagne`               | `#F4ECDB`                         | círculos de ícone                                  |
| `ink` / `ink-2` / `ink-3` | `#0E0D0B` …                       | topo, cabeçalho, rodapé, botões                    |
| `gold`                    | `#C9A24B`                         | dourado da marca: botões e texto **sobre o preto** |
| `gold-mid`                | `#A08030`                         | numerais grandes sobre o claro                     |
| `gold-text`               | `#87671F`                         | texto dourado **sobre o claro** (≥ 4.5:1)          |
| `text` / `text-muted`     | `#141311` / `#524E47`             | texto                                              |

Tipografia: títulos em **Marcellus** (capitais romanas, mesma família da logo; sem itálico); texto em **Figtree**. Botões: `btn btn-primary` (preto), `btn btn-gold` (no escuro), `btn-plain btn-outline` / `btn-outline-light` (secundários). Fontes descartadas: Cormorant e EB Garamond (itálicos).

## 4. Dados reais de contato

- WhatsApp: (65) 99670-1835 → `https://wa.me/5565996701835`
- E-mail: o antigo `juridico@jhonnycardoso.adv.br` saiu; o novo e-mail pessoal está pendente de confirmação (fica oculto enquanto `site.contact.email` for `null`).
- Site: https://jhonnycardoso.adv.br/
- Endereço: Rua Goiás, nº 510 NE, Sala 02, Centro, Campo Novo do Parecis/MT, CEP 78360-000
- Instagram: @jhonnycardoso.adv (https://www.instagram.com/jhonnycardoso.adv)
- Facebook: https://www.facebook.com/profile.php?id=61566370640678
- Google Maps: https://maps.app.goo.gl/eydM8ZMPcAhectHW9
- Mensagem do WhatsApp **neutra** (revisão do titular), sem detalhes do caso. Mapa: `site.address.mapsUrl` / `directionsUrl` apontam para o ponto ajustado.

## 5. Referências de design (já analisadas)

1. **petriaazevedo.com.br** — **a que ele mais gostou.** Landing de assunto único. Estrutura a seguir nas landings: hero com pergunta de dor + foto + botão WhatsApp → números/selos → explicação da lei → cards "Você se identifica com alguma dessas situações?" → como funciona (3 passos) → mitos x realidades → dado oficial → apresentação do advogado (seção escura) → FAQ → avaliações → CTA final.
2. **patricia-gomes-advocacia-36167f44.base44.app** — **a que ele amou.** Estética editorial limpa: Playfair grande com palavra em itálico dourado, hero em 2 colunas com selo de avaliação sobre a foto, áreas em lista numerada com linhas finas, blog (`/artigos`), `/faq`, `/sobre`. Base para a **home institucional**.
3. **rmadvespecializada.com.br** — gostou menos. Aproveitar só a faixa de temas (marquee) e o botão flutuante de WhatsApp.
4. Um quarto site de referência ainda pode ser enviado pelo usuário.

Em comum (seguir): objetivo único = WhatsApp; hero com dor real + foto; serifa elegante + sans limpa; dourado como acento; cards de situações; prova de confiança no início; linguagem simples sem juridiquês; FAQ; seção do advogado; CTA final; rodapé com OAB e aviso ético.

**Liberdade total** para pesquisar outros sites de advocacia como referência extra quando precisar. Se o acesso à web falhar: `WebFetch` usa rede diferente do `curl`; o `curl` e o Playwright (`/opt/node-tools/node_modules/playwright`, Chromium em `/opt/pw-browsers/chromium`, via `HTTPS_PROXY`) funcionam para sites que renderizam por JavaScript.

## 6. Regras de conteúdo e ética (OAB)

- Respeitar o **Provimento 205/2021 do CFOAB** e o Código de Ética: **sem promessa de resultado, sem captação agressiva, sem mercantilização**, sem comparar com outros advogados, sem divulgar valores, gratuidade ou facilidades de pagamento. Nada de "Garanta seus direitos", "Consulta grátis", urgência ou resposta imediata.
- Linguagem cautelosa: "pode existir direito", "cada caso é analisado individualmente". Não dizer que o contato "já contrata" nem que o atendimento é sempre feito só pelo próprio advogado (há triagem e parceiros).
- **Sem depoimentos nem avaliações** como prova de sucesso (a seção de avaliações foi removida). **Nunca inventar** números, casos, títulos, prêmios, formação, equipe ou unidades.
- **Cargos e vínculos anteriores** informados pelo titular **não vão para o site** (art. 44, § 2º, do Código de Ética; vínculos não confirmados). Não escrever "especialista" nem "equipe especializada".
- Leis citadas só quando conferidas no texto oficial do Planalto (CLT, CF/ADCT, Leis 8.213, 8.742, 5.889, 8.036, LC 150). Ao alterar uma citação, conferir de novo. Correções jurídicas da revisão aplicadas: prazo trabalhista ("em regra, até 2 anos após o fim do contrato, alcançando os 5 anos anteriores ao ajuizamento"), jornada como regra geral, intervalo não universal, insalubridade sem "sol forte", qualidade de segurado variável, BPC sem limite de meio salário automático, rescisão indireta sem "qualquer tarefa fora da função", sem prazo genérico de 10 anos para revisão, vínculo sem efeito previdenciário automático, safra sem afirmação geral sobre a indenização de 1/12.
- Rodapé (pedido do titular, 19/10/2026): chamada final, logo (com a OAB), endereço, telefone, redes, links de áreas, Sobre, Atendimento, Contato, Para advogados e escritórios, Privacidade e Termos; linha final "Jhonny Cardoso · Advogado · OAB/MT 33.424/O" + crédito de Rodrigo Manfredo (a OAB fica por causa do art. 44 do Código de Ética). Preferências de cookies só quando houver medição ligada.
- Medição (GA/Meta) **desligada por padrão**; antes de ligar, avaliar (assuntos de saúde, BPC, criminal e família não devem ir para plataformas de anúncio). A política de privacidade descreve só o que existe (`src/lib/analytics.ts`).

### Pendências (dados que só o cliente tem)

- **Horário de atendimento**: `site.hours` é `null` (o site diz "Consulte a disponibilidade de agendamento").
- **Ponto do mapa**: movido para dentro do prédio do hotel (pedido no áudio); o titular precisa confirmar no celular.
- **Domínio e hospedagem**, e se o atendimento nacional exige inscrição suplementar em outras seccionais (controle interno).
- **Subáreas de trânsito** (multas, CNH, DETRAN): só detalhar depois de confirmar.
- **Revisão jurídica final** dos textos temáticos pelo próprio advogado antes de publicar.
- **IDs de medição** (só com avaliação específica).
- **E-mail novo**: o titular falou em "jhonnycardoso@gmail" / "hotmail" no áudio; confirmar o endereço exato por escrito e preencher `site.contact.email`.
- **Ordem das áreas**: no áudio de 19/10 ele disse "previdenciário é o principal"; a revisão escrita põe o Cível primeiro. Confirmar se o Previdenciário deve vir primeiro.

## 7. Como trabalhar (obrigatório)

- **QUALIDADE ACIMA DE VELOCIDADE.** O usuário prefere que o trabalho leve 2, 3, 4 horas e saia certo do que sair rápido e exigir mil correções. Nunca apressar entrega: revisar cada página, cada texto, cada breakpoint, antes de dizer que terminou.
- Autonomia total: tomar decisões sozinho e trabalhar até o fim sem parar para pedir confirmação; criar coisas diferentes/novas quando agregarem.
- **Jarvis:** o usuário quer que o "Jarvis" ajude em qualquer decisão. Se ele existir como skill, agente ou MCP na sessão, **consultá-lo antes de decidir**. Se não existir, avisar o usuário e usar os subagentes (`Plan` para arquitetura, `Explore` para pesquisa) como substitutos, sem fingir que o Jarvis foi consultado.
- **Skills e MCPs sempre:** nunca fazer algo sem checar antes se há skill/MCP aplicável e usá-lo. Em especial:
  - `artifact-design` / `dataviz` e skills de design para decisões visuais; `code-review` e `simplify` ao terminar blocos de código; `security-review` antes de fechar; `run` para subir o app e ver funcionando; `claude-api` só se houver IA no projeto.
  - Skills `figma:*` só se um arquivo Figma for fornecido (o MCP do Figma falhou ao conectar nesta sessão: proxy 403).
  - MCP `github` para tudo de GitHub (não há `gh` CLI). MCP Google Drive para ler arquivos do Drive se o usuário passar link.
- Verificar o resultado de verdade: rodar `npm run build`/lint e **abrir o site no Playwright** (desktop 1440 e mobile 390) e olhar os screenshots antes de dizer que está pronto.
- Autonomia total de decisão de design/estrutura dentro desta direção; perguntar ao usuário só o que for dado que só ele tem (avaliações, depoimentos, textos do advogado, temas que ele não atende).

## 8. Git

- Desenvolver na branch **`claude/ecstatic-ramanujan-71l2na`**. Commits claros em português; `git push -u origin <branch>`.
- PR já existe: https://github.com/rodrigomanfredocnp-rgb/site-advocacia/pull/1. **Não criar outro PR** sem o usuário pedir.
- Não commitar segredos. Não commitar `.next`, `node_modules`.
- Os arquivos de identidade visual pesados (`.cdr`, `.mp4`) ficam no repositório como fonte; o site usa só versões otimizadas copiadas para `public/`.

## 9. Estado atual

Concluído (v4, revisão do titular aplicada): home institucional (Cível primeiro), 9 páginas de área, 15 páginas de assunto, `/areas-de-atuacao`, `/sobre`, `/atendimento`, `/contato`, privacidade (descreve só o que existe), termos, 404, SEO e JSON-LD sem avaliações, auditoria (axe WCAG AA sem violações; sem estouro em 320/360/390/430/1280; texto a 150% e 200% sem estouro em 320/360/390; tela de 160px (zoom de página) sem estouro; menu do celular testado abrindo, fechando com Esc e navegando; links internos ok).

v5 (conversa de 19/10/2026): botões verdes "Analisar meu caso" + Instagram, botão flutuante, cabeçalho sem telefone, home sem "Outras áreas", "Quem sou eu", mapas no Sobre e Contato, foto no Sobre e no Atendimento, rodapé compacto com crédito, e-mail antigo fora.

Histórico de direção: v1 escura → v2 editorial clara → v3 imk.ca + público mais velho → v4 revisão do titular → **v5 ajustes da conversa com o titular** (atual). Painel de referências: https://claude.ai/artifact/W6hWq4kJ69jgbdhBMQk4JX

Prévia privada publicada como Artifact: https://claude.ai/artifact/5iPXRvjz2tpYPVd2Jnc3h3 (gerada a partir de `out/` por um script de conversão para caminhos relativos; não faz parte do repositório).
