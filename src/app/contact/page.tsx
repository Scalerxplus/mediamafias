"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      intent: formData.get("intent"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />
      
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="bg-[#121217] border border-white/10 rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
            <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              DIRECT EXECUTIVE DESK
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              Get In Touch
            </h1>

            <div className="font-sans font-bold text-xl text-[#D4AF37]">
              संपर्क सूत्र एवं डायरेक्ट लाइसेंसिंग डेस्क
            </div>

            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
              For B2B commercial in-store audio, film sync licensing, artist bookings, creator onboarding queries, or press relations:
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="p-4 bg-[#181820] border border-white/5 rounded-2xl">
                <div className="font-mono text-[10px] font-bold uppercase text-neutral-400 mb-1">WhatsApp &amp; Call (Direct)</div>
                <a
                  href="https://wa.me/919209290699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-black text-2xl text-white hover:text-[#10B981] transition-colors flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#10B981]" />
                  <span>+91 9209290699</span>
                </a>
              </div>

              <div className="p-4 bg-[#181820] border border-white/5 rounded-2xl">
                <div className="font-mono text-[10px] font-bold uppercase text-neutral-400 mb-1">Official Licensing Email</div>
                <a
                  href="mailto:contact@mediamafias.com"
                  className="font-display font-black text-2xl text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                  <span>contact@mediamafias.com</span>
                </a>
              </div>

              <div className="p-4 bg-[#16161E] border border-[#D4AF37]/30 rounded-2xl">
                <div className="font-mono text-[10px] font-bold uppercase text-[#D4AF37] mb-1">Parent Enterprise</div>
                <div className="font-display font-black text-xl text-white">
                  ScalerX Lab
                </div>
                <div className="font-mono text-xs text-neutral-400">
                  MSME Registration: UDYAM-MP-38-0052942
                </div>
                <div className="font-mono text-xs text-neutral-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
                  <span>Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#121217] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl">
            <h2 className="font-display font-black text-3xl uppercase tracking-wide text-white mb-2">
              Send Us A Message
            </h2>
            <p className="font-mono text-xs text-neutral-400 mb-6">
              Our licensing and creator coordination team responds within 24 hours.
            </p>

            {status === "success" ? (
              <div className="p-8 bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#10B981] mx-auto" />
                <h3 className="font-display font-black text-2xl uppercase text-white">Message Sent!</h3>
                <p className="font-mono text-xs text-neutral-300">
                  Thank you. A member of our executive team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter full name"
                    className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91..."
                    className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1">Inquiry Type</label>
                  <select
                    name="intent"
                    className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white outline-none focus:border-[#D4AF37]"
                  >
                    <option value="B2B Radio">In-Store AI Radio (PPL/IPRS Exempt)</option>
                    <option value="Sync Licensing">OTT / Film / Commercial Sync</option>
                    <option value="Artist Booking">Artist Booking (Wedding / Live Show)</option>
                    <option value="Creator Academy">Creator Academy (₹499 Scale Onboarding)</option>
                    <option value="Wedding BGM">Bespoke Wedding Audio (#UrbanMandapStyle)</option>
                    <option value="General">General Inquiry / Press</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project, location, event, or song..."
                    className="w-full p-3.5 bg-[#181820] border border-white/10 rounded-xl font-mono text-xs sm:text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#D4AF37] hover:bg-[#e5be47] text-black font-display font-black text-2xl uppercase py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
