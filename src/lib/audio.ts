/**
 * Audio streaming configuration and Cloudflare R2 CDN resolution
 * 
 * Powered by Cloudflare R2 bucket: futureradio-audio
 * Endpoint: https://64dc65ba0638d6c32a069cd228d8706d.r2.cloudflarestorage.com
 * Public Base: https://pub-ba863acf4a4544f3b2c82ccd32b37e18.r2.dev
 * 
 * Cloudflare R2 offers 0 egress fees, enabling high-performance in-browser
 * audio playback without forcing users away from MediaMafias.com.
 */

export const R2_PUBLIC_BASE =
  process.env.NEXT_PUBLIC_R2_AUDIO_BASE_URL ||
  "https://pub-ba863acf4a4544f3b2c82ccd32b37e18.r2.dev";

export const SPOTIFY_ARTIST_URL =
  "https://open.spotify.com/artist/1mwA0Fbjp1AnnEEfj2Sroy?si=Ow5aIT5jSEKnrc0TJytIYg";

export const YOUTUBE_OAC_URL =
  "https://www.youtube.com/@MediaMafias";

/**
 * Strict preview duration limit (in seconds)
 * Previews are strictly capped to 20 seconds to route listeners to Spotify & YouTube OAC
 */
export const AUDIO_PREVIEW_DURATION = 20;
export const AUDIO_PREVIEW_START = 0;

export const getAudioUrl = (audioSrc?: string): string => {
  if (!audioSrc) {
    return `${R2_PUBLIC_BASE}/local_audio_vault/roots/5_Music/Ram%20Banra%20Ban%20Aayo%20Re%20-%20Banara.mp3`;
  }

  // If already an absolute URL (http / https)
  if (audioSrc.startsWith("http://") || audioSrc.startsWith("https://")) {
    return audioSrc;
  }

  // If pointing to local_audio_vault in R2
  if (audioSrc.startsWith("/local_audio_vault/") || audioSrc.startsWith("local_audio_vault/")) {
    const clean = audioSrc.replace(/^\/+/, "");
    const parts = clean.split("/");
    const encodedPath = parts.map((part) => encodeURIComponent(part)).join("/");
    return `${R2_PUBLIC_BASE}/${encodedPath}`;
  }

  // If it's a standalone music filename (e.g., 'More Raja - Bagheli Lokgeet.mp3')
  if (!audioSrc.includes("/") && audioSrc.endsWith(".mp3")) {
    return `${R2_PUBLIC_BASE}/local_audio_vault/roots/5_Music/${encodeURIComponent(audioSrc)}`;
  }

  // If it's a local public asset
  return audioSrc.startsWith("/") ? audioSrc : `/${audioSrc}`;
};
