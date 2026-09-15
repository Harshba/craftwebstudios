import React from 'react';
import { 
  Palette, 
  Code2, 
  ShoppingBag, 
  Zap, 
  Search, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Reveal } from './Reveal';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'ui-ux',
      icon: Palette,
      title: 'Bespoke UI/UX & Responsive Design',
      tagline: 'Interfaces that captivate and convert',
      description: 'We craft unique, brand-aligned visual designs that reflect your premium positioning. Every layout is mathematically structured for effortless readability and seamless responsive fluidity.',
      deliverables: [
        'Custom interactive Figma prototypes',
        'Mobile-first responsive layout adaptation',
        'Design system & reusable component tokens',
        'Accessibility (WCAG 2.1 AA) standard compliance',
        'Conversion-focused visual hierarchy'
      ],
      badge: 'Design First'
    },
    {
      id: 'fullstack',
      icon: Code2,
      title: 'Custom Web & Frontend Engineering',
      tagline: 'Modern, clean, and blazingly fast code',
      description: 'Built with the modern stack of React, Next.js, TypeScript, and Tailwind CSS. We deliver clean, modular code with zero bloat, enterprise-grade security, and extreme maintainability.',
      deliverables: [
        'Component-driven architecture in React/Next.js',
        'Dynamic CMS integration (Sanity, Strapi, WordPress API)',
        'Serverless API integrations & webhook routing',
        'Interactive forms with spam protection & CRM sync',
        'Full GitHub repository handoff'
      ],
      badge: 'Zero Bloat'
    },
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: 'E-Commerce & High-Converting Stores',
      tagline: 'Engineered to maximize Average Order Value',
      description: 'Turn window shoppers into lifelong brand advocates. We build custom DTC shopping experiences with friction-free one-page checkouts, subscription mechanics, and fast payment gateways.',
      deliverables: [
        'Shopify Plus & headless commerce engineering',
        'Stripe, Apple Pay, Google Pay & Klarna integration',
        'Dynamic product filters, variants & search',
        'Abandoned cart recovery & automated post-purchase emails',
        'Inventory & ERP synchronization'
      ],
      badge: 'High Conversion'
    },
    {
      id: 'speed-modernization',
      icon: Zap,
      title: 'Speed & Core Web Vitals Optimization',
      tagline: 'Sub-second load times that keep visitors engaged',
      description: 'Every 100ms delay costs 7% in sales. We audit, refactor, and tune websites to load in under 1 second, boosting both search engine rankings and visitor retention.',
      deliverables: [
        'Guaranteed 95+ Google PageSpeed mobile score',
        'Next-gen image optimization (AVIF/WebP) with CDN delivery',
        'JavaScript bundle minimization & critical CSS inlining',
        'Edge caching via Cloudflare / Vercel',
        'Before & after performance benchmarking report'
      ],
      badge: 'Under 1s Load'
    },
    {
      id: 'seo-growth',
      icon: Search,
      title: 'Technical SEO & Conversion Architecture',
      tagline: 'Rank higher on Google and turn traffic into revenue',
      description: 'A beautiful website is useless if no one finds it. We build every site with rigorous technical on-page SEO foundations, schema markup, and high-converting CTA placement.',
      deliverables: [
        'JSON-LD Structured Schema markup for Rich Snippets',
        'Dynamic XML sitemaps and automated robots.txt routing',
        'Social sharing OpenGraph cards & Twitter preview cards',
        'Google Analytics 4 & Google Tag Manager setup',
        'Heatmap & user journey tracking readiness'
      ],
      badge: 'Rank #1'
    },
    {
      id: 'care-maintenance',
      icon: ShieldCheck,
      title: 'Managed Care & Continuous Growth Retainers',
      tagline: 'Never worry about updates, bugs, or downtime again',
      description: 'Your digital business never sleeps. We provide proactive monthly monitoring, regular security patches, offsite automated backups, and priority developer hours for feature updates.',
      deliverables: [
        '24/7 uptime & automated performance monitoring',
        'Daily off-site automated cloud backups',
        'Continuous security updates & vulnerability patches',
        'Dedicated monthly developer & designer hours',
        'Direct Slack/WhatsApp VIP channel access'
      ],
      badge: '24/7 Peace of Mind'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-900/50 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>End-to-End Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            Everything Your Business Needs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">
              To Dominate Online.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            We don't use cookie-cutter site builders. We engineer high-performance web products that 
            establish market credibility, drive qualified inbound inquiries, and scale with your business.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 90} className="h-full">
              <div 
                className="group p-7 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/50 hover:-translate-y-1.5 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600/30 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/80">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-indigo-400 mt-1">
                    {service.tagline}
                  </p>

                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">What You Receive:</p>
                    {service.deliverables.slice(0, 4).map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-800 hover:border-indigo-500 transition-all cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
