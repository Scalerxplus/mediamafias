"use client";

import * as React from "react";
import Link from "next/link";
import { Play, ArrowUpRight, CheckCircle2, Radio, Sparkles } from "lucide-react";

const YoutubeIcon = ({ className = "w-6 h-6 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export const Hero = () => {
  const channelUrl = "https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1";

  return (
    <section className="relative pt-36 pb-20 px-6 bg-[#C4B5FD] text-black border-b-4 border-black overflow-hidden flex flex-col items-center text-center">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        
        {/* Top Neo-Brutalist Pill Badge */}
        <div className="inline-block bg-[#E5FF00] border-4 border-black px-6 py-2 rounded-full shadow-[6px_6px_0px_0px_#000] mb-8 transform -rotate-1">
          <span className="font-black text-black uppercase tracking-widest text-xs sm:text-sm">
            THE INDO-GANGETIC FOLK AUDIO PLATFORM
          </span>
        </div>

        {/* Giant 3D Stroked Future Radio Style Title */}
        <div className="text-6xl sm:text-8xl lg:text-[120px] font-display font-black leading-[0.95] tracking-tight uppercase mb-8">
          <span className="block text-[#FF69B4] [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:4px_black] [text-shadow:6px_6px_0px_#000] md:[text-shadow:10px_10px_0px_#000] mb-2">
            MEDIA MAFIAS
          </span>
          <span className="block text-[#00E5FF] [-webkit-text-stroke:3px_black] md:[-webkit-text-stroke:4px_black] [text-shadow:6px_6px_0px_#000] md:[text-shadow:10px_10px_0px_#000]">
            ROOTS
          </span>
        </div>

        {/* Clean White Card Subtitle */}
        <div className="w-full max-w-3xl bg-white border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-10 text-center">
          <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black mb-2">
            High-Fidelity Folk of the Indo-Gangetic Belt
          </h2>
          <p className="text-sm sm:text-base font-mono text-neutral-800 leading-relaxed">
            Preserving and modernizing the living oral heritage of <strong>Baghelkhand, Awadh, Bundelkhand, and Purvanchal</strong>. Broadcast-grade cinematic audio produced with authentic grassroots practitioners.
          </p>
        </div>

        {/* Big Future Radio Pill CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-2xl mb-12">
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#E5FF00] border-4 border-black text-black font-black uppercase text-xl sm:text-2xl px-10 py-5 rounded-full flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all cursor-pointer"
          >
            <YoutubeIcon className="w-7 h-7 fill-black" />
            <span>SUBSCRIBE ON YOUTUBE</span>
          </a>

          <a
            href="https://thefutureradio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-black hover:text-white border-4 border-black text-black font-black uppercase text-base sm:text-lg px-8 py-5 rounded-full flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all cursor-pointer"
          >
            <Radio className="w-5 h-5 text-red-600" />
            <span>24/7 LIVE RADIO</span>
          </a>
        </div>

        {/* 2 High-Value Neo-Brutalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left">
          
          {/* Card 1: In-Store AI Radio */}
          <Link
            href="/b2b-radio"
            className="bg-[#FDE047] border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-black uppercase px-2.5 py-1 bg-black text-[#FDE047] rounded-full border border-black">
                  COMMERCIAL VENUES
                </span>
                <span className="font-mono text-xs font-black text-black">₹3,500/YR</span>
              </div>
              <h3 className="text-2xl font-display font-black uppercase tracking-wide text-black mb-2">
                100% PPL/IPRS-Exempt In-Store Radio
              </h3>
              <p className="text-xs font-mono text-black/80 leading-relaxed">
                Stream legal ambient audio for hospitals, retail stores, and hotels. Fully indemnified by ScalerX Lab. Save up to 85% on music royalties.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t-2 border-black flex items-center justify-between font-mono text-xs font-black uppercase">
              <span>EXPLORE B2B RADIO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Creator Academy */}
          <Link
            href="/academy"
            className="bg-[#FED7AA] border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-black uppercase px-2.5 py-1 bg-black text-[#FED7AA] rounded-full border border-black">
                  CREATORS
                </span>
                <span className="font-mono text-xs font-black text-black">ENTRY: ₹99</span>
              </div>
              <h3 className="text-2xl font-display font-black uppercase tracking-wide text-black mb-2">
                Creator Syndicate & Academy
              </h3>
              <p className="text-xs font-mono text-black/80 leading-relaxed">
                Empowering rural heartland vocalists. Submit raw vocals via WhatsApp for zero-cost AI arrangement, broadcast mastering, and global DSP distribution.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t-2 border-black flex items-center justify-between font-mono text-xs font-black uppercase">
              <span>JOIN FOR ₹99</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};
