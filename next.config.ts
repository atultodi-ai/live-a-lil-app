import type { NextConfig } from "next";

const storageHostname = process.env.STORAGE_PUBLIC_HOSTNAME;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      // Google profile pictures
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      // Cloudflare R2 / S3 — added at runtime when env var is set
      ...(storageHostname
        ? [{ protocol: "https" as const, hostname: storageHostname }]
        : []),
    ],
  },
  serverExternalPackages: ["@prisma/client", "prisma"],
  // Tell Next.js to include the Prisma query engine binary in serverless bundles
  outputFileTracingIncludes: {
    "/api/**": ["./src/generated/prisma/*.node"],
  },
};

export default nextConfig;
