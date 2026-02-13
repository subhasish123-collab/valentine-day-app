/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/valentine-day-app' : '',
  assetPrefix: isProd ? '/valentine-day-app' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
