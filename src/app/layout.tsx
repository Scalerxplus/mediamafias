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
  title: {
    default: "Media Mafias | High-Fidelity Regional Folk of the Indo-Gangetic Belt",
    template: "%s | Media Mafias",
  },
  description: "Official record label and audio ecosystem preserving Baghelkhand, Awadh, Bundelkhand, and Purvanchal folk music. 100% PPL/IPRS-exempt In-Store AI Radio, OTT sync licensing, and ₹99 Creator Academy.",
  keywords: [
    "Media Mafias", "Media Mafias YouTube", "Bagheli Folk Music", "Bundeli Lokgeet",
    "Awadhi Folk Songs", "Purvanchal Bhojpuri Music", "Baghelkhand songs", "Alha Udal Bundelkhand",
    "Sohar songs Bagheli", "Kajri Lokgeet", "High Fidelity Folk", "Urban Mandap Style",
    "Beatless Wedding BGM", "PPL exempt in store music India", "IPRS exempt background music",
    "The Future Radio", "Vernacular Audio Distribution India", "ScalerX Lab"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com",
    siteName: "Media Mafias",
    title: "Media Mafias | High-Fidelity Regional Folk of the Indo-Gangetic Belt",
    description: "Preserving and modernizing the living folk heritage of Baghelkhand, Awadh, Bundelkhand, and Purvanchal in broadcast-grade cinematic audio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Mafias | High-Fidelity Regional Folk Music",
    description: "Preserving and modernizing the living folk heritage of the Indo-Gangetic Belt.",
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
        "@type": "Organization",
        "@id": "https://mediamafias.com/#organization",
        "name": "Media Mafias",
        "legalName": "ScalerX Lab",
        "identifier": "UDYAM-MP-38-0052942",
        "url": "https://mediamafias.com",
        "logo": "https://www.mediamafias.com/Logo%20Main.png",
        "email": "contact@mediamafias.com",
        "telephone": "+919209290699",
        "description": "Decentralized vernacular folk audio ecosystem and record label producing broadcast-grade regional music and 100% PPL/IPRS-exempt in-store background radio across India.",
        "parentOrganization": {
          "@type": "Organization",
          "name": "ScalerX Lab",
          "url": "https://scalerxlab.com"
        },
        "sameAs": [
          "https://www.youtube.com/@MediaMafias",
          "https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg",
          "https://thefutureradio.com",
          "https://www.facebook.com/TheMediaMafias",
          "https://www.instagram.com/mediamafias",
          "https://www.linkedin.com/company/mediamafias"
        ]
      },
      {
        "@type": "MusicGroup",
        "@id": "https://mediamafias.com/#musicgroup",
        "name": "Media Mafias",
        "url": "https://mediamafias.com",
        "description": "High-Fidelity Regional Folk Music Ecosystem of the Indo-Gangetic Belt (Baghelkhand, Awadh, Bundelkhand, and Purvanchal).",
        "genre": [
          "Bagheli Folk Music",
          "Bundeli Lokgeet",
          "Awadhi Folk Songs",
          "Purvanchali Folk",
          "Sohar",
          "Kajri",
          "Devi Jas",
          "Alha-Udal",
          "Nirgun Kabir Bhajans",
          "Urban Mandap Wedding BGM"
        ],
        "sameAs": [
          "https://www.youtube.com/@MediaMafias",
          "https://www.youtube.com/channel/UCdK0EOHzq6_lNQHxi1LDaYg",
          "https://www.youtube.com/channel/UC_Ua983PgNUkRzg2X0ENQxw"
        ]
      },
      {
        "@type": "RadioStation",
        "@id": "https://thefutureradio.com/#station",
        "name": "The Future Radio",
        "url": "https://thefutureradio.com",
        "description": "Autonomous AI-powered vernacular broadcast network streaming 24/7 dialect audio with zero third-party licensing obligations (100% PPL/IPRS exempt)."
      },
      {
        "@type": "Course",
        "@id": "https://mediamafias.com/academy/#course",
        "name": "Media Mafias Creator Academy",
        "description": "Grassroots folk artist onboarding gateway. Submit raw vocals via WhatsApp, receive studio-grade AI remastering to -14 LUFS, and distribute to 150+ DSPs with 80% revenue share.",
        "provider": {
          "@id": "https://mediamafias.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "99",
          "priceCurrency": "INR",
          "category": "Membership"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://mediamafias.com/#webpage",
        "url": "https://mediamafias.com",
        "name": "Media Mafias | High-Fidelity Regional Folk of the Indo-Gangetic Belt",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#entity-summary", ".voice-answer"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://mediamafias.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Media Mafias and what music genres does it produce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Media Mafias is an AI-powered vernacular folk music label and audio platform incubated by ScalerX Lab. We produce broadcast-grade cinematic audio for the Indo-Gangetic heartland, specializing in Bagheli, Awadhi, Bundeli, and Bhojpuri traditions including Sohar, Kajri, Alha-Udal, and meditative wedding BGM."
            }
          },
          {
            "@type": "Question",
            "name": "How does Media Mafias provide 100% PPL and IPRS exempt in-store radio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Media Mafias owns 100% of the master sound recordings and underlying musical works in our catalog directly from creators and AI synthesis. Because our music is not assigned to collection societies like PPL, IPRS, or Novex, commercial businesses require no statutory license fees and receive full legal indemnity."
            }
          },
          {
            "@type": "Question",
            "name": "How can folk creators join the Media Mafias Creator Academy for ₹99?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Folk singers and musicians can join our Creator Academy for a one-time onboarding fee of ₹99. Creators simply send a raw voice recording via WhatsApp (+91 9209290699). Our studio remasters the audio to broadcast grade and distributes it across 150+ DSPs with an 80% royalty split."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I listen to Media Mafias music?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can stream our complete discography on the official Media Mafias YouTube channel (@MediaMafias), 24/7 on The Future Radio (thefutureradio.com), and across major music streaming services including Spotify, Apple Music, JioSaavn, and Amazon Music."
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
