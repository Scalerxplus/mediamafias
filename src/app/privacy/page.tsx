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
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white border-4 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#000] space-y-6">
          <div className="inline-block bg-[#E5FF00] border-2 border-black px-3 py-1 rounded font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000]">
            LEGAL COMPLIANCE
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-black">
            Privacy Policy
          </h1>

          <p className="font-mono text-xs text-neutral-500">
            Last Updated: October 15, 2026 • ScalerX Lab (UDYAM-MP-38-0052942)
          </p>

          <div className="font-sans text-sm sm:text-base text-neutral-800 space-y-6 pt-4 border-t-2 border-black/10 leading-relaxed">
            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
              1. Information We Collect
            </h2>
            <p>
              Media Mafias (&quot;we&quot;, &quot;our&quot;, operated by ScalerX Lab) collects information necessary to provide vernacular music distribution, creator upskilling through the Creator Academy, and B2B in-store radio licensing. This includes creator contact details, audio stems, metadata, payment details for royalty splits, and technical telemetry from our streaming endpoints.
            </p>

            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
              2. Audio Masters &amp; Intellectual Property
            </h2>
            <p>
              When folk creators submit raw vocal recordings to the Media Mafias Creator Academy, we process and remaster the files solely for distribution to authorized DSPs and streaming platforms per our 80/20 royalty agreement. Creators retain ownership of their underlying cultural work as defined in our agreements.
            </p>

            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
              3. Commercial B2B Client Data
            </h2>
            <p>
              For commercial venues licensing The Future Radio (hospitals, hotels, retail outlets), we maintain licensing certificates, store location details, and streaming performance logs required to generate statutory copyright indemnity guarantees under the Indian Copyright Act, 1957.
            </p>

            <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black">
              4. Contact &amp; Grievance Officer
            </h2>
            <p>
              For privacy inquiries, data deletion requests, or copyright correspondence, contact our Grievance Desk at <a href="mailto:contact@mediamafias.com" className="underline font-bold text-black">contact@mediamafias.com</a> or +91 9209290699.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
