 
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/Reeti05Agarwal.github.io",
  // assetPrefix: "/Reeti05Agarwal.github.io/",
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
}
 
export default nextConfig