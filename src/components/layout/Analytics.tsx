"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { ANALYTICS_ENABLED, GA_ID, PIXEL_ID } from "@/lib/analytics";

/**
 * Medição opcional (Google Analytics 4 e/ou Meta Pixel), ligada só quando os
 * IDs são informados no build:
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID=000000000000000
 * Sem IDs, nada é carregado e o aviso de cookies não aparece.
 * Com IDs, os scripts só carregam depois que o visitante aceita (LGPD).
 * Cliques nos botões de WhatsApp (atributo data-wa) viram o evento "whatsapp_click" / "Contact".
 * A escolha pode ser revista a qualquer momento pelo link "Preferências de cookies" do rodapé.
 */
const ENABLED = ANALYTICS_ENABLED;
const CONSENT_KEY = "jc-consent";

type Consent = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      callMethod?: (...a: unknown[]) => void;
      push?: unknown;
    };
    _fbq?: unknown;
  }
}

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/* A escolha fica no localStorage; o componente lê via useSyncExternalStore. */
const listeners = new Set<() => void>();
let memoryConsent: Consent = null;

function saveConsent(v: Consent) {
  memoryConsent = v;
  try {
    if (v) localStorage.setItem(CONSENT_KEY, v);
    else localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* navegação privada: vale só nesta visita */
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  // Mantém outras abas abertas em sincronia com a escolha.
  const onStorage = (e: StorageEvent) => e.key === CONSENT_KEY && fn();
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", onStorage);
  };
}

const getConsent = () => readConsent() ?? memoryConsent;
const isClient = () => true;
const isServer = () => false;
/* No HTML estático o aviso nunca aparece; ele só surge no navegador. */
const getServerConsent = (): Consent => "denied";

function loadScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function startTracking() {
  if (GA_ID && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`);
  }
  if (PIXEL_ID && !window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue!.push(args);
    } as NonNullable<Window["fbq"]>;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
  }
}

export function Analytics() {
  const enabled = ENABLED;
  const consent = useSyncExternalStore(subscribe, getConsent, getServerConsent);

  useEffect(() => {
    if (enabled && consent === "granted") startTracking();
  }, [enabled, consent]);

  useEffect(() => {
    if (!enabled) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("[data-wa]");
      if (!link) return;
      const source = link.getAttribute("data-wa");
      window.gtag?.("event", "whatsapp_click", { source, page: location.pathname });
      // Sem o endereço da página: assuntos sensíveis (saúde, BPC, criminal) não vão para a plataforma de anúncios.
      window.fbq?.("track", "Contact", { source });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [enabled]);

  if (!enabled || consent !== null) return null;

  const choose = (v: Exclude<Consent, null>) => {
    // Recusar depois de ter aceitado: recarrega para descarregar os scripts de medição.
    const wasTracking = Boolean(window.gtag || window.fbq);
    saveConsent(v);
    if (v === "denied" && wasTracking) location.reload();
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] z-50 mx-auto max-w-xl border border-ink-3 bg-ink p-5 text-[0.9rem] text-text-inverse-muted shadow-2xl sm:inset-x-auto sm:bottom-5 sm:left-5"
    >
      <p>
        Usamos cookies de medição para entender como o site é usado e melhorar o atendimento.{" "}
        <Link href="/politica-de-privacidade/" className="text-gold underline underline-offset-2">
          Saiba mais
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="min-h-11 rounded-full bg-gold px-5 font-semibold text-ink hover:bg-gold-light"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="min-h-11 rounded-full border border-ink-3 px-5 text-text-inverse hover:border-gold/60"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

/**
 * Link do rodapé para rever a escolha de cookies (LGPD, art. 8º, § 5º).
 * Só aparece quando há medição configurada e depois que o site carrega no navegador.
 */
export function CookiePreferences({ listItem = false }: { listItem?: boolean }) {
  const mounted = useSyncExternalStore(subscribe, isClient, isServer);
  if (!ENABLED || !mounted) return null;
  const button = (
    <button type="button" onClick={() => saveConsent(null)} className="transition-colors hover:text-gold-light">
      Preferências de cookies
    </button>
  );
  return listItem ? <li>{button}</li> : button;
}
