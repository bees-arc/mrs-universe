"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedTrackSection() {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Section Header: Subtitle + Title matching Frame 1 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4">
          <h2 className="font-bricolage text-[36px] sm:text-[48px] md:text-[56px] font-extrabold text-white uppercase tracking-tight">
            ABOUT THE JOURNEY
          </h2>
          <span className="text-[10px] font-bold tracking-[3px] uppercase text-sky-400 mt-2 sm:mt-0">
            LATEST RELEASE
          </span>
        </div>

        {/* Feature Media Player Card - Crisp & Clear Image without Spotify Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[360px] border border-white/20 shadow-2xl flex items-center p-8 sm:p-12"
        >
          {/* Fully Visible Background Image without dark mask overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/maleka-hero.png"
              alt="Maleka Morani - About the Journey"
              fill
              className="object-cover object-top opacity-100"
            />
          </div>

          {/* Card Content Overlay - Semi-transparent glass pill container for text legibility */}
          <div className="relative z-10 max-w-lg bg-black/60 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 shadow-2xl">
            {/* Category Tags */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3.5 py-1 rounded-full border border-white/30 bg-white/15 text-[10px] font-semibold tracking-[2px] text-white uppercase">
                INDIE
              </span>
              <span className="px-3.5 py-1 rounded-full border border-white/30 bg-white/15 text-[10px] font-semibold tracking-[2px] text-white uppercase">
                ALTERNATIVE
              </span>
            </div>

            {/* Description Text */}
            <p className="text-[14px] sm:text-[16px] text-white font-light leading-[1.6] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              A drifting piece carried by quiet thoughts and distant memories, echoing softly in the spaces in between.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
