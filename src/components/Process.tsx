import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Photo from './ui/Photo';
import Tegel from './ui/Tegel';
import { tegelStyle, type TegelPattern, type TegelPaletteName } from '../lib/tegel';
import type { SlotId } from '../data/image-slots';

const ease = [0.16, 1, 0.3, 1] as const;

const steps: { num: string; title: string; time: string; desc: string; slot: SlotId; pattern: TegelPattern; palette: TegelPaletteName }[] = [
  { num: '01', title: 'Discovery', time: 'Minggu 1-2', desc: 'Site visit, briefing, brand & lifestyle audit', slot: 'process-discovery', pattern: 'kotak', palette: 'botol' },
  { num: '02', title: 'Concept', time: 'Minggu 3-5', desc: 'Moodboard, spatial planning, style direction', slot: 'process-concept', pattern: 'daun', palette: 'oxblood' },
  { num: '03', title: 'Design Development', time: 'Minggu 6-10', desc: '3D rendering, technical drawing, material selection', slot: 'process-design', pattern: 'kunci', palette: 'bone' },
  { num: '04', title: 'Sourcing', time: 'Minggu 8-14', desc: 'Furniture, lighting, fabric, art selection', slot: 'process-sourcing', pattern: 'bintang', palette: 'ochre' },
  { num: '05', title: 'Execution', time: 'Minggu 12-24', desc: 'Site supervision, quality control, milestone reporting', slot: 'process-execution', pattern: 'kotak', palette: 'indigo' },
  { num: '06', title: 'Handover', time: 'Minggu 24-26', desc: 'Styling, snagging, photo documentation', slot: 'process-handover', pattern: 'kunci', palette: 'botol' },
];

export default function Process() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  // The spine is a column of tegel laid down as you scroll.
  const clip = useTransform(progress, (v) => `inset(0 0 ${(1 - v) * 100}% 0)`);

  return (
    <section id="process" aria-labelledby="process-title" className="relative overflow-hidden bg-botol-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 id="process-title" className="mb-16 text-[clamp(2.25rem,5vw,4.25rem)] md:mb-28">Bagaimana Kami Bekerja</h2>
      </div>
      <div className="relative">
        {/* lantai: ubin di kiri dan kanan jalur proses */}
        <Tegel pattern="bintang" palette="floor" size={96} className="absolute inset-y-0 left-0 hidden w-[max(0px,calc((100%-1100px)/2-24px))] lg:block" />
        <Tegel pattern="bintang" palette="floor" size={96} className="absolute inset-y-0 right-0 hidden w-[max(0px,calc((100%-1100px)/2-24px))] lg:block" />
      <div className="relative mx-auto max-w-[1100px] px-5 md:px-8">
        <div ref={ref} className="relative">
          {/* spine: faint guide + laid tegel */}
          <div aria-hidden="true" className="absolute bottom-0 left-[23px] top-0 w-[2px] bg-bone/15 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-[11px] top-0 w-[26px] md:left-1/2 md:-translate-x-1/2"
            style={{ ...tegelStyle('kunci', 'botol', 26), clipPath: reduce ? undefined : clip }}
          />

          <ol className="space-y-14 md:space-y-24">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.num} className="relative pl-16 md:grid md:grid-cols-2 md:items-center md:gap-0 md:pl-0">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center border-[3px] border-ink font-display text-lg text-ink md:left-1/2 md:top-1/2 md:h-16 md:w-16 md:-translate-x-1/2 md:-translate-y-1/2 md:text-xl"
                    style={{ ...tegelStyle(s.pattern, s.palette, 32) }}
                  >
                    <span className="bg-bone px-1.5 leading-tight">{s.num}</span>
                  </span>

                  <motion.div
                    initial={reduce ? false : { opacity: 0, x: left ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease }}
                    className={left ? 'md:col-start-1 md:pr-20 md:text-right' : 'md:col-start-2 md:pl-20'}
                  >
                    <h3 className="mb-2 text-3xl md:text-4xl">{s.title}</h3>
                    <p className="mb-3 font-semibold text-ochre">{s.time}</p>
                    <p className="max-w-[40ch] text-bone/80 md:inline-block">{s.desc}</p>
                  </motion.div>

                  <motion.div
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, delay: 0.15 }}
                    className={`mt-6 aspect-[16/10] overflow-hidden border-[3px] border-ink md:mt-0 md:aspect-[16/9] ${left ? 'md:col-start-2 md:row-start-1 md:ml-20' : 'md:col-start-1 md:row-start-1 md:mr-20'}`}
                  >
                    <Photo slot={s.slot} sizes="(min-width: 768px) 40vw, 90vw" />
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      </div>
    </section>
  );
}
