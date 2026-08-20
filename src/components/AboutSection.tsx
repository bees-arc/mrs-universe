"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about-story" className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Subtitle + Title + Seated White Suit Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-blue-400">
              ABOUT
            </span>
            <h2 className="font-bricolage text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[1.15] tracking-tight">
              Some Stories Were Never Meant to Be Spoken.
            </h2>
          </div>

          {/* Seated Newspaper / White Suit Image Frame matching Frame 1 */}
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl mt-2 group">
            <Image
              src="/images/maleka-hero.png"
              alt="Maleka Morani - Mrs. Universe 2026 Seated Portrait"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl" />
          </div>
        </motion.div>

        {/* Right Column: Bio Paragraphs + READ FULL STORY button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start gap-8 pt-4 lg:pt-14"
        >
          {/* Bio Lead Paragraph */}
          <p className="text-[16px] sm:text-[18px] text-gray-200 font-light leading-[1.8] tracking-wide">
            <strong className="font-semibold text-white">Maleka Morani</strong> is a registered nurse, mother, mentor, and advocate who believes that true leadership begins with service.
          </p>

          {/* Body Paragraphs */}
          <div className="flex flex-col gap-6 text-[14px] sm:text-[15px] text-gray-400 font-light leading-[1.8] tracking-wide">
            <p>
              After more than a decade in ICU and emergency care, her journey has evolved into aesthetics, mental health advocacy, community leadership, and now the international stage of Mrs. Universe 2026.
            </p>
            <p>
              Her story is one of resilience, reinvention, and purpose. From caring for others in moments that matter most to inspiring women and young people to believe in their own strength, Maleka continues to turn every chapter of her life into an opportunity to create impact.
            </p>
          </div>

          {/* Pill Action Button matching Frame 1 */}
          <Link
            href="#advocacy-causes"
            className="mt-2 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-medium text-[12px] tracking-[2px] uppercase transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] shadow-md"
          >
            READ FULL STORY
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
