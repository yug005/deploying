import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

export const DSABlock: React.FC = () => {
  return (
    <section id="dsa" className="scroll-mt-40">
      <div className="glass-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden group">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full group-hover:bg-white/[0.04] transition-colors duration-1000"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/[0.01] blur-[80px] rounded-full"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h2 className="text-xs uppercase tracking-[0.5em] text-zinc-600 mb-8 font-black">Core Foundations</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold mb-10 tracking-tighter leading-[0.95] text-balance">
              Engineered with <span className="text-zinc-500">logic.</span>
            </h3>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 font-medium">
              Deep-diving into complex data structures and optimizing algorithms isn't just a requirement; it's a commitment to performance and elegance.
            </p>
            <div className="flex flex-wrap gap-5">
               <a 
                href={SOCIAL_LINKS.leetcode} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 transition-all text-sm tracking-tight shadow-2xl shadow-white/5 active:scale-95 cursor-pointer"
              >
                LeetCode Profile
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Algorithm Mastery", desc: "Expertise in Big O optimization and recursive logic." },
              { label: "Data Structures", desc: "solved basic level dsa" },
              { label: "Consistency", desc: "Many problems solved with a focus on memory safety and efficiency." }
            ].map((stat, i) => (
              <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl group/item hover:border-white/10 hover:bg-white/[0.03] transition-all duration-500">
                <h4 className="text-lg font-bold text-white mb-3 group-hover/item:text-zinc-400 transition-colors flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-zinc-800 group-hover/item:bg-white transition-colors"></span>
                  {stat.label}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};