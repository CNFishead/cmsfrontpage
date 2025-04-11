import Home from "@/views/Homepage/Home.view";

export const metadata = {
  title: "ShepherdCMS — Simple, Powerful Church Management",
  description:
    "ShepherdCMS is a church management platform built by believers for ministries. Easily manage check-ins, events, volunteers, and more — all in one place.",
  keywords: [
    "church software",
    "ministry tools",
    "church check-in",
    "volunteer coordination",
    "Christian software",
    "ShepherdCMS",
    "church membership tracking",
    "online church tools",
  ],
  openGraph: {
    title: "ShepherdCMS — Empowering Ministries Through Technology",
    description:
      "Simplify your ministry with ShepherdCMS. Affordable, scalable church management for leaders who want to focus on people, not paperwork.",
    url: "https://shepherdcms.org",
    siteName: "ShepherdCMS",
    images: [
      {
        url: "https://shepherdcms.org/og-image.png", // Replace with actual social share image
        width: 1200,
        height: 630,
        alt: "ShepherdCMS preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShepherdCMS",
    description: "Simple, powerful tools to lead your church well. Built by believers, for believers.",
    images: ["https://shepherdcms.org/og-image.png"], // Replace with actual image
  },
  authors: [{ name: "Austin Howard", url: "https://shepherdcms.org" }],
  creator: "ShepherdCMS",
  themeColor: "#3c6255",
};

export default function Page() {
  return <Home />;
}
