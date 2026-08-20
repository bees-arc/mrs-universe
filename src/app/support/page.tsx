"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col gap-16">
        {/* Header Banner */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-sky-400">
            SUPPORT MY JOURNEY
          </span>
          <h1 className="font-bricolage text-[40px] sm:text-[60px] md:text-[72px] font-extrabold tracking-tight uppercase leading-none">
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
            className="lg:col-span-5 bg-white/5 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center text-center gap-6 backdrop-blur-xl"
          >
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-sky-400">
              SCAN TO SUPPORT
            </span>
            <h2 className="font-bricolage text-[28px] font-bold text-white uppercase">
              Make The Crown Possible
            </h2>

            {/* Large High-Contrast Vector QR Code */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white p-4 rounded-2xl border border-white/40 shadow-xl flex items-center justify-center my-2">
              <svg
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-black"
              >
                <rect x="1" y="1" width="7" height="7" fill="black" />
                <rect x="2" y="2" width="5" height="5" fill="white" />
                <rect x="3" y="3" width="3" height="3" fill="black" />

                <rect x="21" y="1" width="7" height="7" fill="black" />
                <rect x="22" y="2" width="5" height="5" fill="white" />
                <rect x="23" y="3" width="3" height="3" fill="black" />

                <rect x="1" y="21" width="7" height="7" fill="black" />
                <rect x="2" y="22" width="5" height="5" fill="white" />
                <rect x="3" y="23" width="3" height="3" fill="black" />

                <rect x="9" y="3" width="2" height="2" fill="black" />
                <rect x="12" y="3" width="2" height="2" fill="black" />
                <rect x="15" y="3" width="2" height="2" fill="black" />
                <rect x="18" y="3" width="2" height="2" fill="black" />

                <rect x="3" y="9" width="2" height="2" fill="black" />
                <rect x="3" y="12" width="2" height="2" fill="black" />
                <rect x="3" y="15" width="2" height="2" fill="black" />
                <rect x="3" y="18" width="2" height="2" fill="black" />

                <rect x="10" y="7" width="2" height="2" fill="black" />
                <rect x="14" y="7" width="2" height="2" fill="black" />
                <rect x="17" y="7" width="2" height="2" fill="black" />

                <rect x="9" y="10" width="3" height="3" fill="black" />
                <rect x="13" y="10" width="2" height="2" fill="black" />
                <rect x="16" y="10" width="3" height="2" fill="black" />
                <rect x="20" y="10" width="2" height="2" fill="black" />
                <rect x="23" y="10" width="2" height="2" fill="black" />

                <rect x="9" y="14" width="2" height="2" fill="black" />
                <rect x="12" y="13" width="3" height="3" fill="black" />
                <rect x="16" y="13" width="2" height="2" fill="black" />
                <rect x="19" y="14" width="2" height="2" fill="black" />
                <rect x="22" y="13" width="3" height="3" fill="black" />

                <rect x="10" y="17" width="2" height="2" fill="black" />
                <rect x="13" y="17" width="3" height="2" fill="black" />
                <rect x="17" y="17" width="2" height="2" fill="black" />
                <rect x="20" y="17" width="3" height="2" fill="black" />
                <rect x="24" y="17" width="2" height="2" fill="black" />

                <rect x="9" y="21" width="2" height="2" fill="black" />
                <rect x="12" y="20" width="2" height="3" fill="black" />
                <rect x="15" y="21" width="3" height="2" fill="black" />
                <rect x="19" y="20" width="2" height="2" fill="black" />
                <rect x="22" y="21" width="2" height="2" fill="black" />
                <rect x="25" y="20" width="2" height="2" fill="black" />

                <rect x="10" y="24" width="2" height="2" fill="black" />
                <rect x="13" y="24" width="3" height="3" fill="black" />
                <rect x="17" y="25" width="2" height="2" fill="black" />
                <rect x="20" y="24" width="3" height="2" fill="black" />
                <rect x="24" y="24" width="2" height="3" fill="black" />
              </svg>
            </div>

            <p className="text-[13px] text-gray-300 font-light max-w-xs">
              Scan this code with your phone camera to access official support links and sponsorship options.
            </p>
          </motion.div>

          {/* Support Information & Options */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h2 className="font-bricolage text-[28px] sm:text-[36px] font-bold text-white leading-snug">
              Ways You Can Support
            </h2>
            <div className="flex flex-col gap-4 text-[14px] text-gray-300 font-light leading-relaxed">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h4 className="font-bricolage text-[16px] font-bold text-white">
                  1. Official Sponsorship
                </h4>
                <p className="mt-1 text-gray-300">
                  Partner with Maleka Morani as a corporate or brand sponsor for Mrs. Universe 2026.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h4 className="font-bricolage text-[16px] font-bold text-white">
                  2. Advocacy Contributions
                </h4>
                <p className="mt-1 text-gray-300">
                  Directly support domestic violence shelters, mental health workshops, and cancer screening drives.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h4 className="font-bricolage text-[16px] font-bold text-white">
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
