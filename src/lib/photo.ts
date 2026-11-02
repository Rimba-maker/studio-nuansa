import { IMAGE_SLOTS, type SlotId } from '../data/image-slots';
import generated from '../data/images.generated.json';

type Generated = Record<string, {
  file: string; fileSm: string; width: number; height: number; avgColor: string;
  pexelsUrl: string; photographer: string; photographerUrl: string; pexelsId: number; query: string;
}>;

export type Photo = {
  src: string; srcSet?: string; alt: string; color: string;
  credit?: { photographer: string; url: string };
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Resolves a slot to a Pexels file when fetched, else to the legacy hot-linked photo. */
export function photo(id: SlotId): Photo {
  const slot = IMAGE_SLOTS[id];
  const g = (generated as Generated)[id];
  if (g) {
    return {
      src: `${base}${g.file}`,
      srcSet: `${base}${g.fileSm} 940w, ${base}${g.file} 1880w`,
      alt: slot.alt,
      color: g.avgColor || '#d9d1b8',
      credit: { photographer: g.photographer, url: g.photographerUrl },
    };
  }
  return { src: slot.legacy ?? '', alt: slot.alt, color: '#d9d1b8' };
}
