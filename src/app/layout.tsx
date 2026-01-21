import type { Metadata } from 'next';
import { Inter, Playfair_Display, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
  title: "St. Ignatius College School",
  description: "Empowering minds and inspiring futures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = [
    inter.variable,
    playfair.variable,
    oswald.variable,
    'font-sans'
  ].join(' ');

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontClasses} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
