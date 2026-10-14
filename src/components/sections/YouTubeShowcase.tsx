"use client";

import * as React from "react";
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
    <section className="py-20 px-6 bg-[#FDE047] border-t-4 border-black text-black relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#FF69B4] border-4 border-black text-black px-6 py-2 font-black text-xs md:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] rounded-full">
            <YoutubeIcon className="w-5 h-5 fill-black" />
            <span>OFFICIAL YOUTUBE CHANNEL</span>
          </div>
        </div>

        {/* Big Bold Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tight text-black leading-tight">
            STREAM ON <span className="text-[#FF2E2E] underline decoration-4 underline-offset-8">MEDIA MAFIAS ROOTS</span>
          </h2>
          <p className="text-neutral-800 max-w-2xl mx-auto text-base sm:text-lg font-mono mt-4">
            Our exclusive video archive and digital stage for authentic Bagheli, Bundeli, Awadhi, and Purvanchali folk songs in 4K cinematic sound.
          </p>
        </div>

        {/* Grand Neo-Brutalist Channel Card */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Channel Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FF2E2E] border-4 border-black flex items-center justify-center text-white shadow-[4px_4px_0px_0px_#000]">
                  <YoutubeIcon className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-wide text-black">
                      Media Mafias Roots
                    </h3>
                    <CheckCircle2 className="w-6 h-6 text-sky-500 shrink-0" />
                  </div>
                  <span className="font-mono text-sm text-[#FF2E2E] font-black tracking-widest block">
                    @MediaMafiasRoots
                  </span>
                </div>
              </div>

              <p className="text-neutral-700 text-sm sm:text-base font-mono leading-relaxed">
                Experience high-fidelity reproductions of traditional oral folk forms: maternal Sohar, rain-soaked Kajri, sacred Devi Jas, and martial Alha-Udal ballads. Produced with authentic grassroots artists and mastered in broadcast grade.
              </p>

              {/* Direct Subscribe CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF2E2E] hover:bg-[#E5FF00] hover:text-black border-4 border-black text-white font-black text-lg sm:text-xl tracking-wider uppercase px-8 py-5 rounded-full shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all flex items-center justify-center gap-3 text-center"
                >
                  <YoutubeIcon className="w-6 h-6 fill-current" />
                  <span>SUBSCRIBE TO CHANNEL</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <a
                  href="https://thefutureradio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-100 hover:bg-black hover:text-white border-4 border-black text-black font-black text-sm uppercase tracking-wider px-6 py-5 rounded-full shadow-[4px_4px_0px_0px_#000] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Radio className="w-5 h-5 text-[#FF2E2E]" />
                  <span>24/7 LIVE RADIO</span>
                </a>
              </div>
            </div>

            {/* Right: Featured Popular Tracks List */}
            <div className="lg:col-span-5 bg-neutral-50 border-4 border-black rounded-2xl p-5 sm:p-6 space-y-3 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center justify-between pb-3 border-b-2 border-black">
                <span className="font-mono text-xs font-black text-black tracking-widest uppercase flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  FLAGSHIP RELEASES
                </span>
                <span className="font-mono text-[10px] text-black font-black uppercase tracking-widest px-2.5 py-1 bg-[#86EFAC] border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000]">
                  STREAMING NOW
                </span>
              </div>

              <div className="space-y-2.5">
                {topReleases.map((track, i) => (
                  <a
                    key={track.title}
                    href={channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-[#E5FF00] border-2 border-black rounded-xl flex items-center justify-between text-xs font-mono transition-all group shadow-[2px_2px_0px_0px_#000]"
                  >
                    <div className="flex items-center gap-3 truncate">
                      <span className="font-black text-[#FF2E2E]">0{i + 1}</span>
                      <div className="truncate">
                        <div className="text-black font-black truncate text-sm">
                          {track.title}
                        </div>
                        <div className="text-[11px] text-neutral-500">
                          {track.genre}
                        </div>
                      </div>
                    </div>
                    <span className="text-black group-hover:text-black font-bold shrink-0 flex items-center gap-1 bg-neutral-100 group-hover:bg-white px-2 py-1 border border-black rounded text-[10px]">
                      <Play className="w-3 h-3 fill-current" />
                      <span>WATCH</span>
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
