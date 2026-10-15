import * as React from "react";
import { Check, X, ShieldAlert, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ComplianceComparison = () => {
  const comparisonRows = [
    {
      feature: "Annual Licensing Cost",
      traditional: "₹18,800 – ₹40,000+ per year (per location)",
      traditionalBad: true,
      mediaMafias: "₹3,500 – ₹6,000 per year (flat commercial rate)",
      mediaMafiasGood: true
    },
    {
      feature: "Collection Societies Demands",
      traditional: "3 separate licenses required: PPL + IPRS + Novex",
      traditionalBad: true,
      mediaMafias: "0 licenses needed. 100% Direct IP Ownership",
      mediaMafiasGood: true
    },
    {
      feature: "Section 63 Risk (Criminal Copyright)",
      traditional: "Constant threat of surprise raids, FIRs & legal notices",
      traditionalBad: true,
      mediaMafias: "Zero risk. 100% pre-cleared direct creator catalog",
      mediaMafiasGood: true
    },
    {
      feature: "Statutory Legal Indemnity",
      traditional: "No indemnity. Venue owner held strictly liable",
      traditionalBad: true,
      mediaMafias: "Full indemnity certificate from ScalerX Lab (UDYAM-MP-38-0052942)",
      mediaMafiasGood: true
    },
    {
      feature: "Acoustic Curation & Dayparting",
      traditional: "Static pendrives or repetitive radio loops with ads",
      traditionalBad: true,
      mediaMafias: "24/7 AI Master Clock (The Future Radio) dynamic dayparting",
      mediaMafiasGood: true
    },
    {
      feature: "Setup & Activation",
      traditional: "3–6 weeks bureaucratic society paperwork",
      traditionalBad: true,
      mediaMafias: "Instant activation via Web App or plug-and-play stream",
      mediaMafiasGood: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-white border-b-4 border-black text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#00E5FF] border-3 border-black px-4 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] mb-4">
            SECTION 4 • B2B COMPLIANCE & SAVINGS
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-black mb-3">
            B2B Commercial Audio: Cost & Compliance
          </h2>
          <p className="font-mono text-sm sm:text-base text-neutral-800 max-w-3xl mx-auto">
            Traditional Indian commercial background audio exposes your business to triple collection society fees and criminal copyright liability under Section 63. Here is how Media Mafias eliminates both.
          </p>
        </div>

        {/* Responsive Comparison Table Container */}
        <div className="overflow-x-auto mb-10">
          <div className="min-w-[650px] border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_#000] bg-white">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-black text-white font-display text-lg uppercase tracking-wider py-4 px-6 border-b-4 border-black">
              <div className="col-span-4 font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest flex items-center">
                Compliance Criteria
              </div>
              <div className="col-span-4 text-red-400 flex items-center gap-1.5 font-black">
                <ShieldAlert className="w-5 h-5" />
                <span>Traditional (PPL/IPRS)</span>
              </div>
              <div className="col-span-4 text-[#E5FF00] flex items-center gap-1.5 font-black">
                <ShieldCheck className="w-5 h-5" />
                <span>Media Mafias × Future Radio</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y-2 divide-black">
              {comparisonRows.map((row, idx) => (
                <div 
                  key={idx}
                  className={`grid grid-cols-12 py-4 px-6 font-mono text-xs sm:text-sm items-center transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-neutral-50"
                  }`}
                >
                  <div className="col-span-4 font-black text-neutral-900 pr-4">
                    {row.feature}
                  </div>
                  
                  <div className="col-span-4 text-neutral-800 pr-4 flex items-start gap-2">
                    <span className="p-0.5 rounded bg-red-100 text-red-700 mt-0.5 shrink-0">
                      <X className="w-4 h-4 stroke-[3]" />
                    </span>
                    <span>{row.traditional}</span>
                  </div>

                  <div className="col-span-4 text-black font-bold pl-2 flex items-start gap-2 bg-[#E5FF00]/15 -my-4 py-4 pr-2">
                    <span className="p-0.5 rounded bg-green-500 text-black mt-0.5 shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                    <span>{row.mediaMafias}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-[#FED7AA] border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-black mb-1">
              Ready to eliminate PPL/IPRS risk for your premises?
            </h3>
            <p className="font-mono text-xs sm:text-sm text-neutral-800 max-w-xl">
              Get an instant quotation and free 7-day trial stream for retail chains, cafes, luxury resorts, and hospitals.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/licensing"
              className="bg-black hover:bg-[#E5FF00] hover:text-black text-white font-mono font-black text-xs uppercase px-6 py-3.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] transition-all flex items-center gap-2"
            >
              <span>View Licensing Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20need%20PPL-IPRS%20exempt%20In-Store%20AI%20Radio%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black font-mono font-black text-xs uppercase px-6 py-3.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] transition-all"
            >
              WhatsApp Commercial Desk ➔
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
