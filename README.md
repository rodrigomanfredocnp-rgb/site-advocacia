# Site Jhonny Cardoso Advogado

Site do advogado **Jhonny Henrique Guollo Cardoso** (OAB/MT 33.424/O), em Next.js: home institucional, páginas por área de
atuação e páginas por assunto (pensadas também para tráfego pago). Conteúdo conforme a revisão do titular de 16/10/2026
(detalhes em `CLAUDE.md`).

## Páginas

- `/` home, `/areas-de-atuacao`, `/sobre`, `/atendimento`, `/contato`.
- Áreas: `/direito-civel`, `/direito-do-trabalho`, `/trabalhista-para-empresas`, `/direito-previdenciario`,
  `/familia-e-sucessoes`, `/aposentadoria-de-servidores`, `/transito`, `/criminal`, `/dividas-e-agronegocio`,
  `/apoio-a-escritorios`.
- Assuntos trabalhistas: `/verbas-rescisorias`, `/horas-extras`, `/carteira-assinada`, `/fgts`, `/gestante`,
  `/rescisao-indireta`, `/doenca-ocupacional`, `/insalubridade-periculosidade`, `/trabalhador-rural`.
- Assuntos previdenciários: `/bpc-loas`, `/auxilio-doenca`, `/aposentadoria-por-invalidez`, `/pensao-por-morte`,
  `/aposentadoria`, `/inss`.
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

Medição é opcional e fica **desligada**. Antes de ligar, avalie com o titular (assuntos de saúde, BPC, criminal e família não
devem ir para plataformas de anúncio). Com as variáveis abaixo, o aviso de cookies aparece e a política de privacidade passa a
descrever a medição:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXX               # Google Analytics 4
NEXT_PUBLIC_META_PIXEL_ID=000000000000000 # Meta Pixel (anúncios)
```

Os cliques no WhatsApp são enviados como evento `whatsapp_click` (GA) e `Contact` (Meta), com a origem do clique.

## Editar conteúdo (sem mexer no layout)

| O quê                                                                                    | Onde                                                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Telefone, e-mail (oculto se `null`), endereço, ponto do mapa, horário, crédito do rodapé | `src/content/site.ts`                                              |
| Textos das áreas                                                                         | `src/content/landings/areas.ts`                                    |
| Textos dos assuntos trabalhistas / previdenciários                                       | `src/content/landings/trabalho.ts` e `previdencia.ts`              |
| Ordem das áreas e textos dos cartões da home                                             | `src/content/landings/index.ts`                                    |
| Foto de uma página                                                                       | `identidade-visual/banco-de-imagens/<slug>.jpg` + `npm run images` |
| Bio, passos do atendimento, perguntas institucionais                                     | `src/content/shared.ts`                                            |

Nos textos, `*palavra*` fica em dourado (sem itálico) e `**palavra**` vira negrito. Escreva para quem tem pouca intimidade
com a internet: frases curtas, sem juridiquês, sem promessa de resultado e só com leis conferidas no texto oficial.

### Criar uma página de assunto

1. Escreva um objeto `Landing` no arquivo da área (`trabalho.ts` ou `previdencia.ts`), com `kind: "assunto"`.
2. Adicione o export na lista `landings` de `src/content/landings/index.ts` e o slug em `children` da página da área.
3. Coloque uma foto em `identidade-visual/banco-de-imagens/<slug>.jpg` (licença livre; crédito em `CREDITOS.md`) e rode
   `npm run images`.

A página, os cards da área, os "outros assuntos" e o sitemap são atualizados sozinhos.

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

Identidade: preto, branco e dourado; verde só nos botões do WhatsApp ("Analisar meu caso" e o botão flutuante), cores das marcas só nos ícones do Instagram e do Facebook. Títulos em Marcellus, sem itálico, sem rótulos em cima dos títulos. Animações leves, sem rolagem presa.

O site segue o Código de Ética da OAB e o Provimento 205/2021: nenhum texto promete resultado, informa valores ou se compara a
outros advogados, e nenhum dado é inventado. As citações de lei foram conferidas no texto oficial do Planalto. Detalhes em
`CLAUDE.md`.
