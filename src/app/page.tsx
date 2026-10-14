import * as React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DspAuthorityBar } from "@/components/sections/DspAuthorityBar";
import { FolkNicheCategories } from "@/components/sections/FolkNicheCategories";
import { YouTubeShowcase } from "@/components/sections/YouTubeShowcase";

export const metadata: Metadata = {
  title: "Media Mafias | High-Fidelity Regional Folk of the Indo-Gangetic Belt",
  description: "Preserving and modernizing the authentic folk music of Baghelkhand, Awadh, Bundelkhand, and Purvanchal in broadcast-grade cinematic audio. Stream on YouTube & major DSPs.",
  keywords: [
    "Bagheli Folk Music", "Bundeli Lokgeet", "Awadhi Folk Songs", "Purvanchal Bhojpuri Music",
    "Baghelkhand songs", "Alha Udal Bundelkhand", "Sohar songs Bagheli", "Kajri Lokgeet",
    "High Fidelity Folk", "Urban Mandap Style", "Beatless Wedding BGM", "Media Mafias YouTube",
    "Media Mafias Roots", "PPL exempt in store music India", "Vernacular Audio Distribution"
  ]
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />
      <Hero />
      <DspAuthorityBar />
      <FolkNicheCategories />
      <YouTubeShowcase />
      <Footer />
    </main>
  );
}
