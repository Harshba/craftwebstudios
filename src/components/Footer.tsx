import React from 'react';
import { 
  Laptop, 
  Mail, 
  Phone, 
  MessageSquare, 
  Globe, 
  Share2 
} from 'lucide-react';
import { Reveal } from './Reveal';

interface FooterProps {
  onOpenEstimator: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator, onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Pre-Footer Callout */}
        <Reveal>
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900/60 via-slate-900 to-indigo-950/60 border border-indigo-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl hover:border-indigo-500/60 transition-colors duration-300">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-cyan-400 mb-2">
              Ready to Upgrade Your Digital Presence?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Let's Build A Custom Website That Converts.
            </h3>
            <p className="mt-2 text-slate-300 text-sm sm:text-base">
              Average delivery in under 3 weeks. Complete code ownership, 95+ PageSpeed guaranteed, and 100% mobile perfection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenEstimator}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition cursor-pointer text-center"
            >
              Estimate Your Cost
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 animate-gradient-x hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition cursor-pointer text-center hover:scale-[1.03]"
            >
              Start Free Discovery
            </button>
          </div>
        </div>
        </Reveal>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Laptop className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white">Craft<span className="text-indigo-400">Web</span> Studios</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We design and engineer bespoke, high-converting responsive websites for businesses worldwide. 
              Zero template lock-in. Clean code, lightning speeds, and real ROI.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition cursor-pointer">
                <Globe className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition cursor-pointer">
                <Share2 className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition cursor-pointer">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* Live Agency Status Indicator */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently booking for Q2 — 3 slots left</span>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Website Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition">Custom UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition">Full-Stack Development</a></li>
              <li><a href="#services" className="hover:text-white transition">E-Commerce Stores</a></li>
              <li><a href="#services" className="hover:text-white transition">Website Redesign</a></li>
              <li><a href="#services" className="hover:text-white transition">Core Web Vitals Speed</a></li>
              <li><a href="#services" className="hover:text-white transition">Technical SEO Schema</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Industries</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#live-demos" className="hover:text-white transition">SaaS & Technology</a></li>
              <li><a href="#live-demos" className="hover:text-white transition">Clinics & Healthcare</a></li>
              <li><a href="#live-demos" className="hover:text-white transition">Direct-To-Consumer DTC</a></li>
              <li><a href="#live-demos" className="hover:text-white transition">Corporate & Law Advisory</a></li>
              <li><a href="#live-demos" className="hover:text-white transition">Restaurants & Dining</a></li>
              <li><a href="#estimator" className="hover:text-white transition">Instant Scope Estimator</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Desk */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Direct Contact & WhatsApp</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:7088686900" className="text-white hover:text-emerald-400 font-semibold transition">
                  +91 7088686900
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/917088686900?text=Hi%2C%20I%20want%20to%20build%20a%20website%20for%20my%20business." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:underline font-medium"
                >
                  WhatsApp: 7088686900 (Instant Chat)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>craftswebstudios@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <a 
                  href="https://harshjmit.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-300 hover:underline font-semibold"
                >
                  View Developer Portfolio ↗
                </a>
              </div>
              <div className="pt-2 text-slate-500 text-[11px]">
                Open for client projects across India & Global Remote.<br />Response time: under 1 hour.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CraftWeb Studios. Founded by{' '}
            <a 
              href="https://harshjmit.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:underline font-semibold"
            >
              Harsh
            </a>
            . Call/WhatsApp: <a href="tel:7088686900" className="text-emerald-400 hover:underline">7088686900</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://harshjmit.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition">
              Developer Profile ↗
            </a>
            <a href="https://wa.me/917088686900" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-white transition">
              WhatsApp ↗
            </a>
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
