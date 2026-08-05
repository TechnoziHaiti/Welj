import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  serverExternalPackages: ["lightningcss", "@tailwindcss/node", "@tailwindcss/postcss"],
};

export default nextConfig;
