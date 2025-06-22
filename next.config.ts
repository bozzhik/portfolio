import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
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
        destination: '/cv-maxim-bozhik.pdf',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
