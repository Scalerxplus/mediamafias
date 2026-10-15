import * as React from "react";
import { Check, X, ShieldAlert, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ComplianceComparison = () => {
  const comparisonRows = [
    {
      feature: "Annual Venue Cost",
      traditional: "₹18,800 to ₹40,000+ per outlet/year",
      mediaMafias: "₹3,500 to ₹6,000 per outlet/year (Direct Subscription)",
    },
    {
      feature: "Legal & Police Risk",
      traditional: "Requires 3 separate licenses; Sec. 63 non-bailable risk if lapsed",
      mediaMafias: "100% Direct-IP Indemnified (Master + Publishing owned by Media Mafias)",
    },
    {
      feature: "Audio Experience",
      traditional: "Generic playlists; consumer Spotify/JioSaavn is illegal for business",
      mediaMafias: "24/7 AI Master Clock (Meditative Hospital BGM, Heritage Retail Folk, Custom AI Voice Ads)",
    },
    {
      feature: "OTT & Wedding Sync",
      traditional: "₹20,000–₹45,000/30s IPRS tariff + weeks of label clearance",
      mediaMafias: "One-Stop 24-Hour Clearance for UP/MP/Bihar OTT series & bespoke family wedding songs",
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0E0D12] border-b border-white/10 text-[#F5F5F0]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase text-sky-300 mb-4">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>COMMERCIAL COMPLIANCE &amp; SYNC LICENSING</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            Direct IP Licensing for Commercial Spaces, OTT Series &amp; Luxury Weddings
          </h2>
          <p className="font-mono text-sm sm:text-base text-neutral-400 max-w-3xl mx-auto">
            Traditional commercial background music exposes venues to criminal copyright liability and triple society fees. Here is how Media Mafias provides direct copyright indemnification.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-10">
          <div className="min-w-[700px] border border-white/15 rounded-2xl overflow-hidden shadow-2xl bg-[#141318]">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-white/[0.04] text-white font-display text-base sm:text-lg uppercase tracking-wider py-4 px-6 border-b border-white/15">
              <div className="col-span-3 font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest flex items-center">
                Feature
              </div>
              <div className="col-span-4 text-red-400 flex items-center gap-1.5 font-bold">
                <ShieldAlert className="w-4 h-4 shrink-0 text-red-400" />
                <span>Traditional (PPL + IPRS + Novex)</span>
              </div>
              <div className="col-span-5 text-amber-300 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Media Mafias × The Future Radio In-Store AI</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10">
              {comparisonRows.map((row, idx) => (
                <div 
                  key={idx}
                  className={`grid grid-cols-12 py-5 px-6 font-mono text-xs sm:text-sm items-center transition-colors ${
                    idx % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  }`}
                >
                  <div className="col-span-3 font-bold text-neutral-200 pr-4">
                    {row.feature}
                  </div>
                  
                  <div className="col-span-4 text-neutral-400 pr-4 flex items-start gap-2">
                    <span className="p-0.5 rounded bg-red-500/10 text-red-400 mt-0.5 shrink-0 border border-red-500/20">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="leading-snug">{row.traditional}</span>
                  </div>

                  <div className="col-span-5 text-amber-200 font-medium pl-3 flex items-start gap-2 bg-amber-500/5 -my-5 py-5 pr-3 border-l border-amber-500/20">
                    <span className="p-0.5 rounded bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0 border border-emerald-500/30">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="leading-snug">{row.mediaMafias}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-wide text-white mb-1">
              Save up to 85% on annual venue music fees today
            </h3>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-xl">
              100% direct IP ownership backed by ScalerX Lab statutory enterprise indemnity (UDYAM-MP-38-0052942).
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/licensing"
              className="bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase px-6 py-3.5 rounded-xl border border-amber-400 transition-all flex items-center gap-2 shadow-md"
            >
              <span>Explore Licensing Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20need%20PPL-IPRS%20exempt%20In-Store%20AI%20Radio%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-black font-mono font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)]"
            >
              WhatsApp Commercial Desk ➔
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
