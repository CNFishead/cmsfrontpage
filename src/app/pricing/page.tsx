import Pricing from "@/views/pricing/Pricing.view";
import axios from "../../../utils/axios";

export default async function Page() {
  // Fetch dynamic features from your backend
  const { data } = await axios({
    url: `/feature`,
    method: "GET",
    params: {
      filterOptions: 'isInactive;false|reliesOn;{"$exists":false}',
    },
    // Force the request to bypass Next.js caching
    headers: {
      "Cache-Control": "no-store",
    },
  });

  return <Pricing features={data.payload} />;
}
