// src/components/sections/HeroBadges.tsx
import React from 'react';

export default function HeroBadges() {
  const badges = [
    { text: 'eJPT Certified', color: 'cyan' },
    { text: 'CTF Player', color: 'pink' },
    { text: 'Digital Forensics', color: 'cyan' },
    { text: 'AI Security', color: 'green' },
  ];
  const tagColors = {
    cyan: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:text-cyan-200",
    pink: "text-pink-300 border-pink-400/30 bg-pink-400/10 hover:bg-pink-400/20 hover:border-pink-400/50 hover:text-pink-200",
    yellow: "text-yellow-300 border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/20 hover:border-yellow-400/50 hover:text-yellow-200",
    green: "text-green-300 border-green-400/30 bg-green-400/10 hover:bg-green-400/20 hover:border-green-400/50 hover:text-green-200",
    purple: "text-purple-300 border-purple-400/30 bg-purple-400/10 hover:bg-purple-400/20 hover:border-purple-400/50 hover:text-purple-200",
    blue: "text-blue-300 border-blue-400/30 bg-blue-400/10 hover:bg-blue-400/20 hover:border-blue-400/50 hover:text-blue-200"
  };

  return (
    <div className="flex flex-wrap gap-2 pt-4">
      {badges.map((badge, tagIndex) => (
        <span
          key={tagIndex}
          className={`text-sm px-3 py-1.5 rounded-full border backdrop-blur-sm transition-all duration-200 ${
            tagColors[badge.color as keyof typeof tagColors] || tagColors.cyan
          }`}
        >
          {badge.text}
        </span>
      ))}
    </div>
  );
}