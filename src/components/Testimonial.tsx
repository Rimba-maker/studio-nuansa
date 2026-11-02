import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Photo from './ui/Photo';
import type { SlotId } from '../data/image-slots';

const ease = [0.16, 1, 0.3, 1] as const;

const testimonials: { quote: string; author: string; role: string; slot: SlotId }[] = [
  {
    quote: 'Studio Nuansa tidak hanya mendesain rumah saya. Mereka menanyakan bagaimana saya minum kopi pagi, di mana suami saya suka membaca, dan apakah anak-anak akan tetap di sini saat dewasa. Hasilnya: rumah yang terasa seperti memang untuk kami.',
    author: 'Bu Sari & Pak Aldo', role: 'Quiet House owner', slot: 'testimonial-home',
  },
  {
    quote: 'Sebagai owner cafe, saya butuh interior yang Instagrammable tapi tetap fungsional untuk barista. Studio Nuansa balance keduanya dengan elegan tanpa terlihat memaksakan tren.',
    author: 'Anto', role: 'Mata Kayu Coffee founder', slot: 'testimonial-cafe',
  },
];

export default function Testimonial() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 8000);
    return () => clearInterval(t);
  }, [reduce, paused]);

  const t = testimonials[current];

  return (
    <section
      aria-labelledby="testimonial-title"
      className="relative overflow-hidden bg-oxblood py-24 text-bone md:py-36"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 id="testimonial-title" className="mb-12 text-[clamp(2.25rem,5vw,4.25rem)] md:mb-16">Kata Klien Kami</h2>

        <div className="grid items-stretch gap-[3px] bg-ink md:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden md:col-span-5 md:aspect-auto md:min-h-[560px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              >
                <Photo slot={t.slot} sizes="(min-width: 768px) 40vw, 100vw" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex flex-col justify-between bg-botol-deep p-8 md:col-span-7 md:p-14">
            <svg aria-hidden="true" viewBox="0 0 100 80" className="pointer-events-none absolute right-8 top-8 h-40 w-auto text-bone/[0.06]" fill="currentColor"><path d="M0 80V48C0 20 14 4 40 0l4 12C30 16 24 24 24 36h20v44H0zm56 0V48C56 20 70 4 96 0l4 12c-14 4-20 12-20 24h20v44H56z"/></svg>
            <div className="relative min-h-[260px]" aria-live={paused ? 'polite' : 'off'}>
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease }}
                >
                  <blockquote className="font-display text-2xl leading-snug md:text-3xl">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-8">
                    <span className="block text-lg font-semibold">{t.author}</span>
                    <span className="text-sm text-bone/70">{t.role}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="relative mt-10 flex items-center gap-3" role="group" aria-label="Pilih testimoni">
              {testimonials.map((x, i) => (
                <button
                  key={x.author}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimoni dari ${x.author}`}
                  aria-current={current === i}
                  className="flex h-11 items-center"
                >
                  <span className={`block h-2 transition-all duration-500 ${current === i ? 'w-10 bg-ochre' : 'w-4 bg-bone/35 hover:bg-bone/70'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
