import * as React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-16 px-6 border-t-4 border-black relative overflow-hidden shadow-[0_-4px_0_0_#000]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand & Statutory Attribution */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <span className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-black">
              MEDIA<span className="text-[#FF2E2E]">MAFIAS</span>
            </span>
          </Link>
          
          <p className="text-neutral-800 font-mono text-sm max-w-md leading-relaxed border-l-4 border-[#F59E0B] pl-4">
            Preserving and modernizing the living folk heritage of <strong>Baghelkhand, Awadh, Bundelkhand, and Purvanchal</strong>. Broadcast-grade cinematic audio distributed across 150+ DSPs and autonomous in-store radio.
          </p>
          
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="font-mono text-xs font-bold text-black uppercase bg-[#E5FF00] border-2 border-black px-2.5 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
              UDYAM-MP-38-0052942
            </span>
            <span className="font-mono text-xs font-bold text-black uppercase bg-[#00E5FF] border-2 border-black px-2.5 py-1 rounded shadow-[2px_2px_0px_0px_#000]">
              100% DIRECT IP INDEMNIFIED
            </span>
          </div>
        </div>

        {/* Core Navigation */}
        <div className="space-y-3">
          <h4 className="font-display text-xl font-black tracking-wider text-black uppercase">Navigation</h4>
          <ul className="space-y-2.5 font-mono text-xs uppercase font-bold text-neutral-800">
            <li><Link href="/catalog" className="hover:text-[#FF2E2E] transition-colors">Music Catalog</Link></li>
            <li><Link href="/licensing" className="hover:text-[#FF2E2E] transition-colors">Business & Sync Licensing</Link></li>
            <li><Link href="/academy" className="hover:text-[#FF2E2E] transition-colors">Creator Academy (₹99)</Link></li>
            <li><Link href="/insights" className="hover:text-[#FF2E2E] transition-colors">Insights & Guides</Link></li>
            <li><Link href="/about" className="hover:text-[#FF2E2E] transition-colors">About ScalerX Lab</Link></li>
            <li><Link href="/contact" className="hover:text-[#FF2E2E] transition-colors">Contact & Licensing Desk</Link></li>
            <li><a href="https://thefutureradio.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF2E2E] transition-colors">The Future Radio ↗</a></li>
          </ul>
        </div>

        {/* Direct Contacts & Verified Social Profiles */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <h4 className="font-display text-xl font-black tracking-wider text-black uppercase">Direct Desk</h4>
            <div className="flex flex-col space-y-2 text-xs font-mono font-bold text-neutral-800 mt-3">
              <a href="mailto:contact@mediamafias.com" className="hover:text-[#FF2E2E] transition-colors flex items-center gap-1.5">
                <span className="text-[#FF2E2E]">➔</span> contact@mediamafias.com
              </a>
              <a href="https://wa.me/919209290699" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF2E2E] transition-colors flex items-center gap-1.5">
                <span className="text-[#FF2E2E]">➔</span> +91 9209290699 (WhatsApp)
              </a>
              <a 
                href="https://www.youtube.com/@MediaMafias" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-3 inline-block bg-[#FF2E2E] text-white border-2 border-black p-2.5 text-center font-black uppercase text-xs shadow-[2px_2px_0px_0px_#000] hover:bg-black transition-all rounded"
              >
                Official YouTube Channel ➔
              </a>
            </div>
          </div>
          
          <div className="pt-2">
            <h5 className="font-mono text-[10px] font-black tracking-widest text-neutral-500 uppercase mb-3">Official Social Profiles</h5>
            <div className="flex items-center gap-3 text-black">
              {/* YouTube */}
              <a href="https://www.youtube.com/@MediaMafias" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] hover:bg-[#FF2E2E] hover:text-white transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/TheMediaMafias" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] hover:bg-[#E5FF00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/mediamafias" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] hover:bg-[#E5FF00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/mediamafias" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 border-2 border-black rounded shadow-[2px_2px_0px_0px_#000] hover:bg-[#E5FF00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t-2 border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-neutral-700 text-xs font-mono uppercase tracking-widest text-center md:text-left">
          © {new Date().getFullYear()} Media Mafias. All rights reserved.
        </p>
        <p className="text-neutral-700 text-xs font-mono uppercase tracking-widest text-center md:text-right">
          A <a href="https://scalerxlab.com" target="_blank" rel="noopener noreferrer" className="underline font-bold text-black hover:text-[#FF2E2E]">ScalerX Lab</a> Enterprise Infrastructure · UDYAM-MP-38-0052942
        </p>
      </div>
    </footer>
  );
};
