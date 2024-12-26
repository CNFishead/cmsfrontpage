import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/navbar/Navbar.layout";
import Footer from "@/layouts/footer/Footer.layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShepherdCMS",
  description: "ShepherdCMS, the online multi-tool for churches and ministries in the United States",
  keywords: [
    "ShepherdCMS",
    "Church",
    "Ministry",
    "United States",
    "Online Multi-Tool",
    "Church Management System",
    "Church Management Software",
    "Church Software",
    "Church Management",
    "Tools for pastors",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
