"use client";

import * as React from "react";
import Link from "next/link";
import { Play, ArrowUpRight, CheckCircle2, Radio, Sparkles } from "lucide-react";

const YoutubeIcon = ({ className = "w-5 h-5 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export const Hero = () => {
  const [activeTrack, setActiveTrack] = React.useState(0);

  const catalogTracks = [
    { title: "Saiyaan Na Aaye", dialect: "Bagheli Folk Pop", length: "3:42" },
    { title: "Luturi Jhalariya", dialect: "Bagheli Sohar (Childbirth)", length: "4:15" },
    { title: "Hari Rama Chhai Ghata", dialect: "Monsoon Kajri", length: "4:32" },
    { title: "Chale Aaba More Raja", dialect: "Bagheli Folk Fusion", length: "3:18" },
    { title: "महुआ उजरि गा", dialect: "Authentic Bagheli Lokgeet", length: "4:05" },
    { title: "Resham Ki Dori", dialect: "Awadhi Wedding", length: "3:55" },
    { title: "Jheeni Re Jheeni", dialect: "Nirgun / Sarangi Sufi", length: "5:12" }
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 bg-black text-white border-b-4 border-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Neo-Brutalist Presentation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-2 border-black text-black px-4 py-1.5 font-black text-xs md:text-sm uppercase tracking-widest rounded-full shadow-[4px_4px_0px_0px_#fff]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-accent animate-ping" />
              <span>THE INDO-GANGETIC FOLK AUDIO PLATFORM</span>
            </div>

            {/* Massive Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-display font-black uppercase tracking-tight text-white leading-[0.95]">
              HIGH-FIDELITY <br />
              <span className="text-red-accent underline decoration-4 underline-offset-8">
                REGIONAL FOLK
              </span>
            </h1>

            {/* Clear Human-Readable Subheading */}
            <p className="text-base sm:text-lg text-secondary font-mono leading-relaxed max-w-2xl bg-neutral-950 border-2 border-white/20 p-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
              Preserving and modernizing the living folk heritage of <strong className="text-white">Baghelkhand, Awadh, Bundelkhand, and Purvanchal</strong>. Authentic traditional singing combined with broadcast-grade cinematic audio production.
            </p>

            {/* 3 Neo-Brutalist Conversion Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Card 1: YouTube OAC */}
              <a 
                href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-accent border-2 border-white text-white p-5 rounded-xl shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#fff] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <YoutubeIcon className="w-6 h-6 fill-white" />
                    <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-black text-white rounded">OAC</span>
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wider font-bold">
                    YouTube<br />Roots
                  </h3>
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase font-bold pt-3 mt-3 border-t border-white/30 flex items-center justify-between">
                  <span>SUBSCRIBE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Card 2: In-Store AI Radio */}
              <Link 
                href="/b2b-radio"
                className="bg-neutral-950 border-2 border-white text-white p-5 rounded-xl shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#fff] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Radio className="w-5 h-5 text-green-400" />
                    <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded">NO PPL</span>
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wider font-bold group-hover:text-red-accent transition-colors">
                    In-Store<br />AI Radio
                  </h3>
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-secondary group-hover:text-white pt-3 mt-3 border-t border-white/20 flex items-center justify-between">
                  <span>₹3,500/YR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Card 3: Creator Academy */}
              <Link 
                href="/academy"
                className="bg-neutral-950 border-2 border-white text-white p-5 rounded-xl shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#fff] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-amber-400/20 text-amber-300 rounded">₹99</span>
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wider font-bold group-hover:text-amber-400 transition-colors">
                    Creator<br />Syndicate
                  </h3>
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-secondary group-hover:text-white pt-3 mt-3 border-t border-white/20 flex items-center justify-between">
                  <span>JOIN FOR ₹99</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

            </div>

          </div>

          {/* Right Column: Neo-Brutalist Official Artist Channel Player */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-950 border-4 border-white rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_#ef4444] space-y-6">
              
              {/* Header with Verified Badge */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-accent border border-black flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#fff]">
                    <YoutubeIcon className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-display text-lg tracking-wide uppercase text-white font-bold">Media Mafias Roots</span>
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    </div>
                    <span className="text-xs font-mono text-secondary block">
                      @MediaMafiasRoots
                    </span>
                  </div>
                </div>

                <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-red-accent/15 border border-red-accent text-red-accent rounded">
                  OAC VERIFIED
                </span>
              </div>

              {/* Active Release Card */}
              <div className="bg-black border-2 border-white/30 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                    NOW PLAYING PREVIEW
                  </span>
                  <span className="text-xs font-mono text-secondary">
                    {catalogTracks[activeTrack].length}
                  </span>
                </div>

                <h4 className="text-2xl font-display uppercase tracking-wide text-white font-bold">
                  {catalogTracks[activeTrack].title}
                </h4>

                <p className="text-xs font-mono text-secondary">
                  {catalogTracks[activeTrack].dialect} • Broadcast Grade LUFS Audio
                </p>

                <a 
                  href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-red-accent border-2 border-white text-white font-display text-base uppercase tracking-widest font-bold rounded-lg shadow-[3px_3px_0px_0px_#fff] flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>PLAY ON YOUTUBE (OAC)</span>
                </a>
              </div>

              {/* Track Selector List */}
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                <div className="text-[10px] font-mono text-secondary font-bold tracking-widest uppercase mb-1">
                  OFFICIAL RELEASES:
                </div>
                {catalogTracks.map((track, i) => (
                  <button
                    key={track.title}
                    onClick={() => setActiveTrack(i)}
                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between text-xs font-mono transition-all ${
                      activeTrack === i
                        ? "bg-white text-black font-bold border-2 border-red-accent"
                        : "text-secondary hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-red-accent font-bold">0{i + 1}</span>
                      <span className="truncate">{track.title}</span>
                    </div>
                    <span className="text-[10px] opacity-70 shrink-0 font-mono">
                      {track.length}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
