"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Share2,
  Copy,
  Check,
  ExternalLink,
  Flame,
  FileText,
  ListMusic,
  Globe,
  Radio,
  Sparkles,
  ArrowRight
} from "lucide-react";
import {
  SpotifyBrandIcon,
  AppleMusicBrandIcon,
  YouTubeBrandIcon,
  AmazonMusicBrandIcon,
  JioSaavnBrandIcon
} from "@/components/icons/PlatformIcons";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

interface StreamingPlatform {
  name: string;
  hindiName: string;
  subtitle: string;
  url: string;
  brandColor: string;
  glowColor: string;
  badge: string;
  icon: React.ReactNode;
}

const STREAMING_PLATFORMS: StreamingPlatform[] = [
  {
    name: "Spotify",
    hindiName: "स्पॉटिफ़ाई",
    subtitle: "Official Artist Profile • Stream Full Albums & Singles",
    url: "https://open.spotify.com/artist/1mwA0Fbjp1AnnEEfj2Sroy",
    brandColor: "#1DB954",
    glowColor: "rgba(29, 185, 84, 0.35)",
    badge: "POPULAR",
    icon: <SpotifyBrandIcon className="w-7 h-7 text-[#1DB954] shrink-0" />
  },
  {
    name: "Apple Music",
    hindiName: "ऐप्पल म्यूज़िक",
    subtitle: "Complete Discography in Lossless & Spatial Audio",
    url: "https://music.apple.com/in/artist/6800178631",
    brandColor: "#FA243C",
    glowColor: "rgba(250, 36, 60, 0.35)",
    badge: "LOSSLESS",
    icon: <AppleMusicBrandIcon className="w-7 h-7 text-[#FA243C] shrink-0" />
  },
  {
    name: "YouTube",
    hindiName: "यूट्यूब (@MediaMafiasRoots)",
    subtitle: "Music Videos, 4K Studio Masters & Live Mandali Sessions",
    url: "https://www.youtube.com/@MediaMafiasRoots",
    brandColor: "#FF0000",
    glowColor: "rgba(255, 0, 0, 0.35)",
    badge: "4K VIDEO",
    icon: <YouTubeBrandIcon className="w-7 h-7 text-[#FF0000] shrink-0" />
  },
  {
    name: "JioSaavn",
    hindiName: "जियोसावन",
    subtitle: "High-Fidelity Regional Folk Audio & Curated Playlists",
    url: "https://www.jiosaavn.com/artist/media-mafias-songs/0fdN1qZoWow_",
    brandColor: "#00BFA5",
    glowColor: "rgba(0, 191, 165, 0.35)",
    badge: "HI-FI",
    icon: <JioSaavnBrandIcon className="w-7 h-7 text-[#00BFA5] shrink-0" />
  },
  {
    name: "Amazon Music",
    hindiName: "अमेज़न म्यूज़िक",
    subtitle: "HD Audio Streaming on Mobile, Alexa & Echo Devices",
    url: "https://music.amazon.in/artists/B0HDSSN53L/media-mafias?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_RZDIC5a0G61flcgd0pBTel2lS",
    brandColor: "#00A8E1",
    glowColor: "rgba(0, 168, 225, 0.35)",
    badge: "HD AUDIO",
    icon: <AmazonMusicBrandIcon className="w-7 h-7 text-[#00A8E1] shrink-0" />
  }
];

export default function LinksPage() {
  const [copied, setCopied] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const handleShare = async () => {
    const shareData = {
      title: "Media Mafias — Listen Everywhere",
      text: "बघेली, बुंदेली, अवधी एवं पूर्वी लोकगीत नए और 24-bit HI-FI साउंड में। Choose your favorite platform:",
      url: "https://www.mediamafias.com/links"
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // User cancelled or unsupported; fallback to clipboard
      }
    }

    // Fallback: copy link to clipboard
    try {
      await navigator.clipboard.writeText("https://www.mediamafias.com/links");
      setCopied(true);
      setToastMessage("Link copied to clipboard!");
      setTimeout(() => {
        setCopied(false);
        setToastMessage(null);
      }, 2500);
    } catch (e) {
      setToastMessage("https://www.mediamafias.com/links");
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0E] text-[#F5F5F0] relative overflow-hidden flex flex-col items-center px-4 py-8 sm:py-12 selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Ambient Golden & Studio Lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.18),rgba(11,11,14,0))] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(244,63,94,0.08),rgba(11,11,14,0))] pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#141318] border border-amber-500/50 text-amber-300 font-mono text-xs px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Centered Container (Optimized for Mobile Link-in-Bio) */}
      <div className="w-full max-w-lg mx-auto relative z-10 flex flex-col items-center">
        
        {/* Top Action Bar */}
        <div className="w-full flex items-center justify-between mb-6 pb-3 border-b border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-neutral-400 hover:text-white transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>mediamafias.com</span>
          </Link>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
            aria-label="Share Link in Bio"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>

        {/* Profile Card / Header */}
        <div className="w-full text-center flex flex-col items-center mb-8">
          
          {/* Avatar with Golden Breathing Ring */}
          <div className="relative mb-4 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-500 via-[#D4AF37] to-amber-200 opacity-70 blur-[3px] group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#D4AF37] bg-black p-1 shadow-2xl">
              <Image
                src="/logo-square.png"
                alt="Media Mafias Official Avatar"
                width={120}
                height={120}
                priority
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div
              className="absolute bottom-0 right-0 bg-[#0B0B0E] p-1 rounded-full border border-white/15 shadow-md"
              title="Verified Artist Collective"
            >
              <CheckCircle2 className="w-5 h-5 text-sky-400 fill-sky-500/20" />
            </div>
          </div>

          {/* Artist Name & Verified Check */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <h1 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wider text-white">
              MEDIA MAFIAS
            </h1>
          </div>

          {/* Official Handle & Tag */}
          <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5">
            <span>@MediaMafiasRoots</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300">Rewa, India</span>
          </div>

          {/* Hindi Tagline */}
          <div className="w-full bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5 mb-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <div className="font-sans font-bold text-base sm:text-lg text-white leading-snug">
              बघेली, बुंदेली, अवधी और पूर्वी लोकगीत
            </div>
            <div className="font-sans font-semibold text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#D4AF37] to-amber-400 mt-0.5">
              नए और 24-bit HI-FI स्टूडियो साउंड में
            </div>
          </div>

          {/* Quick Subtitle */}
          <p className="font-mono text-xs text-neutral-400 leading-relaxed max-w-sm">
            Choose your preferred streaming platform below to listen to our official songs, wedding rites, and devotional masters.
          </p>
        </div>

        {/* Primary Streaming Platforms List (5 Major DSPs) */}
        <div className="w-full space-y-3 mb-8">
          <div className="flex items-center justify-between px-1 mb-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>OFFICIAL STREAMING PLATFORMS</span>
            </span>
            <span className="font-mono text-[10px] text-amber-400/90 font-bold">5 PLATFORMS</span>
          </div>

          {STREAMING_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#141318]/90 hover:bg-[#1A1922] border border-white/10 hover:border-amber-400/60 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:-translate-y-0.5"
              style={{
                // Custom accent ring on hover
              }}
            >
              {/* Left Brand Emblem & Texts */}
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-black/50 group-hover:scale-105 transition-transform shrink-0"
                  style={{
                    boxShadow: `0 0 15px ${platform.glowColor}`
                  }}
                >
                  {platform.icon}
                </div>

                <div className="min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-amber-300 transition-colors">
                      {platform.name}
                    </span>
                    <span
                      className="font-mono text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border border-white/10 shrink-0"
                      style={{
                        color: platform.brandColor,
                        backgroundColor: `${platform.brandColor}15`
                      }}
                    >
                      {platform.badge}
                    </span>
                  </div>

                  <p className="font-mono text-[11px] text-neutral-400 truncate max-w-[210px] sm:max-w-xs mt-0.5">
                    {platform.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Action Button */}
              <div className="flex items-center gap-1 text-neutral-400 group-hover:text-white transition-colors shrink-0 ml-2">
                <span className="font-mono text-xs font-bold uppercase hidden sm:inline text-amber-400">
                  Open
                </span>
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Secondary Ecosystem Links (Vault, Playlists, Shorts, Radio) */}
        <div className="w-full space-y-2.5 mb-8">
          <div className="flex items-center justify-between px-1 mb-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              EXPLORE OUR ARCHIVES
            </span>
            <span className="font-mono text-[10px] text-neutral-500 font-bold">100% AUTHENTIC</span>
          </div>

          {/* 1. Lyrics Vault Link */}
          <Link
            href="/regional-music/lyrics"
            className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  Folk Lyrics Vault (25+ प्रामाणिक बोल)
                </div>
                <div className="font-mono text-[10px] text-neutral-400">
                  विवाह, दुआचार, परछन, सोहर व देवी जस के संपूर्ण बोल
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
          </Link>

          {/* 2. Playlists Hub Link */}
          <Link
            href="/playlists"
            className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                <ListMusic className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  Curated Playlists Hub (6 थीम्ड प्लेलिस्ट्स)
                </div>
                <div className="font-mono text-[10px] text-neutral-400">
                  विवाह संस्कार, महिला संगीत डांस, सोहर, जस व कजरी
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
          </Link>

          {/* 3. Shorts & Reels Hub Link */}
          <Link
            href="/shorts"
            className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-red-400/50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <Flame className="w-4 h-4 fill-current" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-sm text-white group-hover:text-red-300 transition-colors">
                  Shorts, Reels &amp; WhatsApp Status
                </div>
                <div className="font-mono text-[10px] text-neutral-400">
                  14+ 9:16 वीडियो रील्स • 1-Click व्हाट्सएप स्टेटस शेयर
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
          </Link>

          {/* 4. Autonomous 24/7 Radio Link */}
          <a
            href="https://thefutureradio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Radio className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  The Future Radio (24/7 लाइव देसी रेडियो)
                </div>
                <div className="font-mono text-[10px] text-neutral-400">
                  नॉन-स्टॉप बघेली, बुंदेली, अवधी लोकगीत ब्रॉडकास्ट
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* WhatsApp Direct Share & Community Button */}
        <div className="w-full mb-10">
          <a
            href="https://api.whatsapp.com/send?text=Media%20Mafias%20—%20बघेली,%20बुंदेली,%20अवधी%20और%20पूर्वी%20लोकगीत%20नए%20और%2024-bit%20HI-FI%20साउंड%20में:%20https://www.mediamafias.com/links"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40 cursor-pointer active:scale-98"
          >
            <WhatsAppIcon className="w-4 h-4 fill-black" />
            <span>Share All Links on WhatsApp</span>
          </a>
        </div>

        {/* Footer Attribution */}
        <div className="text-center font-mono text-[11px] text-neutral-500 space-y-1.5 pb-8">
          <div className="text-neutral-400 font-bold uppercase tracking-wider">
            Media Mafias • ScalerX Lab
          </div>
          <div>
            100% Sovereign Regional Folk Music Collective • Rewa (Vindhya Pradesh)
          </div>
          <div className="text-[10px] text-neutral-600">
            UDYAM-MP-38-0052942 • Direct Sound Recording &amp; Publishing IP
          </div>
        </div>

      </div>
    </main>
  );
}
