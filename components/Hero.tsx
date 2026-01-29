import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-20 relative">
      <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-white/[0.01] blur-[140px] rounded-full pointer-events-none z-0 animate-pulse"></div>
      
      <div className="relative z-10 opacity-0 animate-reveal mb-12">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-[9px] font-black tracking-[0.4em] text-zinc-400 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Actively Engineering Backend Systems
        </div>
      </div>

      <h1 className="relative z-10 text-8xl md:text-[12rem] font-black tracking-tighter mb-12 leading-[0.75] text-balance opacity-0 animate-reveal" style={{ animationDelay: '200ms' }}>
        Yug Arora<span className="text-zinc-800">.</span>
      </h1>
      
      <p className="relative z-10 text-3xl md:text-6xl font-medium text-zinc-500 mb-16 max-w-5xl leading-[1.1] text-balance opacity-0 animate-reveal" style={{ animationDelay: '400ms' }}>
        Full-Stack Engineer. Architecting <span className="text-white text-glow">robust logic</span> and <span className="text-white text-glow">high-performance</span> backends.
      </p>

      <div className="relative z-20 flex flex-wrap items-center gap-8 opacity-0 animate-reveal" style={{ animationDelay: '700ms' }}>
        <a 
          href="#projects" 
          className="px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 hover:scale-[1.05] active:scale-95 transition-all duration-700 text-xs uppercase tracking-[0.3em] cursor-pointer shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
        >
          View Portfolio
        </a>
        <a 
          href={SOCIAL_LINKS.resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-12 py-6 border border-white/10 glass glass-hover text-white font-black rounded-2xl hover:scale-[1.05] active:scale-95 transition-all duration-700 text-xs uppercase tracking-[0.3em] flex items-center gap-4 cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Get CV
        </a>
        <div className="flex items-center gap-10 ml-4 mt-6 sm:mt-0">
           <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] font-black text-zinc-500 hover:text-white transition-all uppercase tracking-[0.4em] cursor-pointer relative group"
           >
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>
           </a>
           <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] font-black text-zinc-500 hover:text-white transition-all uppercase tracking-[0.4em] cursor-pointer relative group"
           >
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>
           </a>
        </div>
      </div>
    </section>
  );
};