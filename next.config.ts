import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/Reeti05Agarwal.github.io", // Uncomment if deploying to GitHub Pages
  // assetPrefix: "/Reeti05Agarwal.github.io/", // Uncomment if deploying to GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    // Warning: This allows production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  // Add trailing slash for better compatibility
  trailingSlash: true,
}

export default nextConfig