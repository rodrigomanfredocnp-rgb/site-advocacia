"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type Props = {
  items: { href: string; label: string }[];
  whatsappMessage?: string;
};

export function MobileMenu({ items, whatsappMessage }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    // Ao girar o tablet para a largura do menu de desktop, fecha e destrava a rolagem.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && close();
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="grid size-11 place-items-center rounded-sm border border-line text-ink transition-colors hover:border-ink"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-20 bottom-0 z-50 overflow-y-auto border-t border-line bg-white"
      >
        <nav aria-label="Menu" className="container-site flex flex-col py-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-2xl text-ink transition-colors hover:text-gold-text"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppButton source="menu-mobile" message={whatsappMessage} className="mt-8 w-full">
            Fale no WhatsApp
          </WhatsAppButton>
        </nav>
      </div>
    </div>
  );
}
