"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white pt-16 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Footer Row: Nav Links + Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Quick Nav Links */}
          <ul className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center md:justify-start">
            <li>
              <Link href="/" className="text-[12px] font-medium tracking-[2px] text-gray-400 hover:text-white uppercase transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about-story" className="text-[12px] font-medium tracking-[2px] text-gray-400 hover:text-white uppercase transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#discography" className="text-[12px] font-medium tracking-[2px] text-gray-400 hover:text-white uppercase transition-colors">
                Music
              </Link>
            </li>
            <li>
              <Link href="#discography" className="text-[12px] font-medium tracking-[2px] text-gray-400 hover:text-white uppercase transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="#discography" className="text-[12px] font-medium tracking-[2px] text-gray-400 hover:text-white uppercase transition-colors">
                Journal
              </Link>
            </li>
            <li>
              <Link href="#newsletter" className="text-[12px] font-medium tracking-[2px] text-gray-400 hover:text-white uppercase transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Icons matching Svara HTML */}
          <div className="flex items-center gap-4">
            {/* Spotify */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 496 512">
                <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
              </svg>
            </a>

            {/* iTunes */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                <path d="M223.6 80.3C129 80.3 52.5 157 52.5 251.5S129 422.8 223.6 422.8s171.2-76.7 171.2-171.2c0-94.6-76.7-171.3-171.2-171.3zm79.4 240c-3.2 13.6-13.5 21.2-27.3 23.8-12.1 2.2-22.2 2.8-31.9-5-11.8-10-12-26.4-1.4-36.8 8.4-8 20.3-9.6 38-12.8 3-.5 5.6-1.2 7.7-3.7 3.2-3.6 2.2-2 2.2-80.8 0-5.6-2.7-7.1-8.4-6.1-4 .7-91.9 17.1-91.9 17.1-5 1.1-6.7 2.6-6.7 8.3 0 116.1.5 110.8-1.2 118.5-2.1 9-7.6 15.8-14.9 19.6-8.3 4.6-23.4 6.6-31.4 5.2-21.4-4-28.9-28.7-14.4-42.9 8.4-8 20.3-9.6 38-12.8 3-.5 5.6-1.2 7.7-3.7 5-5.7.9-127 2.6-133.7.4-2.6 1.5-4.8 3.5-6.4 2.1-1.7 5.8-2.7 6.7-2.7 101-19 113.3-21.4 115.1-21.4 5.7-.4 9 3 9 8.7-.1 170.6.4 161.4-1 167.6zM345.2 32H102.8C45.9 32 0 77.9 0 134.8v242.4C0 434.1 45.9 480 102.8 480h242.4c57 0 102.8-45.9 102.8-102.8V134.8C448 77.9 402.1 32 345.2 32zM223.6 444c-106.3 0-192.5-86.2-192.5-192.5S117.3 59 223.6 59s192.5 86.2 192.5 192.5S329.9 444 223.6 444z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.206-142.739 81.20connector" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Giant Watermark */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-semibold text-gray-300">
              Musician &amp; Singer Elementor Template Kit by Omispace
            </span>
            <span className="text-[12px] text-gray-500">
              Copyright © 2026. All rights reserved.
            </span>
          </div>

          <div className="font-bricolage text-[28px] sm:text-[36px] font-bold text-white/40 tracking-[6px] uppercase">
            MALEKA MORANI
          </div>
        </div>
      </div>
    </footer>
  );
}
