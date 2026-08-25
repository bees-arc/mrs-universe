"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { journalPosts } from "@/data/contentData";

export default function JournalIndexPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col gap-16">
        {/* Page Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#c9a87a]">
            OFFICIAL BLOG &amp; ESSAYS
          </span>
          <h1 className="font-onest text-[40px] sm:text-[60px] md:text-[72px] font-extrabold tracking-tight uppercase leading-none">
            Journal &amp; Reflections
          </h1>
          <p className="max-w-2xl text-[16px] text-gray-300 font-light leading-relaxed">
            Personal writings, clinical reflections, and advocacy essays by Maleka Moraniâ€”Mrs. Universe 2026, registered nurse, survivor, and mentor.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {journalPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/15 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl backdrop-blur-xl group hover:border-white/30 transition-all cursor-pointer"
            >
              <Link href={`/journal/${post.slug}`} className="flex flex-col gap-6 h-full justify-between">
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[#c9a87a] uppercase tracking-wider">
                    <span>{post.category}</span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>

                  <h3 className="font-onest text-[22px] font-bold text-white group-hover:text-[#c9a87a] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-[14px] text-gray-300 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-semibold text-white group-hover:text-[#c9a87a] transition-colors">
                  <span>READ FULL ESSAY</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
