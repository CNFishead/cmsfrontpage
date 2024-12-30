import axios from "../../../utils/axios";
import Legal from "@/views/legal/Legal.view";

export default async function Page() {
  // Fetch dynamic features from your backend
  const { data } = await axios({
    url: `/legal`,
    method: "GET",
    params: {
      filterOptions: 'type;privacy',
    },
    // Force the request to bypass Next.js caching
    headers: {
      "Cache-Control": "no-store",
    },
  });
  return <Legal content={data?.payload[0]} />;
}
