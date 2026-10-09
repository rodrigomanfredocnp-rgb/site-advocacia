# CLAUDE.md — Site Jhonny Cardoso Advogado

Instruções permanentes do projeto. Leia inteiro antes de qualquer trabalho.
Idioma de trabalho e de todo o conteúdo do site: **português do Brasil**.

## 1. O projeto

Conjunto de **landing pages** para o advogado **Jhonny Henrique Guollo Cardoso**, **OAB/MT 33424** (usar sempre 33424; o papel timbrado antigo diz 33.428, está errado).
Área de atuação: **Direito do Trabalho** (inclui INSS/previdenciário quando fizer sentido para o trabalhador). **Nunca criminal.**

Estrutura de URLs (domínio: `jhonnycardoso.adv.br`):

- `/` — **site principal**: quem é ele, o que faz, área de atuação, links para as landings, contato.
- `/<assunto>` — **landings direcionadas**, uma por dor/assunto (ex.: `/gestante`, `/inss`, `/horas-extras`). Cada uma fala um pouco do advogado e **foca na dor do cliente**, com um único objetivo: **clique no WhatsApp**.

Cobrir **o máximo possível de temas trabalhistas** (pesquisar e listar: verbas rescisórias, horas extras, vínculo sem carteira, assédio moral/sexual, acidente de trabalho, doença ocupacional, justa causa, rescisão indireta, gestante demitida, estabilidade, FGTS, adicional de insalubridade/periculosidade, desvio de função, equiparação salarial, banco de horas, aposentadoria/INSS/auxílio-doença/BPC etc.). Nunca criminal.

## 2. Stack e arquitetura (implementado)

- **Node.js 22** + **Next.js 16.4** (App Router), **TypeScript**, **Tailwind 4**, **export estático** (`output: "export"` → pasta `out/`, hospeda em qualquer lugar).
- ⚠️ Next 16 tem mudanças incompatíveis: ler `node_modules/next/dist/docs/` antes de usar APIs (ver `AGENTS.md`). `params` é Promise; tipos `PageProps<"/rota">`/`LayoutProps`.
- Conteúdo: `src/content/site.ts` (dados do escritório), `src/content/landings/<slug>.ts` (uma por tema, tipo em `src/content/types.ts`), `src/content/shared.ts` (bio, passos, FAQ da home). Template único em `src/app/[slug]/page.tsx`.
- Imagens: `npm run images` gera WebP em `public/img/`; o loader `src/lib/image-loader.ts` liga o `next/image` a esses arquivos. Logo vetorial em `src/components/brand/paths.ts` (extraída do PDF). `npm run brand-assets` gera favicon, ícones e `public/og.jpg`.
- SEO: metadata por página, Open Graph comum em `src/lib/metadata.ts` (espalhar em toda página que definir `openGraph`), JSON-LD `Person` + `LegalService` + `FAQPage` + `BreadcrumbList`, sitemap e robots.
- Medição opcional: `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_META_PIXEL_ID`; scripts só carregam após consentimento; preferência revogável no rodapé.
- Qualidade: `npm run check` (Prettier + ESLint + tsc) deve passar antes de todo commit.

## 3. Identidade visual (fonte da verdade: arquivos neste repositório)

- Todos os originais ficam em `identidade-visual/` (pastas numeradas do designer, `logo-exportada/`, `fotos-advogado/`). `.cdr` não abre aqui; usar PNG/PDF/WebP.
- Fotos dele: `identidade-visual/fotos-advogado/` (5 retratos, fundo preto-vinho de damasco, terno preto, gravata vermelha, óculos). No site: `jhonny-serio` (hero da home), `jhonny-lapela` (hero das landings), `jhonny-sorrindo` (faixa do advogado).
- Marca: monograma **J+C** entrelaçado, moldura retangular dupla, coluna jônica e tocha. Texto "JHONNY CARDOSO / ADVOGADO | OAB/MT 33424". Estilo clássico, sóbrio, premium.
- **Proporção ~70% claro / 30% escuro.** Cabeçalho e rodapé **escuros**, uma faixa escura de destaque (seção "o advogado"), resto **claro**.

**Direção visual atual (pedido do cliente):** limpa e editorial como o site da Patricia Gomes. **Só preto, branco e dourado** — **nunca verde** (nem no botão de WhatsApp: botões são pretos, ou dourados sobre o preto). **Sem itálico/cursiva.** Pouco ornamento: muito espaço em branco, fios finos, numeração 01/02/03 em dourado.

Paleta (tokens em `src/app/globals.css`, contraste WCAG conferido):

| Token                     | Cor                               | Uso                                                     |
| ------------------------- | --------------------------------- | ------------------------------------------------------- |
| `white` / `mist` / `line` | `#FFFFFF` / `#F7F6F2` / `#E8E5DE` | fundo, seções alternadas, fios                          |
| `ink` / `ink-2` / `ink-3` | `#0F0F0F` …                       | botões, faixa final, rodapé                             |
| `gold`                    | `#C9A24B`                         | dourado da marca: fios, ícones, texto **sobre o preto** |
| `gold-mid`                | `#A08030`                         | numerais grandes sobre o branco (≥ 3:1)                 |
| `gold-text`               | `#8A6A24`                         | texto dourado **sobre o branco** (≥ 4.5:1)              |
| `text` / `text-muted`     | `#141414` / `#55524C`             | texto                                                   |

Tipografia: títulos em **Marcellus** (capitais romanas, mesma família de letras da logo; peso único 400, sem itálico); texto em **Figtree**. Palavra-chave do título em dourado (marcação `*...*` nos dados, classe `accent`). Componentes de botão: classes `btn btn-primary` (preto), `btn btn-gold` (no preto), `btn btn-outline`. Fontes descartadas: Cormorant (circunflexo solto) e EB Garamond/itálicos (cliente não quer cursiva).

## 4. Dados reais de contato

- WhatsApp: (65) 99670-1835 → `https://wa.me/5565996701835`
- E-mail: juridico@jhonnycardoso.adv.br
- Site: https://jhonnycardoso.adv.br/
- Endereço: Rua Goiás, nº 510 NE, Sala 02, Centro, Campo Novo do Parecis/MT, CEP 78360-000
- Instagram: @jhonnycardoso.adv (https://www.instagram.com/jhonnycardoso.adv)
- Facebook: https://www.facebook.com/profile.php?id=61566370640678
- Google Maps: https://maps.app.goo.gl/eydM8ZMPcAhectHW9
- Mensagem do WhatsApp deve ser **específica por landing** (ex.: "Olá, Dr. Jhonny! Vim pelo site e preciso de ajuda com ...").

## 5. Referências de design (já analisadas)

1. **petriaazevedo.com.br** — **a que ele mais gostou.** Landing de assunto único. Estrutura a seguir nas landings: hero com pergunta de dor + foto + botão WhatsApp → números/selos → explicação da lei → cards "Você se identifica com alguma dessas situações?" → como funciona (3 passos) → mitos x realidades → dado oficial → apresentação do advogado (seção escura) → FAQ → avaliações → CTA final.
2. **patricia-gomes-advocacia-36167f44.base44.app** — **a que ele amou.** Estética editorial limpa: Playfair grande com palavra em itálico dourado, hero em 2 colunas com selo de avaliação sobre a foto, áreas em lista numerada com linhas finas, blog (`/artigos`), `/faq`, `/sobre`. Base para a **home institucional**.
3. **rmadvespecializada.com.br** — gostou menos. Aproveitar só a faixa de temas (marquee) e o botão flutuante de WhatsApp.
4. Um quarto site de referência ainda pode ser enviado pelo usuário.

Em comum (seguir): objetivo único = WhatsApp; hero com dor real + foto; serifa elegante + sans limpa; dourado como acento; cards de situações; prova de confiança no início; linguagem simples sem juridiquês; FAQ; seção do advogado; CTA final; rodapé com OAB e aviso ético.

**Liberdade total** para pesquisar outros sites de advocacia como referência extra quando precisar. Se o acesso à web falhar: `WebFetch` usa rede diferente do `curl`; o `curl` e o Playwright (`/opt/node-tools/node_modules/playwright`, Chromium em `/opt/pw-browsers/chromium`, via `HTTPS_PROXY`) funcionam para sites que renderizam por JavaScript.

## 6. Regras de conteúdo e ética (OAB)

- Respeitar o **Provimento 205/2021 do CFOAB** e o Código de Ética: **sem promessa de resultado, sem captação agressiva, sem mercantilização**, sem comparar com outros advogados, sem divulgar valores/promoções.
- Linguagem cautelosa: "pode existir direito", "cada caso é analisado individualmente", "a análise inicial não gera compromisso".
- **Nunca inventar** avaliações do Google, depoimentos, números de clientes atendidos, anos de experiência ou casos ganhos. Usar apenas dados fornecidos pelo usuário; o que faltar fica como campo a preencher e é avisado ao usuário.
- Citar leis/súmulas só quando verificadas (CLT, súmulas do TST, temas do STF, Lei 8.213/91 etc.).
- Rodapé com: nome, OAB/MT 33424, endereço, aviso "este site é meramente informativo, conforme o Código de Ética da OAB", links de política de privacidade e termos de uso e preferências de cookies (LGPD).
- **Nada de criminal.** Não usar a palavra "especialista" (exige título de especialização). Não prometer consulta "gratuita".
- Leis conferidas no texto oficial do Planalto (CLT, CF/ADCT, Leis 8.213, 8.742, 5.889, 8.036, LC 150). Ao alterar uma citação, conferir de novo.

### Pendências (dados que só o cliente tem)

- **Horário de atendimento**: `site.hours` está `null` (oculto). Preencher quando o escritório informar.
- **Avaliações do Google**: `site.reviews` vazio (seção oculta). Preencher só com avaliações reais.
- **Atendimento fora de MT**: o site diz "presencial e online"; não afirma "todo o Brasil" até o cliente confirmar.
- **Temas**: confirmar se ele atende todos os 16 (em especial INSS, aposentadoria e BPC).
- **IDs de medição** (GA4/Meta Pixel) e **hospedagem/domínio** para publicar.

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

Concluído: home, 16 landings, páginas legais, 404, SEO, favicon/OG, medição opcional com consentimento, auditoria (axe WCAG AA sem violações, sem estouro horizontal em 360px), code-review e security-review aplicados.

Prévia privada publicada como Artifact: https://claude.ai/artifact/5iPXRvjz2tpYPVd2Jnc3h3 (gerada a partir de `out/` por um script de conversão para caminhos relativos; não faz parte do repositório).
