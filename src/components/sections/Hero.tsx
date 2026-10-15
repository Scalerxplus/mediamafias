"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Building2, ShieldCheck, ArrowRight, Play, Radio } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 bg-[#C4B5FD] text-black border-b-4 border-black overflow-hidden flex flex-col items-center text-center">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-4 border-black px-6 py-2 rounded-full shadow-[6px_6px_0px_0px_#000] mb-8 transform -rotate-1">
          <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping mr-1"></span>
          <span className="font-black text-black uppercase tracking-widest text-xs sm:text-sm">
            INDO-GANGETIC VERNACULAR AUDIO ECOSYSTEM
          </span>
        </div>

        {/* Big 3D Stroked Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black leading-[1.0] tracking-tight uppercase mb-6 max-w-5xl">
          <span className="block text-[#FF69B4] [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:4px_black] [text-shadow:5px_5px_0px_#000] md:[text-shadow:8px_8px_0px_#000] mb-2">
            MEDIA MAFIAS
          </span>
          <span className="block text-black text-3xl sm:text-5xl lg:text-6xl tracking-wider">
            HIGH-FIDELITY REGIONAL FOLK MUSIC
          </span>
        </h1>

        {/* #entity-summary Paragraph for AI, GEO, and Voice Search Crawlers */}
        <div className="w-full max-w-4xl bg-white border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] mb-12 text-left sm:text-center">
          <p id="entity-summary" className="text-base sm:text-lg font-sans text-neutral-900 leading-relaxed font-medium">
            <strong>Media Mafias</strong> is the premier decentralized vernacular folk audio ecosystem and record label dedicated to the living oral traditions of <strong>Baghelkhand (Bagheli), Awadh (Awadhi), Bundelkhand (Bundeli), and Purvanchal (Bhojpuri)</strong>. Incubated by <strong>ScalerX Lab</strong> (UDYAM-MP-38-0052942), we remaster authentic grassroots folk songs into broadcast-grade cinematic audio distributed across 150+ global DSPs, while powering 100% PPL/IPRS-exempt In-Store AI Radio via <strong>The Future Radio</strong>.
          </p>
        </div>

        {/* Dual Intent Cards: Creators vs. B2B Commercial Buyers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl text-left">
          
          {/* Card A: Creator Academy ₹99 */}
          <Link
            href="/academy"
            className="bg-[#FED7AA] border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#E5FF00] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
                  FOR FOLK CREATORS
                </span>
                <span className="font-display font-black text-2xl text-black">
                  ₹99 ONLY
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wide text-black mb-3 group-hover:text-neutral-900">
                Creator Academy & Vocal Onboarding
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed mb-6">
                Singers & folk troupes: Turn raw smartphone vocals into broadcast-grade -14 LUFS releases. We handle AI mastering, metadata, and 150+ DSP distribution with an 80% direct royalty payout.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-black/20 flex items-center justify-between font-black font-mono text-sm uppercase">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black" />
                Join & Submit Vocals
              </span>
              <span className="bg-black text-white p-2 rounded-lg group-hover:bg-[#E5FF00] group-hover:text-black transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* Card B: Commercial & Sync Licensing */}
          <Link
            href="/licensing"
            className="bg-[#FDE047] border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#00E5FF] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
                  B2B COMMERCIAL & OTT
                </span>
                <span className="font-mono text-xs font-black bg-white border-2 border-black px-2.5 py-1 rounded">
                  100% PPL EXEMPT
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wide text-black mb-3 group-hover:text-neutral-900">
                In-Store AI Radio & Sync Licensing
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed mb-6">
                Hotels, retail spaces & OTT filmmakers: Save ₹30,000+/year on PPL/IPRS/Novex fees with 100% direct-owned background audio backed by statutory ScalerX Lab indemnity.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-black/20 flex items-center justify-between font-black font-mono text-sm uppercase">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-black" />
                Explore B2B Solutions
              </span>
              <span className="bg-black text-white p-2 rounded-lg group-hover:bg-[#00E5FF] group-hover:text-black transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
};
