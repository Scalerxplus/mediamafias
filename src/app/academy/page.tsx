"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, MessageCircle, Upload, CheckCircle2, ShieldCheck, ArrowRight, Music2, Globe, Disc, PhoneCall } from "lucide-react";

export default function AcademyPage() {
  const [songTitle, setSongTitle] = React.useState("");
  const [artistName, setArtistName] = React.useState("");
  const [dialect, setDialect] = React.useState("Bagheli");
  const [phone, setPhone] = React.useState("");
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
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 bg-white border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#E5FF00] border-2 border-black px-4 py-1.5 rounded-full font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-6">
            <Sparkles className="w-4 h-4 text-black" />
            <span>ACADEMY OF FOLK MUSIC &amp; HERITAGE • LIFETIME ARTIST MEMBERSHIP</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-black mb-4">
            Academy of Folk Music &amp; Heritage
          </h1>
          <div className="font-sans font-bold text-xl sm:text-2xl text-[#FF2E2E] mb-6">
            (लोक संगीत एवं सांस्कृतिक विरासत अकादमी)
          </div>

          <p className="font-mono text-sm sm:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed mb-8">
            Singers, Mandalis, and Folk Troupe Artists of <strong>Baghelkhand, Awadh, Bundelkhand, and Purvanchal</strong>: Enroll in the <strong>Academy of Folk Music &amp; Heritage</strong> with a one-time <strong>₹499 membership fee</strong> to become a permanent member of the Media Mafias catalog. Send your raw smartphone recording — we remaster it to broadcast grade and distribute it to 150+ music apps worldwide with 80% direct creator royalties.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black font-mono font-black text-xs sm:text-sm uppercase px-8 py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>1-Tap WhatsApp Enrollment (₹499 Fee)</span>
            </a>

            <a
              href="#upload-form"
              className="bg-[#E5FF00] text-black font-mono font-black text-xs sm:text-sm uppercase px-8 py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] flex items-center gap-2 transition-all"
            >
              <Upload className="w-5 h-5 text-black" />
              <span>Submit Song Details Below</span>
            </a>
          </div>
        </div>
      </section>

      {/* What You Get for ₹499 */}
      <section className="py-16 px-6 bg-[#FED7AA] border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-black mb-2">
              Lifetime Membership Benefits (₹499 One-Time)
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-800">
              Join the Media Mafias artist catalog with fair, transparent terms backed by ScalerX Lab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Broadcast Remastering",
                desc: "We clean background noise, apply dynamic EQ, spectral de-clipping, and normalize to industry standard -14 LUFS."
              },
              {
                num: "02",
                title: "150+ DSP Distribution",
                desc: "Global delivery to Spotify, Apple Music, YouTube Music, JioSaavn, Amazon Music, and Instagram Audio library via Madverse."
              },
              {
                num: "03",
                title: "80% Creator Royalty",
                desc: "You retain 80% of all DSP streaming royalties and synchronization revenue with direct UPI bank payouts."
              },
              {
                num: "04",
                title: "Official OAC Listing",
                desc: "Your release is indexed on the official Media Mafias YouTube network and added to 24/7 radio rotation on The Future Radio."
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="font-display font-black text-4xl text-[#FF2E2E] mb-3">
                    {card.num}
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase tracking-wide text-black mb-2">
                    {card.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-700 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-black/10 flex items-center gap-1.5 font-mono text-[11px] font-bold text-green-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>100% Guaranteed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streamlined Submission & Upload Funnel */}
      <section id="upload-form" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000]">
            
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-[#E5FF00] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000]">
                <Upload className="w-6 h-6 text-black" />
              </span>
              <div>
                <h2 className="font-display font-black text-3xl uppercase tracking-tight text-black">
                  Submit Song Details &amp; Vocals
                </h2>
                <p className="font-mono text-xs text-neutral-600">
                  Fill details below or submit directly on WhatsApp (+91 9209290699)
                </p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="bg-green-100 border-3 border-black rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="font-display font-black text-2xl uppercase text-black">
                  Submission Ready!
                </h3>
                <p className="font-mono text-xs text-neutral-800">
                  Opening WhatsApp to complete your ₹499 onboarding with our artist coordinator...
                </p>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-black font-mono font-black text-xs uppercase px-6 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000]"
                >
                  Continue on WhatsApp Now ➔
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-black uppercase text-black mb-2">
                      Artist / Folk Singer Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={artistName}
                      onChange={(e) => setArtistName(e.target.value)}
                      placeholder="e.g. Ramprasad Dwivedi"
                      className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-black uppercase text-black mb-2">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 9876543210"
                      className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-black uppercase text-black mb-2">
                      Song / Track Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={songTitle}
                      onChange={(e) => setSongTitle(e.target.value)}
                      placeholder="e.g. Rewa Sohar Dadra"
                      className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-black uppercase text-black mb-2">
                      Dialect &amp; Folk Region *
                    </label>
                    <select
                      value={dialect}
                      onChange={(e) => setDialect(e.target.value)}
                      className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                    >
                      <option value="Bagheli">Bagheli (Rewa, Satna, Sidhi, Shahdol)</option>
                      <option value="Awadhi">Awadhi (Ayodhya, Lucknow, Mirzapur, Varanasi)</option>
                      <option value="Bundeli">Bundeli (Jhansi, Sagar, Tikamgarh, Chhatarpur)</option>
                      <option value="Bhojpuri">Bhojpuri (Purvanchal &amp; Bihar heartland)</option>
                      <option value="Devotional / Bhakti">Devotional / Kabir Bhajan / Jas Geet</option>
                    </select>
                  </div>
                </div>

                {/* File Upload Box */}
                <div>
                  <label className="block font-mono text-xs font-black uppercase text-black mb-2">
                    Raw Audio / Mobile Voice Recording (MP3 / WAV / M4A)
                  </label>
                  <div
                    onClick={() => setFileUploaded(true)}
                    className={`border-3 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                      fileUploaded 
                        ? "border-green-600 bg-green-50" 
                        : "border-black/40 hover:border-black bg-neutral-50 hover:bg-neutral-100"
                    }`}
                  >
                    <Upload className={`w-8 h-8 mx-auto mb-2 ${fileUploaded ? "text-green-600" : "text-neutral-500"}`} />
                    <p className="font-mono text-xs font-bold text-black">
                      {fileUploaded 
                        ? "✓ Audio file attached successfully!" 
                        : "Click here to attach audio, or share via WhatsApp after submitting"}
                    </p>
                    <span className="font-mono text-[10px] text-neutral-500 mt-1 block">
                      Smartphone voice memos, studio recordings, and WhatsApp voice notes accepted.
                    </span>
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#E5FF00] hover:bg-[#d8f000] border-3 border-black text-black font-display font-black text-2xl uppercase py-4 rounded-xl shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Proceed To ₹499 Onboarding</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <p className="text-center font-mono text-[11px] text-neutral-600 mt-3">
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
