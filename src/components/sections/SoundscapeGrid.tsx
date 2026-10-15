"use client";

import * as React from "react";
import { Play, Pause, ExternalLink, Radio, Disc3, Music } from "lucide-react";

interface Track {
  id: string;
  title: string;
  hindiTitle: string;
  dialect: string;
  genre: string;
  bpm: number;
  description: string;
  youtubeQuery: string;
  audioSrc: string;
}

const CATEGORIES: Record<string, { label: string; desc: string; tracks: Track[] }> = {
  "bagheli-bundeli": {
    label: "Bagheli & Bundeli",
    desc: "Authentic oral folk forms of Rewa, Satna, Jhansi, and Sagar heartlands.",
    tracks: [
      {
        id: "bb-1",
        title: "Luturi Jhalariya (Bagheli Sohar)",
        hindiTitle: "लुटुरी झलरिया - बघेली सोहर",
        dialect: "Bagheli",
        genre: "Sohar (Childbirth)",
        bpm: 96,
        description: "Traditional celebratory birth song recorded with grassroots Rewa folk singers.",
        youtubeQuery: "Luturi Jhalariya Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bb-2",
        title: "Alha Udal Veer Gatha",
        hindiTitle: "आल्हा ऊदल वीर रस गाथा",
        dialect: "Bundeli",
        genre: "Martial Epic / Lokgeet",
        bpm: 110,
        description: "Historic heroic ballads with authentic Dholak, Dhol, and Jhanjh accompaniment.",
        youtubeQuery: "Alha Udal Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "bb-3",
        title: "Mahua Ujari Ga (Bagheli Lok)",
        hindiTitle: "महुआ उजरि गा",
        dialect: "Bagheli",
        genre: "Seasonal Country Folk",
        bpm: 104,
        description: "Classic Vindhya harvest ballad remastered with modern stereo depth.",
        youtubeQuery: "Mahua Ujari Ga Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "awadhi-bhojpuri": {
    label: "Awadhi & Bhojpuri",
    desc: "Poetic monsoons, agricultural seasons, and river folk of Purvanchal & Awadh.",
    tracks: [
      {
        id: "ab-1",
        title: "Hari Rama Chhai Ghata Ghanghor",
        hindiTitle: "हरी रामा छाई घटा घनघोर - कजरी",
        dialect: "Awadhi",
        genre: "Kajri (Monsoon Ballad)",
        bpm: 88,
        description: "Soulful seasonal monsoon Kajri with Harmonium, Bansuri, and delicate percussion.",
        youtubeQuery: "Hari Rama Chhai Ghata Ghanghor Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "ab-2",
        title: "Chale Aaba More Raja",
        hindiTitle: "चले आबा मोरे राजा",
        dialect: "Awadhi-Purvanchali",
        genre: "Viraha / Folk Pop",
        bpm: 102,
        description: "Lyrical migration ballad blending rustic acoustic strings with contemporary mastering.",
        youtubeQuery: "Chale Aaba More Raja Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "ab-3",
        title: "Bidesiya Viraha Geet",
        hindiTitle: "बिदेसिया विरह गीत",
        dialect: "Bhojpuri",
        genre: "Bidesiya",
        bpm: 84,
        description: "Raw emotional heartland yearning rendered in authentic Bhojpuri dialect.",
        youtubeQuery: "Bidesiya Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "wedding-mandap": {
    label: "Wedding & Mandap BGM",
    desc: "Acoustic Shehnai, Sarangi, and Sitar arrangements for luxury Indian rituals (#UrbanMandapStyle).",
    tracks: [
      {
        id: "wm-1",
        title: "Ram Banra Ban Aayo Re",
        hindiTitle: "राम बनरा बन आयो रे - विवाह गीत",
        dialect: "Heartland Folk",
        genre: "Vivah Geet / Mandap",
        bpm: 92,
        description: "Elegant non-garish wedding ceremonial song tailored for Haldi and Mandap rituals.",
        youtubeQuery: "Ram Banra Ban Aayo Re Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "wm-2",
        title: "Beatless Shehnai & Sitar Contrast",
        hindiTitle: "शहनाई सितार युगल - विवाह पृष्ठभूमि",
        dialect: "Acoustic Classical Folk",
        genre: "#UrbanMandapStyle BGM",
        bpm: 78,
        description: "Pure acoustic ambient background score for luxury hotel mandaps and high-end receptions.",
        youtubeQuery: "Beatless Wedding BGM Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "wm-3",
        title: "Bidai Karun Dhun (Sarangi)",
        hindiTitle: "विदाई धुन - सारंगी वादन",
        dialect: "Purvanchal Folk",
        genre: "Bidai Ceremonial",
        bpm: 72,
        description: "Deeply moving acoustic farewell melody recorded with master Sarangi instrumentalists.",
        youtubeQuery: "Bidai Geet Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      }
    ]
  },
  "sufi-bhakti": {
    label: "Sufi & Bhakti",
    desc: "Timeless Nirgun Kabir poetry, Devi Jas geet, and meditative river bhajans.",
    tracks: [
      {
        id: "sb-1",
        title: "Jheeni Re Jheeni (Kabir Nirgun)",
        hindiTitle: "झीनी रे झीनी बीनी चदरिया",
        dialect: "Sant Bhasha / Awadhi",
        genre: "Nirgun Bhajan",
        bpm: 80,
        description: "Philosophical Kabir verse on human mortality arranged with Tanpura and Sarangi.",
        youtubeQuery: "Jheeni Re Jheeni Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "sb-2",
        title: "Devi Jas (Navratri Bhavani Geet)",
        hindiTitle: "देवी जस - मैहर शारदा वंदना",
        dialect: "Bagheli-Bundeli",
        genre: "Devi Jas / Sharda Stuti",
        bpm: 116,
        description: "Traditional Maihar Sharda temple devotional chants with rhythmic Timki and Jhanjh.",
        youtubeQuery: "Devi Jas Media Mafias",
        audioSrc: "/Latency Buffering.mp3"
      },
      {
        id: "sb-3",
        title: "Saiyaan Na Aaye (Folk Sufi)",
        hindiTitle: "सइयां न आए - सूफी लोक",
        dialect: "Heartland Sufi",
        genre: "Sufiyana Folk",
        bpm: 86,
        description: "Meditative acoustic reflection crossing regional dialect boundaries.",
        youtubeQuery: "Saiyaan Na Aaye Media Mafias",
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
    // Pause any currently playing track
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
            SECTION 3 • REGIONAL CATALOG
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-black mb-3">
            Interactive Soundscape Grid
          </h2>
          <p className="font-mono text-sm sm:text-base text-neutral-800 max-w-2xl mx-auto">
            Experience authentic regional folk forms remastered to broadcast-grade cinematic fidelity.
          </p>
        </div>

        {/* 4 Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                className={`px-5 py-3 rounded-xl font-display font-black text-lg sm:text-xl uppercase tracking-wider border-3 border-black transition-all shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer ${
                  isActive 
                    ? "bg-[#E5FF00] text-black shadow-[2px_2px_0px_0px_#000] translate-x-[2px] translate-y-[2px]" 
                    : "bg-white text-black hover:bg-neutral-100"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Category Description */}
        <p className="text-center font-mono text-xs sm:text-sm text-neutral-700 italic mb-8">
          {currentCategory.desc}
        </p>

        {/* Track Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentCategory.tracks.map((track) => {
            const isThisPlaying = playingTrackId === track.id;
            return (
              <div
                key={track.id}
                className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
              >
                {/* Audio element lazy-loaded */}
                <audio
                  ref={(el) => { audioRefs.current[track.id] = el; }}
                  src={track.audioSrc}
                  preload="none"
                  onEnded={() => setPlayingTrackId(null)}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] font-black uppercase bg-[#00E5FF] border-2 border-black px-2.5 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                      {track.dialect}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-black/20">
                      {track.bpm} BPM
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase tracking-wide text-black mb-1">
                    {track.title}
                  </h3>
                  <div className="font-sans font-bold text-sm text-[#FF2E2E] mb-3">
                    {track.hindiTitle}
                  </div>

                  <p className="font-mono text-xs text-neutral-700 leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t-2 border-black/10">
                  {/* HTML5 Preview Player Toggle */}
                  <button
                    onClick={() => handlePlayToggle(track.id)}
                    className={`w-full py-2.5 px-4 rounded-xl border-2 border-black font-mono font-black text-xs uppercase flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer ${
                      isThisPlaying
                        ? "bg-[#FF2E2E] text-white"
                        : "bg-[#E5FF00] text-black hover:bg-[#d4ec00]"
                    }`}
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>PAUSE PREVIEW</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>LISTEN PREVIEW (HTML5)</span>
                      </>
                    )}
                  </button>

                  {/* Outbound YouTube & Stream Links */}
                  <div className="flex gap-2">
                    <a
                      href="https://www.youtube.com/@MediaMafias"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-white hover:bg-neutral-100 border-2 border-black rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000]"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5 fill-[#FF2E2E]" />
                      <span>YouTube OAC</span>
                    </a>

                    <a
                      href="https://thefutureradio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-white hover:bg-neutral-100 border-2 border-black rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000]"
                    >
                      <Radio className="w-3.5 h-3.5 text-black" />
                      <span>Radio App</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Outbound Ecosystem Hub Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border-4 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000]">
          <span className="font-display font-black text-xl uppercase tracking-wider text-black">
            Stream Complete Catalog:
          </span>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/@MediaMafias"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF2E2E] hover:bg-black text-white font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-2 transition-all"
            >
              <YoutubeIcon className="w-4 h-4 fill-white" />
              <span>Official YouTube (@MediaMafias)</span>
            </a>
            <a
              href="https://thefutureradio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E5FF00] hover:bg-black hover:text-[#E5FF00] text-black font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-2 transition-all"
            >
              <Radio className="w-4 h-4 text-black" />
              <span>The Future Radio (24/7 AI)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
