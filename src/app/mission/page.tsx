"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { missionCauses } from "@/data/contentData";

export default function MissionPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col gap-16">
        {/* Page Banner Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#c9a87a]">
            MY MISSION &amp; ADVOCACY
          </span>
          <h1 className="font-onest text-[40px] sm:text-[60px] md:text-[72px] font-extrabold tracking-tight uppercase leading-none">
            Empowering Lives &amp; Inspiring Hope
          </h1>
          <p className="max-w-2xl text-[16px] text-gray-300 font-light leading-relaxed">
            Advocating across the globe for mental health awareness, domestic violence resources, cancer screening, and youth empowerment as Mrs. Universe 2026.
          </p>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {missionCauses.map((cause, idx) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-xl group hover:border-white/30 transition-all cursor-pointer justify-between"
            >
              <Link href={`/mission/${cause.slug}`} className="flex flex-col gap-6 h-full justify-between">
                <div className="flex flex-col gap-6">
                  {/* Aspect 4/3 with object-top alignment to ensure face is 100% visible */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/40">
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-mono tracking-[2.5px] uppercase text-[#c9a87a]">
                      {cause.category}
                    </span>
                    <h3 className="font-onest text-[22px] font-bold text-white leading-snug group-hover:text-[#c9a87a] transition-colors">
                      {cause.title}
                    </h3>
                    <p className="text-[14px] text-gray-300 font-light leading-relaxed mt-1">
                      {cause.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-semibold text-white group-hover:text-[#c9a87a] transition-colors">
                  <span>READ FULL ADVOCACY STORY</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#2e1f0e]/40 via-black to-[#2e1f0e]/40 border border-white/15 rounded-3xl p-10 text-center flex flex-col items-center gap-6">
          <h2 className="font-onest text-[28px] sm:text-[36px] font-bold uppercase tracking-tight">
            Join the Movement for Change
          </h2>
          <p className="max-w-xl text-[14px] text-gray-300 font-light leading-relaxed">
            Your support helps fund advocacy campaigns, outreach programs, and resources for individuals and families in need.
          </p>
          <Link
            href="/support"
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-[12px] tracking-[2px] uppercase hover:bg-gray-200 transition-all shadow-md"
          >
            SUPPORT MY JOURNEY
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
