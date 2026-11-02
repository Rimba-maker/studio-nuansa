/**
 * Ubin tegel: authored SVG cement-tile patterns.
 * Every motif is mirror-symmetric (no pinwheel/chiral shapes) and returns a
 * data-URI so it can sit on any ground without extra requests.
 */
export type TegelPattern = 'kunci' | 'kotak' | 'bintang' | 'daun';
export type TegelColors = { a: string; b: string; c: string };

export const PALETTE = {
  botol: '#17362c',
  botolDeep: '#0f261f',
  bone: '#ece6d3',
  boneDim: '#d9d1b8',
  ochre: '#cf9a2c',
  oxblood: '#6d1c25',
  indigo: '#1d2b57',
  ink: '#10201a',
} as const;

export const TILE_PALETTES = {
  botol: { a: PALETTE.botol, b: PALETTE.ochre, c: PALETTE.bone },
  deep: { a: PALETTE.botolDeep, b: '#2c5c49', c: PALETTE.ochre },
  floor: { a: PALETTE.botolDeep, b: '#1d4637', c: '#2c5c49' },
  oxblood: { a: PALETTE.oxblood, b: PALETTE.bone, c: PALETTE.ochre },
  bone: { a: PALETTE.bone, b: PALETTE.botol, c: PALETTE.oxblood },
  ochre: { a: PALETTE.ochre, b: PALETTE.botol, c: PALETTE.bone },
  indigo: { a: PALETTE.indigo, b: PALETTE.bone, c: PALETTE.ochre },
} satisfies Record<string, TegelColors>;

export type TegelPaletteName = keyof typeof TILE_PALETTES;

const shapes: Record<TegelPattern, (c: TegelColors) => string> = {
  // kunci: diamond + centre dot + four corner quarter-discs
  kunci: ({ b, c }) =>
    `<polygon points="48,10 86,48 48,86 10,48" fill="${b}"/>` +
    `<circle cx="48" cy="48" r="13" fill="${c}"/>` +
    [[0, 0], [96, 0], [0, 96], [96, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="20" fill="${c}"/>`).join(''),
  // kotak: concentric squares
  kotak: ({ b, c }) =>
    `<rect x="9" y="9" width="78" height="78" fill="none" stroke="${b}" stroke-width="4"/>` +
    `<rect x="24" y="24" width="48" height="48" fill="${b}"/>` +
    `<rect x="37" y="37" width="22" height="22" fill="${c}"/>`,
  // bintang: eight-point star from a diamond over a square
  bintang: ({ a, b, c }) =>
    `<polygon points="48,6 90,48 48,90 6,48" fill="${b}"/>` +
    `<rect x="22" y="22" width="52" height="52" fill="${c}"/>` +
    `<circle cx="48" cy="48" r="11" fill="${a}"/>`,
  // daun: four mirrored leaves meeting at the centre
  daun: ({ b, c }) => {
    const leaf = 'M48 48 Q61 28 48 8 Q35 28 48 48Z';
    return [0, 90, 180, 270].map((r) => `<path d="${leaf}" fill="${b}" transform="rotate(${r} 48 48)"/>`).join('') +
      `<circle cx="48" cy="48" r="7" fill="${c}"/>` +
      [[0, 0], [96, 0], [0, 96], [96, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="${c}"/>`).join('');
  },
};

export function tegelSvg(pattern: TegelPattern, colors: TegelColors): string {
  const grout = 'rgba(0,0,0,0.28)';
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">` +
    `<rect width="96" height="96" fill="${colors.a}"/>` +
    shapes[pattern](colors) +
    `<rect x=".5" y=".5" width="95" height="95" fill="none" stroke="${grout}"/>` +
    `</svg>`
  );
}

export function tegelUrl(pattern: TegelPattern, palette: TegelPaletteName | TegelColors): string {
  const colors = typeof palette === 'string' ? TILE_PALETTES[palette] : palette;
  return `url("data:image/svg+xml,${encodeURIComponent(tegelSvg(pattern, colors))}")`;
}

/** Inline style object for React islands. */
export function tegelStyle(pattern: TegelPattern, palette: TegelPaletteName | TegelColors, size = 96) {
  return { backgroundImage: tegelUrl(pattern, palette), backgroundSize: `${size}px ${size}px` };
}

/** Inline style string for .astro files. */
export function tegelCss(pattern: TegelPattern, palette: TegelPaletteName | TegelColors, size = 96): string {
  return `background-image:${tegelUrl(pattern, palette)};background-size:${size}px ${size}px;`;
}
