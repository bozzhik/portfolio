import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*/snable',
        destination: 'https://snable.website',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
