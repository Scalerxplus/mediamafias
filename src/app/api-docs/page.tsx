"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Terminal, Copy, Check, Radio, Cpu, Database, ShieldCheck, ArrowRight } from "lucide-react";

export default function ApiDocsPage() {
  const [copied, setCopied] = React.useState(false);

  const sampleJson = `{
  "status": "success",
  "endpoint": "https://api.mediamafias.com/v2/stream/feed",
  "data": {
    "dialect": "bagheli",
    "track": {
      "isrc": "IN-MM0-26-00042",
      "title": "More Raja (Bagheli Lokgeet)",
      "artist": "Susheel Kumar Dwivedi & Rewa Troupe",
      "genre": "Rustic Celebratory Folk",
      "lufsTarget": -14.0,
      "previewDuration": 20,
      "streamUrl": "https://pub-2849e7bdf55f4d1e8ef98aa2495d0df8.r2.dev/More%20Raja%20-%20Bagheli%20Lokgeet.mp3",
      "dspLinks": {
        "spotify": "https://open.spotify.com/artist/1mwA0Fbjp1AnnEEfj2Sroy",
        "youtubeOac": "https://www.youtube.com/@MediaMafias"
      },
      "licensing": {
        "status": "pre-cleared",
        "pplExempt": true,
        "iprsExempt": true,
        "indemnifiedBy": "ScalerX Lab (UDYAM-MP-38-0052942)"
      }
    }
  }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-36 pb-16 px-6 bg-radial-[at_top_center] from-[#1A1A22] via-[#0B0B0E] to-[#0B0B0E] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
            DEVELOPER DOCUMENTATION • V2.0 REST API
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-2 leading-tight">
            Vernacular Content API
          </h1>
          <div className="font-sans font-bold text-xl sm:text-2xl text-[#D4AF37] mb-4">
            क्षेत्रीय लोक संगीत एवं ऑडियो सिंडिकेशन एपीआई
          </div>
          <p className="font-mono text-xs sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
            Programmatically stream, syndicate, and license mastered vernacular folk audio and metadata across The Future Radio, YouTube Shorts audio pipelines, and B2B In-Store commercial hardware.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-[#141419] border border-white/10 rounded-xl">
              <div className="font-display font-black text-2xl text-[#D4AF37]">99.999%</div>
              <div className="font-mono text-xs font-bold text-neutral-400">Uptime SLA</div>
            </div>
            <div className="p-4 bg-[#141419] border border-white/10 rounded-xl">
              <div className="font-display font-black text-2xl text-white">12,000+</div>
              <div className="font-mono text-xs font-bold text-neutral-400">Active Live Streams</div>
            </div>
            <div className="p-4 bg-[#141419] border border-white/10 rounded-xl">
              <div className="font-display font-black text-2xl text-[#10B981]">&lt; 45ms</div>
              <div className="font-mono text-xs font-bold text-neutral-400">Edge Stream Latency</div>
            </div>
            <div className="p-4 bg-[#141419] border border-white/10 rounded-xl">
              <div className="font-display font-black text-2xl text-[#C0392B]">100%</div>
              <div className="font-mono text-xs font-bold text-neutral-400">PPL/IPRS Exempt</div>
            </div>
          </div>
        </div>
      </section>

      {/* API Architecture & Features */}
      <section className="py-16 px-6 bg-[#0E0E12]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Syndication Endpoints */}
          <div className="bg-[#121217] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
            <h2 className="font-display font-black text-3xl uppercase tracking-tight text-white">
              Direct Syndication Architecture
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
              When a folk song is ingested and remastered to -14 LUFS through the Media Mafias studio pipeline, the Content API automatically exposes standardized audio feeds to 3 primary distribution channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 bg-[#181820] border border-white/5 rounded-2xl">
                <div className="font-display font-black text-xl text-[#D4AF37] uppercase mb-2">
                  01. The Future Radio
                </div>
                <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                  Direct HLS stream feed to <a href="https://thefutureradio.com" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#D4AF37]">thefutureradio.com</a> with 24/7 AI Master Clock metadata and dialect routing (e.g. <code>/bagheli</code>).
                </p>
              </div>

              <div className="p-5 bg-[#181820] border border-white/5 rounded-2xl">
                <div className="font-display font-black text-xl text-[#D4AF37] uppercase mb-2">
                  02. YouTube Shorts Pipeline
                </div>
                <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                  Automated short-form audio snippet generation (15–20s hooks) delivered to our YouTube network (<a href="https://www.youtube.com/@MediaMafias" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#D4AF37]">@MediaMafias</a>) and streaming catalogs.
                </p>
              </div>

              <div className="p-5 bg-[#181820] border border-white/5 rounded-2xl">
                <div className="font-display font-black text-xl text-[#D4AF37] uppercase mb-2">
                  03. B2B In-Store Hardware
                </div>
                <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                  Hardware-agnostic WebSockets &amp; MP3/AAC audio streams deployed to hotel, retail, and hospital premises with 100% PPL/IPRS exemption.
                </p>
              </div>
            </div>
          </div>

          {/* Sample JSON Payload */}
          <div className="bg-[#0B0B0E] text-white border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-mono text-xs font-bold uppercase text-[#D4AF37]">
                  SAMPLE GET /v2/stream/feed RESPONSE
                </span>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 bg-[#181820] hover:bg-[#D4AF37] hover:text-black text-neutral-300 font-mono text-xs px-3.5 py-1.5 rounded-lg border border-white/10 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy JSON"}</span>
              </button>
            </div>

            <pre className="font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto p-4 bg-[#141419] border border-white/5 rounded-xl leading-relaxed">
              <code>{sampleJson}</code>
            </pre>
          </div>

          {/* API Access Request */}
          <div className="bg-[#16161E] border border-[#D4AF37]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-white mb-1">
                Need API Keys for Commercial Hardware or OTT Platforms?
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-xl">
                Contact our developer engineering desk for private sandbox credentials and SDK integration.
              </p>
            </div>
            <a
              href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20request%20API%20keys%20for%20the%20Vernacular%20Content%20API."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#e5be47] text-black font-mono font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-all shrink-0"
            >
              Request API Access ➔
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
