"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Play, Pause, ExternalLink, Radio, Search, Filter, Disc3, Sparkles } from "lucide-react";

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
}

const CATALOG_DATA: Song[] = [
  // Bagheli
  {
    id: "cat-1",
    title: "Bagheli Nachanhai Folk Pop",
    hindiTitle: "बघेली नचनहाई फोक पॉप",
    category: "bagheli",
    categoryLabel: "Bagheli Folk",
    dialect: "Bagheli",
    genre: "Rhythmic Folk Pop",
    duration: "4:05",
    bpm: 118,
    featuredArtists: "Susheel Kumar Dwivedi & Rewa Troupe",
    description: "High-velocity Rewa celebratory folk track fusing native Dholak grooves with modern stereo mastering.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-2",
    title: "Bagheli Sohar Dadra",
    hindiTitle: "बघेली सोहर दादरा (मेल वर्जन)",
    category: "bagheli",
    categoryLabel: "Bagheli Folk",
    dialect: "Bagheli",
    genre: "Sohar / Dadra",
    duration: "4:48",
    bpm: 96,
    featuredArtists: "Vindhya Traditional Mandali",
    description: "Heartfelt traditional childbirth celebratory Dadra with rich vocal texture and acoustic harmonium.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-3",
    title: "Luturi Jhalariya (Bagheli Sohar)",
    hindiTitle: "लुटुरी झलरिया (बघेली सोहर)",
    category: "bagheli",
    categoryLabel: "Bagheli Folk",
    dialect: "Bagheli",
    genre: "Traditional Sohar",
    duration: "4:12",
    bpm: 94,
    featuredArtists: "Susheel Kumar Dwivedi & Rewa Folk Troupe",
    description: "Authentic Bagheli newborn celebration song recorded with grassroots Rewa village folk singers.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-4",
    title: "Mahua Ujari Ga",
    hindiTitle: "महुआ उजरि गा (बघेली)",
    category: "bagheli",
    categoryLabel: "Bagheli Folk",
    dialect: "Bagheli",
    genre: "Pastoral Country Folk",
    duration: "3:58",
    bpm: 104,
    featuredArtists: "Prameesh Mishra & Native Singers",
    description: "Vindhya pastoral folk depicting the village mahua harvest and springtime forest cycles.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },

  // Bundeli
  {
    id: "cat-5",
    title: "Alha Udal Mahoba Sangram",
    hindiTitle: "आल्हा ऊदल महोबा संग्राम",
    category: "bundeli",
    categoryLabel: "Bundeli Folk",
    dialect: "Bundeli",
    genre: "Veer Ras Epic",
    duration: "6:45",
    bpm: 112,
    featuredArtists: "Bundelkhand Akhada Mandali",
    description: "Historic 52-battle saga of Alha and Udal with thumping Dholak, Nagariya, and martial energy.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-6",
    title: "Chale Aaba More Raja",
    hindiTitle: "चले आबा मोरे राजा (बुंदेली विरह)",
    category: "bundeli",
    categoryLabel: "Bundeli Folk",
    dialect: "Bundeli",
    genre: "Viraha Lokgeet",
    duration: "4:20",
    bpm: 102,
    featuredArtists: "Jhansi Heartland Ensemble",
    description: "Rustic Bundeli migration ballad highlighting rural resilience and emotional longing.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-7",
    title: "Bundeli Lamtera Geet",
    hindiTitle: "बुंदेली लमटेरा गीत",
    category: "bundeli",
    categoryLabel: "Bundeli Folk",
    dialect: "Bundeli",
    genre: "Lamtera / Festive Lok",
    duration: "4:10",
    bpm: 98,
    featuredArtists: "Sagar Rural Collective",
    description: "Seasonal agrarian harvest chanting traditionally sung across the plains of Bundelkhand.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },

  // Awadhi
  {
    id: "cat-8",
    title: "Hari Rama Chhai Ghata Ghanghor",
    hindiTitle: "हरी रामा छाई घटा घनघोर (कजरी)",
    category: "awadhi",
    categoryLabel: "Awadhi Folk",
    dialect: "Awadhi",
    genre: "Monsoon Kajri",
    duration: "5:20",
    bpm: 88,
    featuredArtists: "Mirzapur & Varanasi Folk Ensemble",
    description: "Melancholic rain ballad celebrating the arrival of clouds in Eastern Uttar Pradesh.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-9",
    title: "Saiyaan Na Aaye (Awadhi Viraha)",
    hindiTitle: "सइयां न आए (अवधी विरह लोक)",
    category: "awadhi",
    categoryLabel: "Awadhi Folk",
    dialect: "Awadhi",
    genre: "Viraha Geet",
    duration: "4:32",
    bpm: 86,
    featuredArtists: "Media Mafias Sessions",
    description: "Poetic longing crossing heartland households with delicate bansuri and harmonium swells.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },

  // Bhojpuri (Topic Channel Release)
  {
    id: "cat-10",
    title: "Resham Ki Dori (Bhojpuri Acoustic)",
    hindiTitle: "रेशम की डोरी (भोजपुरी भाव गीत)",
    category: "bhojpuri",
    categoryLabel: "Bhojpuri Folk",
    dialect: "Bhojpuri",
    genre: "Bhojpuri Acoustic Folk",
    duration: "3:45",
    bpm: 98,
    featuredArtists: "Media Mafias - Topic Release",
    description: "Official Bhojpuri release distributed via Madverse to the Media Mafias - Topic channel, arranged with clean acoustic strings.",
    youtubeUrl: "https://www.youtube.com/channel/UC_Ua983PgNUkRzg2X0ENQxw"
  },

  // Urban Mandap & Wedding BGM (Strictly Wedding)
  {
    id: "cat-11",
    title: "Ram Banra Ban Aayo Re (Vivah Geet)",
    hindiTitle: "राम बनरा बन आयो रे (विवाह गीत)",
    category: "wedding-mandap",
    categoryLabel: "Wedding & Mandap BGM",
    dialect: "Heartland Vivah",
    genre: "Vivah Geet / #UrbanMandapStyle",
    duration: "4:30",
    bpm: 92,
    featuredArtists: "ScalerX Lab Acoustic Ensemble",
    description: "Refined ceremonial wedding song for auspicious rituals, bridegroom Tilak, and sacred entry.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-12",
    title: "Beatless Wedding BGM",
    hindiTitle: "बीटलेस वेडिंग बीजीएम (शालीन मंडप वादन)",
    category: "wedding-mandap",
    categoryLabel: "Wedding & Mandap BGM",
    dialect: "Acoustic Classical",
    genre: "#UrbanMandapStyle BGM",
    duration: "7:15",
    bpm: 76,
    featuredArtists: "Master Varanasi Instrumentalists",
    description: "Pure acoustic Shehnai, Sitar, and Tanpura score designed for luxury wedding ceremonies without loud beats.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-13",
    title: "Shehnai-Sitar Contrast",
    hindiTitle: "शहनाई-सितार जुगलबंदी (विवाह पृष्ठभूमि)",
    category: "wedding-mandap",
    categoryLabel: "Wedding & Mandap BGM",
    dialect: "Acoustic Jugalbandi",
    genre: "Mandap Ambient BGM",
    duration: "6:10",
    bpm: 82,
    featuredArtists: "Classical Folk Masters",
    description: "Auspicious instrumental duet creating an aristocratic, sacred atmosphere for luxury hotel receptions.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-14",
    title: "Haldi Shringar Dhun",
    hindiTitle: "हल्दी श्रृंगार धुन (मांगलिक वादन)",
    category: "wedding-mandap",
    categoryLabel: "Wedding & Mandap BGM",
    dialect: "Purvanchal Ceremonial",
    genre: "Haldi Ritual BGM",
    duration: "3:50",
    bpm: 84,
    featuredArtists: "Acoustic Shehnai & Sarangi",
    description: "Gentle turmeric ceremonial music creating an intimate, sacred family atmosphere.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },

  // Sufi & Devotional
  {
    id: "cat-15",
    title: "Karein Bhagat Mai Aarti Dui Biriya (Devi Jas)",
    hindiTitle: "करैं भगत माई आरती दुइ बिरिया (बघेली देवी जस)",
    category: "sufi-bhakti",
    categoryLabel: "Sufi & Devotional",
    dialect: "Bagheli Devotional",
    genre: "Devi Jas / Sharda Stuti",
    duration: "5:10",
    bpm: 116,
    featuredArtists: "Maihar Temple Mandali",
    description: "Authentic temple devotional songs recorded with Timki, Manjira, and chorus in native Bagheli.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-16",
    title: "Jheeni Re Jheeni (Das Kabir Nirgun)",
    hindiTitle: "झीनी रे झीनी बीनी चदरिया (दास कबीर)",
    category: "sufi-bhakti",
    categoryLabel: "Sufi & Devotional",
    dialect: "Sant Bhasha",
    genre: "Nirgun Kabir Bhajan",
    duration: "5:45",
    bpm: 80,
    featuredArtists: "Sadiq Jung Bahadur & Kabir Math Chants",
    description: "Mystical spiritual contemplation rendered with Tanpura, Sarangi, and reflective acoustic depth.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  },
  {
    id: "cat-17",
    title: "Jagannath Raksha Stotram (Acoustic Lofi)",
    hindiTitle: "जगन्नाथ रक्षा स्तोत्रम् (लो-फाई भक्ति)",
    category: "sufi-bhakti",
    categoryLabel: "Sufi & Devotional",
    dialect: "Sanskrit Devotional",
    genre: "Acoustic Lofi Stotram",
    duration: "4:15",
    bpm: 72,
    featuredArtists: "Acoustic Meditative Ensemble",
    description: "Peaceful Sanskrit chanting paired with acoustic warmth for daily meditation and puja.",
    youtubeUrl: "https://www.youtube.com/@MediaMafias"
  }
];

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
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

  const handleTogglePlay = (id: string) => {
    if (!audioRef.current) return;
    if (playingId === id) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      audioRef.current.src = "/Latency Buffering.mp3";
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
                      onClick={() => handleTogglePlay(song.id)}
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

                    <div className="flex gap-2">
                      <a
                        href={song.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-white hover:bg-neutral-100 border-2 border-black rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-1 shadow-[2px_2px_0px_0px_#000]"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5 fill-[#FF2E2E]" />
                        <span>Watch Video</span>
                      </a>

                      <a
                        href={`https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20the%20track%20"${encodeURIComponent(song.title)}"%20for%20sync%20or%20wedding.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-[#FED7AA] hover:bg-[#fbc281] border-2 border-black rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center shadow-[2px_2px_0px_0px_#000]"
                      >
                        License Track ➔
                      </a>
                    </div>
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
