"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col gap-16">
        {/* Header Banner */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#c9a87a]">
            SUPPORT MY JOURNEY
          </span>
          <h1 className="font-onest text-[40px] sm:text-[60px] md:text-[72px] font-extrabold tracking-tight uppercase leading-none">
            Be Part of The Journey
          </h1>
          <p className="max-w-2xl text-[16px] text-gray-300 font-light leading-relaxed">
            Your support empowers Maleka Morani on her path to Mrs. Universe 2026 and directly fuels her advocacy campaigns for healthcare, mental well-being, and domestic violence support.
          </p>
        </div>

        {/* QR Scan & Support Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* QR Code Glass Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-white/5 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center text-center gap-6 backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity">
              <Image
                src="/images/drive/drive_image_19_16peaTzLEUWxFPnTHVsU4_2D84id_x5wa.jpg"
                alt="Support Background"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <span className="relative z-10 text-[11px] font-bold tracking-[3px] uppercase text-[#c9a87a]">
              SCAN TO SUPPORT
            </span>
            <h2 className="relative z-10 font-onest text-[28px] font-bold text-white uppercase">
              Make The Crown Possible
            </h2>

            {/* Two Real QR Codes */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center justify-center w-full mt-2">
              {/* GoFundMe QR */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-3 rounded-2xl shadow-xl">
                  <QRCodeSVG
                    value="https://gofund.me/2fa635535"
                    size={160}
                    bgColor="#ffffff"
                    fgColor="#0a0a0a"
                    level="H"
                    marginSize={1}
                  />
                </div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#00b966]">GoFundMe</span>
                <a
                  href="https://gofund.me/2fa635535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-gray-300 hover:text-white transition-colors underline underline-offset-2"
                >
                  Donate now ↗
                </a>
              </div>

              {/* Venmo QR */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-white p-3 rounded-2xl shadow-xl">
                  <QRCodeSVG
                    value="https://venmo.com/u/Maleka-Morani"
                    size={160}
                    bgColor="#ffffff"
                    fgColor="#0a0a0a"
                    level="H"
                    marginSize={1}
                  />
                </div>
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#c9a87a]">Venmo</span>
                <a
                  href="https://venmo.com/u/Maleka-Morani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-gray-300 hover:text-white transition-colors underline underline-offset-2"
                >
                  Send via Venmo ↗
                </a>
              </div>
            </div>

            <p className="relative z-10 text-[13px] text-gray-300 font-light max-w-xs">
              Scan with your phone camera to go directly to the support link.
            </p>
          </motion.div>

          {/* Support Information & Options */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2 className="font-onest text-[28px] sm:text-[36px] font-bold text-white leading-snug">
              Ways You Can Support
            </h2>
            <div className="flex flex-col gap-4 text-[14px] text-gray-300 font-light leading-relaxed">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h4 className="font-onest text-[16px] font-bold text-white">
                  1. Official Sponsorship
                </h4>
                <p className="mt-1 text-gray-300">
                  Partner with Maleka Morani as a corporate or brand sponsor for Mrs. Universe 2026.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h4 className="font-onest text-[16px] font-bold text-white">
                  2. Advocacy Contributions
                </h4>
                <p className="mt-1 text-gray-300">
                  Directly support domestic violence shelters, mental health workshops, and cancer screening drives.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h4 className="font-onest text-[16px] font-bold text-white">
                  3. Share the Story
                </h4>
                <p className="mt-1 text-gray-300">
                  Follow, share, and amplify the journey across social channels to inspire women and survivors worldwide.
                </p>
              </div>
            </div>

            <div className="mt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-[12px] tracking-[2px] uppercase hover:bg-gray-200 transition-all shadow-md inline-block"
              >
                GET IN TOUCH TO SPONSOR
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
