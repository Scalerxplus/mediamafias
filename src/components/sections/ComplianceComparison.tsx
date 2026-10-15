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
    <section className="py-20 px-6 bg-white border-b-4 border-black text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF] border-2 border-black px-4 py-1.5 rounded-full font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] mb-4">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>COMMERCIAL COMPLIANCE &amp; SYNC LICENSING</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-black mb-3">
            Direct IP Licensing for Commercial Spaces, OTT Series &amp; Luxury Weddings
          </h2>
          <p className="font-mono text-sm sm:text-base text-neutral-800 max-w-3xl mx-auto">
            Traditional commercial background music exposes venues to criminal copyright liability and triple society fees. Here is how Media Mafias provides direct copyright indemnification.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-10">
          <div className="min-w-[700px] border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_#000] bg-white">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-black text-white font-display text-lg uppercase tracking-wider py-4 px-6 border-b-4 border-black">
              <div className="col-span-3 font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest flex items-center">
                Feature
              </div>
              <div className="col-span-4 text-red-400 flex items-center gap-1.5 font-black">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <span>Traditional (PPL + IPRS + Novex)</span>
              </div>
              <div className="col-span-5 text-[#E5FF00] flex items-center gap-1.5 font-black">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Media Mafias × The Future Radio In-Store AI</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y-2 divide-black">
              {comparisonRows.map((row, idx) => (
                <div 
                  key={idx}
                  className={`grid grid-cols-12 py-5 px-6 font-mono text-xs sm:text-sm items-center transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-neutral-50"
                  }`}
                >
                  <div className="col-span-3 font-black text-neutral-900 pr-4">
                    {row.feature}
                  </div>
                  
                  <div className="col-span-4 text-neutral-800 pr-4 flex items-start gap-2">
                    <span className="p-0.5 rounded bg-red-100 text-red-700 mt-0.5 shrink-0">
                      <X className="w-4 h-4 stroke-[3]" />
                    </span>
                    <span className="leading-snug">{row.traditional}</span>
                  </div>

                  <div className="col-span-5 text-black font-bold pl-3 flex items-start gap-2 bg-[#E5FF00]/15 -my-5 py-5 pr-3">
                    <span className="p-0.5 rounded bg-green-500 text-black mt-0.5 shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                    <span className="leading-snug">{row.mediaMafias}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-[#FED7AA] border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-black mb-1">
              Save up to 85% on annual venue music fees today
            </h3>
            <p className="font-mono text-xs sm:text-sm text-neutral-800 max-w-xl">
              100% direct IP ownership backed by ScalerX Lab statutory enterprise indemnity (UDYAM-MP-38-0052942).
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/licensing"
              className="bg-black hover:bg-[#E5FF00] hover:text-black text-white font-mono font-black text-xs uppercase px-6 py-3.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] transition-all flex items-center gap-2"
            >
              <span>Explore Licensing Plans</span>
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
