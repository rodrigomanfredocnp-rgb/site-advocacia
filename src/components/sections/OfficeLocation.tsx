import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { mapEmbedUrl, site } from "@/content/site";
import { headline } from "@/lib/emphasis";

/**
 * Endereço do escritório com o mapa do Google ao lado (pedido do titular): endereço em linhas curtas,
 * "Como chegar" (rota) e "Abrir no Google Maps". O mapa só carrega quando chega perto da tela.
 */
export function OfficeLocation({ id, title = "O escritório." }: { id: string; title?: string }) {
  const { street, district, city, state, zip } = site.address;
  return (
    <Section labelledBy={`${id}-titulo`} panel className="pb-20 md:pb-28">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
        <div>
          <h2 id={`${id}-titulo`} data-reveal className="accent text-display-lg">
            {headline(title)}
          </h2>
          <address data-reveal className="mt-6 flex gap-3 text-lead text-text-muted not-italic">
            <MapPin className="mt-1.5 size-5 shrink-0 text-gold-text" aria-hidden />
            <span>
              {street}
              <br />
              {district}, {city}/{state}
              <br />
              CEP {zip}
            </span>
          </address>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={site.address.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-plain btn-outline">
              <Navigation className="size-5" aria-hidden />
              Como chegar
            </a>
            <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow text-[1.02rem]">
              Abrir no Google Maps
              <ArrowUpRight className="size-5" aria-hidden />
            </a>
          </div>
        </div>
        <div data-reveal className="aspect-[4/3] w-full overflow-hidden bg-mist">
          <iframe
            src={mapEmbedUrl}
            title={`Mapa: escritório na ${street}, ${city}/${state}`}
            loading="lazy"
            className="size-full border-0"
          />
        </div>
      </div>
    </Section>
  );
}
