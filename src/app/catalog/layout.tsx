import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Regional Folk Catalog & Discography — Media Mafias",
  description: "Browse the complete regional music master catalog across Bagheli, Bundeli, Awadhi, and Bhojpuri folk. Broadcast-grade audio pre-cleared for wedding BGM, retail radio, and streaming on Spotify & YouTube.",
  keywords: [
    "Media Mafias catalog",
    "Bagheli song library",
    "Bundeli folk music catalog",
    "Awadhi vivah songs download",
    "Bhojpuri sohar playlist",
    "Rewa folk discography",
    "PPL exempt audio catalog"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/catalog",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com/catalog",
    siteName: "Media Mafias",
    title: "Official Regional Folk Catalog & Discography — Media Mafias",
    description: "Browse 100% direct-IP owned regional folk masters across Baghelkhand, Awadh, Bundelkhand, and Purvanchal.",
    images: [
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Mafias Folk Catalog",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Official Regional Folk Catalog & Discography — Media Mafias",
    description: "Explore authentic Central India folk masters on Media Mafias.",
    images: ["https://www.mediamafias.com/og-image.png"],
  }
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
