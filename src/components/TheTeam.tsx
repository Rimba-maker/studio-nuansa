import { motion, useReducedMotion } from 'framer-motion';
import Photo from './ui/Photo';
import Tegel from './ui/Tegel';
import type { SlotId } from '../data/image-slots';

const ease = [0.16, 1, 0.3, 1] as const;

const team: { name: string; role: string; bio: string; projects: string; slot: SlotId }[] = [
  { name: 'Wendy Setiawan, M.Arch', role: 'Founder & Principal Designer', bio: 'Pendekatan personal pada setiap karya, spesialisasi pada proporsi dan cahaya alami.', projects: 'Quiet House, Rumah Sembilu', slot: 'team-wendy' },
  { name: 'Lia Hartono', role: 'Senior Interior Designer', bio: 'Hospitality lead. Mengedepankan pengalaman visual bagi ruang komersial.', projects: 'Mata Kayu Coffee, Lampu Kuning Bistro', slot: 'team-lia' },
  { name: 'Reza Pradana', role: 'Senior Designer', bio: 'Residential lead. Ahli dalam detail kayu & craftmanship lokal.', projects: 'Tepi Senja Villa', slot: 'team-reza' },
  { name: 'Naya Putri', role: 'Material Specialist & Stylist', bio: 'Eksplorasi material lokal & tekstur organik untuk memberikan jiwa pada ruang.', projects: 'Semua Proyek', slot: 'team-naya' },
];

export default function TheTeam() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="team-title" className="bg-bone pb-24 text-ink md:pb-36">
      <Tegel pattern="kunci" palette="bone" size={72} className="mb-24 h-[72px] border-b-[3px] border-ink md:mb-36" />
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 id="team-title" className="mb-12 text-[clamp(2.25rem,5vw,4.25rem)] md:mb-20">Tim Kami</h2>

        <ul className="grid grid-cols-1 gap-x-[3px] gap-y-12 sm:grid-cols-2 md:grid-cols-4">
          {team.map((m, i) => (
            <motion.li
              key={m.name}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className={`group ${i % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <article tabIndex={0} className="outline-offset-4 md:pr-3">
                <div className="relative aspect-[3/4] overflow-hidden border-[3px] border-ink bg-bone-dim">
                  <Photo slot={m.slot} sizes="(min-width: 768px) 24vw, 80vw" className="grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-focus-within:grayscale-0" />
                  <div className="absolute inset-0 hidden flex-col justify-end bg-botol-deep/90 p-6 text-bone opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 md:flex">
                    <p className="translate-y-3 text-sm leading-relaxed transition-transform duration-500 group-hover:translate-y-0 group-focus-within:translate-y-0">{m.bio}</p>
                    <p className="label-caps mt-4 border-t border-bone/25 pt-4 text-ochre">Memimpin: {m.projects}</p>
                  </div>
                </div>
                <h3 className="mt-5 text-xl transition-colors group-hover:text-oxblood">{m.name}</h3>
                <p className="mt-1 text-sm text-ink/70">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80 md:hidden">{m.bio}</p>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
