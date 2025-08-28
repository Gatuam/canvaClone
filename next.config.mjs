/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "ik.imagekit.io", 'www.flaticon.com'],
  },
   eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
