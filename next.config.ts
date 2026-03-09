import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/MyPortfolio",
  assetPrefix: "/MyPortfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
