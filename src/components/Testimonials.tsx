import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/agencyData';
import { Reveal } from './Reveal';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Proven Client Results</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            Loved By Ambitious Founders, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400">
              Trusted By Growing Businesses.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            See how custom responsive design and high-performance engineering changed the bottom line for our clients.
          </p>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_REVIEWS.map((review, idx) => (
            <Reveal key={idx} delay={idx * 130} className="h-full">
            <div
              className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl h-full hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-950/50"
            >
              <div>
                {/* Stars and verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Verified Project
                  </span>
                </div>

                {/* Highlight metric badge */}
                <div className="mb-4 inline-block px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs font-semibold text-cyan-300">
                  ⚡ {review.highlight}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-400">{review.role}, {review.company}</p>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <Reveal delay={200}>
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <span className="font-medium text-slate-300">Top Web Agency 2025/2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="font-medium text-slate-300">Google Core Web Vitals Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🔒</span>
            <span className="font-medium text-slate-300">100% GDPR & WCAG Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐️</span>
            <span className="font-medium text-slate-300">4.9 / 5 on Clutch & Trustpilot</span>
          </div>
        </div>
        </Reveal>

      </div>
    </section>
  );
};
