
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero'
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { HackathonExperience } from './components/HackathonExperience';
import { DSABlock } from './components/DSABlock';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      
      <main className="max-w-6xl mx-auto px-6 lg:px-12 pt-16">
        <Hero />
        
        <div className="space-y-48 pb-32">
          <TechStack />
          <Projects />
          <HackathonExperience />
          <DSABlock />

          <div className="grid md:grid-cols-12 gap-20">
            <div className="md:col-span-7">
              <Certifications />
            </div>
            <div className="md:col-span-5">
              <Contact />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-16 bg-[#050505] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} YUG ARORA — 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
