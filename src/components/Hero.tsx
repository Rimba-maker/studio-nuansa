import { motion, useReducedMotion } from 'framer-motion';
import Photo from './ui/Photo';
import Tegel from './ui/Tegel';
import { SITE } from '../data/site';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const words = 'Ruang Adalah Cerminan Diri. Mari Buat Yang Layak.'.split(' ');

  const container = { hidden: {}, visible: { transition: { staggerChildren: reduce ? 0 : 0.12 } } };
  const word = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: reduce ? 0 : 1, ease } },
  };
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section aria-labelledby="hero-title" className="bg-ink">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[3px] md:min-h-[calc(100svh-64px)] md:grid-cols-12 md:grid-rows-[1fr_auto]">
        {/* Sisi kanan: lantai ubin. Satu foto ruangan, satu ubin pola, satu foto lagi. */}
        <div className="order-2 grid gap-[3px] bg-ink md:order-none md:col-span-4 md:col-start-9 md:row-span-2 md:row-start-1 md:grid-rows-[1fr_auto]">
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-auto">
            <motion.div
              className="absolute inset-0"
              animate={reduce ? undefined : { scale: [1, 1.05] }}
              transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
            >
              <Photo slot="hero" eager sizes="(min-width: 768px) 34vw, 100vw" />
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-[3px]">
            <Tegel pattern="kunci" palette="oxblood" size={96} className="aspect-square" />
            <div className="aspect-square overflow-hidden">
              <Photo slot="hero-alt" eager sizes="(min-width: 768px) 17vw, 50vw" />
            </div>
          </div>
        </div>

        {/* Panel baca */}
        <div className="order-1 flex flex-col justify-between gap-10 bg-bone px-6 py-10 md:order-none md:gap-12 text-ink md:col-span-8 md:col-start-1 md:row-start-1 md:px-12 md:py-16 lg:px-16">
          <motion.h1
            id="hero-title"
            className="max-w-[16ch] text-[clamp(2.75rem,7.2vw,6rem)] leading-[1.02] tracking-[-0.03em]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((w, i) => (
              <motion.span key={i} className="mr-[0.22em] inline-block" variants={word}>{w}</motion.span>
            ))}
          </motion.h1>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.p {...rise(1)} className="max-w-[46ch] text-lg leading-relaxed text-ink/80 md:text-xl">
              Studio desain interior berbasis di Jakarta. Kami merancang ruang yang tidak hanya indah, tapi terasa seperti rumah — untuk hunian, F&amp;B, dan ruang kerja.
            </motion.p>
            <motion.div {...rise(1.2)} className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn btn-botol">Lihat Karya Kami</a>
              <a href="#contact" className="btn btn-line">Mulai Proyek</a>
            </motion.div>
          </div>
        </div>

        {/* Grout strip: pernyataan studio */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="order-3 bg-botol-deep px-6 py-4 md:order-none md:col-span-8 md:col-start-1 md:row-start-2 md:px-12 lg:px-16"
        >
          <p className="label-caps text-bone/80">
            Berdiri sejak {SITE.founded} <span aria-hidden="true" className="mx-2 text-ochre">&bull;</span> 80+ Proyek Selesai{' '}
            <span aria-hidden="true" className="mx-2 text-ochre">&bull;</span> Featured in {SITE.press.slice(0, 2).join(', ')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
