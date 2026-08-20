"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LivePerformanceSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 border-t border-white/10 relative overflow-hidden text-center text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maleka-nurse.png"
          alt="Live Performance Background"
          fill
          className="object-cover opacity-25 filter blur-sm contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bricolage text-[40px] sm:text-[56px] font-extrabold tracking-tight uppercase"
        >
          Live Performance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[16px] sm:text-[20px] font-light text-blue-400 tracking-wide uppercase"
        >
          A moment, captured in sound.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-[14px] sm:text-[16px] text-gray-300 font-light leading-relaxed"
        >
          Recorded in a quiet space, where every note carries what words cannot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4"
        >
          <Link
            href="#newsletter"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-medium text-[13px] tracking-[2px] uppercase transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] shadow-xl"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch Full Video</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
