"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, Play, Pause, ExternalLink, CheckCircle2, Mic2, Music4, Award, MapPin } from "lucide-react";
import { getAudioUrl, SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL } from "@/lib/audio";

interface Creator {
  id: string;
  name: string;
  hindiName: string;
  region: string;
  dialect: string;
  role: string;
  bio: string;
  notableTrack: string;
  audioSrc: string;
  catalogCount: number;
  avatarBg: string;
}

const CREATORS_DATA: Creator[] = [
  {
    id: "cr-1",
    name: "Susheel Kumar Dwivedi",
    hindiName: "सुशील कुमार द्विवेदी",
    region: "Rewa & Satna, MP",
    dialect: "Bagheli Folk",
    role: "Senior Folk Vocalist & Troupe Lead",
    bio: "Pioneering Bagheli folk preservationist from Rewa. Renowned for high-energy harvest Dadra and ancestral oral compositions with authentic rustic timbre.",
    notableTrack: "More Raja (Bagheli Lokgeet)",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    catalogCount: 14,
    avatarBg: "from-[#F59E0B] to-[#D97706]"
  },
  {
    id: "cr-2",
    name: "Vindhya Traditional Mandali",
    hindiName: "विंध्य पारंपरिक मंडली",
    region: "Vindhyachal / Baghelkhand",
    dialect: "Bagheli Sohar & Dadra",
    role: "Village Women & Elders Chorus",
    bio: "Grassroots female collective preserving century-old childbirth Sohar, Dadra, and Gailhai songs sung during auspicious domestic rituals in village courtyards.",
    notableTrack: "Lakhan Lutai Deb (Sohar Dadra)",
    audioSrc: "Lakhan Lutai Deb - Sohar Dadra Female Version.mp3",
    catalogCount: 22,
    avatarBg: "from-[#EC4899] to-[#BE185D]"
  },
  {
    id: "cr-3",
    name: "Bundelkhand Akhada Mandali",
    hindiName: "बुंदेलखंड अखाड़ा मंडली",
    region: "Jhansi & Mahoba, UP/MP",
    dialect: "Bundeli Veer Ras",
    role: "Folk Epic Troubadours & Nagariya Masters",
    bio: "Custodians of the heroic 52-battle Alha-Udal epic. Masters of the martial Nagariya, thumping Dholak, and fiery rustic balladry of Bundelkhand.",
    notableTrack: "Badariya Kari Re Hari",
    audioSrc: "Badariya Kari Re Hari.mp3",
    catalogCount: 18,
    avatarBg: "from-[#3B82F6] to-[#1D4ED8]"
  },
  {
    id: "cr-4",
    name: "Mirzapur & Varanasi Folk Ensemble",
    hindiName: "मिर्जापुर एवं काशी लोक मंडल",
    region: "Mirzapur & Varanasi, UP",
    dialect: "Awadhi Kajri & Vivah",
    role: "Classical Folk Masters & Sarangi Players",
    bio: "Masters of the monsoon Kajri and traditional Banara wedding songs, bringing timeless Ganga ghat acoustic warmth into studio-grade broadcasts.",
    notableTrack: "Bagiya Ma Aaye Bhagwan (Kajari)",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Kajari.mp3",
    catalogCount: 19,
    avatarBg: "from-[#10B981] to-[#047857]"
  },
  {
    id: "cr-5",
    name: "Bholanath Gahmari Heritage Troupe",
    hindiName: "भोलानाथ गहमरी विरासत मंडली",
    region: "Ghazipur & Buxar (Purvanchal)",
    dialect: "Bhojpuri Acoustic Folk",
    role: "Bhojpuri Balladeers",
    bio: "Carrying forward the historic migration and viraha traditions of the legendary Bholanath Gahmari with acoustic harmonium, flute, and melancholic beauty.",
    notableTrack: "Jani Ja Bideshba (Bhojpuri Acoustic)",
    audioSrc: "Jani Ja Bideshba.mp3",
    catalogCount: 12,
    avatarBg: "from-[#F43F5E] to-[#BE123C]"
  },
  {
    id: "cr-6",
    name: "Maihar Sharda Mandali",
    hindiName: "मैहर शारदा देवी मंडली",
    region: "Maihar, MP",
    dialect: "Bagheli Devotional",
    role: "Temple Jas & Timki Chanting Troupe",
    bio: "Temple stuti vocalists from the sacred hills of Maihar, performing native Bagheli Devi Jas with Timki, Manjira, and reverberant acoustic passion.",
    notableTrack: "Jagannath Raksha Stotram",
    audioSrc: "जगन्नाथ रक्ष माम्.mp3",
    catalogCount: 16,
    avatarBg: "from-[#8B5CF6] to-[#6D28D9]"
  }
];

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);

export default function CreatorsPage() {
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = (id: string, audioSrc: string) => {
    if (!audioRef.current) return;
    if (playingId === id) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      audioRef.current.src = getAudioUrl(audioSrc);
      audioRef.current.play().then(() => {
        setPlayingId(id);
      }).catch((e) => console.warn(e));
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      <audio ref={audioRef} preload="none" onEnded={() => setPlayingId(null)} />

      {/* Hero Header */}
      <section className="pt-36 pb-14 px-6 border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-2 border-black px-3.5 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
            <Award className="w-3.5 h-3.5 text-black" />
            <span>AUTHENTIC FOLK VOICES OF INDIA</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black mb-2">
                Top Regional Creators
              </h1>
              <div className="font-sans font-bold text-lg sm:text-2xl text-[#FF2E2E] mb-3">
                (हमारे शीर्ष क्षेत्रीय लोक कलाकार एवं संगीतकार)
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-700 max-w-2xl leading-relaxed">
                Meet the authentic village masters, chorus leaders, and troubadours across Baghelkhand, Awadh, Bundelkhand, and Purvanchal who make Media Mafias the definitive vernacular folk label.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#FED7AA] border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_#000] flex gap-6 shrink-0 font-mono text-center">
              <div>
                <div className="font-display font-black text-2xl text-black">80+</div>
                <div className="text-[10px] uppercase font-bold text-neutral-700">Artists</div>
              </div>
              <div className="w-[2px] bg-black/20" />
              <div>
                <div className="font-display font-black text-2xl text-black">150+</div>
                <div className="text-[10px] uppercase font-bold text-neutral-700">DSPs Distributed</div>
              </div>
              <div className="w-[2px] bg-black/20" />
              <div>
                <div className="font-display font-black text-2xl text-black">80%</div>
                <div className="text-[10px] uppercase font-bold text-neutral-700">Direct Royalty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Grid */}
      <section className="py-16 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {CREATORS_DATA.map((creator) => {
              const isPlaying = playingId === creator.id;

              return (
                <div
                  key={creator.id}
                  className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
                >
                  <div>
                    {/* Creator Header with Avatar & Region */}
                    <div className="flex items-start gap-4 mb-4 pb-4 border-b-2 border-black/10">
                      <div className={`w-14 h-14 rounded-2xl border-3 border-black bg-gradient-to-br ${creator.avatarBg} flex items-center justify-center text-white font-display font-black text-2xl shrink-0 shadow-[2px_2px_0px_0px_#000]`}>
                        {creator.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-display font-black text-xl uppercase tracking-wide text-black truncate">
                            {creator.name}
                          </h3>
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        </div>
                        <div className="font-sans font-bold text-xs text-[#FF2E2E]">
                          {creator.hindiName}
                        </div>
                        <div className="flex items-center gap-1 font-mono text-[11px] text-neutral-600 mt-0.5">
                          <MapPin className="w-3 h-3 text-neutral-500" />
                          <span>{creator.region}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dialect & Role Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="font-mono text-[10px] font-black uppercase bg-[#00E5FF] border-2 border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                        {creator.dialect}
                      </span>
                      <span className="font-mono text-[10px] font-bold bg-neutral-100 border border-black/20 px-2 py-0.5 rounded text-neutral-700">
                        {creator.catalogCount} Master Tracks
                      </span>
                    </div>

                    <p className="font-mono text-xs text-neutral-700 leading-relaxed mb-6">
                      {creator.bio}
                    </p>
                  </div>

                  {/* Representative Track Audio Player */}
                  <div className="space-y-3 pt-4 border-t-2 border-black/10">
                    <div className="bg-[#FED7AA] border-2 border-black p-3 rounded-xl flex items-center justify-between gap-3 shadow-[2px_2px_0px_0px_#000]">
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono font-bold uppercase text-neutral-700">
                          Featured Track
                        </div>
                        <div className="font-display font-black text-xs uppercase truncate text-black">
                          {creator.notableTrack}
                        </div>
                      </div>
                      <button
                        onClick={() => handleTogglePlay(creator.id, creator.audioSrc)}
                        className={`w-9 h-9 rounded-full border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000] cursor-pointer ${
                          isPlaying ? "bg-[#FF2E2E] text-white" : "bg-[#E5FF00] text-black"
                        }`}
                        aria-label="Play artist track"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={SPOTIFY_ARTIST_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 bg-white hover:bg-[#1DB954] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Spotify</span>
                      </a>

                      <a
                        href={YOUTUBE_OAC_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 bg-white hover:bg-[#FF2E2E] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] transition-colors"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                        <span>YouTube OAC</span>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Join Academy Banner */}
          <div className="bg-[#E5FF00] border-4 border-black p-8 sm:p-10 rounded-2xl shadow-[8px_8px_0px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-black uppercase bg-black text-[#E5FF00] px-3 py-1 rounded border-2 border-black mb-3 inline-block">
                ARE YOU A FOLK SINGER OR LYRICIST?
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-black mb-2">
                Join Academy of Folk Music &amp; Heritage
              </h2>
              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed">
                Pay a one-time ₹499 membership fee to become a lifetime member of the Media Mafias artist catalog. Submit your raw mobile vocals via WhatsApp, receive broadcast LUFS mastering, and get distributed to Spotify, Apple Music &amp; 150+ DSPs with 80% direct royalties.
              </p>
            </div>

            <Link
              href="/academy"
              className="bg-black hover:bg-neutral-900 text-white font-mono font-black text-sm uppercase px-8 py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] shrink-0 flex items-center gap-2 hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#E5FF00]" />
              <span>Enroll For ₹499 ➔</span>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
