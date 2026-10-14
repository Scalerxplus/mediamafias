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
      description: "Elevating traditional rituals for modern diaspora and upscale venues. Authentic Awadhi and Bagheli marriage chants arranged with acoustic Shehnai, Sitar, and mellow percussion—free of harsh village distortion.",
      instruments: ["Shehnai", "Sitar", "Acoustic Tanpura", "Mridang"],
      targetDialects: "Awadhi • Bagheli • Bhojpuri",
      highlightTrack: "Ram Banra Ban Aayo Re",
      icon: <Sparkles className="w-6 h-6 text-amber-400" />
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
      icon: <CloudRain className="w-6 h-6 text-sky-400" />
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
      icon: <Flame className="w-6 h-6 text-red-accent" />
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
      icon: <Compass className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-black border-t-4 border-white text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-2 border-black text-black px-4 py-1.5 font-black text-xs md:text-sm uppercase tracking-widest rounded-full shadow-[4px_4px_0px_0px_#fff] mb-4">
              <span>THE INDO-GANGETIC FOLK TAXONOMY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-wider text-white leading-tight">
              CINEMATIC FOLK IN <br />
              <span className="text-red-accent underline decoration-4 underline-offset-8">
                FOUR TRADITIONS
              </span>
            </h2>
            <p className="text-secondary max-w-2xl font-mono mt-4 text-base">
              Recorded with verified grassroots folk vocalists from the heartland, produced and mastered in broadcast-grade cinematic audio.
            </p>
          </div>

          <a 
            href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end px-7 py-4 border-2 border-white bg-red-accent text-white font-display text-lg uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#fff] transition-all flex items-center gap-2 shrink-0"
          >
            <span>SUBSCRIBE ON YOUTUBE</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* 4 Cards Grid - Neo-Brutalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-neutral-950 border-4 border-white p-7 sm:p-9 rounded-2xl shadow-[6px_6px_0px_0px_#ef4444] flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#ef4444] transition-all group"
            >
              <div>
                {/* Tags row */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 bg-red-accent text-white rounded border border-black shadow-[2px_2px_0px_0px_#fff]">
                      {cat.tag}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-secondary">
                      {cat.subTag}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/20">
                    {cat.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-white mb-1 group-hover:text-red-accent transition-colors">
                  {cat.title}
                </h3>
                <div className="font-mono text-xs text-amber-400 font-bold tracking-wide mb-4">
                  {cat.subtitle}
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-6 font-mono">
                  {cat.description}
                </p>

                {/* Cultural Metadata Pills */}
                <div className="space-y-2 pt-4 border-t-2 border-white/10 mb-6 bg-black p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-secondary uppercase tracking-widest text-[10px]">Region:</span>
                    <span className="text-white font-bold">{cat.targetDialects}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-secondary uppercase tracking-widest text-[10px]">Instruments:</span>
                    <span className="text-white/80">{cat.instruments.join(" • ")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-red-accent uppercase tracking-widest text-[10px]">Flagship:</span>
                    <span className="text-white font-bold">{cat.highlightTrack}</span>
                  </div>
                </div>
              </div>

              {/* Action Link to YouTube */}
              <a 
                href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-4 bg-neutral-900 border-2 border-white text-white hover:bg-red-accent font-display text-base tracking-widest uppercase rounded-xl transition-all shadow-[3px_3px_0px_0px_#fff]"
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
