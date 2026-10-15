"use client";

import * as React from "react";
import { Play, Pause, ExternalLink, Radio, Disc3 } from "lucide-react";

interface Track {
  id: string;
  title: string;
  hindiTitle: string;
  dialect: string;
  genre: string;
  bpm: number;
  description: string;
  youtubeUrl: string;
  audioSrc: string;
}

const CATEGORIES: Record<string, { label: string; hindiLabel: string; desc: string; tracks: Track[] }> = {
  "bagheli-bundeli": {
    label: "Bagheli & Bundeli Folk",
    hindiLabel: "बघेली और बुंदेली लोकगीत",
    desc: "Authentic Vindhya heartland grooves, heroic epics, and pastoral country ballads.",
    tracks: [
      {
        id: "bb-1",
        title: "Bagheli Nachanhai Folk Pop",
        hindiTitle: "बघेली नचनहाई फोक पॉप",
        dialect: "Bagheli",
        genre: "Rhythmic Folk Pop",
        bpm: 118,
        description: "High-energy Rewa celebratory folk pop blending authentic Dholak rhythm with modern stereo mastering.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bb-2",
        title: "Bagheli Sohar Dadra",
        hindiTitle: "बघेली सोहर दादरा (मेल वर्जन)",
        dialect: "Bagheli",
        genre: "Sohar / Dadra",
        bpm: 96,
        description: "Heartfelt traditional childbirth celebratory Dadra sung with deep resonance and acoustic harmonium.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bb-3",
        title: "Mahua Ujari Ga",
        hindiTitle: "महुआ उजरि गा (लोकगीत)",
        dialect: "Bagheli Folk",
        genre: "Vindhya Country Folk",
        bpm: 104,
        description: "Classic pastoral harvest ballad celebrating the seasonal mahua cycle of village heartlands.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bb-4",
        title: "Chale Aaba More Raja",
        hindiTitle: "चले आबा मोरे राजा (बुंदेली-बघेली)",
        dialect: "Bundeli-Bagheli",
        genre: "Viraha Lokgeet",
        bpm: 102,
        description: "Soulful migration and longing song crossing Bundelkhand and Baghelkhand folk traditions.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "awadhi-bhojpuri": {
    label: "Awadhi & Bhojpuri",
    hindiLabel: "अवधी और भोजपुरी लोकगीत",
    desc: "Monsoon Kajris, migration laments, and lyrical traditions of Eastern UP & Bihar.",
    tracks: [
      {
        id: "ab-1",
        title: "Saiyaan Na Aaye",
        hindiTitle: "सइयां न आए (अवधी विरह लोक)",
        dialect: "Awadhi Folk",
        genre: "Viraha Geet",
        bpm: 86,
        description: "Deeply emotional heartland viraha ballad with gentle acoustic guitar and bansuri accompaniment.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "ab-2",
        title: "Luturi Jhalariya Sohar",
        hindiTitle: "लुटुरी झलरिया सोहर",
        dialect: "Bagheli-Bhojpuri",
        genre: "Sohar Geet",
        bpm: 94,
        description: "Celebrated lifecycle song with 2,100+ views, recorded with authentic rural folk practitioners.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "ab-3",
        title: "Hari Rama Kajri",
        hindiTitle: "हरी रामा छाई घटा घनघोर (कजरी)",
        dialect: "Awadhi",
        genre: "Monsoon Kajri",
        bpm: 88,
        description: "Classic monsoon rain ballad of Varanasi and Mirzapur with rich harmonium and rustic percussion.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "ab-4",
        title: "Resham Ki Dori",
        hindiTitle: "रेशम की डोरी",
        dialect: "Purvanchal Folk",
        genre: "Bhojpuri Acoustic",
        bpm: 98,
        description: "Poetic romantic folk ballad arranged with clean acoustic instrumentation and stereo clarity.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "wedding-mandap": {
    label: "Urban Mandap & Wedding BGM",
    hindiLabel: "विवाह गीत एवं शहनाई-सितार",
    desc: "Refined beatless acoustic arrangements for luxury Mandaps and sacred Indian rituals (#UrbanMandapStyle).",
    tracks: [
      {
        id: "wm-1",
        title: "Beatless Wedding BGM",
        hindiTitle: "बीटलेस वेडिंग बीजीएम (शालीन मंडप)",
        dialect: "Acoustic Classical",
        genre: "#UrbanMandapStyle",
        bpm: 76,
        description: "Calm, beatless Shehnai and Tanpura background score designed for sacred rituals without loud percussion.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "wm-2",
        title: "Shehnai-Sitar Contrast",
        hindiTitle: "शहनाई-सितार जुगलबंदी",
        dialect: "Acoustic Folk-Classical",
        genre: "Mandap Ambience",
        bpm: 82,
        description: "Harmonious acoustic jugalbandi between master Shehnai and Sitar players creating an auspicious aura.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "wm-3",
        title: "Ram Banra Ban Aayo Re",
        hindiTitle: "राम बनरा बन आयो रे (विवाह गीत)",
        dialect: "Heartland Folk",
        genre: "Vivah Geet",
        bpm: 92,
        description: "Traditional groom arrival Vivah Geet celebrating cultural wedding heritage in broadcast fidelity.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "sufi-bhakti": {
    label: "Sufi & Devotional",
    hindiLabel: "देवी जस, निर्गुण कबीर और सूफी",
    desc: "Maihar Sharda temple stutis, Kabir philosophy, and meditative acoustic river bhajans.",
    tracks: [
      {
        id: "sb-1",
        title: "Karein Bhagat Mai Aarti Dui Biriya",
        hindiTitle: "करैं भगत माई आरती दुइ बिरिया (बघेली देवी जस)",
        dialect: "Bagheli Devotional",
        genre: "Devi Jas / Sharda Stuti",
        bpm: 116,
        description: "Sacred Maihar temple stuti sung in authentic Bagheli dialect with Timki and dynamic temple chorus.",
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
        description: "Timeless Kabir verse on human mortality arranged with Tanpura, Sarangi, and reflective acoustic depth.",
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
        description: "Peaceful meditative Sanskrit chanting paired with acoustic warmth for daily meditation and puja.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "sb-4",
        title: "Daras & Kanhaiya Medley",
        hindiTitle: "दरस एवं कन्हैया (भाव लोक)",
        dialect: "Heartland Bhakti",
        genre: "Krishna Bhakti",
        bpm: 84,
        description: "Devotional yearning rendered in acoustic intimacy with soulful flute and harmonium swells.",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  }
};

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export const SoundscapeGrid = () => {
  const [activeTab, setActiveTab] = React.useState<string>("bagheli-bundeli");
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

  const currentCategory = CATEGORIES[activeTab] || CATEGORIES["bagheli-bundeli"];

  return (
    <section className="py-20 px-6 bg-[#FED7AA] border-b-4 border-black text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#E5FF00] border-3 border-black px-4 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] mb-4">
            SECTION 3 • INTERACTIVE MUSIC CATALOG GRID
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-black mb-2">
            Explore High-Fidelity Regional Soundscapes
          </h2>
          <div className="font-sans font-bold text-base sm:text-lg text-neutral-800">
            (हाई-फिडेलिटी लोकगीत एवं भक्ति संगीत)
          </div>
        </div>

        {/* 4 Category Filter Tabs */}
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
                <div className="font-display font-black text-base sm:text-xl uppercase tracking-wider">
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
            return (
              <div
                key={track.id}
                className="bg-white border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
              >
                <audio
                  ref={(el) => { audioRefs.current[track.id] = el; }}
                  src={track.audioSrc}
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
                  {/* HTML5 Preview Button */}
                  <button
                    onClick={() => handlePlayToggle(track.id)}
                    className={`w-full py-2 px-3 rounded-lg border-2 border-black font-mono font-black text-[11px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer ${
                      isThisPlaying
                        ? "bg-[#FF2E2E] text-white"
                        : "bg-[#E5FF00] text-black hover:bg-[#d4ec00]"
                    }`}
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>PAUSE</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>PLAY PREVIEW</span>
                      </>
                    )}
                  </button>

                  {/* Outbound Media Mafias YouTube link */}
                  <a
                    href="https://www.youtube.com/@MediaMafias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-white hover:bg-neutral-100 border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000]"
                  >
                    <YoutubeIcon className="w-3 h-3 fill-[#FF2E2E]" />
                    <span>Watch on Media Mafias</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Complete Catalog CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000]">
          <div>
            <div className="font-display font-black text-2xl uppercase tracking-wider text-black">
              Explore 100+ Studio Tracks in Music Catalog
            </div>
            <p className="font-mono text-xs text-neutral-700">
              Filter by dialect, BPM, ritual context, and license master stems.
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
