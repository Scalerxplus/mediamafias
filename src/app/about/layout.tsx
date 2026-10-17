import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Media Mafias — Independent Regional Folk Music Record Label & Audio Ecosystem",
  description: "Media Mafias is an Indian regional folk record label, decentralized audio distribution network, and creator academy dedicated to Baghelkhand, Awadh, Bundelkhand, and Purvanchal. 100% direct master rights, PPL/IPRS exempt.",
  keywords: [
    "About Media Mafias",
    "Media Mafias record label",
    "Bagheli folk music label",
    "Bundeli music company",
    "Awadhi folk preservation",
    "ScalerX Lab audio",
    "UDYAM-MP-38-0052942",
    "PPL IPRS exempt label India",
    "Rewa folk music company"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/about",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com/about",
    siteName: "Media Mafias",
    title: "About Media Mafias — Independent Regional Folk Record Label",
    description: "Preserving living oral heritage with broadcast-grade AI audio engineering. 100% direct-owned master rights, PPL & IPRS exempt.",
    images: [
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Media Mafias",
      },
    ],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Media Mafias",
  "url": "https://www.mediamafias.com/about",
  "description": "Media Mafias is India's premier regional folk music record label, creator academy, and vernacular audio platform operated by ScalerX Lab (UDYAM-MP-38-0052942).",
  "mainEntity": {
    "@type": "Organization",
    "name": "Media Mafias",
    "url": "https://www.mediamafias.com",
    "logo": "https://www.mediamafias.com/Logo%20horizontal.png",
    "foundingLocation": {
      "@type": "Place",
      "name": "Rewa, Madhya Pradesh, India"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "ScalerX Lab",
      "url": "https://scalerxlab.com"
    },
    "sameAs": [
      "https://open.spotify.com/artist/1mwA0Fbjp1AnnEEfj2Sroy",
      "https://www.youtube.com/@MediaMafias",
      "https://www.instagram.com/mediamafias",
      "https://www.facebook.com/TheMediaMafias"
    ]
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
