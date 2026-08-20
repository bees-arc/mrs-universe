"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "MY STORY", href: "/story" },
  { label: "MY MISSION", href: "/mission" },
  { label: "GALLERY", href: "/gallery" },
  { label: "SUPPORT MY JOURNEY", href: "/support" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo - Crown + MM MALEKA MORANI */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 text-white"
            >
              <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="currentColor" fillOpacity="0.2" />
              <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
              <path d="M5 20h14" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bricolage text-[16px] md:text-[18px] font-bold tracking-[3px] text-white uppercase leading-none">
              MALEKA MORANI
            </span>
            <span className="text-[9px] tracking-[4px] text-gray-400 font-medium uppercase mt-0.5">
              MRS. UNIVERSE 2026
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[12px] font-medium tracking-[2px] uppercase py-1 relative group transition-colors ${
                  isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Button: CONTACT */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="px-7 py-2.5 rounded-full border border-white/40 text-white text-[12px] font-medium tracking-[2px] uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 flex flex-col gap-5 animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] font-medium tracking-[2px] text-gray-300 hover:text-white uppercase py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-block text-center px-6 py-2.5 rounded-full border border-white/40 text-white text-[12px] font-medium tracking-[2px] uppercase hover:bg-white hover:text-black transition-all"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
