"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Meet Demi", href: "/about-me/" },
  {
    label: "Books",
    href: "#",
    dropdown: [
      { label: "A Crown That Lasts", href: "https://demitebow.com/a-crown-that-lasts/" },
      { label: "Princess Paris Finds Her Purpose", href: "https://demitebow.com/paris/" },
      { label: "Knowing Who You Are Devotional", href: "https://demitebow.com/devo" },
    ],
  },
  { label: "Unbreakable", href: "/unbreakable/" },
  {
    label: "Partner with me",
    href: "/services/",
    dropdown: [
      { label: "Speaker", href: "/services/#speaker" },
      { label: "Entrepreneur", href: "/services/#entrepreneur" },
      { label: "Social Influencer", href: "/services/#influencer" },
      { label: "Purposeful People Partner", href: "/purposeful-people/#purposefulpeoplebrandpartner" },
      { label: "Modeling", href: "/services/#modeling" },
      { label: "Gallery", href: "/services/#gallery" },
    ],
  },
  {
    label: "Philanthropy",
    href: "/philanthropy/",
    dropdown: [
      { label: "Demi's Story", href: "/philanthropy/#demisstory" },
      { label: "Join the fight", href: "/philanthropy/#jointhefight" },
    ],
  },
  { label: "Resources", href: "/resources/" },
  {
    label: "Blog",
    href: "/blog/",
    dropdown: [
      { label: "All", href: "/blog/" },
      { label: "Beauty and Style", href: "/category/beauty-style/" },
      { label: "Ministry", href: "/category/ministry/" },
      { label: "Business-minded", href: "/category/business-minded/" },
      { label: "Health and Wellness", href: "/category/health-wellness/" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio/",
    dropdown: [
      { label: "Portfolio Reel", href: "/portfolio/#reel" },
      { label: "Magazine Covers", href: "/portfolio/#covers" },
      { label: "Featured Online", href: "/portfolio/#online" },
      { label: "Media Features", href: "/portfolio/#news" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="relative w-full z-50 flex flex-col">
      {/* Top Border Line Image */}
      <div className="w-full relative h-[10px] md:h-[12px] overflow-hidden">
        <Image
          src="/images/demi-tebow-header-line-scaled.jpg"
          alt="terracotta line"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </div>

      {/* Main Header Container */}
      <div className="w-full bg-[#efe7e2] flex flex-col items-center pt-6 pb-2 px-4">
        {/* Brand Logo */}
        <div className="mb-4 relative w-[300px] h-[35px] md:w-[480px] md:h-[50px] lg:w-[600px] lg:h-[63px]">
          <Link href="/">
            <Image
              src="/images/logo-demi-tebow.png"
              alt="Demi-Leigh Tebow Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-center bg-white/70 backdrop-blur-sm border border-terracotta/20 rounded-full px-6 py-2 shadow-sm max-w-6xl w-auto">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative group py-2"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="font-avenir-medium uppercase text-[12px] md:text-[13px] tracking-widest text-[#58585a] hover:text-terracotta transition-colors duration-200"
                >
                  {item.label}
                  {item.dropdown && (
                    <span className="ml-1 text-[8px] inline-block align-middle transform group-hover:rotate-180 transition-transform duration-200">
                      ▼
                    </span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-white border border-terracotta/30 shadow-lg rounded-md py-2 z-50 flex flex-col animate-fadeIn">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="block px-5 py-2 text-[12px] font-avenir-medium tracking-wider text-charcoal hover:bg-[#efe7e2] hover:text-terracotta transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden w-full flex justify-end px-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-terracotta hover:text-terracotta-dark p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav className="lg:hidden w-full bg-white border-b border-terracotta/20 animate-fadeIn z-40">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-[#efe7e2] last:border-0">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex justify-between items-center px-6 py-3 font-avenir-medium uppercase text-[12px] tracking-wider text-charcoal hover:text-terracotta"
                    >
                      <span>{item.label}</span>
                      <span>{activeDropdown === item.label ? "▲" : "▼"}</span>
                    </button>
                    {activeDropdown === item.label && (
                      <ul className="bg-[#efe7e2]/40 py-2 border-t border-terracotta/10">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-10 py-2 text-[12px] tracking-wider text-charcoal hover:text-terracotta"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-3 font-avenir-medium uppercase text-[12px] tracking-wider text-charcoal hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Divider line under navbar */}
      <div className="w-full relative h-[10px] overflow-hidden">
        <Image
          src="/images/demi-tebow-header-line-scaled-1.jpg"
          alt="terracotta line"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </header>
  );
}
