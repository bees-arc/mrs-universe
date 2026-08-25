"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-10 flex flex-col gap-12">
        {/* Page Banner Header */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#c9a87a]">
              GET IN TOUCH
            </span>
            <h1 className="font-bricolage text-[40px] sm:text-[60px] md:text-[72px] font-extrabold tracking-tight uppercase leading-none">
              Contact &amp; Inquiries
            </h1>
            <p className="max-w-2xl text-[16px] text-gray-300 font-light leading-relaxed">
              Reach out for speaking engagements, media inquiries, sponsorship opportunities, or simply to say hello.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <section className="px-6 md:px-16 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-bricolage text-[28px] font-bold text-white uppercase">
                Let&apos;s Connect
              </h2>
              <p className="text-[14px] text-gray-300 font-light leading-relaxed">
                Whether you represent an organization, a media outlet, or a fellow advocate, Maleka Morani looks forward to collaborating.
              </p>
              
              <div className="flex flex-col gap-4 pt-2 text-[14px] text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-[#c9a87a] font-bold">Email:</span>
                  <span>contact@malekamorani.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#c9a87a] font-bold">Role:</span>
                  <span>Mrs. Universe 2026 Candidate &amp; Registered Nurse</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#c9a87a] font-bold">Location:</span>
                  <span>International / Global Advocacy</span>
                </div>
              </div>
            </div>

            {/* Right Message Input Form */}
            <div className="lg:col-span-7 bg-white/5 border border-white/15 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold tracking-[2px] uppercase text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-[13px] focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold tracking-[2px] uppercase text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-[13px] focus:outline-none focus:border-white/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold tracking-[2px] uppercase text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sponsorship / Speaking / General Inquiry"
                    className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-[13px] focus:outline-none focus:border-white/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold tracking-[2px] uppercase text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-[13px] focus:outline-none focus:border-white/50"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-fit px-8 py-3.5 rounded-full bg-white text-black font-semibold text-[12px] tracking-[2px] uppercase hover:bg-gray-200 transition-all shadow-md"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterForm />
      </main>

      <Footer />
    </div>
  );
}
