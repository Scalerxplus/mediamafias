import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ALL_PLAYLISTS_LIST } from "@/data/playlists";
import {
  ListMusic,
  Sparkles,
  ArrowRight,
  Disc3,
  ExternalLink,
  BookOpen,
  Layers,
  HeartHandshake
} from "lucide-react";
import { SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL } from "@/lib/audio";

export const metadata: Metadata = {
  title: "Official Folk Music Playlists — Wedding, Mahila Sangeet, Sohar & Devi Jas | Media Mafias",
  description: "Explore official Media Mafias YouTube and Spotify playlists for authentic Bagheli, Bundeli, Awadhi, and Purbi folk. Shadi ke geet, Mahila Sangeet dance, Sohar-Dadra, Devi Jas, and Sawan Kajari.",
  keywords: [
    "Media Mafias Playlists",
    "Shadi ke geet playlist",
    "Vivah geet playlist",
    "Mahila sangeet dance playlist",
    "Bagheli lokgeet playlist",
    "Devi jas playlist",
    "Awadhi kajari playlist",
    "Bundeli rai playlist",
    "Indian folk music playlist Spotify YouTube"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/playlists",
  },
  openGraph: {
    title: "Official Regional Folk Playlists — Media Mafias",
    description: "Curated high-volume streaming playlists for weddings, ladies sangeet, childbirth celebrations, and festive rituals.",
    url: "https://www.mediamafias.com/playlists",
    siteName: "Media Mafias",
    images: [{ url: "https://www.mediamafias.com/og-image.png", width: 1200, height: 630 }],
  }
};

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

export default function PlaylistsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      {/* Hero Header */}
      <section className="pt-36 pb-16 px-6 border-b border-white/10 bg-radial-[at_top_center] from-[#1E1E26] via-[#0B0B0E] to-[#0B0B0E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-5">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#D4AF37]">Official Playlists</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-5">
            <ListMusic className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>OFFICIAL YOUTUBE &amp; SPOTIFY PLAYLIST HUBS</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-3">
            Curated Regional Folk Playlists
          </h1>

          <div className="font-sans font-bold text-xl sm:text-3xl text-[#D4AF37] mb-4">
            शादी के गीत, महिला संगीत, सोहर दादरा एवं भक्ति प्लेलिस्ट्स
          </div>

          <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
            बघेलखंड, बुंदेलखंड, अवध और पूर्वांचल के लोकगीतों को शादी-विवाह, महिला संगीत डांस, जन्मोत्सव और नवरात्र भक्ति जैसे उच्च-सर्च विषयों पर संकलित किया गया है। यूट्यूब पर नॉन-स्टॉप वीडियो देखें या स्पॉटिफाई और जियोसावन पर उच्च गुणवत्ता में सुनें।
          </p>

          {/* Quick Stats Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-neutral-300">
              6 SEO Curated Playlists
            </span>
            <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-neutral-300">
              26+ Master Studio Recordings
            </span>
            <span className="bg-[#1DB954]/15 border border-[#1DB954]/30 px-3.5 py-1.5 rounded-xl text-[#1DB954] font-bold">
              Available on Spotify &amp; JioSaavn
            </span>
          </div>
        </div>
      </section>

      {/* Playlists Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ALL_PLAYLISTS_LIST.map((playlist, idx) => (
              <div
                key={playlist.slug}
                className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group shadow-xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
              >
                {/* Visual Header */}
                <div className={`p-6 sm:p-8 bg-gradient-to-br ${playlist.bannerBg} border-b border-white/10 relative overflow-hidden`}>
                  <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
                    <Disc3 className="w-48 h-48 text-white animate-spin-slow" />
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase bg-black/60 text-[#D4AF37] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded backdrop-blur-sm">
                        {playlist.badge}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-white bg-black/60 px-2.5 py-0.5 rounded border border-white/15">
                        {playlist.tracks.length} Songs Included
                      </span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-amber-300 transition-colors">
                      {playlist.hindiTitle}
                    </h2>

                    <div className="font-mono text-xs text-neutral-300 font-semibold">
                      {playlist.seoTitle}
                    </div>

                    <p className="font-sans text-xs text-neutral-200 leading-relaxed line-clamp-2 pt-1">
                      {playlist.description}
                    </p>
                  </div>
                </div>

                {/* Top Included Tracks Snippet */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="font-mono text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider">
                      Included Featured Tracks:
                    </div>
                    <div className="space-y-2">
                      {playlist.tracks.slice(0, 3).map((track) => (
                        <div
                          key={track.id}
                          className="p-2.5 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between text-xs"
                        >
                          <div className="truncate mr-3">
                            <span className="font-display font-bold text-white tracking-wide block truncate">
                              {track.hindiTitle}
                            </span>
                            <span className="font-mono text-[10px] text-neutral-400 truncate block">
                              {track.title}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-[#D4AF37] bg-white/5 px-2 py-0.5 rounded border border-white/10 shrink-0">
                            {track.genreLabel}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <Link
                      href={`/playlists/${playlist.slug}`}
                      className="w-full py-3 px-4 bg-[#D4AF37] hover:bg-[#e5be47] text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                      <span>Open Playlist &amp; Watch Videos</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={playlist.spotifyPlaylistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-[#1DB954]/15 hover:bg-[#1DB954] text-[#1DB954] hover:text-black border border-[#1DB954]/40 rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Spotify</span>
                      </a>

                      <a
                        href={playlist.youtubePlaylistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-red-500/15 hover:bg-[#FF0000] text-red-400 hover:text-white border border-red-500/40 rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                        <span>YouTube Playlist</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dual Explore Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <Link
              href="/regional-music/lyrics"
              className="p-6 bg-[#14141A] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-2xl flex items-center justify-between group transition-all"
            >
              <div>
                <div className="font-mono text-[10px] font-bold text-[#D4AF37] uppercase">
                  COMPLETE DEVANAGARI TEXTS
                </div>
                <div className="font-display font-black text-xl text-white uppercase mt-0.5">
                  Folk Lyrics Vault (25 प्रामाणिक बोल)
                </div>
                <p className="font-mono text-xs text-neutral-400 mt-1">
                  दुआचार, परछन, बन्ना-बन्नी, सोहर, और कजरी के शुद्ध बोल 1-क्लिक में कॉपी करें।
                </p>
              </div>
              <BookOpen className="w-8 h-8 text-[#D4AF37] group-hover:scale-110 transition-transform shrink-0 ml-4" />
            </Link>

            <Link
              href="/regional-music"
              className="p-6 bg-[#14141A] border border-white/10 hover:border-amber-400 rounded-2xl flex items-center justify-between group transition-all"
            >
              <div>
                <div className="font-mono text-[10px] font-bold text-amber-400 uppercase">
                  DIALECT REPOSITORY
                </div>
                <div className="font-display font-black text-xl text-white uppercase mt-0.5">
                  Explore By Dialect (बोलियों के अनुसार)
                </div>
                <p className="font-mono text-xs text-neutral-400 mt-1">
                  बघेली, बुंदेली, अवधी एवं पूर्वी लोकगीतों के मूल संगीत संग्रह को एक्सप्लोर करें।
                </p>
              </div>
              <Layers className="w-8 h-8 text-neutral-300 group-hover:text-amber-400 group-hover:scale-110 transition-transform shrink-0 ml-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
