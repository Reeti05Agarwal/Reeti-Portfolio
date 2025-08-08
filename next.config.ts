import type { NextConfig } from "next";

const nextConfig = {  // ✅ No explicit type needed
  output: "export",
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  }, 
};

export default nextConfig;
