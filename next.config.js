/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'graodeprata.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dl.dropboxusercontent.com',
        pathname: '/**',
      },
    ],
  },
};
