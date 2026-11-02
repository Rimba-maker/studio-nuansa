import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Photo from './ui/Photo';
import Tegel from './ui/Tegel';
import { STYLES, type StyleKey } from '../data/projects';
import { emitStyle, onStyle } from '../lib/style-filter';

const ease = [0.16, 1, 0.3, 1] as const;
// 6-column bento: 4+2, 2+4, 3+3
const spans = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4', 'md:col-span-3', 'md:col-span-3'];

export default function StyleCategories() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<StyleKey | null>(null);

  useEffect(() => onStyle(setActive), []);

  const choose = (key: StyleKey) => {
    const next = active === key ? null : key;
    emitStyle(next);
    if (next) document.getElementById('projects')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section aria-labelledby="styles-title" className="bg-botol py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 max-w-[56ch] md:mb-20">
          <h2 id="styles-title" className="text-[clamp(2.25rem,5vw,4.25rem)]">Eksplorasi Style</h2>
          <p className="mt-5 text-lg text-bone/80">Setiap proyek unik, tapi ini beberapa direction yang sering kami eksplorasi. Pilih satu untuk melihat proyeknya.</p>
        </div>

        <ul className="grout grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
          {STYLES.map((s, i) => (
            <motion.li
              key={s.key}
              className={`${spans[i]} min-h-[320px] md:min-h-[400px]`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease, delay: (i % 3) * 0.08 }}
            >
              <button
                type="button"
                onClick={() => choose(s.key)}
                aria-pressed={active === s.key}
                className="group relative flex h-full min-h-[inherit] w-full flex-col justify-end overflow-hidden bg-botol-deep text-left"
              >
                <Photo slot={s.slot} sizes="(min-width: 768px) 50vw, 100vw" className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100 group-aria-pressed:opacity-100" />
                <Tegel pattern={s.pattern} palette={s.palette} size={88} className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0 group-focus-visible:opacity-0 group-aria-pressed:opacity-0" />
                <span className="relative bg-bone px-6 py-5 text-ink">
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-display text-2xl leading-tight">{s.title}</span>
                    <span className="label-caps shrink-0 text-oxblood">{active === s.key ? 'Aktif' : 'Lihat'}</span>
                  </span>
                  <span className="mt-2 block text-sm text-ink/75">{s.desc}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
