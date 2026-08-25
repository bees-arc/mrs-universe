import type { Metadata, Viewport } from "next";
import { Onest, Bricolage_Grotesque, Monda } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const monda = Monda({
  subsets: ["latin"],
  variable: "--font-monda",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maleka Morani - Mrs. Universe 2026",
  description: "Official website for Maleka Morani - Mrs. Universe 2026, registered nurse, advocate, and musician creating music for the in-between.",
  icons: {
    icon: "/Layer_1.png",
    shortcut: "/Layer_1.png",
    apple: "/Layer_1.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${onest.variable} ${bricolage.variable} ${monda.variable} h-full antialiased dark`}>
      <body suppressHydrationWarning className={`${onest.className} min-h-full flex flex-col font-sans text-gray-100 bg-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
