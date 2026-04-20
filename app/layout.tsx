import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "HealthHacks 2025 | Florida's Largest Health Innovation Hackathon",
  description:
    "Join 200+ innovators at HealthHacks, Florida's premier health-focused hackathon. Build solutions for healthcare challenges in 24 hours at USF.",
  generator: "v0.app",
  icons: {
    icon: "/healthhacks-icon.png",
    shortcut: "/healthhacks-icon.png",
    apple: "/healthhacks-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${workSans.variable} ${openSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
