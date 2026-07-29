import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-project-name.vercel.app"),
  // metadataBase: new URL("https://philadelphiaplumbingservices.com"),

  title: {
    default: "Philadelphia Plumbing Services",
    template: "%s | Philadelphia Plumbing Services",
  },

  description:
    "Professional residential and commercial plumbing services throughout Philadelphia, including drain cleaning, water heaters, water service replacement, leak repairs, and emergency plumbing service.",

  applicationName: "Philadelphia Plumbing Services",

  keywords: [
    "Philadelphia plumber",
    "plumbing services Philadelphia",
    "drain cleaning Philadelphia",
    "water heater repair Philadelphia",
    "water service replacement Philadelphia",
    "commercial plumber Philadelphia",
    "residential plumber Philadelphia",
  ],

  category: "Plumbing",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
