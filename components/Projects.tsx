import React from 'react';
import { PROJECTS } from '../constants.tsx';

export const Projects: React.FC = () => {
  return (
    <div id="projects" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 font-black">Featured Works</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Crafting digital experiences.</h3>
        </div>
        <p className="text-zinc-500 text-sm max-w-xs md:text-right">A curated selection of my most challenging full-stack and systems engineering projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.title} 
            className={`glass-card rounded-[2.5rem] overflow-hidden flex flex-col group ${
              idx === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div className={`relative ${idx === 0 ? 'h-80 md:h-[500px]' : 'h-72'} bg-zinc-950 overflow-hidden`}>
               {/* Advanced Image Masking */}
               <img 
                 src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80&seed=${project.title}`} 
                 alt={project.title}
                 className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 via-transparent to-transparent"></div>
               
               {project.liveUrl && (
                 <div className="absolute top-8 right-8">
                   <span className="flex items-center gap-2 px-5 py-2 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 text-[9px] font-black uppercase tracking-[0.2em] rounded-full text-emerald-400">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                     Live Production
                   </span>
                 </div>
               )}
               
               <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className={`${idx === 0 ? 'text-5xl md:text-6xl' : 'text-3xl'} font-black tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-700 ease-out text-glow`}>
                    {project.title}
                  </h3>
               </div>
            </div>

            <div className="p-10 md:p-14 flex flex-col flex-grow">
              <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl font-medium italic">
                {project.description}
              </p>

              <div className="mt-auto flex flex-col sm:flex-row gap-5">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    className="flex-1 text-center py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 transition-all duration-500 text-[11px] uppercase tracking-[0.3em] shadow-2xl shadow-white/5"
                  >
                    Launch App
                  </a>
                )}
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  className={`flex-1 text-center py-5 border border-white/10 glass-hover text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all duration-500 text-[11px] uppercase tracking-[0.3em] ${
                    !project.liveUrl ? 'w-full' : ''
                  }`}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};