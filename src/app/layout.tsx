import type { Metadata } from 'next';
import { Inter, Playfair_Display, Oswald } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

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
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${oswald.variable} font-sans`}>
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
