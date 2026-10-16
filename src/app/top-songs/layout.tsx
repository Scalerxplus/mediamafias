import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Regional Songs & Folk Chartbusters — Bagheli, Bundeli, Awadhi, Bhojpuri | Media Mafias",
  description: "Stream the top 10 most popular regional folk songs, wedding tracks, and spiritual ballads from Rewa, Satna, Jhansi, Ayodhya, and Varanasi. Pre-cleared broadcast masters with direct Spotify & YouTube links.",
  keywords: [
    "top bagheli songs",
    "top bundeli songs",
    "top awadhi folk",
    "bhojpuri sohar top songs",
    "rewa satna top songs",
    "shadi ke hit geet",
    "desi wedding top songs",
    "Media Mafias chartbusters",
    "Ram Banra Ban Aayo Re",
    "More Raja Bagheli Lokgeet",
    "Badariya Kari Re Hari",
    "Lakhan Lutai Deb"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/top-songs",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com/top-songs",
    siteName: "Media Mafias",
    title: "Top Regional Songs & Folk Chartbusters — Media Mafias",
    description: "Stream the top streamed and licensed folk master recordings across Bagheli, Bundeli, Awadhi, and Bhojpuri.",
    images: [
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Mafias Top Regional Songs Leaderboard",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Regional Songs & Folk Chartbusters — Media Mafias",
    description: "Top 10 folk recordings of Central India on Spotify, YouTube, and The Future Radio.",
    images: ["https://www.mediamafias.com/og-image.png"],
  }
};

export default function TopSongsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
