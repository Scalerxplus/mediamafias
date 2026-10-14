"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, CloudRain, Flame, Compass, ArrowUpRight } from "lucide-react";

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
      highlightTrack: "Ram Banra Ban Aayo Re (Wedding Geet)",
      youtubeQuery: "wedding",
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
      highlightTrack: "Luturi Jhalariya (Sohar) • Hari Rama Chhai Ghata (Kajri)",
      youtubeQuery: "sohar",
      icon: <CloudRain className="w-6 h-6 text-sky-400" />
    },
    {
      id: "folkpop",
      tag: "#HighFidelityFolk",
      subTag: "#NachanhaiPop",
      title: "High-Fidelity Folk Pop & Ballads",
      subtitle: "Bagheli Nachanhai • Alha-Udal Ballads • Bundeli Rai",
      description: "High-octane regional rhythms meeting modern sub-bass and cinematic percussion. Preserving the heroic tales of Alha-Udal from Bundelkhand and the foot-tapping groove of Bagheli Nachanhai without losing linguistic purity.",
      instruments: ["Nagariya", "Chimta", "Dholak", "Sub Bass", "Sarangi"],
      targetDialects: "Bundelkhand • Baghelkhand • Central India",
      highlightTrack: "Bagheli Nachanhai Folk Pop • Alha Udal Ballads",
      youtubeQuery: "nachanhai",
      icon: <Flame className="w-6 h-6 text-red-accent" />
    },
    {
      id: "nirgun",
      tag: "#SarangiSufi",
      subTag: "#MeditativeMusic",
      title: "Nirgun, Mystic & Sufi",
      subtitle: "Sant Kabir Bhajans • Soulful Sarangi • Meditative Soundscapes",
      description: "Introspective acoustic poetry of the Indo-Gangetic mystics. Hypnotic Sarangi motifs, subtle drone ambiances, and devotional depth designed for quiet contemplation, wellness spaces, and spiritual seekers.",
      instruments: ["Sarangi", "Ektara", "Ambient Drones", "Santur"],
      targetDialects: "Banaras • Awadh • Kabirpanth",
      highlightTrack: "Jheeni Re Jheeni • Daras • Kanhaiya",
      youtubeQuery: "nirgun",
      icon: <Compass className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-red-accent/30 bg-red-accent/10 font-mono text-[11px] text-red-accent tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-accent animate-ping" />
              THE INDO-GANGETIC FOLK TAXONOMY
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-white leading-tight">
              Cinematic Folk Across <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-accent via-orange-500 to-amber-400">
                Four Cultural Dimensions
              </span>
            </h2>
            <p className="text-secondary max-w-2xl font-sans mt-3 text-base">
              Bridging the gap between raw, low-fi field recordings and multi-crore corporate studio productions. We record with authentic grassroots practitioners and master in broadcast-grade cinematic fidelity.
            </p>
          </div>

          <a 
            href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end px-6 py-3 border border-red-accent bg-red-accent text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-red-accent transition-all duration-300 flex items-center gap-2 shrink-0 group"
          >
            <span>SUBSCRIBE ON YOUTUBE (OAC)</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-950/80 border border-white/10 p-8 rounded-xl relative group hover:border-red-accent/50 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Tags row */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 bg-white/5 border border-white/10 text-red-accent rounded">
                      {cat.tag}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-secondary/70">
                      {cat.subTag}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5">
                    {cat.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-widest text-white mb-1 group-hover:text-red-accent transition-colors">
                  {cat.title}
                </h3>
                <div className="font-mono text-xs text-amber-400/90 tracking-wider mb-4">
                  {cat.subtitle}
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-6 font-sans">
                  {cat.description}
                </p>

                {/* Cultural Metadata Pills */}
                <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-secondary/60 uppercase tracking-widest text-[10px]">Dialect Belt:</span>
                    <span className="text-white/80">{cat.targetDialects}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-secondary/60 uppercase tracking-widest text-[10px]">Acoustic Stems:</span>
                    <span className="text-secondary">{cat.instruments.join(" • ")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-red-accent/80 uppercase tracking-widest text-[10px]">Catalog Feature:</span>
                    <span className="text-white/90 font-medium">{cat.highlightTrack}</span>
                  </div>
                </div>
              </div>

              {/* Action Link to YouTube */}
              <a 
                href={`https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-3.5 bg-neutral-900 border border-white/10 hover:border-red-accent/40 rounded group/link text-xs font-mono tracking-widest uppercase text-white/90 hover:text-white hover:bg-red-accent/10 transition-all mt-2"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-accent" />
                  Stream on Official Artist Channel
                </span>
                <span className="text-red-accent group-hover/link:translate-x-1 transition-transform">
                  LISTEN 4K AUDIO ➔
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
