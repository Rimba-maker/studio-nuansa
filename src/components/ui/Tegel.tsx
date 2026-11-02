import { tegelStyle, type TegelPaletteName, type TegelPattern } from '../../lib/tegel';

type Props = { pattern: TegelPattern; palette: TegelPaletteName; size?: number; className?: string; label?: string };

/** Decorative tegel field. Hidden from assistive tech unless a label is given. */
export default function Tegel({ pattern, palette, size = 96, className = '', label }: Props) {
  return (
    <div
      className={className}
      style={tegelStyle(pattern, palette, size)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
