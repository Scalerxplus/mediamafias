"use client";

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Code2, Cpu, Globe, Server, CheckCircle2, ArrowRight, ShieldCheck, Terminal, Copy, Check } from "lucide-react";
import Link from "next/link";

export default function ApiDocsPage() {
  const [copied, setCopied] = React.useState(false);

  const sampleJson = `{
  "status": "success",
  "endpoint": "https://api.mediamafias.com/v2/stream/feed",
  "data": {
    "track_id": "mm_rew_sohar_092",
    "isrc": "IN-MM2-26-00104",
    "title": "Luturi Jhalariya (Bagheli Sohar)",
    "dialect": "Bagheli",
    "region": "Baghelkhand",
    "category": "Lifecycle / Childbirth",
    "loudness_lufs": -14.0,
    "true_peak_dbtp": -1.0,
    "bpm": 96,
    "ip_status": "100% Direct Owned / ScalerX Lab Indemnified",
    "ppl_iprs_exempt": true,
    "syndication_targets": [
      "thefutureradio.com/bagheli",
      "youtube_shorts_audio_library",
      "b2b_instore_network"
    ],
    "stream_urls": {
      "flac_master": "https://cdn.mediamafias.com/masters/mm_rew_sohar_092.flac",
      "hls_stream": "https://stream.thefutureradio.com/bagheli/live.m3u8"
    },
    "royalty_split": {
      "creator_share": 0.80,
      "platform_share": 0.20,
      "settlement": "Instant UPI / Direct Payout"
    }
  }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      {/* Header Banner */}
      <section className="pt-36 pb-16 px-6 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-[#00E5FF] border-2 border-black px-3.5 py-1 rounded font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
            DEVELOPER DOCUMENTATION • V2.0 REST API
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black mb-4">
            Vernacular Content API
          </h1>
          <p className="font-mono text-sm sm:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Programmatically stream, syndicate, and license mastered vernacular folk audio and metadata across The Future Radio, YouTube Shorts audio pipelines, and B2B In-Store commercial hardware.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-[#E5FF00] border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_#000]">
              <div className="font-display font-black text-2xl text-black">99.999%</div>
              <div className="font-mono text-xs font-bold text-neutral-800">Uptime SLA</div>
            </div>
            <div className="p-4 bg-[#FED7AA] border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_#000]">
              <div className="font-display font-black text-2xl text-black">12,000+</div>
              <div className="font-mono text-xs font-bold text-neutral-800">Active Live Streams</div>
            </div>
            <div className="p-4 bg-[#FF69B4] border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_#000]">
              <div className="font-display font-black text-2xl text-black">&lt; 45ms</div>
              <div className="font-mono text-xs font-bold text-neutral-800">Edge Stream Latency</div>
            </div>
            <div className="p-4 bg-[#00E5FF] border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_#000]">
              <div className="font-display font-black text-2xl text-black">100%</div>
              <div className="font-mono text-xs font-bold text-neutral-800">PPL/IPRS Exempt</div>
            </div>
          </div>
        </div>
      </section>

      {/* API Architecture & Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Syndication Endpoints */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] space-y-6">
            <h2 className="font-display font-black text-3xl uppercase tracking-tight text-black">
              Direct Syndication Architecture
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-800 leading-relaxed max-w-3xl">
              When a folk song is ingested and remastered to -14 LUFS through the Media Mafias studio pipeline, the Content API automatically exposes standardized audio feeds to 3 primary distribution channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 bg-neutral-50 border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000]">
                <div className="font-display font-black text-xl text-black uppercase mb-2">
                  01. The Future Radio
                </div>
                <p className="font-mono text-xs text-neutral-700 leading-relaxed">
                  Direct HLS stream feed to <a href="https://thefutureradio.com" target="_blank" rel="noopener noreferrer" className="underline font-bold text-black">thefutureradio.com</a> with 24/7 AI Master Clock metadata and dialect routing (e.g. <code>/bagheli</code>).
                </p>
              </div>

              <div className="p-5 bg-neutral-50 border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000]">
                <div className="font-display font-black text-xl text-black uppercase mb-2">
                  02. YouTube Shorts Pipeline
                </div>
                <p className="font-mono text-xs text-neutral-700 leading-relaxed">
                  Automated short-form audio snippet generation (15–30s hooks) delivered to our YouTube network (<a href="https://www.youtube.com/@MediaMafias" target="_blank" rel="noopener noreferrer" className="underline font-bold text-black">@MediaMafias</a>) and TikTok/Reels catalogs.
                </p>
              </div>

              <div className="p-5 bg-neutral-50 border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000]">
                <div className="font-display font-black text-xl text-black uppercase mb-2">
                  03. B2B In-Store Hardware
                </div>
                <p className="font-mono text-xs text-neutral-700 leading-relaxed">
                  Hardware-agnostic WebSockets &amp; MP3/AAC audio streams deployed to hotel, retail, and hospital premises with 100% PPL/IPRS exemption.
                </p>
              </div>
            </div>
          </div>

          {/* Sample JSON Payload */}
          <div className="bg-black text-white border-4 border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#E5FF00]" />
                <span className="font-mono text-xs font-bold uppercase text-[#E5FF00]">
                  SAMPLE GET /v2/stream/feed RESPONSE
                </span>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs px-3 py-1.5 rounded-lg border border-neutral-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy JSON"}</span>
              </button>
            </div>

            <pre className="font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto p-4 bg-neutral-950 rounded-xl leading-relaxed">
              <code>{sampleJson}</code>
            </pre>
          </div>

          {/* API Access Request */}
          <div className="bg-[#FED7AA] border-4 border-black rounded-2xl p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-black mb-1">
                Need API Keys for Commercial Hardware or OTT Platforms?
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neutral-800 max-w-xl">
                Contact our developer engineering desk for private sandbox credentials and SDK integration.
              </p>
            </div>
            <a
              href="https://wa.me/919209290699?text=Hi%20Media%20Mafias%2C%20I%20want%20to%20request%20API%20keys%20for%20the%20Vernacular%20Content%20API."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-[#E5FF00] hover:text-black text-white font-mono font-black text-xs uppercase px-6 py-3.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] transition-all shrink-0"
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
