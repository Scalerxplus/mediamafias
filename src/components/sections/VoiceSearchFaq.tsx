import * as React from "react";
import { ChevronDown, Volume2 } from "lucide-react";

export const VoiceSearchFaq = () => {
  const faqs = [
    {
      q: "What is Media Mafias?",
      qSub: "मीडिया माफियास क्या है?",
      answer: "Media Mafias is India's premier AI-powered regional folk music label, decentralized audio distribution platform, and creator academy incubated by ScalerX Lab. We preserve authentic Bagheli, Awadhi, Bundeli, and Bhojpuri oral traditions in broadcast-grade audio."
    },
    {
      q: "How can I play background music in my retail store, hospital, or restaurant in India without a PPL or IPRS license?",
      qSub: "दुकान, अस्पताल या होटल में बिना PPL/IPRS लाइसेंस के बैकग्राउंड म्यूजिक कैसे बजाएं?",
      answer: "To play background music legally in an Indian store, hospital, cafe, or hotel without paying Rs 18,800 to Rs 40,000 in annual PPL, IPRS, or Novex fees, subscribe to The Future Radio by Media Mafias. Media Mafias owns 100% of both master and publishing rights, providing full direct copyright indemnification."
    },
    {
      q: "How do independent creators and folk artists earn royalties on Media Mafias?",
      qSub: "लोक कलाकार और स्वतंत्र संगीतकार मीडिया माफियास पर रॉयल्टी कैसे कमाते हैं?",
      answer: "Folk vocalists join the ₹499 Creator Academy, submit raw vocals via WhatsApp (+91 9209290699), and receive studio-mastered releases distributed to 150+ platforms with an 80% creator-first streaming and sync royalty share paid directly via UPI."
    },
    {
      q: "Which streaming platforms does Media Mafias distribute music to?",
      qSub: "मीडिया माफियास किन म्यूजिक स्ट्रीमिंग ऐप्स पर संगीत रिलीज करता है?",
      answer: "Media Mafias distributes audio across 150+ platforms worldwide via Madverse, including Spotify, Apple Music, YouTube Music, Amazon Music, JioSaavn, Instagram Audio, and 24/7 autonomous radio on The Future Radio."
    },
    {
      q: "How does the Media Mafias Content API work?",
      qSub: "मीडिया माफियास कंटेंट एपीआई (Content API) कैसे काम करता है?",
      answer: "The Media Mafias Content API provides programmatic REST access to pre-cleared, mastered vernacular audio stems, metadata, and radio streams with 99.999% uptime, powering autonomous B2B In-Store Radio and YouTube Shorts distribution."
    },
    {
      q: "Where can I license authentic UP, MP, and Bihar folk music for OTT web series or modern Indian weddings?",
      qSub: "ओटीटी वेब सीरीज या शादी के लिए अवधी, बुंदेली और बघेली लोकगीत कैसे लाइसेंस करें?",
      answer: "Media Mafias offers pre-cleared, one-stop sync licensing for authentic Bagheli, Awadhi, Bundeli, and Bhojpuri folk music, including Sohar, Kajri, Devi Jas, and beatless Urban Mandap wedding instrumentals. Because Media Mafias controls 100% of master and publishing rights, OTT music supervisors and wedding planners receive instant clearance."
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#C4B5FD] text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#E5FF00] border-3 border-black px-4 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] mb-4">
            <Volume2 className="w-4 h-4 text-black" />
            <span>SECTION 5 • HIGH-INTENT VOICE &amp; AI FAQ ACCORDION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-black mb-2">
            Frequently Asked Questions
          </h2>
          <div className="font-sans font-bold text-base sm:text-lg text-neutral-800">
            (अक्सर पूछे जाने वाले सवाल)
          </div>
        </div>

        {/* Semantic <details> / <summary> Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#000] open:shadow-[4px_4px_0px_0px_#000] transition-all"
            >
              <summary className="p-5 sm:p-6 cursor-pointer list-none flex items-center justify-between gap-4 font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-black hover:bg-neutral-50 select-none">
                <div className="flex flex-col text-left">
                  <span>{faq.q}</span>
                  <span className="font-sans font-bold text-xs sm:text-sm text-neutral-600 mt-1">
                    {faq.qSub}
                  </span>
                </div>
                <div className="p-2 border-2 border-black rounded-lg bg-[#E5FF00] group-open:bg-[#FF2E2E] group-open:text-white shrink-0 transition-colors">
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </div>
              </summary>

              <div className="px-5 sm:px-6 pb-6 pt-2 border-t-2 border-black/10 font-mono text-xs sm:text-sm text-neutral-800">
                <div className="bg-[#FED7AA]/40 p-4 border-2 border-black rounded-xl">
                  <div className="font-bold text-[10px] uppercase text-black/70 mb-1">CANONICAL VOICE &amp; AI ANSWER</div>
                  <p className="voice-answer leading-relaxed text-sm sm:text-base font-sans font-medium text-neutral-900">
                    {faq.answer}
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
