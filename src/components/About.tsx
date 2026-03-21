import { motion } from 'framer-motion';
import { MapPin, Cpu, Terminal, Github, Linkedin, Mail, Download, FileText, FileBadge } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black border-t-2 border-[var(--color-neon-pink)]">
      
      {/* Intense Binary Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-screen" style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      
      {/* Decorative Matrix rain overlay */}
      <div className="absolute inset-0 top-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9Im5vbmUiLz48cmVjdCB5PSIzIiB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDAsIDI1NSwgNjUsIDAuMDUpIi8+PC9zdmc+')] pointer-events-none mix-blend-screen opacity-100 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Hacker Status Header */}
        <div className="mb-12 text-center">
           <h2 className="text-4xl md:text-6xl font-mono font-black tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
             SYSTEM.IDENTITY
           </h2>
        </div>

        {/* Matrix Terminal Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col lg:flex-row border border-[#00ff41] bg-black/80 rounded-sm shadow-[0_0_30px_rgba(0,255,65,0.15)] overflow-hidden"
        >
          
          {/* Left Panel: Profile Node */}
          <div className="lg:w-1/3 flex flex-col items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#00ff41]/50 relative">
             {/* Subtle internal glow */}
             <div className="absolute inset-0 bg-[#00ff41]/5 blur-3xl rounded-full"></div>

             {/* Hexagon Profile Pic */}
             <div className="relative w-48 h-48 mb-8">
               <div className="absolute inset-0 bg-[#00ff41] blur-md opacity-20 animate-pulse"></div>
               <div className="absolute inset-0 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                  <img src="/cyber-avatar.png" alt="Rohit - Cyber Avatar" className="w-full h-full object-cover" />
               </div>
               
               {/* Hexagon Outline */}
               <div className="absolute inset-0 border-2 border-[#00ff41] pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'inset 0 0 20px #00ff41'}}></div>
             </div>

             {/* Online Status */}
             <div className="flex items-center gap-2 mb-8 bg-[#002200] px-4 py-1 border border-[#00ff41]/30 rounded-full">
               <span className="w-2.5 h-2.5 bg-[#00ff41] rounded-full animate-ping shadow-[0_0_10px_#00ff41]"></span>
               <span className="text-[#00ff41] font-mono text-xs font-bold tracking-widest">ONLINE</span>
             </div>

             {/* Text Details */}
             <h3 className="text-3xl font-mono font-bold text-white mb-6 text-center">CyberSec Student</h3>
             
             <div className="flex flex-col gap-4 text-left w-full max-w-[280px]">
               <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm">
                 <MapPin className="w-5 h-5 shrink-0" />
                 <span>Ahmedabad, Gujarat, India</span>
               </div>
               <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm">
                 <Cpu className="w-5 h-5 shrink-0" />
                 <span>Network Defense & Auto</span>
               </div>
               <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm mt-2">
                 <Terminal className="w-5 h-5 shrink-0" />
                 <span>&gt;_ Shell: ZSH // BASH</span>
               </div>
             </div>

             {/* Social Links Matrix Style */}
             <div className="flex gap-4 mt-8 mb-10 w-full justify-center">
                {[
                  { icon: <Github className="w-5 h-5"/>, link: 'https://github.com/rohit124551' },
                  { icon: <Linkedin className="w-5 h-5"/>, link: 'https://linkedin.com/in/rohitkumarranjan/' },
                  { icon: <Mail className="w-5 h-5"/>, link: 'mailto:rohit124551@gmail.com' }
                ].map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors rounded-sm shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                    {s.icon}
                  </a>
                ))}
             </div>

             {/* Download Resume Button Matrix Style */}
             <a href="/RohitCV.pdf" download className="w-full flex items-center justify-center gap-3 py-4 border border-[#00ff41] text-[#00ff41] font-mono tracking-widest text-sm hover:bg-[#00ff41] hover:text-black transition-all hover:shadow-[0_0_20px_#00ff41] group">
               <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
               DOWNLOAD RESUME
             </a>
          </div>

          {/* Right Panel: Active Terminal */}
          <div className="lg:w-2/3 flex flex-col font-mono relative bg-black">
             {/* Terminal Header */}
             <div className="flex items-center justify-between px-6 py-4 bg-[#111111] border-b border-[#00ff41]/50">
               <div className="flex gap-2">
                 <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                 <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                 <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
               </div>
               <div className="text-[var(--color-on-surface-variant)] text-xs tracking-widest select-none">ROOT@IDENTITY:~</div>
               <div className="w-4 h-4 text-[#00ff41]">
                 <Terminal className="w-full h-full" />
               </div>
             </div>

             {/* Terminal Body */}
             <div className="p-8 lg:p-12 flex-1 flex flex-col gap-10 overflow-y-auto overflow-x-hidden" style={{ maxHeight: '800px'}}>
               
               {/* Command 1: WHOAMI */}
               <div className="flex flex-col gap-4 relative">
                 <div className="flex items-start gap-2">
                   <span className="text-[#00ff41] font-bold">➜</span>
                   <span className="text-[#2094f3] font-bold">~</span>
                   <span className="text-white font-bold ml-1">whoami --verbose</span>
                 </div>
                 
                 <p className="text-gray-300 leading-relaxed max-w-2xl pl-4 md:pl-6 pt-2">
                   I am Rohit Kumar Ranjan, a <span className="text-[#00ff41] font-bold">Cyber Security student</span> at Lovely Professional University with a passion for <span className="text-[#00ff41] font-bold">network defense</span> and secure coding. 
                   <br/><br/>
                   My journey involves deep diving into networking protocols, mastering scripting for system automation, and hunting vulnerabilities in web applications. I believe in relentless, hands-on learning—constantly testing my skills against real-world scenarios (in highly controlled environments, of course).
                 </p>
                 <p className="pl-4 md:pl-6 italic text-[#555] mt-2 select-none">
                   # Status: Active & Scanning for Opportunities ...
                 </p>
               </div>

               {/* Command 2: EDUCATION */}
               <div className="flex flex-col gap-4 relative">
                 <div className="flex items-start gap-2">
                   <span className="text-[#00ff41] font-bold">➜</span>
                   <span className="text-[#2094f3] font-bold">~</span>
                   <span className="text-white font-bold ml-1">ls -la ./education/</span>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-4 pl-4 md:pl-6 pt-2">
                    {/* File Block 1 */}
                    <div className="border border-[#00ff41]/50 bg-black p-4 rounded-sm flex gap-3 items-start group hover:bg-[#002200] transition-colors">
                      <FileBadge className="w-6 h-6 text-[#00ff41] shrink-0" />
                      <div>
                        <div className="text-[#00ff41] font-bold text-sm mb-1 line-clamp-1">BTech_CSE.deg</div>
                        <div className="text-xs text-gray-400">Lovely Professional Univ.</div>
                        <div className="text-xs text-[#2094f3] mt-2">CGPA: 5.60 | Since 2023</div>
                      </div>
                    </div>
                    {/* File Block 2 */}
                    <div className="border border-[#00ff41]/50 bg-black p-4 rounded-sm flex gap-3 items-start group hover:bg-[#002200] transition-colors">
                      <FileText className="w-6 h-6 text-[#00ff41] shrink-0" />
                      <div>
                        <div className="text-[#00ff41] font-bold text-sm mb-1 line-clamp-1">High_School_SCI.cert</div>
                        <div className="text-xs text-gray-400">St. Joseph Academy</div>
                        <div className="text-xs text-[#2094f3] mt-2">10th/12th | 2020 - 2023</div>
                      </div>
                    </div>
                 </div>
               </div>

               {/* Command Prompt Idle */}
               <div className="flex items-center gap-2 mt-4">
                 <span className="text-[#00ff41] font-bold">➜</span>
                 <span className="text-[#2094f3] font-bold">~</span>
                 <span className="w-2.5 h-5 bg-[#00ff41] ml-2 animate-pulse"></span>
               </div>

             </div>

             {/* Internal Scanlines Effect */}
             <div className="absolute top-[60px] bottom-0 left-0 right-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC41KSIvPjwvc3ZnPg==')] pointer-events-none z-20"></div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
