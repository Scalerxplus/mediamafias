import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { REAL_POSTS } from "@/lib/data/blogs";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Industry Guides | Media Mafias",
  description: "Expert engineering and distribution guides on regional Indian folk music, -14 LUFS mastering, Spotify India pitching, and PPL-exempt commercial audio.",
};

export default function InsightsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0B0E] text-[#F5F5F0] selection:bg-[#D4AF37] selection:text-black font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 px-6 bg-radial-[at_top_center] from-[#1A1A22] via-[#0B0B0E] to-[#0B0B0E] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
            KNOWLEDGE BASE &amp; INDUSTRY GUIDES
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-2 leading-tight">
            Insights &amp; Guides
          </h1>
          <div className="font-sans font-bold text-xl sm:text-2xl text-[#D4AF37] mb-3">
            लोक संगीत उद्योग, साउंड इंजीनियरिंग व वितरण मार्गदर्शिका
          </div>
          <p className="font-mono text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
            Technical breakdowns, metadata standards, and commercial licensing insights for vernacular creators, OTT music supervisors, and sound engineers.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-6 bg-[#0E0E12] flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-[#121217] border border-white/10 hover:border-[#D4AF37]/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-all group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-black text-2xl uppercase tracking-wide text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="font-mono text-xs text-neutral-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs font-bold">
                  <span className="text-neutral-500 text-[11px]">{post.date}</span>
                  <Link
                    href={`/insights/${post.id}`}
                    className="inline-flex items-center gap-1.5 bg-[#1F1F28] hover:bg-[#D4AF37] hover:text-black border border-white/10 px-3.5 py-1.5 rounded-lg transition-all text-neutral-200"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
