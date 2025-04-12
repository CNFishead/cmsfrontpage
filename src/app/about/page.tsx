import About from "@/views/about/About.view";

export const metadata = {
  title: "About Us — ShepherdCMS",
  description:
    "ShepherdCMS is a faith-driven church management platform created by Christians, for Christians. Learn about our mission, story, and commitment to supporting ministries around the world.",
  keywords: [
    "about ShepherdCMS",
    "Christian church software",
    "faith-driven software",
    "church management story",
    "ministry support platform",
    "Christian technology",
  ],
  openGraph: {
    title: "About ShepherdCMS",
    description:
      "Learn the story and mission behind ShepherdCMS — a platform built by believers to empower churches with tools that make ministry easier.",
    url: "https://shepherdcms.org/about",
    siteName: "ShepherdCMS",
    images: [
      {
        url: "https://shepherdcms.org/og-about.png", // Optional: unique OG image for about page
        width: 1200,
        height: 630,
        alt: "About ShepherdCMS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — ShepherdCMS",
    description:
      "Discover the mission, values, and team behind ShepherdCMS — a platform created to support ministry with purpose-driven technology.",
    images: ["https://shepherdcms.org/og-about.png"],
  },
  authors: [{ name: "Austin Howard", url: "https://shepherdcms.org" }],
  creator: "ShepherdCMS",
  themeColor: "#3c6255",
};

export default function Page() {
  return <About />;
}
