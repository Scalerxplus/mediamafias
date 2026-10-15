"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const YoutubeIcon = ({ className = "w-4 h-4 fill-current" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // 4 Core Navigation Links
  const links = [
    { name: "Music Catalog", href: "/catalog" },
    { name: "Business & Sync", href: "/licensing" },
    { name: "Creator Academy ₹99", href: "/academy" },
    { name: "Insights", href: "/insights" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3.5 flex items-center justify-between bg-white border-b-4 border-black shadow-[0_4px_0_0_#000]">
        
        {/* Left: Unified Brand Name */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 hover:-translate-y-0.5 transition-transform">
            <span className="font-display font-black text-2xl md:text-3xl tracking-wider uppercase text-black">
              MEDIA<span className="text-[#FF2E2E]">MAFIAS</span>
            </span>
          </Link>

          <span className="hidden sm:inline-block text-[10px] font-mono text-black font-black tracking-widest uppercase border-2 border-black px-2.5 py-1 bg-[#F59E0B] shadow-[2px_2px_0px_0px_#000] rounded">
            HIGH-FIDELITY FOLK
          </span>
        </div>

        {/* Desktop Nav: 4 Core Links + Primary CTA */}
        <nav className="hidden lg:flex gap-3 items-center text-xs font-bold font-mono uppercase">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href === "/insights" && pathname.startsWith("/blog"));
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-3.5 py-2 transition-all border-2 rounded-lg ${
                  isActive 
                    ? "bg-[#E5FF00] text-black border-black shadow-[2px_2px_0px_0px_#000]" 
                    : "border-transparent text-black/80 hover:text-black hover:border-black hover:bg-neutral-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* YouTube OAC Button */}
          <a 
            href="https://www.youtube.com/@MediaMafias" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 bg-[#FF2E2E] text-white border-2 border-black px-3.5 py-2 font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] transition-all flex items-center gap-1.5 rounded-lg"
          >
            <YoutubeIcon className="w-4 h-4 fill-white" />
            <span>YOUTUBE</span>
          </a>

          {/* Primary CTA: Join Academy ₹99 */}
          <Link 
            href="/academy" 
            className="ml-2 bg-[#E5FF00] text-black border-2 border-black px-4 py-2 font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:bg-[#F59E0B] transition-all rounded-lg flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>JOIN ACADEMY ₹99</span>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden text-black p-2 border-2 border-black bg-[#E5FF00] shadow-[2px_2px_0px_0px_#000] rounded-lg"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
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
                >
                  <X className="w-7 h-7 text-black" />
                </button>
              </div>

              <nav className="flex flex-col gap-3 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-4 bg-white border-4 border-black text-black font-display text-2xl uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] rounded-xl hover:bg-[#E5FF00] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 space-y-3">
              <Link
                href="/academy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-[#E5FF00] border-4 border-black text-black font-display text-xl uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] rounded-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-black" />
                <span>JOIN CREATOR ACADEMY (₹99)</span>
              </Link>

              <a
                href="https://www.youtube.com/@MediaMafias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#FF2E2E] border-4 border-black text-white font-display text-xl uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] rounded-xl flex items-center justify-center gap-2"
              >
                <YoutubeIcon className="w-5 h-5 fill-white" />
                <span>SUBSCRIBE ON YOUTUBE</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
