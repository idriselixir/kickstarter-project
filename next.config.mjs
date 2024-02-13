/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "ksr-ugc.imgix.net", // Replace with your actual domain
          },
          {
            protocol: "http",
            hostname: "localhost", // For local development
          },
        ],}
};

export default nextConfig;
