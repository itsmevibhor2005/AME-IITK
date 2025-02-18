

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MuseoModerno, Roboto, Nunito, League_Spartan, Sanchez } from "next/font/google";

const museo = MuseoModerno({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });
const leaguespartan = League_Spartan({ subsets: ["latin"], weight: ["400", "700"] });
const sanchez = Sanchez({ subsets: ["latin"], weight: ["400"] });


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
  description: "Association of Mechanical Engineers, IIT Kanpur",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden sm:w-[100vw] w-[112vw]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${museo.className} ${roboto.className} ${nunito.className} ${leaguespartan.className} ${sanchez.className} antialiased bg-gradient-to-r from-[rgb(255,255,255)] to-[rgb(234,231,246)] sm:w-[100vw] w-[112vw] `}
      >
        {/* <BackgroundBeams/> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
