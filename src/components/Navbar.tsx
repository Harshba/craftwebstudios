import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Sparkles, 
  Menu, 
  X, 
  Calculator, 
  ArrowRight, 
  PhoneCall 
} from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenConsultation: () => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEstimator, 
  onOpenConsultation, 
  onOpenAudit 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Live Demos', href: '#live-demos' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top promotional banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-violet-800 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex flex-wrap items-center justify-center gap-x-4 gap-y-1 relative z-50">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-200 text-xs px-2 py-0.5 rounded-full font-semibold border border-amber-400/30">
            <Sparkles className="w-3 h-3 text-amber-300" /> Special Offer
          </span>
          <span>Website packages starting from <strong>₹7,999</strong></span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button 
            onClick={onOpenAudit}
            className="text-amber-300 hover:text-white underline cursor-pointer"
          >
            Free Audit
          </button>
          <span className="text-slate-500">|</span>
          <a
            href="https://wa.me/917088686900?text=Hi%2C%20I%20want%20to%20build%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 hover:text-white font-semibold flex items-center gap-1"
          >
            <span>WhatsApp: +91 7088686900</span>
          </a>
          <span className="text-slate-400 hidden md:inline">|</span>
          <a
            href="https://harshjmit.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-cyan-300 hover:text-white underline font-medium"
          >
            Developer Portfolio <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
          : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-900/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Laptop className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl text-white tracking-tight">Craft<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Web</span></span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Studios
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Custom High-Converting Websites</p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-indigo-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/917088686900?text=Hello%20CraftWeb%20Studios%2C%20I%20want%20to%20build%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-medium rounded-lg text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 transition cursor-pointer"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+917088686900"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-medium rounded-lg text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition cursor-pointer"
              title="Call us now"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>7088686900</span>
            </a>

            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-medium rounded-lg text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Calculator</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 sm:hidden"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/917088686900?text=Hi%2C%20I%20am%20interested%20in%20creating%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-semibold text-xs"
                >
                  💬 WhatsApp Us
                </a>

                <a
                  href="tel:+917088686900"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 font-semibold text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call 7088686900
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-medium text-sm hover:bg-slate-800"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Instant Cost Estimator (INR ₹)</span>
              </button>

              <a
                href="https://harshjmit.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 font-medium text-sm hover:bg-slate-800"
              >
                <span>View Developer Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Discovery Call</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
