"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface EventItem {
  date: string;
  month: string;
  title: string;
  location: string;
  href: string;
}

const events: EventItem[] = [
  {
    date: "12",
    month: "AUG",
    title: "The Quiet Room",
    location: "Jakarta, ID",
    href: "#newsletter",
  },
  {
    date: "25",
    month: "AUG",
    title: "Midnight Air Showcase",
    location: "Yogyakarta, ID",
    href: "#newsletter",
  },
  {
    date: "07",
    month: "SEP",
    title: "Before the Light – Live",
    location: "Bandung, ID",
    href: "#newsletter",
  },
  {
    date: "18",
    month: "SEP",
    title: "Echo Sessions Live",
    location: "Surabaya, ID",
    href: "#newsletter",
  },
];

export default function UpcomingShowsSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative w-full aspect-[6/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
        >
          <Image
            src="/images/maleka-crowning.png"
            alt="Upcoming Shows - Maleka Morani"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Right Column: Events List */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bricolage text-[36px] sm:text-[44px] font-extrabold tracking-tight uppercase">
              Upcoming Shows
            </h2>
            <p className="text-[14px] font-light text-blue-400 tracking-wide uppercase">
              See You Somewhere in Between.
            </p>
          </div>

          {/* Event Items */}
          <div className="flex flex-col border-t border-white/10">
            {events.map((evt, idx) => (
              <div
                key={idx}
                className="py-5 border-b border-white/10 flex items-center justify-between gap-4 group hover:bg-white/5 px-3 rounded-lg transition-colors"
              >
                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center bg-white/10 border border-white/15 rounded-xl w-14 h-14 flex-shrink-0 text-center">
                  <span className="font-bricolage text-[16px] font-bold leading-none text-white">
                    {evt.date}
                  </span>
                  <span className="text-[9px] font-mono text-gray-400 mt-0.5">
                    {evt.month}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex flex-col flex-grow">
                  <h4 className="font-bricolage text-[18px] font-bold text-white group-hover:text-blue-400 transition-colors">
                    {evt.title}
                  </h4>
                  <span className="text-[12px] text-gray-400 tracking-wider uppercase">
                    {evt.location}
                  </span>
                </div>

                {/* Arrow Action */}
                <Link
                  href={evt.href}
                  className="flex items-center gap-2 text-[12px] font-medium tracking-[1.5px] uppercase text-white hover:text-blue-400 transition-colors"
                >
                  <span className="hidden sm:inline">Get Tickets</span>
                  <svg
                    className="w-4 h-4 fill-current transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 448 512"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
