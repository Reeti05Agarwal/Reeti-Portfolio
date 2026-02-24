// src/components/sections/HeroLeftContent.tsx
import React from 'react';
import HeroBadges from './HeroBadge';
import HeroActionButtons from './HeroButtons';

export default function HeroLeftContent() {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-green-400 font-mono text-bold text-sm sm:text-base">$ whoami</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
          Reeti Agarwal
        </h1>
        <p className="text-lg sm:text-xl text-cyan-400 font-mono">
          Cybersecurity Professional
        </p>
      </div>
      
      {/* Description */}
      <p className="text-foreground/80 text-base leading-relaxed w-full">
        Passionate about cybersecurity, digital forensics, and building secure applications. 
        CTF player and continuous learner exploring the intersection of security and development.
      </p>

      {/* Badges */}
      <HeroBadges />
      
      {/* Action Buttons */}
      <HeroActionButtons />
    </div>
  );
}