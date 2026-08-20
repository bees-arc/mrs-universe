"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTrackSection from "@/components/FeaturedTrackSection";
import AboutSection from "@/components/AboutSection";
import DiscographySection from "@/components/DiscographySection";
import UpcomingShowsSection from "@/components/UpcomingShowsSection";
import LivePerformanceSection from "@/components/LivePerformanceSection";
import JournalSection from "@/components/JournalSection";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section matching Frame 1 */}
      <HeroSection />

      <main className="w-full flex flex-col">
        {/* 3. Featured Track Section ("ABOUT THE JOURNEY") */}
        <FeaturedTrackSection />

        {/* 4. About Section matching Frame 1 */}
        <AboutSection />

        {/* 5. Quote Banner Callout matching Svara HTML */}
        <section className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 border-t border-white/10 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-bricolage text-[22px] sm:text-[32px] md:text-[38px] font-bold text-gray-200 uppercase tracking-tight leading-[1.3]"
            >
              This is not just music. It’s a space to feel, to pause, and to listen beyond the noise.
            </motion.p>
          </div>
        </section>

        {/* 6. Discography Section */}
        <DiscographySection />

        {/* 7. Upcoming Shows Section */}
        <UpcomingShowsSection />

        {/* 8. Live Performance Section */}
        <LivePerformanceSection />

        {/* 9. Journal Section */}
        <JournalSection />

        {/* 10. Newsletter Form */}
        <NewsletterForm />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
