import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-white pt-16">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
        {/* Column 1: Logo & Social Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 pb-8 md:pb-0 md:border-r border-[#efe7e2] pr-0 md:pr-12">
          {/* Typographic Logo */}
          <div className="flex flex-col mb-8">
            <span className="font-serif text-[24px] font-bold text-charcoal tracking-[4px] uppercase leading-tight">
              Maleka Morani
            </span>
            <span className="font-sans text-[10px] text-terracotta font-bold tracking-[6px] uppercase mt-1">
              Mrs. Universe
            </span>
          </div>
          <ul className="flex flex-col gap-3 font-avenir-medium text-[13px] md:text-[14px] tracking-wider text-charcoal/80">
            <li>
              <a
                href="https://www.instagram.com/maleka_morani/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="#newsletter" className="hover:text-terracotta transition-colors">
                Newsletter Signup
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Instagram Feed Sneak Peek */}
        <div className="flex flex-col items-center text-center pb-8 md:pb-0 md:border-r border-[#efe7e2] pr-0 md:pr-12">
          <div className="inline-block bg-[#efe7e2] px-6 py-2 mb-6">
            <span className="font-avenir-medium text-[13px] uppercase tracking-[2px] text-charcoal">
              Sneak peek of my feed
            </span>
          </div>
          <a
            href="https://www.instagram.com/maleka_morani/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full aspect-[3/2] max-w-[360px] overflow-hidden group shadow-sm"
          >
            <Image
              src="/images/maleka-hero.png"
              alt="Maleka Instagram Feed Preview"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        </div>

        {/* Column 3: Site Menu Links */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <ul className="flex flex-col gap-4 font-avenir-medium text-[13px] md:text-[14px] tracking-wider text-charcoal/80">
            <li>
              <Link href="/" className="hover:text-terracotta transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#home-intro" className="hover:text-terracotta transition-colors">
                Meet Maleka
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-terracotta transition-colors">
                Healthcare Mission
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-terracotta transition-colors">
                Advocacy & Causes
              </Link>
            </li>
            <li>
              <Link href="#highlights" className="hover:text-terracotta transition-colors">
                Family & Legacy
              </Link>
            </li>
            <li>
              <Link href="#newsletter" className="hover:text-terracotta transition-colors">
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Credit Bar Section */}
      <div className="w-full bg-[#efe7e2] py-12 px-6 md:px-12 border-t border-terracotta/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Credits Text */}
          <div className="text-center md:text-left font-avenir-medium text-[12px] md:text-[13px] tracking-wider text-charcoal/70 leading-[1.8]">
            <p>Proudly created in South Africa:</p>
            <p>
              Design by{" "}
              <a
                href="http://chrystalace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-terracotta"
              >
                Chrystalace
              </a>
            </p>
            <p>
              Development by{" "}
              <a
                href="https://paperplanery.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-terracotta"
              >
                Paper Planery
              </a>
            </p>
            <p>
              Managed by{" "}
              <a
                href="https://www.kairosdigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-terracotta"
              >
                Kairos Digital
              </a>
            </p>
            <p className="mt-4">© 2026 Maleka Morani</p>
          </div>

          {/* Centered Logo/Emblem (Mrs. Universe Crown Motif) */}
          <div className="flex justify-center">
            <div className="relative w-[100px] h-[176px]">
              <Image
                src="/images/DEMI-WEBSITE-DRAFT-1_updated-13.png"
                alt="Mrs. Universe Crown Emblem"
                fill
                className="object-contain animate-pulse-slow"
              />
            </div>
          </div>

          {/* Social Icons Follow Bar */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com/maleka_morani/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Header top border line scaled at the bottom of the footer */}
      <div className="w-full relative h-[10px] md:h-[12px] overflow-hidden">
        <Image
          src="/images/demi-tebow-header-line-scaled.jpg"
          alt="terracotta line"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </footer>
  );
}
