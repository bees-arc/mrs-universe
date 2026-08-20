import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maleka Morani - Musician & Singer | Mrs. Universe 2026",
  description: "Official website for Maleka Morani - Mrs. Universe 2026, registered nurse, advocate, and musician creating music for the in-between.",
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
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col font-sans text-gray-100 bg-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
