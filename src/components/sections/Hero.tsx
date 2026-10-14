"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Radio, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export const Hero = () => {
  const [activeTrack, setActiveTrack] = React.useState(0);
  const [matrixText, setMatrixText] = React.useState("");

  const catalogTracks = [
    { title: "Saiyaan Na Aaye", dialect: "Bagheli Folk Pop", tag: "POPULAR", length: "3:42" },
    { title: "Luturi Jhalariya", dialect: "Bagheli Sohar", tag: "LIFECYCLE", length: "4:15" },
    { title: "Chale Aaba More Raja", dialect: "Bagheli Folk Fusion", tag: "DANCE", length: "3:18" },
    { title: "महुआ उजरि गा", dialect: "Bagheli Lokgeet", tag: "AUTHENTIC", length: "4:05" },
    { title: "Hari Rama Chhai Ghata", dialect: "Monsoon Kajri", tag: "SEASONAL", length: "4:32" },
    { title: "Resham Ki Dori", dialect: "Awadhi Wedding", tag: "VIVAH", length: "3:55" },
    { title: "Jheeni Re Jheeni", dialect: "Nirgun / Sarangi Sufi", tag: "MEDITATIVE", length: "5:12" },
    { title: "Kanhaiya", dialect: "Bhakti Sangeet", tag: "DEVOTIONAL", length: "4:20" }
  ];

  React.useEffect(() => {
    const chars = "01BAGHELIAWADHIBUNDELIBHOJPURI01";
    let iterations = 0;
    const interval = setInterval(() => {
      setMatrixText(
        Array(18).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join(" ")
      );
      iterations++;
      if (iterations > 60) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-black border-b border-red-accent/10">
      {/* Background cinematic radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,57,43,0.18)_0%,rgba(0,0,0,0.95)_75%)] pointer-events-none" />
      
      {/* Subtle Code Stream Overlay */}
      <div className="absolute inset-0 opacity-5 font-mono text-[8px] text-red-accent overflow-hidden whitespace-nowrap pointer-events-none select-none flex flex-col justify-between py-10" aria-hidden="true">
        {Array(25).fill(0).map((_, i) => (
          <motion.div 
            key={i} 
            initial={{ x: i % 2 === 0 ? "100%" : "-100%" }}
            animate={{ x: i % 2 === 0 ? "-100%" : "100%" }}
            transition={{ duration: 40 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
          >
            {Array(10).fill(matrixText).join(" ")}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 max-w-7xl mx-auto w-full">
        {/* Left Column (Positioning & Core CTAs) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-accent/40 bg-red-accent/10 font-mono text-[10px] text-red-accent tracking-[0.2em] uppercase rounded-full">
              <span className="w-2 h-2 rounded-full bg-red-accent animate-ping" />
              INDO-GANGETIC VERNACULAR AUDIO ECOSYSTEM
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-[5.2rem] font-display tracking-widest uppercase mb-6 leading-[0.9] text-white"
          >
            HIGH-FIDELITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-accent via-orange-500 to-amber-300">
              REGIONAL FOLK
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-secondary mb-8 max-w-2xl font-mono leading-relaxed border-l-2 border-red-accent pl-5 bg-neutral-950/60 p-4 border border-white/5"
          >
            <p className="text-white font-medium mb-2">
              Preserving and modernizing the living oral soul of Baghelkhand, Awadh, Bundelkhand, and Purvanchal.
            </p>
            <p className="text-secondary/80 text-sm">
              We bridge the gap between low-fidelity field recordings and multi-crore corporate studios—combining verified grassroots vocalists with broadcast-grade cinematic production.
            </p>
          </motion.div>

          {/* 3 High-Impact Conversion Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl"
          >
            {/* Card 1: Official Artist Channel */}
            <a 
              href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-red-accent text-white p-5 rounded-lg border border-red-accent flex flex-col justify-between hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-red-accent/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <YoutubeIcon className="w-5 h-5 text-white group-hover:text-red-accent" />
                  <span className="font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 bg-black/40 text-white rounded">OAC</span>
                </div>
                <div className="font-mono text-[9px] tracking-widest uppercase opacity-80 mb-1">YouTube Channel</div>
                <h3 className="font-display text-xl uppercase tracking-wider leading-none">
                  Stream 4K<br />Audio
                </h3>
              </div>
              <div className="flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase mt-4 pt-2 border-t border-white/20 group-hover:border-black/20">
                <span>SUBSCRIBE</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>

            {/* Card 2: B2B In-Store AI Radio */}
            <Link 
              href="/contact" 
              className="group bg-neutral-950 p-5 rounded-lg border border-white/10 hover:border-red-accent/60 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Radio className="w-5 h-5 text-red-accent" />
                  <span className="font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/30 rounded">NO PPL</span>
                </div>
                <div className="font-mono text-[9px] tracking-widest uppercase text-secondary mb-1">Commercial Audio</div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white leading-none group-hover:text-red-accent transition-colors">
                  In-Store<br />AI Radio
                </h3>
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-secondary group-hover:text-white mt-4 pt-2 border-t border-white/5">
                <span>₹3,500/YR</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Creator Academy */}
            <Link 
              href="/academy" 
              className="group bg-neutral-950 p-5 rounded-lg border border-white/10 hover:border-amber-400/60 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span className="font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 bg-amber-400/10 text-amber-300 border border-amber-400/30 rounded">₹99</span>
                </div>
                <div className="font-mono text-[9px] tracking-widest uppercase text-secondary mb-1">Creator Gateway</div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white leading-none group-hover:text-amber-400 transition-colors">
                  Creator<br />Syndicate
                </h3>
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-secondary group-hover:text-white mt-4 pt-2 border-t border-white/5">
                <span>GLOBAL DSPs</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Right Column (OAC Live Catalog & Player Terminal) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="bg-neutral-950 border border-white/15 rounded-xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Top Bar with OAC Verification */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-accent flex items-center justify-center text-white">
                  <YoutubeIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-base tracking-wider uppercase text-white font-bold">Media Mafias</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <span className="text-[10px] font-mono text-secondary tracking-widest uppercase block">
                    Official Artist Channel • @MediaMafiasRoots
                  </span>
                </div>
              </div>
              <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-1 bg-red-accent/10 border border-red-accent/30 text-red-accent rounded">
                LIVE OAC
              </span>
            </div>

            {/* Currently Focused Release */}
            <div className="p-4 bg-black/60 rounded-lg border border-white/10 mb-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-amber-400 tracking-widest uppercase">
                  FEATURED RELEASE
                </span>
                <span className="text-[10px] font-mono text-secondary">
                  {catalogTracks[activeTrack].length}
                </span>
              </div>
              <h4 className="text-xl font-display uppercase tracking-widest text-white mb-1">
                {catalogTracks[activeTrack].title}
              </h4>
              <p className="text-xs font-mono text-secondary mb-3">
                {catalogTracks[activeTrack].dialect} • Mastered in 24-bit Broadcast Audio
              </p>

              {/* Fake Audio Waveform */}
              <div className="flex items-end gap-1 h-6 mb-4 px-1">
                {[40, 70, 95, 60, 85, 100, 45, 90, 75, 50, 80, 95, 65, 40, 90, 70, 85, 60, 95, 50, 75, 90, 40, 80, 60].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      i < 14 ? "bg-red-accent" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>

              {/* Direct YouTube Listen Button */}
              <a
                href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-red-accent text-white font-mono text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:bg-white hover:text-red-accent transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Full Track on YouTube</span>
              </a>
            </div>

            {/* Track Catalog List */}
            <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
              <div className="text-[10px] font-mono text-secondary/60 tracking-widest uppercase mb-1 px-2">
                VERIFIED RELEASES CATALOG
              </div>
              {catalogTracks.map((track, i) => (
                <button
                  key={track.title}
                  onClick={() => setActiveTrack(i)}
                  className={`w-full text-left p-2.5 rounded flex items-center justify-between text-xs font-mono transition-all ${
                    activeTrack === i
                      ? "bg-white/10 text-white border border-red-accent/40"
                      : "text-secondary hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-[10px] text-secondary/50 font-mono w-4">{i + 1}</span>
                    <span className="truncate text-white">{track.title}</span>
                    <span className="text-[9px] px-1.5 py-0.2 bg-white/5 text-secondary rounded hidden sm:inline">
                      {track.tag}
                    </span>
                  </div>
                  <span className="text-[10px] text-secondary shrink-0 font-mono">
                    {track.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Footer rights metadata */}
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-secondary/60">
              <span>RIGHTS: MADVERSE × KOBALT</span>
              <span>100% PRE-CLEARED</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};
