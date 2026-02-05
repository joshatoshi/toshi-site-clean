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
      <body>{children}</body>
    </html>
  )
}
