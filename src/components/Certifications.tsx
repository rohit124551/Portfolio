import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Red Hat System Administration II (RH134 - RHA)',
      issuer: 'Red Hat — Certificate Link',
      date: 'September 2025',
      type: 'VERIFIED',
      color: 'var(--color-neon-pink)',
      img: '/cert-rh134.jpg'
    },
    {
      title: 'Red Hat System Administration I (RH124 - RHA)',
      issuer: 'Google — Certificate Link',
      date: 'September 2025',
      type: 'VERIFIED',
      color: 'var(--color-neon-cyan)',
      img: '/cert-rh124.jpg'
    },
    {
      title: 'CyberSec Symposium 2.0 (Conference Participation)',
      issuer: 'LPU School of Computer Science Engineering',
      date: 'April 2024',
      type: 'VERIFIED',
      color: 'var(--color-neon-cyan)',
      img: '/cert-cybersec-2.0.jpg'
    },
    {
      title: 'Republic of Cyber Sentinels CTF (RCSCTF24)',
      issuer: 'LPU School of Computer Science Engineering',
      date: 'March 2024',
      type: 'VERIFIED',
      color: 'var(--color-neon-pink)',
      img: '/cert-rcsetf24.jpg'
    },
    {
      title: 'Cyber Sec Symposium: 12-Hour CTF Challenge',
      issuer: 'LPU School of Computer Science Engineering',
      date: 'September 2023',
      type: 'VERIFIED',
      color: 'var(--color-neon-yellow)',
      img: '/cert-ctf-12h.jpg'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t border-dashed border-[var(--color-neon-cyan)]">
      
      {/* Huge subtle text */}
      <h2 className="absolute top-[20%] left-[-2%] text-[20vw] font-display font-black text-transparent opacity-20 pointer-events-none tracking-tighter" style={{ WebkitTextStroke: '2px var(--color-surface-container-highest)' }}>
        CREDENTIALS
      </h2>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-right mb-16 md:mb-24 flex flex-col items-end"
        >
          <div className="inline-block bg-[var(--color-neon-yellow)] text-black px-4 py-1 cyber-clip-reverse font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(252,238,10,0.6)] animate-pulse">
            VERIFIED CLEARANCES
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            SECURE <span className="text-[var(--color-neon-yellow)]">PROOFS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="relative group h-full flex flex-col"
            >
              <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-[var(--color-outline)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="cyber-clip bg-[var(--color-surface-container-low)] border border-[var(--color-outline)] p-8 hover:bg-[var(--color-surface-container-high)] hover:border-[var(--color-neon-yellow)] transition-all duration-300 flex-1 flex flex-col relative overflow-hidden">
                
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl"></div>

                <div className="w-full h-40 bg-black/60 border border-dashed border-[var(--color-outline)] mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-white transition-colors">
                   <img src={cert.img} alt={cert.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-screen" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/111/333?text=CERTIFICATE+DATA+PENDING' }} />
                </div>

                <div className="w-12 h-12 flex items-center justify-center mb-6 bg-black border" style={{ borderColor: cert.color }}>
                  <Award className="w-6 h-6" style={{ color: cert.color }} />
                </div>
                
                <h3 className="text-2xl font-display font-black text-white mb-2 uppercase tracking-wide">
                  {cert.title}
                </h3>
                <p className="font-mono text-[var(--color-on-surface-variant)] text-sm mb-6 pb-6 border-b border-dashed border-[var(--color-outline)]">
                  {cert.issuer}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#00ff41] font-bold px-2 py-1 bg-black border border-[#00ff41]/50">
                    {cert.date}
                  </span>
                  <span className="text-xs font-bold text-[var(--color-neon-yellow)] truncate max-w-[120px]" style={{ color: cert.color }}>
                    {cert.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
