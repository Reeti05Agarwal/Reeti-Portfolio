// import "@/app/globals.css";
// import { JetBrains_Mono, Orbitron } from "next/font/google";
 
// const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"] });
// const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

// export const metadata = {
//   title: "Reeti | Portfolio",
//   description: "Tech-savvy hacker-style portfolio",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
      
//       <body className={`bg-transparent text-black font-mono relative min-h-screen ${jetbrains.className}`}>         
//         {/* Cyberpunk Grid Background */}
//         <div className="fixed inset-0 z-0 bg-black">
//           {/* Animated grid pattern */}
//           <div 
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: '50px 50px'
//             }}
//           />
          
//           {/* Subtle scanlines for retro effect */}
//           <div 
//             className="absolute inset-0 opacity-50"
//             style={{
//               backgroundImage: `repeating-linear-gradient(
//                 0deg,
//                 transparent,
//                 transparent 2px,
//                 rgba(0, 255, 255, 0.1) 2px,
//                 rgba(0, 255, 255, 0.1) 4px
//               )`
//             }}
//           />
          
//           {/* Your existing background image with better styling */}
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
//             style={{
//               backgroundImage: "url('images/Anime-Girl2.png')",
//             }}
//           />
//         </div>
        
        
//         <div className="relative z-10 mt-8 mx-auto px-4 sm:px-6 lg:px-8">
//           {children}
//         </div>

//         <footer className="relative z-10 mt-8 text-center text-md terminal-glow-cyan py-7">
//           <div className="glass-panel inline-block px-4 py-2 rounded border border-cyan-500/20">
//             system: online | user: reeti | status: active
//           </div>
//         </footer>
//       </body>
//     </html>
//   );
// }


import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google' 
import Navbar from "@/components/Navbar";  
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
// const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
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
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        {/* <CyberChatbot /> */}
        <Analytics />
      </body>
      <footer className="relative z-10 mt-8 text-center text-md terminal-glow-cyan py-7">
        <div className="glass-panel inline-block px-4 py-2 rounded border border-cyan-500/20">
          system: online | user: reeti | status: active
        </div>
      </footer>
    </html>
  )
}

