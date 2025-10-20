import axios from "@/utils/axios";
import Legal from "@/views/legal/Legal.view";
import { Metadata } from "next";

// Force the page to revalidate on every request
export const revalidate = 0;

// Generate dynamic metadata based on the legal type
export async function generateMetadata({ params }: { params: Promise<{ legalType: string }> }): Promise<Metadata> {
  const { legalType } = await params;

  // Capitalize and format the legal type for display
  const formattedType = legalType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Default metadata structure that can be customized per legal type
  const metadataMap: Record<string, Metadata> = {
    privacy: {
      title: "Privacy Policy — ShepherdCMS",
      description:
        "Learn how ShepherdCMS protects your church's data. We are committed to transparency, security, and respecting the privacy of every ministry and member.",
      keywords: [
        "ShepherdCMS privacy policy",
        "church software privacy",
        "Christian software data security",
        "ShepherdCMS GDPR",
        "ministry data protection",
        "user data privacy ShepherdCMS",
      ],
    },
    terms: {
      title: "Terms of Service — ShepherdCMS",
      description:
        "Review ShepherdCMS terms of service. Understand your rights and responsibilities when using our church management software.",
      keywords: [
        "ShepherdCMS terms of service",
        "church software terms",
        "ministry software agreement",
        "ShepherdCMS legal terms",
      ],
    },
    cookie: {
      title: "Cookie Policy — ShepherdCMS",
      description:
        "Learn about how ShepherdCMS uses cookies to enhance your church management experience while respecting your privacy.",
      keywords: [
        "ShepherdCMS cookie policy",
        "church software cookies",
        "ministry software tracking",
        "website cookies policy",
      ],
    },
  };

  // Return specific metadata or fallback to generic
  return (
    metadataMap[legalType] || {
      title: `${formattedType} — ShepherdCMS`,
      description: `Read our ${formattedType.toLowerCase()} document for ShepherdCMS church management software.`,
      keywords: [`ShepherdCMS ${legalType}`, "church software legal", "ministry software documents"],
      robots: "index, follow",
    }
  );
}

interface PageProps {
  params: Promise<{
    legalType: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { legalType } = await params;

  // Fetch dynamic legal document based on the legalType parameter
  const { data } = await axios({
    url: `/auth/legal`,
    method: "GET",
    params: {
      filterOptions: `type;${legalType}`,
    },
    // Force the request to bypass Next.js caching
    headers: {
      "Cache-Control": "no-store",
    },
  });

  return <Legal content={data?.payload[0]} />;
}
