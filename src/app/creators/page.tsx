"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Play,
  Pause,
  ExternalLink,
  Award,
  Music2,
  CheckCircle2,
  Landmark,
  BookOpen,
  MapPin,
  Sparkles,
  PhoneCall,
  Disc3
} from "lucide-react";
import { getAudioUrl, SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL, AUDIO_PREVIEW_DURATION } from "@/lib/audio";

interface Creator {
  id: string;
  name: string;
  hindiName: string;
  region: string;
  dialect: string;
  dialectCategory: "bagheli" | "bundeli" | "awadhi" | "contemporary" | "all";
  role: string;
  bio: string;
  notableTrack: string;
  audioSrc: string;
  catalogCount: number;
  avatarBg: string;
}

interface HeritagePioneer {
  id: string;
  name: string;
  hindiName: string;
  honorific: string;
  region: string;
  category: "bhojpuri" | "bagheli" | "awadhi" | "bundeli";
  era: string;
  description: string;
  masterpieces: string[];
  referenceUrl: string;
  accentBg: string;
}

const CREATORS_DATA: Creator[] = [
  {
    id: "cr-1",
    name: "Susheel Kumar Dwivedi",
    hindiName: "सुशील कुमार द्विवेदी",
    region: "Rewa & Satna, MP",
    dialect: "Bagheli Folk",
    dialectCategory: "bagheli",
    role: "Senior Bagheli Folk Vocalist & Troupe Lead",
    bio: "Pioneering Bagheli folk preservationist from Rewa. Renowned for authentic rustic timbre, harvest Dadra, and ancestral oral compositions keeping Bagheli village heritage alive.",
    notableTrack: "More Raja (Bagheli Lokgeet)",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    catalogCount: 18,
    avatarBg: "from-[#991B1B] to-[#450A0A]"
  },
  {
    id: "cr-2",
    name: "Poonam Tiwari",
    hindiName: "पूनम तिवारी",
    region: "Rewa & Vindhya, MP",
    dialect: "Bagheli & Awadhi Folk",
    dialectCategory: "bagheli",
    role: "Eminent Vernacular Folk Songstress",
    bio: "Revered folk songstress known for traditional Sohar, Vivah, and Dadra. Bringing women's courtyard oral traditions and deep domestic sentiment into broadcast-grade production.",
    notableTrack: "Lakhan Lutai Deb (Sohar Dadra)",
    audioSrc: "Lakhan Lutai Deb - Sohar Dadra Female Version.mp3",
    catalogCount: 24,
    avatarBg: "from-[#831843] to-[#500724]"
  },
  {
    id: "cr-3",
    name: "Pt. Rajkumar Shastri",
    hindiName: "पं. राजकुमार शास्त्री",
    region: "Varanasi & Vindhyachal",
    dialect: "Classical Folk & Devotional",
    dialectCategory: "contemporary",
    role: "Classical Folk Maestro & Stotra Chanting Master",
    bio: "Master of classical Sanskrit stotrams, traditional katha renditions, and sacred folk ragas that bridge ancient temple traditions with high-fidelity studio broadcasts.",
    notableTrack: "Shiva Panchakshara Stotram (Shiva Shambhoo Mix)",
    audioSrc: "Shiva Panchakshara Stotram - Shiva Shambhoo Mix.mp3",
    catalogCount: 15,
    avatarBg: "from-[#1E3A8A] to-[#172554]"
  },
  {
    id: "cr-4",
    name: "Renu Tripathi",
    hindiName: "रेणु त्रिपाठी",
    region: "Mirzapur & Awadh, UP",
    dialect: "Awadhi Folk & Kajri",
    dialectCategory: "awadhi",
    role: "Awadhi Folk & Kajri Specialist",
    bio: "Authentic Awadhi folk exponent celebrated for seasonal monsoon Kajri, Banara wedding songs, and soul-stirring Ganga-belt oral poetry.",
    notableTrack: "Bagiya Ma Aaye Bhagwan (Kajari)",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Kajari.mp3",
    catalogCount: 16,
    avatarBg: "from-[#065F46] to-[#022C22]"
  },
  {
    id: "cr-5",
    name: "DJ Raja",
    hindiName: "डीजे राजा",
    region: "Central India / Purvanchal",
    dialect: "Folk-Pop & Club Beats",
    dialectCategory: "contemporary",
    role: "Vernacular Beat Producer & Remix Architect",
    bio: "Modern folk-pop pioneer bridging raw regional acoustic stems with energetic urban 808s, Dholak drops, and festival club mixes.",
    notableTrack: "Garda Udaay Deb (Club Mix)",
    audioSrc: "Garda Udaay Deb.mp3",
    catalogCount: 19,
    avatarBg: "from-[#7F1D1D] to-[#450A0A]"
  },
  {
    id: "cr-6",
    name: "Preeti Tiwari",
    hindiName: "प्रीति तिवारी",
    region: "Baghelkhand & Bundelkhand",
    dialect: "Bagheli & Bundeli Folk",
    dialectCategory: "bundeli",
    role: "Vernacular Folk Vocalist",
    bio: "Versatile regional songstress performing timeless harvest songs, Devi Jas, and pastoral folk ballads of the Vindhya-Bundelkhand belt with natural acoustic grace.",
    notableTrack: "Badariya Kari Re Hari",
    audioSrc: "Badariya Kari Re Hari.mp3",
    catalogCount: 14,
    avatarBg: "from-[#7C2D12] to-[#431407]"
  },
  {
    id: "cr-7",
    name: "Pt. Chandramauli Shukla",
    hindiName: "पं. चन्द्रमौलि शुक्ल",
    region: "Kashi & Maihar",
    dialect: "Vedic Chant & Sanskrit Stotram",
    dialectCategory: "contemporary",
    role: "Temple Stuti & Sacred Chant Master",
    bio: "Renowned Sanskrit scholar and temple chanter preserving ancient Vedic intonations, Jagannath Stotram, and authentic sanctum acoustics for spiritual seekers.",
    notableTrack: "Jagannath Raksha Stotram",
    audioSrc: "जगन्नाथ रक्ष माम्.mp3",
    catalogCount: 21,
    avatarBg: "from-[#581C87] to-[#3B0764]"
  },
  {
    id: "cr-8",
    name: "Prameesh Mishra",
    hindiName: "प्रमीश मिश्रा",
    region: "Rewa, MP (ScalerX Lab)",
    dialect: "Regional Sound Architecture",
    dialectCategory: "all",
    role: "Lead Composer, Producer & Folk Sound Architect",
    bio: "Founder & music director at Media Mafias / ScalerX Lab. Pioneering broadcast LUFS folk mastering, AI-assisted acoustics, and decentralized DSP distribution for grassroots creators.",
    notableTrack: "Ram Banra Ban Aayo Re (Banara)",
    audioSrc: "Ram Banra Ban Aayo Re - Banara.mp3",
    catalogCount: 28,
    avatarBg: "from-[#0E7490] to-[#164E63]"
  }
];

const HERITAGE_PIONEERS: HeritagePioneer[] = [
  // Bhojpuri & Purvanchal
  {
    id: "pioneer-bhikhari-thakur",
    name: "Bhikhari Thakur",
    hindiName: "भिखारी ठाकुर",
    honorific: "The Shakespeare of Bhojpuri (भोजपुरी के शेक्सपियर)",
    region: "Kutubpur, Saran (Bihar)",
    category: "bhojpuri",
    era: "1887 – 1971",
    description: "Legendary playwright, lyricist, actor, and social reformer who revolutionized Indian vernacular folk theatre. Creator of the immortal 'Bidesiya' (बिदेसिया) folk dance-drama that gave poignant voice to rural migration and women's longing.",
    masterpieces: ["Bidesiya (बिदेसिया)", "Gabarghichor (गबरघिचोर)", "Beti Bechwa (बेटी बेचवा)", "Kalyug Prem (कलयुग प्रेम)"],
    referenceUrl: "https://hi.wikipedia.org/wiki/%E0%A4%AD%E0%A4%BF%E0%A4%96%E0%A4%BE%E0%A4%B0%E0%A5%80_%E0%A4%A0%E0%A4%BE%E0%A4%95%E0%A5%81%E0%A4%B0",
    accentBg: "border-[#D4AF37]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-sharda-sinha",
    name: "Sharda Sinha",
    hindiName: "शारदा सिन्हा",
    honorific: "Bihar Kokila (बिहार कोकिला) • Padma Bhushan",
    region: "Supaul & Begusarai (Bihar)",
    category: "bhojpuri",
    era: "1952 – 2024",
    description: "The peerless cultural voice of Bihar and Purvanchal. Her soulful renditions of Chhath Mahaparv songs ('Kelwa Ke Paat Par'), Maithili & Bhojpuri vivah geet, and sohar are permanently woven into India's cultural DNA.",
    masterpieces: ["Chhath Mahaparv Geet", "Babul Ki Duayein / Vivah Geet", "Patna Se Baida Bulaai Da", "Koyal Bin Khetiya"],
    referenceUrl: "https://en.wikipedia.org/wiki/Sharda_Sinha",
    accentBg: "border-[#C0392B]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-bholanath-gahmari",
    name: "Bholanath Gahmari",
    hindiName: "भोलानाथ गहमरी",
    honorific: "Pioneer Balladeer of Migration & Purvanchal Soul",
    region: "Gahmar, Ghazipur (UP)",
    category: "bhojpuri",
    era: "Historic Folk Balladeer",
    description: "Iconic Bhojpuri folk lyricist and balladeer whose Purvi, Viraha, and Nirgun compositions captured the pathos of rural departure, railway stations, and seasonal separation with unmatched acoustic authenticity.",
    masterpieces: ["Jani Ja Bideshba", "Purvi Lok Gaatha", "Viraha & Nirgun Samhita"],
    referenceUrl: "https://bh.wikipedia.org/wiki/%E0%A4%AD%E0%A5%8B%E0%A4%B2%E0%A4%BE%E0%A4%A8%E0%A4%BE%E0%A4%A5_%E0%A4%97%E0%A4%B9%E0%A4%AE%E0%A4%B0%E0%A5%80",
    accentBg: "border-[#D4AF37]/30 bg-[#15151C]"
  },

  // Bagheli Dialect Poets & Icons
  {
    id: "pioneer-shri-nivas-shukla",
    name: "Shri Nivas Shukla 'Saras'",
    hindiName: "श्री निवास शुक्ल 'सरस'",
    honorific: "Pioneer of Modern Bagheli Poetry & Song",
    region: "Rewa, Baghelkhand (MP)",
    category: "bagheli",
    era: "Modern Folk Literary Giant",
    description: "Pioneering literary figure who gave monumental philosophical and romantic depth to Bagheli oral traditions. Celebrated for pioneering anthologies that established Bagheli as a rich literary medium.",
    masterpieces: ["Raskheer (रसखीर)", "Amar Uti (अमर ऊती - Bagheli Songs)", "Ajuri Bhar Ajor (अजुरी भर अंजोर)"],
    referenceUrl: "https://www.google.com/search?kgmid=%2Fg%2F11lts88cvt&q=Shri+Nivas+Shukla+%27Saras%27",
    accentBg: "border-[#3B82F6]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-babulal-dahiya",
    name: "Babulal Dahiya",
    hindiName: "बाबूलाल दाहिया",
    honorific: "Padma Shri • Indigenous Seeds & Folklore Guardian",
    region: "Pithaurabad, Satna (MP)",
    category: "bagheli",
    era: "Living Legend / Folk Custodian",
    description: "Padma Shri recipient, organic farmer, and revered Bagheli poet who dedicated his life to collecting indigenous folk songs, agricultural proverbs, traditional riddles, and over 200 ancestral rice varieties.",
    masterpieces: ["Bagheli Lokgeet Samgraha", "Krishi Kahawat Kosh", "Baghali Lok Sanskruti"],
    referenceUrl: "https://en.wikipedia.org/wiki/Babulal_Dahiya",
    accentBg: "border-[#10B981]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-saifuddin-siddiqui",
    name: "Saifuddin Siddiqui 'Saifu Ji'",
    hindiName: "सैफुद्दीन सिद्दीकी 'सैफ़ू जी'",
    honorific: "Eminent Poet of Bagheli Wit & Vernacular Verse",
    region: "Baghelkhand (MP)",
    category: "bagheli",
    era: "Eminent Dialect Pioneer",
    description: "Highly celebrated folk poet who enriched Bagheli dialect literature through razor-sharp social wit, effortless rhyming meter, and deep affinity with grassroots rural life.",
    masterpieces: ["Bagheli Hasya-Vyangya Sangrah", "Desaj Chhandaavali", "Gramin Pravah"],
    referenceUrl: "https://www.google.com/search?q=Saifuddin+Siddiqui+Saifu+Ji+Bagheli",
    accentBg: "border-[#A855F7]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-sukhai-prasad-atal",
    name: "Sukhai Prasad Atal",
    hindiName: "सुखई प्रसाद अटल",
    honorific: "Voice of Social Equality & Satirical Folk Verse",
    region: "Baghelkhand (MP)",
    category: "bagheli",
    era: "Reformer Poet",
    description: "Renowned for wielding Bagheli poetry as an instrument of social justice. His verses fearlessly attacked feudal hypocrisy, caste boundaries, and orthodox societal inconsistencies with biting satire.",
    masterpieces: ["Samajik Chetna Ke Bagheli Chhand", "Kritighna Virodh", "Lok Vyangya"],
    referenceUrl: "https://www.google.com/search?q=Sukhai+Prasad+Atal+Bagheli+poet",
    accentBg: "border-[#E11D48]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-shambhu-kaku",
    name: "Shambhu Kaku",
    hindiName: "शम्भू काकू",
    honorific: "Legendary Bagheli Oral Narrator & Folk Composer",
    region: "Rewa & Vindhya (MP)",
    category: "bagheli",
    era: "Traditional Folk Master",
    description: "Beloved vernacular storyteller and folk composer whose rustic cadence, humor, and domestic anecdotes defined the fireside storytelling culture across Vindhya villages.",
    masterpieces: ["Bagheli Gaon Gatha", "Kaku Ke Kisse", "Chaupal Sangeet"],
    referenceUrl: "https://www.google.com/search?q=Shambhu+Kaku+Bagheli",
    accentBg: "border-[#06B6D4]/30 bg-[#15151C]"
  },

  // Awadhi Literary Masters & Legends
  {
    id: "pioneer-tulsidas",
    name: "Goswami Tulsidas",
    hindiName: "गोस्वामी तुलसीदास",
    honorific: "Supreme Master of Awadhi • Author of Ramcharitmanas",
    region: "Rajapur, Chitrakoot & Kashi",
    category: "awadhi",
    era: "1532 – 1623",
    description: "The fountainhead of Awadhi spiritual literature. His epic 'Shri Ramcharitmanas', 'Hanuman Chalisa', 'Gitavali', and 'Kavitavali' established Awadhi as the premier language of devotion across the globe.",
    masterpieces: ["Ramcharitmanas (रामचरितमानस)", "Hanuman Chalisa (हनुमान चालीसा)", "Gitavali (गीतावली)", "Vinaya Patrika (विनय पत्रिका)"],
    referenceUrl: "https://en.wikipedia.org/wiki/Tulsidas",
    accentBg: "border-[#D4AF37]/40 bg-[#15151C]"
  },
  {
    id: "pioneer-jayasi",
    name: "Malik Muhammad Jayasi",
    hindiName: "मलिक मुहम्मद जायसी",
    honorific: "Classical Awadhi Sufi Mystic • Author of Padmavat",
    region: "Jais, Amethi (Awadh)",
    category: "awadhi",
    era: "1477 – 1542",
    description: "Immortal Sufi poet of Awadh who composed 'Padmavat' (1540 CE) in classical Awadhi dialect, blending Sufi allegorical mysticism with native regional proverbs, seasonal Barahmasa, and lyrical depth.",
    masterpieces: ["Padmavat (पद्मावत - 1540 CE)", "Akharavat (अखरावट)", "Akhiri Kalam (आखिरी कलाम)"],
    referenceUrl: "https://en.wikipedia.org/wiki/Malik_Muhammad_Jayasi",
    accentBg: "border-[#0284C7]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-ramai-kaka",
    name: "Ramai Kaka (Chandra Bhushan Trivedi)",
    hindiName: "रमाई काका (चन्द्र भूषण त्रिवेदी)",
    honorific: "Voice of Rural Awadh • All India Radio Lucknow Pioneer",
    region: "Rawatpur, Unnao (UP)",
    category: "awadhi",
    era: "1915 – 1982",
    description: "Beloved radio dramatist and poet whose iconic 'Panchayat' broadcasts on Akashvani Lucknow championed Awadhi folk idiom, rural welfare, and sparkling humor for over three decades.",
    masterpieces: ["Bauchhar (बौछार)", "Bar Kanya (बर कन्या)", "Netaji (नेताजी नाटक)", "Bhinusar (भिनुसार)"],
    referenceUrl: "https://hi.wikipedia.org/wiki/%E0%A4%B0%E0%A4%AE%E0%A4%BE%E0%A4%88_%E0%A4%95%E0%A4%BE%E0%A4%95%E0%A4%BE",
    accentBg: "border-[#8B5CF6]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-jumai-khan-azad",
    name: "Jumai Khan Azad",
    hindiName: "जुमई खां आज़ाद",
    honorific: "Awadhi Folk Bard of Ganga-Jamuni Tehzeeb",
    region: "Gonda, Awadh (UP)",
    category: "awadhi",
    era: "Awadhi Nationalist Poet",
    description: "Celebrated Awadhi folk poet known for blending rustic village dialects with patriotic fervor, communal brotherhood, and soulful devotion to Indian soil.",
    masterpieces: ["Awadhi Desh Gaan", "Mati Ki Mahak", "Kisan Jagriti Kavya"],
    referenceUrl: "https://www.google.com/search?q=Jumai+Khan+Azad+Awadhi+poet",
    accentBg: "border-[#14B8A6]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-rambhadracharya",
    name: "Jagatguru Rambhadracharya",
    hindiName: "जगद्गुरु रामभद्राचार्य",
    honorific: "Polymath & Awadhi Epic Composer • Padma Vibhushan",
    region: "Chitrakoot (UP)",
    category: "awadhi",
    era: "Living Polymath & Spiritual Master",
    description: "Sanskrit scholar and blind-from-infancy polymath who composed monumental modern epics in literary Awadhi, including 'Arundhati' and 'Raghav Geet Gunjan', reviving classical metrics.",
    masterpieces: ["Arundhati (अरुन्धती महाकाव्य)", "Raghav Geet Gunjan (राघव गीत गुंजन)", "Bhrikutidutam"],
    referenceUrl: "https://en.wikipedia.org/wiki/Rambhadracharya",
    accentBg: "border-[#F97316]/30 bg-[#15151C]"
  },

  // Bundelkhand Epic Bards & Masters of Phag
  {
    id: "pioneer-isuri",
    name: "Pandit Hariram Isuri (ईसुरी)",
    hindiName: "पंडित हरीराम ईसुरी",
    honorific: "The Jayadeva of Bundelkhand • Master of Chaukiya Phag",
    region: "Mauranipur, Jhansi (Bundelkhand)",
    category: "bundeli",
    era: "1841 – 1909",
    description: "Immortal folk genius who created the four-line Bundeli Phag (चौकड़िया फाग). His spontaneous, romantic, and deeply philosophical verses are sung in every village square across Bundelkhand during Holi and harvest.",
    masterpieces: ["Isuri Ki Phag (ईसुरी की फागें)", "Isuri Prakash", "Chaukiya Phag Samhita"],
    referenceUrl: "https://hi.wikipedia.org/wiki/%E0%A4%88%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A5%80",
    accentBg: "border-[#EC4899]/30 bg-[#15151C]"
  },
  {
    id: "pioneer-jagnik",
    name: "Jagnayak / Jagnik (जगनिक)",
    hindiName: "जगनिक (भाट कवि)",
    honorific: "Court Bard of Kalinjar • Composer of the Alha-Khand Epic",
    region: "Mahoba & Kalinjar (Bundelkhand)",
    category: "bundeli",
    era: "12th Century Bard",
    description: "Author of the heroic 52-battle martial folk epic 'Alha-Khand' (Parmal Raso), celebrating the unyielding valor of warriors Alha and Udal. Recited across North India to the thundering beat of the Nagariya during monsoon months.",
    masterpieces: ["Alha-Khand / Parmal Raso (आल्हा-खण्ड)", "52 Ladai Gatha", "Veer Ras Paridrishya"],
    referenceUrl: "https://hi.wikipedia.org/wiki/%E0%A4%9C%E0%A4%97%E0%A4%A8%E0%A4%BF%E0%A4%95",
    accentBg: "border-[#C0392B]/40 bg-[#15151C]"
  },
  {
    id: "pioneer-vrihadalayi-trio",
    name: "The Vrihadalayi Trio (वृहत्त्रयी)",
    hindiName: "गंगाधर व्यास, गुणसागर, ख्यालराम",
    honorific: "The Great Literary Trinity of Bundeli Folk",
    region: "Jhansi, Datia & Orchha (Bundelkhand)",
    category: "bundeli",
    era: "19th Century Masters",
    description: "The celebrated triumvirate of Gangadhar Vyas, Gunasagar, and Khyalram who codified Bundeli folk theatre, Khyal, Devi Jas, and Navratri temple chants, ensuring Bundeli poetic meters thrived for generations.",
    masterpieces: ["Gangadhar Vyas Padavali", "Gunasagar Phag Sangrah", "Khyalram Folk Samvad"],
    referenceUrl: "https://www.google.com/search?q=Bundeli+Vrihadalayi+Gangadhar+Vyas+Gunasagar+Khyalram",
    accentBg: "border-[#A855F7]/30 bg-[#15151C]"
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

export default function CreatorsPage() {
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const [previewTime, setPreviewTime] = React.useState(0);
  const [previewEndedId, setPreviewEndedId] = React.useState<string | null>(null);
  const [activeFilter, setActiveFilter] = React.useState<string>("all");
  const [pioneerFilter, setPioneerFilter] = React.useState<string>("all");
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

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
      }).catch((e) => console.warn(e));
    }
  };

  const filteredCreators = React.useMemo(() => {
    if (activeFilter === "all") return CREATORS_DATA;
    return CREATORS_DATA.filter((c) => c.dialectCategory === activeFilter || c.dialectCategory === "all");
  }, [activeFilter]);

  const filteredPioneers = React.useMemo(() => {
    if (pioneerFilter === "all") return HERITAGE_PIONEERS;
    return HERITAGE_PIONEERS.filter((p) => p.category === pioneerFilter);
  }, [pioneerFilter]);

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

      {/* Hero Header: Heritage Noir & Studio Bronze */}
      <section className="relative pt-36 pb-14 px-6 border-b border-white/10 bg-radial-[at_top_center] from-[#1A1A22] via-[#0B0B0E] to-[#0B0B0E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] tracking-wider uppercase mb-5">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>AUTHENTIC FOLK VOICES &amp; TIMELESS LITERARY LEGENDS</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-2 leading-tight">
                Top Regional Creators
              </h1>
              <div className="font-sans font-bold text-xl sm:text-3xl text-[#D4AF37] mb-4">
                हमारे शीर्ष क्षेत्रीय लोक कलाकार एवं अमर सांस्कृतिक धरोहर
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                Meet our real performing artists, vocal masters, and sound architects recording for Media Mafias, alongside the historic literary pioneers of Baghelkhand, Awadh, Bundelkhand, and Purvanchal who laid the bedrock of Indian folk.
              </p>
            </div>

            {/* Quick Stats in Bronze Glass */}
            <div className="bg-[#141419] border border-[#D4AF37]/30 p-4 rounded-xl flex gap-5 shrink-0 font-mono text-center shadow-lg shadow-black/50">
              <div>
                <div className="font-display font-black text-2xl text-[#D4AF37]">8</div>
                <div className="text-[10px] uppercase font-bold text-neutral-400">Core Roster</div>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <div className="font-display font-black text-2xl text-white">15+</div>
                <div className="text-[10px] uppercase font-bold text-neutral-400">Folk Pioneers</div>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <div className="font-display font-black text-2xl text-[#10B981]">150+</div>
                <div className="text-[10px] uppercase font-bold text-neutral-400">DSPs Distributed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ACTIVE PERFORMING ROSTER */}
      <section className="py-16 px-6 border-b border-white/10 bg-[#0E0E12]">
        <div className="max-w-6xl mx-auto">
          {/* Section Subheading */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-mono text-xs font-bold uppercase text-[#10B981] tracking-wider">
                  ACTIVE RECORDING ROSTER (रीवा, सतना, वाराणसी, अयोध्या)
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                Media Mafias Core Artists
              </h2>
              <p className="font-mono text-xs text-neutral-400 mt-1 max-w-2xl">
                Real performing artists with broadcast-grade master recordings. Stream 20s previews and official discography on Spotify &amp; YouTube.
              </p>
            </div>

            {/* Dialect Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All Artists (सभी)", value: "all" },
                { label: "Bagheli (बघेली)", value: "bagheli" },
                { label: "Awadhi (अवधी)", value: "awadhi" },
                { label: "Bundeli (बुंदेली)", value: "bundeli" },
                { label: "Contemporary Beats", value: "contemporary" }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`font-mono text-xs font-bold uppercase px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                    activeFilter === filter.value
                      ? "bg-[#D4AF37] text-black border-[#D4AF37] font-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                      : "bg-[#141419] text-neutral-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Creators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCreators.map((creator) => {
              const isPlaying = playingId === creator.id;

              return (
                <div
                  key={creator.id}
                  className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-5 flex flex-col justify-between transition-all group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    {/* Creator Header with Avatar & Region */}
                    <div className="flex items-start gap-3 mb-3.5 pb-3.5 border-b border-white/10">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${creator.avatarBg} flex items-center justify-center text-white font-display font-black text-xl shrink-0 shadow-md border border-white/10`}
                      >
                        {creator.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-display font-black text-base uppercase tracking-tight text-white truncate group-hover:text-[#D4AF37] transition-colors">
                            {creator.name}
                          </h3>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        </div>
                        <div className="font-sans font-bold text-xs text-[#D4AF37]">
                          {creator.hindiName}
                        </div>
                        <div className="flex items-center gap-1 font-mono text-[10px] text-neutral-400 mt-1">
                          <MapPin className="w-3 h-3 text-[#C0392B] shrink-0" />
                          <span className="truncate">{creator.region}</span>
                        </div>
                      </div>
                    </div>

                    {/* Role & Bio */}
                    <div className="font-mono text-[11px] font-bold text-neutral-300 mb-2">
                      {creator.role}
                    </div>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed mb-4">
                      {creator.bio}
                    </p>

                    {/* Notable Track Preview Box */}
                    <div className="bg-[#181820] border border-white/5 rounded-xl p-3 mb-4 space-y-2">
                      <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400">
                        <span className="flex items-center gap-1 text-[#D4AF37]">
                          <Music2 className="w-3 h-3" />
                          Notable Master
                        </span>
                        <span>{creator.catalogCount} Masters</span>
                      </div>
                      <div className="font-sans font-bold text-xs text-white truncate">
                        {creator.notableTrack}
                      </div>

                      {/* 20s Audio Player */}
                      <button
                        onClick={() => handleTogglePlay(creator.id, creator.audioSrc)}
                        className={`w-full py-2 px-3 rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isPlaying
                            ? "bg-[#C0392B] text-white shadow-[0_0_15px_rgba(192,57,43,0.4)]"
                            : "bg-[#202028] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30"
                        }`}
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5 fill-current" />
                            <span>Pause ({previewTime}s / {AUDIO_PREVIEW_DURATION}s)</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>20s Audio Preview</span>
                          </>
                        )}
                      </button>

                      {isPlaying && (
                        <div className="w-full bg-neutral-800 rounded-full h-1 overflow-hidden">
                          <div
                            className="bg-[#D4AF37] h-full transition-all duration-200"
                            style={{ width: `${(previewTime / AUDIO_PREVIEW_DURATION) * 100}%` }}
                          />
                        </div>
                      )}

                      {previewEndedId === creator.id && !isPlaying && (
                        <div className="text-[10px] font-mono text-[#10B981] text-center pt-1">
                          ✓ 20s preview finished • Stream full track on Spotify
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Outbound Links */}
                  <div className="pt-2 border-t border-white/5">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={SPOTIFY_ARTIST_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 bg-[#181820] hover:bg-[#1DB954] hover:text-black border border-white/10 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 text-neutral-300 transition-colors"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5" />
                        <span>Spotify</span>
                      </a>
                      <a
                        href={YOUTUBE_OAC_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 bg-[#181820] hover:bg-[#C0392B] hover:text-white border border-white/10 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 text-neutral-300 transition-colors"
                      >
                        <YoutubeIcon className="w-3.5 h-3.5" />
                        <span>YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: CULTURAL HERITAGE PIONEERS & LITERARY LEGENDS */}
      <section className="py-16 px-6 bg-[#0B0B0E] flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3.5 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>TIMELESS HERITAGE &amp; FOLK LITERARY GUARDIANS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2">
              Cultural Heritage Pioneers
            </h2>
            <div className="font-sans font-bold text-lg sm:text-2xl text-[#D4AF37] mb-3">
              सांस्कृतिक धरोहर, लोक प्रवर्तक एवं अमर साहित्यकार
            </div>
            <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
              We pay homage to the legendary poets, bards, and bidesiya playwrights of the Indo-Gangetic heartland — from Bhikhari Thakur and Sharda Sinha to Isuri, Tulsidas, and Shri Nivas Shukla 'Saras' — whose immortal verses form the sacred foundation of Media Mafias.
            </p>

            {/* Region / Category Filter */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                { label: "All Heritage Legends (सभी)", value: "all" },
                { label: "Bhojpuri & Purvanchal (भोजपुरी)", value: "bhojpuri" },
                { label: "Baghelkhand (बघेलखंड)", value: "bagheli" },
                { label: "Awadh (अवध)", value: "awadhi" },
                { label: "Bundelkhand (बुंदेलखंड)", value: "bundeli" }
              ].map((pFilter) => (
                <button
                  key={pFilter.value}
                  onClick={() => setPioneerFilter(pFilter.value)}
                  className={`font-mono text-xs font-bold uppercase px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                    pioneerFilter === pFilter.value
                      ? "bg-[#D4AF37] text-black border-[#D4AF37] font-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                      : "bg-[#141419] text-neutral-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
                  }`}
                >
                  {pFilter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pioneers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredPioneers.map((pioneer) => (
              <div
                key={pioneer.id}
                className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 flex flex-col justify-between transition-all group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Top Badge: Category & Era */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/10">
                    <span className="font-mono text-[10px] font-bold uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded">
                      {pioneer.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      {pioneer.era}
                    </span>
                  </div>

                  {/* Name in English & Hindi */}
                  <div className="mb-2">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                      {pioneer.name}
                    </h3>
                    <div className="font-sans font-bold text-base text-[#D4AF37]">
                      {pioneer.hindiName}
                    </div>
                  </div>

                  {/* Honorific & Region */}
                  <div className="space-y-1 mb-3">
                    <div className="font-mono text-xs font-bold text-neutral-300">
                      {pioneer.honorific}
                    </div>
                    <div className="flex items-center gap-1 font-mono text-[10px] text-neutral-400">
                      <MapPin className="w-3 h-3 text-[#C0392B] shrink-0" />
                      <span>{pioneer.region}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-neutral-300 leading-relaxed mb-4">
                    {pioneer.description}
                  </p>

                  {/* Masterpieces List */}
                  <div className="bg-[#181820] border border-white/5 rounded-xl p-3 mb-4 space-y-1.5">
                    <div className="font-mono text-[10px] font-bold uppercase text-[#D4AF37] flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>Key Masterpieces &amp; Verses:</span>
                    </div>
                    <ul className="space-y-1">
                      {pioneer.masterpieces.map((work, idx) => (
                        <li key={idx} className="font-mono text-[11px] text-neutral-300 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                          <span>{work}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Cultural Archive Link */}
                <a
                  href={pioneer.referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-[#181820] hover:bg-[#D4AF37] hover:text-black border border-white/10 rounded-lg font-mono font-bold text-[11px] uppercase flex items-center justify-center gap-1.5 text-neutral-300 transition-colors"
                >
                  <span>Explore Cultural Archive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
