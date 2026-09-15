import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Send, 
  CheckCircle, 
  CheckCircle2,
  Copy, 
  Clock, 
  FileText,
  User,
  Mail,
  Building,
  Globe,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';

export interface ProjectModalData {
  isOpen: boolean;
  initialType?: string;
  initialPlan?: string;
  initialPrice?: string;
  estimateDetails?: {
    projectType: string;
    pageCount: string;
    timeline: string;
    features: string[];
    totalCost: number;
    estimatedWeeks: string;
  } | null;
}

interface ProjectInquiryModalProps {
  data: ProjectModalData;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ data, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    websiteUrl: '',
    budget: data.initialPrice || (data.estimateDetails ? `₹${data.estimateDetails.totalCost.toLocaleString('en-IN')}` : '₹10,000 - ₹25,000'),
    message: data.estimateDetails 
      ? `Estimated Scope: ${data.estimateDetails.projectType} (${data.estimateDetails.pageCount}). Features: ${data.estimateDetails.features.join(', ')}. Est: ₹${data.estimateDetails.totalCost.toLocaleString('en-IN')}`
      : data.initialPlan 
        ? `Interested in ${data.initialPlan} plan (${data.initialPrice || ''}).` 
        : '',
    preferredContact: 'email'
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copied, setCopied] = useState(false);

  if (!data.isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'CW-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-white max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Title */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Start Your Custom Website Project
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                Tell Us About Your Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill out the brief below and our principal designer & lead engineer will reply with a detailed project proposal within 2 hours.
              </p>

              {/* Estimate Pill if present */}
              {data.estimateDetails && (
                <div className="mt-3 p-3 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400">Attached Scope: </span>
                    <strong className="text-cyan-300">{data.estimateDetails.projectType}</strong>
                  </div>
                  <span className="font-mono font-bold text-white bg-indigo-600/60 px-2 py-0.5 rounded">
                    Est. ₹{data.estimateDetails.totalCost.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" /> Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@yourcompany.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" /> Business / Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Morgan Aesthetics & Wellness"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-slate-400" /> Current Website (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://mysite.com (or New Site)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-slate-400" /> Target Budget Window (INR ₹)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="₹7,999 - ₹15,000">₹7,999 – ₹15,000 (Starter Launchpad / Landing Page)</option>
                  <option value="₹15,000 - ₹30,000">₹15,000 – ₹30,000 (Growth Business Website)</option>
                  <option value="₹30,000 - ₹60,000">₹30,000 – ₹60,000 (Full E-Commerce / Custom Store)</option>
                  <option value="₹60,000+">₹60,000+ (Enterprise Portal / Custom Web App)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-slate-400" /> What are your primary goals for this website?
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. We need a modern, responsive website that explains our services, allows clients to book calls, and replaces our slow WordPress template."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Brief & Lock In Schedule</span>
                </button>

                <div className="flex items-center justify-center gap-3 pt-1">
                  <a
                    href="https://wa.me/917088686900?text=Hi%2C%20I%20am%20interested%20in%20creating%20a%20responsive%20website%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    💬 Or WhatsApp Us Directly: +91 7088686900
                  </a>
                </div>

                <p className="text-[11px] text-center text-slate-500 mt-1">
                  🔒 We protect your privacy. Zero spam, NDA available upon request.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Project Brief Received!
            </h3>
            
            <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our lead web architect is reviewing your specifications right now.
            </p>

            {/* Reference Badge */}
            <div className="my-6 p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Reference ID</span>
                <span className="text-base font-mono font-bold text-cyan-400">{bookingRef}</span>
              </div>
              <button
                onClick={handleCopyRef}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 transition"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Next Steps list */}
            <div className="max-w-md mx-auto text-left space-y-2 text-xs text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confirmation email sent to {formData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Personalized proposal & timeline returned within 2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Optional 15-minute video walkthrough link included</span>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition cursor-pointer"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
