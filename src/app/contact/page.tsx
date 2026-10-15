"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, MessageCircle, Building2, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Contact Page", ...data }),
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
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />
      
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] space-y-6">
            <div className="inline-block bg-[#E5FF00] border-2 border-black px-3 py-1 rounded font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000]">
              DIRECT EXECUTIVE DESK
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black leading-none">
              Get In Touch
            </h1>

            <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed">
              For B2B commercial in-store audio, film sync licensing, creator onboarding queries, or press relations:
            </p>

            <div className="space-y-4 pt-4 border-t-2 border-black/10">
              <div className="p-4 bg-neutral-50 border-2 border-black rounded-2xl shadow-[2px_2px_0px_0px_#000]">
                <div className="font-mono text-[10px] font-black uppercase text-neutral-500 mb-1">WhatsApp & Call (Direct)</div>
                <a href="https://wa.me/919209290699" target="_blank" rel="noopener noreferrer" className="font-display font-black text-2xl text-black hover:text-[#25D366] transition-colors flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>+91 9209290699</span>
                </a>
              </div>

              <div className="p-4 bg-neutral-50 border-2 border-black rounded-2xl shadow-[2px_2px_0px_0px_#000]">
                <div className="font-mono text-[10px] font-black uppercase text-neutral-500 mb-1">Official Licensing Email</div>
                <a href="mailto:contact@mediamafias.com" className="font-display font-black text-2xl text-black hover:text-[#FF2E2E] transition-colors flex items-center gap-2">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span>contact@mediamafias.com</span>
                </a>
              </div>

              <div className="p-4 bg-[#FED7AA] border-2 border-black rounded-2xl shadow-[2px_2px_0px_0px_#000]">
                <div className="font-mono text-[10px] font-black uppercase text-neutral-700 mb-1">Parent Enterprise</div>
                <div className="font-display font-black text-xl text-black">
                  ScalerX Lab
                </div>
                <div className="font-mono text-xs text-neutral-800">
                  MSME Registration: UDYAM-MP-38-0052942
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000]">
            <h2 className="font-display font-black text-3xl uppercase tracking-wide text-black mb-2">
              Send Us A Message
            </h2>
            <p className="font-mono text-xs text-neutral-600 mb-6">
              Our licensing and creator coordination team responds within 24 hours.
            </p>

            {status === "success" ? (
              <div className="p-8 bg-green-100 border-3 border-black rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h3 className="font-display font-black text-2xl uppercase text-black">Message Sent!</h3>
                <p className="font-mono text-xs text-neutral-800">
                  Thank you. A member of our team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs font-black uppercase text-black mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter full name"
                    className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-black uppercase text-black mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-black uppercase text-black mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91..."
                    className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-black uppercase text-black mb-1">Inquiry Type</label>
                  <select
                    name="intent"
                    className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                  >
                    <option value="B2B Radio">In-Store AI Radio (PPL/IPRS Exempt)</option>
                    <option value="Sync Licensing">OTT / Film / Commercial Sync</option>
                    <option value="Creator Academy">Creator Academy (₹99 Vocal Onboarding)</option>
                    <option value="Wedding BGM">Bespoke Wedding Audio (#UrbanMandapStyle)</option>
                    <option value="General">General Inquiry / Press</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs font-black uppercase text-black mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project, location, or song..."
                    className="w-full p-3.5 bg-neutral-50 border-3 border-black rounded-xl font-mono text-xs sm:text-sm text-black outline-none focus:bg-white shadow-[2px_2px_0px_0px_#000]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#E5FF00] hover:bg-[#d8f000] border-3 border-black text-black font-display font-black text-2xl uppercase py-3.5 rounded-xl shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer flex items-center justify-center gap-2"
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
