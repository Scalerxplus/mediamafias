import * as React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, AlertTriangle, Radio, CheckCircle2, Building2, Hospital, ShoppingBag, Utensils, ArrowRight, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "100% PPL & IPRS Exempt In-Store AI Radio | Commercial Audio Licensing India",
  description: "Protect your commercial venue from Section 63 copyright infringement. Stream high-fidelity 100% PPL/IPRS-exempt in-store ambient music for hospitals, retail, and hotels with full legal indemnification from ScalerX Lab.",
  keywords: [
    "PPL exempt music India", "IPRS license exemption", "in-store radio India", "commercial music license hospital",
    "retail store background music legal", "section 63 copyright act defense", "ScalerX Lab in store radio", "The Future Radio commercial"
  ]
};

export default function B2bRadioPage() {
  const verticals = [
    {
      title: "Hospitals & Wellness Clinics",
      icon: <Hospital className="w-8 h-8 text-sky-400" />,
      stream: "Beatless Meditative Healing (#SarangiSufi)",
      description: "Continuous peaceful soundscapes featuring acoustic Sarangi, Sitar, and meditative Kabir melodies. Reduces patient anxiety and clinic noise stress with zero jarring percussions.",
      features: ["Customized Token / OPD Announcements", "Patient Calming Audio Stems", "100% Non-Distractive Ambient Sound"]
    },
    {
      title: "Jewellery & Ethnic Retail",
      icon: <ShoppingBag className="w-8 h-8 text-amber-400" />,
      stream: "High-Fidelity Shehnai & Sitar Fusion (#UrbanMandapStyle)",
      description: "Rich cultural ambiance for bridal and luxury showrooms. Elevates festive footfall with broadcast-grade acoustic Shehnai, Santoor, and refined Indo-Gangetic wedding music.",
      features: ["Festive Sale In-Stream Jingles", "Luxury Ethnic Ambiance", "Higher In-Store Dwell Time"]
    },
    {
      title: "Heritage Hotels & Dining",
      icon: <Utensils className="w-8 h-8 text-emerald-400" />,
      stream: "Acoustic Vernacular Lofi & Folk Pop",
      description: "Curated regional folk fusion blending authentic rural roots with mellow modern grooves. Perfect for cafes, heritage retreats, and fine dining lounges.",
      features: ["Day/Night Dayparting Clock", "Zero Streaming Buffer", "Autonomous 24/7 AI Playback"]
    },
    {
      title: "Corporate Offices & Real Estate",
      icon: <Building2 className="w-8 h-8 text-purple-400" />,
      stream: "Deep Focus Ambient & Subtle Drone",
      description: "Atmospheric, non-intrusive soundscapes designed for modern workspaces, reception lobbies, and real estate experience centers.",
      features: ["Pristine Audio Quality", "Direct Copyright Indemnity Certificate", "Zero Monthly Licensing Hassles"]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-accent selection:text-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-accent/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-green-500/30 bg-green-500/10 font-mono text-[11px] text-green-400 tracking-widest uppercase rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
            <span>100% PPL, IPRS & NOVEX EXEMPT • FULL LEGAL INDEMNIFICATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-wider text-white leading-tight mb-6">
            IN-STORE AI RADIO FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-accent via-orange-500 to-amber-400">
              COMMERCIAL VENUES
            </span>
          </h1>

          <p className="text-lg md:text-xl font-mono text-secondary max-w-3xl mx-auto leading-relaxed mb-10">
            Stream high-fidelity ambient vernacular and meditative audio across your hospital, retail chain, or hotel. Save up to <span className="text-white font-bold">85% on annual music licensing costs</span> while completely eliminating copyright infringement risks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="https://wa.me/919209290699?text=Hello%20ScalerX%20Lab%2C%20I%20am%20interested%20in%20the%20100%25%20PPL%2FIPRS-Exempt%20In-Store%20AI%20Radio%20for%20my%20venue." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-red-accent hover:bg-white text-white hover:text-red-accent font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded shadow-lg shadow-red-accent/20"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>GET ANNUAL LICENSE (₹3,500/YR)</span>
            </a>
            
            <a 
              href="https://thefutureradio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-neutral-900/60 hover:bg-white hover:text-black font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 rounded"
            >
              <Radio className="w-4 h-4" />
              <span>LISTEN TO LIVE SAMPLE STREAM</span>
            </a>
          </div>
        </div>
      </section>

      {/* The Legal Crisis & Arbitrage Section */}
      <section className="py-20 px-6 border-b border-white/10 bg-neutral-950/60 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* The Threat of PPL/IPRS Raids */}
            <div className="p-8 rounded-xl bg-red-950/20 border border-red-accent/30 space-y-4">
              <div className="flex items-center gap-2 text-red-accent font-mono text-xs tracking-widest uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>The Indian Commercial Music Trap</span>
              </div>
              <h3 className="text-2xl font-display uppercase tracking-widest text-white">
                Consumer Streaming in Business Premises is a Criminal Offense
              </h3>
              <p className="text-sm font-sans text-secondary leading-relaxed">
                Playing personal Spotify, Apple Music, or YouTube in a commercial premise constitutes unauthorized &ldquo;communication to the public&rdquo; under Section 63 of the Indian Copyright Act, 1957.
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-red-200/90 pt-2 border-t border-red-accent/20">
                <li className="flex items-center gap-2">
                  <span className="text-red-accent font-bold">✕</span> Non-bailable criminal offense with potential police FIRs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-accent font-bold">✕</span> Statutory penalties from ₹50,000 to ₹2,00,000 per violation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-accent font-bold">✕</span> PPL + IPRS + Novex combined tariffs cost ₹18,800 to ₹40,000+/year
                </li>
              </ul>
            </div>

            {/* The Media Mafias Solution */}
            <div className="p-8 rounded-xl bg-green-950/20 border border-green-500/30 space-y-4">
              <div className="flex items-center gap-2 text-green-400 font-mono text-xs tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>The Media Mafias Legal Shield</span>
              </div>
              <h3 className="text-2xl font-display uppercase tracking-widest text-white">
                100% Direct Ownership = Zero Royalty Societies
              </h3>
              <p className="text-sm font-sans text-secondary leading-relaxed">
                Media Mafias directly owns and controls 100% of master recordings and underlying musical/literary copyrights. We do not license through PPL, IPRS, or Novex.
              </p>
              <ul className="space-y-2.5 text-xs font-mono text-green-200/90 pt-2 border-t border-green-500/20">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span>Flat ₹3,500 – ₹6,000/year per venue (Save up to 85%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span>Direct Copyright Indemnification Certificate issued by ScalerX Lab</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span>UDYAM Registered Enterprise: UDYAM-MP-38-0052942</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Specific Streams */}
      <section className="py-24 px-6 border-b border-white/10 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="font-mono text-xs tracking-widest text-red-accent uppercase">CURATED COMMERCIAL SOUNDSCAPES</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-white">
              Tailored For Your Venue Experience
            </h2>
            <p className="text-secondary max-w-2xl mx-auto text-sm font-sans">
              Unlike generic radio with jarring commercials, our streams are governed by a 24/7 AI Master Clock designed specifically for consumer dwell time and therapeutic calming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((vert) => (
              <div 
                key={vert.title} 
                className="bg-neutral-950 p-8 rounded-xl border border-white/10 hover:border-red-accent/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/5 rounded-xl">
                      {vert.icon}
                    </div>
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 bg-white/5 text-amber-300 border border-white/5 rounded">
                      SPECIALIZED STREAM
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-1 group-hover:text-red-accent transition-colors">
                    {vert.title}
                  </h3>
                  <div className="font-mono text-xs text-red-accent/90 tracking-wide mb-3">
                    {vert.stream}
                  </div>
                  <p className="text-sm font-sans text-secondary leading-relaxed mb-6">
                    {vert.description}
                  </p>
                </div>

                <ul className="space-y-2 text-xs font-mono text-white/80 pt-4 border-t border-white/5">
                  {vert.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-accent" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Certification Box */}
      <section className="py-20 px-6 bg-gradient-to-b from-neutral-950 to-black">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 border border-red-accent/30 rounded-2xl bg-neutral-950 relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-accent/10 border border-red-accent/30 text-red-accent font-mono text-xs tracking-widest uppercase rounded">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMERCIAL ANNUAL SUBSCRIPTION</span>
          </div>

          <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wider text-white">
            ₹3,500 <span className="text-secondary text-2xl font-sans font-normal">/ Year Per Outlet</span>
          </h3>

          <p className="text-sm font-mono text-secondary max-w-xl mx-auto leading-relaxed">
            Includes 24/7 web stream playback, venue-specific stream selection, official physical/digital Certificate of Direct Indemnification, and automated AI promotional announcement setup.
          </p>

          <div className="pt-4">
            <a 
              href="https://wa.me/919209290699?text=Hello%20ScalerX%20Lab%2C%20I%20want%20to%20register%20my%20commercial%20venue%20for%20the%20In-Store%20AI%20Radio%20license."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-accent hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest font-bold transition-all rounded shadow-xl"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>CONNECT ON WHATSAPP &amp; GET CERTIFIED</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
