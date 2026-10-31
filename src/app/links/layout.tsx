import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Mafias — Listen Everywhere | Official Streaming Links & Bio",
  description: "Official streaming links for Media Mafias across Spotify, Apple Music, YouTube (@MediaMafiasRoots), JioSaavn, and Amazon Music. Stream authentic Bagheli, Bundeli, Awadhi, and Purbi folk songs in 24-bit studio fidelity.",
  keywords: [
    "Media Mafias Spotify",
    "Media Mafias Apple Music",
    "Media Mafias YouTube",
    "Media Mafias JioSaavn",
    "Media Mafias Amazon Music",
    "Media Mafias link in bio",
    "Bagheli folk music streaming",
    "Bundeli songs streaming",
    "Awadhi vivah geet",
    "Media Mafias Roots"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/links"
  },
  openGraph: {
    title: "Media Mafias — Official Streaming Links & Bio",
    description: "Choose your favorite music platform: Spotify, Apple Music, YouTube, JioSaavn, or Amazon Music. Stream authentic high-fidelity folk music.",
    url: "https://www.mediamafias.com/links",
    siteName: "Media Mafias",
    images: [
      {
        url: "https://www.mediamafias.com/logo-square.png",
        width: 1200,
        height: 1200,
        alt: "Media Mafias Official Artist Emblem",
      },
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Mafias — Sovereign Regional Folk Music Record Label",
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mafias — Official Streaming Links & Bio",
    description: "Stream authentic Bagheli, Bundeli, Awadhi & Purbi folk songs across Spotify, Apple Music, YouTube, JioSaavn, and Amazon Music.",
    images: ["https://www.mediamafias.com/og-image.png"]
  }
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
