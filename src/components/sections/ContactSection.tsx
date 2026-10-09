import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/content/site";

export function ContactSection() {
  const rows = [
    {
      icon: MapPin,
      label: "Endereço",
      content: (
        <>
          {site.address.street}, {site.address.district}
          <br />
          {site.address.city}/{site.address.state} · CEP {site.address.zip}
        </>
      ),
      href: site.address.mapsUrl,
      external: true,
    },
    { icon: Phone, label: "Telefone e WhatsApp", content: site.contact.whatsappDisplay, href: site.contact.phoneHref },
    { icon: Mail, label: "E-mail", content: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: InstagramIcon, label: "Instagram", content: site.social.instagramHandle, href: site.social.instagram, external: true },
    { icon: Clock, label: "Horário", content: site.hours },
  ];

  return (
    <Section id="contato" tone="paper-2" labelledBy="contato-titulo">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 id="contato-titulo" className="em-gold mt-5 text-display-lg">
            Vamos conversar sobre <em>o seu caso</em>
          </h2>
          <p className="mt-6 max-w-[46ch] text-text-muted">{site.serviceArea}. O jeito mais rápido de falar com o advogado é pelo WhatsApp.</p>
          <WhatsAppButton source="contato" className="mt-9" />
        </div>

        <ul className="divide-y divide-paper-3 border-y border-paper-3">
          {rows.map(({ icon: Icon, label, content, href, external }) => {
            const body = (
              <>
                <Icon className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden />
                <span className="flex-1">
                  <span className="block font-caps text-[0.64rem] tracking-[0.18em] text-text-muted">{label.toUpperCase()}</span>
                  <span className="mt-1 block break-words text-text">{content}</span>
                </span>
                {href && external && <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden />}
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex gap-4 py-5 transition-colors hover:bg-paper/70"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="flex gap-4 py-5">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
