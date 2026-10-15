"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Play, Pause, ExternalLink, Radio, Search, Filter, Disc3, Sparkles } from "lucide-react";
import { getAudioUrl } from "@/lib/audio";

interface Song {
  id: string;
  title: string;
  hindiTitle: string;
  category: "bagheli" | "bundeli" | "awadhi" | "bhojpuri" | "wedding-mandap" | "sufi-bhakti";
  categoryLabel: string;
  dialect: string;
  genre: string;
  duration: string;
  bpm: number;
  featuredArtists: string;
  description: string;
  youtubeUrl: string;
  spotifyUrl?: string;
  audioSrc?: string;
}

const CATALOG_DATA: Song[] = [
  // Bagheli
  {
    id: "cat-1",
    title: "More Raja (Bagheli Lokgeet)",
    hindiTitle: "मोरे राजा - बघेली लोकगीत",
    category: "bagheli",
    categoryLabel: "Bagheli Folk",
    dialect: "Bagheli",
    genre: "Rhythmic Folk Pop",
    duration: "4:12",
    bpm: 118,
    featuredArtists: "Susheel Kumar Dwivedi & Rewa Troupe",
    description: "High-velocity Rewa celebratory folk track fusing native Dholak grooves with modern broadcast stereo mastering.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3"
  },
  {
    id: "cat-2",
    title: "एही अँगना म लाखन लुटाई देब",
    hindiTitle: "एही अँगना म लाखन लुटाई देब (सोहर दादरा)",
    category: "bagheli",
    categoryLabel: "Bagheli Folk",
    dialect: "Bagheli",
    genre: "Sohar / Dadra",
    duration: "4:51",
    bpm: 96,
    featuredArtists: "Vindhya Traditional Mandali",
    description: "Heartfelt traditional childbirth celebratory Dadra with rich vocal texture and acoustic harmonium.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "एही अँगना म लाखन लुटाई देब - Sohar Dadra Male Version.mp3"
  },
  {
    id: "cat-3",
    title: "Lakhan Lutai Deb (Female Version)",
    hindiTitle: "लाखन लुटाई देब - सोहर दादरा",
    category: "bagheli",
    categoryLabel: "Bagheli Folk",
    dialect: "Bagheli",
    genre: "Traditional Sohar",
    duration: "4:53",
    bpm: 94,
    featuredArtists: "Rewa Folk Troupe & Native Singers",
    description: "Authentic Bagheli newborn celebration song recorded with grassroots Rewa village folk singers.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Lakhan Lutai Deb - Sohar Dadra Female Version.mp3"
  },
  {
    id: "cat-4",
    title: "Jal Bharao Hilore (Sohar Dadar)",
    hindiTitle: "जल भराव हिलोरे (सोहर दादर)",
    category: "bagheli",
    categoryLabel: "Bagheli Folk",
    dialect: "Bagheli",
    genre: "Pastoral Country Folk",
    duration: "4:11",
    bpm: 104,
    featuredArtists: "Prameesh Mishra & Native Singers",
    description: "Vindhya pastoral folk depicting the village water ceremonies and springtime harvest cycles.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Jal Bharao Hilore - Sohar Dadar.mp3"
  },

  // Bundeli
  {
    id: "cat-5",
    title: "Badariya Kari Re Hari",
    hindiTitle: "बदरिया कारी रे हरी (बुंदेली भाव)",
    category: "bundeli",
    categoryLabel: "Bundeli Folk",
    dialect: "Bundeli",
    genre: "Veer Ras / Monsoon",
    duration: "4:33",
    bpm: 112,
    featuredArtists: "Bundelkhand Akhada Mandali",
    description: "Traditional Bundelkhand monsoon ballad with thunderous rustic Dholak, Nagariya, and martial energy.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Badariya Kari Re Hari.mp3"
  },
  {
    id: "cat-6",
    title: "Garda Udaay Deb",
    hindiTitle: "गरदा उड़ाय देब (देसी बुंदेली जोश)",
    category: "bundeli",
    categoryLabel: "Bundeli Folk",
    dialect: "Bundeli",
    genre: "Rustic Folk Anthem",
    duration: "3:40",
    bpm: 120,
    featuredArtists: "Jhansi Heartland Ensemble",
    description: "High-voltage Bundeli rustic celebration anthem reflecting the raw pride and festive verve of the region.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Garda Udaay Deb.mp3"
  },
  {
    id: "cat-7",
    title: "Dekhi Leb",
    hindiTitle: "देखि लेब (बुंदेली विरह एवं भावना)",
    category: "bundeli",
    categoryLabel: "Bundeli Folk",
    dialect: "Bundeli",
    genre: "Viraha Lokgeet",
    duration: "2:33",
    bpm: 98,
    featuredArtists: "Sagar Rural Collective",
    description: "Intimate acoustic Bundeli composition capturing heartland emotional narratives and rustic harmonium.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Dekhi Leb.mp3"
  },

  // Awadhi
  {
    id: "cat-8",
    title: "Bagiya Ma Aaye Bhagwan (Kajari)",
    hindiTitle: "बगिया म आए भगवान (कजरी)",
    category: "awadhi",
    categoryLabel: "Awadhi Folk",
    dialect: "Awadhi",
    genre: "Monsoon Kajri",
    duration: "5:19",
    bpm: 88,
    featuredArtists: "Mirzapur & Varanasi Folk Ensemble",
    description: "Melancholic rain ballad celebrating the arrival of clouds in Eastern Uttar Pradesh.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Kajari.mp3"
  },
  {
    id: "cat-9",
    title: "Dhan Dhan Nagar Ayodhya (Sohar)",
    hindiTitle: "धन धन नगर अयोध्या (सोहर)",
    category: "awadhi",
    categoryLabel: "Awadhi Folk",
    dialect: "Awadhi",
    genre: "Awadhi Sohar",
    duration: "4:18",
    bpm: 92,
    featuredArtists: "Media Mafias Sessions",
    description: "Auspicious Awadhi birth celebration Sohar celebrating the arrival of Sri Ram in Ayodhya.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Dhan Dhan Nagar Ayodhya - Sohar.mp3"
  },

  // Bhojpuri (Topic Channel Release)
  {
    id: "cat-10",
    title: "Jani Ja Bideshba (Bhojpuri Acoustic)",
    hindiTitle: "जनी जा विदेशवा (भोजपुरी विरह)",
    category: "bhojpuri",
    categoryLabel: "Bhojpuri Folk",
    dialect: "Bhojpuri",
    genre: "Bhojpuri Acoustic Folk",
    duration: "5:12",
    bpm: 98,
    featuredArtists: "Media Mafias / Bholanath Gahmari",
    description: "Historic Bholanath Gahmari composition depicting the pain of migration, performed with acoustic intimacy.",
    youtubeUrl: "https://www.youtube.com/channel/UC_Ua983PgNUkRzg2X0ENQxw",
    audioSrc: "Jani Ja Bideshba.mp3"
  },
  {
    id: "cat-11",
    title: "Bhinsare Ke Nindiya",
    hindiTitle: "भिंसरे के निंदिया (भोजपुरी सुबह)",
    category: "bhojpuri",
    categoryLabel: "Bhojpuri Folk",
    dialect: "Bhojpuri",
    genre: "Prabhati Lokgeet",
    duration: "4:45",
    bpm: 86,
    featuredArtists: "Purvanchal Acoustic Artists",
    description: "Gentle morning acoustic ballad capturing dawn awakening across the villages of the Bhojpuri belt.",
    youtubeUrl: "https://www.youtube.com/channel/UC_Ua983PgNUkRzg2X0ENQxw",
    audioSrc: "Bhinsare Ke Nindiya.mp3"
  },

  // Urban Mandap & Wedding BGM (Strictly Wedding)
  {
    id: "cat-12",
    title: "Ram Banra Ban Aayo Re (Banara)",
    hindiTitle: "राम बनरा बन आयो रे (विवाह गीत)",
    category: "wedding-mandap",
    categoryLabel: "Wedding & Mandap BGM",
    dialect: "Heartland Vivah",
    genre: "Vivah Geet / #UrbanMandapStyle",
    duration: "3:05",
    bpm: 92,
    featuredArtists: "ScalerX Lab Acoustic Ensemble",
    description: "Traditional groom arrival wedding ceremonial song tailored for auspicious Mandap entry and Tilak.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Ram Banra Ban Aayo Re - Banara.mp3"
  },
  {
    id: "cat-13",
    title: "Sohaag (Vivaah Geet)",
    hindiTitle: "सुहाग - मांगलिक विवाह गीत",
    category: "wedding-mandap",
    categoryLabel: "Wedding & Mandap BGM",
    dialect: "Acoustic Classical",
    genre: "#UrbanMandapStyle BGM",
    duration: "4:52",
    bpm: 76,
    featuredArtists: "Master Varanasi Instrumentalists",
    description: "Sacred matrimonial folk ballad capturing bride vidai and shringar blessings with acoustic purity.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Sohaag - Vivaah Geet.mp3"
  },
  {
    id: "cat-14",
    title: "Biyah Laye Raghubar (Parchhan Geet)",
    hindiTitle: "ब्याह लाए रघुबर (परछन गीत)",
    category: "wedding-mandap",
    categoryLabel: "Wedding & Mandap BGM",
    dialect: "Acoustic Ceremonial",
    genre: "Mandap Ambient BGM",
    duration: "4:13",
    bpm: 82,
    featuredArtists: "Classical Folk Masters",
    description: "Auspicious wedding ritual melody sung during the traditional welcome of the groom procession.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Biyah Laye Raghubar - Parchhan Geet.mp3"
  },
  {
    id: "cat-15",
    title: "लीन धनुष बन्ना (Bagheli Vivaah)",
    hindiTitle: "लीन धनुष बन्ना - बघेली विवाह गीत",
    category: "wedding-mandap",
    categoryLabel: "Wedding & Mandap BGM",
    dialect: "Ceremonial Folk",
    genre: "Wedding BGM",
    duration: "4:47",
    bpm: 84,
    featuredArtists: "Acoustic Shehnai & Sarangi",
    description: "Heartwarming traditional vivah composition celebrating the auspicious Sita-Ram Swayamvar theme.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "लीन धनुष बन्ना - Bagheli Vivaah Geet.mp3"
  },

  // Sufi & Devotional
  {
    id: "cat-16",
    title: "Chadariya Jheeni (Nirgun Kabir)",
    hindiTitle: "चदरिया झीनी रे बीनी (दास कबीर)",
    category: "sufi-bhakti",
    categoryLabel: "Sufi & Devotional",
    dialect: "Sant Bhasha",
    genre: "Nirgun Kabir Bhajan",
    duration: "5:42",
    bpm: 80,
    featuredArtists: "Kabir Math Chants & Traditional Mandali",
    description: "Philosophical Sant Kabir reflection on mortality arranged with meditative Tanpura and resonant acoustic depth.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Chadariya Jheeni - Nirgun Bhajan.mp3"
  },
  {
    id: "cat-17",
    title: "जगन्नाथ रक्ष माम्",
    hindiTitle: "जगन्नाथ रक्ष माम् (शाश्वत स्तुति)",
    category: "sufi-bhakti",
    categoryLabel: "Sufi & Devotional",
    dialect: "Sanskrit Devotional",
    genre: "Sacred Stotram",
    duration: "7:41",
    bpm: 72,
    featuredArtists: "Acoustic Meditative Ensemble",
    description: "Deep meditative Sanskrit chant honoring Lord Jagannath paired with serene acoustic resonance.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "जगन्नाथ रक्ष माम्.mp3"
  },
  {
    id: "cat-18",
    title: "राम गाड़ी वाले (Nirgun Bhajan)",
    hindiTitle: "राम गाड़ी वाले - निर्गुण भजन",
    category: "sufi-bhakti",
    categoryLabel: "Sufi & Devotional",
    dialect: "Folk Devotional",
    genre: "Nirgun Bhajan",
    duration: "7:47",
    bpm: 78,
    featuredArtists: "Media Mafias Heartland Mandali",
    description: "Profound rustic spiritual allegory depicting the soul journey with earthy vocals and chiming Manjira.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "राम गाड़ी वाले - Birgun Bhajan.mp3"
  },
  {
    id: "cat-19",
    title: "Shiva Panchakshara Stotram",
    hindiTitle: "शिव पंचाक्षर स्तोत्रम् (शंभू मिक्स)",
    category: "sufi-bhakti",
    categoryLabel: "Sufi & Devotional",
    dialect: "Sanskrit Devotional",
    genre: "Meditative Stotram",
    duration: "4:53",
    bpm: 82,
    featuredArtists: "Devotional Acoustic Ensemble",
    description: "Revered Adi Shankaracharya hymn to Lord Shiva arranged with deep acoustic rhythm and ambient drone.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias",
    audioSrc: "Shiva Panchakshara Stotram - Shiva Shambhoo Mix.mp3"
  }
];

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);

export default function CatalogPage() {
  const [selectedFilter, setSelectedFilter] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const filterPills = [
    { id: "all", label: "All Catalog" },
    { id: "bagheli", label: "Bagheli (बघेली)" },
    { id: "bundeli", label: "Bundeli (बुंदेली)" },
    { id: "awadhi", label: "Awadhi (अवधी)" },
    { id: "bhojpuri", label: "Bhojpuri (भोजपुरी)" },
    { id: "wedding-mandap", label: "Wedding & Mandap BGM" },
    { id: "sufi-bhakti", label: "Sufi & Devotional" }
  ];

  const filteredSongs = CATALOG_DATA.filter((song) => {
    const matchesFilter = selectedFilter === "all" || song.category === selectedFilter;
    const matchesSearch = 
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.hindiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.dialect.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleTogglePlay = (id: string, audioSrc?: string) => {
    if (!audioRef.current) return;
    if (playingId === id) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      audioRef.current.src = getAudioUrl(audioSrc || "/Latency Buffering.mp3");
      audioRef.current.play().then(() => {
        setPlayingId(id);
      }).catch((e) => console.warn(e));
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />
      
      <audio ref={audioRef} preload="none" onEnded={() => setPlayingId(null)} />

      {/* Header Banner */}
      <section className="pt-36 pb-12 px-6 border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-block bg-[#E5FF00] border-2 border-black px-3 py-1 rounded font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-3">
                OFFICIAL RECORDINGS ARCHIVE
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black">
                Music Catalog
              </h1>
              <p className="font-mono text-sm sm:text-base text-neutral-800 max-w-2xl mt-2">
                Browse strictly curated regional folk recordings across Baghelkhand, Awadh, Bundelkhand, and Purvanchal. Stream on YouTube &amp; DSPs or license for commercial projects.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@MediaMafias"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF2E2E] text-white font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-2 hover:bg-black transition-all"
              >
                <YoutubeIcon className="w-4 h-4 fill-white" />
                <span>Open YouTube OAC</span>
              </a>
            </div>
          </div>

          {/* Search Bar & Client-Side Filter Pills */}
          <div className="mt-8 pt-8 border-t-2 border-black/10 space-y-4">
            <div className="relative max-w-md">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by song, dialect, or genre..."
                className="w-full pl-11 pr-4 py-3 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black placeholder:text-neutral-500 shadow-[3px_3px_0px_0px_#000] outline-none focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {filterPills.map((pill) => {
                const isActive = selectedFilter === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setSelectedFilter(pill.id)}
                    className={`px-4 py-2 rounded-xl font-display font-black text-base uppercase tracking-wider border-2 border-black transition-all cursor-pointer shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] ${
                      isActive 
                        ? "bg-[#E5FF00] text-black shadow-[1px_1px_0px_0px_#000] translate-x-[2px] translate-y-[2px]" 
                        : "bg-white text-black hover:bg-neutral-100"
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs font-bold text-neutral-800 uppercase tracking-wider">
              Showing {filteredSongs.length} verified compositions
            </span>
            <span className="font-mono text-xs font-bold bg-white border-2 border-black px-2.5 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
              100% DIRECT IP OWNED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSongs.map((song) => {
              const isPlaying = playingId === song.id;
              return (
                <div
                  key={song.id}
                  className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] font-black uppercase bg-[#00E5FF] border-2 border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                        {song.dialect}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-black/20">
                        {song.duration} • {song.bpm} BPM
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl uppercase tracking-wide text-black mb-1">
                      {song.title}
                    </h3>
                    <div className="font-sans font-bold text-sm text-[#FF2E2E] mb-2">
                      {song.hindiTitle}
                    </div>

                    <p className="font-mono text-xs text-neutral-600 mb-2">
                      <strong className="text-black">Artists:</strong> {song.featuredArtists}
                    </p>

                    <p className="font-mono text-xs text-neutral-700 leading-relaxed mb-6">
                      {song.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t-2 border-black/10">
                    <button
                      onClick={() => handleTogglePlay(song.id, song.audioSrc)}
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
                          <span>LISTEN PREVIEW</span>
                        </>
                      )}
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={song.spotifyUrl || `https://open.spotify.com/search/${encodeURIComponent(song.title + " Media Mafias")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 bg-white hover:bg-[#1DB954] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                        title="Listen on Spotify"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Spotify</span>
                      </a>

                      <a
                        href={song.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 bg-white hover:bg-[#FF2E2E] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                        title="Watch on YouTube"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                        <span>YouTube</span>
                      </a>
                    </div>

                    <a
                      href={`https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20the%20track%20"${encodeURIComponent(song.title)}"%20for%20sync%20or%20wedding.`}
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
