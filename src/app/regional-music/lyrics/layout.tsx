import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regional Folk Songs Lyrics Vault — Bagheli, Bundeli & Awadhi Shadi Geet, Parchhan, Gari, Sohar, Kajri | Media Mafias",
  description: "Authentic lyrics archive for Central Indian folk songs and traditional desi wedding rites: Parchhan Geet, Duarchar, Banna Banni, Jeonaar Gari, Gailhai, Anjuri, Sohar Dadra, Kajri, Phaag, and Devi Jas lyrics in Devanagari Hindi & English transliteration.",
  keywords: [
    "shadi ke geet lyrics",
    "bagheli geet lyrics",
    "parchhan geet lyrics bagheli",
    "vivah geet lyrics hindi",
    "banna banni geet lyrics",
    "duarchar geet lyrics",
    "samdhi gari geet lyrics",
    "jeonaar geet lyrics",
    "gailhai geet lyrics rewa",
    "anjuri geet lyrics",
    "sohar dadra lyrics",
    "kajri geet lyrics awadhi",
    "bundeli rai geet lyrics",
    "devi jas lyrics maihar",
    "aalha geet lyrics",
    "biraha geet lyrics",
    "desi wedding songs lyrics",
    "rewa satna lokgeet bol",
    "Media Mafias lyrics vault"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/regional-music/lyrics",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com/regional-music/lyrics",
    siteName: "Media Mafias",
    title: "Regional Folk Songs & Desi Wedding Rites Lyrics Vault — Media Mafias",
    description: "Read, copy, and stream authentic Bagheli, Bundeli, Awadhi, and Purvanchal wedding & seasonal folk song lyrics with cultural ritual guides.",
    images: [
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Regional Folk Songs Lyrics Vault — Media Mafias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regional Folk Songs & Desi Wedding Rites Lyrics Vault — Media Mafias",
    description: "Complete lyrics repository for Parchhan, Banna Banni, Gari, Sohar, and Kajri with 20s audio previews.",
    images: ["https://www.mediamafias.com/og-image.png"],
  },
};

const lyricsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.mediamafias.com/regional-music/lyrics#webpage",
      "url": "https://www.mediamafias.com/regional-music/lyrics",
      "name": "Central India Regional Folk Songs & Desi Wedding Lyrics Vault",
      "description": "Authentic lyrics archive of traditional Bagheli, Bundeli, Awadhi, and Bhojpuri wedding rituals, seasonal ballads, and devotional folk.",
      "inLanguage": ["hi", "en"],
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.mediamafias.com/#website",
        "name": "Media Mafias",
        "url": "https://www.mediamafias.com"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mediamafias.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Regional Music",
            "item": "https://www.mediamafias.com/regional-music"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Lyrics Vault (बोल संग्रह)",
            "item": "https://www.mediamafias.com/regional-music/lyrics"
          }
        ]
      }
    },
    {
      "@type": "MusicComposition",
      "name": "Parchhan Geet (परछन गीत)",
      "composer": {
        "@type": "Organization",
        "name": "Media Mafias Traditional Folk Archive"
      },
      "inLanguage": "hi",
      "genre": "Traditional Hindu Wedding Folk",
      "text": "आए हैं दुलहा द्वारे, आरती उतारो री माई। कंचन थार कपूर की बाती, मोतिन चौक पुराओ री माई।"
    },
    {
      "@type": "MusicComposition",
      "name": "Jeonaar Samdhi Gari (जेवनार समधी गारी)",
      "composer": {
        "@type": "Organization",
        "name": "Media Mafias Traditional Folk Archive"
      },
      "inLanguage": "hi",
      "genre": "Bagheli & Awadhi Wedding Satire Folk",
      "text": "समधी के पेटवा में कौआ बोले, जेवना मगन भये समधी। काहे की भाजी काहे का रायता, मीठी गारी देहिं सखी।"
    }
  ]
};

export default function RegionalLyricsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lyricsSchema) }}
      />
      {children}
    </>
  );
}
