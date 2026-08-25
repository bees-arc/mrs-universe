"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 border-t border-white/10 text-white relative">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#2e1f0e]/40 via-black/80 to-[#2e1f0e]/40 border border-white/15 rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
        {/* Text Details */}
        <div className="flex flex-col gap-3 max-w-md text-left">
          <h2 className="font-bricolage text-[32px] sm:text-[42px] font-extrabold tracking-tight uppercase leading-tight">
            Stay Close to The Sound.
          </h2>
          <p className="text-[14px] sm:text-[15px] font-light text-gray-300 leading-relaxed">
            Get occasional updates, new releases, and quiet moments shared along the way.
          </p>
        </div>

        {/* Input Form */}
        <div className="w-full max-w-md">
          {submitted ? (
            <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-center text-white text-[14px] font-medium animate-fadeIn">
              Thank you for subscribing! We&apos;ll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email, if youâ€™d like to stay"
                className="w-full px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-[13px] focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 px-8 py-3.5 rounded-full bg-white text-black text-[12px] font-medium tracking-[2px] uppercase hover:bg-gray-200 transition-all shadow-md"
              >
                Stay Connected
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
