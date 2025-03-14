/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Ensures static export for Apache
  basePath: "/ame", // Ensures the correct subpath
  assetPrefix: "/ame", // Makes sure assets load properly
  images: {
    unoptimized: true, // Required for static exports in Next.js
  },
};

export default nextConfig;
