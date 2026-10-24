import { Metadata } from "next";
import Link from "next/link";
import { Flame, MessageCircle, ArrowLeft, Sparkles, Share2 } from "lucide-react";
import { SHORTS_DATA, SHORTS_KEYWORDS } from "@/data/shorts";
import { YouTubeShortEmbed } from "@/components/ui/YouTubeShortEmbed";

export const metadata: Metadata = {
  title: "बघेली लोकगीत शॉर्ट्स एवं रील्स | Bagheli Lokgeet Shorts, Reels & WhatsApp Status | Media Mafias",
  description: "Watch, stream and share 14+ authentic Bagheli lokgeet shorts, folk music reels, vivah geet status, and Rewa Satna ke gaane directly to WhatsApp status.",
  keywords: [
    "Bagheli lokgeet shorts",
    "baheli folk music reels",
    "Bagheli Whatsapp status",
    "Bagheli Songs",
    "Rewa Satna ke gaane",
    "Bagheli vivah geet shorts",
    "sohar status bagheli",
    "devi jas reels"
  ],
  alternates: {
    canonical: "https://www.mediamafias.com/shorts"
  },
  openGraph: {
    title: "बघेली लोकगीत शॉर्ट्स, रील्स व व्हाट्सएप स्टेटस | Media Mafias",
    description: "Trending Bagheli folk reels, wedding shorts, sohar and devi jas status for WhatsApp.",
    url: "https://www.mediamafias.com/shorts",
    siteName: "Media Mafias",
    type: "website"
  }
};

export default function ShortsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0E] text-[#F5F5F0] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#D4AF37]">Shorts &amp; Reels</span>
        </div>

        {/* Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/40 px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <Flame className="w-4 h-4 text-red-500 animate-pulse fill-current" />
            <span>TRENDING 9:16 REELS &amp; WHATSAPP STATUS</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight">
            बघेली लोकगीत शॉर्ट्स एवं रील्स
          </h1>

          <div className="font-sans font-bold text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#D4AF37] to-amber-500">
            Bagheli Folk Music Reels, Shorts &amp; 1-Click WhatsApp Status
          </div>

          <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            विवाह बन्ना-बन्नी, सोहर, सावन कजरी, मैहर शारदा देवी जस और नाचनहाई लोकगीतों की एक्सक्लूसिव 9:16 रील्स। सीधे 1-क्लिक में अपने व्हाट्सएप स्टेटस पर शेयर करें!
          </p>

          {/* Targeted High-Volume Keyword Cloud */}
          <div className="flex flex-wrap justify-center gap-1.5 pt-2">
            {SHORTS_KEYWORDS.map((kw, i) => (
              <span
                key={i}
                className="font-mono text-[10px] uppercase text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* 14-Reel Vertical Video Grid (2 cols on mobile, 3 on tablet, 4 on desktop, 5 on wide) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-16">
          {SHORTS_DATA.map((short) => (
            <YouTubeShortEmbed key={short.id} short={short} />
          ))}
        </div>

        {/* Bottom Hub CTA */}
        <div className="bg-gradient-to-r from-red-600/15 via-amber-500/10 to-transparent border border-white/15 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-red-400 font-mono text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL YOUTUBE SHORTS VAULT</span>
            </div>
            <div className="font-display font-bold text-2xl uppercase tracking-wider text-white">
              Watch 40+ More Regional Shorts On YouTube
            </div>
            <p className="font-mono text-xs text-neutral-400">
              सब्सक्राइब करें @MediaMafias और पाएं प्रतिदिन नए बघेली, बुंदेली, अवधी स्टेटस।
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://www.youtube.com/@MediaMafias/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FF0000] hover:bg-[#D40000] text-white font-mono font-bold text-xs uppercase rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              <Flame className="w-4 h-4 fill-current" />
              <span>YouTube Shorts @MediaMafias</span>
            </a>

            <a
              href="https://api.whatsapp.com/send?text=Media%20Mafias%20-%20बघेली%20लोकगीत%20शॉर्ट्स%20व%20व्हाट्सएप%20स्टेटस%20संग्रह:%20https://www.mediamafias.com/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-mono font-bold text-xs uppercase rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Share Hub on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
