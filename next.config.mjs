/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/microplastics-and-mitochondria',
        destination: '/blog/microplastics-mitochondria',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
