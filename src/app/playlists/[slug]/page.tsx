import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PLAYLISTS_DATA, ALL_PLAYLISTS_LIST } from "@/data/playlists";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { JioSaavnIcon } from "@/components/icons/JioSaavnIcon";
import {
  ListMusic,
  Sparkles,
  ArrowRight,
  Disc3,
  ExternalLink,
  BookOpen,
  MapPin,
  Music2,
  ChevronRight
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_PLAYLISTS_LIST.map((playlist) => ({
    slug: playlist.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const playlist = PLAYLISTS_DATA[slug];

  if (!playlist) {
    return {
      title: "Playlist Not Found — Media Mafias",
    };
  }

  return {
    title: `${playlist.hindiTitle} (${playlist.seoTitle}) | Media Mafias`,
    description: playlist.description,
    keywords: [...playlist.highVolumeKeywords, "Media Mafias", "Regional Folk Music Playlist"],
    alternates: {
      canonical: `https://www.mediamafias.com/playlists/${slug}`,
    },
    openGraph: {
      title: `${playlist.hindiTitle} — Official Playlist`,
      description: playlist.description,
      url: `https://www.mediamafias.com/playlists/${slug}`,
      siteName: "Media Mafias",
      images: [{ url: "https://www.mediamafias.com/og-image.png", width: 1200, height: 630 }],
    }
  };
}

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

export default async function PlaylistDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const playlist = PLAYLISTS_DATA[slug];

  if (!playlist) {
    notFound();
  }

  const otherPlaylists = ALL_PLAYLISTS_LIST.filter((p) => p.slug !== slug);

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      {/* Playlist Hero */}
      <section className={`pt-36 pb-16 px-6 border-b border-white/10 bg-gradient-to-b ${playlist.bannerBg} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/playlists" className="hover:text-amber-300 transition-colors">Playlists</Link>
            <span>/</span>
            <span className="text-[#D4AF37] truncate">{playlist.hindiTitle}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                <ListMusic className="w-3.5 h-3.5" />
                <span>{playlist.badge}</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight">
                {playlist.hindiTitle}
              </h1>

              <div className="font-sans font-bold text-lg sm:text-2xl text-[#D4AF37]">
                {playlist.seoTitle}
              </div>

              <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                {playlist.description}
              </p>

              {/* Keywords Tag Cloud */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {playlist.highVolumeKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] uppercase text-neutral-400 bg-black/40 border border-white/10 px-2 py-0.5 rounded"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Mega Outbound Action CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-72">
              <a
                href={playlist.youtubePlaylistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-[#FF0000] hover:bg-[#D40000] text-white font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-red-900/30"
              >
                <YoutubeIcon className="w-4 h-4 fill-white" />
                <span>Play Entire Playlist on YouTube</span>
              </a>

              <a
                href={playlist.spotifyPlaylistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-[#1DB954] hover:bg-[#1aa34a] text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-900/30"
              >
                <SpotifyIcon className="w-4 h-4 fill-current" />
                <span>Stream Playlist on Spotify</span>
              </a>

              <a
                href={playlist.jiosaavnPlaylistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-[#00BFA5]/20 hover:bg-[#00BFA5] text-[#00BFA5] hover:text-black border border-[#00BFA5]/40 rounded-xl font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all"
              >
                <JioSaavnIcon className="w-4 h-4 fill-current" />
                <span>Listen on JioSaavn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Video Grid */}
      <section className="py-16 px-6 flex-1">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full">
                {playlist.tracks.length} OFFICIAL RECORDINGS
              </span>
              <span className="font-mono text-xs text-neutral-400 hidden sm:inline">
                Direct YouTube Streams • Official Spotify &amp; JioSaavn Links
              </span>
            </div>

            <Link
              href="/regional-music/lyrics"
              className="font-mono text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
            >
              <span>Lyrics Vault</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlist.tracks.map((track) => (
              <div
                key={track.id}
                className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              >
                {/* 16:9 YouTube Video Embed Player */}
                <YouTubeEmbed
                  videoId={track.youtubeVideoId}
                  videoUrl={track.youtubeUrl}
                  title={track.title}
                  hindiTitle={track.hindiTitle}
                  coverBg={track.coverBg}
                />

                {/* Info & Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase bg-white/5 text-[#D4AF37] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded">
                        {track.dialectLabel}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {track.genreLabel} • {track.duration}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white group-hover:text-amber-300 transition-colors">
                      {track.hindiTitle}
                    </h3>
                    <div className="font-mono text-xs text-neutral-400">
                      {track.title}
                    </div>

                    <p className="font-sans text-xs text-neutral-300 leading-relaxed pt-1">
                      {track.description}
                    </p>

                    <div className="p-2.5 bg-black/40 border border-white/5 rounded-xl font-sans text-[11px] text-[#D4AF37]/90 leading-normal">
                      <strong>सांस्कृतिक विधान:</strong> {track.culturalNote}
                    </div>
                  </div>

                  {/* Triple Monetization & Lyrics Action Bar */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-2">
                      <a
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 bg-[#1DB954]/15 hover:bg-[#1DB954] text-[#1DB954] hover:text-black border border-[#1DB954]/30 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1 transition-all"
                        title="Stream on Spotify"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Spotify</span>
                      </a>

                      <a
                        href={track.jiosaavnUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 bg-[#00BFA5]/15 hover:bg-[#00BFA5] text-[#00BFA5] hover:text-black border border-[#00BFA5]/30 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1 transition-all"
                        title="Listen on JioSaavn"
                      >
                        <JioSaavnIcon className="w-3.5 h-3.5 fill-current" />
                        <span>JioSaavn</span>
                      </a>

                      <a
                        href={track.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 bg-red-500/15 hover:bg-[#FF0000] text-red-400 hover:text-white border border-red-500/30 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1 transition-all"
                        title="Watch full video on YouTube"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                        <span>YouTube</span>
                      </a>
                    </div>

                    {track.lyricsVaultSlug && (
                      <Link
                        href={`/regional-music/lyrics#${track.lyricsVaultSlug}`}
                        className="w-full py-1.5 px-3 bg-white/5 hover:bg-[#D4AF37]/20 text-neutral-300 hover:text-[#D4AF37] border border-white/10 hover:border-[#D4AF37]/40 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 transition-all"
                      >
                        <BookOpen className="w-3 h-3 text-[#D4AF37]" />
                        <span>Read Authentic Devanagari Lyrics ➔</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Recommended Playlists Shelf */}
          <div className="pt-12 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs uppercase font-bold text-[#D4AF37]">
                  EXPLORE MORE PLAYLISTS
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-white mt-1">
                  अन्य पारंपरिक प्लेलिस्ट्स
                </h3>
              </div>

              <Link
                href="/playlists"
                className="font-mono text-xs font-bold text-[#D4AF37] hover:underline"
              >
                View All 6 Playlists ➔
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherPlaylists.slice(0, 3).map((pl) => (
                <Link
                  key={pl.slug}
                  href={`/playlists/${pl.slug}`}
                  className="p-5 bg-[#141419] border border-white/10 hover:border-[#D4AF37]/50 rounded-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase font-bold text-[#D4AF37] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {pl.tracks.length} Songs
                    </span>
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors mt-2">
                      {pl.hindiTitle}
                    </h4>
                    <p className="font-mono text-[11px] text-neutral-400 mt-1 line-clamp-2">
                      {pl.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 mt-3 flex items-center justify-between font-mono text-[10px] text-neutral-400 group-hover:text-white">
                    <span>Listen on YouTube &amp; Spotify</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
