import Pricing from "@/views/pricing/Pricing.view";
import axios from "@/utils/axios";

export const metadata = {
  title: "Pricing — ShepherdCMS",
  description:
    "Flexible, transparent pricing for churches of all sizes. ShepherdCMS lets you choose the features that fit your ministry’s needs and budget.",
  keywords: [
    "ShepherdCMS pricing",
    "church software cost",
    "Christian software pricing",
    "ministry tools subscription",
    "church management software plans",
  ],
  openGraph: {
    title: "Flexible Pricing for Your Ministry | ShepherdCMS",
    description:
      "Choose only the features your church needs. ShepherdCMS offers scalable pricing with no hidden fees — just powerful tools for effective ministry.",
    url: "https://shepherdcms.org/pricing",
    siteName: "ShepherdCMS",
    images: [
      {
        url: "https://shepherdcms.org/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "ShepherdCMS Pricing Plans",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — ShepherdCMS",
    description:
      "Simple, scalable pricing built for your church. Start with what you need and grow without paying for what you don’t.",
    images: ["https://shepherdcms.org/og-pricing.png"],
  },
  creator: "ShepherdCMS",
  themeColor: "#3c6255",
};

export default async function Page() {
  // Fetch dynamic features from your backend
  const { data } = await axios({
    url: `/auth/plan`,
    method: "GET",
    params: {
      filterOptions: 'isActive;true|price;{"$ne":"0"}',
    },
    // Force the request to bypass Next.js caching
    headers: {
      "Cache-Control": "no-store",
    },
  });

  return <Pricing plans={data.payload} />;
}
