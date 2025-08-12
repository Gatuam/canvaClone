/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable telemetry to remove the telemetry warning
  telemetry: false,
  
  // Basic Next.js configuration
  reactStrictMode: true,
  swcMinify: true,
  
  // Image configuration (if you're using next/image)
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  
  // Webpack configuration (if needed)
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add any custom webpack configurations here
    // Make sure to use import statements at the top of the file instead of require()
    
    // Example: Adding a custom rule
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  
  // Environment variables (if needed)
  env: {
    // Add your environment variables here
  },
  
  // Headers configuration (if needed)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Redirects configuration (if needed)
  async redirects() {
    return [
      // Add your redirects here
    ];
  },
  
  // Rewrites configuration (if needed)
  async rewrites() {
    return [
      // Add your rewrites here
    ];
  },
};

export default nextConfig;