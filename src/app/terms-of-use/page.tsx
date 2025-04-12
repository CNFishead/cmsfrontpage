import axios from "../../../utils/axios";
import Legal from "@/views/legal/Legal.view";
export const metadata = {
  title: "Terms & Conditions — ShepherdCMS",
  description:
    "Read the terms and conditions for using ShepherdCMS. Understand your rights, responsibilities, and our commitments to your ministry’s data and security.",
  keywords: [
    "ShepherdCMS terms",
    "church software legal terms",
    "ShepherdCMS conditions of use",
    "ministry software agreement",
    "Christian software terms",
    "privacy and terms ShepherdCMS",
  ],
  robots: "index, follow",
};

export default async function Page() {
  // Fetch dynamic features from your backend
  const { data } = await axios({
    url: `/legal`,
    method: "GET",
    params: {
      filterOptions: "type;terms",
    },
    // Force the request to bypass Next.js caching
    headers: {
      "Cache-Control": "no-store",
    },
  });
  return <Legal content={data?.payload[0]} />;
}
