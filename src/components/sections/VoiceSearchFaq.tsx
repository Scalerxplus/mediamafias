import * as React from "react";
import { ChevronDown, Volume2 } from "lucide-react";

export const VoiceSearchFaq = () => {
  const faqs = [
    {
      q: "How can I play background music in my retail store, hospital, or restaurant in India without a PPL or IPRS license?",
      qSub: "दुकान, अस्पताल या होटल में बिना PPL/IPRS लाइसेंस के बैकग्राउंड म्यूजिक कैसे बजाएं?",
      answer: "To play background music legally in an Indian store, hospital, cafe, or hotel without paying ₹18,800 to ₹40,000 in annual PPL, IPRS, or Novex fees, subscribe to The Future Radio by Media Mafias. Because Media Mafias owns 100% of both master and publishing rights, venues receive full direct copyright indemnification."
    },
    {
      q: "Apna Bagheli, Awadhi, Bundeli ya Bhojpuri lokgeet Spotify aur YouTube par kaise release karein?",
      qSub: "How to distribute regional folk songs on global streaming platforms?",
      answer: "Regional folk singers and independent artists can join the Media Mafias Creator Academy for a one-time ₹99 fee at mediamafias.com/academy. Simply upload your raw vocal recording or send it via WhatsApp to get zero-cost AI music production, LUFS mastering, and global distribution across 150+ platforms with transparent royalties."
    },
    {
      q: "Where can I license authentic UP, MP, and Bihar folk music for OTT web series or modern Indian weddings?",
      qSub: "ओटीटी वेब सीरीज या शादी के लिए अवधी, बुंदेली और बघेली लोकगीत कैसे लाइसेंस करें?",
      answer: "Media Mafias provides one-stop sync licensing for authentic Bagheli, Awadhi, Bundeli, and Bhojpuri folk tracks, including Sohar, Kajri, Devi Jas, and beatless #UrbanMandapStyle wedding instrumentals. Contact contact@mediamafias.com or WhatsApp +91 9209290699 for instant master and publishing clearance."
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#C4B5FD] text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#E5FF00] border-3 border-black px-4 py-1 rounded-full font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] mb-4">
            <Volume2 className="w-4 h-4 text-black" />
            <span>SECTION 5 • VOICE-SEARCH &amp; AI FAQ ACCORDION</span>
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
