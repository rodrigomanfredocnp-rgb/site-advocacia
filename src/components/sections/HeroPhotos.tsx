import { ViewTransition } from "react";
import { Photo, topicPhoto } from "@/components/ui/Photo";
import { site } from "@/content/site";
import type { Landing } from "@/content/types";

/** Selo do advogado sobre as fotos do topo: liga o assunto a quem atende. */
function LawyerBadge({ className = "" }: { className?: string }) {
  return (
    <figcaption
      className={`load-in absolute z-10 flex items-center gap-3.5 bg-white py-3 pr-6 pl-3 text-text shadow-[0_24px_50px_-26px_rgb(0_0_0/0.6)] ${className}`}
      style={{ "--d": 3 } as React.CSSProperties}
    >
      <Photo
        name="jhonny-serio"
        alt=""
        focus="50% 14%"
        sizes="4rem"
        className="size-14 shrink-0 rounded-full"
        imgClassName="scale-[1.6] origin-[50%_14%]"
      />
      <span className="leading-tight">
        <span className="block font-display text-[1.2rem]">{site.lawyer.displayName}</span>
        <span className="text-[0.95rem] text-text-muted">Advogado · {site.lawyer.oab}</span>
      </span>
    </figcaption>
  );
}

/** Home: retrato do advogado fundido no fundo escuro (o fundo vinho da foto conversa com o brilho do topo). */
export function HomeHeroPhoto() {
  return (
    <figure className="relative mx-auto w-full max-w-[26rem] lg:mr-0 lg:max-w-[30rem]">
      <div className="photo-reveal melt">
        <Photo
          name="jhonny-serio"
          alt="Dr. Jhonny Cardoso, advogado, de terno escuro e gravata vermelha, com os braços cruzados"
          focus="50% 15%"
          sizes="(min-width: 1024px) 30rem, 90vw"
          priority
          className="aspect-[4/5] bg-transparent"
        />
      </div>
      <LawyerBadge className="bottom-10 -left-3 sm:-left-10" />
    </figure>
  );
}

/** Landing: foto do assunto (a mesma do card, que "voa" até aqui) com o selo do advogado. */
export function TopicHeroPhoto({ landing }: { landing: Landing }) {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem] lg:mr-0">
      <div className="photo-reveal">
        <ViewTransition name={`foto-${landing.slug}`} share="morph" default="none">
          <Photo
            name={topicPhoto(landing.slug)}
            alt={landing.photoAlt}
            focus={landing.photoFocus}
            sizes="(min-width: 1024px) 34rem, 92vw"
            priority
            className="aspect-[4/3] lg:aspect-square"
          />
        </ViewTransition>
      </div>
      <LawyerBadge className="-bottom-6 left-4 sm:-left-8" />
    </figure>
  );
}
