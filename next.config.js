/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      };
      return config;
    },
    // env: {
    //   GOOGLE_ID: process.env.GOOGLE_ID,
    //   GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    //   MONGODB_URI: process.env.MONGODB_URI,
    //   NEXTAUTH: process.env.NEXTAUTH,
    //   NEXTAUTH_INTERVAL: process.env.NEXTAUTH_INTERVAL,
    //   NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    // },
  };
  
  module.exports = nextConfig;
  