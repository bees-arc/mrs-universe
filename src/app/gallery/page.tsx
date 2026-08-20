"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscographySection from "@/components/DiscographySection";
import LivePerformanceSection from "@/components/LivePerformanceSection";
import JournalSection from "@/components/JournalSection";

export default function GalleryPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-10 flex flex-col gap-12">
        {/* Page Banner Header */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-sky-400">
              MEDIA &amp; GALLERY
            </span>
            <h1 className="font-bricolage text-[40px] sm:text-[60px] md:text-[72px] font-extrabold tracking-tight uppercase leading-none">
              Sound, Stories &amp; Moments
            </h1>
            <p className="max-w-2xl text-[16px] text-gray-300 font-light leading-relaxed">
              Explore music releases, live performances, media appearances, and journal reflections.
            </p>
          </div>
        </div>

        {/* Gallery Modules */}
        <DiscographySection />
        <LivePerformanceSection />
        <JournalSection />
      </main>

      <Footer />
    </div>
  );
}
