/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['tailwindui.com','images.unsplash.com','raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '*',
      },
    ],
  },
}

module.exports = nextConfig
