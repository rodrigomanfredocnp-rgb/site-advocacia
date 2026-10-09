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

## 2. Stack
- **Node.js 22** + **Next.js (última versão estável)**, App Router, **TypeScript**, **Tailwind CSS**.
- Conteúdo de cada landing em arquivo de dados (um por assunto) alimentando **um template reutilizável**. Criar landing nova = adicionar dados, sem mexer em componente.
- Usar `next/image` para otimizar fotos. SEO por página (title, description, Open Graph, JSON-LD `Attorney`/`LegalService`/`FAQPage`), sitemap e robots.
- Performance e mobile-first (a maioria do tráfego virá de celular/anúncios).

## 3. Identidade visual (fonte da verdade: arquivos neste repositório)
- Logos e originais: `assets/logo/` e as pastas numeradas na raiz (`01 LOGOMARCA NORMAL`, `015 FAVICON SITE`, `04 ARTES REDES SOCIAIS`, `05 MARCA D_ÁGUA`, etc.). `.cdr` não abre aqui; usar PNG/PDF/WebP.
- Fotos dele: `assets/fotos/` (5 retratos, fundo preto-vinho de damasco, terno preto, gravata vermelha, óculos).
- Marca: monograma **J+C** entrelaçado, moldura retangular dupla, coluna jônica e tocha. Texto "JHONNY CARDOSO / ADVOGADO | OAB/MT 33424". Estilo clássico, sóbrio, premium.
- **Proporção ~70% claro / 30% escuro.** Cabeçalho e rodapé **escuros**, uma faixa escura de destaque (seção "o advogado"), resto **claro**.

Paleta:
| Uso | Cor |
|---|---|
| Fundo principal | `#FAF7F2` |
| Seções alternadas | `#F2ECE1` |
| Escuro (header, footer, faixa) | `#0B0B0B` |
| Dourado (acento) | `#C9A24B`; degradê `#F0D060 → #A08030` para logo/detalhes |
| Texto | `#1A1A1A` / `#5A5A5A` |
| CTA WhatsApp | `#25D366` |
| Detalhe pontual (gravata) | `#6B1A2A` |

Tipografia: títulos **Cormorant Garamond** ou **Playfair Display** (uma palavra em itálico dourado); texto **Inter**. Logo clara sobre fundo claro, logo branca/dourada sobre fundo escuro. Favicon gerado a partir do vetor (o `FAV.png` é pequeno). Marca d'água do símbolo JC bem clara no fundo de seções, como no papel timbrado.

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
- Rodapé com: nome, OAB/MT 33424, endereço, aviso "este site é meramente informativo, conforme o Código de Ética da OAB", links de política de privacidade e termos de uso (criar as páginas) e aviso de cookies/LGPD.
- **Nada de criminal.**

## 7. Como trabalhar (obrigatório)
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

## 9. Ordem de execução sugerida
1. Scaffold Next.js 22/TS/Tailwind, tokens de cor e fontes, layout (header/footer escuros).
2. Copiar e otimizar logos/fotos para `public/`; favicon; OG image.
3. Home institucional (`/`).
4. Template de landing + dados da 1ª landing (gestante) para validar com o usuário.
5. Demais landings trabalhistas a partir da lista de temas.
6. Páginas legais, sitemap, robots, JSON-LD, analytics (se o usuário fornecer IDs).
7. Revisão (code-review, security-review), testes visuais desktop/mobile, build limpo.
