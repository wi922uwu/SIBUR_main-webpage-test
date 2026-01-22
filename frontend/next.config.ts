import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Настройка для обслуживания статических файлов из корня проекта
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "/../Images/:path*",
      },
    ];
  },
};

export default nextConfig;
