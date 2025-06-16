export {metadata} from '@/lib/layout-config'
import {sfProDisplay} from '@/lib/layout-config'
import '@/app/globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics as VercelAnalytics} from '@vercel/analytics/react'
import YandexMetrika from '~/Global/Analytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sfProDisplay.variable} antialiased`}>
        {children}

        {process.env.NODE_ENV === 'production' && (
          <>
            <SpeedInsights />
            <VercelAnalytics />
            <YandexMetrika />
          </>
        )}
      </body>
    </html>
  )
}
