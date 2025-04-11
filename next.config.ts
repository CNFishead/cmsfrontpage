import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    ENCRYPTION_KEY: process.env.NEXT_PUBLIC_ENCRYPTION_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**/*",
      }, // Include all images from res.cloudinary.com
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**/*",
      },
    ],
  },
};

export default nextConfig;
