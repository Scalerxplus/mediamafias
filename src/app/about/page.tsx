"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldCheck,
  Sparkles,
  Globe,
  HeartHandshake,
  Music2,
  Mic,
  Award,
  Landmark,
  Radio,
  ArrowRight,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header Hero Card */}
          <div className="bg-[#121217] border border-white/10 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-5">
              INDEPENDENT FOLK RECORD LABEL &amp; AUDIO ECOSYSTEM
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4 leading-tight">
              Preserving Living Oral Heritage with Broadcast-Grade AI
            </h1>

            <div className="font-sans font-bold text-xl sm:text-3xl text-[#D4AF37] mb-6">
              मध्य भारत की वाचिक लोक संस्कृति और संगीत का डिजिटल पुनर्जागरण
            </div>

            <p className="font-mono text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl mb-8">
              Media Mafias is India’s foremost vernacular folk music label, decentralized audio distribution network, and cultural archive. We are dedicated to archiving, mastering, and modernizing the living acoustic soul of the Indo-Gangetic and Vindhya heartlands: <strong className="text-white">Baghelkhand (Bagheli), Awadh (Awadhi), Bundelkhand (Bundeli), and Purvanchal (Bhojpuri)</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-mono text-xs font-bold uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-xl">
                100% DIRECT MASTER RIGHTS
              </span>
              <span className="font-mono text-xs font-bold uppercase bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-xl">
                PPL &amp; IPRS EXEMPT
              </span>
              <span className="font-mono text-xs font-bold uppercase bg-white/5 text-neutral-300 border border-white/10 px-3.5 py-1.5 rounded-xl">
                MSME: UDYAM-MP-38-0052942
              </span>
            </div>
          </div>

          {/* Statement of Cultural Sovereignty & Direct Ownership (Replaced third-party note with powerful brand authority) */}
          <div className="bg-[#14141A] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2.5 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-mono text-xs sm:text-sm font-bold uppercase text-white tracking-wider">
                Our Identity &amp; Intellectual Sovereignty (पहचान और सांस्कृतिक संप्रभुता)
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Media Mafias (<a href="https://www.mediamafias.com/" className="underline font-bold text-[#D4AF37]">mediamafias.com</a>) operates as a completely sovereign, vertically integrated Indian music and audio technology enterprise. Every recording in our master vault is produced through direct contracts with grassroots folk practitioners, village mandalis, and heritage exponents. We own and control 100% of both master sound recording rights and underlying musical publishing. This eliminates all third-party royalty collecting societies (PPL, IPRS, SIMCA) and offers absolute legal indemnification to businesses, filmmakers, and broadcasters worldwide.
            </p>
          </div>

          {/* 4 Pillars of Cultural Renaissance */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                THE 4 CULTURAL PILLARS
              </div>
              <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white">
                लोक कला का नया युग (The New Era of Vernacular Folk)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pillar 1 */}
              <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-[#C0392B]/15 border border-[#C0392B]/30 rounded-xl text-[#C0392B]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-wide text-white">
                      1. Oral Heritage Preservation
                    </h3>
                    <span className="font-sans font-bold text-xs text-[#D4AF37]">
                      वाचिक परंपरा का संरक्षण
                    </span>
                  </div>
                </div>
                <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Generations of oral memory — from Bagheli Sohar-Dadra and courtyard Vivah geet (Parchhan, Gari, Gailhai) to Bundeli Veer Ras and Awadhi Kajri — are fading rapidly. We travel into the rural heartlands of Rewa, Satna, Bundelkhand, and Awadh to document, record, and archive these treasures with complete lyrical and cultural fidelity.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-wide text-white">
                      2. Broadcast-Grade AI Mastering
                    </h3>
                    <span className="font-sans font-bold text-xs text-[#D4AF37]">
                      विश्वस्तरीय एआई ऑडियो इंजीनियरिंग
                    </span>
                  </div>
                </div>
                <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Grassroots artists often record on simple smartphones with noisy room acoustics. Our proprietary AI acoustic pipeline de-noises, stems, stereo-widens, and masters these field vocal tracks to the exact technical loudness standards (-14 LUFS) required by Spotify, Apple Music, and Dolby Atmos OTT broadcasts.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-[#10B981]/15 border border-[#10B981]/30 rounded-xl text-[#10B981]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-wide text-white">
                      3. 80% Creator-First Royalties
                    </h3>
                    <span className="font-sans font-bold text-xs text-[#10B981]">
                      कलाकारों को 80% सीधा लाभ
                    </span>
                  </div>
                </div>
                <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Traditional record labels take up to 90% of royalties while offering artists zero visibility. Media Mafias reverses this paradigm: our Creator Academy provides lifetime distribution across 150+ music apps with an 80% direct royalty payout, guaranteed transparent accounting, and full artist attribution.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-[#3B82F6]/15 border border-[#3B82F6]/30 rounded-xl text-[#3B82F6]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-wide text-white">
                      4. Global Distribution &amp; B2B Sync
                    </h3>
                    <span className="font-sans font-bold text-xs text-[#3B82F6]">
                      वैश्विक प्रसार एवं कमर्शियल सिंक
                    </span>
                  </div>
                </div>
                <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Our ecosystem encompasses YouTube Official Artist Channel (@MediaMafias), autonomous 24/7 vernacular radio at The Future Radio, One-Stop film/OTT sync clearance for web series, and 100% PPL/IPRS-exempt in-store background radio for commercial venues across India.
                </p>
              </div>
            </div>
          </div>

          {/* Statutory Infrastructure Card */}
          <div className="bg-[#101015] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-display font-black text-xl uppercase tracking-wide text-white">
                Statutory Enterprise Standing &amp; Corporate Infrastructure
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 bg-[#141419] border border-white/5 rounded-xl">
                <div className="text-neutral-500 uppercase font-bold text-[10px] mb-1">Corporate Operator</div>
                <div className="font-bold text-white text-sm">ScalerX Lab</div>
                <div className="text-neutral-400 mt-1">AI &amp; Audio Infrastructure Enterprise</div>
              </div>
              <div className="p-4 bg-[#141419] border border-white/5 rounded-xl">
                <div className="text-neutral-500 uppercase font-bold text-[10px] mb-1">Government Registration</div>
                <div className="font-bold text-[#D4AF37] text-sm">UDYAM-MP-38-0052942</div>
                <div className="text-neutral-400 mt-1">Ministry of MSME, Govt. of India</div>
              </div>
              <div className="p-4 bg-[#141419] border border-white/5 rounded-xl">
                <div className="text-neutral-500 uppercase font-bold text-[10px] mb-1">Headquarters &amp; Studios</div>
                <div className="font-bold text-white text-sm">Rewa, MP · Delhi · Bangalore</div>
                <div className="text-neutral-400 mt-1">Heartland Culture · National Reach</div>
              </div>
            </div>
          </div>

          {/* Direct CTA Box */}
          <div className="bg-[#16161E] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="font-display font-black text-2xl uppercase text-white mb-1">
                Collaborate with Media Mafias
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-xl">
                Join our Creator Academy as a folk vocalist, license music for OTT/films, or equip your commercial business with 100% PPL/IPRS-exempt in-store audio.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/academy"
                className="bg-[#D4AF37] hover:bg-[#e5be47] text-black font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl transition-all shadow-md"
              >
                Join Academy
              </Link>
              <Link
                href="/licensing"
                className="bg-[#1F1F28] hover:bg-white hover:text-black text-white font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl border border-white/10 transition-all"
              >
                B2B Licensing Desk
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/5 text-neutral-300 hover:text-white font-mono font-bold text-xs uppercase px-4 py-3 rounded-xl border border-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
