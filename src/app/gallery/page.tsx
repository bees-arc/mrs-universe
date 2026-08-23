"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscographySection from "@/components/DiscographySection";

const driveGalleryImages = [
  {
    id: "1",
    title: "Royal Blue Gown on Desert Dunes",
    category: "Mrs. Universe 2026",
    src: "/images/drive/drive_image_32_1HYvhsEsCV6dkUPvsNiv-oPdOmKzDoOwu.jpg",
  },
  {
    id: "2",
    title: "Editorial Fashion Portrait",
    category: "Editorial",
    src: "/images/drive/drive_image_20_1inAr1DSxtCqLQ0RjiKXFkMm_yhadwt-s.jpg",
  },
  {
    id: "3",
    title: "Crowned Mrs. Universe Portrait",
    category: "Official Portrait",
    src: "/images/figma_hero_exact.png",
  },
  {
    id: "4",
    title: "Emerald Green Couture",
    category: "Fashion & Style",
    src: "/images/drive/drive_image_33_1E-wbN1tlYlVzwQx5U7JeYAOQ3IRFVpTB.jpg",
  },
  {
    id: "5",
    title: "Metallic Gown Editorial",
    category: "High Fashion",
    src: "/images/drive/drive_image_31_10QPB8iIgOsgmoxzQDDfC1hlp0VyXlF02.jpg",
  },
  {
    id: "6",
    title: "ICU & Community Nursing Advocacy",
    category: "Advocacy & Healthcare",
    src: "/images/drive/drive_image_20_1inAr1DSxtCqLQ0RjiKXFkMm_yhadwt-s.jpg",
  },
  {
    id: "7",
    title: "Serene Blue Horizon",
    category: "Creative Portrait",
    src: "/images/drive/drive_image_48_10lQwO0LJa4up8M98rZGjdfvRUEJB8WKU.jpg",
  },
  {
    id: "8",
    title: "Empowerment & Leadership",
    category: "Stage & Spotlight",
    src: "/images/drive/drive_image_49_1ZwkMnJoj4UO9yzov2y9O4sd-_wFTE7du.jpg",
  },
  {
    id: "9",
    title: "Sunset Elegance",
    category: "Editorial",
    src: "/images/drive/drive_image_50_1uj-w1PvVpdSDFMGlRDPSPexEeNI_-rX5.jpg",
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
            {driveGalleryImages.map((img, idx) => (
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
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
