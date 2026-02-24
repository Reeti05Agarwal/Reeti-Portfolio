// src/components/sections/HeroProfilePicture.tsx
import React from 'react';
import Image from 'next/image';

export default function HeroProfilePicture() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Glow Ring */}
      {/* <div className="absolute w-[340px] h-[340px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div> */}
      
      {/* Cyberpunk Frame */}
      <div className="relative w-80 h-80">
        {/* Frame Border */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 overflow-hidden">
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-full border-[1px] border-magenta-400/20"></div>
          <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-cyan-500/10 via-transparent to-magenta-500/10 blur-sm"></div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-magenta-400/50 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-magenta-400/50 rounded-br-2xl"></div>
          
          {/* Scan line effect */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan rounded-full"></div>
        </div>

        {/* Profile Picture Container */}
        <div className="absolute inset-4 rounded-full overflow-hidden border border-cyan-400/10 backdrop-blur-sm">
          {/* Fallback placeholder */}
          <div className="w-full h-full flex items-center justify-center relative group">
            <div className="text-6xl font-bold text-cyan-400/70 font-mono">
              RA
            </div>
            
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Data stream effect */}
            <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Actual Image */}
          <Image 
            src="/images/Profile/profile.png" 
            alt="Reeti Agarwal"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating Security Badges */}
        {/* <div className="absolute -top-2 -right-2 w-16 h-16 bg-black/80 border border-green-400/70 rounded-lg p-2 backdrop-blur-sm rotate-12">
          <div className="text-center">
            <div className="text-green-400 text-xl">⚡</div>
            <span className="text-[10px] text-green-300 font-mono">eJPT</span>
          </div>
        </div>
        
        <div className="absolute -bottom-2 -left-2 w-14 h-16 bg-black/80 border border-green-400/70 rounded-lg p-2 backdrop-blur-sm -rotate-6">
          <div className="text-center">
            <div className="text-green-400 text-lg">🛡️</div>
            <span className="text-[9px] text-green-300 font-mono">CTF</span>
          </div>
        </div> */}

        {/* Status Indicator */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2 bg-black/70 px-3 py-1 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] text-green-400 font-mono">ACTIVE</span>
          </div>
        </div>
      </div>
 
    </div>
  );
}
 