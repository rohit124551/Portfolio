import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`min-h-screen bg-[var(--color-surface)] text-[var(--color-on-surface-variant)] selection:bg-[var(--color-primary-container)] selection:text-[var(--color-on-primary)] relative ${loading ? 'overflow-hidden h-screen' : ''}`}>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {/* Background radial overlays are handled in index.css */}

      {/* Cyber Header */}
      <div className="fixed top-0 left-0 right-0 p-4 md:p-6 z-50 pointer-events-none">
        <header className="cyber-clip bg-black/60 backdrop-blur-md border border-[var(--color-neon-cyan)]/30 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center pointer-events-auto transition-all duration-500 hover:border-[var(--color-neon-cyan)] hover:bg-black/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 cyber-clip-reverse bg-[var(--color-neon-pink)] flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(255,0,60,0.6)]">
              <div className="w-3 h-3 bg-black cyber-clip"></div>
            </div>
            <span
              className="font-display font-black text-lg md:text-xl tracking-widest cursor-pointer text-white hover:text-[var(--color-neon-cyan)] hover:text-glow-cyan transition-colors uppercase"
              onClick={() => window.scrollTo(0, 0)}
            >
              ROHIT<span className="text-[var(--color-neon-pink)]">_RANJAN</span>
            </span>
          </div>
          
          <nav className="gap-8 hidden md:flex font-mono text-xs tracking-widest uppercase font-bold">
            <a href="#about" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-neon-yellow)] hover:text-glow-yellow transition-all">About</a>
            <a href="#skills" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-neon-cyan)] hover:text-glow-cyan transition-all">Combat</a>
            <a href="#projects" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-neon-pink)] hover:text-glow-pink transition-all">Deployed</a>
            <a href="#experience" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-neon-purple)] transition-all">Training</a>
            <a href="#activities" className="text-[var(--color-on-surface-variant)] hover:text-white transition-all">Ops</a>
            <a href="#contact" className="text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all px-3 py-1 cyber-clip border border-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.4)]">Comms</a>
          </nav>

          {/* System Status Indicator */}
          <div className="hidden sm:block bg-[#00ff41]/10 border border-[#00ff41] px-3 py-1 rounded-sm text-[10px] animate-pulse font-mono tracking-widest text-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.2)]">
            SYSTEM_STATUS: ONLINE
          </div>

        </header>
      </div>

      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Activities />
        <Contact />
      </main>
    </div>
  );
}

export default App;
