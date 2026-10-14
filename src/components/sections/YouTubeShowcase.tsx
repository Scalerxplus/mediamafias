"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, ArrowUpRight, Flame, Radio, Heart } from "lucide-react";

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export const YouTubeShowcase = () => {
  const [activeVideo, setActiveVideo] = React.useState<string>("Saiyaan Na Aaye");

  const channels = [
    {
      title: "Media Mafias Roots",
      handle: "@MediaMafiasRoots",
      tagline: "The Flagship Folk Archive",
      description: "Authentic Bagheli, Bundeli, Awadhi, and Purvanchali folk hymns, Sohar, Kajri, and Alha ballads remastered in broadcast-grade audio.",
      url: "https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1",
      icon: <Radio className="w-6 h-6 text-red-accent" />,
      badge: "OFFICIAL ARTIST CHANNEL (OAC)",
      delay: 0.1
    },
    {
      title: "Media Mafias Bhakti",
      handle: "@MediaMafiasDevotional",
      tagline: "Sacred & Meditative Sounds",
      description: "Soulful Ramcharitmanas verses, Devi Jas, and Sant Kabir Nirgun soundscapes designed for spiritual peace and temple devotion.",
      url: "https://www.youtube.com/@MediaMafiasDevotional?sub_confirmation=1",
      icon: <Heart className="w-6 h-6 text-amber-400" />,
      badge: "DEVOTIONAL NETWORK",
      delay: 0.2
    },
    {
      title: "Media Mafias Originals",
      handle: "@MediaMafias",
      tagline: "Indie Pop & Modern Fusion",
      description: "Genre-bending vernacular indie music, Nachanhai folk-pop, and contemporary fusion tracks from breakthrough heartland artists.",
      url: "https://www.youtube.com/@MediaMafias?sub_confirmation=1",
      icon: <Flame className="w-6 h-6 text-orange-500" />,
      badge: "INDIE FUSION",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 px-6 relative border-t border-white/10 bg-black overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-accent/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-accent/30 bg-red-accent/10 font-mono text-[11px] text-red-accent tracking-[0.2em] uppercase rounded-full">
            <YoutubeIcon className="w-3.5 h-3.5 text-red-accent" />
            <span>THE YOUTUBE VIDEO & STREAMING NETWORK</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-white">
            Watch & Stream on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-accent via-orange-500 to-amber-400">
              Our Official Channels
            </span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto font-sans text-base">
            Subscribe to our official YouTube hubs to experience our cinematic 4K video visualizers, ritual compilations, and 24/7 vernacular radio streams.
          </p>
        </motion.div>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {channels.map((ch, index) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ch.delay }}
              className="bg-neutral-950/80 border border-white/10 p-7 rounded-xl flex flex-col justify-between hover:border-red-accent/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-accent/10 transition-all">
                    {ch.icon}
                  </div>
                  <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 bg-white/5 text-secondary border border-white/5 rounded">
                    {ch.badge}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white group-hover:text-red-accent transition-colors">
                    {ch.title}
                  </h3>
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                </div>
                
                <div className="font-mono text-xs text-red-accent/80 tracking-wider mb-3">
                  {ch.handle}
                </div>

                <p className="text-xs text-secondary leading-relaxed mb-6 font-sans">
                  {ch.description}
                </p>
              </div>

              <a
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-red-accent text-white font-mono text-xs tracking-widest uppercase rounded flex items-center justify-between border border-white/10 hover:border-red-accent transition-all duration-300"
              >
                <span>SUBSCRIBE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Big Conversion Banner (YouTube OAC + The Future Radio) */}
        <div className="bg-gradient-to-r from-red-accent/15 via-neutral-950 to-neutral-950 border border-red-accent/30 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-red-accent mb-2">
              <span className="w-2 h-2 rounded-full bg-red-accent animate-ping" />
              CONTINUOUS BROADCAST RELAY
            </div>
            <h3 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-widest text-white mb-3">
              Stream 24/7 AI Master Clock on The Future Radio
            </h3>
            <p className="text-sm font-sans text-secondary leading-relaxed">
              Don&apos;t wait for individual tracks. Tune in to our autonomous 24/7 live stream at <span className="text-white font-mono">thefutureradio.com/bagheli</span> with over 12,000 live streams and vertical ambient audio for homes, heritage venues, and commercial spaces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <a
              href="https://thefutureradio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-red-accent hover:text-white transition-all text-center rounded"
            >
              LAUNCH 24/7 WEB APP ➔
            </a>
            <a
              href="https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 border border-red-accent/60 bg-red-accent/10 text-red-accent hover:bg-red-accent hover:text-white font-mono text-xs uppercase tracking-widest transition-all text-center rounded flex items-center justify-center gap-2"
            >
              <YoutubeIcon className="w-4 h-4 fill-current text-red-accent" />
              <span>YOUTUBE (OAC)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
