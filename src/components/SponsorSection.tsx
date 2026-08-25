"use client";

import { motion } from "framer-motion";

const sponsors = [
  {
    id: "gofundme",
    platform: "GoFundMe",
    label: "Support the Journey",
    description:
      "Every donation brings Maleka one step closer to the Mrs. Universe stage. Your generosity makes this dream possible.",
    url: "https://gofund.me/2fa635535",
    cta: "Donate on GoFundMe",
    accentFrom: "#00b966",
    accentTo: "#00d97e",
    badgeText: "FUNDRAISER",
  },
  {
    id: "venmo",
    platform: "Venmo",
    label: "Send via Venmo",
    description:
      "Quick and easy support via Venmo. Every bit counts — scan the QR code or tap the link below.",
    url: "https://venmo.com/u/Maleka-Morani",
    cta: "Open Venmo",
    accentFrom: "#c9a87a",
    accentTo: "#e2c9a0",
    badgeText: "SUPPORT",
  },
];

export default function SponsorSection() {
  return (
    <section className="w-full bg-[#050505] py-24 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#c9a87a]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#c9a87a]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-bold tracking-[3px] uppercase text-[#c9a87a]"
          >
            SUPPORT THE DREAM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-onest text-[36px] sm:text-[52px] font-extrabold tracking-tight uppercase leading-none text-white"
          >
            Sponsor Maleka
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-[15px] sm:text-[17px] font-light max-w-xl leading-relaxed"
          >
            Your support fuels her journey to the Mrs. Universe stage. Scan a
            QR code or tap a link to contribute.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {sponsors.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500"
            >
              {/* Badge */}
              <span
                className="absolute top-5 right-5 text-[10px] font-bold tracking-[2px] px-3 py-1 rounded-full border"
                style={{
                  color: s.accentFrom,
                  borderColor: s.accentFrom + "55",
                  background: s.accentFrom + "15",
                }}
              >
                {s.badgeText}
              </span>

              {/* Platform label */}
              <div className="flex items-center gap-2" style={{ color: s.accentFrom }}>
                <span className="text-[13px] font-bold tracking-[2px] uppercase">
                  {s.platform}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center gap-2 text-center flex-1 justify-center">
                <h3 className="text-white text-[18px] font-bold">{s.label}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed max-w-xs">
                  {s.description}
                </p>
              </div>

              {/* CTA Link */}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full text-center py-3 rounded-full font-bold text-[13px] tracking-[2px] uppercase text-black transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${s.accentFrom}, ${s.accentTo})`,
                }}
              >
                {s.cta} ↗
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 text-[12px] tracking-wide text-center"
        >
          All contributions go directly toward Maleka&apos;s Mrs. Universe journey — travel, training, and representation. 💜
        </motion.p>
      </div>
    </section>
  );
}

