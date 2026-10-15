import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Licensing | Media Mafias",
  description: "Terms of service, creator academy agreements, and commercial B2B indemnity terms of Media Mafias and ScalerX Lab.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white border-4 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#000] space-y-6">
          <div className="inline-block bg-[#00E5FF] border-2 border-black px-3 py-1 rounded font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000]">
            TERMS &amp; STATUTORY INDEMNITY
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-black">
            Terms of Service &amp; Licensing
          </h1>

          <p className="font-mono text-xs text-neutral-500">
            Last Updated: October 15, 2026 • ScalerX Lab (UDYAM-MP-38-0052942)
          </p>

          <div className="font-sans text-sm sm:text-base text-neutral-800 space-y-6 pt-4 border-t-2 border-black/10 leading-relaxed">
            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
              1. Platform Overview
            </h2>
            <p>
              Media Mafias (mediamafias.com) is an Indian AI-powered regional folk music record label, decentralized audio distribution platform, and commercial in-store audio provider operated by ScalerX Lab. By accessing our services, music catalog, or creator onboarding, you agree to these Terms.
            </p>

            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
              2. Creator Academy Enrollment (₹499)
            </h2>
            <p>
              Enrollment in the Creator Academy includes raw vocal audio cleanup, broadcast-grade LUFS mastering, and digital service provider (DSP) ingestion via Madverse. Royalties earned from streaming platforms are distributed transparently with an 80% creator share and 20% platform management share.
            </p>

            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
              3. Commercial B2B In-Store Audio &amp; Indemnity
            </h2>
            <p>
              Commercial background audio provided through The Future Radio is 100% direct-owned by Media Mafias and ScalerX Lab. Pursuant to Section 30 of the Indian Copyright Act, 1957, clients holding an active Media Mafias subscription require no license from collective societies (PPL, IPRS, Novex) and receive full statutory legal defense and indemnity from ScalerX Lab.
            </p>

            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
              4. Brand &amp; Entity Disambiguation
            </h2>
            <p className="p-4 bg-neutral-100 border-2 border-black rounded-xl font-mono text-xs text-neutral-900">
              Media Mafias (mediamafias.com) is operated by ScalerX Lab (UDYAM-MP-38-0052942). It is an independent vernacular music and audio technology platform and is NOT affiliated with the Varanasi digital marketing agency Media Mafia (mediamafia.in) or mediamafia.co.za.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
