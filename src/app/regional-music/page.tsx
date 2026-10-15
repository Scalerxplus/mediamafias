"use client";

import * as React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Play, Pause, ExternalLink, Radio, Search, Filter, Disc3, Sparkles, CheckCircle2 } from "lucide-react";
import { getAudioUrl, SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL } from "@/lib/audio";

interface Release {
  id: string;
  title: string;
  hindiTitle: string;
  dialectKey: "bagheli" | "bundeli" | "awadhi" | "purbi";
  dialectLabel: string;
  hindiDialect: string;
  genre: string;
  duration: string;
  bpm: number;
  featuredArtists: string;
  description: string;
  youtubeUrl: string;
  spotifyUrl: string;
  audioSrc: string;
  coverBg: string;
}

const REGIONAL_RELEASES: Release[] = [
  // Bagheli
  {
    id: "rel-bagh-1",
    title: "More Raja (Bagheli Lokgeet)",
    hindiTitle: "मोरे राजा - बघेली लोकगीत",
    dialectKey: "bagheli",
    dialectLabel: "Bagheli Folk",
    hindiDialect: "बघेली",
    genre: "Rustic Folk Pop",
    duration: "4:12",
    bpm: 118,
    featuredArtists: "Susheel Kumar Dwivedi & Rewa Troupe",
    description: "High-velocity Rewa celebratory folk track fusing native Dholak grooves with modern broadcast stereo mastering.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    coverBg: "from-[#F59E0B] to-[#D97706]"
  },
  {
    id: "rel-bagh-2",
    title: "एही अँगना म लाखन लुटाई देब",
    hindiTitle: "एही अँगना म लाखन लुटाई देब (सोहर दादरा)",
    dialectKey: "bagheli",
    dialectLabel: "Bagheli Folk",
    hindiDialect: "बघेली",
    genre: "Sohar / Dadra",
    duration: "4:51",
    bpm: 96,
    featuredArtists: "Vindhya Traditional Mandali",
    description: "Heartfelt traditional childbirth celebratory Dadra with rich vocal texture and acoustic harmonium.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "एही अँगना म लाखन लुटाई देब - Sohar Dadra Male Version.mp3",
    coverBg: "from-[#EC4899] to-[#BE185D]"
  },
  {
    id: "rel-bagh-3",
    title: "Lakhan Lutai Deb (Female Version)",
    hindiTitle: "लाखन लुटाई देब - सोहर दादरा",
    dialectKey: "bagheli",
    dialectLabel: "Bagheli Folk",
    hindiDialect: "बघेली",
    genre: "Traditional Sohar",
    duration: "4:53",
    bpm: 94,
    featuredArtists: "Rewa Folk Troupe & Native Singers",
    description: "Authentic Bagheli newborn celebration song recorded with grassroots Rewa village folk singers.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Lakhan Lutai Deb - Sohar Dadra Female Version.mp3",
    coverBg: "from-[#8B5CF6] to-[#6D28D9]"
  },
  {
    id: "rel-bagh-4",
    title: "Jal Bharao Hilore (Sohar Dadar)",
    hindiTitle: "जल भराव हिलोरे (सोहर दादर)",
    dialectKey: "bagheli",
    dialectLabel: "Bagheli Folk",
    hindiDialect: "बघेली",
    genre: "Pastoral Country Folk",
    duration: "4:11",
    bpm: 104,
    featuredArtists: "Prameesh Mishra & Native Singers",
    description: "Vindhya pastoral folk depicting the village water ceremonies and springtime harvest cycles.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Jal Bharao Hilore - Sohar Dadar.mp3",
    coverBg: "from-[#10B981] to-[#047857]"
  },

  // Bundeli
  {
    id: "rel-bund-1",
    title: "Badariya Kari Re Hari",
    hindiTitle: "बदरिया कारी रे हरी (बुंदेली भाव)",
    dialectKey: "bundeli",
    dialectLabel: "Bundeli Folk",
    hindiDialect: "बुंदेली",
    genre: "Veer Ras / Monsoon",
    duration: "4:33",
    bpm: 112,
    featuredArtists: "Bundelkhand Akhada Mandali",
    description: "Traditional Bundelkhand monsoon ballad with thunderous rustic Dholak, Nagariya, and martial energy.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Badariya Kari Re Hari.mp3",
    coverBg: "from-[#3B82F6] to-[#1D4ED8]"
  },
  {
    id: "rel-bund-2",
    title: "Garda Udaay Deb",
    hindiTitle: "गरदा उड़ाय देब (देसी बुंदेली जोश)",
    dialectKey: "bundeli",
    dialectLabel: "Bundeli Folk",
    hindiDialect: "बुंदेली",
    genre: "Rustic Folk Anthem",
    duration: "3:40",
    bpm: 120,
    featuredArtists: "Jhansi Heartland Ensemble",
    description: "High-voltage Bundeli rustic celebration anthem reflecting the raw pride and festive verve of the region.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Garda Udaay Deb.mp3",
    coverBg: "from-[#EF4444] to-[#B91C1C]"
  },
  {
    id: "rel-bund-3",
    title: "Dekhi Leb",
    hindiTitle: "देखि लेब (बुंदेली विरह एवं भावना)",
    dialectKey: "bundeli",
    dialectLabel: "Bundeli Folk",
    hindiDialect: "बुंदेली",
    genre: "Viraha Lokgeet",
    duration: "2:33",
    bpm: 98,
    featuredArtists: "Sagar Rural Collective",
    description: "Intimate acoustic Bundeli composition capturing heartland emotional narratives and rustic harmonium.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Dekhi Leb.mp3",
    coverBg: "from-[#6366F1] to-[#4338CA]"
  },

  // Awadhi
  {
    id: "rel-awad-1",
    title: "Bagiya Ma Aaye Bhagwan (Kajari)",
    hindiTitle: "बगिया म आए भगवान (कजरी)",
    dialectKey: "awadhi",
    dialectLabel: "Awadhi Folk",
    hindiDialect: "अवधी",
    genre: "Monsoon Kajri",
    duration: "5:19",
    bpm: 88,
    featuredArtists: "Mirzapur & Varanasi Folk Ensemble",
    description: "Melancholic rain ballad celebrating the arrival of clouds in Eastern Uttar Pradesh.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Bagiya Ma Aaye Bhagwan - Kajari.mp3",
    coverBg: "from-[#14B8A6] to-[#0F766E]"
  },
  {
    id: "rel-awad-2",
    title: "Dhan Dhan Nagar Ayodhya (Sohar)",
    hindiTitle: "धन धन नगर अयोध्या (सोहर)",
    dialectKey: "awadhi",
    dialectLabel: "Awadhi Folk",
    hindiDialect: "अवधी",
    genre: "Awadhi Sohar",
    duration: "4:18",
    bpm: 92,
    featuredArtists: "Media Mafias Sessions",
    description: "Auspicious Awadhi birth celebration Sohar celebrating the arrival of Sri Ram in Ayodhya.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Dhan Dhan Nagar Ayodhya - Sohar.mp3",
    coverBg: "from-[#F97316] to-[#C2410C]"
  },
  {
    id: "rel-awad-3",
    title: "Ram Banra Ban Aayo Re (Banara)",
    hindiTitle: "राम बनरा बन आयो रे (विवाह गीत)",
    dialectKey: "awadhi",
    dialectLabel: "Awadhi Folk",
    hindiDialect: "अवधी",
    genre: "Vivah Geet / #UrbanMandapStyle",
    duration: "3:05",
    bpm: 92,
    featuredArtists: "ScalerX Lab Acoustic Ensemble",
    description: "Traditional groom arrival wedding ceremonial song tailored for auspicious Mandap entry and Tilak.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Ram Banra Ban Aayo Re - Banara.mp3",
    coverBg: "from-[#EAB308] to-[#A16207]"
  },

  // Purbi (Bhojpuri & Purvanchal)
  {
    id: "rel-pur-1",
    title: "Jani Ja Bideshba (Bhojpuri Acoustic)",
    hindiTitle: "जनी जा विदेशवा (भोजपुरी विरह)",
    dialectKey: "purbi",
    dialectLabel: "Purbi Folk (भोजपुरी)",
    hindiDialect: "पूर्वी / भोजपुरी",
    genre: "Bhojpuri Acoustic Folk",
    duration: "5:12",
    bpm: 98,
    featuredArtists: "Media Mafias / Bholanath Gahmari",
    description: "Historic Bholanath Gahmari composition depicting the pain of migration, performed with acoustic intimacy.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Jani Ja Bideshba.mp3",
    coverBg: "from-[#F43F5E] to-[#BE123C]"
  },
  {
    id: "rel-pur-2",
    title: "Bhinsare Ke Nindiya",
    hindiTitle: "भिंसरे के निंदिया (भोजपुरी प्रभाती)",
    dialectKey: "purbi",
    dialectLabel: "Purbi Folk (भोजपुरी)",
    hindiDialect: "पूर्वी / भोजपुरी",
    genre: "Prabhati Lokgeet",
    duration: "4:45",
    bpm: 86,
    featuredArtists: "Purvanchal Acoustic Artists",
    description: "Gentle morning acoustic ballad capturing dawn awakening across the villages of the Bhojpuri belt.",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Bhinsare Ke Nindiya.mp3",
    coverBg: "from-[#06B6D4] to-[#0E7490]"
  }
];

const DIALECT_META: Record<string, { title: string; hindiTitle: string; tag: string; description: string; origins: string }> = {
  "all": {
    title: "All Regional Releases",
    hindiTitle: "समस्त क्षेत्रीय लोकगीत एवं संगीत",
    tag: "INDO-GANGETIC MASTER ARCHIVE",
    description: "Explore authentic Bagheli, Bundeli, Awadhi, and Purbi folk recordings preserved with grassroots artists and mastered for global broadcast.",
    origins: "Rewa • Satna • Jhansi • Sagar • Varanasi • Ayodhya • Purvanchal"
  },
  "bagheli": {
    title: "Bagheli Folk Music",
    hindiTitle: "बघेली लोकगीत (बघेलखंड)",
    tag: "VINDHYA ORAL TRADITION",
    description: "Authentic oral music of Rewa, Satna, and Vindhyachal. Known for joyous Dadra, Sohar, Gailhai, and rustic Dholak beats passed down across generations.",
    origins: "Rewa, Satna, Sidhi, Shahdol & Vindhya Region"
  },
  "bundeli": {
    title: "Bundeli Folk Music",
    hindiTitle: "बुंदेली लोकगीत (बुंदेलखंड)",
    tag: "MARTIAL VEER RAS & RUSTIC BALLADS",
    description: "Fierce and celebratory folk tradition of Jhansi, Mahoba, and Sagar. Rich in 52-battle Alha-Udal epics, energetic Lamtera chants, and soulful Viraha.",
    origins: "Jhansi, Mahoba, Banda, Lalitpur & Sagar"
  },
  "awadhi": {
    title: "Awadhi Folk Music",
    hindiTitle: "अवधी लोकगीत (अवध एवं काशी)",
    tag: "SACRED RAM CHARIT & MONSOON KAJRI",
    description: "Soulful heartland songs of Lucknow, Ayodhya, and Mirzapur. World-renowned for Monsoon Kajri, auspicious Vivah Banara, and Ram Janmotsav Sohar.",
    origins: "Ayodhya, Lucknow, Mirzapur, Prayagraj & Varanasi"
  },
  "purbi": {
    title: "Purbi & Bhojpuri Music",
    hindiTitle: "पूर्वी एवं भोजपुरी लोकगीत (पूर्वांचल व बिहार)",
    tag: "ACOUSTIC VIRAHA & PURVANCHAL ROOTS",
    description: "Intimate and poetic folk of the Purvanchal and Bihar belt. Rooted in real migration narratives, Prabhati dawn chants, and classical acoustic instrumentation.",
    origins: "Bhojpur, Buxar, Ballia, Ghazipur & Purvanchal"
  }
};

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);

function RegionalMusicContent() {
  const searchParams = useSearchParams();
  const initialDialect = searchParams?.get("dialect") || "all";
  
  const [selectedDialect, setSelectedDialect] = React.useState<string>(initialDialect);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    const dialectFromUrl = searchParams?.get("dialect");
    if (dialectFromUrl && ["bagheli", "bundeli", "awadhi", "purbi"].includes(dialectFromUrl)) {
      setSelectedDialect(dialectFromUrl);
    }
  }, [searchParams]);

  const activeMeta = DIALECT_META[selectedDialect] || DIALECT_META["all"];

  const filteredReleases = REGIONAL_RELEASES.filter((rel) => {
    const matchesDialect = selectedDialect === "all" || rel.dialectKey === selectedDialect;
    const matchesSearch =
      rel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rel.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rel.dialectLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rel.featuredArtists.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rel.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDialect && matchesSearch;
  });

  const handleTogglePlay = (id: string, audioSrc: string) => {
    if (!audioRef.current) return;
    if (playingId === id) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      audioRef.current.src = getAudioUrl(audioSrc);
      audioRef.current.play().then(() => {
        setPlayingId(id);
      }).catch((e) => console.warn("Audio playback err:", e));
    }
  };

  const dialectTabs = [
    { key: "all", label: "All Regional Music", hindi: "सभी" },
    { key: "bagheli", label: "Bagheli", hindi: "बघेली" },
    { key: "bundeli", label: "Bundeli", hindi: "बुंदेली" },
    { key: "awadhi", label: "Awadhi", hindi: "अवधी" },
    { key: "purbi", label: "Purbi (Bhojpuri)", hindi: "पूर्वी / भोजपुरी" }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      <audio ref={audioRef} preload="none" onEnded={() => setPlayingId(null)} />

      {/* Top Heritage OAC Channel Banner */}
      <section className="pt-36 pb-12 px-6 border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Dialect Origin Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-2 border-black px-3.5 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
            <Radio className="w-3.5 h-3.5 text-black" />
            <span>{activeMeta.tag}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black mb-2">
                {activeMeta.title}
              </h1>
              <div className="font-sans font-bold text-lg sm:text-2xl text-[#FF2E2E] mb-3">
                {activeMeta.hindiTitle}
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-700 max-w-2xl leading-relaxed mb-3">
                {activeMeta.description}
              </p>
              <div className="font-mono text-xs text-neutral-500">
                <strong className="text-black">Cultural Origin:</strong> {activeMeta.origins}
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap gap-2.5 shrink-0">
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DB954] text-black font-mono font-black text-xs uppercase px-4 py-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-1.5 hover:bg-black hover:text-white transition-all"
              >
                <SpotifyIcon className="w-4 h-4 fill-current" />
                <span>Explore Discography</span>
              </a>

              <a
                href={YOUTUBE_OAC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF2E2E] text-white font-mono font-black text-xs uppercase px-4 py-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-1.5 hover:bg-black transition-all"
              >
                <YoutubeIcon className="w-4 h-4 fill-white" />
                <span>YouTube @MediaMafias</span>
              </a>
            </div>
          </div>

          {/* Dialect Filter Tabs */}
          <div className="mt-8 pt-8 border-t-2 border-black/10 flex flex-wrap gap-2 sm:gap-3">
            {dialectTabs.map((tab) => {
              const isActive = selectedDialect === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    if (playingId && audioRef.current) {
                      audioRef.current.pause();
                      setPlayingId(null);
                    }
                    setSelectedDialect(tab.key);
                  }}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl border-2 sm:border-3 border-black font-mono font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] ${
                    isActive
                      ? "bg-[#E5FF00] text-black shadow-[1px_1px_0px_0px_#000] translate-x-[2px] translate-y-[2px]"
                      : "bg-white text-black hover:bg-neutral-100"
                  }`}
                >
                  <span>{tab.label}</span>{" "}
                  <span className="font-sans text-[11px] font-bold text-neutral-600">({tab.hindi})</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* YouTube OAC Style Releases Shelf */}
      <section className="py-14 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Sub-header & Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-black uppercase bg-[#00E5FF] border-2 border-black px-2.5 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
                {filteredReleases.length} OFFICIAL RELEASES
              </span>
              <span className="font-mono text-xs font-bold text-neutral-800">
                100% DIRECT IP OWNED
              </span>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search releases or artists..."
                className="w-full pl-9 pr-3 py-2 bg-white border-2 border-black rounded-xl font-mono text-xs text-black placeholder:text-neutral-500 shadow-[2px_2px_0px_0px_#000] outline-none"
              />
            </div>
          </div>

          {/* OAC Releases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReleases.map((release) => {
              const isPlaying = playingId === release.id;

              return (
                <div
                  key={release.id}
                  className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all group"
                >
                  <div>
                    {/* 16:9 YouTube OAC Style Artwork Shelf */}
                    <div className={`relative aspect-video bg-gradient-to-br ${release.coverBg} border-b-4 border-black p-5 flex flex-col justify-between text-white overflow-hidden`}>
                      
                      {/* Ambient Vinyl Texture Background */}
                      <div className="absolute right-[-20px] bottom-[-20px] opacity-15 pointer-events-none">
                        <Disc3 className="w-44 h-44 text-black animate-spin-slow" />
                      </div>

                      {/* Top Badges */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-mono text-[10px] font-black uppercase bg-black text-[#E5FF00] border-2 border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                          {release.hindiDialect}
                        </span>
                        <span className="font-mono text-[10px] font-bold bg-black/80 backdrop-blur-sm text-white px-2 py-0.5 rounded border border-white/20">
                          {release.duration} • {release.bpm} BPM
                        </span>
                      </div>

                      {/* Center Play Indicator */}
                      <div className="relative z-10 flex items-center justify-center my-auto">
                        <button
                          onClick={() => handleTogglePlay(release.id, release.audioSrc)}
                          className={`w-14 h-14 rounded-full border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000] transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                            isPlaying ? "bg-[#FF2E2E] text-white" : "bg-[#E5FF00] text-black"
                          }`}
                          aria-label={isPlaying ? "Pause preview" : "Play preview"}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 fill-current" />
                          ) : (
                            <Play className="w-6 h-6 fill-current ml-1" />
                          )}
                        </button>
                      </div>

                      {/* Bottom Track Meta */}
                      <div className="relative z-10 flex items-center justify-between font-mono text-[11px] font-bold">
                        <span className="truncate max-w-[180px] bg-black/60 px-2 py-0.5 rounded">
                          {release.genre}
                        </span>
                        <span className="flex items-center gap-1 text-[#E5FF00]">
                          <CheckCircle2 className="w-3 h-3 text-[#E5FF00]" />
                          Verified Master
                        </span>
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-5">
                      <h3 className="font-display font-black text-2xl uppercase tracking-wide text-black mb-1 leading-tight group-hover:text-neutral-800">
                        {release.title}
                      </h3>
                      <div className="font-sans font-bold text-sm text-[#FF2E2E] mb-2">
                        {release.hindiTitle}
                      </div>

                      <p className="font-mono text-xs text-neutral-600 mb-2">
                        <strong className="text-black">Artists:</strong> {release.featuredArtists}
                      </p>

                      <p className="font-mono text-xs text-neutral-700 leading-relaxed">
                        {release.description}
                      </p>
                    </div>
                  </div>

                  {/* OAC Action Hub */}
                  <div className="p-5 pt-0 space-y-2.5">
                    
                    {/* In-Browser Preview Button */}
                    <button
                      onClick={() => handleTogglePlay(release.id, release.audioSrc)}
                      className={`w-full py-2.5 px-4 rounded-xl border-2 border-black font-mono font-black text-xs uppercase flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer ${
                        isPlaying
                          ? "bg-[#FF2E2E] text-white"
                          : "bg-[#E5FF00] text-black hover:bg-[#d4ec00]"
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 fill-current" />
                          <span>PAUSE PREVIEW</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>LISTEN PREVIEW (R2)</span>
                        </>
                      )}
                    </button>

                    {/* Dual Platform Links */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={release.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 bg-white hover:bg-[#1DB954] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                        title="Explore on Spotify"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Spotify</span>
                      </a>

                      <a
                        href={release.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 bg-white hover:bg-[#FF2E2E] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                        title="Watch on YouTube OAC"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                        <span>YouTube OAC</span>
                      </a>
                    </div>

                    {/* Pre-cleared Direct Licensing CTA */}
                    <a
                      href={`https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20the%20regional%20track%20"${encodeURIComponent(release.title)}"%20for%20OTT%2Fcommercial%2Fwedding%20use.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 bg-[#FED7AA] hover:bg-[#fbc281] border-2 border-black rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center shadow-[2px_2px_0px_0px_#000] transition-colors"
                    >
                      <span>Direct Sync / Wedding License ➔</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function RegionalMusicPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#C4B5FD] flex items-center justify-center font-mono font-bold">
        Loading Regional Music...
      </div>
    }>
      <RegionalMusicContent />
    </Suspense>
  );
}
