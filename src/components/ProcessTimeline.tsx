import React from 'react';
import { 
  Compass, 
  Layout, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Reveal } from './Reveal';

interface ProcessTimelineProps {
  onStartProject: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onStartProject }) => {
  const steps = [
    {
      step: '01',
      title: 'Strategy & Blueprint Discovery',
      duration: 'Days 1–3',
      icon: Compass,
      desc: 'We analyze your target audience, study your top competitors, and map out a high-converting wireframe architecture designed to turn clicks into sales.',
      highlights: ['Competitor benchmark audit', 'Site map & conversion funnel', 'Brand aesthetic moodboard']
    },
    {
      step: '02',
      title: 'Interactive UI/UX Design',
      duration: 'Days 4–8',
      icon: Layout,
      desc: 'You receive clickable Figma prototypes where you can experience the look, feel, typography, and interactive components before writing a single line of code.',
      highlights: ['Pixel-perfect desktop & mobile designs', 'Interactive prototyping', 'Unlimited revision rounds']
    },
    {
      step: '03',
      title: 'Mobile-First Clean Engineering',
      duration: 'Days 9–16',
      icon: Code2,
      desc: 'We bring designs to life using modern React, Next.js, and Tailwind CSS. Zero slow plugins, zero bloated code—only pure, high-performance web engineering.',
      highlights: ['Responsive CSS Grid & Flexbox', 'Headless CMS integration', 'Smooth micro-interactions']
    },
    {
      step: '04',
      title: 'Performance, SEO & Rigorous QA',
      duration: 'Days 17–19',
      icon: ShieldCheck,
      desc: 'We stress-test across 25+ real devices (iPhones, Androids, iPads, 4K monitors), verify all forms and Stripe checkouts, and fine-tune Core Web Vitals to a 95+ score.',
      highlights: ['95+ PageSpeed guaranteed', 'Technical schema & metadata', 'Cross-browser compatibility']
    },
    {
      step: '05',
      title: 'Launch & 30-Day Growth Warranty',
      duration: 'Day 20+',
      icon: Rocket,
      desc: 'Zero downtime launch switch. We handle DNS, SSL certification, domain wiring, Google Search Console indexing, and provide 30 days of complimentary support.',
      highlights: ['Zero-downtime domain rollout', 'Recorded CMS video training', '30-day bug-free warranty']
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-900/40 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Smooth, Transparent Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            From Initial Idea to Live Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">
              In 5 Predictable Steps.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            No radio silence. No technical jargon. You get a dedicated project dashboard, weekly screen recordings, and clear delivery timelines.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 100} className="h-full">
              <div 
                className="relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/40 hover:-translate-y-1.5 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-display text-indigo-500/60 font-mono">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/20">
                      {item.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold text-base text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <Reveal delay={150}>
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-950/80 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-indigo-500/60 transition-colors duration-300">
          <div>
            <h4 className="text-xl font-bold text-white">Ready to begin your website project?</h4>
            <p className="text-sm text-slate-400 mt-1">
              Lock in your production slot today. We only take 4 new website builds per month to maintain elite quality.
            </p>
          </div>
          <button
            onClick={onStartProject}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 animate-gradient-x hover:from-indigo-500 hover:to-cyan-400 font-bold text-white shadow-lg cursor-pointer transition transform hover:-translate-y-0.5 hover:scale-[1.03]"
          >
            <span>Reserve Your Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        </Reveal>

      </div>
    </section>
  );
};
