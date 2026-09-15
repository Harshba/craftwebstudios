import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../data/agencyData';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onStartSimilar: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onStartSimilar }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl my-8 text-white max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image banner */}
        <div className="relative aspect-[21/9] sm:aspect-[2/1] overflow-hidden bg-slate-950 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">
              Case Study & Technical Breakdown
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {project.title}
            </h3>
            <p className="text-xs text-slate-300">Client: {project.client}</p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-3 gap-3">
            {project.results.map((res, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-display">
                  {res.metric}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">{res.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-2">
              The Challenge & Opportunity
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description} The client required a responsive, lightning-fast digital experience with sub-second page loads across both iOS/Android mobile screens and large high-resolution desktop displays.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Key Engineering & Design Solutions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Want similar results for your business?
            </span>
            <button
              onClick={() => {
                onClose();
                onStartSimilar(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm transition cursor-pointer shadow-lg"
            >
              <span>Build A Site Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
