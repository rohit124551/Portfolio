import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t-2 border-[var(--color-neon-purple)]">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24 relative"
        >
          <div className="inline-flex items-center justify-center bg-[var(--color-neon-purple)] text-white px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(176,38,255,0.6)]">
            FIELD DEPLOYMENT
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-black text-white tracking-tighter uppercase">
            COMBAT <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-neon-purple)' }}>TRAINING</span>
          </h2>
        </motion.div>

        <div className="relative px-4 md:px-0 max-w-4xl mx-auto">
          {/* Cyber Timeline Line */}
          <div className="absolute left-[15px] md:left-[39px] top-6 bottom-6 w-1 bg-[var(--color-outline)]">
            <div className="absolute top-0 w-full h-1/2 bg-[var(--color-neon-cyan)] animate-pulse shadow-[0_0_10px_var(--color-neon-cyan)]"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-12 md:pl-24 mb-12"
          >
            {/* Glowing Timeline Node */}
            <div className="absolute left-[-2px] md:left-[22px] top-[40px] w-9 h-9 bg-black border-2 border-[var(--color-neon-cyan)] flex items-center justify-center z-10 cyber-clip transform -translate-y-1/2">
              <div className="w-3 h-3 bg-[var(--color-neon-cyan)] shadow-[0_0_10px_var(--color-neon-cyan)]"></div>
            </div>

            {/* Cyber Card */}
            <div className="cyber-clip-reverse bg-[var(--color-surface-container-low)] p-8 md:p-12 border-l-4 border-[var(--color-neon-cyan)] hover:bg-[var(--color-surface-container-high)] transition-all duration-500 group relative">
              
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--color-neon-cyan)] to-transparent opacity-20 group-hover:opacity-50 transition-opacity"></div>

              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 relative z-10 border-b border-[var(--color-outline)] pb-6">
                <div>
                  <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mb-2">
                    RHCSA Summer Training: Mastering Linux System Administration
                  </h3>
                  <p className="text-[var(--color-neon-cyan)] font-mono text-xs font-bold bg-black inline-block px-2 py-1">Red Hat Academy - LPU</p>
                </div>
                <div className="bg-[var(--color-neon-purple)] text-white px-4 py-2 cyber-clip flex items-center justify-center min-w-[120px] shadow-[0_0_10px_rgba(176,38,255,0.4)]">
                  <span className="text-xs font-bold tracking-wider uppercase">June 2025 - July 2025</span>
                </div>
              </div>

              <div className="space-y-4 text-sm font-mono text-[var(--color-on-surface-variant)] mb-8 leading-relaxed relative z-10">
                <p>
                  &gt; Completed 5-week hands-on training on RH124 and RH134, focusing on real-world Linux administration tasks. The training emphasized practical learning through labs and scenario-based exercises.
                </p>
                <p>
                  &gt; Gained in-depth knowledge of Linux system administration, including user and permission management, process handling, package management, and system services. Built a strong understanding of automation concepts and shell scripting fundamentals.
                </p>
                <p>
                  &gt; Developed 5 automation and monitoring shell scripts to perform administrative tasks such as system health checks, log monitoring, and task automation. These scripts demonstrated practical problem-solving and real-time system management skills.
                </p>
                <p>
                  &gt; Built strong foundational understanding of Red Hat Enterprise Linux (RHEL) architecture, configuration, and best practices. Learned to manage RHEL environments efficiently while following enterprise-level standards.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-3 relative z-10 items-center justify-between w-full">
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs font-display font-black uppercase text-black bg-[var(--color-neon-cyan)] hover:bg-white transition-colors cyber-clip px-4 py-1.5 shadow-[0_0_10px_rgba(0,240,255,0.3)]">BASH</span>
                  <span className="text-xs font-display font-black uppercase text-black bg-[var(--color-neon-yellow)] hover:bg-white transition-colors cyber-clip px-4 py-1.5 shadow-[0_0_10px_rgba(252,238,10,0.3)]">RHEL 8+</span>
                  <span className="text-xs font-display font-black uppercase text-black bg-[var(--color-neon-pink)] hover:bg-white transition-colors cyber-clip px-4 py-1.5 shadow-[0_0_10px_rgba(255,0,60,0.3)]">SYSADMIN</span>
                </div>
                
                <a 
                  href="/trainingRHCSA.png" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[10px] font-mono font-bold text-[var(--color-neon-purple)] border border-[var(--color-neon-purple)] px-3 py-1 hover:bg-[var(--color-neon-purple)] hover:text-white transition-all shadow-[0_0_10px_rgba(176,38,255,0.2)] uppercase tracking-tighter"
                >
                  VIEW_CERTIFICATE
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
