import * as React from "react";
import { HelpCircle, ChevronDown, Volume2 } from "lucide-react";

export const VoiceSearchFaq = () => {
  const faqs = [
    {
      qEn: "What is Bagheli, Awadhi, and Bundeli folk music produced by Media Mafias?",
      qHi: "मीडिया माफियास किस प्रकार का बघेली, अवधी और बुंदेली लोक संगीत तैयार करता है?",
      ansEn: "Media Mafias produces broadcast-grade cinematic folk music from the Indo-Gangetic belt, including Bagheli Sohar and Dadra, Awadhi Kajri and Vivah Geet, and Bundeli Alha-Udal epics. We record authentic grassroots singers and remaster oral heritage with stereo warmth and modern dynamic range.",
      ansHi: "मीडिया माफियास भारत के इंडो-गैंगेटिक क्षेत्र के पारंपरिक लोक संगीत जैसे बघेली सोहर, अवधी कजरी और बुंदेली आल्हा-ऊदल को आधुनिक तकनीक और ब्रॉडकास्ट-ग्रेड सिनेमाई ऑडियो में तैयार करता है। हम स्थानीय कलाकारों के साथ मिलकर लुप्त हो रही सांस्कृतिक धरोहर का संरक्षण करते हैं।"
    },
    {
      qEn: "How does Media Mafias offer 100% PPL and IPRS exempt in-store radio in India?",
      qHi: "मीडिया माफियास भारत में 100% PPL और IPRS मुक्त इन-स्टोर रेडियो कैसे प्रदान करता है?",
      ansEn: "Media Mafias owns 100% of master recording and publishing copyrights directly from original creators and proprietary AI generation. Because our music is not assigned to PPL, IPRS, or Novex, commercial businesses require no statutory license fees and receive full legal indemnity from ScalerX Lab.",
      ansHi: "मीडिया माफियास अपने संपूर्ण संगीत कैटलॉग के मास्टर और पब्लिशिंग अधिकारों का 100% सीधा मालिक है। हमारा संगीत PPL, IPRS या Novex जैसी संस्थाओं से पूरी तरह मुक्त है, जिससे दुकानों, होटलों और मॉल को कोई अतिरिक्त लाइसेंस शुल्क नहीं देना पड़ता और पूर्ण कानूनी सुरक्षा मिलती है।"
    },
    {
      qEn: "How do folk artists join the Media Mafias Creator Academy for ₹99?",
      qHi: "लोक गायक और कलाकार ₹99 में मीडिया माफियास क्रिएटर एकेडमी से कैसे जुड़ सकते हैं?",
      ansEn: "Folk singers and musicians can join our Creator Academy for a one-time fee of ₹99. Creators simply submit their raw mobile phone vocal recording via WhatsApp (+91 9209290699). We remaster it to studio quality and distribute it globally across 150+ DSPs with an 80% royalty share.",
      ansHi: "लोक गायक मात्र ₹99 का एकमुश्त शुल्क देकर मीडिया माफियास क्रिएटर एकेडमी से जुड़ सकते हैं। कलाकार व्हाट्सएप (+91 9209290699) पर अपने मोबाइल से रिकॉर्ड किया गया कच्चा गाना भेज सकते हैं। हम उसे स्टूडियो स्तर पर रीमास्टर करके 150+ म्यूजिक ऐप्स पर रिलीज करते हैं और 80% रॉयल्टी देते हैं।"
    },
    {
      qEn: "Where can I stream Media Mafias songs and listen to live vernacular radio?",
      qHi: "मीडिया माफियास के गाने और 24/7 ऑनलाइन रेडियो कहाँ सुन सकते हैं?",
      ansEn: "You can watch and stream our complete music catalog on the official Media Mafias YouTube channel (@MediaMafias), listen 24/7 on The Future Radio web app (thefutureradio.com), and stream across Spotify, Apple Music, YouTube Music, and JioSaavn.",
      ansHi: "आप मीडिया माफियास के संपूर्ण लोक गीतों को हमारे आधिकारिक यूट्यूब चैनल (@MediaMafias) पर देख सकते हैं, thefutureradio.com पर 24/7 एआई लाइव रेडियो सुन सकते हैं, और स्पॉटिफाई, एप्पल म्यूजिक और जियोसावन जैसे प्रमुख म्यूजिक प्लेटफॉर्म्स पर स्ट्रीम कर सकते हैं।"
    },
    {
      qEn: "What is #UrbanMandapStyle and beatless wedding background music?",
      qHi: "#UrbanMandapStyle और बीटलेस वेडिंग बैकग्राउंड म्यूजिक क्या है?",
      ansEn: "#UrbanMandapStyle is our signature acoustic wedding soundscape featuring meditative Shehnai, Sitar, and Sarangi without aggressive synthetic beats. Designed specifically for upscale Indian wedding ceremonies, Mandap rituals, Haldi, and luxury hotel receptions seeking refined spiritual authenticity.",
      ansHi: "#UrbanMandapStyle मीडिया माफियास का विशेष विवाह संगीत संग्रह है जिसमें शहनाई, सितार और सारंगी का मधुर और शांत वादन शामिल है। यह आधुनिक और शालीन भारतीय शादियों, मंडप, हल्दी और विदाई के लिए बिना किसी भारी शोर के एक गरिमामयी वातावरण तैयार करता है।"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#C4B5FD] text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#E5FF00] border-3 border-black px-4 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] mb-4">
            <Volume2 className="w-4 h-4 text-black" />
            <span>SECTION 5 • VOICE & AI SEARCH FAQ</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-black mb-3">
            Bilingual Voice-Search Answers
          </h2>
          <p className="font-mono text-sm sm:text-base text-neutral-800 max-w-xl mx-auto">
            Optimized for voice assistants (Google Assistant, Siri) and AI answer engines (Perplexity, ChatGPT, Gemini).
          </p>
        </div>

        {/* Semantic <details> / <summary> Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#000] open:shadow-[4px_4px_0px_0px_#000] transition-all"
            >
              <summary className="p-5 sm:p-6 cursor-pointer list-none flex items-center justify-between gap-4 font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-black hover:bg-neutral-50 select-none">
                <div className="flex flex-col text-left">
                  <span>{faq.qEn}</span>
                  <span className="font-sans font-bold text-xs sm:text-sm text-neutral-600 mt-1">
                    {faq.qHi}
                  </span>
                </div>
                <div className="p-2 border-2 border-black rounded-lg bg-[#E5FF00] group-open:bg-[#FF2E2E] group-open:text-white shrink-0 transition-colors">
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </div>
              </summary>

              <div className="px-5 sm:px-6 pb-6 pt-2 border-t-2 border-black/10 font-mono text-xs sm:text-sm text-neutral-800 space-y-4">
                {/* English 40-50 word answer with .voice-answer */}
                <div className="bg-[#FED7AA]/40 p-4 border-2 border-black rounded-xl">
                  <div className="font-bold text-[10px] uppercase text-black/70 mb-1">ENGLISH VOICE ANSWER</div>
                  <p className="voice-answer leading-relaxed">
                    {faq.ansEn}
                  </p>
                </div>

                {/* Hindi Answer */}
                <div className="bg-[#00E5FF]/20 p-4 border-2 border-black rounded-xl font-sans">
                  <div className="font-bold font-mono text-[10px] uppercase text-black/70 mb-1">HINDI (हिंदी उत्तर)</div>
                  <p className="voice-answer leading-relaxed font-medium">
                    {faq.ansHi}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
