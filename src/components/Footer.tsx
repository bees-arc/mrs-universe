import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-white pt-16">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
        {/* Column 1: Logo & Social Text Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 pb-8 md:pb-0 md:border-r border-[#efe7e2] pr-0 md:pr-12">
          <div className="relative w-[180px] h-[106px] mb-8">
            <Image
              src="/images/DEMI-WEBSITE-DRAFT-1_updated-14.png"
              alt="Demi-Leigh Tebow Emblem"
              fill
              className="object-contain"
            />
          </div>
          <ul className="flex flex-col gap-3 font-avenir-medium text-[13px] md:text-[14px] tracking-wider text-charcoal/80">
            <li>
              <a
                href="https://www.instagram.com/demitebow/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/demi-leigh-tebow-0b6773208"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/demitebow"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/demitebow?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCs4utn1pQpn8Y5MLVcF0e0Q"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@demitebow?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors"
              >
                TikTok
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
            href="https://www.instagram.com/demitebow/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full aspect-[3/2] max-w-[360px] overflow-hidden group shadow-sm"
          >
            <Image
              src="/images/Demi-feed.jpg"
              alt="Demi Instagram Feed Preview"
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
              <Link href="/about-me/" className="hover:text-terracotta transition-colors">
                Meet Demi
              </Link>
            </li>
            <li>
              <Link href="/services/" className="hover:text-terracotta transition-colors">
                Partner With Me
              </Link>
            </li>
            <li>
              <Link href="/philanthropy/" className="hover:text-terracotta transition-colors">
                Advocate
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-terracotta transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about-me/#portfolio" className="hover:text-terracotta transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/get-in-touch/" className="hover:text-terracotta transition-colors">
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
            <p className="mt-4">© 2026 Demi-Leigh Tebow</p>
          </div>

          {/* Centered Logo/Emblem */}
          <div className="flex justify-center">
            <div className="relative w-[100px] h-[176px]">
              <Image
                src="/images/DEMI-WEBSITE-DRAFT-1_updated-13.png"
                alt="Demi-Leigh Tebow Crown Emblem"
                fill
                className="object-contain animate-pulse-slow"
              />
            </div>
          </div>

          {/* Social Icons Follow Bar */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com/demitebow/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="Instagram"
            >
              <i className="fab fa-instagram text-[18px]"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/demi-leigh-tebow-0b6773208"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-[18px]"></i>
            </a>
            <a
              href="https://facebook.com/demitebow"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="Facebook"
            >
              <i className="fab fa-facebook-f text-[18px]"></i>
            </a>
            <a
              href="https://twitter.com/demitebow?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="Twitter"
            >
              <i className="fab fa-twitter text-[18px]"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCs4utn1pQpn8Y5MLVcF0e0Q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="Youtube"
            >
              <i className="fab fa-youtube text-[18px]"></i>
            </a>
            <a
              href="https://www.tiktok.com/@demitebow?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-terracotta/40 bg-white/80 hover:bg-terracotta hover:border-terracotta flex items-center justify-center text-charcoal hover:text-white transition-colors duration-200"
              title="TikTok"
            >
              <i className="fab fa-tiktok text-[18px]"></i>
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
