# PRD: Studio Nuansa — Interior Designer

## 1. Brand Identity

**Nama Brand:** Studio Nuansa
**Alasan Naming:** "Nuansa" = atmosfer/mood subtle, kata Indonesia yang familiar tapi memiliki kedalaman estetik. "Studio" memberi positioning profesional & creative-house. Cocok untuk firma interior dengan sensibility designer-led.

**Tagline:** *"Mendesain Nuansa, Membangun Rumah Jiwa."*

**Target Audience:**
- Pemilik rumah baru (post-handover, butuh interior)
- Pasangan muda yang baru pindah (apartemen, rumah pertama)
- F&B owner (cafe, resto) butuh konsep interior
- Office tenant (small office, co-working space)
- SES A & B+, willing to invest dalam ruang yang well-designed

**Brand Voice:**
- Tone: Sophisticated, thoughtful, design-literate, warm
- Style copywriting: Mendalam tentang process & filosofi, menghindari klise "your dream home"
- Avoid: Bahasa jargon arsitektur berlebihan, generic marketing speak

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (rich, editorial-style imagery)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo serif elegant, nav minimalist |
| 2 | Hero | React island `client:load` | Editorial-style hero dengan typography statement |
| 3 | Philosophy | `.astro` static | 3 prinsip desain studio |
| 4 | Featured Projects | React island `client:visible` | Showcase 6-8 project unggulan |
| 5 | Services | React island `client:visible` | Full design, consultation, e-design |
| 6 | Process | React island `client:visible` | 6-step design process timeline |
| 7 | Style Categories | React island `client:visible` | Minimalist, Japandi, Modern Tropical, dll |
| 8 | The Team | React island `client:visible` | Principal & senior designer profiles |
| 9 | Editorial / Journal | React island `client:visible` | Latest writings (link ke blog) |
| 10 | Testimonial | React island `client:visible` | Quote panjang dari klien |
| 11 | Investment & Pricing | `.astro` static | Indikatif pricing per service |
| 12 | Contact CTA | React island `client:idle` | Inquiry form panjang |
| 13 | Footer | `.astro` static | Office, contact, sosial |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Projects • Services • Process • Studio • Journal
- CTA: **Mulai Konsultasi**

### Hero
- **Headline:** Ruang Adalah Cerminan Diri. Mari Buat Yang Layak.
- **Subheadline:** Studio desain interior berbasis di Jakarta. Kami merancang ruang yang tidak hanya indah, tapi terasa seperti rumah — untuk hunian, F&B, dan ruang kerja.
- **CTA Primary:** Lihat Karya Kami
- **CTA Secondary:** Mulai Proyek

Statement bar: "Berdiri sejak 2019 • 80+ Proyek Selesai • Featured in Casa Indonesia, Dezeen"

### Philosophy
- **Heading:** Tiga Prinsip Yang Memandu Kami
- 3 cards berbasis text-heavy:

**01 — Form Mengikuti Cerita**
Setiap proyek dimulai dengan mendengarkan. Bagaimana Anda hidup, ritual pagi seperti apa, kebiasaan kecil yang mendefinisikan rumah. Desain yang baik adalah yang melayani kehidupan, bukan sebaliknya.

**02 — Material Berbicara Jujur**
Kayu yang menunjukkan urat aslinya, batu yang tidak menyamarkan tekstur, kain yang aging dengan elegan. Kami percaya material harus jujur — dan rumah yang dibangun dengan material jujur akan menua dengan baik.

**03 — Ruang Bernafas**
Desain yang baik memberi ruang untuk diam. Tidak setiap sudut perlu dihias, tidak setiap dinding perlu lukisan. Negative space adalah bagian dari komposisi.

### Featured Projects
- **Heading:** Selected Projects
- **Subheading:** Sebagian kecil dari karya kami sejak 2019.
- Grid 6-8 project card (asymmetric layout):

1. **The Quiet House** — Residential, Jakarta Selatan. *Modern Tropical, 320 m²*
2. **Mata Kayu Coffee** — Hospitality, Bandung. *Warm Industrial, 180 m²*
3. **Atelier 04** — Office, SCBD Jakarta. *Minimalist Workspace, 240 m²*
4. **Rumah Sembilu** — Residential, BSD. *Japandi, 280 m²*
5. **Tepi Senja Villa** — Residential, Bali. *Tropical Modern, 450 m²*
6. **Lampu Kuning Bistro** — Hospitality, Jakarta Pusat. *Eclectic, 120 m²*
7. **Apartemen Senopati** — Residential, Jakarta Selatan. *Minimalist Luxe, 95 m²*
8. **Studio Cikini** — Co-working, Jakarta. *Industrial Warm, 200 m²*

Per card: cover image, project name, type, style notes — hover reveals more

### Services
- **Heading:** What We Do
- 3 service tier cards:

**📐 Full Interior Design**
*Mulai dari Rp 1.5 juta / m²*
End-to-end service dari concept sampai handover.
- Konsep & moodboard
- 3D rendering & technical drawing
- Material & furniture sourcing
- Project management & site supervision
- Styling & photo handover

**💡 Design Consultation**
*Rp 5 juta - 15 juta / sesi*
Untuk yang sudah punya tim eksekusi, butuh design direction.
- Site visit + briefing
- Concept board & layout
- Material & color guidance
- Sourcing list rekomendasi

**🖥️ E-Design (Online)**
*Rp 8 juta - 25 juta / ruangan*
Untuk klien luar kota, scope spesifik (kamar, ruang tamu).
- Konsultasi online 3x
- 3D render & sourcing list
- Implementation guide

### Process
- **Heading:** Bagaimana Kami Bekerja
- Timeline 6-step (vertical desktop, horizontal mobile):

1. **🤝 Discovery (Minggu 1-2)** — Site visit, briefing, brand & lifestyle audit
2. **🎨 Concept (Minggu 3-5)** — Moodboard, spatial planning, style direction
3. **📐 Design Development (Minggu 6-10)** — 3D rendering, technical drawing, material selection
4. **🛒 Sourcing (Minggu 8-14)** — Furniture, lighting, fabric, art selection
5. **🔨 Execution (Minggu 12-24)** — Site supervision, quality control, milestone reporting
6. **✨ Handover (Minggu 24-26)** — Styling, snagging, photo documentation

### Style Categories
- **Heading:** Eksplorasi Style
- **Subheading:** Setiap proyek unik, tapi ini beberapa direction yang sering kami eksplorasi.

Grid 6 style cards:
- **Modern Tropical** — Indonesia tropis, kayu, hijau, light
- **Japandi** — Perpaduan Jepang & Skandinavia, tenang & functional
- **Warm Industrial** — Konkret, kayu, brass, hangat
- **Minimalist Luxe** — Less is more, material premium, restrained
- **Eclectic Curated** — Vintage + modern, layered, personal
- **Tropical Heritage** — Modern interpretation rumah tradisional Indonesia

### The Team
- **Heading:** Tim Kami
- 4 designer cards:

- **Wendy Setiawan, M.Arch** — Founder & Principal Designer
- **Lia Hartono** — Senior Interior Designer, hospitality lead
- **Reza Pradana** — Senior Designer, residential lead
- **Naya Putri** — Material Specialist & Stylist

Hover: bio singkat, pendekatan personal, projects led

### Editorial / Journal
- **Heading:** From Our Journal
- 3 latest article cards (link ke blog post):
  - "Mengapa Negative Space Penting Dalam Hunian Tropis"
  - "5 Mistake Umum Saat Memilih Furniture Untuk Apartemen Kecil"
  - "Studi Material: Mengenal Karakter Kayu Lokal Indonesia"

### Testimonial
- **Heading:** Kata Klien Kami
- 3-4 longer-form testimonial dengan foto proyek:

> "Studio Nuansa tidak hanya mendesain rumah saya. Mereka menanyakan bagaimana saya minum kopi pagi, di mana suami saya suka membaca, dan apakah anak-anak akan tetap di sini saat dewasa. Hasilnya: rumah yang terasa seperti memang untuk kami."
> — **Bu Sari & Pak Aldo, Quiet House owner**

> "Sebagai owner cafe, saya butuh interior yang Instagrammable tapi tetap fungsional untuk barista. Studio Nuansa balance keduanya dengan elegan."
> — **Anto, Mata Kayu Coffee founder**

### Investment & Pricing
- **Heading:** Investasi
- **Body:** Setiap proyek adalah custom — pricing final tergantung scope, kompleksitas, dan timeline. Tabel berikut adalah indikatif untuk membantu perencanaan.

| Service | Range | Timeline |
|---------|-------|----------|
| Full Interior (Hunian) | Rp 1.5jt - 3jt / m² | 4-6 bulan |
| Full Interior (F&B) | Rp 2jt - 4jt / m² | 3-5 bulan |
| Full Interior (Office) | Rp 1.2jt - 2.5jt / m² | 3-4 bulan |
| Consultation | Rp 5jt - 15jt | 2-3 minggu |
| E-Design | Rp 8jt - 25jt / ruang | 4-6 minggu |

Catatan: *Harga tidak termasuk biaya konstruksi, furniture, dan material.*

### Contact CTA
- **Heading:** Mari Berbicara Tentang Proyekmu
- **Body:** Setiap proyek dimulai dengan percakapan. Ceritakan tentang ruang yang ingin Anda ciptakan, dan tim kami akan merespon dalam 2 hari kerja.
- Form panjang:
  - Nama, Email, WhatsApp
  - Tipe proyek (Residential / F&B / Office / Other)
  - Lokasi proyek
  - Luas area (m²)
  - Target timeline
  - Budget range
  - Pesan tambahan (style preference, references)
- **CTA:** Kirim Inquiry

### Footer
- Tagline: *"Designed with intention, lived with joy."*
- Office: Alamat lengkap Jakarta + jam buka studio
- Sosmed: IG (@studionuansa), Pinterest (moodboards), Behance (project portfolio)
- Press: Featured in Casa Indonesia, Dezeen, ArchDaily

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/interior-design-warm-minimal | "Living room hangat minimalist" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/interior%20design%20cozy/ | "Interior editorial" | 1920x1080 |
| Philosophy 01 | Unsplash | https://unsplash.com/s/photos/japandi-interior | "Form follows story" | 1200x800 |
| Philosophy 02 | Pexels | https://www.pexels.com/search/wood%20texture%20interior/ | "Material wood honest" | 1200x800 |
| Philosophy 03 | Unsplash | https://unsplash.com/s/photos/minimalist-room-empty | "Negative space room" | 1200x800 |
| Project - Quiet House | Unsplash | https://unsplash.com/s/photos/modern-tropical-living-room | "Tropical living interior" | 1200x900 |
| Project - Mata Kayu | Pexels | https://www.pexels.com/search/coffee%20shop%20warm%20interior/ | "Cafe warm industrial" | 1200x900 |
| Project - Atelier 04 | Unsplash | https://unsplash.com/s/photos/modern-office-design | "Office minimalist" | 1200x900 |
| Project - Rumah Sembilu | Unsplash | https://unsplash.com/s/photos/japandi-living-room | "Japandi living" | 1200x900 |
| Project - Villa Bali | Pexels | https://www.pexels.com/search/tropical%20villa%20interior%20bali/ | "Villa tropical" | 1200x900 |
| Project - Bistro | Unsplash | https://unsplash.com/s/photos/eclectic-bistro-interior | "Bistro eclectic" | 1200x900 |
| Service - Full Interior | Unsplash | https://unsplash.com/s/photos/architect-rendering-3d | "3D render interior" | 800x600 |
| Service - Consultation | Pexels | https://www.pexels.com/search/architect%20sketch%20design/ | "Design sketch consultation" | 800x600 |
| Service - E-Design | Unsplash | https://unsplash.com/s/photos/laptop-mood-board | "Online design mood board" | 800x600 |
| Process - Discovery | Pexels | https://www.pexels.com/search/architect%20meeting%20client/ | "Discovery meeting" | 800x600 |
| Process - Concept | Unsplash | https://unsplash.com/s/photos/mood-board-fabric-samples | "Concept moodboard" | 800x600 |
| Process - Execution | Pexels | https://www.pexels.com/search/interior%20construction%20site/ | "Site supervision" | 800x600 |
| Style - Modern Tropical | Unsplash | https://unsplash.com/s/photos/modern-tropical-home | "Modern tropical style" | 800x600 |
| Style - Japandi | Unsplash | https://unsplash.com/s/photos/japandi-bedroom | "Japandi style" | 800x600 |
| Style - Industrial | Pexels | https://www.pexels.com/search/warm%20industrial%20loft/ | "Warm industrial" | 800x600 |
| Style - Minimalist | Unsplash | https://unsplash.com/s/photos/minimalist-luxury-interior | "Minimalist luxe" | 800x600 |
| Team portrait | Pexels | https://www.pexels.com/search/asian%20architect%20portrait/ | "Designer portrait" | 600x800 |
| Journal thumbnails | Unsplash | https://unsplash.com/s/photos/interior-design-detail | "Article thumbnails" | 800x600 |
| Testimonial - Client home | Pexels | https://www.pexels.com/search/cozy%20living%20room%20couple/ | "Client di rumah desain" | 1200x800 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Headline editorial: word-by-word reveal with delicate easing
const editorialReveal = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const wordReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
}

// Background image: very subtle Ken Burns, almost imperceptible
const slowDrift = {
  scale: [1, 1.05],
  transition: { duration: 30, repeat: Infinity, repeatType: "reverse" }
}
```

### Philosophy Section (React island, `client:visible`)
- 3 cards reveal sequential (top-down)
- Number "01, 02, 03" subtle fade-in with character offset
- Text reveal: line-by-line stagger

### Featured Projects (React island, `client:visible`)
- Asymmetric grid layout (some cards taller, some wider)
- Cards reveal with `staggerChildren: 0.1`
- Hover: image zoom slight + overlay slide-up with project info
- Click → project detail page (or modal lightbox)
- Image: `scale: 1.05` on hover dengan `transform-origin: center`

### Services Cards (React island, `client:visible`)
- 3 cards reveal stagger
- Hover: card lift + subtle accent border animation
- Price reveal animation: counter-style fade-in

### Process Timeline (React island, `client:visible`)
- Vertical line draw via SVG `pathLength` on scroll
- Step number reveal sequential
- Step content slide-in from alternating sides

### Style Categories (React island, `client:visible`)
- 6 cards grid stagger reveal
- Hover: card image fade-in dengan style overlay
- Click → filter projects by style (smooth `AnimatePresence` reflow)

### The Team (React island, `client:visible`)
- 4 portrait cards reveal stagger
- Hover: image grayscale → color transition + bio slide-up
- Designer name & role: subtle weight shift on hover

### Editorial / Journal Cards (React island, `client:visible`)
- 3 article cards reveal stagger
- Hover: card lift + image subtle zoom
- Article title: underline draw on hover

### Testimonial (React island, `client:visible`)
- Carousel auto-rotate 8s (long-form, butuh waktu baca)
- Slide transition slow & smooth
- Background quote mark large fading in

### Contact Form
- Long form with smooth section dividers
- Field focus: label float + accent underline
- Submit: button morph animation + checkmark on success

### Scroll Reveal Pattern (reusable)
```tsx
const editorialFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Cursor Effect (optional, desktop)
- Custom cursor: subtle dot follow with lag, expand on hover di project images

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Projects, Services, Process, Styles, Team, Journal, Testimonial
- `client:idle` → Contact form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** Studio Nuansa — Interior Design Jakarta, Residential & Commercial
- **Description:** Studio desain interior berbasis Jakarta. Spesialis residential, F&B, dan office dengan pendekatan thoughtful. 80+ proyek sejak 2019. Featured Casa Indonesia.
- **Keywords:** interior designer jakarta, studio interior, design rumah jakarta, japandi interior, modern tropical, interior cafe
- **OG Image:** Editorial hero shot dengan logo overlay (1200x630)
- **Schema:** `LocalBusiness` + `Person` + `CreativeWork` schema
