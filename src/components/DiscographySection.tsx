"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { musicTracks } from "@/data/contentData";

export default function DiscographySection() {
  return (
    <section id="discography" className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Title */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
          <h2 className="font-onest text-[36px] sm:text-[48px] font-extrabold tracking-tight uppercase">
            Discography
          </h2>
          <p className="text-[14px] sm:text-[16px] font-light text-[#c9a87a] tracking-wide uppercase">
            Moments, Turned Into Sound.
          </p>
        </div>

        {/* Track Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {musicTracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              {/* Cover Image Container */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg">
                <Image
                  src={track.image}
                  alt={track.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 uppercase tracking-widest flex-wrap">
                  {track.tags.map((tag, i) => (
                    <span key={tag}>
                      {tag}
                      {i < track.tags.length - 1 && ","}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <h4 className="font-onest text-[18px] font-bold text-white group-hover:text-[#c9a87a] transition-colors">
                    {track.title}
                  </h4>
                  <span className="text-[12px] text-gray-400 font-mono">
                    {track.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
