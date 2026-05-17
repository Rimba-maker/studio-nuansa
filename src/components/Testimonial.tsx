import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Studio Nuansa tidak hanya mendesain rumah saya. Mereka menanyakan bagaimana saya minum kopi pagi, di mana suami saya suka membaca, dan apakah anak-anak akan tetap di sini saat dewasa. Hasilnya: rumah yang terasa seperti memang untuk kami.",
    author: "Bu Sari & Pak Aldo",
    role: "Quiet House owner",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200"
  },
  {
    quote: "Sebagai owner cafe, saya butuh interior yang Instagrammable tapi tetap fungsional untuk barista. Studio Nuansa balance keduanya dengan elegan tanpa terlihat memaksakan tren.",
    author: "Anto",
    role: "Mata Kayu Coffee founder",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-primary text-surface relative overflow-hidden flex items-center min-h-[70vh]">
      {/* Abstract Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] text-surface/[0.03] font-serif leading-none select-none pointer-events-none">
        &rdquo;
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative aspect-square md:aspect-[4/5] overflow-hidden border border-surface/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={testimonials[current].image}
              alt="Testimonial background"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
        </div>

        <div className="md:col-span-7 md:pl-12">
          <h2 className="text-xs font-semibold tracking-widest text-accent uppercase mb-8 block">Kata Klien Kami</h2>
          
          <div className="min-h-[250px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-2xl md:text-4xl font-serif leading-snug mb-10 text-surface/90">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="text-lg font-serif">{testimonials[current].author}</p>
                  <p className="text-surface/50 font-sans text-sm mt-1">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-accent w-8' : 'bg-surface/30 hover:bg-surface/60'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
