"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about-story" className="w-full bg-black py-20 px-6 md:px-16 text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: ABOUT subtitle + Headline + Seated Newspaper Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold tracking-[3px] uppercase text-sky-400">
              ABOUT
            </span>
            <h3 className="font-bricolage text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-[1.2] tracking-tight">
              Some Stories Were Never Meant to Be Spoken.
            </h3>
          </div>

          {/* Seated Newspaper / White Suit Image Card matching Frame 1 */}
          <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl mt-1 group">
            <Image
              src="/images/maleka-hero.png"
              alt="Maleka Morani - Mrs. Universe 2026 Seated Portrait"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Column: Bio Paragraphs + READ FULL STORY button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start gap-7 pt-2 lg:pt-12"
        >
          {/* Paragraph 1 with bold name */}
          <p className="text-[15px] sm:text-[17px] text-gray-200 font-light leading-[1.75] tracking-wide">
            <strong className="font-bold text-white">Maleka Morani</strong> is a registered nurse, mother, mentor, and advocate who believes that true leadership begins with service.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[14px] sm:text-[15px] text-gray-300 font-light leading-[1.8] tracking-wide">
            After more than a decade in ICU and emergency care, her journey has evolved into aesthetics, mental health advocacy, community leadership, and now the international stage of Mrs. Universe 2026. Her story is one of resilience, reinvention, and purpose. From caring for others in moments that matter most to inspiring women and young people to believe in their own strength, Maleka continues to turn every chapter of her life into an opportunity to create impact.
          </p>

          {/* White Capsule Action Button matching Frame 1 */}
          <Link
            href="#advocacy-causes"
            className="mt-2 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-semibold text-[12px] tracking-[2px] uppercase transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] shadow-md"
          >
            READ FULL STORY
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
