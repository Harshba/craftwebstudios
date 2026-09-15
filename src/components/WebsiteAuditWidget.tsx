import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AuditWidgetProps {
  onRequestFullAudit: (url: string, email: string) => void;
}

export const WebsiteAuditWidget: React.FC<AuditWidgetProps> = ({ onRequestFullAudit }) => {
  const [urlInput, setUrlInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    url: string;
    overallScore: number;
    mobileScore: number;
    speedScore: number;
    seoScore: number;
    conversionScore: number;
    findings: { text: string; status: 'good' | 'warning' | 'urgent' }[];
  } | null>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsAnalyzing(true);
    setAuditResult(null);

    // Simulate real analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setAuditResult({
        url: urlInput.replace(/^https?:\/\//, ''),
        overallScore: 68,
        mobileScore: 62,
        speedScore: 54,
        seoScore: 78,
        conversionScore: 65,
        findings: [
          { text: 'Mobile tap targets too small; potential thumb reach issues on iOS/Android.', status: 'urgent' },
          { text: 'Images not served in modern WebP/AVIF formats, slowing mobile LCP time.', status: 'urgent' },
          { text: 'Missing Schema.org local business structured data for Google Maps rich snippets.', status: 'warning' },
          { text: 'SSL encryption certificate is valid and working.', status: 'good' },
          { text: 'Call to action button contrasts below WCAG AA recommended ratio.', status: 'warning' },
        ]
      });
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    }, 1500);
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    onRequestFullAudit(urlInput || 'mysite.com', emailInput);
    setEmailInput('');
  };

  return (
    <section id="audit-tool" className="py-20 bg-slate-900/70 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-7 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Background subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Free Instant Analysis</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Is Your Current Website Costing You Customers?
            </h3>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Enter your current domain or your competitor’s link to run a complimentary 5-point performance, responsiveness, and conversion check.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRunAudit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="e.g. yourcompany.com or brandidea.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Analyzing Site...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-cyan-200" />
                    <span>Run Free Audit</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Audit Results Container */}
          {auditResult && (
            <div className="mt-10 pt-8 border-t border-slate-800 animate-in fade-in duration-500">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Audit Report for</span>
                  <h4 className="text-lg font-bold text-white font-mono">{auditResult.url}</h4>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  <span>Current Overall Health Score:</span>
                  <span className="font-bold text-base">{auditResult.overallScore}/100</span>
                </div>
              </div>

              {/* Metric meters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <Smartphone className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                  <div className="text-xl font-bold text-amber-400 font-mono">{auditResult.mobileScore}%</div>
                  <div className="text-[11px] text-slate-400">Mobile UX</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <Zap className="w-4 h-4 text-rose-400 mx-auto mb-1" />
                  <div className="text-xl font-bold text-rose-400 font-mono">{auditResult.speedScore}%</div>
                  <div className="text-[11px] text-slate-400">Load Speed</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <div className="text-xl font-bold text-emerald-400 font-mono">{auditResult.seoScore}%</div>
                  <div className="text-[11px] text-slate-400">SEO Schema</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <Sparkles className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <div className="text-xl font-bold text-cyan-400 font-mono">{auditResult.conversionScore}%</div>
                  <div className="text-[11px] text-slate-400">Conversion CRO</div>
                </div>
              </div>

              {/* Key Diagnostic Observations */}
              <div className="space-y-2.5 mb-8">
                {auditResult.findings.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm"
                  >
                    {item.status === 'good' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    ) : (
                      <AlertTriangle className={`w-4 h-4 mt-0.5 shrink-0 ${item.status === 'urgent' ? 'text-rose-400' : 'text-amber-400'}`} />
                    )}
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Free Video Walkthrough CTA */}
              <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-bold text-white text-sm">Want our senior developers to fix this?</h5>
                  <p className="text-xs text-slate-300 mt-0.5">
                    We'll record a personalized 5-minute Loom video audit showing exactly how a rebuild will double your inquiries.
                  </p>
                </div>

                <form onSubmit={handleSubmitReport} className="flex gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your work email"
                    className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 w-full sm:w-56"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs whitespace-nowrap transition cursor-pointer"
                  >
                    Send Video Audit
                  </button>
                </form>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
