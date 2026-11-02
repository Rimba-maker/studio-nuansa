import { photo } from '../../lib/photo';
import type { SlotId } from '../../data/image-slots';

type Props = {
  slot: SlotId;
  className?: string;
  sizes?: string;
  eager?: boolean;
  /** extra style, e.g. object-position */
  style?: React.CSSProperties;
};

/** A photograph on its own average-colour ground, so an unloaded image still reads as a tile. */
export default function Photo({ slot, className = '', sizes = '(min-width: 1024px) 50vw, 100vw', eager, style }: Props) {
  const p = photo(slot);
  return (
    <img
      src={p.src}
      srcSet={p.srcSet}
      sizes={p.srcSet ? sizes : undefined}
      alt={p.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`block h-full w-full object-cover ${className}`}
      style={{ backgroundColor: p.color, ...style }}
    />
  );
}
