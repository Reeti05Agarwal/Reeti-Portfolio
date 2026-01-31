"use client";

import React from "react"; 

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/', emoji: '' },
    // { name: 'About', href: '/about', emoji: '' },
    { name: 'Projects', href: '/projects', emoji: ''},
    { name: 'Blogs', href: '/blogs', emoji: ''},
    { name: 'CTF & Writeups', href: '/ctf', emoji: ''},
    { name: 'Experience', href: '/experience', emoji: ''},
    { name: 'Resume', href: '/resume', emoji: ''},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.05)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with glitch effect */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative overflow-hidden">
              {/* Glitch layers */}
              <div className="text-cyan-400 font-bold text-xl font-mono tracking-wider relative z-10">
                reeti@cyber
              </div>
              <div className="absolute top-0 left-0 text-magenta-400 font-bold text-xl font-mono tracking-wider opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-300">
                reeti@cyber
              </div>
              <div className="absolute top-0 left-0 text-cyan-300 font-bold text-xl font-mono tracking-wider opacity-0 group-hover:opacity-50 group-hover:-translate-x-[1px] transition-all duration-200">
                reeti@cyber
              </div>
              
              {/* Scanning light */}
              <div className="absolute -inset-x-4 top-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1s_linear]"></div>
            </div>
            
            {/* Terminal cursor with data stream effect */}
            <div className="relative flex items-center">
              <span className="text-magenta-400">$</span>
              <div className="relative ml-1">
                <span className="text-cyan-300 animate-pulse">▊</span>
                <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400 to-magenta-400 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Navigation with cyberpunk hover effects */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-3 py-2 overflow-hidden"
              >
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,rgba(0,255,255,0.03)_1px)] bg-[size:20px_20px]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_1px,rgba(0,255,255,0.03)_1px)] bg-[size:20px_20px]"></div>
                </div>
                
                {/* Hover border animation */}
                <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 transition-all duration-500 rounded">
                  <div className="absolute -top-[2px] -left-[2px] w-[10px] h-[2px] bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-[cornerGlow_2s_ease-in-out_infinite]"></div>
                  <div className="absolute -top-[2px] -right-[2px] w-[10px] h-[2px] bg-magenta-400 opacity-0 group-hover:opacity-100 group-hover:animate-[cornerGlow_2s_ease-in-out_infinite_0.5s]"></div>
                  <div className="absolute -bottom-[2px] -left-[2px] w-[10px] h-[2px] bg-magenta-400 opacity-0 group-hover:opacity-100 group-hover:animate-[cornerGlow_2s_ease-in-out_infinite_1s]"></div>
                  <div className="absolute -bottom-[2px] -right-[2px] w-[10px] h-[2px] bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-[cornerGlow_2s_ease-in-out_infinite_1.5s]"></div>
                </div>
                
                {/* Neon glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-magenta-500/0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 rounded blur-sm"></div>
                
                {/* Content container */}
                <div className="relative flex items-center gap-2">
                  {/* Icon with binary effect */}
                  <div className="relative">
                    <span className="text-cyan-300 text-sm group-hover:text-cyan-400 transition-colors duration-300">
                      {item.emoji}
                    </span>
                    <div className="absolute -inset-2 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_1.5s_ease-in-out_infinite] blur-md"></div>
                  </div>
                  
                  {/* Text with glitch effect */}
                  <div className="relative overflow-hidden">
                    <span className="text-gray-300 text-sm font-mono tracking-wider group-hover:text-cyan-300 transition-all duration-300 inline-block">
                      {item.name}
                    </span>
                    
                    
                    {/* Binary stream effect */}
                    <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[stream_0.8s_linear]"></div>
                  </div>
                  
                  {/* Connection indicator */}
                  <div className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee] transition-all duration-300"></div>
                </div>
                
                {/* Data particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-[1px] h-[1px] bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[dataParticle_1.5s_ease-out]"
                      style={{
                        left: `${20 + i * 30}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Mobile menu button with cyberpunk style */}
          <button className="md:hidden p-2 rounded-md border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300 group">
            <div className="space-y-1.5 relative">
              <div className="w-6 h-[2px] bg-cyan-400 group-hover:bg-cyan-300 group-hover:shadow-[0_0_4px_#22d3ee] transition-all duration-300"></div>
              <div className="w-6 h-[2px] bg-magenta-400 group-hover:bg-magenta-300 group-hover:shadow-[0_0_4px_#e879f9] transition-all duration-300"></div>
              <div className="w-6 h-[2px] bg-cyan-400 group-hover:bg-cyan-300 group-hover:shadow-[0_0_4px_#22d3ee] transition-all duration-300"></div>
              {/* Hover effect */}
              <div className="absolute inset-0 rounded bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-magenta-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>

         
      </div>

     
      <style jsx>{`
        @keyframes scanline {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes cornerGlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes stream {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes dataParticle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
}