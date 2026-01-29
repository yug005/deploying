import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { HackathonExperience } from './components/HackathonExperience';
import { DSABlock } from './components/DSABlock';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

const MouseAura: React.FC = () => {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (auraRef.current) {
        auraRef.current.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={auraRef} className="cursor-aura hidden lg:block" />;
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MouseAura />
      <Navbar scrolled={scrolled} />
      
      <main className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 relative z-10">
        <Hero />
        
        <div className="space-y-48 pb-32">
          <section className="reveal">
            <TechStack />
          </section>
          
          <section className="reveal">
            <Projects />
          </section>
          
          <section className="reveal">
            <HackathonExperience />
          </section>
          
          <section className="reveal">
            <DSABlock />
          </section>

          <div className="grid md:grid-cols-12 gap-20 reveal">
            <div className="md:col-span-7">
              <Certifications />
            </div>
            <div className="md:col-span-5">
              <Contact />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-16 bg-[#050505] text-center relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} YUG ARORA — MINIMALIST BACKEND ARCHITECT
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;