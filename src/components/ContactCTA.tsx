import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-canvas border-t border-secondary/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">Mari Berbicara Tentang Proyekmu</h2>
          <p className="text-primary/70 font-sans text-lg mb-12 max-w-md">
            Setiap proyek dimulai dengan percakapan. Ceritakan tentang ruang yang ingin Anda ciptakan, dan tim kami akan merespon dalam 2 hari kerja.
          </p>
          
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-1">Email</span>
              <a href="mailto:hello@studionuansa.com" className="text-xl font-serif hover:text-accent transition-colors">hello@studionuansa.com</a>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase block mb-1">WhatsApp</span>
              <a href="#" className="text-xl font-serif hover:text-accent transition-colors">+62 811 2345 6789</a>
            </div>
          </div>
        </div>

        <div className="bg-surface p-8 md:p-12 border border-secondary/30 shadow-sm">
          {!submitted ? (
            <motion.form 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" id="name" required className="w-full bg-transparent border-b border-secondary/50 py-3 min-h-[44px] focus:outline-none focus:border-accent text-primary transition-colors peer placeholder-transparent" placeholder="Nama" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-primary/50 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Nama Lengkap</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" required className="w-full bg-transparent border-b border-secondary/50 py-3 min-h-[44px] focus:outline-none focus:border-accent text-primary transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-primary/50 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Alamat Email</label>
                </div>
              </div>

              <div className="relative group">
                <select id="type" required defaultValue="" className="w-full bg-transparent border-b border-secondary/50 py-3 min-h-[44px] focus:outline-none focus:border-accent text-primary transition-colors appearance-none cursor-pointer">
                  <option value="" disabled hidden>Tipe Proyek</option>
                  <option value="residential">Residential</option>
                  <option value="fb">F&B</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-primary/50">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" id="area" className="w-full bg-transparent border-b border-secondary/50 py-3 min-h-[44px] focus:outline-none focus:border-accent text-primary transition-colors peer placeholder-transparent" placeholder="Luas Area" />
                  <label htmlFor="area" className="absolute left-0 top-3 text-primary/50 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Luas Area (m²)</label>
                </div>
                <div className="relative group">
                  <input type="text" id="budget" className="w-full bg-transparent border-b border-secondary/50 py-3 min-h-[44px] focus:outline-none focus:border-accent text-primary transition-colors peer placeholder-transparent" placeholder="Budget" />
                  <label htmlFor="budget" className="absolute left-0 top-3 text-primary/50 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Budget Range</label>
                </div>
              </div>

              <div className="relative group">
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-secondary/50 py-3 min-h-[44px] focus:outline-none focus:border-accent text-primary transition-colors peer placeholder-transparent resize-none" placeholder="Pesan" />
                <label htmlFor="message" className="absolute left-0 top-3 text-primary/50 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Pesan Tambahan (Style, Referensi)</label>
              </div>

              <button type="submit" className="w-full bg-primary text-surface py-4 min-h-[44px] text-sm font-medium hover:bg-primary/90 transition-colors mt-4">
                Kirim Inquiry
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-2xl font-serif text-primary">Pesan Terkirim</h3>
              <p className="text-primary/70 font-sans text-sm">Terima kasih. Tim kami akan segera menghubungi Anda.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
