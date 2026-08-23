"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "MY STORY", href: "/story" },
    { name: "MY MISSION", href: "/mission" },
    { name: "GALLERY", href: "/gallery" },
    { name: "JOURNAL", href: "/journal" },
    { name: "SUPPORT", href: "/support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Header Title */}
        <Link href="/" className="flex flex-col group">
          <span className="font-monda text-[20px] font-bold tracking-[4px] uppercase text-white group-hover:text-sky-400 transition-colors">
            MALEKA MORANI
          </span>
          <span className="text-[9px] font-mono tracking-[2.5px] uppercase text-gray-400 -mt-1">
            MRS. UNIVERSE 2026
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] font-semibold tracking-[2px] uppercase transition-colors hover:text-sky-400 ${
                  isActive ? "text-sky-400 font-bold border-b border-sky-400 pb-0.5" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Contact Pill Action Button */}
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-black font-semibold text-[11px] tracking-[2px] uppercase transition-all shadow-md ml-2"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            ) : (
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[12px] font-semibold tracking-[2px] uppercase text-gray-300 hover:text-sky-400 transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-[11px] tracking-[2px] uppercase text-center mt-2 shadow-md"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
