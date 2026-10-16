"use client";

import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Search,
  BookOpen,
  Copy,
  Check,
  Play,
  Pause,
  Sparkles,
  Share2,
  HeartHandshake,
  Music2,
  MapPin,
  ChevronRight,
  Disc3
} from "lucide-react";
import { getAudioUrl, SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL, AUDIO_PREVIEW_DURATION } from "@/lib/audio";

interface LyricEntry {
  id: string;
  title: string;
  hindiTitle: string;
  category: "vivah" | "sohar" | "seasonal" | "bhakti";
  categoryLabel: string;
  dialect: string;
  ritualContext: string;
  description: string;
  audioSrc?: string;
  devanagariLyrics: string[];
  romanLyrics: string[];
}

const LYRICS_DATA: LyricEntry[] = [
  {
    id: "parchhan-geet",
    title: "Parchhan Geet (द्वार परछावन)",
    hindiTitle: "आए हैं दुलहा द्वारे - परछन गीत",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • द्वार आगमन",
    dialect: "बघेली व अवधी (रीवा, सतna, अयोध्या)",
    ritualContext: "बारात के मंडप के मुख्य द्वार पर पहुँचने पर वधु की माता व कुल की स्त्रियाँ कांस्य थाली में दीपक, रोली और हल्दी से दूल्हे की आरती व परछन करती हैं।",
    description: "दूल्हे के रूप-सौंदर्य और गृहस्थ जीवन में मंगल प्रवेश की प्रार्थना का मधुर लोकगीत।",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    devanagariLyrics: [
      "आए हैं दुलहा द्वारे, आरती उतारो री माई।",
      "कंचन थार कपूर की बाती, मोतिन चौक पुराओ री माई॥",
      "माथे मुकुट कुंडल छवि सोहे, नजर न लागे मोरे राजदुलारे को।",
      "सासु ठाढ़ी आरती उतारे, हँसि-हँसि तिलक लगावे री माई॥",
      "हल्दी अक्षत चन्दन घोरी, मंगल कलश सजाओ री माई।",
      "आए हैं दुलहा द्वारे, आरती उतारो री माई॥"
    ],
    romanLyrics: [
      "Aaye hain dulaha dwaare, aarti utaaro ri maai.",
      "Kanchan thaar kapoor ki baati, motin chauk puraao ri maai.",
      "Maathe mukut kundal chhavi sohe, nazar na laage more raaj dulaare ko.",
      "Saasu thaadhi aarti utaare, hansi-hansi tilak lagaave ri maai.",
      "Haldii akshat chandan ghori, mangal kalash sajaao ri maai.",
      "Aaye hain dulaha dwaare, aarti utaaro ri maai."
    ]
  },
  {
    id: "duarchar-geet",
    title: "Duarchar & Kanyadaan (दुआचार व कन्यादान)",
    hindiTitle: "बाबा जे मांगेले गइया के दानवा - दुआचार",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • मंडप व कन्यादान",
    dialect: "बघेली व अवधी (विंध्य व पूर्वांचल)",
    ritualContext: "दुआचार के समय वेदी पर पिता द्वारा गोदान व कन्यादान का पावन क्षण, जहाँ माता-पिता के त्याग और कुल-मर्यादा का गान होता है।",
    description: "भारतीय विवाह का सबसे भावुक और शास्त्रीय क्षण, जहाँ बेटी के दान को संसार का सर्वोच्च दान माना गया है।",
    devanagariLyrics: [
      "बाबा जे मांगेले गइया के दानवा, मइया मँगेली सिन्दूर हो।",
      "चाचा जे मांगेले सोने के कंगनवा, दुलहिन मांगेली सुहाग हो॥",
      "हाथ में कुसवा, अँचरा में अक्षत, बाबा करेले कन्यादान।",
      "सातो जनम के नेह निबाहब, राखब कुल के मान हो॥",
      "गंगा की धार जइसे बहती विदाई, नयनन जल छलकाए हो।"
    ],
    romanLyrics: [
      "Baaba je maangele gaiya ke daanawa, maiya mangeli sindoor ho.",
      "Chaacha je maangele sone ke kanganwa, dulahin maangeli suhaag ho.",
      "Haath mein kusawa, anchara mein akshat, baaba karele kanyadaan.",
      "Saato janam ke neh nibaahab, raakhab kul ke maan ho.",
      "Ganga ki dhaar jaise bahati vidaai, nayanan jal chhalakaaye ho."
    ]
  },
  {
    id: "banna-banni",
    title: "Banna Banni Geet (बन्ना-बन्नी)",
    hindiTitle: "मोरा बन्ना बड़ा अलबेला - बन्ना बन्नी",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • शृंगार व उल्लास",
    dialect: "बघेली, बुंदेली व अवधी (संपूर्ण मध्य भारत)",
    ritualContext: "विवाह से पूर्व तेल-हल्दी (मटमंगरा) की रस्म में दोनों पक्षों में गाया जाने वाला चुलबुला व आनंदमयी शृंगार गीत।",
    description: "दूल्हे और दुल्हन के रूप, सेहरे, पायल और हंसी-ठिठोली पर केंद्रित सर्वप्रिय लोकगीत।",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    devanagariLyrics: [
      "मोरा बन्ना बड़ा अलबेला, सेहरे में फूल गुलाब।",
      "हाथों में कँगना खनके, चाल चले मस्तानी॥",
      "बन्नी बैठी महल अटरिया, देखे बन्ना की शान।",
      "माथे टीकम, पाँव महावर, रूप सलोना जान॥",
      "ढोलक बाजे, झांझ झनके, झूमे सारा गाँव।",
      "मोरा बन्ना बड़ा अलबेला, सेहरे में फूल गुलाब॥"
    ],
    romanLyrics: [
      "Mora banna bada albela, sehare mein phool gulaab.",
      "Haathon mein kangana khanake, chaal chale mastaani.",
      "Banni baithi mahal atariya, dekhe banna ki shaan.",
      "Maathe teekam, paanv mahaavar, roop salona jaan.",
      "Dholak baaje, jhaanjh jhanake, jhoome saara gaanv.",
      "Mora banna bada albela, sehare mein phool gulaab."
    ]
  },
  {
    id: "jeonaar-gari",
    title: "Jeonaar Samdhi Gari (जेवनार व गाली गीत)",
    hindiTitle: "समधी के पेटवा में कौआ बोले - जेवनार गारी",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • पंगत व लोक परिहास",
    dialect: "बघेली (रीवा, सतना, सीधी) व भोजपुरी",
    ritualContext: "बारातियों के पंगत में भोजन (जेवनार) करते समय वधु पक्ष की महिलाएं थाली-लोटा बजाकर समधियों से मधुर परिहास करती हैं।",
    description: "भारतीय लोक संस्कृति की अनुपम परंपरा जहाँ गाली भी प्रेम, सत्कार और आत्मीयता का प्रतीक बन जाती है।",
    devanagariLyrics: [
      "समधी के पेटवा में कौआ बोले, जेवना मगन भये समधी।",
      "काहे की भाजी काहे का रायता, पूरी गटक गये समधी॥",
      "रसगुल्ला देखि समधी ललचाए, धोती सम्हारे न जाए।",
      "मीठी गारी देहिं सखी सब, हँसि-हँसि ताल बजाये॥",
      "सत्कार में गारी देत हम, बुरा न मानब समधी।",
      "समधी के पेटवा में कौआ बोले, जेवना मगन भये समधी॥"
    ],
    romanLyrics: [
      "Samadhi ke petwa mein kaua bole, jevana magan bhaye samadhi.",
      "Kaahe ki bhaaji kaahe ka raayata, poori gatak gaye samadhi.",
      "Rasgulla dekhi samadhi lalchaaye, dhoti samhaare na jaaye.",
      "Meethi gaari dehin sakhi sab, hansi-hansi taal bajaaye.",
      "Satkaar mein gaari det hum, bura na maanab samadhi.",
      "Samadhi ke petwa mein kaua bole, jevana magan bhaye samadhi."
    ]
  },
  {
    id: "anjuri-gailhai",
    title: "Anjuri & Gailhai (अंजुरी व गैलहाई - विदाई)",
    hindiTitle: "काहे को ब्याही बिदेस - विदाई व गैलहाई",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • विदाई व करुण रस",
    dialect: "बघेली (विंध्य) व अवधी",
    ritualContext: "विदाई के समय जब वधु पीछे की ओर अक्षत (चावल) की अंजुली फेंकती है और डोली प्रस्थान करती है, तब गाँव की सीमा तक 'गैलहाई' गाई जाती है।",
    description: "भारतीय लोक संगीत की सबसे कारुणिक रचना, जो पिता-पुत्री और मातृभूमि के शाश्वत प्रेम को प्रकट करती है।",
    devanagariLyrics: [
      "काहे को ब्याही बिदेस रे लखिया बाबुल मोरे।",
      "भैया को दीन्हे महल दो महला, हमको दियो परदेस॥",
      "अंजुरी भर अक्षत डारि के रोवे, रोवे सहेली और माई।",
      "डोली कहार उठावत काँपे, छूटल गँवई गाँव री माई॥",
      "आशीष देव सब बुजुर्ग गाँव के, सदा सुहागिन रहो री लली।"
    ],
    romanLyrics: [
      "Kaahe ko byaahi bidesh re lakhiya baabul more.",
      "Bhaiya ko deenhe mahal do mahala, hamko diyo pardes.",
      "Anjuri bhar akshat daari ke rowe, rowe saheli aur maai.",
      "Doli kahaar uthaawat kaanpe, chhootall ganwai gaanv ri maai.",
      "Aasheesh dev sab buzurg gaanv ke, sada suhaagin raho ri lali."
    ]
  },
  {
    id: "sohar-dadra",
    title: "Sohar Dadra (सोहर दादरा - जन्मोत्सव)",
    hindiTitle: "एही अँगना म लाखन लुटाई देब - सोहर दादरा",
    category: "sohar",
    categoryLabel: "जन्मोत्सव • सोहर व बधाई",
    dialect: "बघेली (रीवा, सतना) व अवधी",
    ritualContext: "संतान जन्मोत्सव और नामकरण संस्कार पर कुल की महिलाएं आंगन में एकत्र होकर ढोलक की थाप पर सोहर गाती हैं।",
    description: "नवजात शिशु के शुभागमन पर परिवार और ननिहाल के उल्लास का पारंपरिक बघेली सोहर।",
    audioSrc: "एही अँगना म लाखन लुटाई देब - Sohar Dadra Male Version.mp3",
    devanagariLyrics: [
      "एही अँगना म लाखन लुटाई देब, ललना के जनमवा भये।",
      "बाजे मृदंग झांझ और ढोलक, खुशियाँ मनावे सखी॥",
      "दादी लुटावे सोने के मोहरें, बुआ लुटावे सुहाग।",
      "चाचा-चाची गावे बधाइयाँ, जागे कुल के भाग॥",
      "जुग-जुग जिए मोरा कुल के उजियारा, मातु-पिता बलिहारी।"
    ],
    romanLyrics: [
      "Ehi angana ma laakhan lutaaee deb, lalana ke janamwa bhaye.",
      "Baaje mridang jhaanjh aur dholak, khushiyaan manaave sakhi.",
      "Daadi lutaave sone ke moharen, bua lutaave suhaag.",
      "Chaacha-chaachi gaave badhaiyaan, jaage kul ke bhaag.",
      "Jug-jug jiye mora kul ke ujiyaara, maatu-pita balihaari."
    ]
  },
  {
    id: "kajri-geet",
    title: "Kajri Geet (कजरी - सावन वर्षा)",
    hindiTitle: "बरसन लागी बदरिया सावन की - कजरी",
    category: "seasonal",
    categoryLabel: "ऋतु लोकगीत • सावन व वर्षा",
    dialect: "अवधी व मिर्ज़ापुरी (वाराणसी, मिर्ज़ापुर, रीवा)",
    ritualContext: "सावन मास में हरियाली तीज और रक्षाबंधन के समय नीम की डालों पर झूले डालकर गाई जाने वाली पारंपरिक कजरी।",
    description: "घनघोर घटाओं, विरह और राधा-कृष्ण के झूले का शास्त्रीय व लोक माधुर्य।",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Awadhi Folk Song.mp3",
    devanagariLyrics: [
      "बरसन लागी बदरिया सावन की, झूला झूलें सिया-राम।",
      "हरिहर दूब मगन मन मोरा, कोयल बोले अमवा की डार॥",
      "रिमझिम-रिमझिम बूँदें बरसे, भीजे सखियन के चीर।",
      "पिया परदेस बसे नहीं आए, नैनन छलके नीर॥",
      "सावन आयो री सखी, झूलो कदम की छैयाँ।"
    ],
    romanLyrics: [
      "Barasan laagi badariya saawan ki, jhoola jhoolen Siya-Raam.",
      "Harihar doob magan man mora, koyal bole amawa ki daar.",
      "Rimjhim-rimjhim boonden barase, bheeje sakhiyan ke cheer.",
      "Piya pardes base nahi aaye, nayanan chhalake neer.",
      "Saawan aayo ri sakhi, jhoolo kadam ki chhaiyaan."
    ]
  },
  {
    id: "phaag-bundeli-rai",
    title: "Phaag & Bundeli Rai (फाग व बुंदेली राई)",
    hindiTitle: "उड़त गुलाल लाल भये बादर - बुंदेली फाग",
    category: "seasonal",
    categoryLabel: "ऋतु लोकगीत • होली व फाग",
    dialect: "बुंदेली (झांसी, सागर, छतरपुर)",
    ritualContext: "होली उत्सव और कटाई के समय नगाड़िया और टिमकी की तेज थाप पर ईसुरी की चौघड़ियों के साथ गाई जाने वाली फाग।",
    description: "बुंदेलखंड की मर्दाना आन-बान और अबीर-गुलाल के रंगों से सराबोर द्रुत गति का लोक नृत्य-गीत।",
    devanagariLyrics: [
      "उड़त गुलाल लाल भये बादर, खेलें फाग ब्रज के यार।",
      "चंग ढोलक झांझ बजावे, रंग बरसे अपार॥",
      "पिचकारी भर मारत कान्हा, गोपी करत पुकार।",
      "बुंदेलखंड के वीरों की टोली, नाचे राई ताल अपार॥",
      "ईसुरी की फागें गूंजे, महुआ के बन मझार।"
    ],
    romanLyrics: [
      "Udat gulaal laal bhaye baadar, khelen phaag Braj ke yaar.",
      "Chang dholak jhaanjh bajaave, rang barase apaar.",
      "Pichkaari bhar maarat Kaana, gopi karat pukaar.",
      "Bundelkhand ke veeron ki toli, naache raai taal apaar.",
      "Eesuri ki phaagen goonje, mahua ke ban majhaar."
    ]
  },
  {
    id: "devi-jas-maihar",
    title: "Devi Jas & Pachra (देवी जस - मैहर शारदा माई)",
    hindiTitle: "निमिया की डार मैया झुलेली झुलनवा - देवी जस",
    category: "bhakti",
    categoryLabel: "भक्ति व लोक जागरण • देवी जस",
    dialect: "बघेली व विंध्याचली (मैहर, रीवा, विंध्याचल)",
    ritualContext: "चैत्र व शारदीय नवरात्रि में मैहर त्रिकूट पर्वत पर शारदा भवानी और शीतला माता के जागरण में ढाक और झांझ पर गाया जाने वाला जस।",
    description: "माँ भगवती के वात्सल्य और शक्ति रूप का अलौकिक व श्रद्धापूर्ण लोक भजन।",
    audioSrc: "Shiva Panchakshara Stotram - Stotra Chanting.mp3",
    devanagariLyrics: [
      "निमिया की डार मैया झुलेली झुलनवा, पवन डोलावे डार।",
      "माई के द्वारे सेवक तरसें, जय जय शारदा माय॥",
      "सोने के छत्र गले मोतिन माला, सिंह चढ़ी महरानी।",
      "त्रिकूट पर्वत पर वास तिहारो, मैहर की कल्याणी॥",
      "जो जन ध्यावे सो फल पावे, संकट काटो मात।"
    ],
    romanLyrics: [
      "Nimiya ki daar maiya jhooleli jhulanwa, pawan dolaave daar.",
      "Maai ke dwaare sewak tarasen, jai jai Shaarada maay.",
      "Sone ke chhatra gale motin maala, singh chadhee mahraani.",
      "Trikoot parwat par waas tihaaro, Maihar ki kalyaani.",
      "Jo jan dhyaave so phal paave, sankat kaato maat."
    ]
  },
  {
    id: "aalha-khand",
    title: "Aalha Folk Ballad (आल्हा गायन - वीर रस)",
    hindiTitle: "बारह बरस ले कूकुर जीवे - आल्हा वीर गाथा",
    category: "bhakti",
    categoryLabel: "वीर रस व लोक गाथा • आल्हा-ऊदल",
    dialect: "बुंदेली व बैसवाड़ी (महोबा, बुंदेलखंड)",
    ritualContext: "वर्षा ऋतु में रातों के समय ढोलक और मंजीरे की गूंज पर महाबली आल्हा और ऊदल की 52 लड़ाइयों की वीरगाथा का गायन।",
    description: "विश्व का सबसे बड़ा मौखिक वीर काव्य, जो भुजाओं में फड़कन और रक्त में शौर्य का संचार करता है।",
    devanagariLyrics: [
      "बारह बरस ले कूकुर जीवे, औ सोरह लै जिए सियार।",
      "बरस अठारह छत्री जीवे, आगे जीवन को धिक्कार॥",
      "जाके बैरी संमुख ठाढ़े, तेहि को नींद न आवे।",
      "महोबे के आल्हा ऊदल वीरा, तलवारिन खनकावे॥",
      "मातृभूमि की रक्षा खातिर, शीश दान दे जावे।"
    ],
    romanLyrics: [
      "Baarah baras le kookur jeeve, au sorah lai jiye siyaar.",
      "Baras athaarah chhatri jeeve, aage jeevan ko dhikkaar.",
      "Jaake bairi sammukh thaadhe, tehi ko neend na aave.",
      "Mahobe ke Aalha Oodal veera, talwaarin khankaave.",
      "Maatribhoomi ki raksha khaatir, sheesh daan de jaave."
    ]
  }
];

export default function RegionalLyricsPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const [previewTime, setPreviewTime] = React.useState(0);
  const [showRoman, setShowRoman] = React.useState<Record<string, boolean>>({});
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const filteredLyrics = LYRICS_DATA.filter((entry) => {
    const matchesCat = activeCategory === "all" || entry.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      entry.title.toLowerCase().includes(q) ||
      entry.hindiTitle.toLowerCase().includes(q) ||
      entry.dialect.toLowerCase().includes(q) ||
      entry.ritualContext.toLowerCase().includes(q) ||
      entry.devanagariLyrics.some((l) => l.includes(q)) ||
      entry.romanLyrics.some((l) => l.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  const handleCopy = (entry: LyricEntry) => {
    const fullText = `${entry.hindiTitle} (${entry.title})\n\n[सांस्कृतिक संदर्भ]: ${entry.ritualContext}\n\n[बोल / लिरिक्स]:\n${entry.devanagariLyrics.join("\n")}\n\n— Media Mafias Regional Folk Archive (https://www.mediamafias.com/regional-music/lyrics)`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(entry.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleShareWhatsApp = (entry: LyricEntry) => {
    const shareText = `*${entry.hindiTitle}* (${entry.title})\n_${entry.ritualContext}_\n\n*बोल:*\n${entry.devanagariLyrics.slice(0, 4).join("\n")}\n...\n\nपूरी लिरिक्स और 20s ऑडियो सुनने के लिए यहाँ क्लिक करें:\nhttps://www.mediamafias.com/regional-music/lyrics#${entry.id}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
  };

  const handleTogglePlay = (id: string, audioFile?: string) => {
    if (!audioFile) return;

    if (playingId === id) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = getAudioUrl(audioFile);
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
        setPlayingId(id);
        setPreviewTime(0);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    setPreviewTime(Math.min(AUDIO_PREVIEW_DURATION, Math.floor(current)));
    if (current >= AUDIO_PREVIEW_DURATION) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayingId(null);
      setPreviewTime(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black">
      <Header />

      {/* Hidden Audio Player for 20s previews */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setPlayingId(null);
          setPreviewTime(0);
        }}
      />

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-6 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#141419] to-[#0B0B0E]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/regional-music" className="hover:text-amber-300 transition-colors">Regional Music</Link>
            <span>/</span>
            <span className="text-[#D4AF37]">Lyrics Vault</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-xs uppercase tracking-widest font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>क्षेत्रीय लोकगीत एवं विवाह संस्कार बोल संग्रह • 100% AUTHENTIC HERITAGE</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-3">
            DESI WEDDING RITES &amp; FOLK LYRICS VAULT
          </h1>

          <div className="font-sans font-bold text-xl sm:text-2xl text-[#D4AF37] mb-4">
            पारंपरिक विवाह संस्कार एवं क्षेत्रीय लोकगीत बोल संग्रह
          </div>

          <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
            रीवा, सतना, सीधी, शहडोल, बुंदेलखंड, अवध और पूर्वांचल के सदियों पुराने <strong className="text-white">परछन, दुआचार, बन्ना-बन्नी, समधी गारी, अंजुरी-गैलहाई (विदाई), सोहर-दादरा, कजरी, फाग, और देवी जस</strong> के प्रामाणिक बोल। एक क्लिक में बोल कॉपी करें, व्हाट्सएप पर साझा करें या 20 सेकंड का स्टूडियो प्रिव्यू सुनें।
          </p>

          {/* Quick Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "All Lyrics (सभी बोल)", value: "all" },
              { label: "Wedding Rites (विवाह संस्कार)", value: "vivah" },
              { label: "Childbirth & Sohar (सोहर दादरा)", value: "sohar" },
              { label: "Seasonal Folk (कजरी व फाग)", value: "seasonal" },
              { label: "Bhakti & Veer Ras (देवी जस व आल्हा)", value: "bhakti" }
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`font-mono text-xs font-bold uppercase px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "bg-[#141419] text-neutral-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH BAR & METRICS BAR */}
      <section className="py-6 px-6 border-b border-white/10 bg-[#0E0E12] sticky top-[57px] z-30 backdrop-blur-md bg-[#0E0E12]/90">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full">
              {filteredLyrics.length} HERITAGE COMPOSITIONS
            </span>
            <span className="font-mono text-xs text-neutral-400 hidden md:inline">
              Devanagari Hindi &amp; English Transliteration
            </span>
          </div>

          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Parchhan, Gari, Banna Banni, Sohar, Rewa..."
              className="w-full pl-9 pr-4 py-2 bg-[#16161D] border border-white/10 focus:border-[#D4AF37] rounded-xl font-mono text-xs text-white placeholder:text-neutral-500 outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* LYRICS CARDS GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {filteredLyrics.map((entry) => {
            const isPlaying = playingId === entry.id;
            const isCopied = copiedId === entry.id;
            const showRomanized = showRoman[entry.id] || false;

            return (
              <article
                key={entry.id}
                id={entry.id}
                className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 transition-all shadow-xl relative"
              >
                {/* Header Strip */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] font-bold uppercase bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded">
                        {entry.categoryLabel}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-neutral-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C0392B]" />
                        {entry.dialect}
                      </span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                      {entry.hindiTitle}
                    </h2>
                    <div className="font-mono text-xs text-neutral-400 mt-0.5">
                      {entry.title}
                    </div>
                  </div>

                  {/* Top Action Buttons (Copy, WhatsApp Share, Audio Preview) */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Copy Lyrics Button */}
                    <button
                      onClick={() => handleCopy(entry)}
                      className={`px-3.5 py-2 rounded-xl font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-all cursor-pointer border ${
                        isCopied
                          ? "bg-[#10B981] text-black border-[#10B981]"
                          : "bg-[#181820] text-neutral-200 border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
                      }`}
                      title="Copy complete lyrics to clipboard"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-black" />
                          <span>बोल कॉपी हो गए!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#D4AF37]" />
                          <span>Copy Lyrics</span>
                        </>
                      )}
                    </button>

                    {/* WhatsApp Share Button */}
                    <button
                      onClick={() => handleShareWhatsApp(entry)}
                      className="px-3.5 py-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/30 rounded-xl font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-all cursor-pointer"
                      title="Share lyrics on WhatsApp with family or mandali"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Share</span>
                    </button>

                    {/* 20s Audio Preview (if available) */}
                    {entry.audioSrc && (
                      <button
                        onClick={() => handleTogglePlay(entry.id, entry.audioSrc)}
                        className={`px-3.5 py-2 rounded-xl font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-all cursor-pointer border ${
                          isPlaying
                            ? "bg-[#C0392B] text-white border-[#C0392B]"
                            : "bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-black"
                        }`}
                        title="Stream 20s studio audio preview"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5 fill-current" />
                            <span>Pause ({previewTime}s/20s)</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>20s Preview</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Ritual Context / Cultural Guide */}
                <div className="py-4 my-4 px-4 bg-[#181820] border-l-2 border-[#D4AF37] rounded-r-xl font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <span className="font-mono font-bold text-[#D4AF37] uppercase text-xs mr-2">
                    संस्कार एवं रस्म विधान:
                  </span>
                  {entry.ritualContext}
                </div>

                {/* Lyrics Display Block */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  {/* Devanagari Hindi Column */}
                  <div className="bg-[#0E0E12] border border-white/5 rounded-xl p-5">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <span className="font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                        हिंदी / देवनागरी बोल (Authentic Lyrics)
                      </span>
                      <span className="font-mono text-[10px] text-neutral-500">
                        स्थाई व अंतरा
                      </span>
                    </div>

                    <div className="space-y-2.5 font-sans text-base sm:text-lg text-white leading-relaxed">
                      {entry.devanagariLyrics.map((line, idx) => (
                        <p key={idx} className="hover:text-amber-300 transition-colors">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Roman English Transliteration Column */}
                  <div className="bg-[#0E0E12] border border-white/5 rounded-xl p-5">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <span className="font-mono text-xs font-bold text-neutral-300 uppercase tracking-wider">
                        English Transliteration (रोमन लिपि)
                      </span>
                      <span className="font-mono text-[10px] text-neutral-500">
                        Pronunciation Guide
                      </span>
                    </div>

                    <div className="space-y-2.5 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {entry.romanLyrics.map((line, idx) => (
                        <p key={idx} className="hover:text-amber-200 transition-colors">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footnote Strip: Spotify & YouTube Stream */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Preserved and Mastered by Media Mafias Folk Heritage Collective</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={SPOTIFY_ARTIST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1DB954] transition-colors"
                    >
                      Stream full track on Spotify ↗
                    </a>
                    <span>•</span>
                    <a
                      href={YOUTUBE_OAC_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-400 transition-colors"
                    >
                      YouTube Official ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SEO VOICE SEARCH & CULTURAL AUTHORITY BLOCK */}
      <section className="py-16 px-6 bg-[#0E0E12] border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            SEO &amp; Voice Search Knowledge Guide
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
            मध्य भारत के पारंपरिक वैवाहिक एवं मौसमी लोकगीतों की महत्ता
          </h3>
          <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
            बघेलखंड (रीवा, सतना, सीधी, शहडोल), बुंदेलखंड (झांसी, सागर, छतरपुर), अवध (अयोध्या, लखनऊ) और पूर्वांचल की लोक संस्कृति में विवाह केवल दो व्यक्तियों का नहीं, बल्कि दो कुलों और संस्कृतियों का मिलन है। द्वार पर दूल्हे की आरती उतारते समय <strong className="text-white">परछन गीत</strong>, मंडप प्रवेश पर <strong className="text-white">दुआचार</strong>, कन्यादान के समय शास्त्रीय वेद-मंत्रों के साथ लोकगीत, और बारात की पंगत में भोजन के समय समधियों के साथ प्रेममयी हास-परिहास के लिए <strong className="text-white">जेवनार व गारी गीत</strong> गाए जाते हैं। Media Mafias इन अनमोल मौखिक धरोहरों के मूल बोलों को उनके विशुद्ध रूप में लिपिबद्ध व स्टूडियो-रिकॉर्डेड संरक्षित करता है।
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/regional-music"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-mono font-bold text-xs uppercase rounded-xl hover:bg-[#e5be47] transition-all"
            >
              <span>Back to Regional Music Archive</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919209290699?text=Namaste%20Media%20Mafias%2C%20I%20want%20to%20contribute%20or%20inquire%20about%20traditional%20folk%20lyrics%20and%20recordings."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-black font-mono font-bold text-xs uppercase rounded-xl hover:bg-[#20ba59] transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Contribute Folk Lyrics via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
