import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Copy,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Reveal } from './Reveal';

interface InteractiveEstimatorProps {
  onClaimEstimate: (details: {
    projectType: string;
    pageCount: string;
    timeline: string;
    features: string[];
    totalCost: number;
    estimatedWeeks: string;
  }) => void;
}

const PROJECT_TYPES = [
  {
    id: 'landing',
    name: 'Landing Page / Sales Page',
    basePrice: 5999,
    desc: 'High-conversion single page for launches, products, or marketing campaigns',
    days: '3-5 days',
    icon: '🎯'
  },
  {
    id: 'business',
    name: 'Small & Mid Business Website',
    basePrice: 12999,
    desc: 'Bespoke 4-7 page corporate showcase to build authority and generate client leads',
    days: '1-2 weeks',
    icon: '🏢'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Online Store',
    basePrice: 21999,
    desc: 'Full-featured online store with UPI/Razorpay/Stripe, cart, checkout, inventory & product filters',
    days: '2-3 weeks',
    icon: '🛍️'
  },
  {
    id: 'saas-app',
    name: 'Custom Web App / SaaS Front-end',
    basePrice: 28999,
    desc: 'Modern web app UI, dashboards, authentication, customer portal & API integration',
    days: '3-4 weeks',
    icon: '⚡'
  },
  {
    id: 'booking-service',
    name: 'Clinic / Booking & Service Business',
    basePrice: 15999,
    desc: 'Specialized for medical clinics, spas, law firms & appointments with instant calendar booking',
    days: '1-2 weeks',
    icon: '🩺'
  }
];

const PAGE_OPTIONS = [
  { id: '1', label: '1 Single Page', cost: 0, mult: 1 },
  { id: '3-5', label: '3 to 5 Pages', cost: 2500, mult: 1.15 },
  { id: '6-10', label: '6 to 10 Pages', cost: 4999, mult: 1.3 },
  { id: '11-20', label: '11 to 20 Pages', cost: 8999, mult: 1.55 },
  { id: '20+', label: '20+ Custom Pages', cost: 14999, mult: 1.8 },
];

const ADDON_FEATURES = [
  { id: 'cms', label: 'Admin CMS (Edit text & blog yourself)', cost: 2499, icon: '📝' },
  { id: 'booking', label: '24/7 Online Booking & WhatsApp Sync', cost: 1999, icon: '📅' },
  { id: 'payments', label: 'UPI, QR Code, Razorpay & Card Gateway', cost: 2999, icon: '💳' },
  { id: 'seo', label: 'Advanced Google Search & Local SEO Engine', cost: 2499, icon: '🔍' },
  { id: 'copywriting', label: 'Professional Conversion Content & Copywriting', cost: 2999, icon: '✍️' },
  { id: 'animations', label: 'Interactive Micro-Animations & Modern UI', cost: 1999, icon: '✨' },
  { id: 'multilingual', label: 'Multi-Language Support (English/Hindi/etc.)', cost: 2499, icon: '🌐' },
  { id: 'speed', label: 'Sub-Second Speed & 99+ Core Web Vitals Pack', cost: 1799, icon: '⚡' },
];

const TIMELINE_SPEEDS = [
  { id: 'standard', label: 'Standard Delivery', multiplier: 1.0, note: 'Normal pace, highest value' },
  { id: 'priority', label: 'Priority Rush (30% Faster)', multiplier: 1.25, note: 'Dedicated senior engineers' },
  { id: 'flexible', label: 'Flexible Window', multiplier: 0.95, note: 'Save 5% if you have flexible dates' },
];

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({ onClaimEstimate }) => {
  const [selectedType, setSelectedType] = useState('business');
  const [selectedPageOption, setSelectedPageOption] = useState('3-5');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['cms', 'seo', 'speed']);
  const [timelineSpeed, setTimelineSpeed] = useState('standard');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const project = PROJECT_TYPES.find(p => p.id === selectedType) || PROJECT_TYPES[1];
    const pageCost = PAGE_OPTIONS.find(p => p.id === selectedPageOption)?.cost || 0;
    
    const featuresCost = selectedFeatures.reduce((acc, fId) => {
      const feat = ADDON_FEATURES.find(f => f.id === fId);
      return acc + (feat ? feat.cost : 0);
    }, 0);

    const speedObj = TIMELINE_SPEEDS.find(t => t.id === timelineSpeed) || TIMELINE_SPEEDS[0];
    const rawTotal = (project.basePrice + pageCost + featuresCost) * speedObj.multiplier;
    const finalTotal = Math.round(rawTotal / 10) * 10;

    return {
      project,
      pageCost,
      featuresCost,
      speedMultiplier: speedObj.multiplier,
      total: finalTotal,
      estimatedWeeks: project.days
    };
  }, [selectedType, selectedPageOption, selectedFeatures, timelineSpeed]);

  const handleClaim = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    onClaimEstimate({
      projectType: calculation.project.name,
      pageCount: PAGE_OPTIONS.find(p => p.id === selectedPageOption)?.label || '',
      timeline: TIMELINE_SPEEDS.find(t => t.id === timelineSpeed)?.label || '',
      features: selectedFeatures.map(fId => ADDON_FEATURES.find(f => f.id === fId)?.label || ''),
      totalCost: calculation.total,
      estimatedWeeks: calculation.estimatedWeeks
    });
  };

  const handleCopySummary = () => {
    const summary = `Website Estimate Summary:
Type: ${calculation.project.name}
Pages: ${PAGE_OPTIONS.find(p => p.id === selectedPageOption)?.label}
Addons: ${selectedFeatures.map(f => ADDON_FEATURES.find(feat => feat.id === f)?.label).join(', ')}
Timeline: ${TIMELINE_SPEEDS.find(t => t.id === timelineSpeed)?.label}
Estimated Investment: ₹${calculation.total.toLocaleString('en-IN')} INR
Est. Delivery: ${calculation.estimatedWeeks}`;

    navigator.clipboard.writeText(summary);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-slate-900/90 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Interactive Website Price Calculator</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            Transparent Pricing, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-400">
              Zero Hidden Surprises.
            </span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Configure your custom website specifications below to get an instant, realistic budget 
            and delivery timeline estimate tailored to your exact business goals.
          </p>
        </Reveal>

        {/* Main Grid: Builder on Left, Realtime Summary Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <Reveal className="lg:col-span-7">
          <div className="space-y-8">
            
            {/* Step 1: Website Type */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-bold text-lg text-white">Select Website Type</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer relative ${
                        isSelected 
                          ? 'border-indigo-500 bg-indigo-950/40 shadow-md shadow-indigo-950/80 ring-1 ring-indigo-500' 
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl mb-1">{type.icon}</span>
                        {isSelected && <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs">✓</span>}
                      </div>
                      <div className="font-semibold text-sm text-white">{type.name}</div>
                      <div className="text-xs text-slate-400 mt-1 line-clamp-2">{type.desc}</div>
                      <div className="text-xs font-semibold text-cyan-400 mt-2 font-mono">
                        From ₹{type.basePrice.toLocaleString('en-IN')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Page Count */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-bold text-lg text-white">How many pages do you need?</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PAGE_OPTIONS.map((opt) => {
                  const isSelected = selectedPageOption === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedPageOption(opt.id)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-950/30 text-white ring-1 ring-cyan-500 font-semibold'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-medium">{opt.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {opt.cost === 0 ? 'Included' : `+₹${opt.cost.toLocaleString('en-IN')}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Features & Capabilities */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                  <h3 className="font-bold text-lg text-white">Select Features & Addons</h3>
                </div>
                <span className="text-xs text-slate-400">Multiple selection</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDON_FEATURES.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                        isChecked 
                          ? 'border-indigo-500/80 bg-indigo-950/30 text-white' 
                          : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{feature.icon}</span>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-slate-200">{feature.label}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-2 shrink-0">
                        <span className="text-xs font-mono text-cyan-400 font-medium">+₹{feature.cost.toLocaleString('en-IN')}</span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-indigo-600 text-white' : 'border border-slate-700'
                        }`}>
                          {isChecked && '✓'}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Delivery Timeline Speed */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="font-bold text-lg text-white">Delivery Timeline Priority</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINE_SPEEDS.map((timeline) => {
                  const isSelected = timelineSpeed === timeline.id;
                  return (
                    <button
                      key={timeline.id}
                      onClick={() => setTimelineSpeed(timeline.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-amber-500 bg-amber-950/20 text-white ring-1 ring-amber-500' 
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-semibold">{timeline.label}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{timeline.note}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
          </Reveal>

          {/* Sticky Summary Card Column */}
          <Reveal delay={180} className="lg:col-span-5">
          <div className="sticky top-24">
            <div className="rounded-2xl border-2 border-indigo-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-7 shadow-2xl shadow-indigo-950/80">
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-cyan-400">
                    Live Estimate Summary
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5">Project Scope Breakdown</h4>
                </div>
                <button
                  onClick={handleCopySummary}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800 border border-slate-700 cursor-pointer transition"
                  title="Copy breakdown to clipboard"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedNotification ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Price display banner */}
              <div className="my-6 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center relative overflow-hidden">
                <div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                  Estimated Investment
                </div>
                <div className="mt-1 flex items-baseline justify-center gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-indigo-300 font-display">
                    ₹{calculation.total.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">INR</span>
                </div>
                <div className="mt-2 text-xs text-emerald-400 flex items-center justify-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5" /> Estimated Delivery: <strong className="text-white">{calculation.estimatedWeeks}</strong>
                </div>
              </div>

              {/* Scope line items */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Core Website Model:</span>
                  <span className="font-semibold text-white">{calculation.project.name}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Page Volume:</span>
                  <span className="font-semibold text-white">
                    {PAGE_OPTIONS.find(p => p.id === selectedPageOption)?.label}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Selected Features ({selectedFeatures.length}):</span>
                  <span className="font-semibold text-cyan-300">+₹{calculation.featuresCost.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Speed Pace:</span>
                  <span className="font-semibold text-white">
                    {TIMELINE_SPEEDS.find(t => t.id === timelineSpeed)?.label}
                  </span>
                </div>
              </div>

              {/* Standard Inclusions Checklist */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Always Included At No Extra Cost:
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Mobile, Tablet & Desktop Responsive Layouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Clean modern code + 100% full intellectual property ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>SSL Certificate, Domain Setup & CDN Configuration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>30 Days of Free Post-Launch Warranty & Support</span>
                  </div>
                </div>
              </div>

              {/* Claim / Submit Button */}
              <div className="mt-7">
                <button
                  onClick={handleClaim}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Lock In This Estimate & Start Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  No obligation. We review your scope and follow up within 2 hours.
                </p>
              </div>

            </div>
          </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
