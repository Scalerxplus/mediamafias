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
  },
  openGraph: {
    title: "Media Mafias — AI Folk Music Label, Creator Academy & Audio Distribution Platform India",
    description: "Distribute regional folk & indie music to 150+ platforms, join the ₹499 Creator Academy, or license PPL/IPRS-exempt In-Store AI Radio & Content API in India.",
    url: "https://www.mediamafias.com/",
    siteName: "Media Mafias",
    images: [
      {
        url: "https://www.mediamafias.com/logo-square.png",
        width: 1200,
        height: 1200,
        alt: "Media Mafias Official Logo",
      },
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Mafias — Central India Regional Folk Music Record Label",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mafias — AI Folk Music Label, Creator Academy & Audio Distribution Platform India",
    description: "Distribute regional folk & indie music to 150+ platforms, join the ₹499 Creator Academy, or license PPL/IPRS-exempt In-Store AI Radio & Content API in India.",
    images: ["https://www.mediamafias.com/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
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
