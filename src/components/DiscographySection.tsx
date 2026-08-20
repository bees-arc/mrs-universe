"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Track {
  id: string;
  title: string;
  duration: string;
  tags: string[];
  image: string;
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Midnight Air",
    duration: "3:46",
    tags: ["Indie", "Ambient", "Alternative"],
    image: "/images/maleka-hero.png",
  },
  {
    id: "2",
    title: "Before the Light",
    duration: "4:02",
    tags: ["Indie", "Acoustic", "Ambient"],
    image: "/images/maleka-nurse.png",
  },
  {
    id: "3",
    title: "Fading Lines",
    duration: "3:58",
    tags: ["Indie", "Alternative", "Dream Pop"],
    image: "/images/maleka-crowning.png",
  },
  {
    id: "4",
    title: "Where Silence Stays",
    duration: "4:15",
    tags: ["Indie", "Ambient", "Experimental"],
    image: "/images/maleka-hero.png",
  },
];

export default function DiscographySection() {
  return (
    <section id="discography" className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Title */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bricolage text-[36px] sm:text-[48px] font-extrabold tracking-tight uppercase">
            Discography
          </h2>
          <p className="text-[14px] sm:text-[16px] font-light text-blue-400 tracking-wide uppercase">
            Moments, Turned Into Sound.
          </p>
        </div>

        {/* Track Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              {/* Cover Image Container with Play Overlay */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg">
                <Image
                  src={track.image}
                  alt={track.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    {/* Play Icon */}
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
                  <h4 className="font-bricolage text-[18px] font-bold text-white group-hover:text-blue-400 transition-colors">
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
