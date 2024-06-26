/** @type {import('next').NextConfig} */
const nextConfig = {reactStrictMode: false,
    async rewrites() {
      return [
        {
          source: "/openApi/:path*",
          destination: "http://127.0.0.1:8080/:path*",
        },
      ];
    },};

export default nextConfig;
