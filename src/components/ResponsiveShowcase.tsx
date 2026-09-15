import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Check, 
  Sparkles, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowUpRight
} from 'lucide-react';
import { DEMO_WEBSITES } from '../data/agencyData';
import { Reveal } from './Reveal';

interface ResponsiveShowcaseProps {
  onSelectTemplate: (templateName: string) => void;
}

// Match the simulator to the visitor's real device so mobile screens never overflow
const detectViewport = (): 'desktop' | 'tablet' | 'mobile' => {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 640) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';
  return 'desktop';
};

export const ResponsiveShowcase: React.FC<ResponsiveShowcaseProps> = ({ onSelectTemplate }) => {
  const [selectedDemoId, setSelectedDemoId] = useState('saas');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>(detectViewport);
  const [cartCount, setCartCount] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    const onResize = () => setViewport(detectViewport());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const activeDemo = DEMO_WEBSITES.find(d => d.id === selectedDemoId) || DEMO_WEBSITES[0];

  return (
    <section id="live-demos" className="py-20 md:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Interactive Website Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
              Built for Performance, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                Crafted for All Devices.
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Test how we engineer responsive layouts. Pick an industry template below and switch between desktop, tablet, and mobile views to test real-time fluid scaling.
            </p>
          </div>

          {/* Viewport switcher */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setViewport('desktop')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition cursor-pointer ${
                viewport === 'desktop' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition cursor-pointer ${
                viewport === 'tablet' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition cursor-pointer ${
                viewport === 'mobile' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile</span>
            </button>
          </div>
        </div>
        </Reveal>

        {/* Industry Template Selector Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-6">
          {DEMO_WEBSITES.map((demo) => {
            const isSelected = demo.id === selectedDemoId;
            return (
              <button
                key={demo.id}
                onClick={() => {
                  setSelectedDemoId(demo.id);
                  setBookingConfirmed(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition cursor-pointer flex items-center gap-2 border ${
                  isSelected 
                    ? 'bg-slate-800 border-indigo-500 text-white shadow-lg shadow-indigo-950' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <span>{demo.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-800 text-slate-500'
                }`}>
                  {demo.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Simulator Window */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Simulated Browser Top Bar */}
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              <div className="hidden sm:flex items-center gap-1.5 ml-4 px-3 py-1 bg-slate-900 rounded-md border border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-emerald-400">https://</span>
                <span>{activeDemo.id}.preview.craftweb.agency</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 hidden md:inline">
                Simulated Screen: <strong className="text-white">{viewport === 'desktop' ? '1280 × 800' : viewport === 'tablet' ? '768 × 1024' : '375 × 667'}</strong>
              </span>
              <button
                onClick={() => onSelectTemplate(activeDemo.name)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer transition"
              >
                <span>Use This Style</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Screen Container */}
          <div className="p-4 sm:p-8 bg-slate-950/70 min-h-[500px] flex items-center justify-center">
            
            <div className={`transition-all duration-500 ease-in-out border border-slate-800 rounded-2xl overflow-hidden shadow-2xl bg-slate-900 text-slate-100 ${
              viewport === 'desktop' ? 'w-full' : viewport === 'tablet' ? 'w-[740px] max-w-full' : 'w-[375px] max-w-full'
            }`}>
              
              {/* Internal Mock Site Header */}
              <div className="border-b border-slate-800/80 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 overflow-hidden bg-slate-900/95 sticky top-0 z-20">
                <div className="flex items-center gap-2.5 min-w-0 shrink-0">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${activeDemo.themeColor} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
                    {activeDemo.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-sm text-white tracking-tight truncate block">{activeDemo.name}</span>
                    <span className="block text-[10px] text-slate-400 truncate">{activeDemo.badge}</span>
                  </div>
                </div>

                {viewport === 'desktop' && (
                  <div className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-300">
                    {activeDemo.desktopPreview.navItems.map((item, idx) => (
                      <span key={idx} className="hover:text-white cursor-pointer transition whitespace-nowrap">{item}</span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  {activeDemo.id === 'ecommerce' && (
                    <button 
                      onClick={() => setCartCount(c => c + 1)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium flex items-center gap-1.5 border border-slate-700"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                      <span>Bag ({cartCount})</span>
                    </button>
                  )}
                  <button className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${activeDemo.themeColor} shadow hover:opacity-90 transition`}>
                    {viewport === 'mobile' ? 'Action' : activeDemo.desktopPreview.ctaText}
                  </button>
                </div>
              </div>

              {/* Internal Mock Site Body */}
              <div className="p-6 sm:p-10 space-y-8 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950">
                
                {/* Hero section inside mock */}
                <div className="max-w-2xl">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-indigo-400 mb-2">
                    {activeDemo.tagline}
                  </span>
                  <h3 className={`font-bold text-white tracking-tight ${
                    viewport === 'mobile' ? 'text-xl leading-snug' : 'text-2xl sm:text-4xl leading-tight'
                  }`}>
                    {activeDemo.desktopPreview.heroTitle}
                  </h3>
                  <p className={`text-slate-400 mt-3 ${viewport === 'mobile' ? 'text-xs' : 'text-sm sm:text-base'}`}>
                    {activeDemo.desktopPreview.heroSubtitle}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 items-center">
                    <button 
                      onClick={() => setBookingConfirmed(true)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r ${activeDemo.themeColor} shadow-lg cursor-pointer hover:scale-[1.02] transition`}
                    >
                      {activeDemo.desktopPreview.ctaText}
                    </button>

                    <div className="px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-2 text-xs text-slate-300">
                      <span className="font-bold text-white">{activeDemo.desktopPreview.stat.value}</span>
                      <span className="text-slate-400">· {activeDemo.desktopPreview.stat.label}</span>
                    </div>
                  </div>

                  {bookingConfirmed && (
                    <div className="mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Interactive sample action trigger executed! Instant feedback works smoothly.</span>
                    </div>
                  )}
                </div>

                {/* Features cards inside mock */}
                <div className={`grid gap-4 ${viewport === 'desktop' ? 'grid-cols-3' : viewport === 'tablet' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {activeDemo.desktopPreview.features.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs mb-3">
                        0{i + 1}
                      </div>
                      <h5 className="font-bold text-white text-sm">{feat.title}</h5>
                      <p className="text-xs text-slate-400 mt-1">{feat.desc}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Internal Mock Footer Note */}
              <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  Custom engineered with React, Next.js & Tailwind CSS
                </span>
                <span className="text-emerald-400 font-mono font-medium">99 PageSpeed Score</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
