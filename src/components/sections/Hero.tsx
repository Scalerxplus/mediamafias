"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Building2, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 bg-[#C4B5FD] text-black border-b-4 border-black overflow-hidden flex flex-col items-center text-center">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-4 border-black px-6 py-2 rounded-full shadow-[6px_6px_0px_0px_#000] mb-8 transform -rotate-1">
          <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping mr-1"></span>
          <span className="font-black text-black uppercase tracking-widest text-xs sm:text-sm">
            INDIA&apos;S VERNACULAR AI MUSIC LABEL &amp; DIRECT LICENSING NETWORK
          </span>
        </div>

        {/* Brand Display Title */}
        <div className="text-6xl sm:text-8xl lg:text-[110px] font-display font-black leading-[0.9] tracking-tight uppercase mb-4">
          <span className="block text-[#FF69B4] [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:4px_black] [text-shadow:6px_6px_0px_#000] md:[text-shadow:10px_10px_0px_#000]">
            MEDIA MAFIAS
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-black mb-8 max-w-5xl leading-tight">
          Authentic Indo-Gangetic Folk Music. <br className="hidden sm:inline" />
          <span className="text-neutral-900">Verified by Local Artists, Scaled by AI.</span>
        </h1>

        {/* #entity-summary Paragraph (Speakable for Voice & AI Search) */}
        <div className="w-full max-w-4xl bg-white border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] mb-12 text-left sm:text-center">
          <p id="entity-summary" className="text-base sm:text-lg font-sans text-neutral-900 leading-relaxed font-medium">
            Media Mafias is India&apos;s premier AI-powered regional music label, creator academy, and commercial audio platform. Collaborating with authentic local artists across Baghelkhand, Awadh, Bundelkhand, and Purvanchal, we craft broadcast-grade Bagheli, Awadhi, Bundeli, and Bhojpuri music (बघेली, अवधी, बुंदेली और भोजपुरी लोकगीत)—streaming globally on 150+ platforms and 24/7 on The Future Radio.
          </p>
        </div>

        {/* Dual Intent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl text-left">
          
          {/* Card 1 — For Folk Singers & Indie Creators */}
          <Link
            href="/academy"
            className="bg-[#FED7AA] border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#E5FF00] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
                  FOR FOLK SINGERS &amp; CREATORS
                </span>
                <span className="font-display font-black text-2xl text-black">
                  ₹499 ONLY
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wide text-black mb-3 group-hover:text-neutral-900">
                Turn Your Raw Voice into Global Royalties
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed mb-6">
                Zero-cost AI beat arrangement, Apple/Spotify LUFS mastering, and instant distribution to 150+ platforms, YouTube Shorts, and Future Radio.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-black/20 flex items-center justify-between font-black font-mono text-sm uppercase">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black" />
                Join Creator Academy — ₹499
              </span>
              <span className="bg-black text-white p-2 rounded-lg group-hover:bg-[#E5FF00] group-hover:text-black transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* Card 2 — For Businesses, OTT & Weddings */}
          <Link
            href="/licensing"
            className="bg-[#FDE047] border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black uppercase bg-[#00E5FF] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
                  FOR BUSINESSES, OTT &amp; WEDDINGS
                </span>
                <span className="font-mono text-xs font-black bg-white border-2 border-black px-2.5 py-1 rounded">
                  100% DIRECT IP
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wide text-black mb-3 group-hover:text-neutral-900">
                100% Direct-IP Commercial &amp; Sync Audio
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed mb-6">
                Save up to 85% on annual PPL/IPRS store licenses with In-Store AI Radio, or license pre-cleared heartland folk &amp; #UrbanMandapStyle wedding BGM.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-black/20 flex items-center justify-between font-black font-mono text-sm uppercase">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-black" />
                Get Commercial / Sync License
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
