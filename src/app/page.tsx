"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTrackSection from "@/components/FeaturedTrackSection";
import AboutSection from "@/components/AboutSection";
import LivePerformanceSection from "@/components/LivePerformanceSection";
import JournalSection from "@/components/JournalSection";
import NewsletterForm from "@/components/NewsletterForm";
import SponsorSection from "@/components/SponsorSection";
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


        {/* 8. Live Performance Section */}
        <LivePerformanceSection />

        {/* 9. Journal Section */}
        <JournalSection />

        {/* 10. Sponsor Section */}
        <SponsorSection />

        {/* 11. Newsletter Form */}
        <NewsletterForm />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
