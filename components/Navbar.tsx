import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Stack', href: '#tech' },
    { name: 'Works', href: '#projects' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Logic', href: '#dsa' },
    { name: 'Connect', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'translate-y-4 px-6' : 'translate-y-0 px-0'
    }`}>
      <div className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 relative z-10 ${
        scrolled 
          ? 'glass rounded-2xl px-6 py-3 border border-white/10 shadow-2xl shadow-black/50' 
          : 'py-10 px-6 lg:px-12 bg-transparent border-transparent'
      }`}>
        <a href="#" className="text-lg font-black tracking-tighter group flex items-center gap-1 z-[110]">
          <span className="group-hover:text-zinc-400 transition-colors text-white">YUG</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-500 group-hover:text-white transition-colors italic">ARORA</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 z-[110]">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <a 
            href={SOCIAL_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 active:scale-95"
          >
            Resume
          </a>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[100] transition-all duration-500 md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter hover:italic transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={SOCIAL_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};