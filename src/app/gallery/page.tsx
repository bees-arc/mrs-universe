"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscographySection from "@/components/DiscographySection";

const figmaGalleryImages = [
  {
    id: "1",
    title: "Official Crowned Portrait",
    category: "Mrs. Universe 2026",
    src: "/images/hero_pose_202608132331.jpg",
  },
  {
    id: "2",
    title: "High Fashion Editorial Portrait",
    category: "Editorial",
    src: "/images/drive/drive_image_12_176R7jt93i6nAwWYvmq50qlGiNvt0H4UC.jpg",
  },
  {
    id: "3",
    title: "Healthcare & ICU Nursing Advocacy",
    category: "Advocacy & Service",
    src: "/images/drive/drive_image_16_1d5xXUAZ8DcnPAiZ59ZZiuIPabE4OZZ8p.jpg",
  },
  {
    id: "4",
    title: "Stage & Crowning Moment",
    category: "High Fashion",
    src: "/images/drive/drive_image_21_1FqsZMu3aCOmjB4fbFsYc-iNUrfi2gDhu.jpg",
  },
  {
    id: "5",
    title: "About the Journey Banner",
    category: "Music & Art",
    src: "/images/drive/drive_image_29_1aHj2VcN-KBzf82g6yWX0l1CoW0W2BDkw.jpg",
  },
  {
    id: "6",
    title: "Full Editorial Portrait",
    category: "Official Gallery",
    src: "/images/drive/drive_image_36_125zMgjFFGhflz5Sexvc5sVotFaiHtart.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-16 flex flex-col gap-12">
        {/* Page Banner Header */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-sky-400">
              MEDIA &amp; GALLERY
            </span>
            <h1 className="font-onest text-[40px] sm:text-[60px] md:text-[72px] font-extrabold tracking-tight uppercase leading-none">
              Sound, Stories &amp; Moments
            </h1>
            <p className="max-w-2xl text-[16px] text-gray-300 font-light leading-relaxed">
              Explore official portraits, high fashion editorials, advocacy moments, and music releases of Maleka Morani - Mrs. Universe 2026.
            </p>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {figmaGalleryImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/15 shadow-2xl cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-sky-400">
                    {img.category}
                  </span>
                  <h3 className="font-onest text-[18px] font-bold text-white mt-1">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Discography Section */}
        <DiscographySection />
      </main>

      <Footer />
    </div>
  );
}
