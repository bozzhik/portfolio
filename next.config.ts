import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true,
  },
  logging: {
    browserToTerminal: true,
  },
  images: {
    qualities: [70, 100],
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
