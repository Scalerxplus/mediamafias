"use client";

import * as React from "react";
import { Play, Pause, Radio, X, ChevronUp, ExternalLink, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getAudioUrl, AUDIO_PREVIEW_DURATION } from "@/lib/audio";

export const PersistentAudioDock = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [previewTime, setPreviewTime] = React.useState(0);
  const [previewEnded, setPreviewEnded] = React.useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    setPreviewTime(Math.min(AUDIO_PREVIEW_DURATION, Math.floor(current)));
    if (current >= AUDIO_PREVIEW_DURATION) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setPreviewEnded(true);
      setPreviewTime(0);
    }
  };

  const toggleRadio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setPreviewTime(0);
    } else {
      setPreviewEnded(false);
      setPreviewTime(0);
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio autoplay blocked or stream unavailable:", err);
        window.open("https://thefutureradio.com", "_blank");
      });
    }
  };

  const whatsappIntents = [
    {
      label: "Academy of Folk Music & Heritage (₹499)",
      badge: "CREATORS",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      desc: "Enroll in academy, submit raw mobile vocals via WhatsApp & join Media Mafias catalog.",
      url: "https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20enroll%20in%20the%20Academy%20of%20Folk%20Music%20%26%20Heritage%20(%E2%82%B9499%20membership)%20and%20submit%20my%20folk%20song."
    },
    {
      label: "B2B In-Store AI Radio",
      badge: "BUSINESS",
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/40",
      desc: "100% PPL/IPRS-exempt commercial audio for hotels, retail & spaces with full legal indemnity.",
      url: "https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20need%20PPL-IPRS%20exempt%20In-Store%20AI%20Radio%20for%20my%20business."
    },
    {
      label: "OTT / Wedding Sync Licensing",
      badge: "SYNC & WEDDINGS",
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
      desc: "Pre-cleared master + publishing rights for films, OTT web series & luxury weddings.",
      url: "https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20folk%20music%20for%20an%20OTT%20project%20or%20wedding."
    }
  ];

  return (
    <>
      {/* Audio Element with strict 20s limit */}
      <audio
        ref={audioRef}
        src={getAudioUrl("Ram Banra Ban Aayo Re - Banara.mp3")}
        preload="none"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
          setPreviewTime(0);
        }}
        onError={() => {
          setIsPlaying(false);
          setPreviewTime(0);
        }}
      />

      {/* Floating WhatsApp Modal with Studio Luxury Dark styling */}
      {isWhatsAppModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg bg-[#141318] border border-white/15 rounded-2xl p-6 shadow-2xl relative text-white">
            <button
              onClick={() => setIsWhatsAppModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 border border-white/15 bg-white/5 hover:bg-white/15 rounded-lg text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="p-2.5 bg-[#25D366]/20 border border-[#25D366]/40 rounded-xl">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              </span>
              <div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white">
                  1-Tap WhatsApp Desk
                </h3>
                <p className="font-mono text-xs text-neutral-400">
                  Select your requirement to connect on +91 9209290699
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-5">
              {whatsappIntents.map((intent, idx) => (
                <a
                  key={idx}
                  href={intent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsWhatsAppModalOpen(false)}
                  className="block p-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/40 rounded-xl transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-base uppercase tracking-wide text-neutral-200 group-hover:text-amber-300 transition-colors">
                      {intent.label}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${intent.badgeColor}`}>
                      {intent.badge}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-neutral-400">
                    {intent.desc}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Media Mafias Desk · Rewa / Delhi / Bangalore</span>
              <span className="text-emerald-400 font-bold">● Active 24/7</span>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Mini-Player Bar in Studio Dark Luxury */}
      <aside 
        aria-label="Audio player and direct contacts"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-xl border-t border-white/10 px-4 sm:px-8 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] flex items-center justify-between text-white"
      >
        {/* Left: 24/7 AI Radio Status & Play Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={toggleRadio}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer ${
              isPlaying
                ? "bg-red-600 text-white border border-red-500"
                : "bg-amber-500 hover:bg-amber-400 text-black border border-amber-400"
            }`}
            aria-label={isPlaying ? "Pause 20s Preview" : "Play 20s Preview"}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <a
                href="https://thefutureradio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-sm sm:text-base tracking-wider uppercase text-neutral-100 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                THE FUTURE RADIO <span className="hidden md:inline font-mono text-[9px] bg-amber-500/15 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-bold">24/7 AI BROADCAST</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
            <p className="font-mono text-[11px] text-neutral-400 truncate max-w-[200px] sm:max-w-xs">
              {isPlaying
                ? `Playing 20s Studio Preview (${previewTime}s/${AUDIO_PREVIEW_DURATION}s)...`
                : previewEnded
                ? "20s Preview Finished • Stream on Spotify / YouTube ↗"
                : "Click play for 20s studio preview • 100% PPL/IPRS Exempt"}
            </p>
          </div>
        </div>

        {/* Center / Right: Quick Dialect Links & WhatsApp AI Agent */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://thefutureradio.com/bagheli"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase border border-white/15 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors"
          >
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            <span>Bagheli Stream</span>
          </a>

          {/* 1-Tap WhatsApp Trigger Button */}
          <button
            onClick={() => setIsWhatsAppModalOpen(true)}
            className="bg-[#25D366] hover:bg-[#20ba59] text-black font-bold uppercase text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-black fill-current" />
            <span className="font-display tracking-wider text-sm sm:text-base">WHATSAPP</span>
          </button>
        </div>
      </aside>
    </>
  );
};
