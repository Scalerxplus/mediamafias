"use client";

import * as React from "react";

export const DspAuthorityBar = () => {
  return (
    <section className="border-y-4 border-black bg-white py-5 px-6 relative z-20 overflow-hidden text-black shadow-[0_4px_0_0_#000]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Global Rights & Publishing Info */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-3 h-3 rounded-full bg-[#FF2E2E] border-2 border-black animate-pulse hidden sm:block shrink-0" />
          <div>
            <div className="font-mono text-xs font-black tracking-widest uppercase flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
              <span className="text-[#FF2E2E]">GLOBAL DISTRIBUTION:</span>
              <span>150+ STREAMING PLATFORMS VIA MADVERSE</span>
              <span className="text-black/40">•</span>
              <span>PUBLISHING BY KOBALT & AMRA (180+ COUNTRIES)</span>
            </div>
            <div className="text-[11px] font-mono text-neutral-600 font-bold tracking-wider uppercase mt-0.5">
              BROADCAST GRADE LUFS MASTERING • OFFICIAL ARTIST CHANNEL (OAC) • 100% CONTENT ID PROTECTED
            </div>
          </div>
        </div>

        {/* Right: DSP Badges */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <span className="font-display font-black text-xs tracking-wider uppercase text-black/60">STREAMING ON</span>
          
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FDE047] border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-black">
            <span>YT MUSIC</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#86EFAC] border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-black">
            <span>SPOTIFY</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F9A8D4] border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-black">
            <span>APPLE MUSIC</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#67E8F9] border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-black">
            <span>JIOSAAVN</span>
          </div>

          <a 
            href="https://thefutureradio.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1 bg-[#FF2E2E] text-white border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-black hover:bg-black transition-colors"
          >
            24/7 AI RADIO ➔
          </a>
        </div>

      </div>
    </section>
  );
};
