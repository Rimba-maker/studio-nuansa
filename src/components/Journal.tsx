import { motion } from 'framer-motion';

const articles = [
  { title: "Mengapa Negative Space Penting Dalam Hunian Tropis", date: "Oct 12, 2025", category: "Philosophy", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" },
  { title: "5 Mistake Umum Saat Memilih Furniture Untuk Apartemen Kecil", date: "Sep 28, 2025", category: "Guide", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800" },
  { title: "Studi Material: Mengenal Karakter Kayu Lokal Indonesia", date: "Sep 15, 2025", category: "Material", image: "https://images.unsplash.com/photo-1610505466025-534bc7e828fd?auto=format&fit=crop&q=80&w=800" }
];

export default function Journal() {
  return (
    <section id="journal" className="py-24 md:py-32 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-secondary/50 pb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">From Our Journal</h2>
          <a href="#" className="inline-flex items-center text-sm font-medium hover:text-accent transition-colors pb-1 border-b border-primary hover:border-accent w-max">
            Baca Semua Artikel
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a 
              key={index}
              href="#"
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-secondary/20 border border-secondary/30">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-accent uppercase mb-3">
                <span>{article.category}</span>
                <span className="w-4 h-px bg-secondary/50"></span>
                <span className="text-primary/40">{article.date}</span>
              </div>
              <h3 className="text-2xl font-serif text-primary leading-snug group-hover:text-accent transition-colors duration-300 relative inline-block">
                {article.title}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
