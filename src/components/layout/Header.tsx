"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ChevronDown, Radio } from "lucide-react";
import { SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL } from "@/lib/audio";

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isRegionalDropdownOpen, setIsRegionalDropdownOpen] = React.useState(false);
  const [isMobileRegionalOpen, setIsMobileRegionalOpen] = React.useState(false);

  // 4 Regional Dialect sub-menu items
  const regionalSubmenu = [
    { name: "बघेली (Bagheli Folk)", href: "/regional-music?dialect=bagheli", desc: "Rewa & Satna Dadra, Sohar & Gailhai" },
    { name: "बुंदेली (Bundeli Folk)", href: "/regional-music?dialect=bundeli", desc: "Jhansi & Mahoba Veer Ras & Lokgeet" },
    { name: "अवधी (Awadhi Folk)", href: "/regional-music?dialect=awadhi", desc: "Monsoon Kajri & Vivah Banara" },
    { name: "पूर्वी / भोजपुरी (Purbi Folk)", href: "/regional-music?dialect=purbi", desc: "Purvanchal Viraha & Acoustic Lok" },
    { name: "All Regional Music", href: "/regional-music", desc: "Complete Indo-Gangetic Master Archive" }
  ];

  // 7 Core Navigation Links
  const navItems = [
    { name: "Top Regional Creators", href: "/creators" },
    { name: "Top Regional Songs", href: "/top-songs" },
    { name: "Business & Sync", href: "/licensing" },
    { name: "Academy of Folk Music", href: "/academy", badge: "₹499" },
    { name: "Insights", href: "/insights" },
    { name: "About Us", href: "/about" }
  ];

  const isRegionalActive = pathname.startsWith("/regional-music") || pathname.startsWith("/catalog");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between bg-white border-b-4 border-black shadow-[0_4px_0_0_#000]">
        
        {/* Left: Unified Brand Name */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 hover:-translate-y-0.5 transition-transform" aria-label="Media Mafias Home">
            <span className="font-display font-black text-2xl md:text-3xl tracking-wider uppercase text-black">
              MEDIA<span className="text-[#FF2E2E]">MAFIAS</span>
            </span>
          </Link>

          <span className="hidden xl:inline-block text-[10px] font-mono text-black font-black tracking-widest uppercase border-2 border-black px-2.5 py-0.5 bg-[#F59E0B] shadow-[2px_2px_0px_0px_#000] rounded">
            FOLK OAC &amp; LICENSING
          </span>
        </div>

        {/* Desktop Nav: Exact 7 Core Options */}
        <nav className="hidden lg:flex gap-1.5 xl:gap-2 items-center text-xs font-bold font-mono uppercase" aria-label="Main Navigation">
          
          {/* 1. Regional Music with Dropdown Sub-menu */}
          <div 
            className="relative"
            onMouseEnter={() => setIsRegionalDropdownOpen(true)}
            onMouseLeave={() => setIsRegionalDropdownOpen(false)}
          >
            <Link
              href="/regional-music"
              className={`px-3 py-2 transition-all border-2 rounded-lg flex items-center gap-1 ${
                isRegionalActive
                  ? "bg-[#E5FF00] text-black border-black shadow-[2px_2px_0px_0px_#000]"
                  : "border-transparent text-black/90 hover:text-black hover:border-black hover:bg-neutral-100"
              }`}
            >
              <span>Regional Music</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isRegionalDropdownOpen ? "rotate-180" : ""}`} />
            </Link>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {isRegionalDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-2 w-72 z-50"
                >
                  <div className="bg-white border-3 border-black rounded-xl p-2 shadow-[6px_6px_0px_0px_#000]">
                    <div className="px-3 py-1.5 font-mono text-[10px] font-black uppercase text-neutral-500 border-b border-black/10">
                      Explore By Dialect
                    </div>
                    {regionalSubmenu.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        onClick={() => setIsRegionalDropdownOpen(false)}
                        className="block px-3 py-2 rounded-lg hover:bg-[#FED7AA] border border-transparent hover:border-black transition-all"
                      >
                        <div className="font-display font-black text-sm text-black">
                          {sub.name}
                        </div>
                        <div className="font-mono text-[10px] text-neutral-600 truncate">
                          {sub.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other 6 Navigation Links */}
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === "/insights" && pathname.startsWith("/blog"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 xl:px-3 py-2 transition-all border-2 rounded-lg relative ${
                  isActive
                    ? "bg-[#E5FF00] text-black border-black shadow-[2px_2px_0px_0px_#000]"
                    : "border-transparent text-black/80 hover:text-black hover:border-black hover:bg-neutral-100"
                }`}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-1 text-[9px] bg-[#FF69B4] text-black px-1.5 py-0.2 rounded border border-black font-mono font-black">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          {/* Official Spotify Artist Profile Button */}
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Media Mafias on Spotify"
            className="p-2 border-2 border-black bg-white hover:bg-[#1DB954] hover:text-white rounded-lg shadow-[2px_2px_0px_0px_#000] transition-colors"
            title="Explore Media Mafias on Spotify"
          >
            <SpotifyIcon className="w-4 h-4 fill-current" />
          </a>

          {/* YouTube Official Artist Channel (OAC) Button */}
          <a
            href={YOUTUBE_OAC_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Media Mafias YouTube OAC"
            className="p-2 border-2 border-black bg-[#FF2E2E] text-white hover:bg-black rounded-lg shadow-[2px_2px_0px_0px_#000] transition-colors"
            title="Watch on YouTube OAC"
          >
            <YoutubeIcon className="w-4 h-4 fill-white" />
          </a>

          {/* Primary CTA: Join Academy */}
          <Link
            href="/academy"
            className="bg-[#E5FF00] text-black border-2 border-black px-3.5 py-2 font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:bg-[#F59E0B] transition-all rounded-lg flex items-center gap-1.5 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>JOIN ACADEMY</span>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-black bg-white text-black rounded-lg shadow-[2px_2px_0px_0px_#000]"
            aria-label="Spotify"
          >
            <SpotifyIcon className="w-4 h-4 fill-current" />
          </a>

          <button
            className="text-black p-2 border-2 border-black bg-[#E5FF00] shadow-[2px_2px_0px_0px_#000] rounded-lg cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#C4B5FD] p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b-4 border-black">
                <span className="font-display font-black text-3xl uppercase text-black">
                  MEDIA<span className="text-[#FF2E2E]">MAFIAS</span>
                </span>
                <button
                  className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7 text-black" />
                </button>
              </div>

              <nav className="flex flex-col gap-2.5 mt-6">
                
                {/* 1. Regional Music with Mobile Accordion */}
                <div className="border-4 border-black rounded-xl overflow-hidden bg-white shadow-[4px_4px_0px_0px_#000]">
                  <button
                    onClick={() => setIsMobileRegionalOpen(!isMobileRegionalOpen)}
                    className="w-full p-4 flex items-center justify-between font-display text-2xl uppercase tracking-wider text-black bg-white hover:bg-[#E5FF00] transition-colors"
                  >
                    <span>1. Regional Music</span>
                    <ChevronDown className={`w-6 h-6 transition-transform ${isMobileRegionalOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isMobileRegionalOpen && (
                    <div className="p-3 bg-neutral-50 border-t-2 border-black/20 space-y-1.5">
                      {regionalSubmenu.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block p-2.5 bg-white border-2 border-black rounded-lg font-mono text-xs font-bold uppercase hover:bg-[#FED7AA]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2 to 7 Other Core Navigation Links */}
                {navItems.map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-4 bg-white border-4 border-black text-black font-display text-2xl uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] rounded-xl hover:bg-[#E5FF00] transition-colors flex items-center justify-between"
                  >
                    <span>{idx + 2}. {item.name}</span>
                    {item.badge && (
                      <span className="font-mono text-xs font-black bg-[#FF69B4] border-2 border-black px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 space-y-3">
              <Link
                href="/academy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-[#E5FF00] border-4 border-black text-black font-display text-xl uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] rounded-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-black" />
                <span>JOIN ACADEMY OF FOLK MUSIC (₹499)</span>
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-white border-3 border-black text-black font-mono font-black text-xs uppercase rounded-xl flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#000]"
                >
                  <SpotifyIcon className="w-4 h-4 fill-current" />
                  <span>SPOTIFY</span>
                </a>

                <a
                  href={YOUTUBE_OAC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-[#FF2E2E] border-3 border-black text-white font-mono font-black text-xs uppercase rounded-xl flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#000]"
                >
                  <YoutubeIcon className="w-4 h-4 fill-white" />
                  <span>YOUTUBE OAC</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
