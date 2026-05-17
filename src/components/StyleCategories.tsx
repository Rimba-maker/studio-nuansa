import { motion } from 'framer-motion';

const styles = [
  { title: "Modern Tropical", desc: "Indonesia tropis, kayu, hijau, light", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=800" },
  { title: "Japandi", desc: "Perpaduan Jepang & Skandinavia, tenang & functional", image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800" },
  { title: "Warm Industrial", desc: "Konkret, kayu, brass, hangat", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" },
  { title: "Minimalist Luxe", desc: "Less is more, material premium, restrained", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800" },
  { title: "Eclectic Curated", desc: "Vintage + modern, layered, personal", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" },
  { title: "Tropical Heritage", desc: "Modern interpretation rumah tradisional Indonesia", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function StyleCategories() {
  return (
    <section className="py-24 md:py-32 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 max-w-2xl text-left">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Eksplorasi Style</h2>
          <p className="text-primary/70 font-sans text-lg border-l-2 border-accent pl-4">Setiap proyek unik, tapi ini beberapa direction yang sering kami eksplorasi.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {styles.map((style, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative h-[450px] overflow-hidden cursor-pointer bg-primary"
            >
              <img 
                src={style.image} 
                alt={style.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-serif text-surface mb-2 border-b border-surface/20 pb-4 inline-block w-max group-hover:border-accent transition-colors duration-500">{style.title}</h3>
                <p className="text-surface/70 font-sans text-sm mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {style.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
