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

      {/* Top Main Section: Left Heading, Pill Button & Subtitle */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 flex flex-col items-start">
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
