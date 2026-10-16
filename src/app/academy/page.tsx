"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, CheckCircle2, Upload, ArrowRight, ShieldCheck, Headphones, Globe2, Radio, Music } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export default function AcademyPage() {
  const [artistName, setArtistName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [songTitle, setSongTitle] = React.useState("");
  const [dialect, setDialect] = React.useState("Bagheli");
  const [fileUploaded, setFileUploaded] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const whatsappDirectUrl = `https://wa.me/919209290699?text=${encodeURIComponent(
    `Hi Media Mafias, I want to join the Academy of Folk Music & Heritage (₹499 Membership) and submit my folk song.\nArtist: ${artistName || "Independent Artist"}\nDialect: ${dialect}\nSong: ${songTitle || "New Submission"}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Redirect to WhatsApp with prefilled message
    setTimeout(() => {
      window.open(whatsappDirectUrl, "_blank");
    }, 1000);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-6 bg-radial-[at_top_center] from-[#1A1A22] via-[#0B0B0E] to-[#0B0B0E] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>ACADEMY OF FOLK MUSIC &amp; HERITAGE • LIFETIME ARTIST MEMBERSHIP</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white mb-3 leading-tight">
            Academy of Folk Music &amp; Heritage
          </h1>
          <div className="font-sans font-bold text-xl sm:text-3xl text-[#D4AF37] mb-6">
            लोक संगीत एवं सांस्कृतिक विरासत अकादमी (₹499 सदस्यता)
          </div>

          <p className="font-mono text-xs sm:text-base text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Singers, Mandalis, and Folk Troupe Artists of <strong className="text-white">Baghelkhand, Awadh, Bundelkhand, and Purvanchal</strong>: Enroll in the <strong className="text-[#D4AF37]">Academy of Folk Music &amp; Heritage</strong> with a one-time <strong className="text-white">₹499 membership fee</strong> to become a permanent member of the Media Mafias catalog. Send your raw smartphone recording — we remaster it to broadcast grade and distribute it to 150+ music apps worldwide with 80% direct creator royalties.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#10B981] hover:bg-[#059669] text-black font-mono font-bold text-xs sm:text-sm uppercase px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>1-Tap WhatsApp Enrollment (₹499 Fee)</span>
            </a>

            <a
              href="#upload-form"
              className="bg-[#D4AF37] hover:bg-[#e5be47] text-black font-mono font-bold text-xs sm:text-sm uppercase px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg"
            >
              <Upload className="w-5 h-5 text-black" />
              <span>Submit Song Details Below</span>
            </a>
          </div>
        </div>
      </section>

      {/* What You Get for ₹499 */}
      <section className="py-16 px-6 bg-[#0E0E12] border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2">
              Lifetime Membership Benefits (₹499 One-Time)
            </h2>
            <div className="font-sans font-bold text-lg text-[#D4AF37] mb-2">
              आजीवन कलाकार सदस्यता के प्रमुख लाभ
            </div>
            <p className="font-mono text-xs sm:text-sm text-neutral-400">
              Join the Media Mafias artist catalog with fair, transparent terms backed by ScalerX Lab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Broadcast Remastering",
                hindi: "स्टूडियो रीमास्टरिंग",
                desc: "We clean background noise, apply dynamic EQ, spectral de-clipping, and normalize to industry standard -14 LUFS."
              },
              {
                num: "02",
                title: "150+ DSP Distribution",
                hindi: "150+ म्यूजिक ऐप्स पर रिलीज",
                desc: "Global delivery to Spotify, Apple Music, YouTube Music, JioSaavn, Amazon Music, and Instagram Audio library via Madverse."
              },
              {
                num: "03",
                title: "80% Creator Royalty",
                hindi: "80% रॉयल्टी कलाकार को",
                desc: "You retain 80% of all DSP streaming royalties and synchronization revenue with direct UPI bank payouts."
              },
              {
                num: "04",
                title: "Official OAC Listing",
                hindi: "यूट्यूब व रेडियो ब्रॉडकास्ट",
                desc: "Your release is indexed on the official Media Mafias YouTube network and added to 24/7 radio rotation on The Future Radio."
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="font-display font-black text-4xl text-[#D4AF37] mb-2">
                    {card.num}
                  </div>
                  <h3 className="font-display font-black text-xl uppercase tracking-wide text-white mb-1">
                    {card.title}
                  </h3>
                  <div className="font-sans font-bold text-xs text-[#D4AF37] mb-3">
                    {card.hindi}
                  </div>
                  <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#10B981]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>100% Guaranteed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streamlined Submission & Upload Funnel */}
      <section id="upload-form" className="py-20 px-6 bg-[#0B0B0E]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#121217] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl">
            
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                <Upload className="w-6 h-6 text-[#D4AF37]" />
              </span>
              <div>
                <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white">
                  Submit Song Details &amp; Vocals
                </h2>
                <div className="font-sans font-bold text-sm text-[#D4AF37]">
                  गाना सबमिट करें एवं सदस्यता प्राप्त करें
                </div>
                <p className="font-mono text-xs text-neutral-400 mt-0.5">
                  Fill details below or submit directly on WhatsApp (+91 9209290699)
                </p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
                <h3 className="font-display font-black text-2xl uppercase text-white">
                  Submission Ready!
                </h3>
                <p className="font-mono text-xs text-neutral-300">
                  Opening WhatsApp to complete your ₹499 onboarding with our artist coordinator...
                </p>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-black font-mono font-bold text-xs uppercase px-6 py-3 rounded-xl transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Continue on WhatsApp Now ➔</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                      Artist / Folk Singer Name (कलाकार का नाम) *
                    </label>
                    <input
                      type="text"
                      required
                      value={artistName}
                      onChange={(e) => setArtistName(e.target.value)}
                      placeholder="e.g. Susheel Dwivedi"
                      className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                      WhatsApp Phone Number (फोन नंबर) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 9876543210"
                      className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                      Song / Track Title (गीत का शीर्षक) *
                    </label>
                    <input
                      type="text"
                      required
                      value={songTitle}
                      onChange={(e) => setSongTitle(e.target.value)}
                      placeholder="e.g. Rewa Sohar Dadra"
                      className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                      Dialect &amp; Folk Region (बोली / क्षेत्र) *
                    </label>
                    <select
                      value={dialect}
                      onChange={(e) => setDialect(e.target.value)}
                      className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Bagheli">Bagheli (Rewa, Satna, Sidhi, Shahdol)</option>
                      <option value="Awadhi">Awadhi (Ayodhya, Lucknow, Mirzapur, Varanasi)</option>
                      <option value="Bundeli">Bundeli (Jhansi, Sagar, Tikamgarh, Chhatarpur)</option>
                      <option value="Bhojpuri">Bhojpuri (Purvanchal &amp; Bihar heartland)</option>
                      <option value="Devotional / Bhakti">Devotional / Kabir Bhajan / Devi Jas</option>
                    </select>
                  </div>
                </div>

                {/* File Upload Box */}
                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                    Raw Audio / Mobile Voice Recording (MP3 / WAV / M4A)
                  </label>
                  <div
                    onClick={() => setFileUploaded(true)}
                    className={`border border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                      fileUploaded 
                        ? "border-[#10B981] bg-[#10B981]/10" 
                        : "border-white/20 hover:border-[#D4AF37] bg-[#181820]"
                    }`}
                  >
                    <Upload className={`w-8 h-8 mx-auto mb-2 ${fileUploaded ? "text-[#10B981]" : "text-neutral-400"}`} />
                    <p className="font-mono text-xs font-bold text-white">
                      {fileUploaded 
                        ? "✓ Audio file attached successfully!" 
                        : "Click here to attach audio, or share via WhatsApp after submitting"}
                    </p>
                    <span className="font-mono text-[10px] text-neutral-400 mt-1 block">
                      Smartphone voice memos, studio recordings, and WhatsApp voice notes accepted.
                    </span>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-[#e5be47] text-black font-display font-black text-2xl uppercase py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Proceed To ₹499 Onboarding</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <p className="text-center font-mono text-[11px] text-neutral-400 mt-3">
                    🔒 Secure ₹499 processing via UPI / WhatsApp • 80% royalty split contract included.
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
