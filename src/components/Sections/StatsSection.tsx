'use client';

import { useState, useEffect } from 'react';
import { getCycledColor as getColorScheme } from '@/constants/ColorScheme';
import TryhackmeBadge from "@/components/Buttons/TryHackMeBadge";
import HackTheBoxBadge from "@/components/Buttons/HackTheBoxBadge";  

interface StatBoxProps {
  title: string;
  value: number;
  suffix?: string;
  index: number;
  icon: string;
  description: string;
}

function StatBox({ title, value, suffix = '', index, icon, description }: StatBoxProps) {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (count < value) {
      const timer = setTimeout(() => {
        setCount(prev => {
          const increment = Math.ceil(value / 50);
          return Math.min(prev + increment, value);
        });
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [count, value]);

  // Get color scheme by index
  const colors = getColorScheme(index);

  return (
    <div 
      className={`group relative rounded-xl p-6 transition-all duration-300 overflow-hidden
        ${colors.primary} 
        ${colors.glow}
        backdrop-blur-md
        border-2
        ${isHovered ? 'scale-[1.02]' : 'scale-100'}
      `}
      style={{
        background: 'radial-gradient(circle at top left, rgba(0,0,0,0.8) 0%, rgba(10,10,20,0.9) 100%)',
        boxShadow: isHovered 
          ? 'inset 0 0 20px rgba(255,255,255,0.05), 0 10px 40px rgba(0,0,0,0.5)'
          : 'inset 0 0 10px rgba(255,255,255,0.03), 0 5px 20px rgba(0,0,0,0.3)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced border with gradient */}
      <div className={`absolute inset-0 rounded-xl border-2 opacity-30 ${colors.primary.replace('border-', '')}`}></div>
      
      {/* Animated border gradient */}
      <div 
        className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          colors.primary.replace('border-', '')
        }`}
        style={{
          background: `linear-gradient(45deg, transparent 40%, ${colors.icon.replace('text-', '')}20 50%, transparent 60%)`,
          backgroundSize: '200% 200%',
          animation: isHovered ? 'shine 2s linear infinite' : 'none'
        }}
      ></div>

      {/* Corner decorations - Enhanced */}
      <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${colors.primary.replace('border-', 'border-t- border-l-')} rounded-tl-lg`}></div>
      <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${colors.primary.replace('border-', 'border-t- border-r-')} rounded-tr-lg`}></div>
      <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${colors.primary.replace('border-', 'border-b- border-l-')} rounded-bl-lg`}></div>
      <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${colors.primary.replace('border-', 'border-b- border-r-')} rounded-br-lg`}></div>

      {/* Corner glow dots */}
      <div className={`absolute top-2 left-2 w-1.5 h-1.5 rounded-full ${colors.icon} opacity-70`}></div>
      <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${colors.icon} opacity-70`}></div>
      <div className={`absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full ${colors.icon} opacity-70`}></div>
      <div className={`absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full ${colors.icon} opacity-70`}></div>

      {/* Content */}
      <div className="flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* <div className={`relative p-3 rounded-lg backdrop-blur-md border ${colors.accent}`}>
              <span className={`text-2xl ${colors.icon}`}>{icon}</span>
              
              <div className={`absolute inset-0 rounded-lg ${colors.icon} opacity-20 blur-sm`}></div>
            </div> */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-bold text-white font-mono tracking-wide">{title}</h3>
                <div className={`w-2 h-2 rounded-full ${colors.icon}`}></div>
              </div>
              <p className="text-xs text-gray-300 font-mono">{description}</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className={`h-px w-full mb-6 ${colors.primary.replace('border-', 'bg-')} opacity-30`}></div>
        
        {/* Animated Counter */}
        <div className="mt-auto">
          <div className="relative">
            <div className={`text-5xl font-bold font-mono text-center mb-2 ${colors.icon}`}>
              {count}
              <span className="text-3xl">{suffix}</span>
            </div>
            
            {/* Counter background effect */}
            <div className={`absolute inset-0 text-5xl font-bold font-mono text-center opacity-5 ${colors.icon} blur-sm`}>
              {value}{suffix}
            </div>
            
            {/* Progress bar */}
            <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mt-4">
              <div 
                className={`h-full ${colors.icon.replace('text-', 'bg-')} transition-all duration-1000 ease-out`}
                style={{ width: `${(count / value) * 100}%` }}
              ></div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${colors.icon.replace('text-', 'bg-')}`}></div>

      {/* Scan line effect */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ animation: isHovered ? 'scan 3s linear infinite' : 'none' }}
      ></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
        
        @keyframes shine {
          0% {
            background-position: -100% -100%;
          }
          100% {
            background-position: 200% 200%;
          }
        }
      `}</style>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      title: 'PROJECTS',
      value: 8,
      suffix: '+',
      icon: '💻',
      description: 'Completed projects'
    },
    {
      title: 'CTF',
      value: 6,
      suffix: '+',
      icon: '🏆',
      description: 'Participated events'
    },
    {
      title: 'EXPERIENCE',
      value: 1,
      suffix: '+',
      description: 'Years in cybersecurity',
      icon: '⚡'
    },
    {
      title: 'CERTIFICATIONS',
      value: 12,
      suffix: '+',
      icon: '📜',
      description: 'Professional certs'
    },
  ];

  return (
    <section className="relative py-16">
      {/* Enhanced background effects */}
      <div className="absolute -inset-10 rounded-3xl blur-3xl -z-20"></div>
    
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 border-2 border-cyan-500/40 rounded-full bg-black/70 backdrop-blur-md relative overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm font-bold tracking-wider">
              reeti@cybersec:~$ system_stats --verbose
            </span>
            <div className="w-2 h-4 bg-cyan-400 animate-blink"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-white font-mono tracking-wider relative">
            <span className="relative">
              SYSTEM STATISTICS
            </span>
          </h2>
          
          {/* <div className="max-w-3xl mx-auto">
            <p className="text-lg text-cyan-300/80 font-mono mb-2">
              [ QUANTITATIVE ANALYSIS OF ACHIEVEMENTS AND EXPERIENCE METRICS ]
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          </div> */}
        </div>

        <div className="flex flex-col items-center gap-8 mb-10">
          <div className="flex flex-wrap justify-center gap-8">
            <TryhackmeBadge />
            <HackTheBoxBadge />
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatBox key={index} index={index} {...stat} />
          ))}
        </div>

        
        
      </div>
      
      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
         
        
        /* Hover glow effect for all stat boxes */
        .group:hover .hover-glow {
          filter: drop-shadow(0 0 8px currentColor);
        }
      `}</style>
    </section>
  );
}