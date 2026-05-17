import { motion } from 'framer-motion';

const team = [
  { name: "Wendy Setiawan, M.Arch", role: "Founder & Principal Designer", bio: "Pendekatan personal pada setiap karya, spesialisasi pada proporsi dan cahaya alami.", projects: "Quiet House, Rumah Sembilu", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600" },
  { name: "Lia Hartono", role: "Senior Interior Designer", bio: "Hospitality lead. Mengedepankan pengalaman visual bagi ruang komersial.", projects: "Mata Kayu Coffee, Lampu Kuning Bistro", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
  { name: "Reza Pradana", role: "Senior Designer", bio: "Residential lead. Ahli dalam detail kayu & craftmanship lokal.", projects: "Tepi Senja Villa", image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=600" },
  { name: "Naya Putri", role: "Material Specialist & Stylist", bio: "Eksplorasi material lokal & tekstur organik untuk memberikan jiwa pada ruang.", projects: "Semua Proyek", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TheTeam() {
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Tim Kami</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-secondary/20">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Bio slide-up overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-surface font-sans text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{member.bio}</p>
                  <div className="w-8 h-px bg-accent my-4"></div>
                  <p className="text-surface/60 font-sans text-xs uppercase tracking-wider">Led: {member.projects}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-serif text-primary group-hover:text-accent transition-colors duration-300">{member.name}</h3>
              <p className="text-primary/60 font-sans text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
