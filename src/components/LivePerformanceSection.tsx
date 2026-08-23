"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LivePerformanceSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 border-t border-white/10 relative overflow-hidden text-center text-white">
      {/* Background Ambient Cover featuring Person_seated_with_hands_resting_202607202317.jpeg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/live_performance_seated_202607202317.jpg"
          alt="Maleka Morani Live Performance Ambient Background"
          fill
          sizes="100vw"
          className="object-cover object-[center_65%] opacity-20 filter blur-md contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Section Titles */}
        <div className="flex flex-col gap-3 items-center max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[3px] uppercase text-sky-400"
          >
            EXCLUSIVE SESSION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-onest text-[40px] sm:text-[56px] font-extrabold tracking-tight uppercase leading-none"
          >
            Live Performance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] sm:text-[20px] font-light text-sky-400 tracking-wide uppercase"
          >
            A moment, captured in sound.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[14px] sm:text-[16px] text-gray-300 font-light leading-relaxed"
          >
            Recorded in a quiet space, where every note carries what words cannot.
          </motion.p>
        </div>

        {/* Video Player Showcase Card framed to hands & lower face as requested */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full aspect-[16/9] max-w-4xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 group"
        >
          {isPlaying ? (
            <div className="relative w-full h-full bg-black flex flex-col items-center justify-center p-6 text-center">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover object-[center_65%] rounded-2xl"
                poster="/images/live_performance_seated_202607202317.jpg"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-30 px-4 py-2 rounded-full bg-black/80 text-white font-mono text-[11px] uppercase border border-white/30 hover:bg-white hover:text-black transition-all"
              >
                CLOSE VIDEO &times;
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full cursor-pointer flex items-center justify-center" onClick={() => setIsPlaying(true)}>
              {/* Cover Image aligned to hands resting & lower face */}
              <Image
                src="/images/live_performance_seated_202607202317.jpg"
                alt="Maleka Morani Live Performance Session - Hands Resting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* Center Glowing Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-4 border-white/50 backdrop-blur-md">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="px-6 py-2 rounded-full bg-black/60 border border-white/30 text-white text-[12px] font-bold tracking-[2px] uppercase backdrop-blur-md">
                  WATCH FULL LIVE SESSION
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
