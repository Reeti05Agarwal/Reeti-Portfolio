// layout.tsx - FIXED VERSION
import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google' 
import Navbar from "@/components/Navbar";  
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Reeti | Cybersecurity & Dev Portfolio',
  description: 'Aspiring cybersecurity professional with expertise in CTF, digital forensics, and full-stack development',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        <div className="cyber-grid" />
        <Navbar /> 
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        
        {/* FOOTER MOVED INSIDE BODY */}
        <footer className="relative z-10 mt-8 text-center text-md terminal-glow-cyan py-7">
          <div className="glass-panel inline-block px-4 py-2 rounded border border-cyan-500/20">
            system: online | user: reeti | status: active
          </div>
        </footer>
        
        <Analytics />
      </body>
    </html>
  )
}