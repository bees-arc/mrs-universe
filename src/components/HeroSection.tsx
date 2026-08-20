"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero-support" className="relative w-full min-h-[92vh] lg:min-h-screen bg-black pt-24 pb-12 px-6 md:px-16 flex flex-col justify-between overflow-hidden">
      {/* Full-Bleed Exact User Uploaded Hero Photo - Top-aligned to ensure her face & crown are 100% visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/user-hero-exact.jpg"
          alt="Maleka Morani Mrs. Universe 2026 - Exact Portrait"
          fill
          priority
          className="object-cover object-top opacity-100"
        />
      </div>

      {/* Top Main Overlay: Left Heading & Subtitle, Right Widget Card */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Heading + Pill Button + Subtitle Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start gap-5"
        >
          {/* Main Headline Stack with text shadow for legibility */}
          <h1 className="font-bricolage text-[48px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-extrabold text-white leading-[1.0] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            A Journey <br />
            <span className="font-light text-gray-100">Beyond the</span> <br />
            Crown.
          </h1>

          {/* White Capsule Button: SUPPORT MY JOURNEY */}
          <Link
            href="/support"
            className="mt-2 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-semibold text-[12px] tracking-[2px] uppercase transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] shadow-2xl"
          >
            SUPPORT MY JOURNEY
          </Link>

          {/* Paragraph Text below button */}
          <p className="max-w-sm text-[13px] sm:text-[14px] text-white font-normal leading-[1.6] tracking-wide mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Representing across the world with purpose, resilience, and a commitment to inspire, empower, and create meaningful impact.
          </p>
        </motion.div>

        {/* Right Column: Glassmorphic Widget Box with QR Code */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-end pt-8 lg:pt-16"
        >
          {/* Floating Widget Card with Dark Glass for legibility */}
          <div className="w-full max-w-sm bg-black/75 backdrop-blur-xl border border-white/30 p-5 rounded-2xl shadow-2xl flex items-center justify-between gap-4 relative overflow-hidden group">
            <div className="flex flex-col gap-1.5 relative z-10">
              <span className="text-[9px] font-bold tracking-[2.5px] uppercase text-gray-300">
                BE PART OF THE JOURNEY
              </span>
              <h4 className="font-bricolage text-[16px] font-bold text-white tracking-wide">
                Scan to Support
              </h4>
              <p className="text-[11px] text-gray-300 leading-snug">
                Your Support Helps Make The Crown Possible
              </p>
            </div>

            {/* Vector QR Code Graphic Container */}
            <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-white p-2 border border-white/40 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
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
                <rect x="20" y="10" width="2" height="2" fill="black" />
                <rect x="23" y="10" width="2" height="2" fill="black" />

                <rect x="9" y="14" width="2" height="2" fill="black" />
                <rect x="12" y="13" width="3" height="3" fill="black" />
                <rect x="16" y="13" width="2" height="2" fill="black" />
                <rect x="19" y="14" width="2" height="2" fill="black" />
                <rect x="22" y="13" width="3" height="3" fill="black" />

                <rect x="10" y="17" width="2" height="2" fill="black" />
                <rect x="13" y="17" width="3" height="2" fill="black" />
                <rect x="17" y="17" width="2" height="2" fill="black" />
                <rect x="20" y="17" width="3" height="2" fill="black" />
                <rect x="24" y="17" width="2" height="2" fill="black" />

                <rect x="9" y="21" width="2" height="2" fill="black" />
                <rect x="12" y="20" width="2" height="3" fill="black" />
                <rect x="15" y="21" width="3" height="2" fill="black" />
                <rect x="19" y="20" width="2" height="2" fill="black" />
                <rect x="22" y="21" width="2" height="2" fill="black" />
                <rect x="25" y="20" width="2" height="2" fill="black" />

                <rect x="10" y="24" width="2" height="2" fill="black" />
                <rect x="13" y="24" width="3" height="3" fill="black" />
                <rect x="17" y="25" width="2" height="2" fill="black" />
                <rect x="20" y="24" width="3" height="2" fill="black" />
                <rect x="24" y="24" width="2" height="3" fill="black" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Watermark Text */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 flex justify-end">
        <div className="flex flex-col items-end text-right">
          <h2 className="font-serif text-[42px] sm:text-[72px] md:text-[90px] lg:text-[104px] font-light text-white tracking-[12px] uppercase leading-[0.9] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            MALEKA
          </h2>
          <h2 className="font-bricolage text-[56px] sm:text-[90px] md:text-[120px] lg:text-[144px] font-black text-white tracking-[2px] uppercase leading-[0.85] -mt-1 sm:-mt-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            MORANI
          </h2>
        </div>
      </div>
    </section>
  );
}
