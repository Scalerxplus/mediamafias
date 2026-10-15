"use client";

import * as React from "react";
import { Play, Pause, Radio, MessageCircle, X, ChevronUp, ExternalLink, Sparkles } from "lucide-react";

export const PersistentAudioDock = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleRadio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio autoplay blocked or stream unavailable:", err);
        // Fallback open thefutureradio.com
        window.open("https://thefutureradio.com", "_blank");
      });
    }
  };

  const whatsappIntents = [
    {
      label: "Creator Academy (₹499)",
      badge: "CREATORS",
      badgeColor: "bg-[#E5FF00]",
      desc: "Join academy, submit raw vocals via WhatsApp & get distributed to 150+ DSPs.",
      url: "https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20join%20the%20Rs%20499%20Creator%20Academy%20and%20submit%20my%20folk%20song."
    },
    {
      label: "B2B In-Store AI Radio",
      badge: "BUSINESS",
      badgeColor: "bg-[#00E5FF]",
      desc: "100% PPL/IPRS-exempt commercial audio for hotels, retail & spaces with full indemnity.",
      url: "https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20need%20PPL-IPRS%20exempt%20In-Store%20AI%20Radio%20for%20my%20business."
    },
    {
      label: "OTT / Wedding Sync Licensing",
      badge: "SYNC & WEDDINGS",
      badgeColor: "bg-[#FF69B4]",
      desc: "Pre-cleared master + publishing rights for films, OTT web series & luxury weddings.",
      url: "https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20folk%20music%20for%20an%20OTT%20project%20or%20wedding."
    }
  ];

  return (
    <>
      {/* Hidden Audio Element pointing to audio asset / stream */}
      <audio
        ref={audioRef}
        src="/Latency Buffering.mp3"
        preload="none"
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
      />

      {/* Floating WhatsApp Modal */}
      {isWhatsAppModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg bg-white border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_#000] relative">
            <button
              onClick={() => setIsWhatsAppModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 border-2 border-black bg-neutral-100 hover:bg-[#FF2E2E] hover:text-white rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 bg-[#25D366] border-2 border-black rounded-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3 className="font-display font-black text-xl uppercase tracking-wider text-black">
                  1-Tap WhatsApp AI Agent
                </h3>
                <p className="font-mono text-xs text-neutral-600">
                  Select your requirement to connect directly on +91 9209290699
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
                  className="block p-3.5 bg-neutral-50 hover:bg-[#FED7AA] border-2 border-black rounded-xl transition-all shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-black text-lg uppercase tracking-wide text-black group-hover:text-black">
                      {intent.label}
                    </span>
                    <span className={`text-[10px] font-mono font-black border-2 border-black px-2 py-0.5 rounded ${intent.badgeColor}`}>
                      {intent.badge}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-neutral-700">
                    {intent.desc}
                  </p>
                </a>
              ))}
            </div>

            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-wider text-neutral-500">
              Direct response within 5 minutes • ScalerX Lab Enterprise
            </p>
          </div>
        </div>
      )}

      {/* Sticky Bottom Mini-Player Bar */}
      <aside 
        aria-label="Audio player and direct contacts"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-4 border-black px-4 sm:px-8 py-2.5 shadow-[0_-4px_0_0_#000] flex items-center justify-between"
      >
        {/* Left: 24/7 AI Radio Status & Play Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={toggleRadio}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-3 border-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_#000] ${
              isPlaying ? "bg-[#FF2E2E] text-white" : "bg-[#E5FF00] text-black"
            }`}
            aria-label={isPlaying ? "Pause Radio" : "Play The Future Radio"}
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
                className="font-display font-black text-sm sm:text-base tracking-wider uppercase text-black hover:text-[#FF2E2E] flex items-center gap-1"
              >
                THE FUTURE RADIO <span className="hidden md:inline font-mono text-[10px] bg-black text-[#E5FF00] px-1.5 py-0.2 rounded font-bold">24/7 AI CLOCK</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
            <p className="font-mono text-[11px] text-neutral-600 truncate max-w-[180px] sm:max-w-xs">
              {isPlaying ? "Streaming Broadcast Master Audio..." : "Click play to listen • 100% PPL/IPRS Exempt"}
            </p>
          </div>
        </div>

        {/* Center / Right: Quick Dialect Links & WhatsApp AI Agent */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://thefutureradio.com/bagheli"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase border-2 border-black bg-neutral-100 hover:bg-[#FED7AA] px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] transition-colors"
          >
            <Radio className="w-3.5 h-3.5 text-black" />
            <span>Bagheli Stream</span>
          </a>

          {/* 1-Tap WhatsApp Trigger Button */}
          <button
            onClick={() => setIsWhatsAppModalOpen(true)}
            className="bg-[#25D366] hover:bg-[#20ba59] border-2 sm:border-3 border-black text-black font-black uppercase text-xs sm:text-sm px-3.5 sm:px-5 py-2 rounded-xl flex items-center gap-2 shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-current" />
            <span className="font-display tracking-wider text-sm sm:text-base">WHATSAPP</span>
          </button>
        </div>
      </aside>
    </>
  );
};
