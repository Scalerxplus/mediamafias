import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Media Mafias",
  description: "Privacy policy and data governance practices for creators, listeners, and commercial B2B partners of Media Mafias and ScalerX Lab.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#121217] border border-white/10 rounded-3xl p-8 sm:p-14 shadow-xl space-y-6">
          <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
            LEGAL COMPLIANCE &amp; DATA PRIVACY
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            Privacy Policy
          </h1>

          <p className="font-mono text-xs text-neutral-400">
            Last Updated: October 16, 2026 • ScalerX Lab (UDYAM-MP-38-0052942)
          </p>

          <div className="font-sans text-sm sm:text-base text-neutral-300 space-y-6 pt-4 border-t border-white/10 leading-relaxed">
            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-white">
              1. Information We Collect
            </h2>
            <p>
              Media Mafias (&quot;we&quot;, &quot;our&quot;, operated by ScalerX Lab) collects information necessary to provide vernacular music distribution, creator upskilling through the Creator Academy, and B2B in-store radio licensing. This includes creator contact details, audio stems, metadata, payment details for royalty splits, and technical telemetry from our streaming endpoints.
            </p>

            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-white">
              2. Audio Masters &amp; Intellectual Property
            </h2>
            <p>
              When folk creators submit raw vocal recordings to the Media Mafias Creator Academy, we process and remaster the files solely for distribution to authorized DSPs and streaming platforms per our 80/20 royalty agreement. Creators retain ownership of their underlying cultural work as defined in our agreements.
            </p>

            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-white">
              3. Data Security &amp; Contact
            </h2>
            <p>
              We implement industry-standard encryption and access controls. If you have questions about your personal data or artist profile, contact our compliance officer at <a href="mailto:contact@mediamafias.com" className="text-[#D4AF37] underline">contact@mediamafias.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
