
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using the user-provided Formspree ID: xqebbpol
      const response = await fetch('https://formspree.io/f/xqebbpol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success state after 10 seconds to allow another message
        setTimeout(() => setStatus('idle'), 10000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div id="contact" className="scroll-mt-32">
      <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-8 font-black">Get In Touch</h2>
      
      <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden transition-all duration-700">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-3xl rounded-full pointer-events-none"></div>
        
        {status === 'success' ? (
          <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-in slide-in-from-bottom-2 duration-700">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tighter text-glow">Message Received.</h3>
            <p className="text-zinc-500 text-sm max-w-[250px] mx-auto leading-relaxed italic">
              Thank you for reaching out. I'll get back to you shortly.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors flex items-center gap-2 mx-auto group"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1 group-focus-within:text-zinc-400 transition-colors">Full Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1 group-focus-within:text-zinc-400 transition-colors">Email Address</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1 group-focus-within:text-zinc-400 transition-colors">Your Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your architectural needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {status === 'error' && (
              <p className="text-[10px] font-black uppercase tracking-widest text-red-500 text-center animate-reveal">
                Submission failed. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 hover:scale-[1.01] active:scale-95 transition-all duration-500 text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {status === 'submitting' ? (
                <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
              ) : (
                <>
                  Dispatch Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                  </svg>
                </>
              )}
            </button>
            
            <p className="text-[9px] text-zinc-700 text-center uppercase tracking-[0.3em] pt-4 font-bold">
              Secure Endpoint via Formspree
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
