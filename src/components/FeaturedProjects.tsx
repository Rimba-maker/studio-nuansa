import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Photo from './ui/Photo';
import { PROJECTS, STYLES, type StyleKey } from '../data/projects';
import { emitStyle, onStyle } from '../lib/style-filter';

const ease = [0.16, 1, 0.3, 1] as const;

export default function FeaturedProjects() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<StyleKey | null>(null);

  useEffect(() => onStyle(setActive), []);

  const visible = active ? PROJECTS.filter((p) => p.styleKey === active) : PROJECTS;
  const activeStyle = STYLES.find((s) => s.key === active);

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-bone py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 id="projects-title" className="text-[clamp(2.25rem,5vw,4.25rem)]">Selected Projects</h2>
          <p className="mt-4 max-w-[44ch] text-lg text-ink/75">Sebagian kecil dari karya kami sejak 2019.</p>
        </div>

        <div className="mb-4 flex min-h-[48px] items-center gap-4" aria-live="polite">
          {activeStyle ? (
            <>
              <p className="text-sm">
                Menampilkan gaya <strong className="font-semibold">{activeStyle.title}</strong> · {visible.length} proyek
              </p>
              <button
                type="button"
                onClick={() => emitStyle(null)}
                className="btn btn-line !min-h-[40px] !px-4 !py-2 !text-sm"
              >
                Tampilkan semua
              </button>
            </>
          ) : (
            <p className="text-sm text-ink/60">Pilih gaya di bagian Eksplorasi Style untuk menyaring proyek.</p>
          )}
        </div>

        <motion.ul layout className="grout grid grid-cols-1 gap-[3px] md:auto-rows-[300px] md:grid-flow-dense md:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li
                key={p.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease }}
                className={`group relative overflow-hidden bg-bone-dim ${p.span}`}
              >
                <article tabIndex={0} aria-label={`${p.title}, ${p.category}, ${p.location}`} className="relative flex h-full min-h-[300px] flex-col md:min-h-0">
                  <div className="relative flex-1 overflow-hidden">
                    <Photo slot={p.slot} sizes="(min-width: 768px) 40vw, 100vw" className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105" />
                  </div>
                  {/* Keterangan: selalu terbaca di layar sentuh, naik penuh saat hover/fokus */}
                  <div className="bg-bone px-5 py-4 transition-transform duration-500 ease-out md:absolute md:inset-x-0 md:bottom-0 md:translate-y-[calc(100%-3rem)] md:group-hover:translate-y-0 md:group-focus-within:translate-y-0">
                    <h3 className="text-xl leading-tight">{p.title}</h3>
                    <p className="label-caps mt-3 text-oxblood">{p.category}</p>
                    <p className="mt-1 text-sm text-ink/70">{p.location} — {p.style}, {p.area}</p>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {visible.length === 0 && (
          <div className="bg-botol px-8 py-14 text-bone">
            <p className="font-display text-2xl">Belum ada proyek bergaya {activeStyle?.title} di portofolio ini.</p>
            <p className="mt-3 max-w-[50ch] text-bone/80">Ceritakan idenya, kami senang memulai gaya ini bersama Anda.</p>
            <a href="#contact" className="btn btn-ochre mt-6">Mulai Proyek</a>
          </div>
        )}
      </div>
    </section>
  );
}
