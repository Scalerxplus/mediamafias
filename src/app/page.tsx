import * as React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { SoundscapeGrid } from "@/components/sections/SoundscapeGrid";
import { ComplianceComparison } from "@/components/sections/ComplianceComparison";
import { VoiceSearchFaq } from "@/components/sections/VoiceSearchFaq";

export const metadata: Metadata = {
  title: "Media Mafias | High-Fidelity Regional Folk of the Indo-Gangetic Belt",
  description: "Preserving and modernizing the authentic folk music of Baghelkhand, Awadh, Bundelkhand, and Purvanchal. 100% PPL/IPRS-exempt In-Store AI Radio and ₹99 Creator Academy.",
  keywords: [
    "Media Mafias", "Bagheli Folk Music", "Bundeli Lokgeet", "Awadhi Folk Songs",
    "Purvanchal Bhojpuri Music", "Baghelkhand songs", "Alha Udal Bundelkhand",
    "Sohar songs Bagheli", "Kajri Lokgeet", "High Fidelity Folk", "Urban Mandap Style",
    "Beatless Wedding BGM", "PPL exempt in store music India", "The Future Radio",
    "Vernacular Audio Distribution"
  ]
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />
      <Hero />
      <TrustBar />
      <SoundscapeGrid />
      <ComplianceComparison />
      <VoiceSearchFaq />
      <Footer />
    </main>
  );
}
