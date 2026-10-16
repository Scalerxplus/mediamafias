"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Radio, Film, Heart, CheckCircle2, ArrowRight, FileText, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Link from "next/link";

export default function LicensingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 bg-radial-[at_top_center] from-[#1A1A22] via-[#0B0B0E] to-[#0B0B0E] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
            B2B COMMERCIAL &amp; SYNC LICENSING
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white mb-4 leading-tight">
            Commercial Audio, In-Store Radio &amp; Sync
          </h1>
          <div className="font-sans font-bold text-xl sm:text-2xl text-[#D4AF37] mb-4">
            PPL व IPRS रॉयल्टी से पूर्णतः मुक्त • 100% डायरेक्ट मास्टर राइट्स
          </div>
          <p className="font-mono text-xs sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
            Eliminate PPL &amp; IPRS legal risks with 100% direct-owned Indo-Gangetic regional folk music. Backed by statutory enterprise indemnity from <strong className="text-white">ScalerX Lab (UDYAM-MP-38-0052942)</strong>.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20need%20PPL-IPRS%20exempt%20In-Store%20AI%20Radio%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#10B981] hover:bg-[#059669] text-black font-mono font-bold text-xs sm:text-sm uppercase px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>In-Store Radio Inquiry (WhatsApp)</span>
            </a>

            <a
              href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20folk%20music%20for%20an%20OTT%20project%20or%20wedding."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#e5be47] text-black font-mono font-bold text-xs sm:text-sm uppercase px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg"
            >
              <Film className="w-5 h-5 text-black" />
              <span>OTT &amp; Wedding Sync Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Main B2B Pillars */}
      <section className="py-16 px-6 bg-[#0E0E12]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Pillar 1: In-Store AI Radio */}
          <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-colors">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                  <Radio className="w-6 h-6 text-[#D4AF37]" />
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#D4AF37] tracking-wider">
                  PILLAR 01 • COMMERCIAL SPACES &amp; RETAIL
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                100% PPL / IPRS Exempt In-Store AI Radio
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Powered by <strong className="text-white">The Future Radio (thefutureradio.com)</strong> and governed by a 24/7 AI Master Clock. We stream curated dialect-specific ambient audio directly to retail stores, hotel lobbies, cafes, hospital wait areas, and commercial malls.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "₹3,500–₹6,000/yr (Save 80%+ vs. PPL/IPRS)",
                  "Zero Copyright Act Sec. 63 liability",
                  "Statutory ScalerX Lab indemnity bond",
                  "Dynamic dayparting (BPM alters by time)",
                  "No CDs, pendrives or repetitive ads",
                  "Multi-branch web dashboard control"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-neutral-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20need%20PPL-IPRS%20exempt%20In-Store%20AI%20Radio%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e5be47] text-black px-5 py-3 rounded-xl font-mono font-bold text-xs uppercase transition-all"
                >
                  <span>Request 7-Day Free Trial Stream</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#181820] border border-[#D4AF37]/30 rounded-2xl p-6 space-y-4 text-left">
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-white border-b border-white/10 pb-2">
                Legal Compliance Guarantee
              </h3>
              <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                Under Section 30 of the Indian Copyright Act, 1957, the owner of copyright in any work may grant any interest in the right by license in writing. Media Mafias licenses its direct-owned catalog directly to commercial clients, superseding collective society mandates.
              </p>
              <div className="p-3.5 bg-[#121217] border border-white/10 rounded-lg font-mono text-[11px] text-neutral-200 space-y-1.5">
                <div>🏢 Certificate Issuer: <strong className="text-white">ScalerX Lab</strong></div>
                <div>📜 MSME Registration: <strong className="text-[#D4AF37]">UDYAM-MP-38-0052942</strong></div>
                <div>🛡️ Indemnity: Comprehensive legal defense coverage</div>
              </div>
            </div>
          </div>

          {/* Pillar 2: One-Stop OTT & Brand Sync */}
          <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-colors">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#C0392B]/10 border border-[#C0392B]/30 rounded-xl">
                  <Film className="w-6 h-6 text-[#C0392B]" />
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#C0392B] tracking-wider">
                  PILLAR 02 • FILM &amp; ADVERTISING
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                One-Stop OTT, Cinema &amp; Brand Sync
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Filmmakers, OTT showrunners, and agency creative directors: Stop dealing with weeks of fragmented label negotiations. We provide 100% pre-cleared master and publishing rights for Hindi-belt heartland narratives (UP, MP, Bihar, Jharkhand).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Single-signature master + sync clearance",
                  "Stems delivered within 24 hours (FLAC/WAV)",
                  "Authentic Bagheli, Bundeli & Awadhi lyrics",
                  "Bespoke score adaptations available",
                  "Worldwide perpetual festival & OTT rights",
                  "Cue-sheet ready metadata with ISRC/ISWC"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-neutral-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20folk%20music%20for%20an%20OTT%20project%20or%20wedding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white px-5 py-3 rounded-xl font-mono font-bold text-xs uppercase transition-all"
                >
                  <span>Connect with Music Supervisor</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#181820] border border-white/10 rounded-2xl p-6 space-y-4 text-left">
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-white border-b border-white/10 pb-2">
                Ideal For OTT &amp; Production Houses
              </h3>
              <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                Whether you are shooting a gritty crime thriller set in Bundelkhand, a rural family drama in Awadh, or an indie documentary along the Narmada and Son rivers, our authentic acoustic recordings offer broadcast-grade immersion without sample clearance headaches.
              </p>
              <div className="p-3.5 bg-[#121217] border border-white/10 rounded-lg font-mono text-[11px] text-[#D4AF37]">
                ✨ Turnaround: Pre-cleared master licenses granted within 48 hours.
              </div>
            </div>
          </div>

          {/* Pillar 3: Bespoke Wedding Audio */}
          <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-colors">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                  <Heart className="w-6 h-6 text-[#D4AF37]" />
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#D4AF37] tracking-wider">
                  PILLAR 03 • WEDDINGS &amp; FAMILY HERITAGE
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                Bespoke Wedding Audio (#UrbanMandapStyle)
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Upscale families and luxury wedding planners: Say goodbye to loud, gaudy DJ tracks during sacred rituals. We craft refined acoustic Shehnai, Sitar, and Sarangi scores and custom Sohar / Vivah Geet family commissions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "#UrbanMandapStyle beatless ambient arrangements",
                  "Customized bride/groom name inclusion in lyrics",
                  "Sacred ritual dayparting (Haldi, Mandap, Phere, Bidai)",
                  "Broadcast master audio delivered on luxury USB/FLAC",
                  "Live acoustic instrumentalist troupe bookings"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-neutral-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20folk%20music%20for%20an%20OTT%20project%20or%20wedding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e5be47] text-black px-5 py-3 rounded-xl font-mono font-bold text-xs uppercase transition-all"
                >
                  <span>Book Wedding Soundscape Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#181820] border border-[#D4AF37]/30 rounded-2xl p-6 space-y-4 text-left">
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-white border-b border-white/10 pb-2">
                Family Heritage Commissions
              </h3>
              <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                Preserve your family elders&apos; cherished oral Sohar and Mangal Geet songs into studio-mastered heirloom audio. We record your elders or recreate family folk lyrics with master singers for generations to cherish.
              </p>
              <div className="p-3.5 bg-[#121217] border border-white/10 rounded-lg font-mono text-[11px] text-neutral-200">
                🎙️ Includes: On-location vocal capture + stereo mastering.
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
