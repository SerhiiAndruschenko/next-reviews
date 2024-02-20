import { Inter } from "next/font/google";
import NavBar from "@/src/components/NavBar";
import { exo2, orbitron, gentium, medievalSharp } from "./fonts";
import "./globals.css";
import "@/public/styles/header.scss";
import "@/public/styles/footer.scss";
import "@/public/styles/reviews.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { ThemeProvider } from "../components/theme-provider";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Bookworm Haven - Uncover Literary Treasures with Insightful Reviews",
    template: "%s | Bookworm Haven",
  },
  keywords:'bookworm, haven, uncover, literary, treasures, insightful, reviews',
  description:
    "Welcome to Bookworm Haven, the premier destination for literature lovers seeking to unlock the magic of storytelling. Our expert team of avid readers delivers insightful book reviews, celebrating a wide spectrum of authors from the well-established to the promising newcomers. At Bookworm Haven, our mission is to guide you, the dedicated bibliophile or casual reader, towards your next enthralling read. Explore thoughtful and honest reviews across diverse genres, as we aim to be your first choice for discovering literary masterpieces. Embark with us on a journey through the captivating world of books, and let Bookworm Haven be your trusted guide in the vast universe of literature. Discover your next page-turner with us!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${exo2.variable} ${gentium.variable} ${medievalSharp.variable}`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6358243501215789"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-">
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="px-4 py-3 mx-auto">
            <NavBar />
          </header>
          <main className="grow px-4 py-14">{children}</main>
          <footer className="px-4 py-3 text-center text-xs">
            All Rights Reserved. © 2024
          </footer>
        </ThemeProvider>
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-GGW9EBJQSW" />
    </html>
  );
}
