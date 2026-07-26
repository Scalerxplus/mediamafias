"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Music, Radio, Heart } from "lucide-react";

export const YouTubeShowcase = () => {
  const channels = [
    {
      title: "Indie Music",
      description: "Discover fresh, original tracks from the best independent artists. Pure indie vibes.",
      url: "https://www.youtube.com/@MediaMafias",
      icon: <Music className="w-8 h-8 text-white" />,
      tag: "ORIGINALS",
      delay: 0.1
    },
    {
      title: "Bagheli & Folk",
      description: "Dive deep into our rich cultural roots with authentic Bagheli and North Indian folk music.",
      url: "https://www.youtube.com/@MediaMafiasBagheli",
      icon: <Radio className="w-8 h-8 text-white" />,
      tag: "ROOTS",
      delay: 0.2
    },
    {
      title: "Devotional",
      description: "Find your inner peace with our curated collection of soulful devotional songs and bhajans.",
      url: "https://www.youtube.com/@MediaMafiasDevotional",
      icon: <Heart className="w-8 h-8 text-white" />,
      tag: "SPIRITUAL",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 px-6 relative border-t border-white/5 bg-black overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-red-accent mb-4">
            <PlayCircle className="w-6 h-6" />
            <span className="font-mono text-sm tracking-[0.2em] uppercase">Media Mafias Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-white">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-accent to-orange-500">Channels</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto font-sans">
            Immerse yourself in our diverse audio universe. From indie pop to cultural roots and spiritual peace, we have a soundscape for every soul.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((channel, index) => (
            <motion.a
              key={channel.title}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: channel.delay }}
              className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl overflow-hidden hover:border-red-accent/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-accent/0 to-red-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono tracking-widest px-2 py-1 bg-white/5 rounded text-white/50 group-hover:text-red-accent/80 transition-colors">
                  {channel.tag}
                </span>
              </div>

              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-accent/20 transition-all duration-500">
                {channel.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold uppercase tracking-widest mb-3 group-hover:text-red-accent transition-colors">
                {channel.title}
              </h3>
              
              <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                {channel.description}
              </p>
              
              <div className="flex items-center gap-2 text-white font-mono text-sm tracking-widest uppercase group-hover:gap-4 transition-all">
                <span>Subscribe</span>
                <span className="text-red-accent">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
