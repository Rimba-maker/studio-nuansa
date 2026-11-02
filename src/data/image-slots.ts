/**
 * Every photograph on the page is a named slot. `query` is what scripts/fetch-pexels.mjs
 * searches on Pexels; `legacy` is the previous hot-linked Unsplash photo, used only until
 * a Pexels file has been fetched into src/data/images.generated.json.
 */
export type Orientation = 'landscape' | 'portrait' | 'square';
export type ImageSlot = { query: string; orientation: Orientation; alt: string; legacy?: string };

const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const IMAGE_SLOTS = {
  // Hero
  hero: { query: 'warm minimalist living room interior', orientation: 'landscape', alt: 'Ruang tamu hangat bergaya minimalis dengan cahaya alami', legacy: u('1600210492486-724fe5c67fb0', 1600) },
  'hero-alt': { query: 'cozy interior design editorial', orientation: 'landscape', alt: 'Interior editorial dengan material hangat', legacy: u('1600047509807-ba8f99d2cdde') },
  // Philosophy
  'philosophy-story': { query: 'japandi interior living room', orientation: 'landscape', alt: 'Ruang duduk bergaya Japandi yang tenang', legacy: u('1593696140826-c58b021acf8b') },
  'philosophy-material': { query: 'wood grain texture interior detail', orientation: 'portrait', alt: 'Detail urat kayu pada furnitur interior', legacy: u('1610505466025-534bc7e828fd', 800) },
  'philosophy-space': { query: 'minimalist empty room natural light', orientation: 'landscape', alt: 'Ruang lega dengan banyak ruang kosong dan cahaya alami', legacy: u('1505691938895-1758d7feb511') },
  // Materials strip
  'detail-rattan': { query: 'rattan furniture interior', orientation: 'portrait', alt: 'Kursi rotan di sudut ruang', legacy: u('1594026112284-02bb6f3352fe', 800) },
  'detail-linen': { query: 'linen curtain window sunlight', orientation: 'portrait', alt: 'Tirai linen tertimpa cahaya matahari', legacy: u('1600607687920-4e2a09cf159d', 800) },
  'detail-ceramic': { query: 'ceramic vase interior styling', orientation: 'portrait', alt: 'Vas keramik pada rak kayu', legacy: u('1556155092-490a1ba16284', 800) },
  'detail-teak': { query: 'teak wood furniture', orientation: 'portrait', alt: 'Furnitur kayu jati dengan finishing natural', legacy: u('1544457070-4cd773b4d71e', 800) },
  'detail-plaster': { query: 'plaster wall texture warm', orientation: 'portrait', alt: 'Tekstur dinding plester hangat', legacy: u('1524758631624-e2822e304c36', 800) },
  // Projects
  'project-quiet-house': { query: 'modern tropical living room', orientation: 'landscape', alt: 'Ruang tamu The Quiet House, modern tropical', legacy: u('1600596542815-ffad4c1539a9') },
  'project-mata-kayu': { query: 'coffee shop warm interior', orientation: 'landscape', alt: 'Interior Mata Kayu Coffee, warm industrial', legacy: u('1554118811-1e0d58224f24', 900) },
  'project-atelier-04': { query: 'modern office interior design', orientation: 'landscape', alt: 'Ruang kerja Atelier 04, minimalist workspace', legacy: u('1497366216548-37526070297c', 900) },
  'project-sembilu': { query: 'japandi living room', orientation: 'landscape', alt: 'Ruang keluarga Rumah Sembilu, Japandi', legacy: u('1593696140826-c58b021acf8b') },
  'project-tepi-senja': { query: 'tropical villa interior bali', orientation: 'landscape', alt: 'Interior Tepi Senja Villa, Bali', legacy: u('1512917774080-9991f1c4c750') },
  'project-lampu-kuning': { query: 'eclectic bistro interior', orientation: 'landscape', alt: 'Interior Lampu Kuning Bistro, eclectic', legacy: u('1517248135467-4c7edcad34c4', 900) },
  'project-senopati': { query: 'luxury minimalist apartment interior', orientation: 'landscape', alt: 'Apartemen Senopati, minimalist luxe', legacy: u('1505691938895-1758d7feb511', 900) },
  'project-cikini': { query: 'coworking space industrial interior', orientation: 'landscape', alt: 'Studio Cikini, ruang co-working industrial hangat', legacy: u('1524758631624-e2822e304c36') },
  // Services
  'service-full': { query: 'interior 3d rendering architect', orientation: 'landscape', alt: 'Rendering 3D ruang interior', legacy: u('1600047509807-ba8f99d2cdde', 900) },
  'service-consult': { query: 'architect sketch design table', orientation: 'landscape', alt: 'Sketsa desain di meja konsultasi', legacy: u('1497366216548-37526070297c', 900) },
  'service-edesign': { query: 'laptop mood board design', orientation: 'landscape', alt: 'Moodboard desain di layar laptop', legacy: u('1524758631624-e2822e304c36', 900) },
  // Process
  'process-discovery': { query: 'architect meeting with client', orientation: 'landscape', alt: 'Pertemuan discovery dengan klien', legacy: u('1556157382-97eda2d62296', 900) },
  'process-concept': { query: 'mood board fabric samples', orientation: 'landscape', alt: 'Moodboard dan sampel kain', legacy: u('1610505466025-534bc7e828fd', 900) },
  'process-design': { query: 'interior design drawings blueprint', orientation: 'landscape', alt: 'Gambar kerja interior', legacy: u('1497366216548-37526070297c', 900) },
  'process-sourcing': { query: 'fabric swatches furniture showroom', orientation: 'landscape', alt: 'Pemilihan material dan furnitur', legacy: u('1556155092-490a1ba16284', 900) },
  'process-execution': { query: 'interior construction site', orientation: 'landscape', alt: 'Supervisi pekerjaan di lokasi proyek', legacy: u('1580489944761-15a19d654956', 900) },
  'process-handover': { query: 'styled living room finished interior', orientation: 'landscape', alt: 'Ruang yang selesai ditata saat handover', legacy: u('1600607687920-4e2a09cf159d', 900) },
  // Styles
  'style-tropical': { query: 'modern tropical home interior', orientation: 'landscape', alt: 'Gaya Modern Tropical', legacy: u('1544457070-4cd773b4d71e', 900) },
  'style-japandi': { query: 'japandi bedroom', orientation: 'landscape', alt: 'Gaya Japandi', legacy: u('1593696140826-c58b021acf8b', 900) },
  'style-industrial': { query: 'warm industrial loft interior', orientation: 'landscape', alt: 'Gaya Warm Industrial', legacy: u('1554118811-1e0d58224f24', 900) },
  'style-minimalist': { query: 'minimalist luxury interior', orientation: 'landscape', alt: 'Gaya Minimalist Luxe', legacy: u('1505691938895-1758d7feb511', 900) },
  'style-eclectic': { query: 'eclectic vintage interior layered', orientation: 'landscape', alt: 'Gaya Eclectic Curated', legacy: u('1517248135467-4c7edcad34c4', 900) },
  'style-heritage': { query: 'javanese traditional house interior wood', orientation: 'landscape', alt: 'Gaya Tropical Heritage', legacy: u('1512917774080-9991f1c4c750', 900) },
  // Team (stock stand-ins for portraits; replace with real team photos)
  'team-wendy': { query: 'asian woman architect portrait', orientation: 'portrait', alt: 'Potret Wendy Setiawan (foto contoh)', legacy: u('1556157382-97eda2d62296', 700) },
  'team-lia': { query: 'asian woman designer portrait studio', orientation: 'portrait', alt: 'Potret Lia Hartono (foto contoh)', legacy: u('1573496359142-b8d87734a5a2', 700) },
  'team-reza': { query: 'asian man designer portrait', orientation: 'portrait', alt: 'Potret Reza Pradana (foto contoh)', legacy: u('1556155092-490a1ba16284', 700) },
  'team-naya': { query: 'young asian woman stylist portrait', orientation: 'portrait', alt: 'Potret Naya Putri (foto contoh)', legacy: u('1580489944761-15a19d654956', 700) },
  // Journal
  'journal-space': { query: 'tropical house negative space minimal', orientation: 'landscape', alt: 'Hunian tropis dengan ruang kosong yang lega', legacy: u('1600607687920-4e2a09cf159d', 900) },
  'journal-furniture': { query: 'small apartment furniture arrangement', orientation: 'landscape', alt: 'Furnitur pada apartemen kecil', legacy: u('1594026112284-02bb6f3352fe', 900) },
  'journal-wood': { query: 'indonesian teak wood grain close up', orientation: 'landscape', alt: 'Karakter kayu lokal Indonesia', legacy: u('1610505466025-534bc7e828fd', 900) },
  // Testimonial
  'testimonial-home': { query: 'cozy living room couple home', orientation: 'portrait', alt: 'Rumah klien yang telah selesai didesain', legacy: u('1511895426328-dc8714191300', 1000) },
  'testimonial-cafe': { query: 'cafe interior barista counter', orientation: 'portrait', alt: 'Kafe klien dengan area barista', legacy: u('1600047509807-ba8f99d2cdde', 1000) },
  // Contact
  contact: { query: 'interior designer desk material samples', orientation: 'portrait', alt: 'Meja desainer dengan sampel material', legacy: u('1556155092-490a1ba16284', 900) },
} satisfies Record<string, ImageSlot>;

export type SlotId = keyof typeof IMAGE_SLOTS;
