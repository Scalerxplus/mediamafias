"use client";

import * as React from "react";
import { Play, ExternalLink, MessageCircle, Share2, Flame } from "lucide-react";
import { YouTubeShort } from "@/data/shorts";

export const YouTubeShortEmbed: React.FC<{ short: YouTubeShort }> = ({ short }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${short.videoId}/hqdefault.jpg`;
  const shortsUrl = `https://www.youtube.com/shorts/${short.videoId}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(short.whatsappShareText)}`;

  return (
    <div className="bg-[#121217] border border-white/10 hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group shadow-xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
      
      {/* 9:16 Vertical Video / Thumbnail Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-900">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${short.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={short.hindiTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0 absolute inset-0"
          />
        ) : (
          <>
            {/* Thumbnail */}
            {!imgError ? (
              <img
                src={thumbnailUrl}
                alt={short.hindiTitle}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-b from-neutral-900 to-black flex items-center justify-center">
                <Flame className="w-12 h-12 text-amber-500/40 animate-pulse" />
              </div>
            )}

            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/70 flex flex-col justify-between p-3.5">
              
              {/* Top Category Badge & External Link */}
              <div className="flex items-center justify-between gap-2 z-10">
                <span className="font-mono text-[10px] font-bold uppercase bg-red-600/90 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <Flame className="w-3 h-3 fill-current" />
                  <span>SHORTS</span>
                </span>

                <span className="font-mono text-[10px] font-bold text-amber-300 bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                  {short.duration}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="my-auto flex items-center justify-center z-10">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-14 h-14 rounded-full bg-[#FF0000] hover:bg-[#E60000] text-white flex items-center justify-center shadow-2xl shadow-red-600/60 hover:scale-110 active:scale-95 transition-all cursor-pointer group-hover:shadow-[0_0_25px_rgba(255,0,0,0.9)]"
                  aria-label={`Play ${short.hindiTitle} reel`}
                >
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                </button>
              </div>

              {/* Bottom Info in overlay */}
              <div className="space-y-1 z-10">
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded inline-block">
                  {short.categoryLabel}
                </span>
                <div className="font-sans font-bold text-xs sm:text-sm text-white line-clamp-2 drop-shadow-md">
                  {short.hindiTitle}
                </div>
              </div>

            </div>
          </>
        )}
      </div>

      {/* Meta & WhatsApp Sharing Section */}
      <div className="p-3.5 space-y-3">
        {/* Keywords tags */}
        <div className="flex flex-wrap gap-1">
          {short.tags.slice(0, 2).map((t, idx) => (
            <span
              key={idx}
              className="font-mono text-[9px] text-neutral-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded"
            >
              #{t.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        {/* Dual Actions: WhatsApp Status Share & YouTube Shorts */}
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/40 rounded-xl font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 transition-all shadow"
            title="Share directly to WhatsApp Status"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WA Status</span>
          </a>

          <a
            href={shortsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-2 bg-white/5 hover:bg-[#FF0000] text-neutral-300 hover:text-white border border-white/10 rounded-xl font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1 transition-colors"
            title="Open YouTube Shorts"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Open Shorts</span>
          </a>
        </div>
      </div>

    </div>
  );
};
