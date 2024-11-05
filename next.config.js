// next.config.js

module.exports = {
  reactStrictMode: true,

  images: {
    domains: ["media.graphassets.com"],
  },

  env: {
    MONGO_URI: process.env.MONGO_URI,
    MONGODB_DB: "autodb",
    DEV_URL: "http://localhost:3000",
    PROD_URL: "http://autolink.vercel.com",
  },

  webpack(config) {
    // Add SVG support
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Set fallback for 'fs' module if needed for client-side code
    config.resolve.fallback = { fs: false, ...config.resolve.fallback };

    return config;
  },
};
