"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "The Feeling I Could Not Put Words",
    author: "Omi Space",
    date: "May 22, 2026",
    image: "/images/maleka-hero.png",
  },
  {
    id: "2",
    title: "Living Between Noise And Quiet Moments",
    author: "Omi Space",
    date: "May 22, 2026",
    image: "/images/maleka-nurse.png",
  },
  {
    id: "3",
    title: "Why I Prefer Simplicity Over Complexity",
    author: "Omi Space",
    date: "May 22, 2026",
    image: "/images/maleka-crowning.png",
  },
];

export default function JournalSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <h2 className="font-bricolage text-[36px] sm:text-[48px] font-extrabold tracking-tight uppercase">
            Journal
          </h2>
          <p className="text-[14px] font-light text-blue-400 tracking-wide uppercase">
            Fragments Of a Quiet Journey.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Post Meta */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-[11px] font-mono text-gray-400 uppercase">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="font-bricolage text-[20px] font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
