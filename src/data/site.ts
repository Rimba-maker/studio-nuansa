/** Copy from the PRD. All studio facts are placeholders until the client supplies real ones. */
export const SITE = {
  name: 'Studio Nuansa',
  tagline: 'Mendesain Nuansa, Membangun Rumah Jiwa.',
  footerLine: 'Designed with intention, lived with joy.',
  title: 'Studio Nuansa — Interior Design Jakarta, Residential & Commercial',
  description:
    'Studio desain interior berbasis Jakarta. Spesialis residential, F&B, dan office dengan pendekatan thoughtful. 80+ proyek sejak 2019. Featured Casa Indonesia.',
  keywords:
    'interior designer jakarta, studio interior, design rumah jakarta, japandi interior, modern tropical, interior cafe',
  email: 'hello@studionuansa.com',
  whatsapp: '+62 811 2345 6789',
  instagram: '@studionuansa',
  address: ['Jl. Senopati No. 42', 'Jakarta Selatan, 12190', 'Indonesia'],
  hours: 'Senin – Jumat, 09:00 – 18:00',
  press: ['Casa Indonesia', 'Dezeen', 'ArchDaily'],
  founded: 2019,
} as const;

export const NAV = [
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#studio', label: 'Studio' },
  { href: '#journal', label: 'Journal' },
] as const;
