/**
 * Audio streaming configuration and Cloudflare R2 CDN resolution
 * 
 * Cloudflare R2 offers 0 egress fees, making it the ideal CDN for hosting
 * in-browser preview audio clips without forcing users to leave the site.
 */

export const getAudioUrl = (audioSrc?: string): string => {
  if (!audioSrc) {
    return "/Latency Buffering.mp3";
  }

  // If already an absolute URL (e.g., https://pub-xxx.r2.dev/track.mp3 or https://cdn.mediamafias.com/audio/track.mp3)
  if (audioSrc.startsWith("http://") || audioSrc.startsWith("https://")) {
    return audioSrc;
  }

  // Check if an R2 custom domain or public bucket base URL is set in env
  const r2Base = process.env.NEXT_PUBLIC_R2_AUDIO_BASE_URL;
  if (r2Base) {
    const cleanBase = r2Base.replace(/\/+$/, "");
    const cleanPath = audioSrc.replace(/^\/+/, "");
    return `${cleanBase}/${cleanPath}`;
  }

  // Fallback to local / public folder asset
  return audioSrc.startsWith("/") ? audioSrc : `/${audioSrc}`;
};
