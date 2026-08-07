"use client";

import React, { useState } from "react";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="w-full bg-[#eaded8]/60 py-16 px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Get inspired text */}
        <div className="bg-white/80 backdrop-blur-sm px-6 py-2 mb-6 shadow-sm border border-white">
          <p className="font-serif text-[18px] md:text-[20px] font-bold text-charcoal uppercase tracking-[3px] text-center">
            Get inspired.
          </p>
        </div>

        {/* Description */}
        <p className="text-center font-avenir-medium text-[14px] md:text-[16px] text-[#58585a] leading-[1.8] tracking-[1px] mb-8">
          Sign up for my newsletter and receive encouraging words, lifestyle content, business-minded tips, and a first look at my latest projects right in your inbox.
        </p>

        {/* Mailchimp form action */}
        <form
          action="https://demitebow.us1.list-manage.com/subscribe/post?u=e58aaa29fe2ddb35cabe1ec09&id=553e738707&f_id=0015cce4f0"
          method="POST"
          target="_blank"
          className="w-full flex flex-col gap-4"
        >
          {/* Name Field */}
          <div className="w-full">
            <input
              type="text"
              name="FNAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="NAME"
              className="w-full h-[50px] border-[3px] border-white bg-[#efe7e2] px-4 font-avenir-medium text-[14px] tracking-wider text-charcoal focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="w-full">
            <input
              type="email"
              name="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL ADDRESS"
              required
              className="w-full h-[50px] border-[3px] border-white bg-[#efe7e2] px-4 font-avenir-medium text-[14px] tracking-wider text-charcoal focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>

          {/* Anti-spam field for Mailchimp */}
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input
              type="text"
              name="b_e58aaa29fe2ddb35cabe1ec09_553e738707"
              tabIndex={-1}
              value=""
              readOnly
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[50px] bg-[#d9c6be] text-charcoal hover:bg-terracotta hover:text-white transition-colors duration-300 font-avenir-medium font-bold text-[16px] md:text-[18px] uppercase tracking-[2px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
