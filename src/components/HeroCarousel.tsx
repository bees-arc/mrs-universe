"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
  id: number;
  desktopBg: string;
  mobileBg: string;
  contentImg?: string;
  overlayImg?: string;
  titleText?: string;
  contentText?: string;
  buttonText: string;
  buttonHref: string;
  buttonBgImage?: string;
  buttonColor?: string;
  align: "left" | "center" | "right";
}

const slides: SlideData[] = [
  {
    id: 1,
    desktopBg: "/images/book-cover-hero.webp",
    mobileBg: "/images/L1070250a.png",
    contentImg: "/images/Hero-Text-3.png",
    buttonText: "ORDER NOW",
    buttonHref: "https://demitebow.com/devo/#retailers-section",
    buttonBgImage: "/images/Button.png",
    align: "left",
  },
  {
    id: 2,
    desktopBg: "/images/Princess-Paris-Background.png",
    mobileBg: "/images/Princess-Paris-Background.png",
    contentImg: "/images/Princess-Paris-text-on-seperate-layer-1024x360.png",
    overlayImg: "/images/Book-with-dalmation-patch-extended-1.png",
    buttonText: "ORDER TODAY!",
    buttonHref: "https://demitebow.com/paris/#retailers-section",
    buttonColor: "#cc2a6e",
    align: "left",
  },
  {
    id: 3,
    desktopBg: "/images/Background-image.png",
    mobileBg: "/images/Background-image.png",
    titleText: "MOTIVATIONAL & KEYNOTE SPEAKER + EMCEE",
    contentText: "FAITH | WOMEN'S EMPOWERMENT | PHILANTHROPY",
    buttonText: "BOOK NOW",
    buttonHref: "https://demitebow.com/get-in-touch/",
    buttonColor: "#B6907F",
    align: "center",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

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
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-[#efe7e2]">
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
            {/* Desktop Background */}
            <div className="hidden sm:block absolute inset-0">
              <Image
                src={activeSlide.desktopBg}
                alt="Slide Background"
                fill
                priority
                className="object-cover object-right-top sm:object-cover"
              />
            </div>
            {/* Mobile Background */}
            <div className="block sm:hidden absolute inset-0">
              <Image
                src={activeSlide.mobileBg}
                alt="Slide Background"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            {/* Semi-transparent overlay on mobile for slide 1 background contrast */}
            {activeSlide.id === 1 && (
              <div className="block sm:hidden absolute inset-0 bg-[#efe7e2]/60 z-10" />
            )}
          </div>

          {/* Slide Content Overlay */}
          <div className="relative z-25 max-w-7xl mx-auto w-full h-full flex items-center px-6 md:px-12 lg:px-24">
            <div
              className={`w-full flex flex-col md:flex-row items-center justify-between ${
                activeSlide.align === "center" ? "justify-center text-center" : ""
              }`}
            >
              {/* Left text / image content */}
              <div
                className={`flex flex-col flex-1 max-w-xl ${
                  activeSlide.align === "center" ? "items-center text-center mx-auto" : "items-start"
                }`}
              >
                {activeSlide.contentImg ? (
                  <div className="relative w-full max-w-[320px] h-[80px] sm:max-w-[400px] sm:h-[100px] md:max-w-[500px] md:h-[120px] mb-6">
                    <Image
                      src={activeSlide.contentImg}
                      alt="Featured Title Text"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                ) : (
                  activeSlide.titleText && (
                    <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[54px] font-bold tracking-[3px] text-charcoal uppercase leading-[1.2] mb-4">
                      {activeSlide.titleText}
                    </h2>
                  )
                )}

                {activeSlide.contentText && (
                  <p className="font-avenir-medium font-bold text-[14px] sm:text-[18px] md:text-[21px] tracking-[2px] text-charcoal/80 uppercase mb-8">
                    {activeSlide.contentText}
                  </p>
                )}

                {/* Slider Button */}
                <Link href={activeSlide.buttonHref} className="z-30 block group">
                  {activeSlide.buttonBgImage ? (
                    <div className="relative w-[180px] h-[55px] md:w-[220px] md:h-[65px] flex items-center justify-center transition-transform duration-200 hover:scale-105">
                      <Image
                        src={activeSlide.buttonBgImage}
                        alt="Terracotta Button Background"
                        fill
                        className="object-contain"
                      />
                      <span className="absolute font-avenir-bold text-[16px] md:text-[18px] text-white tracking-[2px] mt-[-2px]">
                        {activeSlide.buttonText}
                      </span>
                    </div>
                  ) : (
                    <span
                      style={{ backgroundColor: activeSlide.buttonColor }}
                      className="inline-block px-8 py-3.5 md:px-10 md:py-4 font-avenir-bold text-[16px] md:text-[18px] text-white uppercase tracking-[2px] rounded-none shadow-sm transition-all duration-200 hover:brightness-90 hover:scale-105"
                    >
                      {activeSlide.buttonText}
                    </span>
                  )}
                </Link>
              </div>

              {/* Right Side Overlay Image (e.g. Princess Paris Dalmation Book Cover) */}
              {activeSlide.overlayImg && (
                <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 max-w-[320px] md:max-w-md w-full relative h-[250px] md:h-[350px] lg:h-[450px]">
                  <Image
                    src={activeSlide.overlayImg}
                    alt="Book Cover Display"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-charcoal hover:text-terracotta transition-colors"
        aria-label="Previous Slide"
      >
        <svg
          className="w-8 h-8 md:w-12 md:h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-charcoal hover:text-terracotta transition-colors"
        aria-label="Next Slide"
      >
        <svg
          className="w-8 h-8 md:w-12 md:h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-charcoal scale-125" : "bg-charcoal/40 hover:bg-charcoal/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
