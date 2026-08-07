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
        {/* 3. Intro Section ("I'm Maleka Morani") */}
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
                  src="/images/maleka-hero.png"
                  alt="Maleka Morani Mrs. Universe Portrait"
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
              {/* Calligraphic Signature Text replacing image signature */}
              <div className="mb-6 h-[96px] flex items-center justify-center">
                <span className="font-serif italic text-[36px] text-terracotta font-normal tracking-[1px]">
                  Maleka Morani
                </span>
              </div>
              <div className="relative w-full aspect-[1/1] max-w-[280px] mb-8 overflow-hidden rounded-none shadow-sm">
                <Image
                  src="/images/maleka-nurse.png"
                  alt="Maleka aesthetic nursing"
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
                href="#highlights"
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
                  I&apos;m Maleka Morani
                </span>
              </h1>
              <div className="font-sans text-[15px] md:text-[16px] text-charcoal/80 leading-[1.8] tracking-[1px] flex flex-col gap-6 text-justify">
                <p>
                  Throughout my life, I have learned that healing is about more than treating a diagnosis or improving someone’s appearance. True healing happens when we care for the whole person—the mind, the body, and the spirit. That belief has shaped my journey as a registered nurse, aesthetic nurse injector, and Psychiatric Mental Health Nurse Practitioner.
                </p>
                <p>
                  I hope to make a difference by breaking the stigma surrounding mental health, encouraging people to seek help without fear or shame, and helping others understand that asking for support is a sign of strength. I also want to empower women to embrace their resilience, pursue their dreams with confidence, and know that their past does not define their future.
                </p>
                <p>
                  If my journey as a cancer survivor, widow, mother, and healthcare professional can inspire even one person to keep moving forward, believe in themselves, or seek the help they need, then I know I have made a meaningful impact.
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
            {/* Highlight 1: Meet Maleka */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white p-8 border border-terracotta/10 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              {/* CSS Typography number badge replacing image numbers */}
              <div className="mb-4 h-[95px] flex items-center justify-center">
                <span className="font-serif text-[72px] font-bold text-terracotta-light tracking-widest leading-none">
                  01
                </span>
              </div>
              <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-charcoal uppercase tracking-[3px] mb-4">
                Meet Maleka
              </h3>
              <div className="relative w-full h-[6px] max-w-[150px] mb-8">
                <Image src="/images/4.jpg" alt="Divider line" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/6] mb-8 overflow-hidden group">
                <Image
                  src="/images/maleka-hero.png"
                  alt="Meet Maleka Morani"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <p className="text-center font-sans text-[14px] text-charcoal/70 leading-[1.6] mb-6">
                Cancer survivor, widow, mother, and nurse practitioner. Explore my journey of resilience, service, and hope.
              </p>
              <Link
                href="#home-intro"
                className="font-avenir-medium text-[13px] uppercase tracking-[2px] text-charcoal hover:text-terracotta transition-colors border-b-4 border-[#efe7e2] hover:border-terracotta pb-1"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Highlight 2: Holistic Care */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white p-8 border border-terracotta/10 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              <div className="mb-4 h-[95px] flex items-center justify-center">
                <span className="font-serif text-[72px] font-bold text-terracotta-light tracking-widest leading-none">
                  02
                </span>
              </div>
              <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-charcoal uppercase tracking-[3px] mb-4">
                Healthcare
              </h3>
              <div className="relative w-full h-[6px] max-w-[150px] mb-8">
                <Image src="/images/4.jpg" alt="Divider line" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/6] mb-8 overflow-hidden group">
                <Image
                  src="/images/maleka-nurse.png"
                  alt="Healthcare Mission"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <p className="text-center font-sans text-[14px] text-charcoal/70 leading-[1.6] mb-6">
                Caring for patients for over 15 years. Specialized in ICU, emergency medicine, aesthetics, and psychiatric care.
              </p>
              <Link
                href="#services"
                className="font-avenir-medium text-[13px] uppercase tracking-[2px] text-charcoal hover:text-terracotta transition-colors border-b-4 border-[#efe7e2] hover:border-terracotta pb-1"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Highlight 3: Mrs. Universe */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white p-8 border border-terracotta/10 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
            >
              <div className="mb-4 h-[95px] flex items-center justify-center">
                <span className="font-serif text-[72px] font-bold text-terracotta-light tracking-widest leading-none">
                  03
                </span>
              </div>
              <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-charcoal uppercase tracking-[3px] mb-4">
                Philanthropy
              </h3>
              <div className="relative w-full h-[6px] max-w-[150px] mb-8">
                <Image src="/images/4.jpg" alt="Divider line" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-[5/6] mb-8 overflow-hidden group">
                <Image
                  src="/images/maleka-crowning.png"
                  alt="Crowning Moment"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <p className="text-center font-sans text-[14px] text-charcoal/70 leading-[1.6] mb-6">
                Representing advocacy on a global stage. Elevating mental health awareness, cancer screening, and domestic violence support.
              </p>
              <Link
                href="#services"
                className="font-avenir-medium text-[13px] uppercase tracking-[2px] text-charcoal hover:text-terracotta transition-colors border-b-4 border-[#efe7e2] hover:border-terracotta pb-1"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Family Bio Spotlight Section */}
        <section className="py-16 px-6 md:px-12 bg-white max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-start justify-center h-full"
            >
              <span className="font-sans text-[11px] md:text-[13px] text-terracotta font-bold tracking-[6px] uppercase mb-3">
                Source of Strength
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-charcoal uppercase tracking-[4px] mb-6">
                My Family
              </h2>
              <div className="font-sans text-[15px] md:text-[16px] text-charcoal/80 leading-[1.8] tracking-[1px] flex flex-col gap-6 text-justify">
                <p>
                  Family is the foundation of my life and the source of my greatest strength. I am incredibly blessed to be the mother of two amazing children who inspire me every day. My daughter, Ariyana, is 17 years old and recently graduated from high school. Watching her grow into a confident, compassionate young woman has been one of my life’s greatest joys. My son, Mikhail, is 13 and keeps me on my toes with his curiosity, humor, and kind heart.
                </p>
                <p>
                  Our family also includes Romeo, our seven-year-old Havanese, who brings so much love, laughter, and happiness into our home.
                </p>
                <p>
                  In 2016, I lost my husband, and becoming a widow changed the course of my life. While that loss was incredibly difficult, it also strengthened the bond between my children and me. Together, we have learned the meaning of resilience, unconditional love, and supporting one another through life’s challenges.
                </p>
              </div>
            </motion.div>

            {/* Custom stylized card display for quotes replacing static background files */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <div className="w-full max-w-lg bg-[#efe7e2]/50 border-l-[6px] border-terracotta p-8 md:p-12 shadow-sm rounded-none">
                <span className="font-serif text-[80px] text-terracotta/20 leading-none block -mt-6 -ml-2">
                  “
                </span>
                <p className="font-serif text-[20px] md:text-[24px] font-bold text-charcoal uppercase tracking-[2px] leading-[1.6] -mt-6">
                  OUR CHALLENGES DO NOT DEFINE US; THEY CAN BECOME THE SOURCE OF OUR GREATEST STRENGTH.
                </p>
                <span className="font-sans text-[12px] text-terracotta font-bold tracking-[4px] uppercase mt-6 block">
                  — Maleka Morani
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Custom Quote Card Section 2 */}
        <section id="disney-quote" className="py-12 md:py-20 px-6 max-w-7xl mx-auto w-full bg-[#efe7e2]/20 border-t border-b border-terracotta/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left custom quote card */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <div className="w-full max-w-lg bg-white border border-terracotta/20 p-8 md:p-12 shadow-sm">
                <span className="font-serif text-[60px] text-terracotta/20 leading-none block -mt-4">
                  “
                </span>
                <p className="font-sans text-[15px] md:text-[16px] text-charcoal/80 leading-[1.8] tracking-[1px] -mt-4 italic">
                  &quot;Domestic violence is an issue that affects individuals, families, and entire communities. As a nurse, I have witnessed the physical and emotional impact that abuse can have on survivors. Every person deserves to live free from fear and to be treated with dignity and respect.&quot;
                </p>
                <span className="font-sans text-[11px] text-terracotta font-bold tracking-[3px] uppercase mt-4 block">
                  — Domestic Violence Advocacy
                </span>
              </div>
            </motion.div>

            {/* Right custom quote card */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <div className="w-full max-w-lg bg-white border border-terracotta/20 p-8 md:p-12 shadow-sm">
                <span className="font-serif text-[60px] text-terracotta/20 leading-none block -mt-4">
                  “
                </span>
                <p className="font-serif text-[18px] md:text-[20px] font-bold text-charcoal uppercase tracking-[2px] leading-[1.6] -mt-4">
                  HEALING IS ABOUT MORE THAN TREATING A DIAGNOSIS. TRUE HEALING HAPPENS WHEN WE CARE FOR THE WHOLE PERSON: THE MIND, THE BODY, AND THE SPIRIT.
                </p>
                <span className="font-sans text-[11px] text-terracotta font-bold tracking-[3px] uppercase mt-4 block">
                  — Holistic Healing Philosophy
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Causes & Impact Grid Section ("Advocacy & Causes") */}
        <section id="services" className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-[32px] md:text-[43px] font-bold text-charcoal uppercase tracking-[5px] text-center mb-16 relative"
            >
              <span className="relative z-10 border-b-8 border-[#eaded8] pb-3">
                Advocacy & Causes
              </span>
            </motion.h2>

            {/* Top row of cards: Domestic Violence, Holistic Healthcare, Youth Development */}
            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8"
            >
              {/* Cause 1: Domestic Violence */}
              <motion.div variants={fadeInUp} className="bg-[#efe7e2]/30 border border-terracotta/10 p-6 flex flex-col items-start transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="/images/maleka-crowning.png"
                    alt="Domestic Violence Awareness"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-serif text-[18px] font-bold text-charcoal uppercase tracking-[2px] mb-3">
                  Domestic Violence
                </h4>
                <p className="font-sans text-[14px] text-charcoal/70 leading-[1.6]">
                  Witnessing the physical and emotional impact firsthand in healthcare, I champion education, active awareness, and robust resources to help victims find safety, healing, and hope.
                </p>
              </motion.div>

              {/* Cause 2: Holistic Healthcare */}
              <motion.div variants={fadeInUp} className="bg-[#efe7e2]/30 border border-terracotta/10 p-6 flex flex-col items-start transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="/images/maleka-nurse.png"
                    alt="Holistic Healthcare"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-serif text-[18px] font-bold text-charcoal uppercase tracking-[2px] mb-3">
                  Holistic Healthcare
                </h4>
                <p className="font-sans text-[14px] text-charcoal/70 leading-[1.6]">
                  Over 15 years caring for patients in ICU, ER, aesthetics, and mental health. Dedicated to compassionate care that treats the whole person, not just a clinical diagnosis.
                </p>
              </motion.div>

              {/* Cause 3: Youth Development */}
              <motion.div variants={fadeInUp} className="bg-[#efe7e2]/30 border border-terracotta/10 p-6 flex flex-col items-start transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                  <Image
                    src="/images/maleka-hero.png"
                    alt="Youth Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-serif text-[18px] font-bold text-charcoal uppercase tracking-[2px] mb-3">
                  Youth & Mental Health
                </h4>
                <p className="font-sans text-[14px] text-charcoal/70 leading-[1.6]">
                  Helping young people build confidence, resilience, and self-worth. Encouraging the next generation to prioritize mental well-being and understand that asking for help is a sign of strength.
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom row of cards: Cancer Awareness, Women Empowerment */}
            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
            >
              {/* Cause 4: Cancer Awareness */}
              <motion.div variants={fadeInUp} className="bg-[#efe7e2]/30 border border-terracotta/10 p-6 flex flex-col items-start transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
                <div className="relative w-full aspect-[16/10] mb-6 overflow-hidden">
                  <Image
                    src="/images/maleka-crowning.png"
                    alt="Cancer Awareness"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-serif text-[18px] font-bold text-charcoal uppercase tracking-[2px] mb-3">
                  Cancer Awareness
                </h4>
                <p className="font-sans text-[14px] text-charcoal/70 leading-[1.6]">
                  As a cancer survivor myself, I promote early detection, screening, and strong emotional support. I hope my journey shows others that cancer does not have to define your future.
                </p>
              </motion.div>

              {/* Cause 5: Women Empowerment */}
              <motion.div variants={fadeInUp} className="bg-[#efe7e2]/30 border border-terracotta/10 p-6 flex flex-col items-start transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
                <div className="relative w-full aspect-[16/10] mb-6 overflow-hidden">
                  <Image
                    src="/images/maleka-hero.png"
                    alt="Women Empowerment"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-serif text-[18px] font-bold text-charcoal uppercase tracking-[2px] mb-3">
                  Women Empowerment
                </h4>
                <p className="font-sans text-[14px] text-charcoal/70 leading-[1.6]">
                  Empowering women to embrace their resilience, grow God-confidence, and pursue professional or personal callings, knowing their past losses do not limit their potential.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 7. Newsletter Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <NewsletterForm />
        </motion.div>
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
