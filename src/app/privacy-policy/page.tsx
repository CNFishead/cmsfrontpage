import axios from "../../../utils/axios";
import Legal from "@/views/legal/Legal.view";

export const metadata = {
  title: "Privacy Policy — ShepherdCMS",
  description:
    "Learn how ShepherdCMS protects your church’s data. We are committed to transparency, security, and respecting the privacy of every ministry and member.",
  keywords: [
    "ShepherdCMS privacy policy",
    "church software privacy",
    "Christian software data security",
    "ShepherdCMS GDPR",
    "ministry data protection",
    "user data privacy ShepherdCMS",
  ],
  robots: "index, follow",
};

export default async function Page() {
  // Fetch dynamic features from your backend
  const { data } = await axios({
    url: `/legal`,
    method: "GET",
    params: {
      filterOptions: "type;privacy",
    },
    // Force the request to bypass Next.js caching
    headers: {
      "Cache-Control": "no-store",
    },
  });
  return <Legal content={data?.payload[0]} />;
}
