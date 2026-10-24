export type DialectKey = "bagheli" | "bundeli" | "awadhi" | "purbi";

export type FolkGenreKey =
  | "sohar"
  | "dadra"
  | "banna-banni"
  | "duarchaar"
  | "parchhan"
  | "karahba"
  | "gailhai"
  | "sangeet-dance"
  | "phaag"
  | "kajri"
  | "hinduli"
  | "devi-jas"
  | "lamtera"
  | "ramcharit-manas"
  | "badhai"
  | "viraha";

export interface PlaylistItemTrack {
  id: string;
  title: string;
  hindiTitle: string;
  dialectKey: DialectKey;
  dialectLabel: string;
  genreKey: FolkGenreKey;
  genreLabel: string;
  duration: string;
  bpm: number;
  featuredArtists: string;
  description: string;
  culturalNote: string;
  youtubeUrl: string;
  youtubeVideoId?: string; // e.g. for direct iframe embedding
  spotifyUrl: string;
  jiosaavnUrl: string;
  lyricsVaultSlug?: string;
  coverBg: string;
}

export interface PlaylistCategory {
  slug: string;
  seoTitle: string;
  hindiTitle: string;
  badge: string;
  description: string;
  highVolumeKeywords: string[];
  bannerBg: string;
  accentColor: string;
  youtubePlaylistUrl: string;
  spotifyPlaylistUrl: string;
  jiosaavnPlaylistUrl: string;
  tracks: PlaylistItemTrack[];
}

export const SPOTIFY_OAC_BASE = "https://open.spotify.com/artist/1mwA0Fbjp1AnnEEfj2Sroy";
export const YOUTUBE_OAC_BASE = "https://www.youtube.com/@MediaMafias";
export const JIOSAAVN_SEARCH_BASE = "https://www.jiosaavn.com/search/";

export const PLAYLISTS_DATA: Record<string, PlaylistCategory> = {
  "desi-wedding-vivah-geet": {
    slug: "desi-wedding-vivah-geet",
    seoTitle: "Desi Wedding Songs & Vivaah Geet Archive",
    hindiTitle: "पारंपरिक शादी के गीत एवं संपूर्ण विवाह संस्कार",
    badge: "100% AUTHENTIC WEDDING RITES",
    description: "बघेलखंड, अवध और बुंदेलखंड के सदियों पुराने विवाह संस्कार के समस्त प्रामाणिक गीत: दुआचार, परछन, बन्ना-बन्नी, करहबा (पूरी बेलन), समधी गारी और विदाई (गैलहाई-अंजुरी)। बिना किसी शोर-शराबे की विशुद्ध 24-बिट स्टूडियो रिकॉर्डिंग्स।",
    highVolumeKeywords: [
      "shadi ke geet",
      "vivah geet",
      "banna banni geet",
      "parchhan geet",
      "duarchaar geet",
      "karahba geet",
      "bidaai geet",
      "desi wedding songs"
    ],
    bannerBg: "from-[#831843] via-[#500724] to-[#0B0B0E]",
    accentColor: "#F43F5E",
    youtubePlaylistUrl: "https://www.youtube.com/@MediaMafias/playlists",
    spotifyPlaylistUrl: SPOTIFY_OAC_BASE,
    jiosaavnPlaylistUrl: `${JIOSAAVN_SEARCH_BASE}Media%20Mafias%20Vivah%20Geet`,
    tracks: [
      {
        id: "tr-duarchaar",
        title: "Duarchaar Geet (Leen Dhanush Banna)",
        hindiTitle: "लीन धनुष बन्ना ठाढ़ो री - दुआचार गीत",
        dialectKey: "bagheli",
        dialectLabel: "बघेली व अवधी",
        genreKey: "duarchaar",
        genreLabel: "विवाह दुआचार",
        duration: "4:32",
        bpm: 92,
        featuredArtists: "Susheel Kumar Dwivedi & Rewa Mandali",
        description: "मर्यादा पुरुषोत्तम श्रीराम के स्वरूप में द्वार पर उपस्थित दूल्हे के स्वागत व कलगी-मौर शृंगार का मांगलिक दुआचार गीत।",
        culturalNote: "जब बारात कन्या के मुख्य द्वार पर पहुँचती है, तब सखियां व महिलाएं युगल जोड़ी की मंगल कामना में यह गीत गाती हैं।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Leen%20Dhanush%20Banna%20Media%20Mafias`,
        lyricsVaultSlug: "duarchaar-geet",
        coverBg: "from-[#991B1B] to-[#450A0A]"
      },
      {
        id: "tr-banna-banni",
        title: "Banna Banni (Ram Banra Ban Aayo Re)",
        hindiTitle: "मोरे दशरथ राज दुलार आज बनरा बन आयो रे",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (रीवा-सतना)",
        genreKey: "banna-banni",
        genreLabel: "बन्ना-बन्नी",
        duration: "3:48",
        bpm: 114,
        featuredArtists: "Poonam Tiwari & Native Chorus",
        description: "राजसी शहनाई, सजीव ढोलक और मंजीरे की तेज थाप पर जनकपुर में श्रीराम के दूल्हा बनकर आगमन का उल्लास गीत।",
        culturalNote: "सगाई, तिलक और हल्दी उत्सव के समय वर-वधु के रूप-सौंदर्य और आभूषणों पर गाए जाने वाला पारंपरिक मंगल गीत।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Ram%20Banra%20Ban%20Aayo%20Re%20Media%20Mafias`,
        lyricsVaultSlug: "banna-banni-geet",
        coverBg: "from-[#831843] to-[#500724]"
      },
      {
        id: "tr-karahba",
        title: "Karahba Chadhao & Puri Belnai",
        hindiTitle: "चढ़ि गा करहबा, बेलाय लगीं पूरिया - करहबा व पूरी बेलन गीत",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (विंध्य)",
        genreKey: "karahba",
        genreLabel: "करहबा व पूरी बेलन",
        duration: "4:05",
        bpm: 108,
        featuredArtists: "Rewa Mahila Mandali",
        description: "शादी की कढ़ाई चढ़ने और आंगन में बुआ-मौसियों द्वारा सामूहिक पूरी बेलने के समय गाए जाने वाला दुर्लभ हास्य-उल्लास गीत।",
        culturalNote: "विवाह भोज की तैयारी में जब प्रथम कढ़ाई चढ़ाई जाती है, तब अग्नि देव व कुलदेवी के आशीर्वाद हेतु गाया जाने वाला विधान।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Karahba%20Chadhao%20Media%20Mafias`,
        lyricsVaultSlug: "belnhai-karahba-geet-1",
        coverBg: "from-[#B45309] to-[#78350F]"
      },
      {
        id: "tr-parchhan",
        title: "Vivah Parchhan (Aarti & Nazar Utaaran)",
        hindiTitle: "परछन गीत: आरती घुमावैं सासु रानी - परछावन",
        dialectKey: "bagheli",
        dialectLabel: "बघेली व अवधी",
        genreKey: "parchhan",
        genreLabel: "परछन व परछावन",
        duration: "4:18",
        bpm: 88,
        featuredArtists: "Vindhya Traditional Mandali",
        description: "मंडप प्रवेश से पहले कांस्य थाली, दीपक, रोली और हल्दी से दूल्हे की नजर उतारने (परछावन) का वैदिक लोकगीत।",
        culturalNote: "सास व वधु पक्ष की वरिष्ठ महिलाओं द्वारा दूल्हे का स्वागत कर बुरी नजर से बचाने हेतु गाए जाने वाला संस्कार गीत।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Vivah%20Parchhan%20Media%20Mafias`,
        coverBg: "from-[#701A75] to-[#4A044E]"
      },
      {
        id: "tr-gailhai",
        title: "Anjuri & Gailhai Geet (Emotional Bidaai)",
        hindiTitle: "गैलहाई व अंजुरी: बेटी कै बिदाई - मार्मिक विदाई गीत",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (रीवा)",
        genreKey: "gailhai",
        genreLabel: "अंजुरी व विदाई",
        duration: "5:12",
        bpm: 80,
        featuredArtists: "Poonam Tiwari & Native Troupes",
        description: "बेटी द्वारा मायके की चौखट छोड़ते समय अक्षत पीछे उछालने और डोली उठने का सर्वाधिक मार्मिक विदाई गीत।",
        culturalNote: "कन्यादान के उपरांत बेटी की विदाई के समय गाई जाने वाली विरह व वात्सल्य रस की अमूल्य वाचिक धरोहर।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Gailhai%20Bidaai%20Geet%20Media%20Mafias`,
        lyricsVaultSlug: "gailhai-geet-1",
        coverBg: "from-[#1E3A8A] to-[#172554]"
      }
    ]
  },

  "mahila-sangeet-dance-geet": {
    slug: "mahila-sangeet-dance-geet",
    seoTitle: "Mahila Sangeet & Shadi Dance Folk Hits",
    hindiTitle: "महिला संगीत व देसी शादी डांस लोकगीत",
    badge: "HIGH-ENERGY SANGEET DANCE HITS",
    description: "शादी के महिला संगीत और संगीत सेरेमनी में डीजे व ढोलक पर डांस के लिए बनाए गए सुपरहीट नाचनहाई लोकगीत: महुआ उजरि गा, रसिया, सइयां ना आए, और गुलाबी चुनरिया। कोरियोग्राफी और रील्स के लिए सर्वश्रेष्ठ ट्रैक।",
    highVolumeKeywords: [
      "mahila sangeet dance songs",
      "ladies sangeet dance",
      "shadi dance songs desi",
      "nachanhai geet",
      "shaadi sangeet songs",
      "desi wedding dance track"
    ],
    bannerBg: "from-[#C026D3] via-[#701A75] to-[#0B0B0E]",
    accentColor: "#E879F9",
    youtubePlaylistUrl: "https://www.youtube.com/@MediaMafias/playlists",
    spotifyPlaylistUrl: SPOTIFY_OAC_BASE,
    jiosaavnPlaylistUrl: `${JIOSAAVN_SEARCH_BASE}Media%20Mafias%20Mahila%20Sangeet`,
    tracks: [
      {
        id: "tr-mahua-ujari",
        title: "Mahua Ujari Ga (Nachanhai Phagua)",
        hindiTitle: "जरै भिनसारे कै निंदिया हो मोर महुआ उजरि गा",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (रीवा-सीधी)",
        genreKey: "sangeet-dance",
        genreLabel: "नाचनहाई व महिला संगीत",
        duration: "3:55",
        bpm: 104,
        featuredArtists: "Prameesh Mishra & Folk Troupe",
        description: "सास-ननद के तीखे तानों पर बना हाई-वोल्टेज रॉकस्टार देसी लोकगीत। महिला संगीत में डांस के लिए नंबर 1 पसंद।",
        culturalNote: "महिला संगीत व होली फाग पर महिलाओं द्वारा हंसी-मजाक व सजीव व्यंग्य के साथ किया जाने वाला सामूहिक नृत्य।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Mahua%20Ujari%20Ga%20Media%20Mafias`,
        lyricsVaultSlug: "nachanhai-phaag-1",
        coverBg: "from-[#BE123C] to-[#4C0519]"
      },
      {
        id: "tr-rasiya",
        title: "Rasiya (Desi Wedding Dance Groove)",
        hindiTitle: "रसिया - देसी नाचनहाई विवाह डांस",
        dialectKey: "bundeli",
        dialectLabel: "बुंदेली व बघेली",
        genreKey: "sangeet-dance",
        genreLabel: "देसी डांस ग्रूव",
        duration: "3:42",
        bpm: 116,
        featuredArtists: "Vindhya Rock Folk Ensemble",
        description: "तेज ढोलक की थाप, मंजीरा और आधुनिक बास के साथ शादी के महिला संगीत में आग लगाने वाला सुपर-एनर्जेटिक डांस ट्रैक।",
        culturalNote: "सखियों और भाभियों द्वारा बारात व महिला संगीत पर ठुमके लगाने वाला प्रमुख पारंपरिक डांस नंबर।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Rasiya%20Media%20Mafias`,
        coverBg: "from-[#7C3AED] to-[#4C1D95]"
      },
      {
        id: "tr-sainya-na-aaye",
        title: "Sainya Na Aaye (Nakhrewali Dance)",
        hindiTitle: "सइयां ना आए - नखरेवाला श्रृंगार व डांस",
        dialectKey: "awadhi",
        dialectLabel: "अवधी व बघेली",
        genreKey: "sangeet-dance",
        genreLabel: "श्रृंगार संगीत डांस",
        duration: "4:01",
        bpm: 106,
        featuredArtists: "Poonam Tiwari",
        description: "दुल्हन के नखरे, सहेलियों की छेड़छाड़ और पिया के इंतजार पर आधारित मनमोहक डांस कोरियोग्राफी ट्रैक।",
        culturalNote: "महिला संगीत में सोलो अथवा डुएट डांस परफॉर्मेंस के लिए सर्वाधिक लोकप्रिय लोक धुन।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Sainya%20Na%20Aaye%20Media%20Mafias`,
        coverBg: "from-[#059669] to-[#064E3B]"
      },
      {
        id: "tr-gulabi-chunariya",
        title: "Gulabi Chunariya (Wedding Folk Anthem)",
        hindiTitle: "गुलाबी चुनरिया - सुपरहिट देसी शादी डांस",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (रीवा)",
        genreKey: "sangeet-dance",
        genreLabel: "वेडिंग फोक पॉप",
        duration: "3:30",
        bpm: 120,
        featuredArtists: "Media Mafias Collective",
        description: "चुंदरी, कंगन और पायल की खनक पर बना कैची देसी वेडिंग पॉप जो हर शादी के डीजे और रील्स पर वायरल है।",
        culturalNote: "दुपट्टा और चुनरी स्टेप्स के साथ महिला संगीत व स्टेज परफॉर्मेंस का ब्लॉकबस्टर गीत।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Gulabi%20Chunariya%20Media%20Mafias`,
        coverBg: "from-[#DB2777] to-[#831843]"
      }
    ]
  },

  "bagheli-lokgeet-sohar": {
    slug: "bagheli-lokgeet-sohar",
    seoTitle: "Bagheli Lokgeet & Sohar Dadra Rewa Satna",
    hindiTitle: "बघेली लोकगीत, सोहर दादरा (रीवा सतना सीधी)",
    badge: "VINDHYA HERITAGE & SOHAR DADRA",
    description: "विंध्य क्षेत्र (रीवा, सतना, सीधी, शहडोल) का अमर लोक संगीत: संतान जन्मोत्सव के पावन सोहर-दादरा, कुआँ पूजन, जलभराई और ग्रामीण उल्लास के पारंपरिक बघेली लोकगीत।",
    highVolumeKeywords: [
      "bagheli lokgeet",
      "bagheli songs",
      "rewa satna ke gaane",
      "bagheli sohar",
      "bagheli dadra",
      "lakhan lutai deb"
    ],
    bannerBg: "from-[#991B1B] via-[#450A0A] to-[#0B0B0E]",
    accentColor: "#EF4444",
    youtubePlaylistUrl: "https://www.youtube.com/@MediaMafias/playlists",
    spotifyPlaylistUrl: SPOTIFY_OAC_BASE,
    jiosaavnPlaylistUrl: `${JIOSAAVN_SEARCH_BASE}Media%20Mafias%20Bagheli%20Lokgeet`,
    tracks: [
      {
        id: "tr-more-raja",
        title: "More Raja (Bagheli Lokgeet)",
        hindiTitle: "मोरे राजा - बघेली लोकगीत",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (रीवा)",
        genreKey: "dadra",
        genreLabel: "बघेली दादरा",
        duration: "4:12",
        bpm: 118,
        featuredArtists: "Susheel Kumar Dwivedi & Rewa Troupe",
        description: "रीवा-सतना का सर्वाधिक लोकप्रिय उल्लास गीत, जिसमें ढोलक की तीव्र थाप और ग्रामीण जीवन का उत्सव गूंजता है।",
        culturalNote: "पारिवारिक समारोहों और मेलों में गाए जाने वाला केंद्रीय विंध्य का पहचान लोकगीत।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}More%20Raja%20Bagheli%20Media%20Mafias`,
        coverBg: "from-[#991B1B] to-[#450A0A]"
      },
      {
        id: "tr-lakhan-male",
        title: "Bagheli Sohar Dadra (Male Version)",
        hindiTitle: "एही अँगना म लाखन लुटाई देब (सोहर दादरा)",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (विंध्य)",
        genreKey: "sohar",
        genreLabel: "सोहर दादरा",
        duration: "4:51",
        bpm: 96,
        featuredArtists: "Vindhya Traditional Mandali",
        description: "संतान जन्मोत्सव पर आंगन में बधाई देने के लिए गाए जाने वाला पारंपरिक बघेली सोहर दादरा।",
        culturalNote: "नवजात शिशु के जन्म के उपरांत घर-घर बधाई बांटने के समय पुरुषों व मंडलियों द्वारा गाया जाने वाला सोहर।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Lakhan%20Lutai%20Deb%20Male%20Media%20Mafias`,
        lyricsVaultSlug: "sohar-dadra-lakhan-lutai-deb",
        coverBg: "from-[#831843] to-[#500724]"
      },
      {
        id: "tr-lakhan-female",
        title: "Lakhan Lutai Deb (Female Version)",
        hindiTitle: "लाखन लुटाई देब - सोहर दादरा (महिला मंडली)",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (रीवा-सतना)",
        genreKey: "sohar",
        genreLabel: "सोहर दादरा",
        duration: "4:53",
        bpm: 94,
        featuredArtists: "Poonam Tiwari & Rewa Folk Troupe",
        description: "रीवा-सतना की घरेलू महिला मंडली द्वारा ढोलक और थाली की थाप पर गाया जाने वाला पारंपरिक मंगल सोहर।",
        culturalNote: "शिशु के जन्म के छठवें व बारहवें दिन (बरही व कुआँ पूजन) पर महिलाओं द्वारा गाया जाने वाला पावन गीत।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Lakhan%20Lutai%20Deb%20Female%20Media%20Mafias`,
        lyricsVaultSlug: "sohar-dadra-lakhan-lutai-deb",
        coverBg: "from-[#581C87] to-[#3B0764]"
      },
      {
        id: "tr-jal-bharao",
        title: "Jal Bharao Hilore (Kuaan Poojan)",
        hindiTitle: "जल भराव हिलोरे (सोहर दादर व कुआँ पूजन)",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (सीधी-शहडोल)",
        genreKey: "dadra",
        genreLabel: "कुआँ पूजन व दादर",
        duration: "4:11",
        bpm: 104,
        featuredArtists: "Prameesh Mishra & Native Singers",
        description: "बघेलखंडी विवाह के जलभराई, कुआँ पूजन व गृहप्रवेश रस्मों पर गाई जाने वाली मधुर दादरा धुन।",
        culturalNote: "वर-वधु अथवा नवजात शिशु की माता द्वारा जल-तीर्थ पूजन के समय गाई जाने वाली मंगलमयी लोक रचना।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Jal%20Bharao%20Hilore%20Media%20Mafias`,
        lyricsVaultSlug: "ghaat-kuaan-poojan-geet",
        coverBg: "from-[#0284C7] to-[#0C4A6E]"
      }
    ]
  },

  "devi-jas-bhakti-geet": {
    slug: "devi-jas-bhakti-geet",
    seoTitle: "Devi Jas, Bhakti & Maihar Sharada Bhajan",
    hindiTitle: "देवी जस, पचरा व आल्हा ध्वजा भजन (मैहर व विंध्याचल)",
    badge: "MAIHAR SHARADA & NAVRATRI BHAKTI",
    description: "माँ शारदा मैहर धाम और माँ विंध्यवासिनी के चरणों में अर्पित पावन देवी जस, अमर योद्धा आल्हा की ध्वजा गाथा, अमवा की डाल पर देवी झूला, आदि भवानी स्तुति और दुई बिरिया भगतिया आरती।",
    highVolumeKeywords: [
      "devi jas geet",
      "maihar sharada jas",
      "aalha jas",
      "devi bhagat geet",
      "devi jhoola geet",
      "navratri devi geet"
    ],
    bannerBg: "from-[#B91C1C] via-[#7F1D1D] to-[#0B0B0E]",
    accentColor: "#F59E0B",
    youtubePlaylistUrl: "https://www.youtube.com/@MediaMafias/playlists",
    spotifyPlaylistUrl: SPOTIFY_OAC_BASE,
    jiosaavnPlaylistUrl: `${JIOSAAVN_SEARCH_BASE}Media%20Mafias%20Devi%20Jas`,
    tracks: [
      {
        id: "tr-aalha-jas",
        title: "Devi Jas Aalha (Maihar Sharda Dhwaja)",
        hindiTitle: "तीन ध्वजा तीनो लोक से आई, आल्हा कै ध्वजा देखा आई हो माँ",
        dialectKey: "bagheli",
        dialectLabel: "बघेली व बुंदेली",
        genreKey: "devi-jas",
        genreLabel: "मैहर आल्हा जस",
        duration: "5:20",
        bpm: 112,
        featuredArtists: "Vindhya Devotional Mandali",
        description: "मैहर धाम में अमर योद्धा आल्हा के नित्य प्रथम दर्शन और ध्वजा अर्पण का ओजस्वी नगाड़ा व झांझ जस।",
        culturalNote: "नवरात्र में मैहर धाम के त्रिकूट पर्वत पर गूंजने वाला सबसे प्रसिद्ध वीर व भक्ति रस का लोकगीत।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Aalha%20Kai%20Dhwaja%20Media%20Mafias`,
        lyricsVaultSlug: "devi-jas-aalha-geet",
        coverBg: "from-[#B91C1C] to-[#450A0A]"
      },
      {
        id: "tr-devi-jhoola",
        title: "Devi Jhoola Geet (Amwa Kai Daar Pe Maa)",
        hindiTitle: "झूला डरा है अमवा कै डार पे माँ - देवी झूला व हिंडोला",
        dialectKey: "bagheli",
        dialectLabel: "बघेली व अवधी",
        genreKey: "devi-jas",
        genreLabel: "देवी झूला गीत",
        duration: "4:45",
        bpm: 100,
        featuredArtists: "Poonam Tiwari & Female Chorus",
        description: "चंदन पाट के झूले पर माता भवानी के झूलने, लंगुरिया और हनुमान जी द्वारा डोर खींचने का पावन सावन-नवरात्र गीत।",
        culturalNote: "सावन और नवरात्र में महिलाओं द्वारा देवी मंदिरों और घरों में ढोलक पर गाया जाने वाला हिंडोला।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Devi%20Jhoola%20Geet%20Media%20Mafias`,
        lyricsVaultSlug: "devi-jhoola-geet",
        coverBg: "from-[#D97706] to-[#78350F]"
      },
      {
        id: "tr-devi-stuti",
        title: "Devi Stuti (Jag Janani Bardani)",
        hindiTitle: "जग जननी बरदानी, जय हो मोरी आदि भवानी - देवी स्तुति",
        dialectKey: "awadhi",
        dialectLabel: "अवधी व बघेली",
        genreKey: "devi-jas",
        genreLabel: "आदि शक्ति स्तुति",
        duration: "4:15",
        bpm: 84,
        featuredArtists: "Pt. Rajkumar Shastri & Traditional Choir",
        description: "समस्त सृष्टि रचने वाली आदि भवानी के चरणों में आत्मिक समर्पण और भव-दुःख निवारण की पावन प्रार्थना।",
        culturalNote: "घटस्थापना और प्रातः कालीन देवी पूजा के समय ध्यान लगाने वाला आध्यात्मिक स्तोत्र।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Jag%20Janani%20Bardani%20Media%20Mafias`,
        lyricsVaultSlug: "devi-stuti-adi-bhavani",
        coverBg: "from-[#4338CA] to-[#1E1B4B]"
      },
      {
        id: "tr-bhagar-aarti",
        title: "Devi Jas & Bhagar (Dui Biriya Aarti)",
        hindiTitle: "दुई बिरिया, करैं भगत माई आरती - देवी जस व भगर",
        dialectKey: "bagheli",
        dialectLabel: "बघेली (रीवा-सतना)",
        genreKey: "devi-jas",
        genreLabel: "भगतिया जस व भगर",
        duration: "4:58",
        bpm: 108,
        featuredArtists: "Rewa Bhagat Mandali",
        description: "सोने की थाली में भोग, गुड़हल के फूल और लाल चुनरिया सजाकर दोनों पहर की जाने वाली प्रसिद्ध भगर महाआरती।",
        culturalNote: "विंध्य में नवरात्र के समय भगत मंडली द्वारा देवी के मढ़िया/चौरा पर गाए जाने वाला पारंपरिक तांत्रिक व भक्ति जस।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Dui%20Biriya%20Bhagar%20Media%20Mafias`,
        lyricsVaultSlug: "devi-jas-bhagar-aarti",
        coverBg: "from-[#9D174D] to-[#500724]"
      }
    ]
  },

  "awadhi-lokgeet-kajri": {
    slug: "awadhi-lokgeet-kajri",
    seoTitle: "Awadhi Lokgeet, Sawan Kajri & Ram Bhajan",
    hindiTitle: "अवधी लोकगीत, सावन कजरी व रामचरित मानस भजन",
    badge: "AYODHYA & KASHI CLASSICAL FOLK",
    description: "अवध एवं काशी की पावन लोक परंपरा: सावन मास की मनभावन कजरी, झूला-हिंडुली, जनकपुर वाटिका दर्शन के राम भजन और मर्यादा पुरुषोत्तम श्रीराम की पावन लोक वंदना।",
    highVolumeKeywords: [
      "awadhi lokgeet",
      "sawan kajri",
      "kajari geet",
      "awadhi shadi geet",
      "ramcharit manas geet",
      "mirzapur kajri"
    ],
    bannerBg: "from-[#065F46] via-[#064E3B] to-[#0B0B0E]",
    accentColor: "#10B981",
    youtubePlaylistUrl: "https://www.youtube.com/@MediaMafias/playlists",
    spotifyPlaylistUrl: SPOTIFY_OAC_BASE,
    jiosaavnPlaylistUrl: `${JIOSAAVN_SEARCH_BASE}Media%20Mafias%20Awadhi%20Lokgeet`,
    tracks: [
      {
        id: "tr-bagiya-ram",
        title: "Kajari Ram Bhajan (Bagiya Ma Aaye)",
        hindiTitle: "बगिया म आए भगमान, देखन हम जाबय - कजरी राम भजन",
        dialectKey: "awadhi",
        dialectLabel: "अवधी (अयोध्या-जनकपुर)",
        genreKey: "ramcharit-manas",
        genreLabel: "रामचरित मानस कजरी",
        duration: "4:28",
        bpm: 96,
        featuredArtists: "Vocalists & Harmonium Masters",
        description: "जनकपुर की पुष्प वाटिका में प्रभु श्रीराम के आगमन और उनके मुकुट, धनुष व बैजंती हार के अलौकिक दर्शन का भजन।",
        culturalNote: "अवध और विंध्य में सावन और विवाह के पावन अवसरों पर गाई जाने वाली शास्त्रीय कजरी धुन।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Bagiya%20Ma%20Aaye%20Bhagwan%20Media%20Mafias`,
        lyricsVaultSlug: "kajari-ram-bhajan",
        coverBg: "from-[#047857] to-[#064E3B]"
      },
      {
        id: "tr-hinduli-krishna",
        title: "Krishna Gocharan Hinduli (Jhoola Geet)",
        hindiTitle: "कृष्ण गोचरण हिंडुली - सावन झूला लोकगीत",
        dialectKey: "awadhi",
        dialectLabel: "अवधी व बघेली",
        genreKey: "hinduli",
        genreLabel: "हिंडुली व झूला",
        duration: "4:38",
        bpm: 98,
        featuredArtists: "Susheel Kumar Dwivedi",
        description: "सावन और भादों के महीनों में 1 लाख से अधिक श्रोताओं द्वारा सुना गया भगवान श्रीकृष्ण के गोचरण और झूले का मधुर गीत।",
        culturalNote: "हरियाली तीज, नागपंचमी और जन्माष्टमी पर गाए जाने वाला पारंपरिक हिंडोला।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Krishna%20Gocharan%20Hinduli%20Media%20Mafias`,
        coverBg: "from-[#0E7490] to-[#164E63]"
      },
      {
        id: "tr-sawan-kajri",
        title: "Classic Sawan Kajri (Mirzapur Gharana)",
        hindiTitle: "सावन कजरी: बरसन लागे कारी बदरिया",
        dialectKey: "awadhi",
        dialectLabel: "अवधी व मिर्जापुरी",
        genreKey: "kajri",
        genreLabel: "सावन कजरी",
        duration: "4:18",
        bpm: 102,
        featuredArtists: "Native Folk Singers",
        description: "मिर्जापुर और काशी घराने की प्रामाणिक कजरी शैली, जिसमें काले बादलों की गड़गड़ाहट और विरह-मिलन का जादू है।",
        culturalNote: "वर्षा ऋतु में पेड़ों पर पड़े झूले और सखियों के मिलन के समय गाया जाने वाला लोकप्रिय लोकगीत।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Sawan%20Kajri%20Media%20Mafias`,
        lyricsVaultSlug: "kajari-geet-1",
        coverBg: "from-[#0369A1] to-[#082F49]"
      }
    ]
  },

  "bundeli-lokgeet-rai": {
    slug: "bundeli-lokgeet-rai",
    seoTitle: "Bundeli Lokgeet, Rai & Isuri Phag Dhamaka",
    hindiTitle: "बुंदेली लोकगीत, राई व ईसुरी फाग (झांसी सागर)",
    badge: "VEER RAS & BUNDELI RAI DANCE",
    description: "बुंदेलखंड की ओजस्वी वीर रस धरोहर: 52 लड़ाइयों के आल्हा-ऊदल आख्यान, ढोलक और टिमकी की तेज थाप पर बुंदेली राई नृत्य, कवि ईसुरी की चौकड़िया फाग और लमतेरा बाबा भोला के पावन लोकगीत।",
    highVolumeKeywords: [
      "bundeli lokgeet",
      "bundeli rai dance",
      "isuri phag",
      "bundeli shadi geet",
      "jhansi sagar ke gaane",
      "lamtera geet"
    ],
    bannerBg: "from-[#C2410C] via-[#7C2D12] to-[#0B0B0E]",
    accentColor: "#FB923C",
    youtubePlaylistUrl: "https://www.youtube.com/@MediaMafias/playlists",
    spotifyPlaylistUrl: SPOTIFY_OAC_BASE,
    jiosaavnPlaylistUrl: `${JIOSAAVN_SEARCH_BASE}Media%20Mafias%20Bundeli%20Lokgeet`,
    tracks: [
      {
        id: "tr-badariya-kari",
        title: "Badariya Kari Re Hari (Bundeli Veer)",
        hindiTitle: "बदरिया कारी रे हरी (बुंदेली भाव)",
        dialectKey: "bundeli",
        dialectLabel: "बुंदेली (झांसी-सागर)",
        genreKey: "phaag",
        genreLabel: "बुंदेली भाव व फाग",
        duration: "4:08",
        bpm: 112,
        featuredArtists: "Bundelkhand Troupe",
        description: "गरजते बादलों और वीर रस से ओतप्रोत बुंदेलखंडी लोक गाथा, जो ग्रामीण जोश को जगा देती है।",
        culturalNote: "झांसी, सागर और ललितपुर के ग्रामीण अंचलों में उत्सवों के समय बजाई जाने वाली जोशीली रचना।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Badariya%20Kari%20Re%20Hari%20Media%20Mafias`,
        coverBg: "from-[#C2410C] to-[#7C2D12]"
      },
      {
        id: "tr-garda-udaay",
        title: "Garda Udaay Deb (Rustic Folk Anthem)",
        hindiTitle: "गरदा उड़ाय देब (देसी बुंदेली जोश)",
        dialectKey: "bundeli",
        dialectLabel: "बुंदेली (महोबा-झांसी)",
        genreKey: "sangeet-dance",
        genreLabel: "देसी लोक जोश",
        duration: "3:35",
        bpm: 120,
        featuredArtists: "Media Mafias Folk Collective",
        description: "बुंदेली माटी का अदम्य उत्साह और शादी-त्योहारों में धूल उड़ा देने वाला हाई-स्पीड देसी लोकगीत।",
        culturalNote: "बुंदेलखंड के युवाओं और बारात के स्वागत में बजाया जाने वाला ऊर्जावान डांस ट्रैक।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Garda%20Udaay%20Deb%20Media%20Mafias`,
        coverBg: "from-[#B45309] to-[#78350F]"
      },
      {
        id: "tr-lamtera-bhola",
        title: "Lamtera (Baba Bholenath Folk Geet)",
        hindiTitle: "लमतेरा: बाबा भोला के पावन लोकगीत - प्रमीश मिश्रा",
        dialectKey: "bundeli",
        dialectLabel: "बुंदेली व बघेली",
        genreKey: "lamtera",
        genreLabel: "लमतेरा व शिव भजन",
        duration: "4:42",
        bpm: 100,
        featuredArtists: "Original Composition by Prameesh Mishra",
        description: "मध्य भारत की लमतेरा लोक परंपरा पर भगवान शिव और नंदी के आगमन का ओजस्वी व भक्तिमय लोकगीत।",
        culturalNote: "महाशिवरात्रि, सावन सोमवार व कांवड़ यात्रा के समय बुंदेलखंड-बघेलखंड में गाए जाने वाला पारंपरिक लमतेरा।",
        youtubeUrl: "https://www.youtube.com/@MediaMafias",
        spotifyUrl: `${SPOTIFY_OAC_BASE}`,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Lamtera%20Baba%20Bhola%20Media%20Mafias`,
        lyricsVaultSlug: "lamtera-baba-bhola-geet",
        coverBg: "from-[#475569] to-[#1E293B]"
      }
    ]
  }
};

export const ALL_PLAYLISTS_LIST = Object.values(PLAYLISTS_DATA);
