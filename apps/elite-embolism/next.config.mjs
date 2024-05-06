/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

export default {
  reactStrictMode: true,
  assetPrefix: isProd ? '/Neuro-Resident/' : '',
  output: 'export', // <=== enables static exports
};
