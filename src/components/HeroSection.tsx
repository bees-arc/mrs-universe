"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero-support" className="relative w-full min-h-screen bg-black pt-28 pb-6 px-6 md:px-16 flex flex-col justify-between overflow-hidden">
      {/* Full-Bleed Hero Photo pinned to top to ensure face is 100% visible */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/hero_pose_202608132331.jpg"
          alt="Maleka Morani Mrs. Universe 2026 - Hero Pose"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-[center_15%] w-full h-full opacity-100"
        />
        {/* Subtle dark gradient overlay so text remains readable without obscuring face */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50 pointer-events-none" />
      </div>

      {/* Top Main Section Container aligned perfectly with max-w-7xl */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Heading, Pill Button & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl flex flex-col items-start gap-5"
        >
          {/* Main Headline Stack */}
          <h1 className="font-onest text-[46px] sm:text-[68px] md:text-[84px] lg:text-[94px] font-extrabold text-white leading-[1.0] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            A Journey <br />
            <span className="font-light text-gray-200">Beyond the</span> <br />
            Crown.
          </h1>

          {/* White Capsule Pill Button */}
          <Link
            href="/support"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-semibold text-[12px] tracking-[2px] uppercase transition-all duration-300 hover:bg-gray-200 hover:scale-[1.03] shadow-2xl"
          >
            SUPPORT MY JOURNEY
          </Link>

          {/* Paragraph Text below button */}
          <p className="max-w-md text-[13px] sm:text-[14px] text-gray-200 font-light leading-[1.65] tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] mt-1">
            Representing across the world with purpose, resilience, and a commitment to inspire, empower, and create meaningful impact.
          </p>
        </motion.div>

        {/* Floating Glassmorphism QR Support Card Aligned to the Content Container (Shifted Left) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden md:flex bg-black/60 border border-white/20 p-5 rounded-2xl backdrop-blur-md shadow-2xl items-center gap-5 max-w-sm self-start mt-6 lg:mt-10"
        >
          <div className="flex flex-col gap-1.5 flex-grow">
            <span className="text-[9px] font-mono tracking-[2.5px] uppercase text-[#c9a87a]">
              BE PART OF THE JOURNEY
            </span>
            <h3 className="font-onest text-[16px] font-bold text-white uppercase leading-snug">
              Scan to Support
            </h3>
            <p className="text-[11px] text-gray-300 font-light leading-relaxed">
              Your Support Helps Make This Crown Possible.
            </p>
            <Link
              href="/support"
              className="mt-1 text-[10px] font-bold tracking-[1.5px] uppercase text-[#c9a87a] hover:text-white transition-colors"
            >
              SUPPORT PAGE &rarr;
            </Link>
          </div>

          {/* High-Contrast Vector QR Code Thumbnail Box */}
          <Link href="/support" className="w-20 h-20 bg-white p-2 rounded-xl border border-white/40 shadow-lg flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform">
            <svg
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-black"
            >
              <rect x="1" y="1" width="7" height="7" fill="black" />
              <rect x="2" y="2" width="5" height="5" fill="white" />
              <rect x="3" y="3" width="3" height="3" fill="black" />

              <rect x="21" y="1" width="7" height="7" fill="black" />
              <rect x="22" y="2" width="5" height="5" fill="white" />
              <rect x="23" y="3" width="3" height="3" fill="black" />

              <rect x="1" y="21" width="7" height="7" fill="black" />
              <rect x="2" y="22" width="5" height="5" fill="white" />
              <rect x="3" y="23" width="3" height="3" fill="black" />

              <rect x="9" y="3" width="2" height="2" fill="black" />
              <rect x="12" y="3" width="2" height="2" fill="black" />
              <rect x="15" y="3" width="2" height="2" fill="black" />
              <rect x="18" y="3" width="2" height="2" fill="black" />

              <rect x="3" y="9" width="2" height="2" fill="black" />
              <rect x="3" y="12" width="2" height="2" fill="black" />
              <rect x="3" y="15" width="2" height="2" fill="black" />
              <rect x="3" y="18" width="2" height="2" fill="black" />

              <rect x="10" y="7" width="2" height="2" fill="black" />
              <rect x="14" y="7" width="2" height="2" fill="black" />
              <rect x="17" y="7" width="2" height="2" fill="black" />

              <rect x="9" y="10" width="3" height="3" fill="black" />
              <rect x="13" y="10" width="2" height="2" fill="black" />
              <rect x="16" y="10" width="3" height="2" fill="black" />

              <rect x="9" y="14" width="2" height="2" fill="black" />
              <rect x="12" y="13" width="3" height="3" fill="black" />
              <rect x="16" y="13" width="2" height="2" fill="black" />

              <rect x="10" y="17" width="2" height="2" fill="black" />
              <rect x="13" y="17" width="3" height="2" fill="black" />

              <rect x="9" y="21" width="2" height="2" fill="black" />
              <rect x="12" y="20" width="2" height="3" fill="black" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Right Giant Watermark Title */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 pb-2 flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col items-end text-right"
        >
          <h2 className="font-monda text-[42px] sm:text-[72px] md:text-[90px] lg:text-[104px] font-normal text-white tracking-[12px] uppercase leading-[0.9] drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
            MALEKA
          </h2>
          <h2 className="font-monda text-[56px] sm:text-[90px] md:text-[124px] lg:text-[148px] font-bold text-white tracking-[4px] uppercase leading-[0.85] -mt-1 sm:-mt-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            MORANI
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
