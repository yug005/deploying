
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Constructing mailto link for client-side submission without a backend
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:arorayug07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Simulate a brief loading state for "Premium Feel"
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setStatus('success');
      
      // Reset success status after some time
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div id="contact" className="scroll-mt-32">
      <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-8 font-black">Get In Touch</h2>
      
      <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
        {/* Decorative subtle glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-3xl rounded-full"></div>
        
        {status === 'success' ? (
          <div className="py-12 text-center animate-reveal">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Prepared!</h3>
            <p className="text-zinc-500 text-sm">Your email client should open shortly to send the message.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-8 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1">Your Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all duration-300 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 transition-all duration-500 text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
              ) : (
                <>
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                  </svg>
                </>
              )}
            </button>
            
            <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest">
              Alternatively, email me at <a href={SOCIAL_LINKS.email} className="text-zinc-400 hover:text-white transition-colors underline decoration-white/10 underline-offset-4">arorayug07@gmail.com</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
