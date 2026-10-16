"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Play,
  Pause,
  Flame,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Radio,
  ExternalLink
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getAudioUrl, SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL, AUDIO_PREVIEW_DURATION } from "@/lib/audio";

interface TopSong {
  rank: number;
  title: string;
  hindiTitle: string;
  dialect: string;
  genre: string;
  duration: string;
  bpm: number;
  featuredArtists: string;
  audioSrc: string;
  popularityLabel: string;
}

const TOP_SONGS_LEADERBOARD: TopSong[] = [
  {
    rank: 1,
    title: "Ram Banra Ban Aayo Re (Banara)",
    hindiTitle: "राम बनरा बन आयो रे (विवाह गीत)",
    dialect: "Awadhi / Heartland",
    genre: "Auspicious Vivah Geet",
    duration: "3:05",
    bpm: 92,
    featuredArtists: "ScalerX Lab Acoustic Ensemble",
    audioSrc: "Ram Banra Ban Aayo Re - Banara.mp3",
    popularityLabel: "Trending #1 in Wedding Mandap Entry & In-Store Radio"
  },
  {
    rank: 2,
    title: "More Raja (Bagheli Lokgeet)",
    hindiTitle: "मोरे राजा - बघेली लोकगीत",
    dialect: "Bagheli (Rewa)",
    genre: "Rustic Celebratory Folk",
    duration: "4:12",
    bpm: 118,
    featuredArtists: "Susheel Kumar Dwivedi & Rewa Troupe",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    popularityLabel: "50,000+ Streams on The Future Radio 24/7"
  },
  {
    rank: 3,
    title: "Badariya Kari Re Hari",
    hindiTitle: "बदरिया कारी रे हरी (बुंदेली भाव)",
    dialect: "Bundeli (Jhansi)",
    genre: "Veer Ras / Monsoon Ballad",
    duration: "4:33",
    bpm: 112,
    featuredArtists: "Bundelkhand Akhada Mandali",
    audioSrc: "Badariya Kari Re Hari.mp3",
    popularityLabel: "Top Bundelkhand Cultural Stream"
  },
  {
    rank: 4,
    title: "Jani Ja Bideshba (Bhojpuri Acoustic)",
    hindiTitle: "जनी जा विदेशवा (भोजपुरी विरह)",
    dialect: "Bhojpuri (Purvanchal)",
    genre: "Acoustic Viraha Folk / Bidesiya",
    duration: "5:12",
    bpm: 98,
    featuredArtists: "Media Mafias / Bholanath Gahmari",
    audioSrc: "Jani Ja Bideshba.mp3",
    popularityLabel: "Official Topic Channel & DSP Viral Master"
  },
  {
    rank: 5,
    title: "एही अँगना म लाखन लुटाई देब",
    hindiTitle: "एही अँगना म लाखन लुटाई देब (सोहर दादरा)",
    dialect: "Bagheli (Vindhya)",
    genre: "Traditional Sohar Dadra",
    duration: "4:51",
    bpm: 96,
    featuredArtists: "Vindhya Traditional Mandali",
    audioSrc: "एही अँगना म लाखन लुटाई देब - Sohar Dadra Male Version.mp3",
    popularityLabel: "Viral Domestic Folk Celebration Anthem"
  },
  {
    rank: 6,
    title: "Chadariya Jheeni (Nirgun Kabir)",
    hindiTitle: "चदरिया झीनी रे बीनी (दास कबीर)",
    dialect: "Sant Bhasha / Kashi",
    genre: "Nirgun Kabir Bhajan",
    duration: "5:42",
    bpm: 80,
    featuredArtists: "Kabir Math Chants & Traditional Mandali",
    audioSrc: "Chadariya Jheeni - Nirgun Bhajan.mp3",
    popularityLabel: "Top Meditative & Spiritual Master"
  },
  {
    rank: 7,
    title: "Sohaag (Vivaah Geet)",
    hindiTitle: "सुहाग - मांगलिक विवाह गीत",
    dialect: "Classical Heartland",
    genre: "Traditional Mandap Score",
    duration: "4:52",
    bpm: 76,
    featuredArtists: "Master Varanasi Instrumentalists",
    audioSrc: "Sohaag - Vivaah Geet.mp3",
    popularityLabel: "Luxury Wedding Mandap Preferred Score"
  },
  {
    rank: 8,
    title: "जगन्नाथ रक्ष माम्",
    hindiTitle: "जगन्नाथ रक्ष माम् (शाश्वत स्तुति)",
    dialect: "Sanskrit Devotional",
    genre: "Sacred Stotram",
    duration: "7:41",
    bpm: 72,
    featuredArtists: "Acoustic Meditative Ensemble",
    audioSrc: "जगन्नाथ रक्ष माम्.mp3",
    popularityLabel: "Hospital & Wellness Ambient Choice"
  },
  {
    rank: 9,
    title: "Bagiya Ma Aaye Bhagwan (Kajari)",
    hindiTitle: "बगिया म आए भगवान (कजरी)",
    dialect: "Awadhi (Mirzapur)",
    genre: "Monsoon Rain Ballad",
    duration: "5:19",
    bpm: 88,
    featuredArtists: "Mirzapur & Varanasi Folk Ensemble",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Kajari.mp3",
    popularityLabel: "Eastern UP Seasonal Classic"
  },
  {
    rank: 10,
    title: "Garda Udaay Deb",
    hindiTitle: "गरदा उड़ाय देब (देसी बुंदेली जोश)",
    dialect: "Bundeli (Sagar)",
    genre: "Rustic Folk Anthem",
    duration: "3:40",
    bpm: 120,
    featuredArtists: "Jhansi Heartland Ensemble",
    audioSrc: "Garda Udaay Deb.mp3",
    popularityLabel: "High-Energy Festival Anthem"
  }
];

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

export default function TopSongsPage() {
  const [playingId, setPlayingId] = React.useState<number | null>(null);
  const [previewTime, setPreviewTime] = React.useState(0);
  const [previewEndedId, setPreviewEndedId] = React.useState<number | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    setPreviewTime(Math.min(AUDIO_PREVIEW_DURATION, Math.floor(current)));
    if (current >= AUDIO_PREVIEW_DURATION) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPreviewEndedId(playingId);
      setPlayingId(null);
      setPreviewTime(0);
    }
  };

  const handleTogglePlay = (rank: number, audioSrc: string) => {
    if (!audioRef.current) return;
    if (playingId === rank) {
      audioRef.current.pause();
      setPlayingId(null);
      setPreviewTime(0);
    } else {
      setPreviewEndedId(null);
      setPreviewTime(0);
      audioRef.current.src = getAudioUrl(audioSrc);
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => {
        setPlayingId(rank);
      }).catch((e) => console.warn(e));
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setPlayingId(null);
          setPreviewTime(0);
        }}
      />

      {/* Hero Header: Heritage Noir & Studio Bronze */}
      <section className="relative pt-36 pb-14 px-6 border-b border-white/10 bg-radial-[at_top_center] from-[#1A1A22] via-[#0B0B0E] to-[#0B0B0E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,57,43,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] tracking-wider uppercase mb-5">
            <Flame className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
            <span>CENTRAL INDIA STREAMING LEADERBOARD</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-2 leading-tight">
                Top Regional Songs
              </h1>
              <div className="font-sans font-bold text-xl sm:text-3xl text-[#D4AF37] mb-4">
                शीर्ष लोकप्रिय लोकगीत एवं विवाह धुनें
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                The most streamed and licensed folk master recordings across Bagheli, Bundeli, Awadhi, and Bhojpuri. Broadcast 24/7 on The Future Radio and pre-cleared for one-stop wedding and commercial synchronization.
              </p>
            </div>

            <div className="flex gap-3 shrink-0">
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DB954] hover:bg-[#1aa34a] text-black font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-black/50"
              >
                <SpotifyIcon className="w-4 h-4 fill-current" />
                <span>Spotify Playlist</span>
              </a>

              <a
                href={YOUTUBE_OAC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C0392B] hover:bg-[#a93226] text-white font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-black/50"
              >
                <YoutubeIcon className="w-4 h-4 fill-white" />
                <span>YouTube @MediaMafias</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Tracks Section */}
      <section className="py-16 px-6 flex-1 bg-[#0E0E12]">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-6 pb-3 border-b border-white/10">
            <span>OFFICIAL CHART • VERIFIED MASTERS</span>
            <span>20s STUDIO PREVIEW ENFORCED</span>
          </div>

          {TOP_SONGS_LEADERBOARD.map((song) => {
            const isPlaying = playingId === song.rank;

            return (
              <div
                key={song.rank}
                className={`border rounded-2xl p-5 transition-all ${
                  isPlaying
                    ? "bg-[#16161F] border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                    : "bg-[#121217] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Rank, Play Button, Details */}
                  <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                    {/* Rank Badge */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-2xl shrink-0 ${
                        song.rank === 1
                          ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                          : song.rank === 2
                          ? "bg-[#A1A1AA] text-black"
                          : song.rank === 3
                          ? "bg-[#CD7F32] text-black"
                          : "bg-white/5 text-neutral-400 border border-white/10"
                      }`}
                    >
                      #{song.rank}
                    </div>

                    {/* Play/Pause Button */}
                    <button
                      onClick={() => handleTogglePlay(song.rank, song.audioSrc)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                        isPlaying
                          ? "bg-[#C0392B] text-white shadow-[0_0_15px_rgba(192,57,43,0.4)]"
                          : "bg-[#D4AF37] text-black hover:scale-105 hover:bg-[#e5be47]"
                      }`}
                      aria-label={isPlaying ? "Pause track" : "Play 20s preview"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    {/* Song Titles & Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-black text-xl uppercase tracking-wide text-white truncate">
                          {song.title}
                        </h3>
                        <span className="font-mono text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30 shrink-0">
                          {song.dialect}
                        </span>
                      </div>
                      <div className="font-sans font-bold text-sm text-[#D4AF37] mb-1">
                        {song.hindiTitle}
                      </div>
                      <div className="font-mono text-xs text-neutral-400">
                        <strong className="text-neutral-300">Artists:</strong> {song.featuredArtists} •{" "}
                        <span className="text-neutral-500">{song.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions, Badges, Streaming */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
                    {/* Outbound Spotify & YouTube buttons */}
                    <a
                      href={SPOTIFY_ARTIST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#181820] hover:bg-[#1DB954] hover:text-black border border-white/10 rounded-lg font-mono font-bold text-xs uppercase flex items-center gap-1.5 text-neutral-300 transition-colors"
                    >
                      <SpotifyIcon className="w-3.5 h-3.5" />
                      <span>Spotify</span>
                    </a>

                    <a
                      href={YOUTUBE_OAC_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#181820] hover:bg-[#C0392B] hover:text-white border border-white/10 rounded-lg font-mono font-bold text-xs uppercase flex items-center gap-1.5 text-neutral-300 transition-colors"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5" />
                      <span>YouTube</span>
                    </a>

                    {/* Direct WhatsApp Licensing Button */}
                    <a
                      href={`https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20chartbuster%20rank%20%23${song.rank}%20"${encodeURIComponent(song.title)}"%20for%20event%2Fwedding%2Fcommercial%20use.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/30 rounded-lg font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-all"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>License</span>
                    </a>
                  </div>
                </div>

                {/* Live Preview Progress Bar */}
                {isPlaying && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#D4AF37] mb-1.5">
                      <span>Playing Studio Master Preview</span>
                      <span>{previewTime}s / {AUDIO_PREVIEW_DURATION}s Limit</span>
                    </div>
                    <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#D4AF37] h-full transition-all duration-200"
                        style={{ width: `${(previewTime / AUDIO_PREVIEW_DURATION) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Preview Ended Banner */}
                {previewEndedId === song.rank && !isPlaying && (
                  <div className="mt-3 bg-[#1DB954]/10 border border-[#1DB954]/30 p-2.5 rounded-xl text-center font-mono text-xs text-[#1DB954]">
                    ✓ 20-second preview completed • Stream full track on Spotify or YouTube OAC
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
