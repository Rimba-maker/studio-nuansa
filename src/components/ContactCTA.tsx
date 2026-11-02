import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import Photo from './ui/Photo';
import { SITE } from '../data/site';

const ease = [0.16, 1, 0.3, 1] as const;

function Field({ id, label, type = 'text', required, inputMode, className = '' }: {
  id: string; label: string; type?: string; required?: boolean; inputMode?: 'numeric' | 'tel' | 'email' | 'text'; className?: string;
}) {
  return (
    <div className={`field relative ${className}`}>
      <input
        id={id} name={id} type={type} required={required} inputMode={inputMode} placeholder=" "
        className="peer min-h-[56px] w-full border-0 border-b-2 border-ink/35 bg-transparent pb-2 pt-6 text-ink outline-none transition-colors focus:border-oxblood"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-4 origin-left text-ink/65 transition-all duration-300 peer-focus:top-1 peer-focus:scale-75 peer-focus:text-oxblood peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:scale-75"
      >
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
    </div>
  );
}

export default function ContactCTA() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: no backend yet. Wire this to Netlify Forms / Formspree / an API route before launch.
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-botol py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-12 md:gap-[3px] md:px-8">
        <div className="flex flex-col justify-between gap-12 md:col-span-5 md:pr-12">
          <div>
            <h2 id="contact-title" className="text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.02]">Mari Berbicara Tentang Proyekmu</h2>
            <p className="mt-6 max-w-[40ch] text-lg text-bone/80">
              Setiap proyek dimulai dengan percakapan. Ceritakan tentang ruang yang ingin Anda ciptakan, dan tim kami akan merespon dalam 2 hari kerja.
            </p>
          </div>

          <dl className="space-y-6">
            <div>
              <dt className="label-caps mb-1 text-ochre">Email</dt>
              <dd><a href={`mailto:${SITE.email}`} className="font-display text-2xl underline decoration-bone/30 underline-offset-4 transition-colors hover:text-ochre md:text-3xl">{SITE.email}</a></dd>
            </div>
            <div>
              <dt className="label-caps mb-1 text-ochre">WhatsApp</dt>
              <dd className="font-display text-2xl md:text-3xl">{SITE.whatsapp}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col gap-[3px] bg-ink md:col-span-7">
        <div className="hidden aspect-[21/8] overflow-hidden md:block">
          <Photo slot="contact" sizes="58vw" />
        </div>
        <div className="flex-1 bg-bone p-6 text-ink md:p-12">
          <AnimatePresence mode="wait" initial={false}>
            {!sent ? (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2"
              >
                <Field id="name" label="Nama Lengkap" required className="md:col-span-1" />
                <Field id="email" label="Alamat Email" type="email" inputMode="email" required />
                <Field id="whatsapp" label="WhatsApp" type="tel" inputMode="tel" required />

                <div className="relative">
                  <label htmlFor="type" className="absolute left-0 top-1 origin-left scale-75 text-ink/65">Tipe Proyek <span aria-hidden="true">*</span></label>
                  <select id="type" name="type" required defaultValue="" className="min-h-[56px] w-full cursor-pointer appearance-none border-0 border-b-2 border-ink/35 bg-transparent pb-2 pt-6 outline-none focus:border-oxblood">
                    <option value="" disabled>Pilih tipe</option>
                    <option value="residential">Residential</option>
                    <option value="fb">F&amp;B</option>
                    <option value="office">Office</option>
                    <option value="other">Other</option>
                  </select>
                  <svg aria-hidden="true" className="pointer-events-none absolute bottom-4 right-1" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.75" /></svg>
                </div>

                <Field id="location" label="Lokasi Proyek" />
                <Field id="area" label="Luas Area (m²)" inputMode="numeric" />
                <Field id="timeline" label="Target Timeline" />
                <Field id="budget" label="Budget Range" />

                <div className="field relative md:col-span-2">
                  <textarea id="message" name="message" rows={4} placeholder=" " className="peer w-full resize-none border-0 border-b-2 border-ink/35 bg-transparent pb-2 pt-7 outline-none transition-colors focus:border-oxblood" />
                  <label htmlFor="message" className="pointer-events-none absolute left-0 top-4 origin-left text-ink/65 transition-all duration-300 peer-focus:top-1 peer-focus:scale-75 peer-focus:text-oxblood peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:scale-75">
                    Pesan Tambahan (style preference, referensi)
                  </label>
                </div>

                <button type="submit" className="btn btn-botol mt-4 w-full md:col-span-2">Kirim Inquiry</button>
              </motion.form>
            ) : (
              <motion.div
                key="done"
                role="status"
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease }}
                className="flex min-h-[420px] flex-col items-start justify-center gap-5"
              >
                <span className="flex h-16 w-16 items-center justify-center bg-botol text-bone"><Check size={30} strokeWidth={2} aria-hidden="true" /></span>
                <h3 className="text-3xl md:text-4xl">Terima kasih, inquiry Anda kami catat.</h3>
                <p className="max-w-[44ch] text-ink/75">Tim kami akan menghubungi Anda dalam 2 hari kerja lewat WhatsApp atau email.</p>
                <button type="button" onClick={() => setSent(false)} className="btn btn-line">Kirim inquiry lain</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  );
}
