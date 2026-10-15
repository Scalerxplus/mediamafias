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
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-[#E5FF00] border-2 border-black px-3.5 py-1 rounded font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
            KNOWLEDGE BASE & INDUSTRY GUIDES
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-black mb-3">
            Insights & Guides
          </h1>
          <p className="font-mono text-sm sm:text-base text-neutral-800 max-w-2xl leading-relaxed">
            Technical breakdowns, metadata standards, and commercial licensing insights for vernacular creators, OTT music supervisors, and sound engineers.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-black uppercase bg-[#00E5FF] border-2 border-black px-2.5 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                      {post.category}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-600 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-black text-2xl uppercase tracking-wide text-black mb-3 group-hover:text-[#FF2E2E] transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="font-mono text-xs text-neutral-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between font-mono text-xs font-black">
                  <span className="text-neutral-500 text-[11px]">{post.date}</span>
                  <Link
                    href={`/insights/${post.id}`}
                    className="inline-flex items-center gap-1.5 bg-[#E5FF00] group-hover:bg-[#FF2E2E] group-hover:text-white border-2 border-black px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] transition-all text-black"
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
