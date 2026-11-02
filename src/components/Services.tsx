import { motion, useReducedMotion } from 'framer-motion';
import { Compass, MonitorSmartphone, Ruler } from 'lucide-react';
import Photo from './ui/Photo';
import Tegel from './ui/Tegel';
import type { SlotId } from '../data/image-slots';

const ease = [0.16, 1, 0.3, 1] as const;

const services: {
  title: string; price: string; desc: string; features: string[]; slot: SlotId; Icon: typeof Ruler; tone: string; layout: string;
}[] = [
  {
    title: 'Full Interior Design', price: 'Mulai dari Rp 1.5 juta / m²', desc: 'End-to-end service dari concept sampai handover.',
    features: ['Konsep & moodboard', '3D rendering & technical drawing', 'Material & furniture sourcing', 'Project management & site supervision', 'Styling & photo handover'],
    slot: 'service-full', Icon: Ruler, tone: 'bg-bone text-ink', layout: 'lg:col-span-7 lg:row-span-2',
  },
  {
    title: 'Design Consultation', price: 'Rp 5 juta - 15 juta / sesi', desc: 'Untuk yang sudah punya tim eksekusi, butuh design direction.',
    features: ['Site visit + briefing', 'Concept board & layout', 'Material & color guidance', 'Sourcing list rekomendasi'],
    slot: 'service-consult', Icon: Compass, tone: 'bg-oxblood text-bone', layout: 'lg:col-span-5',
  },
  {
    title: 'E-Design (Online)', price: 'Rp 8 juta - 25 juta / ruangan', desc: 'Untuk klien luar kota, scope spesifik (kamar, ruang tamu).',
    features: ['Konsultasi online 3x', '3D render & sourcing list', 'Implementation guide'],
    slot: 'service-edesign', Icon: MonitorSmartphone, tone: 'bg-ochre text-ink', layout: 'lg:col-span-5',
  },
];

export default function Services() {
  const reduce = useReducedMotion();
  return (
    <section id="services" aria-labelledby="services-title" className="bg-botol pb-24 md:pb-36">
      <Tegel pattern="kotak" palette="deep" size={72} className="mb-24 h-[72px] border-b-[3px] border-ink md:mb-36" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 id="services-title" className="mb-12 text-[clamp(2.25rem,5vw,4.25rem)] md:mb-20">What We Do</h2>

        <div className="grout grid grid-cols-1 lg:grid-cols-12">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduce ? undefined : { y: -4 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease, delay: i * 0.12 }}
              className={`relative flex flex-col ${s.tone} ${s.layout}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/9] lg:aspect-auto lg:min-h-[340px] lg:flex-1' : 'aspect-[16/7]'}`}>
                <Photo slot={s.slot} sizes="(min-width: 1024px) 55vw, 100vw" />
              </div>
              <div className={`flex flex-col p-8 md:p-10 ${i === 0 ? "" : "flex-1"}`}>
                <s.Icon aria-hidden="true" size={28} strokeWidth={1.5} className="mb-5" />
                <h3 className="text-3xl md:text-4xl">{s.title}</h3>
                <motion.p
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
                  className="mt-3 font-display text-xl tabular-nums"
                >
                  {s.price}
                </motion.p>
                <p className="mt-4 max-w-[46ch] opacity-85">{s.desc}</p>
                <ul className={`mt-8 border-t border-current/25 pt-6 text-sm ${i === 0 ? 'lg:columns-2 lg:gap-8' : ''}`}>
                  {s.features.map((f) => (
                    <li key={f} className="mb-3 flex break-inside-avoid gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-current" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
