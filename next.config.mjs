import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable telemetry
  telemetry: false,
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Images configuration
  images: {
    domains: ["images.unsplash.com"],
  },
  
  // Force Node.js runtime everywhere
  experimental: {
    runtime: 'nodejs',
    serverComponentsExternalPackages: ['mongoose'],
  },
  
  // Webpack configuration to fix mongoose issues
  webpack: (config, { isServer }) => {
    // Fix mongoose imports
    config.resolve.alias = {
      ...config.resolve.alias,
      mongoose: require.resolve('mongoose'),
    };
    
    // Ensure mongoose uses Node.js version, not browser version
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('mongoose');
    }
    
    // Prevent webpack from trying to bundle Node.js modules for the client
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        mongoose: false,
        'mongoose/dist/browser.umd.js': false,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        util: false,
        os: false,
        buffer: false,
        events: false,
        path: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;