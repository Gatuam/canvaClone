/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      mongoose: require.resolve('mongoose'),
    };
    return config;
  },
  experimental: {
    esmExternals: false,
  },
};

export default nextConfig;
