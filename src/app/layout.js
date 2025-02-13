

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AME IITK",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden sm:w-[100vw] w-[112vw]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[rgb(255,255,255)] to-[rgb(234,231,246)] sm:w-[100vw] w-[112vw] `}
      >
        {/* <BackgroundBeams/> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
