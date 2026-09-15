import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock
} from 'lucide-react';
import { Reveal } from './Reveal';

interface PricingProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const PricingPlans: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'build' | 'care'>('build');

  const buildPackages = [
    {
      id: 'starter',
      name: 'Starter Launchpad',
      price: '₹7,999',
      period: 'one-time investment',
      desc: 'Perfect for new ventures, landing pages, and solo professionals needing a polished modern presence.',
      popular: false,
      timeline: '5–7 days turnaround',
      features: [
        'Up to 3 Custom Responsive Pages',
        'Mobile, Tablet & Desktop Layouts',
        'WhatsApp Chat & Call Integration',
        'Lead Capture Contact Form with Instant Email Alerts',
        'Technical On-Page Google SEO Setup',
        '95+ Google PageSpeed Guarantee',
        'Domain & SSL Setup Assistance',
        '14 Days Free Post-Launch Support',
        '100% Full Code Ownership'
      ],
      cta: 'Choose Starter'
    },
    {
      id: 'growth',
      name: 'Growth Business',
      price: '₹14,999',
      period: 'one-time investment',
      desc: 'Our most popular package for clinics, local businesses, services, and companies looking to generate steady leads.',
      popular: true,
      timeline: '1–2 weeks turnaround',
      features: [
        'Up to 8 Bespoke Custom Pages',
        'User-Friendly CMS (Edit content yourself without code)',
        'Online Booking / WhatsApp Appointment Sync',
        'Interactive Animations & Modern Glassmorphism UI',
        'Google Maps & Local Search Schema Optimization',
        'Sub-second Mobile Performance Tuning',
        'Google Analytics 4 & Meta Pixel Setup',
        '30 Days Free Priority Support & Training Video',
        '100% Full Code & Design Ownership'
      ],
      cta: 'Choose Growth Business'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce & Scale',
      price: '₹24,999',
      period: 'one-time investment',
      desc: 'Complete online retail store engineered for high conversion rates and seamless UPI & card payments.',
      popular: false,
      timeline: '2–3 weeks turnaround',
      features: [
        'Custom E-Commerce Store or Shopify Setup',
        'Up to 30 Initial Products Catalog Setup',
        'UPI, Google Pay, PhonePe, Paytm, Razorpay & Cards',
        'Dynamic Product Filtering & Search Engine',
        'WhatsApp Order Notifications & Abandoned Cart Recovery',
        'Customer Reviews & Rating System',
        'GST Invoice Generation Integration',
        '45 Days Free VIP Warranty & Support',
        'Dedicated Senior Engineer Lead'
      ],
      cta: 'Choose E-Commerce'
    }
  ];

  const carePackages = [
    {
      id: 'essential-care',
      name: 'Essential Site Care',
      price: '₹1,999',
      period: '/ month',
      desc: 'Routine security, daily backups, and bug fixes to ensure your website runs smoothly 24/7.',
      popular: false,
      timeline: 'Continuous peace of mind',
      features: [
        '24/7 Uptime & Performance Monitoring',
        'Daily Automated Cloud Backups',
        'Security Patches & Core CMS Updates',
        'Monthly Content & Image Updates',
        'Quarterly Speed & Google SEO Checkup',
        'Emergency 24-hr bug fix turnaround'
      ],
      cta: 'Get Essential Care'
    },
    {
      id: 'growth-care',
      name: 'Growth & Development Retainer',
      price: '₹4,999',
      period: '/ month',
      desc: 'Dedicated developer and designer hours every month to continuously add new pages and features.',
      popular: true,
      timeline: 'Active website expansion',
      features: [
        'Everything in Essential Care',
        'Dedicated Dev & Design Support each month',
        'New Promotional Landing Pages & Festival Banners',
        'Monthly Conversion Rate & Traffic Analytics Report',
        'Priority WhatsApp Direct Support (7088686900)',
        'Continuous Speed Fine-Tuning'
      ],
      cta: 'Get Growth Retainer'
    },
    {
      id: 'vip-scale',
      name: 'VIP Dedicated Partner',
      price: '₹9,999',
      period: '/ month',
      desc: 'Your on-demand web agency team for high-traffic companies requiring continuous updates.',
      popular: false,
      timeline: 'Full dedicated coverage',
      features: [
        'Comprehensive Dev & Design Hours monthly',
        'Sub-2-Hour Urgent Response SLA',
        'Full Tech SEO Maintenance & Blog Uploads',
        'Custom Feature Sprints & Payment Integrations',
        'Direct Call/WhatsApp with Lead Engineer',
        'Complete Server & Domain Management'
      ],
      cta: 'Get VIP Partner'
    }
  ];

  const currentList = billingCycle === 'build' ? buildPackages : carePackages;

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Investment Plans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            Predictable Pricing, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-400">
              Maximum Return on Investment.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Choose a fixed-price package for a brand new website or an ongoing care retainer to keep your digital storefront pristine.
          </p>

          {/* Switcher Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setBillingCycle('build')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                billingCycle === 'build'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              New Website Builds (Fixed Price)
            </button>
            <button
              onClick={() => setBillingCycle('care')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer ${
                billingCycle === 'care'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ongoing Care & Maintenance
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {currentList.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 120} className="h-full">
            <div
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full ${
                tier.popular 
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-indigo-500 shadow-2xl shadow-indigo-950 scale-100 md:-translate-y-2 hover:md:-translate-y-3' 
                  : 'bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 hover:-translate-y-1.5'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="block whitespace-nowrap px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider shadow-lg shadow-indigo-600/40">
                    Most Popular Choice
                  </span>
                </div>
              )}

              <div className={tier.popular ? 'pt-2' : ''}>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{tier.desc}</p>

                <div className="my-6 pb-6 border-b border-slate-800">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display leading-none break-words">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-400 font-mono whitespace-nowrap">{tier.period}</span>
                  </div>
                  <div className="mt-2 text-xs text-cyan-400 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tier.timeline}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Features Included:</p>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={() => onSelectPlan(tier.name, tier.price)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/30 hover:from-indigo-500 hover:to-cyan-400'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
            </Reveal>
          ))}
        </div>

        {/* Custom enterprise note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-400">
          Need a multi-brand portal, custom SaaS app, or have a specific RFP requirement?{' '}
          <button
            onClick={() => onSelectPlan('Custom Enterprise Scope', 'Custom Quote')}
            className="text-cyan-400 hover:underline font-semibold cursor-pointer"
          >
            Contact us for a Custom Enterprise Scope →
          </button>
        </div>

      </div>
    </section>
  );
};
