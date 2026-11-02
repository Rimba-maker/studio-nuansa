import { motion, useReducedMotion } from 'framer-motion';
import Photo from './ui/Photo';
import type { SlotId } from '../data/image-slots';

const articles: { title: string; date: string; category: string; slot: SlotId; href?: string }[] = [
  { title: 'Mengapa Negative Space Penting Dalam Hunian Tropis', date: '12 Okt 2025', category: 'Philosophy', slot: 'journal-space' },
  { title: '5 Mistake Umum Saat Memilih Furniture Untuk Apartemen Kecil', date: '28 Sep 2025', category: 'Guide', slot: 'journal-furniture' },
  { title: 'Studi Material: Mengenal Karakter Kayu Lokal Indonesia', date: '15 Sep 2025', category: 'Material', slot: 'journal-wood' },
];

export default function Journal() {
  const reduce = useReducedMotion();
  const [lead, ...rest] = articles;

  const Body = ({ a, large }: { a: (typeof articles)[number]; large?: boolean }) => {
    const inner = (
      <>
        <div className={`overflow-hidden border-[3px] border-ink ${large ? 'aspect-[4/3] md:aspect-auto md:min-h-[360px] md:flex-1' : 'aspect-[4/3]'}`}>
          <Photo slot={a.slot} sizes={large ? '(min-width: 768px) 55vw, 100vw' : '(min-width: 768px) 30vw, 100vw'} className="transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>
        <h3 className={`mt-5 leading-snug [text-decoration:underline_transparent_2px] underline-offset-[6px] transition-[text-decoration-color] duration-300 ${a.href ? 'group-hover:[text-decoration-color:var(--color-ochre)]' : ''} ${large ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
          {a.title}
        </h3>
        <p className="label-caps mt-3 text-bone/65">
          {a.category} <span aria-hidden="true" className="mx-1 text-ochre">/</span> {a.date}
        </p>
      </>
    );
    return a.href ? <a href={a.href} className="group flex h-full flex-col">{inner}</a> : <div className="group flex h-full flex-col">{inner}</div>;
  };

  return (
    <section id="journal" aria-labelledby="journal-title" className="bg-botol py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 id="journal-title" className="mb-12 text-[clamp(2.25rem,5vw,4.25rem)] md:mb-20">From Our Journal</h2>

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <motion.article
            className="flex flex-col md:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <Body a={lead} large />
          </motion.article>
          <div className="flex flex-col gap-10 md:col-span-5 md:gap-12">
            {rest.map((a, i) => (
              <motion.article
                key={a.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1 * (i + 1) }}
              >
                <Body a={a} />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
