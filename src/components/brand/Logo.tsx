/* eslint-disable @next/next/no-img-element -- SVG estático da marca: não passa pelo otimizador de imagens. */
import { site } from "@/content/site";

/**
 * Logos da marca em dourado, como arquivos SVG em public/brand (gerados por `npm run brand-assets`
 * a partir do vetor em ./paths.ts). Como <img>, o navegador baixa cada arquivo uma vez e guarda;
 * desenhados dentro da página, os ~45 KB de vetor se repetiam em todo HTML.
 * width/height = tamanho do viewBox: o navegador reserva a proporção antes de carregar.
 */

/** Monograma J+C na moldura dupla. */
export function LogoSymbol({ className }: { className?: string }) {
  return <img src="/brand/simbolo.svg" alt="" width={180} height={194} className={className} />;
}

/** "JHONNY CARDOSO" nas capitais da marca. */
export function LogoName({ className }: { className?: string }) {
  return <img src="/brand/nome.svg" alt="" width={484} height={50} className={className} />;
}

/** Logo completa (símbolo + nome + subtítulo), igual ao arquivo original. */
export function LogoFull({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo.svg"
      alt={`Jhonny Cardoso, Advogado, ${site.lawyer.oab}`}
      width={484}
      height={296}
      loading="lazy"
      className={className}
    />
  );
}

/** Assinatura horizontal do cabeçalho (fundo escuro): símbolo, nome e OAB em dourado. */
export function LogoLockup({ className }: { className?: string }) {
  return (
    // Ocupa a largura que o cabeçalho der. Se faltar espaço (celular pequeno ou texto ampliado), o nome desce
    // para uma segunda linha escondida e fica só o símbolo. No computador, sempre numa linha só.
    <span
      className={`flex h-[40px] w-full flex-wrap content-start items-center gap-x-2 overflow-hidden sm:h-[42px] sm:gap-x-2.5 lg:flex-nowrap ${className ?? ""}`}
    >
      <LogoSymbol className="h-[40px] w-auto shrink-0 sm:h-[42px]" />
      <span className="flex flex-col gap-[6px]">
        <LogoName className="h-[13px] w-auto sm:h-[14.5px]" />
        <span className="text-[8.6px] leading-none font-semibold tracking-[0.13em] whitespace-nowrap text-gold sm:text-[9px] sm:tracking-[0.18em]">
          ADVOGADO · {site.lawyer.oab}
        </span>
      </span>
    </span>
  );
}
