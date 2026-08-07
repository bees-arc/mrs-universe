"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
  id: number;
  bgImage: string;
  titleText: string;
  contentText: string;
  buttonText: string;
  buttonHref: string;
  buttonColor: string;
  align: "left" | "center";
}

const slides: SlideData[] = [
  {
    id: 1,
    bgImage: "/images/maleka-hero.png",
    titleText: "Maleka Morani",
    contentText: "Mrs. Universe | A Life Built on Resilience, Compassion, and Service",
    buttonText: "Meet Maleka",
    buttonHref: "#home-intro",
    buttonColor: "#B6907F",
    align: "left",
  },
  {
    id: 2,
    bgImage: "/images/maleka-nurse.png",
    titleText: "Holistic Healthcare",
    contentText: "Nurse Practitioner | Healing the Whole Person: Mind, Body, and Spirit",
    buttonText: "Our Calling",
    buttonHref: "#services",
    buttonColor: "#B6907F",
    align: "left",
  },
  {
    id: 3,
    bgImage: "/images/maleka-crowning.png",
    titleText: "Advocacy & Impact",
    contentText: "Breaking Mental Health Stigmas | Cancer & Domestic Violence Awareness",
    buttonText: "Join the Cause",
    buttonHref: "#newsletter",
    buttonColor: "#B6907F",
    align: "left",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const activeSlide = slides[current];

  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden bg-black">
      {/* Slides Container */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeSlide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full flex items-center"
        >
          {/* Slide Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={activeSlide.bgImage}
              alt={activeSlide.titleText}
              fill
              priority
              className="object-cover object-center md:object-cover"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          </div>

          {/* Slide Content Overlay */}
          <div className="relative z-20 max-w-7xl mx-auto w-full h-full flex items-center px-6 md:px-12 lg:px-24">
            <div className="w-full flex flex-col items-start max-w-2xl text-left">
              <span className="font-sans text-[11px] md:text-[13px] text-terracotta font-bold tracking-[8px] uppercase mb-4 animate-pulse-slow">
                Featured Spotlight
              </span>
              <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] font-bold tracking-[3px] text-white uppercase leading-[1.1] mb-6">
                {activeSlide.titleText}
              </h2>
              <p className="font-sans text-[14px] sm:text-[18px] md:text-[20px] tracking-[1.5px] text-white/80 font-avenir-medium mb-10 leading-[1.6]">
                {activeSlide.contentText}
              </p>

              {/* Slider Button */}
              <Link href={activeSlide.buttonHref} className="z-30 block group">
                <span
                  style={{ backgroundColor: activeSlide.buttonColor }}
                  className="inline-block px-8 py-3.5 md:px-10 md:py-4 font-avenir-bold text-[15px] md:text-[16px] text-white uppercase tracking-[2.5px] rounded-none shadow-md transition-all duration-200 hover:brightness-110 hover:scale-105"
                >
                  {activeSlide.buttonText}
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous Slide"
      >
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next Slide"
      >
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dot Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
