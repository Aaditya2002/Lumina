import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SmoothScroll } from "@/components/smooth-scroll"
import { MouseFollower } from "@/components/mouse-follower"
import { PreLoader } from "@/components/pre-loader"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Lumina | Reimagined Streaming Experience",
  description: "Experience entertainment in a completely new way",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PreLoader />
          <SmoothScroll>
            <MouseFollower />
            {children}
            <Toaster />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
