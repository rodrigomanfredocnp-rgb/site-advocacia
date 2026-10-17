import { ViewTransition } from "react";
import { Photo, topicPhoto } from "@/components/ui/Photo";
import type { Landing } from "@/content/types";

/** Foto do assunto no topo da página (a mesma do card, que "voa" até aqui na troca de página). */
export function TopicHeroPhoto({ landing }: { landing: Landing }) {
  if (!landing.photo) return null;
  return (
    <figure className="photo-in mx-auto w-full max-w-[34rem] lg:mr-0">
      <ViewTransition name={`foto-${landing.slug}`} share="morph" default="none">
        <Photo
          name={topicPhoto(landing.slug)}
          alt={landing.photo.alt}
          focus={landing.photo.focus}
          sizes="(min-width: 1024px) 34rem, 92vw"
          priority
          className="aspect-[16/10] lg:aspect-[4/3.4]"
        />
      </ViewTransition>
    </figure>
  );
}
