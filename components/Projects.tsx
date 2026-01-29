
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
            className={`glass-card rounded-3xl overflow-hidden flex flex-col group ${
              idx === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <div className={`relative ${idx === 0 ? 'h-80 md:h-[450px]' : 'h-64'} bg-zinc-950 overflow-hidden`}>
               <img 
                 src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80&seed=${project.title}`} 
                 alt={project.title}
                 className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
               
               {project.liveUrl && (
                 <div className="absolute top-6 right-6">
                   <span className="flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest rounded-full">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                     Live Production
                   </span>
                 </div>
               )}
               
               <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter px-2.5 py-1 bg-white/5 border border-white/5 rounded text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className={`${idx === 0 ? 'text-4xl md:text-5xl' : 'text-2xl'} font-bold tracking-tighter text-white group-hover:translate-x-1 transition-transform duration-500`}>
                    {project.title}
                  </h3>
               </div>
            </div>

            <div className="p-10 flex flex-col flex-grow">
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-2xl font-medium">
                {project.description}
              </p>

              <div className="mt-auto flex gap-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    className="flex-1 text-center py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all duration-300 text-sm shadow-xl shadow-white/5"
                  >
                    Launch App
                  </a>
                )}
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  className={`flex-1 text-center py-4 border border-white/10 glass-hover text-white font-bold rounded-2xl transition-all duration-300 text-sm ${
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
