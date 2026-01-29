import React from 'react';
import { TECH_STACK } from '../constants.tsx';

export const TechStack: React.FC = () => {
  return (
    <section id="tech" className="scroll-mt-40">
      <div className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4 font-black">Capabilities</h2>
        <h3 className="text-4xl font-bold tracking-tighter">Modern stack for modern needs.</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_STACK.map((category) => (
          <div key={category.title} className="glass-card p-10 rounded-3xl group">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-zinc-300 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-white/30 transition-all duration-500"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <span 
                  key={item} 
                  className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-sm text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};