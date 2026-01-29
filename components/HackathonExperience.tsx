
import React from 'react';
import { HACKATHONS } from '../constants.tsx';

export const HackathonExperience: React.FC = () => {
  return (
    <div className="opacity-80">
      <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-12 font-bold">Hackathon Experience</h2>
      <div className="grid grid-cols-1 gap-6">
        {HACKATHONS.map((hack) => (
          <div key={hack.title} className="glass border-dashed p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-zinc-700 transition-colors">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{hack.title}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded border border-zinc-700 text-zinc-500 font-bold uppercase tracking-wider">Prototype</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                {hack.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {hack.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-zinc-600"># {tag}</span>
                ))}
              </div>
            </div>
            <a 
              href={hack.githubUrl} 
              target="_blank"
              className="px-6 py-2.5 glass glass-hover text-sm font-semibold rounded-lg text-zinc-300 hover:text-white transition-all whitespace-nowrap"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
