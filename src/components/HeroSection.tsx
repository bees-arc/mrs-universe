"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero-support" className="relative w-full min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      {/* Hero Background Image with Warm Vignette & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maleka-crowning.png"
          alt="Maleka Morani Mrs. Universe 2026"
          fill
          priority
          className="object-cover object-center opacity-65 scale-[1.02] filter contrast-[1.05]"
        />
        {/* Dark Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Heading + Button + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start gap-6 pt-4"
        >
          {/* Main Title Stack matching Frame 1 */}
          <h1 className="font-bricolage text-[48px] sm:text-[64px] md:text-[80px] lg:text-[88px] font-extrabold text-white leading-[1.02] tracking-tight uppercase">
            A Journey <br />
            <span className="text-gray-300">Beyond the</span> <br />
            Crown.
          </h1>

          {/* White Pill Button: SUPPORT MY JOURNEY */}
          <Link
            href="#newsletter"
            className="mt-2 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-medium text-[13px] tracking-[2px] uppercase transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] shadow-lg"
          >
            SUPPORT MY JOURNEY
          </Link>

          {/* Subtitle Description */}
          <p className="max-w-md text-[14px] sm:text-[15px] text-gray-300 font-light leading-[1.7] tracking-wide mt-2">
            Representing across the world with purpose, resilience, and a commitment to inspire, empower, and create meaningful impact.
          </p>
        </motion.div>

        {/* Right Column: Glassmorphic Widget Card (Frame 1 feature card) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-end pt-4"
        >
          {/* Floating Glassmorphic Container */}
          <div className="w-full max-w-md bg-black/60 backdrop-blur-xl border border-white/15 p-6 rounded-2xl shadow-2xl flex items-center justify-between gap-4 relative overflow-hidden group">
            {/* Ambient Background Light in Card */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />

            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-gray-400">
                BE PART OF THE JOURNEY
              </span>
              <h4 className="font-bricolage text-[18px] font-bold text-white tracking-wide">
                Scan to Support
              </h4>
              <p className="text-[12px] text-gray-300 leading-snug">
                Your Support Helps Make The Crown Possible
              </p>

              {/* Spotify / Action Capsule Button */}
              <Link
                href="#discography"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black text-white text-[11px] font-medium tracking-[1.5px] uppercase transition-all duration-300 w-fit"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 496 512">
                  <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
                </svg>
                <span>PLAY ON SPOTIFY</span>
              </Link>
            </div>

            {/* Thumbnail artwork inside widget matching Frame 1 */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 border border-white/20 shadow-md">
              <Image
                src="/images/maleka-hero.png"
                alt="Falling Quietly artwork"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
              <span className="absolute bottom-1 right-1 text-[8px] font-mono text-white/90 bg-black/60 px-1.5 py-0.5 rounded">
                3:42
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stacked Watermark Text (MALEKA MORANI) matching Frame 1 */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 flex justify-end">
        <div className="flex flex-col items-end text-right">
          <h2 className="font-bricolage text-[54px] sm:text-[80px] md:text-[110px] lg:text-[130px] font-extrabold text-white tracking-[6px] uppercase leading-none opacity-90">
            MALEKA
          </h2>
          <h2 className="font-bricolage text-[54px] sm:text-[80px] md:text-[110px] lg:text-[130px] font-extrabold text-white tracking-[8px] uppercase leading-none -mt-2 sm:-mt-4 opacity-90">
            MORANI
          </h2>
        </div>
      </div>
    </section>
  );
}
