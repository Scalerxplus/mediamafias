import * as React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Film, CheckCircle2, Clock, ShieldCheck, Download, Mail, ArrowUpRight, Music2, Sliders } from "lucide-react";

export const metadata: Metadata = {
  title: "Heartland OTT & Film Music Sync Licensing | Media Mafias One-Stop",
  description: "Pre-cleared One-Stop sync licensing for OTT series (Panchayat, Mirzapur, Gullak), films, and advertising. 100% master and publishing rights for authentic Bagheli, Bundeli, Awadhi, and Bhojpuri folk.",
  keywords: [
    "OTT sync licensing India", "Panchayat folk songs sync", "Bhojpuri music sync license",
    "Bundeli folk music film licensing", "Awadhi traditional music sync", "one stop music licensing India",
    "Madverse sync for supervisors", "ScalerX Lab music publishing"
  ]
};

export default function SyncPage() {
  const syncCatalog = [
    {
      title: "महुआ उजरि गा",
      dialect: "Bagheli Lokgeet",
      mood: "Rural Realism • Emotional Nostalgia",
      tempo: "Slow (85 BPM)",
      description: "Atmospheric acoustic ballad evoking rural heartache, displacement, and village memories. Ideal for heartland drama scenes, montages, and introspective character moments.",
      stems: ["Acapella Vocal", "Acoustic Dholak & Harmonium", "Full Mix"],
      reference: "Panchayat / Gullak style"
    },
    {
      title: "Bagheli Nachanhai Folk Pop",
      dialect: "Baghelkhand Grooves",
      mood: "High Energy • Street Celebration",
      tempo: "Upbeat (125 BPM)",
      description: "Infectious traditional Nachanhai rhythm driven by live Nagariya, Chimta, and modern punchy sub-bass. Designed for festive marketplace scenes and dance sequences.",
      stems: ["Percussion Stems", "Lead Brass/Shehnai", "Full Mix"],
      reference: "Festive Heartland Cinema"
    },
    {
      title: "Resham Ki Dori (Vivah)",
      dialect: "Awadhi Wedding",
      mood: "Bittersweet Wedding • Bidai Farewell",
      tempo: "Mid-tempo (95 BPM)",
      description: "Authentic Awadhi marriage poetry adorned with expressive Shehnai and Santoor contrasts. Perfect for poignant family ceremonies, wedding reels, and emotional farewells.",
      stems: ["Solo Shehnai Motif", "Female Choir", "Full Mix"],
      reference: "Modern Heritage Wedding Sequences"
    },
    {
      title: "Alha-Udal Veer Gatha",
      dialect: "Bundeli Folk Ballad",
      mood: "Heroic • Martial Conflict • Epic",
      tempo: "Driving (110 BPM)",
      description: "Legendary Bundelkhand war ballad recounting warrior valour. Thunderous dholak cadences and vocal storytelling suitable for period epics and dramatic action build-ups.",
      stems: ["Warrior Vocals", "Battle Dholak Loops", "Full Mix"],
      reference: "Historical & Action Web Series"
    },
    {
      title: "Jheeni Re Jheeni (Nirgun)",
      dialect: "Banaras Mystic / Kabir",
      mood: "Spiritual Depth • Meditative Tragedy",
      tempo: "Ambient Float",
      description: "Intimate Sant Kabir verses paired with haunting Sarangi and ethereal acoustic drones. Unmatched for profound philosophical scenes, loss, and spiritual journeys.",
      stems: ["Sarangi Lead Stems", "Mystic Tanpura Drone", "Full Mix"],
      reference: "Art House Cinema & Narrative Documentaries"
    },
    {
      title: "Luturi Jhalariya (Sohar)",
      dialect: "Purvanchal / Bagheli",
      mood: "Joyous Lifecycle • Childbirth",
      tempo: "Joyful (100 BPM)",
      description: "Pure traditional celebration of new life and community prosperity. Authentic maternal chorus singing accompanied by traditional village percussion.",
      stems: ["Vocal Chorus", "Percussion Stems", "Full Mix"],
      reference: "Family Dramas & Documentaries"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-accent selection:text-white flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-accent/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-red-accent/30 bg-red-accent/10 font-mono text-[11px] text-red-accent tracking-widest uppercase rounded-full">
            <Film className="w-3.5 h-3.5 text-red-accent" />
            <span>ONE-STOP SYNC LICENSING FOR MUSIC SUPERVISORS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-wider text-white leading-tight mb-6">
            HEARTLAND OTT & FILM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-accent via-orange-500 to-amber-400">
              MUSIC SYNC LIBRARY
            </span>
          </h1>

          <p className="text-lg md:text-xl font-mono text-secondary max-w-3xl mx-auto leading-relaxed mb-10">
            Authentic Bagheli, Awadhi, Bundeli, and Purvanchali folk scores for series like <span className="text-white font-bold">Panchayat, Gullak, and Mirzapur</span>. 100% pre-cleared master and publishing rights with guaranteed 24-hour turnaround.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="mailto:cartel@mediamafias.com?subject=Sync%20Licensing%20Inquiry%20-%20Music%20Supervisor"
              className="w-full sm:w-auto px-8 py-4 bg-red-accent hover:bg-white text-white hover:text-red-accent font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded shadow-lg shadow-red-accent/20"
            >
              <Mail className="w-4 h-4" />
              <span>REQUEST ONE-STOP SYNC CLEARANCE</span>
            </a>
            
            <a 
              href="https://wa.me/919209290699?text=Hello%20Media%20Mafias%2C%20I%20am%20a%20music%20supervisor%2Fproducer%20looking%20to%20license%20folk%20tracks%20for%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-neutral-900/60 hover:bg-white hover:text-black font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 rounded"
            >
              <span>WHATSAPP A&R DESK</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Frictionless Sync */}
      <section className="py-16 px-6 border-b border-white/10 bg-neutral-950/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-black/50 border border-white/10 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-red-accent/10 flex items-center justify-center text-red-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wider text-white">100% One-Stop Rights</h3>
            <p className="text-xs font-sans text-secondary leading-relaxed">
              Both Master Recording and Underlying Publishing rights are controlled directly by Media Mafias. No fragmented co-writer clearance hurdles or legacy label red-tape.
            </p>
          </div>

          <div className="p-6 bg-black/50 border border-white/10 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wider text-white">24-Hour Fast Turnaround</h3>
            <p className="text-xs font-sans text-secondary leading-relaxed">
              Tight post-production deadlines? We deliver formal licensing agreements, ISRC/ISWC codes, and custom cue sheet metadata within 24 hours of selection.
            </p>
          </div>

          <div className="p-6 bg-black/50 border border-white/10 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-green-400/10 flex items-center justify-center text-green-400">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wider text-white">Full Stems & Re-Mix Ready</h3>
            <p className="text-xs font-sans text-secondary leading-relaxed">
              Every composition includes multi-track stems (Vocals, Acoustic Folk Instruments, Sub Bass, FX) to allow sound editors to mold the music around on-screen dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* Curated Pre-Cleared Catalog */}
      <section className="py-24 px-6 border-b border-white/10 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-xs tracking-widest text-red-accent uppercase">CURATED REGIONAL SYNC CATALOG</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-widest text-white mt-2">
                Featured Folk Compositions
              </h2>
            </div>
            <span className="font-mono text-xs text-secondary tracking-widest uppercase">
              PUBLISHING ADMIN VIA KOBALT & AMRA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {syncCatalog.map((track) => (
              <div 
                key={track.title}
                className="bg-neutral-950 p-7 rounded-xl border border-white/10 hover:border-red-accent/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 bg-red-accent/10 border border-red-accent/20 text-red-accent rounded">
                      {track.dialect}
                    </span>
                    <span className="font-mono text-[10px] text-amber-300">
                      {track.tempo}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-1 group-hover:text-red-accent transition-colors">
                    {track.title}
                  </h3>
                  <div className="font-mono text-xs text-secondary/80 mb-3">
                    {track.mood}
                  </div>
                  <p className="text-xs font-sans text-secondary leading-relaxed mb-5">
                    {track.description}
                  </p>

                  <div className="text-[11px] font-mono text-white/70 mb-5 p-2 bg-black/60 rounded border border-white/5">
                    <span className="text-secondary/60 uppercase tracking-widest text-[9px] block mb-1">Narrative Tone Fit:</span>
                    <span>{track.reference}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-secondary">
                    <Music2 className="w-3.5 h-3.5" />
                    <span>Stems: {track.stems.join(" • ")}</span>
                  </div>

                  <a 
                    href={`mailto:cartel@mediamafias.com?subject=Licensing%20Inquiry%20for%20${encodeURIComponent(track.title)}`}
                    className="p-2 text-xs font-mono text-red-accent hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest"
                  >
                    <span>LICENSE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Supervisor Direct Action */}
      <section className="py-20 px-6 bg-gradient-to-t from-neutral-950 to-black text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wider text-white">
            Need a Custom Regional Folk Cue?
          </h3>
          <p className="text-sm font-mono text-secondary leading-relaxed">
            Our production team alongside authentic local practitioners can compose bespoke Indo-Gangetic folk anthems, title tracks, or score adaptations to match your specific narrative script and timeline.
          </p>
          <div className="pt-4">
            <a 
              href="mailto:cartel@mediamafias.com?subject=Bespoke%20Folk%20Score%20Commission"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-accent hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest font-bold transition-all rounded shadow-xl"
            >
              <span>COMMISSION BESPOKE FOLK PRODUCTION</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
