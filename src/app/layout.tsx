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
  title: "Media Mafias — AI Folk Music Label, Creator Academy & Audio Distribution Platform India",
  description: "Distribute regional folk & indie music to 150+ platforms, join the ₹499 Creator Academy, or license PPL/IPRS-exempt In-Store AI Radio & Content API in India.",
  keywords: [
    "Media Mafias", "Bagheli Lokgeet", "बघेली लोकगीत", "Awadhi Vivah Geet", "अवधी विवाह गीत",
    "Bundeli Folk Pop", "बुंदेली लोकगीत", "Bhojpuri Sohar Kajri", "सोहर कजरी देवी जस",
    "PPL IPRS exempt background music India", "In-Store AI Radio", "OTT Sync Licensing India",
    "Urban Mandap Wedding BGM", "AI Music Creator Academy India", "The Future Radio", "ScalerX Lab",
    "Vernacular Content API India", "Indie Music Distribution India"
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
    title: "Media Mafias — AI Folk Music Label, Creator Academy & Audio Distribution Platform India",
    description: "Distribute regional folk & indie music to 150+ platforms, join the ₹499 Creator Academy, or license PPL/IPRS-exempt In-Store AI Radio & Content API in India.",
    images: [
      {
        url: "https://www.mediamafias.com/logo-square.png",
        width: 1200,
        height: 1200,
        alt: "Media Mafias — Official Logo & Regional Folk Music Label",
      },
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Mafias — Central India Regional Folk Music Record Label",
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
    title: "Media Mafias — AI Folk Music Label, Creator Academy & Audio Distribution Platform India",
    description: "Distribute regional folk & indie music to 150+ platforms, join the ₹499 Creator Academy, or license PPL/IPRS-exempt In-Store AI Radio & Content API in India.",
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
        "@type": ["Organization", "MusicGroup"],
        "@id": "https://www.mediamafias.com/#organization",
        "name": "Media Mafias",
        "legalName": "Media Mafias (A ScalerX Lab Platform - UDYAM-MP-38-0052942)",
        "disambiguatingDescription": "Media Mafias (mediamafias.com) is an Indian AI-powered regional folk music record label, decentralized audio distribution platform, creator academy, and B2B in-store radio provider operated by ScalerX Lab. It is an independent music and audio technology platform and is NOT affiliated with the Varanasi digital marketing agency Media Mafia (mediamafia.in) or mediamafia.co.za.",
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
        "description": "Media Mafias is an Indian AI-powered regional folk music label, decentralized creator academy, and direct B2B audio licensing platform incubated by ScalerX Lab (UDYAM-MP-38-0052942). Specializing in human-verified Bagheli, Awadhi, Bundeli, and Bhojpuri music.",
        "genre": [
          "Indian Folk Music",
          "Bagheli Folk",
          "Awadhi Folk",
          "Bundeli Folk Pop",
          "Bhojpuri Folk",
          "Sufi Devotional",
          "Indian Wedding Instrumental"
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
        "description": "India's first 24/7 autonomous AI-powered vernacular radio network and PPL/IPRS-exempt B2B in-store audio platform broadcasting across the Indo-Gangetic belt."
      },
      {
        "@type": "Course",
        "@id": "https://www.mediamafias.com/academy#course",
        "name": "Media Mafias Creator Academy & Audio Syndicate",
        "description": "Learn AI beat production, dynamic LUFS mastering, and vernacular audio scaling with zero-cost studio production and global distribution to 150+ DSPs.",
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
        "name": "Media Mafias — AI Folk Music Label, Creator Academy & Audio Distribution Platform India",
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
            "name": "What is Media Mafias?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Media Mafias is India's premier AI-powered regional folk music label, decentralized audio distribution platform, and creator academy incubated by ScalerX Lab. We preserve authentic Bagheli, Awadhi, Bundeli, and Bhojpuri oral traditions in broadcast-grade audio."
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
              "text": "Media Mafias offers pre-cleared, one-stop sync licensing for authentic Bagheli, Awadhi, Bundeli, and Bhojpuri folk music, including Sohar, Kajri, Devi Jas, and beatless Urban Mandap wedding instrumentals. Because Media Mafias controls 100% of master and publishing rights, OTT music supervisors and wedding planners receive instant clearance."
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
