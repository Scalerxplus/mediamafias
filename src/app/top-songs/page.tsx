"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Play, Pause, Flame, TrendingUp, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
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
    popularityLabel: "Trending #1 in Wedding BGM & In-Store Radio"
  },
  {
    rank: 2,
    title: "More Raja (Bagheli Lokgeet)",
    hindiTitle: "मोरे राजा - बघेली लोकगीत",
    dialect: "Bagheli",
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
    dialect: "Bundeli",
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
    dialect: "Bhojpuri",
    genre: "Acoustic Viraha Folk",
    duration: "5:12",
    bpm: 98,
    featuredArtists: "Media Mafias / Bholanath Gahmari",
    audioSrc: "Jani Ja Bideshba.mp3",
    popularityLabel: "Official Topic Channel Release"
  },
  {
    rank: 5,
    title: "एही अँगना म लाखन लुटाई देब",
    hindiTitle: "एही अँगना म लाखन लुटाई देब (सोहर दादरा)",
    dialect: "Bagheli",
    genre: "Traditional Sohar Dadra",
    duration: "4:51",
    bpm: 96,
    featuredArtists: "Vindhya Traditional Mandali",
    audioSrc: "एही अँगना म लाखन लुटाई देब - Sohar Dadra Male Version.mp3",
    popularityLabel: "Viral Domestic Folk Anthem"
  },
  {
    rank: 6,
    title: "Chadariya Jheeni (Nirgun Kabir)",
    hindiTitle: "चदरिया झीनी रे बीनी (दास कबीर)",
    dialect: "Sant Bhasha",
    genre: "Nirgun Kabir Bhajan",
    duration: "5:42",
    bpm: 80,
    featuredArtists: "Kabir Math Chants & Traditional Mandali",
    audioSrc: "Chadariya Jheeni - Nirgun Bhajan.mp3",
    popularityLabel: "Top Meditative & Sufi Stream"
  },
  {
    rank: 7,
    title: "Sohaag (Vivaah Geet)",
    hindiTitle: "सुहाग - मांगलिक विवाह गीत",
    dialect: "Classical Heartland",
    genre: "#UrbanMandapStyle BGM",
    duration: "4:52",
    bpm: 76,
    featuredArtists: "Master Varanasi Instrumentalists",
    audioSrc: "Sohaag - Vivaah Geet.mp3",
    popularityLabel: "Luxury Mandap Preferred Score"
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
    popularityLabel: "Hospital & Spa Ambient Choice"
  },
  {
    rank: 9,
    title: "Bagiya Ma Aaye Bhagwan (Kajari)",
    hindiTitle: "बगिया म आए भगवान (कजरी)",
    dialect: "Awadhi",
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
    dialect: "Bundeli",
    genre: "Rustic Folk Anthem",
    duration: "3:40",
    bpm: 120,
    featuredArtists: "Jhansi Heartland Ensemble",
    audioSrc: "Garda Udaay Deb.mp3",
    popularityLabel: "High-Energy Festival Anthem"
  }
];

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
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
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
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

      {/* Hero Header */}
      <section className="pt-36 pb-14 px-6 border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#FF69B4] border-2 border-black px-3.5 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-4 text-black">
            <Flame className="w-4 h-4 fill-current" />
            <span>TOP REGIONAL SOUNDSCAPES</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black mb-2">
                Top Regional Songs
              </h1>
              <div className="font-sans font-bold text-lg sm:text-2xl text-[#FF2E2E] mb-3">
                (शीर्ष लोकप्रिय लोकगीत एवं धुनें)
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-700 max-w-2xl leading-relaxed">
                The most streamed and licensed folk master recordings across Bagheli, Bundeli, Awadhi, and Bhojpuri. Broadcast 24/7 on The Future Radio and pre-cleared for one-stop commercial synchronization.
              </p>
            </div>

            <div className="flex gap-3 shrink-0">
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DB954] text-black font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-2 hover:bg-black hover:text-white transition-all"
              >
                <SpotifyIcon className="w-4 h-4 fill-current" />
                <span>Spotify Discography</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Table / Cards */}
      <section className="py-16 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          
          <div className="space-y-4 mb-16">
            {TOP_SONGS_LEADERBOARD.map((song) => {
              const isPlaying = playingId === song.rank;

              return (
                <div
                  key={song.rank}
                  className="bg-white border-4 border-black rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col md:flex-row md:items-center justify-between gap-5 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
                >
                  {/* Left: Rank + Info */}
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Rank Badge */}
                    <div className={`w-12 h-12 rounded-xl border-3 border-black flex items-center justify-center font-display font-black text-2xl shrink-0 shadow-[2px_2px_0px_0px_#000] ${
                      song.rank === 1 ? "bg-[#E5FF00] text-black" :
                      song.rank === 2 ? "bg-[#00E5FF] text-black" :
                      song.rank === 3 ? "bg-[#FF69B4] text-black" : "bg-neutral-100 text-black"
                    }`}>
                      #{song.rank}
                    </div>

                    {/* Play Button */}
                    <button
                      onClick={() => handleTogglePlay(song.rank, song.audioSrc)}
                      className={`w-12 h-12 rounded-full border-3 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000] transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
                        isPlaying ? "bg-[#FF2E2E] text-white" : "bg-[#E5FF00] text-black"
                      }`}
                      aria-label="Play preview"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </button>

                    {/* Song Details */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-black uppercase bg-[#00E5FF] border-2 border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                          {song.dialect}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-black/20">
                          {song.duration} • {song.bpm} BPM
                        </span>
                        <span className="font-mono text-[10px] font-bold text-[#FF2E2E] hidden sm:inline">
                          ★ {song.popularityLabel}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-black leading-tight">
                        {song.title}
                      </h3>
                      <div className="font-sans font-bold text-xs sm:text-sm text-[#FF2E2E]">
                        {song.hindiTitle}
                      </div>
                      <div className="font-mono text-xs text-neutral-600 mt-1">
                        Artists: {song.featuredArtists}
                      </div>

                      {/* 20s Preview Live Progress */}
                      {isPlaying && (
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-neutral-700">
                            <span>20s Studio Preview</span>
                            <span>{previewTime}s / {AUDIO_PREVIEW_DURATION}s</span>
                          </div>
                          <div className="w-full bg-neutral-200 border border-black rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-[#FF2E2E] h-full transition-all duration-200"
                              style={{ width: `${(previewTime / AUDIO_PREVIEW_DURATION) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Preview Finished Alert */}
                      {previewEndedId === song.rank && !isPlaying && (
                        <div className="mt-2 bg-[#1DB954]/20 border border-black p-2 rounded-lg text-xs font-mono font-bold text-black flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#1DB954] shrink-0" />
                          <span>20s Preview Finished. Listen to the full master on Spotify or YouTube:</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t-2 md:border-t-0 border-black/10">
                    <a
                      href={SPOTIFY_ARTIST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-white hover:bg-[#1DB954] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-xs uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                    >
                      <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Spotify</span>
                    </a>

                    <a
                      href={YOUTUBE_OAC_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-white hover:bg-[#FF2E2E] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-xs uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                      <span>YouTube</span>
                    </a>

                    <a
                      href={`https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20the%20top%20track%20"${encodeURIComponent(song.title)}"%20for%20sync%2Fcommercial.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 bg-[#FED7AA] hover:bg-[#fbc281] border-2 border-black rounded-lg font-mono font-black text-xs uppercase shadow-[2px_2px_0px_0px_#000] transition-colors"
                    >
                      <span>License ➔</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* B2B Sync Banner */}
          <div className="bg-white border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#10B981] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>100% DIRECT MASTER + PUBLISHING OWNERSHIP</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-black mb-1">
                Need These Tracks For Your OTT Web Series or Commercial Venue?
              </h2>
              <p className="font-mono text-xs sm:text-sm text-neutral-700 max-w-2xl">
                Zero collective society delays (PPL/IPRS exempt). Get pre-cleared sync licenses in 24 hours with complete statutory indemnification by ScalerX Lab.
              </p>
            </div>

            <Link
              href="/licensing"
              className="bg-[#00E5FF] hover:bg-black hover:text-[#00E5FF] text-black font-mono font-black text-xs uppercase px-6 py-3.5 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] shrink-0 transition-all"
            >
              Get Commercial License ➔
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
