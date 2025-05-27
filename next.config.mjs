/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-1736606355698-5efdb410fe93',
      },
    ],
  },
};

export default nextConfig;
