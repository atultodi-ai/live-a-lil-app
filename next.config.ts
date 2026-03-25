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
  experimental: {
    // Enables server actions (used for form submissions in onboarding)
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;
