"use client";

import * as React from "react";
import { Play, Pause, ExternalLink, Radio, Disc3 } from "lucide-react";
import { getAudioUrl } from "@/lib/audio";

interface Track {
  id: string;
  title: string;
  hindiTitle: string;
  dialect: string;
  genre: string;
  bpm: number;
  description: string;
  youtubeUrl: string;
  spotifyUrl?: string;
  audioSrc: string;
}

const CATEGORIES: Record<string, { label: string; hindiLabel: string; desc: string; tracks: Track[] }> = {
  "bagheli": {
    label: "Bagheli Folk",
    hindiLabel: "बघेली लोकगीत",
    desc: "Strictly Bagheli oral traditions of Rewa, Satna, and the Vindhya belt.",
    tracks: [
      {
        id: "bagh-1",
        title: "Bagheli Nachanhai Folk Pop",
        hindiTitle: "बघेली नचनहाई फोक पॉप",
        dialect: "Bagheli",
        genre: "Folk Pop",
        bpm: 118,
        description: "High-energy Rewa celebratory folk song blending authentic rustic Dholak with broadcast stereo mastering.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bagh-2",
        title: "Bagheli Sohar Dadra (Male Version)",
        hindiTitle: "बघेली सोहर दादरा",
        dialect: "Bagheli",
        genre: "Sohar / Dadra",
        bpm: 96,
        description: "Soulful traditional Bagheli birth celebratory Dadra with acoustic harmonium and deep local resonance.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bagh-3",
        title: "Luturi Jhalariya (Bagheli Sohar)",
        hindiTitle: "लुटुरी झलरिया - बघेली सोहर",
        dialect: "Bagheli",
        genre: "Traditional Sohar",
        bpm: 94,
        description: "Authentic Bagheli newborn celebration song recorded with grassroots Rewa village folk singers.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bagh-4",
        title: "Mahua Ujari Ga",
        hindiTitle: "महुआ उजरि गा (बघेली)",
        dialect: "Bagheli",
        genre: "Pastoral Country Folk",
        bpm: 104,
        description: "Classic Vindhya harvest ballad depicting the seasonal mahua flowering and collection cycle.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "bundeli": {
    label: "Bundeli Folk",
    hindiLabel: "बुंदेली लोकगीत",
    desc: "Strictly Bundeli martial epics, hero sagas, and rustic Lokgeet of Jhansi, Mahoba, and Sagar.",
    tracks: [
      {
        id: "bund-1",
        title: "Alha Udal Veer Gatha",
        hindiTitle: "आल्हा ऊदल वीर रस गाथा",
        dialect: "Bundeli",
        genre: "Veer Ras Epic",
        bpm: 112,
        description: "Historic 52-battle saga of warriors Alha and Udal with energetic Dholak, Nagariya, and Jhanjh.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bund-2",
        title: "Chale Aaba More Raja",
        hindiTitle: "चले आबा मोरे राजा (बुंदेली विरह)",
        dialect: "Bundeli",
        genre: "Viraha Lokgeet",
        bpm: 102,
        description: "Rustic Bundeli migration ballad depicting the emotional yearning of left-behind village households.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bund-3",
        title: "Bundeli Lamtera Geet",
        hindiTitle: "बुंदेली लमटेरा गीत",
        dialect: "Bundeli",
        genre: "Lamtera / Festive Lok",
        bpm: 98,
        description: "Seasonal agrarian harvest chanting traditionally sung across the plains of Bundelkhand.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "awadhi-bhojpuri": {
    label: "Awadhi & Bhojpuri",
    hindiLabel: "अवधी एवं भोजपुरी",
    desc: "Soulful monsoons from Awadh and verified acoustic releases from Purvanchal / Bihar.",
    tracks: [
      {
        id: "ab-1",
        title: "Resham Ki Dori (Bhojpuri Acoustic)",
        hindiTitle: "रेशम की डोरी (भोजपुरी भाव गीत)",
        dialect: "Bhojpuri",
        genre: "Bhojpuri Acoustic Folk",
        bpm: 98,
        description: "Flagship Bhojpuri release featured on Media Mafias - Topic channel, arranged with clean acoustic strings.",
        youtubeUrl: "https://www.youtube.com/channel/UC_Ua983PgNUkRzg2X0ENQxw",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "ab-2",
        title: "Hari Rama Chhai Ghata Ghanghor (Kajri)",
        hindiTitle: "हरी रामा छाई घटा घनघोर - कजरी",
        dialect: "Awadhi",
        genre: "Monsoon Kajri",
        bpm: 88,
        description: "Timeless Awadhi monsoon rain ballad of Varanasi and Mirzapur with authentic harmonium accompaniment.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "ab-3",
        title: "Saiyaan Na Aaye (Awadhi Viraha)",
        hindiTitle: "सइयां न आए (अवधी विरह लोक)",
        dialect: "Awadhi",
        genre: "Viraha Geet",
        bpm: 86,
        description: "Awadhi classical-folk viraha composition with bansuri swells and intimate stereo presence.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "wedding-mandap": {
    label: "Urban Mandap & Wedding BGM",
    hindiLabel: "विवाह गीत एवं शहनाई-सितार",
    desc: "Strictly wedding and sacred matrimonial music (#UrbanMandapStyle) — beatless acoustic refinement.",
    tracks: [
      {
        id: "wm-1",
        title: "Ram Banra Ban Aayo Re (Vivah Geet)",
        hindiTitle: "राम बनरा बन आयो रे - विवाह गीत",
        dialect: "Heartland Vivah",
        genre: "Vivah Geet",
        bpm: 92,
        description: "Traditional groom arrival wedding ceremonial song tailored for auspicious Mandap entry and Tilak.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "wm-2",
        title: "Beatless Wedding BGM",
        hindiTitle: "बीटलेस वेडिंग बीजीएम (शालीन मंडप)",
        dialect: "Acoustic Classical",
        genre: "#UrbanMandapStyle",
        bpm: 76,
        description: "Pure acoustic Shehnai and Tanpura score designed for sacred wedding rituals without loud intrusive percussion.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "wm-3",
        title: "Shehnai-Sitar Contrast",
        hindiTitle: "शहनाई-सितार जुगलबंदी (विवाह पृष्ठभूमि)",
        dialect: "Acoustic Jugalbandi",
        genre: "Mandap Ambient BGM",
        bpm: 82,
        description: "Auspicious instrumental duet creating an elegant, aristocratic ambiance for luxury hotel mandaps.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "wm-4",
        title: "Haldi Shringar Dhun",
        hindiTitle: "हल्दी श्रृंगार धुन (मांगलिक वादन)",
        dialect: "Ceremonial Folk",
        genre: "Haldi Ritual BGM",
        bpm: 84,
        description: "Intimate family acoustic arrangement for morning turmeric and bride shringar ceremonies.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "sufi-bhakti": {
    label: "Sufi & Devotional",
    hindiLabel: "देवी जस, निर्गुण कबीर और सूफी",
    desc: "Sacred temple stutis, Kabir philosophy, and meditative acoustic river bhajans.",
    tracks: [
      {
        id: "sb-1",
        title: "Karein Bhagat Mai Aarti Dui Biriya (Devi Jas)",
        hindiTitle: "करैं भगत माई आरती दुइ बिरिया (बघेली देवी जस)",
        dialect: "Bagheli Devotional",
        genre: "Devi Jas / Sharda Stuti",
        bpm: 116,
        description: "Authentic Maihar Sharda temple stuti in native Bagheli with Timki, Manjira, and chorus.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "sb-2",
        title: "Jheeni Re Jheeni (Das Kabir)",
        hindiTitle: "झीनी रे झीनी बीनी चदरिया (दास कबीर)",
        dialect: "Sant Bhasha",
        genre: "Nirgun Kabir Bhajan",
        bpm: 80,
        description: "Philosophical reflection on mortality arranged with meditative Tanpura and resonant Sarangi.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "sb-3",
        title: "Jagannath Raksha Stotram (Acoustic Lofi)",
        hindiTitle: "जगन्नाथ रक्षा स्तोत्रम् (लो-फाई भक्ति)",
        dialect: "Sanskrit Devotional",
        genre: "Acoustic Lofi Stotram",
        bpm: 72,
        description: "Peaceful meditative Sanskrit chanting paired with acoustic warmth for daily contemplation.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  }
};

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);

export const SoundscapeGrid = () => {
  const [activeTab, setActiveTab] = React.useState<string>("bagheli");
  const [playingTrackId, setPlayingTrackId] = React.useState<string | null>(null);
  const audioRefs = React.useRef<Record<string, HTMLAudioElement | null>>({});

  const handlePlayToggle = (trackId: string) => {
    if (playingTrackId && playingTrackId !== trackId) {
      const currentAudio = audioRefs.current[playingTrackId];
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }

    const targetAudio = audioRefs.current[trackId];
    if (!targetAudio) return;

    if (playingTrackId === trackId) {
      targetAudio.pause();
      setPlayingTrackId(null);
    } else {
      targetAudio.play().then(() => {
        setPlayingTrackId(trackId);
      }).catch((err) => {
        console.warn("Audio playback err:", err);
      });
    }
  };

  const currentCategory = CATEGORIES[activeTab] || CATEGORIES["bagheli"];

  return (
    <section className="py-20 px-6 bg-[#FED7AA] border-b-4 border-black text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Category Badge & Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-2 border-black px-4 py-1.5 rounded-full font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] mb-4">
            <Disc3 className="w-4 h-4 text-black animate-spin" />
            <span>CURATED REGIONAL ARCHIVE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-black mb-2">
            Explore High-Fidelity Regional Soundscapes
          </h2>
          <div className="font-sans font-bold text-base sm:text-lg text-neutral-800">
            (हाई-फिडेलिटी लोकगीत एवं भक्ति संगीत)
          </div>
        </div>

        {/* 5 Category Filter Tabs with Strict Dialect Separation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(CATEGORIES).map(([key, cat]) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => {
                  if (playingTrackId && audioRefs.current[playingTrackId]) {
                    audioRefs.current[playingTrackId]?.pause();
                    setPlayingTrackId(null);
                  }
                  setActiveTab(key);
                }}
                className={`px-5 py-3 rounded-xl border-3 border-black transition-all shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer text-center ${
                  isActive 
                    ? "bg-[#E5FF00] text-black shadow-[2px_2px_0px_0px_#000] translate-x-[2px] translate-y-[2px]" 
                    : "bg-white text-black hover:bg-neutral-100"
                }`}
              >
                <div className="font-display font-black text-base sm:text-lg uppercase tracking-wider">
                  {cat.label}
                </div>
                <div className="font-sans font-bold text-xs text-neutral-700">
                  {cat.hindiLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Category Description */}
        <p className="text-center font-mono text-xs sm:text-sm text-neutral-800 italic mb-10 max-w-2xl mx-auto">
          {currentCategory.desc}
        </p>

        {/* Track Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentCategory.tracks.map((track) => {
            const isThisPlaying = playingTrackId === track.id;
            const spotifySearchUrl = track.spotifyUrl || `https://open.spotify.com/search/${encodeURIComponent(track.title + " Media Mafias")}`;

            return (
              <div
                key={track.id}
                className="bg-white border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
              >
                <audio
                  ref={(el) => { audioRefs.current[track.id] = el; }}
                  src={getAudioUrl(track.audioSrc)}
                  preload="none"
                  onEnded={() => setPlayingTrackId(null)}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] font-black uppercase bg-[#00E5FF] border-2 border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                      {track.dialect}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-black/20">
                      {track.bpm} BPM
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl uppercase tracking-wide text-black mb-1 leading-tight">
                    {track.title}
                  </h3>
                  <div className="font-sans font-bold text-xs text-[#FF2E2E] mb-3">
                    {track.hindiTitle}
                  </div>

                  <p className="font-mono text-[11px] text-neutral-700 leading-relaxed mb-4">
                    {track.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t-2 border-black/10">
                  {/* In-Browser Audio Preview Button (Streams from Cloudflare R2 / Local) */}
                  <button
                    onClick={() => handlePlayToggle(track.id)}
                    className={`w-full py-2.5 px-3 rounded-xl border-2 border-black font-mono font-black text-xs uppercase flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer ${
                      isThisPlaying
                        ? "bg-[#FF2E2E] text-white"
                        : "bg-[#E5FF00] text-black hover:bg-[#d4ec00]"
                    }`}
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>PAUSE PREVIEW</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>PLAY PREVIEW</span>
                      </>
                    )}
                  </button>

                  {/* Dual Outbound Links: Spotify & YouTube */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={spotifySearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 bg-white hover:bg-[#1DB954] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                      title="Listen on Spotify"
                    >
                      <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Spotify</span>
                    </a>

                    <a
                      href={track.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 bg-white hover:bg-[#FF2E2E] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                      title="Watch on YouTube"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Complete Catalog CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000]">
          <div>
            <div className="font-display font-black text-2xl uppercase tracking-wider text-black">
              Explore Complete Catalog &amp; Dialect Filters
            </div>
            <p className="font-mono text-xs text-neutral-700">
              Filter by Bagheli, Bundeli, Awadhi, Bhojpuri, and Urban Mandap wedding scores.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="/catalog"
              className="bg-[#E5FF00] hover:bg-black hover:text-[#E5FF00] text-black font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] transition-all"
            >
              Open Full Catalog ➔
            </a>
            <a
              href="https://www.youtube.com/@MediaMafias"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF2E2E] hover:bg-black text-white font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-1.5 transition-all"
            >
              <YoutubeIcon className="w-4 h-4 fill-white" />
              <span>YouTube @MediaMafias</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
