"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedTrackSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-16 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        {/* Section Header: Subtitle + Title matching Frame 1 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4">
          <h2 className="font-bricolage text-[32px] sm:text-[44px] md:text-[52px] font-extrabold text-white uppercase tracking-tight">
            ABOUT THE JOURNEY
          </h2>
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-blue-400 mt-2 sm:mt-0">
            LATEST RELEASE
          </span>
        </div>

        {/* Feature Media Player Card matching Frame 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[380px] border border-white/15 shadow-2xl flex items-center p-8 sm:p-12"
        >
          {/* Close-Up Face Background Image matching Frame 1 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/maleka-hero.png"
              alt="Maleka Morani - About the Journey"
              fill
              className="object-cover object-top opacity-50 filter contrast-110"
            />
            {/* Dark Masking Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>

          {/* Card Content Overlay */}
          <div className="relative z-10 max-w-xl flex flex-col items-start gap-6">
            {/* Category Tags */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-4 py-1 rounded-full border border-white/20 bg-white/10 text-[11px] font-semibold tracking-[2px] text-gray-200 uppercase backdrop-blur-sm">
                INDIE
              </span>
              <span className="px-4 py-1 rounded-full border border-white/20 bg-white/10 text-[11px] font-semibold tracking-[2px] text-gray-200 uppercase backdrop-blur-sm">
                ALTERNATIVE
              </span>
            </div>

            {/* Description Text */}
            <p className="text-[15px] sm:text-[17px] text-gray-200 font-light leading-[1.7] tracking-wide">
              A drifting piece carried by quiet thoughts and distant memories, echoing softly in the spaces in between.
            </p>

            {/* Action Pill Button: PLAY ON SPOTIFY */}
            <Link
              href="#discography"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-white/40 bg-white/15 hover:bg-white hover:text-black text-white font-medium text-[12px] tracking-[2px] uppercase transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 496 512">
                <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
              </svg>
              <span>PLAY ON SPOTIFY</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
