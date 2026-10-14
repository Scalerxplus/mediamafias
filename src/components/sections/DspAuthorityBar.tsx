"use client";

import * as React from "react";
import Image from "next/image";

export const DspAuthorityBar = () => {
  return (
    <section className="border-y border-white/10 bg-neutral-950/80 backdrop-blur-md py-6 px-6 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Global Rights & Publishing Info */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse hidden sm:block shrink-0" />
          <div>
            <div className="font-mono text-[11px] tracking-widest uppercase text-white/90 flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
              <span className="text-red-accent font-bold">GLOBAL RIGHTS & DISTRIBUTION :</span>
              <span>150+ STREAMING PLATFORMS VIA MADVERSE</span>
              <span className="text-secondary">•</span>
              <span className="text-secondary">PUBLISHING ADMIN BY KOBALT & AMRA (180+ COUNTRIES)</span>
            </div>
            <div className="text-[10px] font-mono text-secondary tracking-widest uppercase mt-0.5">
              BROADCAST GRADE MASTERING (LUFS COMPLIANT) • 100% CONTENT ID PROTECTED
            </div>
          </div>
        </div>

        {/* Right: DSP Badges */}
        <div className="flex items-center gap-6 sm:gap-8 opacity-80 hover:opacity-100 transition-opacity flex-wrap justify-center">
          <span className="font-display text-sm tracking-widest uppercase text-white/60">STREAMING ON</span>
          
          {/* YouTube Music */}
          <div className="flex items-center gap-1.5 text-white/80 hover:text-red-accent transition-colors font-mono text-xs tracking-wider">
            <svg className="w-4 h-4 fill-current text-red-accent" viewBox="0 0 24 24"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-11.784c-2.58 0-4.68 2.1-4.68 4.68s2.1 4.68 4.68 4.68 4.68-2.1 4.68-4.68-2.1-4.68-4.68-4.68zm-1.2 6.54V9.54l3.12 1.68-3.12 1.68z"/></svg>
            <span className="hidden sm:inline">YT MUSIC</span>
          </div>

          {/* Spotify */}
          <div className="flex items-center gap-1.5 text-white/80 hover:text-green-500 transition-colors font-mono text-xs tracking-wider">
            <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            <span className="hidden sm:inline">SPOTIFY</span>
          </div>

          {/* Apple Music */}
          <div className="flex items-center gap-1.5 text-white/80 hover:text-pink-500 transition-colors font-mono text-xs tracking-wider">
            <svg className="w-4 h-4 fill-current text-pink-500" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.6.69-1.13 1.83-.99 2.94 1.07.08 2.15-.46 2.8-1.28z"/></svg>
            <span className="hidden sm:inline">APPLE MUSIC</span>
          </div>

          {/* JioSaavn */}
          <div className="flex items-center gap-1.5 text-white/80 hover:text-emerald-400 transition-colors font-mono text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">JIOSAAVN</span>
          </div>

          {/* Wynk */}
          <div className="flex items-center gap-1.5 text-white/80 hover:text-red-400 transition-colors font-mono text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="hidden sm:inline">WYNK</span>
          </div>

          {/* The Future Radio PWA badge */}
          <a 
            href="https://thefutureradio.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-2.5 py-1 border border-red-accent/30 bg-red-accent/10 text-red-accent hover:bg-red-accent hover:text-white transition-all text-[10px] font-mono tracking-widest uppercase rounded"
          >
            24/7 AI RADIO
          </a>
        </div>
      </div>
    </section>
  );
};
