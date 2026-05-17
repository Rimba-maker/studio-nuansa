import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: "01", title: "Discovery", time: "Minggu 1-2", desc: "Site visit, briefing, brand & lifestyle audit" },
  { num: "02", title: "Concept", time: "Minggu 3-5", desc: "Moodboard, spatial planning, style direction" },
  { num: "03", title: "Design Development", time: "Minggu 6-10", desc: "3D rendering, technical drawing, material selection" },
  { num: "04", title: "Sourcing", time: "Minggu 8-14", desc: "Furniture, lighting, fabric, art selection" },
  { num: "05", title: "Execution", time: "Minggu 12-24", desc: "Site supervision, quality control, milestone reporting" },
  { num: "06", title: "Handover", time: "Minggu 24-26", desc: "Styling, snagging, photo documentation" }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="process" className="py-24 md:py-32 bg-primary text-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Bagaimana Kami Bekerja</h2>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Vertical line for desktop */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-surface/10 transform md:-translate-x-1/2" />
          
          {/* Animated line */}
          <motion.div 
            className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-accent transform md:-translate-x-1/2 origin-top"
            style={{ scaleY: pathLength }}
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center min-h-[80px]">
                  
                  {/* Center Node */}
                  <div className={`absolute left-0 md:left-1/2 top-0 md:top-1/2 flex items-center justify-center w-20 h-20 bg-primary border border-surface/20 rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 text-surface/50 font-serif`}>
                    {step.num}
                  </div>

                  {/* Content */}
                  <div className={`w-full pl-28 md:w-1/2 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:ml-auto md:pl-24'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-2 md:pt-0"
                    >
                      <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 block">{step.time}</span>
                      <h3 className="text-2xl font-serif mb-3">{step.title}</h3>
                      <p className="text-surface/70 font-sans text-sm md:text-base leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
