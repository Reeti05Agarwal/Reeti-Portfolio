// src/components/sections/HeroActionButtons.tsx
import React from 'react';
import SocialMediaButtons from "@/components/Buttons/SocialMediaButtons";  


export default function HeroActionButtons() {
  return (
    <div className="flex flex-wrap gap-3 pt-6 items-center">
      <div className="flex gap-5">
        <a 
          href="#contact" 
          className="cyber-card px-5 py-2.5 rounded-lg text-white text-bold transition-colors font-mono text-xs sm:text-sm hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-2"
        >
          Get In Touch
        </a>
        <a 
          href="/resume.pdf" // Update with your actual resume path
          target="_blank"
          rel="noopener noreferrer"
          className=" px-5 py-2.5 rounded-lg bg-gradient-to-b from-red-500/20 to-red-600/30 border border-red-400/30 text-red-400 hover:text-red-300 transition-colors font-mono font-bold text-xs sm:text-sm hover:shadow-[0_0_15px_rgba(219,39,119,0.3)] flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className='text-white text-bold'>Resume</p>
        </a>
      </div>
      
      <div className="flex items-center gap-2 pl-2 border-l border-white/10">
        <SocialMediaButtons />
      </div>
    </div>
  );
}