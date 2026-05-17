import { motion } from 'framer-motion';

const editorialReveal = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const wordReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const slowDrift = {
  scale: [1, 1.05],
  transition: { duration: 30, repeat: Infinity, repeatType: "reverse" as const }
};

export default function Hero() {
  const headline = "Ruang Adalah Cerminan Diri. Mari Buat Yang Layak.".split(" ");

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary text-surface mt-[-72px]">
      {/* Background Image with Ken Burns effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={slowDrift}
      >
        <div className="absolute inset-0 bg-primary/50 z-10" /> {/* Overlay for text readability */}
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920" 
          alt="Living room hangat minimalist" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-16">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 max-w-4xl"
          variants={editorialReveal}
          initial="hidden"
          animate="visible"
        >
          {headline.map((word, index) => (
            <motion.span key={index} className="inline-block mr-[0.25em]" variants={wordReveal}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl font-sans text-surface/80 max-w-2xl mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Studio desain interior berbasis di Jakarta. Kami merancang ruang yang tidak hanya indah, tapi terasa seperti rumah — untuk hunian, F&B, dan ruang kerja.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#projects" className="px-8 py-4 bg-accent text-surface text-sm font-medium hover:bg-accent/90 transition-colors">
            Lihat Karya Kami
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-surface/30 text-surface text-sm font-medium hover:bg-surface/10 transition-colors">
            Mulai Proyek
          </a>
        </motion.div>
      </div>

      {/* Statement bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 border-t border-surface/20 bg-primary/20 backdrop-blur-sm py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-center text-xs md:text-sm text-surface/70 tracking-widest uppercase font-medium">
          Berdiri sejak 2019 &nbsp;&bull;&nbsp; 80+ Proyek Selesai &nbsp;&bull;&nbsp; Featured in Casa Indonesia, Dezeen
        </div>
      </motion.div>
    </section>
  );
}
