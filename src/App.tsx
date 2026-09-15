import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResponsiveShowcase } from './components/ResponsiveShowcase';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PricingPlans } from './components/PricingPlans';
import { WebsiteAuditWidget } from './components/WebsiteAuditWidget';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProjectInquiryModal, ProjectModalData } from './components/ProjectInquiryModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ScrollProgress } from './components/ScrollProgress';
import { PortfolioProject } from './data/agencyData';

export function App() {
  const [projectModal, setProjectModal] = useState<ProjectModalData>({
    isOpen: false
  });

  const [activeCaseStudy, setActiveCaseStudy] = useState<PortfolioProject | null>(null);

  // Handlers for modal actions
  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setProjectModal({ isOpen: true });
    }
  };

  const handleOpenConsultation = () => {
    setProjectModal({
      isOpen: true,
      initialType: 'Custom Business Website'
    });
  };

  const handleOpenAudit = () => {
    const el = document.getElementById('audit-tool');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClaimEstimate = (estimateDetails: any) => {
    setProjectModal({
      isOpen: true,
      estimateDetails
    });
  };

  const handleSelectTemplate = (templateName: string) => {
    setProjectModal({
      isOpen: true,
      initialType: `Style inspired by ${templateName}`
    });
  };

  const handleSelectService = (serviceName: string) => {
    setProjectModal({
      isOpen: true,
      initialType: serviceName
    });
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setProjectModal({
      isOpen: true,
      initialPlan: planName,
      initialPrice: price
    });
  };

  const handleRequestFullAudit = (url: string, email: string) => {
    setProjectModal({
      isOpen: true,
      initialType: `Website Audit for ${url} (${email})`
    });
  };

  const trustedBrands = [
    'VELOUR', 'AURORA PAY', 'VANGUARD LLP', 'KINETIX', 'PULSEFLOW', 'SOLEIL BISTRO', 'MAISON LUXE', 'AURA DENTAL'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Live scroll progress indicator */}
      <ScrollProgress />

      {/* Top Navbar */}
      <Navbar 
        onOpenEstimator={handleOpenEstimator}
        onOpenConsultation={handleOpenConsultation}
        onOpenAudit={handleOpenAudit}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with interactive responsive simulator */}
        <Hero 
          onOpenEstimator={handleOpenEstimator}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Client trust logo strip — infinite marquee */}
        <div className="border-y border-slate-800/80 bg-slate-950/70 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs uppercase tracking-widest font-semibold text-slate-500 mb-6">
              Engineering High-Performing Web Experiences for Brands Across India & Worldwide
            </p>

            <div className="relative overflow-hidden">
              {/* Edge fade masks */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

              <div className="flex w-max animate-marquee">
                {[...trustedBrands, ...trustedBrands].map((brand, idx) => (
                  <span
                    key={idx}
                    className="mx-6 sm:mx-10 text-slate-500 hover:text-cyan-300 transition-colors duration-300 font-display font-bold text-lg sm:text-xl whitespace-nowrap cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Templates & Responsive Showcase */}
        <ResponsiveShowcase onSelectTemplate={handleSelectTemplate} />

        {/* Interactive Scope & Price Estimator Calculator */}
        <InteractiveEstimator onClaimEstimate={handleClaimEstimate} />

        {/* Core Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Real Work Portfolio Case Studies */}
        <Portfolio onSelectProject={(p) => setActiveCaseStudy(p)} />

        {/* Step-by-step Proven Process */}
        <ProcessTimeline onStartProject={handleOpenConsultation} />

        {/* Transparent Pricing Packages & Ongoing Retainers */}
        <PricingPlans onSelectPlan={handleSelectPlan} />

        {/* Free Instant Website Audit Diagnostic Tool */}
        <WebsiteAuditWidget onRequestFullAudit={handleRequestFullAudit} />

        {/* Verified Client Testimonials & Social Proof */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenEstimator={handleOpenEstimator}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Floating Sticky WhatsApp & Quick Call Action Bar for instant conversion */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/917088686900?text=Hi%2C%20I%20visited%20your%20website%20and%20want%20to%20get%20a%20website%20made%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-500/60 transform hover:-translate-y-1 transition-all cursor-pointer animate-pulse-ring"
          title="Chat on WhatsApp"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
          <span>Chat on WhatsApp</span>
        </a>

        <a
          href="https://harshjmit.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-cyan-300 hover:text-white backdrop-blur-md shadow-lg transition"
        >
          <span>Built by Harsh</span>
          <span className="text-[10px] text-cyan-400 font-semibold underline">Portfolio ↗</span>
        </a>
      </div>

      {/* Interactive Inquiries & Proposal Kickoff Modal */}
      <ProjectInquiryModal
        data={projectModal}
        onClose={() => setProjectModal({ isOpen: false })}
      />

      {/* Deep-dive Case Study Details Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartSimilar={(projName) => {
          setProjectModal({
            isOpen: true,
            initialType: `Similar to ${projName}`
          });
        }}
      />
    </div>
  );
}

export default App;
