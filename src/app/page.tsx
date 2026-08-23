"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTrackSection from "@/components/FeaturedTrackSection";
import AboutSection from "@/components/AboutSection";
import UpcomingShowsSection from "@/components/UpcomingShowsSection";
import LivePerformanceSection from "@/components/LivePerformanceSection";
import JournalSection from "@/components/JournalSection";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section matching Frame 1 */}
      <HeroSection />

      <main className="w-full flex flex-col">
        {/* 3. Featured Track Section ("ABOUT THE JOURNEY") */}
        <FeaturedTrackSection />

        {/* 4. About Section matching Frame 1 */}
        <AboutSection />

        {/* 5. Deep Ocean Blue Ambient Transition Section matching Frame 1 bottom fold */}
        <section className="w-full h-32 sm:h-48 bg-gradient-to-b from-black via-[#0f2b48]/80 to-black border-t border-white/10 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-950/30 blur-3xl pointer-events-none" />
        </section>

        {/* 6. Quote Banner Callout matching Svara HTML */}
        <section className="w-full bg-black py-20 px-6 md:px-12 border-t border-white/10 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-onest text-[22px] sm:text-[32px] md:text-[38px] font-bold text-gray-200 uppercase tracking-tight leading-[1.3]"
            >
              This is not just music. It’s a space to feel, to pause, and to listen beyond the noise.
            </motion.p>
          </div>
        </section>

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
