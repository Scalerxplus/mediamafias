import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REAL_POSTS } from "@/lib/data/blogs";
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return REAL_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = REAL_POSTS.find((p) => p.id.toString() === resolvedParams.id);
  if (!post) return { title: "Guide Not Found" };

  return {
    title: `${post.title} | Media Mafias Insights`,
    description: post.excerpt,
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = REAL_POSTS.find((p) => p.id.toString() === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#C4B5FD] text-black selection:bg-[#E5FF00] selection:text-black font-sans">
      <Header />

      <article className="pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 rounded-xl font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] hover:bg-[#E5FF00] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          {/* Article Container */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#000]">
            
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-black/10 mb-6 font-mono text-xs text-neutral-600">
              <span className="font-mono text-xs font-black uppercase bg-[#00E5FF] border-2 border-black px-3 py-1 rounded shadow-[1px_1px_0px_0px_#000] text-black">
                {post.category}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-black mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="font-mono text-sm sm:text-base text-neutral-800 bg-[#FED7AA]/40 p-4 border-l-4 border-black rounded-r-xl mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </p>

            {/* Article Markdown-like Body */}
            <div className="font-sans text-base sm:text-lg text-neutral-900 leading-relaxed space-y-6 pt-2 border-t-2 border-black/10">
              {post.content.split("\n\n").map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                if (trimmed.startsWith("###")) {
                  return (
                    <h3 key={idx} className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-black pt-4">
                      {trimmed.replace("###", "").trim()}
                    </h3>
                  );
                }
                if (trimmed.startsWith("##")) {
                  return (
                    <h2 key={idx} className="font-display font-black text-3xl sm:text-4xl uppercase tracking-wide text-black pt-6 pb-2 border-b-2 border-black/20">
                      {trimmed.replace("##", "").trim()}
                    </h2>
                  );
                }
                if (trimmed.startsWith("-")) {
                  return (
                    <ul key={idx} className="list-disc pl-6 space-y-2 font-mono text-sm sm:text-base text-neutral-800">
                      {trimmed.split("\n").map((li, i) => (
                        <li key={i}>{li.replace("-", "").trim()}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="font-sans text-neutral-800 leading-relaxed">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 pt-8 border-t-4 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-mono text-xs text-neutral-600">
                Published by <strong>Media Mafias Editorial</strong> • ScalerX Lab
              </div>
              <div className="flex gap-3">
                <Link
                  href="/academy"
                  className="bg-[#E5FF00] hover:bg-black hover:text-[#E5FF00] border-2 border-black px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] transition-colors"
                >
                  Join Academy (₹99)
                </Link>
                <Link
                  href="/licensing"
                  className="bg-black hover:bg-[#00E5FF] hover:text-black text-white border-2 border-black px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] transition-colors"
                >
                  B2B Licensing
                </Link>
              </div>
            </div>

          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
