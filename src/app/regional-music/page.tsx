"use client";

import * as React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Play,
  Pause,
  Radio,
  Search,
  Disc3,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Music2,
  BookOpen,
  Mic,
  MapPin,
  HeartHandshake,
  SunMedium
} from "lucide-react";
import { getAudioUrl, SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL, AUDIO_PREVIEW_DURATION } from "@/lib/audio";

interface Release {
  id: string;
  title: string;
  hindiTitle: string;
  dialectKey: "bagheli" | "bundeli" | "awadhi" | "purbi";
  dialectLabel: string;
  hindiDialect: string;
  genre: string;
  duration: string;
  bpm: number;
  featuredArtists: string;
  description: string;
  youtubeUrl: string;
  spotifyUrl: string;
  audioSrc: string;
  coverBg: string;
  categories: ("bagheli" | "bundeli" | "awadhi" | "purbi" | "vivah" | "seasonal")[];
  culturalNote?: string;
}

const REGIONAL_RELEASES: Release[] = [
  // Bagheli Releases
  {
    id: "rel-bagh-1",
    title: "More Raja (Bagheli Lokgeet)",
    hindiTitle: "मोरे राजा - बघेली लोकगीत",
    dialectKey: "bagheli",
    dialectLabel: "Bagheli Folk",
    hindiDialect: "बघेली (रीवा)",
    genre: "Rustic Folk Pop / Utsav",
    duration: "4:12",
    bpm: 118,
    featuredArtists: "Susheel Kumar Dwivedi & Rewa Troupe",
    description: "High-velocity Rewa celebratory folk track fusing native Dholak grooves with modern broadcast stereo mastering.",
    culturalNote: "विंध्य क्षेत्र (रीवा, सतना) का पारंपरिक उल्लास गीत, जो ग्रामीण मेलों और पारिवारिक उत्सवों में गाया जाता है।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    coverBg: "from-[#991B1B] to-[#450A0A]",
    categories: ["bagheli", "seasonal"]
  },
  {
    id: "rel-bagh-2",
    title: "एही अँगना म लाखन लुटाई देब",
    hindiTitle: "एही अँगना म लाखन लुटाई देब (सोहर दादरा)",
    dialectKey: "bagheli",
    dialectLabel: "Bagheli Folk",
    hindiDialect: "बघेली (विंध्य)",
    genre: "Sohar / Dadra",
    duration: "4:51",
    bpm: 96,
    featuredArtists: "Vindhya Traditional Mandali",
    description: "Heartfelt traditional childbirth celebratory Dadra with rich vocal texture and acoustic harmonium.",
    culturalNote: "संतान जन्मोत्सव पर आँगन में बधाई देने के लिए गाए जाने वाला पारंपरिक बघेली सोहर दादरा।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "एही अँगना म लाखन लुटाई देब - Sohar Dadra Male Version.mp3",
    coverBg: "from-[#831843] to-[#500724]",
    categories: ["bagheli", "vivah"]
  },
  {
    id: "rel-bagh-3",
    title: "Lakhan Lutai Deb (Female Version)",
    hindiTitle: "लाखन लुटाई देब - सोहर दादरा",
    dialectKey: "bagheli",
    dialectLabel: "Bagheli Folk",
    hindiDialect: "बघेली (रीवा-सतना)",
    genre: "Traditional Sohar / Mahila Mandali",
    duration: "4:53",
    bpm: 94,
    featuredArtists: "Poonam Tiwari & Rewa Folk Troupe",
    description: "Authentic Bagheli newborn celebration song recorded with grassroots Rewa village folk singers.",
    culturalNote: "रीवा-सतना की घरेलू महिला मंडली द्वारा ढोलक और थाली की थाप पर गाया जाने वाला पारंपरिक मंगल गीत।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Lakhan Lutai Deb - Sohar Dadra Female Version.mp3",
    coverBg: "from-[#581C87] to-[#3B0764]",
    categories: ["bagheli", "vivah"]
  },
  {
    id: "rel-bagh-4",
    title: "Jal Bharao Hilore (Sohar Dadar)",
    hindiTitle: "जल भराव हिलोरे (सोहर दादर)",
    dialectKey: "bagheli",
    dialectLabel: "Bagheli Folk",
    hindiDialect: "बघेली (सीधी-शहडोल)",
    genre: "Pastoral Country Folk / Dadar",
    duration: "4:11",
    bpm: 104,
    featuredArtists: "Prameesh Mishra & Native Singers",
    description: "Vindhya pastoral folk depicting the village water ceremonies, well rituals, and springtime harvest cycles.",
    culturalNote: "बघेलखंडी विवाह के जलभराई, कुंआ पूजन व गृहप्रवेश रस्मों पर गाई जाने वाली मधुर दादरा धुन।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Jal Bharao Hilore - Sohar Dadar.mp3",
    coverBg: "from-[#065F46] to-[#022C22]",
    categories: ["bagheli", "vivah", "seasonal"]
  },

  // Bundeli Releases
  {
    id: "rel-bund-1",
    title: "Badariya Kari Re Hari",
    hindiTitle: "बदरिया कारी रे हरी (बुंदेली भाव)",
    dialectKey: "bundeli",
    dialectLabel: "Bundeli Folk",
    hindiDialect: "बुंदेली (झांसी-सागर)",
    genre: "Veer Ras / Monsoon Ballad",
    duration: "4:33",
    bpm: 112,
    featuredArtists: "Bundelkhand Akhada Mandali",
    description: "Traditional Bundelkhand monsoon ballad with thunderous rustic Dholak, Nagariya, and martial energy.",
    culturalNote: "बुंदेलखंड के वीर रस और वर्षा ऋतु का ओजस्वी गीत, जिसमें नगाड़िया व ढोलक का पारंपरिक प्रयोग है।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Badariya Kari Re Hari.mp3",
    coverBg: "from-[#1E3A8A] to-[#172554]",
    categories: ["bundeli", "seasonal"]
  },
  {
    id: "rel-bund-2",
    title: "Garda Udaay Deb",
    hindiTitle: "गरदा उड़ाय देब (देसी बुंदेली जोश)",
    dialectKey: "bundeli",
    dialectLabel: "Bundeli Folk",
    hindiDialect: "बुंदेली (छतरपुर-टीकमगढ़)",
    genre: "Rustic Folk Anthem / Rai Verve",
    duration: "3:40",
    bpm: 120,
    featuredArtists: "Jhansi Heartland Ensemble",
    description: "High-voltage Bundeli rustic celebration anthem reflecting the raw pride and festive verve of the region.",
    culturalNote: "बुंदेली राई नृत्य की गति और मेलों के जोशीले माहौल को दर्शाता ऊर्जावान लोकगीत।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Garda Udaay Deb.mp3",
    coverBg: "from-[#7F1D1D] to-[#450A0A]",
    categories: ["bundeli", "seasonal"]
  },
  {
    id: "rel-bund-3",
    title: "Dekhi Leb",
    hindiTitle: "देखि लेब (बुंदेली विरह एवं भावना)",
    dialectKey: "bundeli",
    dialectLabel: "Bundeli Folk",
    hindiDialect: "बुंदेली (दमोह-बांदा)",
    genre: "Viraha Lokgeet / Acoustic",
    duration: "2:33",
    bpm: 98,
    featuredArtists: "Sagar Rural Collective",
    description: "Intimate acoustic Bundeli composition capturing heartland emotional narratives and rustic harmonium.",
    culturalNote: "बुंदेली ईसुरी फाग परंपरा से प्रेरित ग्रामीण विरह एवं प्रेम की अभिव्यक्ति।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Dekhi Leb.mp3",
    coverBg: "from-[#312E81] to-[#1E1B4B]",
    categories: ["bundeli"]
  },

  // Awadhi & Vivah Releases
  {
    id: "rel-awad-1",
    title: "Bagiya Ma Aaye Bhagwan (Kajari)",
    hindiTitle: "बगिया म आए भगवान (कजरी)",
    dialectKey: "awadhi",
    dialectLabel: "Awadhi Folk",
    hindiDialect: "अवधी (मिर्जापुर-काशी)",
    genre: "Monsoon Kajri / Rain Ballad",
    duration: "5:19",
    bpm: 88,
    featuredArtists: "Mirzapur & Varanasi Folk Ensemble",
    description: "Melancholic rain ballad celebrating the arrival of clouds and garden swings in Eastern Uttar Pradesh.",
    culturalNote: "सावन-भादों में झूला झूलते समय महिलाओं द्वारा गाई जाने वाली विश्वप्रसिद्ध मिर्जापुरी कजरी।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Bagiya Ma Aaye Bhagwan - Kajari.mp3",
    coverBg: "from-[#115E59] to-[#042F2E]",
    categories: ["awadhi", "seasonal"]
  },
  {
    id: "rel-awad-2",
    title: "Dhan Dhan Nagar Ayodhya (Sohar)",
    hindiTitle: "धन धन नगर अयोध्या (सोहर)",
    dialectKey: "awadhi",
    dialectLabel: "Awadhi Folk",
    hindiDialect: "अवधी (अयोध्या धाम)",
    genre: "Awadhi Sohar / Devotional",
    duration: "4:18",
    bpm: 92,
    featuredArtists: "Media Mafias Sessions",
    description: "Auspicious Awadhi birth celebration Sohar celebrating the divine arrival of Sri Ram in Ayodhya.",
    culturalNote: "राम जन्मोत्सव और नवजात बालक के स्वागत में गाया जाने वाला अवध का सर्वाधिक प्रतिष्ठित सोहर।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Dhan Dhan Nagar Ayodhya - Sohar.mp3",
    coverBg: "from-[#7C2D12] to-[#431407]",
    categories: ["awadhi", "seasonal"]
  },
  {
    id: "rel-awad-3",
    title: "Ram Banra Ban Aayo Re (Banara)",
    hindiTitle: "राम बनरा बन आयो रे (विवाह गीत)",
    dialectKey: "awadhi",
    dialectLabel: "Awadhi Folk",
    hindiDialect: "अवधी (अयोध्या-प्रयागराज)",
    genre: "Vivah Geet / #UrbanMandapStyle",
    duration: "3:05",
    bpm: 92,
    featuredArtists: "Pt. Rajkumar Shastri & Ensemble",
    description: "Traditional groom arrival wedding ceremonial song tailored for auspicious Mandap entry, Tilak, and Duarchar.",
    culturalNote: "विवाह के तिलक, द्वारपूजा और मंडप आगमन पर दूल्हे के स्वागत में गाए जाने वाला शुभ बन्ना गीत।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Ram Banra Ban Aayo Re - Banara.mp3",
    coverBg: "from-[#713F12] to-[#422006]",
    categories: ["awadhi", "vivah"]
  },

  // Purbi & Bhojpuri Releases
  {
    id: "rel-pur-1",
    title: "Jani Ja Bideshba (Bhojpuri Acoustic)",
    hindiTitle: "जनी जा विदेशवा (भोजपुरी विरह)",
    dialectKey: "purbi",
    dialectLabel: "Purbi Folk (भोजपुरी)",
    hindiDialect: "पूर्वी / भोजपुरी (पूर्वांचल)",
    genre: "Bhojpuri Acoustic Folk / Videsiya",
    duration: "5:12",
    bpm: 98,
    featuredArtists: "Media Mafias / Bholanath Gahmari",
    description: "Historic Bholanath Gahmari composition depicting the pain of migration, performed with acoustic intimacy.",
    culturalNote: "भिखारी ठाकुर और भोलानाथ गहमरी परंपरा का बिदेसिया गीत, जो परदेस जाने वाले प्रियतम के विरह पर आधारित है।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Jani Ja Bideshba.mp3",
    coverBg: "from-[#881337] to-[#4C0519]",
    categories: ["purbi", "seasonal"]
  },
  {
    id: "rel-pur-2",
    title: "Bhinsare Ke Nindiya",
    hindiTitle: "भिंसरे के निंदिया (भोजपुरी प्रभाती)",
    dialectKey: "purbi",
    dialectLabel: "Purbi Folk (भोजपुरी)",
    hindiDialect: "पूर्वी / भोजपुरी (गाजीपुर-बलिया)",
    genre: "Prabhati Lokgeet / Dawn Chants",
    duration: "4:45",
    bpm: 86,
    featuredArtists: "Purvanchal Acoustic Artists",
    description: "Gentle morning acoustic ballad capturing dawn awakening across the villages of the Bhojpuri belt.",
    culturalNote: "पूर्वांचल के गांवों में भोर के समय गाई जाने वाली शांत, आध्यात्मिक प्रभाती धुन।",
    youtubeUrl: YOUTUBE_OAC_URL,
    spotifyUrl: SPOTIFY_ARTIST_URL,
    audioSrc: "Bhinsare Ke Nindiya.mp3",
    coverBg: "from-[#155E75] to-[#083344]",
    categories: ["purbi"]
  }
];

const DIALECT_META: Record<string, { title: string; hindiTitle: string; tag: string; description: string; origins: string }> = {
  all: {
    title: "All Regional Folk Masters",
    hindiTitle: "समस्त क्षेत्रीय लोकगीत एवं विवाह संस्कार धरोहर",
    tag: "INDO-GANGETIC MASTER ARCHIVE",
    description: "Central India's definitive studio-grade archive for Bagheli, Bundeli, Awadhi, and Purbi folk recordings, wedding rituals, seasonal Kajri, and heroic ballads.",
    origins: "Rewa • Satna • Sidhi • Shahdol • Jhansi • Sagar • Ayodhya • Varanasi • Purvanchal"
  },
  bagheli: {
    title: "Bagheli Lokgeet Archive",
    hindiTitle: "बघेली लोकगीत (बघेलखंड - रीवा, सतना, सीधी, शहडोल)",
    tag: "VINDHYA ORAL TRADITION",
    description: "Authentic oral music of Rewa, Satna, Maihar, and Vindhyachal. Celebrated for joyous Dadra, childbirth Sohar, emotional Gailhai farewells, and rustic Dholak beats.",
    origins: "Rewa, Satna, Sidhi, Shahdol, Maihar & Singrauli"
  },
  bundeli: {
    title: "Bundeli Lokgeet Archive",
    hindiTitle: "बुंदेली लोकगीत (बुंदेलखंड - झांसी, सागर, छतरपुर, बांदा)",
    tag: "MARTIAL VEER RAS & RUSTIC BALLADS",
    description: "Fierce, celebratory folk tradition of Jhansi, Sagar, and Mahoba. Renowned for 52-battle Alha-Udal epics, lively Bundeli Rai dance beats, Lamtera, and Isuri Phag.",
    origins: "Jhansi, Sagar, Lalitpur, Damoh, Tikamgarh, Chhatarpur & Banda"
  },
  awadhi: {
    title: "Awadhi Lokgeet Archive",
    hindiTitle: "अवधी लोकगीत (अवध एवं काशी - अयोध्या, लखनऊ, प्रयागराज)",
    tag: "SACRED RAM CHARIT & MONSOON KAJRI",
    description: "Soulful heartland melodies of Ayodhya, Lucknow, Prayagraj, and Mirzapur. World-renowned for Sawan Kajri, auspicious Vivah Banara, and Ram Janmotsav Sohar.",
    origins: "Ayodhya, Lucknow, Mirzapur, Prayagraj, Sultanpur & Varanasi"
  },
  purbi: {
    title: "Purbi & Bhojpuri Archive",
    hindiTitle: "पूर्वी एवं भोजपुरी लोकगीत (पूर्वांचल व बिहार)",
    tag: "ACOUSTIC VIRAHA & PURVANCHAL ROOTS",
    description: "Intimate and poetic folk of Purvanchal, Buxar, and Ballia. Rooted in Bhikhari Thakur & Bholanath Gahmari migration narratives, Biraha, and morning Prabhati.",
    origins: "Varanasi, Gorakhpur, Ghazipur, Ballia, Buxar & Bhojpur"
  },
  vivah: {
    title: "Desi Wedding Rites (विवाह संस्कार)",
    hindiTitle: "पारंपरिक देशी विवाह संस्कार के समस्त लोकगीत",
    tag: "SACRED VIVAAH SANSKAR ENCYCLOPEDIA",
    description: "Complete ritual chronology of Indian weddings: Banna Banni, Tilak, Duarchar, Parchhan (Aarti), Bhanwar, Kanyadaan, Samdhi Gari, Jeonaar, Anjuri, and Gailhai.",
    origins: "Central India & Indo-Gangetic Wedding Traditions"
  },
  seasonal: {
    title: "Seasonal, Devotional & Heroic Folk",
    hindiTitle: "ऋतु, वीर रस एवं भक्ति लोक धरोहर (कजरी, फाग, जस, आल्हा)",
    tag: "RITUAL SEASONS & EPIC BALLADS",
    description: "Monsoon Sawan Kajri & Hinduli, spring Holi Phaag, Maihar Sharada Devi Jas, and medieval Alha-Udal heroic ballads sung with nagariya and dholak.",
    origins: "Vindhya, Bundelkhand, Awadh & Purvanchal"
  }
};

const RITUAL_ENCYCLOPEDIA = [
  {
    name: "दुआराचार एवं द्वार पूजा (Duarchar Geet)",
    keyword: "duarchar geet / dwar puja lokgeet",
    timing: "जब बारात लड़की के दरवाजे पर पहुँचती है",
    instruments: "शहनाई, ढोलक, नगाड़ा, मंजीरा",
    desc: "वर पक्ष के दरवाजे पर आगमन पर वधु पक्ष द्वारा स्वागत सत्कार और शुभ द्वार पूजा के समय गाया जाने वाला अति मांगलिक लोकगीत।"
  },
  {
    name: "परछन गीत (Parchhan Geet)",
    keyword: "parchhan geet / vivah parchhan",
    timing: "मंडप प्रवेश से पहले दूल्हे की आरती के समय",
    instruments: "कांस्य थाली, तेल का दीपक, ढोलक",
    desc: "सास व वधु पक्ष की वरिष्ठ महिलाओं द्वारा दूल्हे का स्वागत, आरती घुमाकर व अक्षत-तिलक से बुरी नजर उतारने (परछावन) हेतु गाया जाने वाला पवित्र संस्कार गीत।"
  },
  {
    name: "बन्ना-बन्नी एवं चढ़ाव (Banna Banni Geet)",
    keyword: "banna banni geet / chadhao geet",
    timing: "सगाई, तिलक, हल्दी और मेहंदी उत्सव",
    instruments: "ढोलक, चम्मच/थाली, हारमोनियम",
    desc: "दूल्हा (बन्ना) और दुल्हन (बन्नी) के रूप-रंग, नखरे और आभूषणों पर आधारित हंसी-मजाक व प्रेम से परिपूर्ण पारिवारिक गीत।"
  },
  {
    name: "भांवर व कन्यादान (Bhanwar & Kanyadaan)",
    keyword: "bhanwar geet / kanyadaan geet / suhaag geet",
    timing: "अग्नि के सात फेरे और सिंदूरदान के समय",
    instruments: "धीमी ढोलक, हारमोनियम, शास्त्रीय तानपुरा",
    desc: "पवित्र सात वचनों, गोत्र परिवर्तन और माता-पिता द्वारा अपनी पुत्री को समर्पित करने के सर्वाधिक भावुक और आध्यात्मिक क्षणों के वैदिक लोकगीत।"
  },
  {
    name: "जेवनार व समधी गारी (Jeonaar & Gari Geet)",
    keyword: "jeonaar geet / gari geet / samdhi gari",
    timing: "जब बारात मंडप में भोजन (पंगत) करने बैठती है",
    instruments: "तेज ढोलक, झांझ, चुटकी",
    desc: "वधु पक्ष की महिलाओं द्वारा समधी और बारातियों को भोजन परोसते समय गाए जाने वाले हास्य-व्यंग्य और मीठी नोकझोंक वाले पारंपरिक गारी गीत।"
  },
  {
    name: "अंजुरी एवं गैलहाई (Anjuri & Gailhai Geet)",
    keyword: "anjuri geet / gailhai geet / bidaai geet",
    timing: "विदाई के समय जब कन्या अक्षत फेंकती है और डोली उठती है",
    instruments: "मंद सारंगी, धीमा हारमोनियम, विरह स्वर",
    desc: "बघेलखंड और अवध का सर्वाधिक मार्मिक विदाई गीत, जब बेटी मायके की चौखट छोड़ते हुए अपनी अंजुरी में धान/चावल भरकर पीछे उछालती है।"
  },
  {
    name: "कोहबर एवं सुहाग (Kohbar & Suhaag Geet)",
    keyword: "kohbar geet / suhaag geet",
    timing: "विवाह उपरांत कुलदेवता पूजन व वर-वधु मिलन",
    instruments: "पारंपरिक ढोलक, मृदंग",
    desc: "कोहबर कक्ष में चित्रित सूर्य-चंद्रमा व बांस के सामने कुल-परंपराओं के संरक्षण और सुखी दांपत्य जीवन के आशीर्वाद हेतु गाए जाने वाले गीत।"
  },
  {
    name: "नाचनहाई धुन (Nachanhai Folk Rhythms)",
    keyword: "nachanhai geet / desi dance grooves",
    timing: "महिला संगीत और बारात का उत्सव नृत्य",
    instruments: "डफला, ढोलक, घुंघरू",
    desc: "विवाह के शुभ अवसरों पर महिलाओं और सखियों द्वारा सामूहिक नृत्य के लिए बजाई जाने वाली तेज गति की पारंपरिक लोक लय।"
  }
];

const SEASONAL_ENCYCLOPEDIA = [
  {
    name: "कजरी व हिंडुली (Kajri & Hinduli)",
    region: "अवध, मिर्जापुर, वाराणसी व पूर्वी यूपी",
    season: "सावन - भादों (वर्षा ऋतु)",
    desc: "काले बादलों की गड़गड़ाहट, पेड़ों पर पड़े झूले और विरह-मिलन की अनूठी वर्षा लोक शैली, जिसे मिर्जापुर घराने ने अमर बनाया।"
  },
  {
    name: "बुंदेली व बघेली फाग (Phaag / Isuri Phag)",
    region: "बुंदेलखंड (झांसी/सागर) व बघेलखंड (रीवा/सतना)",
    season: "फागुन (होली एवं वसंत)",
    desc: "कवि ईसुरी की चार-चरणी चौकड़ियों पर आधारित फाग, जिसमें नगाड़िया, मंजीरा और ढोलक के साथ प्रेम व श्रृंगार का उल्लास गूंजता है।"
  },
  {
    name: "देवी जस (Devi Jas Geet)",
    region: "मैहर धाम, विंध्याचल, रीवा व सतना",
    season: "चैत्र व शारदीय नवरात्रि",
    desc: "माँ शारदा भवानी मैहर और माँ विंध्यवासिनी के चरणों में भक्तों द्वारा गाए जाने वाले पारंपरिक भक्ति जस, जिनमें झांझ-मंजीरे की तीव्र धुन होती है।"
  },
  {
    name: "आल्हा-खंड (Aalha Heroic Ballad)",
    region: "बुंदेलखंड व बघेलखंड",
    season: "सावन मास व वीर रस महफ़िल",
    desc: "12वीं सदी के अमर योद्धाओं आल्हा और ऊदल की 52 लड़ाइयों की ओजस्वी वीर रस गाथा, जो नगाड़े की चोट पर गाई जाती है।"
  },
  {
    name: "बिरहा एवं बिदेसिया (Biraha & Videsiya)",
    region: "पूर्वांचल (काशी, गाजीपुर, बलिया) व बिहार",
    season: "बारहमासा (कथात्मक लोक गायन)",
    desc: "भिखारी ठाकुर द्वारा स्थापित 'बिदेसिया' और पूर्वांचल का 'बिरहा', जो रोजी-रोटी के लिए परदेस गए श्रमिकों की पीड़ा और सामाजिक चेतना का महाकाव्य है।"
  },
  {
    name: "बुंदेली राई व बघेली दादरा (Bundeli Rai & Bagheli Dadra)",
    region: "मध्य भारत (झांसी, सागर, रीवा, सतना)",
    season: "पारिवारिक उत्सव व कृषि कटाई",
    desc: "बुंदेलखंड का प्रसिद्ध राई नृत्य और बघेलखंड की दादरा थाप, जो तेज लयबद्ध ढोलक पर जन-जीवन के उल्लास को जीवंत करती है।"
  }
];

const FAQ_ITEMS = [
  {
    q: "Parchhan geet kab aur kyun gaya jata hai? (परछन गीत क्या है?)",
    a: "परछन गीत (Parchhan Geet) हिंदू विवाह संस्कार में उस समय गाया जाता है जब वर (दूल्हा) बारात लेकर मंडप के मुख्य द्वार पर पहुँचता है। वधु की माता और घर की बुजुर्ग महिलाएं कांस्य थाली में दीपक, रोली, हल्दी और अक्षत लेकर दूल्हे की आरती करती हैं। इसे 'परछावन' कहते हैं, जिसका उद्देश्य दूल्हे को नकारात्मक ऊर्जाओं से सुरक्षित रखना और पवित्र गृहस्थ जीवन का आशीर्वाद देना होता है।"
  },
  {
    q: "Bagheli shadi mein Gari (गाली) geet aur Jeonaar ki kya parampara hai?",
    a: "जेवनार (Jeonaar) उस समय को कहते हैं जब दूल्हा और बाराती मंडप में पंक्तिबद्ध होकर भोजन करने बैठते हैं। इस दौरान वधु पक्ष की कन्याएं व महिलाएं ढोलक और थाली बजाकर हंसी-मजाक भरे 'समधी गारी' लोकगीत गाती हैं। यह गाली किसी दुर्भावना से नहीं, बल्कि समधियों के सत्कार और पारिवारिक प्रेम को प्रगाढ़ करने की सदियों पुरानी शिष्ट लोक-परंपरा है।"
  },
  {
    q: "Rewa, Satna, Sidhi aur Shahdol ke pramukh Bagheli lokgeet kaun se hain?",
    a: "बघेलखंड (रीवा, सतना, सीधी, शहडोल, मैहर) मुख्य रूप से सोहर-दादरा (जन्मोत्सव), गारी-जेवनार (विवाह), अंजुरी व गैलहाई (विदाई), फाग (होली), और शारदा भवानी के 'देवी जस' के लिए प्रसिद्ध है। इसके प्रमुख लोक प्रवर्तकों में सुशील कुमार द्विवेदी, पूनम तिवारी, पं. राजकुमार शास्त्री और कवि श्रीनिवास शुक्ल 'सरस' शामिल हैं।"
  },
  {
    q: "Bundeli Rai aur Bagheli Dadra mein mukhya antar kya hai?",
    a: "बुंदेली राई (Bundeli Rai) बुंदेलखंड (झांसी, सागर, ललितपुर) का द्रुत गति का लोक नृत्य-गीत है, जो ढोलक, नगाड़िया और टिमकी की तेज थाप पर ईसुरी की फागों के साथ गाया जाता है। जबकि बघेली दादरा (Bagheli Dadra) रीवा-सतना की संवादपरक लोक-शैली है, जिसमें ताल और धुन का संतुलन पारिवारिक कहानियों और ग्रामीण जीवन के साथ सहज रूप से बंधा होता है।"
  },
  {
    q: "Kya Media Mafias ke sabhi regional lokgeet 100% direct copyright-cleared hain?",
    a: "हाँ, Media Mafias के सभी रीजनल लोकगीत 100% डायरेक्ट मास्टर व पब्लिशिंग आईपी राइट्स के साथ निर्मित हैं। ये PPL और IPRS रॉयल्टी से पूर्णतः मुक्त हैं। इन्हें विवाह आयोजक, इवेंट्स, ओटीटी वेब सीरीज, रिटेल स्टोर्स और यूट्यूब क्रिएटर्स बिना किसी कॉपीराइट स्ट्राइक के लीगली उपयोग कर सकते हैं।"
  }
];

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

function RegionalMusicContent() {
  const searchParams = useSearchParams();
  const initialDialect = searchParams?.get("dialect") || "all";

  const [selectedDialect, setSelectedDialect] = React.useState<string>(initialDialect);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const [previewTime, setPreviewTime] = React.useState(0);
  const [previewEndedId, setPreviewEndedId] = React.useState<string | null>(null);
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    const dialectFromUrl = searchParams?.get("dialect");
    if (dialectFromUrl && ["bagheli", "bundeli", "awadhi", "purbi", "vivah", "seasonal"].includes(dialectFromUrl)) {
      setSelectedDialect(dialectFromUrl);
    }
  }, [searchParams]);

  const activeMeta = DIALECT_META[selectedDialect] || DIALECT_META.all;

  const filteredReleases = REGIONAL_RELEASES.filter((rel) => {
    let matchesCategory = false;
    if (selectedDialect === "all") {
      matchesCategory = true;
    } else if (selectedDialect === "vivah") {
      matchesCategory = rel.categories.includes("vivah");
    } else if (selectedDialect === "seasonal") {
      matchesCategory = rel.categories.includes("seasonal");
    } else {
      matchesCategory = rel.dialectKey === selectedDialect;
    }

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      rel.title.toLowerCase().includes(query) ||
      rel.hindiTitle.toLowerCase().includes(query) ||
      rel.dialectLabel.toLowerCase().includes(query) ||
      rel.featuredArtists.toLowerCase().includes(query) ||
      rel.genre.toLowerCase().includes(query) ||
      (rel.culturalNote && rel.culturalNote.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    setPreviewTime(Math.min(AUDIO_PREVIEW_DURATION, Math.floor(current)));
    if (current >= AUDIO_PREVIEW_DURATION) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPreviewEndedId(playingId);
      setPlayingId(null);
      setPreviewTime(0);
    }
  };

  const handleTogglePlay = (id: string, audioSrc: string) => {
    if (!audioRef.current) return;
    if (playingId === id) {
      audioRef.current.pause();
      setPlayingId(null);
      setPreviewTime(0);
    } else {
      setPreviewEndedId(null);
      setPreviewTime(0);
      audioRef.current.src = getAudioUrl(audioSrc);
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => {
        setPlayingId(id);
      }).catch((e) => console.warn("Audio playback err:", e));
    }
  };

  const dialectTabs = [
    { key: "all", label: "All Folk Masters", hindi: "समस्त लोकगीत", badge: "ALL" },
    { key: "bagheli", label: "Bagheli", hindi: "बघेली (रीवा-सतना)", badge: "MP" },
    { key: "bundeli", label: "Bundeli", hindi: "बुंदेली (झांसी-सागर)", badge: "MP/UP" },
    { key: "awadhi", label: "Awadhi", hindi: "अवधी (काशी-अयोध्या)", badge: "UP" },
    { key: "purbi", label: "Purbi / Bhojpuri", hindi: "पूर्वी / भोजपुरी", badge: "PURVANCHAL" },
    { key: "vivah", label: "Vivaah Sanskar", hindi: "विवाह संस्कार (परछन, गारी)", badge: "WEDDINGS" },
    { key: "seasonal", label: "Seasonal & Devotional", hindi: "ऋतु, जस व आल्हा", badge: "HERITAGE" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setPlayingId(null);
          setPreviewTime(0);
        }}
      />

      {/* Hero Section: Heritage Noir & Studio Bronze */}
      <section className="relative pt-36 pb-14 px-6 border-b border-white/10 bg-radial-[at_top_center] from-[#1A1A22] via-[#0B0B0E] to-[#0B0B0E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,57,43,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] tracking-wider uppercase mb-5">
            <Radio className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>{activeMeta.tag}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-2 leading-tight">
                {activeMeta.title}
              </h1>
              <div className="font-sans font-bold text-xl sm:text-3xl text-[#D4AF37] mb-4">
                {activeMeta.hindiTitle}
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                {activeMeta.description}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
                <span><strong className="text-white">Cultural Geographic Hubs:</strong> {activeMeta.origins}</span>
              </div>
            </div>

            {/* Global Streaming Outbound CTAs */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DB954] hover:bg-[#1aa34a] text-black font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-black/40"
              >
                <SpotifyIcon className="w-4 h-4 fill-current" />
                <span>Spotify Artist Channel</span>
              </a>

              <a
                href={YOUTUBE_OAC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C0392B] hover:bg-[#a93226] text-white font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-black/40"
              >
                <YoutubeIcon className="w-4 h-4 fill-white" />
                <span>YouTube @MediaMafias</span>
              </a>
            </div>
          </div>

          {/* Dialect & Category Filter Tabs */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-2.5 sm:gap-3">
            {dialectTabs.map((tab) => {
              const isActive = selectedDialect === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    if (playingId && audioRef.current) {
                      audioRef.current.pause();
                      setPlayingId(null);
                    }
                    setSelectedDialect(tab.key);
                  }}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)] font-black"
                      : "bg-[#141419] text-neutral-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[11px] font-sans ${isActive ? "text-neutral-900 font-bold" : "text-neutral-400"}`}>
                    ({tab.hindi})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voice Search & AI Summary Block (SEO Speakable Target) */}
      <section id="folk-voice-summary" className="py-8 px-6 bg-[#101014] border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <Mic className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="font-mono text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                Voice Search & AI Overview Answer
              </div>
              <p className="voice-answer font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
                Media Mafias रीवा, सतना, सीधी, शहडोल (बघेलखंड), झांसी, सागर (बुंदेलखंड), अयोध्या, प्रयागराज (अवध) एवं पूर्वांचल के पारंपरिक लोकगीतों (परछन, दुआराचार, बन्ना-बन्नी, गारी, जेवनार, गैलहाई, बुंदेली राई, बघेली दादरा, कजरी, फाग, देवी जस, आल्हा) का 100% कॉपीराइट-मुक्त ऑफिशियल रिकॉर्ड लेबल और डिजिटल आर्काइव है।
              </p>
            </div>
          </div>
          <div className="font-mono text-[11px] text-neutral-500 shrink-0">
            Official Broadcast Masters
          </div>
        </div>
      </section>

      {/* Main Track Grid Shelf */}
      <section className="py-14 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Subheader & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full">
                {filteredReleases.length} STUDIO RECORDINGS
              </span>
              <span className="font-mono text-xs text-neutral-400">
                20s In-Browser Preview • Spotify & YouTube Full Masters
              </span>
            </div>

            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Parchhan, Dadra, Rewa, Sohar..."
                className="w-full pl-9 pr-4 py-2.5 bg-[#141419] border border-white/10 focus:border-[#D4AF37] rounded-xl font-mono text-xs text-white placeholder:text-neutral-500 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReleases.map((release) => {
              const isPlaying = playingId === release.id;

              return (
                <div
                  key={release.id}
                  className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className={`relative aspect-video bg-gradient-to-br ${release.coverBg} p-5 flex flex-col justify-between text-white overflow-hidden border-b border-white/10`}>
                      <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
                        <Disc3 className="w-44 h-44 text-white animate-spin-slow" />
                      </div>

                      {/* Top Badges */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase bg-black/70 backdrop-blur-sm text-[#D4AF37] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded">
                          {release.hindiDialect}
                        </span>
                        <span className="font-mono text-[10px] font-bold bg-black/70 backdrop-blur-sm text-neutral-300 px-2 py-0.5 rounded border border-white/10">
                          {release.duration} • {release.bpm} BPM
                        </span>
                      </div>

                      {/* Center Play Button */}
                      <div className="relative z-10 flex items-center justify-center my-auto">
                        <button
                          onClick={() => handleTogglePlay(release.id, release.audioSrc)}
                          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xl ${
                            isPlaying
                              ? "bg-[#C0392B] text-white scale-105"
                              : "bg-[#D4AF37] text-black hover:scale-110 hover:bg-[#e5be47]"
                          }`}
                          aria-label={isPlaying ? "Pause preview" : "Play preview"}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 fill-current" />
                          ) : (
                            <Play className="w-6 h-6 fill-current ml-1" />
                          )}
                        </button>
                      </div>

                      {/* Bottom Track Meta */}
                      <div className="relative z-10 flex items-center justify-between font-mono text-[11px] font-bold">
                        <span className="truncate max-w-[180px] bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-neutral-200">
                          {release.genre}
                        </span>
                        <span className="flex items-center gap-1 text-[#D4AF37] bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded">
                          <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                          Studio Master
                        </span>
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-5 space-y-2">
                      <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">
                        {release.title}
                      </h3>
                      <div className="font-sans font-bold text-sm text-[#D4AF37]">
                        {release.hindiTitle}
                      </div>

                      <p className="font-mono text-xs text-neutral-400">
                        <strong className="text-neutral-200">Artists:</strong> {release.featuredArtists}
                      </p>

                      <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                        {release.description}
                      </p>

                      {release.culturalNote && (
                        <div className="pt-2 border-t border-white/5 font-sans text-xs text-neutral-400 italic">
                          <span className="text-[#D4AF37] not-italic font-mono font-bold mr-1">सांस्कृतिक संदर्भ:</span>
                          {release.culturalNote}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions & Conversion */}
                  <div className="p-5 pt-0 space-y-3">
                    {/* 20s Preview Player Button */}
                    <button
                      onClick={() => handleTogglePlay(release.id, release.audioSrc)}
                      className={`w-full py-2.5 px-4 rounded-xl font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isPlaying
                          ? "bg-[#C0392B] text-white shadow-[0_0_15px_rgba(192,57,43,0.4)]"
                          : "bg-[#1A1A22] text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-black"
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 fill-current" />
                          <span>PAUSE PREVIEW ({previewTime}s / {AUDIO_PREVIEW_DURATION}s)</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>20s STUDIO PREVIEW</span>
                        </>
                      )}
                    </button>

                    {/* Live Progress Bar for 20s */}
                    {isPlaying && (
                      <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[#D4AF37] h-full transition-all duration-200"
                          style={{ width: `${(previewTime / AUDIO_PREVIEW_DURATION) * 100}%` }}
                        />
                      </div>
                    )}

                    {/* Preview Finished Conversion Banner */}
                    {previewEndedId === release.id && !isPlaying && (
                      <div className="bg-[#1DB954]/10 border border-[#1DB954]/30 p-2.5 rounded-xl text-center space-y-1">
                        <div className="font-mono text-[11px] font-bold uppercase text-[#1DB954] flex items-center justify-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>20-Second Preview Completed</span>
                        </div>
                        <p className="font-mono text-[10px] text-neutral-300">
                          Stream complete track on Spotify or YouTube OAC:
                        </p>
                      </div>
                    )}

                    {/* Dual Platform Links */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={release.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-[#18181E] hover:bg-[#1DB954] hover:text-black border border-white/10 rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-1.5 transition-colors"
                        title="Stream on Spotify"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5" />
                        <span>Spotify</span>
                      </a>

                      <a
                        href={release.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-[#18181E] hover:bg-[#C0392B] hover:text-white border border-white/10 rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-1.5 transition-colors"
                        title="Watch on YouTube"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5" />
                        <span>YouTube OAC</span>
                      </a>
                    </div>

                    {/* Direct Wedding & Sync Licensing Link */}
                    <a
                      href={`https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20license%20the%20regional%20track%20"${encodeURIComponent(release.title)}"%20for%20wedding%20video%2FOTT%2Fcommercial%20use.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/30 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center transition-all"
                    >
                      <span>Direct Sync / Wedding Mandap License ➔</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep Cultural Encyclopedia & Ritual Guide (SEO Content Pillar) */}
      <section id="ritual-guide" className="py-16 px-6 bg-[#0E0E12] border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cultural Encyclopedia & Ritual Guide</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              विवाह संस्कार एवं क्षेत्रीय लोकगीत महाकोश
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
              बघेलखंड, बुंदेलखंड, अवध और पूर्वांचल के पारंपरिक शादी-विवाह की समस्त रस्मों, ऋतु गीतों और वीर गाथाओं का प्रामाणिक संदर्भ।
            </p>
          </div>

          {/* Wedding Rituals Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                विवाह संस्कार के 8 मुख्य पारंपरिक लोकगीत (Desi Wedding Rites Archive)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {RITUAL_ENCYCLOPEDIA.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#141419] border border-white/10 hover:border-[#D4AF37]/40 rounded-xl p-5 space-y-3 flex flex-col justify-between transition-colors"
                >
                  <div className="space-y-2">
                    <div className="font-mono text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                      रस्म #{idx + 1}
                    </div>
                    <h4 className="font-sans font-bold text-base text-white">
                      {item.name}
                    </h4>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 space-y-1 font-mono text-[10px] text-neutral-400">
                    <div><strong className="text-neutral-200">समय:</strong> {item.timing}</div>
                    <div><strong className="text-neutral-200">वाद्य:</strong> {item.instruments}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seasonal & Heroic Traditions */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <SunMedium className="w-5 h-5 text-[#C0392B]" />
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                ऋतु, वीर रस एवं सामाजिक लोक विरासत (Seasonal, Heroic & Devotional Heritage)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SEASONAL_ENCYCLOPEDIA.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#141419] border border-white/10 hover:border-[#C0392B]/40 rounded-xl p-5 space-y-2.5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-sans font-bold text-base text-white">
                      {item.name}
                    </h4>
                    <span className="font-mono text-[10px] text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                      {item.season}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-neutral-400">
                    <strong className="text-neutral-300">क्षेत्र:</strong> {item.region}
                  </div>
                  <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion (For Featured Snippets) */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <div className="text-center space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
                अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions)
              </h3>
              <p className="font-mono text-xs text-neutral-400">
                लोकगीतों, विवाह रस्मों और कॉपीराइट लाइसेंसिंग से जुड़े महत्वपूर्ण उत्तर।
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#141419] border border-white/10 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                    >
                      <span className="font-sans font-bold text-sm sm:text-base text-white">
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#D4AF37] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-0 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 mt-2">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function RegionalMusicPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0B0B0E] text-[#D4AF37] flex items-center justify-center font-mono font-bold">
          Loading Regional Folk Music Archive...
        </div>
      }
    >
      <RegionalMusicContent />
    </Suspense>
  );
}
