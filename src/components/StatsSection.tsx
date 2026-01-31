'use client';

import { useState, useEffect } from 'react';
import { getColorScheme } from '@/constants/ColorScheme'; // Adjust the import path

interface StatBoxProps {
  title: string;
  value: number;
  suffix?: string;
  index: number; // Add index prop
  icon: string;
  description: string;
}

function StatBox({ title, value, suffix = '', index, icon, description }: StatBoxProps) {
  const [count, setCount] = useState(0);
  
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

  // Get color scheme by index from your centralized system
  const colors = getColorScheme(index);

  return (
    <div className={`group relative bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 ${colors.primary} ${colors.glow}`}>
      {/* Corner decorations */}
      <div className={`absolute top-2 left-2 w-2 h-2 border-l border-t ${colors.primary.replace('border-', 'border-l- border-t-')} rounded-tl`}></div>
      <div className={`absolute top-2 right-2 w-2 h-2 border-r border-t ${colors.primary.replace('border-', 'border-r- border-t-')} rounded-tr`}></div>
      <div className={`absolute bottom-2 left-2 w-2 h-2 border-l border-b ${colors.primary.replace('border-', 'border-l- border-b-')} rounded-bl`}></div>
      <div className={`absolute bottom-2 right-2 w-2 h-2 border-r border-b ${colors.primary.replace('border-', 'border-r- border-b-')} rounded-br`}></div>
      
      {/* Content */}
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${colors.accent} backdrop-blur-sm`}>
              <span className={`text-xl ${colors.icon}`}>{icon}</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">{title}</h3>
              <p className="text-xs text-white/60 font-mono">{description}</p>
            </div>
          </div>
        </div>
        
        {/* Animated Counter */}
        <div className="mt-auto">
          <div className="text-center mb-2">
            <span className={`text-4xl font-bold font-mono ${colors.icon}`}>
              {count}
              {suffix}
            </span>
          </div>
        </div>
      </div>
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
      title: 'CTF COMPETITIONS',
      value: 15,
      suffix: '+',
      icon: '🏆',
      description: 'Participated events'
    },
    {
      title: 'EXPERIENCE',
      value: 6,
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
    {
      title: 'HACKATHONS',
      value: 10,
      suffix: '+',
      icon: '🚀',
      description: 'Security competitions'
    },
  ];

  return (
    <section className="relative py-12">
      {/* Background effects */}
      <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl blur-3xl -z-10"></div>
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 border border-cyan-500/30 rounded-full bg-black/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm">reeti@cybersec:~$ system_stats</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white font-mono tracking-wider mb-4 cyber-glow">
            ░▒▓ SYSTEM STATISTICS ▓▒░
          </h2>
          <p className="text-cyan-400/70 font-mono max-w-2xl mx-auto">
            [ QUANTITATIVE ANALYSIS OF ACHIEVEMENTS AND EXPERIENCE METRICS ]
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatBox key={index} index={index} {...stat} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-cyan-400 font-mono">DATA_ANALYSIS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-xs text-pink-400 font-mono">METRICS_SYNC</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-400 font-mono">REALTIME_UPDATE</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400 font-mono">ALL_SYSTEMS_NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .cyber-glow {
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.5),
                      0 0 20px rgba(34, 211, 238, 0.3),
                      0 0 30px rgba(34, 211, 238, 0.1);
        }
      `}</style>
    </section>
  );
}