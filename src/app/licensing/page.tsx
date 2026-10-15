"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Radio, Film, Heart, CheckCircle2, ArrowRight, MessageCircle, FileText, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LicensingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      {/* Hero Header */}
      <section className="pt-36 pb-16 px-6 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-[#00E5FF] border-2 border-black px-3.5 py-1 rounded font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
            B2B COMMERCIAL & SYNC LICENSING
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-black mb-4">
            Commercial Audio, In-Store Radio & Sync
          </h1>
          <p className="font-mono text-sm sm:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Eliminate PPL & IPRS legal risks with 100% direct-owned Indo-Gangetic regional folk music. Backed by statutory enterprise indemnity from <strong>ScalerX Lab (UDYAM-MP-38-0052942)</strong>.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20need%20PPL-IPRS%20exempt%20In-Store%20AI%20Radio%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black font-mono font-black text-xs sm:text-sm uppercase px-6 py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>In-Store Radio Inquiry (WhatsApp)</span>
            </a>

            <a
              href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20folk%20music%20for%20an%20OTT%20project%20or%20wedding."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E5FF00] text-black font-mono font-black text-xs sm:text-sm uppercase px-6 py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] flex items-center gap-2 transition-all"
            >
              <Film className="w-5 h-5 text-black" />
              <span>OTT & Wedding Sync Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Main B2B Pillars */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Pillar 1: In-Store AI Radio */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#00E5FF] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <Radio className="w-6 h-6 text-black" />
                </span>
                <span className="font-mono text-xs font-black uppercase text-neutral-600 tracking-wider">
                  PILLAR 01 • COMMERCIAL SPACES
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-black">
                100% PPL / IPRS Exempt In-Store AI Radio
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed">
                Powered by <strong>The Future Radio (thefutureradio.com)</strong> and governed by a 24/7 AI Master Clock. We stream curated dialect-specific ambient audio directly to retail stores, hotel lobbies, cafes, hospital wait areas, and commercial malls.
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
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-neutral-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20need%20PPL-IPRS%20exempt%20In-Store%20AI%20Radio%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FDE047] hover:bg-[#E5FF00] border-2 border-black px-5 py-3 rounded-xl font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000] transition-all"
                >
                  <span>Request 7-Day Free Trial Stream</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FED7AA] border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000] space-y-4 text-left">
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-black border-b-2 border-black pb-2">
                Legal Compliance Guarantee
              </h3>
              <p className="font-mono text-xs text-neutral-800 leading-relaxed">
                Under Section 30 of the Indian Copyright Act, 1957, the owner of copyright in any work may grant any interest in the right by license in writing. Media Mafias licenses its direct-owned catalog directly to commercial clients, superseding collective society mandates.
              </p>
              <div className="p-3 bg-white border-2 border-black rounded-lg font-mono text-[11px] font-bold text-black space-y-1">
                <div>🏢 Certificate Issuer: ScalerX Lab</div>
                <div>📜 MSME Registration: UDYAM-MP-38-0052942</div>
                <div>🛡️ Indemnity: Comprehensive legal defense coverage</div>
              </div>
            </div>
          </div>

          {/* Pillar 2: One-Stop OTT & Brand Sync */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#FF69B4] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <Film className="w-6 h-6 text-black" />
                </span>
                <span className="font-mono text-xs font-black uppercase text-neutral-600 tracking-wider">
                  PILLAR 02 • FILM & ADVERTISING
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-black">
                One-Stop OTT, Cinema & Brand Sync
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed">
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
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-neutral-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20folk%20music%20for%20an%20OTT%20project%20or%20wedding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF69B4] hover:bg-[#E5FF00] border-2 border-black px-5 py-3 rounded-xl font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000] transition-all text-black"
                >
                  <span>Connect with Music Supervisor</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#C4B5FD] border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000] space-y-4 text-left">
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-black border-b-2 border-black pb-2">
                Ideal For OTT & Production Houses
              </h3>
              <p className="font-mono text-xs text-neutral-900 leading-relaxed">
                Whether you are shooting a gritty crime thriller set in Bundelkhand, a rural family drama in Awadh, or an indie documentary along the Narmada and Son rivers, our authentic acoustic recordings offer broadcast-grade immersion without sample clearance headaches.
              </p>
              <div className="p-3 bg-white border-2 border-black rounded-lg font-mono text-[11px] font-bold text-black">
                ✨ Turnaround: Pre-cleared licenses granted within 48 hours.
              </div>
            </div>
          </div>

          {/* Pillar 3: Bespoke Wedding Audio */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#FED7AA] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <Heart className="w-6 h-6 text-black" />
                </span>
                <span className="font-mono text-xs font-black uppercase text-neutral-600 tracking-wider">
                  PILLAR 03 • WEDDINGS & FAMILY HERITAGE
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-black">
                Bespoke Wedding Audio (#UrbanMandapStyle)
              </h2>

              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed">
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
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-neutral-900 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20folk%20music%20for%20an%20OTT%20project%20or%20wedding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FED7AA] hover:bg-[#E5FF00] border-2 border-black px-5 py-3 rounded-xl font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000] transition-all text-black"
                >
                  <span>Book Wedding Soundscape Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FDE047] border-3 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000] space-y-4 text-left">
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-black border-b-2 border-black pb-2">
                Family Heritage Commissions
              </h3>
              <p className="font-mono text-xs text-neutral-900 leading-relaxed">
                Preserve your family elders' cherished oral Sohar and Mangal Geet songs into studio-mastered heirloom audio. We record your elders or recreate family folk lyrics with master singers for generations to cherish.
              </p>
              <div className="p-3 bg-white border-2 border-black rounded-lg font-mono text-[11px] font-bold text-black">
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
