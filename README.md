# Site Jhonny Cardoso Advogado

Site do advogado **Jhonny Henrique Guollo Cardoso** (OAB/MT 33424), em Next.js. Tem uma home institucional e 16 landing pages
sobre temas trabalhistas e previdenciários. O objetivo de todas as páginas é levar o visitante a conversar pelo WhatsApp.

## Páginas

- `/`: home com os assuntos (cards com foto), o advogado, como funciona e dúvidas.
- `/sobre` e `/contato`.
- Direito do Trabalho: `/verbas-rescisorias`, `/horas-extras`, `/gestante`, `/carteira-assinada`, `/acidente-de-trabalho`,
  `/doenca-ocupacional`, `/assedio-moral`, `/justa-causa`, `/rescisao-indireta`, `/fgts`, `/insalubridade-periculosidade`,
  `/desvio-de-funcao`, `/trabalhador-rural`.
- INSS e Previdência: `/inss`, `/aposentadoria`, `/bpc-loas`.
- Páginas legais (LGPD): `/politica-de-privacidade`, `/termos-de-uso`.

## Rodar no seu computador

Requisito: Node.js 22.

```bash
npm install
npm run dev        # abre em http://localhost:3000
```

## Publicar

```bash
npm run build      # gera a pasta out/ com o site 100% estático
```

Envie o conteúdo de `out/` para qualquer hospedagem de site estático (Vercel, Netlify, Cloudflare Pages, Hostinger etc.).
Na Vercel basta importar o repositório: ela detecta o Next.js sozinha.

Medição é opcional. Defina as variáveis abaixo antes do build e o aviso de cookies passa a aparecer:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXX               # Google Analytics 4
NEXT_PUBLIC_META_PIXEL_ID=000000000000000 # Meta Pixel (anúncios)
```

Os cliques no WhatsApp são enviados como evento `whatsapp_click` (GA) e `Contact` (Meta), com a origem do clique.

## Editar conteúdo (sem mexer no layout)

| O quê                                                   | Onde                                                               |
| ------------------------------------------------------- | ------------------------------------------------------------------ |
| Telefone, e-mail, endereço, redes, horário, avaliações  | `src/content/site.ts`                                              |
| Texto de uma landing (curto!)                           | `src/content/landings/<tema>.ts`                                   |
| Foto de uma landing                                     | `identidade-visual/banco-de-imagens/<tema>.jpg` + `npm run images` |
| Bio do advogado, passos do atendimento, dúvidas da home | `src/content/shared.ts`                                            |

Nos textos, `*palavra*` fica em dourado (sem itálico) e `**palavra**` vira negrito. Escreva para quem tem pouca intimidade com a internet: frases curtas, sem juridiquês.

### Criar uma landing nova

1. Copie um arquivo de `src/content/landings/` (ex.: `fgts.ts`) com o novo nome, que vira o endereço da página.
2. Troque `slug`, textos, situações, FAQ e `related`.
3. Coloque uma foto em `identidade-visual/banco-de-imagens/<slug>.jpg` (com licença livre; anote o crédito em `CREDITOS.md`) e rode `npm run images`.
4. Adicione o export na lista `landings` de `src/content/landings/index.ts`.

A página, o menu do rodapé, o sumário da home, a faixa de temas e o sitemap são atualizados sozinhos.

### Adicionar avaliações do Google

Em `src/content/site.ts`, preencha `reviews` **somente com avaliações reais**, copiadas do Google. A seção de avaliações
aparece automaticamente quando houver ao menos uma.

## Imagens e marca

- Arquivos originais da identidade visual: `identidade-visual/`.
- `npm run images` regenera as fotos otimizadas (`public/img/*.webp`) a partir de `identidade-visual/fotos-advogado/` e `identidade-visual/banco-de-imagens/`.
- `npm run brand-assets` regenera o favicon, os ícones e a imagem de compartilhamento (`public/og.jpg`).
- A logo do site é vetorial (`src/components/brand/paths.ts`), extraída do `LOGO.pdf` original.

## Qualidade

```bash
npm run check      # Prettier + ESLint + TypeScript
npm run format     # formata o código
```

## Regras de conteúdo

Identidade: só preto, branco e dourado (sem verde), títulos em Marcellus, sem itálico, sem rótulos em cima dos títulos. Animações leves, sem rolagem presa.

O site segue o Código de Ética da OAB e o Provimento 205/2021: nenhum texto promete resultado, informa valores ou se compara a
outros advogados, e nenhum dado é inventado. As citações de lei foram conferidas no texto oficial do Planalto. Detalhes em
`CLAUDE.md`.
