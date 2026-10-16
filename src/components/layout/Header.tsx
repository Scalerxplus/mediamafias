"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ChevronDown, Radio } from "lucide-react";
import { SPOTIFY_ARTIST_URL, YOUTUBE_OAC_URL } from "@/lib/audio";

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const SpotifyIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
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
    { name: "Lyrics Vault (बोल संग्रह)", href: "/regional-music/lyrics", desc: "Parchhan, Gari, Banna Banni & Sohar Lyrics" },
    { name: "All Regional Music", href: "/regional-music", desc: "Complete Indo-Gangetic Master Archive" }
  ];

  // 6 Other Navigation Links
  const navItems: { name: string; href: string; badge?: string }[] = [
    { name: "Top Creators", href: "/creators" },
    { name: "Top Songs", href: "/top-songs" },
    { name: "Business & Sync", href: "/licensing" },
    { name: "Academy", href: "/academy" },
    { name: "Insights", href: "/insights" },
    { name: "About Us", href: "/about" }
  ];

  const isRegionalActive = pathname.startsWith("/regional-music") || pathname.startsWith("/catalog");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 py-2.5 flex items-center justify-between bg-[#0B0B0E]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
        
        {/* Left: Official Sunborn Logo from Canva */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity" aria-label="Media Mafias Home">
            <Image
              src="/Logo horizontal.png"
              alt="Media Mafias"
              width={160}
              height={40}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          <span className="hidden xl:inline-block text-[9px] font-mono text-amber-400 font-bold tracking-widest uppercase border border-amber-500/30 px-2 py-0.5 bg-amber-500/10 rounded">
            FOLK OAC &amp; LICENSING
          </span>
        </div>

        {/* Desktop Nav: Studio Styled */}
        <nav className="hidden lg:flex gap-1 xl:gap-1.5 items-center text-xs font-medium font-mono uppercase" aria-label="Main Navigation">
          
          {/* 1. Regional Music with Dropdown Sub-menu */}
          <div 
            className="relative"
            onMouseEnter={() => setIsRegionalDropdownOpen(true)}
            onMouseLeave={() => setIsRegionalDropdownOpen(false)}
          >
            <Link
              href="/regional-music"
              className={`px-3 py-2 transition-all rounded-lg flex items-center gap-1 border ${
                isRegionalActive
                  ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                  : "border-transparent text-neutral-300 hover:text-white hover:bg-white/5 hover:border-white/10"
              }`}
            >
              <span>Regional Music</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform text-neutral-400 ${isRegionalDropdownOpen ? "rotate-180" : ""}`} />
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
                  <div className="bg-[#141318] border border-white/15 rounded-xl p-2 shadow-2xl backdrop-blur-2xl">
                    <div className="px-3 py-1.5 font-mono text-[10px] font-bold uppercase text-neutral-400 border-b border-white/10">
                      Explore By Dialect
                    </div>
                    {regionalSubmenu.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        onClick={() => setIsRegionalDropdownOpen(false)}
                        className="block px-3 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                      >
                        <div className="font-display font-bold text-sm text-neutral-200 group-hover:text-amber-300 transition-colors">
                          {sub.name}
                        </div>
                        <div className="font-mono text-[10px] text-neutral-400 truncate">
                          {sub.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other 6 Core Navigation Links */}
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === "/insights" && pathname.startsWith("/blog"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 xl:px-3 py-2 transition-all rounded-lg relative border ${
                  isActive
                    ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                    : "border-transparent text-neutral-300 hover:text-white hover:bg-white/5 hover:border-white/10"
                }`}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-1 text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/40 font-mono font-bold">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="h-4 w-[1px] bg-white/15 mx-1" />

          {/* Official Spotify Artist Profile Button */}
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Media Mafias on Spotify"
            className="p-2 border border-white/15 bg-white/5 hover:bg-[#1DB954] text-neutral-300 hover:text-white rounded-lg transition-colors shadow-sm"
            title="Explore Media Mafias on Spotify"
          >
            <SpotifyIcon className="w-3.5 h-3.5 fill-current" />
          </a>

          {/* YouTube Official Artist Channel (OAC) Button */}
          <a
            href={YOUTUBE_OAC_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Media Mafias YouTube OAC"
            className="p-2 border border-red-500/40 bg-red-500/10 hover:bg-[#FF2E2E] text-red-400 hover:text-white rounded-lg transition-colors shadow-sm"
            title="Watch on YouTube OAC"
          >
            <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
          </a>

          {/* Primary CTA: Join Academy */}
          <Link
            href="/academy"
            className="bg-amber-500 hover:bg-amber-400 text-black border border-amber-400 px-3.5 py-1.5 font-bold text-xs uppercase tracking-wider transition-all rounded-lg flex items-center gap-1.5 shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
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
            className="p-1.5 border border-white/15 bg-white/5 text-[#1DB954] rounded-lg"
            aria-label="Spotify"
          >
            <SpotifyIcon className="w-4 h-4 fill-current" />
          </a>

          <button
            className="text-neutral-200 p-1.5 border border-white/15 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer"
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
            className="fixed inset-0 z-[60] bg-[#0B0B0E] p-6 flex flex-col justify-between overflow-y-auto text-white"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Image
                  src="/Logo horizontal.png"
                  alt="Media Mafias"
                  width={150}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
                <button
                  className="p-2 border border-white/15 bg-white/5 rounded-lg text-neutral-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col gap-3 py-6 font-mono text-sm uppercase font-bold">
                
                {/* Mobile Regional Music Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileRegionalOpen(!isMobileRegionalOpen)}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-white/15 bg-white/5 text-white"
                  >
                    <span>Regional Music (लोक संगीत)</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMobileRegionalOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isMobileRegionalOpen && (
                    <div className="mt-2 ml-3 pl-3 border-l-2 border-amber-500/40 space-y-2">
                      {regionalSubmenu.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1.5 text-xs text-neutral-300 hover:text-amber-300"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-neutral-200"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-black">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer Links */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#1DB954]/15 border border-[#1DB954]/40 text-[#1DB954] rounded-xl font-mono text-xs font-bold uppercase flex items-center justify-center gap-2"
                >
                  <SpotifyIcon className="w-4 h-4 fill-current" />
                  <span>Spotify</span>
                </a>

                <a
                  href={YOUTUBE_OAC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-red-500/15 border border-red-500/40 text-red-400 rounded-xl font-mono text-xs font-bold uppercase flex items-center justify-center gap-2"
                >
                  <YoutubeIcon className="w-4 h-4 fill-current" />
                  <span>YouTube</span>
                </a>
              </div>

              <Link
                href="/academy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-amber-500 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Join Academy</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
