/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "khubaib-backend.abdullahrazzaki.com",
      },
    ],
  },
};

module.exports = withVideos(nextConfig);
