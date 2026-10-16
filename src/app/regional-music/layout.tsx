import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bagheli, Bundeli, Awadhi & Purvanchal Lokgeet Archive — Vivah, Sohar, Rai & Desi Wedding Songs | Media Mafias",
  description: "Ultimate digital archive & audio stream for Central India folk music: Bagheli Lokgeet, Bundeli Rai, Awadhi Vivah Geet, Parchhan, Banna Banni, Duarchar, Gari, Jeonaar, Gailhai, Kajri, Phaag, Devi Jas, and Aalha ballads from Rewa, Satna, Sidhi, Shahdol, Jhansi, Ayodhya, and Purvanchal.",
  keywords: [
    "bagheli folk songs",
    "new bagheli songs",
    "rewa satna sidhi shahdol ke gaane",
    "madhya pradesh ka folk music",
    "UP ka folk music",
    "purvanchal ke lokgeet",
    "bundeli rai",
    "Bagheli dadra",
    "ram charit manas",
    "traditional wedding songs",
    "desi wedding songs",
    "shadi ke geet",
    "parchhan geet",
    "vivaah geet",
    "banna banni geet",
    "duarchar geet",
    "chadhao geet",
    "suhaag geet",
    "anjuri geet",
    "gailhai geet",
    "jeonaar geet",
    "gari geet",
    "nachanhai geet",
    "kajri geet",
    "hinduli geet",
    "phaag geet",
    "devi jas geet",
    "Aalha folk",
    "Biraha geet",
    "videsiya",
    "baghelkhand lokgeet",
    "bundelkhand lokgeet",
    "awadhi vivah geet",
    "bhojpuri sohar kajri",
    "Media Mafias",
    "ScalerX Lab"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/regional-music",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mediamafias.com/regional-music",
    siteName: "Media Mafias",
    title: "Bagheli, Bundeli, Awadhi & Purvanchal Lokgeet Archive — Media Mafias",
    description: "Authentic Central India folk music & desi wedding rituals songs: Parchhan, Duarchar, Banna Banni, Gari, Jeonaar, Gailhai, Bundeli Rai, Bagheli Dadra, Kajri, Phaag, and Devi Jas.",
    images: [
      {
        url: "https://www.mediamafias.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Central India Regional Folk Music Archive — Media Mafias",
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
    title: "Bagheli, Bundeli, Awadhi & Purvanchal Lokgeet Archive — Media Mafias",
    description: "Explore authentic Central India folk music & desi wedding songs from Rewa, Satna, Sidhi, Shahdol, Jhansi, Ayodhya, and Purvanchal.",
    images: ["https://www.mediamafias.com/og-image.png"],
  }
};

export default function RegionalMusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.mediamafias.com/regional-music#webpage",
        "url": "https://www.mediamafias.com/regional-music",
        "name": "Bagheli, Bundeli, Awadhi & Purvanchal Lokgeet Archive — Vivah, Sohar, Rai & Desi Wedding Songs",
        "description": "Comprehensive regional folk archive and streaming destination for Bagheli, Bundeli, Awadhi, and Bhojpuri folk traditions, wedding rituals (Parchhan, Duarchar, Banna Banni, Gari, Gailhai), seasonal Kajri and Phaag, and heroic Aalha ballads.",
        "inLanguage": ["hi", "bgc", "awa", "bho", "bne", "en"],
        "isPartOf": {
          "@id": "https://www.mediamafias.com/#webpage"
        },
        "about": [
          { "@type": "Thing", "name": "Bagheli Folk Music" },
          { "@type": "Thing", "name": "Bundeli Folk Music" },
          { "@type": "Thing", "name": "Awadhi Folk Music" },
          { "@type": "Thing", "name": "Bhojpuri Folk Music" },
          { "@type": "Thing", "name": "Traditional Indian Wedding Songs" },
          { "@type": "Thing", "name": "Desi Vivah Sanskar Geet" }
        ],
        "spatialCoverage": [
          { "@type": "Place", "name": "Rewa, Madhya Pradesh" },
          { "@type": "Place", "name": "Satna, Madhya Pradesh" },
          { "@type": "Place", "name": "Sidhi, Madhya Pradesh" },
          { "@type": "Place", "name": "Shahdol, Madhya Pradesh" },
          { "@type": "Place", "name": "Maihar, Madhya Pradesh" },
          { "@type": "Place", "name": "Jhansi, Uttar Pradesh" },
          { "@type": "Place", "name": "Sagar, Madhya Pradesh" },
          { "@type": "Place", "name": "Ayodhya, Uttar Pradesh" },
          { "@type": "Place", "name": "Varanasi, Uttar Pradesh" },
          { "@type": "Place", "name": "Purvanchal, Uttar Pradesh & Bihar" }
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#folk-voice-summary", ".voice-answer", "#ritual-guide-summary"]
        }
      },
      {
        "@type": "MusicPlaylist",
        "@id": "https://www.mediamafias.com/regional-music#playlist",
        "name": "Central India Master Regional Folk Playlist",
        "numTracks": 10,
        "genre": [
          "Bagheli Lokgeet",
          "Bundeli Rai",
          "Awadhi Vivah Geet",
          "Purbi Bhojpuri Viraha",
          "Sohar Dadra",
          "Monsoon Kajri"
        ],
        "provider": {
          "@type": "Organization",
          "name": "Media Mafias",
          "url": "https://www.mediamafias.com/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.mediamafias.com/regional-music#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the primary traditional wedding songs (विवाह संस्कार के लोकगीत) in Baghelkhand, Bundelkhand and Awadh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional wedding songs in Central India follow the sacred chronology of the marriage rites: 1. Pre-wedding: Tilak, Haldi, Banna-Banni, and Chadhao geet. 2. Arrival & Welcome: Duarchar (Dwar Puja) and Parchhan (auspicious Aarti welcoming the groom at the mandap). 3. Nuptials: Bhanwar (Pheras), Kanyadaan, and Suhaag geet. 4. Feast: Jeonaar and playful Gari (satirical roasts sung by village women while the barat dines). 5. Farewell: Anjuri and Gailhai (emotional bidaai songs as the bride departs). Media Mafias records and preserves these authentic ritual compositions with native folk mandalis."
            }
          },
          {
            "@type": "Question",
            "name": "Parchhan geet kab aur kyun gaya jata hai? (When and why is Parchhan sung?)",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Parchhan geet (परछन गीत) is sung during traditional Hindu marriages in Baghelkhand, Awadh, and Purvanchal when the groom reaches the entrance of the wedding pavilion (mandap). The bride's mother and elder women perform the ritual 'Parchhavan' (waving brass thalis with oil lamps and sacred grains) to ward off negative energies and bless the bridegroom before the sacred vows."
            }
          },
          {
            "@type": "Question",
            "name": "What are Jeonaar and Gari geet in traditional desi weddings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Jeonaar geet (जेवनार) and Gari geet (गारी गीत) are traditional celebratory folk songs sung when the groom and his wedding procession (baratis and samdhis) sit together for the ceremonial feast. The bride's side women sing playful, humorous, and affectionate teasing songs (samdhi gari) accompanied by dholak and thali, creating lively joy without malice."
            }
          },
          {
            "@type": "Question",
            "name": "What are the prominent folk music genres of Rewa, Satna, Sidhi, and Shahdol (Baghelkhand)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Baghelkhand (spanning Rewa, Satna, Sidhi, Shahdol, Umaria, and Maihar) is celebrated for: 1. Bagheli Dadra & Sohar (festive childbirth and village life ballads). 2. Gailhai & Anjuri (deeply emotional bridal farewell poetry). 3. Phaag (spring and Holi folk compositions). 4. Devi Jas (sacred hymns sung for Maihar Sharada Devi and Vindhyavasini). 5. Pastoral harvest chants. Notable masters of the region include Susheel Kumar Dwivedi, Poonam Tiwari, Pt. Rajkumar Shastri, and pioneer Bagheli poet Shri Nivas Shukla 'Saras'."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Bundeli Rai and Bagheli Dadra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bundeli Rai is the quintessential folk dance-song tradition of Bundelkhand (Jhansi, Sagar, Lalitpur, Banda), characterized by rapid Dholak, Nagariya, and Timki rhythms accompanied by poetic couplets (Phag and Khayal) praising romance and valor. Bagheli Dadra, native to Rewa and Satna, focuses more on melodic syncopation, community storytelling, and conversational vocal harmonies between lead singers and mandali chorus."
            }
          },
          {
            "@type": "Question",
            "name": "What are Kajri, Hinduli, and Phaag songs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kajri and Hinduli are monsoon folk genres deeply rooted in Awadh, Mirzapur, and Varanasi, sung during the Sawan-Bhadon rainy months when swings (jhula) are hung from trees to express longing and celebration. Phaag (Faag) is the celebratory spring folk poetry of Holi, immortalized by folk poets like Isuri in Bundelkhand and sung with vibrant Manjira and Dholak."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I stream authentic, studio-mastered Bagheli, Bundeli, Awadhi, and Purvanchal songs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can stream studio-grade masters of Central India folk music on Media Mafias (mediamafias.com), featuring 20-second instant previews and direct routing to full master discographies on Spotify (Media Mafias artist profile: 1mwA0Fbjp1AnnEEfj2Sroy) and the official YouTube Official Artist Channel (@MediaMafias)."
            }
          }
        ]
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
