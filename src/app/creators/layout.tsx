import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Regional Creators & Folk Legends — Susheel Dwivedi, Poonam Tiwari, Pt. Rajkumar Shastri | Media Mafias",
  description: "Meet Media Mafias' official performing artists from Rewa, Satna, Varanasi, and Ayodhya, alongside historic folk pioneers like Bhikhari Thakur, Sharda Sinha, Bholanath Gahmari, and Isuri.",
  keywords: [
    "Susheel Kumar Dwivedi",
    "Poonam Tiwari",
    "Pt. Rajkumar Shastri",
    "Renu Tripathi",
    "DJ Raja",
    "Preeti Tiwari",
    "Pt. Chandramauli Shukla",
    "Prameesh Mishra",
    "Bhikhari Thakur",
    "Sharda Sinha",
    "Bholanath Gahmari",
    "Shri Nivas Shukla Saras",
    "Isuri",
    "Jagnayak",
    "Goswami Tulsidas",
    "Bagheli folk singers",
    "Rewa folk artists",
    "Satna folk singers",
    "Bundeli Rai singers",
    "Awadhi folk vocalists",
    "Media Mafias Creators"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/creators",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com/creators",
    siteName: "Media Mafias",
    title: "Top Regional Creators & Folk Legends — Media Mafias",
    description: "Official artist roster and cultural heritage pioneers of Baghelkhand, Bundelkhand, Awadh, and Purvanchal.",
    images: [
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Mafias Artists and Heritage Legends",
      },
      {
        url: "https://www.mediamafias.com/logo-square.png",
        width: 1200,
        height: 1200,
        alt: "Media Mafias Official Emblem",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Regional Creators & Folk Legends — Media Mafias",
    description: "Meet our real performing artists and the timeless literary pioneers of Central Indian regional folk.",
    images: ["https://www.mediamafias.com/og-image.png"],
  }
};

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.mediamafias.com/creators#webpage",
        "url": "https://www.mediamafias.com/creators",
        "name": "Top Regional Creators & Folk Legends — Media Mafias",
        "description": "Directory of authentic regional folk music creators, vocalists, and sound architects recording for Media Mafias, alongside the immortal literary guardians of the Indo-Gangetic belt.",
        "inLanguage": ["hi", "en"],
        "isPartOf": {
          "@id": "https://www.mediamafias.com/#webpage"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "Person",
              "position": 1,
              "name": "Susheel Kumar Dwivedi",
              "jobTitle": "Senior Bagheli Folk Vocalist",
              "birthPlace": "Rewa, Madhya Pradesh",
              "knowsAbout": "Bagheli Lokgeet, Rewa Dadra"
            },
            {
              "@type": "Person",
              "position": 2,
              "name": "Poonam Tiwari",
              "jobTitle": "Vernacular Folk Songstress",
              "birthPlace": "Rewa, Madhya Pradesh",
              "knowsAbout": "Bagheli Sohar, Vivah Geet"
            },
            {
              "@type": "Person",
              "position": 3,
              "name": "Pt. Rajkumar Shastri",
              "jobTitle": "Classical Folk & Sacred Chanting Master",
              "birthPlace": "Varanasi, Uttar Pradesh",
              "knowsAbout": "Sanskrit Stotram, Classical Folk"
            },
            {
              "@type": "Person",
              "position": 4,
              "name": "Renu Tripathi",
              "jobTitle": "Awadhi Folk & Kajri Specialist",
              "birthPlace": "Mirzapur, Uttar Pradesh",
              "knowsAbout": "Monsoon Kajri, Awadhi Folk"
            },
            {
              "@type": "Person",
              "position": 5,
              "name": "DJ Raja",
              "jobTitle": "Vernacular Beat Producer",
              "knowsAbout": "Folk-Pop, Dholak 808 Club Beats"
            },
            {
              "@type": "Person",
              "position": 6,
              "name": "Preeti Tiwari",
              "jobTitle": "Vernacular Folk Vocalist",
              "knowsAbout": "Bundeli & Bagheli Pastoral Songs"
            },
            {
              "@type": "Person",
              "position": 7,
              "name": "Pt. Chandramauli Shukla",
              "jobTitle": "Temple Stuti & Sacred Chant Master",
              "birthPlace": "Kashi, Uttar Pradesh",
              "knowsAbout": "Vedic Chants, Jagannath Stotram"
            },
            {
              "@type": "Person",
              "position": 8,
              "name": "Prameesh Mishra",
              "jobTitle": "Lead Composer & Folk Sound Architect",
              "birthPlace": "Rewa, Madhya Pradesh",
              "knowsAbout": "Audio Engineering, Regional Music Production, ScalerX Lab"
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
