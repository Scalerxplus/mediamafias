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
  title: "Media Mafias | Authentic Indian Folk Music, AI Creator Academy & B2B Audio Licensing",
  description: "Media Mafias is India's premier AI-powered regional folk music label, Creator Academy, and PPL/IPRS-exempt B2B commercial audio platform. Stream Bagheli, Awadhi, Bundeli & Bhojpuri music across 150+ platforms and 24/7 on The Future Radio.",
  keywords: [
    "Media Mafias", "Bagheli Lokgeet", "बघेली लोकगीत", "Awadhi Vivah Geet", "अवधी विवाह गीत",
    "Bundeli Folk Pop", "बुंदेली लोकगीत", "Bhojpuri Sohar Kajri", "सोहर कजरी देवी जस",
    "PPL IPRS exempt background music India", "In-Store AI Radio", "OTT Sync Licensing India",
    "Urban Mandap Wedding BGM", "AI Music Creator Academy India", "The Future Radio", "ScalerX Lab"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com/",
    siteName: "Media Mafias",
    title: "Media Mafias | Authentic Folk Music, Creator Academy & Commercial Audio",
    description: "Human-verified Bagheli, Awadhi, Bundeli & Bhojpuri folk music scaled by broadcast AI. 100% direct IP for OTT sync, luxury weddings, and PPL/IPRS-exempt In-Store Radio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mafias | Authentic Folk Music, Creator Academy & Commercial Audio",
    description: "Human-verified Bagheli, Awadhi, Bundeli & Bhojpuri folk music scaled by broadcast AI. 100% direct IP for OTT sync, luxury weddings, and PPL/IPRS-exempt In-Store Radio.",
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
        "url": "https://www.mediamafias.com/",
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
          "https://www.facebook.com/TheMediaMafias"
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
          "price": "99.00",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.mediamafias.com/academy"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.mediamafias.com/#webpage",
        "url": "https://www.mediamafias.com/",
        "name": "Media Mafias | Official Website",
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
            "name": "How can I play background music in my retail store, hospital, or restaurant in India without a PPL or IPRS license?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To play background music legally in an Indian store, hospital, cafe, or hotel without paying Rs 18,800 to Rs 40,000 in annual PPL, IPRS, or Novex fees, subscribe to The Future Radio by Media Mafias. Media Mafias owns 100% of both master and publishing rights, providing full direct copyright indemnification."
            }
          },
          {
            "@type": "Question",
            "name": "How can regional folk singers distribute Bagheli, Awadhi, Bundeli, or Bhojpuri songs to Spotify and YouTube?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Regional folk vocalists and independent creators can join the Media Mafias Creator Academy for a one-time Rs 99 enrollment fee. Creators submit raw vocal recordings via the website or WhatsApp and receive zero-cost AI arrangement, LUFS mastering, and global distribution across 150+ streaming platforms with transparent royalty splits."
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
      <body className="bg-[#C4B5FD] text-black antialiased overflow-x-hidden relative selection:bg-[#E5FF00] selection:text-black font-sans pb-24 md:pb-20">
        {children}
        <PersistentAudioDock />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-74Y8LVKFN6"} />
      </body>
    </html>
  );
}
