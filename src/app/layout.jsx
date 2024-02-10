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

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Bookworm Haven - Uncover Literary Treasures with Insightful Reviews",
    template: "%s | Bookworm Haven",
  },
  description:
    "Welcome to Bookworm Haven, where the magic of literature comes alive through our passionate team of avid readers. Dive into a world of insightful and comprehensive book reviews, as we celebrate the rich tapestry of both established and emerging authors. Our mission is to be your go-to destination for thoughtful and honest reviews, guiding bibliophiles and casual readers alike to discover the next captivating page-turner. Join us on a journey through the diverse realm of literature, and let Bookworm Haven be your trusted companion in exploring the endless possibilities of storytelling.",
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
    </html>
  );
}
