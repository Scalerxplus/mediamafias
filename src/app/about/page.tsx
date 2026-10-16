"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Sparkles, Building2, Globe, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header Card */}
          <div className="bg-[#121217] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
              ABOUT SCALERX LAB &amp; MEDIA MAFIAS
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4 leading-tight">
              Preserving Living Oral Heritage with Broadcast-Grade AI
            </h1>

            <div className="font-sans font-bold text-xl sm:text-2xl text-[#D4AF37] mb-4">
              मध्य भारत की वाचिक लोक संस्कृति और संगीत का डिजिटल संरक्षण
            </div>

            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
              Media Mafias is the premier vernacular folk audio ecosystem and record label dedicated to the heartland dialects of the Indo-Gangetic belt: <strong className="text-white">Bagheli (Baghelkhand), Awadhi (Awadh), Bundeli (Bundelkhand), and Bhojpuri (Purvanchal)</strong>.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-mono text-xs font-bold uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full">
                PARENT: SCALERX LAB
              </span>
              <span className="font-mono text-xs font-bold uppercase bg-white/5 text-neutral-300 border border-white/10 px-3 py-1 rounded-full">
                MSME: UDYAM-MP-38-0052942
              </span>
            </div>
          </div>

          {/* Visible Brand & Entity Verification Note */}
          <div className="bg-[#141419] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
              <span className="font-mono text-xs font-bold uppercase text-neutral-200 tracking-wider">
                Official Brand &amp; Entity Disambiguation Note
              </span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Media Mafias (<a href="https://www.mediamafias.com/" className="underline font-bold text-[#D4AF37]">mediamafias.com</a>) is an Indian AI-powered regional folk music record label, decentralized audio distribution platform, creator academy, and B2B in-store radio provider operated by ScalerX Lab. It is an independent music and audio technology platform and is NOT affiliated with the Varanasi digital marketing agency Media Mafia (mediamafia.in) or mediamafia.co.za.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#C0392B]" />
                <h2 className="font-display font-black text-2xl uppercase tracking-wide text-white">
                  Our Mission
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                To close the massive production gap between raw village recordings and expensive corporate franchises. By pairing generative AI mastering with authentic grassroots practitioners, we produce broadcast-grade folk audio at accessible scale and distribute it to 150+ DSPs with an 80% creator-first royalty payout.
              </p>
            </div>

            <div className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-[#3B82F6]" />
                <h2 className="font-display font-black text-2xl uppercase tracking-wide text-white">
                  Our Ecosystem
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Operating a unified multi-platform network spanning YouTube Official Artist Channel (@MediaMafias), global DSP distribution via Madverse, 24/7 autonomous vernacular radio at The Future Radio (thefutureradio.com), and 100% PPL/IPRS-exempt in-store audio for Indian commercial enterprises.
              </p>
            </div>
          </div>

          {/* Direct CTA Box */}
          <div className="bg-[#16161E] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-black text-2xl uppercase text-white mb-1">
                Direct Enterprise Licensing &amp; Creator Support
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-xl">
                Operated from Madhya Pradesh, India. Contact our executive desk for commercial sync licensing or join the Creator Academy.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/academy"
                className="bg-[#D4AF37] hover:bg-[#e5be47] text-black font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl transition-colors"
              >
                Join Academy (₹499)
              </Link>
              <Link
                href="/licensing"
                className="bg-[#1F1F28] hover:bg-white hover:text-black text-white font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl border border-white/10 transition-colors"
              >
                B2B Licensing
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
