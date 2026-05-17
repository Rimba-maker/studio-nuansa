import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: "The Quiet House", category: "Residential", location: "Jakarta Selatan", style: "Modern Tropical", area: "320 m²", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Mata Kayu Coffee", category: "Hospitality", location: "Bandung", style: "Warm Industrial", area: "180 m²", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Atelier 04", category: "Office", location: "SCBD Jakarta", style: "Minimalist Workspace", area: "240 m²", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Rumah Sembilu", category: "Residential", location: "BSD", style: "Japandi", area: "280 m²", image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=1200", span: "md:col-span-2 md:row-span-1" },
  { id: 5, title: "Tepi Senja Villa", category: "Residential", location: "Bali", style: "Tropical Modern", area: "450 m²", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200", span: "md:col-span-2 md:row-span-2" },
  { id: 6, title: "Lampu Kuning Bistro", category: "Hospitality", location: "Jakarta Pusat", style: "Eclectic", area: "120 m²", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
  { id: 7, title: "Apartemen Senopati", category: "Residential", location: "Jakarta Selatan", style: "Minimalist Luxe", area: "95 m²", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1" },
  { id: 8, title: "Studio Cikini", category: "Co-working", location: "Jakarta", style: "Industrial Warm", area: "200 m²", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200", span: "md:col-span-2 md:row-span-1" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-secondary/50 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-primary">Selected Projects</h2>
            <p className="text-primary/70 font-sans text-lg">Sebagian kecil dari karya kami sejak 2019.</p>
          </div>
          <a href="#" className="inline-flex items-center text-sm font-medium hover:text-accent transition-colors pb-1 border-b border-primary hover:border-accent w-max">
            Lihat Semua Proyek
          </a>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.a 
              key={project.id}
              href="#"
              className={`group relative overflow-hidden bg-canvas block ${project.span}`}
              variants={itemVariants}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 origin-center"
              />
              <div className="absolute inset-0 bg-primary/20 transition-opacity duration-500 group-hover:bg-primary/40" />
              
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex flex-col justify-end h-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <div className="bg-canvas/95 backdrop-blur-md p-6 border border-secondary/30 shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-primary">{project.title}</h3>
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent hidden sm:inline-block">{project.category}</span>
                  </div>
                  <p className="text-primary/60 text-sm font-sans">
                    {project.location} &mdash; {project.style}, {project.area}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
