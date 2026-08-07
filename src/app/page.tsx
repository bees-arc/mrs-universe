"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const flipIn = {
  hidden: { opacity: 0, rotateY: -30, scale: 0.95 },
  visible: { opacity: 1, rotateY: 0, scale: 1, transition: { duration: 1.0, ease: "easeOut" as const } },
};

const cardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white overflow-x-hidden">
      {/* 1. Header (Navbar) */}
      <Navbar />

      {/* 2. Hero Carousel */}
      <HeroCarousel />

      <main className="w-full">
        {/* 3. Intro Section ("I'm Demi Tebow") */}
        <section id="home-intro" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Column 1: Left Image - Slides in from left */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center border-[3px] border-[#efe7e2] p-2"
            >
              <div className="relative w-full aspect-[4/5] max-w-[360px]">
                <Image
                  src="/images/Homepage-Top-Image.jpg"
                  alt="Demi-Leigh Tebow"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Column 2: Signature, Secondary Image, Line, Learn More - Slides up */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center justify-between h-full py-4 text-center"
            >
              <div className="relative w-[180px] h-[96px] mb-6">
                <Image
                  src="/images/hey-guys-300x161.png"
                  alt="Hey guys signature"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full aspect-[1/1] max-w-[280px] mb-8">
                <Image
                  src="/images/Home-page-Bottom-image.jpg"
                  alt="Demi styling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-[15px] h-[150px] mb-6">
                <Image
                  src="/images/line.jpg"
                  alt="Vertical line divider"
                  fill
                  className="object-cover"
                />
              </div>
              <Link
                href="/about-me/"
                className="font-avenir-medium text-[14px] uppercase tracking-[3px] text-charcoal hover:text-terracotta transition-colors relative py-1"
              >
                <span className="relative z-10 border-b-4 border-terracotta-light hover:border-terracotta transition-colors pb-1">
                  Learn More
                </span>
              </Link>
            </motion.div>

            {/* Column 3: Intro Description Text - Slides in from right */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-start justify-center h-full"
            >
              <h1 className="font-serif text-[32px] md:text-[40px] font-bold text-charcoal uppercase tracking-[4px] mb-8 relative">
                <span className="relative z-10 border-b-8 border-terracotta-light/60 pb-2">
                  I&apos;m Demi Tebow
                </span>
              </h1>
              <div className="font-sans text-[15px] md:text-[16px] text-charcoal/80 leading-[1.8] tracking-[1px] flex flex-col gap-6 text-justify">
                <p>
                  It’s an honor to “meet” you. This website is a place dedicated to encouraging, inspiring and speaking life into anyone who visits. My hope is that through sharing my heart, passion and latest projects, you can find your own inspiration as well!
                </p>
                <p>
                  My greatest purpose in life is to love God and love others through all that I do. One of the ways we can love ourselves and love others is by building confidence. This world wants to tell us to have self-confidence, but I believe it’s God-confidence. Psalm 139 and Jeremiah 29:11 tell us that not only are we fearfully and wonderfully made, we’re made with a great purpose in mind. When we learn to see ourselves through God’s eyes, we’re set free from comparison and judgment, allowing us to passionately live life to the fullest. I want to help every person I encounter to have God-confidence too!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider line scaled */}
        <div className="w-full relative h-[10px] md:h-[12px] overflow-hidden">
          <Image
            src="/images/demi-tebow-header-line-scaled-1.jpg"
            alt="terracotta line"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* 4. Highlights Columns Section - Staggered Slide In */}
        <section id="highlights" className="bg-[#efe7e2]/30 py-20 px-6 md:px-12">
          <motion.div
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Highlight 1: Meet Demi */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white p-8 border border-terracotta/10 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              <div className="relative w-[150px] h-[95px] mb-4">
                <Image src="/images/1.png" alt="01" fill className="object-contain" />
              </div>
              <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-charcoal uppercase tracking-[3px] mb-4">
                Meet Demi
              </h3>
              <div className="relative w-full h-[6px] max-w-[150px] mb-8">
                <Image src="/images/4.jpg" alt="Divider line" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/6] mb-8 overflow-hidden group">
                <Image
                  src="/images/01-meet-demi-1.jpg"
                  alt="Meet Demi Portrait"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <Link
                href="/about-me/"
                className="font-avenir-medium text-[13px] uppercase tracking-[2px] text-charcoal hover:text-terracotta transition-colors border-b-4 border-[#efe7e2] hover:border-terracotta pb-1"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Highlight 2: Philanthropy */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white p-8 border border-terracotta/10 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              <div className="relative w-[180px] h-[95px] mb-4">
                <Image src="/images/2.png" alt="02" fill className="object-contain" />
              </div>
              <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-charcoal uppercase tracking-[3px] mb-4">
                Philanthropy
              </h3>
              <div className="relative w-full h-[6px] max-w-[150px] mb-8">
                <Image src="/images/4.jpg" alt="Divider line" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/6] mb-8 overflow-hidden group">
                <Image
                  src="/images/02-philanthropy-1.jpg"
                  alt="Philanthropy Action"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <Link
                href="/philanthropy/"
                className="font-avenir-medium text-[13px] uppercase tracking-[2px] text-charcoal hover:text-terracotta transition-colors border-b-4 border-[#efe7e2] hover:border-terracotta pb-1"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Highlight 3: Portfolio */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white p-8 border border-terracotta/10 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              <div className="relative w-[190px] h-[95px] mb-4">
                <Image src="/images/3.png" alt="03" fill className="object-contain" />
              </div>
              <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-charcoal uppercase tracking-[3px] mb-4">
                Portfolio
              </h3>
              <div className="relative w-full h-[6px] max-w-[150px] mb-8">
                <Image src="/images/4.jpg" alt="Divider line" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/6] mb-8 overflow-hidden group">
                <Image
                  src="/images/03-portfolio-1.jpg"
                  alt="Portfolio Work"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <Link
                href="/portfolio/"
                className="font-avenir-medium text-[13px] uppercase tracking-[2px] text-charcoal hover:text-terracotta transition-colors border-b-4 border-[#efe7e2] hover:border-terracotta pb-1"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* 5. Walt Disney Quote Section - Flips / Slides in */}
        <section id="disney-quote" className="py-12 md:py-20 px-6 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image quote card */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <div className="relative w-full aspect-[15/10] max-w-xl shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/New-York-Quote-Image-Only-1.png"
                  alt="Quote NYC scenery"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Right Disney text quote */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <div className="relative w-full aspect-[46/54] max-w-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/Walt-Disney-quote-side.png"
                  alt="Walt Disney quote"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Quote Only Full Width Block */}
        <motion.section
          variants={flipIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          id="nyc-quote"
          className="pb-16 px-6 max-w-5xl mx-auto w-full"
        >
          <div className="relative w-full aspect-[20/14]">
            <Image
              src="/images/New-York-Quote-quote-only-1.png"
              alt="NYC quote overlay"
              fill
              className="object-contain"
            />
          </div>
        </motion.section>

        {/* 7. Services Section ("Partner with me") */}
        <section id="services" className="bg-[#efe7e2]/30 py-20 px-6 md:px-12 border-t border-b border-terracotta/20">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-[32px] md:text-[43px] font-bold text-charcoal uppercase tracking-[5px] text-center mb-16 relative"
            >
              <span className="relative z-10 border-b-8 border-[#eaded8] pb-3">
                Partner with me
              </span>
            </motion.h2>

            {/* Top row of cards: Speaker, Entrepreneur, Social Influencer */}
            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8"
            >
              {/* Speaker Card */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/#speaker" className="block group">
                  <div className="bg-white border-[3px] border-white group-hover:border-terracotta/40 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden relative aspect-[17/16]">
                    <Image
                      src="/images/Speaker-2.png"
                      alt="Speaker services"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Entrepreneur Card */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/#entrepreneur" className="block group">
                  <div className="bg-white border-[3px] border-white group-hover:border-terracotta/40 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden relative aspect-[17/16]">
                    <Image
                      src="/images/Entrepreneur-2.png"
                      alt="Entrepreneur services"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Social Influencer Card */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/#influencer" className="block group">
                  <div className="bg-white border-[3px] border-white group-hover:border-terracotta/40 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden relative aspect-[17/16]">
                    <Image
                      src="/images/Social-Influencer-1.png"
                      alt="Social Influencer services"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Bottom row of cards: Model, Gallery */}
            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
            >
              {/* Model Card */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/#modeling" className="block group">
                  <div className="bg-white border-[3px] border-white group-hover:border-terracotta/40 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden relative aspect-[31/17]">
                    <Image
                      src="/images/Model-icon-3.png"
                      alt="Modeling services"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Gallery Card */}
              <motion.div variants={fadeInUp}>
                <Link href="/services/#gallery" className="block group">
                  <div className="bg-white border-[3px] border-white group-hover:border-terracotta/40 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden relative aspect-[31/17]">
                    <Image
                      src="/images/Gallery-icon-1.png"
                      alt="Gallery icon"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 8. Newsletter Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <NewsletterForm />
        </motion.div>
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
