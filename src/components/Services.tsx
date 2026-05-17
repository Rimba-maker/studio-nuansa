import { motion } from 'framer-motion';

const services = [
  {
    icon: "📐",
    title: "Full Interior Design",
    price: "Mulai dari Rp 1.5 juta / m²",
    desc: "End-to-end service dari concept sampai handover.",
    features: [
      "Konsep & moodboard",
      "3D rendering & technical drawing",
      "Material & furniture sourcing",
      "Project management & site supervision",
      "Styling & photo handover"
    ]
  },
  {
    icon: "💡",
    title: "Design Consultation",
    price: "Rp 5 juta - 15 juta / sesi",
    desc: "Untuk yang sudah punya tim eksekusi, butuh design direction.",
    features: [
      "Site visit + briefing",
      "Concept board & layout",
      "Material & color guidance",
      "Sourcing list rekomendasi"
    ]
  },
  {
    icon: "🖥️",
    title: "E-Design (Online)",
    price: "Rp 8 juta - 25 juta / ruangan",
    desc: "Untuk klien luar kota, scope spesifik (kamar, ruang tamu).",
    features: [
      "Konsultasi online 3x",
      "3D render & sourcing list",
      "Implementation guide"
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:items-center text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">What We Do</h2>
          <div className="w-12 h-px bg-accent mx-auto"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group bg-surface p-10 border border-secondary hover:border-accent transition-colors duration-500"
            >
              <div className="text-4xl mb-6 opacity-80">{service.icon}</div>
              <h3 className="text-2xl font-serif text-primary mb-2">{service.title}</h3>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-6">{service.price}</p>
              <p className="text-primary/70 font-sans text-sm mb-8 line-clamp-2">
                {service.desc}
              </p>
              
              <ul className="space-y-3 pt-6 border-t border-secondary/50">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-primary/80 font-sans">
                    <span className="text-accent mr-3 mt-0.5">&bull;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
