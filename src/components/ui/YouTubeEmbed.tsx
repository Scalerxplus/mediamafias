"use client";

import * as React from "react";
import { Play, ExternalLink } from "lucide-react";
import { YOUTUBE_OAC_URL } from "@/lib/audio";

interface YouTubeEmbedProps {
  videoId?: string;
  videoUrl?: string;
  title: string;
  hindiTitle?: string;
  coverBg?: string;
  className?: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  videoUrl,
  title,
  hindiTitle,
  coverBg = "from-[#1A1A24] to-[#0E0E14]",
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Extract video ID from URL if full URL is passed
  const resolvedVideoId = React.useMemo(() => {
    if (videoId) return videoId;
    if (!videoUrl) return null;
    const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  }, [videoId, videoUrl]);

  const targetUrl = videoUrl || (resolvedVideoId ? `https://www.youtube.com/watch?v=${resolvedVideoId}` : YOUTUBE_OAC_URL);

  return (
    <div className={`relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br ${coverBg} border border-white/10 group shadow-lg ${className}`}>
      {isPlaying && resolvedVideoId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${resolvedVideoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0 absolute inset-0"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black/40 backdrop-blur-[2px] transition-colors group-hover:bg-black/20">
          {/* Top Info Bar */}
          <div className="flex items-start justify-between gap-2 z-10">
            <div className="max-w-[80%]">
              <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide truncate">
                {title}
              </div>
              {hindiTitle && (
                <div className="font-sans text-[11px] text-[#D4AF37] font-semibold truncate">
                  {hindiTitle}
                </div>
              )}
            </div>

            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 bg-black/60 hover:bg-[#FF0000] text-white rounded-lg border border-white/15 transition-all text-[10px] font-mono flex items-center gap-1 shrink-0"
              title="Open directly on YouTube"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Center Glowing Play Button */}
          <div className="my-auto flex items-center justify-center z-10">
            <button
              onClick={() => {
                if (resolvedVideoId) {
                  setIsPlaying(true);
                } else {
                  window.open(targetUrl, "_blank");
                }
              }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF0000] hover:bg-[#E60000] text-white flex items-center justify-center shadow-2xl shadow-red-600/50 hover:scale-110 active:scale-95 transition-all cursor-pointer group-hover:shadow-[0_0_25px_rgba(255,0,0,0.7)]"
              aria-label={`Play ${title} on YouTube`}
            >
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
            </button>
          </div>

          {/* Bottom Badge */}
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-300 z-10">
            <span className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
              <span>OFFICIAL YOUTUBE MASTER</span>
            </span>
            <span className="text-neutral-400 font-bold uppercase text-[9px] tracking-wider">
              @MediaMafias
            </span>
          </div>

          {/* Ambient Video Glow */}
          <div className="absolute inset-0 bg-radial-[at_center] from-red-600/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
    </div>
  );
};
