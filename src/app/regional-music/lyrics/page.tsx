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
  Disc3,
  Feather
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
  authorNote?: string;
  audioSrc?: string;
  devanagariLyrics: string[];
  romanLyrics: string[];
}

const LYRICS_DATA: LyricEntry[] = [
  // 1. DUAARCHAAR GEET
  {
    id: "duarchaar-geet",
    title: "Duarchaar Geet (दुआचार विवाह संस्कार)",
    hindiTitle: "लीन धनुष बन्ना ठाढ़ो री - दुआचार गीत",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • द्वार आगमन व दुआचार",
    dialect: "बघेली व अवधी (रीवा, सतना, जनकपुर)",
    ritualContext: "जब बारात कन्या के मुख्य द्वार पर पहुँचती है और वर (दूल्हा) धनुषधारी मर्यादा पुरुषोत्तम श्रीराम के स्वरूप में द्वार पर उपस्थित होता है, तब सखियां व महिलाएं युगल जोड़ी की मंगल कामना में यह गीत गाती हैं।",
    description: "दूल्हे के धनुष, मौर और कलगी के शृंगार के साथ माता सीता और श्रीराम की अलौकिक जोड़ी मिलाने की पवित्र प्रार्थना।",
    audioSrc: "Ram Banra Ban Aayo Re - Banara.mp3",
    devanagariLyrics: [
      "लीन धनुष बन्ना ठाढ़ो री कोउ जोड़ी तो मिलाय दो।",
      "माऽथे पे मौरैं बांधे राजा बन्ना रे,",
      "कलऽगि सम्हारे सिया जानकी कोउ जोड़ी तो मिलाय दो।",
      "लीन धनुष बन्ना ठाढ़ो री कोउ जोड़ी तो मिलाय दो॥",
      "काने बना जी के कुंडल सोहै,",
      "झुमकि सम्हारे सिया जानकी कोउ जोड़ी तो मिलाय दो।",
      "लीन धनुष बन्ना ठाढ़ो री कोउ जोड़ी तो मिलाय दो॥"
    ],
    romanLyrics: [
      "Leen dhanush banna thaadho ri kou jodi to milaay do.",
      "Maathe pe mauren baandhe raja banna re,",
      "Kalagi samhaare Siya Jaanaki kou jodi to milaay do.",
      "Leen dhanush banna thaadho ri kou jodi to milaay do.",
      "Kaane bana ji ke kundal sohai,",
      "Jhumaki samhaare Siya Jaanaki kou jodi to milaay do.",
      "Leen dhanush banna thaadho ri kou jodi to milaay do."
    ]
  },

  // 2. BANNA BANNI GEET
  {
    id: "banna-banni-geet",
    title: "Banna Banni Vivah Geet (बन्ना-बन्नी)",
    hindiTitle: "मोरे दशरथ राज दुलार आज बनरा बन आयो रे",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • बन्ना शृंगार व उल्लास",
    dialect: "बघेली व अवधी (विंध्य व अवध)",
    ritualContext: "वर के सेहरा, मौर, वैजयंती माला और धनुष-बाण के शृंगार के समय मंगल मंडली द्वारा आनंदपूर्वक गाया जाने वाला सर्वप्रिय बन्ना गीत।",
    description: "महाराज दशरथ के राजदुलारे श्रीराम के जनकपुर द्वार पर वर बनकर आने का भव्य व उल्लासमय वर्णन।",
    audioSrc: "Ram Banra Ban Aayo Re - Banara.mp3",
    devanagariLyrics: [
      "मोरे दशरथ राज दुलार आज बनरा बन आयो रे।",
      "मोरे जनकराज जि के द्वार राम बनरा बन आयो रे॥",
      "माथे म उनके मौर बिराजै,",
      "चन्दन भरा है लिलार आज बनरा बन आयो रे।",
      "मोरे दशरथ राज दुलार आज बनरा बन आयो रे॥",
      "काने म उनके कुण्डल सोहै,",
      "गले बैजंती हार राम बनरा बन आयो रे।",
      "मोरे दशरथ राज दुलार आज बनरा बन आयो रे॥",
      "हाथे म उनके कंगन सोहै,",
      "लिहे धनुष अउर बाण राम बनरा बन आयो रे।",
      "मोरे दशरथ राज दुलार आज बनरा बन आयो रे।",
      "मोरे जनकराज जि के द्वार राम बनरा बन आयो रे, राम बनरा बन आयो रे॥"
    ],
    romanLyrics: [
      "More Dasharath raaj dulaar aaj banara ban aayo re.",
      "More Janakraaj ji ke dwaar Ram banara ban aayo re.",
      "Maathe ma unke maur biraajai, chandan bhara hai lilaar aaj banara ban aayo re.",
      "More Dasharath raaj dulaar aaj banara ban aayo re.",
      "Kaane ma unke kundal sohai, gale baijanti haar Ram banara ban aayo re.",
      "More Dasharath raaj dulaar aaj banara ban aayo re.",
      "Haathe ma unke kangan sohai, lihe dhanush aur baan Ram banara ban aayo re.",
      "More Dasharath raaj dulaar aaj banara ban aayo re.",
      "More Janakraaj ji ke dwaar Ram banara ban aayo re, Ram banara ban aayo re."
    ]
  },

  // 3. PARCHHAN VIVAAH GEET
  {
    id: "parchhan-vivaah-geet",
    title: "Parchhan Vivaah Geet (परछन विवाह संस्कार)",
    hindiTitle: "बिआहि लाये रघुबर जानकी का - परछन गीत",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • द्वार परछन व स्वागत",
    dialect: "बघेली व अवधी (रीवा, सतना, सीधी)",
    ritualContext: "वर द्वारा वधु का पाणिग्रहण कर जब बारात मंडप या वधु द्वार पर आरती के लिए उपस्थित होती है, तब कांस्य थाली में कपूर आरती के साथ गाया जाने वाला परछन गीत।",
    description: "श्री रघुबर द्वारा जानकी जी के लिए पागा-पिछौरा, चुनरी, मोतियों की माला, नथनी और म्याना (डोली) लाने का अनुपम सांस्कृतिक गान।",
    audioSrc: "Biyah Laye Raghubar - Parchhan Geet.mp3",
    devanagariLyrics: [
      "बिआहि लाये रघुबर जानकी का,",
      "बिआहि लाये रघुबर जानकी का॥",
      "अपने का लाये पागा पिछौरा,",
      "रंगाय लाये चुनरी जानकी का।",
      "बिआहि लाये रघुबर जानकी का॥",
      "अपने का लाये मोतियन के माला,",
      "गढ़ाई लाये नथनी जानकी का।",
      "बिआहि लाये रघुबर जानकी का॥",
      "अपने का लाये हाथी अउर घोड़ा,",
      "सजाई लाये म्याना जानकी का।",
      "बिआहि लाये रघुबर जानकी का, बिआहि लाये रघुबर जानकी का॥"
    ],
    romanLyrics: [
      "Biaahi laaye Raghubar Jaanaki ka, biaahi laaye Raghubar Jaanaki ka.",
      "Apne ka laaye paaga pichhaura, rangaay laaye chunari Jaanaki ka.",
      "Biaahi laaye Raghubar Jaanaki ka.",
      "Apne ka laaye motiyan ke maala, gadhaai laaye nathani Jaanaki ka.",
      "Biaahi laaye Raghubar Jaanaki ka.",
      "Apne ka laaye haathi aur ghoda, sajaai laaye myaana Jaanaki ka.",
      "Biaahi laaye Raghubar Jaanaki ka, biaahi laaye Raghubar Jaanaki ka."
    ]
  },

  // 4. BELNHAI GEET 1
  {
    id: "belnhai-geet-1",
    title: "Belnhai Vivaah Geet 1 (बेलनहाई संस्कार)",
    hindiTitle: "राजा जनकजी के चढ़ा रे करहबा, कउने बन लकड़ी क जाँय",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • कड़ाही व बेलनहाई",
    dialect: "बघेली व अवधी (विंध्य क्षेत्र)",
    ritualContext: "विवाह भोज प्रारंभ होने से पूर्व 'कड़ाही चढ़ाने' और चूल्हा पूजन की पवित्र रस्म। इसमें बढ़ई द्वारा प्रकृति संरक्षण, चंदन, नीम और पीपल वृक्षों के देवत्व का आदर किया जाता है।",
    description: "जनकपुर विवाह में कड़ाही चढ़ने और लकड़ी लाने के बहाने भगवान, शीतलता और पीपल में बसे देवों के पूजन का अनुपम लोकगीत।",
    audioSrc: "Ram Banra Ban Aayo Re - Banara.mp3",
    devanagariLyrics: [
      "ए जी, राजा जनकजी के चढ़ा रे करहबा, कउने बन लकड़ी क जाँय?",
      "ए जी, राजा जनकजी के चढ़ा रे करहबा, कउने बन लकड़ी को जाँय?॥",
      "ए जी, एक बन गए हैं, दुसर बन गए हैं, तिसिरे मा चंदन के पेड़,",
      "चंदन पेड़ न काटे हो बढ़ईया... चंदन चढ़ै भगवान!",
      "ए जी, राजा जनकजी के चढ़ा रे करहबा, कउने बन लकड़ी क जाँय?॥",
      "ए जी, एक बन गए हैं, दुसर बन गए हैं, तिसिरे मा निमिया के पेड़,",
      "निमिया के पेड़ न काटे हो बढ़ईया... निमिया के शीतल छाँव!",
      "ए जी, राजा जनकजी के चढ़ा रे करहबा, कउने बन लकड़ी क जाँय?॥",
      "ए जी, एक बन गए हैं, दुसर बन गए हैं, तिसिरे मा पीपर के पेड़,",
      "पीपर पेड़ न काटे हो बढ़ईया... पीपर बसें भगवान!",
      "ए जी, राजा जनकजी के चढ़ा रे करहबा, कउने बन लकड़ी क जाँय!॥"
    ],
    romanLyrics: [
      "Ae ji, Raja Janakji ke chadha re karahaba, kaune ban lakadi ka jaay?",
      "Ae ji, ek ban gaye hain, dusar ban gaye hain, tisire ma chandan ke ped,",
      "Chandan ped na kaato ho badhaiya, chandan chadhai Bhagwan!",
      "Ae ji, ek ban gaye hain, dusar ban gaye hain, tisire ma nimiya ke ped,",
      "Nimiya ke ped na kaato ho badhaiya, nimiya ke sheetal chhaanv!",
      "Ae ji, ek ban gaye hain, dusar ban gaye hain, tisire ma peepar ke ped,",
      "Peepar ped na kaato ho badhaiya, peepar basen Bhagwan!",
      "Ae ji, Raja Janakji ke chadha re karahaba, kaune ban lakadi ka jaay!"
    ]
  },

  // 5. BELNHAI GEET 2
  {
    id: "belnhai-geet-2",
    title: "Belnhai Vivaah Geet 2 (अयोध्या नगर वर्णन)",
    hindiTitle: "नगर अयोध्या बहुत नीक लागै, जहाँ राजा राम कुमार",
    category: "vivah",
    categoryLabel: "विवाह संस्कार • सखी संवाद व नगर शोभा",
    dialect: "अवधी व बघेली (अयोध्या, विंध्य)",
    ritualContext: "विवाह की तैयारियों के दौरान सखियों द्वारा परस्पर संवाद में अयोध्या धाम की शोभा, शिव, विष्णु, देवी के वाहनों और सीता जी के विवाह की स्वर्ण हवेली का गान।",
    description: "अत्यंत मधुर और गतिशील लोक संवाद शैली, जिसमें नंदी, रथ और सिंह की सवारी का शास्त्रीय व लोक समन्वय है।",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Awadhi Folk Song.mp3",
    devanagariLyrics: [
      "हे जी... नगर अयोध्या बहुत नीक लागै, जहाँ राजा राम कुमार!",
      "हे जी... नगर अयोध्या बहुत नीक लागै, जहाँ राजा राम कुमार!॥",
      "हे जी... काहे चढ़े शिव शंकर आमय, काहे चढ़े आमय भगवान?",
      "हे जी... काहे चढ़े देवी गरजतियामय, लाल ध्वजा फहराय?",
      "हे जी... नंदी चढ़े शिव शंकर आमय, रथवा चढ़े भगवान,",
      "हे जी... सिंह चढ़े देवी गरजतियामय, लाल ध्वजा फहराय॥",
      "हे जी... नगर अयोध्या बहुत नीक लागै, जहाँ राजा राम कुमार!",
      "हे जी... उहै जग-करता के बखरी बतावा, जहाँ सीता ब्याहन जाय?",
      "हे जी... बखरी बनी है सोने-सकरी लगी है, हथनी बंधी उनके द्वार!",
      "हे जी... नगर अयोध्या बहुत नीक लागै, जहाँ राजा राम कुमार!॥"
    ],
    romanLyrics: [
      "He ji, nagar Ayodhya bahut neek laagai, jahaan Raja Ram kumar!",
      "He ji, kaahe chadhe Shiv Shankar aamay, kaahe chadhe aamay Bhagwan?",
      "He ji, kaahe chadhe Devi garjatiyaamay, laal dhwaja phaharaay?",
      "He ji, Nandi chadhe Shiv Shankar aamay, rathawa chadhe Bhagwan,",
      "He ji, Singh chadhe Devi garjatiyaamay, laal dhwaja phaharaay.",
      "He ji, nagar Ayodhya bahut neek laagai, jahaan Raja Ram kumar!",
      "He ji, uhai jag-karta ke bakhari bataawa, jahaan Seeta byaahan jaay?",
      "He ji, bakhari bani hai sone-sakari lagi hai, hathani bandhi unke dwaar!",
      "He ji, nagar Ayodhya bahut neek laagai, jahaan Raja Ram kumar!"
    ]
  },

  // 6. GAILHAI FOLK SONG 1
  {
    id: "gailhai-amiliya",
    title: "Gailhai Folk Song 1 (विदाई व प्रतीक्षा)",
    hindiTitle: "झरी गए अमिलिया के पाती हो, मोरे सैंयाँ ना आए - गैलहाई",
    category: "vivah",
    categoryLabel: "विवाह विदाई व गैलहाई • विरह भाव",
    dialect: "बघेली (रीवा, सतना, मैहर)",
    ritualContext: "विदाई के बाद जब डोली गाँव की गलियों से निकलती है, तब विरहिणी के इंतजार, ठंडे पानी की गगरिया, सोने की थाली में भोजन और लौंग-इलायची के पान बीड़ा बासी होने का दर्द गाती हैं।",
    description: "विंध्य अंचल की सबसे गहरी और मर्मस्पर्शी गैलहाई, जो हर आँगन की विदाई और मिलन की प्रतीक्षा को वाणी देती है।",
    audioSrc: "Sohaag - Vivaah Geet.mp3",
    devanagariLyrics: [
      "झरी गए अमिलिया के पाती हो, मोरे सैंयाँ ना आए...॥",
      "जूड़-जूड़ पानी के भरों मैं गगरिया,",
      "पनियो त होएगा है बासी रे, मोरे सैंयाँ ना आए...।",
      "झरी गए अमिलिया के पाती हो, मोरे सैंयाँ ना आए...॥",
      "सोने की थाली मां जेमना परोस्यों,",
      "जेमनओ त होएगा है बासी रे, मोरे सैंयाँ ना आए...।",
      "झरी गए अमिलिया के पाती हो, मोरे सैंयाँ ना आए...॥",
      "लौंगा इलायची के बीरा लगायों,",
      "बीरौ त होएगा है बासी हो, मोरे सैंयाँ ना आए...।",
      "झरी गए अमिलिया के पाती हो, मोरे सैंयाँ ना आए...॥"
    ],
    romanLyrics: [
      "Jhari gaye amiliya ke paati ho, more sainyaan na aaye...",
      "Jood-jood paani ke bharon main gagariya, paniyo ta hoega hai baasi re, more sainyaan na aaye.",
      "Jhari gaye amiliya ke paati ho, more sainyaan na aaye...",
      "Sone ki thaali maa jemana parosyon, jemanao ta hoega hai baasi re, more sainyaan na aaye.",
      "Jhari gaye amiliya ke paati ho, more sainyaan na aaye...",
      "Launga ilaayachi ke beera lagaayon, beerau ta hoega hai baasi ho, more sainyaan na aaye.",
      "Jhari gaye amiliya ke paati ho, more sainyaan na aaye..."
    ]
  },

  // 7. GAILHAI FOLK SONG 2
  {
    id: "gailhai-lachhiman-baan",
    title: "Gailhai Folk Song 2 (पौराणिक आख्यान)",
    hindiTitle: "लछिमन लिहे बाण रामा, हिरनिया मारैं - गैलहाई",
    category: "vivah",
    categoryLabel: "विदाई व गैलहाई • पौराणिक गाथा",
    dialect: "बघेली (विंध्य क्षेत्र)",
    ritualContext: "विदाई और वन गमन के पौराणिक प्रसंग से जुड़ी उच्च ऊर्जा की युगल लोक गैलहाई, जो बगीचे, कुएँ और तालाब पर हिरणी शिकार और विरह का रूपक प्रस्तुत करती है।",
    description: "सारंगी, ढोलक और खंजरी पर गाई जाने वाली द्रुत गति की पारंपरिक विंध्य गैलहाई।",
    audioSrc: "Sohaag - Vivaah Geet.mp3",
    devanagariLyrics: [
      "लछिमन लिहे बाण रामा, हिरनिया मारैं,",
      "लछिमन लिहे बाण रामा, हिरनिया मारैं॥",
      "पहली हिरनिया बगइचा बिच मारंय, बगइचा बिच मारैं,",
      "फुलबन के ओट रामा हिरनिया मारैं।",
      "लछिमन लिहे बाण रामा, हिरनिया मारैं॥",
      "दुसरी हिरनिया कुआना बिच मारंय, कुआना बिच मारैं,",
      "रसरि के ओट रामा हिरनिया मारंय।",
      "लछिमन लिहे बाण रामा, हिरनिया मारैं॥",
      "तिसरी हिरनिया तलाये बिच मारंय, बिच मारैं,",
      "घाटन के ओट रामा हिरनिया मारंय।",
      "लछिमन लिहे बाण रामा, हिरनिया मारैं, लछिमन लिहे बाण रामा, हिरनिया मारैं॥"
    ],
    romanLyrics: [
      "Lachhiman lihe baan Rama, hiraniya maarain, Lachhiman lihe baan Rama, hiraniya maarain.",
      "Pahali hiraniya bagaicha bich maaran, bagaicha bich maarain, phulban ke ot Rama hiraniya maarain.",
      "Lachhiman lihe baan Rama, hiraniya maarain.",
      "Dusari hiraniya kuaana bich maaran, kuaana bich maarain, rasari ke ot Rama hiraniya maaran.",
      "Lachhiman lihe baan Rama, hiraniya maarain.",
      "Tisari hiraniya talaaye bich maaran, bich maarain, ghaatan ke ot Rama hiraniya maaran.",
      "Lachhiman lihe baan Rama, hiraniya maarain."
    ]
  },

  // 8. GAILHAI FOLK SONG 3
  {
    id: "gailhai-rama-lakhan",
    title: "Gailhai Folk Song 3 (साधु वनगमन)",
    hindiTitle: "रामा लखन तपसी दोनों भइया, साधु बनय चले जाय - गैलहाई",
    category: "vivah",
    categoryLabel: "विदाई व गैलहाई • करुण गाथा",
    dialect: "बघेली व अवधी",
    ritualContext: "बेटी की विदाई के समय श्रीराम-लक्ष्मण के वन प्रस्थान के त्याग की तुलना करते हुए मालिन, कहरिन और रानी द्वारा सेवा प्रस्ताव व साधु धर्म की मर्यादा का गान।",
    description: "विंध्य-अवध की अत्यंत मार्मिक गैलहाई जो वैराग्य, मर्यादा और त्याग को अश्रुपूर्ण स्वर देती है।",
    audioSrc: "Sohaag - Vivaah Geet.mp3",
    devanagariLyrics: [
      "रामा लखन तपसी दोनों भइया, साधु बनय चले जाय मोरे लाल।",
      "अरे रामा लखन तपसी दोनों भइया, साधु बनय चले जाय मोरे लाल॥",
      "चलते चलते बागा म पहुंचे, मालिन उठी हर्षाय मोरे लाल।",
      "ठहरो ठहरो ओ साधु भइया, माला पहिन चले जाओ मोरे लाल।",
      "तोर गुहा माला न पहिनब मालिन, साधू धरम घटी जाय मोरे लाल॥",
      "चलते चलते कुआना म पहुंचे, कहरिन उठी हर्षाय मोरे लाल।",
      "ठहरो ठहरो ओ साधु भइया, पनिया पिये चले जाओ मोरे लाल।",
      "तोर भरा पानी न पियब कहरिन, साधू धरम घटी जाय मोरे लाल॥",
      "चलते चलते महलन म पहुंचे, रानी उठी हर्षाय मोरे लाल।",
      "ठहरो ठहरो ओ साधु भइया, भोजन करत चले जाओ मोरे लाल।",
      "तोर बना भोजन न करब माता, साधू धरम घटी जाय मोरे लाल।",
      "रामा लखन तपसी दोनों भइया, साधु बनय चले जाय मोरे लाल॥"
    ],
    romanLyrics: [
      "Rama Lakhan tapasi dono bhaiya, saadhu banay chale jaay more laal.",
      "Chalte chalte baaga ma pahunche, maalin uthi harshaay more laal.",
      "Thaharo thaharo o saadhu bhaiya, maala pahin chale jaao more laal.",
      "Tor guha maala na pahinab maalin, saadhu dharam ghati jaay more laal.",
      "Chalte chalte kuaana ma pahunche, kaharin uthi harshaay more laal.",
      "Thaharo thaharo o saadhu bhaiya, paniya piye chale jaao more laal.",
      "Tor bhara paani na piyab kaharin, saadhu dharam ghati jaay more laal.",
      "Chalte chalte mahalan ma pahunche, rani uthi harshaay more laal.",
      "Thaharo thaharo o saadhu bhaiya, bhojan karat chale jaao more laal.",
      "Tor bana bhojan na karab maata, saadhu dharam ghati jaay more laal."
    ]
  },

  // 9. SOHAR DADARA (LAKHAN LUTAI DEB)
  {
    id: "sohar-dadra-lakhan",
    title: "Sohar Dadara (सोहर दादरा - जन्मोत्सव नेग)",
    hindiTitle: "एही अँगना म लाखन लुटाई देब - सोहर दादरा",
    category: "sohar",
    categoryLabel: "जन्मोत्सव • सोहर दादरा व बधाई",
    dialect: "बघेली (रीवा, सतना, सीधी)",
    ritualContext: "संतान जन्मोत्सव पर सासू द्वारा पीपर पीसने पर झुलनी गढ़ाने/उतारने और जेठानी द्वारा लड्डू बाँधने पर बेसरिया देने की हास-परिहास युक्त नेग परंपरा।",
    description: "बघेलखंड का सर्वप्रिय सोहर दादरा जो हर नवजात शिशु के आगमन पर आँगन में ढोलक की तेज थाप पर गूंजता है।",
    audioSrc: "एही अँगना म लाखन लुटाई देब - Sohar Dadra Male Version.mp3",
    devanagariLyrics: [
      "एही अँगना म... एही अँगना म!",
      "एही अँगना म लाखन लुटाई देब, एही अँगना म लाखन लुटाई देब॥",
      "सासु जो अईंहैं पीपर पीसय, माँगयं आपन नेग,",
      "ए हो... झुलनिया गढ़ाए देब!",
      "एही अँगना म झुलनिया गढ़ाए देब, एही अँगना म लाखन लुटाई देब।",
      "जो दुरुर-दुरुर पिसबू... जो दुरुर-दुरुर पिसबू, झुलनिया उतारि लेब!",
      "एही अँगना म झुलनिया उतारि लेब, एही अँगना म लाखन लुटाई देब॥",
      "जेठि जो अईंहैं लड्डू बाँधय, माँगय आपन नेग,",
      "ए हो... बेसरिया गढ़ाए देब!",
      "एही अँगना म बेसरिया गढ़ाए देब, एही अँगना म लाखन लुटाई देब।",
      "जो छोट-बड़ा बँधबू... जो छोट-बड़ा बँधबू, बेसरिया उतारि लेब!",
      "एही अँगना म बेसरिया उतारि लेब, एही अँगना म लाखन लुटाई देब॥",
      "अरे लाखन लुटाई देब! एही अँगना म लाखन लुटाई देब॥"
    ],
    romanLyrics: [
      "Ehi angana ma laakhan lutaaee deb, ehi angana ma laakhan lutaaee deb.",
      "Saasu jo aeenhain peepar peesay, maangayan aapan neg, e ho... jhulanaiya gadhaaye deb!",
      "Ehi angana ma jhulanaiya gadhaaye deb, ehi angana ma laakhan lutaaee deb.",
      "Jo durur-durur pisaboo, jhulanaiya utaari leb!",
      "Ehi angana ma jhulanaiya utaari leb, ehi angana ma laakhan lutaaee deb.",
      "Jethi jo aeenhain laddu baandhay, maangay aapan neg, e ho... besariya gadhaaye deb!",
      "Ehi angana ma besariya gadhaaye deb, ehi angana ma laakhan lutaaee deb.",
      "Jo chhot-bada bandhaboo, besariya utaari leb!",
      "Ehi angana ma besariya utaari leb, ehi angana ma laakhan lutaaee deb."
    ]
  },

  // 10. KRISHNA JANM SOHAR
  {
    id: "krishna-janm-sohar",
    title: "Krishna Janm Sohar (श्रीकृष्ण जन्मोत्सव)",
    hindiTitle: "जनमे हैं कृष्ण मुरारी जगत हितकारी - सोहर गीत",
    category: "sohar",
    categoryLabel: "जन्मोत्सव • श्रीकृष्ण सोहर व बधाई",
    dialect: "बघेली व अवधी (विंध्य आंगन परंपरा)",
    ritualContext: "भाद्रपद कृष्ण अष्टमी (जन्माष्टमी) और घर में पुत्र/कन्या जन्मोत्सव पर रोहिणी नक्षत्र में मथुरा अवतार और गोकुल पलना झूलने का दिव्य सोहर।",
    description: "अत्यंत शांत, अलौकिक और भक्ति-विभोर सोहर जो मातृत्व और ईश्वर के शिशु रूप के वात्सल्य को साकार करता है।",
    audioSrc: "Lakhan Lutai Deb - Sohar Dadra Female Version.mp3",
    devanagariLyrics: [
      "जनमे हैं कृष्ण मुरारी जगत हितकारी, जगत हितकारी हो...",
      "जनमे हैं कृष्ण मुरारी जगत हितकारी, जगत हितकारी हो॥",
      "अब मथुरा म लिहिन अवतार गोकुल झूलैं पलना, गोकुल झूलैं पलna हो...",
      "प्रभु मथुरा म लिहिन अवतार गोकुल झूलैं पलना, गोकुल झूलैं पलना हो॥",
      "तिथि अष्टमी राति भादौं बड़ी शुभ बेरिया, बड़ी शुभ बेरिया हो...",
      "तिथि अष्टमी राति भादौं बड़ी शुभ बेरिया, बड़ी शुभ बेरिया हो॥",
      "अब रोहिणी नछत्र आधी रतिया कन्हइया मोरे जनमे, हाँ शुभ घड़ी जनमे हो...",
      "कान्हा रोहिणी नछत्र आधी रतिया कन्हइया मोरे जनमे, हाँ शुभ घड़ी जनमे हो॥",
      "जनमे हैं कृष्ण मुरारी जगत हितकारी, जगत हितकारी हो..."
    ],
    romanLyrics: [
      "Janme hain Krishna Muraari jagat hitkaari, jagat hitkaari ho.",
      "Ab Mathura ma lihin awataar Gokul jhoolain palana, Gokul jhoolain palana ho.",
      "Tithi ashtami raati bhaadaun badi shubh beriya, badi shubh beriya ho.",
      "Ab Rohini nachhatra aadhi ratiya Kanhaiya more janme, haan shubh ghadi janme ho.",
      "Janme hain Krishna Muraari jagat hitkaari, jagat hitkaari ho."
    ]
  },

  // 11. GHAAT POOJAN / KUAN POOJAN
  {
    id: "ghaat-poojan-kuaan",
    title: "Ghaat Poojan / Kuaan Poojan (कुआँ पूजन संस्कार)",
    hindiTitle: "जल भरौं हिलोर हिलोर रेशम की डोरी - कुआँ पूजन",
    category: "sohar",
    categoryLabel: "शिशु संस्कार • जलवा व कुआँ पूजन",
    dialect: "बघेली (रीवा, सतना, सीधी)",
    ritualContext: "प्रसूति उपरांत माता द्वारा नवजात शिशु के मंगल के लिए जल देवता, कुआँ और घाट पूजन (जलवा पूजन) के समय सोने की गगरी और रेशम की डोरी के साथ गाया जाने वाला गीत।",
    description: "सोने की घइलना (कलश), गोटा लहंगा, गोदी में ललना और काशी में मुंडन के मंगल संकल्प का हृदयस्पर्शी संस्कार गीत।",
    audioSrc: "Jal Bharao Hilore - Sohar Dadar.mp3",
    devanagariLyrics: [
      "जल भरौं हिलोर हिलोर रेशम की डोरी,",
      "ओ जल भरौं हिलोर हिलोर रेशम की डोरी॥",
      "रेशम डोरी तब निक लागय,",
      "जब सोने घइलना होए, रेशम की डोरी।",
      "जल भरौं हिलोर हिलोर रेशम की डोरी॥",
      "सोने घइलना तब निक लागय,",
      "जब गोटा के लहंगा होए, रेशम की डोरी।",
      "जल भरौं हिलोर हिलोर रेशम की डोरी॥",
      "गोटा के लहंगा तब निक लागय,",
      "जब गोदी म ललना होए, रेशम की डोरी।",
      "जल भरौं हिलोर हिलोर रेशम की डोरी॥",
      "गोदी म ललना तब निक लागय,",
      "जब काशी मा मूंड़न होए, रेशम की डोरी।",
      "जल भरौं हिलोर हिलोर रेशम की डोरी॥"
    ],
    romanLyrics: [
      "Jal bharon hilor hilor resham ki dori, o jal bharon hilor hilor resham ki dori.",
      "Resham dori tab nik laagay, jab sone ghailana hoye, resham ki dori.",
      "Sone ghailana tab nik laagay, jab gota ke lahanga hoye, resham ki dori.",
      "Gota ke lahanga tab nik laagay, jab godi ma lalana hoye, resham ki dori.",
      "Godi ma lalana tab nik laagay, jab Kaashi ma moondan hoye, resham ki dori.",
      "Jal bharon hilor hilor resham ki dori."
    ]
  },

  // 12. NACHANHAI PHAAG 1 (JARAI BHINSAARE)
  {
    id: "nachanhai-phaag-jarai",
    title: "Nachanhai Phaag 1 (महुआ उजरि गा - हास्य फागुआ)",
    hindiTitle: "जरै भिनसारे कै निंदिया हो मोर महुआ उजरि गा",
    category: "seasonal",
    categoryLabel: "ऋतु लोकगीत • नचनहाई फाग व हास-परिहास",
    dialect: "बघेली (रीवा, सतना, विंध्याचल)",
    ritualContext: "फागुन में महुआ बीनने के समय ससुराल में सास-ससुर, जेठ-जेठानी, देवर-ननद के बहानों और प्रातःकाल की नींद पर ग्रामीण महिलाओं की तीखी, चुलबुली व्यंग्य फाग।",
    description: "बघेलखंड का सर्वाधिक लोकप्रिय लोक व्यंग्य गीत, जो घरेलू सजीवता और अदम्य ग्रामीण ऊर्जा से परिपूर्ण है।",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    devanagariLyrics: [
      "जरै भिनसारे कै निंदिया हो मोर महुआ उजरि गा।",
      "ससुरु न जागें, मोर सासू न जागीं, जागै न लहुरी ननदिया हो मोर महुआ उजरि गा॥",
      "जरै भिनसारे कै निंदिया हो मोर महुआ उजरि गा।",
      "जेठा न जागें, जेठानी न जागीं, जागै न लहुरा देवरबा हो मोर महुआ उजरि गा॥",
      "जरै भिनसारे कै निंदिया हो मोर महुआ उजरि गा।",
      "ससुरु कहैं मोरा बाखा धरे है, सासू कै करिहा पिरानी हो मोर महुआ उजरि गा॥",
      "जरै भिनसारे कै निंदिया हो मोर महुआ उजरि गा।",
      "जेठा कहैं मोहे खेतबा निरन है, जेठी कै ओठर को जानी हो मोर महुआ उजरि गा॥",
      "जरै भिनसारे कै निंदिया हो मोर महुआ उजरि गा।",
      "ननदी कहैं मोहे पनिया भरन है, देवरा करै मनमानी हो मोर महुआ उजरि गा।",
      "जरै भिनसारे कै निंदिया हो मोर महुआ उजरि गा॥"
    ],
    romanLyrics: [
      "Jarai bhinsaare kai nindiya ho mor mahua ujari ga.",
      "Sasuru na jaagen, mor saasu na jaageen, jaagai na lahuri nanadiya ho mor mahua ujari ga.",
      "Jetha na jaagen, jethaani na jaageen, jaagai na lahura dewarba ho mor mahua ujari ga.",
      "Sasuru kahain mora baakha dhare hai, saasu kai kariha piraani ho mor mahua ujari ga.",
      "Jetha kahain mohe khetba niran hai, jethi kai othhar ko jaani ho mor mahua ujari ga.",
      "Nanadi kahain mohe paniya bharan hai, dewara karai manamaani ho mor mahua ujari ga.",
      "Jarai bhinsaare kai nindiya ho mor mahua ujari ga."
    ]
  },

  // 13. NACHANHAI PHAAG 2 (KAHAU BAAJAT HAI BEEN)
  {
    id: "nachanhai-phaag-been",
    title: "Nachanhai Phaag 2 (बीन व रसिया संवाद)",
    hindiTitle: "कहौं बाजत है बीन सुनौ रसिया - नचनहाई फाग",
    category: "seasonal",
    categoryLabel: "ऋतु लोकगीत • फाग व बीन जुगलबंदी",
    dialect: "बघेली व बुंदेली (विंध्य-बुंदेलखंड)",
    ritualContext: "फागुन में बीन और नगाड़िया पर सखी और रसिया के रूप, रंग, लाल पलंग, हरियर तकिया, रूठने और मान जाने का तेज लयबद्ध नृत्य गीत।",
    description: "ढोलक की थाप और बीन के घुंघरुओं पर आधारित बुंदेलखंड व बघेलखंड का सदाबहार फागुआ नृत्य।",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    devanagariLyrics: [
      "कहौं बाजत है बीन सुनौ रसिया,",
      "कहौं बाजत है बीन सुनौ रसिया॥",
      "कउन रंग गोरी, कउन रंग रसिया?",
      "अरे कइसन पलंग, कइसन तकिया?",
      "कहौं बाजत है बीन सुनौ रसिया॥",
      "गोर रंग गोरी, साँवर रंग रसिया,",
      "अरे लाल पलंग, हरियर तकिया।",
      "कहौं बाजत है बीन सुनौ रसिया॥",
      "रूठि गय गोरी, रूठि गैं रसिया,",
      "अरे रोवै पलंग, सिसकै तकिया।",
      "कहौं बाजत है बीन सुनौ रसिया॥",
      "मानि गय गोरी, मानि गैं रसिया,",
      "अरे हँसै पलंग, खिलि गय तकिया।",
      "कहौं बाजत है बीन सुनौ रसिया, कहौं बाजत है बीन सुनौ रसिया॥"
    ],
    romanLyrics: [
      "Kahau baajat hai been sunau rasiya, kahau baajat hai been sunau rasiya.",
      "Kaun rang gori, kaun rang rasiya? Are kaisan palang, kaisan takiya?",
      "Gor rang gori, saanwar rang rasiya, are laal palang, hariyar takiya.",
      "Roothi gay gori, roothi gain rasiya, are rowai palang, sisakai takiya.",
      "Maani gay gori, maani gain rasiya, are hansai palang, khili gay takiya.",
      "Kahau baajat hai been sunau rasiya."
    ]
  },

  // 14. NACHANHAI PHAAG 3 (CHALE AAWA MORE RAJA)
  {
    id: "nachanhai-phaag-raja",
    title: "Nachanhai Phaag 3 (महलिया म बुलावा)",
    hindiTitle: "चले आवा मोरे राजा महलिया म - नचनहाई फाग",
    category: "seasonal",
    categoryLabel: "ऋतु लोकगीत • फाग व मान-मनौव्वल",
    dialect: "बघेली (रीवा, सतना)",
    ritualContext: "होली और वसंतोत्सव में घर की अटरिया, खिड़की, दुअरिया के बड़े नीम और ओढ़नी के गोटे की पहचान कराकर पति को महल में बुलाने का उल्लासमय गीत।",
    description: "नगाड़े और ढोलक के तेज कहरवा पर गाया जाने वाला पारंपरिक बघेली प्रेम और उल्लास फाग।",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    devanagariLyrics: [
      "ओ चले आवा मोरे राजा महलिया म,",
      "चले आवा मोरे राजा महलिया म॥",
      "जो मोरे राजा ढूँढ़े न पावा,",
      "देखा खिड़की लगी है अटरिया म, चले आवा मोरे राजा महलिया म।",
      "अरे खिड़की लगी है अटरिया म, चले आवा मोरे राजा महलिया म॥",
      "जो मोरे राजा हेरे न पावा,",
      "बड़ा नीम लगा है दुअरिया म, चले आवा मोरे राजा महलिया म।",
      "देखा नीम लगा है दुअरिया म, चले आवा मोरे राजा महलिया म॥",
      "जो मोरे राजा चीन्हे न पावा,",
      "सुन्दर गोटा लगा है ओढ़निया म, चले आवा मोरे राजा महलिया म।",
      "अरे गोटा लगा है ओढ़निया म, चले आवा मोरे राजा महलिया म॥"
    ],
    romanLyrics: [
      "O chale aawa more raja mahaliya ma, chale aawa more raja mahaliya ma.",
      "Jo more raja dhoondhe na paawa, dekha khidki lagi hai atariya ma, chale aawa more raja mahaliya ma.",
      "Jo more raja here na paawa, bada neem laga hai duariya ma, chale aawa more raja mahaliya ma.",
      "Jo more raja cheenhe na paawa, sundar gota laga hai odhaniya ma, chale aawa more raja mahaliya ma."
    ]
  },

  // 15. KAJARI GEET (PIYA GAYE HAIN PARDES)
  {
    id: "kajari-piya-pardes",
    title: "Kajari Folk Geet (पिया गए परदेस - विरह कजरी)",
    hindiTitle: "पिया गए हैं परदेस न भाए ससुरारी - बघेली कजरी",
    category: "seasonal",
    categoryLabel: "ऋतु लोकगीत • सावन व विरह कजरी",
    dialect: "बघेली व मिर्ज़ापुरी (विंध्य अंचल)",
    ritualContext: "सावन मास में घनघोर कारी बदरिया छाने पर पति के परदेस में होने से सूने आंगन, देहरी पर टकटकी लगाए नैन और ससुराल न भाने का कारुणिक सावन गीत।",
    description: "दादरा ताल (6/4) और जोगिया सारंगी के आर्तनाद पर आधारित विशुद्ध ग्रामीण कजरी।",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Awadhi Folk Song.mp3",
    devanagariLyrics: [
      "ओ हरे रमा, पिया गए हैं परदेस न भाए ससुरारी रे हारी,",
      "हाँ हरे रमा, पिया गए हैं परदेस न भाए ससुरारी रे हारी॥",
      "हरे रमा, सून परा है अँगना अउर दुअरिया,",
      "ओ हरे रमा, डेहरी ताकैं नैन, न भाए ससुरारी रे हारी।",
      "हाँ हरे रमा, पिया गए हैं परदेस न भाए ससुरारी रे हारी॥",
      "हरे रमा, बरसत हैं दिन रात बदरिया रामा,",
      "हरे रमा, जिया न लागै मोर, न भाए ससुरारी रे हारी।",
      "हरे रमा, पिया गए हैं परदेस न भाए ससुरारी रे हारी॥",
      "हरे रमा छा-ई घ-टा घनघोर बदरिया कारी रे हारी,",
      "बदरिया कारी रे हारी, बदरिया कारी रे हारी॥"
    ],
    romanLyrics: [
      "O hare Rama, piya gaye hain pardes na bhaaye sasuraari re haari,",
      "Haan hare Rama, piya gaye hain pardes na bhaaye sasuraari re haari.",
      "Hare Rama, soon para hai angana aur duariya,",
      "O hare Rama, dehari taakain nain, na bhaaye sasuraari re haari.",
      "Hare Rama, barasat hain din raat badariya Rama, jia na laagai mor, na bhaaye sasuraari re haari.",
      "Hare Rama chhaayee ghata ghanghor badariya kaari re haari."
    ]
  },

  // 16. SEASONAL GAILHAI FOR RAINY SEASON
  {
    id: "seasonal-gailhai-rainy",
    title: "Seasonal Gailhai (बरखा व सखी झूला)",
    hindiTitle: "बरसय बड़े बूंद रामा चुनरिया भींजै - वर्षा गैलहाई",
    category: "seasonal",
    categoryLabel: "ऋतु लोकगीत • वर्षा, झूला व पुरवैया",
    dialect: "बघेली (रीवा, सतना)",
    ritualContext: "वर्षा ऋतु में बादलों के गरजने, बिजली चमकने, पुरवैया हवा बहने और पीपल की डाल पर झूला डालकर सखियों के संग भीगने का उल्लासमय लोकगीत।",
    description: "ढोलक की छमक और मंजीरे पर सखियों के उन्मुक्त आनंद और ग्रामीण सावन का सजीव चित्रण।",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    devanagariLyrics: [
      "बरसय बड़े बूंद रामा चुनरिया भींजै...॥",
      "बरसय बड़े बूंद रामा चुनरिया भींजै...॥",
      "छाये ह बदरा चमक उठी बिजुरी,",
      "ओ गरजय बड़ा ज़ोर रामा, चुनरिया भींजै...॥",
      "सर-सर बहत ही पवन पुरवैया,",
      "ओ नाचंय सखी मोर रामा, चुनरिया भींजै...॥",
      "डारिन हैं झुलना पीपर के डारी,",
      "ओ झूलैंय सखी मोर रामा, चुनरिया भींजै...॥",
      "बरसय बड़े बूंद रामा चुनरिया भींजै...",
      "बरसय बड़े बूंद रामा चुनरिया भींजै...॥"
    ],
    romanLyrics: [
      "Barasay bade boond Rama chunariya bheenjai...",
      "Chhaaye ha badara chamak uthi bijuri, o garajay bada zor Rama, chunariya bheenjai...",
      "Sar-sar bahat hi pawan purwaiya, o naachan sakhi mor Rama, chunariya bheenjai...",
      "Daarin hain jhulana peepar ke daari, o jhoolain sakhi mor Rama, chunariya bheenjai...",
      "Barasay bade boond Rama chunariya bheenjai..."
    ]
  },

  // 17. SEASONAL ROPAI PURBI GEET
  {
    id: "seasonal-ropai-purbi",
    title: "Seasonal Ropai Purbi (धान रोपाई व मेघ संवाद)",
    hindiTitle: "पनिया भरन गए ससुरे सगरवा, मेघा छेकेई पनिया के घटवा",
    category: "seasonal",
    categoryLabel: "कृषि व ऋतु • धान रोपाई लोक गाथा",
    dialect: "पूर्वी व भोजपुरी (पूर्वांचल व विंध्य)",
    ritualContext: "धान की रोपाई के समय खेतों में महिलाओं द्वारा समूह में गाई जाने वाली पुरातन लोक गाथा, जिसमें पनिहारिन और मेघराज के बीच रोचक संवाद और डोली की मांग है।",
    description: "ग्रामीण कृषि संस्कृति की अमर गाथा, जो वर्षा, श्रम और पारिवारिक रिश्तों को एक साथ पिरोती है।",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Awadhi Folk Song.mp3",
    devanagariLyrics: [
      "पनिया भरन गए ससुरे सगरवा हो, मेघा छेकेई पनिया के घटवा हो ना,",
      "रामा मेघा छेकेई पनिया के घटवा हो ना॥",
      "छोड़बे जो मेघबा तैं मोरा पानी घटवा ता, तोहि देबई लहुरी ननदिया हो ना,",
      "मेघा तोहि देबई लहुरी ननदिया हो ना॥",
      "एतनी बचन सुनी दौड़े आबा मेघवा हो, आई पहुंचा ससुर दुअरबा हो ना॥",
      "भीतरे हां भौजी कि बाहरे सरहजिया हो, भेजी दे तू लहुरी ननदिया हो ना॥",
      "कैसे कै भेजी मेघउ लहुरी ननदिया का, तोहरे ना घरवा दुअरवा हो ना॥",
      "एतनी बचन सुनी दौड़े आबा मेघवा हो, बनवाई लागे दुमहला हो ना॥",
      "भीतरे हां भौजी कि बाहरे सरहजिया हो, भेजी दे तू लहुरी ननदिया हो ना॥",
      "कैसे कै भेजी मेघाउ तोहरे निसंगवा हो, नाही लाया डोलिया कहरवा हो ना॥",
      "एतनी वचन जब सुनी लीन्हे मेघाउ ता, डोलिया कहार लई के आवई हो ना॥",
      "भीतरे हां भौजी कि बाहरे सरहजिया हो, भेजी दे तू लहुरी ननदिया हो ना॥",
      "मेघबा के साथे भौजी ननदी बियाही हो, मेघा लई के चला गा ननदिया हो ना।",
      "रामा मेघा लई के चला गा ननदिया हो ना॥"
    ],
    romanLyrics: [
      "Paniya bharan gaye sasure sagarwa ho, Megha chhekei paniya ke ghatwa ho na.",
      "Chhodabe jo Meghba tain mora paani ghatwa ta, tohi debai lahuri nanadiya ho na.",
      "Eteni bachan suni daude aaba Meghwa ho, aai pahuncha sasur duarba ho na.",
      "Bheetare haan bhauji ki baahare sarahajiya ho, bheji de tu lahuri nanadiya ho na.",
      "Kaise kai bheji Meghau lahuri nanadiya ka, tohare na gharwa duarwa ho na.",
      "Banwaai laage dumahala ho na... Doliya kahaar lai ke aawai ho na...",
      "Meghba ke saathe bhauji nanadi biyaahi ho, Megha lai ke chala ga nanadiya ho na."
    ]
  },

  // 18. DADRA GEET (HAMARI GULABI CHUNARIYA)
  {
    id: "dadra-gulabi-chunariya",
    title: "Dadra Shringar Geet (गुलाबी चुनरिया)",
    hindiTitle: "हमरी गुलाबी चुनरिया, हमैं लग जइहैं नजरिया रे - दादरा",
    category: "seasonal",
    categoryLabel: "शृंगार व दादरा • विंध्य लोक उत्सव",
    dialect: "बघेली व बुंदेली (रीवा, सतना)",
    ritualContext: "पारिवारिक उत्सवों, हल्दी और बारात आगमन पर बाग में फूल तोड़ने, यमुना में जल भरने और महल की खिड़की पर चुनरी उड़ने का प्रसिद्ध शृंगार दादरा।",
    description: "ढोलक और तबले पर गाई जाने वाली अत्यंत मधुर और लोकप्रिय पारंपरिक रचना।",
    audioSrc: "More Raja - Bagheli Lokgeet.mp3",
    devanagariLyrics: [
      "हमरी गुलाबी चुनरिया, हमैं लग जइहैं नजरिया रे।",
      "हमरी गुलाबी चुनरिया, हमैं लग जइहैं नजरिया रे॥",
      "बागा गई थी फुलवा तोड़न का, बागा गई थी फुलवा तोड़न का,",
      "भँवरे की लग गई नजरिया, हमैं लग जइहैं नजरिया रे।",
      "हमरी गुलाबी चुनरिया, हमैं लग जइहैं नजरिया रे॥",
      "यमुना गई थी पनिया भरन का, यमुना गई थी पनिया भरन का,",
      "कान्हा ने तोड़ी गगरिया, हमैं लग जइहैं नजरिया रे।",
      "हमरी गुलाबी चुनरिया, हमैं लग जइहैं नजरिया रे॥",
      "महलन गई थी खिड़की झंकन का, महलन गई थी खिड़की झंकन का,",
      "खिड़की से उड़ गई चुनरिया, हमैं लग जइहैं नजरिया रे।",
      "हमरी गुलाबी चुनरिया, हमैं लग जइहैं नजरिया रे॥"
    ],
    romanLyrics: [
      "Hamari gulaabi chunariya, hamain lag jaihain nazariya re.",
      "Baaga gayi thi phulwa todan ka, bhanware ki lag gayi nazariya hamain lag jaihain nazariya re.",
      "Yamuna gayi thi paniya bharan ka, Kaanha ne todi gagariya hamain lag jaihain nazariya re.",
      "Mahalan gayi thi khidaki jhankan ka, khidaki se ud gayi chunariya hamain lag jaihain nazariya re.",
      "Hamari gulaabi chunariya, hamain lag jaihain nazariya re."
    ]
  },

  // 19. KAJRI DHUN PAR GANESH BHAJAN (Prameesh Mishra)
  {
    id: "kajri-ganesh-bhajan",
    title: "Kajri Dhun par Ganesh Bhajan (गणेश वंदना)",
    hindiTitle: "हरे रामा अँगना पधारे गनराज - कजरी धुन गणेश भजन",
    category: "bhakti",
    categoryLabel: "भक्ति व कजरी • रचना: प्रमीश मिश्रा",
    dialect: "बघेली व अवधी",
    authorNote: "मूल रचना: प्रमीश मिश्रा (Prameesh Mishra). पारंपरिक कजरी धुन पर रचित विशिष्ट भक्ति लोक रचना।",
    ritualContext: "किसी भी शुभ कार्य, विवाह या उत्सव के आरंभ में कजरी की लयबद्ध धुन (कहरवा ताल) पर गजानन श्री गणेश का आह्वान और मोदक भोग वंदना।",
    description: "प्रमीश मिश्रा द्वारा रचित अत्यंत भावपूर्ण और झूमने वाली कजरी शैली की गणेश स्तुति।",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Awadhi Folk Song.mp3",
    devanagariLyrics: [
      "हरे रामा... अँगना पधारे... गनराज...",
      "हरे रामा अँगना पधारे गनराज, मगन संसारी रे हारी,",
      "हरे रामा अँगना पधारे गनराज, मगन संसारी रे हारी॥",
      "हरे रामा, माथे म तोहरे तिलक सजाई रामा,",
      "हरे रामा लडुअन के हम भोग लगाई रामा।",
      "हरे रामा लिहे आरती के थार, मगन संसारी रे हारी,",
      "हरे रामा अँगना पधारे गनराज, मगन संसारी रे हारी॥",
      "हरे रामा दीनन के तू सदा सहाई रामा,",
      "हरे रामा सब दुखियन का पार लगाई रामा।",
      "हरे रामा दिहे अभय वरदान, मगन संसारी रे हारी,",
      "हरे रामा अँगना पधारे गनराज, मगन संसारी रे हारी॥"
    ],
    romanLyrics: [
      "Hare Rama... Angana padhaare... Ganraaj...",
      "Hare Rama angana padhaare Ganraaj, magan sansaari re haari.",
      "Hare Rama, maathe ma tohare tilak sajaai Rama, laduan ke hum bhog lagaai Rama.",
      "Hare Rama lihe aarti ke thaar, magan sansaari re haari.",
      "Hare Rama deenan ke tu sada sahaai Rama, sab dukhiyan ka paar lagaai Rama.",
      "Hare Rama dihe abhay varadaan, magan sansaari re haari, angana padhaare Ganraaj."
    ]
  },

  // 20. LAMTERA GEET / BABA BHOLA GEET (Prameesh Mishra)
  {
    id: "lamtera-bhola-geet",
    title: "Lamtera Geet / Baba Bhola Geet (शिव भक्ति)",
    hindiTitle: "दरस की ता बेरा भई हो, अब लउटा छबीले भोलेनाथ - लमतेरा",
    category: "bhakti",
    categoryLabel: "भक्ति व लमतेरा • रचना: प्रमीश मिश्रा",
    dialect: "बघेली (रीवा, सतना, सीधी)",
    authorNote: "मूल रचना: प्रमीश मिश्रा (Prameesh Mishra). विंध्य-बुंदेलखंड की पारंपरिक लमतेरा / भोला गीत शैली।",
    ritualContext: "सावन मास, कांवड़ यात्रा और महाशिवरात्रि पर भगवान भोलेनाथ और माता गौरा के दर्शन, औघड़ छवि और जटा से गंगा प्रवाह की भावविभोर स्तुति।",
    description: "ढोलक और बांसुरी की सुरम्य धुन पर प्रमीश मिश्रा द्वारा रचित विंध्य का अमर शिव लमतेरा भजन।",
    audioSrc: "Shiva Panchakshara Stotram - Stotra Chanting.mp3",
    devanagariLyrics: [
      "दरस की ता बेरा भई हो, अब लउटा छबीले भोलेनाथ हो! दरस की ता...",
      "भोलन तोरी औघड़ छबी हो, छबी मोहय सकल संसार हो! दरस की ता...",
      "दरस की ता बेरा भई हो, अब लउटा ओ मोरे भोलेनाथ हो! दरस की ता...",
      "शीशे मा तोहरे चंदा सोहय हो, चंदा सोहय निहारय संसार हो! दरस की ता...",
      "दरस की ता बेरा भई हो, अब लउटा छबीले भोलेनाथ हो! दरस की ता...",
      "जटा से तोहरे गंगा बहय हो, पावन करय सकल संसार हो! दरस की ता...",
      "दरस की ता बेरा भई हो, चले आबा ओ मोरे शम्भूनाथ हो! दरस की ता...",
      "मन्दिरबा ता सूना लागय हो, मोरे भोले गए हैं कैलाश हो! दरस की ता...",
      "दरस की ता बेरा भई हो, चले आबा ओ मोरे भोलेनाथ हो!",
      "ओ पट खोला छबीले भैरौनाथ हो...! दरस की ता...",
      "दरस की ता बेरा भई हो, अब लउटा छबीले भोलेनाथ हो! दरस की ता..."
    ],
    romanLyrics: [
      "Daras ki ta bera bhai ho, ab lauta chhabeele Bholenath ho! Daras ki ta...",
      "Bholan tori aughad chhabi ho, chhabi mohay sakal sansaar ho!",
      "Daras ki ta bera bhai ho, ab lauta o more Bholenath ho!",
      "Sheeshe ma tohare chanda sohay ho, chanda sohay nihaaray sansaar ho!",
      "Jata se tohare Ganga bahay ho, paawan karay sakal sansaar ho!",
      "Daras ki ta bera bhai ho, chale aaba o more Shambhunath ho!",
      "Mandirba ta soona laagay ho, more Bhole gaye hain Kailash ho!",
      "O pat khola chhabeele Bhaironath ho! Daras ki ta bera bhai ho, ab lauta chhabeele Bholenath ho!"
    ]
  },

  // 21. KAJARI RAM BHAJAN (BAGIYA MA AAYE BHAGWAN)
  {
    id: "kajari-ram-bhajan",
    title: "Kajari Ram Bhajan (पुष्प वाटिका प्रसंग)",
    hindiTitle: "बगिया म आए भगमान, देखन हम जाबय - कजरी राम भजन",
    category: "bhakti",
    categoryLabel: "भक्ति व कजरी • जनकपुर वाटिका दर्शन",
    dialect: "अवधी व बघेली (अयोध्या, जनकपुर)",
    ritualContext: "सावन मास और विवाह प्रसंग में जनकपुर की पुष्प वाटिका में प्रभु श्रीराम के आगमन, उनके मुकुट, कुंडल, धनुष और बैजंती हार के मनोहारी दर्शन का भक्तिमय गान।",
    description: "शास्त्रीय कजरी धुन पर श्रीराम के अलौकिक शृंगार का सर्वप्रिय वंदना भजन।",
    audioSrc: "Bagiya Ma Aaye Bhagwan - Awadhi Folk Song.mp3",
    devanagariLyrics: [
      "ओ हरे रमा, बगिया म आए भगमान, देखन हम जाबय रे... हारी!",
      "हाँ हरे रमा, बगिया म आए श्री राम, देखन हम जाबय रे... हारी!॥",
      "काने मा उनखे कुंडल सोहे, छबि अति सुंदर मन का मोहै,",
      "रामा, काने मा उनखे कुंडल सोहे, छबि अति सुंदर मन का मोहै,",
      "गले बैजंती हार, देखन हम जाबय रे... हारी!॥",
      "सीस म उनखे मुकुट भल साजै, हाथे म सुन्दर धनुष बिराजै,",
      "रामा, सीस म उनखे मुकुट भल साजै, हाथे म सुन्दर धनुष बिराजै,",
      "सुन्दर तिलक लिलार, देखन हम जाबय रे... हारी!॥",
      "हाँ हरे रामा, बगिया म आए श्री राम, देखन हम जाबय रे... हारी!",
      "ओ हरे रामा, बगिया म आए भगमान, देखन हम जाबय रे... हारी!॥"
    ],
    romanLyrics: [
      "O hare Rama, bagiya ma aaye Bhagwaan, dekhan hum jaabay re... haari!",
      "Haan hare Rama, bagiya ma aaye Shri Ram, dekhan hum jaabay re... haari!",
      "Kaane ma unkhe kundal sohe, chhabi ati sundar man ka mohai, gale baijanti haar, dekhan hum jaabay re... haari!",
      "Sees ma unkhe mukut bhal saajai, haathe ma sundar dhanush biraajai, sundar tilak lilaar, dekhan hum jaabay re... haari!",
      "Haan hare Rama, bagiya ma aaye Shri Ram, dekhan hum jaabay re... haari!"
    ]
  },

  // 22. DEVI JHOOLA GEET (AMWA KAI DAAR PE MAA)
  {
    id: "devi-jhoola-geet",
    title: "Devi Jhoola Geet (अमवा कै डार पे माँ)",
    hindiTitle: "झूला डरा है अमवा कै डार पे माँ - देवी झूला व हिंडोला गीत",
    category: "bhakti",
    categoryLabel: "देवी भक्ति व ऋतु गीत • सावन व नवरात्र हिंडोला",
    dialect: "बघेली व अवधी (रीवा, सतना, विंध्याचल)",
    ritualContext: "सावन मास एवं चैत्र-शारदीय नवरात्र में देवी मंदिरों और घरों में महिलाओं द्वारा ढोलक और मंजीरे की थाप पर गाया जाने वाला पारंपरिक हिंडोला गीत, जिसमें माता भवानी के आम के वृक्ष पर झूलने, लंगुरिया (भैरव) और हनुमान जी द्वारा झूला झुलाने का अलौकिक वर्णन होता है।",
    description: "चंदन पाट के हिंडोले और रेशम की डोर पर झूलती जगजननी माता का उल्लासमय पारंपरिक महिला मंडली लोकगीत।",
    devanagariLyrics: [
      "झूला डरा है अमवा कै डार पे माँ,",
      "झूला डरा है अमवा कै डार पे माँ।",
      "झूलैं मोरी मइया, ओ झूलैं मोरी मइया,",
      "अमवा कै डार पे माँ...",
      "झूला डरा है अमवा कै डार पे माँ॥",
      "काहे से मइया कै बना हिंडोरा,",
      "काहे से मइया कै बना हिंडोरा,",
      "काहे कै लागी डोर मोरी मइया,",
      "अमवा कै डार पे माँ...",
      "झूला डरा है अमवा कै डार पे माँ॥",
      "चन्दन पाट कै बना हिंडोरा,",
      "चन्दन पाट कै बना हिंडोरा,",
      "रेशम कै लागी डोर मोरी मइया,",
      "अमवा कै डार पे माँ...",
      "झूला डरा है अमवा कै डार पे माँ॥",
      "कौना झूलैं कौन झुलावै,",
      "कौना झूलैं कौन झुलावै,",
      "कौना खींचै डोर मोरी मइया,",
      "अमवा कै डार पे माँ...",
      "झूला डरा है अमवा कै डार पे माँ॥",
      "मइया झूलैं, लंगुरा झुलामय,",
      "मइया झूलैं, लंगुरा झुलामय,",
      "हनुमत खींचे डोर मोरी मइया,",
      "अमवा कै डार पे माँ...",
      "झूला डरा है अमवा कै डार पे माँ॥",
      "झूला डरा है अमवा कै डार पे माँ,",
      "झूलैं मोरी मइया, ओ झूलैं मोरी मइया,",
      "अमवा कै डार पे माँ...॥"
    ],
    romanLyrics: [
      "Jhula dara hai amwa kai daar pe Maa, jhula dara hai amwa kai daar pe Maa.",
      "Jhoolain mori Maiya, o jhoolain mori Maiya, amwa kai daar pe Maa... Jhula dara hai amwa kai daar pe Maa.",
      "Kaahe se Maiya kai bana hindora, kaahe se Maiya kai bana hindora, kaahe kai laagi dor mori Maiya, amwa kai daar pe Maa...",
      "Chandan paat kai bana hindora, chandan paat kai bana hindora, resham kai laagi dor mori Maiya, amwa kai daar pe Maa...",
      "Kauna jhoolain kaun jhulaavai, kauna jhoolain kaun jhulaavai, kauna kheenchain dor mori Maiya, amwa kai daar pe Maa...",
      "Maiya jhoolain, langura jhulaamay, Maiya jhoolain, langura jhulaamay, Hanumat kheenchain dor mori Maiya, amwa kai daar pe Maa...",
      "Jhula dara hai amwa kai daar pe Maa, jhoolain mori Maiya, o jhoolain mori Maiya, amwa kai daar pe Maa..."
    ]
  },

  // 23. DEVI JAS AALHA GEET (AALHA KAI DHWAJA AAYI HO MAA)
  {
    id: "devi-jas-aalha-geet",
    title: "Devi Jas Aalha Geet (आल्हा कै ध्वजा - मैहर धाम जस)",
    hindiTitle: "तीन ध्वजा तीनो लोक से आई, आल्हा कै ध्वजा - देवी जस आल्हा",
    category: "bhakti",
    categoryLabel: "मैहर धाम जस • आल्हा वीर रस ध्वजा अर्पण",
    dialect: "बघेली व बुंदेली (मैहर, विंध्य, बुंदेलखंड)",
    ritualContext: "मैहर धाम (माँ शारदा भवानी) और विंध्याचल की विश्व-प्रसिद्ध मान्यता, जहाँ अमर योद्धा आल्हा आज भी नित्य प्रथम पूजा और ध्वजा अर्पण करने आते हैं। नगाड़े, झांझ और तेज ढोलक की गूंज पर गाया जाने वाला यह सर्वाधिक ओजस्वी देवी जस है।",
    description: "तीनों लोकों की ध्वजा और आल्हा की अमर भक्ति, सोने की झरिया से जल और गुड़हल के फूल चढ़ाने का पारंपरिक जस।",
    devanagariLyrics: [
      "तीन ध्वजा तीनो लोक से आई...",
      "तीन ध्वजा तीनो लोक से आई,",
      "आल्हा कै ध्वजा देखा आई हो माँ!",
      "हाँ मैय्या! आल्हा कै ध्वजा अब आई हो माँ!॥",
      "तोरे मढूलिआ कै द्वार खड़े हैं,",
      "तोरे मढूलिआ कै द्वार खड़े हैं,",
      "दरस की आस लगाए हो माँ!",
      "हाँ मैय्या! दरस की आस लगाए हो माँ!॥",
      "तीन ध्वजा तीनो लोक से आई,",
      "आल्हा कै ध्वजा अब आई हो माँ!॥",
      "ढोल मृदंग बजे शहनाई,",
      "ढोल मृदंग बजे शहनाई,",
      "जय जय होत पुकार हो माँ!",
      "हाँ मैय्या! जय जय होत पुकार हो माँ!॥",
      "तीन ध्वजा तीनो लोक से आई,",
      "आल्हा कै ध्वजा अब आई हो माँ!॥",
      "सोने कै झरिया म जल भर लायों,",
      "सोने कै झरिया म जल भर लायों,",
      "गुड़हर फूल सजायों हो माँ!",
      "हाँ मैय्या! गुड़हर फूल सजायों हो माँ!॥",
      "धूप दीप नैवेद्य आरती,",
      "धूप दीप नैवेद्य आरती,",
      "नरियर कै भरमार हो माँ!",
      "हाँ मैय्या! नरियर कै भरमार हो माँ!॥",
      "तीन ध्वजा तीनो लोक से आई...",
      "तीन ध्वजा तीनो लोक से आई,",
      "आल्हा कै ध्वजा देखा आई हो माँ!",
      "हाँ मैय्या! आल्हा कै ध्वजा अब आई हो माँ!",
      "आल्हा कै ध्वजा... देखा आई हो माँ!॥"
    ],
    romanLyrics: [
      "Teen dhwaja teeno lok se aayi... Teen dhwaja teeno lok se aayi, Aalha kai dhwaja dekha aayi ho Maa!",
      "Haan Maiyya! Aalha kai dhwaja ab aayi ho Maa!",
      "Tore madhulia kai dwaar khade hain, daras ki aas lagaye ho Maa! Haan Maiyya! Daras ki aas lagaye ho Maa!",
      "Teen dhwaja teeno lok se aayi, Aalha kai dhwaja ab aayi ho Maa!",
      "Dhol mridang baje shehnai, dhol mridang baje shehnai, jai jai hot pukaar ho Maa! Haan Maiyya! Jai jai hot pukaar ho Maa!",
      "Sone kai jhariya ma jal bhar laayon, sone kai jhariya ma jal bhar laayon, gudhar phool sajayon ho Maa! Haan Maiyya! Gudhar phool sajayon ho Maa!",
      "Dhoop deep naivedya aarati, dhoop deep naivedya aarati, nariyar kai bharmaar ho Maa! Haan Maiyya! Nariyar kai bharmaar ho Maa!",
      "Teen dhwaja teeno lok se aayi... Aalha kai dhwaja dekha aayi ho Maa!"
    ]
  },

  // 24. DEVI STUTI (JAG JANANI BARDANI)
  {
    id: "devi-stuti-adi-bhavani",
    title: "Devi Stuti (जग जननी बरदानी - आदि भवानी वंदना)",
    hindiTitle: "जग जननी बरदानी, जय हो मोरी आदि भवानी - देवी स्तुति",
    category: "bhakti",
    categoryLabel: "आदि शक्ति वंदना • आत्मिक ध्यान व करुण स्तुति",
    dialect: "बघेली व अवधी (विंध्य, काशी, अवध)",
    ritualContext: "नवरात्र घटस्थापना, प्रातः कालीन देवी ध्यान एवं संध्या आरती के समय गाई जाने वाली अत्यंत भावपूर्ण एवं आध्यात्मिक स्तुति। समस्त सृष्टि रचना, भव-दुःख निवारण और अंधकार से प्रकाश की ओर ले जाने की आर्त पुकार।",
    description: "सब खुशियों की दाता आदि भवानी के चरणों में सर्वस्व समर्पण और करुण प्रार्थना का पावन स्तोत्र।",
    devanagariLyrics: [
      "जग जननी बरदानी,",
      "जय हो मोरी आदि भवानी।",
      "सब खुशिअन की दानी,",
      "सुन मोरी आदि भवानी॥",
      "सृष्टि रची है तोरे हाथन से मैय्या,",
      "सृष्टि रची है तोरे हाथन से मैय्या,",
      "सब म आप समानी,",
      "सुन मोरी आदि भवानी।",
      "सब खुशिअन की दानी,",
      "सुन मोरी आदि भवानी॥",
      "शरण म तोरी जब कोउ आबै,",
      "शरण म तोरी जब कोउ आबै।",
      "दुःख हर बनी कल्याणी,",
      "सुन मोरी आदि भवानी।",
      "सब खुशिअन की दानी,",
      "सुन मोरी आदि भवानी॥",
      "जीवन म अंधियार है मैय्या,",
      "जीवन म अंधियार है मैय्या।",
      "तर मोरी करुण कहानी,",
      "सुन मोरी आदि भवानी।",
      "सब खुशिअन की दानी,",
      "सुन मोरी आदि भवानी॥",
      "भक्तन कै तैं ढाल जगत मा,",
      "भक्तन कै तैं ढाल जगत मा,",
      "किरपा कर महारानी!",
      "सुन मोरी आदि भवानी।",
      "जय हो मोरी... आदि भवानी॥"
    ],
    romanLyrics: [
      "Jag janani bardani, jai ho mori Aadi Bhavani. Sab khushian ki daani, sun mori Aadi Bhavani.",
      "Srishti rachi hai tore haathan se Maiyya, srishti rachi hai tore haathan se Maiyya, sab ma aap samaani, sun mori Aadi Bhavani.",
      "Sharan ma tori jab kou aabai, sharan ma tori jab kou aabai, dukh har bani kalyaani, sun mori Aadi Bhavani.",
      "Jeevan ma andhiyaar hai Maiyya, jeevan ma andhiyaar hai Maiyya, tar mori karun kahani, sun mori Aadi Bhavani.",
      "Bhaktan kai tain dhaal jagat ma, bhaktan kai tain dhaal jagat ma, kirpa kar Maharani! Sun mori Aadi Bhavani. Jai ho mori... Aadi Bhavani."
    ]
  },

  // 25. DEVI JAS & BHAGAR (DUI BIRIYA AARTI)
  {
    id: "devi-jas-bhagar-aarti",
    title: "Devi Jas & Bhagar (दुई बिरिया आरती - भगतिया जस)",
    hindiTitle: "दुई बिरिया, करैं भगत माई आरती - देवी जस व भगर",
    category: "bhakti",
    categoryLabel: "भगतिया जस व भगर • विंध्य-मैहर नवदुर्गा आरती",
    dialect: "बघेली व विंध्य (रीवा, सतना, मैहर, सीधी)",
    ritualContext: "बघेलखंड और विंध्य क्षेत्र में नवदुर्गा उत्सव के दौरान भगत (भगर) मंडली द्वारा देवी के मढ़िया/चौरा पर दोनों पहर (प्रातः एवं संध्या - दुई बिरिया) की जाने वाली पारंपरिक तांत्रिक व भक्ति आरती। सोने की थाली, गुड़हल के फूल, लाल चुनरी और सोलह शृंगार अर्पण करने का पारंपरिक विधान।",
    description: "दोनों पहर भक्तों द्वारा माता की महाआरती, लाल चुनरिया और सोलह शृंगार सजाने का लोक-प्रसिद्ध 'दुई बिरिया' देवी भगर जस।",
    devanagariLyrics: [
      "दुई बिरिया, ओ माई दुई बिरिया...",
      "दुई बिरिया, ओ माई दुई बिरिया...",
      "करैं भगत माई आरती, तोरी दुई बिरिया!",
      "करैं भगत माई आरती, तोरी दुई बिरिया!॥",
      "सोने कै थारी म भोग लगायों, माई दुई बिरिया...",
      "सोने कै थारी म भोग लगायों, माई दुई बिरिया...",
      "गुड़हर फूल कै हार बनायों, तोहि दुइ बिरिया...",
      "गुड़हर फूल कै हार बनायों, तोहि दुइ बिरिया...",
      "तोरे मढूलिया के द्वार बखारौं, दुई बिरिया...",
      "करैं भगत माई आरती, तोरी दुई बिरिया!",
      "करैं भगत माई आरती, तोरी दुई बिरिया!॥",
      "लाल चुनरिया मैं तोहि ओढायों, माई दुई बिरिया...",
      "लाल चुनरिया मैं तोहि ओढायों, माई दुई बिरिया...",
      "सोला सिंगार से तोहि सजायों, माई दुई बिरिया...",
      "सोला सिंगार से तोहि सजायों, माई दुई बिरिया...",
      "सेवा म तोरी दरबार लगायों, दुई बिरिया...",
      "करैं भगत माई आरती, तोरी दुई बिरिया!",
      "करैं भगत माई आरती, तोरी दुई बिरिया!॥",
      "दुई बिरिया, ओ माई दुई बिरिया...",
      "दुई बिरिया, ओ माई दुई बिरिया...",
      "करैं भगत माई आरती, तोरी दुई बिरिया!",
      "करैं भगत माई आरती... तोरी दुई बिरिया...॥"
    ],
    romanLyrics: [
      "Dui biriya, o Maai dui biriya... Dui biriya, o Maai dui biriya... Karain bhagat Maai aarati, tori dui biriya!",
      "Sone kai thaari ma bhog lagaayon, Maai dui biriya... Gudhar phool kai haar banaayon, tohi dui biriya... Tore madhuliya ke dwaar bakhaaroun, dui biriya... Karain bhagat Maai aarati, tori dui biriya!",
      "Laal chunariya main tohi odhaayon, Maai dui biriya... Sola singaar se tohi sajaayon, Maai dui biriya... Sewa ma tori darbaar lagaayon, dui biriya... Karain bhagat Maai aarati, tori dui biriya!",
      "Dui biriya, o Maai dui biriya... Karain bhagat Maai aarati, tori dui biriya! Karain bhagat Maai aarati... tori dui biriya..."
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
      (entry.authorNote && entry.authorNote.toLowerCase().includes(q)) ||
      entry.devanagariLyrics.some((l) => l.includes(q)) ||
      entry.romanLyrics.some((l) => l.toLowerCase().includes(q));

    return matchesCat && matchesSearch;
  });

  const handleCopy = (entry: LyricEntry) => {
    const fullText = `${entry.hindiTitle} (${entry.title})\n\n[सांस्कृतिक संदर्भ / विधान]: ${entry.ritualContext}${entry.authorNote ? `\n[रचनाकार]: ${entry.authorNote}` : ""}\n\n[प्रामाणिक बोल / Lyrics]:\n${entry.devanagariLyrics.join("\n")}\n\n— Media Mafias Regional Folk Archive (https://www.mediamafias.com/regional-music/lyrics)`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(entry.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleShareWhatsApp = (entry: LyricEntry) => {
    const shareText = `*${entry.hindiTitle}* (${entry.title})\n_${entry.ritualContext}_\n\n*प्रामाणिक बोल:*\n${entry.devanagariLyrics.slice(0, 5).join("\n")}\n...\n\nपूरे बोल और 20s ऑडियो सुनने के लिए यहाँ क्लिक करें:\nhttps://www.mediamafias.com/regional-music/lyrics#${entry.id}`;
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
            <span>25 प्रामाणिक लोकगीत • 100% AUTHENTIC HERITAGE LYRICS ARCHIVE</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-3">
            DESI WEDDING RITES &amp; FOLK LYRICS VAULT
          </h1>

          <div className="font-sans font-bold text-xl sm:text-3xl text-[#D4AF37] mb-4">
            विशुद्ध पारंपरिक क्षेत्रीय लोकगीत एवं विवाह संस्कार बोल संग्रह
          </div>

          <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
            रीवा, सतना, सीधी, शहडोल, बुंदेलखंड, अवध और पूर्वांचल के सदियों पुराने <strong className="text-white">दुआचार, बन्ना-बन्नी, परछन, बेलनहाई, गैलहाई (विदाई), सोहर-दादरा, कुआँ पूजन, कजरी, नचनहाई फाग, रोपाई, देवी झूला, मैहर आल्हा जस, आदि भवानी स्तुति, भगतिया भगर और शिव लमतेरा</strong> के पूर्ण प्रामाणिक बोल। एक क्लिक में बोल कॉपी करें, पारिवारिक मंडली के साथ व्हाट्सएप पर साझा करें या स्टूडियो प्रिव्यू सुनें।
          </p>

          {/* Quick Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "All Lyrics (सभी 25 बोल)", value: "all" },
              { label: "Wedding Rites (विवाह संस्कार: दुआचार, परछन, बन्ना, बेलनहाई, गैलहाई)", value: "vivah" },
              { label: "Childbirth & Sohar (सोहर दादरा व कुआँ पूजन)", value: "sohar" },
              { label: "Seasonal & Phagua (फाग, कजरी, नचनहाई, रोपाई, दादरा)", value: "seasonal" },
              { label: "Bhakti, Devi Jas & Bhagar (देवी झूला, आल्हा ध्वजा, भगर, गणेश, शिव लमतेरा)", value: "bhakti" }
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`font-mono text-xs font-bold uppercase px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] font-black"
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
              {filteredLyrics.length} AUTHENTIC SONGS
            </span>
            <span className="font-mono text-xs text-neutral-400 hidden md:inline">
              Devanagari Hindi &amp; English Transliteration • Zero Production Tags
            </span>
          </div>

          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Duarchaar, Banna, Sohar, Gailhai, Belnhai, Phaag..."
              className="w-full pl-9 pr-4 py-2 bg-[#16161D] border border-white/10 focus:border-[#D4AF37] rounded-xl font-mono text-xs text-white placeholder:text-neutral-500 outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* LYRICS CARDS GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {filteredLyrics.map((entry) => {
            const isPlaying = playingId === entry.id;
            const isCopied = copiedId === entry.id;

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
                      {entry.authorNote && (
                        <span className="font-mono text-[10px] font-bold uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                          <Feather className="w-3 h-3" />
                          {entry.authorNote}
                        </span>
                      )}
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
                        विशुद्ध पारंपरिक बोल
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
            बघेलखंड (रीवा, सतना, सीधी, शहडोल), बुंदेलखंड (झांसी, सागर, छतरपुर), अवध (अयोध्या, लखनऊ) और पूर्वांचल की लोक संस्कृति में विवाह केवल दो व्यक्तियों का नहीं, बल्कि दो कुलों और संस्कृतियों का मिलन है। द्वार पर दूल्हे के आगमन पर <strong className="text-white">दुआचार एवं परछन गीत</strong>, मंडप में <strong className="text-white">बन्ना-बन्नी एवं बेलनहाई</strong>, संतान जन्म पर <strong className="text-white">सोहर-दादरा एवं कुआँ पूजन</strong>, और वर्षा ऋतु में <strong className="text-white">कजरी, नचनहाई फाग एवं धान रोपाई</strong> के बोल गाए जाते हैं। Media Mafias इन अनमोल मौखिक धरोहरों को उनके विशुद्ध मूल बोलों में लिपिबद्ध व सुरक्षित करता है।
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
