import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-20 relative">
      <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 opacity-0 animate-reveal delay-100 mb-12">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300"></span>
          </span>
          Available for backend roles
        </div>
      </div>

      <h1 className="relative z-10 text-8xl md:text-[11rem] font-extrabold tracking-tighter mb-10 leading-[0.8] text-balance opacity-0 animate-reveal delay-200">
        Yug Arora<span className="text-zinc-800">.</span>
      </h1>
      
      <p className="relative z-10 text-3xl md:text-5xl font-medium text-zinc-500 mb-14 max-w-4xl leading-tight text-balance opacity-0 animate-reveal delay-300">
        Full-Stack Engineer. Building <span className="text-white">resilient backends</span> and <span className="text-white">performant logic</span> systems.
      </p>

      <div className="relative z-20 flex flex-wrap items-center gap-6 opacity-0 animate-reveal" style={{ animationDelay: '600ms' }}>
        <a 
          href="#projects" 
          className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-500 text-sm uppercase tracking-widest cursor-pointer shadow-2xl shadow-white/10"
        >
          View Projects
        </a>
        <a 
          href={SOCIAL_LINKS.resume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-10 py-5 border border-white/10 glass glass-hover text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all duration-500 text-sm uppercase tracking-widest flex items-center gap-3 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Get Resume
        </a>
        <div className="flex items-center gap-8 ml-2 mt-4 sm:mt-0">
           <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-bold text-zinc-600 hover:text-white transition-colors uppercase tracking-[0.2em] cursor-pointer"
           >
            GitHub
           </a>
           <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-bold text-zinc-600 hover:text-white transition-colors uppercase tracking-[0.2em] cursor-pointer"
           >
            LinkedIn
           </a>
        </div>
      </div>
    </section>
  );
};