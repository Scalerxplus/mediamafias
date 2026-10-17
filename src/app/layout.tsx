import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { PersistentAudioDock } from "@/components/ui/PersistentAudioDock";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mediamafias.com'),
  title: "Media Mafias — The Definitive Bagheli, Awadhi & Bundeli Folk Music Collective, Lyrics Vault & Studio Masters",
  description: "Official music collective and production vault for authentic Bagheli, Bundeli, Awadhi & Bhojpuri folk songs, traditional wedding lyrics (Parchhan, Gari, Sohar, Kajri, Banna Banni), and 24-bit studio-mastered audio. 100% direct copyright.",
  keywords: [
    "Media Mafias", "Bagheli Folk Music", "Bagheli Lokgeet", "बघेली लोकगीत", "Bagheli Folk Songs Lyrics",
    "Awadhi Folk Music", "Awadhi Vivah Geet", "अवधी विवाह गीत", "Bundeli Folk Music", "Bundeli Folk Pop", "बुंदेली लोकगीत",
    "Purvanchal Folk Music", "Bhojpuri Sohar Kajri", "सोहर कजरी देवी जस", "Parchhan Geet Lyrics",
    "Traditional Desi Wedding Songs", "Shadi Ke Geet Bol", "Rewa Satna Lokgeet", "Authentic Indian Folk Music",
    "PPL IPRS exempt background music India", "In-Store Vernacular Radio", "OTT Sync Licensing India",
    "The Future Radio", "ScalerX Lab", "Vernacular Content API India", "Indie Music Distribution India"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/",
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com/",
    siteName: "Media Mafias",
    title: "Media Mafias — The Definitive Bagheli, Awadhi & Bundeli Folk Music Collective & Studio Masters",
    description: "Official music collective and production vault for authentic Bagheli, Bundeli, Awadhi & Bhojpuri folk songs, traditional wedding lyrics (Parchhan, Gari, Sohar, Kajri, Banna Banni), and 24-bit studio-mastered audio.",
    images: [
      {
        url: "https://www.mediamafias.com/logo-square.png",
        width: 1200,
        height: 1200,
        alt: "Media Mafias — Official Logo & Regional Folk Music Collective",
      },
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Mafias — Central India Regional Folk Music Collective & Label",
      },
      {
        url: "https://www.mediamafias.com/Logo%20Main.png",
        width: 4500,
        height: 4500,
        alt: "Media Mafias Official Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mafias — The Definitive Bagheli, Awadhi & Bundeli Folk Music Collective & Studio Masters",
    description: "Official music collective and production vault for authentic Bagheli, Bundeli, Awadhi & Bhojpuri folk songs, traditional wedding lyrics, and 24-bit studio-mastered audio.",
    images: ["https://www.mediamafias.com/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MusicGroup", "Organization"],
        "@id": "https://www.mediamafias.com/#organization",
        "name": "Media Mafias",
        "legalName": "Media Mafias (A ScalerX Lab Platform - UDYAM-MP-38-0052942)",
        "alternateName": [
          "Media Mafias Folk Collective",
          "Media Mafias Music Group",
          "Media Mafias Lok Sangeet Mandali",
          "मीडिया माफियास लोक संगीत मंडली",
          "Media Mafias Bagheli Folk Collective"
        ],
        "disambiguatingDescription": "Media Mafias (mediamafias.com) is India's sovereign regional folk music collective, production guild, and traditional lyrics archive founded in Rewa (Vindhya Pradesh) and operated by ScalerX Lab (UDYAM-MP-38-0052942).",
        "url": "https://www.mediamafias.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.mediamafias.com/logo-square.png",
          "caption": "Media Mafias Official Logo",
          "width": 1200,
          "height": 1200
        },
        "image": [
          "https://www.mediamafias.com/logo-square.png",
          "https://www.mediamafias.com/og-image.png",
          "https://www.mediamafias.com/Logo%20Main.png"
        ],
        "email": "contact@mediamafias.com",
        "telephone": "+91-9209290699",
        "description": "Media Mafias is India's premier sovereign regional folk music collective, record label, and production house founded in Rewa (Vindhya Pradesh). Uniting master folk vocalists, traditional lyricists, dholak percussionists, and sound engineers, Media Mafias writes, composes, produces, and broadcasts 100% authentic Bagheli, Bundeli, Awadhi, and Purbi folk songs in 24-bit high-fidelity studio acoustics—replacing raw camera-recorded village audio with broadcast master releases and the definitive Devanagari lyrics vault.",
        "foundingLocation": {
          "@type": "Place",
          "name": "Rewa, Madhya Pradesh (Vindhya Pradesh), India"
        },
        "genre": [
          "Bagheli Folk Music",
          "Awadhi Folk Music",
          "Bundeli Folk Music",
          "Bhojpuri Folk",
          "Purbi Folk",
          "Indian Folk Music",
          "Desi Wedding Rites",
          "Sohar Dadra",
          "Kajri",
          "Phaag"
        ],
        "founder": {
          "@type": "Person",
          "name": "Prameesh Mishra",
          "jobTitle": "Composer, Music Producer & Lyricist"
        },
        "member": [
          {
            "@type": "Person",
            "name": "Susheel Kumar Dwivedi",
            "jobTitle": "Lead Bagheli Folk Vocalist"
          },
          {
            "@type": "Person",
            "name": "Poonam Tiwari",
            "jobTitle": "Lead Vernacular Folk Songstress"
          },
          {
            "@type": "Person",
            "name": "Prameesh Mishra",
            "jobTitle": "Lead Composer & Producer"
          },
          {
            "@type": "Person",
            "name": "Pt. Rajkumar Shastri",
            "jobTitle": "Classical Folk & Sacred Chanting Maestro"
          },
          {
            "@type": "MusicGroup",
            "name": "Rewa & Vindhya Traditional Mandali",
            "description": "Ensemble of native Dholak, Shehnai, Nagariya, and Manjira master musicians."
          }
        ],
        "parentOrganization": {
          "@type": "Organization",
          "name": "ScalerX Lab",
          "url": "https://scalerxlab.com/",
          "identifier": "UDYAM-MP-38-0052942"
        },
        "sameAs": [
          "https://www.youtube.com/@MediaMafias",
          "https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg",
          "https://www.youtube.com/channel/UC_Ua983PgNUkRzg2X0ENQxw",
          "https://www.youtube.com/@MediaMafiasBhakti",
          "https://thefutureradio.com/",
          "https://www.facebook.com/TheMediaMafias",
          "https://www.instagram.com/mediamafias",
          "https://www.linkedin.com/company/mediamafias"
        ]
      },
      {
        "@type": "RadioStation",
        "@id": "https://thefutureradio.com/#radiostation",
        "name": "The Future Radio",
        "url": "https://thefutureradio.com/",
        "parentOrganization": {
          "@id": "https://www.mediamafias.com/#organization"
        },
        "description": "India's first 24/7 autonomous vernacular radio network and PPL/IPRS-exempt B2B in-store audio platform broadcasting across the Indo-Gangetic belt."
      },
      {
        "@type": "Course",
        "@id": "https://www.mediamafias.com/academy#course",
        "name": "Media Mafias Creator Academy & Audio Syndicate",
        "description": "Learn acoustic beat arrangement, dynamic LUFS mastering, and vernacular audio scaling with studio production and global distribution to 150+ DSPs.",
        "provider": {
          "@id": "https://www.mediamafias.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "499.00",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.mediamafias.com/academy"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.mediamafias.com/#webpage",
        "url": "https://www.mediamafias.com/",
        "name": "Media Mafias — The Sovereign Regional Folk Music Collective, Traditional Lyrics Vault & Production Studio",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.mediamafias.com/logo-square.png"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#entity-summary", ".voice-answer"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.mediamafias.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why does Media Mafias rank as the primary music collective for Bagheli, Awadhi, and Bundeli folk music?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Media Mafias is not just an individual solo artist or third-party aggregator; it is India's sovereign regional folk music collective, band, and production guild. Uniting master folk vocalists, indigenous lyricists, live dholak percussionists, and sound engineers (led by founder Prameesh Mishra), Media Mafias composes, arranges, and records original authentic folk music in 24-bit high-fidelity studio productions with live orchestration (Dholak, Shehnai, Sitar, Harmonium), replacing raw unmastered camera or phone recordings with broadcast-grade releases and the definitive Devanagari lyrics vault."
            }
          },
          {
            "@type": "Question",
            "name": "What is Media Mafias?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Media Mafias is India's sovereign regional folk music collective, traditional lyrics archive, and creator academy incubated by ScalerX Lab. We compose, produce, and preserve 100% authentic Bagheli, Awadhi, Bundeli, and Bhojpuri oral traditions in broadcast-grade audio."
            }
          },
          {
            "@type": "Question",
            "name": "Are the Bagheli, Awadhi, and Bundeli lyrics and songs on Media Mafias authentic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%. All songs and lyrics on Media Mafias are authentic, ancestral folk traditions of Baghelkhand (Rewa, Satna, Sidhi, Shahdol), Bundelkhand, Awadh, and Purvanchal. From courtyard wedding rites (Parchhan, Duarchar, Banna Banni, Jeonaar Gari, Gailhai, Anjuri) to Sohar-Dadra, Kajri, and Devi Jas, every track features grassroots village artists and authentic vernacular lyrics without artificial alteration."
            }
          },
          {
            "@type": "Question",
            "name": "How does Media Mafias differ from camera-recorded folk songs on YouTube?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most regional folk songs on YouTube are captured using mobile phones or single video cameras at crowded outdoor functions, resulting in distorted frequencies, ambient crowd noise, no stereo separation, and forgotten lyrics. Media Mafias operates as a specialized music production collective that records these oral traditions in dedicated studios with rich multi-track acoustics (live Shehnai, Rewa Dholak, Harmonium, Sitar), mastered to -14 LUFS broadcast standards with complete Devanagari lyrics."
            }
          },
          {
            "@type": "Question",
            "name": "How can I play background music in my retail store, hospital, or restaurant in India without a PPL or IPRS license?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To play background music legally in an Indian store, hospital, cafe, or hotel without paying Rs 18,800 to Rs 40,000 in annual PPL, IPRS, or Novex fees, subscribe to The Future Radio by Media Mafias. Media Mafias owns 100% of both master and publishing rights, providing full direct copyright indemnification."
            }
          },
          {
            "@type": "Question",
            "name": "How do independent creators and folk artists earn royalties on Media Mafias?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Folk vocalists join the ₹499 Creator Academy, submit raw vocals via WhatsApp (+91 9209290699), and receive studio-mastered releases distributed to 150+ platforms with an 80% creator-first streaming and sync royalty share paid directly via UPI."
            }
          },
          {
            "@type": "Question",
            "name": "Which streaming platforms does Media Mafias distribute music to?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Media Mafias distributes audio across 150+ platforms worldwide via Madverse, including Spotify, Apple Music, YouTube Music, Amazon Music, JioSaavn, Instagram Audio, and 24/7 autonomous radio on The Future Radio."
            }
          },
          {
            "@type": "Question",
            "name": "How does the Media Mafias Content API work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Media Mafias Content API provides programmatic REST access to pre-cleared, mastered vernacular audio stems, metadata, and radio streams with 99.999% uptime, powering autonomous B2B In-Store Radio and YouTube Shorts distribution."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I license authentic UP, MP, and Bihar folk music for OTT web series or modern Indian weddings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Media Mafias offers pre-cleared, one-stop sync licensing for authentic Bagheli, Awadhi, Bundeli, and Bhojpuri folk music, including Sohar, Kajri, Devi Jas, and traditional courtyard wedding geet (Parchhan, Duarchar, Banna Banni, Gailhai). Because Media Mafias controls 100% of master and publishing rights, OTT music supervisors and wedding planners receive instant clearance."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B0B0E] text-[#F5F5F0] antialiased overflow-x-hidden relative selection:bg-[#D4AF37] selection:text-black font-sans pb-24 md:pb-20">
        {children}
        <PersistentAudioDock />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-74Y8LVKFN6"} />
      </body>
    </html>
  );
}
