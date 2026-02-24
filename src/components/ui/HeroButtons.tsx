// src/components/sections/HeroActionButtons.tsx
import React from 'react';
import SocialMediaButtons from "@/components/Buttons/SocialMediaButtons";  


export default function HeroActionButtons() {
  return (
    <div className="flex flex-wrap gap-3 pt-6 items-center">
      <div className="flex gap-5">
        {/* <a 
          href="#contact" 
          className=" px-5 py-2.5 rounded-lg bg-[#6BC031] border border-green-400/30 text-green-400 hover:text-red-300 transition-colors font-mono font-bold text-xs sm:text-sm hover:shadow-[0_0_15px_rgba(219,39,119,0.3)] flex items-center gap-2"
        >
          
          <p className='text-black text-bold'>Get In Touch</p> 
        </a> */}
        <a
  href="#contact"
  className="group relative px-6 py-3 rounded-lg 
             bg-[#6BC031] text-black 
             font-mono font-semibold text-xs sm:text-sm 
             flex items-center gap-2
             transition-all duration-300
             hover:-translate-y-1
             hover:shadow-[0_0_25px_rgba(107,192,49,0.6)]
             border border-[#6BC031]/40"
>
  <span className="text-black relative z-10">Get In Touch</span>

  {/* Glow Layer */}
  <span className="absolute inset-0 rounded-lg bg-[#6BC031]/20 blur-md opacity-0 group-hover:opacity-100 transition duration-300"></span>
</a>
        <a 
          href="/resume.pdf" // Update with your actual resume path
          target="_blank"
          rel="noopener noreferrer"
            className="group relative px-6 py-3 rounded-lg 
             bg-[#6BC031] text-black 
             font-mono font-semibold text-xs sm:text-sm 
             flex items-center gap-2
             transition-all duration-300
             hover:-translate-y-1
             hover:shadow-[0_0_25px_rgba(107,192,49,0.6)]
             border border-[#6BC031]/40"
        > 
          <p className='text-black text-bold'>Resume</p>
        </a>
      </div>
      
      <div className="flex items-center gap-2 pl-2 border-l border-white/10">
        <SocialMediaButtons />
      </div>
    </div>
  );
}