import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Star, 
  CheckCircle 
} from 'lucide-react';
import { Reveal } from './Reveal';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenConsultation: () => void;
}

// Detect the visitor's real screen size so the simulator never overflows on phones
const detectDevice = (): 'desktop' | 'tablet' | 'mobile' => {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 640) return 'mobile';
  if (window.innerWidth < 1024) return 'tablet';
  return 'desktop';
};

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onOpenConsultation }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>(detectDevice);

  // Keep the preview matched to the real screen when orientation / window changes
  useEffect(() => {
    const onResize = () => setDeviceView(detectDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[320px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none animate-float-slower" />
      <div className="absolute top-1/2 right-10 w-[420px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges & Tagline */}
        <div className="flex flex-col items-center text-center">
          
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-inner backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Award-Winning Website Agency for High-Growth Businesses</span>
              <span className="hidden sm:inline-block text-slate-500">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-amber-300 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> 4.9/5 (180+ Reviews)
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight max-w-5xl leading-[1.12]">
              We Build Custom, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">
                Responsive Websites
              </span> That Turn Visitors Into Customers.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Stop losing leads to clunky, slow, generic templates. We design and engineer bespoke, 
              lightning-fast websites tailored to your brand, optimized for Google search, and built 
              to look stunning on <span className="text-cyan-300 font-semibold">every single screen size</span>.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={360}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 animate-gradient-x hover:shadow-indigo-600/50 shadow-xl shadow-indigo-600/30 transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <span>Calculate Your Website Cost</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all cursor-pointer backdrop-blur-sm hover:-translate-y-0.5"
              >
                <span>Book Free Strategy Call</span>
              </button>
            </div>
          </Reveal>

          {/* Quick value props list */}
          <Reveal delay={480}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> 100% Mobile & Tablet Responsive
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" /> 95+ PageSpeed Score Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" /> 100% Code & Asset Ownership
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" /> 30-Day Post Launch Support
              </span>
            </div>
          </Reveal>

        </div>

        {/* Interactive Responsive Simulation Showcase in Hero */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-indigo-950/50 overflow-hidden backdrop-blur-xl">
            
            {/* Top Device Bar & Controls */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 ml-4 px-3 py-1 bg-slate-900 rounded-md border border-slate-800 text-xs text-slate-400">
                  <span className="text-emerald-400">https://</span>
                  <span>craftweb-client-preview.dev</span>
                </div>
              </div>

              {/* Viewport switch tabs */}
              <div className="flex flex-wrap items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
                    deviceView === 'desktop'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span> (1440px)
                </button>

                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
                    deviceView === 'tablet'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span> (768px)
                </button>

                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
                    deviceView === 'mobile'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span> (375px)
                </button>
              </div>

              {/* Status indicators */}
              <div className="hidden md:flex items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 100/100 Mobile Score
                </span>
              </div>
            </div>

            {/* Interactive Preview Canvas with animated width transitions */}
            <div className="p-4 sm:p-6 bg-slate-950/60 min-h-[420px] flex items-center justify-center transition-all duration-300">
              
              <div className={`transition-all duration-500 ease-in-out border border-slate-700/70 rounded-xl overflow-hidden shadow-2xl bg-slate-900 ${
                deviceView === 'desktop' ? 'w-full' : deviceView === 'tablet' ? 'w-[720px] max-w-full' : 'w-[360px] max-w-full'
              }`}>
                
                {/* Simulated Website UI Header */}
                <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 overflow-hidden">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                      AP
                    </div>
                    <span className="font-bold text-xs tracking-tight text-white whitespace-nowrap">Apex FinTech</span>
                  </div>

                  {deviceView === 'desktop' && (
                    <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-300 font-medium">
                      <span className="hover:text-cyan-400 cursor-pointer whitespace-nowrap">Platform</span>
                      <span className="hover:text-cyan-400 cursor-pointer whitespace-nowrap">Solutions</span>
                      <span className="hover:text-cyan-400 cursor-pointer whitespace-nowrap">Security</span>
                      <span className="hover:text-cyan-400 cursor-pointer whitespace-nowrap">Pricing</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <button className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white transition">
                      {deviceView === 'mobile' ? 'Open App' : 'Get Started Free'}
                    </button>
                  </div>
                </div>

                {/* Simulated Website Content */}
                <div className="p-5 sm:p-8 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950">
                  
                  <div className={`grid gap-6 items-center ${deviceView === 'desktop' ? 'grid-cols-12' : 'grid-cols-1'}`}>
                    
                    <div className={deviceView === 'desktop' ? 'col-span-7' : 'col-span-1'}>
                      <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
                        ⚡ Next-Gen Digital Banking
                      </span>
                      
                      <h3 className={`font-bold text-white tracking-tight ${
                        deviceView === 'mobile' ? 'text-lg leading-snug' : 'text-2xl sm:text-3xl leading-tight'
                      }`}>
                        Smart Multi-Currency Accounts for Modern Global Teams
                      </h3>

                      <p className={`text-slate-400 mt-2 ${deviceView === 'mobile' ? 'text-xs leading-relaxed' : 'text-sm'}`}>
                        Manage 40+ currencies, issue physical & virtual cards with zero foreign exchange fees, and integrate directly with your accounting stack.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        <button className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow hover:bg-indigo-500">
                          Create Free Account
                        </button>
                        <button className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium hover:text-white">
                          Watch 2-Min Demo
                        </button>
                      </div>

                      {/* Mini proof pills */}
                      <div className="mt-4 flex items-center gap-4 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1 text-slate-300 font-medium">
                          ✓ No credit card required
                        </span>
                        <span className="flex items-center gap-1 text-slate-300 font-medium">
                          ✓ 3-minute setup
                        </span>
                      </div>
                    </div>

                    {/* Simulated interactive mini dashboard card */}
                    <div className={deviceView === 'desktop' ? 'col-span-5' : 'col-span-1'}>
                      <div className="rounded-xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Total Balance</p>
                            <p className="text-lg font-bold text-white font-mono">$184,920.45</p>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            +18.4%
                          </span>
                        </div>

                        <div className="mt-3 space-y-2">
                          <div className="flex items-center justify-between text-[11px] p-2 rounded bg-slate-900/60">
                            <span className="text-slate-300 font-medium">Stripe Merchant Payout</span>
                            <span className="text-emerald-400 font-mono font-semibold">+$12,450.00</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] p-2 rounded bg-slate-900/60">
                            <span className="text-slate-300 font-medium">AWS Cloud Infrastructure</span>
                            <span className="text-slate-400 font-mono">-$1,240.50</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] p-2 rounded bg-slate-900/60">
                            <span className="text-slate-300 font-medium">Enterprise Client Retainer</span>
                            <span className="text-emerald-400 font-mono font-semibold">+$8,500.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Device footer status bar */}
                <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[10px] text-slate-500">
                  <span>Current Viewport: <strong className="text-slate-300">{deviceView.toUpperCase()}</strong></span>
                  <span className="text-cyan-400 font-medium">⚡ Responsive CSS Flexbox & CSS Grid Engine Active</span>
                </div>

              </div>

            </div>

          </div>

          {/* Quick trust metrics row */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300">
              <AnimatedCounter
                value={180}
                suffix="+"
                className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-display"
              />
              <div className="text-xs text-slate-400 mt-1">Websites Delivered</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
              <AnimatedCounter
                value={0.48}
                decimals={2}
                suffix="s"
                duration={2000}
                className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-display"
              />
              <div className="text-xs text-slate-400 mt-1">Average Load Time</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300">
              <AnimatedCounter
                value={99.8}
                decimals={1}
                suffix="%"
                className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-display"
              />
              <div className="text-xs text-slate-400 mt-1">Client Satisfaction Rate</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300">
              <AnimatedCounter
                value={240}
                prefix="+"
                suffix="%"
                className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-display"
              />
              <div className="text-xs text-slate-400 mt-1">Avg Client Conversion Lift</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
