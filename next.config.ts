import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true,
    browserDebugInfoInTerminal: true,
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
      {
        source: '/cv',
        destination: 'https://dub.sh/bozzhik-cv',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
