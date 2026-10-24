export interface YouTubeShort {
  id: string;
  videoId: string;
  title: string;
  hindiTitle: string;
  category: "wedding" | "sohar" | "devi" | "bhakti" | "kajri" | "nachanhai";
  categoryLabel: string;
  duration: string;
  youtubeUrl: string;
  whatsappShareText: string;
  tags: string[];
}

export const SHORTS_KEYWORDS = [
  "Bagheli lokgeet shorts",
  "bagheli folk music reels",
  "Bagheli Whatsapp status",
  "Bagheli Songs",
  "Rewa Satna ke gaane",
  "desi wedding reels",
  "vivah geet status",
  "sohar status bagheli",
  "devi jas shorts",
  "sawan kajri reels"
];

export const SHORTS_DATA: YouTubeShort[] = [
  {
    id: "sh-1",
    videoId: "qpgAoNhwDak",
    title: "Sab Khushiyan Ki Daani - Sun Mori Aadi Bhawani",
    hindiTitle: "सब खुशियन की दानी - सुन मोरी आदि भवानी",
    category: "devi",
    categoryLabel: "मैहर शारदा जस",
    duration: "0:45",
    youtubeUrl: "https://www.youtube.com/watch?v=qpgAoNhwDak",
    whatsappShareText: "माँ शारदा मैहर देवी जस - सब खुशियन की दानी सुन मोरी आदि भवानी 🙏 #MediaMafias #BagheliStatus https://youtube.com/shorts/qpgAoNhwDak",
    tags: ["Bagheli lokgeet shorts", "Bagheli Whatsapp status", "devi jas shorts", "Rewa Satna ke gaane"]
  },
  {
    id: "sh-2",
    videoId: "Xn5swSChjhQ",
    title: "Dui Biriya Aarti - Navratri Mata Bhajan",
    hindiTitle: "दुई बिरिया आरती 🙏 | Navratri Mata Bhajan",
    category: "devi",
    categoryLabel: "नवरात्रि आरती",
    duration: "0:52",
    youtubeUrl: "https://www.youtube.com/watch?v=Xn5swSChjhQ",
    whatsappShareText: "करैं भगत माई आरती दुई बिरिया 🙏 नवरात्र स्पेशल देवी आरती स्टेटस https://youtube.com/shorts/Xn5swSChjhQ",
    tags: ["Bagheli Whatsapp status", "devi jas shorts", "bagheli folk music reels"]
  },
  {
    id: "sh-3",
    videoId: "LmPaMeUzKgk",
    title: "Maa Sita Ka Gauri Pujan - Gauri Vandan",
    hindiTitle: "माँ सीता का गौरी पूजन 🙏 | Gauri Vandan | Ram Charit Manas",
    category: "bhakti",
    categoryLabel: "रामचरित मानस",
    duration: "0:58",
    youtubeUrl: "https://www.youtube.com/watch?v=LmPaMeUzKgk",
    whatsappShareText: "जब माँ सीता ने की गौरी पूजा - अलौकिक गौरी वंदना #RamCharitManas https://youtube.com/shorts/LmPaMeUzKgk",
    tags: ["Bagheli Songs", "Bagheli Whatsapp status", "Rewa Satna ke gaane"]
  },
  {
    id: "sh-4",
    videoId: "z00tXOHt_L8",
    title: "Kanhaiya, Yaad Hai Kuchh Bhi Hamari",
    hindiTitle: "कन्हैया, याद है कुछ भी हमारी? #shorts",
    category: "bhakti",
    categoryLabel: "अवधी विरह ठुमरी",
    duration: "0:48",
    youtubeUrl: "https://www.youtube.com/watch?v=z00tXOHt_L8",
    whatsappShareText: "कन्हैया! याद है कुछ भी हमारी? - अवधी विरह ठुमरी स्टेटस https://youtube.com/shorts/z00tXOHt_L8",
    tags: ["Bagheli Whatsapp status", "bagheli folk music reels", "Bagheli Songs"]
  },
  {
    id: "sh-5",
    videoId: "aPl_35u2-mY",
    title: "Khaak Pare More Us Byahan Pe",
    hindiTitle: "खाक परे मोरे उस ब्याहन पे 💔 | Awadhi Lokgeet",
    category: "wedding",
    categoryLabel: "विवाह व विरह",
    duration: "0:42",
    youtubeUrl: "https://www.youtube.com/watch?v=aPl_35u2-mY",
    whatsappShareText: "खाक परे मोरे उस ब्याहन पे 💔 अवधी विरह लोकगीत रील्स https://youtube.com/shorts/aPl_35u2-mY",
    tags: ["Bagheli lokgeet shorts", "vivah geet status", "Bagheli Whatsapp status"]
  },
  {
    id: "sh-6",
    videoId: "nXw0VfGEolQ",
    title: "Is Sohar Geet Ka Jadu - Luturi Jhalariya",
    hindiTitle: "इस सोहर गीत का जादू आपके दिल को छू लेगा ❤️ | Luturi Jhalariya",
    category: "sohar",
    categoryLabel: "पारंपरिक सोहर",
    duration: "0:55",
    youtubeUrl: "https://www.youtube.com/watch?v=nXw0VfGEolQ",
    whatsappShareText: "ललना के लुटुरी झलरिया - दिल को छू लेने वाला बघेली सोहर स्टेटस ❤️ https://youtube.com/shorts/nXw0VfGEolQ",
    tags: ["sohar status bagheli", "Bagheli Whatsapp status", "Bagheli lokgeet shorts", "Rewa Satna ke gaane"]
  },
  {
    id: "sh-7",
    videoId: "brBlgQTUDvo",
    title: "Lalna Ke Luturi Jhalariya - Sohar Fusion",
    hindiTitle: "ललना के लुटुरी झलरिया 🎶 | Bagheli Bhojpuri Sohar Fusion",
    category: "sohar",
    categoryLabel: "सोहर फ्यूजन",
    duration: "0:50",
    youtubeUrl: "https://www.youtube.com/watch?v=brBlgQTUDvo",
    whatsappShareText: "ललना के लुटुरी झलरिया 🎶 सोहर अनप्लग्ड https://youtube.com/shorts/brBlgQTUDvo",
    tags: ["sohar status bagheli", "bagheli folk music reels", "Bagheli Songs"]
  },
  {
    id: "sh-8",
    videoId: "3EXBge8W4F8",
    title: "Daras Ki Ta Bera Bhaee - Shiv Bhajan",
    hindiTitle: "दरस की ता बेरा भई 🔱 शिव भजन | Bagheli Lamtera Geet",
    category: "bhakti",
    categoryLabel: "लमतेरा शिव भजन",
    duration: "0:49",
    youtubeUrl: "https://www.youtube.com/watch?v=3EXBge8W4F8",
    whatsappShareText: "दरस की ता बेरा भई 🔱 बघेली लमतेरा शिव भजन स्टेटस https://youtube.com/shorts/3EXBge8W4F8",
    tags: ["Bagheli Whatsapp status", "Rewa Satna ke gaane", "Bagheli lokgeet shorts"]
  },
  {
    id: "sh-9",
    videoId: "6a4-xmPRtjQ",
    title: "Barasaya Bade Boond Rama - Chunariya Bheenjai",
    hindiTitle: "बरसय बड़े बूंद रामा - चुनरिया भींजै 🌧️💃 | Folk Fusion",
    category: "nachanhai",
    categoryLabel: "नाचनहाई व सावन",
    duration: "0:44",
    youtubeUrl: "https://www.youtube.com/watch?v=6a4-xmPRtjQ",
    whatsappShareText: "बरसय बड़े बूंद रामा चुनरिया भींजै 🌧️💃 बघेली लोकगीत रील्स https://youtube.com/shorts/6a4-xmPRtjQ",
    tags: ["bagheli folk music reels", "Bagheli Whatsapp status", "Bagheli Songs"]
  },
  {
    id: "sh-10",
    videoId: "JYx4yEVJekc",
    title: "Ram Banra Ban Aayo Re - Vivah Geet",
    hindiTitle: "राम बनरा बन आयो रे | बघेली विवाह गीत",
    category: "wedding",
    categoryLabel: "विवाह बन्ना",
    duration: "0:56",
    youtubeUrl: "https://www.youtube.com/watch?v=JYx4yEVJekc",
    whatsappShareText: "मोरे दशरथ राज दुलार आज बनरा बन आयो रे - शादी स्पेशल बन्ना स्टेटस 💍 https://youtube.com/shorts/JYx4yEVJekc",
    tags: ["desi wedding reels", "vivah geet status", "Bagheli Whatsapp status", "Rewa Satna ke gaane"]
  },
  {
    id: "sh-11",
    videoId: "ZUObITRCwys",
    title: "Dhan Dhan Nagar Ayodhya - Ram Janm Bhajan",
    hindiTitle: "धन धन नगर अयोध्या | पारंपरिक बघेली सोहर गीत",
    category: "sohar",
    categoryLabel: "राम जन्म सोहर",
    duration: "0:54",
    youtubeUrl: "https://www.youtube.com/watch?v=ZUObITRCwys",
    whatsappShareText: "धन धन नगर अयोध्या, जहाँ श्रीराम जन्मे हैं - पावन सोहर स्टेटस 🚩 https://youtube.com/shorts/ZUObITRCwys",
    tags: ["sohar status bagheli", "Bagheli Whatsapp status", "Bagheli Songs"]
  },
  {
    id: "sh-12",
    videoId: "EDHorCF8dQE",
    title: "Hari Rama Chhai Ghata Ghanaghor",
    hindiTitle: "हरी रामा छाई घटा घनघोर 🌧️ बघेली कजरी लोकगीत",
    category: "kajri",
    categoryLabel: "सावन कजरी",
    duration: "0:47",
    youtubeUrl: "https://www.youtube.com/watch?v=EDHorCF8dQE",
    whatsappShareText: "हरी रामा छाई घटा घनघोर बदरिया कारी रे हारी - सावन कजरी रील्स 🌧️ https://youtube.com/shorts/EDHorCF8dQE",
    tags: ["sawan kajri reels", "Bagheli Whatsapp status", "bagheli folk music reels"]
  },
  {
    id: "sh-13",
    videoId: "jZ5sJ_CQlq0",
    title: "Ram Baraat Wapsi - Biyah Laye Raghubar",
    hindiTitle: "राम बारात वापसी: बिआह लाये रघुबर जानकी का 🌸 (Acoustic Folk)",
    category: "wedding",
    categoryLabel: "परछन व विदाई",
    duration: "0:58",
    youtubeUrl: "https://www.youtube.com/watch?v=jZ5sJ_CQlq0",
    whatsappShareText: "बिआह लाये रघुबर जानकी का - परछन व विवाह संस्कार स्टेटस 🌸 https://youtube.com/shorts/jZ5sJ_CQlq0",
    tags: ["vivah geet status", "desi wedding reels", "Bagheli Whatsapp status"]
  },
  {
    id: "sh-14",
    videoId: "Cp_TZZBY734",
    title: "Traditional Kajri Unplugged - Piya Gaye Hain Pardes",
    hindiTitle: "Traditional Kajri Unplugged | Piya Gaye Hain Pardes",
    category: "kajri",
    categoryLabel: "विरह कजरी",
    duration: "0:46",
    youtubeUrl: "https://www.youtube.com/watch?v=Cp_TZZBY734",
    whatsappShareText: "पिया गए हैं परदेस - अनप्लग्ड बघेली कजरी विरह रील्स 🎶 https://youtube.com/shorts/Cp_TZZBY734",
    tags: ["sawan kajri reels", "Bagheli lokgeet shorts", "Bagheli Songs", "Rewa Satna ke gaane"]
  }
];
