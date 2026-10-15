import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#0B0B0E] text-[#F5F5F0] py-16 px-6 border-t border-white/10 relative overflow-hidden shadow-[0_-4px_24px_rgba(0,0,0,0.6)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand & Statutory Attribution */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
            <Image
              src="/Logo horizontal.png"
              alt="Media Mafias"
              width={200}
              height={50}
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </Link>
          
          <p className="text-neutral-400 font-mono text-sm max-w-md leading-relaxed border-l-2 border-amber-500 pl-4">
            Preserving and modernizing the living folk heritage of <strong className="text-neutral-200">Baghelkhand, Awadh, Bundelkhand, and Purvanchal</strong>. Broadcast-grade cinematic audio distributed across 150+ DSPs and autonomous in-store radio.
          </p>
          
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="font-mono text-xs font-bold text-amber-300 uppercase bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded">
              UDYAM-MP-38-0052942
            </span>
            <span className="font-mono text-xs font-bold text-sky-300 uppercase bg-sky-500/10 border border-sky-500/30 px-2.5 py-1 rounded">
              100% DIRECT IP INDEMNIFIED
            </span>
          </div>

          {/* Visible Brand & Entity Disambiguation Note */}
          <div className="mt-4 p-4 bg-white/[0.02] border border-white/10 rounded-xl">
            <div className="font-mono text-[10px] font-black uppercase text-amber-400/80 mb-1">
              BRAND &amp; ENTITY VERIFICATION NOTE
            </div>
            <p className="font-mono text-[11px] text-neutral-400 leading-relaxed">
              Media Mafias (<a href="https://www.mediamafias.com/" className="underline font-bold text-amber-300">mediamafias.com</a>) is an Indian AI-powered regional folk music record label, decentralized audio distribution platform, creator academy, and B2B in-store radio provider operated by ScalerX Lab. It is an independent music and audio technology platform and is NOT affiliated with the Varanasi digital marketing agency Media Mafia (mediamafia.in) or mediamafia.co.za.
            </p>
          </div>
        </div>

        {/* Core Topic Cluster Navigation */}
        <div className="space-y-3">
          <h4 className="font-display text-xl font-bold tracking-wider text-white uppercase">Navigation</h4>
          <ul className="space-y-2 font-mono text-xs uppercase font-medium text-neutral-400">
            <li><Link href="/regional-music" className="hover:text-amber-300 transition-colors">Regional Music (लोक संगीत)</Link></li>
            <li><Link href="/creators" className="hover:text-amber-300 transition-colors">Top Regional Creators</Link></li>
            <li><Link href="/top-songs" className="hover:text-amber-300 transition-colors">Top Regional Songs</Link></li>
            <li><Link href="/licensing" className="hover:text-amber-300 transition-colors">Business &amp; Sync Licensing</Link></li>
            <li><Link href="/academy" className="hover:text-amber-300 transition-colors">Academy of Folk Music &amp; Heritage</Link></li>
            <li><Link href="/insights" className="hover:text-amber-300 transition-colors">Insights &amp; Guides</Link></li>
            <li><Link href="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
            <li><Link href="/api-docs" className="hover:text-amber-300 transition-colors">Vernacular Content API</Link></li>
            <li><Link href="/contact" className="hover:text-amber-300 transition-colors">Contact Desk</Link></li>
            <li><a href="https://thefutureradio.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">The Future Radio ↗</a></li>
          </ul>
        </div>

        {/* Direct Contacts & Verified Social Profiles */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <h4 className="font-display text-xl font-bold tracking-wider text-white uppercase">Direct Desk</h4>
            <div className="flex flex-col space-y-2 text-xs font-mono font-medium text-neutral-300 mt-3">
              <a href="mailto:contact@mediamafias.com" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span className="text-amber-400">➔</span> contact@mediamafias.com
              </a>
              <a href="https://wa.me/919209290699" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span className="text-emerald-400">➔</span> +91 9209290699 (WhatsApp)
              </a>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <a 
                  href="https://open.spotify.com/artist/1mwA0Fbjp1AnnEEfj2Sroy?si=Ow5aIT5jSEKnrc0TJytIYg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#1DB954]/15 text-[#1DB954] border border-[#1DB954]/40 hover:bg-[#1DB954] hover:text-white p-2 text-center font-bold uppercase text-[11px] transition-all rounded-lg"
                >
                  Spotify ➔
                </a>
                <a 
                  href="https://www.youtube.com/@MediaMafias" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-red-500/15 text-red-400 border border-red-500/40 hover:bg-red-600 hover:text-white p-2 text-center font-bold uppercase text-[11px] transition-all rounded-lg"
                >
                  YouTube OAC ➔
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <h5 className="font-mono text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-3">Official Channels</h5>
            <div className="flex items-center gap-2.5 text-neutral-400">
              {/* Spotify */}
              <a href="https://open.spotify.com/artist/1mwA0Fbjp1AnnEEfj2Sroy?si=Ow5aIT5jSEKnrc0TJytIYg" target="_blank" rel="noopener noreferrer" aria-label="Media Mafias - Spotify Verified Artist Profile" className="p-2 border border-white/10 rounded-lg hover:bg-[#1DB954] hover:text-white transition-all" title="Spotify Official Artist Profile">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@MediaMafias" target="_blank" rel="noopener noreferrer" aria-label="Media Mafias - YouTube Official Artist Channel" className="p-2 border border-white/10 rounded-lg hover:bg-[#FF2E2E] hover:text-white transition-all" title="YouTube Official Artist Channel">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/mediamafias" target="_blank" rel="noopener noreferrer" aria-label="Media Mafias - Instagram Profile" className="p-2 border border-white/10 rounded-lg hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-500 hover:text-white transition-all" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/TheMediaMafias" target="_blank" rel="noopener noreferrer" aria-label="Media Mafias - Facebook Page" className="p-2 border border-white/10 rounded-lg hover:bg-blue-600 hover:text-white transition-all" title="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest text-center md:text-left">
          © {new Date().getFullYear()} Media Mafias. All rights reserved.
        </p>
        <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest text-center md:text-right">
          A <a href="https://scalerxlab.com" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-400 hover:text-amber-300">ScalerX Lab</a> Enterprise Infrastructure · UDYAM-MP-38-0052942
        </p>
      </div>
    </footer>
  );
};
