import { Inter } from "next/font/google";
import NavBar from "@/src/components/NavBar";
import { exo2, orbitron, gentium } from "./fonts";
import "./globals.css";
import "@/public/styles/header.scss";
import "@/public/styles/footer.scss";
import '@/public/styles/reviews.scss';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Bookworm Haven',
    template: '%s | Bookworm Haven'
  },
  description: 'Only the best books, reviewed for you'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable} ${gentium.variable}` }>
      <body className="flex flex-col min-h-screen bg-">
        <Analytics />
        <header className="px-4 py-3 mx-auto">
          <NavBar/>
        </header>
        <main className="grow px-4 py-14">{children}</main>
        <footer className="px-4 py-3 text-center text-xs">
          All Rights Reserved. © 2024
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
