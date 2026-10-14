"use client";

import * as React from "react";
import { Sparkles, CloudRain, Flame, Compass, ArrowUpRight } from "lucide-react";

export const FolkNicheCategories = () => {
  const categories = [
    {
      id: "wedding",
      tag: "#UrbanMandapStyle",
      subTag: "#BeatlessWeddingBGM",
      title: "Wedding & Sacred Rituals",
      subtitle: "Vivah Geet • Haldi • Mandap • Bidai",
      description: "Elevating traditional rituals for modern diaspora and upscale venues. Authentic Awadhi and Bagheli marriage chants arranged with acoustic Shehnai, Sitar, and mellow percussion—completely free of harsh village distortion.",
      instruments: ["Shehnai", "Sitar", "Acoustic Tanpura", "Mridang"],
      targetDialects: "Awadhi • Bagheli • Bhojpuri",
      highlightTrack: "Ram Banra Ban Aayo Re",
      tagBg: "bg-[#F9A8D4]" // Pink
    },
    {
      id: "lifecycle",
      tag: "#LifecycleTraditions",
      subTag: "#SoharAndKajri",
      title: "Seasonal & Lifecycle Hymns",
      subtitle: "Sohar (Childbirth) • Kajri (Monsoon) • Devi Jas (Navratri)",
      description: "Centuries of oral memory celebrating life transitions. From maternal childbirth blessings (Sohar) to rain-soaked monsoon ballads (Kajri) and electrifying Navratri Jas, remastered in pristine broadcast LUFS standards.",
      instruments: ["Dholak", "Manjira", "Bansuri", "Harmonium"],
      targetDialects: "Baghelkhand • Purvanchal • Awadh",
      highlightTrack: "Luturi Jhalariya • Hari Rama Chhai Ghata",
      tagBg: "bg-[#67E8F9]" // Cyan
    },
    {
      id: "folkpop",
      tag: "#HighFidelityFolk",
      subTag: "#NachanhaiPop",
      title: "High-Fidelity Folk Pop & Ballads",
      subtitle: "Bagheli Nachanhai • Alha-Udal Ballads • Bundeli Rai",
      description: "High-octane regional rhythms meeting modern sub-bass and cinematic percussion. Preserving the heroic tales of Alha-Udal from Bundelkhand and the foot-tapping groove of Bagheli Nachanhai.",
      instruments: ["Nagariya", "Chimta", "Dholak", "Sub Bass", "Sarangi"],
      targetDialects: "Bundelkhand • Baghelkhand • Central India",
      highlightTrack: "Bagheli Nachanhai • Alha Udal",
      tagBg: "bg-[#FDE047]" // Yellow
    },
    {
      id: "nirgun",
      tag: "#SarangiSufi",
      subTag: "#MeditativeMusic",
      title: "Nirgun, Mystic & Sufi",
      subtitle: "Sant Kabir Bhajans • Soulful Sarangi • Meditative Soundscapes",
      description: "Introspective acoustic poetry of the Indo-Gangetic mystics. Hypnotic Sarangi motifs, subtle drone ambiances, and devotional depth designed for quiet contemplation and wellness spaces.",
      instruments: ["Sarangi", "Ektara", "Ambient Drones", "Santur"],
      targetDialects: "Banaras • Awadh • Kabirpanth",
      highlightTrack: "Jheeni Re Jheeni • Daras",
      tagBg: "bg-[#C4B5FD]" // Lilac
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#FED7AA] text-black border-t-4 border-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Pill & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block bg-[#00E5FF] border-4 border-black px-5 py-2 font-black text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-[4px_4px_0px_0px_#000] mb-4">
              <span>FOUR CULTURAL DIMENSIONS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-black leading-tight">
              CINEMATIC FOLK FOR THE HEARTLAND
            </h2>
            
            <p className="text-neutral-800 max-w-2xl font-mono mt-3 text-base sm:text-lg">
              Bridging the gap between low-fi field recordings and corporate studios. Recorded with grassroots folk vocalists, mastered in broadcast-grade audio.
            </p>
          </div>

          <a 
            href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end px-8 py-4 border-4 border-black bg-[#FF2E2E] text-white font-black text-base uppercase tracking-wider rounded-full shadow-[4px_4px_0px_0px_#000] hover:bg-[#E5FF00] hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all flex items-center gap-2 shrink-0"
          >
            <span>SUBSCRIBE ON YOUTUBE</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* 4 Cards Grid - Future Radio Neo-Brutalist White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border-4 border-black p-8 rounded-2xl shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
            >
              <div>
                {/* Tags row */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs font-black tracking-widest uppercase px-3 py-1 ${cat.tagBg} text-black rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000]`}>
                      {cat.tag}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase text-neutral-600">
                      {cat.subTag}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-wide text-black mb-1">
                  {cat.title}
                </h3>
                <div className="font-mono text-xs text-[#FF2E2E] font-black tracking-wide mb-4 uppercase">
                  {cat.subtitle}
                </div>

                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 font-mono">
                  {cat.description}
                </p>

                {/* Metadata Pills */}
                <div className="space-y-2 pt-4 border-t-2 border-black/10 mb-6 bg-neutral-50 p-4 rounded-xl border-2 border-black">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-neutral-500 uppercase font-black text-[10px]">Dialect Belt:</span>
                    <span className="text-black font-bold">{cat.targetDialects}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-neutral-500 uppercase font-black text-[10px]">Acoustic Stems:</span>
                    <span className="text-neutral-700 font-medium">{cat.instruments.join(" • ")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#FF2E2E] uppercase font-black text-[10px]">Flagship:</span>
                    <span className="text-black font-bold">{cat.highlightTrack}</span>
                  </div>
                </div>
              </div>

              {/* Action Link to YouTube */}
              <a 
                href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-4 bg-[#E5FF00] hover:bg-[#FF2E2E] hover:text-white border-2 border-black text-black font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-[3px_3px_0px_0px_#000]"
              >
                <span>LISTEN ON YOUTUBE (OAC)</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
