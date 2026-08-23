"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex flex-col">
              <span className="font-monda text-[22px] font-bold tracking-[4px] uppercase text-white">
                MALEKA MORANI
              </span>
              <span className="text-[10px] font-mono tracking-[2.5px] uppercase text-sky-400">
                MRS. UNIVERSE 2026
              </span>
            </Link>
            <p className="max-w-sm text-[13px] text-gray-400 font-light leading-relaxed">
              Advocating for domestic violence survivors, mental health, healthcare excellence, and women empowerment worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 text-[12px] font-semibold text-gray-300 uppercase tracking-wider">
              <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
              <Link href="/story" className="hover:text-sky-400 transition-colors">My Story</Link>
              <Link href="/mission" className="hover:text-sky-400 transition-colors">My Mission</Link>
              <Link href="/gallery" className="hover:text-sky-400 transition-colors">Gallery</Link>
              <Link href="/journal" className="hover:text-sky-400 transition-colors">Journal</Link>
              <Link href="/support" className="hover:text-sky-400 transition-colors">Support</Link>
              <Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Advocacy & Contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
              CONNECT &amp; SPONSOR
            </span>
            <p className="text-[13px] text-gray-400 font-light leading-relaxed">
              For official sponsorships, press inquiries, and keynote engagements for Mrs. Universe 2026.
            </p>
            <Link
              href="/contact"
              className="mt-1 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-[11px] tracking-[1.5px] uppercase hover:bg-gray-200 transition-all text-center"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
          <span>&copy; 2026 Maleka Morani. All rights reserved.</span>
          <span>Mrs. Universe 2026 Official Platform</span>
        </div>
      </div>
    </footer>
  );
}
