import type { SlotId } from './image-slots';
import type { TegelPaletteName, TegelPattern } from '../lib/tegel';

export type StyleKey = 'modern-tropical' | 'japandi' | 'warm-industrial' | 'minimalist-luxe' | 'eclectic' | 'tropical-heritage';

export const STYLES: {
  key: StyleKey; title: string; desc: string; slot: SlotId; pattern: TegelPattern; palette: TegelPaletteName;
}[] = [
  { key: 'modern-tropical', title: 'Modern Tropical', desc: 'Indonesia tropis, kayu, hijau, light', slot: 'style-tropical', pattern: 'daun', palette: 'botol' },
  { key: 'japandi', title: 'Japandi', desc: 'Perpaduan Jepang & Skandinavia, tenang & functional', slot: 'style-japandi', pattern: 'kotak', palette: 'bone' },
  { key: 'warm-industrial', title: 'Warm Industrial', desc: 'Konkret, kayu, brass, hangat', slot: 'style-industrial', pattern: 'bintang', palette: 'ochre' },
  { key: 'minimalist-luxe', title: 'Minimalist Luxe', desc: 'Less is more, material premium, restrained', slot: 'style-minimalist', pattern: 'kotak', palette: 'deep' },
  { key: 'eclectic', title: 'Eclectic Curated', desc: 'Vintage + modern, layered, personal', slot: 'style-eclectic', pattern: 'kunci', palette: 'oxblood' },
  { key: 'tropical-heritage', title: 'Tropical Heritage', desc: 'Modern interpretation rumah tradisional Indonesia', slot: 'style-heritage', pattern: 'bintang', palette: 'indigo' },
];

export type Project = {
  id: number; title: string; category: string; location: string; style: string; area: string;
  styleKey: StyleKey; slot: SlotId; span: string; href?: string;
};

export const PROJECTS: Project[] = [
  { id: 1, title: 'The Quiet House', category: 'Residential', location: 'Jakarta Selatan', style: 'Modern Tropical', area: '320 m²', styleKey: 'modern-tropical', slot: 'project-quiet-house', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, title: 'Mata Kayu Coffee', category: 'Hospitality', location: 'Bandung', style: 'Warm Industrial', area: '180 m²', styleKey: 'warm-industrial', slot: 'project-mata-kayu', span: '' },
  { id: 3, title: 'Atelier 04', category: 'Office', location: 'SCBD Jakarta', style: 'Minimalist Workspace', area: '240 m²', styleKey: 'minimalist-luxe', slot: 'project-atelier-04', span: '' },
  { id: 4, title: 'Rumah Sembilu', category: 'Residential', location: 'BSD', style: 'Japandi', area: '280 m²', styleKey: 'japandi', slot: 'project-sembilu', span: 'md:col-span-2' },
  { id: 5, title: 'Tepi Senja Villa', category: 'Residential', location: 'Bali', style: 'Tropical Modern', area: '450 m²', styleKey: 'modern-tropical', slot: 'project-tepi-senja', span: 'md:col-span-2 md:row-span-2' },
  { id: 6, title: 'Lampu Kuning Bistro', category: 'Hospitality', location: 'Jakarta Pusat', style: 'Eclectic', area: '120 m²', styleKey: 'eclectic', slot: 'project-lampu-kuning', span: '' },
  { id: 7, title: 'Apartemen Senopati', category: 'Residential', location: 'Jakarta Selatan', style: 'Minimalist Luxe', area: '95 m²', styleKey: 'minimalist-luxe', slot: 'project-senopati', span: '' },
  { id: 8, title: 'Studio Cikini', category: 'Co-working', location: 'Jakarta', style: 'Industrial Warm', area: '200 m²', styleKey: 'warm-industrial', slot: 'project-cikini', span: 'md:col-span-2' },
];

/** Event name shared by StyleCategories (emits) and FeaturedProjects (listens). */
export const STYLE_EVENT = 'nuansa:style';
