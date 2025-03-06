export {metadata} from '@/lib/layout-config'
import {suisseIntl} from '@/lib/layout-config'
import '@/app/globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics as VercelAnalytics} from '@vercel/analytics/react'

import YandexMetrika from '#/Global/Analytics'
import Header from '#/Global/Header'
import Particles from '#/Global/Particles'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${suisseIntl.variable} antialiased bg-custom-black text-white`}>
        <Header />
        {children}
        <Particles className="fixed inset-0 h-screen overflow-hidden -z-10 opacity-70" />

        <>
          {process.env.NODE_ENV === 'production' && (
            <>
              <YandexMetrika />
              <VercelAnalytics />
            </>
          )}
          <SpeedInsights />
        </>
      </body>
    </html>
  )
}
