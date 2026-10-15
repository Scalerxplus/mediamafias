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
  title: "Media Mafias — AI Folk Music Label, Creator Academy & Audio Distribution Platform India",
  description: "Distribute regional folk & indie music to 150+ platforms, join the ₹499 Creator Academy, or license PPL/IPRS-exempt In-Store AI Radio & Content API in India.",
  keywords: [
    "Media Mafias", "Bagheli Lokgeet", "बघेली लोकगीत", "Awadhi Vivah Geet", "अवधी विवाह गीत",
    "Bundeli Folk Pop", "बुंदेली लोकगीत", "Bhojpuri Sohar Kajri", "सोहर कजरी देवी जस",
    "PPL IPRS exempt background music India", "In-Store AI Radio", "OTT Sync Licensing India",
    "Urban Mandap Wedding BGM", "AI Music Creator Academy India", "The Future Radio",
    "Vernacular Audio Distribution India", "Content API India", "ScalerX Lab"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/",
  }
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
