import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname, "..", ".."),
  },
  serverExternalPackages: ["lightningcss"],
};

export default nextConfig;
