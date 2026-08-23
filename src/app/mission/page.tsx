"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Cause {
  title: string;
  category: string;
  description: string;
  image: string;
}

const causes: Cause[] = [
  {
    title: "Domestic Violence Advocacy",
    category: "SAFETY & HEALING",
    description: "Witnessing the physical and emotional impact firsthand in healthcare, I champion education, active awareness, and robust resources to help victims find safety, healing, and hope.",
    image: "/images/drive/drive_image_32_1HYvhsEsCV6dkUPvsNiv-oPdOmKzDoOwu.jpg",
  },
  {
    title: "Holistic Healthcare",
    category: "MIND, BODY & SPIRIT",
    description: "Over 15 years caring for patients in ICU, ER, aesthetics, and mental health. Dedicated to compassionate care that treats the whole person, not just a clinical diagnosis.",
    image: "/images/maleka-nurse.png",
  },
  {
    title: "Mental Health & Youth Development",
    category: "CONFIDENCE & WELL-BEING",
    description: "Helping young people build confidence, resilience, and self-worth. Encouraging the next generation to prioritize mental well-being and understand that asking for help is a sign of strength.",
    image: "/images/figma_hero_exact.png",
  },
  {
    title: "Cancer Awareness & Early Screening",
    category: "SURVIVORSHIP & HOPE",
    description: "As a cancer survivor myself, I promote early detection, screening, and strong emotional support. I hope my journey shows others that cancer does not have to define your future.",
    image: "/images/maleka-crowning.png",
  },
];

export default function MissionPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col gap-16">
        {/* Page Banner Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-sky-400">
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
          {causes.map((cause, idx) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-xl group hover:border-white/30 transition-all"
            >
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
                <span className="text-[10px] font-mono tracking-[2.5px] uppercase text-sky-400">
                  {cause.category}
                </span>
                <h3 className="font-onest text-[22px] font-bold text-white leading-snug">
                  {cause.title}
                </h3>
                <p className="text-[14px] text-gray-300 font-light leading-relaxed mt-1">
                  {cause.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-950/40 via-black to-purple-950/40 border border-white/15 rounded-3xl p-10 text-center flex flex-col items-center gap-6">
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
