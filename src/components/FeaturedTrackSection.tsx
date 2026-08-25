"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedTrackSection() {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-16 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Section Header: Left Title + Right Category Badge */}
        <div className="flex flex-row items-end justify-between border-b border-white/10 pb-4">
          <h2 className="font-onest text-[32px] sm:text-[44px] md:text-[52px] font-extrabold text-white uppercase tracking-tight">
            ABOUT THE JOURNEY
          </h2>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[3px] uppercase text-[#c9a87a] pb-1">
            LATEST RELEASE
          </span>
        </div>

        {/* Feature Wide Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[360px] border border-white/15 shadow-2xl flex items-center p-6 sm:p-12"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/figma_journey_banner.png"
              alt="Maleka Morani - About the Journey Banner"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Card Content Overlay */}
          <div className="relative z-10 max-w-lg bg-black/60 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 shadow-2xl">
            {/* Category Tags */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3.5 py-1 rounded-full border border-white/30 bg-white/10 text-[10px] font-semibold tracking-[2px] text-white uppercase">
                INDIE
              </span>
              <span className="px-3.5 py-1 rounded-full border border-white/30 bg-white/10 text-[10px] font-semibold tracking-[2px] text-white uppercase">
                ALTERNATIVE
              </span>
            </div>

            {/* Description Text */}
            <p className="text-[14px] sm:text-[15px] text-white font-light leading-[1.65] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              A drifting piece carried by quiet thoughts and distant memories, echoing softly in the spaces in between.
            </p>

            <Link
              href="/support"
              className="mt-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-[11px] tracking-[1.5px] uppercase hover:bg-gray-200 transition-all shadow-lg"
            >
              SUPPORT THE JOURNEY &rarr;
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
