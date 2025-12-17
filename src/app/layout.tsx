import "@/app/globals.css";
import { JetBrains_Mono, Orbitron } from "next/font/google";
import Navbar from "@/components/Navbar";  
 




const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });


export const metadata = {
  title: "Reeti | Portfolio",
  description: "Tech-savvy hacker-style portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={`bg-transparent text-black font-mono relative min-h-screen ${jetbrains.className}`}>         
        {/* Cyberpunk Grid Background */}
        <div className="fixed inset-0 z-0 bg-black">
          {/* Animated grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Subtle scanlines for retro effect */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 255, 0.1) 2px,
                rgba(0, 255, 255, 0.1) 4px
              )`
            }}
          />
          
          {/* Your existing background image with better styling */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('images/Anime-Girl2.png')",
            }}
          />
        </div>
        
        <Navbar />
        {/* <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('images/Anime-Girl2.png')", 
            filter: "blur(10px)",  
            opacity: 0.8,        
          }}
        />   */}
        <div className="relative z-10 mt-8 mx-w-screen-xl mx-auto">
          {children}
        </div>

        <footer className="relative z-10 mt-8 text-center text-md terminal-glow-cyan py-7">
          <div className="glass-panel inline-block px-4 py-2 rounded border border-cyan-500/20">
            system: online | user: reeti | status: active
          </div>
        </footer>
      </body>
    </html>
  );
}

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`bg-black text-cyan-400 font-mono relative min-h-screen ${jetbrains.className}`}>
//         {/* Cyberpunk Grid Background */}
//         <div className="fixed inset-0 z-0 bg-black">
//           {/* Animated grid pattern */}
//           <div 
//             className="absolute inset-0 opacity-200"
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

//         <Navbar />
        
//         {/* Glassy main container */}
//         <div className="relative z-10 mt-8 max-w-6xl mx-auto ">
//           <div className="glass-panel rounded-xl border border-cyan-500/30 backdrop-blur-md">
//             {children}
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`bg-black text-cyan-400 font-mono relative min-h-screen ${jetbrains.className}`}>
//         {/* Cyberpunk UI Elements */}
//         <div className="scanline" />
        
//         {/* Corner brackets for cyberpunk feel */}
//         <div className="fixed top-4 left-4 z-30 text-cyan-400 text-xl opacity-50">
//           ┌┐
//         </div>
//         <div className="fixed top-4 right-4 z-30 text-cyan-400 text-xl opacity-50">
//           ┌┐
//         </div>
//         <div className="fixed bottom-4 left-4 z-30 text-cyan-400 text-xl opacity-50">
//           └┘
//         </div>
//         <div className="fixed bottom-4 right-4 z-30 text-cyan-400 text-xl opacity-50">
//           └┘
//         </div>

//         {/* Enhanced Background */}
//         <div className="fixed inset-0 z-0 bg-black">
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
          
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
//             style={{
//               backgroundImage: "url('images/Anime-Girl2.png')",
//             }}
//           />
//         </div>

//         <Navbar />
        
//         {/* Main content with glass effect */}
//         <main className="relative z-10 mt-8 max-w-6xl mx-auto px-6">
//           <div className="glass-panel rounded-xl border border-cyan-500/30 backdrop-blur-md p-8">
//             {children}
//           </div>
//         </main>

//         {/* Terminal-style footer */}
//         <footer className="relative z-10 mt-8 text-center text-sm text-cyan-600 py-4">
//           <div className="glass-panel inline-block px-4 py-2 rounded border border-cyan-500/20">
//             system: online | user: reeti | status: active
//           </div>
//         </footer>
//       </body>
//     </html>
//   );
// }