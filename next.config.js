/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless', // Optional for serverless deployment
  experimental: {
    appDir: true, // Enable experimental app directory if using
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
