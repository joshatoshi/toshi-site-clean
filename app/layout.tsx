import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Joshatoshi.com",
  description: "Personal website of Josh - Builder, researcher, and blockchain advocate since 2010",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images for faster initial load */}
        <link
          rel="preload"
          href="/images/glasses.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/background.png"
          as="image"
          type="image/png"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
