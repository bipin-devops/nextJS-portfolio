/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
