import React, { useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  CheckCircle,
  Eye
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/agencyData';
import { Reveal } from './Reveal';

interface PortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'saas' | 'ecommerce' | 'corporate' | 'local'>('all');

  const filteredProjects = filter === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
              Recent Websites We Built <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-400">
                That Generate Measurable ROI.
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-xl">
              Explore our recent work across e-commerce, tech platforms, and high-growth businesses. Every website is engineered for speed, mobile responsiveness, and high conversion.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'saas', label: 'SaaS & Tech' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'corporate', label: 'Corporate' },
              { id: 'local', label: 'Local Business' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 110} className="h-full">
            <div
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-950/50"
            >
              {/* Image Preview with Hover Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Client Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-white">
                    {project.client}
                  </span>
                </div>

                {/* Quick Results Pills on bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.results.map((res, idx) => (
                    <div 
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 backdrop-blur-md flex items-center gap-1.5 text-xs font-medium text-white shadow-lg"
                    >
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-bold text-cyan-300">{res.metric}</span>
                      <span className="text-slate-400 text-[11px]">{res.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details & Copy */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags and CTA */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 text-[11px] font-mono border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 text-xs font-semibold transition cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>
                </div>
              </div>

            </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
