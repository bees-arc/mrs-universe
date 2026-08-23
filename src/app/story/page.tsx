"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StoryPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col gap-16">
        {/* Page Banner Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-sky-400">
            MY STORY &amp; JOURNEY
          </span>
          <h1 className="font-onest text-[40px] sm:text-[60px] md:text-[72px] font-extrabold tracking-tight uppercase leading-none">
            Resilience, Service &amp; Purpose
          </h1>
          <p className="max-w-2xl text-[16px] text-gray-300 font-light leading-relaxed">
            Some stories were never meant to be spoken—they are meant to be lived. Discover Maleka Morani&apos;s journey as a nurse, mother, cancer survivor, widow, and Mrs. Universe 2026.
          </p>
        </div>

        {/* Story Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Seated Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
          >
            <Image
              src="/images/drive/drive_image_32_1HYvhsEsCV6dkUPvsNiv-oPdOmKzDoOwu.jpg"
              alt="Maleka Morani - My Story"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2 className="font-onest text-[28px] sm:text-[36px] font-bold text-white leading-snug">
              From ICU Care to the Global Stage of Mrs. Universe
            </h2>
            <div className="flex flex-col gap-5 text-[15px] text-gray-300 font-light leading-[1.8]">
              <p>
                <strong className="font-bold text-white">Maleka Morani</strong> has spent over 15 years caring for patients in high-acuity environments including ICU, emergency care, aesthetics, and psychiatric mental health. Her career in medicine has taught her that true healing happens when we care for the whole person—mind, body, and spirit.
              </p>
              <p>
                As a cancer survivor and widow who raised two wonderful children, Ariyana and Mikhail, Maleka understands firsthand the power of resilience. Her life experiences have fueled her passion for domestic violence advocacy, mental health education, and women empowerment.
              </p>
              <p>
                As Mrs. Universe 2026, Maleka uses her international platform to elevate critical causes, demonstrating that our challenges do not define us—they become the foundation of our strength.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/mission"
                className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-[12px] tracking-[2px] uppercase hover:bg-gray-200 transition-all shadow-md"
              >
                EXPLORE MY MISSION
              </Link>
              <Link
                href="/support"
                className="px-8 py-3.5 rounded-full border border-white/40 text-white font-semibold text-[12px] tracking-[2px] uppercase hover:bg-white hover:text-black transition-all"
              >
                SUPPORT MY JOURNEY
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
