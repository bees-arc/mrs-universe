import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - Demi-Leigh Tebow",
  description: "It’s an honor to “meet” you. This website is a place dedicated to encouraging, inspiring and speaking life into anyone who visits. My hope is that through sharing my heart, passion and latest projects, you can find your own inspiration as well!",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans text-charcoal bg-white">
        {children}
      </body>
    </html>
  );
}
