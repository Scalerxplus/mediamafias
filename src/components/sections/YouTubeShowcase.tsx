"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, ArrowUpRight, Radio, Sparkles } from "lucide-react";

const YoutubeIcon = ({ className = "w-6 h-6 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export const YouTubeShowcase = () => {
  const channelUrl = "https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1";

  const topReleases = [
    { title: "Saiyaan Na Aaye", genre: "Bagheli Folk Pop", views: "Broadcast Audio" },
    { title: "Luturi Jhalariya", genre: "Bagheli Sohar (Childbirth)", views: "Cultural Classic" },
    { title: "Hari Rama Chhai Ghata", genre: "Monsoon Kajri", views: "Authentic Folk" },
    { title: "Chale Aaba More Raja", genre: "Bagheli Folk Fusion", views: "Folk Groove" },
    { title: "महुआ उजरि गा", genre: "Bagheli Lokgeet", views: "Rural Nostalgia" }
  ];

  return (
    <section className="py-20 px-6 bg-black border-t-4 border-white text-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-2 border-black text-black px-5 py-2 font-black text-xs md:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#fff]">
            <YoutubeIcon className="w-4 h-4 fill-black text-black" />
            <span>OFFICIAL YOUTUBE CHANNEL</span>
          </div>
        </div>

        {/* Big Bold Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-wider text-white leading-tight">
            STREAM ON <span className="text-red-accent underline decoration-4 underline-offset-8">MEDIA MAFIAS ROOTS</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base sm:text-lg font-mono mt-4">
            Our exclusive video archive and digital stage for authentic Bagheli, Bundeli, Awadhi, and Purvanchali folk songs in 4K cinematic sound.
          </p>
        </div>

        {/* Grand Neo-Brutalist Channel Card */}
        <div className="bg-neutral-950 border-4 border-white rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#ef4444] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Channel Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-accent border-2 border-black flex items-center justify-center text-white shadow-[4px_4px_0px_0px_#fff]">
                  <YoutubeIcon className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-wide text-white">
                      Media Mafias Roots
                    </h3>
                    <CheckCircle2 className="w-6 h-6 text-sky-400 shrink-0" />
                  </div>
                  <span className="font-mono text-sm text-red-accent font-bold tracking-widest block">
                    @MediaMafiasRoots
                  </span>
                </div>
              </div>

              <p className="text-secondary text-sm sm:text-base font-mono leading-relaxed">
                Experience high-fidelity reproductions of traditional oral folk forms: maternal Sohar, rain-soaked Kajri, sacred Devi Jas, and martial Alha-Udal ballads. Produced with authentic grassroots artists and mastered in broadcast grade.
              </p>

              {/* Direct Subscribe CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-accent border-2 border-white text-white font-display text-xl sm:text-2xl tracking-widest uppercase px-8 py-4 rounded-xl shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#fff] transition-all flex items-center justify-center gap-3 text-center"
                >
                  <YoutubeIcon className="w-6 h-6 fill-white" />
                  <span>SUBSCRIBE TO CHANNEL</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <a
                  href="https://thefutureradio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 border-2 border-white text-white font-mono text-xs uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Radio className="w-4 h-4 text-red-accent" />
                  <span>24/7 LIVE RADIO</span>
                </a>
              </div>
            </div>

            {/* Right: Featured Popular Tracks List */}
            <div className="lg:col-span-5 bg-black border-2 border-white/30 rounded-xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  FLAGSHIP RELEASES
                </span>
                <span className="font-mono text-[10px] text-green-400 font-bold uppercase tracking-widest px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded">
                  STREAMING NOW
                </span>
              </div>

              <div className="space-y-2">
                {topReleases.map((track, i) => (
                  <a
                    key={track.title}
                    href={channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-neutral-900 hover:bg-red-accent/20 border border-white/10 hover:border-red-accent rounded-lg flex items-center justify-between text-xs font-mono transition-all group"
                  >
                    <div className="flex items-center gap-3 truncate">
                      <span className="font-bold text-red-accent">0{i + 1}</span>
                      <div className="truncate">
                        <div className="text-white font-bold group-hover:text-red-accent transition-colors truncate">
                          {track.title}
                        </div>
                        <div className="text-[10px] text-secondary">
                          {track.genre}
                        </div>
                      </div>
                    </div>
                    <span className="text-white/60 group-hover:text-white transition-colors shrink-0 flex items-center gap-1">
                      <Play className="w-3 h-3 fill-current" />
                      <span className="text-[10px]">WATCH</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
