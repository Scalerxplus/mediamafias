"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Sparkles,
  Play,
  Pause,
  ExternalLink,
  CheckCircle2,
  Mic2,
  Music4,
  Award,
  MapPin,
  BookOpen,
  Scroll,
  Landmark,
  Radio,
  Flame,
  Volume2
} from "lucide-react";
import { getAudioUrl, SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL } from "@/lib/audio";

interface Creator {
  id: string;
  name: string;
  hindiName: string;
  region: string;
  dialect: string;
  dialectCategory: "all" | "bagheli" | "awadhi" | "bundeli" | "contemporary";
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
    avatarBg: "from-[#F59E0B] to-[#D97706]"
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
    avatarBg: "from-[#EC4899] to-[#BE185D]"
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
    avatarBg: "from-[#3B82F6] to-[#1D4ED8]"
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
    avatarBg: "from-[#10B981] to-[#047857]"
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
    avatarBg: "from-[#FF2E2E] to-[#991B1B]"
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
    avatarBg: "from-[#F97316] to-[#C2410C]"
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
    avatarBg: "from-[#8B5CF6] to-[#6D28D9]"
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
    avatarBg: "from-[#00E5FF] to-[#0284C7]"
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
    accentBg: "bg-[#FFEDD5] border-[#EA580C]"
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
    accentBg: "bg-[#FEE2E2] border-[#DC2626]"
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
    accentBg: "bg-[#FEF3C7] border-[#D97706]"
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
    accentBg: "bg-[#E0E7FF] border-[#4F46E5]"
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
    accentBg: "bg-[#DCFCE7] border-[#16A34A]"
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
    accentBg: "bg-[#F3E8FF] border-[#9333EA]"
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
    accentBg: "bg-[#FFE4E6] border-[#E11D48]"
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
    accentBg: "bg-[#CFFAFE] border-[#0891B2]"
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
    accentBg: "bg-[#FEF08A] border-[#CA8A04]"
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
    accentBg: "bg-[#E0F2FE] border-[#0284C7]"
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
    accentBg: "bg-[#EDE9FE] border-[#7C3AED]"
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
    accentBg: "bg-[#CCFBF1] border-[#0D9488]"
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
    accentBg: "bg-[#FFEDD5] border-[#EA580C]"
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
    accentBg: "bg-[#FBCFE8] border-[#DB2777]"
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
    accentBg: "bg-[#FED7AA] border-[#C2410C]"
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
    accentBg: "bg-[#DDD6FE] border-[#6D28D9]"
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
  const [activeFilter, setActiveFilter] = React.useState<string>("all");
  const [pioneerFilter, setPioneerFilter] = React.useState<string>("all");
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = (id: string, audioSrc: string) => {
    if (!audioRef.current) return;
    if (playingId === id) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      audioRef.current.src = getAudioUrl(audioSrc);
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
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      <audio ref={audioRef} preload="none" onEnded={() => setPlayingId(null)} />

      {/* Hero Header */}
      <section className="pt-36 pb-12 px-6 border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-2 border-black px-3.5 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
            <Award className="w-3.5 h-3.5 text-black" />
            <span>AUTHENTIC FOLK VOICES &amp; TIMELESS LITERARY LEGENDS</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black mb-2">
                Top Regional Creators
              </h1>
              <div className="font-sans font-bold text-lg sm:text-2xl text-[#FF2E2E] mb-3">
                (हमारे शीर्ष क्षेत्रीय लोक कलाकार एवं अमर सांस्कृतिक धरोहर)
              </div>
              <p className="font-mono text-xs sm:text-sm text-neutral-700 max-w-2xl leading-relaxed">
                Meet our real performing artists, vocal masters, and sound architects who record authentic regional music for Media Mafias, alongside the historic literary pioneers of Baghelkhand, Awadh, Bundelkhand, and Purvanchal who laid the bedrock of Indian folk.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#FED7AA] border-3 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_#000] flex gap-5 shrink-0 font-mono text-center">
              <div>
                <div className="font-display font-black text-2xl text-black">8</div>
                <div className="text-[10px] uppercase font-bold text-neutral-700">Active Roster</div>
              </div>
              <div className="w-[2px] bg-black/20" />
              <div>
                <div className="font-display font-black text-2xl text-black">15+</div>
                <div className="text-[10px] uppercase font-bold text-neutral-700">Folk Pioneers</div>
              </div>
              <div className="w-[2px] bg-black/20" />
              <div>
                <div className="font-display font-black text-2xl text-black">150+</div>
                <div className="text-[10px] uppercase font-bold text-neutral-700">DSPs Distributed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ACTIVE PERFORMING ROSTER */}
      <section className="py-14 px-6 border-b-4 border-black bg-[#FAF5FF]">
        <div className="max-w-6xl mx-auto">
          {/* Section Subheading */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-mono text-xs font-black uppercase text-[#10B981]">
                  ACTIVE RECORDING ROSTER
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-black">
                Media Mafias Core Artists
              </h2>
              <p className="font-mono text-xs text-neutral-600 mt-1">
                Live regional master recordings with high-fidelity Cloudflare R2 streaming preview &amp; official Spotify profiles.
              </p>
            </div>

            {/* Dialect Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "All Artists", value: "all" },
                { label: "Bagheli", value: "bagheli" },
                { label: "Awadhi", value: "awadhi" },
                { label: "Bundeli", value: "bundeli" },
                { label: "Contemporary / Beats", value: "contemporary" }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`font-mono text-xs font-bold uppercase px-3 py-1.5 rounded-lg border-2 border-black transition-all cursor-pointer ${
                    activeFilter === filter.value
                      ? "bg-[#E5FF00] shadow-[2px_2px_0px_0px_#000] -translate-y-0.5"
                      : "bg-white hover:bg-neutral-100 shadow-[1px_1px_0px_0px_#000]"
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
                  className="bg-white border-4 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
                >
                  <div>
                    {/* Creator Header with Avatar & Region */}
                    <div className="flex items-start gap-3 mb-3 pb-3 border-b-2 border-black/10">
                      <div
                        className={`w-12 h-12 rounded-xl border-3 border-black bg-gradient-to-br ${creator.avatarBg} flex items-center justify-center text-white font-display font-black text-xl shrink-0 shadow-[2px_2px_0px_0px_#000]`}
                      >
                        {creator.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <h3 className="font-display font-black text-base uppercase tracking-tight text-black truncate">
                            {creator.name}
                          </h3>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        </div>
                        <div className="font-sans font-bold text-xs text-[#FF2E2E]">
                          {creator.hindiName}
                        </div>
                        <div className="flex items-center gap-1 font-mono text-[10px] text-neutral-600 mt-0.5">
                          <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                          <span className="truncate">{creator.region}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dialect & Catalog Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      <span className="font-mono text-[9px] font-black uppercase bg-[#00E5FF] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                        {creator.dialect}
                      </span>
                      <span className="font-mono text-[9px] font-bold bg-neutral-100 border border-black/20 px-2 py-0.5 rounded text-neutral-700">
                        {creator.catalogCount} Tracks
                      </span>
                    </div>

                    <div className="font-mono text-[11px] font-bold text-neutral-900 mb-1">
                      {creator.role}
                    </div>

                    <p className="font-mono text-[11px] text-neutral-700 leading-relaxed mb-4 line-clamp-4">
                      {creator.bio}
                    </p>
                  </div>

                  {/* Representative Track Audio Player & External Links */}
                  <div className="space-y-2.5 pt-3 border-t-2 border-black/10">
                    <div className="bg-[#FED7AA] border-2 border-black p-2.5 rounded-xl flex items-center justify-between gap-2 shadow-[2px_2px_0px_0px_#000]">
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] font-mono font-bold uppercase text-neutral-700 flex items-center gap-1">
                          <Volume2 className="w-3 h-3" />
                          <span>R2 Preview</span>
                        </div>
                        <div className="font-display font-black text-[11px] uppercase truncate text-black">
                          {creator.notableTrack}
                        </div>
                      </div>
                      <button
                        onClick={() => handleTogglePlay(creator.id, creator.audioSrc)}
                        className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-transform active:scale-95 ${
                          isPlaying ? "bg-[#FF2E2E] text-white" : "bg-[#E5FF00] text-black"
                        }`}
                        aria-label={`Play track by ${creator.name}`}
                      >
                        {isPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <a
                        href={SPOTIFY_ARTIST_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 bg-white hover:bg-[#1DB954] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[9px] uppercase flex items-center justify-center gap-1 shadow-[1.5px_1.5px_0px_0px_#000] transition-colors"
                      >
                        <SpotifyIcon className="w-3 h-3 fill-current" />
                        <span>Spotify</span>
                      </a>

                      <a
                        href={YOUTUBE_OAC_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2 bg-white hover:bg-[#FF2E2E] hover:text-white border-2 border-black rounded-lg font-mono font-bold text-[9px] uppercase flex items-center justify-center gap-1 shadow-[1.5px_1.5px_0px_0px_#000] transition-colors"
                      >
                        <YoutubeIcon className="w-3 h-3 fill-current" />
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
      <section className="py-16 px-6 bg-[#C4B5FD] flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-black text-[#E5FF00] border-2 border-black px-3.5 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#fff] mb-3">
              <Landmark className="w-3.5 h-3.5 text-[#E5FF00]" />
              <span>TIMELESS HERITAGE &amp; FOLK LITERARY GUARDIANS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-black mb-2">
              Cultural Heritage Pioneers
            </h2>
            <div className="font-sans font-bold text-lg sm:text-2xl text-[#6B21A8] mb-3">
              (सांस्कृतिक धरोहर एवं अमर साहित्यकार)
            </div>
            <p className="font-mono text-xs sm:text-sm text-neutral-800 max-w-3xl leading-relaxed">
              We pay homage to the legendary poets, bards, and bidesiya playwrights of the Indo-Gangetic heartland — from Bhikhari Thakur and Sharda Sinha to Isuri and Tulsidas — whose immortal verses and folk traditions form the sacred foundation of Media Mafias.
            </p>

            {/* Region / Category Filter */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                { label: "All Heritage Legends", value: "all" },
                { label: "Bhojpuri & Purvanchal", value: "bhojpuri" },
                { label: "Baghelkhand", value: "bagheli" },
                { label: "Awadh", value: "awadhi" },
                { label: "Bundelkhand", value: "bundeli" }
              ].map((pFilter) => (
                <button
                  key={pFilter.value}
                  onClick={() => setPioneerFilter(pFilter.value)}
                  className={`font-mono text-xs font-bold uppercase px-3.5 py-2 rounded-xl border-3 border-black transition-all cursor-pointer ${
                    pioneerFilter === pFilter.value
                      ? "bg-black text-[#E5FF00] shadow-[3px_3px_0px_0px_#fff] -translate-y-0.5"
                      : "bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_0px_#000]"
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
                className={`border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all bg-white`}
              >
                <div>
                  {/* Top Badge: Category & Era */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b-2 border-black/10">
                    <span className="font-mono text-[10px] font-black uppercase bg-[#E5FF00] border-2 border-black px-2.5 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                      {pioneer.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-neutral-600 bg-neutral-100 border border-black/20 px-2 py-0.5 rounded">
                      {pioneer.era}
                    </span>
                  </div>

                  {/* Name in English & Hindi */}
                  <div className="mb-2">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black leading-tight">
                      {pioneer.name}
                    </h3>
                    <div className="font-sans font-black text-base text-[#FF2E2E]">
                      {pioneer.hindiName}
                    </div>
                  </div>

                  {/* Honorific / Title */}
                  <div className="inline-block font-mono text-xs font-black text-[#1E3A8A] bg-[#DBEAFE] border border-blue-900/30 px-2 py-1 rounded mb-3">
                    {pioneer.honorific}
                  </div>

                  {/* Origin */}
                  <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-600 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>{pioneer.region}</span>
                  </div>

                  {/* Bio / Description */}
                  <p className="font-mono text-xs text-neutral-700 leading-relaxed mb-4">
                    {pioneer.description}
                  </p>

                  {/* Masterpieces */}
                  <div className="mb-4 bg-neutral-50 border-2 border-black/20 p-3 rounded-xl">
                    <div className="font-mono text-[10px] font-bold uppercase text-neutral-600 mb-1.5 flex items-center gap-1">
                      <Scroll className="w-3 h-3" />
                      <span>Immortal Works &amp; Legacy:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pioneer.masterpieces.map((work, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] font-bold bg-white border border-black/30 px-2 py-0.5 rounded text-neutral-900 shadow-[1px_1px_0px_0px_#000]"
                        >
                          {work}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reference Link */}
                <div className="pt-3 border-t-2 border-black/10">
                  <a
                    href={pioneer.referenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-neutral-100 hover:bg-[#E5FF00] border-2 border-black rounded-lg font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000] transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Historical Archive / Bio</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-neutral-500" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Join Academy Banner */}
          <div className="bg-[#E5FF00] border-4 border-black p-8 sm:p-10 rounded-2xl shadow-[8px_8px_0px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-black uppercase bg-black text-[#E5FF00] px-3 py-1 rounded border-2 border-black mb-3 inline-block">
                ARE YOU A FOLK SINGER OR LYRICIST?
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-black mb-2">
                Join Academy of Folk Music &amp; Heritage
              </h2>
              <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed">
                Pay a one-time ₹499 membership fee to become a lifetime verified member of the Media Mafias artist catalog. Submit your raw mobile vocals via WhatsApp, receive broadcast LUFS mastering, and get distributed to Spotify, Apple Music &amp; 150+ DSPs with 80% direct royalties.
              </p>
            </div>

            <Link
              href="/academy"
              className="bg-black hover:bg-neutral-900 text-white font-mono font-black text-sm uppercase px-8 py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] shrink-0 flex items-center gap-2 hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#E5FF00]" />
              <span>Enroll For ₹499 ➔</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
