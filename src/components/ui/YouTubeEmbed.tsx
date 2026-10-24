"use client";

import * as React from "react";
import { Play, ExternalLink, Music2 } from "lucide-react";
import { YOUTUBE_OAC_URL } from "@/lib/audio";

interface YouTubeEmbedProps {
  videoId?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  title: string;
  hindiTitle?: string;
  coverBg?: string;
  className?: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  videoUrl,
  thumbnailUrl,
  title,
  hindiTitle,
  coverBg = "from-[#1A1A24] to-[#0E0E14]",
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);

  // Extract video ID from URL if full URL is passed
  const resolvedVideoId = React.useMemo(() => {
    if (videoId) return videoId;
    if (!videoUrl) return null;
    const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  }, [videoId, videoUrl]);

  // Determine thumbnail image URL
  const resolvedThumbnail = React.useMemo(() => {
    if (thumbnailUrl) return thumbnailUrl;
    if (resolvedVideoId) {
      return `https://img.youtube.com/vi/${resolvedVideoId}/hqdefault.jpg`;
    }
    return null;
  }, [thumbnailUrl, resolvedVideoId]);

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
        <>
          {/* Background Thumbnail Image if Available */}
          {resolvedThumbnail && !imgError ? (
            <img
              src={resolvedThumbnail}
              alt={title}
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Atmospheric Folk Music Visualizer Backdrop */
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="w-32 h-32 rounded-full border border-amber-500/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-amber-500/30 flex items-center justify-center animate-spin" style={{ animationDuration: "20s" }}>
                  <Music2 className="w-10 h-10 text-amber-500/40" />
                </div>
              </div>
            </div>
          )}

          {/* Dark Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 backdrop-blur-[1px] transition-colors group-hover:via-black/25 flex flex-col justify-between p-3.5 sm:p-4">
            
            {/* Top Info Bar */}
            <div className="flex items-start justify-between gap-2 z-10">
              <div className="max-w-[80%]">
                <div className="font-display font-bold text-xs sm:text-sm text-white tracking-wide truncate drop-shadow-md">
                  {title}
                </div>
                {hindiTitle && (
                  <div className="font-sans text-[11px] text-[#D4AF37] font-semibold truncate drop-shadow">
                    {hindiTitle}
                  </div>
                )}
              </div>

              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 bg-black/70 hover:bg-[#FF0000] text-white rounded-lg border border-white/20 transition-all text-[10px] font-mono flex items-center gap-1 shrink-0 shadow"
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
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF0000] hover:bg-[#E60000] text-white flex items-center justify-center shadow-2xl shadow-red-600/50 hover:scale-110 active:scale-95 transition-all cursor-pointer group-hover:shadow-[0_0_25px_rgba(255,0,0,0.8)]"
                aria-label={`Play ${title} on YouTube`}
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white translate-x-0.5" />
              </button>
            </div>

            {/* Bottom Badge */}
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-300 z-10">
              <span className="flex items-center gap-1.5 bg-black/75 px-2 py-0.5 rounded border border-white/15 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
                <span className="text-[9px] tracking-wide font-bold">OFFICIAL YOUTUBE MASTER</span>
              </span>
              <span className="text-neutral-400 font-bold uppercase text-[9px] tracking-wider bg-black/50 px-1.5 py-0.5 rounded">
                @MediaMafias
              </span>
            </div>

          </div>
        </>
      )}
    </div>
  );
};
