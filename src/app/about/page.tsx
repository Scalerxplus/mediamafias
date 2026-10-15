"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Sparkles, Building2, Globe, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header Card */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000]">
            <div className="inline-block bg-[#E5FF00] border-2 border-black px-3 py-1 rounded font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
              ABOUT SCALERX LAB &amp; MEDIA MAFIAS
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black mb-4">
              Preserving Living Oral Heritage with Broadcast-Grade AI
            </h1>

            <p className="font-mono text-sm sm:text-base text-neutral-800 leading-relaxed mb-6">
              Media Mafias is the premier vernacular folk audio ecosystem and record label dedicated to the heartland dialects of the Indo-Gangetic belt: <strong>Bagheli (Baghelkhand), Awadhi (Awadh), Bundeli (Bundelkhand), and Bhojpuri (Purvanchal)</strong>.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-mono text-xs font-bold uppercase bg-[#00E5FF] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
                PARENT: SCALERX LAB
              </span>
              <span className="font-mono text-xs font-bold uppercase bg-[#FED7AA] border-2 border-black px-3 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
                MSME: UDYAM-MP-38-0052942
              </span>
            </div>
          </div>

          {/* Visible Brand & Entity Verification Note */}
          <div className="bg-white border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span className="font-mono text-xs font-black uppercase text-neutral-900 tracking-wider">
                Official Brand &amp; Entity Disambiguation Note
              </span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed">
              Media Mafias (<a href="https://www.mediamafias.com/" className="underline font-bold text-black">mediamafias.com</a>) is an Indian AI-powered regional folk music record label, decentralized audio distribution platform, creator academy, and B2B in-store radio provider operated by ScalerX Lab. It is an independent music and audio technology platform and is NOT affiliated with the Varanasi digital marketing agency Media Mafia (mediamafia.in) or mediamafia.co.za.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#FF2E2E]" />
                <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
                  Our Mission
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-700 leading-relaxed">
                To close the massive production gap between raw village recordings and expensive corporate franchises. By pairing generative AI mastering with authentic grassroots practitioners, we produce broadcast-grade folk audio at accessible scale and distribute it to 150+ DSPs with an 80% creator-first royalty payout.
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-blue-600" />
                <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
                  Our Ecosystem
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Operating a unified multi-platform network spanning YouTube Official Artist Channel (@MediaMafias), global DSP distribution via Madverse, 24/7 autonomous vernacular radio at The Future Radio (thefutureradio.com), and 100% PPL/IPRS-exempt in-store audio for Indian commercial enterprises.
              </p>
            </div>

          </div>

          {/* Statutory Verification Box */}
          <div className="bg-[#FDE047] border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-black text-2xl uppercase text-black mb-1">
                Direct Enterprise Licensing &amp; Creator Support
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-800 max-w-xl">
                Operated from Madhya Pradesh, India. Contact our executive desk for commercial sync licensing or join the Creator Academy.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/academy"
                className="bg-black text-white hover:bg-[#FF2E2E] font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] transition-colors"
              >
                Join Academy (₹499)
              </Link>
              <Link
                href="/licensing"
                className="bg-white text-black hover:bg-neutral-100 font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] transition-colors"
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
