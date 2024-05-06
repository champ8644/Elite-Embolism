/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

export default {
  reactStrictMode: true,
  assetPrefix: isProd ? '/Elite-Embolism/' : '',
  output: 'export', // <=== enables static exports
};
