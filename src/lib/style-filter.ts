import type { StyleKey } from '../data/projects';
import { STYLE_EVENT } from '../data/projects';

/**
 * Shared style filter between two separate Astro islands.
 * The current value lives on `window` so an island that hydrates after the click
 * (client:visible) still picks up the selection on mount.
 */
declare global { interface Window { __nuansaStyle?: StyleKey | null } }

export const readStyle = (): StyleKey | null => (typeof window === 'undefined' ? null : window.__nuansaStyle ?? null);

export function emitStyle(next: StyleKey | null) {
  window.__nuansaStyle = next;
  window.dispatchEvent(new CustomEvent(STYLE_EVENT, { detail: next }));
}

export function onStyle(cb: (s: StyleKey | null) => void) {
  const handler = (e: Event) => cb((e as CustomEvent<StyleKey | null>).detail ?? null);
  window.addEventListener(STYLE_EVENT, handler);
  cb(readStyle()); // catch up with a selection made before this island hydrated
  return () => window.removeEventListener(STYLE_EVENT, handler);
}
