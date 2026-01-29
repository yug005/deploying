
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CERTIFICATES } from '../constants.tsx';

interface ModalProps {
  cert: typeof CERTIFICATES[0] | null;
  onClose: () => void;
}

const CertificateModal: React.FC<ModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  useEffect(() => {
    window.history.pushState({ modalOpen: true }, '');
    const handlePopState = () => onClose();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') window.history.back();
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleManualClose = () => window.history.back();

  // Using createPortal to render the modal at the document body level.
  // This resolves z-index context issues where the Navbar (z-100) overlaps 
  // elements inside the main content container (z-10).
  return createPortal(
    <div 
      className="fixed inset-0 z-[1000] overflow-y-auto px-4 py-12 md:p-12 flex justify-center items-start md:items-center"
      onClick={handleManualClose}
    >
      <div className="fixed inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-500" />
      
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full animate-pulse" />
      </div>

      <div 
        className="relative w-full max-w-3xl mx-auto z-10 animate-in zoom-in-95 slide-in-from-bottom-12 duration-700 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6 px-2">
          <button 
            onClick={handleManualClose}
            className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Portfolio</span>
          </button>

          <button 
            onClick={handleManualClose}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-500">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="bg-[#080808] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
          <div className="p-8 md:p-16 lg:p-20 flex flex-col">
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">
                  ID: {cert.id.toUpperCase()}
                </span>
                <span className="w-8 h-[1px] bg-white/10"></span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Digital Credential</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 leading-[1] text-glow">
                {cert.title}
              </h3>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] italic">
                Issued by {cert.issuer}
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-[2rem]">
                <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-medium italic">
                  "{cert.description}"
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                <div>
                  <span className="block text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-2">Cycle</span>
                  <span className="text-white font-bold text-base md:text-lg tracking-tight">{cert.date}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-2">Track</span>
                  <span className="text-white font-bold text-base md:text-lg tracking-tight">{cert.badge}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href={cert.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 md:py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 transition-all duration-300 text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-white/5 active:scale-95"
              >
                View High-Res
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
                </svg>
              </a>
              <button 
                onClick={handleManualClose}
                className="flex-1 py-4 md:py-5 border border-white/10 glass-hover text-zinc-400 font-black rounded-2xl transition-all duration-300 text-[11px] uppercase tracking-[0.3em] active:scale-95"
              >
                Return to Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<typeof CERTIFICATES[0] | null>(null);

  return (
    <>
      <section id="certifications" className="scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-4 font-black">Validations</h2>
            <h3 className="text-4xl font-bold tracking-tighter text-glow">Professional Credentials.</h3>
          </div>
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Verified Excellence</p>
        </div>

        <div className="space-y-4">
          {CERTIFICATES.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="w-full text-left group relative p-8 md:p-10 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden glass-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      {cert.issuer}
                    </span>
                    <span className="w-8 h-[1px] bg-zinc-800"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-2 group-hover:translate-x-1 transition-transform duration-500">
                    {cert.title}
                  </h4>
                  <p className="text-zinc-500 text-sm font-medium line-clamp-1 group-hover:text-zinc-400 transition-colors">
                    {cert.badge} • Verified Expert Track
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 group-hover:rotate-[360deg]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeCert && (
        <CertificateModal 
          cert={activeCert} 
          onClose={() => setActiveCert(null)} 
        />
      )}
    </>
  );
};
