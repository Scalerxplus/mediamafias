"use client";

import * as React from "react";
import Link from "next/link";
import { Disc3, FileText, Sparkles, ListMusic } from "lucide-react";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { JioSaavnIcon } from "@/components/icons/JioSaavnIcon";
import { SPOTIFY_OAC_BASE, YOUTUBE_OAC_BASE, JIOSAAVN_SEARCH_BASE } from "@/data/playlists";

interface Track {
  id: string;
  title: string;
  hindiTitle: string;
  dialect: string;
  genre: string;
  bpm: number;
  description: string;
  youtubeUrl: string;
  youtubeVideoId?: string;
  thumbnailUrl?: string;
  spotifyUrl: string;
  jiosaavnUrl: string;
  lyricsVaultSlug?: string;
  coverBg?: string;
}

const YoutubeIcon = ({ className = "w-3.5 h-3.5 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SpotifyIcon = ({ className = "w-3.5 h-3.5 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const CATEGORIES: Record<string, { label: string; hindiLabel: string; desc: string; playlistHref: string; tracks: Track[] }> = {
  "wedding-mandap": {
    label: "Vivah Geet & Mandap",
    hindiLabel: "विवाह संस्कार एवं शादी गीत",
    desc: "100% प्रामाणिक शादी के रस्मी गीत: दुआचार, परछन, बन्ना-बन्नी, करहबा व विदाई।",
    playlistHref: "/playlists/desi-wedding-vivah-geet",
    tracks: [
      {
        id: "wm-1",
        title: "Duarchaar (Leen Dhanush Banna)",
        hindiTitle: "लीन धनुष बन्ना ठाढ़ो री - दुआचार गीत",
        dialect: "Bagheli / Awadhi",
        genre: "Vivah Duarchaar",
        bpm: 92,
        description: "मर्यादा पुरुषोत्तम श्रीराम के स्वरूप में द्वार पर उपस्थित दूल्हे के स्वागत व कलगी-मौर शृंगार का मांगलिक दुआचार गीत।",
        youtubeVideoId: "GwUH0hQkVqg",
        youtubeUrl: "https://www.youtube.com/watch?v=GwUH0hQkVqg",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Leen%20Dhanush%20Banna%20Media%20Mafias`,
        lyricsVaultSlug: "duarchaar-geet",
        coverBg: "from-[#991B1B] to-[#450A0A]"
      },
      {
        id: "wm-2",
        title: "Banna Banni (Ram Banra Ban Aayo)",
        hindiTitle: "मोरे दशरथ राज दुलार आज बनरा बन आयो रे",
        dialect: "Bagheli",
        genre: "Banna Banni",
        bpm: 114,
        description: "राजसी शहनाई, सजीव ढोलक और मंजीरे की तेज थाप पर जनकपुर में श्रीराम के दूल्हा बनकर आगमन का उल्लास गीत।",
        youtubeVideoId: "g492vR-B2uc",
        youtubeUrl: "https://www.youtube.com/watch?v=g492vR-B2uc",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Ram%20Banra%20Ban%20Aayo%20Re%20Media%20Mafias`,
        lyricsVaultSlug: "banna-banni-geet",
        coverBg: "from-[#831843] to-[#500724]"
      },
      {
        id: "wm-3",
        title: "Parchhan (Biyah Laye Raghubar)",
        hindiTitle: "ब्याह लाए रघुबर सीता सिया - परछन गीत",
        dialect: "Heartland Vivah",
        genre: "Parchhan Rites",
        bpm: 88,
        description: "बारात व दूल्हे के आगमन पर आरती एवं परछन की रस्म का आत्मीय व मांगलिक संस्कार गीत।",
        youtubeVideoId: "SDJHOUd1Kv8",
        youtubeUrl: "https://www.youtube.com/watch?v=SDJHOUd1Kv8",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Biyah%20Laye%20Raghubar%20Media%20Mafias`,
        lyricsVaultSlug: "parchhan-geet",
        coverBg: "from-[#701A75] to-[#4A044E]"
      },
      {
        id: "wm-4",
        title: "Karahba (Poori Belan Belanhai)",
        hindiTitle: "करहबा - माटी कोड़न व पूड़ी बेलन रस्म",
        dialect: "Awadhi / Bagheli",
        genre: "Karahba Folk",
        bpm: 96,
        description: "विवाह के मंडप में पूड़ी बेलने और चूल्हा पूजा की पारंपरिक हंसी-ठिठोली का ढोलक प्रधान लोकगीत।",
        youtubeVideoId: "sES3vOLL4fQ",
        youtubeUrl: "https://www.youtube.com/watch?v=sES3vOLL4fQ",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Karahba%20Media%20Mafias`,
        lyricsVaultSlug: "karahba-geet",
        coverBg: "from-[#7C2D12] to-[#451A03]"
      }
    ]
  },
  "mahila-sangeet": {
    label: "Mahila Sangeet & Dance",
    hindiLabel: "महिला संगीत व शादी डांस",
    desc: "पारंपरिक ढोलक-मंजीरा बीट्स के साथ हाई-एनर्जी शादी डांस व संगीत लोकगीत।",
    playlistHref: "/playlists/mahila-sangeet-dance-geet",
    tracks: [
      {
        id: "ms-1",
        title: "Mahua Ujari Ga (Nachanhai Dance)",
        hindiTitle: "महुआ उजारी गा - देसी शादी डांस",
        dialect: "Bagheli",
        genre: "Desi Sangeet Dance",
        bpm: 124,
        description: "गाँव-जवार की शादी और महिला संगीत में सबसे ज्यादा बजने वाला हाई-एनर्जी ढोलक लोकगीत।",
        youtubeVideoId: "OQZ4VOtW_ms",
        youtubeUrl: "https://www.youtube.com/watch?v=OQZ4VOtW_ms",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Mahua%20Ujari%20Ga%20Media%20Mafias`,
        lyricsVaultSlug: "mahua-ujari-ga",
        coverBg: "from-[#B45309] to-[#78350F]"
      },
      {
        id: "ms-2",
        title: "Rasiya (Sangeet Thumka)",
        hindiTitle: "रसिया - महिला संगीत थुमका",
        dialect: "Bagheli / Bundeli",
        genre: "Folk Dance Pop",
        bpm: 120,
        description: "आधुनिक बास और सजीव ढोलक के अद्भुत मिश्रण पर रचित महिलाओं का चहेता डांस ट्रैक।",
        youtubeVideoId: "mWIWMUFkjHw",
        youtubeUrl: "https://www.youtube.com/watch?v=mWIWMUFkjHw",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Rasiya%20Media%20Mafias`,
        lyricsVaultSlug: "rasiya",
        coverBg: "from-[#BE123C] to-[#881337]"
      },
      {
        id: "ms-3",
        title: "Sainya Na Aaye (Bhabhi-Nanad)",
        hindiTitle: "सइयां न आए - भाभी ननद संवाद",
        dialect: "Awadhi / Bagheli",
        genre: "Rustic Vivah Groove",
        bpm: 112,
        description: "शादी के आंगन में भाभी और ननद के बीच मीठी नोकझोंक पर आधारित पारंपरिक गीत।",
        youtubeVideoId: "6muAW-JQykk",
        youtubeUrl: "https://www.youtube.com/watch?v=6muAW-JQykk",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Sainya%20Na%20Aaye%20Media%20Mafias`,
        lyricsVaultSlug: "sainya-na-aaye",
        coverBg: "from-[#9D174D] to-[#500724]"
      },
      {
        id: "ms-4",
        title: "Gulabi Chunariya",
        hindiTitle: "गुलाबी चुनरिया - मेहंदी व हल्दी गीत",
        dialect: "Heartland Folk",
        genre: "Mehndi Sangeet",
        bpm: 116,
        description: "हल्दी और मेहंदी की रस्म पर सखियों द्वारा गाया जाने वाला शृंगारिक व उल्लासपूर्ण लोकगीत।",
        youtubeVideoId: "tdrpJg_IRmU",
        youtubeUrl: "https://www.youtube.com/watch?v=tdrpJg_IRmU",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Gulabi%20Chunariya%20Media%20Mafias`,
        lyricsVaultSlug: "gulabi-chunariya",
        coverBg: "from-[#C2410C] to-[#7C2D12]"
      }
    ]
  },
  "bagheli": {
    label: "Bagheli Folk & Sohar",
    hindiLabel: "बघेली लोकगीत एवं सोहर",
    desc: "रीवा, सतना, सीधी, शहडोल और मैहर की सदियों पुरानी विशुद्ध बघेली विरासत।",
    playlistHref: "/playlists/bagheli-lokgeet-sohar",
    tracks: [
      {
        id: "bagh-1",
        title: "Ehi Angana Ma (Sohar Dadra)",
        hindiTitle: "एही अँगना म लाखन लुटाई देब - सोहर दादरा",
        dialect: "Bagheli",
        genre: "Sohar / Dadra",
        bpm: 96,
        description: "संतान जन्मोत्सव का सबसे पवित्र व पारंपरिक बघेली सोहर दादरा, हारमोनियम व ढोलक पर सजीव रिकॉर्डेड।",
        youtubeVideoId: "ExMplqEjARg",
        youtubeUrl: "https://www.youtube.com/watch?v=ExMplqEjARg",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Ehi%20Angana%20Ma%20Media%20Mafias`,
        lyricsVaultSlug: "sohar-geet",
        coverBg: "from-[#D97706] to-[#78350F]"
      },
      {
        id: "bagh-2",
        title: "More Raja (Celebration Folk)",
        hindiTitle: "मोरे राजा - बघेली लोकगीत",
        dialect: "Bagheli",
        genre: "Folk Pop",
        bpm: 118,
        description: "रीवा अंचल का पारंपरिक उल्लास गीत, विंध्य की सोंधी खुशबू और ब्रास-ढोलक की तेज रिदम।",
        youtubeVideoId: "WjhZf59gKEY",
        youtubeUrl: "https://www.youtube.com/watch?v=WjhZf59gKEY",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}More%20Raja%20Media%20Mafias`,
        lyricsVaultSlug: "banna-banni-geet",
        coverBg: "from-[#B45309] to-[#78350F]"
      },
      {
        id: "bagh-3",
        title: "Jal Bharao Hilore (Kuan Pujan)",
        hindiTitle: "जल भराव हिलोरे (कुंआ पूजन सोहर)",
        dialect: "Bagheli",
        genre: "Pastoral Country Folk",
        bpm: 104,
        description: "विंध्य अंचल के तालाबों और कुओं के किनारे पानी भरने व कुंआ पूजन के समय गाई जाने वाली मधुर धुन।",
        youtubeVideoId: "hgnmRM8hZ8A",
        youtubeUrl: "https://www.youtube.com/watch?v=hgnmRM8hZ8A",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Jal%20Bharao%20Hilore%20Media%20Mafias`,
        coverBg: "from-[#0F766E] to-[#134E4A]"
      },
      {
        id: "bagh-4",
        title: "Lakhan Lutai Deb (Female Mandali)",
        hindiTitle: "लाखन लुटाई देब - सोहर दादरा",
        dialect: "Bagheli",
        genre: "Traditional Sohar",
        bpm: 94,
        description: "विशुद्ध बघेली महिला मंडली द्वारा गाया गया पारंपरिक जन्मोत्सव बधाई गीत।",
        youtubeVideoId: "vXGNtV3JYYg",
        youtubeUrl: "https://www.youtube.com/watch?v=vXGNtV3JYYg",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Lakhan%20Lutai%20Deb%20Media%20Mafias`,
        coverBg: "from-[#854D0E] to-[#422006]"
      }
    ]
  },
  "devi-bhakti": {
    label: "Devi Jas & Bhakti",
    hindiLabel: "देवी जस, पचरा व आल्हा भजन",
    desc: "शारदा भवानी मैहर, विंध्यवासिनी और शीतला माता के पारंपरिक जस व पचरा।",
    playlistHref: "/playlists/devi-jas-bhakti-geet",
    tracks: [
      {
        id: "db-1",
        title: "Amwa Ki Daar (Devi Jhoola Geet)",
        hindiTitle: "झूला डरा है अमवा कै डार पे माँ - देवी झूला",
        dialect: "Bagheli / Awadhi",
        genre: "Devi Jhoola Geet",
        bpm: 100,
        description: "माता रानी के झूले और नीम की छांव पर 15 महिलाओं की मंडली द्वारा गाया गया पारंपरिक देवी झूला गीत।",
        youtubeVideoId: "3C1hoEGVRy8",
        youtubeUrl: "https://www.youtube.com/watch?v=3C1hoEGVRy8",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Amwa%20Ki%20Daar%20Media%20Mafias`,
        lyricsVaultSlug: "devi-jhoola-geet",
        coverBg: "from-[#DC2626] to-[#7F1D1D]"
      },
      {
        id: "db-2",
        title: "Jagannath Raksha Stotram",
        hindiTitle: "जगन्नाथ रक्ष माम् (शाश्वत स्तुति)",
        dialect: "Sanskrit Devotional",
        genre: "Sacred Stotram",
        bpm: 72,
        description: "भगवान जगन्नाथ का शाश्वत वैदिक स्तोत्र, शांत तानपूरे व सजीव मंजीरे के साथ ध्यानमग्न प्रस्तुति।",
        youtubeVideoId: "YsxZRxp06zY",
        youtubeUrl: "https://www.youtube.com/watch?v=YsxZRxp06zY",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Jagannath%20Raksha%20Media%20Mafias`,
        coverBg: "from-[#991B1B] to-[#450A0A]"
      },
      {
        id: "db-3",
        title: "Chadariya Jheeni (Nirgun Kabir)",
        hindiTitle: "चदरिया झीनी रे बीनी - निर्गुण भजन",
        dialect: "Sant Bhasha",
        genre: "Nirgun Kabir Bhajan",
        bpm: 80,
        description: "संत कबीर का कालजयी दर्शन, मनुष्य देह की नश्वरता और आत्मिक शांति का आत्मीय लोक भजन।",
        youtubeVideoId: "jD7URyO0J2M",
        youtubeUrl: "https://www.youtube.com/watch?v=jD7URyO0J2M",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Chadariya%20Jheeni%20Media%20Mafias`,
        coverBg: "from-[#7F1D1D] to-[#450A0A]"
      },
      {
        id: "db-4",
        title: "Ram Gaadi Wale (Nirgun Bhajan)",
        hindiTitle: "राम गाड़ी वाले - निर्गुण भजन",
        dialect: "Folk Devotional",
        genre: "Nirgun Bhajan",
        bpm: 78,
        description: "जीवन यात्रा और मुक्ति का रूपक, विंध्य अंचल के सन्यासी गायकों की आध्यात्मिक वाणी।",
        youtubeVideoId: "CHSPDEt3Uoo",
        youtubeUrl: "https://www.youtube.com/watch?v=CHSPDEt3Uoo",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Ram%20Gaadi%20Wale%20Media%20Mafias`,
        coverBg: "from-[#9A3412] to-[#431407]"
      }
    ]
  },
  "bundeli-awadhi": {
    label: "Bundeli & Awadhi Folk",
    hindiLabel: "बुंदेली राई एवं अवधी कजरी",
    desc: "बुंदेलखंड के वीर रस और अवध की वर्षा कजरी व सोहर का अनुपम संग्रह।",
    playlistHref: "/playlists/bundeli-lokgeet-rai",
    tracks: [
      {
        id: "ba-1",
        title: "Badariya Kari Re Hari (Monsoon)",
        hindiTitle: "बदरिया कारी रे हरी (बुंदेली भाव)",
        dialect: "Bundeli",
        genre: "Veer Ras / Monsoon",
        bpm: 112,
        description: "बुंदेलखंड का वर्षा ऋतु गीत, घनघोर बादलों और मिट्टी की गंध को समेटे सजीव ढोलक थाप।",
        youtubeVideoId: "85EbahRiYWI",
        youtubeUrl: "https://www.youtube.com/watch?v=85EbahRiYWI",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Badariya%20Kari%20Re%20Hari%20Media%20Mafias`,
        coverBg: "from-[#1E3A8A] to-[#172554]"
      },
      {
        id: "ba-2",
        title: "Bagiya Ma Aaye Bhagwan (Kajari)",
        hindiTitle: "बगिया म आए भगवान - कजरी",
        dialect: "Awadhi",
        genre: "Monsoon Kajri",
        bpm: 88,
        description: "मिर्जापुर और वाराणसी की सावन कजरी, झूला झूलती सखियों के भक्तिभाव का मधुर चित्रण।",
        youtubeVideoId: "SgKgK92O46s",
        youtubeUrl: "https://www.youtube.com/watch?v=SgKgK92O46s",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Bagiya%20Ma%20Aaye%20Bhagwan%20Media%20Mafias`,
        coverBg: "from-[#065F46] to-[#064E3B]"
      },
      {
        id: "ba-3",
        title: "Garda Udaay Deb (Bundeli Josh)",
        hindiTitle: "गरदा उड़ाय देब (देसी बुंदेली जोश)",
        dialect: "Bundeli",
        genre: "Rustic Folk Anthem",
        bpm: 120,
        description: "बुंदेली माटी का अक्खड़ स्वाभिमान और अखाड़े की ऊर्जा समेटे जोशीला लोक एंथम।",
        youtubeVideoId: "GwUH0hQkVqg",
        youtubeUrl: "https://www.youtube.com/watch?v=GwUH0hQkVqg",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Garda%20Udaay%20Deb%20Media%20Mafias`,
        coverBg: "from-[#831843] to-[#500724]"
      },
      {
        id: "ba-4",
        title: "Dhan Dhan Nagar Ayodhya (Sohar)",
        hindiTitle: "धन धन नगर अयोध्या - सोहर",
        dialect: "Awadhi",
        genre: "Awadhi Sohar",
        bpm: 92,
        description: "अयोध्या धाम में प्रभु श्रीराम के जन्मोत्सव पर गाए जाने वाला आनंदमय पारंपरिक सोहर।",
        youtubeVideoId: "CHSPDEt3Uoo",
        youtubeUrl: "https://www.youtube.com/watch?v=CHSPDEt3Uoo",
        spotifyUrl: SPOTIFY_OAC_BASE,
        jiosaavnUrl: `${JIOSAAVN_SEARCH_BASE}Dhan%20Dhan%20Nagar%20Ayodhya%20Media%20Mafias`,
        coverBg: "from-[#C2410C] to-[#7C2D12]"
      }
    ]
  }
};

export const SoundscapeGrid = () => {
  const [activeTab, setActiveTab] = React.useState<string>("wedding-mandap");

  const currentCategory = CATEGORIES[activeTab] || CATEGORIES["wedding-mandap"];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#0B0B0E] border-b border-white/10 text-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase text-amber-300 mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Disc3 className="w-4 h-4 text-amber-400 animate-spin" />
            <span>OFFICIAL YOUTUBE &amp; AUDIO ARCHIVE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2">
            Explore High-Fidelity Regional Video Masters
          </h2>
          <div className="font-sans font-medium text-base sm:text-lg text-amber-400/90">
            (शादी के गीत, महिला संगीत, सोहर, दादरा एवं देवी जस - संपूर्ण वीडियो व ऑडियो)
          </div>
          <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
            सभी लोकगीत सीधे 16:9 स्टूडियो मास्टर में देखें अथवा Spotify और JioSaavn पर उच्च-ध्वनि (High Fidelity 24-bit) में सुनें।
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {Object.entries(CATEGORIES).map(([key, cat]) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-xl border transition-all cursor-pointer text-center ${
                  isActive 
                    ? "bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.25)]" 
                    : "bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <div className="font-display font-bold text-sm sm:text-base uppercase tracking-wider">
                  {cat.label}
                </div>
                <div className="font-sans text-xs opacity-80">
                  {cat.hindiLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Category Description & Dedicated Playlist Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/[0.02] border border-white/10 rounded-xl p-4 mb-10 max-w-4xl mx-auto">
          <p className="font-sans text-sm text-neutral-300 text-center sm:text-left">
            {currentCategory.desc}
          </p>
          <Link
            href={currentCategory.playlistHref}
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold transition-colors"
          >
            <ListMusic className="w-3.5 h-3.5" />
            <span>Open Full Playlist Page ➔</span>
          </Link>
        </div>

        {/* 4-Track Video & Monetization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentCategory.tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white/[0.03] border border-white/10 hover:border-amber-500/40 rounded-2xl overflow-hidden backdrop-blur-md transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col justify-between group"
            >
              {/* 16:9 Direct YouTube Embed / Façade */}
              <div className="p-3 pb-0">
                <YouTubeEmbed
                  videoId={track.youtubeVideoId}
                  videoUrl={track.youtubeUrl}
                  thumbnailUrl={track.thumbnailUrl}
                  title={track.title}
                  hindiTitle={track.hindiTitle}
                  coverBg={track.coverBg}
                />
              </div>

              {/* Track Metadata */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase bg-amber-500/10 border border-amber-500/30 text-amber-300 px-2 py-0.5 rounded">
                      {track.dialect}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {track.bpm} BPM
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-1 leading-tight group-hover:text-amber-300 transition-colors">
                    {track.title}
                  </h3>
                  <div className="font-sans font-bold text-xs text-amber-400/90 mb-3">
                    {track.hindiTitle}
                  </div>

                  <p className="font-mono text-[11px] text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                    {track.description}
                  </p>
                </div>

                {/* Triple Monetization & Lyrics Action Bar */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-1.5">
                    {/* Spotify Button */}
                    <a
                      href={track.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 bg-white/5 hover:bg-[#1DB954] hover:text-white border border-white/10 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1 text-neutral-300 transition-colors"
                      title="Stream on Spotify"
                    >
                      <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Spotify</span>
                    </a>

                    {/* JioSaavn Button */}
                    <a
                      href={track.jiosaavnUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 bg-white/5 hover:bg-[#00BFA5] hover:text-white border border-white/10 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1 text-neutral-300 transition-colors"
                      title="Listen on JioSaavn"
                    >
                      <JioSaavnIcon className="w-3.5 h-3.5 fill-current" />
                      <span>JioSaavn</span>
                    </a>

                    {/* YouTube Button */}
                    <a
                      href={track.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 bg-white/5 hover:bg-[#FF0000] hover:text-white border border-white/10 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1 text-neutral-300 transition-colors"
                      title="Watch full video on YouTube"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                      <span>YouTube</span>
                    </a>
                  </div>

                  {/* Lyrics Vault Link */}
                  {track.lyricsVaultSlug && (
                    <Link
                      href={`/regional-music/lyrics#${track.lyricsVaultSlug}`}
                      className="w-full py-1.5 px-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-lg font-mono font-bold text-[10px] uppercase flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3 h-3" />
                      <span>Authentic Lyrics (प्रामाणिक बोल) ➔</span>
                    </Link>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Catalog & Playlist Hub Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/30 p-6 sm:p-8 rounded-2xl shadow-xl">
          <div className="space-y-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-300 font-mono text-xs font-bold uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE ALL 6 CURATED HIGH-VOLUME PLAYLISTS</span>
            </div>
            <div className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-wider text-white">
              Complete Wedding, Sangeet &amp; Regional Vaults
            </div>
            <p className="font-mono text-xs text-neutral-400 max-w-xl">
              विवाह संस्कार (6 रस्मी गीत), महिला संगीत डांस, बघेली सोहर-दादरा, देवी जस पचरा, अवधी कजरी और बुंदेली राई।
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/playlists"
              className="bg-[#D4AF37] hover:bg-[#e5be47] text-black font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl border border-amber-400 transition-all shadow-md flex items-center gap-2"
            >
              <ListMusic className="w-4 h-4" />
              <span>Browse All Playlists ➔</span>
            </Link>
            <Link
              href="/regional-music/lyrics"
              className="bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase px-5 py-3 rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Lyrics Vault (25+ Geet)</span>
            </Link>
            <a
              href={YOUTUBE_OAC_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500/15 border border-red-500/40 hover:bg-red-600 text-red-300 hover:text-white font-mono font-bold text-xs uppercase px-4 py-3 rounded-xl flex items-center gap-1.5 transition-all"
            >
              <YoutubeIcon className="w-4 h-4 fill-current" />
              <span>YouTube @MediaMafias</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
