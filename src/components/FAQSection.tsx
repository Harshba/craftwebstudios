import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { AGENCY_FAQS } from '../data/agencyData';
import { Reveal } from './Reveal';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900/40 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-slate-400 text-base">
            Everything you need to know about our custom website design, responsive code, and delivery process.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {AGENCY_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 80}>
              <div
                className={`rounded-2xl border bg-slate-950/70 overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-indigo-500/60 shadow-lg shadow-indigo-950/50' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-indigo-600 text-white' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
