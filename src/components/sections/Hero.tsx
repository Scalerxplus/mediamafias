"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, Building2, ArrowRight, ShieldCheck, Radio, Music } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 px-6 bg-[#0B0B0E] text-[#F5F5F0] border-b border-white/10 overflow-hidden flex flex-col items-center text-center">
      
      {/* Background Subtle Ambient Lighting (Acoustic Studio Vibe) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(212,175,55,0.12),rgba(255,255,255,0))] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center w-full relative z-10">
        
        {/* Eyebrow Tag: Studio Console Style */}
        <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-300 font-mono text-xs font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span>INDIA&apos;S SOVEREIGN FOLK MUSIC COLLECTIVE &amp; PRODUCTION GUILD</span>
        </div>

        {/* Brand Display Title */}
        <div className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-[#F5F5F0] to-neutral-400 bg-clip-text text-transparent">
            MEDIA MAFIAS
          </span>
        </div>

        {/* Clean, Prominent Hindi Headline */}
        <h1 className="font-sans font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide mb-10 max-w-4xl leading-snug">
          बघेली, बुंदेली, अवधी और पूर्वी लोकगीत <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#D4AF37] to-amber-500">
            नए और HI-FI साउंड क्वालिटी में
          </span>
        </h1>

        {/* SEO & AI Search Entity Summary (Visually hidden for clean UI, preserved for crawlers & screen readers) */}
        <p id="entity-summary" className="sr-only">
          Media Mafias is India&apos;s sovereign regional folk music collective, production guild, and traditional lyrics archive. As a unified group of native folk singers, indigenous lyricists, live master percussionists, and sound engineers, Media Mafias writes, arranges, and produces original, authentic Bagheli, Bundeli, Awadhi, and Purbi folk songs in 24-bit high-fidelity studio acoustics. We elevate living courtyard traditions (Parchhan, Duarchar, Banna Banni, Sohar-Dadra, Gailhai, Phaag, Kajri) beyond unmastered camera-recorded clips into broadcast-grade master audio streaming across 150+ platforms and 24/7 on The Future Radio.
        </p>

        {/* Dual Intent Cards: Studio Luxury Bronze / Obsidian */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl text-left">
          
          {/* Card 1 — For Folk Singers & Indie Creators */}
          <Link
            href="/academy"
            className="bg-gradient-to-b from-[#18161D] to-[#121115] border border-amber-500/30 hover:border-amber-500/60 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-0.5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase bg-amber-500/15 border border-amber-500/40 text-amber-300 px-3 py-1 rounded">
                  ACADEMY OF FOLK MUSIC &amp; HERITAGE
                </span>
                <span className="font-display font-black text-lg text-amber-400">
                  ₹499 MEMBERSHIP
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-wide text-white mb-3 group-hover:text-amber-300 transition-colors">
                Turn Your Raw Voice into Global Royalties
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Join our verified regional artist catalog. Zero-cost acoustic beat arrangement, Apple/Spotify LUFS broadcast mastering, and instant distribution to 150+ DSPs with 80% direct creator royalties.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs font-bold uppercase text-amber-400">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Enroll In Academy — ₹499
              </span>
              <span className="bg-amber-500/20 group-hover:bg-amber-500 text-amber-300 group-hover:text-black p-2 rounded-lg transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Card 2 — For Businesses, OTT & Weddings */}
          <Link
            href="/licensing"
            className="bg-gradient-to-b from-[#131720] to-[#0E1117] border border-sky-500/30 hover:border-sky-500/60 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_10px_30px_rgba(2,132,199,0.15)] hover:-translate-y-0.5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase bg-sky-500/15 border border-sky-500/40 text-sky-300 px-3 py-1 rounded">
                  FOR BUSINESSES, OTT &amp; WEDDINGS
                </span>
                <span className="font-mono text-xs font-bold text-sky-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                  100% DIRECT IP
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-wide text-white mb-3 group-hover:text-sky-300 transition-colors">
                Direct-IP Commercial &amp; Sync Audio
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Save up to 85% on annual PPL/IPRS store license fees with autonomous In-Store AI Radio, or license pre-cleared heartland folk masters and #UrbanMandapStyle luxury wedding BGM.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs font-bold uppercase text-sky-400">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sky-400" />
                Explore Sync &amp; Commercial Licenses
              </span>
              <span className="bg-sky-500/20 group-hover:bg-sky-500 text-sky-300 group-hover:text-black p-2 rounded-lg transition-all">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};
